
import pascalCase = require('pascal-case');

console.log(pascalCase('string')); 	   // => "String"
console.log(pascalCase('camelCase'));	   // => "CamelCase"
console.log(pascalCase('sentence case'));  // => "SentenceCase"

console.log(pascalCase('MY STRING', 'tr')); // => "MyStrıng" 
