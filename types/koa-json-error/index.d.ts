import * as Koa from "koa";

type JSONError = Error & { status: number };

interface JSONErrorOptions {
    /**
     * Perform some task before calling `options.format`. Must be a function with the original err as its only argument.
     */
    preFormat?(err: JSONError): any;

    /**
     * Runs inmediatly after `options.preFormat`. It receives two arguments: the original `err` and the output of     `options.preFormat`. It should `return` a newly formatted error.
     */
    format?(err: JSONError, obj: any): any;

    /**
     * Runs inmediatly after `options.format`. It receives two arguments: the original `err` and the output of   `options.format`.   It should `return` a newly formatted error.
     */
    postFormat?(err: JSONError, obj: any): any;
}

/**
 * Error handler for pure Koa 2.0.0+ JSON apps
 */
declare function jsonError(options?: JSONErrorOptions): Koa.Middleware;

declare namespace jsonError {}
export = jsonError;
