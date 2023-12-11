import contours = require("svg-path-contours");

const path: contours.Command[] = [
    ["M", 0, 0],
    ["L", 100, 0],
    ["L", 100, 100],
    ["L", 0, 100],
    ["Z"],
];

contours(path, 1);
