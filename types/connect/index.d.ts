// Type definitions for connect v3.4.0
// Project: https://github.com/senchalabs/connect
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
//                 Evan Hahn <https://github.com/EvanHahn>
//                 geekley <https://github.com/geekley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import * as http from "http";
import connect = createServer;

/**
 * When the `connect` module is required, a function is returned that will construct a new app when called.
 * This app will store all the middleware added and is, itself, a function.
 *
 * The core of Connect is "using" middleware. Middleware are added as a "stack" where incoming
 * requests will execute each middleware one-by-one until a middleware does not call `next()` within it.
 *
 * There are special cases of "error-handling" middleware. These are middleware where the
 * function takes exactly 4 arguments. When a middleware passes an error to `next`, the app will
 * proceed to look for the error middleware that was declared after that middleware and invoke it,
 * skipping any error middleware above that middleware and any non-error middleware below.
 *
 * The last step is to actually use the Connect app in a server. The `.listen()` method is a
 * convenience to start a HTTP server (and is identical to the `http.Server`'s `listen` method).
 * The app itself is really just a function with three arguments, so it can also be handed to
 * `.createServer()` in Node.js.
 */
declare function createServer(): connect.Server;

declare namespace createServer {
    export interface Request extends http.IncomingMessage {
        /**
         * The request URL, altered to remove the route part. For example, if the handle function is used
         * at the route `/foo`, the request for `/foo/bar` will invoke it with `req.url === '/bar'` and
         * `req.originalUrl === '/foo/bar'`.
         */
        url: string;
        /**
         * The original URL of the request, unaltered.
         */
        originalUrl: string;
    }

    export type ServerHandle = HandleFunction | http.Server;

    type NextFunction = (
        /** An optional error, to make the app skip to error-handling middleware. */ err?: any
    ) => void;

    /** @deprecated `next` is always available to the handler */ export type SimpleHandleFunction = NextHandleFunction;
    export type NextHandleFunction =
        (req: Request, res: http.ServerResponse, next: NextFunction) => void;
    export type ErrorHandleFunction =
        (err: any, req: Request, res: http.ServerResponse, next: NextFunction) => void;
    export type HandleFunction = NextHandleFunction | ErrorHandleFunction;

    export interface ServerStackItem {
        route: string;
        handle: ServerHandle;
    }

    export interface Server extends NodeJS.EventEmitter {
        /**
         * The `app` itself is a function. This is just an alias to `app.handle`.
         */
        (req: http.IncomingMessage, res: http.ServerResponse, next?: NextFunction): void;

        route: string;
        stack: ServerStackItem[];

        /**
         * Use a function on the app, where the function represents a middleware. The function will be
         * invoked for every request in the order that `app.use` is called.
         * @param fn A plain function, a Node.js HTTP server instance or another Connect app instance.
         */
        use(fn: (
            /** The Node.js http request object. */ req: Request,
            /** The Node.js http response object. */ res: http.ServerResponse,
            /** A function to call to invoke the next middleware. */ next: NextFunction
        ) => void): Server;

        /**
         * Use a function on the app, where the function represents a middleware. The function will be
         * invoked for every request in which the URL (`req.url` property) starts with the given `route`
         * string in the order that `app.use` is called.
         * @param route An optional path string that is matched against the beginning of the incoming request URL.
         * This allows for basic routing.
         *
         * The route is always terminated at a path separator (`/`) or a dot (`.`) character. This means the
         * given routes `/foo/` and `/foo` are the same and both will match requests with the URLs
         * `/foo`, `/foo/`, `/foo/bar`, and `/foo.bar`, but not match a request with the URL `/foobar`.
         *
         * The route is matched in a case-insensitive manner.
         * @param fn A plain function, a Node.js HTTP server instance or another Connect app instance.
         */
        use(route: string, fn: (
            /** The Node.js http request object. */ req: Request,
            /** The Node.js http response object. */ res: http.ServerResponse,
            /** A function to call to invoke the next middleware. */ next: NextFunction
        ) => void): Server;

        /**
         * Register an "error-handling" middleware. These are middleware where the
         * function takes exactly 4 arguments. When a middleware passes an error to `next`, the app will
         * proceed to look for the error middleware that was declared after that middleware and invoke it,
         * skipping any error middleware above that middleware and any non-error middleware below.
         * @param fn A plain function, a Node.js HTTP server instance or another Connect app instance.
         */
        use(fn: (
            /** The error that occurred. */ err: any,
            /** The Node.js http request object. */ req: Request,
            /** The Node.js http response object. */ res: http.ServerResponse,
            /** A function to call to invoke the next middleware. */ next: NextFunction
        ) => void): Server;

        /**
         * Mount an "error-handling" middleware on the specified route.
         * @param route An optional path string that is matched against the beginning of the incoming request URL.
         * This allows for basic routing.
         *
         * The route is always terminated at a path separator (`/`) or a dot (`.`) character. This means the
         * given routes `/foo/` and `/foo` are the same and both will match requests with the URLs
         * `/foo`, `/foo/`, `/foo/bar`, and `/foo.bar`, but not match a request with the URL `/foobar`.
         *
         * The route is matched in a case-insensitive manner.
         * @param fn A plain function, a Node.js HTTP server instance or another Connect app instance.
         */
        use(route: string, fn: (
            /** The error that occurred. */ err: any,
            /** The Node.js http request object. */ req: Request,
            /** The Node.js http response object. */ res: http.ServerResponse,
            /** A function to call to invoke the next middleware. */ next: NextFunction
        ) => void): Server;

        /**
         * Calling the function will run the middleware stack against the given Node.js http request (`req`)
         * and response (`res`) objects. An optional function `out` can be provided that will be called if the
         * request (or error) was not handled by the middleware stack.
         */
        handle(req: http.IncomingMessage, res: http.ServerResponse, out?: NextFunction): void;

        /**
         * Start the app listening for requests. This method will internally create a Node.js HTTP server and
         * call `.listen()` on it.
         *
         * This is an alias to the `server.listen()` method in the version of Node.js running, so consult
         * the Node.js documentation for all the different variations. The most common signature is `app.listen(port)`.
         */
        listen(port: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server;
        listen(port: number, hostname?: string, listeningListener?: () => void): http.Server;
        listen(path: string, listeningListener?: () => void): http.Server;
        listen(handle: any, listeningListener?: () => void): http.Server;
    }
}

export = connect;
