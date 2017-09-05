// Type definitions for restify 5.0
// Project: https://github.com/restify/node-restify
// Definitions by: Bret Little <https://github.com/blittle>, Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import http = require('http');
import Logger = require('bunyan');
import url = require('url');

export interface BunyanOptions {
    properties: any;

    serializers: any;

    headers: any;

    log: Logger;
}

export interface ServerOptions {
    ca?: any;

    certificate?: any;

    key?: any;

    passphrase?: string;

    requestCert?: boolean;

    ciphers?: string;

    formatters?: any;

    log?: Logger;

    name?: string;

    spdy?: any;

    version?: string;

    versions?: string[];

    handleUpgrades?: boolean;

    httpsServerOptions?: any;

    handleUncaughtExceptions?: boolean;

    router?: Router;

    socketio?: boolean;

    noWriteContinue?: boolean;

    rejectUnauthorized?: boolean;
}

export interface AddressInterface {
    port: number;

    family: string;

    address: string;
}

export class Server {
    /**
     * Creates a new Server.
     * @public
     * @class
     * @param {Object} options an options object
     */
    constructor(options?: ServerOptions);
}

export interface Server extends http.Server {
    /**
     * Returns the server address. Wraps node's address().
     * @public
     * @function address
     * @returns  {String}
     */
    address(): AddressInterface;

    /**
     * Gets the server up and listening. Wraps node's listen().
     *
     * You can call like:
     *  server.listen(80)
     *  server.listen(80, '127.0.0.1')
     *  server.listen('/tmp/server.sock')
     *
     * @public
     * @function listen
     * @throws   {TypeError}
     * @param    {Function}  callback optionally get notified when listening.
     * @returns  {undefined}
     */
    listen(...args: any[]): any;

    /**
     * Shuts down this server, and invokes callback (optionally) when done.
     * Wraps node's close().
     * @public
     * @function close
     * @param    {Function}  callback optional callback to invoke when done.
     * @returns  {undefined}
     */
    close(...args: any[]): any;

