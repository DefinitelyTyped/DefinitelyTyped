import jsStringEscape = require("js-string-escape");

jsStringEscape("hello world");

jsStringEscape(null); // $ExpectType string
jsStringEscape(undefined); // $ExpectType string
jsStringEscape(false); // $ExpectType string
jsStringEscape(0.0); // $ExpectType string
jsStringEscape({}); // $ExpectType string
jsStringEscape(""); // $ExpectType string
