/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

/** Utility type */
export type BaseOrArray<T> = T | readonly T[];

/**
 * Route handler callback.
 *
 * In synchronous mode, the handler is called with all matched tokens as
 * arguments. If a handler returns `false`, the router will skip all remaining
 * handlers.
 *
 * In asynchronous mode, the last parameter is always a continuation function
 * which accepts a single argument. If the continuation is called with a truthy
 * value or `false`, the router will skip all remaining handlers.
 */
export type Handler<ThisType> = (this: ThisType, ...args: any[]) => any;

export type RouteEntry<ThisType> = BaseOrArray<Handler<ThisType>>;

export interface RoutingTable<ThisType> {
    [route: string]: RouteEntry<ThisType> | RoutingTable<ThisType>;
}

/**
 * Router options object
 */
export interface RoutingOptions<ThisType> {
    /**
     * Controls route recursion.
     * Default is `false` client-side, and `"backward"` server-side.
     */
    recurse?: "forward" | "backward" | false | undefined;
    /**
     * If set to `false`, then trailing slashes (or other delimiters) are
     * allowed in routes. Default is `true`.
     */
    strict?: boolean | undefined;
    /**
     * Controls async routing. Default is `false`.
     */
    async?: boolean | undefined;
    /**
     * Character separator between route fragments. Default is `/`.
     */
    delimiter?: string | undefined;
    /**
     * Function to call if no route is found on a call to `router.dispatch()`.
     */
    notfound?: Handler<{ method: string; path: string }> | undefined;
    /**
     * A function (or list of functions) to call on every call to
     * `router.dispatch()` when a route is found.
     */
    on?: RouteEntry<ThisType> | undefined;
    /**
     *  A function (or list of functions) to call before every call to
     * `router.dispatch()` when a route is found.
     */
    before?: RouteEntry<ThisType> | undefined;

    // Client-only options

    /**
     * (_Client Only_)
     * An object to which string-based routes will be bound. This can be
     * especially useful for late-binding to route functions (such as async
     * client-side requires).
     */
    resource?: {
        [handlerName: string]: Handler<ThisType>;
    } | undefined;
    /**
     * (_Client Only_)
     * A function (or list of functions) to call when a given route is no longer
     * the active route.
     */
    after?: RouteEntry<ThisType> | undefined;
    /**
     * (_Client Only_)
     * If set to `true` and client supports `pushState()`, then uses HTML5
     * History API instead of hash fragments.
     */
    html5history?: boolean | undefined;
    /**
     * (_Client Only_)
     * If `html5history` is enabled, the route handler by default is executed
     * upon `Router.init()` since with real URIs the router can not know if it
     * should call a route handler or not. Setting this to `false` disables the
     * route handler initial execution.
     */
    run_handler_in_init?: boolean | undefined;
    /**
     * (_Client Only_)
     * If `html5history` is enabled, the `window.location` hash by default is
     * converted to a route upon `Router.init()` since with canonical URIs the
     * router can not know if it should convert the hash to a route or not.
     * Setting this to `false` disables the hash conversion on router
     * initialisation.
     */
    convert_hash_in_init?: boolean | undefined;
}

// `director.Router` and `director.http.Router` have several methods with
// incompatible signatures. To reuse method definitions as much as possible,
// methods with compatible signatures have been moved into a separate abstract
// class named `AbstractRouterBase`.

/**
 * Abstract class that provides methods shared by all Router subclasses.
 */
export abstract class AbstractRouterBase<ThisType> {
    constructor(routes?: RoutingTable<ThisType>);

    /**
     * Configures this instance with the specified `options`.
     * @param options Options to configure this instance with
     */
    configure(options?: RoutingOptions<ThisType>): this;

    /**
     * Mounts the sanitized `routes` onto the root context for this instance.
     * @param routes Routes to mount onto this instance
     * @param path Path within the Routing Table to insert the routes into
     */
    mount(routes: RoutingTable<ThisType>, path?: BaseOrArray<string>): void;

