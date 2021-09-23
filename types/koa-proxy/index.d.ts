// Type definitions for koa-proxy 1.0
// Project: https://github.com/edorivai/koa-proxy#readme
// Definitions by: ishen7 <https://github.com/ishen7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';

declare namespace proxy {
    type RequestOptionFunc = (request: Koa.Request, opts: any) => any;

    interface IndexedObject {
        [ key: string ]: string;
    }

    type MapFunction = (path: string) => string;

    interface Options {
        host?: string;
        encoding?: string | null;
        url?: string;
        map?: IndexedObject | MapFunction;
        match?: RegExp;
        jar?: boolean;
        suppressRequestHeaders?: string[]; // case-insensitive
        suppressResponseHeaders?: string[]; // case-insensitive
        overrideResponseHeaders?: any;
        requestOptions?: RequestOptionFunc | IndexedObject;
        followRedirect?: boolean;
        yieldNext?: boolean;
    }
}

declare function proxy(options?: proxy.Options): Koa.Middleware;

export = proxy;
