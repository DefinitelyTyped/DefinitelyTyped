// Type definitions for @koa/router 8.x
// Project: https://github.com/koajs/koa-router#readme
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Pavel Ivanov <https://github.com/schfkt>
//                 JounQin <https://github.com/JounQin>
//                 Romain Faust <https://github.com/romain-faust>
//                 Guillaume Mayer <https://github.com/Guillaume-Mayer>
//                 Andrea Gueugnaut <https://github.com/falinor>
//                 Jeremy Forsythe <https://github.com/jdforsythe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Router from "@koa/router";
    var router = new Router();

 =============================================== */

 import * as Koa from "koa";

 declare namespace Router {
    interface RouterOptions {
        /**
         * Prefix for all routes.
         */
        prefix?: string | undefined;
        /**
         * Methods which should be supported by the router.
         */
        methods?: string[] | undefined;
        routerPath?: string | undefined;
        /**
         * Whether or not routing should be case-sensitive.
         */
        sensitive?: boolean | undefined;
        /**
         * Whether or not routes should matched strictly.
         *
         * If strict matching is enabled, the trailing slash is taken into
         * account when matching routes.
         */
        strict?: boolean | undefined;
    }

    interface RouterParamContext<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> {
        /**
         * url params
         */
        params: Record<string, string>;
        /**
         * the router instance
         */
        router: Router<StateT, ContextT>;
        /**
         * Matched route
         */
        _matchedRoute: string | RegExp | undefined;
        _matchedRouteName: string | undefined;
    }

    type RouterContext<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> = Koa.ParameterizedContext<StateT, ContextT & RouterParamContext<StateT, ContextT>>;

    type Middleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> = Koa.Middleware<StateT, ContextT & RouterParamContext<StateT, ContextT>>;

    interface ParamMiddleware {
        (param: string, ctx: RouterContext, next: Koa.Next): any;
    }

    interface RouterAllowedMethodsOptions {
        /**
         * throw error instead of setting status and header
         */
        throw?: boolean | undefined;
        /**
         * throw the returned value in place of the default NotImplemented error
         */
        notImplemented?: (() => any) | undefined;
        /**
         * throw the returned value in place of the default MethodNotAllowed error
         */
        methodNotAllowed?: (() => any) | undefined;
    }

    interface LayerOptions {
        name: string | null;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        end?: boolean | undefined;
        prefix?: string | undefined;
        ignoreCaptures?: boolean | undefined;
    }

    interface UrlOptionsQuery {
        query: object | string;
    }

    interface RoutesMatch {
        path: Layer[];
        pathAndMethod: Layer[];
        route: boolean;
    }

    class ParamName {
        asterisk: boolean;
        delimiter: string;
        name: string;
        optional: boolean;
        partial: boolean;
        pattern: string;
        prefix: string;
        repeat: string;
    }

    class Layer {
        opts: LayerOptions;
        name: string | null;
        methods: string[];
        paramNames: ParamName[];
        stack: Middleware[];
        regexp: RegExp;
        path: string;

        constructor(path: string | RegExp, methods: string[], middleware: Middleware | Middleware[], opts?: LayerOptions);

        /**
         * Returns whether request `path` matches route.
         */
        match(path: string): boolean;

        /**
         * Returns map of URL parameters for given `path` and `paramNames`.
         */
        params(path: string | RegExp, captures: string[], existingParams?: object): object;

        /**
         * Returns array of regexp url path captures.
         */
        captures(path: string): string[];

        /**
         * Generate URL for route using given `params`.
         */
        url(params: object): string;

        /**
         * Run validations on route named parameters.
         */
        param(param: string, fn: Middleware): Layer;

        /**
         * Prefix route path.
         */
        setPrefix(prefix: string): Layer;
    }
}

declare class Router<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext> {
    opts: Router.RouterOptions;
    methods: string[];
    params: object;
    stack: Router.Layer[];

    /**
     * Create a new router.
     */
    constructor(opt?: Router.RouterOptions);

    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     */
    use(...middleware: Array<Router.Middleware<StateT, ContextT>>): Router<StateT, ContextT>;
    use(
        path: string | string[] | RegExp,
        ...middleware: Array<Router.Middleware<StateT, ContextT>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP get method
     */
    get<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    get<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP post method
     */
    post<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    post<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP put method
     */
    put<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    put<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP link method
     */
    link<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    link<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP unlink method
     */
    unlink<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    unlink<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP delete method
     */
    delete<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    delete<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    del<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP head method
     */
    head<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    head<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP options method
     */
    options<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    options<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP patch method
     */
    patch<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    patch<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * Register route with all methods.
     */
    all<T = {}, U = {}>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;
    all<T = {}, U = {}>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U>>
    ): Router<StateT, ContextT>;

    /**
     * Set the path prefix for a Router instance that was already initialized.
     */
    prefix(prefix: string): Router<StateT, ContextT>;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    routes(): Router.Middleware<StateT, ContextT>;

    /**
     * Returns router middleware which dispatches a route matching the request.
     */
    middleware(): Router.Middleware<StateT, ContextT>;

    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     */
    allowedMethods(
        options?: Router.RouterAllowedMethodsOptions
    ): Router.Middleware<StateT, ContextT>;

    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     */
    redirect(source: string, destination: string, code?: number): Router<StateT, ContextT>;

    /**
     * Create and register a route.
     */
    register(
        path: string | RegExp,
        methods: string[],
        middleware: Router.Middleware<StateT, ContextT> | Array<Router.Middleware<StateT, ContextT>>,
        opts?: Router.LayerOptions,
    ): Router.Layer;

    /**
     * Lookup route with given `name`.
     */
    route(name: string): Router.Layer | boolean;

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
    url(name: string, params?: any, options?: Router.UrlOptionsQuery): Error | string;

    /**
     * Match given `path` and return corresponding routes.
     */
    match(path: string, method: string): Router.RoutesMatch;

    /**
     * Run middleware for named route parameters. Useful for auto-loading or validation.
     */
    param(param: string, middleware: Router.ParamMiddleware): Router<StateT, ContextT>;

    /**
     * Generate URL from url pattern and given `params`.
     */
    static url(path: string | RegExp, params: object): string;
 }

 export = Router;
