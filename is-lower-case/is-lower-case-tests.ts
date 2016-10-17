
import isLowerCase = require('is-lower-case')

console.log(isLowerCase('string')); // => true
console.log(isLowerCase('String')); // => false
console.log(isLowerCase('STRING')); // => false
