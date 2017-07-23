# postgres-binary-copy
[![CircleCI](https://circleci.com/gh/sfackler/rust-postgres-binary-copy.svg?style=shield)](https://circleci.com/gh/sfackler/rust-postgres-binary-copy) [![Latest Version](https://img.shields.io/crates/v/postgres-binary-copy.svg)](https://crates.io/crates/postgres-binary-copy)

Support for binary-format `COPY` query execution with
[rust-postgres](https://github.com/sfackler/rust-postgres).

[Documentation](https://docs.rs/postgres-binary-copy)

## Example

```rust
extern crate postgres;
extern crate postgres_binary_copy;

use postgres::{Connection, TlsMode};
use postgres::types::{Type, ToSql};
use postgres_binary_copy::BinaryCopyReader;

fn main() {
    let conn = Connection::connect("postgres://postgres@localhost",
                                   TlsMode::None).unwrap();

    conn.execute("CREATE TABLE foo (id INT PRIMARY KEY, bar VARCHAR)", &[])
        .unwrap();

    let types = &[Type::Int4, Type::Varchar];
    let data: Vec<Box<ToSql>> = vec![Box::new(1i32), Box::new("hello"),
                                     Box::new(2i32), Box::new("world")];
    let data = data.iter().map(|v| &**v);
    let mut reader = BinaryCopyReader::new(types, data);

    let stmt = conn.prepare("COPY foo (id, bar) FROM STDIN (FORMAT binary)").unwrap();
    stmt.copy_in(&[], &mut reader).unwrap();
}
```
