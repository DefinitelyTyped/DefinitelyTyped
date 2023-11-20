import * as express from "express";

declare module "express-serve-static-core" {
    interface Application {
        namedRoutes: NamedRouter;
    }
    // tslint:disable-next-line interface-name
    interface IRouterMatcher<T> {
        (path: PathParams, name: string, ...handlers: RequestHandler[]): T;
        (path: PathParams, name: string, ...handlers: RequestHandlerParams[]): T;
    }
}

interface RouterOptions {
    caseSensitive: boolean;
}

interface RouteOptions {
    name: string;
    recursiveWildcard: boolean;
    caseSensitive: boolean;
    wildcardInPairs: boolean;
}

interface RouteParams {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | null;
}

declare class NamedRouter {
    constructor(options?: Partial<RouterOptions>);
    match(req: express.Request): boolean | object;
    add(
        method: string,
        path: string,
        callbacks: express.RequestHandler | express.RequestHandler[],
        options?: Partial<RouteOptions>,
    ): void;
    build(name: string, params?: RouteParams, method?: string): string;
    registerAppHelpers(app: express.Express): NamedRouter;
    param(name: string, callback: express.RequestHandler): NamedRouter;
    param(callback: express.RequestHandler): NamedRouter;
    dispatch(req: express.Request, res?: express.Response, next?: express.NextFunction): void;
    extendExpress(app: express.Express | express.Router): NamedRouter;
}

export = NamedRouter;
