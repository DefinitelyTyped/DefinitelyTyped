/// <reference path="dot-case.d.ts" />

import dotCase = require('dot-case');

console.log(dotCase('string')); 	 // => "string"
console.log(dotCase('camelCase'));	 // => "camel.case"
console.log(dotCase('sentence case'));   // => "sentence.case"

console.log(dotCase('MY STRING', 'tr')); // => "my.strıng" 
