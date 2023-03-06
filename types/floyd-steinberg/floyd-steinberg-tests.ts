import floydSteinberg = require('floyd-steinberg');

const imageData = new ImageData(new Uint8ClampedArray([]), 1280, 720);

// $ExpectType ImageData
floydSteinberg(imageData);
