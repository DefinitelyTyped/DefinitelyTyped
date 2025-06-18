import md5 = require("blueimp-md5");

md5("hello world"); // $ExpectType string
md5("value", "key"); // $ExpectType string
md5("value", null, true); // $ExpectType string
md5("value", "key", true); // $ExpectType string
