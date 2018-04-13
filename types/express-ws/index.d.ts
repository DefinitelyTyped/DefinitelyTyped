// Type definitions for express-ws 3.0
// Project: https://github.com/HenningM/express-ws
// Definitions by: AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as core from 'express-serve-static-core';
import * as express from 'express';
import * as http from 'http';
import * as ws from 'ws';

declare module 'express' {
    function Router(options?: express.RouterOptions): express.Router & expressWs.WithWebsocketMethod<express.Router>;
}

declare function expressWs(app: express.Application, httpServer?: http.Server, options?: expressWs.Options): expressWs.Instance;
declare namespace expressWs {
    export interface Options {
        leaveRouterUntouched?: boolean;
        wsOptions?: ws.ServerOptions;
    }

    export interface Instance {
        app: express.Application & WithWebsocketMethod<express.Application>;
        applyTo<T = any>(target: T): void;
        getWss(): ws.Server;
    }

    export interface WebsocketRequestHandler {
        (ws: ws, req: express.Request, next: express.NextFunction): void;
    }

    export interface WebsocketMethod<T> {
        (route: core.PathParams, ...middlewares: WebsocketRequestHandler[]): T
    }

    export interface WithWebsocketMethod<T> {
        ws: expressWs.WebsocketMethod<T>;
    }
}

export = expressWs;
