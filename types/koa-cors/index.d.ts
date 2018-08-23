// Type definitions for koa-cors 0.0
// Project: https://github.com/evert0n/koa-cors
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Request } from 'koa';

declare function KoaCors(options?: KoaCors.Options): Middleware;

declare namespace KoaCors {
    interface Options {
        credentials?: true;
        expose?: string | string[];
        headers?: string | string[];
        maxAge?: number;
        methods?: string | string[];
        origin?: boolean | string | ((request: Request) => string);
    }
}

export = KoaCors;
