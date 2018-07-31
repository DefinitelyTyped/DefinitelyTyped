// Type definitions for koa-joi-router 5.0
// Project: https://github.com/koajs/joi-router
// Definitions by: Matthew Bull <https://github.com/wingsbob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from 'koa';
import * as Joi from 'joi';

interface Spec {
    method: string;
    path: string|RegExp;
    handler: (ctx: createRouter.Context) => void;
    validate?: {
        type: string;
        body?: Joi.AnySchema;
        params?: Joi.AnySchema;
        output?: {[status: number]: Joi.AnySchema};
    };
}

interface createRouter {
    (): createRouter.Router;
    Joi: typeof Joi;
}

declare namespace createRouter {
    interface Request extends Koa.Request {
        body: any;
        params: {[key: string]: string};
    }

    interface Context extends Koa.Context {
        request: Request;
    }

    interface Router {
        routes: Spec[];
        route(spec: Spec|Spec[]): Router;
        middleware(): Koa.Middleware;
    }
}

declare var createRouter: createRouter;

export = createRouter;
