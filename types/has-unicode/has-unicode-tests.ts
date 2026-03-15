import hasUnicode = require("has-unicode");

// $ExpectType boolean
hasUnicode();

// @ts-expect-error - does not accept arguments
hasUnicode("test");
