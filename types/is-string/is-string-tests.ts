import isString = require('is-string');

isString(''); // $ExpectType boolean
isString(Object('foo')); // $ExpectType boolean

isString(undefined); // $ExpectType boolean
isString(null); // $ExpectType boolean
isString(false); // $ExpectType boolean
isString(true); // $ExpectType boolean
isString([]); // $ExpectType boolean
isString({}); // $ExpectType boolean
isString(/a/g); // $ExpectType boolean
isString(new Date()); // $ExpectType boolean
isString(42); // $ExpectType boolean
isString(NaN); // $ExpectType boolean
isString(Infinity); // $ExpectType boolean
