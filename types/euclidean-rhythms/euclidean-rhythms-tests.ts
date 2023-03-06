import euclideanRhythms = require('euclidean-rhythms');

// $ExpectType number[]
euclideanRhythms.getPattern(2, 3);

// $ExpectType number[]
euclideanRhythms.getPattern(0, 0);

// $ExpectType number[]
euclideanRhythms.getPattern(3, 2);
