import isNumberLike = require('is-number-like');

isNumberLike('2'); // $ExpectType boolean
isNumberLike('a'); // $ExpectType boolean
