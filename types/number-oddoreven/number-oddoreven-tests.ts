import isOddOrEven = require('number-oddoreven');

isOddOrEven(1000); // $ExpectType true
isOddOrEven('123'); // $ExpectType true
isOddOrEven('asd'); // $ExpectType true
