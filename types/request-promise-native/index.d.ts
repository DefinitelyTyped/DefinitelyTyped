// Type definitions for request-promise-native 1.0
// Project: https://github.com/request/request-promise-native
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import request = require('request');
import http = require('http');

declare namespace requestPromise {
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

declare var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
