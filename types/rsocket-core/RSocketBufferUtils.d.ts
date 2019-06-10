export declare type Encoding = "ascii" | "base64" | "hex" | "utf8";

/**
 * Mimimum value that would overflow bitwise operators (2^32).
 */
export declare const BITWISE_OVERFLOW = 0x100000000;

/**
 * Read a uint24 from a buffer starting at the given offset.
 */
export declare function readUInt24BE(buffer: Buffer, offset: number): number

/**
 * Writes a uint24 to a buffer starting at the given offset, returning the
 * offset of the next byte.
 */
export declare function writeUInt24BE(buffer: Buffer, value: number, offset: number): number

/**
 * Read a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
export declare function readUInt64BE(buffer: Buffer, offset: number): number

/**
 * Write a uint64 (technically supports up to 53 bits per JS number
 * representation).
 */
export declare function writeUInt64BE(buffer: Buffer, value: number, offset: number): number

/**
 * Determine the number of bytes it would take to encode the given data with the
 * given encoding.
 */
export declare function byteLength(data: any, encoding: Encoding): number

/**
 * Attempts to construct a buffer from the input, throws if invalid.
 */
export declare function toBuffer(data: unknown): Buffer

/**
 * Function to create a buffer of a given sized filled with zeros.
 */
export declare const createBuffer: (...args: any[]) => Buffer
