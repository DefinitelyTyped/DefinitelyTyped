// Type definitions for koa-send v3.x
// Project: https://github.com/koajs/send
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../koa/koa.d.ts" />

declare module "koa-send" {

    import * as Koa from "koa";

    interface ISendOptions {
        root?: string;
        index?: string;
        maxAge?: number;
        hidden?: boolean;
        format?: boolean;
        gzip?: boolean;
        setHeaders?: Function;
    }

    function send(ctx: Koa.Context, path: string, opts?: ISendOptions): Promise<string>;

    namespace send {}

    export = send;
}
