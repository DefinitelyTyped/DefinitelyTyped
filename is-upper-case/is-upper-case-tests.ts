/// <reference path="is-upper-case.d.ts" />

import isUpperCase = require('is-upper-case')

console.log(isUpperCase('STRING')); // => true
console.log(isUpperCase('String')); // => false
console.log(isUpperCase('string')); // => false
