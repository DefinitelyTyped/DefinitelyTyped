import secureRandom = require('secure-random-uniform');
import secureRandomBigint = require('secure-random-uniform/bigint');

secureRandom(1); // $ExpectType number
secureRandomBigint(1n); // $ExpectType bigint
