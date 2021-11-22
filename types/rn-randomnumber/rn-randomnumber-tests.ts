import random = require('rn-randomnumber');

random(-100, 25); // $ExpectType number

random(8); // $ExpectError

random('1', '2'); // $ExpectError
