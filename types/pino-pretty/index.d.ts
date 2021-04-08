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
         * Translate the epoch time value into a human readable date and time string.
         * This flag also can set the format string to apply when translating the date to human readable format.
         * The default format is yyyy-mm-dd HH:MM:ss.l o in UTC.
         * For a list of available pattern letters see the {@link https://www.npmjs.com/package/dateformat|dateformat documentation}.
         */
        translateTime?: boolean | string;
        /**
         * If set to true, it will print the name of the log level as the first field in the log line. Default: `false`.
         */
        levelFirst?: boolean;
        /**
         * The key in the JSON object to use as the highlighted message. Default: "msg".
         */
        messageKey?: string;
        /**
         * The key in the JSON object to use for timestamp display. Default: "time".
         */
        timestampKey?: string;
        /**
         * Format output of message, e.g. {level} - {pid} will output message: INFO - 1123 Default: `false`.
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
        messageFormat?: false | string | MessageFormatFunc;
        /**
         * If set to true, will add color information to the formatted output message. Default: `false`.
         */
        colorize?: boolean;
        /**
         * Appends carriage return and line feed, instead of just a line feed, to the formatted log line.
         */
        crlf?: boolean;
        /**
         * Define the log keys that are associated with error like objects. Default: ["err", "error"]
         */
        errorLikeObjectKeys?: string[];
        /**
         *  When formatting an error object, display this list of properties.
         *  The list should be a comma separated list of properties. Default: ''
         */
        errorProps?: string;
        /**
         * Specify a search pattern according to {@link http://jmespath.org|jmespath}
         */
        search?: string;
        /**
         * Ignore one or several keys. Example: "time,hostname"
         */
        ignore?: string;
    }
}
