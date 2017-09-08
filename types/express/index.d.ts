// Type definitions for Express 4.x
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/* =================== USAGE ===================

    import * as express from "express";
    var app = express();

 =============================================== */

import * as serveStatic from "serve-static";
import * as core from "express-serve-static-core";
// tslint:disable:no-empty-interface

/**
 * Creates an Express application. The express() function is a top-level function exported by the express module.
 */
declare function e(): core.Express;

declare namespace e {
    /**
     * This is the only built-in middleware function in Express. It serves static files and is based on serve-static.
     */
    const static: typeof serveStatic;

    function Router(options?: RouterOptions): core.Router;

    interface RouterOptions {
        /**
         * Enable case sensitivity.
         */
        caseSensitive?: boolean;

        /**
         * Preserve the req.params values from the parent router.
         * If the parent and the child have conflicting param names, the child’s value take precedence.
         *
         * @default false
         * @since 4.5.0
         */
        mergeParams?: boolean;

        /**
         * Enable strict routing.
         */
        strict?: boolean;
    }

    interface Application extends core.Application { }
    interface CookieOptions extends core.CookieOptions { }
    interface Errback extends core.Errback { }
    interface ErrorRequestHandler extends core.ErrorRequestHandler { }
    interface Express extends core.Express { }
    interface Handler extends core.Handler { }
    interface Route extends core.IRoute { }
    interface RouterHandler<T> extends core.IRouterHandler<T> { }
    interface RouterMatcher<T> extends core.IRouterMatcher<T> { }
    interface MediaType extends core.MediaType { }
    interface NextFunction extends core.NextFunction { }
    interface Request extends core.Request { }
    interface RequestHandler extends core.RequestHandler { }
    interface RequestParamHandler extends core.RequestParamHandler { }
    interface Response extends core.Response { }
    interface Router extends core.Router { }
    interface Send extends core.Send { }
}

export = e;
