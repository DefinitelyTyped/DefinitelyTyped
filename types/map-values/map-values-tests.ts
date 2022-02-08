import mapValues = require('map-values');

// $ExpectType string
mapValues({ a: 234 }, n => 'hi').a;

// $ExpectError
mapValues({ key: 'value' });

const doubleANumber = (n: number) => n * 2;
// $ExpectError
mapValues({ key: true }, doubleANumber);
