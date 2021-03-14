import last = require('last-element');

// $ExpectType string
const latestVersion = last(['1.0.0', '2.0.0']);

// $ExpectType number[]
const lastElement = last([[3, 234], [41, 1]]);

// $ExpectError
last(3);

// $ExpectError
last<number>(['string']);
