interface Server {
    use: (... handler: any[]) => any;
    post: (route: any, routeCallBack: (req: any, res: any, next: any) => any) => any;
    put: (route: any, routeCallBack: (req: any, res: any, next: any) => any) => any;
    del: (route: any, routeCallBack: (req: any, res: any, next: any) => any) => any;
    get: (route: any, routeCallBack: (req: any, res: any, next: any) => any) => any;
    head: (route: any, routeCallBack: (req: any, res: any, next: any) => any) => any;
}

interface ServerOptions {
    certificate ?: string;
    key ?: string;
    formatters ?: Object;
    log ?: Object;
    name ?: string;
    spdy ?: Object;
    version ?: string;
    responseTimerHeader ?: string;
    responseTimeFormatter ?: (durationInMilliseconds: number) => any;
}

declare module "restify" {
    export function createServer(options: ServerOptions): Server;
    export class ConflictError { new(message: any): ConflictError; };
    export class InvalidArguementError { new(message: any): InvalidArguementError; };
    export class RestError { new(message: any): RestError; };
    export class BadDigestError { new(message: any): BadDigestError; };
    export class BadMethodError { new(message: any): BadMethodError; };
    export class InternalError { new(message: any): InternalError; };
    export class InvalidContentError { new(message: any): InvalidContentError; };
    export class InvalidCredentialsError { new(message: any): InvalidCredentialsError; };
    export class InvalidHeaderError { new(message: any): InvalidHeaderError; };
    export class InvalidVersionError { new(message: any): InvalidVersionError; };
    export class MissingParameterError { new(message: any): MissingParameterError; };
    export class NotAuthorizedError { new(message: any): NotAuthorizedError; };
    export class RequestExpiredError { new(message: any): RequestExpiredError; };
    export class RequestThrottledError { new(message: any): RequestThrottledError; };
    export class ResourceNotFoundError { new(message: any): ResourceNotFoundError; };
    export class WrongAcceptError { new(message: any): WrongAcceptError; };
}
