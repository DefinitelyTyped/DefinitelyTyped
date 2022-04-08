/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then 1 will be used.
 */
export type Color = number[];
export const fromString: (s: string) => Color;
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 */
export function asArray(color: Color | string): Color;
/**
 * Return the color as an rgba string.
 */
export function asString(color: Color | string): string;
export function isStringColor(s: string): boolean;
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 */
export function normalize(color: Color): Color;
export function toString(color: Color): string;
