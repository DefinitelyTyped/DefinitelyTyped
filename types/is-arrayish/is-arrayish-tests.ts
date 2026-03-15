import isArrayish = require("is-arrayish");

// $ExpectType boolean
isArrayish([1, 2, 3]);

// $ExpectType boolean
isArrayish({ length: 0 });

// $ExpectType boolean
isArrayish(null);

// $ExpectType boolean
isArrayish("string");

// $ExpectType boolean
isArrayish(undefined);
