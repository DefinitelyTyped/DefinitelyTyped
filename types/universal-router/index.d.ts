// Type definitions for universal-router 7.0
// Project: https://github.com/kriasoft/universal-router
// Definitions by: Jack Moore <https://github.com/jtmthf>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
//                 Lodin <https://github.com/Lodin>
//                 acidghost <https://github.com/acidghost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import pathToRegexp = require('path-to-regexp');

/**
 * Params is a key/value object that represents extracted URL parameters.
 * Each URL parameter resolves to a string.
 */
export interface Params {
    [_: string]: any;
}

/**
 * In addition to a URL path string, any arbitrary data can be passed to the `router.resolve()` method, that becomes available inside action functions.
 */
export interface Context {
    [_: string]: any;
}

export interface PathnameContext extends Context {
    /**
     * URL which was transmitted to `router.resolve()`.
     */
    pathname: string;
}

export interface ActionContext<C extends Context, R = any> extends PathnameContext {
    /**
     * Current router instance.
     */
    router: UniversalRouter<C, R>;
    /**
     * Matched route object.
     */
    route: Route;
    /**
     * Middleware style function which can continue resolving.
     */
    next: (resume?: boolean, parent?: Route, prevResult?: any) => Promise<R>;
    /**
     * Base URL path relative to the path of the current route.
     */
    baseUrl: string;
    /**
     * Matched path.
     */
    path: string;
    /**
     * Matched path params.
     */
    params: Params;
    /**
     * An array of keys found in the path, see `path-to-regexp` documentation for details.
     * @see https://github.com/pillarjs/path-to-regexp
     */
    keys: pathToRegexp.Key[];
}

/**
 * A Route is a singular route in your application. It contains a path, an
 * action function, and optional children which are an array of Route.
 *
 * @template C User context that is made union with ActionContext.
 * @template R Result that every action function resolves to. If the action returns a Promise, R can be the type the Promise resolves to.
 */
export interface Route<C extends Context = any, R = any> {
    path?: string | RegExp | Array<string | RegExp>;
    /**
     * unique string
     */
    name?: string;
    /**
     * automatically filled by the router
     */
    parent?: Route | null;
    /**
     * array of route objects
     */
    children?: Routes<C, R> | null;
    /**
     * action method should return anything except `null` or `undefined` to be resolved by router
     * otherwise router will throw `Page not found` error if all matched routes returned nothing
     */
    action?: (context: ActionContext<C, R> & C, params: Params) => R | Promise<R> | void;
}

/**
 * Routes in an array of type Route.
 * @template C User context that is made union with ActionContext.
 * @template R Result that every action function resolves to. If the action returns a Promise, R can be the type the Promise resolves to.
 */
export type Routes<C extends Context = Context, R = any> = Array<Route<C, R>>;

export interface Options<C extends Context = Context, R = any> {
    context?: C;
    baseUrl?: string;
    resolveRoute?: (context: ActionContext<C, R> & C, params: Params) => any;
    errorHandler?: (error: Error & { status: number }, context: C) => any;
}

/**
 * @see https://github.com/kriasoft/universal-router/blob/v6.0.0/docs/api.md
 */
export default class UniversalRouter<C extends Context = Context, R = any> {
    constructor(routes: Routes<C, R> | Route<C, R>, options?: Options<C>)
    /**
     * Traverses the list of routes in the order they are defined until it finds the first route that matches provided URL path string
     * and whose action function returns anything other than null or undefined.
     */
    resolve(pathnameOrContext: string | PathnameContext): Promise<R>;
    /**
     * `path-to-regexp` function
     */
    static pathToRegexp: typeof pathToRegexp;
}
