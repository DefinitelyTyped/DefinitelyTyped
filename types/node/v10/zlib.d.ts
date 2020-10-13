declare module "zlib" {
    import * as stream from "stream";

    interface ZlibOptions {
        flush?: number; // default: zlib.constants.Z_NO_FLUSH
        finishFlush?: number; // default: zlib.constants.Z_FINISH
        chunkSize?: number; // default: 16*1024
        windowBits?: number;
        level?: number; // compression only
        memLevel?: number; // compression only
        strategy?: number; // compression only
        dictionary?: Buffer | NodeJS.TypedArray | DataView | ArrayBuffer; // deflate/inflate only, empty dictionary by default
        info?: boolean;
    }

    interface BrotliOptions {
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

    interface Zlib {
        /** @deprecated Use bytesWritten instead. */
        readonly bytesRead: number;
        readonly bytesWritten: number;
        shell?: boolean | string;
        close(callback?: () => void): void;
        flush(kind?: number | (() => void), callback?: () => void): void;
    }

    interface ZlibParams {
        params(level: number, strategy: number, callback: () => void): void;
    }

    interface ZlibReset {
        reset(): void;
    }

    interface BrotliCompress extends stream.Transform, Zlib { }
    interface BrotliDecompress extends stream.Transform, Zlib { }
    interface Gzip extends stream.Transform, Zlib { }
    interface Gunzip extends stream.Transform, Zlib { }
    interface Deflate extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
    interface Inflate extends stream.Transform, Zlib, ZlibReset { }
    interface DeflateRaw extends stream.Transform, Zlib, ZlibReset, ZlibParams { }
    interface InflateRaw extends stream.Transform, Zlib, ZlibReset { }
    interface Unzip extends stream.Transform, Zlib { }

    function createBrotliCompress(options?: BrotliOptions): BrotliCompress;
    function createBrotliDecompress(options?: BrotliOptions): BrotliDecompress;
    function createGzip(options?: ZlibOptions): Gzip;
    function createGunzip(options?: ZlibOptions): Gunzip;
    function createDeflate(options?: ZlibOptions): Deflate;
    function createInflate(options?: ZlibOptions): Inflate;
    function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    function createInflateRaw(options?: ZlibOptions): InflateRaw;
    function createUnzip(options?: ZlibOptions): Unzip;

    type InputType = string | Buffer | DataView | ArrayBuffer | NodeJS.TypedArray;

    type CompressCallback = (error: Error | null, result: Buffer) => void;

    function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliCompress(buf: InputType, callback: CompressCallback): void;
    function brotliCompressSync(buf: InputType, options?: BrotliOptions): Buffer;
    function brotliDecompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliDecompress(buf: InputType, callback: CompressCallback): void;
    function brotliDecompressSync(buf: InputType, options?: BrotliOptions): Buffer;
    function deflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function deflate(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function deflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    function deflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function deflateRaw(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    function gzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function gzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function gzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    function gunzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function gunzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    function inflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function inflate(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function inflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    function inflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function inflateRaw(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    function unzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void;
    function unzip(buf: InputType, options: ZlibOptions, callback: (error: Error | null, result: Buffer) => void): void;
    function unzipSync(buf: InputType, options?: ZlibOptions): Buffer;

    namespace constants {
        // Allowed flush values.

        const Z_NO_FLUSH: number;
        const Z_PARTIAL_FLUSH: number;
        const Z_SYNC_FLUSH: number;
        const Z_FULL_FLUSH: number;
        const Z_FINISH: number;
        const Z_BLOCK: number;
        const Z_TREES: number;

        // Return codes for the compression/decompression functions. Negative values are errors, positive values are used for special but normal events.

        const Z_OK: number;
        const Z_STREAM_END: number;
        const Z_NEED_DICT: number;
        const Z_ERRNO: number;
        const Z_STREAM_ERROR: number;
        const Z_DATA_ERROR: number;
        const Z_MEM_ERROR: number;
        const Z_BUF_ERROR: number;
        const Z_VERSION_ERROR: number;

        // Compression levels.

        const Z_NO_COMPRESSION: number;
        const Z_BEST_SPEED: number;
        const Z_BEST_COMPRESSION: number;
        const Z_DEFAULT_COMPRESSION: number;

        // Compression strategy.

        const Z_FILTERED: number;
        const Z_HUFFMAN_ONLY: number;
        const Z_RLE: number;
        const Z_FIXED: number;
        const Z_DEFAULT_STRATEGY: number;

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
    }

    // Constants
    const Z_NO_FLUSH: number;
    const Z_PARTIAL_FLUSH: number;
    const Z_SYNC_FLUSH: number;
    const Z_FULL_FLUSH: number;
    const Z_FINISH: number;
    const Z_BLOCK: number;
    const Z_TREES: number;
    const Z_OK: number;
    const Z_STREAM_END: number;
    const Z_NEED_DICT: number;
    const Z_ERRNO: number;
    const Z_STREAM_ERROR: number;
    const Z_DATA_ERROR: number;
    const Z_MEM_ERROR: number;
    const Z_BUF_ERROR: number;
    const Z_VERSION_ERROR: number;
    const Z_NO_COMPRESSION: number;
    const Z_BEST_SPEED: number;
    const Z_BEST_COMPRESSION: number;
    const Z_DEFAULT_COMPRESSION: number;
    const Z_FILTERED: number;
    const Z_HUFFMAN_ONLY: number;
    const Z_RLE: number;
    const Z_FIXED: number;
    const Z_DEFAULT_STRATEGY: number;
    const Z_BINARY: number;
    const Z_TEXT: number;
    const Z_ASCII: number;
    const Z_UNKNOWN: number;
    const Z_DEFLATED: number;
}
