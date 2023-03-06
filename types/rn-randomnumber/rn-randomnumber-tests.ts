import random = require('rn-randomnumber');

random(-100, 25); // $ExpectType number

random(); // $ExpectType number

// @ts-expect-error
random(8);

// @ts-expect-error
random('1', '2');
