import { IncomingMessage, ServerResponse } from "http";
import * as Koa from "koa";

export = expressToKoa;

declare function expressToKoa(
    middleware: (
        req: IncomingMessage,
        res: ServerResponse,
        next: (err?: any) => void,
    ) => void,
): Koa.Middleware;
