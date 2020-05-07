import assert = require("minimalistic-assert");

assert(true);
assert(false, "error");
assert("yes");
assert(0, "error");

assert.equal(1, 1);
assert.equal(2, 1, "error");
assert.equal("ok", "ok");
