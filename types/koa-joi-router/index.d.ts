import * as Koa from 'koa';
import * as Joi from 'joi';

declare type METHODS = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS' | 'HEAD';

interface ISpec {
  method: METHODS;
  path: string|RegExp;
  handler: (ctx: Koa.Context) => void;
  validate: {
    type: string;
    body?: Joi.AnySchema;
    params?: Joi.AnySchema;
    [status: number]: Joi.AnySchema;
  };
}

declare class Router {
  route(spec: ISpec): Router;
  middleware(): Koa.Middleware;
}

declare function createRouter(): Router;

declare namespace createRouter {}

export = createRouter;
