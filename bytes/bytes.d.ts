// Type definitions for bytes v2.4.0
// Project: https://github.com/visionmedia/bytes.js
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'bytes' {
    interface BytesOptions {
      decimalPlaces?: number,
      thousandsSeparator?: string,
      unitSeparator?: string,
      fixedDecimals?: boolean
    }
    /**
     * Format the given value in bytes into a string.
     *
     * If the value is negative, take Math.abs(). If it is a float,
     * it is rounded.
     *
     * @param {number} value
     * @param {BytesFormatOptions} [options]
     */

    function format(value: number, options?: { thousandsSeparator: string }): string;

    /**
     * Just return the input number value.
     *
     * @param {number} value
     * @return {number}
     */
    function bytes(value: number, options?: BytesOptions): string;

    /**
     * Parse the string value into an integer in bytes.
     *
     * If no unit is given, it is assumed the value is in bytes.
     *
     * @param {string} value
     * @return {number}
     */
    function bytes(value: string): number;

    namespace bytes {

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
}

export = bytes;
