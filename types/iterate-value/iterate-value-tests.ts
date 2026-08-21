import iterateValue = require("iterate-value");

declare const ITERABLE: Iterable<number>;

// $ExpectType number[]
iterateValue(ITERABLE);

// $ExpectType void
iterateValue(ITERABLE, (value) => {
    value; // $ExpectType number
});
