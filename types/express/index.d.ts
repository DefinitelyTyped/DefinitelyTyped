// Type definitions for Express 4.17
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 China Medical University Hospital <https://github.com/CMUH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as express from "express";
    var app = express();

 =============================================== */

/// <reference types="express-serve-static-core" />
/// <reference types="serve-static" />

import * as bodyParser from "body-parser";
import serveStatic = require("serve-static");
import * as core from "express-serve-static-core";

/**
 * Creates an Express application. The express() function is a top-level function exported by the express module.
 */
declare function e(): core.Express;

declare namespace e {
    /**
     * This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
     * @since 4.16.0
     */
    var json: typeof bodyParser.json;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with Buffer payloads and is based on body-parser.
     * @since 4.17.0
     */
    var raw: typeof bodyParser.raw;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with text payloads and is based on body-parser.
     * @since 4.17.0
     */
    var text: typeof bodyParser.text;

    /**
     * These are the exposed prototypes.
     */
    var application: Application;
    var request: Request;
    var response: Response;

    /**
     * This is a built-in middleware function in Express. It serves static files and is based on serve-static.
     */
    var static: typeof serveStatic;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
     * @since 4.16.0
     */
    var urlencoded: typeof bodyParser.urlencoded;

    export function Router(options?: RouterOptions): core.Router;

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
    interface ErrorRequestHandler<P extends core.Params = core.ParamsDictionary> extends core.ErrorRequestHandler<P> { }
    interface Express extends core.Express { }
    interface Handler extends core.Handler { }
    interface IRoute extends core.IRoute { }
    interface IRouter extends core.IRouter { }
    interface IRouterHandler<T> extends core.IRouterHandler<T> { }
    interface IRouterMatcher<T> extends core.IRouterMatcher<T> { }
    interface MediaType extends core.MediaType { }
    interface NextFunction extends core.NextFunction { }
    interface Request<P extends core.Params = core.ParamsDictionary> extends core.Request<P> { }
    interface RequestHandler<P extends core.Params = core.ParamsDictionary> extends core.RequestHandler<P> { }
    interface RequestParamHandler extends core.RequestParamHandler { }
    export interface Response extends core.Response { }
    interface Router extends core.Router { }
    interface Send extends core.Send { }
}

export = e;
