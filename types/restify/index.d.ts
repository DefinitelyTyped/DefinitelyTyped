import fs = require('node:fs');
import http = require('node:http');
import https = require('node:https');
import http2 = require('node:http2');
import net = require('node:net');
import stream = require('node:stream');
import zlib = require('node:zlib');

// ---------------------------------------------------------------------------
// Logger
// ---------------------------------------------------------------------------

/** A log method. Accepts pino's and bunyan's calling conventions. */
export type LogFn = (...args: any[]) => void;

/**
 * Structural logger type. restify creates a pino logger by default; any
 * logger with these members (pino, bunyan, ...) can be passed in.
 */
export interface Logger {
    level: string;
    trace: LogFn;
    debug: LogFn;
    info: LogFn;
    warn: LogFn;
    error: LogFn;
    fatal: LogFn;
    /** Creates a child logger with additional bound fields. */
    child(bindings: { [key: string]: any }, options?: { [key: string]: any }): Logger;
    /**
     * Probed by `auditLogger` for a custom `err` serializer (a bunyan-ism;
     * typed `any` because pino exposes an unrelated member under this name).
     */
    serializers?: any;
}

/** Options for the re-exported pino factory (`restify.logger`). */
export interface LoggerOptions {
    name?: string | undefined;
    level?: string | undefined;
    serializers?: { [key: string]: (value: any) => any } | undefined;
    /** Any other pino option. */
    [option: string]: any;
}

/** A writable destination for `restify.logger`. */
export interface DestinationStream {
    write(msg: string): void;
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

/**
 * `next()` callback passed to callback-style handlers.
 *
 * - `next()` continues the chain.
 * - `next(false)` stops the chain without error.
 * - `next(err)` stops the chain; `err` is emitted as `<Name>` / `restifyError`
 *   events and sent to the client. Any truthy non-Error value is sent as an
 *   `InternalError(String(value))`.
 *
 * Typed as `unknown` so `catch (e) { next(e); }` works under
 * `useUnknownInCatchVariables`.
 *
 * NOTE: `next('routeName')` (named-route redirect) no longer re-routes; a
 * string is treated like any other non-Error value and produces a 500.
 */
export interface Next {
    (err?: unknown): void;
}

export interface Request extends http.IncomingMessage {
    // --- set up by the server -------------------------------------------
    /** Request logger (a child logger once `requestLogger` runs). */
    log: Logger;
    /**
     * Route params, plus query/body values when a parser's `mapParams` is on.
     * May be replaced by an array by `jsonBodyParser({ mapParams: true })`.
     */
    params: any;
    /** The matched route (undefined before routing / on 404). */
    route: Route;
    /** Per-handler timings. */
    timers: HandlerTimer[];
    serverName: string;
    dtrace: boolean;

    // --- set up by plugins ----------------------------------------------
    /**
     * Without `queryParser`/`jsonp`, this is the prototype method
     * `query(): string` (alias of `getQuery`). With either plugin it is
     * replaced by the parsed object.
     */
    query: any;
    /** Parsed body (bodyParser); raw string/Buffer after bodyReader alone. */
    body?: any;
    /** Unparsed body, saved by the body parsers. */
    rawBody?: any;
    /** multipartBodyParser. Arrays when the `multiples` option is set. */
    files?: { [name: string]: File | File[] | undefined } | undefined;
    /** authorizationParser. `'anonymous'` by default; `null` for usernameless Basic auth. */
    username?: string | null | undefined;
    /** authorizationParser. */
    authorization?: RequestAuthorization | undefined;
    /** oauth2TokenParser. */
    oauth2?: { accessToken: string | null } | undefined;
    /** requestExpiry. */
    isExpired?: (() => boolean) | undefined;
    /** pre.context(): store a request-scoped value. */
    set?: ((key: string, value: any) => void) | undefined;
    /** pre.context(): read a request-scoped value. */
    get?: ((key: string) => any) | undefined;
    /** pre.context(): all request-scoped values. */
    getAll?: (() => { [key: string]: any }) | undefined;

    // --- methods ----------------------------------------------------------
    /** Builds an absolute URI relative to the current request URL. */
    absoluteUri(path: string): string;
    /**
     * Negotiates against the `Accept` header (missing header means `* / *`).
     * Short names such as `'json'` are resolved via mime.
     * NOTE: documented as returning Boolean; returns the preferred matching
     * media type, or `undefined` when none match.
     */
    accepts(types: string | string[]): string | undefined;
    /**
     * Negotiates against the `Accept-Encoding` header.
     * NOTE: documented as returning Boolean; returns the preferred matching
     * encoding, or `undefined` when none match.
     */
    acceptsEncoding(types: string | string[]): string | undefined;
    /** The `Content-Length` header (0 for upgrade requests). */
    getContentLength(): number | undefined;
    /** Alias of `getContentLength`. */
    contentLength(): number | undefined;
    /** Lower-cased media type of `Content-Type`; `application/octet-stream` if absent. */
    getContentType(): string;
    /** Alias of `getContentType`. */
    contentType(): string;
    /** When request processing started. */
    date(): Date;
    /** Path plus query string (not the absolute URL). */
    getHref(): string;
    /** Alias of `getHref`. */
    href(): string;
    /** The request id, generating a UUID on first use. */
    getId(): string;
    /**
     * Returns the request id, or sets it when `reqId` is given.
     * Throws if an id was already set or generated.
     */
    id(reqId?: string): string;
    /** URL pathname, with dot segments normalized. */
    getPath(): string;
    /** Alias of `getPath`. */
    path(): string;
    /** Raw query string without the leading `?` (empty string if none). */
    getQuery(): string;
    /** When request processing started, in ms since epoch. */
    time(): number;
    /** The request URL as a WHATWG `URL` (cached). Throws on absolute request URLs. */
    getUrl(): URL;
    /** `Accept-Version` / `X-Api-Version` header, or `'*'`. */
    getVersion(): string;
    /** Alias of `getVersion`. */
    version(): string;
    /** Version matched by `conditionalHandler`, else `version()`. */
    matchedVersion(): string;
    /**
     * Case-insensitive header lookup with optional default. `referrer` is
     * mapped to `referer`.
     */
    header(key: string, defaultValue?: string): string | string[] | undefined;
    /** Case-insensitive trailer lookup with optional default. */
    trailer(name: string, value?: string): string | undefined;
    /**
     * Checks the `Content-Type` against a type (short names and `*` wildcards allowed).
     * NOTE: wildcard matches return `0 | 1` rather than a boolean.
     */
    is(type: string): boolean | number;
    /** `Transfer-Encoding: chunked`. */
    isChunked(): boolean;
    /** Whether the connection is kept alive. */
    isKeepAlive(): boolean;
    /** Whether the socket is encrypted. */
    isSecure(): boolean;
    /** Whether this request came through `handleUpgrades`. */
    isUpgradeRequest(): boolean;
    /** PATCH, POST or PUT. */
    isUpload(): boolean;
    toString(): string;
    /** The `User-Agent` header. */
    userAgent(): string | undefined;
    /** Starts a named timer (call `endHandlerTimer` with the same name). */
    startHandlerTimer(handlerName: string): void;
    /** Ends a named timer and records it in `req.timers`. */
    endHandlerTimer(handlerName: string): void;
    /** `'close'` once the client aborted, otherwise `undefined`. */
    connectionState(): 'close' | undefined;
    /** The matched route. */
    getRoute(): Route;

