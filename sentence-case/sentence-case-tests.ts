/// <reference path="sentence-case.d.ts" />

import sentenceCase = require('sentence-case');

console.log(sentenceCase(null)); 		// => ""
console.log(sentenceCase('string'));		// => "stringe"
console.log(sentenceCase('dot.case'));		// => "dot case"
console.log(sentenceCase('camelCase'));		// => "camel case"
console.log(sentenceCase('Beyoncé Knowles'));	// => "beyoncé knowles"

console.log(sentenceCase('A STRING', 'tr'));	// => "a strıng"

console.log(sentenceCase('HELLO WORLD!', null, '_')); // => "hello_world"
