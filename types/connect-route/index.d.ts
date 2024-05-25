import { NextFunction, NextHandleFunction } from "connect";
import { IncomingMessage, ServerResponse } from "http";

declare namespace ConnectRoute {
    type IncomingMessageWithParams<T extends object = {}> = IncomingMessage & { route: string; params?: T };

    type SimpleHandleFunction<T extends object = {}> = (
        req: IncomingMessageWithParams<T>,
        res: ServerResponse,
    ) => void;

    type NextHandleFunction<T extends object = {}> = (
        req: IncomingMessageWithParams<T>,
        res: ServerResponse,
        next: NextFunction,
    ) => void;

    type ErrorHandleFunction<T extends object = {}> = (
        err: any,
        req: IncomingMessageWithParams<T>,
        res: ServerResponse,
        next: NextFunction,
    ) => void;

    type RouteHandlerFunction<T extends object = {}> =
        | ConnectRoute.SimpleHandleFunction<T>
        | ConnectRoute.NextHandleFunction<T>
        | ConnectRoute.ErrorHandleFunction<T>;

    type Route<T extends object = {}> = (route: string, handler: RouteHandlerFunction<T>) => void;

    type HttpMethod =
        | "GET"
        | "POST"
        | "PUT"
        | "HEAD"
        | "PATCH"
        | "DELETE"
        | "CONNECT"
        | "OPTIONS"
        | "TRACE"
        | "COPY"
        | "LOCK"
        | "MKCOL"
        | "MOVE"
        | "PROPFIND"
        | "PROPPATCH"
        | "UNLOCK"
        | "REPORT"
        | "MKACTIVITY"
        | "CHECKOUT"
        | "MERGE";

    interface ConnectRouter {
        add: (method: HttpMethod, route: string, handler: RouteHandlerFunction) => void;
        match: <T extends object = {}>(
            method: HttpMethod,
            url: string,
        ) => { handler?: NextHandleFunction<T>; route?: string; params: T };
        get: Route;
        post: Route;
        put: Route;
        head: Route;
        patch: Route;
        delete: Route;
        connect: Route;
        options: Route;
        trace: Route;
        copy: Route;
        lock: Route;
        mkcol: Route;
        move: Route;
        propfind: Route;
        proppatch: Route;
        unlock: Route;
        report: Route;
        mkactivity: Route;
        checkout: Route;
        merge: Route;
    }
}

declare function RouterMiddleware(fn: (router: ConnectRoute.ConnectRouter) => void): NextHandleFunction;

export = RouterMiddleware;
