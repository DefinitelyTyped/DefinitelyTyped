// Type definitions for koa v2.3.1
// Project: https://github.com/koajs/compose
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "koa-compose" {
    function compose(middleware: compose.Middleware[]): compose.ComposedMiddleware;

    namespace compose {
        interface Middleware {
            (next?: void): IterableIterator<any>;
        }

        interface ComposedMiddleware {
            (): IterableIterator<any>;
        }
    }

    export = compose;
}
