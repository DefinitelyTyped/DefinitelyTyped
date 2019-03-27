// Type definitions for express-ws 3.0
// Project: https://github.com/HenningM/express-ws
// Definitions by: AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as core from 'express-serve-static-core';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import * as ws from 'ws';

declare module 'express' {
    function Router(options?: RouterOptions): expressWs.Router;
}

declare function expressWs(app: express.Application, server?: http.Server | https.Server, options?: expressWs.Options): expressWs.Instance;
declare namespace expressWs {
    type Application = express.Application & WithWebsocketMethod;
    type Router = express.Router & WithWebsocketMethod;

    interface Options {
        leaveRouterUntouched?: boolean;
        wsOptions?: ws.ServerOptions;
    }

    interface RouterLike {
        get: express.IRouterMatcher<this>;
        [key: string]: any;
        [key: number]: any;
    }

    interface Instance {
        app: Application;
        applyTo(target: RouterLike): void;
        getWss(): ws.Server;
    }

    type WebsocketRequestHandler = (ws: ws, req: express.Request, next: express.NextFunction) => void;
    type WebsocketMethod<T> = (route: core.PathParams, ...middlewares: WebsocketRequestHandler[]) => T;

    interface WithWebsocketMethod {
        ws: WebsocketMethod<this>;
    }
}

export = expressWs;
