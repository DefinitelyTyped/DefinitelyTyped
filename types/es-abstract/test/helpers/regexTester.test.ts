import regexTester = require('es-abstract/helpers/regexTester');

regexTester(/abc/)('abc'); // $ExpectType boolean
