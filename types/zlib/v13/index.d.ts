// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';
import * as stream from 'stream';

export {};

export interface ZlibOptions {
    /**
     * @default constants.Z_NO_FLUSH
     */
    flush?: number;
    /**
     * @default constants.Z_FINISH
     */
    finishFlush?: number;
    /**
     * @default 16*1024
     */
    chunkSize?: number;
    windowBits?: number;
    level?: number; // compression only
    memLevel?: number; // compression only
    strategy?: number; // compression only
    dictionary?: ArrayBufferView | ArrayBuffer; // deflate/inflate only, empty dictionary by default
    info?: boolean;
}

export interface BrotliOptions {
    /**
     * @default constants.BROTLI_OPERATION_PROCESS
     */
    flush?: number;
    /**
     * @default constants.BROTLI_OPERATION_FINISH
     */
    finishFlush?: number;
    /**
     * @default 16*1024
     */
    chunkSize?: number;
    params?: {
        /**
         * Each key is a `constants.BROTLI_*` constant.
         */
        [key: number]: boolean | number;
    };
}

export interface Zlib {
    /** @deprecated Use bytesWritten instead. */
    readonly bytesRead: number;
    readonly bytesWritten: number;
    shell?: boolean | string;
    close(callback?: () => void): void;
    flush(kind?: number | (() => void), callback?: () => void): void;
}

export interface ZlibParams {
    params(level: number, strategy: number, callback: () => void): void;
}

export interface ZlibReset {
    reset(): void;
}

export interface BrotliCompress extends stream.Transform, Zlib { }
export interface BrotliDecompress extends stream.Transform, Zlib { }
export interface Gzip extends stream.Transform, Zlib { }
export interface Gunzip extends stream.Transform, Zlib { }
export interface Deflate extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
export interface Inflate extends stream.Transform, Zlib, ZlibReset { }
export interface DeflateRaw extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
export interface InflateRaw extends stream.Transform, Zlib, ZlibReset { }
export interface Unzip extends stream.Transform, Zlib { }

export function createBrotliCompress(options?: BrotliOptions): BrotliCompress;
export function createBrotliDecompress(options?: BrotliOptions): BrotliDecompress;
export function createGzip(options?: ZlibOptions): Gzip;
export function createGunzip(options?: ZlibOptions): Gunzip;
export function createDeflate(options?: ZlibOptions): Deflate;
export function createInflate(options?: ZlibOptions): Inflate;
export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
export function createInflateRaw(options?: ZlibOptions): InflateRaw;
export function createUnzip(options?: ZlibOptions): Unzip;

export type InputType = string | ArrayBuffer | ArrayBufferView;

export type CompressCallback = (error: Error | null, result: Buffer) => void;

export function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
export function brotliCompress(buf: InputType, callback: CompressCallback): void;
export function brotliCompressSync(buf: InputType, options?: BrotliOptions): Buffer;
export function brotliDecompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
export function brotliDecompress(buf: InputType, callback: CompressCallback): void;
export function brotliDecompressSync(buf: InputType, options?: BrotliOptions): Buffer;
export function deflate(buf: InputType, callback: CompressCallback): void;
export function deflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function deflateSync(buf: InputType, options?: ZlibOptions): Buffer;
export function deflateRaw(buf: InputType, callback: CompressCallback): void;
export function deflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
export function gzip(buf: InputType, callback: CompressCallback): void;
export function gzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function gzipSync(buf: InputType, options?: ZlibOptions): Buffer;
export function gunzip(buf: InputType, callback: CompressCallback): void;
export function gunzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer;
export function inflate(buf: InputType, callback: CompressCallback): void;
export function inflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function inflateSync(buf: InputType, options?: ZlibOptions): Buffer;
export function inflateRaw(buf: InputType, callback: CompressCallback): void;
export function inflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
export function unzip(buf: InputType, callback: CompressCallback): void;
export function unzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function unzipSync(buf: InputType, options?: ZlibOptions): Buffer;

export namespace constants {
    const BROTLI_DECODE: number;
    const BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: number;
    const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: number;
    const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: number;
    const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: number;
    const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: number;
    const BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: number;
    const BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: number;
    const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: number;
    const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: number;
    const BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: number;
    const BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: number;
    const BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: number;
    const BROTLI_DECODER_ERROR_FORMAT_DISTANCE: number;
    const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: number;
    const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: number;
    const BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: number;
    const BROTLI_DECODER_ERROR_FORMAT_PADDING_1: number;
    const BROTLI_DECODER_ERROR_FORMAT_PADDING_2: number;
    const BROTLI_DECODER_ERROR_FORMAT_RESERVED: number;
    const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: number;
    const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: number;
    const BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: number;
    const BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: number;
    const BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: number;
    const BROTLI_DECODER_ERROR_UNREACHABLE: number;
    const BROTLI_DECODER_NEEDS_MORE_INPUT: number;
    const BROTLI_DECODER_NEEDS_MORE_OUTPUT: number;
    const BROTLI_DECODER_NO_ERROR: number;
    const BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: number;
    const BROTLI_DECODER_PARAM_LARGE_WINDOW: number;
    const BROTLI_DECODER_RESULT_ERROR: number;
    const BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: number;
    const BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: number;
    const BROTLI_DECODER_RESULT_SUCCESS: number;
    const BROTLI_DECODER_SUCCESS: number;

