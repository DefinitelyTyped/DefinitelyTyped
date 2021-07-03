// Type definitions for @adobe/node-fetch-retry 1.0
// Project: https://github.com/adobe/node-fetch-retry#readme
// Definitions by: Ricardo Souza <https://github.com/ricardoatsouza>
//                 Joachim Roeleveld <https://github.com/joachimroeleveld>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Request, RequestInit, Response } from 'node-fetch';

declare namespace fetchRetry {
    /**
     * options for fetch-retry
     */
    interface Options extends RequestInit {
        /**
         * options for retry or false if want to disable retry
         * ... other options for fetch call (method, headers, etc...)
         */
        retryOptions?: RetryOptions;
    }

    /**
     * options for retry or false if want to disable retry
     */
    interface RetryOptions {
        /**
         * time (in milliseconds) to retry until throwing an error
         */
        retryMaxDuration?: number;
        /**
         * time to wait between retries in milliseconds
         */
        retryInitialDelay?: number;
        /**
         * a function determining whether to retry on a specific HTTP code
         */
        retryOnHttpResponse?: (response: Response) => boolean;
        /**
         * backoff factor for wait time between retries (defaults to 2.0)
         */
        retryBackoff?: number;
        /**
         * Optional socket timeout in milliseconds (defaults to 60000ms)
         */
        socketTimeout?: number;
        /**
         * If true, socket timeout will be forced to use `socketTimeout` property declared (defaults to false)
         */
        forceSocketTimeout?: boolean;
    }
}

declare function fetchRetry(url: string | Request, options: fetchRetry.Options): Promise<Response>;
export = fetchRetry;
