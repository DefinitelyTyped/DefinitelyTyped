// Type definitions for koa-json-error v3.x
// Project: https://github.com/koajs/json-error
// Definitions by: Mudkip <https://github.com/mudkipme>
// Definitions: https://github.com/mudkipme/DefinitelyTyped

/// <reference path="../koa/koa.d.ts" />

declare module "koa-json-error" {

    import * as Koa from "koa";

    interface JSONErrorOptions {
        /**
         * Perform some task before calling `options.format`. Must be a function with the original err as its only argument.
         */
        preFormat?: { (err: Error): any };

        /**
         * Runs inmediatly after `options.preFormat`. It receives two arguments: the original `err` and the output of     `options.preFormat`. It should `return` a newly formatted error.
         */
        format?: { (err: Error, obj: any): any };

        /**
         * Runs inmediatly after `options.format`. It receives two arguments: the original `err` and the output of   `options.format`.   It should `return` a newly formatted error.
         */
        postFormat?: { (err: Error, obj: any): any };
    }

    /**
     * Error handler for pure Koa 2.0.0+ JSON apps
     */
    function jsonError(options?: JSONErrorOptions) : { (ctx: Koa.Context, next?: () => any): any };
  
    namespace jsonError {}
    export = jsonError;
}