import iterateIterator = require("iterate-iterator");

declare const ITERATOR: Iterator<number>;

// $ExpectType number[]
iterateIterator(ITERATOR);

// $ExpectType void
iterateIterator(ITERATOR, (value) => {
    value; // $ExpectType number
});
