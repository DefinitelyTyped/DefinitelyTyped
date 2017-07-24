// Type definitions for got 7.1
// Project: https://github.com/sindresorhus/got#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import * as http from 'http';
import * as nodeStream from 'stream';

export = got;

// tslint:disable unified-signatures
declare function got(url: got.GotUrl): got.GotPromise<string>;
declare function got(url: got.GotUrl, options: got.GotJSONOptions & http.RequestOptions): got.GotPromise<object>;
declare function got(url: got.GotUrl, options: got.GotFormOptions<string> & http.RequestOptions): got.GotPromise<string>;
declare function got(url: got.GotUrl, options: got.GotFormOptions<null> & http.RequestOptions): got.GotPromise<Buffer>;
declare function got(url: got.GotUrl, options: got.GotBodyOptions<string> & http.RequestOptions): got.GotPromise<string>;
declare function got(url: got.GotUrl, options: got.GotBodyOptions<null> & http.RequestOptions): got.GotPromise<Buffer>;
// tslint:enable unified-signatures

declare namespace got {
    const get: GotFn;
    const post: GotFn;
    const put: GotFn;
    const patch: GotFn;
    const head: GotFn;
    // TODO: no way to export delete() here which is a keyword without losing the ability to use a namespace that allows exporting more interfaces
    // const delete: GotCall;

    const stream: GotStreamFn & Record<'get' | 'post' | 'put' | 'patch' | 'head' | 'delete', GotStreamFn>;

    // tslint:disable unified-signatures
    interface GotFn {
        (url: GotUrl): GotPromise<string>;
        (url: GotUrl, options: GotJSONOptions & http.RequestOptions): GotPromise<object>;
        (url: GotUrl, options: GotFormOptions<string> & http.RequestOptions): GotPromise<string>;
        (url: GotUrl, options: GotFormOptions<null> & http.RequestOptions): GotPromise<Buffer>;
        (url: GotUrl, options: GotBodyOptions<string> & http.RequestOptions): GotPromise<string>;
        (url: GotUrl, options: GotBodyOptions<null> & http.RequestOptions): GotPromise<Buffer>;
    }
    // tslint:disable unified-signatures

    type GotStreamFn = (url: string | http.RequestOptions | URL, options?: GotStreamFullOptions & http.RequestOptions) => GotEmitter & nodeStream.Duplex;

    type GotUrl = string | http.RequestOptions | URL;

    interface GotBodyOptions<E extends string | null> extends GotStreamOptions<E> {
        body?: string | Buffer | nodeStream.Readable;
    }

    interface GotJSONOptions extends GotStreamOptions<string | null> {
        body?: object;
        form?: boolean;
        json: true;
    }

    interface GotFormOptions<E extends string | null> extends GotStreamOptions<E> {
        body?: {[key: string]: any};
        form: true;
        json?: boolean;
    }

    // http.RequestOptions &
    type GotStreamFullOptions = GotStreamOptions<string|null>;

    interface GotStreamOptions<E extends string | null> {
        encoding?: E;
        query?: string | object;
        timeout?: number | TimeoutOptions;
        retries?: number | RetryFunction;
        followRedirect?: boolean;
        decompress?: boolean;
        useElectronNet?: boolean;
    }

    interface TimeoutOptions {
        connect?: number;
        socket?: number;
        request?: number;
    }

    type RetryFunction = (retry: number, error: any) => number;

    interface Response<B extends Buffer | string | object> extends http.IncomingMessage {
        body: B; // TODO, options.encoding === null ? Buffer : string; options.json ? object
        url: string;
        requestUrl: string;
        redirectUrls?: string[];
    }

    type GotPromise<B extends Buffer | string | object> = Promise<Response<B>> & { cancel(): void };

    interface GotEmitter {
        addListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        addListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        addListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        addListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;

        on(event: 'request', listener: (req: http.ClientRequest) => void): this;
        on(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        on(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        on(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;

        once(event: 'request', listener: (req: http.ClientRequest) => void): this;
        once(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        once(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        once(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;

        prependListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        prependListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        prependListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        prependListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;

        prependOnceListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        prependOnceListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        prependOnceListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        prependOnceListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;

        removeListener(event: 'request', listener: (req: http.ClientRequest) => void): this;
        removeListener(event: 'response', listener: (res: http.IncomingMessage) => void): this;
        removeListener(event: 'redirect', listener: (res: http.IncomingMessage, nextOptions: GotStreamFullOptions & http.RequestOptions) => void): this;
        removeListener(event: 'error', listener: (error: GotError, body?: any, res?: http.IncomingMessage) => void): this;
    }

    type GotError = RequestError | ReadError | ParseError | HTTPError | MaxRedirectsError | UnsupportedProtocolError;

    interface RequestError extends StdError {
        name: 'RequestError';
    }

    interface ReadError extends StdError {
        name: 'ReadError';
    }

    interface ParseError extends StdError {
        name: 'ParseError';
        statusCode: number;
        statusMessage: string;
    }

    interface HTTPError extends StdError {
        name: 'HTTPError';
        statusCode: number;
        statusMessage: string;
        headers: http.IncomingMessageHeaders;
    }

    interface MaxRedirectsError extends StdError {
        name: 'MaxRedirectsError';
        statusCode: number;
        statusMessage: string;
        redirectUrls: string[];
    }

    interface UnsupportedProtocolError extends StdError {
        name: 'UnsupportedProtocolError';
    }

    interface StdError extends Error {
        code?: string;
        host?: string;
        hostname?: string;
        method?: string;
        path?: string;
        protocol?: string;
        url?: string;
        response?: any;
    }
}
