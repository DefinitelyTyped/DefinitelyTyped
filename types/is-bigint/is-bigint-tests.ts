import isBigInt = require('is-bigint');

isBigInt(() => {}); // $ExpectType boolean
isBigInt(null); // $ExpectType boolean
isBigInt(Symbol('foo')); // $ExpectType boolean

isBigInt(1n); // $ExpectType boolean
isBigInt(Object(1n)); // $ExpectType boolean
