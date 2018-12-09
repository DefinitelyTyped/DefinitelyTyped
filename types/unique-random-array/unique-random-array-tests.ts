import uniqueRandomArray = require('unique-random-array');

// $ExpectType () => number
uniqueRandomArray([1, 2, 3, 4]);
// $ExpectType () => string | number
uniqueRandomArray(["1", 2, 3, 4]);
