import { type NextFunction, type NextHandleFunction } from "connect";
import * as connect from "connect";
import { type ServerResponse } from "http";

declare namespace ConnectRoute {
    class IncomingMessage extends connect.IncomingMessage {
        route: string;
        params?: any;
    }

    // type SimpleHandlerFunction = (
    //     req: IncomingMessage,
    //     res: ServerResponse,
    // ) => void;

    type NextHandlerFunction = (
        req: IncomingMessage,
        res: ServerResponse,
        next: NextFunction,
    ) => void;

    type ErrorHandlerFunction = (
        err: any,
        req: IncomingMessage,
        res: ServerResponse,
        next: NextFunction,
    ) => void;

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

    interface MatchResult {
        // handler?: SimpleHandlerFunction | NextHandlerFunction | ErrorHandlerFunction;
        handler?: NextHandlerFunction | ErrorHandlerFunction;
        route?: string;
        params: any;
    }

    interface ConnectRouter {
        // add(method: HttpMethod, route: string, handler: SimpleHandlerFunction): void;
        add(method: HttpMethod, route: string, handler: NextHandlerFunction): void;
        add(method: HttpMethod, route: string, handler: ErrorHandlerFunction): void;

        match(method: HttpMethod, url: string): MatchResult;

        // get(route: string, handler: SimpleHandlerFunction): void;
        get(route: string, handler: NextHandlerFunction): void;
        get(route: string, handler: ErrorHandlerFunction): void;

        // post(route: string, handler: SimpleHandlerFunction): void;
        post(route: string, handler: NextHandlerFunction): void;
        post(route: string, handler: ErrorHandlerFunction): void;

        // put(route: string, handler: SimpleHandlerFunction): void;
        put(route: string, handler: NextHandlerFunction): void;
        put(route: string, handler: ErrorHandlerFunction): void;

        // head(route: string, handler: SimpleHandlerFunction): void;
        head(route: string, handler: NextHandlerFunction): void;
        head(route: string, handler: ErrorHandlerFunction): void;

        // patch(route: string, handler: SimpleHandlerFunction): void;
        patch(route: string, handler: NextHandlerFunction): void;
        patch(route: string, handler: ErrorHandlerFunction): void;

        // delete(route: string, handler: SimpleHandlerFunction): void;
        delete(route: string, handler: NextHandlerFunction): void;
        delete(route: string, handler: ErrorHandlerFunction): void;

        // connect(route: string, handler: SimpleHandlerFunction): void;
        connect(route: string, handler: NextHandlerFunction): void;
        connect(route: string, handler: ErrorHandlerFunction): void;

        // options(route: string, handler: SimpleHandlerFunction): void;
        options(route: string, handler: NextHandlerFunction): void;
        options(route: string, handler: ErrorHandlerFunction): void;

        // trace(route: string, handler: SimpleHandlerFunction): void;
        trace(route: string, handler: NextHandlerFunction): void;
        trace(route: string, handler: ErrorHandlerFunction): void;

        // copy(route: string, handler: SimpleHandlerFunction): void;
        copy(route: string, handler: NextHandlerFunction): void;
        copy(route: string, handler: ErrorHandlerFunction): void;

        // lock(route: string, handler: SimpleHandlerFunction): void;
        lock(route: string, handler: NextHandlerFunction): void;
        lock(route: string, handler: ErrorHandlerFunction): void;

        // mkcol(route: string, handler: SimpleHandlerFunction): void;
        mkcol(route: string, handler: NextHandlerFunction): void;
        mkcol(route: string, handler: ErrorHandlerFunction): void;

        // move(route: string, handler: SimpleHandlerFunction): void;
        move(route: string, handler: NextHandlerFunction): void;
        move(route: string, handler: ErrorHandlerFunction): void;

        // propfind(route: string, handler: SimpleHandlerFunction): void;
        propfind(route: string, handler: NextHandlerFunction): void;
        propfind(route: string, handler: ErrorHandlerFunction): void;

        // proppatch(route: string, handler: SimpleHandlerFunction): void;
        proppatch(route: string, handler: NextHandlerFunction): void;
        proppatch(route: string, handler: ErrorHandlerFunction): void;

        // unlock(route: string, handler: SimpleHandlerFunction): void;
        unlock(route: string, handler: NextHandlerFunction): void;
        unlock(route: string, handler: ErrorHandlerFunction): void;

        // report(route: string, handler: SimpleHandlerFunction): void;
        report(route: string, handler: NextHandlerFunction): void;
        report(route: string, handler: ErrorHandlerFunction): void;

        // mkactivity(route: string, handler: SimpleHandlerFunction): void;
        mkactivity(route: string, handler: NextHandlerFunction): void;
        mkactivity(route: string, handler: ErrorHandlerFunction): void;

        // checkout(route: string, handler: SimpleHandlerFunction): void;
        checkout(route: string, handler: NextHandlerFunction): void;
        checkout(route: string, handler: ErrorHandlerFunction): void;

        // merge(route: string, handler: SimpleHandlerFunction): void;
        merge(route: string, handler: NextHandlerFunction): void;
        merge(route: string, handler: ErrorHandlerFunction): void;
    }
}

declare function RouterMiddleware(fn: (router: ConnectRoute.ConnectRouter) => void): NextHandleFunction;

export = RouterMiddleware;
