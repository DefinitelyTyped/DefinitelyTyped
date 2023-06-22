import rangeExclusive = require('range-exclusive');

rangeExclusive(10); // $ExpectType number[]
rangeExclusive(3, 9); // $ExpectType number[]
rangeExclusive(3, 9, 3); // $ExpectType number[]
