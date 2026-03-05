/**
 * Options for the Formatter.
 */
interface FormatterOptions {
    /**
     * Custom function to get keys from an object.
     */
    keysFunc?: (obj: object) => string[];

    /**
     * If false, uses Object.getOwnPropertyNames instead of Object.keys.
     */
    keys?: boolean;

    /**
     * Maximum line length before wrapping. Default: 60.
     */
    maxLineLength?: number;

    /**
     * Property separator. Default: ','.
     */
    propSep?: string;

    /**
     * If true, formats dates in UTC.
     */
    isUTCdate?: boolean;
}

/**
 * Formatter class for converting values to string representations.
 */
declare class Formatter {
    constructor(opts?: FormatterOptions);

    /**
     * Format a value to a string representation.
     * @param value - The value to format
     * @returns Formatted string representation
     */
    format(value: unknown): string;
}

/**
 * Default format function that creates a Formatter and formats the value.
 *
 * @param value - The value to format
 * @param opts - Optional formatter options
 * @returns Formatted string representation
 *
 * @example
 * ```javascript
 * const format = require('should-format');
 *
 * format({ a: 1, b: 2 }); // => "{ a: 1, b: 2 }"
 * format([1, 2, 3]); // => "[ 1, 2, 3 ]"
 * format(null); // => "null"
 * ```
 */
declare function format(value: unknown, opts?: FormatterOptions): string;

declare namespace format {
    export { Formatter, FormatterOptions };
}

export = format;
