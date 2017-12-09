import {Lifecycle, Request, ResponseToolkit} from "hapi";

const handler: Lifecycle.Method = function(request: Request, h: ResponseToolkit) {
    return 'success';
}

const strictHandler: Lifecycle.Method = function(request: Request, h: ResponseToolkit) {
    return 123;
}
