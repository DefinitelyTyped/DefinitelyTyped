// Type definitions for bytes v3.0.0
// Project: https://github.com/visionmedia/bytes.js
// Definitions by: Zhiyuan Wang <https://github.com/danny8002>
//                 Rickard Laurin <https://github.com/believer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BytesOptions {
    decimalPlaces?: number;
    thousandsSeparator?: string;
    unitSeparator?: string;
    fixedDecimals?: boolean;
    unit?: string;
}

/**
 * Convert the given value in bytes into a string.
 *
 * @param {number} value
 * @param {BytesFormatOptions} [options]
 * @returns {string}
 */
declare function bytes(value: number, options?: BytesOptions): string;

/**
 * Parse string to an integer in bytes.
 *
 * @param {string} value
 * @returns {number}
 */
declare function bytes(value: string): number;

declare namespace bytes {
    /**
     * Format the given value in bytes into a string.
     *
     * If the value is negative, it is kept as such.
     * If it is a float, it is rounded.
     *
     * @param {number} value
     * @param {BytesFormatOptions} [options]
     * @returns {string}
     */

    function format(value: number, options?: BytesOptions): string;

    /**
     * Just return the input number value.
     *
     * @param {number} value
     * @returns {number}
     */
    function parse(value: number): number;

    /**
     * Parse the string value into an integer in bytes.
     *
     * If no unit is given, it is assumed the value is in bytes.
     *
     * @param {string} value
     * @returns {number}
     */
    function parse(value: string): number;
}

export = bytes;
