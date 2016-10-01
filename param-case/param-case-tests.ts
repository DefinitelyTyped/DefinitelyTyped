/// <reference path="param-case.d.ts" />

import paramCase = require('param-case');

console.log(paramCase('string')); 	  // => "string"
console.log(paramCase('camelCase'));	  // => "camel-case"
console.log(paramCase('sentence case'));  // => "sentence-case"

console.log(paramCase('MY STRING', 'tr')); // => "my-strıng" 
