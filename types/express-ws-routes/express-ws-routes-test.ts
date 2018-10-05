import { Express as exExpress, Request, NextFunction } from 'express';
import * as WebSocket from 'ws';
import { Server as httpServer } from 'http';
import { Router as coreRouter } from 'express-serve-static-core';
import * as expresswsroutes from 'express-ws-routes';

let clientInfo: expresswsroutes.ClientInfo;
let origin: string = clientInfo.origin;
let secure: boolean = clientInfo.secure;
let request: Request = clientInfo.req;

let webSocketHandler: expresswsroutes.WebSocketHandler;
let socket: WebSocket;
webSocketHandler(socket);

let cbHandler: expresswsroutes.CbHandler;
cbHandler(webSocketHandler);
cbHandler(true);

let handler: expresswsroutes.WebSocketRouteHandler;
let next: NextFunction;
handler(clientInfo, cbHandler, next);

var server: expresswsroutes.Server;
let http: httpServer = server;
let wsServer: WebSocket.Server = server.wsServer;

let app: expresswsroutes.Express = expresswsroutes();
let e: exExpress = app;
let ws: expresswsroutes.Express = app.websocket('/path', handler);

let router: expresswsroutes.Router;
let r: coreRouter = router;
let wsr: expresswsroutes.Router = router.websocket('/path', handler);
