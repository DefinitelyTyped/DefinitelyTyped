/**
 * Convert the given value in bytes into a string.
 *
 * @param value Number of bytes to convert.
 * @param options Formatting options.
 * @returns Formatted string, or null if value is invalid.
 *
 * @example
 * bytes(1024); // '1KB'
 * bytes(1000, { thousandsSeparator: ' ' }); // '1 000B'
 */
declare function bytes(value: number, options?: bytes.BytesOptions): string | null;

/**
 * Parse string to an integer in bytes.
 *
 * @param value String representation of bytes to parse.
 * @returns Number of bytes, or null if value is invalid.
 *
 * @example
 * bytes('1KB'); // 1024
 * bytes('10.5MB'); // 11010048
 */
declare function bytes(value: string): number | null;

declare namespace bytes {
    type Unit = "b" | "gb" | "kb" | "mb" | "pb" | "tb" | "B" | "GB" | "KB" | "MB" | "PB" | "TB";

    interface BytesOptions {
        /**
         * Number of decimal places to include. Default is `2`.
         */
        decimalPlaces?: number | undefined;
        /**
         * Whether to format with fixed decimal precision. Default is `false`.
         */
        fixedDecimals?: boolean | undefined;
        /**
         * Thousands separator character (e.g. `','` or `' '`). Default is `''`.
         */
        thousandsSeparator?: string | undefined;
        /**
         * Specific unit to force formatting into (e.g. `'MB'`, `'GB'`). Default is `''`.
         */
        unit?: Unit | undefined;
        /**
         * Separator between the number and metric unit. Default is `''`.
         */
        unitSeparator?: string | undefined;
    }

    /**
     * Format the given value in bytes into a string.
     *
     * If the value is negative, it is kept as such.
     * If it is a float, it is rounded.
     *
     * @param value Number of bytes to format.
     * @param options Formatting options.
     * @returns Formatted string, or null if value is invalid.
     */
    function format(value: number, options?: BytesOptions): string | null;

    /**
     * Parse the string value into an integer in bytes.
     *
     * If no unit is given, it is assumed the value is in bytes.
     *
     * @param value String representation or number to parse.
     * @returns Number of bytes, or null if value is invalid.
     */
    function parse(value: string | number): number | null;
}

export = bytes;
