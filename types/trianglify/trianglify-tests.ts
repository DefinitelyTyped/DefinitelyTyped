import Trianglify = require("trianglify");

const pattern = Trianglify({
    width: 1920,
    height: 1080,
    cell_size: 75,
    variance: 0.75,
    seed: "someseed",
    x_colors: ["#2c2541", "#2c2541"],
    y_colors: ["#6441a4", "#000000"],
    color_space: "lab",
    color_function: null,
    stroke_width: 1.51
});

const svg = pattern.svg({ includeNamespace: true });
const result = '<?xml version="1.0" encoding="UTF-8"?>\n' + svg.outerHTML;
console.log(result);
