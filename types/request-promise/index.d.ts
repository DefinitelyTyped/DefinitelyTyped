// Type definitions for request-promise 4.1
// Project: https://github.com/request/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig>
//                 Joe Skeen <https://github.com/joeskeen>
//                 Aya Morisawa <https://github.com/AyaMorisawa>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Sergey Bakulin <https://github.com/vansergen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import request = require('request');
import http = require('http');
import errors = require('./errors');
import Promise = require('bluebird');

declare namespace requestPromise {
    interface RequestPromise<T = any> extends request.Request {
        then: Promise<T>['then'];
        catch: Promise<T>['catch'];
        finally: Promise<T>['finally'];
        cancel: Promise<T>['cancel'];
        promise(): Promise<T>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?(body: any, response: request.Response, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean;
        resolveWithFullResponse?: boolean;
    }

    type RequestPromiseAPI<T= any> = request.RequestAPI<RequestPromise<T>, RequestPromiseOptions, request.RequiredUriUrl>;
    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare const requestPromise: requestPromise.RequestPromiseAPI;
export = requestPromise;
