// Type definitions for request-promise-native 1.0
// Project: https://github.com/request/request-promise-native
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
//                 Matt R. Wilson <https://github.com/mastermatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import request = require('request');
import http = require('http');

declare namespace requestPromise {
    interface RequestPromise<T = any> extends request.Request {
        then: Promise<T>["then"];
        catch: Promise<T>["catch"];
        promise(): Promise<T>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?(body: any, response: request.Response, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean;
        resolveWithFullResponse?: boolean;
    }

    type FullResponse = request.Response;
    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare const requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
