import isArraySorted = require('is-array-sorted');

// $ExpectType boolean
isArraySorted([1, 2, 3]);
// $ExpectType boolean
isArraySorted(['a', 'b', 'c'], (a, b) => a.localeCompare(b));
