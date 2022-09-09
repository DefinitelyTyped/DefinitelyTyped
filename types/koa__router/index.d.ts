// Type definitions for @koa/router 12.x
// Project: https://github.com/koajs/koa-router#readme
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Pavel Ivanov <https://github.com/schfkt>
//                 JounQin <https://github.com/JounQin>
//                 Romain Faust <https://github.com/romain-faust>
//                 Guillaume Mayer <https://github.com/Guillaume-Mayer>
//                 Andrea Gueugnaut <https://github.com/falinor>
//                 Jeremy Forsythe <https://github.com/jdforsythe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

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
        /**
         * Only run last matched route's controller when there are multiple matches
         */
        exclusive?: boolean | undefined;
        /**
         * Host for router match
         */
        host?: string | RegExp | undefined;
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

    type RouterContext<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext, BodyT = unknown> = Koa.ParameterizedContext<StateT, ContextT & RouterParamContext<StateT, ContextT>, BodyT>;

    type Middleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext, BodyT = unknown> = Koa.Middleware<StateT, ContextT & RouterParamContext<StateT, ContextT>, BodyT>;

    interface ParamMiddleware<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext, BodyT = unknown> {
        (param: string, ctx: RouterContext<StateT, ContextT, BodyT>, next: Koa.Next): any;
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
        /**
         * Route name
         */
        name: string | null;
        /**
         * Case sensitive (default: false)
         */
        sensitive?: boolean | undefined;
        /**
         * Require the trailing slash (default: false)
         */
        strict?: boolean | undefined;
        /**
         * (default: false)
         */
        end?: boolean | undefined;
        /**
         * (default: '')
         */
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
        params<ParamT extends string = string>(path: string | RegExp, captures: ParamT[], params?: Record<string, any>): { [key in ParamT]?: string };

        /**
         * Returns array of regexp url path captures.
         */
        captures(path: string): string[];

        /**
         * Generate URL for route using given `params`.
         *
         * @example
         *
         * ```javascript
         * const route = new Layer('/users/:id', ['GET'], fn);
         *
         * route.url({ id: 123 }); // => "/users/123"
         * ```
         */
        url(params: object): string;

        /**
         * Run validations on route named parameters.
         *
         * @example
         *
         * ```javascript
         * router
         *   .param('user', function (id, ctx, next) {
         *     ctx.user = users[id];
         *     if (!ctx.user) return ctx.status = 404;
         *     next();
         *   })
         *   .get('/users/:user', function (ctx, next) {
         *     ctx.body = ctx.user;
         *   });
         * ```
         */
        param(param: string, middleware: ParamMiddleware): Layer;

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
    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     */
    use(
        path: string | string[] | RegExp,
        ...middleware: Array<Router.Middleware<StateT, ContextT>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP get method
     */
    get<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP get method
     */
    get<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP post method
     */
    post<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP post method
     */
    post<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP put method
     */
    put<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP put method
     */
    put<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP link method
     */
    link<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP link method
     */
    link<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP unlink method
     */
    unlink<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP unlink method
     */
    unlink<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP delete method
     */
    delete<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP delete method
     */
    delete<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * Alias for `router.delete()` because delete is a reserved word
     */
    del<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP head method
     */
    head<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP head method
     */
    head<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP options method
     */
    options<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP options method
     */
    options<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * HTTP patch method
     */
    patch<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * HTTP patch method
     */
    patch<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * Register route with all methods.
     */
    all<T = {}, U = {}, B = unknown>(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;
    /**
     * Register route with all methods.
     */
    all<T = {}, U = {}, B = unknown>(
        path: string | RegExp | Array<string | RegExp>,
        ...middleware: Array<Router.Middleware<StateT & T, ContextT & U, B>>
    ): Router<StateT, ContextT>;

    /**
     * Set the path prefix for a Router instance that was already initialized.
     *
     * @example
     *
     * ```javascript
     * router.prefix('/things/:thing_id')
     * ```
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
     *
     * @example
     *
     * ```javascript
     * var Koa = require('koa');
     * var Router = require('koa-router');
     *
     * var app = new Koa();
     * var router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods());
     * ```
     *
     * **Example with [Boom](https://github.com/hapijs/boom)**
     *
     * ```javascript
     * var Koa = require('koa');
     * var Router = require('koa-router');
     * var Boom = require('boom');
     *
     * var app = new Koa();
     * var router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods({
     *   throw: true,
     *   notImplemented: () => new Boom.notImplemented(),
     *   methodNotAllowed: () => new Boom.methodNotAllowed()
     * }));
     * ```
     */
    allowedMethods(
        options?: Router.RouterAllowedMethodsOptions
    ): Router.Middleware<StateT, ContextT>;

    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     *
     * ```javascript
     * router.redirect('/login', 'sign-in');
     * ```
     *
     * This is equivalent to:
     *
     * ```javascript
     * router.all('/login', ctx => {
     *   ctx.redirect('/sign-in');
     *   ctx.status = 301;
     * });
     * ```
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
     * Run middleware for named route parameters. Useful for auto-loading or
     * validation.
     *
     * @example
     *
     * ```javascript
     * router
     *   .param('user', (id, ctx, next) => {
     *     ctx.user = users[id];
     *     if (!ctx.user) return ctx.status = 404;
     *     return next();
     *   })
     *   .get('/users/:user', ctx => {
     *     ctx.body = ctx.user;
     *   })
     *   .get('/users/:user/friends', ctx => {
     *     return ctx.user.getFriends().then(function(friends) {
     *       ctx.body = friends;
     *     });
     *   })
     *   // /users/3 => {"id": 3, "name": "Alex"}
     *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
     * ```
     */

    param<BodyT = unknown>(param: string, middleware: Router.ParamMiddleware<StateT, ContextT, BodyT>): Router<StateT, ContextT>;

    /**
     * Generate URL for route. Takes a route name and map of named `params`.
     *
     * @example
     *
     * ```javascript
     * router.get('user', '/users/:id', (ctx, next) => {
     *   // ...
     * });
     *
     * router.url('user', 3);
     * // => "/users/3"
     *
     * router.url('user', { id: 3 });
     * // => "/users/3"
     *
     * router.use((ctx, next) => {
     *   // redirect to named route
     *   ctx.redirect(ctx.router.url('sign-in'));
     * })
     *
     * router.url('user', { id: 3 }, { query: { limit: 1 } });
     * // => "/users/3?limit=1"
     *
     * router.url('user', { id: 3 }, { query: "limit=1" });
     * // => "/users/3?limit=1"
     * ```
     */
    static url(path: string | RegExp, params: object): string;
 }

 export = Router;
