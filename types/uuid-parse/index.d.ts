/// <reference types="node" />

/**
 * Parse a UUID into it's component bytes
 * @param id UUID (-like) string
 * @param buffer Array or buffer where UUID bytes are to be written. Default: A new Buffer is used
 * @param offset Starting index in buffer at which to begin writing. Default: 0
 */
export function parse(
    id: string,
    buffer?: Buffer | any[],
    offset?: number,
): Buffer;

/**
 * Convert UUID byte array (ala parse()) into a string
 * @param buffer Array or buffer where UUID bytes are read.
 * @param offset Starting index in buffer at which to begin reading. Default: 0
 */
export function unparse(buffer: Buffer, offset?: number): string;
