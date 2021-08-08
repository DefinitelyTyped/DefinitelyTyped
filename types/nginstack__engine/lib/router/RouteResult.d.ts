export = RouteResult;
declare function RouteResult(opt_base: RouteResult): import('./RouteResult.js');
declare class RouteResult {
    constructor(opt_base: RouteResult);
    base_: any;
    private logger_;
    private status_;
    private content_;
    private contentType_;
    private charset_;
    private headers_;
    private allHeaders_;
    getInheritedProperty_(name: string): any;
    withStatus(status: Status | number): RouteResult;
    status: Status | number;
    withContent(content: any): RouteResult;
    content: any;
    as(contentType: MediaType | null): RouteResult;
    contentType: MediaType;
    withCharset(charset: string): RouteResult;
    charset: string;
    withHeader(name: string, value: string): RouteResult;
    withHeaders(headers: any): RouteResult;
    headers: any;
    send(
        response: Response,
        opt_options?: {
            onlyHeader?: boolean;
            debug?: boolean;
        }
    ): void;
}
declare namespace RouteResult {
    export {
        transform,
        MAX_BASE_CHAIN,
        transformers_,
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
type Response = import('../http/Response');
declare function transform(result: RouteResult, request: Request): RouteResult;
declare var MAX_BASE_CHAIN: number;
declare var transformers_: Array<(arg0: RouteResult) => RouteResult>;
declare function addTransformer(
    transformer: (arg0: RouteResult, arg1: any) => RouteResult | any[]
): void;
declare function removeAllTransformers(): void;
type Request = import('../http/Request');
