import rangeInclusive = require('range-inclusive');

rangeInclusive(10); // $ExpectType number[]
rangeInclusive(3, 9); // $ExpectType number[]
rangeInclusive(3, 9, 3); // $ExpectType number[]
