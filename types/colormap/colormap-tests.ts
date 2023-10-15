import createColormap = require("colormap");

// $ExpectType string[]
const colorsHex = createColormap<"hex">();

// $ExpectType string[]
const colorsRgbaString = createColormap<"rgbaString">({ format: "rgbaString" });

// $ExpectType [number, number, number, number][]
const colorsRgba = createColormap<"rgba">({ format: "rgba" });

// $ExpectType [number, number, number, number][]
const colorsFloat = createColormap<"float">({ format: "float" });
