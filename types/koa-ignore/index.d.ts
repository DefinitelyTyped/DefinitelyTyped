import { Context, Middleware } from "koa";

declare function koaIgnore(
    ...middleware: Middleware[]
): {
    if(condition: (context: Context) => boolean): Middleware;
    unless(condition: (context: Context) => boolean): Middleware;
};

export = koaIgnore;
