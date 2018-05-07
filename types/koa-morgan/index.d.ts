// Type definitions for koa-morgan 1.0
// Project: https://github.com/koa-modules/morgan
// Definitions by: Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IncomingMessage, ServerResponse } from 'http';
import * as Koa from 'koa';
import * as originalMorgan from 'morgan';

declare namespace morgan {
    interface FormatFn {
        (tokens: TokenIndexer, req: IncomingMessage, res: ServerResponse): string;
    }

    interface TokenCallbackFn {
        (req: IncomingMessage, res: ServerResponse, arg?: string | number | boolean): string;
    }

    type TokenIndexer = originalMorgan.TokenIndexer;

    /**
     * Public interface of morgan logger
     */
    interface KoaMorgan {
        /**
         * Create a new morgan logger middleware function using the given format and options. The
         * format argument may be a string of a predefined name (see below for the names),
         * or a string of a format string containing defined tokens.
         */
        (format: string, options?: Options): Koa.Middleware;

        /**
         * Standard Apache combined log output.
         * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
         */
        (format: 'combined', options?: Options): Koa.Middleware;

        /**
         * Standard Apache common log output.
         * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
         */
        (format: 'common', options?: Options): Koa.Middleware;

        /**
         * Concise output colored by response status for development use. The :status token will be colored red for
         * server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
         * :method :url :status :response-time ms - :res[content-length]
         */
        (format: 'dev', options?: Options): Koa.Middleware;

        /**
         * Shorter than default, also including response time.
         * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
         */
        (format: 'short', options?: Options): Koa.Middleware;

        /**
         * The minimal output.
         * :method :url :status :res[content-length] - :response-time ms
         */
        (format: 'tiny', options?: Options): Koa.Middleware;

        /**
         * Create a new morgan logger middleware function using the given format and options. The format argument may be a
         * custom format function which adheres to the signature.
         */
        (format: FormatFn, options?: Options): Koa.Middleware;

        /**
         * Define a custom token which can be used in custom morgan logging formats.
         */
        token(name: string, callback: TokenCallbackFn): KoaMorgan;

        /**
         * Define a named custom format by specifying a format string in token notation
         */
        format(name: string, fmt: string): KoaMorgan;

        /**
         * Define a named custom format by specifying a format function
         */
        format(name: string, fmt: FormatFn): KoaMorgan;

        /**
         * Compile a format string in token notation into a format function
         */
        compile(format: string): FormatFn;
    }

    /**
     * Define a custom token which can be used in custom morgan logging formats.
     */
    function token(name: string, callback: TokenCallbackFn): KoaMorgan;

    /**
     * Define a named custom format by specifying a format string in token notation
     */
    function format(name: string, fmt: string): KoaMorgan;

    /**
     * Define a named custom format by specifying a format function
     */
    function format(name: string, fmt: FormatFn): KoaMorgan;

    /**
     * Compile a format string in token notation into a format function
     */
    function compile(format: string): FormatFn;

    type StreamOptions = originalMorgan.StreamOptions;

    /**
     * Morgan accepts these properties in the options object.
     */
    interface Options {
        /**
         * Buffer duration before writing logs to the stream, defaults to false. When set to true, defaults to 1000 ms.
         */
        buffer?: boolean;

        /**
         * Write log line on request instead of response. This means that a requests will be logged even if the server
         * crashes, but data from the response cannot be logged (like the response code).
         */
        immediate?: boolean;

        /**
         * Function to determine if logging is skipped, defaults to false. This function will be called as skip(req, res).
         */
        skip?: (req: IncomingMessage, res: ServerResponse) => boolean;

        /**
         * Output stream for writing log lines, defaults to process.stdout.
         */
        stream?: StreamOptions;
    }
}

/**
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a string
 * of a predefined name (see below for the names), or a string of a format string containing defined tokens.
 */
declare function morgan(format: string, options?: morgan.Options): Koa.Middleware;

/**
 * Standard Apache combined log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 */
declare function morgan(format: 'combined', options?: morgan.Options): Koa.Middleware;

/**
 * Standard Apache common log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
 */
declare function morgan(format: 'common', options?: morgan.Options): Koa.Middleware;

/**
 * Concise output colored by response status for development use. The :status token will be colored red for server error codes,
 * yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
 * :method :url :status :response-time ms - :res[content-length]
 */
declare function morgan(format: 'dev', options?: morgan.Options): Koa.Middleware;

/**
 * Shorter than default, also including response time.
 * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
 */
declare function morgan(format: 'short', options?: morgan.Options): Koa.Middleware;

/**
 * The minimal output.
 * :method :url :status :res[content-length] - :response-time ms
 */
declare function morgan(format: 'tiny', options?: morgan.Options): Koa.Middleware;

/**
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a
 * custom format function which adheres to the signature.
 */
declare function morgan(custom: (req: IncomingMessage, res: ServerResponse) => string): Koa.Middleware;

export = morgan;
