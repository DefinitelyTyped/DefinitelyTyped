// Type definitions for morgan 1.2.2
// Project: https://github.com/expressjs/morgan
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
declare module "morgan" {

    import express = require('express');

    module morgan {

        export function token<T>(name: string, callback: (req: express.Request, res: express.Response) => T): express.RequestHandler;

        export interface StreamOptions {
            /**
             * Output stream for writing log lines
             */
            write: (str: string) => void;
        }

        /***
         * Morgan accepts these properties in the options object.
         */
        export interface Options {

            /***
             * Buffer duration before writing logs to the stream, defaults to false. When set to true, defaults to 1000 ms.
             */
            buffer?: boolean;

            /***
             * Write log line on request instead of response. This means that a requests will be logged even if the server crashes, but data from the response cannot be logged (like the response code).
             */
            immediate?: boolean;

            /***
             * Function to determine if logging is skipped, defaults to false. This function will be called as skip(req, res).
             */
            skip?: (req: express.Request, res: express.Response) => boolean;

            /***
             * Output stream for writing log lines, defaults to process.stdout.
             * @param str
             */
            stream?: StreamOptions;
        }
    }

    /***
     * Create a new morgan logger middleware function using the given format and options. The format argument may be a string of a predefined name (see below for the names), a string of a format string, or a function that will produce a log entry.
     * @param format
     * @param options
     */
    function morgan(format: string, options?: morgan.Options): express.RequestHandler;

    /***
     * Standard Apache combined log output.
     * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
     * @param format
     * @param options
     */
    function morgan(format: 'combined', options?: morgan.Options): express.RequestHandler;

    /***
     * Standard Apache common log output.
     * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
     * @param format
     * @param options
     */
    function morgan(format: 'common', options?: morgan.Options): express.RequestHandler;

    /***
     * Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
     * :method :url :status :response-time ms - :res[content-length]
     * @param format
     * @param options
     */
    function morgan(format: 'dev', options?: morgan.Options): express.RequestHandler;

    /***
     * Shorter than default, also including response time.
     * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
     * @param format
     * @param options
     */
    function morgan(format: 'short', options?: morgan.Options): express.RequestHandler;

    /***
     * The minimal output.
     * :method :url :status :res[content-length] - :response-time ms
     * @param format
     * @param options
     */
    function morgan(format: 'tiny', options?: morgan.Options): express.RequestHandler;

    function morgan(custom: (req: express.Request, res: express.Response) => string): express.RequestHandler

    export = morgan;
}