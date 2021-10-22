export = ControllerEvent;
declare function ControllerEvent(...args: any[]): void;
declare class ControllerEvent {
    constructor(...args: any[]);
    action: string;
    controller: any;
    request: Request;
    response: Response;
    result: any;
}
declare namespace ControllerEvent {
    export { Response, Request };
}
type Request = import('../http/Request');
type Response = import('../http/Response');
