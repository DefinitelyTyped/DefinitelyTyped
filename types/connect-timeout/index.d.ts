// Type definitions for connect-timeout
// Project: https://github.com/expressjs/timeout
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare namespace Express {
    export interface Request {
        /**
         * @summary Clears the timeout on the request.
         */
        clearTimeout(): void;

        /**
         * @summary true if timeout fired; false otherwise.
         */
        timedout: boolean;
    }
}

declare module "connect-timeout" {
    import express = require("express");

    namespace e {
        /**
         * @summary Interface for timeout options.
         * @interface
         */
        interface TimeoutOptions {
            /**
             * @summary Controls if this module will "respond" in the form of forwarding an error.
             * @type {boolean}
             */
            respond?: boolean;
        }
    }

    function e(timeout: string, options?: e.TimeoutOptions): express.RequestHandler;
    export = e;
}
