// Type definitions for apca-w3 0.1
// Project: https://github.com/Myndex/apca-w3
// Definitions by: Daniel Eden <https://github.com/daneden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

/**
 *
 * @param txtY
 * The linear Y (luminance) of the text color. Must be between 0.0-1.1.
 *
 * @param bgY
 * The linear Y (luminance) of the background color. Must be between 0.0-1.1.
 *
 * @param [places]
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0 or more, rounds the result to that many decimal places.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function APCAcontrast(txtY: number, bgY: number, places?: number): number | string;

/**
 *
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0-255)
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function sRGBtoY(rgb: [r: number, g: number, b: number]): number;

/**
 *
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0.0-1.0)
 * of a color in the p3 display color space
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function displayP3toY(rgb: [r: number, g: number, b: number]): number;

/**
 *
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0-255)
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function adobeRGBtoY(rgb?: [r: number, g: number, b: number]): number;

/**
 *
 * @param [rgbaFG]
 * The foreground color expressed as a tuple of red, green, blue, and alpha
 * components. r, g, and b are expressed as 0-255, a is expressed as 0.0-1.0.
 * Defaults to `[0, 0, 0, 1.0]`.
 *
 * @param [rgbBG]
 * The background color expressed as a tuple of red, green, and blue components
 * (0-255).
 * Defaults to `[0, 0, 0]`.
 *
 * @param [isInt]
 * When true, alpha colors are parsed as a value between 0-255.
 * When false, alpha colors are parsed as a value between 0.0-1.0.
 * Defaults to `true`.
 */
export function alphaBlend(
    rgbaFG?: [r: number, g: number, b: number, a: number],
    rgbBG?: [r: number, g: number, b: number],
    isInt?: boolean,
): [r: number, g: number, b: number];

/**
 * Calculate the APCA contrast for named or hex colors.
 * Requires the `colorparsley` module.
 *
 * @param textColor
 * The text color as a string, hexadecimal integer, or array of rgb(a)
 * components.
 *
 * @param bgY
 * The background color as a string, hexadecimal integer, or array of rgb
 * components.
 *
 * @param [places]
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0 or more, rounds the result to that many decimal places.
 *
 * @param [isInt]
 * When true, alpha colors are parsed as a value between 0-255.
 * When false, alpha colors are parsed as a value between 0.0-1.0.
 * Defaults to `true`.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function calcAPCA(
    textColor: number | string | [r: number, g: number, b: number, a?: number],
    bgColor: number | string | [r: number, g: number, b: number],
    places?: number,
    isInt?: boolean,
): number | string;
