declare module "zlib" {
    import * as stream from "stream";

    export interface ZlibOptions {
        flush?: number; // default: zlib.constants.Z_NO_FLUSH
        finishFlush?: number; // default: zlib.constants.Z_FINISH
        chunkSize?: number; // default: 16*1024
        windowBits?: number;
        level?: number; // compression only
        memLevel?: number; // compression only
        strategy?: number; // compression only
        dictionary?: any; // deflate/inflate only, empty dictionary by default
    }

    export interface Zlib {
        readonly bytesRead: number;
        close(callback?: () => void): void;
        flush(kind?: number | (() => void), callback?: () => void): void;
    }

    export interface ZlibParams {
        params(level: number, strategy: number, callback: () => void): void;
    }

    export interface ZlibReset {
        reset(): void;
    }

    export interface Gzip extends stream.Transform, Zlib { }
    export interface Gunzip extends stream.Transform, Zlib { }
    export interface Deflate extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
    export interface Inflate extends stream.Transform, Zlib, ZlibReset { }
    export interface DeflateRaw extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
    export interface InflateRaw extends stream.Transform, Zlib, ZlibReset { }
    export interface Unzip extends stream.Transform, Zlib { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    type InputType = string | Buffer | DataView /* | TypedArray */;
    export function deflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function deflate(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function deflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function deflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function deflateRaw(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function gzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function gzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function gzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function gunzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function gunzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function inflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function inflate(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function inflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function inflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function inflateRaw(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    export function unzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    export function unzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    export function unzipSync(buf: InputType, options?: ZlibOptions): Buffer;

    export namespace constants {
        // Allowed flush values.

        export const Z_NO_FLUSH: number;
        export const Z_PARTIAL_FLUSH: number;
        export const Z_SYNC_FLUSH: number;
        export const Z_FULL_FLUSH: number;
        export const Z_FINISH: number;
        export const Z_BLOCK: number;
        export const Z_TREES: number;

        // Return codes for the compression/decompression functions. Negative values are errors, positive values are used for special but normal events.

        export const Z_OK: number;
        export const Z_STREAM_END: number;
        export const Z_NEED_DICT: number;
        export const Z_ERRNO: number;
        export const Z_STREAM_ERROR: number;
        export const Z_DATA_ERROR: number;
        export const Z_MEM_ERROR: number;
        export const Z_BUF_ERROR: number;
        export const Z_VERSION_ERROR: number;

        // Compression levels.

        export const Z_NO_COMPRESSION: number;
        export const Z_BEST_SPEED: number;
        export const Z_BEST_COMPRESSION: number;
        export const Z_DEFAULT_COMPRESSION: number;

        // Compression strategy.

        export const Z_FILTERED: number;
        export const Z_HUFFMAN_ONLY: number;
        export const Z_RLE: number;
        export const Z_FIXED: number;
        export const Z_DEFAULT_STRATEGY: number;
    }

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
}
