// Type definitions for koa-websocket 5.0
// Project: https://github.com/kudos/koa-websocket
// Definitions by: Maël Lavault <https://github.com/moimael>
//                 Jaco Greeff <https://github.com/jacogr>
//                 Martin Ždila <https://github.com/zdila>
//                 Eunchong Yu <https://github.com/Kroisse>
//                 Christopher N. Katoyi-Kaba <https://github.com/Christopher2K>
//                 Zuo Jiazi <https://github.com/Aoiujz>
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
    type Middleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> = compose.Middleware<MiddlewareContext<StateT> & ContextT>;

    interface MiddlewareContext<StateT> extends Koa.Context {
        // Limitation: Declaration merging cannot overwrap existing properties.
        // That's why this property is here, not in the merged declaration above.
        app: App;
        state: StateT;
    }

    class Server<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> {
        app: App;
        middleware: Array<Middleware<StateT, ContextT>>;
        server?: ws.Server | undefined;

        constructor(app: Koa<StateT, ContextT>);

        listen(options: ws.ServerOptions): ws.Server;
        onConnection(socket: ws, request: http.IncomingMessage): void;
        use(middleware: Middleware<StateT, ContextT>): this;
    }

    interface App<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> extends Koa<StateT, ContextT> {
        ws: Server<StateT, ContextT>;
    }
}

declare function KoaWebsocket<
  StateT = Koa.DefaultState,
  ContextT = Koa.DefaultContext
>(
  app: Koa<StateT, ContextT>,
  wsOptions?: ws.ServerOptions,
  httpsOptions?: https.ServerOptions
): KoaWebsocket.App<StateT, ContextT>;

export = KoaWebsocket;
