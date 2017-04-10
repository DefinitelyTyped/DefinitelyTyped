// Type definitions for koa-router v7.x
// Project: https://github.com/alexmingoia/koa-router/
// Definitions by: Jerry Chin <https://github.com/hellopao/>, Pavel Ivanov <https://github.com/schfkt/>
// Definitions: https://github.com/hellopao/DefinitelyTyped

/* =================== USAGE ===================

    import * as Router from "koa-router";
    var router = new Router();

 =============================================== */


import * as Koa from "koa";

declare module "koa" {
    interface Context {
        params: any;
    }
}

declare module Layer {

    export interface ILayerOptions {
        name: string;
        sensitive?: boolean;
        strict?: boolean;
    }

}

declare module Router {

    export interface IRouterOptions {
        /**
         * Router prefixes 
         */
        prefix?: string;
        /**
         * HTTP verbs
         */
        methods?: string[];
        routerPath?: string;
        sensitive?: boolean;
    }

    export interface IRouterContext extends Koa.Context {
        /**
         * url params
         */
        params: any;
    }

    export interface IMiddleware {
        (ctx: Router.IRouterContext, next: () => Promise<any>): any;
    }

    export interface IParamMiddleware {
        (param: string, ctx: Router.IRouterContext, next: () => Promise<any>): any;
    }

    export interface IRouterAllowedMethodsOptions {
        /**
         * throw error instead of setting status and header
         */
        throw?: boolean;
        /**
         * throw the returned value in place of the default NotImplemented error
         */
        notImplemented?: () => any;
        /**
         * throw the returned value in place of the default MethodNotAllowed error
         */
        methodNotAllowed?: () => any;
    }

}

declare class Layer {

    opts: Layer.ILayerOptions;
    name: string;
    methods: string[];
    paramNames: string[];
    stack: Router.IMiddleware[];
    regexp: RegExp;
    path: string;

    constructor(path: string | RegExp, methods: string[], middleware: Router.IMiddleware, opts?: Layer.ILayerOptions);
    constructor(path: string | RegExp, methods: string[], middleware: Array<Router.IMiddleware>, opts?: Layer.ILayerOptions);

    /**
     * Returns whether request `path` matches route.
     */
    match(path: string): boolean;

    /**
     * Returns map of URL parameters for given `path` and `paramNames`.
     */
    params(path: string | RegExp, captures: string[], existingParams?: Object): Object;

    /**
     * Returns array of regexp url path captures.
     */
    captures(path: string): string[];

    /**
     * Generate URL for route using given `params`.
     */
    url(params: Object): string;

    /**
     * Run validations on route named parameters.
     */
    param(param: string, fn: Router.IMiddleware): Layer;

    /**
     * Prefix route path.
     */
    setPrefix(prefix: string): Layer;
}

declare class Router {

    params: Object;

    stack: Array<Layer>;

    /**
     * Create a new router.
     */
    constructor(opt?: Router.IRouterOptions);

    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     */
    use(...middleware: Array<Router.IMiddleware>): Router;
    use(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP get method
     */
    get(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    get(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP post method
     */
    post(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    post(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP put method
     */
    put(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    put(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP delete method
     */
    delete(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    delete(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    del(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP head method
     */
    head(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    head(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP options method
     */
    options(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    options(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * HTTP path method
     */
    patch(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    patch(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * Register route with all methods.
     */
    all(name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
    all(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;

    /**
     * Set the path prefix for a Router instance that was already initialized.
     */
    prefix(prefix: string): Router;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    routes(): Router.IMiddleware;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    middlewares(): Router.IMiddleware;

    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     */
    allowedMethods(options?: Router.IRouterAllowedMethodsOptions): Router.IMiddleware;

    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     */
    redirect(source: string, destination: string, code?: number): Router;

    /**
     * Create and register a route.
     */
    register(path: string | RegExp, methods: string[], middleware: Router.IMiddleware, opts?: Object): Layer;

    /**
     * Lookup route with given `name`.
     */
    route(name: string): Layer;
    route(name: string): boolean;

    /**
     * Generate URL for route. Takes either map of named `params` or series of
     * arguments (for regular expression routes)
     */
    url(name: string, params: Object): string;
    url(name: string, params: Object): Error;

    /**
     * Match given `path` and return corresponding routes.
     */
    match(name: string, method: string): Object;

    /**
     * Run middleware for named route parameters. Useful for auto-loading or validation.
     */
    param(param: string, middleware: Router.IParamMiddleware): Router;

    /**
     * Generate URL from url pattern and given `params`.
     */
    static url(path: string | RegExp, params: Object): string;
}

export = Router;
