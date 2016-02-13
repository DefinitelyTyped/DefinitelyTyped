// Type definitions for koa v3.0.0
// Project: https://github.com/koajs/compose
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "koa-compose" {
    function compose(middleware: compose.Middleware[]): compose.ComposedMiddleware;

    module compose {
        interface Middleware {
            (context: any, next?: () => Promise<void>): Promise<any>;
        }
        
        interface ComposedMiddleware {
            (context: any): Promise<void>;
        }
    }

    export = compose;
}