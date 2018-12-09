import { Express as exExpress, Request, NextFunction } from 'express';
import * as WebSocket from 'ws';
import { Server as httpServer } from 'http';
import { Router as coreRouter } from 'express-serve-static-core';
import * as expresswsroutes from 'express-ws-routes';

const clientInfo: expresswsroutes.ClientInfo = undefined;
const origin: string = clientInfo.origin;
const secure: boolean = clientInfo.secure;
const request: Request = clientInfo.req;

const webSocketHandler: expresswsroutes.WebSocketHandler = undefined;
const socket: WebSocket = undefined;
webSocketHandler(socket);

const cbHandler: expresswsroutes.CbHandler = undefined;
cbHandler(webSocketHandler);
cbHandler(true);

const handler: expresswsroutes.WebSocketRouteHandler = undefined;
const next: NextFunction = undefined;
handler(clientInfo, cbHandler, next);

const server: expresswsroutes.Server = undefined;
const http: httpServer = server;
const wsServer: WebSocket.Server = server.wsServer;

const app: expresswsroutes.Express = expresswsroutes();
const e: exExpress = app;
const ws: expresswsroutes.Express = app.websocket('/path', handler);

const router: expresswsroutes.Router = undefined;
const r: coreRouter = router;
const wsr: expresswsroutes.Router = router.websocket('/path', handler);
