// Type definitions for twitter 1.7
// Project: https://github.com/desmondmorris/node-twitter
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import request = require('request');
import { EventEmitter } from 'events';

export = Twitter;

declare class Twitter {
    readonly VERSION: string;
    readonly allow_promise: boolean;
    readonly request: typeof request;

    constructor(options: Twitter.AccessTokenOptions | Twitter.BearerTokenOptions);

    get(path: string, params: Twitter.RequestParams, callback: Twitter.Callback): void;
    get(path: string, callback: Twitter.Callback): void;
    get(path: string, params?: Twitter.RequestParams): Promise<Twitter.ResponseData>;

    post(path: string, params: Twitter.RequestParams, callback: Twitter.Callback): void;
    post(path: string, callback: Twitter.Callback): void;
    post(path: string, params?: Twitter.RequestParams): Promise<Twitter.ResponseData>;

    stream(
        method: 'user' | 'site' | string,
        params: { [key: string]: any },
        callback: (stream: EventEmitter) => void
    ): void;
    stream(method: 'user' | 'site' | string, callback: (stream: EventEmitter) => void): void;
    stream(method: 'user' | 'site' | string, params?: { [key: string]: any }): EventEmitter;
}

declare namespace Twitter {
    interface Options {
        consumer_key: string;
        consumer_secret: string;
        rest_base?: string;
        stream_base?: string;
        user_stream_base?: string;
        site_stream_base?: string;
        media_base?: string;
        request_options?: request.CoreOptions;
    }

    interface AccessTokenOptions extends Options {
        access_token_key: string;
        access_token_secret: string;
    }

    interface BearerTokenOptions extends Options {
        bearer_token: string;
    }

    type Callback = (error: any, data: ResponseData, response: request.Response) => void;

    interface RequestParams {
        [key: string]: any;
        base?: string;
    }

    interface ResponseData {
        [key: string]: any;
    }
}
