import regexTester = require('es-abstract/helpers/regexTester');

regexTester(/abc/); // $ExpectType (string: string) => boolean
regexTester(/abc/)('abc'); // $ExpectType boolean
