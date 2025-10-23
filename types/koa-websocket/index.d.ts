import Koa = require("koa");
import compose = require("koa-compose");
import * as http from "http";
import * as https from "https";
import * as ws from "ws";

declare module "koa" {
    interface Context {
        websocket: ws;
        path: string;
    }
}

declare namespace KoaWebsocket {
    type Middleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> = compose.Middleware<
        MiddlewareContext<StateT> & ContextT
    >;

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
    ContextT = Koa.DefaultContext,
>(
    app: Koa<StateT, ContextT>,
    wsOptions?: ws.ServerOptions,
    httpsOptions?: https.ServerOptions,
): KoaWebsocket.App<StateT, ContextT>;

export = KoaWebsocket;