    /**
     * Sets up a `params` function which replaces any instance of `token`,
     * inside of a given `str` with `matcher`. This is very useful if you have a
     * common regular expression throughout your code base which you wish to be
     * more DRY.
     * @param token Token which to replace (e.g. `:dog`, 'cat')
     * @param matcher Target to replace the token with
     */
    param(token: string, matcher: string | RegExp | ((substring: string, ...args: any[]) => string)): this;

    /**
     * Evalutes the `routesFn` in the given `path` scope.
     * @param path Nested scope in which to path
     * @param routesFn Function to evaluate in the new scope
     */
    path(path: string | RegExp, routesFn: (this: this, self: this) => void): void;

    /**
     * Adds a new `route` to this instance for the given `path`, using `"on"` as
     * the method.
     *
     * This is an alias for `.on(path, route)`.
     * @param path Path to set this route on
     * @param route Handler for the specified path
     */
    route(path: BaseOrArray<string | RegExp>, route: RouteEntry<ThisType>): void;

    /**
     * Adds a new `route` to this instance for the given `method` and `path`.
     *
     * This is an alias for `.on(method, path, route)`.
     * @param method Method to use
     * @param path Path to set this route on
     * @param route Handler for the specified method and path
     */
    route(method: BaseOrArray<string>, path: BaseOrArray<string | RegExp>, route: RouteEntry<ThisType>): void;
}

/**
 * Platform-independent Router class
 */
export class Router extends AbstractRouterBase<Router> {
    /**
     * Finds a set of functions on the traversal towards `method` and `path` in
     * the core routing table, then invokes them based on settings in this
     * instance.
     * @param method Method to dispatch
     * @param path Path to dispatch
     * @param callback (Optional) Continuation to respond to for async scenarios
     * @return Whether a route was matched for the given `method` and `path`
     */
    dispatch(method: string, path: string, callback?: (err?: any) => void): boolean;

    /**
     * Adds a new `route` to this instance for the given `path`, using `"on"` as
     * the method.
     * @param path Path to set this route on
     * @param route Handler for the specified path
     */
    on(path: BaseOrArray<string | RegExp>, route: RouteEntry<Router>): void;

    /**
     * Adds a new `route` to this instance for the given `method` and `path`.
     * @param method Method to use
     * @param path Path to set this route on
     * @param route Handler for the specified method and path
     */
    on(method: BaseOrArray<string>, path: BaseOrArray<string | RegExp>, route: RouteEntry<Router>): void;
}

export namespace http {
    /**
     * Type of the `this` object for HTTP route handlers.
     */
    interface HttpRouterContext {
        req: IncomingMessage;
        res: ServerResponse;
    }

    interface HttpRoutingOptions extends RoutingOptions<HttpRouterContext> {
        /**
         * If set to `true`, the router will perform routing immediately instead
         * of waiting for the `end` event, buffering and parsing the entire
         * request body.
         * This can be used when you want to manually buffer the request.
         */
        stream?: boolean | undefined;
    }

    interface HttpRouteHandlerOptions {
        /**
         * Patterns to test against the `content-type` of the incoming request.
         */
        accept?: BaseOrArray<string | RegExp> | undefined;
        /**
         * If set to `true`, the router will not buffer the request for this
         * route.
         * This can be used when you want to manually buffer the request.
         */
        stream?: boolean | undefined;
    }

    /**
     * Server-side HTTP Router class for Node.js
     */
    class Router extends AbstractRouterBase<HttpRouterContext> implements HttpRouterGeneratedMethodsCheck {
        /**
         * Ask the router to attach objects or manipulate `this` object on which
         * the function passed to the http router will get applied.
         * @param func Function to execute on `this` before applying to router
         *    function
         */
        // Note: This type definition does not yet support attaching arbitrary
        // properties to the Router object. Please use type assertions to work
        // around this limitation.
        attach(func: (this: this) => void): void;

        configure(options?: HttpRoutingOptions): this;

        /**
         * Finds a set of functions on the traversal towards `method` and `path`
         * in the core routing table then invokes them based on settings in this
         * instance.
         *
         * Note: `HEAD` requests are dispatched to `get` routes.
         * @param req Incoming request to dispatch
         * @param res Outgoing response to dispatch
         * @param callback (Optional) Continuation to respond to for async
         *      scenarios
         * @return Whether a route was matched for the given request
         */
        dispatch(
            req: IncomingMessage,
            res: ServerResponse,
            callback?: (err?: any, req?: IncomingMessage, res?: ServerResponse) => void,
        ): boolean;

