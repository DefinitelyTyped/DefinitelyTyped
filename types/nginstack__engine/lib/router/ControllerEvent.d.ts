export = ControllerEvent;
declare function ControllerEvent(...args: any[]): void;
declare class ControllerEvent {
    constructor(...args: any[]);
    action: string;
    controller: Controller;
    request: Request;
    response: Response;
    result: RouteResult;
}
declare namespace ControllerEvent {
    export { Response, Request, Controller, RouteResult };
}
type Response = import('../http/Response');
type Request = import('../http/Request');
type Controller = import('./Controller');
type RouteResult = import('./RouteResult');
