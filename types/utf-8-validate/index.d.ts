/// <reference types="node" />

/**
 * Checks whether a buffer contains valid UTF-8.
 *
 * @param buffer - The buffer to check.
 *
 * @returns `true` if the buffer contains only correct UTF-8, else `false`.
 */
declare function isValidUTF8(buffer: Buffer): boolean;
export = isValidUTF8;
