// Type definitions for console-stamp 0.2.0
// Project: https://github.com/starak/node-console-stamp
// Definitions by: Eric Byers <https://github.com/ericbyers>
//                 Guus De Graeve <https://github.com/guusdegraeve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function consoleStamp(console: {}, options?: {
    /**
     * A string with date format based on Javascript Date Format
     */
    pattern?: string

    /**
     * If true it will show the label (LOG | INFO | WARN | ERROR)
     */
    label?: boolean;

    /**
     * A custom prefix for the label.
     */
    labelPrefix?: string;

    /**
     * A custom suffix for the label.
     */
    labelSuffix?: string;

    /**
     * An array containing the methods to include in the patch
     */
    include?: any;

    /**
     * An array containing the methods to exclude in the patch)
     */
    exclude?: any;

    /**
     * Types can be String, Object (interpreted with util.inspect), or Function. See the test-metadata.js for examples.
     * Note that metadata can still be sent as the third parameter (as in vesion 1.6) as a backward compatibillity feature, but this is deprecated.
     */
    metadata?: any;

    /**
     * An object representing a color theme. More info https://www.npmjs.com/package/colors
     */
    colors?: {
        stamp?: any;
        label?: any;
        metadata?: any;
    };
}): void;

export = consoleStamp;
