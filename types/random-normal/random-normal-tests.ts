import randomNormal = require('random-normal');

// No options specified
randomNormal(); // $ExpectType number

// All options specified
randomNormal({ mean: 5, dev: 7 }); // $ExpectType number

// Partial options specified
randomNormal({ dev: 7 }); // $ExpectType number
randomNormal({ mean: 5 }); // $ExpectType number
