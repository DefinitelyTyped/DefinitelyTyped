export = Controller;
declare function Controller(): void;
declare class Controller {
    protected actions_: any;
    moduleFileName: string;
    private newResult_;
    ok(opt_content?: any): RouteResult;
    created(opt_content?: any): RouteResult;
    noContent(): RouteResult;
    notFound(opt_content?: any): RouteResult;
    forbidden(opt_content?: any): RouteResult;
    badRequest(opt_content?: any): RouteResult;
    notModified(): RouteResult;
    temporaryRedirect(url: string): RouteResult;
    permanentRedirect(url: string): RouteResult;
    runAction(
        action: string,
        parameters: any[],
        request: Request,
        response: Response
    ): RouteResult;
    hasAction(name: string): boolean;
}
declare namespace Controller {
    export { wrap, Response, Request };
}
import RouteResult = require('./RouteResult.js');
type Request = import('../http/Request');
type Response = import('../http/Response');
declare function wrap(object: any): Controller;
