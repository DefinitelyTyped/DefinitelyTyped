import arraystat = require('arraystat');

const stat = arraystat([1, 2, 3, 4, 5]);
stat.q1; // $ExpectType number
stat.q3; // $ExpectType number
