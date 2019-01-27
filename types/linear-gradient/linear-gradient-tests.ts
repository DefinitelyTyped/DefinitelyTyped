import Gradient = require("linear-gradient");

// instantiate with an RGB palette
const grad1 = new Gradient([
    [0, 0, 0],
    [0, 80, 0],
    [0, 160, 80],
    [80, 80, 80],
    [160, 40, 40],
    [255, 0, 0]
]);

// now we are ready to calculate the colors
// the input value should be normalized to the range between 0 and 1

(grad1.calcArray(0)); // -> [0,0,0] (0 -> first color of the palette)
(grad1.calcArray(1)); // -> [255,0,0] (1 -> last color of the palette)
(grad1.calcArray(0.25)); // -> [0,100,20] (weighted average between [0,80,0] and [0,160,80])
(grad1.calcArray(0.5));
(grad1.calcArray(0.75));

(grad1.calcHex(1));  // -> '#ffffff'
(grad1.calcHex(0.25));   // -> '#006416'
