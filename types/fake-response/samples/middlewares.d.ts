import { Middleware } from "../model";
export declare const commonMiddleware: ({ next }: {
    next: any;
}) => void;
export declare const globalDescription: ({ res, globals }: {
    res: any;
    globals: any;
}) => void;
export declare const override: Middleware;
export declare const responseSequence: Middleware;
export declare const setResponseToGlobal: Middleware;
export declare const getSharedResponse: Middleware;
export declare const getJsonData: Middleware;
export declare const getInjectedData: Middleware;
export declare const queryUser: Middleware;
