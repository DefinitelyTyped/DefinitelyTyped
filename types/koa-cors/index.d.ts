import { Context, Middleware, Request } from "koa";

declare function koaCors(options?: koaCors.Options): Middleware;

declare namespace koaCors {
    interface Options {
        credentials?: true | ((ctx: Context) => boolean) | undefined;
        expose?: string | ReadonlyArray<string> | undefined;
        headers?: string | ReadonlyArray<string> | undefined;
        maxAge?: number | undefined;
        methods?: string | ReadonlyArray<string> | undefined;
        origin?: boolean | string | ((request: Request) => string) | undefined;
    }
}

export = koaCors;
