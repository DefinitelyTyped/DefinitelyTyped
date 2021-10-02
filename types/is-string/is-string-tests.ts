import isString = require('is-string');

isString(''); // $Expects true
isString(Object('foo')); // $Expects true

isString(undefined); // $Expects false
isString(null); // $Expects false
isString(false); // $Expects false
isString(true); // $Expects false
isString([]); // $Expects false
isString({}); // $Expects false
isString(/a/g); // $Expects false
isString(new Date()); // $Expects false
isString(42); // $Expects false
isString(NaN); // $Expects false
isString(Infinity); // $Expects false
