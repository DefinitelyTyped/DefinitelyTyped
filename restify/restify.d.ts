// Type definitions for node.js REST framework 2.0
// Project: https://github.com/mcavage/node-restify
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />


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

interface Request extends http.ServerRequest {
    header: (key: string, defaultValue?: string) => any;
    accepts: (type: string) => boolean;
    is: (type: string) => boolean;
    getLogger: (component: string) => any;
    contentLength: number;
    contentType: string;
    href: () => string;
    log: bunyan.Logger;
    id: string;
    path: () => string;
    query: any;
    secure: boolean;
    time: number;
    params: any;
    files?: { [name: string]: requestFileInterface };
    isSecure: () => boolean;
    /** available when bodyParser plugin is used */
    body?: any;
    /** available when authorizationParser plugin is used */
    username?: string;
    /** available when authorizationParser plugin is used */
    authorization?: requestAuthorization;
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

interface Route {
    name: string;
    method: string;
    path: RoutePathRegex;
    spec: Object;
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
    mount: (options: Object) => string;

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

    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): Route;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): Route;
    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): Route;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): Route;

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
    certificate?: string;
    key?: string;
    formatters?: Object;
    log?: Object;
    name?: string;
    spdy?: Object;
    version?: string;
    responseTimeHeader?: string;
    responseTimeFormatter?: (durationInMilliseconds: number) => any;
    handleUpgrades?: boolean;
    router?: Router;
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
    get: (path: string, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    head: (path: string, callback?: (err: any, req: Request, res: Response) => any) => any;
    post: (path: string, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    put: (path: string, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any) => any;
    del: (path: string, callback?: (err: any, req: Request, res: Response) => any) => any;
    basicAuth: (username: string, password: string) => any;
}

interface HttpClient extends Client {
    get: (path?: any, callback?: Function) => any;
    head: (path?: any, callback?: Function) => any;
    post: (opts?: any, callback?: Function) => any;
    put: (opts?: any, callback?: Function) => any;
    del: (opts?: any, callback?: Function) => any;
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
    ifError: (err?: any) => any;
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

export declare function createServer(options?: ServerOptions): Server;

export declare function createJsonClient(options?: ClientOptions): Client;
export declare function createStringClient(options?: ClientOptions): Client;
export declare function createClient(options?: ClientOptions): HttpClient;

export declare class HttpError { constructor(cause: any, message?: any); }

declare class DefiniteHttpError {
    constructor(message?: any);
    constructor(cause: any, message?: any);
}

export declare class BadRequestError extends DefiniteHttpError { }
export declare class UnauthorizedError extends DefiniteHttpError { }
export declare class PaymentRequiredError extends DefiniteHttpError { }
export declare class ForbiddenError extends DefiniteHttpError { }
export declare class NotFoundError extends DefiniteHttpError { }
export declare class MethodNotAllowedError extends DefiniteHttpError { }
export declare class NotAcceptableError extends DefiniteHttpError { }
export declare class ProxyAuthenticationRequiredError extends DefiniteHttpError { }
export declare class RequestTimeoutError extends DefiniteHttpError { }
export declare class ConflictError extends DefiniteHttpError { }
export declare class GoneError extends DefiniteHttpError { }
export declare class LengthRequiredError extends DefiniteHttpError { }
export declare class RequestEntityTooLargeError extends DefiniteHttpError { }
export declare class RequesturiTooLargeError extends DefiniteHttpError { }
export declare class UnsupportedMediaTypeError extends DefiniteHttpError { }
export declare class RequestedRangeNotSatisfiableError extends DefiniteHttpError { }
export declare class ExpectationFailedError extends DefiniteHttpError { }
export declare class ImATeapotError extends DefiniteHttpError { }
export declare class UnprocessableEntityError extends DefiniteHttpError { }
export declare class LockedError extends DefiniteHttpError { }
export declare class FailedDependencyError extends DefiniteHttpError { }
export declare class UnorderedCollectionError extends DefiniteHttpError { }
export declare class UpgradeRequiredError extends DefiniteHttpError { }
export declare class PreconditionRequiredError extends DefiniteHttpError { }
export declare class TooManyRequestsError extends DefiniteHttpError { }
export declare class RequestHeaderFieldsTooLargeError extends DefiniteHttpError { }
export declare class InternalServerError extends DefiniteHttpError { }
export declare class NotImplementedError extends DefiniteHttpError { }
export declare class BadGatewayError extends DefiniteHttpError { }
export declare class ServiceUnavailableError extends DefiniteHttpError { }
export declare class GatewayTimeoutError extends DefiniteHttpError { }
export declare class HttpVersionNotSupportedError extends DefiniteHttpError { }
export declare class VariantAlsoNegotiatesError extends DefiniteHttpError { }
export declare class InsufficientStorageError extends DefiniteHttpError { }
export declare class BandwidthLimitExceededError extends DefiniteHttpError { }
export declare class NotExtendedError extends DefiniteHttpError { }
export declare class NetworkAuthenticationRequiredError extends DefiniteHttpError { }
export declare class RestError extends DefiniteHttpError { }

export declare class PreconditionFailedError extends RestError { }
export declare class BadDigestError extends RestError { }
export declare class BadMethodError extends RestError { }
export declare class InternalError extends RestError { }
export declare class InvalidArgumentError extends RestError { }
export declare class InvalidContentError extends RestError { }
export declare class InvalidCredentialsError extends RestError { }
export declare class InvalidHeaderError extends RestError { }
export declare class InvalidVersionError extends RestError { }
export declare class MissingParameterError extends RestError { }
export declare class NotAuthorizedError extends RestError { }
export declare class RequestExpiredError extends RestError { }
export declare class RequestThrottledError extends RestError { }
export declare class ResourceNotFoundError extends RestError { }
export declare class WrongAcceptError extends RestError { }


export declare function acceptParser(parser: any): RequestHandler;
export declare function authorizationParser(): RequestHandler;
export declare function dateParser(skew?: number): RequestHandler;
export declare function queryParser(options?: Object): RequestHandler;
export declare function urlEncodedBodyParser(options?: Object): RequestHandler[];
export declare function jsonp(): RequestHandler;
export declare function gzipResponse(options?: Object): RequestHandler;
export declare function bodyParser(options?: Object): RequestHandler[];
export declare function requestLogger(options?: Object): RequestHandler;
export declare function serveStatic(options?: Object): RequestHandler;
export declare function throttle(options?: ThrottleOptions): RequestHandler;
export declare function conditionalRequest(): RequestHandler[];
export declare function auditLogger(options?: Object): Function;
export declare function fullResponse(): RequestHandler;
export declare var defaultResponseHeaders: any;
export declare var CORS: CORS;

export declare module pre {
    export function pause(): RequestHandler;
    export function sanitizePath(options?: any): RequestHandler;
    export function userAgentConnection(options?: any): RequestHandler;
}
