import validate = require("sourcemap-validator");

validate("foo"); // $ExpectType void
validate("foo", "bar"); // $ExpectType void
validate("foo", "bar", { "foo.js": "bar" }); // $ExpectType void
