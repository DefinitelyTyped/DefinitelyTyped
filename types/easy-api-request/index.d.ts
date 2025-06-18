/// <reference types="node" />

import stream = require("stream");
import http = require("http");
import request = require("request");
import Logger = require("bunyan");
import express = require("express");
import Q = require("q");

export declare function create(opts: {
    name: any;
    config: {
        url: string;
        internal?: boolean | undefined;
        headers?: string[] | undefined;
        cookies?: string[] | undefined;
        replyCookies?: string[] | undefined;
        jSend?: boolean | undefined;
        opts?: Object | undefined;
    };
}): void;

interface Result {
    response: http.IncomingMessage;
    body: any;
    err?: any;
    data?: any;
}
declare class BaseRequest {
    protected base: request.Request;
    protected req: express.Request;
    protected log: Logger;
    protected replyCookies: string[];
    protected jSend: boolean;
    constructor(opts: any);
    _parseOptions(args: IArguments, type: string): {
        opts: any;
        cb: any;
    };
    _do(args: IArguments, type?: string): any;
    _request(opts?: any, cb?: any): any;

    get(url?: any, opts?: any, cb?: any): any;
    post(url?: any, opts?: any, cb?: any): any;
    patch(url?: any, opts?: any, cb?: any): any;
    del(url?: any, opts?: any, cb?: any): any;
}

declare class StreamRequest extends BaseRequest {
    _request(opts: Object): stream.Stream;

    get(url: string, params: Object): stream.Stream;
    get(opts: Object): stream.Stream;
    get(url: string): stream.Stream;

    post(url: string, params: Object): stream.Stream;
    post(opts: Object): stream.Stream;
    post(url: string): stream.Stream;

    patch(url: string, params: Object): stream.Stream;
    patch(opts: Object): stream.Stream;
    patch(url: string): stream.Stream;

    del(url: string, params: Object): stream.Stream;
    del(opts: Object): stream.Stream;
    del(url: string): stream.Stream;
}

declare class CBPromiseRequest extends BaseRequest {
    _request(opts: Object): stream.Stream;

    get(url: string, params: Object, cb: (err?: any, resp?: Result) => void): void;
    get(url: string, cb: (err?: any, resp?: Result) => void): void;
    get(opts: Object, cb: (err?: any, resp?: Result) => void): void;
    get(url: string, params: Object): Q.Promise<Result>;
    get(opts: Object): Q.Promise<Result>;
    get(url: string): Q.Promise<Result>;

    post(url: string, params: Object, cb: (err?: any, resp?: Result) => void): void;
    post(url: string, cb: (err?: any, resp?: Result) => void): void;
    post(opts: Object, cb: (err?: any, resp?: Result) => void): void;
    post(url: string, params: Object): Q.Promise<Result>;
    post(opts: Object): Q.Promise<Result>;
    post(url: string): Q.Promise<Result>;

    patch(url: string, params: Object, cb: (err?: any, resp?: Result) => void): void;
    patch(url: string, cb: (err?: any, resp?: Result) => void): void;
    patch(opts: Object, cb: (err?: any, resp?: Result) => void): void;
    patch(url: string, params: Object): Q.Promise<Result>;
    patch(opts: Object): Q.Promise<Result>;
    patch(url: string): Q.Promise<Result>;

    del(url: string, params: Object, cb: (err?: any, resp?: Result) => void): void;
    del(url: string, cb: (err?: any, resp?: Result) => void): void;
    del(opts: Object, cb: (err?: any, resp?: Result) => void): void;
    del(url: string, params: Object): Q.Promise<Result>;
    del(opts: Object): Q.Promise<Result>;
    del(url: string): Q.Promise<Result>;
}

export interface RequestMaker {
    (): CBPromiseRequest;
    (stream: boolean): StreamRequest | CBPromiseRequest;
}
