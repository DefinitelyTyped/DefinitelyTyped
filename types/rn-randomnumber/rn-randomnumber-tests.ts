import random = require('rn-randomnumber');

random(-100, 25); // $ExpectType number

random(8); // $ExpectType number

random('1', '2'); // $ExpectError
