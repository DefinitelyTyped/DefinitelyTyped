// Type definitions for bytes v2.5.0
// Project: https://github.com/visionmedia/bytes.js
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BytesOptions {
    decimalPlaces?: number,
    thousandsSeparator?: string,
    unitSeparator?: string,
    fixedDecimals?: boolean,
    unit?: string
}
/**
 *Convert the given value in bytes into a string.
 *
 * @param {number} value
 * @param {{
 *  thousandsSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string}
 */
declare function bytes(value: number, options?: { thousandsSeparator: string }): string;

/**
 *Parse string to an integer in bytes.
 *
 * @param {string} value
 * @returns {number}
 */
declare function bytes(value: string): number;

declare namespace bytes {

    /**
     * Format the given value in bytes into a string.
     *
     * If the value is negative, take Math.abs(). If it is a float,
     * it is rounded.
     *
     * @param {number} value
     * @param {BytesFormatOptions} [options]
     */

    function format(value: number, options?: BytesOptions): string;

    /**
     * Just return the input number value.
     *
     * @param {number} value
     * @return {number}
     */
    function parse(value: number): number;

    /**
     * Parse the string value into an integer in bytes.
     *
     * If no unit is given, it is assumed the value is in bytes.
     *
     * @param {string} value
     * @return {number}
     */
    function parse(value: string): number;
}

export = bytes;
