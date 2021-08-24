import parse = require('parse-numeric-range');

// $ExpectType number[]
parse('');

// $ExpectType number[]
parse('The cake is a lie.');

// $ExpectType number[]
parse('4');

// $ExpectType number[]
parse('1..3');

// $ExpectType number[]
parse('5-16,18,20');

// $ExpectType number[]
parse('5\u202516');
