import { Context, Middleware, Request } from "koa";

declare function koaCors(options?: koaCors.Options): Middleware;

declare namespace koaCors {
    interface Options {
        credentials?: true | ((ctx: Context) => boolean) | undefined;
        expose?: string | readonly string[] | undefined;
        headers?: string | readonly string[] | undefined;
        maxAge?: number | undefined;
        methods?: string | readonly string[] | undefined;
        origin?: boolean | string | ((request: Request) => string) | undefined;
    }
}

export = koaCors;
