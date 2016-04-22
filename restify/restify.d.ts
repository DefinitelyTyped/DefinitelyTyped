// Type definitions for node.js REST framework 2.0
// Project: https://github.com/mcavage/node-restify
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />

declare module "restify" {
  import http = require('http');
  import bunyan = require('bunyan');
  import url = require('url');

import http = require('http');
import bunyan = require('bunyan');


interface addressInterface {
    port: number;
    family: string;
    address: string;
  }

  interface requestFileInterface {
      path: string;
      type: string;
  }

  /**
   * Comes from authorizationParser plugin
   */
  interface requestAuthorization {
      scheme: string;
      credentials: string;
      basic?: {
          username: string;
          password: string;
      }
  }

  interface Request extends http.IncomingMessage {
    /**
     * builds an absolute URI for the request.
     * @private
     * @function absoluteUri
     * @param    {String} path a url path
     * @returns  {String}
     */
    absoluteUri: (path: string) => string;

    /**
     * returns any header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @public
     * @function header
     * @param    {String} name  the name of the header
     * @param    {String} value default value if header isn't found on the req
     * @returns  {String}
     */
    header: (name: string, value?: string) => string;

    /**
     * returns any trailer header off the request. also, 'correct' any
     * correctly spelled 'referrer' header to the actual spelling used.
     * @public
     * @function trailer
     * @param    {String} name  the name of the header
     * @param    {String} value default value if header isn't found on the req
     * @returns  {String}
     */
    trailer: (name: string, value?: string) => string;

    /**
     * checks if the accept header is present and has the value requested.
     * e.g., req.accepts('html');
     * @public
     * @function accepts
     * @param    {String | Array} types an array of accept type headers
     * @returns  {Boolean}
     */
    accepts: (types: string | string[]) => boolean;

    /**
     * checks if the request accepts the encoding types.
     * @public
     * @function acceptsEncoding
     * @param    {String | Array} types an array of accept type headers
     * @returns  {Boolean}
     */
    acceptsEncoding: (types: string | string[]) => boolean;

    /**
     * Check if the incoming request contains the Content-Type header field, and
     * if it contains the given mime type.
     * @public
     * @function is
     * @param    {String} type  a content-type header value
     * @returns  {Boolean}
     */
    is: (type: string) => boolean;

    /**
     * Check if the incoming request is chunked.
     * @public
     * @function isChunked
     * @returns  {Boolean}
     */
    isChunked: () => boolean;

    /**
     * Check if the incoming request is kept alive.
     * @public
     * @function isKeepAlive
     * @returns  {Boolean}
     */
    isKeepAlive: () => boolean;

    /**
     * Check if the incoming request has been upgraded.
     * @public
     * @function isUpgradeRequest
     * @returns  {Boolean}
     */
    isUpgradeRequest: () => boolean;

    /**
     * Check if the incoming request is an upload verb.
     * @public
     * @function isUpload
     * @returns  {Boolean}
     */
    isUpload: () => boolean;

    /**
     * retrieves the user-agent header.
     * @public
     * @function userAgent
     * @returns  {String}
     */
    userAgent: () => string;

    /**
     * Start the timer for a request handler function. You must explicitly invoke
     * endHandlerTimer() after invoking this function. Otherwise timing information
     * will be inaccurate.
     * @public
     * @function startHandlerTimer
     * @param    {String}    handlerName The name of the handler.
     * @returns  {undefined}
     */
    startHandlerTimer: (handlerName: string) => void;

    /**
     * Stop the timer for a request handler function.
     * @public
     * @function endHandlerTimer
     * @param    {String}    handlerName The name of the handler.
     * @returns  {undefined}
     */
    endHandlerTimer: (handlerName: string) => void;

    getLogger: (component: string) => any;

    /**
     * gets the content-length header off the request.
     * @public
     * @function getContentLength
     * @returns {Number}
     */
    getContentLength: () => number;

    /**
     * @see getContentLength
     * @function contentLength
     */
    contentLength: () => number;

