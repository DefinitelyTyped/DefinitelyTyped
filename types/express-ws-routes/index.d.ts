// Type definitions for express-ws-routes 1.1
// Project: https://github.com/amekkawi/express-ws-routes
// Definitions by: Gregor Stamać <https://github.com/gstamac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Express as exExpress, Request, NextFunction } from 'express';
import * as WebSocket from 'ws';
import { Server as httpServer } from 'http';
import { Router as coreRouter } from 'express-serve-static-core';

declare function expressWsRoutes(): expressWsRoutes.Express;

declare namespace expressWsRoutes {
	interface ClientInfo { origin: string; secure: boolean; req: Request; }
	type WebSocketHandler = (socket: WebSocket) => void;
	type CbHandler = (connectHandler: WebSocketHandler | boolean) => void;
	type WebSocketRouteHandler = (info: ClientInfo, cb: CbHandler, next: NextFunction) => void;

	interface Server extends httpServer {
		wsServer: WebSocket.Server;
	}

	interface Express extends exExpress {
		websocket(route: string, handler: WebSocketRouteHandler): Express;
	}

	interface Router extends coreRouter {
		websocket(route: string, handler: WebSocketRouteHandler): Router;
	}
}

export = expressWsRoutes;
