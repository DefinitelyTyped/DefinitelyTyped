import lolcatjs = require('lolcatjs');

// $ExpectType void
lolcatjs.fromString('Hello, World!');
// $ExpectType Rgb
lolcatjs.rainbow(4, 2);
 // @ts-expect-error
lolcatjs.rainbow('4', 2);