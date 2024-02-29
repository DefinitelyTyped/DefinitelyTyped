import isNegativeZero = require("is-negative-zero");

// $ExpectType boolean
isNegativeZero(-0);

// $ExpectType boolean
isNegativeZero(0);

// $ExpectType false
isNegativeZero(Symbol());

// $ExpectType false
isNegativeZero("0");
