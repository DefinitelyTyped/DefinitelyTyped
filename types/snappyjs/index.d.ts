// Note: Although the library does specify that Node.js Buffers are allowed,
// they extend Uint8Array and therefore do not need to be mentioned explicitly in the types

export as namespace SnappyJS;

/**
 * @param input The byte stream to compress
 * @returns The compressed byte stream, of the same type as the input
 */
export function compress<T extends ArrayBuffer | Uint8Array = ArrayBuffer | Uint8Array>(input: T): T;

/**
 * @param input The compressed input
 * @param [maxLength] If provided, throws an exception if the data length in the header
 * exceeds the specified value
 * @returns The decmopressed byte stream, of the same type as the input
 * @throws {Error} If `maxLength` is provided and the length exceeds it
 */
export function uncompress<T extends ArrayBuffer | Uint8Array = ArrayBuffer | Uint8Array>(
    input: T,
    maxLength?: number,
): T;
