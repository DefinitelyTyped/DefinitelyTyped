import RGBColor = require("rgbcolor");

// Test with named color
const red = new RGBColor("red");
const ok: boolean = red.ok;
const r: number = red.r;
const g: number = red.g;
const b: number = red.b;
const alpha: number = red.alpha;

// Test conversion methods
const rgb: string = red.toRGB();
const rgba: string = red.toRGBA();
const hex: string = red.toHex();

// Test with hex color
const hexColor = new RGBColor("#ff0000");
const hexColor2 = new RGBColor("ff0000");
const hexColor3 = new RGBColor("#f00");

// Test with rgb() format
const rgbColor = new RGBColor("rgb(255, 0, 0)");

// Test with rgba() format
const rgbaColor = new RGBColor("rgba(255, 0, 0, 0.5)");

// Test checking if parse was successful
if (red.ok) {
    const validHex: string = red.toHex();
}
