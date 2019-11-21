// Type definitions for koa-websocket 5.0
// Project: https://github.com/kudos/koa-websocket
// Definitions by: Maël Lavault <https://github.com/moimael>
//                 Jaco Greeff <https://github.com/jacogr>
//                 Martin Ždila <https://github.com/zdila>
//                 Eunchong Yu <https://github.com/Kroisse>
//                 Christopher N. Katoyi-Kaba <https://github.com/Christopher2K>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require('koa');
import compose = require('koa-compose');
import * as ws from 'ws';
import * as http from 'http';
import * as https from 'https';

declare module "koa" {
    interface Context {
        websocket: ws;
        path: string;
    }
}

declare namespace KoaWebsocket {
    type Middleware<StateT, CustomT> = compose.Middleware<MiddlewareContext<StateT> & CustomT>;

    interface MiddlewareContext<StateT> extends Koa.Context {
        // Limitation: Declaration merging cannot overwrap existing properties.
        // That's why this property is here, not in the merged declaration above.
        app: App;
        state: StateT;
    }

    class Server<StateT = any, CustomT = {}> {
        app: App<StateT, CustomT>;
        middleware: Array<Middleware<StateT, CustomT>>;
        server?: ws.Server;

        constructor(app: Koa<StateT, CustomT>);

        listen(options: ws.ServerOptions): ws.Server;
        onConnection(socket: ws, request: http.IncomingMessage): void;
        use(middleware: Middleware<StateT, CustomT>): this;
    }

    interface App<StateT = any, CustomT = {}> extends Koa<StateT, CustomT> {
        ws: Server<StateT, CustomT>;
    }
}

declare function KoaWebsocket<StateT = any, CustomT = {}>(app: Koa<StateT, CustomT>, wsOptions?: ws.ServerOptions, httpsOptions?: https.ServerOptions): KoaWebsocket.App<StateT, CustomT>;

export = KoaWebsocket;
