import assert = require("nanoassert");

assert(true);
assert(false, "error");
assert("yes");
assert(0, "error");

// $ExpectError
assert(true, 1);

// $ExpectError
assert(true, false);
