// Type definitions for express-ws 3.0
// Project: https://github.com/HenningM/express-ws
// Definitions by: AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as core from 'express-serve-static-core';
import * as express from 'express';
import * as http from 'http';
import * as ws from 'ws';

declare module 'express' {
    function Router(options?: RouterOptions): Router & expressWs.WithWebsocketMethod<Router>;
}

declare function expressWs(app: express.Application, httpServer?: http.Server, options?: expressWs.Options): expressWs.Instance;
declare namespace expressWs {
    interface Options {
        leaveRouterUntouched?: boolean;
        wsOptions?: ws.ServerOptions;
    }

    interface Instance {
        app: express.Application & WithWebsocketMethod<express.Application>;
        applyTo(target: any): void;
        getWss(): ws.Server;
    }

    type WebsocketRequestHandler = (ws: ws, req: express.Request, next: express.NextFunction) => void;
    type WebsocketMethod<T> = (route: core.PathParams, ...middlewares: WebsocketRequestHandler[]) => T;

    interface WithWebsocketMethod<T> {
        ws: WebsocketMethod<T>;
    }
}

export = expressWs;
