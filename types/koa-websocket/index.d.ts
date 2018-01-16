// Type definitions for koa-websocket 2.1
// Project: https://github.com/kudos/koa-websocket
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';
import * as ws from 'ws';
import * as http from 'http';
import * as https from 'https';

type KoaWebsocketConnectionHandler = (socket: ws) => void;
type KoaWebsocketMiddleware = (this: KoaWebsocketMiddlewareContext, context: Koa.Context, next: () => Promise<any>) => any;
interface KoaWebsocketMiddlewareContext extends Koa.Context {
    websocket: ws;
    path: string;
}

declare class KoaWebsocketServer {
    app: Koa;
    middleware: Koa.Middleware[];

    constructor(app: Koa);
    listen(server: http.Server | https.Server): ws.Server;
    onConnection(handler: KoaWebsocketConnectionHandler): void;
    use(middleware: KoaWebsocketMiddleware): this;
}

interface KoaWebsocketApp extends Koa {
    ws: KoaWebsocketServer;
}

type KoaWebsockets = (app: Koa) => KoaWebsocketApp;

declare const websockets: KoaWebsockets;
export = websockets;
