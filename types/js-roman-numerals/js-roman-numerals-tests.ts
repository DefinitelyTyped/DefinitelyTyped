import RomanNumeral = require('js-roman-numerals');

function constructorTests() {
    const x = new RomanNumeral(10); // '10' | 'X'
    const y = new RomanNumeral('V'); // '5' | 'V'
}

function functionTests() {
    const x = new RomanNumeral(10);
    const y: number = x.toInt();
    const z: string = x.toString();
}
