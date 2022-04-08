import { Middleware, Middlewares, Context } from "./typings/common";

export type getType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type postType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type putType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type delType = (
    path: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type errorType = (
    name: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type subType = (
    subdomain: string,
    middlewares: Middleware | Middlewares,
    ...all: Middlewares
) => Middleware;

export type socketType = (
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

export interface Router {
    get: getType;
    post: postType;
    put: putType;
    del: delType;
    error: errorType;
    sub: subType;
    socket: socketType;
}
