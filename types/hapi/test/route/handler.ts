import { Lifecycle, Request, ResponseToolkit } from "hapi";

const handler: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    return 'success';
};

const strictHandler: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    return 123;
};
