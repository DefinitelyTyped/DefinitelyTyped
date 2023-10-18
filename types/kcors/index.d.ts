import * as Koa from "koa";

declare function cors(options?: cors.Options): Koa.Middleware;
export = cors;

declare namespace cors {
    interface Options {
        origin?: ((ctx: Koa.Context) => string) | string | undefined;
        allowMethods?: string[] | string | null | undefined;
        exposeHeaders?: string[] | string | undefined;
        allowHeaders?: string[] | string | undefined;
        maxAge?: number | string | undefined;
        credentials?: boolean | undefined;
        keepHeadersOnError?: boolean | undefined;
    }
}
