// Type definitions for koa-cors 0.0
// Project: https://github.com/evert0n/koa-cors
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Request } from 'koa';

declare function koaCors(options?: koaCors.Options): Middleware;

declare namespace koaCors {
    interface Options {
        credentials?: true;
        expose?: string | ReadonlyArray<string>;
        headers?: string | ReadonlyArray<string>;
        maxAge?: number;
        methods?: string | ReadonlyArray<string>;
        origin?: boolean | string | ((request: Request) => string);
    }
}

export = koaCors;
