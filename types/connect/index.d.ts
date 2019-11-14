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
 * Create a new connect server.
 * @public
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

    type NextFunction = (err?: any) => void;

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
        (req: http.IncomingMessage, res: http.ServerResponse, next?: NextFunction): void;

        route: string;
        stack: ServerStackItem[];

        /**
        * Utilize the given middleware `handle` to the given `route`,
        * defaulting to _/_. This "route" is the mount-point for the
        * middleware, when given a value other than _/_ the middleware
        * is only effective when that segment is present in the request's
        * pathname.
        *
        * For example if we were to mount a function at _/admin_, it would
        * be invoked on _/admin_, and _/admin/settings_, however it would
        * not be invoked for _/_, or _/posts_.
        *
        * @public
        */
        use(fn: (req: Request, res: http.ServerResponse, next: NextFunction) => void): Server;
        use(fn: (err: any, req: Request, res: http.ServerResponse, next: NextFunction) => void): Server;
        use(route: string, fn: (req: Request, res: http.ServerResponse, next: NextFunction) => void): Server;
        use(route: string, fn: (err: any, req: Request, res: http.ServerResponse, next: NextFunction) => void): Server;

        /**
        * Handle server requests, punting them down
        * the middleware stack.
        *
        * @private
        */
        handle(req: http.IncomingMessage, res: http.ServerResponse, out?: NextFunction): void;

        /**
        * Listen for connections.
        *
        * This method takes the same arguments
        * as node's `http.Server#listen()`.
        *
        * HTTP and HTTPS:
        *
        * If you run your application both as HTTP
        * and HTTPS you may wrap them individually,
        * since your Connect "server" is really just
        * a JavaScript `Function`.
        *
        *      var connect = require('connect')
        *        , http = require('http')
        *        , https = require('https');
        *
        *      var app = connect();
        *
        *      http.createServer(app).listen(80);
        *      https.createServer(options, app).listen(443);
        *
        * @api public
        */
        listen(port: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server;
        listen(port: number, hostname?: string, listeningListener?: () => void): http.Server;
        listen(path: string, listeningListener?: () => void): http.Server;
        listen(handle: any, listeningListener?: () => void): http.Server;
    }
}

export = connect;
