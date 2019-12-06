// Type definitions for winston-loggly-bulk 3.0
// Project: https://github.com/hongyiweiwu/winston-loggly-bulk
// Definitions by: Yi Hong <https://github.com/hongyiweiwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import TransportStream = require("winston-transport");

declare module 'winston/lib/winston/transports' {
    interface Transports {
        Loggly: typeof Loggly;
        flushLogsAndExit: typeof flushLogsAndExit;
    }
}

export namespace Loggly {
    interface LogglyBulkTransportOptions extends TransportStream.TransportStreamOptions {
        /**
         * The subdomain of your Loggly account.
         */
        subdomain: string;

        /**
         * The authentication information for your Loggly account.
         */
        auth?: string;

        /**
         * The name of the input this instance should log to.
         */
        inputName?: string;
        /**
         * The input token of the input this instance should log to.
         */
        inputToken?: string;
        /**
         * If true, messages will be sent to Loggly as JSON.
         */
        json?: boolean;
        /**
         * An array  of tags to send to loggly.
         */
        tags?: string[];
        /**
         * If true, sends messages using bulk url.
         */
        isBulk?: boolean;
        /**
         * Strip color codes from the logs before sending.
         */
        stripColors?: boolean;
        bufferOptions?: {
            /**
             * Number of logs to be buffered.
             */
            size?: number;
            /**
             * Time in milliseconds to retry sending buffered logs.
             */
            retriesInMilliSeconds?: number;
        };
        /**
         * If false, library will not include timestamp in log events.
         */
        timestamp?: boolean;
    }
}

export function flushLogsAndExit(): void;

export class Loggly extends TransportStream {
    constructor(options: Loggly.LogglyBulkTransportOptions);
}
