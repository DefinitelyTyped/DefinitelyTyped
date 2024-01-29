import * as connectModule from "connect";
import * as http from "http";
import * as https from "https";

export interface LiveReloadOptions {
    /** Port to run live reload server on. Defauls to 35729. */
    port: number;

    /** Hostname to bind live reload server to */
    hostname?: string | undefined;
}

/** a list of [string, HandlerFunction] where the string is the path (i.e. route) that the handler function should be invoked for */
export type ConnectRouteHandler = [string, connectModule.HandleFunction];

/**
 * Factory function that returns a list of middleware handlers to pass to a connect server's use function.
 * The list contain normal Connect middleware handler functions or ConnectRoutHandlers
 */
export type MiddlewareFactory = (
    connect: typeof connectModule,
    options: ConnectAppOptions,
) => Array<connectModule.HandleFunction | ConnectRouteHandler>;

export interface ConnectAppOptions {
    /** The name of this server. Used in logs. Defaults to "Server". */
    name?: string | undefined;

    /** The root path. Defaults to directory with gulpfile */
    root?: string | string[] | undefined;

    /** The connect webserver port. Defaults to 8080 */
    port?: number | undefined;

    /** Host to bind server to. Defaults to localhost. */
    host?: string | undefined;

    /** Don't log any messages. Defaults to false. */
    silent?: boolean | undefined;

    /**
     * Options to pass to http.createServer (or false to disable https).
     * Defaults to false. When https is just set to true, then internally
     * some defaults will be used.
     */
    https?: boolean | https.ServerOptions | undefined;

    /** Enable/disable livereload or set live reload options. Defaults to false. */
    livereload?: boolean | LiveReloadOptions | undefined;

    /** A function to run custom initialization on the underlying http or https server */
    serverInit?(server: http.Server | https.Server): void;

    /** File to serve if url results in a 404. Defaults to undefined */
    fallback?: string | undefined;

    /** Middleware factory function which should return a list of connect handler functions . Defaults to () => []; */
    middleware?: MiddlewareFactory | undefined;

    /** Whether or not to log debug messages. Defaults to false. */
    debug?: boolean | undefined;

    /** Value to pass into the serve-static's index option. See serve-static documentation for details. Defaults to true. */
    index?: boolean | string | string[] | undefined;
}

/** Create a gulp-connect server with the given options */
export function server(options?: ConnectAppOptions, startedCallback?: () => unknown): ConnectAppOptions;

/** Reload all gulp-connect servers that have livereload enabled */
export function reload(): any;

/** Close all gulp-connect servers */
export function serverClose(): void;
