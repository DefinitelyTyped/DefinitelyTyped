/// <reference path="path-case.d.ts" />

import pathCase = require('path-case');

console.log(pathCase('string')); 	 // => "string"
console.log(pathCase('camelCase'));	 // => "camel/case"
console.log(pathCase('sentence case'));  // => "sentence/case"

console.log(pathCase('MY STRING', 'tr')); // => "my.strıng"
