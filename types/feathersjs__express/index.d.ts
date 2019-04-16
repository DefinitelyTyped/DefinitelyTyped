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
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// TypeScript methods cannot be overloaded with a different signature. Derive two application types without the use methods.
declare type ExpressAndFeathersApplicationWithoutUse<T> = Omit<express.Application, 'use'> & Omit<FeathersApplication<T>, 'use'>;
// Give the "any" type for the feathers options object a more precise name.
export type FeathersServiceOptions = any;

export interface IFeathersRouterMatcher<T> {
    (path: PathParams, ...handlers: (RequestHandler | RequestHandlerParams | Partial<ServiceMethods<any> & SetupMethod> | Application)[]): T;
}

declare type FeathersApplicationRequestHandler<T> = express.IRouterHandler<T> & IFeathersRouterMatcher<T> & ((...handlers: RequestHandlerParams[]) => T);

export interface Application<T = any> extends ExpressAndFeathersApplicationWithoutUse<T> {
    use: FeathersApplicationRequestHandler<T>;
}

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
