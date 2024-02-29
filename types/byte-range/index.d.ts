export = byteRange;

/**
 * Calculates integer ranges for a given number of bytes.
 *
 * @param bytes Number of bytes to return the integer range for. Must be a positive integer.
 */
declare function byteRange(bytes: number, options?: byteRange.Options): byteRange.ByteRange;

declare namespace byteRange {
    /**
     * Precomputed byte range for an unsigned 8 bit integer.
     */
    const uint8: ByteRange;
    /**
     * Precomputed byte range for an unsigned 16 bit integer.
     */
    const uint16: ByteRange;
    /**
     * Precomputed byte range for an unsigned 32 bit integer.
     */
    const uint32: ByteRange;
    /**
     * Precomputed byte range for an signed 8 bit integer.
     */
    const int8: ByteRange;
    /**
     * Precomputed byte range for an signed 16 bit integer.
     */
    const int16: ByteRange;
    /**
     * Precomputed byte range for an signed 32 bit integer.
     */
    const int32: ByteRange;

    interface Options {
        /**
         * @default false
         */
        signed?: boolean | undefined;
    }

    type ByteRange = [number, number];
}
