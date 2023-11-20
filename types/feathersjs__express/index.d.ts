import { Application as FeathersApplication, ServiceMethods, SetupMethod } from "@feathersjs/feathers";
import * as express from "express";
// eslint-disable-next-line @definitelytyped/no-self-import
import * as self from "@feathersjs/express";
import { IRouterHandler, PathParams, RequestHandler, RequestHandlerParams } from "express-serve-static-core";

declare const feathersExpress: (<T>(app: FeathersApplication<T>) => Application<T>) & typeof self;
export default feathersExpress;

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// TypeScript methods cannot be overloaded with a different signature. Derive two application types without the use methods.
type ExpressAndFeathersApplicationWithoutUse<T> =
    & Omit<express.Application, "use">
    & Omit<FeathersApplication<T>, "use">;
// Give the "any" type for the feathers options object a more precise name.
export type FeathersServiceOptions = any;

export interface FeathersRouterMatcher<T> {
    (
        path: PathParams,
        ...handlers: Array<
            (RequestHandler | RequestHandlerParams | Partial<ServiceMethods<any> & SetupMethod> | Application)
        >
    ): T;
}

type FeathersApplicationRequestHandler<T> =
    & express.IRouterHandler<T>
    & FeathersRouterMatcher<T>
    & ((...handlers: RequestHandlerParams[]) => T);

export interface Application<T = any> extends ExpressAndFeathersApplicationWithoutUse<T> {
    use: FeathersApplicationRequestHandler<T>;
}

export function errorHandler(options?: {
    public?: string | undefined;
    logger?: { error?: ((msg: string) => void) | undefined } | undefined;
    html?: any;
    json?: any;
}): express.ErrorRequestHandler;

export function notFound(): express.RequestHandler;

export const rest: {
    (handler?: express.RequestHandler): () => void;
    formatter: express.RequestHandler;
};

/*
 * Re-export of the express package.
 */

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
    urlencoded,
} from "express";

export const original: typeof express;
