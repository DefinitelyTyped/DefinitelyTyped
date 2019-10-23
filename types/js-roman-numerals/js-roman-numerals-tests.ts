import RomanNumeral = require('js-roman-numerals');

const firstvar = new RomanNumeral("IV");
const secondvar = new RomanNumeral(4);

let testIntThing: number = firstvar.toInt();
let testStringThing: String = secondvar.toString();
