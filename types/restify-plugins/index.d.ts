import { Request, RequestHandler, Response, Route, Server } from "restify";
import Logger = require("bunyan");

// *************** This module includes the follow pre plugins, which are intended to be used prior to the routing of a request:

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

// *************** This module includes the following header parser plugins:

/**
 * Check the client's Accept header can be handled by this server.
 */
export function acceptParser(accepts: string[]): RequestHandler;

export interface AuditLoggerOptions {
    /**
     * Bunyan logger
     */
    log: Logger;

    /**
     * Restify server. If passed in, causes server to emit 'auditlog' event after audit logs are flushed
     */
    server?: Server | undefined;

    /**
     * Ringbuffer which is written to if passed in
     */
    logBuffer?: any;

    /**
     * When true, prints audit logs. default true.
     */
    printLog?: boolean | undefined;

    body?: boolean | undefined;
}

/**
 * An audit logger for recording all handled requests
 */
export function auditLogger(options: AuditLoggerOptions): (...args: any[]) => void;

/**
 * Authorization header
 */
export function authorizationParser(options?: any): RequestHandler;

/**
 * Conditional headers (If-*)
 */
export function conditionalRequest(): RequestHandler[];

/**
 * Handles disappeared CORS headers
 */
export function fullResponse(): RequestHandler;

// ************ This module includes the following data parsing plugins:

export interface BodyParserOptions {
    /**
     * The maximum size in bytes allowed in the HTTP body. Useful for limiting clients from hogging server memory.
     */
    maxBodySize?: number | undefined;

    /**
     * If req.params should be filled with parsed parameters from HTTP body.
     */
    mapParams?: boolean | undefined;

    /**
     * If req.params should be filled with the contents of files sent through a multipart request.
     * Formidable is used internally for parsing, and a file is denoted as a multipart part with the filename option set in its Content-Disposition.
     * This will only be performed if mapParams is true.
     */
    mapFiles?: boolean | undefined;

    /**
     * If an entry in req.params should be overwritten by the value in the body if the names are the same.
     * For instance, if you have the route /:someval, and someone posts an x-www-form-urlencoded Content-Type with the body someval=happy to /sad,
     * the value will be happy if overrideParams is true, sad otherwise.
     */
    overrideParams?: boolean | undefined;

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
    keepExtensions?: boolean | undefined;

    /**
     * Where uploaded files are intermediately stored during transfer before the contents is mapped into req.params. Does nothing if multipartFileHandler is defined.
     */
    uploadDir?: string | undefined;

    /**
     * If you want to support html5 multiple attribute in upload fields.
     */
    multiples?: boolean | undefined;

    /**
     * If you want checksums calculated for incoming files, set this to either sha1 or md5.
     */
    hash?: string | undefined;

    /**
     * Set to true if you want to end the request with a UnsupportedMediaTypeError when none of the supported content types was given.
     */
    rejectUnknown?: boolean | undefined;

    reviver?: any;

    maxFieldsSize?: number | undefined;
}

/**
 * Parses POST bodies to req.body. automatically uses one of the following parsers based on content type.
 */
export function bodyParser(options?: BodyParserOptions): RequestHandler[];

/**
 * Reads the body of the request.
 */
export function bodyReader(options?: { maxBodySize?: number | undefined }): RequestHandler;

export interface UrlEncodedBodyParser {
    mapParams?: boolean | undefined;
    overrideParams?: boolean | undefined;
}

/**
 * Parse the HTTP request body IFF the contentType is application/x-www-form-urlencoded.
 *
 * If req.params already contains a given key, that key is skipped and an
 * error is logged.
 */
export function urlEncodedBodyParser(options?: UrlEncodedBodyParser): RequestHandler[];

/**
 * Parses JSON POST bodies
 */
export function jsonBodyParser(
    options?: { mapParams?: boolean | undefined; reviver?: any; overrideParams?: boolean | undefined },
): RequestHandler[];

/**
 * Parses JSONP callback
 */
export function jsonp(): RequestHandler;

export interface MultipartBodyParser {
    overrideParams?: boolean | undefined;
    multiples?: boolean | undefined;
    keepExtensions?: boolean | undefined;
    uploadDir?: string | undefined;
    maxFieldsSize?: number | undefined;
    hash?: string | undefined;
    multipartFileHandler?: any;
    multipartHandler?: any;
    mapParams?: boolean | undefined;
    mapFiles?: boolean | undefined;
}

