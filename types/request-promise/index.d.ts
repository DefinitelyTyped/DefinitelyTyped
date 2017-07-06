// Type definitions for request-promise 4.1
// Project: https://github.com/request/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import request = require('request');
import http = require('http');
import errors = require('request-promise/errors');
import Promise = require('bluebird');

declare namespace requestPromise {
    interface RequestPromise extends request.Request {
        then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void | TResult | PromiseLike<TResult>): Promise<TResult>;
        catch(onrejected?: (reason: any) => any | PromiseLike<any>): Promise<any>;
        catch(type: errors.RequestErrorConstructor, onrejected?: (reason: errors.RequestError) => void): Promise<any>;
        catch(type: errors.StatusCodeErrorConstructor, onrejected?: (reason: errors.StatusCodeError) => void): Promise<any>;
        catch(type: errors.TransformErrorConstructor, onrejected?: (reason: errors.TransformError) => void): Promise<any>;
        finally<TResult>(handler: () => TResult | PromiseLike<TResult>): Promise<any>;
        promise(): Promise<any>;
        cancel(): void;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?(body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean;
        resolveWithFullResponse?: boolean;
    }

    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
