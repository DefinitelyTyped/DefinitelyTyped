import isInteger = require("is-integer");

// $ExpectType boolean
isInteger("hello");

// $ExpectType boolean
isInteger(4);

// $ExpectType boolean
isInteger(4.0);

// $ExpectType boolean
isInteger(4.1);

// $ExpectType boolean
isInteger({});
