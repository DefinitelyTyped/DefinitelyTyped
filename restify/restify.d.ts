// Type definitions for node.js REST framework 2.0
// Project: https://github.com/mcavage/node-restify
// Definitions by: Bret Little <https://github.com/blittle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface addressInterface {
    port: number;
    family: string;
    address: string;
}

interface Request {
    header: (key: string, defaultValue?: string) => any;
    accepts: (type: string) => boolean;
    is: (type: string) => boolean;
    getLogger: (component: string) => any;
    contentLength: number;
    contentType: string;
    href: () => string;
    log: Object;
    id: string;
    path: () => string;
    query: string;
    secure: boolean;
    time: number;
    params: any;
}

interface Response {
    header: (key: string, value ?: any) => any;
    cache: (type?: any, options?: Object) => any;
    status: (code: number) => any;
    send: (status?: any, body?: any) => any;
    json: (status?: any, body?: any) => any;
    code: number;
    contentLength: number;
    charSet: string;
    contentType: string;
    headers: Object;
    statusCode: number;
    id: string;
}

interface Server {
    use: (... handler: any[]) => any;
    post: (route: any, routeCallBack: RequestHadler) => any;
    patch: (route: any, routeCallBack: RequestHadler) => any;
    put: (route: any, routeCallBack: RequestHadler) => any;
    del: (route: any, routeCallBack: RequestHadler) => any;
    get: (route: any, routeCallBack: RequestHadler) => any;
    head: (route: any, routeCallBack: RequestHadler) => any;
    on: (event: string, callback: Function) => any;
    name: string;
    version: string;
    log: Object;
    acceptable: string[];
    url: string;
    address: () => addressInterface;
    listen: (... args: any[]) => any;
    close: (... args: any[]) => any;
    pre: (routeCallBack: RequestHadler) => any;

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

interface RequestHadler {
    (req: Request, res: Response, next: Function): any;
}

declare module "restify" {
    export function createServer(options?: ServerOptions): Server;

    export function createJsonClient(options?: ClientOptions): Client;
    export function createStringClient(options?: ClientOptions): Client;
    export function createClient(options?: ClientOptions): HttpClient;

    export class ConflictError { constructor(message?: any); }
    export class InvalidArguementError { constructor(message?: any); }
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

    export function acceptParser(parser: any): RequestHadler;
    export function authorizationParser(): RequestHadler;
    export function dateParser(skew?: number): RequestHadler;
    export function queryParser(options?: Object): RequestHadler;
    export function urlEncodedBodyParser(options?: Object): RequestHadler[];
    export function jsonp(): RequestHadler;
    export function gzipResponse(options?: Object): RequestHadler;
    export function bodyParser(options?: Object): RequestHadler[];
    export function requestLogger(options?: Object): RequestHadler;
    export function serveStatic(options?: Object): RequestHadler;
    export function throttle(options?: ThrottleOptions): RequestHadler;
    export function conditionalRequest(): RequestHadler[];
    export function auditLogger(options?: Object): Function;
    export function fullResponse(): RequestHadler;
    export var defaultResponseHeaders : any;
}
