import quantize = require("quantize");

// $ExpectType false | ColorMap
const colorMap = quantize(
    [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
    ],
    2,
);

if (colorMap !== false) {
    // $ExpectType RgbPixel[]
    colorMap.palette();

    // $ExpectType number
    colorMap.size();

    // $ExpectType RgbPixel
    colorMap.map([100, 100, 100]);

    // $ExpectType RgbPixel
    colorMap.nearest([200, 100, 0]);

    // $ExpectType void
    colorMap.push(colorMap.vboxes.peek().vbox);
}

// @ts-expect-error
quantize([[255, 0]], 2);

// @ts-expect-error
quantize([[255, 0, 0]]);

// @ts-expect-error
quantize([[255, 0, 0]], "2");
