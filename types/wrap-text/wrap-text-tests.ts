import wrapText = require("wrap-text");

wrapText("foo"); // $ExpectType string
wrapText("foo", 20); // $ExpectType string
