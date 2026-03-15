/// <reference types="node" />

/**
 * Convert encoding of a string or buffer.
 *
 * @param str - String or Buffer to be converted
 * @param to - Target encoding (e.g. "UTF-8", "ISO-8859-1", "WINDOWS-1252")
 * @param from - Source encoding (defaults to "UTF-8")
 * @returns Encoded buffer
 */
export function convert(str: string | Buffer, to: string, from?: string): Buffer;
