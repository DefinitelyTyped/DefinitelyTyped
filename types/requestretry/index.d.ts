/// <reference types="node" />

import request = require("request");
import http = require("http");

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
            "HttpError": RetryStrategy;
            "HTTPOrNetworkError": RetryStrategy;
            "NetworkError": RetryStrategy;
        };
    }

    interface RequestRetryOptions extends request.CoreOptions {
        maxAttempts?: number | undefined;
        promiseFactory?(resolver: any): any;
        retryDelay?: number | undefined;
        retryStrategy?: RetryStrategy | undefined;
        delayStrategy?: DelayStrategy | undefined;
        fullResponse?: boolean | undefined;
        skipHeaderSanitize?: boolean | undefined;
    }
}

declare let requestretry: requestretry.RetryRequestAPI;
export = requestretry;
