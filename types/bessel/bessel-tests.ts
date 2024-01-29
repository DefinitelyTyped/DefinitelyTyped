import BESSEL = require("bessel");

// $ExpectType string
BESSEL.version;

// $ExpectType number
BESSEL.besselj(1.5, 0);
// @ts-expect-error
BESSEL.besselj(new Symbol(5), 0);

// $ExpectType number
BESSEL.bessely(1.5, 0);
// @ts-expect-error
BESSEL.bessely(new Symbol(5), 0);

// $ExpectType number
BESSEL.besseli(1.5, 0);
// @ts-expect-error
BESSEL.besseli(new Symbol(5), 0);

// $ExpectType number
BESSEL.besselk(1.5, 0);
// @ts-expect-error
BESSEL.besselk(new Symbol(5), 0);
