import RomanNumeral = require('js-roman-numerals');

const firstvar = new RomanNumeral("IV");
const secondvar = new RomanNumeral(4);
const testInt: Number = firstvar.toInt();
const testString: String = secondvar.toString();