    /**
     * Returns the number of currently inflight requests.
     * @public
     * @function inflightRequests
     * @returns  {Number}
     */
    inflightRequests(): number;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function del
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    del(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function get
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    get(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function head
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    head(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function opts
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    opts(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function post
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    post(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function put
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    put(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @public
     * @function patch
     * @param   {String | Object} opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns {Route}                the newly created route.
     */
    patch(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Minimal port of the functionality offered by Express.js Route Param
     * Pre-conditions
     * @link http://expressjs.com/guide.html#route-param%20pre-conditions
     *
     * This basically piggy-backs on the `server.use` method. It attaches a
     * new middleware function that only fires if the specified parameter exists
     * in req.params
     *
     * Exposes an API:
     *   server.param("user", function (req, res, next) {
     *     // load the user's information here, always making sure to call next()
     *   });
     *
     * @public
     * @function param
     * @param    {String}   name The name of the URL param to respond to
     * @param    {Function} fn   The middleware function to execute
     * @returns  {Object}        returns self
     */
    param(name: string, fn: RequestHandler): Server;

    /**
     * Piggy-backs on the `server.use` method. It attaches a new middleware
     * function that only fires if the specified version matches the request.
     *
     * Note that if the client does not request a specific version, the middleware
     * function always fires. If you don't want this set a default version with a
     * pre handler on requests where the client omits one.
     *
     * Exposes an API:
     *   server.versionedUse("version", function (req, res, next, ver) {
     *     // do stuff that only applies to routes of this API version
     *   });
     *
     * @public
     * @function versionedUse
     * @param    {String|Array} versions the version(s) the URL to respond to
     * @param    {Function}     fn       the middleware function to execute, the
     *                                   fourth parameter will be the selected
     *                                   version
     * @returns  {undefined}
     */
    versionedUse(versions: string | string[], fn: RequestHandler): Server;

    /**
     * Removes a route from the server.
     * You pass in the route 'blob' you got from a mount call.
     * @public
     * @function rm
     * @throws   {TypeError} on bad input.
     * @param    {String}    route the route name.
     * @returns  {Boolean}         true if route was removed, false if not.
     */
    rm(route: string): boolean;

    /**
     * Installs a list of handlers to run _before_ the "normal" handlers of all
     * routes.
     *
     * You can pass in any combination of functions or array of functions.
     * @public
     * @function use
     * @returns {Object} returns self
     */
    use(...handlers: RequestHandlerType[]): Server;

    /**
     * Gives you hooks to run _before_ any routes are located.  This gives you
     * a chance to intercept the request and change headers, etc., that routing
     * depends on.  Note that req.params will _not_ be set yet.
     * @public
     * @function pre
     * @returns {Object} returns self
     */
    pre(...pre: RequestHandlerType[]): Server;

    /**
     * toString() the server for easy reading/output.
     * @public
     * @function toString
     * @returns  {String}
     */
    toString(): string;

    /**
     * Return debug information about the server.
     * @public
     * @method getDebugInfo
     * @returns {Object}
     */
    getDebugInfo(): any;

    /** Name of the server. */
    name: string;

    /** Default version(s) to use in all routes. */
    versions: string[];

    /** bunyan instance. */
    log: Logger;

    /** List of content-types this server can respond with. */
    acceptable: string[];

    /** Once listen() is called, this will be filled in with where the server is running. */
    url: string;

    /** Node server instance */
    server: http.Server;

    /** Router instance */
    router: Router;
}

export interface RouterOptions {
    contentType?: string | string[];

    strictRouting?: boolean;

    log?: Logger;

    version?: string;

    versions?: string[];
}

export class Router {
    constructor(options: RouterOptions);
}

export interface Router {
    /**
     * takes an object of route params and query params, and 'renders' a URL.
     * @public
     * @function render
     * @param    {String} routeName the route name
     * @param    {Object} params    an object of route params
     * @param    {Object} query     an object of query params
     * @returns  {String}
     */
    render(routeName: string, params: any, query?: any): string;

    /**
     * adds a route.
     * @public
     * @function mount
     * @param    {Object} options an options object
     * @returns  {String} returns the route name if creation is successful.
     */
    mount(options: RouteOptions): string | boolean;

    /**
     * unmounts a route.
     * @public
     * @function unmount
     * @param    {String} name the route name
     * @returns  {String}      the name of the deleted route.
     */
    unmount(name: string): string;

    /**
     * get a route from the router.
     * @public
     * @function get
     * @param    {String}    name the name of the route to retrieve
     * @param    {Object}    req  the request object
     * @param    {Function}  cb   callback function
     * @returns  {undefined}
     */
    get(name: string, req: Request, cb: FindRouteCallback): void;

    /**
     * find a route from inside the router, handles versioned routes.
     * @public
     * @function find
     * @param    {Object}   req      the request object
     * @param    {Object}   res      the response object
     * @param    {Function} callback callback function
     * @returns  {undefined}
     */
    find(req: Request, res: Response, callback: FindRouteCallback): void;

    /**
     * Find a route by path. Scans the route list for a route with the same RegEx.
     * i.e. /foo/:param1/:param2 would match an existing route with different
     * parameter names /foo/:id/:name since the compiled RegExs match.
     * @public
     * @function findByPath
     * @param    {String | RegExp}    path      a path to find a route for.
     * @param    {Object}             options   an options object
     * @returns  {Object}             returns the route if a match is found
     */
    findByPath(path: string | RegExp): Route;

    /**
     * toString() serialization.
     * @public
     * @function toString
     * @returns  {String}
     */
    toString(): string;

    /**
     * Return information about the routes registered in the router.
     * @public
     * @returns {object} The routes in the router.
     */
    getDebugInfo(): any;

    name: string;

    mounts: { [routeName: string]: Route };

    versions: string[];

    contentType: string[];

    routes: {
        DELETE: Route[];
        GET: Route[];
        HEAD: Route[];
        OPTIONS: Route[];
        PATCH: Route[];
        POST: Route[];
        PUT: Route[];
    };

    log?: Logger;
}

export interface RequestFileInterface {
    path: string;
    type: string;
}

export interface RequestAuthorization {
    scheme: string;
    credentials: string;
    basic?: {
        username: string;
        password: string;
    };
}

export interface Request extends http.IncomingMessage {
    /**
     * checks if the accept header is present and has the value requested.
     * e.g., req.accepts('html');
     * @public
     * @function accepts
     * @param    {String | Array} types an array of accept type headers
     * @returns  {Boolean}
     */
    accepts(types: string | string[]): boolean;

    /**
     * checks if the request accepts the encoding types.
     * @public
     * @function acceptsEncoding
     * @param    {String | Array} types an array of accept type headers
     * @returns  {Boolean}
     */
    acceptsEncoding(types: string | string[]): boolean;

    /**
     * gets the content-length header off the request.
     * @public
     * @function getContentLength
     * @returns {Number}
     */
    getContentLength(): number;

    /**
     * pass through to getContentLength.
     * @public
     * @function contentLength
     * @returns {Number}
     */
    contentLength(): number;

    /**
     * gets the content-type header.
     * @public
     * @function getContentType
     * @returns {String}
     */
    getContentType(): string;

    /**
     * pass through to getContentType.
     * @public
     * @function contentType
     * @returns {Number}
     */
    contentType(): string;

    /**
     * retrieves the complete URI requested by the client.
     * @public
     * @function getHref
     * @returns {String}
     */
    getHref(): string;

    /**
     * pass through to getHref.
     * @public
     * @function href
     * @returns {String}
     */
    href(): string;

    /**
     * retrieves the request uuid. was created when the request was setup.
     * @public
     * @function getId
     * @returns  {String}
     */
    getId(): string;

    /**
     * pass through to getId.
     * @public
     * @function id
     * @returns {String}
     */
    id(): string;

    /**
     * retrieves the cleaned up url path.
     * e.g., /foo?a=1  =>  /foo
     * @public
     * @function getPath
     * @returns  {String}
     */
    getPath(): string;

    /**
     * pass through to getPath.
     * @public
     * @function path
     * @returns {String}
     */
    path(): string;

    /**
     * returns the raw query string
     * @public
     * @function getQuery
     * @returns  {String}
     */
    getQuery(): string;

    // /**
    //  * pass through to getQuery.
    //  * @public
    //  * @function query
    //  * @returns {String}
    //  */
    // query(): string;

    /**
     * returns ms since epoch when request was setup.
     * @public
     * @function time
     * @returns  {Number}
     */
    time(): number;

    /**
     * returns a parsed URL object.
     * @public
     * @function getUrl
     * @returns  {Object}
     */
    getUrl(): url.Url;

    /**
     * returns the accept-version header.
     * @public
     * @function getVersion
     * @returns  {String}
     */
    getVersion(): string;

    /**
     * pass through to getVersion.
     * @public
     * @function version
     * @returns {String}
     */
    version(): string;

    /**
     * returns the version of the route that matched.
     * @public
     * @function matchedVersion
     * @returns {String}
     */
    matchedVersion(): string;

    /**
     * returns any header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @public
     * @function header
     * @param    {String} name  the name of the header
     * @param    {String} value default value if header isn't found on the req
     * @returns  {String}
     */
    header(name: string, value?: string): string;

    /**
     * returns any trailer header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @public
     * @function trailer
     * @param    {String} name  the name of the header
     * @param    {String} value default value if header isn't found on the req
     * @returns  {String}
     */
    trailer(name: string, value?: string): string;

    /**
     * Check if the incoming request contains the Content-Type header field, and
     * if it contains the given mime type.
     * @public
     * @function is
     * @param    {String} type  a content-type header value
     * @returns  {Boolean}
     */
    is(type: string): boolean;

    /**
     * Check if the incoming request is chunked.
     * @public
     * @function isChunked
     * @returns  {Boolean}
     */
    isChunked(): boolean;

    /**
     * Check if the incoming request is kept alive.
     * @public
     * @function isKeepAlive
     * @returns  {Boolean}
     */
    isKeepAlive(): boolean;

    /**
     * Check if the incoming request is encrypted.
     * @public
     * @function isSecure
     * @returns  {Boolean}
     */
    isSecure(): boolean;

    /**
     * Check if the incoming request has been upgraded.
     * @public
     * @function isUpgradeRequest
     * @returns  {Boolean}
     */
    isUpgradeRequest(): boolean;

    /**
     * Check if the incoming request is an upload verb.
     * @public
     * @function isUpload
     * @returns  {Boolean}
     */
    isUpload(): boolean;

    /**
     * toString serialization
     * @public
     * @function toString
     * @returns  {String}
     */
    toString(): string;

    /**
     * retrieves the user-agent header.
     * @public
     * @function userAgent
     * @returns  {String}
     */
    userAgent(): string;

    /**
     * Start the timer for a request handler function. You must explicitly invoke
     * endHandlerTimer() after invoking this function. Otherwise timing information
     * will be inaccurate.
     * @public
     * @function startHandlerTimer
     * @param    {String}    handlerName The name of the handler.
     * @returns  {undefined}
     */
    startHandlerTimer(handlerName: string): void;

    /**
     * Stop the timer for a request handler function.
     * @public
     * @function endHandlerTimer
     * @param    {String}    handlerName The name of the handler.
     * @returns  {undefined}
     */
    endHandlerTimer(handlerName: string): void;

    /**
     * returns the connection state of the request. current valid values are
     * 'close' and 'aborted'.
     * @public
     * @function connectionState
     * @returns {String}
     */
    connectionState(): string;

    /**
     * returns the route object to which the current request was matched to.
     * Route info object structure:
     * {
     *  path: '/ping/:name',
     *  method: 'GET',
     *  versions: [],
     *  name: 'getpingname'
     * }
     * @public
     * @function getRoute
     * @returns {Object}
     */
    getRoute(): RouteSpec;

    /** bunyan logger you can piggyback on. */
    log: Logger;

    /** available when queryParser plugin is used. */
    query?: any;

    /** available when bodyParser plugin is used. */
    body?: any;

    /** available when queryParser or bodyParser plugin is used with mapParams enabled. */
    params?: any;

    /** available when serveStatic plugin is used. */
    files?: { [name: string]: RequestFileInterface };

    /** available when authorizationParser plugin is used */
    username?: string;

    /** available when authorizationParser plugin is used */
    authorization?: RequestAuthorization;
}

export interface CacheOptions {
    maxAge: number;
}

export interface Response extends http.ServerResponse {
    /**
     * sets the cache-control header. `type` defaults to _public_,
     * and options currently only takes maxAge.
     * @public
     * @function cache
     * @param    {String} type    value of the header
     * @param    {Object} [options] an options object
     * @returns  {String}         the value set to the header
     */
    cache(type: string, options?: CacheOptions): string;

    /**
     * sets the cache-control header. `type` defaults to _public_,
     * and options currently only takes maxAge.
     * @public
     * @function cache
     * @param    {Object} [options] an options object
     * @returns  {String}         the value set to the header
     */
    cache(options?: CacheOptions): string;

    /**
     * turns off all cache related headers.
     * @public
     * @function noCache
     * @returns  {Object} self, the response object
     */
    noCache(): Response;

    /**
     * Appends the provided character set to the response's Content-Type.
     * e.g., res.charSet('utf-8');
     * @public
     * @function charSet
     * @param    {String} type char-set value
     * @returns  {Object} self, the response object
     */
    charSet(type: string): Response;

    /**
     * retrieves a header off the response.
     * @public
     * @function get
     * @param    {Object} name the header name
     * @returns  {String}
     */
    get(name: string): string;

    /**
     * retrieves all headers off the response.
     * @public
     * @function getHeaders
     * @returns  {Object}
     */
    getHeaders(): any;

    /**
     * pass through to getHeaders.
     * @public
     * @function headers
     * @returns  {Object}
     */
    headers(): any;

    /**
     * sets headers on the response.
     * @public
     * @function header
     * @param    {String} name  the name of the header
     * @param    {String} value the value of the header
     * @returns  {Object}
     */
    header(name: string, value?: any): any;

    /**
     * short hand method for:
     *     res.contentType = 'json';
     *     res.send({hello: 'world'});
     * @public
     * @function json
     * @param    {Number} code    http status code
     * @param    {Object} object    value to json.stringify
     * @param    {Object} [headers] headers to set on the response
     * @returns  {Object}
     */
    json(code: number, object: any, headers?: { [header: string]: string }): any;

    /**
     * short hand method for:
     *     res.contentType = 'json';
     *     res.send({hello: 'world'});
     * @public
     * @function json
     * @param    {Object} object    value to json.stringify
     * @param    {Object} [headers] headers to set on the response
     * @returns  {Object}
     */
    json(object: any, headers?: { [header: string]: string }): any;

    /**
     * sets the link heaader.
     * @public
     * @function link
     * @param    {String} l   the link key
     * @param    {String} rel the link value
     * @returns  {String}     the header value set to res
     */
    link(l: string, rel: string): string;

    /**
     * sends the response object. pass through to internal __send that uses a
     * formatter based on the content-type header.
     * @public
     * @function send
     * @param    {Number} [code] http status code
     * @param    {Object | Buffer | Error} [body] the content to send
     * @param    {Object} [headers]  any add'l headers to set
     * @returns  {Object} the response object
     */
    send(code?: any, body?: any, headers?: { [header: string]: string }): any;

    /**
     * sends the response object. pass through to internal __send that skips
     * formatters entirely and sends the content as is.
     * @public
     * @function sendRaw
     * @param    {Number} [code] http status code
     * @param    {Object | Buffer | Error} [body] the content to send
     * @param    {Object} [headers]  any add'l headers to set
     * @returns  {Object} the response object
     */
    sendRaw(code?: any, body?: any, headers?: { [header: string]: string }): any;

    /**
     * sets a header on the response.
     * @public
     * @function set
     * @param    {String} name name of the header
     * @param    {String} val  value of the header
     * @returns  {Object}      self, the response object
     */
    set(name: string, val: string): Response;

    /**
     * sets the http status code on the response.
     * @public
     * @function status
     * @param    {Number} code http status code
     * @returns  {Number}     the status code passed in
     */
    status(code: number): number;

    /**
     * toString() serialization.
     * @public
     * @function toString
     * @returns  {String}
     */
    toString(): string;

    /**
     * pass through to native response.writeHead().
     * @public
     * @function writeHead
     * @emits    header
     * @returns  {undefined}
     */
    writeHead(): void;

    /** redirect is sugar method for redirecting.
     * res.redirect(301, 'www.foo.com', next);
     * `next` is mandatory, to complete the response and trigger audit logger.
     * @public
     * @param    {Number}   code the status code
     * @param    {String}   url to redirect to
     * @param    {Function} next fn
     * @emits    redirect
     * @function redirect
     * @return   {undefined}
     */
    redirect(code: number, url: string, next: Next): void;

    /** redirect is sugar method for redirecting.
     * res.redirect({...}, next);
     * `next` is mandatory, to complete the response and trigger audit logger.
     * @public
     * @param    {Object | String}   options the options or url to redirect to
     * @param    {Function} next fn
     * @emits    redirect
     * @function redirect
     * @return   {undefined}
     */
    redirect(options: string | any, next: Next): void;

    /** HTTP status code. */
    code: number;

    /** short hand for the header content-length. */
    contentLength: number;

    /** short hand for the header content-type. */
    contentType: string;

    /** response headers. */
    headers: any;

    /** A unique request id (x-request-id). */
    id: string;
}

export interface Next {
    (err?: any): void;

    ifError(err?: any): void;
}

export interface RoutePathRegex extends RegExp {
    restifyParams: string[];
}

export interface RouteSpec {
    method: string;
    name: string;
    path: string | RegExp;
    versions: string[];
}

export interface Route {
    name: string;
    method: string;
    path: RoutePathRegex;
    spec: RouteSpec;
    types: string[];
    versions: string[];
}

export interface RouteOptions {
    name?: string;

    path?: string | RegExp;

    url?: string | RegExp;

    urlParamPattern?: RegExp;

    contentType?: string | string[];

    version?: string;

    versions?: string[];
}

export interface MountOptions {
    name: string;

    method: string;

    path?: string | RegExp;

    url?: string | RegExp;

    urlParamPattern?: RegExp;

    contentType?: string | string[];

    version?: string;

    versions?: string[];
}

export type FindRouteCallback = (err: Error, route?: Route, params?: any) => void;

export type RequestHandler = (req: Request, res: Response, next: Next) => any;
export type RequestHandlerType = RequestHandler | RequestHandler[];

export function bunyan(options?: BunyanOptions): RequestHandler;

export function createServer(options?: ServerOptions): Server;

export const formatters: {
    [name: string]: RequestHandler
};

export namespace plugins {
    namespace pre {
        /**
         * Provide req.set(key, val) and req.get(key) methods for setting and retrieving context to a specific request.
         */
        function context(): RequestHandler;

        /**
         *
         */
        function dedupeSlashes(): RequestHandler;

        /**
         * This pre handler fixes issues with node hanging when an asyncHandler is used prior to bodyParser.
         */
        function pause(): RequestHandler;

        /**
         * Cleans up duplicate or trailing / on the URL
         */
        function sanitizePath(): RequestHandler;

        /**
         * Automatically reuse incoming request header as the request id.
         */
        function reqIdHeaders(options: { headers: string[] }): RequestHandler;

        /**
         * Checks req.urls query params with strict key/val format and rejects non-strict requests with status code 400.
         */
        function strictQueryParams(options?: { message: string }): RequestHandler;

        /**
         * Regexp to capture curl user-agents
         */
        function userAgentConnection(options?: { userAgentRegExp: any }): RequestHandler;
    }

    // *************** This module includes the following header parser plugins:

    /**
     * Check the client's Accept header can be handled by this server.
     */
    function acceptParser(accepts: string[]): RequestHandler;

    interface AuditLoggerOptions {
        /**
         * Bunyan logger
         */
        log: Logger;

        /**
         * The event from the server which initiates the
         * log, one of 'pre', 'routed', or 'after'
         */
        event: 'pre' | 'routed' | 'after';
        /**
         * Restify server. If passed in, causes server to emit 'auditlog' event after audit logs are flushed
         */
        server?: Server;

        /**
         * Ringbuffer which is written to if passed in
         */
        logBuffer?: any;

        /**
         * When true, prints audit logs. default true.
         */
        printLog?: boolean;

        /**
         *
         */
        body?: boolean;
    }

    /**
     * An audit logger for recording all handled requests
     */
    function auditLogger(options: AuditLoggerOptions): (...args: any[]) => void;

    /**
     * Authorization header
     */
    function authorizationParser(options?: any): RequestHandler;

    /**
     * Conditional headers (If-*)
     */
    function conditionalRequest(): RequestHandler[];

    /**
     * Handles disappeared CORS headers
     */
    function fullResponse(): RequestHandler;

    // ************ This module includes the following data parsing plugins:

    interface BodyParserOptions {
        /**
         * The maximum size in bytes allowed in the HTTP body. Useful for limiting clients from hogging server memory.
         */
        maxBodySize?: number;

        /**
         * If req.params should be filled with parsed parameters from HTTP body.
         */
        mapParams?: boolean;

        /**
         * If req.params should be filled with the contents of files sent through a multipart request.
         * Formidable is used internally for parsing, and a file is denoted as a multipart part with the filename option set in its Content-Disposition.
         * This will only be performed if mapParams is true.
         */
        mapFiles?: boolean;

        /**
         * If an entry in req.params should be overwritten by the value in the body if the names are the same.
         * For instance, if you have the route /:someval, and someone posts an x-www-form-urlencoded Content-Type with the body someval=happy to /sad,
         * the value will be happy if overrideParams is true, sad otherwise.
         */
        overrideParams?: boolean;

        /**
         * A callback to handle any multipart part which is not a file.
         * If this is omitted, the default handler is invoked which may or may not map the parts into req.params, depending on the mapParams-option.
         */
        multipartHandler?(): void;

        /**
         * A callback to handle any multipart file.
         * It will be a file if the part have a Content-Disposition with the filename parameter set.
         * This typically happens when a browser sends a form and there is a parameter similar to <input type="file" />.
         * If this is not provided, the default behaviour is to map the contents into req.params.
         */
        multipartFileHandler?(): void;

        /**
         * If you want the uploaded files to include the extensions of the original files (multipart uploads only). Does nothing if multipartFileHandler is defined.
         */
        keepExtensions?: boolean;

        /**
         * Where uploaded files are intermediately stored during transfer before the contents is mapped into req.params. Does nothing if multipartFileHandler is defined.
         */
        uploadDir?: string;

        /**
         * If you want to support html5 multiple attribute in upload fields.
         */
        multiples?: boolean;

        /**
         * If you want checksums calculated for incoming files, set this to either sha1 or md5.
         */
        hash?: string;

        /**
         * Set to true if you want to end the request with a UnsupportedMediaTypeError when none of the supported content types was given.
         */
        rejectUnknown?: boolean;

        /**
         *
         */
        reviver?: any;

        /**
         *
         */
        maxFieldsSize?: number;
    }

    /**
     * Parses POST bodies to req.body. automatically uses one of the following parsers based on content type.
     */
    function bodyParser(options?: BodyParserOptions): RequestHandler[];

    /**
     * Reads the body of the request.
     */
    function bodyReader(options?: { maxBodySize?: number }): RequestHandler;

    interface UrlEncodedBodyParser {
        mapParams?: boolean;
        overrideParams?: boolean;
    }

    /**
     * Parse the HTTP request body IFF the contentType is application/x-www-form-urlencoded.
     *
     * If req.params already contains a given key, that key is skipped and an
     * error is logged.
     */
    function urlEncodedBodyParser(options?: UrlEncodedBodyParser): RequestHandler[];

    /**
     * Parses JSON POST bodies
     */
    function jsonBodyParser(options?: { mapParams?: boolean, reviver?: any, overrideParams?: boolean }): RequestHandler[];

    /**
     * Parses JSONP callback
     */
    function jsonp(): RequestHandler;

    interface MultipartBodyParser {
        overrideParams?: boolean;
        multiples?: boolean;
        keepExtensions?: boolean;
        uploadDir?: string;
        maxFieldsSize?: number;
        hash?: string;
        multipartFileHandler?: any;
        multipartHandler?: any;
        mapParams?: boolean;
        mapFiles?: boolean;
    }

    /**
     * Parses JSONP callback
     */
    function multipartBodyParser(options?: MultipartBodyParser): RequestHandler;

    interface QueryParserOptions {
        /**
         * Default `false`. Copies parsed query parameters into `req.params`.
         */
        mapParams?: boolean;

        /**
         * Default `false`. Only applies when if mapParams true. When true, will stomp on req.params field when existing value is found.
         */
        overrideParams?: boolean;

        /**
         *  Default false. Transform `?foo.bar=baz` to a nested object: `{foo: {bar: 'baz'}}`.
         */
        allowDots?: boolean;

        /**
         * Default 20. Only transform `?a[$index]=b` to an array if `$index` is less than `arrayLimit`.
         */
        arrayLimit?: number;

        /**
         * Default 5. The depth limit for parsing nested objects, e.g. `?a[b][c][d][e][f][g][h][i]=j`.
         */
        depth?: number;

        /**
         * Default 1000. Maximum number of query params parsed. Additional params are silently dropped.
         */
        parameterLimit?: number;

        /**
         * Default true. Whether to parse `?a[]=b&a[1]=c` to an array, e.g. `{a: ['b', 'c']}`.
         */
        parseArrays?: boolean;

        /**
         * Default false. Whether `req.query` is a "plain" object -- does not inherit from `Object`.
         * This can be used to allow query params whose names collide with Object methods, e.g. `?hasOwnProperty=blah`.
         */
        plainObjects?: boolean;

        /**
         * Default false. If true, `?a&b=` results in `{a: null, b: ''}`. Otherwise, `{a: '', b: ''}`.
         */
        strictNullHandling?: boolean;
    }

    /**
     * Parses URL query paramters into `req.query`. Many options correspond directly to option defined for the underlying [qs.parse](https://github.com/ljharb/qs)
     */
    function queryParser(options?: QueryParserOptions): RequestHandler;

    interface RequestLogger {
        properties?: any;
        serializers?: any;
        headers?: any;
        log?: any;
    }

    /**
     * Adds timers for each handler in your request chain
     *
     * `options.properties` properties to pass to bunyan's `log.child()` method
     */
    function requestLogger(options?: RequestLogger): RequestHandler;

    // ******************** The module includes the following response plugins:

    /**
     * expires requests based on current time + delta
     * @param delta - age in seconds
     */
    function dateParser(delta?: number): RequestHandler;

    /**
     * gzips the response if client send `accept-encoding: gzip`
     * @param options options to pass to gzlib
     */
    function gzipResponse(options?: any): RequestHandler;

    interface ServeStatic {
        appendRequestPath?: boolean | undefined;
        directory?: string;
        maxAge?: number;
        match?: any;
        charSet?: string;
        file?: string;
        etag?: string;
        default?: any;
        gzip?: boolean;
    }

    /**
     * Used to serve static files
     */
    function serveStatic(options?: ServeStatic): RequestHandler;

    interface ThrottleOptions {
        burst?: number;
        rate?: number;
        ip?: boolean;
        username?: boolean;
        xff?: boolean;
        tokensTable?: any;
        maxKeys?: number;
        overrides?: any; // any
    }

    interface MetricsCallback {
        /**
         *  An error if the request had an error
         */
        err: Error;

        /**
         *
         */
        metrics: MetricsCallbackOptions;

        req: Request;
        res: Response;

        /**
         * The route obj that serviced the request
         */
        route: Route;
    }

    type TMetricsCallback = 'close' | 'aborted' | undefined;

    interface MetricsCallbackOptions {
        /**
         * Status code of the response. Can be undefined in the case of an `uncaughtException`.
         * Otherwise, in most normal scenarios, even calling `res.send()` or `res.end()` should result in a 200 by default.
         */
        statusCode: number;

        /**
         * HTTP request verb
         */
        method: string;

        /**
         * Request latency
         */
        latency: number;

        /**
         * req.path() value
         */
        path: string;

        /**
         * If this value is set, err will be a corresponding `RequestCloseError` or `RequestAbortedError`.
         *
         * If connectionState is either 'close' or 'aborted', then the statusCode is not applicable since the connection was severed before a response was written.
         */
        connectionState: TMetricsCallback;
    }

    /**
     * Listens to the server's after event and emits information about that request (5.x compatible only).
     *
     * ```
     * server.on('after', plugins.metrics( (err, metrics) =>
     * {
     *    // metrics is an object containing information about the request
     * }));
     * ```
     */
    function metrics(opts: { server: Server }, callback: (options: MetricsCallback) => any): (...args: any[]) => void;

    /**
     * Parse the client's request for an OAUTH2 access tokensTable
     *
     * Subsequent handlers will see `req.oauth2`, which looks like:
     * ```
     * {
     *    oauth2: {accessToken: 'mF_9.B5f-4.1JqM&p=q'}
     * }
     * ```
     */
    function oauth2TokenParser(): RequestHandler;

    /**
     *  throttles responses
     */
    function throttle(options?: ThrottleOptions): RequestHandler;

    interface RequestExpiryOptions {
        /**
         * Header name of the absolute time for request expiration
         */
        absoluteHeader?: string;

        /**
         * Header name for the start time of the request
         */
        startHeader?: string;

        /**
         * The header name for the time in milliseconds that should ellapse before the request is considered expired.
         */
        timeoutHeader?: string;
    }

    /**
     * A request expiry will use headers to tell if the incoming request has expired or not.
     *
     * There are two options for this plugin:
     *   1. Absolute Time
     *     * Time in Milliseconds since the Epoch when this request should be considered expired
     *   2. Timeout
     *     * The request start time is supplied
     *     * A timeout, in milliseconds, is given
     *     * The timeout is added to the request start time to arrive at the absolute time
     *       in which the request is considered expires
     */
    function requestExpiry(options?: RequestExpiryOptions): RequestHandler;
}

export namespace pre {
    /**
     * Provide req.set(key, val) and req.get(key) methods for setting and retrieving context to a specific request.
     */
    function context(): RequestHandler;

    /**
     *
     */
    function dedupeSlashes(): RequestHandler;

    /**
     * This pre handler fixes issues with node hanging when an asyncHandler is used prior to bodyParser.
     */
    function pause(): RequestHandler;

    /**
     * Cleans up duplicate or trailing / on the URL
     */
    function sanitizePath(): RequestHandler;

    /**
     * Automatically reuse incoming request header as the request id.
     */
    function reqIdHeaders(options: { headers: string[] }): RequestHandler;

    /**
     * Checks req.urls query params with strict key/val format and rejects non-strict requests with status code 400.
     */
    function strictQueryParams(options?: { message: string }): RequestHandler;

    /**
     * Regexp to capture curl user-agents
     */
    function userAgentConnection(options?: { userAgentRegExp: any }): RequestHandler;
}
