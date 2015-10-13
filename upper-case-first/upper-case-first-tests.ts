/// <reference path="upper-case-first.d.ts" />

import upperCaseFirst = require('upper-case-first');

console.log(upperCaseFirst(null));     // => ""
console.log(upperCaseFirst('string')); // => "String"