    const BROTLI_DEFAULT_MODE: number;
    const BROTLI_DEFAULT_QUALITY: number;
    const BROTLI_DEFAULT_WINDOW: number;
    const BROTLI_ENCODE: number;
    const BROTLI_LARGE_MAX_WINDOW_BITS: number;
    const BROTLI_MAX_INPUT_BLOCK_BITS: number;
    const BROTLI_MAX_QUALITY: number;
    const BROTLI_MAX_WINDOW_BITS: number;
    const BROTLI_MIN_INPUT_BLOCK_BITS: number;
    const BROTLI_MIN_QUALITY: number;
    const BROTLI_MIN_WINDOW_BITS: number;

    const BROTLI_MODE_FONT: number;
    const BROTLI_MODE_GENERIC: number;
    const BROTLI_MODE_TEXT: number;

    const BROTLI_OPERATION_EMIT_METADATA: number;
    const BROTLI_OPERATION_FINISH: number;
    const BROTLI_OPERATION_FLUSH: number;
    const BROTLI_OPERATION_PROCESS: number;

    const BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: number;
    const BROTLI_PARAM_LARGE_WINDOW: number;
    const BROTLI_PARAM_LGBLOCK: number;
    const BROTLI_PARAM_LGWIN: number;
    const BROTLI_PARAM_MODE: number;
    const BROTLI_PARAM_NDIRECT: number;
    const BROTLI_PARAM_NPOSTFIX: number;
    const BROTLI_PARAM_QUALITY: number;
    const BROTLI_PARAM_SIZE_HINT: number;

    const DEFLATE: number;
    const DEFLATERAW: number;
    const GUNZIP: number;
    const GZIP: number;
    const INFLATE: number;
    const INFLATERAW: number;
    const UNZIP: number;

    const Z_BEST_COMPRESSION: number;
    const Z_BEST_SPEED: number;
    const Z_BLOCK: number;
    const Z_BUF_ERROR: number;
    const Z_DATA_ERROR: number;

    const Z_DEFAULT_CHUNK: number;
    const Z_DEFAULT_COMPRESSION: number;
    const Z_DEFAULT_LEVEL: number;
    const Z_DEFAULT_MEMLEVEL: number;
    const Z_DEFAULT_STRATEGY: number;
    const Z_DEFAULT_WINDOWBITS: number;

    const Z_ERRNO: number;
    const Z_FILTERED: number;
    const Z_FINISH: number;
    const Z_FIXED: number;
    const Z_FULL_FLUSH: number;
    const Z_HUFFMAN_ONLY: number;
    const Z_MAX_CHUNK: number;
    const Z_MAX_LEVEL: number;
    const Z_MAX_MEMLEVEL: number;
    const Z_MAX_WINDOWBITS: number;
    const Z_MEM_ERROR: number;
    const Z_MIN_CHUNK: number;
    const Z_MIN_LEVEL: number;
    const Z_MIN_MEMLEVEL: number;
    const Z_MIN_WINDOWBITS: number;
    const Z_NEED_DICT: number;
    const Z_NO_COMPRESSION: number;
    const Z_NO_FLUSH: number;
    const Z_OK: number;
    const Z_PARTIAL_FLUSH: number;
    const Z_RLE: number;
    const Z_STREAM_END: number;
    const Z_STREAM_ERROR: number;
    const Z_SYNC_FLUSH: number;
    const Z_VERSION_ERROR: number;
    const ZLIB_VERNUM: number;
}

/**
 * @deprecated
 */
export const Z_NO_FLUSH: number;
/**
 * @deprecated
 */
export const Z_PARTIAL_FLUSH: number;
/**
 * @deprecated
 */
export const Z_SYNC_FLUSH: number;
/**
 * @deprecated
 */
export const Z_FULL_FLUSH: number;
/**
 * @deprecated
 */
export const Z_FINISH: number;
/**
 * @deprecated
 */
export const Z_BLOCK: number;
/**
 * @deprecated
 */
export const Z_TREES: number;
/**
 * @deprecated
 */
export const Z_OK: number;
/**
 * @deprecated
 */
export const Z_STREAM_END: number;
/**
 * @deprecated
 */
export const Z_NEED_DICT: number;
/**
 * @deprecated
 */
export const Z_ERRNO: number;
/**
 * @deprecated
 */
export const Z_STREAM_ERROR: number;
/**
 * @deprecated
 */
export const Z_DATA_ERROR: number;
/**
 * @deprecated
 */
export const Z_MEM_ERROR: number;
/**
 * @deprecated
 */
export const Z_BUF_ERROR: number;
/**
 * @deprecated
 */
export const Z_VERSION_ERROR: number;
/**
 * @deprecated
 */
export const Z_NO_COMPRESSION: number;
/**
 * @deprecated
 */
export const Z_BEST_SPEED: number;
/**
 * @deprecated
 */
export const Z_BEST_COMPRESSION: number;
/**
 * @deprecated
 */
export const Z_DEFAULT_COMPRESSION: number;
/**
 * @deprecated
 */
export const Z_FILTERED: number;
/**
 * @deprecated
 */
export const Z_HUFFMAN_ONLY: number;
/**
 * @deprecated
 */
export const Z_RLE: number;
/**
 * @deprecated
 */
export const Z_FIXED: number;
/**
 * @deprecated
 */
export const Z_DEFAULT_STRATEGY: number;
/**
 * @deprecated
 */
export const Z_BINARY: number;
/**
 * @deprecated
 */
export const Z_TEXT: number;
/**
 * @deprecated
 */
export const Z_ASCII: number;
/**
 * @deprecated
 */
export const Z_UNKNOWN: number;
/**
 * @deprecated
 */
export const Z_DEFLATED: number;
