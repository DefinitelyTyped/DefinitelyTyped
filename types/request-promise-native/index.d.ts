// Type definitions for request-promise-native 1.0
// Project: https://github.com/request/request-promise-native
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'request-promise-native' {
    import request = require('request');
    import http = require('http');

    namespace requestPromise {
        interface RequestPromise extends request.Request {
            then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult> | void): Promise<TResult>;
            catch(onrejected?: (reason: any) => any | PromiseLike<any> | void): Promise<any>;
            promise(): Promise<any>;
            cancel(): void;
        }

        interface RequestPromiseOptions extends request.CoreOptions {
            simple?: boolean;
            transform?(body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean): any;
            resolveWithFullResponse?: boolean;
        }

        type FullResponse = request.RequestResponse;
        type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
        type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
        type Options = OptionsWithUri | OptionsWithUrl;
    }

    let requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
    export = requestPromise;
}

declare module 'request-promise-native/errors' {
    import rp = require('request-promise-native');
    import http = require('http');

    interface RequestError extends Error {
        cause: any;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    interface RequestErrorConstructor {
        new(cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
        (cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
        prototype: RequestError;
    }
    const RequestError: RequestErrorConstructor;

    interface StatusCodeError extends Error {
        statusCode: number;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    interface StatusCodeErrorConstructor extends Error {
        new(statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
        (statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
        prototype: StatusCodeError;
    }
    const StatusCodeError: StatusCodeErrorConstructor;

    interface TransformError extends Error {
        cause: any;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    interface TransformErrorConstructor extends Error {
        new(cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
        (cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
        prototype: TransformError;
    }
    const TransformError: TransformErrorConstructor;
}
