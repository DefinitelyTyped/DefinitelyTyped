import assert = require("nanoassert");

assert(true);
assert(false, "error");
assert("yes");
assert(0, "error");

// @ts-expect-error
assert(true, 1);

// @ts-expect-error
assert(true, false);
