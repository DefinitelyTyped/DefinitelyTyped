// Type definitions for koa-proxies 0.9
// Project: https://github.com/vagusX/koa-proxies#readme
// Definitions by: Chris Couzens <https://github.com/ccouzens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from 'koa';
import * as HttpProxy from 'http-proxy';

declare namespace proxy {
    interface Options extends HttpProxy.ServerOptions {
        logs?: boolean;
        rewrite?: (url: string, ctx: Koa.DefaultContext) => string;
        events?: { [key: string]: (...args: any[]) => void; };
    }
}

declare function proxy(context: string, options: proxy.Options): Koa.Middleware;
export = proxy;
