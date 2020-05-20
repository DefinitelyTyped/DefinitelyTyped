// Type definitions for strong-error-handler 2.3
// Project: https://github.com/strongloop/strong-error-handler
// Definitions by: Jacob Copeland <https://github.com/blankstar85>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare namespace StrongErrorHandler {
    interface options {
        /***
         * HTTP responses include all error properties, including sensitive data such as file paths,
         * URLs and stack traces, defaults to false.
         */
        debug?: boolean;

        /***
         *If true, all errors are printed via console.error, including an array of fields (custom error properties)
         *that are safe to include in response messages (both 4xx and 5xx).
         *If false, sends only the error back in the response.
         * Defaults to true
         */
        log?: boolean;

        /***
         * Specifies property names on errors that are allowed to be passed through in 4xx and 5xx responses.
         */
        safeFields?: [string];

        /***
         * Specify the default response content type to use when the client does not provide any Accepts header.
         * Defaults to 'json'.
         */
        defaultType?: string;

        /***
         * Negotiate the response content type via Accepts request header.
         * When disabled, strong-error-handler will always use the default content type when producing responses.
         * Disabling content type negotiation is useful if you want to see JSON-formatted
         * error responses in browsers, because browsers usually prefer HTML and XML over other content types.
         */
        negotiateContentType?: boolean;
    }
}

/***
 * Create a new strong error middleware funciton using the given options.
 * @param options
 */
declare function createStrongErrorHandler(options?: StrongErrorHandler.options): express.RequestHandler;

export = createStrongErrorHandler;