    /**
     * gets the content-type header.
     * @public
     * @function getContentType
     * @returns {String}
     */
    getContentType: () => string;

    /**
     * @see getContentType
     */
    contentType: () => string;

    /**
     * retrieves the complete URI requested by the client.
     * @public
     * @function getHref
     * @returns {String}
     */
    getHref: () => string;

    /**
     * @see getHref
     */
    href: () => string;

    log: bunyan.Logger;
    /**
     * retrieves the request uuid. was created when the request was setup.
     * @public
     * @function getId
     * @returns  {String}
     */
    getId: () => string;

    /**
     * @see getId
     */
    id: () => string;

    /**
     * retrieves the cleaned up url path.
     * e.g., /foo?a=1  =>  /foo
     * @public
     * @function getPath
     * @returns  {String}
     */
    getPath: () => string;

    /**
     * @see getPath
     */
    path: () => string;

    /**
     * returns the raw query string
     * @public
     * @function getQuery
     * @returns  {String}
     */
    getQuery: () => string;

    /**
     * @see getQuery
     */
    query: () => string;
    secure: boolean;

    /**
      * returns ms since epoch when request was setup.
      * @public
      * @function time
      * @returns  {Number}
      */
    time: () => number;

    /**
     * returns a parsed URL object.
     * @public
     * @function getUrl
     * @returns  {Object}
     */
    getUrl: () => url.Url;

    /**
     * returns the accept-version header.
     * @public
     * @function getVersion
     * @returns  {String}
     */
    getVersion: () => string;

    /**
     * @see getVersion
     */
    version: () => string;
    params: any;
    files?: { [name: string]: requestFileInterface };

    /**
     * Check if the incoming request is encrypted.
     * @public
     * @function isSecure
     * @returns  {Boolean}
     */
    isSecure: () => boolean;
    /** available when bodyParser plugin is used */
    body?: any;
    /** available when authorizationParser plugin is used */
    username?: string;
    /** available when authorizationParser plugin is used */
    authorization?: requestAuthorization;

    timers: HandlerTiming[];
  }

  /**
   * Timer object used to identify how long a specific handler took to run
   *
   * @property {String} name The name of the handler.
   * @property {Array} time A tuple of [seconds, nanoseconds], how long the handler took.
   */
  interface HandlerTiming {
    name: string;
    time: [number, number];
  }

interface Response extends http.ServerResponse {
    header: (key: string, value?: any) => any;
    cache: (type?: any, options?: Object) => any;
    status: (code: number) => any;
    send: (status?: any, body?: any, headers?: { [header: string]: string }) => any;
    json: (status?: any, body?: any, headers?: { [header: string]: string }) => any;
    code: number;
    contentLength: number;
    charSet(value: string): void;
    contentType: string;
    headers: Object;
    id: string;
  }

  interface RouteSpec {
    method: string;
    name: string;
    path: string | RegExp;
    versions: string[];
  }

  interface Route {
    name: string;
    method: string;
    path: RoutePathRegex;
    spec: RouteSpec;
    types: string[];
    versions: string[];
  }

  interface RouteOptions {
      name: string;
      method: string;
      path?: string | RegExp;
      url?: string | RegExp;
      urlParamPattern?: RegExp;
      contentType?: string | string[];
      versions?: string | string[];
  }

  interface RoutePathRegex extends RegExp {
    restifyParams: string[];
  }

  interface Router {
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
    log?: any;
    toString: () => string;

    /**
     * Takes an object of route params and query params, and 'renders' a URL
     * @param    {String} routeName the route name
     * @param    {Object} params    an object of route params
     * @param    {Object} query     an object of query params
     * @returns  {String}
     */
    render: (routeName: string, params: Object, query?: Object) => string;

    /**
     * adds a route.
     * @param    {Object} options an options object
     * @returns  {String}         returns the route name if creation is successful.
     */
    mount: (options: Object) => string | boolean;

