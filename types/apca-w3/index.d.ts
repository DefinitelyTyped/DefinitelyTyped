// Type definitions for apca-w3 0.0.98-g-4g.4b
// Project: https://github.com/Myndex/apca-w3
// Definitions by: Daniel Eden <https://github.com/daneden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RGBAComponents {
    r: number;
    g: number;
    b: number;
    a: number;
}

/**
 *
 * @param txtY
 * The linear Y (luminance) of the text color. Must be between 0.0-1.0.
 *
 * @param bgY
 * The linear Y (luminance) of the background color. Must be between 0.0-1.0.
 *
 * @param places
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0, returns a rounded string. When set to a positive
 * integer, rounds to that many places.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function APCAcontrast(txtY: number, bgY: number, places?: number): number;

/**
 *
 * @param rgba
 * An array of numbers representing the red, green, blue, and alpha components
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color
 */
export function sRGBtoY(rgba: [number]): number;

/**
 *
 * @param rgba
 * An array of numbers representing the red, green, blue, and alpha components
 * of a color in the p3 display color space
 *
 * @returns
 * The linear Y (luminance) of the given rgba color
 */
export function displayP3toY(rgba: [number]): number;

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
export function colorParsley(colorIn: number | string | [number] | RGBAComponents): [number];
