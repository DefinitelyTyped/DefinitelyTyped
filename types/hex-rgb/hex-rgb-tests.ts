import hexRgb = require('hex-rgb');

hexRgb('#cd2222cc'); // $ExpectType RgbaObj
hexRgb('#cd2222cc', { format: 'array' }); // $ExpectType [number, number, number, number]
