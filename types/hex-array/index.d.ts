export interface Options {
    /**
     * This number of hex bytes are grouped together with spaces between groups.
     * 0 means no grouping is applied. 0 if unspecified.
     */
    grouping?: number;

    /**
     * The number of groups which make up a row. When 0, no splitting into rows
     * occurs. 0 if unspecified.
     */
    rowlength?: number;

    /**
     * If true, the output will be in uppercase. true by default.
     */
    uppercase: boolean;
}

/**
 * Takes a string containing hexadecimal and returns the equivalent as a
 * Uint8Array buffer.
 *
 * @param string The string to convert. Whitespace is ignored. If an odd number
 * of characters are specified, it will act as if preceeded with a leading 0;
 * that is, "FFF" is equivalent to "0FFF".
 *
 * @returns a Uint8Array array.
 */
export function fromString(string: string): Uint8Array;

/**
 * Converts the given buffer to a string containing its hexadecimal
 * representation.
 *
 * @param array a Uint8Array buffer to convert
 * @param [options] an optional object
 *
 * @returns a hexadecimal string representing the buffer.
 */
export function toString(array: Uint8Array, options?: Options): string;
