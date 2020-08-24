import randomNumber = require('random-number-csprng');

randomNumber(1, 10); // $ExpectType Promise<number>
randomNumber(1, 10, () => {}); // $ExpectType Promise<number>
