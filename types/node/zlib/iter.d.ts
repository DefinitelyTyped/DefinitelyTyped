declare module "node:zlib/iter" {
    import { StatefulTransform, SyncStatefulTransform } from "node:stream/iter";
    interface BrotliOptions {
        chunkSize?: number | undefined;
        params?: { [key: number]: number | boolean } | undefined;
        dictionary?: NodeJS.ArrayBufferView | undefined;
    }
    interface ZlibOptions {
        chunkSize?: number | undefined;
        windowBits?: number | undefined;
        dictionary?: NodeJS.ArrayBufferView | undefined;
    }
    interface ZlibCompressionOptions extends ZlibOptions {
        level?: number | undefined;
        memLevel?: number | undefined;
        strategy?: number | undefined;
    }
    interface ZstdOptions {
        chunkSize?: number | undefined;
        params?: { [key: number]: number | boolean } | undefined;
        dictionary?: NodeJS.ArrayBufferView | undefined;
    }
    interface ZstdCompressionOptions extends ZstdOptions {
        pledgedSrcSize?: number | undefined;
    }
    /**
     * Create a Brotli compression transform. Output is compatible with
     * `zlib.brotliDecompress()` and `decompressBrotli()`/`decompressBrotliSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressBrotli(options?: BrotliOptions): StatefulTransform;
    /**
     * Create a Brotli compression transform. Output is compatible with
     * `zlib.brotliDecompress()` and `decompressBrotli()`/`decompressBrotliSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressBrotliSync(options?: BrotliOptions): SyncStatefulTransform;
    /**
     * Create a deflate compression transform. Output is compatible with
     * `zlib.inflate()` and `decompressDeflate()`/`decompressDeflateSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressDeflate(options?: ZlibCompressionOptions): StatefulTransform;
    /**
     * Create a deflate compression transform. Output is compatible with
     * `zlib.inflate()` and `decompressDeflate()`/`decompressDeflateSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressDeflateSync(options?: ZlibCompressionOptions): SyncStatefulTransform;
    /**
     * Create a gzip compression transform. Output is compatible with `zlib.gunzip()`
     * and `decompressGzip()`/`decompressGzipSync()`.
     * @returns A stateful transform.
     */
    function compressGzip(options?: ZlibCompressionOptions): StatefulTransform;
    /**
     * Create a gzip compression transform. Output is compatible with `zlib.gunzip()`
     * and `decompressGzip()`/`decompressGzipSync()`.
     * @returns A stateful transform.
     */
    function compressGzipSync(options?: ZlibCompressionOptions): SyncStatefulTransform;
    /**
     * Create a Zstandard compression transform. Output is compatible with
     * `zlib.zstdDecompress()` and `decompressZstd()`/`decompressZstdSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressZstd(options?: ZstdCompressionOptions): StatefulTransform;
    /**
     * Create a Zstandard compression transform. Output is compatible with
     * `zlib.zstdDecompress()` and `decompressZstd()`/`decompressZstdSync()`.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function compressZstdSync(options?: ZstdCompressionOptions): SyncStatefulTransform;
    /**
     * Create a Brotli decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressBrotli(options?: BrotliOptions): StatefulTransform;
    /**
     * Create a Brotli decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressBrotliSync(options?: BrotliOptions): SyncStatefulTransform;
    /**
     * Create a deflate decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressDeflate(options?: ZlibOptions): StatefulTransform;
    /**
     * Create a deflate decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressDeflateSync(options?: ZlibOptions): SyncStatefulTransform;
    /**
     * Create a gzip decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressGzip(options?: ZlibOptions): StatefulTransform;
    /**
     * Create a gzip decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressGzipSync(options?: ZlibOptions): SyncStatefulTransform;
    /**
     * Create a Zstandard decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressZstd(options?: ZstdOptions): StatefulTransform;
    /**
     * Create a Zstandard decompression transform.
     * @since v25.9.0
     * @returns A stateful transform.
     */
    function decompressZstdSync(options?: ZstdOptions): SyncStatefulTransform;
}
declare module "zlib/iter" {
    export * from "node:zlib/iter";
}
