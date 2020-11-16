import $isNaN = require('es-abstract/helpers/isNaN');

const number = Math.random() / Math.random();

$isNaN(number); // $ExpectType boolean
