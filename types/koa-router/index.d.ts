// Type definitions for koa-router v7.x
// Project: https://github.com/alexmingoia/koa-router#readme
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Pavel Ivanov <https://github.com/schfkt>
//                 JounQin <https://github.com/JounQin>
//                 Romain Faust <https://github.com/romain-faust>
//                 Guillaume Mayer <https://github.com/Guillaume-Mayer>
//                 Andrea Gueugnaut <https://github.com/falinor>
// Definitions: https://github.com/hellopao/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Router from "koa-router";
    var router = new Router();

 =============================================== */


import * as Koa from "koa";

declare namespace Router {
    export interface IRouterOptions {
        /**
         * Prefix for all routes.
         */
        prefix?: string;
        /**
         * Methods which should be supported by the router.
         */
        methods?: string[];
        routerPath?: string;
        /**
         * Whether or not routing should be case-sensitive.
         */
        sensitive?: boolean;
        /**
         * Whether or not routes should matched strictly.
         *
         * If strict matching is enabled, the trailing slash is taken into
         * account when matching routes.
         */
        strict?: boolean;
    }

    export interface IRouterParamContext<StateT = any, CustomT = {}> {
        /**
         * url params
         */
        params: any;
        /**
         * the router instance
         */
        router: Router<StateT, CustomT>;
        /**
         * Matched route
         */
        _matchedRoute: string | RegExp | undefined;
        _matchedRouteName: string | undefined;
    }

    export type RouterContext<StateT = any, CustomT = {}> =
        Koa.ParameterizedContext<StateT, CustomT & IRouterParamContext<StateT, CustomT>>;

    // For backward compatibility IRouterContext needs to be an interface
    // But it's deprecated - please use `RouterContext` instead
    export interface IRouterContext extends RouterContext {}

    export type IMiddleware<StateT = any, CustomT = {}> =
        Koa.Middleware<StateT, CustomT & IRouterParamContext<StateT, CustomT>>

    export interface IParamMiddleware {
        (param: string, ctx: RouterContext, next: () => Promise<any>): any;
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

    export interface ILayerOptions {
        name: string;
        sensitive?: boolean;
        strict?: boolean;
    }

    export interface IUrlOptionsQuery {
        query: object | string;
    }

    export interface IRoutesMatch {
        path: Layer[];
        pathAndMethod: Layer[];
        route: boolean;
    }

    export class ParamName {
        asterisk: boolean;
        delimiter: string;
        name: string;
        optional: boolean;
        partial: boolean;
        pattern: string;
        prefix: string;
        repeat: string;
    }

    export class Layer {
        opts: ILayerOptions;
        name: string;
        methods: string[];
        paramNames: ParamName[];
        stack: Router.IMiddleware[];
        regexp: RegExp;
        path: string;

        constructor(path: string | RegExp, methods: string[], middleware: Router.IMiddleware, opts?: ILayerOptions);
        constructor(path: string | RegExp, methods: string[], middleware: Array<Router.IMiddleware>, opts?: ILayerOptions);

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
}

declare class Router<StateT = any, CustomT = {}> {
    params: Object;
    stack: Array<Router.Layer>;

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
    use(...middleware: Array<Router.IMiddleware<StateT, CustomT>>): Router<StateT, CustomT>;
    use(
        path: string | string[] | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP get method
     */
    get(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    get(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP post method
     */
    post(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    post(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP put method
     */
    put(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    put(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP link method
     */
    link(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    link(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP unlink method
     */
    unlink(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    unlink(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP delete method
     */
    delete(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    delete(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    del(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP head method
     */
    head(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    head(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP options method
     */
    options(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    options(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * HTTP path method
     */
    patch(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    patch(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * Register route with all methods.
     */
    all(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
    all(
        path: string | RegExp | (string | RegExp)[],
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;

    /**
     * Set the path prefix for a Router instance that was already initialized.
     */
    prefix(prefix: string): Router<StateT, CustomT>;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    routes(): Router.IMiddleware<StateT, CustomT>;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    middleware(): Router.IMiddleware<StateT, CustomT>;

    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     */
    allowedMethods(
        options?: Router.IRouterAllowedMethodsOptions
    ): Router.IMiddleware<StateT, CustomT>;

    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     */
    redirect(source: string, destination: string, code?: number): Router<StateT, CustomT>;

    /**
     * Create and register a route.
     */
    register(
        path: string | RegExp,
        methods: string[],
        middleware: Router.IMiddleware<StateT, CustomT>,
        opts?: Object
    ): Router.Layer;

    /**
     * Lookup route with given `name`.
     */
    route(name: string): Router.Layer;
    route(name: string): boolean;

    /**
     * Generate URL for route. Takes either map of named `params` or series of
     * arguments (for regular expression routes)
     *
     * router = new Router();
     * router.get('user', "/users/:id", ...
     *
     * router.url('user', { id: 3 });
     * // => "/users/3"
     *
     * Query can be generated from third argument:
     *
     * router.url('user', { id: 3 }, { query: { limit: 1 } });
     * // => "/users/3?limit=1"
     *
     * router.url('user', { id: 3 }, { query: "limit=1" });
     * // => "/users/3?limit=1"
     *
     */
    url(name: string, params: any, options?: Router.IUrlOptionsQuery): string;
    url(name: string, params: any, options?: Router.IUrlOptionsQuery): Error;

    /**
     * Match given `path` and return corresponding routes.
     */
    match(path: string, method: string): Router.IRoutesMatch;

    /**
     * Run middleware for named route parameters. Useful for auto-loading or validation.
     */
    param(param: string, middleware: Router.IParamMiddleware): Router<StateT, CustomT>;

    /**
     * Generate URL from url pattern and given `params`.
     */
    static url(path: string | RegExp, params: Object): string;
}

export = Router;
