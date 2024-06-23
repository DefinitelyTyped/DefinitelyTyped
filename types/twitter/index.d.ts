/// <reference types="node" />

import request = require("request");
import { EventEmitter } from "events";

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
        method: "user" | "site" | string,
        params: { [key: string]: any },
        callback: (stream: EventEmitter) => void,
    ): void;
    stream(method: "user" | "site" | string, callback: (stream: EventEmitter) => void): void;
    stream(method: "user" | "site" | string, params?: { [key: string]: any }): EventEmitter;
}

declare namespace Twitter {
    interface Options {
        consumer_key: string;
        consumer_secret: string;
        rest_base?: string | undefined;
        stream_base?: string | undefined;
        user_stream_base?: string | undefined;
        site_stream_base?: string | undefined;
        media_base?: string | undefined;
        request_options?: request.CoreOptions | undefined;
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
        base?: string | undefined;
    }

    interface ResponseData {
        [key: string]: any;
    }
}
