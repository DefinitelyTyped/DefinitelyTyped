// Type definitions for got 8.3
// Project: https://github.com/sindresorhus/got#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Konstantin Ikonnikov <https://github.com/ikokostya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import { Url, URL } from 'url';
import * as http from 'http';
import * as https from 'https';
import * as nodeStream from 'stream';

export = got;

declare class RequestError extends StdError {
    name: 'RequestError';
}

declare class ReadError extends StdError {
    name: 'ReadError';
}

declare class ParseError extends StdError {
    name: 'ParseError';
    statusCode: number;
    statusMessage: string;
}

declare class HTTPError extends StdError {
    name: 'HTTPError';
    statusCode: number;
    statusMessage: string;
    headers: http.IncomingHttpHeaders;
}

declare class MaxRedirectsError extends StdError {
    name: 'MaxRedirectsError';
    statusCode: number;
    statusMessage: string;
    redirectUrls: string[];
}

declare class UnsupportedProtocolError extends StdError {
    name: 'UnsupportedProtocolError';
}

declare class CancelError extends StdError {
    name: 'CancelError';
}

declare class StdError extends Error {
    code?: string;
    host?: string;
    hostname?: string;
    method?: string;
    path?: string;
    protocol?: string;
    url?: string;
    response?: any;
}

declare const got: got.GotFn &
    Record<'get' | 'post' | 'put' | 'patch' | 'head' | 'delete', got.GotFn> &
    {
        stream: got.GotStreamFn & Record<'get' | 'post' | 'put' | 'patch' | 'head' | 'delete', got.GotStreamFn>;
        RequestError: typeof RequestError;
        ReadError: typeof ReadError;
        ParseError: typeof ParseError;
        HTTPError: typeof HTTPError;
        MaxRedirectsError: typeof MaxRedirectsError;
        UnsupportedProtocolError: typeof UnsupportedProtocolError;
        CancelError: typeof CancelError;
    };

interface InternalRequestOptions extends http.RequestOptions {
    // Redeclare options with `any` type for allow specify types incompatible with http.RequestOptions.
    timeout?: any;
    agent?: any;
}

declare namespace got {
    interface GotFn {
        (url: GotUrl): GotPromise<string>;
        (url: GotUrl, options: GotJSONOptions): GotPromise<any>;
        (url: GotUrl, options: GotFormOptions<string>): GotPromise<string>;
        (url: GotUrl, options: GotFormOptions<null>): GotPromise<Buffer>;
        (url: GotUrl, options: GotBodyOptions<string>): GotPromise<string>;
        (url: GotUrl, options: GotBodyOptions<null>): GotPromise<Buffer>;
    }

    type GotStreamFn = (url: GotUrl, options?: GotOptions<string | null>) => GotEmitter & nodeStream.Duplex;

    type GotUrl = string | http.RequestOptions | Url | URL;

    interface GotBodyOptions<E extends string | null> extends GotOptions<E> {
        body?: string | Buffer | nodeStream.Readable;
    }

    interface GotJSONOptions extends GotOptions<string | null> {
        body?: object;
        form?: boolean;
        json: true;
    }

    interface GotFormOptions<E extends string | null> extends GotOptions<E> {
        body?: {[key: string]: any};
        form: true;
        json?: boolean;
    }

    interface GotOptions<E extends string | null> extends InternalRequestOptions {
        encoding?: E;
        query?: string | object;
        timeout?: number | TimeoutOptions;
        retries?: number | RetryFunction;
        followRedirect?: boolean;
        decompress?: boolean;
        useElectronNet?: boolean;
        cache?: Cache;
        agent?: http.Agent | boolean | AgentOptions;
        throwHttpErrors?: boolean;
    }

    interface TimeoutOptions {
        connect?: number;
        socket?: number;
        request?: number;
    }

    interface AgentOptions {
        http: http.Agent;
        https: https.Agent;
    }

    type RetryFunction = (retry: number, error: any) => number;

    interface Cache {
        set(key: string, value: any, ttl?: number): any;
        get(key: string): any;
        delete(key: string): any;
    }

    interface Response<B extends Buffer | string | object> extends http.IncomingMessage {
        body: B;
        url: string;
        requestUrl: string;
        fromCache: boolean;
        redirectUrls?: string[];
    }

    type GotPromise<B extends Buffer | string | object> = Promise<Response<B>> & { cancel(): void };

    interface GotEmitter {
        addListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        addListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        addListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        addListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        addListener(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        addListener(event: 'uploadProgress', listener: (progress: Progress) => void): this;

        on(event: 'request', listener: (req: http.ClientRequest) => void): this;
        on(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        on(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        on(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        on(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        on(event: 'uploadProgress', listener: (progress: Progress) => void): this;

        once(event: 'request', listener: (req: http.ClientRequest) => void): this;
        once(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        once(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        once(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        once(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        once(event: 'uploadProgress', listener: (progress: Progress) => void): this;

        prependListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        prependListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        prependListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        prependListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        prependListener(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        prependListener(event: 'uploadProgress', listener: (progress: Progress) => void): this;

        prependOnceListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        prependOnceListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        prependOnceListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        prependOnceListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        prependOnceListener(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        prependOnceListener(event: 'uploadProgress', listener: (progress: Progress) => void): this;

        removeListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        removeListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        removeListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotOptions<string | null> & Url) => void): this;
        removeListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
        removeListener(event: 'downloadProgress', listener: (progress: Progress) => void): this;
        removeListener(event: 'uploadProgress', listener: (progress: Progress) => void): this;
    }

    type GotError = RequestError | ReadError | ParseError | HTTPError | MaxRedirectsError | UnsupportedProtocolError | CancelError;

    interface Progress {
        percent: number;
        transferred: number;
        total: number | null;
    }
}
