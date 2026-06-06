/**
 * Decompresses a Brotli-compressed buffer.
 *
 * @param buffer - A Brotli-compressed buffer.
 * @param outputSize - Optional expected output size. If not provided, it will
 *   be determined automatically by reading the meta-block header.
 */
declare function decompress(buffer: Buffer, outputSize?: number): Uint8Array;

export = decompress;
