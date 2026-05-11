import unquote = require("unquote");

unquote("\"hello, world\""); // $ExpectType string
unquote("'hello, world'"); // $ExpectType string
unquote("hello, world"); // $ExpectType string
