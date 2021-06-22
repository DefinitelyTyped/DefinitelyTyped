// Type definitions for requestretry 1.12
// Project: https://github.com/FGRibreau/node-request-retry
// Definitions by:     Eric Byers <https://github.com/EricByers>
//                                    Andrew Throener <https://github.com/trainerbill>
//                                     Aniket Patel <https://github.com/baaka-ani>
//                                      Aram Elchyan <https://github.com/elch-yan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import request = require('request');
import http = require('http');

declare namespace requestretry {
    type RetryStrategy = (err: Error, response: http.IncomingMessage, body: any) => boolean;
    type DelayStrategy = (err: Error, response: http.IncomingMessage, body: any) => number;
    interface RequestPromise extends request.Request {
        then: Promise<any>["then"];
        catch: Promise<any>["catch"];
        promise(): Promise<any>;
    }
    interface RetryRequestAPI extends request.RequestAPI<RequestPromise, RequestRetryOptions, request.RequiredUriUrl> {
        RetryStrategies: {
            'HttpError': RetryStrategy;
            'HTTPOrNetworkError': RetryStrategy;
            'NetworkError': RetryStrategy;
        };
    }

    interface RequestRetryOptions extends request.CoreOptions {
        maxAttempts?: number;
        promiseFactory?(resolver: any): any;
        retryDelay?: number;
        retryStrategy?: RetryStrategy;
        delayStrategy?: DelayStrategy;
        fullResponse?: boolean;
    }
}

declare let requestretry: requestretry.RetryRequestAPI;
export = requestretry;
