import assert = require('nanoassert');

assert(true); // $ExpectType void
try {
    assert(false, 'error'); // $ExpectType void
} catch (e) {
    if (e instanceof Error && e.name === 'AssertionError') {
    }
}
assert('yes'); // $ExpectType void
assert(0, 'error'); // $ExpectType void

// @ts-expect-error
assert(true, 1);

// @ts-expect-error
assert(true, false);
