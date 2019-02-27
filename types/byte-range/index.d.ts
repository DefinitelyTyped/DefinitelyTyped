// Type definitions for byte-range 1.0
// Project: https://github.com/lukechilds/byte-range#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        signed?: boolean;
    }

    type ByteRange = [number, number];
}