    /**
     * unmounts a route.
     * @param    {String} name the route name
     * @returns  {String}      the name of the deleted route (or false if it was not matched)
     */
    unmount: (name: string) => string | boolean;
}

interface Server extends http.Server {
    use(handler: RequestHandler, ...handlers: RequestHandler[]): Server;
    use(handler: RequestHandler[], ...handlers: RequestHandler[]): Server;
    use(handler: RequestHandler, ...handlers: RequestHandler[][]): Server;
    use(handler: RequestHandler[], ...handlers: RequestHandler[][]): Server;

    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): string;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): string;
    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): string;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): string;

    name: string;
    version: string;
    log: Object;
    acceptable: string[];
    url: string;
    address: () => addressInterface;
    listen(...args: any[]): any;
    close(...args: any[]): any;
    pre(routeCallBack: RequestHandler): Server;
    server: http.Server;
    router: Router;
    routes: Route[];
    toString: () => string;
  }

  interface ServerOptions {
    certificate ?: string;
    key ?: string;
    formatters ?: Object;
    log ?: Object;
    name ?: string;
    spdy ?: Object;
    version ?: string;
    responseTimeHeader ?: string;
    responseTimeFormatter ?: (durationInMilliseconds: number) => any;
    handleUpgrades ?: boolean;
    router ?: Router;
    httpsServerOptions?: any;
  }

  interface ClientOptions {
    accept?: string;
    connectTimeout?: number;
    dtrace?: Object;
    gzip?: Object;
    headers?: Object;
    log?: Object;
    retry?: Object;
    signRequest?: Function;
    url?: string;
    userAgent?: string;
    version?: string;
}

  interface Client {
    get: (opts: string | { path?: string; [name: string]: any }, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    head: (opts: string | { path?: string; [name: string]: any }, callback?: (err: any, req: Request, res: Response) => any) => any;
    post: (opts: string | { path?: string; [name: string]: any }, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    put: (opts: string | { path?: string; [name: string]: any }, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    patch: (opts: string | { path?: string; [name: string]: any }, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    del: (opts: string | { path?: string; [name: string]: any }, callback?: (err: any, req: Request, res: Response) => any) => any;
    basicAuth: (username: string, password: string) => any;
}

  interface HttpClient extends Client {
    get: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
    head: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
    post: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
    put: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
    patch: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
    del: (opts?: string | { path?: string; [name: string]: any }, callback?: Function) => any;
  }
 
  interface ThrottleOptions {
    burst?: number;
    rate?: number;
    ip?: boolean;
    xff?: boolean;
    username?: boolean;
    tokensTable?: Object;
    maxKeys?: number;
    overrides?: Object;
}

interface Next {
    (err?: any): any;
    ifError?: (err?: any) => any;
  }

interface RequestHandler {
    (req: Request, res: Response, next: Next): any;
}

interface CORS {
    (cors?: {
        origins?: string[];
        credentials?: boolean;
        headers?: string[];
    }): RequestHandler;
    origins: string[];
    ALLOW_HEADERS: string[];
    credentials: boolean;
}

declare export function createServer(options?: ServerOptions): Server;

declare export function createJsonClient(options?: ClientOptions): Client;
declare export function createStringClient(options?: ClientOptions): Client;
declare export function createClient(options?: ClientOptions): HttpClient;

declare export class HttpError { constructor(cause: any, message?: any); }

declare class DefiniteHttpError {
    constructor(message?: any);
    constructor(cause: any, message?: any);
}

declare export class BadRequestError extends DefiniteHttpError { }
declare export class UnauthorizedError extends DefiniteHttpError { }
declare export class PaymentRequiredError extends DefiniteHttpError { }
declare export class ForbiddenError extends DefiniteHttpError { }
declare export class NotFoundError extends DefiniteHttpError { }
declare export class MethodNotAllowedError extends DefiniteHttpError { }
declare export class NotAcceptableError extends DefiniteHttpError { }
declare export class ProxyAuthenticationRequiredError extends DefiniteHttpError { }
declare export class RequestTimeoutError extends DefiniteHttpError { }
declare export class ConflictError extends DefiniteHttpError { }
declare export class GoneError extends DefiniteHttpError { }
declare export class LengthRequiredError extends DefiniteHttpError { }
declare export class RequestEntityTooLargeError extends DefiniteHttpError { }
declare export class RequesturiTooLargeError extends DefiniteHttpError { }
declare export class UnsupportedMediaTypeError extends DefiniteHttpError { }
declare export class RequestedRangeNotSatisfiableError extends DefiniteHttpError { }
declare export class ExpectationFailedError extends DefiniteHttpError { }
declare export class ImATeapotError extends DefiniteHttpError { }
declare export class UnprocessableEntityError extends DefiniteHttpError { }
declare export class LockedError extends DefiniteHttpError { }
declare export class FailedDependencyError extends DefiniteHttpError { }
declare export class UnorderedCollectionError extends DefiniteHttpError { }
declare export class UpgradeRequiredError extends DefiniteHttpError { }
declare export class PreconditionRequiredError extends DefiniteHttpError { }
declare export class TooManyRequestsError extends DefiniteHttpError { }
declare export class RequestHeaderFieldsTooLargeError extends DefiniteHttpError { }
declare export class InternalServerError extends DefiniteHttpError { }
declare export class NotImplementedError extends DefiniteHttpError { }
declare export class BadGatewayError extends DefiniteHttpError { }
declare export class ServiceUnavailableError extends DefiniteHttpError { }
declare export class GatewayTimeoutError extends DefiniteHttpError { }
declare export class HttpVersionNotSupportedError extends DefiniteHttpError { }
declare export class VariantAlsoNegotiatesError extends DefiniteHttpError { }
declare export class InsufficientStorageError extends DefiniteHttpError { }
declare export class BandwidthLimitExceededError extends DefiniteHttpError { }
declare export class NotExtendedError extends DefiniteHttpError { }
declare export class NetworkAuthenticationRequiredError extends DefiniteHttpError { }
declare export class RestError extends DefiniteHttpError { }

declare export class PreconditionFailedError extends RestError { }
declare export class BadDigestError extends RestError { }
declare export class BadMethodError extends RestError { }
declare export class InternalError extends RestError { }
declare export class InvalidArgumentError extends RestError { }
declare export class InvalidContentError extends RestError { }
declare export class InvalidCredentialsError extends RestError { }
declare export class InvalidHeaderError extends RestError { }
declare export class InvalidVersionError extends RestError { }
declare export class MissingParameterError extends RestError { }
declare export class NotAuthorizedError extends RestError { }
declare export class RequestExpiredError extends RestError { }
declare export class RequestThrottledError extends RestError { }
declare export class ResourceNotFoundError extends RestError { }
declare export class WrongAcceptError extends RestError { }


declare export function acceptParser(parser: any): RequestHandler;
declare export function authorizationParser(): RequestHandler;
declare export function dateParser(skew?: number): RequestHandler;
declare export function queryParser(options?: Object): RequestHandler;
declare export function urlEncodedBodyParser(options?: Object): RequestHandler[];
declare export function jsonp(): RequestHandler;
declare export function gzipResponse(options?: Object): RequestHandler;
declare export function bodyParser(options?: Object): RequestHandler[];
declare export function requestLogger(options?: Object): RequestHandler;
declare export function serveStatic(options?: Object): RequestHandler;
declare export function throttle(options?: ThrottleOptions): RequestHandler;
declare export function conditionalRequest(): RequestHandler[];
declare export function auditLogger(options?: Object): Function;
declare export function fullResponse(): RequestHandler;
declare export var defaultResponseHeaders: any;
declare export var CORS: CORS;

declare export module pre {
    export function pause(): RequestHandler;
    export function sanitizePath(options?: any): RequestHandler;
    export function userAgentConnection(options?: any): RequestHandler;
}
