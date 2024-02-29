import * as Koa from "koa";

declare function auth(opts: {
    name: string;
    pass: string;
}): Koa.Middleware;

export = auth;
