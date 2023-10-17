/// <reference types="node" />

/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferisbufferobj
 *
 * This will also return `true` when passed a `Uint8Array`.
 */
export function isBuffer(value: any): value is Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferisencodingencoding
 */
export function isEncoding(encoding: string): encoding is BufferEncoding;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding
 */
export function alloc(
    size: number,
    fill?: string | Uint8Array | number,
    encoding?: BufferEncoding,
): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferallocunsafesize
 */
export function allocUnsafe(size: number): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferallocunsafeslowsize
 */
export function allocUnsafeSlow(size: number): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferbytelengthstring-encoding
 */
export function byteLength(
    string: string | NodeJS.ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding,
): number;
/**
 * See https://nodejs.org/api/buffer.html#static-method-buffercomparebuf1-buf2
 */
export function compare(buf1: Uint8Array, buf2: Uint8Array): -1 | 0 | 1;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferconcatlist-totallength
 */
export function concat(list: ReadonlyArray<Uint8Array>, totalLength?: number): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#bufcopytarget-targetstart-sourcestart-sourceend
 */
export function copy(
    source: Uint8Array,
    target: Uint8Array,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number,
): number;
/**
 * See https://nodejs.org/api/buffer.html#bufequalsotherbuffer
 */
export function equals(buffer: Uint8Array, otherBuffer: Uint8Array): boolean;
/**
 * See https://nodejs.org/api/buffer.html#buffillvalue-offset-end-encoding
 */
export function fill(
    buffer: Uint8Array,
    value: string | Uint8Array | number,
    offset?: number,
    end?: number,
    encoding?: BufferEncoding,
): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferfromarraybuffer-byteoffset-length
 */
export function from(
    arrayBuffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>,
    byteOffset?: number,
    length?: number,
): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferfrombuffer
 */
export function from(data: Uint8Array | ReadonlyArray<number>): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferfromarray
 */
// tslint:disable-next-line unified-signatures
export function from(data: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#static-method-bufferfromstring-encoding
 */
export function from(
    str: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string },
    encoding?: BufferEncoding,
): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#bufincludesvalue-byteoffset-encoding
 * @param buffer
 * @param value
 * @param byteOffset
 * @param encoding
 */
export function includes(
    buffer: Uint8Array,
    value: string | number | Buffer,
    byteOffset?: number,
    encoding?: BufferEncoding,
): boolean;
/**
 * See https://nodejs.org/api/buffer.html#bufindexofvalue-byteoffset-encoding
 */
export function indexOf(
    buffer: Uint8Array,
    value: string | number | Uint8Array,
    byteOffset?: number,
    encoding?: BufferEncoding,
): number;
/**
 * See https://nodejs.org/api/buffer.html#buflastindexofvalue-byteoffset-encoding
 */
export function lastIndexOf(
    buffer: Uint8Array,
    value: string | number | Uint8Array,
    byteOffset?: number,
    encoding?: BufferEncoding,
): number;
/**
 * See https://nodejs.org/api/buffer.html#bufswap16
 */
export function swap16(buffer: Uint8Array): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#bufswap32
 */
export function swap32(buffer: Uint8Array): Buffer | Uint8Array;
/**
 * See https://nodejs.org/api/buffer.html#bufswap64
 */
export function swap64(buffer: Uint8Array): Buffer | Uint8Array;
/**
 * Convert a buffer to its canonical representation. In Node.js, the canonical representation is a `Buffer`.
 * In the browser, the canonical representation is a `Uint8Array`.
 */
export function toBuffer(buffer: Uint8Array): Uint8Array | Buffer;
/**
 * See https://nodejs.org/api/buffer.html#buftostringencoding-start-end
 */
export function toString(buffer: Uint8Array, encoding?: BufferEncoding, start?: number, end?: number): string;
/**
 * See https://nodejs.org/api/buffer.html#bufwritestring-offset-length-encoding
 */
export function write(buffer: Uint8Array, string: string, encoding?: BufferEncoding): number;
export function write(buffer: Uint8Array, string: string, offset: number, encoding?: BufferEncoding): number;
export function write(
    buffer: Uint8Array,
    string: string,
    offset: number,
    length: number,
    encoding?: BufferEncoding,
): number;
/**
 * See https://nodejs.org/api/buffer.html#bufwritedoublelevalue-offset
 */
export function writeDoubleLE(buffer: Uint8Array, value: number, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufwritefloatlevalue-offset
 */
export function writeFloatLE(buffer: Uint8Array, value: number, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufwriteuint32levalue-offset
 */
export function writeUInt32LE(buffer: Uint8Array, value: number, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufwriteint32levalue-offset
 */
export function writeInt32LE(buffer: Uint8Array, value: number, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufreaddoubleleoffset
 */
export function readDoubleLE(buffer: Uint8Array, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufreadfloatleoffset
 */
export function readFloatLE(buffer: Uint8Array, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufreaduint32leoffset
 */
export function readUInt32LE(buffer: Uint8Array, offset?: number): number;
/**
 * See https://nodejs.org/api/buffer.html#bufreadint32leoffset
 */
export function readInt32LE(buffer: Uint8Array, offset?: number): number;
