/// <reference path="upper-case.d.ts" />

import upperCase = require('upper-case');

console.log(upperCase(null));       	 // => ""
console.log(upperCase('string'));  	 // => "STRING"

console.log(upperCase({ toString: function() { return 'test' } })); // => "TEST"
