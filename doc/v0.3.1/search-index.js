var searchIndex = {};
searchIndex["postgres_binary_copy"] = {"doc":"Support for binary-format `COPY` query execution with rust-postgres.","items":[[3,"BinaryCopyReader","postgres_binary_copy","A `ReadWithInfo` implementation that generates binary-formatted output\nfor use with `COPY ... FROM STDIN (FORMAT binary)` statements.",null,null],[3,"BinaryCopyWriter","","A `ReadWithInfo` implementation that processes binary-formatted input\nfor use with `COPY ... TO STDOUT (FORMAT binary)` statements.",null,null],[8,"StreamingIterator","","Like `Iterator`, except that it returns borrowed values.",null,null],[16,"Item","","The type of elements being iterated.",0,null],[10,"next","","Advances the iterator and returns the next value.",0,null],[8,"WriteValue","","A trait for types that can receive values from a `BinaryCopyWriter`.",null,null],[10,"write_value","","Processes a SQL value.",1,null],[10,"write_null_value","","Processes a `NULL` SQL value.",1,null],[11,"fmt","","",2,null],[11,"new","","Creates a new `BinaryCopyReader`.",2,null],[11,"read_with_info","","",2,null],[11,"fmt","","",3,null],[11,"new","","Creates a new `BinaryCopyWriter`.",3,{"inputs":[{"name":"w"}],"output":{"name":"binarycopywriter"}}],[11,"write_with_info","","",3,null]],"paths":[[8,"StreamingIterator"],[8,"WriteValue"],[3,"BinaryCopyReader"],[3,"BinaryCopyWriter"]]};
initSearch(searchIndex);