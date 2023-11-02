import contours = require("svg-path-contours");

contours([
    ["M", 0, 0],
    ["L", 100, 0],
    ["L", 100, 100],
    ["L", 0, 100],
    ["Z"],
], 1);