    on(event: 'restifyDone', listener: (route: Route | undefined, err: any) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

/**
 * Callback-style handler. Must declare exactly three parameters and must not
 * be an `async` function (enforced at runtime by `Chain#add`).
 */
export type CallbackHandler = (req: Request, res: Response, next: Next) => void;

/**
 * Promise-style handler. Must be a native `async` function declaring at most
 * two parameters (enforced at runtime by `Chain#add`). Rejecting with a
 * non-Error is wrapped in an `AsyncError`. A resolved value is discarded
 * (and logged at warn level).
 *
 * NOTE: TypeScript cannot distinguish a plain `(req, res) => Promise` arrow
 * from an `async` function; only real `async` functions are accepted.
 */
export type AsyncHandler = (req: Request, res: Response) => Promise<unknown>;

/**
 * Error-handling handler. Undocumented, but `Chain` invokes 4-arity handlers
 * when a preceding handler in the *same* chain called `next(err)`.
 */
export type ErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: Next
) => void;

/**
 * Any handler accepted by `pre()`, `use()` and the route methods. Written as a
 * single signature (rather than `CallbackHandler | AsyncHandler`) so that
 * `req`/`res`/`next` are contextually typed in inline handlers. An
 * `AsyncHandler` is assignable to it.
 *
 * `ErrorHandler`s are accepted at runtime too; pass them with a cast.
 */
export type RequestHandler = (
    req: Request,
    res: Response,
    next: Next
) => void | Promise<unknown>;

/** Handlers may be passed individually or as (arbitrarily nested) arrays. */
export type RequestHandlerType = RequestHandler | RequestHandlerType[];

/**
 * `server.first()` handler. Runs synchronously before restify touches the
 * request. Return `false` to stop all further processing. Any return value
 * other than `true | false | undefined | null` throws.
 */
export type FirstHandler = (
    req: http.IncomingMessage,
    res: http.ServerResponse
) => boolean | undefined | null | void;

/**
 * Listener for the server's `after` event; also the shape returned by
 * `plugins.auditLogger()` and `plugins.metrics()`.
 */
export type AfterEventListener = (
    req: Request,
    res: Response,
    route: Route | undefined,
    err: any
) => void;

/**
 * Response formatter: `(req, res, body) => formatted`. The returned value is
 * written to the socket, so it must be a string, Buffer, `null` or
 * `undefined`.
 */
export type Formatter = (
    req: Request,
    res: Response,
    body: any
) => string | Buffer | null | undefined;

/**
 * Formatters keyed by content type. Keys may carry a q-value
 * (`'application/foo; q=0.9'`) to control negotiation priority.
 */
export interface Formatters {
    [contentType: string]: Formatter;
}

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

/**
 * Route options accepted by `server.get()` & friends (or pass a path string).
 *
 * NOTE: the docs list `String|Regexp|Object`. A RegExp is accepted by the
 * method factory but rejected by the route registry (`assert.string(path)`),
 * so only strings are usable.
 */
export interface RouteOptions {
    /** Route name. Auto-generated from method + path when omitted. */
    name?: string | undefined;
    /** Any path accepted by find-my-way. */
    path?: string | undefined;
    /** Alias of `path`, used when `path` is not set. */
    url?: string | undefined;
    /**
     * @deprecated Route versioning was removed from the router; this key is
     * kept on `route.spec` but ignored. Use `plugins.conditionalHandler`.
     */
    version?: string | undefined;
    /**
     * @deprecated Route versioning was removed from the router; this key is
     * kept on `route.spec` but ignored. Use `plugins.conditionalHandler`.
     */
    versions?: string[] | undefined;
    /**
     * Any other properties are copied onto `route.spec` unchanged, so they
     * can carry per-route metadata for your own handlers
     * (`req.route.spec.<key>`). restify itself ignores them.
     *
     * Typed `unknown` rather than `any` so a RegExp is still rejected as a
     * route spec (any object type is assignable to `{ [k: string]: any }`).
     */
    [key: string]: unknown;
}

/** Options accepted by `Router#mount`. */
export interface MountOptions extends RouteOptions {
    method: string;
    path: string;
}

/** The (shallow-copied) options a route was mounted with (`route.spec`). */
export interface RouteSpec extends RouteOptions {
    method: string;
    path: string;
}

/** Route object stored in the router registry (`req.route`). */
export interface Route {
    name: string;
    method: string;
    path: string;
    spec: RouteSpec;
    chain: Chain;
}

// ---------------------------------------------------------------------------
// Chain
// ---------------------------------------------------------------------------

export interface ChainOptions {
    /** Prevents calling next multiple times. */
    onceNext?: boolean | undefined;
    /** Throws when next() is called more than once. Implies `onceNext`. */
    strictNext?: boolean | undefined;
}

/**
 * Middleware chain. Not exported from the package root (only reachable via
 * `server.preChain`, `server.useChain`, `route.chain`).
 */
export interface Chain {
    /** Prevents calling next multiple times. */
    onceNext: boolean;
    /** Throws when next() is called more than once. */
    strictNext: boolean;
    /** Get handlers of a chain instance. */
    getHandlers(): RequestHandler[];
    /** Append a handler. Asserts the async/arity rules described on `RequestHandler`. */
    add(handler: RequestHandler): void;
    /** Returns the number of handlers. */
    count(): number;
    /** Run the chain, invoking `done` when it finishes or the request closes. */
    run(
        req: Request,
        res: Response,
        done: (err: any, req: Request, res: Response) => void
    ): void;
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

/** The default route registry, backed by find-my-way. */
export interface RouterRegistryRadix {
    /** Adds a route. */
    add(route: Route): Route;
    /** Removes a route by name. */
    remove(name: string): Route | undefined;
    /** Finds the route matching a method and pathname. */
    lookup(
        method: string,
        pathname: string
    ):
        | {
            route: Route;
            params: { [key: string]: string };
            handler: (req: Request, res: Response, next: Next) => void;
        }
        | undefined;
    /** All routes, keyed by route name. */
    get(): { [routeName: string]: Route };
    /** find-my-way's pretty-printed route tree. */
    toString(): string;
}

/**
 * Options forwarded to find-my-way. Accepted by both `RouterOptions` and
 * `ServerOptions` (the default router receives the full server options).
 */
export interface FindMyWayOptions {
    /** Ignore a trailing slash on paths. */
    ignoreTrailingSlash?: boolean | undefined;
    /** Collapse duplicate slashes before matching. */
    ignoreDuplicateSlashes?: boolean | undefined;
    /**
     * Strip `;matrix=params` from a path segment before matching (the
     * find-my-way v7 behavior). Defaults to `false`.
     */
    useSemicolonDelimiter?: boolean | undefined;
    /** Defaults to `true`. */
    caseSensitive?: boolean | undefined;
    /** Maximum length of a path parameter. Defaults to 100. */
    maxParamLength?: number | undefined;
    /** Allow potentially catastrophic regular expressions in routes. */
    allowUnsafeRegex?: boolean | undefined;
}

export interface RouterOptions extends FindMyWayOptions {
    /** NOTE: documented as a Bunyan logger; it is a pino logger. */
    log: Logger;
    onceNext?: boolean | undefined;
    strictNext?: boolean | undefined;
    /** Custom route registry. Defaults to a `RouterRegistryRadix`. */
    registry?: RouterRegistryRadix | undefined;
}

export interface RouteDebugInfo {
    name: string;
    /** Lower-cased HTTP method. */
    method: string;
    path: string;
    handlers: RequestHandler[];
}

/**
 * Maps HTTP verbs and paths to handler chains.
 *
 * NOTE: `Router` is not exported from the package root, even though
 * `createServer({ router })` accepts one. Construct it via
 * `require('restify/lib/router')`.
 */
export interface Router extends NodeJS.EventEmitter {
    name: string;
    log: Logger;
    onceNext: boolean;
    strictNext: boolean;

