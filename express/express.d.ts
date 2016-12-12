// Type definitions for Express 4.x
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as express from "express";
    var app = express();

 =============================================== */

/// <reference path="../serve-static/serve-static.d.ts" />
/// <reference path="../express-serve-static-core/express-serve-static-core.d.ts" />

declare module "express" {
    import * as serveStatic from "serve-static";
    import * as core from "express-serve-static-core";

    /**
     * Creates an Express application. The express() function is a top-level function exported by the express module.
     */
    function e<TRequest extends core.Request<TResponse>, TResponse extends core.Response>(): core.Express<TRequest, TResponse>;

    namespace e {

        /**
         * This is the only built-in middleware function in Express. It serves static files and is based on serve-static.
         */
        var static: typeof serveStatic;

        export function Router<TRequest extends core.Request<TResponse>, TResponse extends core.Response>(options?: any): core.Router<TRequest, TResponse>;

        interface Application<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.Application<TRequest, TResponse> { }
        interface CookieOptions extends core.CookieOptions { }
        interface Errback extends core.Errback { }
        interface ErrorRequestHandler<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.ErrorRequestHandler<TRequest, TResponse> { }
        interface Express<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.Express<TRequest, TResponse> { }
        interface Handler<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.Handler<TRequest, TResponse> { }
        interface IRoute<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.IRoute<TRequest, TResponse> { }
        interface IRouter<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.IRouter<TRequest, TResponse> { }
        interface IRouterMatcher<T, TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.IRouterMatcher<T, TRequest, TResponse> { }
        interface MediaType extends core.MediaType { }
        interface NextFunction extends core.NextFunction { }
        interface Request<TResponse extends core.Response> extends core.Request<TResponse> { }
        interface RequestHandler<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.RequestHandler<TRequest, TResponse> { }
        interface RequestParamHandler<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.RequestParamHandler<TRequest, TResponse> { }
        export interface Response extends core.Response { }
        interface Router<TRequest extends core.Request<TResponse>, TResponse extends core.Response> extends core.Router<TRequest, TResponse> { }
        interface Send<TResponse extends core.Response> extends core.Send<TResponse> { }
    }

    export = e;
}
