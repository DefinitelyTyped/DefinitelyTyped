// Type definitions for easy-api-request
// Project: https://github.com/DeadAlready/easy-api-request
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../request/request.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />
/// <reference path="../express/express.d.ts" />

declare module "easy-api-request" {
    import stream = require('stream');
    import http = require('http');
    import request = require('request');
    import bunyan = require('bunyan');
    import express = require('express');

    export function create(opts: {
        name: any;
        config: {
            url: string;
            internal?: boolean;
            headers?: string[];
            cookies?: string[];
            replyCookies?: string[];
            jSend?: boolean;
            opts?: Object;
        };
    }): void;

    import Q = require('q');
    interface Result {
        response: http.IncomingMessage;
        body: any;
        err?: any;
        data?: any;
    }
    class BaseRequest {
        protected base: request.Request;
        protected req: express.Request;
        protected log: bunyan.Logger;
        protected replyCookies: string[];
        protected jSend: boolean;
        constructor(opts: any);
        _parseOptions(args: IArguments, type: string): {
            opts: any;
            cb: any;
        };
        _do(args: IArguments, type?: string): any;
        _request(opts?: any, cb?:any): any;

        get(url?: any, opts?: any, cb?: any): any;
        post(url?: any, opts?: any, cb?: any): any;
        patch(url?: any, opts?: any, cb?: any): any;
        del(url?: any, opts?: any, cb?: any): any;
    }

    class StreamRequest extends BaseRequest {
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

    class CBPromiseRequest extends BaseRequest {
        _request(opts: Object): stream.Stream;

        get(url: string, params: Object, cb:(err?:any, resp?: Result) => void): void;
        get(url: string, cb:(err?:any, resp?: Result) => void): void;
        get(opts: Object, cb:(err?:any, resp?: Result) => void): void;
        get(url: string, params: Object): Q.Promise<Result>;
        get(opts: Object): Q.Promise<Result>;
        get(url: string): Q.Promise<Result>;

        post(url: string, params: Object, cb:(err?:any, resp?: Result) => void): void;
        post(url: string, cb:(err?:any, resp?: Result) => void): void;
        post(opts: Object, cb:(err?:any, resp?: Result) => void): void;
        post(url: string, params: Object): Q.Promise<Result>;
        post(opts: Object): Q.Promise<Result>;
        post(url: string): Q.Promise<Result>;

        patch(url: string, params: Object, cb:(err?:any, resp?: Result) => void): void;
        patch(url: string, cb:(err?:any, resp?: Result) => void): void;
        patch(opts: Object, cb:(err?:any, resp?: Result) => void): void;
        patch(url: string, params: Object): Q.Promise<Result>;
        patch(opts: Object): Q.Promise<Result>;
        patch(url: string): Q.Promise<Result>;

        del(url: string, params: Object, cb:(err?:any, resp?: Result) => void): void;
        del(url: string, cb:(err?:any, resp?: Result) => void): void;
        del(opts: Object, cb:(err?:any, resp?: Result) => void): void;
        del(url: string, params: Object): Q.Promise<Result>;
        del(opts: Object): Q.Promise<Result>;
        del(url: string): Q.Promise<Result>;
    }

    export interface RequestMaker {
        (): CBPromiseRequest;
        (stream: boolean): StreamRequest | CBPromiseRequest;
    }
}