/**
 * Parses JSONP callback
 */
export function multipartBodyParser(options?: MultipartBodyParser): RequestHandler;

export interface QueryParserOptions {
    /**
     * Default `false`. Copies parsed query parameters into `req.params`.
     */
    mapParams?: boolean | undefined;

    /**
     * Default `false`. Only applies when if mapParams true. When true, will stomp on req.params field when existing value is found.
     */
    overrideParams?: boolean | undefined;

    /**
     *  Default false. Transform `?foo.bar=baz` to a nested object: `{foo: {bar: 'baz'}}`.
     */
    allowDots?: boolean | undefined;

    /**
     * Default 20. Only transform `?a[$index]=b` to an array if `$index` is less than `arrayLimit`.
     */
    arrayLimit?: number | undefined;

    /**
     * Default 5. The depth limit for parsing nested objects, e.g. `?a[b][c][d][e][f][g][h][i]=j`.
     */
    depth?: number | undefined;

    /**
     * Default 1000. Maximum number of query params parsed. Additional params are silently dropped.
     */
    parameterLimit?: number | undefined;

    /**
     * Default true. Whether to parse `?a[]=b&a[1]=c` to an array, e.g. `{a: ['b', 'c']}`.
     */
    parseArrays?: boolean | undefined;

    /**
     * Default false. Whether `req.query` is a "plain" object -- does not inherit from `Object`.
     * This can be used to allow query params whose names collide with Object methods, e.g. `?hasOwnProperty=blah`.
     */
    plainObjects?: boolean | undefined;

    /**
     * Default false. If true, `?a&b=` results in `{a: null, b: ''}`. Otherwise, `{a: '', b: ''}`.
     */
    strictNullHandling?: boolean | undefined;
}

/**
 * Parses URL query parameter into `req.query`. Many options correspond directly to option defined for the underlying [qs.parse](https://github.com/ljharb/qs)
 */
export function queryParser(options?: QueryParserOptions): RequestHandler;

export interface RequestLogger {
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
export function requestLogger(options?: RequestLogger): RequestHandler;

// ******************** The module includes the following response plugins:

/**
 * expires requests based on current time + delta
 * @param delta - age in seconds
 */
export function dateParser(delta?: number): RequestHandler;

/**
 * gzips the response if client send `accept-encoding: gzip`
 * @param options options to pass to gzlib
 */
export function gzipResponse(options?: any): RequestHandler;

export interface ServeStatic {
    appendRequestPath?: boolean | undefined;
    directory?: string | undefined;
    maxAge?: number | undefined;
    match?: any;
    charSet?: string | undefined;
    file?: string | undefined;
    etag?: string | undefined;
    default?: any;
    gzip?: boolean | undefined;
}

/**
 * Used to serve static files
 */
export function serveStatic(options?: ServeStatic): RequestHandler;

export interface ThrottleOptions {
    burst?: number | undefined;
    rate?: number | undefined;
    ip?: boolean | undefined;
    username?: boolean | undefined;
    xff?: boolean | undefined;
    tokensTable?: any;
    maxKeys?: number | undefined;
    overrides?: any; // any
}

export interface MetricsCallback {
    /**
     *  An error if the request had an error
     */
    err: Error;

    metrics: MetricsCallbackOptions;

    req: Request;
    res: Response;

    /**
     * The route obj that serviced the request
     */
    route: Route;
}

export type TMetricsCallback = "close" | "aborted" | undefined;

export interface MetricsCallbackOptions {
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
 * server.on('after', plugins.metrics((err, metrics) =>
 * {
 *    // metrics is an object containing information about the request
 * }));
 * ```
 */
export function metrics(
    opts: { server: Server },
    callback: (options: MetricsCallback) => any,
): (...args: any[]) => void;

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
export function oauth2TokenParser(): RequestHandler;

/**
 *  throttles responses
 */
export function throttle(options?: ThrottleOptions): RequestHandler;

export interface RequestExpiryOptions {
    /**
     * Header name of the absolute time for request expiration
     */
    absoluteHeader?: string | undefined;

    /**
     * Header name for the start time of the request
     */
    startHeader?: string | undefined;

    /**
     * The header name for the time in milliseconds that should ellapse before the request is considered expired.
     */
    timeoutHeader?: string | undefined;
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
export function requestExpiry(options?: RequestExpiryOptions): RequestHandler;

export as namespace RestifyPlugins;
