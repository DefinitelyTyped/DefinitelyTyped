/// <reference types="node" />

/**
 * Is Text (Synchronous)
 * Determine whether or not a file is a text or binary file.
 * Determined by extension checks first, then if unknown extension, will fallback on encoding detection.
 * We do that as encoding detection cannot guarantee everything, especially for chars between utf8 and utf16.
 * We use the extensions from https://github.com/bevry/textextensions and https://github.com/bevry/binaryextensions
 * @param filename the filename for the file/buffer if available
 * @param buffer the buffer for the file if available
 */
export function isTextSync(filename: string, buffer?: Buffer): boolean;
export function isTextSync(filename: undefined, buffer: Buffer): boolean;

/**
 * Is Text
 * Uses `isTextSync` behind the scenes.
 * @param filename forwarded to `isTextSync`
 * @param buffer forwarded to `isTextSync`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
export function isText(
    filename: string,
    buffer: Buffer | undefined,
    next: (err: null, result: boolean) => void,
): void;
export function isText(
    filename: undefined,
    buffer: Buffer,
    next: (err: null, result: boolean) => void,
): void;

/**
 * Is Binary (Synchronous)
 * Uses `isTextSync` behind the scenes.
 * @param filename forwarded to `isTextSync`
 * @param buffer forwarded to `isTextSync`
 */
export function isBinarySync(filename: string, buffer?: Buffer): boolean;
export function isBinarySync(filename: undefined, buffer: Buffer): boolean;

/**
 * Is Binary
 * Uses `isText` behind the scenes.
 * @param filename forwarded to `isText`
 * @param buffer forwarded to `isText`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
export function isBinary(
    filename: string,
    buffer: Buffer | undefined,
    next: (err: null, result: boolean) => void,
): void;
export function isBinary(
    filename: undefined,
    buffer: Buffer,
    next: (err: null, result: boolean) => void,
): void;

/**
 * Get the encoding of a buffer.
 * We fetch a bunch chars from the start, middle and end of the buffer.
 * We check all three, as doing only start was not enough, and doing only middle was not enough, so better safe than sorry.
 * @param buffer
 * @param [opts]
 * @param [opts.chunkLength = 24]
 * @param [opts.chunkBegin = 0]
 * @returns either an Error instance if something went wrong, or if successful "utf8" or "binary"
 */
export function getEncodingSync(buffer: Buffer, opts?: Options): "utf8" | "binary";

/**
 * Get the encoding of a buffer
 * Uses `getEncodingSync` behind the scenes.
 * @param buffer forwarded to `getEncodingSync`
 * @param opts forwarded to `getEncodingSync`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
export function getEncoding(
    buffer: Buffer,
    opts: Options | undefined,
    next: (err: null, result: "utf8" | "binary") => void,
): void;

export interface Options {
    chunkLength?: number | undefined;
    chunkBegin?: number | undefined;
}
