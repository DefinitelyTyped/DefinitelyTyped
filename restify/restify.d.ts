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

    body?: any; //available when bodyParser plugin is used
  }

  interface Response extends http.ServerResponse {
    header: (key: string, value ?: any) => any;
    cache: (type?: any, options?: Object) => any;
    status: (code: number) => any;
    send: (status?: any, body?: any) => any;
    json: (status?: any, body?: any) => any;
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

    name: string;
    version: string;
    log: Object;
    acceptable: string[];
    url: string;
    address: () => addressInterface;
    listen(... args: any[]): any;
    close(... args: any[]): any;
    pre(routeCallBack: RequestHandler): any;

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

  export class ConflictError { constructor(message?: any); }
  export class InvalidArgumentError { constructor(message?: any); }
  export class RestError { constructor(message?: any); }
  export class BadDigestError { constructor(message: any); }
  export class BadMethodError { constructor(message: any); }
  export class BadRequestError { constructor(message: any); }
  export class InternalError { constructor(message: any); }
  export class InvalidContentError { constructor(message: any); }
  export class InvalidCredentialsError { constructor(message: any); }
  export class InvalidHeaderError { constructor(message: any); }
  export class InvalidVersionError { constructor(message: any); }
  export class MissingParameterError { constructor(message: any); }
  export class NotAuthorizedError { constructor(message: any); }
  export class RequestExpiredError { constructor(message: any); }
  export class RequestThrottledError { constructor(message: any); }
  export class ResourceNotFoundError { constructor(message: any); }
  export class WrongAcceptError { constructor(message: any); }

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
