// Type definitions for koa-proxy 1.0
// Project: https://github.com/edorivai/koa-proxy#readme
// Definitions by: ishen7 <https://github.com/ishen7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';

declare namespace proxy {
    type RequestOptionFunc = (request: Koa.Request, opts: any) => any;

    interface Options {
        host?: string;
        url?: string;
        map?: { [key: string]: string };
        match?: RegExp;
        jar?: boolean;
        suppressRequestHeaders?: string[]; // case-insensitive
        suppressResponseHeaders?: string[]; // case-insensitive
        overrideResponseHeaders?: any;
        requestOptions?: RequestOptionFunc | { [key: string]: string };
        followRedirect?: boolean;
        yieldNext?: boolean;
    }
}

declare function proxy(options?: proxy.Options): Koa.Middleware;

export = proxy;
