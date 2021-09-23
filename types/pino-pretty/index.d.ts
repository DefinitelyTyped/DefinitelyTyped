// Type definitions for pino-pretty 4.7
// Project: https://github.com/pinojs/pino-pretty#readme
// Definitions by: Adam Vigneaux <https://github.com/AdamVig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.7

import { LogDescriptor } from "pino";

export = PinoPretty;

declare function PinoPretty(options: PinoPretty.PrettyOptions): PinoPretty.Prettifier;

declare namespace PinoPretty {
    type Prettifier = (inputData: string | object) => string;
    type MessageFormatFunc = (log: LogDescriptor, messageKey: string, levelLabel: string) => string;

    interface PrettyOptions {
        /**
         * Hide objects from output (but not error object).
         * @default false
         */
        hideObject?: boolean | undefined;
        /**
         * Translate the epoch time value into a human readable date and time string. This flag also can set the format
         * string to apply when translating the date to human readable format. For a list of available pattern letters
         * see the {@link https://www.npmjs.com/package/dateformat|dateformat documentation}.
         * - The default format is `yyyy-mm-dd HH:MM:ss.l o` in UTC.
         * - Requires a `SYS:` prefix to translate time to the local system's timezone. Use the shortcut `SYS:standard`
         *   to translate time to `yyyy-mm-dd HH:MM:ss.l o` in system timezone.
         * @default false
         */
        translateTime?: boolean | string | undefined;
        /**
         * If set to true, it will print the name of the log level as the first field in the log line.
         * @default false
         */
        levelFirst?: boolean | undefined;
        /**
         * Define the key that contains the level of the log.
         * @default "level"
         */
        levelKey?: string | undefined;
        /**
         * Output the log level using the specified label.
         * @default "levelLabel"
         */
        levelLabel?: string | undefined;
        /**
         * The key in the JSON object to use as the highlighted message.
         * @default "msg"
         */
        messageKey?: string | undefined;
        /**
         * Print each log message on a single line (errors will still be multi-line).
         * @default false
         */
        singleLine?: boolean | undefined;
        /**
         * The key in the JSON object to use for timestamp display.
         * @default "time"
         */
        timestampKey?: string | undefined;
        /**
         * Format output of message, e.g. {level} - {pid} will output message: INFO - 1123
         * @default false
         *
         * @example
         * ```typescript
         * {
         *   messageFormat: (log, messageKey) => {
         *     const message = log[messageKey];
         *     if (log.requestId) return `[${log.requestId}] ${message}`;
         *     return message;
         *   }
         * }
         * ```
         */
        messageFormat?: false | string | MessageFormatFunc | undefined;
        /**
         * If set to true, will add color information to the formatted output message.
         * @default false
         */
        colorize?: boolean | undefined;
        /**
         * Appends carriage return and line feed, instead of just a line feed, to the formatted log line.
         * @default false
         */
        crlf?: boolean | undefined;
        /**
         * Define the log keys that are associated with error like objects.
         * @default ["err", "error"]
         */
        errorLikeObjectKeys?: string[] | undefined;
        /**
         *  When formatting an error object, display this list of properties.
         *  The list should be a comma separated list of properties.
         * @default ""
         */
        errorProps?: string | undefined;
        /**
         * Specify a search pattern according to {@link http://jmespath.org|jmespath}
         */
        search?: string | undefined;
        /**
         * Ignore one or several keys.
         * @example "time,hostname"
         */
        ignore?: string | undefined;
    }
}
