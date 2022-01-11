// Type definitions for apca-w3 0.1
// Project: https://github.com/Myndex/apca-w3
// Definitions by: Daniel Eden <https://github.com/daneden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *
 * @param txtY
 * The linear Y (luminance) of the text color. Must be between 0.0-1.1.
 *
 * @param bgY
 * The linear Y (luminance) of the background color. Must be between 0.0-1.1.
 *
 * @param places
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0 or more, rounds the result to that many decimal places.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function APCAcontrast(txtY: number, bgY: number, places?: number): number | string;

/**
 *
 * @param rgba
 * An array of numbers representing the red, green, blue, and alpha components
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function sRGBtoY(rgba: number[]): number;

/**
 *
 * @param rgba
 * An array of numbers representing the red, green, blue, and alpha components
 * of a color in the p3 display color space
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function displayP3toY(rgba: number[]): number;

/**
 * Convert a color to its rgba components
 *
 * @param colorIn
 * The color to convert. Can be a string (e.g. "#ffe4c4", "aliceblue"),
 * hexadecimal integer (0xFF0000), rgba array, or an Object with keys `r, g, b, a`
 * and number values.
 *
 * @returns
 * rgba components in a float array (`[r: number, g: number, b: number, a: number])
 */
