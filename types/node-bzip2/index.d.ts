/**
* Configuration options for BZip2 compression.
* @typedef {Object} CompressionOptions
* @property {('auto'|'always'|'never')} [buffering] **`always`** **(default)** is somewhat slower but reallocates memory as needed (and therefore uses significantly less memory)
*
* **`never`** may be faster but requires an allocation roughly the same size as the input data
*
* **`auto`** will only reallocate memory as needed if the input is larger than 1 GiB.
* @property {Number} [level] Compression level from `1` to `9` **(default: `9`)**
*/
export interface CompressOptions {
    /** Compression level from 1 (fastest) to 9 (best). Default is 9. */
    level?: number;
    /** Buffering behavior, e.g., 'auto'. */
    buffering?: 'auto' | string;
}

/**
* Configuration options for BZip2 decompression.
* @typedef {Object} DecompressionOptions
* @property {Boolean} [small] If **`true`**, the decompressor will use less memory but be slower **(default: `false`)**
*/
export interface DecompressOptions {
    /** Use less memory during decompression at the cost of speed. */
    small?: boolean;
}

/**
 * Compresses the given data using BZip2.
 * @param {Buffer|string|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array} input The data to be compressed.
 * @param {CompressionOptions} [options] Configuration for the compression.
 * @returns {Buffer} The compressed data.
 */
export function compress(input: string | Buffer | Uint8Array, options?: CompressOptions): Buffer;

/**
 * Decompresses the given data using Bzip2.
 * @param {Buffer} input The data to be decompressed.
 * @param {DecompressionOptions} [options] Configuration for the decompression.
 * @returns {Buffer} The decompressed data.
 */
export function decompress(input: Buffer | Uint8Array, options?: DecompressOptions): Buffer;

/**
 * Compresses the given data using BZip2 asynchronously.
 * @param {Buffer|string|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array} input The data to be compressed.
 * @param {CompressionOptions} [options] Configuration for the compression.
 * @returns {Promise<Buffer>} The compressed data.
 */
export function compressAsync(input: string | Buffer | Uint8Array, options?: CompressOptions): Promise<Buffer>;

/**
 * Decompresses the given data using Bzip2 asynchronously.
 * @param {Buffer} data The data to be decompressed.
 * @param {DecompressionOptions} [options] Configuration for the decompression.
 * @returns {Promise<Buffer>} The decompressed data.
 */
export function decompressAsync(input: Buffer | Uint8Array, options?: DecompressOptions): Promise<Buffer>;