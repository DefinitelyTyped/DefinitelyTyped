import union = require('arr-union');

// $ExpectType string[]
union(['a'], ['b', 'c'], ['d', 'e', 'f']);

// $ExpectType number[]
union([1, 1], [2, 3]);
