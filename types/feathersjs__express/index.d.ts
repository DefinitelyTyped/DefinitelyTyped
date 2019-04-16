// Type definitions for @feathersjs/express 1.1
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
//                 Aleksey Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.3

import { Application as FeathersApplication } from '@feathersjs/feathers';
import * as express from 'express';
import * as self from '@feathersjs/express';

declare const feathersExpress: (<T>(app: FeathersApplication<T>) => Application<T>) & typeof self;
export default feathersExpress;
export type Application<T> = express.Application & FeathersApplication<T>;

export function errorHandler(options?: {
    public?: string,
    logger?: { error?: (msg: string) => void },
    html?: any,
    json?: any,
}): express.ErrorRequestHandler;
export function notFound(): express.RequestHandler;

export const rest: {
    (handler?: express.RequestHandler): () => void;
    formatter: express.RequestHandler;
};

/*
 * Re-export of the express package.
 **/

export {
    CookieOptions,
    Errback,
    ErrorRequestHandler,
    Express,
    Handler,
    IRoute,
    IRouter,
    IRouterHandler,
    IRouterMatcher,
    json,
    MediaType,
    NextFunction,
    Request,
    RequestHandler,
    RequestParamHandler,
    Response,
    Router,
    RouterOptions,
    Send,
    static,
    urlencoded
} from 'express';

export const original: typeof express;
