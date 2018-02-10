// Type definitions for @feathersjs/express 1.1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import { Application as FeathersApplication } from '@feathersjs/feathers';
import * as express from 'express';

export default function feathersExpress<T>(app: FeathersApplication<T>): Application<T>;
export type Application<T> = express.Application & FeathersApplication<T>;

export function errorHandler(options?: any): express.ErrorRequestHandler;
export function notFound(): express.RequestHandler;
export const rest: {
    (): () => void;
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
