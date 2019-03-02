import rgbHex = require('rgb-hex');

rgbHex('rgb(40, 42, 54)'); // $ExpectType string
rgbHex(65, 131, 196); // $ExpectType string
rgbHex(65, 131, 196, 0.2); // $ExpectType string
rgbHex(40, 42, 54, '75%'); // $ExpectType string
