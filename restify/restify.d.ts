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
