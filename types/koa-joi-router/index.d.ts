// Type definitions for koa-joi-router 5.0
// Project: https://github.com/koajs/joi-router
// Definitions by: Matthew Bull <https://github.com/wingsbob>
//                 Dave Welsh <https://github.com/move-zig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from 'koa';
import * as Joi from 'joi';

interface createRouter {
    (): createRouter.Router;
    Joi: typeof Joi;
}

declare namespace createRouter {
    interface Spec {
        method: string;
        path: string|RegExp;
        handler: (ctx: Context) => void;
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
        prefix(path: string): void;
    }
}

declare var createRouter: createRouter;

export = createRouter;