        /**
         * Adds a new `route` to this instance for the given `method` and `path`.
         * @param method Method to use
         * @param path Path to set this route on
         * @param route Handler for the specified method and path
         */
        on(method: BaseOrArray<string>, path: string | RegExp, route: RouteEntry<HttpRouterContext>): void;

        /**
         * Adds a new `route` to this instance for the given `method` and `path`.
         * @param method Method to use
         * @param path Path to set this route on
         * @param options Additional options for this route
         * @param route Handler for the specified method and path
         */
        on(
            method: BaseOrArray<string>,
            path: string | RegExp,
            options: HttpRouteHandlerOptions | undefined | null,
            route: RouteEntry<HttpRouterContext>,
        ): void;

        // Generated helper methods
        // These are dynamically added via `Router.extend()`
        readonly options: typeof _GeneratedHelperMethod;
        readonly get: typeof _GeneratedHelperMethod;
        readonly post: typeof _GeneratedHelperMethod;
        readonly put: typeof _GeneratedHelperMethod;
        readonly delete: typeof _GeneratedHelperMethod;
        readonly trace: typeof _GeneratedHelperMethod;
        readonly connect: typeof _GeneratedHelperMethod;
        readonly propfind: typeof _GeneratedHelperMethod;
        readonly proppatch: typeof _GeneratedHelperMethod;
        readonly mkcol: typeof _GeneratedHelperMethod;
        readonly copy: typeof _GeneratedHelperMethod;
        readonly move: typeof _GeneratedHelperMethod;
        readonly lock: typeof _GeneratedHelperMethod;
        readonly unlock: typeof _GeneratedHelperMethod;
        readonly ["version-control"]: typeof _GeneratedHelperMethod;
        readonly report: typeof _GeneratedHelperMethod;
        readonly checkout: typeof _GeneratedHelperMethod;
        readonly checkin: typeof _GeneratedHelperMethod;
        readonly uncheckout: typeof _GeneratedHelperMethod;
        readonly mkworkspace: typeof _GeneratedHelperMethod;
        readonly update: typeof _GeneratedHelperMethod;
        readonly label: typeof _GeneratedHelperMethod;
        readonly merge: typeof _GeneratedHelperMethod;
        readonly ["baseline-control"]: typeof _GeneratedHelperMethod;
        readonly mkactivity: typeof _GeneratedHelperMethod;
        readonly orderpatch: typeof _GeneratedHelperMethod;
        readonly acl: typeof _GeneratedHelperMethod;
        readonly search: typeof _GeneratedHelperMethod;
        readonly patch: typeof _GeneratedHelperMethod;
        readonly before: typeof _GeneratedHelperMethod;
        readonly after: typeof _GeneratedHelperMethod;
    }

    /**
     * Adds a new `route` to this instance for a specific method and an empty
     * `path`.
     * @param route Handler for the method and path
     */
    function _GeneratedHelperMethod(this: Router, route: RouteEntry<HttpRouterContext>): void;

    /**
     * Adds a new `route` to this instance for a specific method and `path`.
     * @param path Path to set this route on
     * @param route Handler for the method and path
     */
    function _GeneratedHelperMethod(this: Router, path: string | RegExp, route: RouteEntry<HttpRouterContext>): void;

    /**
     * Adds a new `route` to this instance for a specific method and `path`.
     * @param path Path to set this route on
     * @param options Additional options for this route
     * @param route Handler for the method and path
     */
    function _GeneratedHelperMethod(
        this: Router,
        path: string | RegExp,
        options: HttpRouteHandlerOptions | undefined | null,
        route: RouteEntry<HttpRouterContext>,
    ): void;

    /**
     * Names of helper methods dynamically exposed by the HTTP Router.
     */
    type HttpRouterGeneratedMethodNames = typeof methods[number] | "before" | "after";

