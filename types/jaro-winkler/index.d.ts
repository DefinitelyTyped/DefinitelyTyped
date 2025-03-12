/**
 * Takes two strings and compares them. Returns a value from 0 to 1, 0 meaning that
 * the strings are not at all similar.
 */
declare function distance(x: string, y: string, options?: { caseSensitive?: boolean }): number;
export = distance;
