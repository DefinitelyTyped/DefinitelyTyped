// Type definitions for request-promise v4.1.0
// Project: https://github.com/request/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'request-promise' {
    import request = require('request');
    import http = require('http');
    import errors = require('request-promise/errors');
    import Promise = require('bluebird');

    namespace requestPromise {
        interface RequestPromise extends request.Request {
            then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
            then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;
            catch(onrejected?: (reason: any) => any | PromiseLike<any>): Promise<any>;
            catch(onrejected?: (reason: any) => void): Promise<any>;
            catch(type: errors.RequestErrorConstructor, onrejected?: (reason: errors.RequestError) => void): Promise<any>;
            catch(type: errors.StatusCodeErrorConstructor, onrejected?: (reason: errors.StatusCodeError) => void): Promise<any>;
            catch(type: errors.TransformErrorConstructor, onrejected?: (reason: errors.TransformError) => void): Promise<any>;
            finally<TResult>(handler: () => PromiseLike<TResult>): Promise<any>;
            finally<TResult>(handler: () => TResult): Promise<any>;
            promise(): Promise<any>;
            cancel(): void;
        }

        interface RequestPromiseOptions extends request.CoreOptions {
            simple?: boolean;
            transform?: (body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean) => any;
            transform2xxOnly?: boolean;
            resolveWithFullResponse?: boolean;
        }

        export type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
        export type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
        export type Options = OptionsWithUri | OptionsWithUrl;
    }

    var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
	export = requestPromise;
}
declare module 'request-promise/errors' {
    import rp = require('request-promise');
    import http = require('http');

    export interface RequestError extends Error {
        cause: any;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    export interface RequestErrorConstructor {
        new (cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
        (cause: any, options: rp.Options, response: http.IncomingMessage): RequestError;
        prototype: RequestError;
    }
    export const RequestError: RequestErrorConstructor;

    export interface StatusCodeError extends Error {
        statusCode: number;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    export interface StatusCodeErrorConstructor extends Error {
        new (statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
        (statusCode: number, body: any, options: rp.Options, response: http.IncomingMessage): StatusCodeError;
        prototype: StatusCodeError;
    }
    export const StatusCodeError: StatusCodeErrorConstructor;

    export interface TransformError extends Error {
        cause: any;
        error: any;
        options: rp.Options;
        response: http.IncomingMessage;
    }
    export interface TransformErrorConstructor extends Error {
        new (cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
        (cause: any, options: rp.Options, response: http.IncomingMessage): TransformError;
        prototype: TransformError;
    }
    export const TransformError: TransformErrorConstructor;
}
