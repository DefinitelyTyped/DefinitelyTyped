// Type definitions for gulp-connect 5.0
// Project: https://github.com/avevlad/gulp-connect#readme
// Definitions by: Andre Wiggins <https://github.com/andrewiggins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as http from "http";
import * as https from "https";
import * as connectModule from "connect";

export interface LiveReloadOptions {
    /** Port to run live reload server on. Defauls to 35729. */
    port: number;

    /** Hostname to bind live reload server to */
    hostname?: string;
}

/** a list of [string, HandlerFunction] where the string is the path (i.e. route) that the handler function should be invoked for */
export type ConnectRouteHandler = [ string, connectModule.HandleFunction ];

/**
 * Factory function that returns a list of middleware handlers to pass to a connect server's use function.
 * The list contain normal Connect middleware handler functions or ConnectRoutHandlers
 */
export type MiddlewareFactory = (connect: typeof connectModule, options: ConnectAppOptions) => Array<connectModule.HandleFunction | ConnectRouteHandler>;

export interface ConnectAppOptions {
    /** The name of this server. Used in logs. Defaults to "Server". */
    name?: string;

    /** The root path. Defaults to directory with gulpfile */
    root?: string | string[];

    /** The connect webserver port. Defaults to 8080 */
    port?: number;

    /** Host to bind server to. Defaults to localhost. */
    host?: string;

    /** Don't log any messages. Defaults to false. */
    silent?: boolean;

    /**
     * Options to pass to http.createServer (or false to disable https).
     * Defaults to false. When https is just set to true, then internally
     * some defaults will be used.
     */
    https?: boolean | https.ServerOptions;

    /** Enable/disable livereload or set live reload options. Defaults to false. */
    livereload?: boolean | LiveReloadOptions;

    /** A function to run custom initialization on the underlying http or https server */
    serverInit?(server: http.Server | https.Server): void;

    /** File to serve if url results in a 404. Defaults to undefined */
    fallback?: string;

    /** Middleware factory function which should return a list of connect handler functions . Defaults to () => []; */
    middleware?: MiddlewareFactory;

    /** Whether or not to log debug messages. Defaults to false. */
    debug?: boolean;

    /** Value to pass into the serve-static's index option. See serve-static documentation for details. Defaults to true. */
    index?: boolean | string | string[];
}

/** Create a gulp-connect server with the given options */
export function server(options?: ConnectAppOptions): ConnectAppOptions;

/** Reload all gulp-connect servers that have livereload enabled */
export function reload(): any;

/** Close all gulp-connect servers */
export function serverClose(): void;
