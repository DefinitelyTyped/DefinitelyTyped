import $isFinite = require('es-abstract/helpers/isFinite');

const number = Math.random() / Math.random();

$isFinite(number); // $ExpectType boolean
