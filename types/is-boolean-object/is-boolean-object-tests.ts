import isBoolean = require('is-boolean-object');

isBoolean(Boolean(42)); // $ExpectType boolean
isBoolean(false); // $ExpectType boolean
isBoolean(true); // $ExpectType boolean

isBoolean(undefined); // $ExpectType boolean
isBoolean(null); // $ExpectType boolean
isBoolean([]); // $ExpectType boolean
isBoolean({}); // $ExpectType boolean
isBoolean(/a/g); // $ExpectType boolean
isBoolean(new Date()); // $ExpectType boolean
isBoolean(42); // $ExpectType boolean
isBoolean(NaN); // $ExpectType boolean
isBoolean(Infinity); // $ExpectType boolean
