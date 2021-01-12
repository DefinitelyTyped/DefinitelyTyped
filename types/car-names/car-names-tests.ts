import carNames = require('car-names');

// $ExpectType string[]
const allNames = carNames.all;

// $ExpectType string
const randomName = carNames.random();
