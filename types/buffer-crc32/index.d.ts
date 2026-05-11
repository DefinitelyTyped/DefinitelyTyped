/// <reference types="node" />

export = crc32;

/**
 * crc32 that works with binary data and fancy character sets.
 *
 * @example
 * import crc32 = require('buffer-crc32');
 *
 * // works with buffers
 * const buf = Buffer.from([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00]);
 * crc32(buf); // -> <Buffer 94 5a ab 4a>
 *
 * // will cast to buffer if given a string, so you can
 * // directly use foreign characters safely
 * crc32('自動販売機'); // -> <Buffer cb 03 1a c5>
 *
 * // and works in append mode too
 * let partialCrc = crc32('hey');
 * partialCrc = crc32(' ', partialCrc);
 * partialCrc = crc32('sup', partialCrc);
 * partialCrc = crc32(' ', partialCrc);
 * const finalCrc = crc32('bros', partialCrc); // -> <Buffer 47 fa 55 70>
 */
declare function crc32(input: string | Buffer, partialCrc?: Buffer | number): Buffer;

declare namespace crc32 {
    /**
     * Convenience method that returns a signed int instead of a `Buffer`.
     *
     * @example
     * import crc32 = require('buffer-crc32');
     *
     * // works with buffers
     * const buf = Buffer.from([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00]);
     * crc32.signed(buf); // -> -1805997238
     */
    function signed(buffer: string | Buffer, partialCrc?: Buffer | number): number;

    /**
     * Convenience method that returns an unsigned int instead of a `Buffer`.
     *
     * @example
     * import crc32 = require('buffer-crc32');
     *
     * // works with buffers
     * const buf = Buffer.from([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00]);
     * crc32.unsigned(buf); // -> 2488970058
     */
    function unsigned(buffer: string | Buffer, partialCrc?: Buffer | number): number;
}
