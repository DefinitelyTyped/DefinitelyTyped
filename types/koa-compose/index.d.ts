// Type definitions for koa-compose 3.2
// Project: https://github.com/koajs/compose
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

declare function compose<T, U, V, W>(
    middleware: [Koa.Middleware<T, U>, Koa.Middleware<V, W>]
): Koa.Middleware<T & V, U & W>;

declare function compose<T>(middleware: Array<compose.Middleware<T>>): compose.ComposedMiddleware<T>;

declare namespace compose {
    type Middleware<T> = (context: T, next: () => Promise<any>) => any;
    type ComposedMiddleware<T> = (context: T, next?: () => Promise<any>) => Promise<void>;
}

export = compose;
