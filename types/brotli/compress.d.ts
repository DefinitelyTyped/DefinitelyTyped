interface CompressOptions {
    /**
     * The Brotli compression mode:
     * - `0` - generic (default)
     * - `1` - text (for UTF-8 format text input)
     * - `2` - font (WOFF2)
     */
    mode?: 0 | 1 | 2 | undefined;
    /**
     * The Brotli quality level, ranging from 0 (fastest) to 11 (best compression).
     * @default 11
     */
    quality?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | undefined;
    /**
     * The LZ77 window size. Valid range is 10-24.
     * @default 22
     */
    lgwin?: number | undefined;
    /**
     * An optional pre-shared dictionary to improve compression ratio.
     * Both the compressor and decompressor must use the same dictionary.
     */
    dictionary?: string | undefined;
}

/**
 * Compresses the given buffer using the Brotli algorithm.
 * Returns `null` on error.
 *
 * @param buffer - The input data to compress.
 * @param options - Optional compression settings.
 */
declare function compress(buffer: Buffer, options?: CompressOptions): Uint8Array | null;

export = compress;
