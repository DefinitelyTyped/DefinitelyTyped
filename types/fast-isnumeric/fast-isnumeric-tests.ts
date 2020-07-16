import isNumeric = require('fast-isnumeric');

// tslint:disable-next-line: no-construct
isNumeric(new String('1')); // $ExpectType boolean
isNumeric(1); // $ExpectType boolean
isNumeric('1'); // $ExpectType boolean
