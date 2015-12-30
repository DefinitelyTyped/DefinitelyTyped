// Type definitions for node.js REST framework 2.0
// Project: https://github.com/mcavage/node-restify
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />

declare module "restify" {
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
    header: (key: string, value ?: any) => any;
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

  interface Server extends http.Server {
    use(handler: RequestHandler, ...handlers: RequestHandler[]): any;
    use(handler: RequestHandler[], ...handlers: RequestHandler[]): any;
    use(handler: RequestHandler, ...handlers: RequestHandler[][]): any;
    use(handler: RequestHandler[], ...handlers: RequestHandler[][]): any;

    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    post(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    post(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    patch(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    patch(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    put(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    put(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    del(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    del(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    get(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    get(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    head(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    head(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;

    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]): any;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]): any;
    opts(route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]): any;
    opts(route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]): any;
	
    name: string;
    version: string;
    log: Object;
    acceptable: string[];
    url: string;
    address: () => addressInterface;
    listen(... args: any[]): any;
    close(... args: any[]): any;
    pre(routeCallBack: RequestHandler): any;
    server: http.Server;

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
    head: (path?:any, callback?: Function) => any;
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

  export function createServer(options?: ServerOptions): Server;

  export function createJsonClient(options?: ClientOptions): Client;
  export function createStringClient(options?: ClientOptions): Client;
  export function createClient(options?: ClientOptions): HttpClient;

  export class HttpError { constructor(cause: any, message?: any); }

  class DefiniteHttpError {
    constructor(message?: any);
    constructor(cause: any, message?: any);
  }

  export class BadRequestError extends DefiniteHttpError {}
  export class UnauthorizedError extends DefiniteHttpError {}
  export class PaymentRequiredError extends DefiniteHttpError {}
  export class ForbiddenError extends DefiniteHttpError {}
  export class NotFoundError extends DefiniteHttpError {}
  export class MethodNotAllowedError extends DefiniteHttpError {}
  export class NotAcceptableError extends DefiniteHttpError {}
  export class ProxyAuthenticationRequiredError extends DefiniteHttpError {}
  export class RequestTimeoutError extends DefiniteHttpError {}
  export class ConflictError extends DefiniteHttpError {}
  export class GoneError extends DefiniteHttpError {}
  export class LengthRequiredError extends DefiniteHttpError {}
  export class RequestEntityTooLargeError extends DefiniteHttpError {}
  export class RequesturiTooLargeError extends DefiniteHttpError {}
  export class UnsupportedMediaTypeError extends DefiniteHttpError {}
  export class RequestedRangeNotSatisfiableError extends DefiniteHttpError {}
  export class ExpectationFailedError extends DefiniteHttpError {}
  export class ImATeapotError extends DefiniteHttpError {}
  export class UnprocessableEntityError extends DefiniteHttpError {}
  export class LockedError extends DefiniteHttpError {}
  export class FailedDependencyError extends DefiniteHttpError {}
  export class UnorderedCollectionError extends DefiniteHttpError {}
  export class UpgradeRequiredError extends DefiniteHttpError {}
  export class PreconditionRequiredError extends DefiniteHttpError {}
  export class TooManyRequestsError extends DefiniteHttpError {}
  export class RequestHeaderFieldsTooLargeError extends DefiniteHttpError {}
  export class InternalServerError extends DefiniteHttpError {}
  export class NotImplementedError extends DefiniteHttpError {}
  export class BadGatewayError extends DefiniteHttpError {}
  export class ServiceUnavailableError extends DefiniteHttpError {}
  export class GatewayTimeoutError extends DefiniteHttpError {}
  export class HttpVersionNotSupportedError extends DefiniteHttpError {}
  export class VariantAlsoNegotiatesError extends DefiniteHttpError {}
  export class InsufficientStorageError extends DefiniteHttpError {}
  export class BandwidthLimitExceededError extends DefiniteHttpError {}
  export class NotExtendedError extends DefiniteHttpError {}
  export class NetworkAuthenticationRequiredError extends DefiniteHttpError {}
  export class RestError extends DefiniteHttpError {}

  export class PreconditionFailedError extends RestError {}
  export class BadDigestError extends RestError {}
  export class BadMethodError extends RestError {}
  export class InternalError extends RestError {}
  export class InvalidArgumentError extends RestError {}
  export class InvalidContentError extends RestError {}
  export class InvalidCredentialsError extends RestError {}
  export class InvalidHeaderError extends RestError {}
  export class InvalidVersionError extends RestError {}
  export class MissingParameterError extends RestError {}
  export class NotAuthorizedError extends RestError {}
  export class RequestExpiredError extends RestError {}
  export class RequestThrottledError extends RestError {}
  export class ResourceNotFoundError extends RestError {}
  export class WrongAcceptError extends RestError {}


  export function acceptParser(parser: any): RequestHandler;
  export function authorizationParser(): RequestHandler;
  export function dateParser(skew?: number): RequestHandler;
  export function queryParser(options?: Object): RequestHandler;
  export function urlEncodedBodyParser(options?: Object): RequestHandler[];
  export function jsonp(): RequestHandler;
  export function gzipResponse(options?: Object): RequestHandler;
  export function bodyParser(options?: Object): RequestHandler[];
  export function requestLogger(options?: Object): RequestHandler;
  export function serveStatic(options?: Object): RequestHandler;
  export function throttle(options?: ThrottleOptions): RequestHandler;
  export function conditionalRequest(): RequestHandler[];
  export function auditLogger(options?: Object): Function;
  export function fullResponse(): RequestHandler;
  export var defaultResponseHeaders : any;
  export var CORS: CORS;

  export module pre {
      export function pause(): RequestHandler;
      export function sanitizePath(options?: any): RequestHandler;
      export function userAgentConnection(options?: any): RequestHandler;
  }
}
