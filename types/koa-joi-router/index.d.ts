// Type definitions for koa-joi-router 8.0
// Project: https://github.com/koajs/joi-router
// Definitions by: Matthew Bull <https://github.com/wingsbob>
//                 Dave Welsh <https://github.com/move-zig>
//                 Hiroshi Ioka <https://github.com/hirochachacha>
//                 Tiger Oakes <https://github.com/NotWoods>
//                 Jeremy Hull <https://github.com/sourrust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from 'koa';
import * as Joi from 'joi';
import * as KoaRouter from 'koa-router';
import * as CoBody from 'co-body';

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
    type FullHandler = (ctx: Koa.Context, next: Koa.Next) => any;
    interface NestedHandler extends ReadonlyArray<Handler> {}
    type Handler = FullHandler | NestedHandler;

    type Method = (path: string|RegExp, handlerOrConfig: Handler | Config, ...handlers: Handler[]) => Router;

    type OutputValidation = { body: Joi.SchemaLike } | { headers: Joi.SchemaLike };

    interface Config {
      pre?: Handler;
      validate?: {
          header?: Joi.SchemaLike;
          query?: Joi.SchemaLike;
          params?: Joi.SchemaLike;
          body?: Joi.SchemaLike;
          maxBody?: number | string;
          failure?: number;
          type?: 'form'|'json'|'multipart';
          formOptions?: CoBody.Options;
          jsonOptions?: CoBody.Options;
          multipartOptions?: CoBody.Options;
          output?: {[status: string]: OutputValidation};
          continueOnError?: boolean;
          validateOptions?: Joi.ValidationOptions;
      };
      meta?: any;
    }

    interface Spec extends Config {
        method: string|string[];
        path: string|RegExp;
        handler: Handler;
    }

    interface Router {
        routes: Spec[];
        route(spec: Spec|Spec[]): Router;
        router: KoaRouter;
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