    /** Finds the handler for a request, decorating `req.params`/`req.route`. */
    lookup(
        req: Request,
        res: Response
    ): ((req: Request, res: Response, next: Next) => void) | undefined;
    /** Finds a route's chain runner by name, decorating `req.route`. */
    lookupByName(
        name: string,
        req: Request,
        res: Response
    ): Chain['run'] | undefined;
    /**
     * Renders a URL for a named route. Returns `null` when the route does not
     * exist; throws when a path parameter is missing.
     */
    render(
        routeName: string,
        params: { [key: string]: any },
        query?: { [key: string]: any }
    ): string | null;
    /** Adds a route. NOTE: documented as returning the route name; returns the Route. */
    mount(opts: MountOptions, handlers: RequestHandler[]): Route;
    /** Removes a route by name. */
    unmount(name: string): Route | undefined;
    toString(): string;
    /** Route information, keyed by route name. */
    getDebugInfo(): { [routeName: string]: RouteDebugInfo };
    /** Mounted routes, keyed by route name. */
    getRoutes(): { [routeName: string]: Route };
    /** Responds 404/405 (or 200 for `OPTIONS *`) when no route matched. */
    defaultRoute(req: Request, res: Response, next: Next): void;

    on(event: 'mount', listener: (method: string, path: string) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

/**
 * Custom uncaught-exception wrapper (alternative to domains).
 * Must eventually call `next(req, res)`; should call `onError(err)` on error.
 */
export type UncaughtExceptionWrapper = (
    req: Request,
    res: Response,
    onError: (err: any) => void,
    next: (req: Request, res: Response) => void
) => void;

export interface ServerOptions extends FindMyWayOptions {
    /** Defaults to `'restify'`. An empty string suppresses the `Server` header. */
    name?: string | undefined;
    /** Defaults to `pino({ name })`. */
    log?: Logger | undefined;
    /** Defaults to `new Router(options)` (see {@link Router}). */
    router?: Router | undefined;
    /** Enable DTrace probes (requires the optional `dtrace-provider`). */
    dtrace?: boolean | undefined;

    // TLS (ignored when `http2` is given; `httpsServerOptions` is used only
    // when neither `certificate`/`cert` + `key` nor `http2` is given)
    /** PEM certificate. Creates an HTTPS server together with `key`. */
    certificate?: string | Buffer | ReadonlyArray<string | Buffer> | undefined;
    /** Undocumented alias of `certificate`. */
    cert?: string | Buffer | ReadonlyArray<string | Buffer> | undefined;
    /** PEM private key. */
    key?: string | Buffer | ReadonlyArray<string | Buffer> | undefined;
    /** Undocumented; passed to `https.createServer`. */
    ca?: string | Buffer | ReadonlyArray<string | Buffer> | undefined;
    /** Undocumented; passed to `https.createServer`. */
    passphrase?: string | undefined;
    /** Undocumented; passed to `https.createServer`. */
    rejectUnauthorized?: boolean | undefined;
    /** Undocumented; passed to `https.createServer`. */
    requestCert?: boolean | undefined;
    /** Undocumented; passed to `https.createServer`. */
    ciphers?: string | undefined;
    /** Undocumented; passed to `https.createServer`. */
    secureOptions?: number | undefined;
    /** Full `https.createServer` options. */
    httpsServerOptions?: https.ServerOptions | undefined;
    /** Options for `http2.createSecureServer`; enables HTTP/2. */
    http2?: http2.SecureServerOptions | undefined;

    /** Custom response formatters, merged over the built-in ones. */
    formatters?: Formatters | undefined;
    /**
     * Catch errors thrown in handlers (via domains, or a custom wrapper).
     * NOTE: `createServer` documents only `Boolean`; a function is also
     * accepted (see {@link UncaughtExceptionWrapper}).
     *
     * Passing `true` uses the deprecated `domain` module (restify marks this
     * deprecated in lib/deprecationWarnings.js; the warning itself never
     * fires because the flag is replaced before the check). Prefer a
     * function. Not tagged `@deprecated` because that would also flag the
     * function form.
     */
    handleUncaughtExceptions?: boolean | UncaughtExceptionWrapper | undefined;
    /** Route `Connection: Upgrade` requests through the handler chain. */
    handleUpgrades?: boolean | undefined;
    /** Prevents calling next multiple times. */
    onceNext?: boolean | undefined;
    /** Throws when next() is called more than once. Implies `onceNext`. */
    strictNext?: boolean | undefined;
    /** Don't call `res.writeContinue()` on `checkContinue`. */
    noWriteContinue?: boolean | undefined;
    /** Defaults to `true`. */
    strictFormatters?: boolean | undefined;
    /** Undocumented: skip handling for `/socket.io*` URLs. */
    socketio?: boolean | undefined;

    /**
     * @deprecated Documented as "filled in once listen() is called", but
     * ignored: `server.url` is a computed getter.
     */
    url?: string | undefined;
}

export interface ServerDebugInfo {
    routes: RouteDebugInfo[];
    server: {
        formatters: Formatters;
        address: string | undefined | null;
        port: number | undefined | null;
        inflightRequests: number;
        pre: string[];
        use: string[];
        after: string[];
    };
}

/** The node server wrapped by a restify `Server`. */
export type NodeServer = http.Server | https.Server | http2.Http2SecureServer;

/**
 * Mounts a chain on the given path for one HTTP verb.
 * NOTE: documented as returning a Route; returns the route *name*.
 */
export type ServerMethod = (
    opts: string | RouteOptions,
    ...handlers: RequestHandlerType[]
) => string;

/** Listener for error events (`restifyError`, `NotFound`, `InternalServer`, ...). */
export type ErrorEventListener = (
    req: Request,
    res: Response,
    err: any,
    callback: () => void
) => void;

/** Object emitted with the server's `audit` event. */
export interface AuditRecord {
    remoteAddress: string | undefined;
    remotePort: number | undefined;
    /** Keyed by `requestIdFieldName` (default `req_id`). */
    [requestIdField: string]: any;
    req: Request;
    res: Response;
    err: any;
    latency: number | null;
    /** NOTE: always `undefined` (reads non-existent `req.secure`). */
    secure: undefined;
    _audit: true;
    event: 'pre' | 'routed' | 'after';
    context?: any;
}

export interface Server extends NodeJS.EventEmitter {
    /** Name of the server. */
    name: string;
    /** Server logger. */
    log: Logger;
    /** Router instance. */
    router: Router;
    /** The wrapped node server. */
    server: NodeServer;
    /** Computed: `http(s)://<address>:<port>` (or `http://<socketPath>`). */
    readonly url: string;
    /** Proxied to the underlying node server. */
    maxHeadersCount: number;
    /** Content types with formatters, sorted by q-value. */
    acceptable: string[];
    /** Formatters keyed by bare content type. */
    formatters: Formatters;
    /** `true` for HTTPS servers created from `certificate` + `key`. */
    secure: boolean;
    http2?: boolean | undefined;
    ca?: ServerOptions['ca'];
    certificate?: ServerOptions['certificate'];
    key?: ServerOptions['key'];
    passphrase?: string | null | undefined;
    /** DTrace support enabled. */
    dtrace: boolean;
    socketio: boolean;
    /** Prevents calling next multiple times. */
    onceNext: boolean;
    /** Throws when next() is called more than once. */
    strictNext: boolean;
    strictFormatters: boolean;
    /** The active wrapper, or `false` when disabled. */
    handleUncaughtExceptions: false | UncaughtExceptionWrapper;
    /** `first()` handlers. */
    firstChain: FirstHandler[];
    /** `pre()` handlers. */
    preChain: Chain;
    /** `use()` handlers. */
    useChain: Chain;

    /**
     * Starts listening. Wraps node's `server.listen()`.
     * NOTE: documented as `(port, host: Number, cb) => undefined`; this is a
     * straight pass-through and returns node's result.
     */
    listen(
        port?: number,
        hostname?: string,
        backlog?: number,
        listeningListener?: () => void
    ): NodeServer;
    listen(
        port?: number,
        hostname?: string,
        listeningListener?: () => void
    ): NodeServer;
    listen(port?: number, listeningListener?: () => void): NodeServer;
    listen(path: string, listeningListener?: () => void): NodeServer;
    listen(options: net.ListenOptions, listeningListener?: () => void): NodeServer;
    listen(handle: any, listeningListener?: () => void): NodeServer;

    /**
     * Stops the server. Wraps node's `server.close()`.
     * NOTE: documented as returning `undefined`; returns the node server.
     * The callback receives no error argument (it fires on `'close'`).
     */
    close(callback?: () => void): NodeServer;

    /** Mounts a chain on the given path for GET. Returns the route name. */
    get: ServerMethod;
    /** Mounts a chain on the given path for HEAD. Returns the route name. */
    head: ServerMethod;
    /** Mounts a chain on the given path for POST. Returns the route name. */
    post: ServerMethod;
    /** Mounts a chain on the given path for PUT. Returns the route name. */
    put: ServerMethod;
    /** Mounts a chain on the given path for PATCH. Returns the route name. */
    patch: ServerMethod;
    /** Mounts a chain on the given path for DELETE. Returns the route name. */
    del: ServerMethod;
    /** Mounts a chain on the given path for OPTIONS. Returns the route name. */
    opts: ServerMethod;

    /**
     * Handlers that run before routing, for every request (including ones
     * that will 404). `req.params` is not populated yet.
     */
    pre(...handlers: RequestHandlerType[]): this;
    /**
     * Synchronous handlers that run before restify sets up the request.
     * See {@link FirstHandler}.
     */
    first(...handlers: FirstHandler[]): this;
    /** Handlers that run after routing, for every matched route. */
    use(...handlers: RequestHandlerType[]): this;
    /**
     * Runs `fn` (via `use()`) for requests whose `req.params` has `name`.
     * `fn` additionally receives the param value and name.
     */
    param(
        name: string,
        fn: (
            req: Request,
            res: Response,
            next: Next,
            value: any,
            name: string
        ) => void
    ): this;
    /** Removes a route by *name* (as returned by `server.get()` etc.). */
    rm(routeName: string): boolean;

    /** Wraps node's `server.address()`. */
    address(): net.AddressInfo | string | null;
    /** Number of requests currently being handled. */
    inflightRequests(): number;
    /**
     * Debug information about routes and handler chains.
     * NOTE: documented as `debugInfo()`. Result is cached on first call and
     * does not reflect routes/handlers added afterwards.
     */
    getDebugInfo(): ServerDebugInfo;
    toString(): string;

    // --- events -----------------------------------------------------------
    on(event: 'after', listener: AfterEventListener): this;
    on(event: 'pre' | 'request', listener: (req: Request, res: Response) => void): this;
    on(
        event: 'routed',
        listener: (req: Request, res: Response, route: Route) => void
    ): this;
    on(
        event: 'uncaughtException',
        listener: (
            req: Request,
            res: Response,
            route: Route | undefined,
            err: any,
            callback: () => void
        ) => void
    ): this;
    on(event: 'restifyError', listener: ErrorEventListener): this;
    on(event: 'audit', listener: (record: AuditRecord) => void): this;
    on(event: 'redirect', listener: (location: string) => void): this;
    on(event: 'mount', listener: (method: string, path: string) => void): this;
    on(
        event: 'checkContinue',
        listener: (req: http.IncomingMessage, res: http.ServerResponse) => void
    ): this;
    on(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
    on(event: 'close' | 'listening', listener: () => void): this;
    on(event: 'connection' | 'secureConnection', listener: (socket: net.Socket) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(
        event: 'upgrade',
        listener: (req: http.IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this;
    /**
     * Error events are named after the error with the trailing `Error`
     * removed (`InternalServerError` -> `InternalServer`), except
     * `ResourceNotFoundError` -> `NotFound` and
     * `InvalidVersionError` -> `VersionNotAllowed`.
     */
    on(event: string, listener: ErrorEventListener): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

// ---------------------------------------------------------------------------
// Request
// ---------------------------------------------------------------------------

export interface HandlerTimer {
    name: string;
    time: [number, number];
}

/** `req.authorization`, set by `plugins.authorizationParser()`. */
export interface RequestAuthorization {
    /** Absent when there is no `Authorization` header. */
    scheme?: string | undefined;
    /** Undecoded credentials. */
    credentials?: string | undefined;
    /** Basic auth. Missing parts are `null`. */
    basic?: { username: string | null; password: string | null } | undefined;
    /** Parsed HTTP Signature (`http-signature`'s `parseRequest` result). */
    signature?: any;
}

/** Uploaded file, as produced by formidable v1 (`req.files`). */
export interface File {
    size: number;
    /** Temporary path on disk. */
    path: string;
    /** Original file name. */
    name: string | null;
    /** MIME type reported by the client. */
    type: string | null;
    /** Set when the `hash` option is used. */
    hash?: string | null | undefined;
    lastModifiedDate?: Date | null | undefined;
    toJSON(): { [key: string]: any };
}

// ---------------------------------------------------------------------------
// Response
// ---------------------------------------------------------------------------

export type HeaderValue = number | string | string[];

export interface CacheOptions {
    /** max-age, in seconds. */
    maxAge?: number | undefined;
}

export interface RedirectOptions {
    /** Redirect to https. Defaults to the current request's scheme. */
    secure?: boolean | undefined;
    /** Redirect location's hostname (makes the Location absolute). */
    hostname?: string | undefined;
    /** Redirect location's pathname. */
    pathname?: string | undefined;
    /** Redirect location's port. */
    port?: string | number | undefined;
    /** NOTE: documented as String; must be an object of key -> value(s). */
    query?: { [key: string]: any } | undefined;
    /** Replace (rather than merge with) the current query string. */
    overrideQuery?: boolean | undefined;
    /** Use 301 instead of 302. */
    permanent?: boolean | undefined;
}

export interface Response extends http.ServerResponse {
    log: Logger;
    req: Request;
    serverName: string;
    acceptable: string[];
    formatters: Formatters;
    /** Content type used by `send()` ahead of the Content-Type header. */
    contentType?: string | undefined;
    /** Used by `conditionalRequest` and `fullResponse`. */
    etag?: string | undefined;
    /** Used by `conditionalRequest`. */
    mtime?: string | Date | undefined;
    /** Set on 405 responses. */
    methods?: string[] | undefined;
    /**
     * @deprecated Leftover from route versioning. Nothing in restify sets
     * it, but `fullResponse` still copies it into `Api-Version` if you do.
     */
    version?: string | undefined;
    /**
     * @deprecated Restify 1.0 compatibility: if set, `fullResponse` calls it
     * with the formatted body just before headers are written.
     */
    defaultResponseFormatters?: ((data: string | Buffer | null | undefined) => void) | undefined;
    /** The error the request finished with, if any. */
    err?: any;
    /** gzipResponse: restores the original write/end/writeHead. */
    handledGzip?: (() => void) | undefined;
    /**
     * Present only when `res` is actually a {@link ServerUpgradeResponse}
     * (`handleUpgrades: true` and an upgrade request). Use it as a type guard.
     */
    claimUpgrade?: (() => { socket: net.Socket; head: Buffer }) | undefined;

    /**
     * Sets `Cache-Control` (`type` defaults to `'public'`).
     * NOTE: documented as returning String; returns the response.
     */
    cache(type?: string, options?: CacheOptions): this;
    cache(options?: CacheOptions): this;
    /** Sets headers that disable caching. */
    noCache(): this;
    /** Appends `; charset=<type>` to the Content-Type on `send()`. */
    charSet(type: string): this;
    /** Retrieves a response header. */
    get(name: string): HeaderValue | undefined;
    /** Retrieves a response header. */
    header(key: string): HeaderValue | undefined;
    /**
     * Sets a header, appending to an existing value (except Content-Type).
     * Dates are formatted as HTTP dates. Returns the value set.
     */
    header(key: string, value: any, ...formatArgs: any[]): HeaderValue;
    /** Sets `Content-Type: application/json` and calls `send()`. */
    json(code: number, body?: any, headers?: http.OutgoingHttpHeaders): this;
    json(body?: any, headers?: http.OutgoingHttpHeaders): this;
    /** Appends a `Link: <key>; rel="value"` header. */
    link(key: string, value: string): HeaderValue;
    /**
     * Formats and sends the response. Errors without a code use their
     * `statusCode` (or 500).
     */
    send(code: number, body?: any, headers?: http.OutgoingHttpHeaders): this;
    send(body?: any, headers?: http.OutgoingHttpHeaders): this;
    /** Sends a string/Buffer without formatting. */
    sendRaw(code: number, body: string | Buffer, headers?: http.OutgoingHttpHeaders): this;
    sendRaw(body: string | Buffer, headers?: http.OutgoingHttpHeaders): this;
    /** Sets one header, or several from an object, via `header()`. */
    set(name: string, val: any): this;
    set(headers: { [name: string]: any }): this;
    /** Sets the status code and returns it. */
    status(code: number): number;
    /**
     * Sends a redirect and calls `next(false)`. `next` is mandatory.
     * Emits `redirect`.
     */
    redirect(code: number, url: string, next: Next): void;
    redirect(url: string, next: Next): void;
    redirect(options: RedirectOptions, next: Next): void;
    toString(): string;

    on(event: 'header', listener: () => void): this;
    on(event: 'redirect', listener: (location: string) => void): this;
    /**
     * @deprecated Restify 1.0 compatibility: emitted by `fullResponse` with
     * the formatted and original bodies just before headers are written.
     */
    on(event: 'beforeSend', listener: (data: string | Buffer | null | undefined, body: any) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

/**
 * The object handlers receive as `res` for upgrade requests when the server
 * was created with `handleUpgrades: true`. It is *not* an
 * `http.ServerResponse`: most header methods are no-op stubs, and
 * `writeContinue()`/`format()` throw.
 */
export interface ServerUpgradeResponse extends NodeJS.EventEmitter {
    statusCode: number;
    statusReason?: string | undefined;
    sendDate: boolean;
    log: Logger;

    /** Sets the status code and returns it. */
    status(code: number): number;
    /** Writes a non-upgrade response head and closes the socket. */
    send(code: number, body?: any): boolean;
    send(body?: any): boolean;
    /** Writes a non-upgrade response head and closes the socket. */
    end(): boolean;
    /** Writes a non-upgrade response head. */
    write(): boolean;
    /** Writes the response head. Throws if already written. */
    writeHead(statusCode: number, reason?: string): void;
    /**
     * Takes over the connection. Throws if already claimed or if a response
     * head was written.
     */
    claimUpgrade(): { socket: net.Socket; head: Buffer };

    // No-op stubs
    setHeader(name: string, value: any): null;
    getHeader(name: string): null;
    getHeaders(): object;
    removeHeader(name: string): null;
    addTrailer(headers: any): null;
    cache(...args: any[]): 'public';
    set(...args: any[]): null;
    get(name: string): null;
    headers(): object;
    header(...args: any[]): null;
    json(...args: any[]): null;
    link(...args: any[]): null;
    /** Throws. */
    writeContinue(): never;
    /** Throws. */
    format(...args: any[]): never;
}

// ---------------------------------------------------------------------------
// Plugins
// ---------------------------------------------------------------------------

export namespace plugins {
    // --- server.pre() plugins ----------------------------------------------
    namespace pre {
        /** Adds `req.set(key, val)`, `req.get(key)` and `req.getAll()`. */
        function context(): RequestHandler;
        /** Collapses repeated slashes in `req.url` (query string included). */
        function dedupeSlashes(): RequestHandler;
        /** Buffers request data until the stream is resumed. */
        function pause(): RequestHandler;
        /**
         * Uses the first present header as the request id. `request-id` and
         * `x-request-id` are always checked after `options.headers`.
         */
        function reqIdHeaders(options: { headers: string[] }): RequestHandler;
        /** Removes duplicate and trailing slashes from `req.url`. */
        function sanitizePath(): RequestHandler;
        /** Rejects query strings that aren't strict `key=value` pairs (400). */
        function strictQueryParams(options?: {
            message?: string | undefined;
        }): RequestHandler;
        /**
         * For matching user agents (default `/^curl.+/`), sets
         * `Connection: close` and drops Content-Length on HEAD.
         */
        function userAgentConnection(options?: {
            userAgentRegExp?: RegExp | undefined;
        }): RequestHandler;
    }

    // --- header parsers ----------------------------------------------------

    /** Responds 406 when the request's `Accept` matches none of `accepts`. */
    function acceptParser(accepts: string | string[]): RequestHandler;

    /**
     * Parses `Authorization` (Basic and HTTP Signature) into
     * `req.authorization` and `req.username`.
     * `options` is passed to `http-signature`'s `parseRequest`.
     */
    function authorizationParser(options?: any): RequestHandler;

    /**
     * Rejects requests whose `Date` header is older than `clockSkew` seconds
     * (default 300; `0` also means 300).
     * NOTE: invalid dates are let through rather than rejected.
     */
    function dateParser(clockSkew?: number): RequestHandler;

    /**
     * Parses a Bearer token from `Authorization` (or `access_token` in a
     * urlencoded body) into `req.oauth2`. `options` is accepted but unused.
     */
    function oauth2TokenParser(options?: any): RequestHandler;

    // --- body parsers ------------------------------------------------------

    interface BodyReaderOptions {
        /** Defaults to 2 MiB. `0` disables the limit. Not applied to multipart. */
        maxBodySize?: number | undefined;
    }

    interface MapParamsOptions {
        /**
         * Copy parsed values onto `req.params`.
         * NOTE: defaults to off for JSON/urlencoded but *on* for multipart
         * (multipart only skips when `mapParams === false`).
         */
        mapParams?: boolean | undefined;
        /** Let parsed values overwrite existing `req.params` entries. */
        overrideParams?: boolean | undefined;
    }

    /** Options passed through to `qs.parse`. */
    interface QsOptions {
        allowDots?: boolean | undefined;
        allowEmptyArrays?: boolean | undefined;
        allowPrototypes?: boolean | undefined;
        allowSparse?: boolean | undefined;
        /** Defaults to 20. */
        arrayLimit?: number | undefined;
        charset?: 'utf-8' | 'iso-8859-1' | undefined;
        charsetSentinel?: boolean | undefined;
        comma?: boolean | undefined;
        decodeDotInKeys?: boolean | undefined;
        decoder?: ((str: string, defaultDecoder: any, charset: string, type: 'key' | 'value') => any) | undefined;
        delimiter?: string | RegExp | undefined;
        /** Defaults to 5. */
        depth?: number | false | undefined;
        duplicates?: 'combine' | 'first' | 'last' | undefined;
        ignoreQueryPrefix?: boolean | undefined;
        interpretNumericEntities?: boolean | undefined;
        /** Defaults to 1000. */
        parameterLimit?: number | undefined;
        parseArrays?: boolean | undefined;
        plainObjects?: boolean | undefined;
        strictDepth?: boolean | undefined;
        strictNullHandling?: boolean | undefined;
        /** Surface limit violations as `InvalidContentError` instead of dropping. */
        throwOnLimitExceeded?: boolean | undefined;
    }

    interface JsonBodyParserOptions extends BodyReaderOptions, MapParamsOptions {
        /** Passed to `JSON.parse`. */
        reviver?: ((this: any, key: string, value: any) => any) | undefined;
        /** Undocumented: skip the built-in body reader (body already read). */
        bodyReader?: boolean | undefined;
    }

    interface UrlEncodedBodyParserOptions
        extends BodyReaderOptions,
            MapParamsOptions,
            QsOptions {
        /** Undocumented: skip the built-in body reader (body already read). */
        bodyReader?: boolean | undefined;
    }

    interface MultipartBodyParser extends MapParamsOptions {
        /** Read uploaded files into `req.params` (requires `mapParams`). */
        mapFiles?: boolean | undefined;
        /** Support the HTML5 `multiple` attribute. */
        multiples?: boolean | undefined;
        /** Keep original file extensions on temp files. */
        keepExtensions?: boolean | undefined;
        /** Temp directory for uploads. */
        uploadDir?: string | undefined;
        /** Memory limit for all non-file fields, in bytes. */
        maxFieldsSize?: number | undefined;
        /** Undocumented; passed to formidable. */
        maxFileSize?: number | undefined;
        /** Checksum algorithm for uploaded files. */
        hash?: 'sha1' | 'md5' | undefined;
        /** Handles non-file parts instead of the default handler. */
        multipartHandler?: ((part: stream.Readable, req: Request) => void) | undefined;
        /** Handles file parts instead of the default handler. */
        multipartFileHandler?: ((part: stream.Readable, req: Request) => void) | undefined;
    }

    interface BodyParserOptions
        extends JsonBodyParserOptions,
            UrlEncodedBodyParserOptions,
            MultipartBodyParser {
        /** Respond 415 for unsupported content types. */
        rejectUnknown?: boolean | undefined;
        /** Also parse bodies on GET requests. */
        requestBodyOnGet?: boolean | undefined;
    }

    /**
     * Reads and parses the body by content type (JSON, urlencoded, multipart,
     * and the undocumented CSV/TSV) into `req.body`.
     * NOTE: documented as returning a Function; returns `[readBody, parseBody]`.
     * Mutates `options` (sets `options.bodyReader = true`).
     */
    function bodyParser(options?: BodyParserOptions): RequestHandler[];
    /** Reads the raw body into `req.body` (skips multipart and octet-stream). */
    function bodyReader(options?: BodyReaderOptions): RequestHandler;
    /** Reads and parses JSON bodies. Returns `[readBody, parseJson]`. */
    function jsonBodyParser(options?: JsonBodyParserOptions): RequestHandler[];
    /** Reads and parses urlencoded bodies. Returns `[readBody, parseBody]`. */
    function urlEncodedBodyParser(options?: UrlEncodedBodyParserOptions): RequestHandler[];
    /** Parses multipart bodies into `req.body` and `req.files`. */
    function multipartBodyParser(options?: MultipartBodyParser): RequestHandler;

    interface QueryParserOptions extends QsOptions {
        /** Copy parsed values onto `req.params`. NOTE: JSDoc lists both `=true` and `=false`; runtime default is off. */
        mapParams?: boolean | undefined;
        /** Let parsed values overwrite existing `req.params` entries. */
        overrideParams?: boolean | undefined;
    }
    /** Parses the query string into `req.query` (`{}` when empty). */
    function queryParser(options?: QueryParserOptions): RequestHandler;

    /**
     * Sets `application/javascript` when `callback`/`jsonp` query params are
     * present. NOTE: always re-parses `req.query` with default qs options,
     * replacing queryParser's result.
     */
    function jsonp(): RequestHandler;

    // --- conditional handling ----------------------------------------------

    interface HandlerCandidate {
        handler: RequestHandler | RequestHandler[];
        /**
         * Semver version(s) matched against `Accept-Version`.
         * NOTE: documented as optional, but if any candidate sets `version`,
         * every candidate must (otherwise `semver` throws at request time).
         */
        version?: string | string[] | undefined;
        /**
         * Matched against the request's `Accept` header.
         * NOTE: same all-or-none constraint as `version`.
         */
        contentType?: string | string[] | undefined;
    }
    /** Runs the best candidate for the request's version / Accept header. */
    function conditionalHandler(
        candidates: HandlerCandidate | HandlerCandidate[]
    ): RequestHandler;

    /**
     * Handles If-Match / If-None-Match / If-Modified-Since /
     * If-Unmodified-Since against `res.etag`/ETag and `res.mtime`/Last-Modified.
     */
    function conditionalRequest(): RequestHandler[];

    // --- throttling --------------------------------------------------------

    interface CpuUsageThrottleOptions {
        /** CPU usage (0..max) at which shedding starts. Defaults to 0.75. */
        limit?: number | undefined;
        /** CPU usage at which all requests are shed. Defaults to 1. */
        max?: number | undefined;
        /** Sampling interval in ms. Defaults to 250. */
        interval?: number | undefined;
        /** EWMA half-life in ms. Defaults to 250. */
        halfLife?: number | undefined;
    }
    interface CpuUsageThrottleHandler {
        (req: Request, res: Response, next: Next): void;
        /** Undocumented: stops the sampling timer. */
        close(): void;
        /** Reconfigures the plugin at runtime. */
        update(opts: CpuUsageThrottleOptions): void;
        /** Undocumented: introspection snapshot. */
        readonly state: {
            limit: number;
            max: number;
            interval: number;
            halfLife: number;
            cpuUsage: number | undefined;
            reject: number;
            lag: number;
        };
    }
    /** Probabilistically sheds load (503) based on process CPU usage. */
    function cpuUsageThrottle(opts: CpuUsageThrottleOptions): CpuUsageThrottleHandler;

    interface InflightRequestThrottleOptions {
        /** Maximum inflight requests before rejecting. */
        limit: number;
        /** The server whose `inflightRequests()` is checked. */
        server: Server;
        /** Error to respond with. Defaults to a 503 `ServiceUnavailableError`. */
        err?: Error | undefined;
    }
    /** Rejects requests once the server's inflight count exceeds `limit`. */
    function inflightRequestThrottle(opts: InflightRequestThrottleOptions): RequestHandler;

    type RequestExpiryOptions =
        | {
            /** Header holding the absolute expiry time (ms since epoch). */
            absoluteHeader: string;
        }
        | {
            /** Header holding the request start time (ms since epoch). */
            startHeader: string;
            /** Header holding the timeout (ms) added to the start time. */
            timeoutHeader: string;
        };
    /** Responds 504 to requests whose expiry headers say they already timed out. */
    function requestExpiry(options: RequestExpiryOptions): RequestHandler;

    interface ThrottleOptions {
        /** Bucket capacity. */
        burst: number;
        /** Refill rate, requests per second. */
        rate: number;
        /** Throttle by socket address. Exactly one of `ip`/`xff`/`username`. */
        ip?: boolean | undefined;
        /** Throttle by the raw `X-Forwarded-For` header. */
        xff?: boolean | undefined;
        /** Throttle by `req.username`. */
        username?: boolean | undefined;
        /** Set `X-RateLimit-*` headers. */
        setHeaders?: boolean | undefined;
        /** Per-key limits; `0` burst/rate means unlimited. */
        overrides?: { [key: string]: { burst: number; rate: number } } | undefined;
        /** Custom key -> bucket store. Defaults to an in-memory LRU. */
        tokensTable?: { put(key: string, value: any): void; get(key: string): any } | undefined;
        /** LRU size for the default store. Defaults to 10000. */
        maxKeys?: number | undefined;
    }
    /** Token-bucket rate limiting (429). */
    function throttle(options: ThrottleOptions): RequestHandler;

    // --- response plugins --------------------------------------------------

    /** Sets Connection, Content-MD5, Date, Etag, Server, Request-Id and Response-Time headers. */
    function fullResponse(): RequestHandler;

    /** Gzips the response when the client accepts gzip. */
    function gzipResponse(options?: zlib.ZlibOptions): RequestHandler;

    interface RequestLogger {
        /** Lower-case header names copied onto the child logger. */
        headers?: string[] | undefined;
        /** Extra bindings for the child logger. */
        properties?: { [key: string]: any } | undefined;
        /** Serializers for the child logger. */
        serializers?: { [key: string]: (value: any) => any } | undefined;
        /** Fallback parent logger when `req.log` is unset. */
        log?: Logger | undefined;
        /** Defaults to `'req_id'`. */
        requestIdFieldName?: string | undefined;
    }
    /** Replaces `req.log` with a child logger bound to the request id. */
    function requestLogger(options?: RequestLogger): RequestHandler;

    interface ServeStatic {
        /** Root directory (resolved against the cwd). */
        directory: string;
        /** Always serve this file. */
        file?: string | undefined;
        /** File served for directory requests. */
        default?: string | undefined;
        /** Append the request path to `directory`. Defaults to `true`. */
        appendRequestPath?: boolean | undefined;
        /** Cache-Control max-age in seconds. Defaults to 3600. */
        maxAge?: number | undefined;
        /** Only serve files whose path matches. */
        match?: RegExp | undefined;
        /** Appended to the Content-Type. */
        charSet?: string | undefined;
        /** Serve `<file>.gz` when it exists and the client accepts gzip. */
        gzip?: boolean | undefined;
        /** Computes the ETag header value. */
        etag?: ((stats: fs.Stats, opts: ServeStatic) => string) | undefined;
    }
    /** Serves files from a directory (mount on a GET route). */
    function serveStatic(options: ServeStatic): RequestHandler;

    interface ServeStaticFiles {
        acceptRanges?: boolean | undefined;
        cacheControl?: boolean | undefined;
        dotfiles?: 'allow' | 'deny' | 'ignore' | undefined;
        etag?: boolean | undefined;
        extensions?: string[] | string | false | undefined;
        immutable?: boolean | undefined;
        /** Defaults to `'index.html'`. */
        index?: string[] | string | false | undefined;
        lastModified?: boolean | undefined;
        /** Milliseconds (or an `ms` string). */
        maxAge?: number | string | undefined;
        /** Called synchronously before headers are sent. */
        setHeaders?: ((res: http.ServerResponse, path: string, stat: fs.Stats) => void) | undefined;
    }
    /** Serves files via `send` (mount on a GET route ending in `/*`). */
    function serveStaticFiles(directory: string, options?: ServeStaticFiles): RequestHandler;

    // --- after-event plugins -----------------------------------------------

    type AuditLoggerContext = (
        req: Request,
        res: Response,
        route: Route | undefined,
        error: any
    ) => any;

    interface AuditLoggerOptions {
        /**
         * NOTE: only used when `req.log` is unset; normally the record is
         * logged through a child of `req.log`.
         */
        log: Logger;
        /** Server event the logger is attached to. */
        event: 'pre' | 'routed' | 'after';
        /** Return value is added to the record as `context`. */
        context?: AuditLoggerContext | undefined;
        /** Emit `audit` on this server for each record. */
        server?: Server | undefined;
        /** Log the record. Defaults to `true`. */
        printLog?: boolean | undefined;
        /** Override the err/req/res serializers. */
        serializers?: { [key: string]: (value: any) => any } | undefined;
        /** Defaults to `'req_id'`. */
        requestIdFieldName?: string | undefined;
        /** Undocumented: include request and response bodies. */
        body?: boolean | undefined;
        /**
         * @deprecated Shown in the JSDoc example (a ring buffer, `logBuffer`
         * in @types/restify), but ignored.
         */
        logMetrics?: unknown;
    }
    /** Builds an audit record per request; attach to `pre`/`routed`/`after`. */
    function auditLogger(options: AuditLoggerOptions): AfterEventListener;

    interface MetricsCallbackOptions {
        /** Undefined after an uncaught exception. */
        statusCode: number | undefined;
        method: string;
        /** Until both flushed and all handlers finished. */
        totalLatency: number | null;
        /** Until the response was flushed. */
        latency: number | null;
        preLatency: number | null;
        useLatency: number | null;
        routeLatency: number | null;
        /** `req.path()`. */
        path: string;
        /** `'close'` when the client went away (`err` is a RequestCloseError). */
        connectionState: 'close' | undefined;
        /** NOTE: documented as `unifinishedRequests`. */
        unfinishedRequests: number;
        inflightRequests: number;
    }
    type MetricsCallback = (
        err: any,
        metrics: MetricsCallbackOptions,
        req: Request,
        res: Response,
        route: Route | undefined
    ) => void;
    /** Reports per-request metrics; attach to the `after` event. */
    function metrics(opts: { server: Server }, callback: MetricsCallback): AfterEventListener;
}

/** Alias of `plugins.pre`. */
export import pre = plugins.pre;

// ---------------------------------------------------------------------------
// Formatters
// ---------------------------------------------------------------------------

/**
 * Built-in formatters, keyed by `<content-type>; q=<value>`. Note the keys are
 * not bare content types.
 */
export const formatters: {
    'application/javascript; q=0.1': Formatter;
    'application/json; q=0.4': Formatter;
    'text/plain; q=0.3': Formatter;
    'application/octet-stream; q=0.2': Formatter;
};

// ---------------------------------------------------------------------------
// Helpers & top-level exports
// ---------------------------------------------------------------------------

export const helpers: {
    /**
     * Composes handlers into a single `(req, res, callback)` function.
     * Nested arrays are flattened.
     */
    compose(
        handlers: RequestHandlerType,
        options?: ChainOptions
    ): (req: Request, res: Response, callback: (err?: any) => void) => void;
};

/** The `pino` factory, re-exported. */
export function logger(options?: LoggerOptions | DestinationStream): Logger;
export function logger(options: LoggerOptions, stream: DestinationStream): Logger;

/**
 * Creates a restify server.
 *
 * Throws if `process.env.HOST` is set to something that is not a bare host.
 */
export function createServer(options?: ServerOptions): Server;
