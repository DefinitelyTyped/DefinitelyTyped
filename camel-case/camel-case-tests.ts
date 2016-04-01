/// <reference path="camel-case.d.ts" />

import camelCase = require('camel-case');

console.log(camelCase('string')); 	  // => "string"
console.log(camelCase('dot.case'));	  // => "dotCase"
console.log(camelCase('PascalCase'));	  // => "pascalCase"
console.log(camelCase('version 1.2.10')); // => "version1_2_10"

console.log(camelCase('STRING 1.2', 'tr')); // => "strıng1_2" 
