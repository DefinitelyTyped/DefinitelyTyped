export = Controller;
declare function Controller(): void;
declare class Controller {
    protected actions_: any;
    moduleFileName: string;
    private newResult_;
    ok(content?: any): RouteResult;
    created(content?: any): RouteResult;
    noContent(): RouteResult;
    notFound(content?: any): RouteResult;
    forbidden(content?: any): RouteResult;
    badRequest(content?: any): RouteResult;
    notModified(): RouteResult;
    seeOther(url: string): RouteResult;
    temporaryRedirect(url: string): RouteResult;
    permanentRedirect(url: string): RouteResult;
    internalServerError(content?: any): RouteResult;
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
declare function wrap(object: any): Controller;
type Response = import('../http/Response');
type Request = import('../http/Request');
