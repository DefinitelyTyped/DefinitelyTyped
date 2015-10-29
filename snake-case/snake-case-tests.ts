/// <reference path="snake-case.d.ts" />

import camelCase = require('snake-case');

console.log(camelCase('string')); 	  // => "string"
console.log(camelCase('camelCase'));	  // => "camel_case"
console.log(camelCase('sentence case'));  // => "sentence_case"

console.log(camelCase('MY STRING', 'tr')); // => "my_strıng" 
