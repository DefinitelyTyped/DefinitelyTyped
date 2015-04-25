/// <reference path="tinycolor.d.ts" />

/*
 * Not all possible formats for construction are displayed.
 * To see a complete list please view: https://github.com/bgrins/TinyColor
 */
var tester: tinycolorInstance = tinycolor("red");

/* Constructor Tests*/

// string
tester = tinycolor("#ffffff");

//rgb && rgba
tester = tinycolor({ r: 40, g: 30, b: 20 });
tester = tinycolor({ r: 255, g: 20, b: 10, a: 0 });
tester = tinycolor.fromRatio({ r: 0.5, g: 0.2, b: 1, a: 0 });
tester = tinycolor.fromRatio({ r: 1, g: 0, b: 0.7, a: 0 });

//hsl && hsla
tester = tinycolor({ h: 0, s: 0, l: 0 });
tester = tinycolor({ h: 0, s: 0, l: 0, a: 0 });
tester = tinycolor.fromRatio({ h: 0.5, s: 0.2, l: 1, a: 0 });

//hsv && hsva
tester = tinycolor({ h: 0, s: 0, v: 0 });
tester = tinycolor({ h: 0, s: 0, v: 0, a: 0 });

//tinycolor static methods
tester = tinycolor.mix(tester, tester);
tester = tinycolor.mix(tester, tester, 50);
tester = tinycolor.random();

/*Tinycolor object properties*/

var readable: Readable.Readable = tinycolor.readability(tester, tester);
var isReadable: boolean = tinycolor.isReadable(tester, tester);
tester = tinycolor.mostReadable(tester, [tester, tester, tester]);

var hexNames: { [key: string]: string } = tinycolor.hexNames;
var names: { [key: string]: string } = tinycolor.names;

/*Instance Methods*/

//check properties
var isValid: boolean = tester.isValid();
var isLight: boolean = tester.isLight();
var isDark: boolean = tester.isDark();

//get properties
var alpha: number = tester.getAlpha();
var brightness: number = tester.getBrightness();
var format: string = tester.getFormat();
var originalInput: any = tester.getOriginalInput();

//set properties
tester = tester.setAlpha(alpha);

//representations
var hsva: ColorFormats.HSVA = tester.toHsv();
var hsvString: string = tester.toHsvString();

var hsl: ColorFormats.HSLA = tester.toHsl();
var hslString: string = tester.toHslString();

var hex: string = tester.toHex();
var hexString: string = tester.toHexString();

var hex8: string = tester.toHex8();
var hex8String: string = tester.toHex8String();

var rgba: ColorFormats.RGBA = tester.toRgb();
var rgbString: string = tester.toString();

var percentageRGBA: ColorFormats.RGBA = tester.toPercentageRgb();
var percentageRGBString: string = tester.toPercentageRgbString();

var name: string = tester.toName();
var filter: string = tester.toFilter();
var sString: string = tester.toString();
sString = tester.toString("rgb");
sString = tester.toString("prgb");
sString = tester.toString("hex6");
sString = tester.toString("hex3");
sString = tester.toString("hex8");
sString = tester.toString("name");
sString = tester.toString("hsl");
sString = tester.toString("hsv");

//color modifications
tester = tester.lighten();
tester = tester.lighten(20);

tester = tester.brighten();
tester = tester.brighten(20);

tester = tester.darken();
tester = tester.darken(20);

tester = tester.desaturate();
tester = tester.desaturate(20);

tester = tester.saturate();
tester = tester.saturate(20);

tester = tester.spin();
tester = tester.spin(20);

tester = tester.greyscale();

//color combinations
var colors: tinycolorInstance[] = tester.analogous();
colors = tester.analogous(6, 30);

colors = tester.monochromatic();
colors = tester.monochromatic(10);

colors = tester.splitcomplement();
colors = tester.triad();
colors = tester.tetrad();

tester = tester.complement();