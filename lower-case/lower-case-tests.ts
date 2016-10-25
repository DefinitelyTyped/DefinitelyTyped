/// <reference path="lower-case.d.ts" />

import lowerCase = require('lower-case');

console.log(lowerCase(null));       	   // => ""
console.log(lowerCase('STRING'));  	     // => "string"
console.log(lowerCase('string', 'tr'));	 // => "strıng"

console.log(lowerCase({ toString: function() { return 'TEST' } })); // => "test"
