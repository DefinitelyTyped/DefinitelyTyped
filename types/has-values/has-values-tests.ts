import has = require("has-values");

function tests() {
    has(['a']); // => true
    has([[], []]); // => false

    has(true); // => true
    has(false); // => false

    has(new Error()); // => false
    has(new Error('foo')); // => true

    has(new Map()); // => false
    has(new Map([['foo', 'bar']])); // true

    has(null); // => true

    has(new Set()); // => false
    has(new Set(['foo', 'bar'])); // => true
}
