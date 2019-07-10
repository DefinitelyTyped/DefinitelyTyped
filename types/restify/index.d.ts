// Type definitions for restify 7.2
// Project: https://github.com/restify/node-restify, http://restify.com
// Definitions by: Bret Little <https://github.com/blittle>
//                 Steve Hipwell <https://github.com/stevehipwell>
//                 Leandro Almeida <https://github.com/leanazulyoro>
//                 Mitchell Bundy <https://github.com/mgebundy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
import http = require('http');
import https = require('https');
import Logger = require('bunyan');
import url = require('url');
import spdy = require('spdy');
import stream = require('stream');
import zlib = require('zlib');

export interface ServerOptions {
    ca?: string | Buffer | ReadonlyArray<string | Buffer>;

    certificate?: string | Buffer | ReadonlyArray<string | Buffer>;

    cert?: string | Buffer | ReadonlyArray<string | Buffer>;

    key?: string | Buffer | ReadonlyArray<string | Buffer>;

    passphrase?: string;

    requestCert?: boolean;

    ciphers?: string;

    formatters?: Formatters;

    log?: Logger;

    name?: string;

    spdy?: spdy.ServerOptions;

    version?: string;

    versions?: string[];

    handleUpgrades?: boolean;

    httpsServerOptions?: https.ServerOptions;

    handleUncaughtExceptions?: boolean;

    router?: Router;

    socketio?: boolean;

    noWriteContinue?: boolean;

    rejectUnauthorized?: boolean;

    secureOptions?: number;

    http2?: any;

    dtrace?: boolean;

    onceNext?: boolean;

    strictNext?: boolean;

    ignoreTrailingSlash?: boolean;
}

export interface AddressInterface {
    port: number;

    family: string;

    address: string;
}

export interface Server extends http.Server {
    /**
     * Returns the server address. Wraps node's address().
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
     * @throws   {TypeError}
     * @param     callback optionally get notified when listening.
     */
    listen(...args: any[]): any;

    /**
     * Shuts down this server, and invokes callback (optionally) when done.
     * Wraps node's close().
     * @param     callback optional callback to invoke when done.
     */
    close(callback?: () => any): any;

