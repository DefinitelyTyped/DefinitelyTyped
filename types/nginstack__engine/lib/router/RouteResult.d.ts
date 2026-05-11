export = RouteResult;
declare function RouteResult(opt_base: RouteResult): import('./RouteResult.js');
declare class RouteResult {
    constructor(opt_base: RouteResult);
    private base_;
    private logger_;
    private status_;
    private content_;
    private contentType_;
    private charset_;
    private headers_;
    private allHeaders_;
    private getInheritedProperty_;
    withStatus(status: Status | number): RouteResult;
    status: Status | number;
    withContent(content: any): RouteResult;
    content: any;
    as(contentType: MediaType | null): RouteResult;
    contentType: MediaType;
    withCharset(charset: string | null): RouteResult;
    charset: string | null;
    withHeader(name: string, value: string): RouteResult;
    withHeaders(headers: any): RouteResult;
    headers: any;
    send(
        response: Response,
        options?: {
            onlyHeaders?: boolean;
            debug?: boolean;
        }
    ): void;
}
declare namespace RouteResult {
    export {
        transform,
        MAX_BASE_CHAIN,
        addTransformer,
        addTransformer as addTransform,
        removeAllTransformers,
        removeAllTransformers as removeAllTransforms,
        Response,
        Request,
    };
}
import Status = require('../http/Status.js');
import MediaType = require('../http/MediaType.js');
declare function transform(result: RouteResult, request: Request): RouteResult;
declare let MAX_BASE_CHAIN: number;
declare function addTransformer(
    transformer: (arg0: RouteResult, arg1: Request) => RouteResult | any[]
): void;
declare function removeAllTransformers(): void;
type Response = import('../http/Response');
type Request = import('../http/Request');
