// Type definitions for console-stamp 0.2.9
// Project: https://github.com/starak/node-console-stamp
// Definitions by: Eric Byers <https://github.com/ericbyers>
//                 Guus De Graeve <https://github.com/guusdegraeve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function consoleStamp(
    console: Console,
    options?: {
        /**
         * A string with date format based on [Javascript Date Format](http://blog.stevenlevithan.com/archives/date-time-format)
         *
         * - **Default**: `ddd mmm dd yyyy HH:MM:ss`
         */
        pattern?: string;

        /**
         * A custom date formatter that should return a formatted date string
         *
         * - **Default**: [dateformat](https://www.npmjs.com/package/dateformat)
         * - **Example**: `() => new Date().toString()`
         */
        formatter?: (pattern: string) => string;

        /**
         * If true it will show the label (LOG | INFO | WARN | ERROR)
         *
         * - **Default**: `true`
         */
        label?: boolean;

        /**
         * A custom prefix for the label.
         *
         * For an example see [Custom prefix and suffix example](https://github.com/starak/node-console-stamp#custom-pre-and-suffixes)
         *
         * - **Default**: `[`
         */
        labelPrefix?: string;

        /**
         * A custom suffix for the label.
         *
         * For an example see [Custom prefix and suffix example](https://github.com/starak/node-console-stamp#custom-pre-and-suffixes)
         *
         * - **Default**: `]`
         */
        labelSuffix?: string;

        /**
         * An array containing the methods to include in the patch
         *
         * - **Default**: `["log", "info", "warn", "error", "dir", "assert"]`
         */
        include?: string[];

        /**
         * An array containing the methods to exclude in the patch
         *
         * - **Default**: `[]`
         */
        exclude?: string[];

        /**
         * An array containing the methods to disable in the patch
         *
         * - **Default**: `[]`
         */
        disable?: string[];

        /**
         * A string choosing the most verbose logging function to allow.
         *
         * Ordered/grouped as such: 'log dir', 'info', 'warn assert', 'error'
         *
         * - **Default**: `log`
         */
        level?: string;

        /**
         * An object describing methods and their associated log level, to extend the existing `method <-> log level` pairs.
         *
         * For an example see [Custom methods](https://github.com/starak/node-console-stamp#custommethods).
         */
        extend?: {
            [level: string]: number;
        };

        /**
         * Types can be String, Object (interpreted with util.inspect), or Function. See the test-metadata.js for examples.
         *
         * Note that metadata can still be sent as the third parameter (as in vesion 1.6) as a backward compatibillity feature, but this is deprecated.
         */
        metadata?: any;

        /**
         * A custom `stdout` to use with [custom console](https://github.com/starak/node-console-stamp#customconsole).
         *
         * - **Default**: `process.stdout`
         */
        stdout?: NodeJS.WritableStream;

        /**
         * A custom `stderr` to use with [custom console](https://github.com/starak/node-console-stamp#customconsole).
         *
         * - **Default**: `options.stdout` or `process.stderr`
         */
        stderr?: NodeJS.WritableStream;

        /**
         * An object representing a color theme. More info https://www.npmjs.com/package/colors
         *
         * **Note**:
         *
         * To combine colors, bgColors and style, set them as an array like this: `['black', 'bgYellow', 'underline']`
         *
         * Or chain Chalk functions like this: `require('chalk').red.bgYellow.underline`
         *
         * Note also that by sending the parameter `--no-color` when you start your node app, it will prevent any colors from console.
         * For example: `node my-app.js --no-color`
         */
        colors?: {
            stamp?: string | string[] | ((text: string) => string);
            label?: string | string[] | ((text: string) => string);
            metadata?: string | string[] | ((text: string) => string);
        };

        /**
         * A custom prefix for the datestamp.
         *
         * For an example see [Custom prefix and suffix example](https://github.com/starak/node-console-stamp#custom-pre-and-suffixes)
         *
         * - **Default**: `[`
         */
        datePrefix?: string;

        /**
         * A custom suffix for the datestamp.
         *
         * For an example see [Custom prefix and suffix example](https://github.com/starak/node-console-stamp#custom-pre-and-suffixes)
         *
         * - **Default**: `]`
         */
        dateSuffix?: string;
    },
): void;

export = consoleStamp;
