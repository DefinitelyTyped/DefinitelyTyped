import * as Koa from "koa";
declare namespace cors {
    interface Options {
        origin?: string | ((ctx: Koa.Context) => boolean | string) | undefined;
        exposeHeaders?: string[] | undefined;
        maxAge?: number | undefined;
        credentials?: boolean | undefined;
        allowMethods?: string[] | undefined;
        allowHeaders?: string[] | undefined;
    }
}

declare function cors(options?: cors.Options): Koa.Middleware;

export = cors;
