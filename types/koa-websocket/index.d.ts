// Type definitions for koa-websocket 5.0
// Project: https://github.com/kudos/koa-websocket
// Definitions by: Maël Lavault <https://github.com/moimael>
//                 Jaco Greeff <https://github.com/jacogr>
//                 Martin Ždila <https://github.com/zdila>
//                 Eunchong Yu <https://github.com/Kroisse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import compose = require('koa-compose');
import * as ws from 'ws';
import * as http from 'http';
import * as https from 'https';

declare namespace KoaWebsocket {
    type Middleware = compose.Middleware<MiddlewareContext>;

    interface MiddlewareContext extends Koa.Context {
        websocket: ws;
        path: string;
    }

    class Server {
        app: Koa;
        middleware: Middleware[];
        server?: ws.Server;

        constructor(app: Koa);

        listen(options: ws.ServerOptions): ws.Server;
        onConnection(socket: ws, request: http.IncomingMessage): void;
        use(middleware: Middleware): this;
    }

    interface App extends Koa {
        ws: Server;
    }
}

declare function KoaWebsocket(app: Koa, wsOptions?: ws.ServerOptions, httpsOptions?: https.ServerOptions): KoaWebsocket.App;

export = KoaWebsocket;
