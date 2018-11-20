// Type definitions for koa-joi-router 5.1
// Project: https://github.com/koajs/joi-router
// Definitions by: Matthew Bull <https://github.com/wingsbob>
//                 Dave Welsh <https://github.com/move-zig>
//                 Hiroshi Ioka <https://github.com/hirochachacha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from 'koa';
import * as Joi from 'joi';
import * as KoaRouter from 'koa-router';

declare module "koa" {
    interface Request {
        body?: any;
        params: {[key: string]: string};
    }
}

interface createRouter {
    (): createRouter.Router;
    Joi: typeof Joi;
}

declare namespace createRouter {
    type PartialHandler = (ctx: Koa.Context) => any;
    type FullHandler = (ctx: Koa.Context, next: () => Promise<any>) => any;
    interface NestedHandler extends ReadonlyArray<PartialHandler|FullHandler|NestedHandler> {}
    type Handler = PartialHandler | FullHandler| NestedHandler;

    type Method = (path: string|RegExp, handlerOrConfig: Handler | object, ...handlers: Handler[]) => Router;

    interface Spec {
        method: string|string[];
        path: string|RegExp;
        handler: Handler;
        validate?: {
            header?: Joi.AnySchema|{[key: string]: Joi.AnySchema};
            query?: Joi.AnySchema|{[key: string]: Joi.AnySchema};
            params?: Joi.AnySchema|{[key: string]: Joi.AnySchema};
            body?: Joi.AnySchema|{[key: string]: Joi.AnySchema};
            maxBody?: number;
            failure?: number;
            type?: 'form'|'json'|'multipart';
            output?: {[status: number]: Joi.AnySchema};
            continueOnError?: boolean;
        };
    }

    interface Router {
        routes: Spec[];
        route(spec: Spec|Spec[]): Router;
        middleware(): Koa.Middleware;

        prefix: KoaRouter['prefix'];
        use: KoaRouter['use'];
        param: KoaRouter['param'];

        head: Method;
        options: Method;
        get: Method;
        post: Method;
        put: Method;
        patch: Method;
        delete: Method;
    }
}

declare var createRouter: createRouter;

export = createRouter;
