
import swapCase = require('swap-case');

console.log(swapCase(null));		// => ""
console.log(swapCase('string')); 	// => "STRING"
console.log(swapCase('PascalCase'));	// => "pASCALcASE"
console.log(swapCase('Iñtërnâtiônàlizætiøn')); //=> "iÑTËRNÂTIÔNÀLIZÆTIØN"

console.log(swapCase('My String', 'tr')); // => "mY sTRİNG" 
