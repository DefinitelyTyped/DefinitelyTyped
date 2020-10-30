// Type definitions for @koa/cors 3.0
// Project: https://github.com/koajs/cors
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>
//                 Izayoi Ko <https://github.com/izayoiko>
//                 Steve Hipwell <https://github.com/stevehipwell>
//                 Steven McDowall <https://github.com/sjmcdowall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';

export = cors;

/**
 * CORS middleware factory.
 * @param options - Configuration options.
 * @returns cors middleware
 */
declare function cors(options?: cors.Options): Koa.Middleware;

declare namespace cors {
    /**
     * Middleware configration options.
     */
    interface Options {
        /**
         * `Access-Control-Allow-Origin`, default is request Origin header.
         *
         * @remarks
         * If a function is provided, it will be called for each request with
         * the koa context object. It may return a string or a promise that
         * will resolve with a string.
         */
        origin?: ((ctx: Koa.Context) => string) | ((ctx: Koa.Context) => PromiseLike<string>) | string;

        /**
         * `Access-Control-Allow-Methods`, default is
         * 'GET,HEAD,PUT,POST,DELETE,PATCH'
         */
        allowMethods?: string[] | string;

        /**
         * `Access-Control-Expose-Headers`
         */
        exposeHeaders?: string[] | string;

        /**
         * `Access-Control-Allow-Headers`
         */
        allowHeaders?: string[] | string;

        /**
         * `Access-Control-Max-Age` in seconds
         */
        maxAge?: number | string;

        /**
         * `Access-Control-Allow-Credentials`
         */
        credentials?: boolean;

        /**
         * Add set headers to `err.header` if an error is thrown
         */
        keepHeadersOnError?: boolean;
    }
}
