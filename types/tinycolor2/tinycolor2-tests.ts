/*
 * Not all possible formats for construction are displayed.
 * To see a complete list please view: https://github.com/bgrins/TinyColor
 */
const testColor: tinycolor.Instance = tinycolor("red");

/* Constructor Tests*/

// string
// $ExpectType Instance
tinycolor("#ffffff");

// rgb && rgba
// $ExpectType Instance
tinycolor({ r: 40, g: 30, b: 20 });
// $ExpectType Instance
tinycolor({ r: 255, g: 20, b: 10, a: 0 });
// $ExpectType Instance
tinycolor.fromRatio({ r: 0.5, g: 0.2, b: 1, a: 0 });
// $ExpectType Instance
tinycolor.fromRatio({ r: 1, g: 0, b: 0.7, a: 0 });

// hsl && hsla
// $ExpectType Instance
tinycolor({ h: 0, s: 0, l: 0 });
// $ExpectType Instance
tinycolor({ h: 0, s: 0, l: 0, a: 0 });
// $ExpectType Instance
tinycolor.fromRatio({ h: 0.5, s: 0.2, l: 1, a: 0 });

// hsv && hsva
// $ExpectType Instance
tinycolor({ h: 0, s: 0, v: 0 });
// $ExpectType Instance
tinycolor({ h: 0, s: 0, v: 0, a: 0 });

// tinycolor static methods
// $ExpectType Instance
tinycolor.mix(testColor, testColor);
// $ExpectType Instance
tinycolor.mix("#ff0000", "#00ff00");
// $ExpectType Instance
tinycolor.mix(testColor, testColor, 50);
// $ExpectType Instance
tinycolor.random();

// $ExpectType boolean
tinycolor.equals(testColor, testColor);

// $ExpectType number
tinycolor.readability(testColor, testColor);
// $ExpectType boolean
tinycolor.isReadable(testColor, testColor);
// $ExpectType boolean
tinycolor.isReadable(testColor, testColor, {size: "small"});
// $ExpectType Instance
tinycolor.mostReadable(testColor, [testColor, testColor, testColor]);
// $ExpectType Instance
tinycolor.mostReadable(testColor, [testColor, testColor, testColor], {size: "large", level: "AA"});

const hexNames: { [key: string]: string } = tinycolor.hexNames;
const names: { [key: string]: string } = tinycolor.names;
// $ExpectType "linen"
tinycolor.hexNames["faf0e6"];
// $ExpectType "yellow"
tinycolor.hexNames["ff0"];
// $ExpectType "f0f8ff"
tinycolor.names["aliceblue"];
// $ExpectType "808080"
tinycolor.names["gray"];

/* Instance Methods */

// check properties
// $ExpectType boolean
testColor.isValid();
// $ExpectType boolean
testColor.isLight();
// $ExpectType boolean
testColor.isDark();

// get properties
const alpha: number = testColor.getAlpha();
// $ExpectType number
testColor.getBrightness();
// $ExpectType string
testColor.getFormat();
// $ExpectType ColorInput
testColor.getOriginalInput();

// set properties
// $ExpectType Instance
testColor.setAlpha(alpha);

// representations
// $ExpectType HSVA
testColor.toHsv();
// $ExpectType string
testColor.toHsvString();

// $ExpectType HSLA
testColor.toHsl();
// $ExpectType string
testColor.toHslString();

// $ExpectType string
testColor.toHex();
// $ExpectType string
testColor.toHexString();

// $ExpectType string
testColor.toHex8();
// $ExpectType string
testColor.toHex8String();

// $ExpectType RGBA
testColor.toRgb();
// $ExpectType string
testColor.toString();

// $ExpectType PRGBA
testColor.toPercentageRgb();
// $ExpectType string
testColor.toPercentageRgbString();

// $ExpectType string | false
testColor.toName();
// $ExpectType string
testColor.toFilter();
// $ExpectType string
testColor.toString();
// $ExpectType string
testColor.toString("rgb");
// $ExpectType string
testColor.toString("prgb");
// $ExpectType string
testColor.toString("hex6");
// $ExpectType string
testColor.toString("hex3");
// $ExpectType string
testColor.toString("hex8");
// $ExpectType string
testColor.toString("name");
// $ExpectType string
testColor.toString("hsl");
// $ExpectType string
testColor.toString("hsv");

// color modifications
// $ExpectType Instance
testColor.lighten();
// $ExpectType Instance
testColor.lighten(20);

// $ExpectType Instance
testColor.brighten();
// $ExpectType Instance
testColor.brighten(20);

// $ExpectType Instance
testColor.darken();
// $ExpectType Instance
testColor.darken(20);

// $ExpectType Instance
testColor.desaturate();
// $ExpectType Instance
testColor.desaturate(20);

// $ExpectType Instance
testColor.saturate();
// $ExpectType Instance
testColor.saturate(20);

// $ExpectType Instance
testColor.spin(20);

// $ExpectType Instance
testColor.greyscale();

// color combinations
// $ExpectType Instance[]
testColor.analogous();
// $ExpectType Instance[]
testColor.analogous(6, 30);

// $ExpectType Instance[]
testColor.monochromatic();
// $ExpectType Instance[]
testColor.monochromatic(10);

// $ExpectType [Instance, Instance, Instance]
testColor.splitcomplement();
// $ExpectType [Instance, Instance, Instance]
testColor.triad();
// $ExpectType [Instance, Instance, Instance, Instance]
testColor.tetrad();

// $ExpectType Instance
testColor.complement();