    /**
     * Helper interface that checks if any dynamically generated helper methods
     * were accidentally omitted from the definition of `director.http.Router`.
     */
    type HttpRouterGeneratedMethodsCheck = {
        [key in HttpRouterGeneratedMethodNames]: typeof _GeneratedHelperMethod;
    };

    // HTTP methods
    // Defined in /lib/director/http/methods.js

    const methods: readonly [
        // Hypertext Transfer Protocol -- HTTP/1.1
        // http://www.ietf.org/rfc/rfc2616.txt
        "options",
        "get",
        "post",
        "put",
        "delete",
        "trace",
        "connect",
        // HTTP Extensions for Distributed Authoring -- WEBDAV
        // http://www.ietf.org/rfc/rfc2518.txt
        "propfind",
        "proppatch",
        "mkcol",
        "copy",
        "move",
        "lock",
        "unlock",
        // Versioning Extensions to WebDAV
        // http://www.ietf.org/rfc/rfc3253.txt
        "version-control",
        "report",
        "checkout",
        "checkin",
        "uncheckout",
        "mkworkspace",
        "update",
        "label",
        "merge",
        "baseline-control",
        "mkactivity",
        // Ordered Collections Protocol (WebDAV)
        // http://www.ietf.org/rfc/rfc3648.txt
        "orderpatch",
        // Web Distributed Authoring and Versioning (WebDAV) Access Control Protocol
        // http://www.ietf.org/rfc/rfc3744.txt
        "acl",
        // Web Distributed Authoring and Versioning (WebDAV) SEARCH
        // http://www.ietf.org/rfc/rfc5323.txt
        "search",
        // PATCH Method for HTTP
        // http://www.ietf.org/rfc/rfc5789.txt
        "patch",
    ];

    // HTTP Error classes
    // Defined in /lib/director/http/responses.js

    class NotModified extends Error {
        status: 304;
        options: {
            removeContentHeaders: true;
        };
    }

    /** Exception class for erroneous requests */
    class BadRequest extends Error {
        status: 400;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
    }

    class NotAuthorized extends Error {
        status: 401;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
    }

    class Forbidden extends Error {
        status: 403;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
    }

    class NotFound extends Error {
        status: 404;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
    }

    class MethodNotAllowed extends Error {
        status: 405;
        headers: {
            /** Allowed HTTP methods */
            allow: string;
        };
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
        message: "method not allowed.";

        /**
         * @param allowed Allowed HTTP methods
         */
        constructor(allowed: string);
    }

    class NotAcceptable extends Error {
        status: 406;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
            only: "application/json";
        };
    }

    class NotImplemented extends Error {
        status: 501;
        headers: {};
        body: {
            /** Error message (same as `this.message`) */
            error: string;
        };
    }
}

export namespace cli {
    /**
     * Type of the `this` object for CLI route handlers.
     */
    interface CliRouterContext<TTY> {
        tty: TTY;
        cmd: string;
    }

    /**
     * Server-side CLI Router class for Node.js
     */
    class Router<TTY = any> extends AbstractRouterBase<CliRouterContext<TTY>> {
        /**
         * Finds a set of functions on the traversal towards `method` and `path` in
         * the core routing table, then invokes them based on settings in this
         * instance.
         * @param method Method to dispatch
         * @param path Path to dispatch
         * @param tty Path to dispatch
         * @param callback (Optional) Continuation to respond to for async scenarios
         * @return Whether a route was matched for the given `method` and `path`
         */
        dispatch(method: string, path: string, tty?: TTY, callback?: (err?: any) => void): boolean;

        /**
         * Adds a new `route` to this instance for the given `path`, using `"on"`
         * as the method.
         * @param path Path to set this route on
         * @param route Handler for the specified path
         */
        on(path: BaseOrArray<string | RegExp>, route: RouteEntry<CliRouterContext<TTY>>): void;

        /**
         * Adds a new `route` to this instance for the specified `method` and `path`.
         * @param method Method to use
         * @param path Path to set this route on
         * @param route Handler for the specified method and path
         */
        on(
            method: BaseOrArray<string>,
            path: BaseOrArray<string | RegExp>,
            route: RouteEntry<CliRouterContext<TTY>>,
        ): void;
    }
}
