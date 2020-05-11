// Type definitions for color-check 0.0
// Project: https://github.com/motleydev/color-check#readme
// Definitions by: Elizabeth Craig <https://github.com/ecraig12345>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface RGB {
    r: string | number;
    g: string | number;
    b: string | number;
}

export type Color = string | RGB;

export const brightnessThreshold: number;
export const colorContrastThreshold: number;

/**
 * Checks if a hex string or object was given and returns the rgb color values of the former.
 * To keep a tiny library, it's the user's responsibility to provide valid hex/rgbObj values.
 * @param colorValue Color to convert
 * @returns Returns an object of shape {r, g, b}
 */
export function hexToRgb(colorValue: Color): RGB;

/**
 * Checks if the two colors have significant color difference.
 * @param foreground Foreground color
 * @param background Background color
 * @returns The color difference, which must be 500 or greater
 */
export function colorDifference(foreground: Color, background: Color): boolean;

/**
 * Checks if two colors have enough brightness difference.
 * @param foreground Foreground color
 * @param background Background color
 * @returns The brightness difference, which must be over 125
 */
export function colorBrightnessDifference(foreground: Color, background: Color): boolean;

/**
 * Gets the total luminance from a color.
 * @param rgb The color, represented as an array of three RGB components (0-255 inclusive).
 * @returns The color's luminance
 */
export function colorGetLuminance(rgb: [number, number, number]): number;

/**
 * Gets the contrast between two colors.
 * @param foreground Foreground color
 * @param background Background color
 * @returns The contrast value
 */
export function colorContrast(foreground: Color, background: Color): number;

/**
 * Checks if two colors are both color compliant and contrast compliant.
 * @param foreground Foreground color
 * @param background Background color
 * @returns Whether the colors are compliant
 */
export function colorCompliance(foreground: Color, background: Color): boolean;

/**
 * Checks whether the difference between two colors is acceptable for AA standards for
 * legibility of size 14pt font.
 * @param foreground Foreground color
 * @param background Background color
 * @returns Whether the color difference is acceptable
 */
export function aa(foreground: Color, background: Color): boolean;

/**
 * Checks whether the difference between two colors is acceptable for AA standards for
 * legibility of size 18pt font.
 * @param foreground Foreground color
 * @param background Background color
 * @returns Whether the color difference is acceptable
 */
export function aa_18(foreground: Color, background: Color): boolean;

/**
 * Checks whether the difference between two colors is acceptable for AAA standards for
 * legibility of size 14pt font (this is very hard to achieve).
 * @param foreground Foreground color
 * @param background Background color
 * @returns Whether the color difference is acceptable
 */
export function aaa(foreground: Color, background: Color): boolean;

/**
 * Checks whether the difference between two colors is acceptable for AAA standards for
 * legibility of size 18pt font (this is very hard to achieve).
 * @param foreground Foreground color
 * @param background Background color
 * @returns Whether the color difference is acceptable
 */
export function aaa_18(foreground: Color, background: Color): boolean;
