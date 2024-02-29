interface CompressOptions {
    /**
     * The Brotli compression mode. Possible modes are:
     * 0 - generic (default)
     * 1 - text (for UTF-8 format text input)
     * 2 - font (WOFF2)
     */
    mode?: 0 | 1 | 2 | undefined;
    /**
     * The Brotli quality level, possible levels are 0-11. The default level is 11.
     */
    quality?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | undefined;
    /**
     * The LZ77 window size, default is 22.
     */
    lgwin?: number | undefined;
}

declare function compress(buffer: Buffer, options?: CompressOptions): Uint8Array;

export = compress;
