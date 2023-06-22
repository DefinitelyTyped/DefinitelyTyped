import jaro = require('wink-jaro-distance');

const result = jaro('abcdef', 'fedcba');
result.distance; // $ExpectType number
result.similarity; // $ExpectType number
