// Type definitions for koa-joi-router 5.0
// Project: https://github.com/koajs/joi-router
// Definitions by: Matthew Bull <https://github.com/wingsbob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as Koa from 'koa';
import * as Joi from 'joi';

interface Spec {
    method: string;
    path: string|RegExp;
    handler: (ctx: Koa.Context) => void;
    validate?: {
        type: string;
        body?: Joi.AnySchema;
        params?: Joi.AnySchema;
        [status: number]: Joi.AnySchema;
    };
}

interface Router {
    route(spec: Spec): Router;
    middleware(): Koa.Middleware;
}

interface createRouter {
    (): Router;
    Joi: typeof Joi;
}

declare var create: createRouter;

export = create;
