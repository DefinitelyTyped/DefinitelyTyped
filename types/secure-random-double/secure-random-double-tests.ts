import secureRandomDouble = require('secure-random-double');

secureRandomDouble(); // $ExpectType number

secureRandomDouble.POINTS; // $ExpectType 4503599627370496n
secureRandomDouble.BASE; // $ExpectType 10000000000000000000000000000000000000000000000000000n
secureRandomDouble.DISTANCE; // $ExpectType 2220446049250313080847263336181640625n
