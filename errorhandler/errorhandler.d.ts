// Type definitions for errorhandler
// Project: https://github.com/expressjs/errorhandler
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "errorhandler" {
    import express = require('express');
    
    function errorHandler(options?: errorHandler.Options): express.ErrorRequestHandler;
    
    namespace errorHandler {
        interface LoggingCallback {
            (err: Error, str: string, req: express.Request, res: express.Response): void;
        }
        
        interface Options {
            /**
             * Defaults to true.
             * 
             * Possible values:
             *   true       : Log errors using console.error(str).
             *   false      : Only send the error back in the response.
             *   A function : pass the error to a function for handling.
             */
            log: boolean | LoggingCallback;
        }
    }
    
    export = errorHandler;
}
