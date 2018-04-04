declare namespace adone {
    /**
     * Various compressors
     */
    namespace compressor {
        namespace I {
            namespace zlib {
                type TypedArray = Int8Array | Uint8Array
                    | Uint8ClampedArray
                    | Int16Array | Uint16Array
                    | Int32Array | Uint32Array
                    | Float32Array | Float64Array;

                interface CommonOptions {
                    flush?: number;
                    finishFlush?: number;
                    chunkSize?: number;

                    /**
                     * The base two logarithm of the window size (the size of the history buffer).
                     * It should be in the range 8..15.
                     * Larger values of this parameter result in better compression at the expense of memory usage.
                     */
                    windowBits?: number;
                }

                interface CompressStreamOptions extends CommonOptions {
                    /**
                     * The compression level must be Z_DEFAULT_COMPRESSION, or between 0 and 9:
                     * 1 gives best speed,
                     * 9 gives best compression,
                     * 0 gives no compression at all (the input data is simply copied a block at a time).
                     * Z_DEFAULT_COMPRESSION requests a default compromise between speed and compression (currently equivalent to level 6)
                     */
                    level?: number;

                    /**
                     * How much memory should be allocated for the internal compression state
                     *
                     * memLevel=1 uses minimum memory but is slow and reduces compression ratio
                     *
                     * memLevel=9 uses maximum memory for optimal speed
                     */
                    memLevel?: number;

                    /**
                     * Used to tune the compression algorithm.
                     *
                     * Use the value Z_DEFAULT_STRATEGY for normal data,
                     * Z_FILTERED for data produced by a filter (or predictor),
                     * Z_HUFFMAN_ONLY to force Huffman encoding only (no string match),
                     * or Z_RLE to limit match distances to one (run-length encoding).
                     */
                    strategy?: number;
                }

                type DecompressStreamOptions = CommonOptions;

                interface CompressOptions extends CompressStreamOptions {
                    /**
                     * If true, returns an object with buffer and engine
                     */
                    info?: boolean;
                }

                interface DecompressOptions extends DecompressStreamOptions {
                    /**
                     * If true, returns an object with buffer and engine
                     */
                    info?: boolean;
                }

                interface Info<T> {
                    buffer: Buffer;
                    engine: T;
                }

                type GzipInfo = Info<nodestd.zlib.Gzip>;

                type GunzipInfo = Info<nodestd.zlib.Gzip>;

                type DeflateInfo = Info<nodestd.zlib.Deflate>;

                type DeflateRawInfo = Info<nodestd.zlib.DeflateRaw>;

                type InflateInfo = Info<nodestd.zlib.Inflate>;

                type InflateRawInfo = Info<nodestd.zlib.InflateRaw>;
            }
        }
        /**
         * GZIP compressor
         */
        namespace gz {
            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer, options: I.zlib.CompressOptions & { info: true }): Promise<I.zlib.GzipInfo>;

            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer, options?: I.zlib.CompressOptions): Promise<Buffer>;

            /**
             * Synchronously compreses the given string or buffer
             */
            function compressSync(buf: string | Buffer, options: I.zlib.CompressOptions & { info: true }): I.zlib.GzipInfo;

            /**
             * Synchronously compreses the given string or buffer
             */
            function compressSync(buf: string | Buffer, options?: I.zlib.CompressOptions): Buffer;

            /**
             * Creates a compress stream
             */
            function compressStream(options?: I.zlib.CompressStreamOptions): nodestd.zlib.Gzip;

            /**
             * Decompresses the given string or buffer
             */
            function decompress(buf: string | Buffer, options: I.zlib.DecompressOptions & { info: true }): Promise<I.zlib.GunzipInfo>;

            /**
             * Decompresses the given string or buffer
             */
            function decompress(buf: string | Buffer, options?: I.zlib.DecompressOptions): Promise<Buffer>;

            /**
             * Synchronously decompresses the given string or buffer
             */
            function decompressSync(buf: string | Buffer, options: I.zlib.DecompressOptions & { info: true }): I.zlib.GunzipInfo;

            /**
             * Synchronously decompresses the given string or buffer
             */
            function decompressSync(buf: string | Buffer, options?: I.zlib.DecompressOptions): Buffer;

            /**
             * Creates a decompress stream
             */
            function decompressStream(options?: I.zlib.DecompressStreamOptions): nodestd.zlib.Gunzip;

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
        }

        /**
         * Deflate compressor
         */
        namespace deflate {
            namespace I {
                interface CompressStreamOptions extends compressor.I.zlib.CompressStreamOptions {
                    dictionary?: Buffer | DataView | compressor.I.zlib.TypedArray;
                }

                interface DecompressStreamOptions extends compressor.I.zlib.DecompressStreamOptions {
                    dictionary?: Buffer | DataView | compressor.I.zlib.TypedArray;
                }

                interface CompressOptions extends CompressStreamOptions {
                    /**
                     * If true, returns an object with buffer and engine
                     */
                    info?: boolean;
                }

                interface DecompressOptions extends DecompressStreamOptions {
                    /**
                     * If true, returns an object with buffer and engine
                     */
                    info?: boolean;
                }

                type DeflateInfo = compressor.I.zlib.DeflateInfo;

                type DeflateRawInfo = compressor.I.zlib.DeflateRawInfo;

                type InflateInfo = compressor.I.zlib.InflateInfo;

                type InflateRawInfo = compressor.I.zlib.InflateRawInfo;
            }

            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer, options: I.CompressOptions & { info: true }): Promise<I.DeflateInfo>;

            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer, options?: I.CompressOptions): Promise<Buffer>;

            /**
             * Synchronously compresses the given string or buffer
             */
            function compressSync(buf: string | Buffer, options: I.CompressOptions & { info: true }): I.DeflateInfo;

            /**
             * Synchronously compresses the given string or buffer
             */
            function compressSync(buf: string | Buffer, options?: I.CompressOptions): Buffer;

            /**
             * Creates a compress stream
             */
            function compressStream(options?: I.CompressStreamOptions): nodestd.zlib.Deflate;

            /**
             * Compresses data using deflate, and does not append a zlib header
             */
            function rawCompress(buf: string | Buffer, options: I.CompressOptions & { info: true }): Promise<I.DeflateRawInfo>;

            /**
             * Compresses data using deflate, and does not append a zlib header
             */
            function rawCompress(buf: string | Buffer, options?: I.CompressOptions): Promise<Buffer>;

            /**
             * Synchronously compresses data using deflate, and does not append a zlib header
             */
            function rawCompressSync(buf: string | Buffer, options: I.CompressOptions & { info: true }): I.DeflateRawInfo;

            /**
             * Synchronously compresses data using deflate, and does not append a zlib header
             */
            function rawCompressSync(buf: string | Buffer, options?: I.CompressOptions): Buffer;

            /**
             * Creates a raw compress stream
             */
            function rawCompressStream(options?: I.CompressStreamOptions): nodestd.zlib.DeflateRaw;

            /**
             * Decomrpesses the given string of buffer
             */
            function decompress(buf: string | Buffer, options: I.DecompressOptions & { info: true }): Promise<I.InflateInfo>;

            /**
             * Decomrpesses the given string of buffer
             */
            function decompress(buf: string | Buffer, options?: I.DecompressOptions): Promise<Buffer>;

            /**
             * Synchronously decomrpesses the given string of buffer
             */
            function decompressSync(buf: string | Buffer, options: I.DecompressOptions & { info: true }): I.InflateInfo;

            /**
             * Synchronously decomrpesses the given string of buffer
             */
            function decompressSync(buf: string | Buffer, options?: I.DecompressOptions): Buffer;

            /**
             * Creates a decompress stream
             */
            function decompressStream(options?: I.DecompressStreamOptions): nodestd.zlib.Inflate;

            /**
             * Decompresses raw compressed data
             */
            function rawDecompress(buf: string | Buffer, options: I.DecompressOptions & { info: true }): Promise<I.InflateRawInfo>;

            /**
             * Decompresses raw compressed data
             */
            function rawDecompress(buf: string | Buffer, options?: I.DecompressOptions): Promise<Buffer>;

            /**
             * Synchronously decompresses raw compressed data
             */
            function rawDecompressSync(buf: string | Buffer, options: I.DecompressOptions & { info: true }): I.InflateRawInfo;

            /**
             * Synchronously decompresses raw compressed data
             */
            function rawDecompressSync(buf: string | Buffer, options?: I.DecompressOptions): Buffer;

            /**
             * Creates a raw decompress stream
             */
            function rawDecompressStream(options?: I.DecompressStreamOptions): nodestd.zlib.InflateRaw;

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
        }

        /**
         * Brotli compressor (br)
         */
        namespace brotli {
            namespace I {
                interface CompressOptions {
                    /**
                     * Tune encoder for specific input.
                     *
                     * 0 - Generic mode, compressor does not know anything in advance about the properties of the input.
                     *
                     * 1 - Text mode, compression mode for UTF-8 formatted text input.
                     *
                     * 2 - Font, compression mode used in WOFF 2.0.
                     *
                     * Default is 0.
                     */
                    mode?: number;

                    /**
                     * The main compression speed-density lever.
                     * The higher the quality, the slower the compression.
                     * From 0 to 11.
                     *
                     * Default is 11.
                     */
                    quality?: number;

                    /**
                     * Recommended sliding LZ77 window size.
                     * Encoder may reduce this value, e.g. if input is much smaller than window size.
                     * Window size is (1 << value) - 16.
                     * From 10 to 24.
                     *
                     * Default is 22.
                     */
                    lgwin?: number;

                    /**
                     * Recommended input block size.
                     * Encoder may reduce this value, e.g. if input is much smaller than input block size.
                     * Bigger input block size allows better compression, but consumes more memory.
                     * From 16 to 24.
                     */
                    lgblock?: number;

                    /**
                     * Estimated total input size for all BrotliEncoderCompressStream calls.
                     *
                     * Automatically set for `compress` and `compressSync` to the input buffer length
                     */
                    size_hint?: number;

                    /**
                     * Flag that affects usage of "literal context modeling" format feature.
                     * This flag is a "decoding-speed vs compression ratio" trade-off.
                     */
                    disable_literal_context_modeling?: boolean;

                    /**
                     * A custom dictionary
                     */
                    dictionary?: Buffer;
                }

                interface DecompressOptions {
                    /**
                     * A custom dictionary
                     */
                    dictionary?: Buffer;
                }

                interface EncodeStream extends nodestd.stream.Transform {
                    flush(force?: boolean): void;
                }

                type DecodeStream = nodestd.stream.Transform;
            }

            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer, options?: I.CompressOptions): Promise<Buffer>;

            /**
             * Synchronously compresses the given string or buffer
             */
            function compressSync(buf: string | Buffer, options?: I.CompressOptions): Buffer;

            /**
             * Creates a compress stream
             */
            function compressStream(options?: I.CompressOptions): I.EncodeStream;

            /**
             * Decompresses the given buffer
             */
            function decompress(buf: Buffer, options?: I.DecompressOptions): Promise<Buffer>;

            /**
             * Synchronously decompresses the given buffer
             */
            function decompressSync(buf: Buffer, options?: I.DecompressOptions): Buffer;

            /**
             * Creates a decompress stream
             */
            function decompressStream(options?: I.DecompressOptions): I.DecodeStream;
        }

        /**
         * Snappy compressor
         */
        namespace snappy {
            /**
             * Compresses the given string or buffer
             */
            function compress(buf: string | Buffer): Promise<Buffer>;

            /**
             * Synchronously compresses the given string or buffer
             */
            function compressSync(buf: string | Buffer): Buffer;

            /**
             * Checks whether the given buffer is a valid compressed buffer
             */
            function isValidCompressed(buf: Buffer): Promise<boolean>;

            /**
             * Synchronously checks whether the given buffer is a valid compressed buffer
             */
            function isValidCompressedSync(buf: Buffer): boolean;

            /**
             * Decompresses the given buffer
             */
            function decompress(buf: Buffer): Promise<Buffer>;

            /**
             * Synchronously decompresses the given buffer
             */
            function decompressSync(buf: Buffer): Buffer;
        }

        namespace I.lzma {
            interface Filter {
                id: "LZMA_FILTERS_MAX"
                | "LZMA_FILTER_ARM"
                | "LZMA_FILTER_ARMTHUMB"
                | "LZMA_FILTER_IA64"
                | "LZMA_FILTER_POWERPC"
                | "LZMA_FILTER_SPARC"
                | "LZMA_FILTER_X86"
                | "LZMA_FILTER_LZMA1"
                | "LZMA_FILTER_LZMA2";
            }

            interface DeltaFilter {
                id: "LZMA_FILTER_DELTA";
                dist?: number;
            }

            interface LZMAFilter {
                id: "LZMA_FILTER_LZMA1" | "LZMA_FILTER_LZMA2";

                /**
                 * Dictionary size indicates how many bytes of the recently processed
                 * uncompressed data is kept in memory.
                 */
                dict_size?: number;

                /**
                 * The number of literal position bits.
                 * From 0 to 4.
                 * Default is 0.
                 * In addition, the sum of lc and lp must not exceed 4.
                 */
                lp?: number;

                /**
                 * The number of literal context bits.
                 * From 0 to 4.
                 * Default is 3.
                 * In addition, the sum of lc and lp must not exceed 4.
                 */
                lc?: number;

                /**
                 * The number of position bits.
                 * From 0 to 4.
                 * Default is 2.
                 */
                pb?: number;

                /**
                 * Compression mode
                 *
                 * lzma.MODE_FAST - 1
                 *
                 * lzma.MODE_NORMAL - 2
                 */
                mode?: number;

                /**
                 * Specify what is considered to be a nice length for a match.
                 * Once a match of at least nice bytes is found, the algorithm stops looking for possibly better matches.
                 * From 2 to 273.
                 * Default is 64.
                 */
                nice_len?: number;

                /**
                 * Match finder has major effect on both speed and compression ratio.
                 * Usually hash chains are faster than binary trees.
                 *
                 * MF_HC3 - 3
                 *
                 * MF_HC4 - 4
                 *
                 * MF_BT2 - 18
                 *
                 * MF_BT3 - 19
                 *
                 * MF_BT4 - 201
                 *
                 */
                mf?: number;

                /**
                 * Specify  the  maximum  search  depth in the match finder.
                 * The default is the special value of 0, which makes the
                 * compressor determine a reasonable depth from mf and nice.
                 *
                 * Reasonable depth for Hash Chains is 4-100 and 16-1000 for Binary Trees.
                 */
                depth?: number;

                /**
                 * A number from 0 to 9, 0 being the fastest and weakest compression,
                 * 9 the slowest and highest compression level
                 */
                preset?: number;
            }

            type Filters = Array<Filter | DeltaFilter | LZMAFilter>;

            type Coder = "easyEncoder"
                | "autoDecoder"
                | "aloneEncoder"
                | "aloneDecoder"
                | "rawEncoder"
                | "rawDecoder"
                | "streamEncoder"
                | "streamDecoder";

            interface AloneEncoderOptions {
                /**
                 * Any of:
                 *
                 * CHECK_CRC32 (1)
                 *
                 * CHECK_CRC64 (4)
                 *
                 * CHECK_NONE (0)
                 *
                 * CHECK_SHA256 (10)
                 */
                check?: number;

                /**
                 * A memory limit for (de-)compression in bytes
                 */
                memlimit?: number;

                /**
                 * A number from 0 to 9, 0 being the fastest and weakest compression, 9 the slowest and highest compression level
                 */
                preset?: number;

                /**
                 * A bitwise OR of
                 * LZMA_TELL_NO_CHECK,
                 * LZMA_TELL_UNSUPPORTED_CHECK,
                 * LZMA_TELL_ANY_CHECK,
                 * LZMA_CONCATENATED
                 */
                flags?: number;

                /**
                 * If true, forces synchronous coding (i.e. no usage of threading)
                 */
                synchronous?: boolean;

                /**
                 * The default size for allocated buffers
                 */
                bufsize?: number;

                /**
                 * Set to an integer to use liblzma’s multi-threading support. 0 will choose the number of CPU cores.
                 */
                threads?: number;

                /**
                 * Maximum uncompressed size of a block in multi-threading mode
                 */
                blockSize?: number;

                /**
                 * 	Timeout for a single encoding operation in multi-threading mode
                 */
                timeout?: number;

                /**
                 * An array of additional filters
                 */
                filters?: Filters;
            }

            interface Stream extends nodestd.stream.Transform {
                bufsize: number;

                totalIn(): number;

                totalOut(): number;

                cleanup(): void;
            }

            interface EasyEncoderOptions {
                /**
                 * A number from 0 to 9, 0 being the fastest and weakest compression, 9 the slowest and highest compression level
                 */
                preset?: number;

                /**
                 * Any of:
                 *
                 * CHECK_CRC32 (1)
                 *
                 * CHECK_CRC64 (4)
                 *
                 * CHECK_NONE (0)
                 *
                 * CHECK_SHA256 (10)
                 */
                check?: number;
            }

            interface AutoDecoderOptions {
                /**
                 * A memory limit for (de-)compression in bytes
                 */
                memlimit?: number;

                /**
                 * A bitwise OR of
                 * LZMA_TELL_NO_CHECK,
                 * LZMA_TELL_UNSUPPORTED_CHECK,
                 * LZMA_TELL_ANY_CHECK,
                 * LZMA_CONCATENATED
                 */
                flags?: number;
            }

            interface AloneDecoderOptions {
                /**
                 * A memory limit for (de-)compression in bytes
                 */
                memlimit?: number;
            }

            interface RawEncoderOptions {
                /**
                 * An array of additional filters
                 */
                filters?: Filters;
            }

            interface RawDecoderOptions {
                /**
                 * An array of additional filters
                 */
                filters?: Filters;
            }

            interface StreamEncoderOptions {
                /**
                 * Any of:
                 *
                 * CHECK_CRC32 (1)
                 *
                 * CHECK_CRC64 (4)
                 *
                 * CHECK_NONE (0)
                 *
                 * CHECK_SHA256 (10)
                 */
                check?: number;

                /**
                 * An array of additional filters
                 */
                filters?: Filters;
            }

            interface StreamDecoderOptions {
                /**
                 * A memory limit for (de-)compression in bytes
                 */
                memlimit?: number;

                /**
                 * A bitwise OR of
                 * LZMA_TELL_NO_CHECK,
                 * LZMA_TELL_UNSUPPORTED_CHECK,
                 * LZMA_TELL_ANY_CHECK,
                 * LZMA_CONCATENATED
                 */
                flags?: number;
            }
        }

        /**
         * lzma compressor + common lzma functionality
         */
        namespace lzma {
            const asyncCodeAvailable: boolean;

            /**
             * Returns the version of the underlying C library
             */
            function versionNumber(): number;

            /**
             * Returns the version of the underlying C library
             */
            function versionString(): string;

            /**
             * Checks whether the given Check ID is supported by this liblzma build
             */
            function checkIsSupported(check: number): boolean;

            /**
             * Return the byte size of a check sums
             *
             * @param check Any supported check constant
             */
            function checkSize(check: number): number;

            /**
             * Checks whether the given encoder filter is supported
             */
            function filterEncoderIsSupported(encoder: string): boolean;

            /**
             * Checks whether the given encoder filter is supported
             */
            function filterDecoderIsSupported(decoder: string): boolean;

            /**
             * Checks whether the given match finder is supported by this liblzma build
             */
            function mfIsSupported(mf: number): boolean;

            /**
             * Checks whether the given compression mode is supported by this liblzma build
             */
            function modeIsSupported(mode: number): boolean;

            /**
             * Returns the approximate memory usage when encoding using rawEncoder for a given filter list
             */
            function rawEncoderMemusage(filters: I.lzma.Filters): number;

            /**
             * Returns the approximate memory usage when decoding using rawDecoder for a given filter list
             */
            function rawDecoderMemusage(filters: I.lzma.Filters): number;

            /**
             * Returns the approximate memory usage when encoding using easyEncoder for a given preset
             */
            function easyEncoderMemusage(preset: number): number;

            /**
             * Returns the approximate memory usage when decoding using easyDecoder for a given preset
             */
            function easyDecoderMemusage(preset: number): number;

            /**
             * Returns a standard LZMA2 (.xz) encoder
             *
             * @param options preset or options
             */
            function createStream(coder: "easyEncoder", options?: number | I.lzma.EasyEncoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA 1/2 (bith .xz and .lzma) decoder with auto detection of file format
             *
             * @param options preset or options
             */
            function createStream(coder: "autoDecoder", options?: I.lzma.AutoDecoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA encoder
             *
             * @param options preset or options
             */
            function createStream(coder: "aloneEncoder", options?: number | I.lzma.AloneEncoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA decoder
             */
            function createStream(coder: "aloneDecoder", options?: I.lzma.AloneDecoderOptions): I.lzma.Stream;

            /**
             * Returns a custom encoder corresponding to lzma_raw_encoder
             */
            function createStream(coder: "rawEncoder", options?: I.lzma.RawEncoderOptions): I.lzma.Stream;

            /**
             * Returns a custom decoder corresponding to lzma_raw_decoder
             */
            function createStream(coder: "rawDecoder", options?: I.lzma.RawDecoderOptions): I.lzma.Stream;

            /**
             * Returns a custom encoder corresponding to lzma_stream_encoder
             */
            function createStream(coder: "streamEncoder", options?: I.lzma.StreamEncoderOptions): I.lzma.Stream;

            /**
             * Returns a custom decoder corresponding to lzma_stream_decoder
             */
            function createStream(coder: "streamDecoder", options?: I.lzma.StreamDecoderOptions): I.lzma.Stream;

            /**
             * Encodes the given string or buffer using the given stream
             */
            function singleStringCoding(
                stream: I.lzma.Stream,
                string: string | Buffer,
                onFinish?: (err: any, data: Buffer) => void,
                onProgress?: (progress: number) => void
            ): Promise<Buffer>;

            const CHECK_CRC32: number;
            const CHECK_CRC64: number;
            const CHECK_NONE: number;
            const CHECK_SHA256: number;

            const FILTERS_MAX: string;
            const FILTER_ARM: string;
            const FILTER_ARMTHUMB: string;
            const FILTER_IA64: string;
            const FILTER_POWERPC: string;
            const FILTER_SPARC: string;
            const FILTER_X86: string;
            const FILTER_DELTA: string;
            const FILTER_LZMA1: string;
            const FILTER_LZMA2: string;

            const PRESET_EXTREME: number;
            const PRESET_DEFAULT: number;
            const PRESET_LEVEL_MASK: number;

            const MF_HC3: number;
            const MF_HC4: number;
            const MF_BT2: number;
            const MF_BT3: number;
            const MF_BT4: number;

            const LZMA_TELL_NO_CHECK: number;
            const LZMA_TELL_UNSUPPORTED_CHECK: number;
            const LZMA_TELL_ANY_CHECK: number;
            const LZMA_CONCATENATED: number;

            const MODE_FAST: number;
            const MODE_NORMAL: number;

            const STREAM_HEADER_SIZE: number;

            /**
             * Compresses the given string or buffer
             *
             * @param options preset or options
             */
            function compress(buf: string | Buffer, options?: number | I.lzma.AloneEncoderOptions): Promise<Buffer>;

            /**
             * Creates a compress stream
             *
             * @param options preset or options
             */
            function compressStream(options?: number | I.lzma.AloneEncoderOptions): I.lzma.Stream;

            /**
             * Decompresses the given buffer
             */
            function decompress(buf: Buffer, options?: I.lzma.AloneDecoderOptions): Promise<Buffer>;

            /**
             * Creates a decompress stream
             *
             * @param options preset or options
             */
            function decompressStream(options?: I.lzma.AloneDecoderOptions): I.lzma.Stream;
        }

        /**
         * xz compressor (lzma2) + common lzma functionality
         */
        namespace xz {
            const asyncCodeAvailable: boolean;

            /**
             * Returns the version of the underlying C library
             */
            function versionNumber(): number;

            /**
             * Returns the version of the underlying C library
             */
            function versionString(): string;

            /**
             * Checks whether the given Check ID is supported by this liblzma build
             */
            function checkIsSupported(check: number): boolean;

            /**
             * Return the byte size of a check sums
             *
             * @param check Any supported check constant
             */
            function checkSize(check: number): number;

            /**
             * Checks whether the given encoder filter is supported
             */
            function filterEncoderIsSupported(encoder: string): boolean;

            /**
             * Checks whether the given encoder filter is supported
             */
            function filterDecoderIsSupported(decoder: string): boolean;

            /**
             * Checks whether the given match finder is supported by this liblzma build
             */
            function mfIsSupported(mf: number): boolean;

            /**
             * Checks whether the given compression mode is supported by this liblzma build
             */
            function modeIsSupported(mode: number): boolean;

            /**
             * Returns the approximate memory usage when encoding using rawEncoder for a given filter list
             */
            function rawEncoderMemusage(filters: I.lzma.Filters): number;

            /**
             * Returns the approximate memory usage when decoding using rawDecoder for a given filter list
             */
            function rawDecoderMemusage(filters: I.lzma.Filters): number;

            /**
             * Returns the approximate memory usage when encoding using easyEncoder for a given preset
             */
            function easyEncoderMemusage(preset: number): number;

            /**
             * Returns the approximate memory usage when decoding using easyDecoder for a given preset
             */
            function easyDecoderMemusage(preset: number): number;

            /**
             * Returns a standard LZMA2 (.xz) encoder
             *
             * @param options preset or options
             */
            function createStream(coder: "easyEncoder", options?: number | I.lzma.EasyEncoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA 1/2 (bith .xz and .lzma) decoder with auto detection of file format
             */
            function createStream(coder: "autoDecoder", options?: I.lzma.AutoDecoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA encoder
             *
             * @param options preset or options
             */
            function createStream(coder: "aloneEncoder", options?: number | I.lzma.AloneEncoderOptions): I.lzma.Stream;

            /**
             * Returns a standard LZMA decoder
             */
            function createStream(coder: "aloneDecoder", options?: I.lzma.AloneDecoderOptions): I.lzma.Stream;

            /**
             * Returns a custom encoder corresponding to lzma_raw_encoder
             */
            function createStream(coder: "rawEncoder", options?: I.lzma.RawEncoderOptions): I.lzma.Stream;

            /**
             * Returns a custom decoder corresponding to lzma_raw_decoder
             */
            function createStream(coder: "rawDecoder", options?: I.lzma.RawDecoderOptions): I.lzma.Stream;

            /**
             * Returns a custom encoder corresponding to lzma_stream_encoder
             */
            function createStream(coder: "streamEncoder", options?: I.lzma.StreamEncoderOptions): I.lzma.Stream;

            /**
             * Returns a custom decoder corresponding to lzma_stream_decoder
             */
            function createStream(coder: "streamDecoder", options?: I.lzma.StreamDecoderOptions): I.lzma.Stream;

            /**
             * Encodes the given string or buffer using the given stream
             */
            function singleStringCoding(
                stream: I.lzma.Stream,
                string: string | Buffer,
                onFinish?: (err: any, data: Buffer) => void,
                onProgress?: (progress: number) => void
            ): Promise<Buffer>;

            const CHECK_CRC32: number;
            const CHECK_CRC64: number;
            const CHECK_NONE: number;
            const CHECK_SHA256: number;

            const FILTERS_MAX: string;
            const FILTER_ARM: string;
            const FILTER_ARMTHUMB: string;
            const FILTER_IA64: string;
            const FILTER_POWERPC: string;
            const FILTER_SPARC: string;
            const FILTER_X86: string;
            const FILTER_DELTA: string;
            const FILTER_LZMA1: string;
            const FILTER_LZMA2: string;

            const PRESET_EXTREME: number;
            const PRESET_DEFAULT: number;
            const PRESET_LEVEL_MASK: number;

            const MF_HC3: number;
            const MF_HC4: number;
            const MF_BT2: number;
            const MF_BT3: number;
            const MF_BT4: number;

            const LZMA_TELL_NO_CHECK: number;
            const LZMA_TELL_UNSUPPORTED_CHECK: number;
            const LZMA_TELL_ANY_CHECK: number;
            const LZMA_CONCATENATED: number;

            const MODE_FAST: number;
            const MODE_NORMAL: number;

            const STREAM_HEADER_SIZE: number;

            /**
             * Compresses the given string or buffer
             *
             * @param options preset or options
             */
            function compress(buf: string | Buffer, options?: number | I.lzma.EasyEncoderOptions): Promise<Buffer>;

            /**
             * Creates a compress stream
             *
             * @param options preset or options
             */
            function compressStream(options?: number | I.lzma.EasyEncoderOptions): I.lzma.Stream;

            /**
             * Decompresses the given buffer
             */
            function decompress(buf: Buffer, options?: I.lzma.AutoDecoderOptions): Promise<Buffer>;

            /**
             * Creates a decompress stream
             *
             * @param options preset or options
             */
            function decompressStream(options?: I.lzma.AutoDecoderOptions): I.lzma.Stream;
        }
    }
}
