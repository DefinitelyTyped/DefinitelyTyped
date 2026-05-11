import truncate = require("truncate-utf8-bytes");

truncate("foo", 123); // $ExpectType string
