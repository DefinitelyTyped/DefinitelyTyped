import { Middleware, Middlewares, Context } from "./typings/common";

type getType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type postType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type putType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type delType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type errorType = (
    name: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type subType = (
    subdomain: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

type socketType = (
    name: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export const get: getType;
export const post: postType;
export const put: putType;
export const del: delType;
export const error: errorType;
export const sub: subType;
export const socket: socketType;

export interface IRouter {
    get: getType;
    post: postType;
    put: putType;
    del: delType;
    error: errorType;
    sub: subType;
    socket: socketType;
}
