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
    function e(): core.Express;

    namespace e {

        /**
         * This is the only built-in middleware function in Express. It serves static files and is based on serve-static.
         */
        var static: typeof serveStatic;

        export function Router(options?: any): core.Router;

        interface Application extends core.Application { }
        interface CookieOptions extends core.CookieOptions { }
        interface Errback extends core.Errback { }
        interface ErrorRequestHandler extends core.ErrorRequestHandler { }
        interface Express extends core.Express { }
        interface Handler extends core.Handler { }
        interface IRoute extends core.IRoute { }
        interface IRouter<T> extends core.IRouter<T> { }
        interface IRouterMatcher<T> extends core.IRouterMatcher<T> { }
        interface MediaType extends core.MediaType { }
        interface NextFunction extends core.NextFunction { }
        interface Request extends core.Request { }
        interface RequestHandler extends core.RequestHandler { }
        interface RequestParamHandler extends core.RequestParamHandler { }
        export interface Response extends core.Response { }
        interface Router extends core.Router { }
        interface Send extends core.Send { }
    }

    export = e;
}
