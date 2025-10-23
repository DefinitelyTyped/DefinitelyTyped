import { Express as exExpress, NextFunction, Request } from "express";
import { Router as coreRouter } from "express-serve-static-core";
import { Server as httpServer } from "http";
import * as WebSocket from "ws";

declare function expressWsRoutes(): expressWsRoutes.Express;

declare namespace expressWsRoutes {
    interface ClientInfo {
        origin: string;
        secure: boolean;
        req: Request;
    }
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
