/**
 * A wide-character aware text alignment function for use on the console
 * or with fixed width fonts.
 */

/**
 * Returns the string `str` centered in a field of `width` characters.
 * Uses `string-width` to measure character display width, correctly handling
 * wide characters (e.g. CJK) and ANSI escape codes.
 */
export function center(str: string, width: number): string;

/**
 * Returns the string `str` left-aligned in a field of `width` characters.
 * Uses `string-width` to measure character display width, correctly handling
 * wide characters (e.g. CJK) and ANSI escape codes.
 */
export function left(str: string, width: number): string;

/**
 * Returns the string `str` right-aligned in a field of `width` characters.
 * Uses `string-width` to measure character display width, correctly handling
 * wide characters (e.g. CJK) and ANSI escape codes.
 */
export function right(str: string, width: number): string;
