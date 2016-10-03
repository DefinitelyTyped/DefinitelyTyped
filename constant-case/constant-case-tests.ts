/// <reference path="constant-case.d.ts" />

import constantCase = require('constant-case');

console.log(constantCase('string')); 	     // => "STRING"
console.log(constantCase('PascalCase'));     // => "PASCAL_CASE"

console.log(constantCase('myString', 'tr')); // => "MY_STRİNG"
 
