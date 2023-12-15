export = request_debug;

import { CoreOptions, Headers, Request, RequestAPI, RequiredUriUrl, UriOptions, UrlOptions } from "request";

declare namespace request_debug {
    type LogPhase = "request" | "response" | "redirect" | "auth";

    interface RequestData {
        debugId: number;
        method: string;
        uri: string;
        headers: Headers;
        body?: any;
    }

    interface ResponseData {
        debugId: number;
        headers: Headers;
        statusCode: number;
        body?: any;
    }

    interface RedirectData {
        debugId: number;
        headers: Headers;
        statusCode: number;
        uri: string;
    }
    type LogData = RequestData | ResponseData | RedirectData;

    interface LogCallback<
        TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions extends RequiredUriUrl,
    > {
        (type: "request", data: RequestData, r: RequestAPI<TRequest, TOptions, TUriUrlOptions>): void;
    }
    interface LogCallback<
        TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions extends RequiredUriUrl,
    > {
        (type: "response", data: ResponseData, r: RequestAPI<TRequest, TOptions, TUriUrlOptions>): void;
    }
    interface LogCallback<
        TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions extends RequiredUriUrl,
    > {
        (type: "redirect" | "auth", data: RedirectData, r: RequestAPI<TRequest, TOptions, TUriUrlOptions>): void;
    }
    interface LogCallback<
        TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions extends RequiredUriUrl,
    > {
        (type: LogPhase, data: LogData, r: RequestAPI<TRequest, TOptions, TUriUrlOptions>): void;
    }

    const log: LogCallback<Request, CoreOptions, RequiredUriUrl>;
}

declare function request_debug<
    TRequest extends Request,
    TOptions extends CoreOptions,
    TUriUrlOptions extends RequiredUriUrl,
>(
    request: RequestAPI<TRequest, TOptions, TUriUrlOptions>,
    cb?: request_debug.LogCallback<TRequest, TOptions, TUriUrlOptions>,
): void;
