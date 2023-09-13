// Type definitions for koa-compose 3.2
// Project: https://github.com/koajs/compose
// Definitions by: jKey Lu <https://github.com/jkeylu>
//                 Anton Astashov <https://github.com/astashov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

declare function compose<T1, U1, T2, U2>(
    middleware: [Koa.Middleware<T1, U1>, Koa.Middleware<T2, U2>],
): Koa.Middleware<T1 & T2, U1 & U2>;

declare function compose<T1, U1, T2, U2, T3, U3>(
    middleware: [Koa.Middleware<T1, U1>, Koa.Middleware<T2, U2>, Koa.Middleware<T3, U3>],
): Koa.Middleware<T1 & T2 & T3, U1 & U2 & U3>;

declare function compose<T1, U1, T2, U2, T3, U3, T4, U4>(
    middleware: [Koa.Middleware<T1, U1>, Koa.Middleware<T2, U2>, Koa.Middleware<T3, U3>, Koa.Middleware<T4, U4>],
): Koa.Middleware<T1 & T2 & T3 & T4, U1 & U2 & U3 & U4>;

declare function compose<T1, U1, T2, U2, T3, U3, T4, U4, T5, U5>(
    middleware: [
        Koa.Middleware<T1, U1>,
        Koa.Middleware<T2, U2>,
        Koa.Middleware<T3, U3>,
        Koa.Middleware<T4, U4>,
        Koa.Middleware<T5, U5>,
    ],
): Koa.Middleware<T1 & T2 & T3 & T4 & T5, U1 & U2 & U3 & U4 & U5>;

declare function compose<T1, U1, T2, U2, T3, U3, T4, U4, T5, U5, T6, U6>(
    middleware: [
        Koa.Middleware<T1, U1>,
        Koa.Middleware<T2, U2>,
        Koa.Middleware<T3, U3>,
        Koa.Middleware<T4, U4>,
        Koa.Middleware<T5, U5>,
        Koa.Middleware<T6, U6>,
    ],
): Koa.Middleware<T1 & T2 & T3 & T4 & T5 & T6, U1 & U2 & U3 & U4 & U5 & U6>;

declare function compose<T1, U1, T2, U2, T3, U3, T4, U4, T5, U5, T6, U6, T7, U7>(
    middleware: [
        Koa.Middleware<T1, U1>,
        Koa.Middleware<T2, U2>,
        Koa.Middleware<T3, U3>,
        Koa.Middleware<T4, U4>,
        Koa.Middleware<T5, U5>,
        Koa.Middleware<T6, U6>,
        Koa.Middleware<T7, U7>,
    ],
): Koa.Middleware<T1 & T2 & T3 & T4 & T5 & T6 & T7, U1 & U2 & U3 & U4 & U5 & U6 & U7>;

declare function compose<T1, U1, T2, U2, T3, U3, T4, U4, T5, U5, T6, U6, T7, U7, T8, U8>(
    middleware: [
        Koa.Middleware<T1, U1>,
        Koa.Middleware<T2, U2>,
        Koa.Middleware<T3, U3>,
        Koa.Middleware<T4, U4>,
        Koa.Middleware<T5, U5>,
        Koa.Middleware<T6, U6>,
        Koa.Middleware<T7, U7>,
        Koa.Middleware<T8, U8>,
    ],
): Koa.Middleware<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8, U1 & U2 & U3 & U4 & U5 & U6 & U7 & U8>;

declare function compose<T>(middleware: Array<compose.Middleware<T>>): compose.ComposedMiddleware<T>;

declare namespace compose {
    type Middleware<T> = (context: T, next: Koa.Next) => any;
    type ComposedMiddleware<T> = (context: T, next?: Koa.Next) => Promise<void>;
}

export = compose;
