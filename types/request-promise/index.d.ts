// Type definitions for request-promise 4.1
// Project: https://github.com/request/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig>
//                 Joe Skeen <https://github.com/joeskeen>
//                 Aya Morisawa <https://github.com/AyaMorisawa>
//                 Matt R. Wilson <https://github.com/mastermatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import request = require('request');
import http = require('http');
import errors = require('./errors');
import Promise = require('bluebird');

declare namespace requestPromise {
    interface RequestPromise extends request.Request {
        then: Promise<any>["then"];
        catch: Promise<any>["catch"];
        finally: Promise<any>["finally"];
        cancel: Promise<any>["cancel"];
        promise(): Promise<any>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?(body: any, response: request.Response, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean;
        resolveWithFullResponse?: boolean;
    }

    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
