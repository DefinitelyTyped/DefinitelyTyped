/**
 * Get the contrast ratio between two relative luminance values
 * @param a luminance value
 * @param b luminance value
 * @returns contrast ratio
 * @example
 * luminance(1, 1); // = 1
 */
export function luminance(a: number, b: number): number;

/**
 * Get a score for the contrast between two colors as rgb triplets
 * @param a
 * @param b
 * @returns contrast ratio
 * @example
 * rgb([0, 0, 0], [255, 255, 255]); // = 21
 */
export function rgb(a: RGBColor, b: RGBColor): number;

/**
 * Get a score for the contrast between two colors as hex strings
 * @param a hex value
 * @param b hex value
 * @returns contrast ratio
 * @example
 * hex('#000', '#fff'); // = 21
 */
export function hex(a: string, b: string): number;

/**
 * Get a textual score from a numeric contrast value
 * @param contrast
 * @returns score
 * @example
 * score(10); // = 'AAA'
 */
export function score(contrast: number): Score;

/** Color as RGB triplet */
export type RGBColor = [number, number, number];

/** Textual score */
export type Score = "AAA" | "AA" | "AA Large" | "Fail";
