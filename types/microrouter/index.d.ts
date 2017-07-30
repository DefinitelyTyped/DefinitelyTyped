// Type definitions for microrouter 2.2
// Project: https://github.com/pedronauck/micro-router#readme
// Definitions by: Mathieu Dutour <https://github.com/mathieudutour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { IncomingMessage, ServerResponse, Server } from 'http';

export type RequestHandler = (
    req: IncomingMessage & {
        params: {[key: string]: string}
    },
    res: ServerResponse
) => any;

export type RouteHandler = (path: string, handler: RequestHandler) => RequestHandler;

export function router(...routes: RequestHandler[]): RequestHandler;

export const get: RouteHandler;
export const post: RouteHandler;
export const put: RouteHandler;
export const patch: RouteHandler;
export const del: RouteHandler;
export const head: RouteHandler;
export const options: RouteHandler;
