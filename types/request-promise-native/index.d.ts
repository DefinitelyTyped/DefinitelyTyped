// Type definitions for request-promise-native 1.0
// Project: https://github.com/request/request-promise-native
// Definitions by: Gustavo Henke <https://github.com/gustavohenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import request = require('request');
import http = require('http');

declare namespace requestPromise {
    interface RequestPromise extends request.Request, Promise<any> {
        promise(): Promise<any>;
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

declare const requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
