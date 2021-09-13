import romans = require('romans');

romans.romanize(454); // $ExpectType string
romans.deromanize('CDLIV'); // $ExpectType number
romans.allNumerals.forEach(numeral => {});
romans.allChars.forEach(character => {});
