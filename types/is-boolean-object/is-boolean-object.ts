import isBoolean = require('is-boolean-object');

isBoolean(Boolean(42)); // $Expects true
isBoolean(false); // $Expects true
isBoolean(true); // $Expects true

isBoolean(undefined); // $Expects false
isBoolean(null); // $Expects false
isBoolean([]); // $Expects false
isBoolean({}); // $Expects false
isBoolean(/a/g); // $Expects false
isBoolean(new Date()); // $Expects false
isBoolean(42); // $Expects false
isBoolean(NaN); // $Expects false
isBoolean(Infinity); // $Expects false
