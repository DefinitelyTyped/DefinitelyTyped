import mapValues = require('map-values');

// $ExpectType string
mapValues({ a: 234 }, n => 'hi').a;

// @ts-expect-error
mapValues({ key: 'value' });

const doubleANumber = (n: number) => n * 2;
// @ts-expect-error
mapValues({ key: true }, doubleANumber);
