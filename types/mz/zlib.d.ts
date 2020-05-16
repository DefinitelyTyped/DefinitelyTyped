// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/zlib.d.ts

import { InputType, CompressCallback, BrotliOptions, ZlibOptions } from "zlib";
export * from "zlib";

/**
 * Compress the buffer using the **Brotli Compression** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function brotliCompress(buf: InputType, callback: CompressCallback): void;
export function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
export function brotliCompress(buf: InputType, options?: BrotliOptions): Promise<Buffer>;

/**
 * Decompress the buffer using the **Brotli Compression** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function brotliDecompress(buf: InputType, callback: CompressCallback): void;
export function brotliDecompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
export function brotliDecompress(buf: InputType, options?: BrotliOptions): Promise<Buffer>;

/**
 * Compress the buffer using the **DEFLATE** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function deflate(buf: InputType, callback: CompressCallback): void;
export function deflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function deflate(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Compress the buffer using the **DEFLATE** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function deflateRaw(buf: InputType, callback: CompressCallback): void;
export function deflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function deflateRaw(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Compress the buffer using the **GZIP** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function gzip(buf: InputType, callback: CompressCallback): void;
export function gzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function gzip(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Decompress the buffer using the **GZIP** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function gunzip(buf: InputType, callback: CompressCallback): void;
export function gunzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function gunzip(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Decompress the buffer using the **DEFLATE** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function inflate(buf: InputType, callback: CompressCallback): void;
export function inflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function inflate(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Decompress the buffer using the **DEFLATE** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function inflateRaw(buf: InputType, callback: CompressCallback): void;
export function inflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function inflateRaw(buf: InputType, options?: ZlibOptions): Promise<Buffer>;

/**
 * Decompress the buffer using the **ZIP** algorithm.
 *
 * @param buf The buffer.
 * @param options The compression options.
 */
export function unzip(buf: InputType, callback: CompressCallback): void;
export function unzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
export function unzip(buf: InputType, options?: ZlibOptions): Promise<Buffer>;
