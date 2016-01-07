// Type definitions for connect-timeout
// Project: https://github.com/expressjs/timeout
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module Express {
    export interface Request {
        /**
         * @summary Clears the timeout on the request.
         */
        clearTimeout(): void;

        /**
         *
         * @return {boolean} true if timeout fired; false otherwise.
         */
        timedout(event: string, message: string): boolean;
    }
}

declare module "connect-timeout" {
    import express = require("express");

    /**
     * @summary Interface for timeout options.
     * @interface
     */
    interface TimeoutOptions extends Object {
        /**
         * @summary Controls if this module will "respond" in the form of forwarding an error.
         * @type {boolean}
         */
        respond: boolean;
    }

    export default function timeout(timeout: string, options?: TimeoutOptions): express.RequestHandler;
}
