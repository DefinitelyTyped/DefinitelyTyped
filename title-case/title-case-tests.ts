/// <reference path="title-case.d.ts" />

import titleCase = require('title-case');

console.log(titleCase('string')); 	// => "String"
console.log(titleCase('PascalCase'));	// => "Pascal Case"
console.log(titleCase('STRING', 'tr'));	// => "Strıng" 