    /**
     * Returns the number of currently inflight requests.
     */
    inflightRequests(): number;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    del(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    get(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    head(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    opts(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    post(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
     */
    put(opts: string | RegExp | RouteOptions, ...handlers: RequestHandlerType[]): Route | boolean;

    /**
     * Mounts a chain on the given path against this HTTP verb
     *
     * @param   opts if string, the URL to handle.
     *                                 if options, the URL to handle, at minimum.
     * @returns                the newly created route.
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
     * @param      name The name of the URL param to respond to
     * @param    fn   The middleware function to execute
     * @returns         returns self
     */
    param(name: string, fn: RequestHandler): Server;

    /**
     * Removes a route from the server.
     * You pass in the route 'blob' you got from a mount call.
     * @throws   {TypeError} on bad input.
     * @param       route the route name.
     * @returns          true if route was removed, false if not.
     */
    rm(route: string): boolean;

    /**
     * Installs a list of handlers to run _before_ the "normal" handlers of all
     * routes.
     *
     * You can pass in any combination of functions or array of functions.
     * @returns returns self
     */
    use(...handlers: RequestHandlerType[]): Server;

    /**
     * Gives you hooks to run _before_ any routes are located.  This gives you
     * a chance to intercept the request and change headers, etc., that routing
     * depends on.  Note that req.params will _not_ be set yet.
     * @returns returns self
     */
    pre(...pre: RequestHandlerType[]): Server;

    /**
     * toString() the server for easy reading/output.
     */
    toString(): string;

    /**
     * Return debug information about the server.
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
    server: http.Server | https.Server | spdy.Server;

    /** Router instance */
    router: Router;

    /** Handle uncaught exceptions */
    handleUncaughtExceptions: boolean;

    /** enable DTrace support */
    dtrace: boolean;

    /** Custom response formatters */
    formatters: Formatters;

    /** Prevents calling next multiple times */
    onceNext: boolean;

    /** Throws error when next() is called more than once, enabled onceNext option */
    strictNext: boolean;

    /** Pre handlers */
    preChain: Chain;

    useChain: Chain;

    spdy?: boolean;

    http2?: boolean;

    ca: ServerOptions['ca'];

    certificate: ServerOptions['certificate'];

    key: ServerOptions['key'];

    passphrase: ServerOptions['passphrase'] | null;

    secure?: boolean;
}

export interface ChainOptions {
    onceNext?: boolean;

    strictNext?: boolean;
}

export interface Chain {
    /** Get handlers of a chain instance */
    getHandlers(): RequestHandler[];

    /** Utilize the given middleware `handler` */
    add(handler: RequestHandler): void;

    /** Returns the number of handlers */
    count(): number;

    /** Handle server requests, punting them down the middleware stack. */
    run(req: Request, res: Response, done: () => any): void;

    /** Prevents calling next multiple times */
    onceNext: boolean;

    /** Throws error when next() is called more than once, enables onceNext option */
    strictNext: boolean;
}

export interface RouterRegistryRadix {
    /**
     * Adds a route.
     */
    add(route: Route): boolean;

    /**
     * Removes a route.
     */
    remove(name: string): Route | undefined;

    /**
     * Registry for route.
     */
    lookup(method: string, pathname: string): Chain | undefined;

    /**
     * Get registry.
     */
    get(): Route[];

    /**
     * toString() serialization.
     */
    toString(): string;
}

export interface RouterOptions {
    log?: Logger;

    onceNext?: boolean;

    strictNext?: boolean;

    ignoreTrailingSlash?: boolean;

    registry?: RouterRegistryRadix;
}

export class Router {
    constructor(options: RouterOptions);

    /**
     * Lookup for route
     */
    lookup(req: Request, res: Response): Chain | undefined;

    /**
     * Lookup by name
     */
    lookupByName(name: string, req: Request, res: Response): Chain | undefined;

    /**
     * adds a route.
     * @param    options an options object
     * @returns  returns the route name if creation is successful.
     */
    mount(options: RouteOptions, ...handlers: RequestHandlerType[]): string;

    /**
     * unmounts a route.
     * @param    name the route name
     * @returns       the name of the deleted route.
     */
    unmount(name: string): string;

    /**
     * Return mounted routes.
     */
    getRoutes(): Route[];

    /**
     * Default route, when no route found
     */
    defaultRoute(req: Request, res: Response, next: Next): void;

    /**
     * takes an object of route params and query params, and 'renders' a URL.
     * @param    routeName the route name
     * @param    params    an object of route params
     * @param    query     an object of query params
     */
    render(routeName: string, params: object, query?: object): string;

    /**
     * toString() serialization.
     */
    toString(): string;

    /**
     * Return information about the routes registered in the router.
     * @returns The routes in the router.
     */
    getDebugInfo(): any;

    name: string;

    log?: Logger;

    onceNext: boolean;

    strictNext: boolean;
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
     * Builds an absolute URI for the request.
     */
    absoluteUri(path: string): string;

    /**
     * checks if the accept header is present and has the value requested.
     * e.g., req.accepts('html');
     * @param    types an array of accept type headers
     */
    accepts(types: string | string[]): boolean;

    /**
     * checks if the request accepts the encoding types.
     * @param    types an array of accept type headers
     */
    acceptsEncoding(types: string | string[]): boolean;

    /**
     * gets the content-length header off the request.
     */
    getContentLength(): number;

    /**
     * pass through to getContentLength.
     */
    contentLength(): number;

    /**
     * gets the content-type header.
     */
    getContentType(): string;

    /**
     * pass through to getContentType.
     */
    contentType(): string;

    /**
     * retrieves the complete URI requested by the client.
     */
    getHref(): string;

    /**
     * pass through to getHref.
     */
    href(): string;

    /**
     * retrieves the request uuid. was created when the request was setup.
     */
    getId(): string;

    /**
     * pass through to getId.
     */
    id(): string;

    /**
     * retrieves the cleaned up url path.
     * e.g., /foo?a=1  =>  /foo
     */
    getPath(): string;

    /**
     * pass through to getPath.
     */
    path(): string;

    /**
     * returns the raw query string
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
     */
    time(): number;

    /**
     * returns a parsed URL object.
     */
    getUrl(): url.Url;

    /**
     * returns the accept-version header.
     */
    getVersion(): string;

    /**
     * pass through to getVersion.
     */
    version(): string;

    /**
     * returns the version of the route that matched.
     */
    matchedVersion(): string;

    /**
     * Get the case-insensitive request header key,
     * and optionally provide a default value (express-compliant).
     * Returns any header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @param key - the key of the header
     * @param defaultValue - default value if header isn't found on the req
     */
    header(key: string, defaultValue?: string): string;

    /**
     * returns any trailer header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @param    name  the name of the header
     * @param    defaultValue default value if header isn't found on the req
     */
    trailer(name: string, defaultValue?: string): string;

    /**
     * Check if the incoming request contains the Content-Type header field, and
     * if it contains the given mime type.
     * @param    type  a content-type header value
     */
    is(type: string): boolean;

    /**
     * Check if the incoming request is chunked.
     */
    isChunked(): boolean;

    /**
     * Check if the incoming request is kept alive.
     */
    isKeepAlive(): boolean;

    /**
     * Check if the incoming request is encrypted.
     */
    isSecure(): boolean;

    /**
     * Check if the incoming request has been upgraded.
     */
    isUpgradeRequest(): boolean;

    /**
     * Check if the incoming request is an upload verb.
     */
    isUpload(): boolean;

    /**
     * toString serialization
     */
    toString(): string;

    /**
     * retrieves the user-agent header.
     */
    userAgent(): string;

    /**
     * Start the timer for a request handler function. You must explicitly invoke
     * endHandlerTimer() after invoking this function. Otherwise timing information
     * will be inaccurate.
     * @param       handlerName The name of the handler.
     */
    startHandlerTimer(handlerName: string): void;

    /**
     * Stop the timer for a request handler function.
     * @param       handlerName The name of the handler.
     */
    endHandlerTimer(handlerName: string): void;

    /**
     * returns the connection state of the request. current valid values are
     * 'close' and 'aborted'.
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
     * @param    type    value of the header
     * @param    [options] an options object
     * @returns          the value set to the header
     */
    cache(type: string, options?: CacheOptions): string;

    /**
     * sets the cache-control header. `type` defaults to _public_,
     * and options currently only takes maxAge.
     * @param    [options] an options object
     * @returns          the value set to the header
     */
    cache(options?: CacheOptions): string;

    /**
     * turns off all cache related headers.
     * @returns  self, the response object
     */
    noCache(): Response;

    /**
     * Appends the provided character set to the response's Content-Type.
     * e.g., res.charSet('utf-8');
     * @param    type char-set value
     * @returns  self, the response object
     */
    charSet(type: string): Response;

    /**
     * retrieves a header off the response.
     * @param    name the header name
     */
    get(name: string): string;

    /**
     * retrieves all headers off the response.
     */
    getHeaders(): any;

    /**
     * pass through to getHeaders.
     */
    headers(): any;

    /**
     * sets headers on the response.
     * @param    key  the name of the header
     * @param    value the value of the header
     */
    header(key: string, value?: any): any;

    /**
     * short hand method for:
     *     res.contentType = 'json';
     *     res.send({hello: 'world'});
     * @param    code    http status code
     * @param    body    value to json.stringify
     * @param    [headers] headers to set on the response
     */
    json(code: number, body: any, headers?: { [header: string]: string }): any;

    /**
     * short hand method for:
     *     res.contentType = 'json';
     *     res.send({hello: 'world'});
     * @param    body    value to json.stringify
     * @param    [headers] headers to set on the response
     */
    json(body: any, headers?: { [header: string]: string }): any;

    /**
     * sets the link heaader.
     * @param    key   the link key
     * @param    value the link value
     * @returns      the header value set to res
     */
    link(key: string, value: string): string;

    /**
     * sends the response object. pass through to internal __send that uses a
     * formatter based on the content-type header.
     * @param    [code] http status code
     * @param    [body] the content to send
     * @param    [headers]  any add'l headers to set
     * @returns  the response object
     */
    send(code?: number, body?: any, headers?: { [header: string]: string }): any;

    /**
     * sends the response object. pass through to internal __send that uses a
     * formatter based on the content-type header.
     * @param    [body] the content to send
     * @param    [headers]  any add'l headers to set
     * @returns  the response object
     */
    send(body?: any, headers?: { [header: string]: string }): any;

    /**
     * sends the response object. pass through to internal __send that skips
     * formatters entirely and sends the content as is.
     * @param    [code] http status code
     * @param    [body] the content to send
     * @param    [headers]  any add'l headers to set
     * @returns  the response object
     */
    sendRaw(code?: number, body?: any, headers?: { [header: string]: string }): any;

    /**
     * sends the response object. pass through to internal __send that skips
     * formatters entirely and sends the content as is.
     * @param    [body] the content to send
     * @param    [headers]  any add'l headers to set
     * @returns  the response object
     */
    sendRaw(body?: any, headers?: { [header: string]: string }): any;

    /**
     * sets a header on the response.
     * @param    name name of the header
     * @param    val  value of the header
     * @returns       self, the response object
     */
    set(name: string, val: string): Response;

    /**
     * sets a header on the response.
     * @param    val  object of headers
     * @returns       self, the response object
     */
    set(headers?: { [header: string]: string }): Response;

    /**
     * sets the http status code on the response.
     * @param    code http status code
     * @returns      the status code passed in
     */
    status(code: number): number;

    /**
     * toString() serialization.
     */
    toString(): string;

    /**
     * redirect is sugar method for redirecting.
     * res.redirect(301, 'www.foo.com', next);
     * `next` is mandatory, to complete the response and trigger audit logger.
     * @param    code the status code
     * @param    url to redirect to
     * @param    next - mandatory, to complete the response and trigger audit logger
     * @emits    redirect
     */
    redirect(code: number, url: string, next: Next): void;

    /**
     * redirect is sugar method for redirecting.
     * res.redirect({...}, next);
     * `next` is mandatory, to complete the response and trigger audit logger.
     * @param    url to redirect to or options object to configure a redirect or
     * @param    next - mandatory, to complete the response and trigger audit logger
     * @emits    redirect
     */
    redirect(opts: string | RedirectOptions, next: Next): void;

    /** HTTP status code. */
    code: number;

    /** short hand for the header content-length. */
    contentLength: number;

    /** short hand for the header content-type. */
    contentType: string;

    /** A unique request id (x-request-id). */
    id: string;
}

export interface RedirectOptions {
    /**
     * whether to redirect to http or https
     */
    secure?: boolean;

    /**
     * redirect location's hostname
     */
    hostname?: string;

    /**
     * redirect location's pathname
     */
    pathname?: string;

    /**
     * redirect location's port number
     */
    port?: string;

    /**
     * redirect location's query string parameters
     */
    query?: string|object;

    /**
     * if true, `options.query`
     * stomps over any existing query
     * parameters on current URL.
     * by default, will merge the two.
     */
    overrideQuery?: boolean;

    /**
     * if true, sets 301. defaults to 302.
     */
    permanent?: boolean;
}

export interface Next {
    (err?: any): void;

    ifError(err?: any): void;
}

export interface RouteSpec {
    method: string;
    name?: string;
    path: string | RegExp;
    versions?: string[];
}

export interface Route {
    name: string;
    method: string;
    path: string | RegExp;
    spec: RouteSpec;
    chain: Chain;
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

export interface ServerUpgradeResponse {
    /**
     * Set the status code of the response.
     * @param code - the http status code
     */
    status(code: number): number;

    /**
     * Sends the response.
     * @param code - the http status code
     * @param body - the response to send out
     */
    send(code: number, body: any): any;

    /**
     * Sends the response.
     * @param body - the response to send out
     */
    send(body: any): boolean;

    /**
     * Ends the response
     */
    end(): boolean;

    /**
     * Write to the response.
     */
    write(): boolean;

    /**
     * Write to the head of the response.
     * @param statusCode - the http status code
     * @param reason -  a message
     */
    writeHead(statusCode: number, reason?: string): void;

    /**
     * Attempt to upgrade.
     */
    claimUpgrade(): any;
}

export namespace bunyan {
    interface RequestCaptureOptions {
        /** The stream to which to write when dumping captured records. */
        stream?: Logger.Stream;

        /** The streams to which to write when dumping captured records. */
        streams?: ReadonlyArray<Logger.Stream>;

        /**
         * The level at which to trigger dumping captured records. Defaults to
         * bunyan.WARN.
         */
        level?: Logger.LogLevel;

        /** Number of records to capture. Default 100. */
        maxRecords?: number;

        /**
         * Number of simultaneous request id capturing buckets to maintain.
         * Default 1000.
         */
        maxRequestIds?: number;

        /**
         * If true, then dump captured records on the *default* request id when
         * dumping. I.e. dump records logged without "req_id" field. Default
         * false.
         */
        dumpDefault?: boolean;
    }

    /**
     * A Bunyan stream to capture records in a ring buffer and only pass through
     * on a higher-level record. E.g. buffer up all records but only dump when
     * getting a WARN or above.
     */
    class RequestCaptureStream extends stream.Stream {
        constructor(opts: RequestCaptureOptions);

        /** write to the stream */
        write(record: any): void;
    }

    const serializers: Logger.Serializers & {
        err: Logger.Serializer,
        req: Logger.Serializer,
        res: Logger.Serializer,
        client_req: Logger.Serializer,
        client_res: Logger.Serializer
    };

    /** create a bunyan logger */
    function createLogger(name: string): Logger;
}

export function createServer(options?: ServerOptions): Server;

export type Formatter = (req: Request, res: Response, body: any) => string | Buffer | null;

export interface Formatters {
    [contentType: string]: Formatter;
}

export const formatters: Formatters;

export namespace plugins {
    namespace pre {
        /**
         * Provide req.set(key, val) and req.get(key) methods for setting and retrieving context to a specific request.
         */
        function context(): RequestHandler;

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

    type AuditLoggerContext = (req: Request, res: Response, route: any, error: any) => any;

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
         * The optional context function of signature
         * f(req, res, route, err).  Invoked each time an audit log is generated. This
         * function can return an object that customizes the format of anything off the
         * req, res, route, and err objects. The output of this function will be
         * available on the `context` key in the audit object.
         */
        context?: AuditLoggerContext;

        /**
         * Ringbuffer which is written to if passed in
         */
        logBuffer?: any;

        /**
         * When true, prints audit logs. default true.
         */
        printLog?: boolean;

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

    interface HandlerCandidate {
        handler: RequestHandler | RequestHandler[];
        version?: string | string[];
        contentType?: string | string[];
    }

    /**
     * Runs first handler that matches to the condition
     */
    function conditionalHandler(candidates: HandlerCandidate | HandlerCandidate[]): RequestHandler;

    /**
     * Conditional headers (If-*)
     */
    function conditionalRequest(): RequestHandler[];

    interface CpuUsageThrottleOptions {
        limit?: number;
        max?: number;
        interval?: number;
        halfLife?: number;
    }

    /**
     * Cpu Throttle middleware
     */
    function cpuUsageThrottle(opts?: CpuUsageThrottleOptions): RequestHandler;

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

        requestBodyOnGet?: boolean;

        reviver?: any;

        maxFieldsSize?: number;

        maxFileSize?: number;
    }

    /**
     * Parses POST bodies to req.body. automatically uses one of the following parsers based on content type.
     */
    function bodyParser(options?: BodyParserOptions): RequestHandler[];

    /**
     * Reads the body of the request.
     */
    function bodyReader(options?: { maxBodySize?: number }): RequestHandler;

    interface UrlEncodedBodyParserOptions {
        mapParams?: boolean;
        overrideParams?: boolean;
        bodyReader?: boolean;
    }

    /**
     * Parse the HTTP request body IFF the contentType is application/x-www-form-urlencoded.
     *
     * If req.params already contains a given key, that key is skipped and an
     * error is logged.
     */
    function urlEncodedBodyParser(options?: UrlEncodedBodyParserOptions): RequestHandler[];

    interface JsonBodyParserOptions {
        mapParams?: boolean;
        overrideParams?: boolean;
        reviver?(key: any, value: any): any;
        bodyReader?: boolean;
    }

    /**
     * Parses JSON POST bodies
     */
    function jsonBodyParser(options?: JsonBodyParserOptions): RequestHandler[];

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
        maxFileSize?: number;
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
     * Parses URL query parameters into `req.query`. Many options correspond directly to option defined for the underlying [qs.parse](https://github.com/ljharb/qs)
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
    function gzipResponse(options?: zlib.ZlibOptions): RequestHandler;

    interface InflightRequestThrottleOptions {
        limit: number;
        server: Server;
        err: any;
    }

    function inflightRequestThrottle(opts: InflightRequestThrottleOptions): RequestHandler;

    interface ServeStatic {
        appendRequestPath?: boolean;
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
        setHeaders?: boolean;
        ip?: boolean;
        username?: boolean;
        xff?: boolean;
        tokensTable?: any;
        maxKeys?: number;
        overrides?: any; // any
    }

    /**
     *  throttles responses
     */
    function throttle(options?: ThrottleOptions): RequestHandler;

    type MetricsCallback = (
        /**
         *  An error if the request had an error
         */
        err: Error,

        /**
         *  Object that contains the various metrics that are returned
         */
        metrics: MetricsCallbackOptions,

        /**
         * The request obj
         */
        req: Request,

        /**
         * The response obj
         */
        res: Response,

        /**
         * The route obj that serviced the request
         */
        route: Route,
    ) => void;

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
         * latency includes both request is flushed and all handlers finished
         */
        totalLatency: number;

        /**
         * Request latency
         */
        latency: number;

        /**
         * pre handlers latency
         */
        preLatency: number | null;

        /**
         * use handlers latency
         */
        useLatency: number | null;

        /**
         * req.path() value
         */
        path: string;

        /**
         * Number of inflight requests pending in restify
         */
        inflightRequests: number;

        /**
         * Same as `inflightRequests`
         */
        unfinishedRequests: number;

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
     * server.on('after', plugins.metrics({ server }, (err, metrics, req, res, route) =>
     * {
     *    // metrics is an object containing information about the request
     * }));
     * ```
     */
    function metrics(opts: { server: Server }, callback: MetricsCallback): (...args: any[]) => void;

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
