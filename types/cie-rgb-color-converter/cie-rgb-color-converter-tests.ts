import ColorConverter from "cie-rgb-color-converter";

const gamutRanges = ColorConverter.getGamutRanges();
// $ExpectType { gamutA: ColorGamut; gamutB: ColorGamut; gamutC: ColorGamut; default: ColorGamut; }
gamutRanges;

// $ExpectType ColorGamut
gamutRanges.gamutA;
// $ExpectType ColorGamut
gamutRanges.gamutB;
// $ExpectType ColorGamut
gamutRanges.gamutC;
// $ExpectType ColorGamut
gamutRanges.default;

// $ExpectType ColorGamut
ColorConverter.getLightColorGamutRange("LCT001");

// $ExpectType ColorGamut
ColorConverter.getLightColorGamutRange();

// $ExpectType ColorPoint
ColorConverter.rgbToXy(255, 0, 0);

// $ExpectType boolean
ColorConverter.xyIsInGamutRange({ x: 0.5, y: 0.5 }, gamutRanges.gamutA);

// $ExpectType ColorPoint
ColorConverter.getClosestColor({ x: 0.1, y: 0.2 }, gamutRanges.gamutA);

// $ExpectType RGBColor
ColorConverter.xyBriToRgb(0.25, 0.3, 255);

// @ts-expect-error
ColorConverter.rgbToXy("255", 0, 0);

// @ts-expect-error
ColorConverter.getLightColorGamutRange(123);
