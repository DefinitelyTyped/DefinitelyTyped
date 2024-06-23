/// <reference types="node"/>

import { IncomingMessage, Server, ServerResponse as HttpServerResponse } from "http";
import { RequestHandler } from "micro";
import UrlPattern = require("url-pattern");

export type ServerResponse = HttpServerResponse;
export type ServerRequest = IncomingMessage & {
    params: { [key: string]: string };
    query: { [key: string]: string };
};
export type AugmentedRequestHandler = (
    req: ServerRequest,
    res: ServerResponse,
) => any;

export type RouteHandler = (path: string | UrlPattern, handler: AugmentedRequestHandler) => RequestHandler;

export function router(...routes: RequestHandler[]): RequestHandler;
export function withNamespace(namespace: string): (...routes: RequestHandler[]) => RequestHandler;

export const get: RouteHandler;
export const post: RouteHandler;
export const put: RouteHandler;
export const patch: RouteHandler;
export const del: RouteHandler;
export const head: RouteHandler;
export const options: RouteHandler;
