/**
 * Return an array of byte values or a lexicographic hex string for an input integer.
 * @param n The input integer as a javascript number.
 * @param enc The encoding to use. Can be one of 'array' (default) or 'hex'.
 */
export function pack<T extends "hex" | "array" = "array">(
    n: number,
    enc?: T,
): T extends "hex" ? string : T extends "array" ? number[] : never;
/**
 * Convert an array of bytes returned by .pack() back into the original javascript number.
 * @param xs An array of bytes or a hex string.
 */
export function unpack(xs: number[] | string): number;
