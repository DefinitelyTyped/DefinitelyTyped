// Type definitions for errorhandler 1.5
// Project: https://github.com/expressjs/errorhandler
// Definitions by: Santi Albo <https://github.com/santialbo>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

/**
 * Create new middleware to handle errors and respond with content negotiation.
 */
declare function errorHandler(options?: errorHandler.Options): express.ErrorRequestHandler;

declare namespace errorHandler {
    interface LoggingCallback {
        (err: Error, str: string, req: express.Request, res: express.Response): void;
    }

    interface Options {
        /**
         * Provide a function to be called with the error and a string representation of the erro
         * Defaults to true.
         *
         * Possible values:
         *   true       : Log errors using console.error(str).
         *   false      : Only send the error back in the response.
         *   A function : pass the error to a function for handling.
         */
        log: boolean | LoggingCallback;
    }

    /**
     * Template title, framework authors may override this value.
     */
    const title: string;
}

export = errorHandler;
