import flubber = require("flubber");

var triangle = "M1,0 L2,2 L0,2 Z",
    pentagon = [[0, 0], [2, 0], [2, 1], [1, 2], [0, 1]];

var interpolator = flubber.interpolate(triangle, pentagon);
interpolator(0); // returns an SVG triangle path string
interpolator(0.5); // returns something halfway between the triangle and the octagon
interpolator(1); // returns an SVG octagon path string

var interpolator = flubber.toCircle(triangle, 100, 100, 10);
interpolator(0); // returns an SVG triangle path string
interpolator(0.5); // returns something halfway between the triangle and the circle
interpolator(1); // returns a circle path string centered at 100, 100 with a radius of 10

var interpolator = flubber.toRect(triangle, 10, 50, 100, 200);
interpolator(0); // returns an SVG triangle path string
interpolator(0.5); // returns something halfway between the triangle and the rectangle
interpolator(1); // returns a rectangle path string from [10, 50] in the upper left to [110, 250] in the lower right

flubber.toPathString([[1, 1], [2, 1], [1.5, 2]]);
flubber.splitPathString("M1,1 L2,1 L1.5,2Z M3,3 L4,3 L3.5,4 Z");
