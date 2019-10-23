import RomanNumeral = require('js-roman-numerals');

let firstvar = new RomanNumeral("IV");
let secondvar = new RomanNumeral(4);

let testIntThing: number = firstvar.toInt();
let testStringThing: String = secondvar.toString();
