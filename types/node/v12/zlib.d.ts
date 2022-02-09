declare module 'zlib' {
    import * as stream from 'stream';

    interface ZlibOptions {
        /**
         * @default constants.Z_NO_FLUSH
         */
        flush?: number | undefined;
        /**
         * @default constants.Z_FINISH
         */
        finishFlush?: number | undefined;
        /**
         * @default 16*1024
         */
        chunkSize?: number | undefined;
        windowBits?: number | undefined;
        level?: number | undefined; // compression only
        memLevel?: number | undefined; // compression only
        strategy?: number | undefined; // compression only
        dictionary?: NodeJS.ArrayBufferView | ArrayBuffer | undefined; // deflate/inflate only, empty dictionary by default
        info?: boolean | undefined;
        maxOutputLength?: number | undefined;
    }

    interface BrotliOptions {
        /**
         * @default constants.BROTLI_OPERATION_PROCESS
         */
        flush?: number | undefined;
        /**
         * @default constants.BROTLI_OPERATION_FINISH
         */
        finishFlush?: number | undefined;
        /**
         * @default 16*1024
         */
        chunkSize?: number | undefined;
        params?: {
            /**
             * Each key is a `constants.BROTLI_*` constant.
             */
            [key: number]: boolean | number;
        } | undefined;
        maxOutputLength?: number | undefined;
    }

    interface Zlib {
        /** @deprecated Use bytesWritten instead. */
        readonly bytesRead: number;
        readonly bytesWritten: number;
        shell?: boolean | string | undefined;
        close(callback?: () => void): void;
        flush(kind?: number, callback?: () => void): void;
        flush(callback?: () => void): void;
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

    type InputType = string | ArrayBuffer | NodeJS.ArrayBufferView;

    type CompressCallback = (error: Error | null, result: Buffer) => void;

    function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliCompress(buf: InputType, callback: CompressCallback): void;
    namespace brotliCompress {
        function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>;
    }

    function brotliCompressSync(buf: InputType, options?: BrotliOptions): Buffer;

    function brotliDecompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliDecompress(buf: InputType, callback: CompressCallback): void;
    namespace brotliDecompress {
        function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>;
    }

    function brotliDecompressSync(buf: InputType, options?: BrotliOptions): Buffer;

    function deflate(buf: InputType, callback: CompressCallback): void;
    function deflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace deflate {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function deflateSync(buf: InputType, options?: ZlibOptions): Buffer;

    function deflateRaw(buf: InputType, callback: CompressCallback): void;
    function deflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace deflateRaw {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;

    function gzip(buf: InputType, callback: CompressCallback): void;
    function gzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace gzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function gzipSync(buf: InputType, options?: ZlibOptions): Buffer;

    function gunzip(buf: InputType, callback: CompressCallback): void;
    function gunzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace gunzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer;

    function inflate(buf: InputType, callback: CompressCallback): void;
    function inflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace inflate {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function inflateSync(buf: InputType, options?: ZlibOptions): Buffer;

    function inflateRaw(buf: InputType, callback: CompressCallback): void;
    function inflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace inflateRaw {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;

    function unzip(buf: InputType, callback: CompressCallback): void;
    function unzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace unzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }

    function unzipSync(buf: InputType, options?: ZlibOptions): Buffer;

    namespace constants {
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

        const Z_DEFAULT_WINDOWBITS: number;
        const Z_MIN_WINDOWBITS: number;
        const Z_MAX_WINDOWBITS: number;

        const Z_MIN_CHUNK: number;
        const Z_MAX_CHUNK: number;
        const Z_DEFAULT_CHUNK: number;

        const Z_MIN_MEMLEVEL: number;
        const Z_MAX_MEMLEVEL: number;
        const Z_DEFAULT_MEMLEVEL: number;

        const Z_MIN_LEVEL: number;
        const Z_MAX_LEVEL: number;
        const Z_DEFAULT_LEVEL: number;

        const ZLIB_VERNUM: number;
    }

    // Allowed flush values.
    /** @deprecated Use `constants.Z_NO_FLUSH` */
    const Z_NO_FLUSH: number;
    /** @deprecated Use `constants.Z_PARTIAL_FLUSH` */
    const Z_PARTIAL_FLUSH: number;
    /** @deprecated Use `constants.Z_SYNC_FLUSH` */
    const Z_SYNC_FLUSH: number;
    /** @deprecated Use `constants.Z_FULL_FLUSH` */
    const Z_FULL_FLUSH: number;
    /** @deprecated Use `constants.Z_FINISH` */
    const Z_FINISH: number;
    /** @deprecated Use `constants.Z_BLOCK` */
    const Z_BLOCK: number;
    /** @deprecated Use `constants.Z_TREES` */
    const Z_TREES: number;

    // Return codes for the compression/decompression functions.
    // Negative values are errors, positive values are used for special but normal events.
    /** @deprecated Use `constants.Z_OK` */
    const Z_OK: number;
    /** @deprecated Use `constants.Z_STREAM_END` */
    const Z_STREAM_END: number;
    /** @deprecated Use `constants.Z_NEED_DICT` */
    const Z_NEED_DICT: number;
    /** @deprecated Use `constants.Z_ERRNO` */
    const Z_ERRNO: number;
    /** @deprecated Use `constants.Z_STREAM_ERROR` */
    const Z_STREAM_ERROR: number;
    /** @deprecated Use `constants.Z_DATA_ERROR` */
    const Z_DATA_ERROR: number;
    /** @deprecated Use `constants.Z_MEM_ERROR` */
    const Z_MEM_ERROR: number;
    /** @deprecated Use `constants.Z_BUF_ERROR` */
    const Z_BUF_ERROR: number;
    /** @deprecated Use `constants.Z_VERSION_ERROR` */
    const Z_VERSION_ERROR: number;

    // Compression levels.
    /** @deprecated Use `constants.Z_NO_COMPRESSION` */
    const Z_NO_COMPRESSION: number;
    /** @deprecated Use `constants.Z_BEST_SPEED` */
    const Z_BEST_SPEED: number;
    /** @deprecated Use `constants.Z_BEST_COMPRESSION` */
    const Z_BEST_COMPRESSION: number;
    /** @deprecated Use `constants.Z_DEFAULT_COMPRESSION` */
    const Z_DEFAULT_COMPRESSION: number;

    // Compression strategy.
    /** @deprecated Use `constants.Z_FILTERED` */
    const Z_FILTERED: number;
    /** @deprecated Use `constants.Z_HUFFMAN_ONLY` */
    const Z_HUFFMAN_ONLY: number;
    /** @deprecated Use `constants.Z_RLE` */
    const Z_RLE: number;
    /** @deprecated Use `constants.Z_FIXED` */
    const Z_FIXED: number;
    /** @deprecated Use `constants.Z_DEFAULT_STRATEGY` */
    const Z_DEFAULT_STRATEGY: number;

    /** @deprecated */
    const Z_BINARY: number;
    /** @deprecated */
    const Z_TEXT: number;
    /** @deprecated */
    const Z_ASCII: number;
    /** @deprecated  */
    const Z_UNKNOWN: number;
    /** @deprecated */
    const Z_DEFLATED: number;
}
