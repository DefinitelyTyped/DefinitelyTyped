import sign = require('es-abstract/helpers/sign');

sign(Math.random() * 2 - 1); // $ExpectType 1 | -1
