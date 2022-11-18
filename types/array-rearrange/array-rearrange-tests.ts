import reorder = require('array-rearrange');

reorder([9, 8, 7, 6], [3, 2, 1, 0]); // $ExpectType number[]
reorder(['a', 'b'], [2, 1]); // $ExpectType string[]
reorder(['a', 'b'], [2, 1], 2); // $ExpectType string[]
