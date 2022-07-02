// Type definitions for follow-redirects 1.14
// Project: https://github.com/follow-redirects/follow-redirects
// Definitions by: Emily Klassen <https://github.com/forivall>
//                 Claas Ahlrichs <https://github.com/claasahl>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as coreHttp from 'http';
import * as coreHttps from 'https';
import { URL } from 'url';
import { Writable } from 'stream';

export interface WrappableRequest {
    getHeader?(...args: any[]): any;
    setHeader(...args: any[]): any;
    removeHeader(...args: any[]): any;

    abort?(...args: any[]): any;
    flushHeaders?(...args: any[]): any;
    setNoDelay?(...args: any[]): any;
    setSocketKeepAlive?(...args: any[]): any;
    setTimeout?(...args: any[]): any;
}
export interface WrappableResponse {
    statusCode?: number | undefined;
    headers: {
        location?: string | undefined;
    };
    destroy(): any;
}

export interface Scheme<Options, Request extends WrappableRequest, Response> {
    request(options: Options, callback?: (res: Response) => any): Request;
}

export interface RedirectableRequest<Request extends WrappableRequest, Response> extends Writable {
    setHeader: Request['setHeader'];
    removeHeader: Request['removeHeader'];
    abort: Request['abort'];
    flushHeaders: Request['flushHeaders'];
    getHeader: Request['getHeader'];
    setNoDelay: Request['setNoDelay'];
    setSocketKeepAlive: Request['setSocketKeepAlive'];
    setTimeout: Request['setTimeout'];

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: 'response', listener: (response: Response) => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: 'response', response: Response): boolean;
    emit(event: 'error', err: Error): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: 'response', listener: (response: Response) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: 'response', listener: (response: Response) => void): this;
    once(event: 'error', listener: (err: Error) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: 'response', listener: (response: Response) => void): this;
    prependListener(event: 'error', listener: (err: Error) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: 'response', listener: (response: Response) => void): this;
    prependOnceListener(event: 'error', listener: (err: Error) => void): this;
}

export interface RedirectScheme<Options, Request extends WrappableRequest, Response> {
    /**
     * This function has two overloads:
     * ```typescript
     * request(options: string | URL | Options, callback)
     * request(url: string | URL, options: Options, callback)
     * ```
     */
    request(
        url: string | URL | (Options & FollowOptions<Options>),
        options?: (Options & FollowOptions<Options>) | ((res: Response & FollowResponse) => void),
        callback?: (res: Response & FollowResponse) => void,
    ): RedirectableRequest<Request, Response>;
    /**
     * This function has two overloads:
     * ```typescript
     * get(options: string | URL | Options, callback)
     * get(url: string | URL, options: Options, callback)
     * ```
     */
    get(
        url: string | URL | (Options & FollowOptions<Options>),
        options?: (Options & FollowOptions<Options>) | ((res: Response & FollowResponse) => void),
        callback?: (res: Response & FollowResponse) => void,
    ): RedirectableRequest<Request, Response>;
}

export type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export interface FollowOptions<Options> {
    followRedirects?: boolean | undefined;
    maxRedirects?: number | undefined;
    maxBodyLength?: number | undefined;
    beforeRedirect?:
        | ((options: Options & FollowOptions<Options>, responseDetails: ResponseDetails) => void)
        | undefined;
    agents?:
        | {
              http?: coreHttp.Agent | undefined;
              https?: coreHttps.Agent | undefined;
          }
        | undefined;
    trackRedirects?: boolean | undefined;
}

export interface FollowResponse {
    responseUrl: string;
    redirects: Redirect[];
}

export interface Redirect {
    url: string;
    headers: coreHttp.IncomingHttpHeaders;
    statusCode: number;
}

export interface ResponseDetails {
    headers: coreHttp.IncomingHttpHeaders;
}

export const http: Override<
    typeof coreHttp,
    RedirectScheme<coreHttp.RequestOptions, coreHttp.ClientRequest, coreHttp.IncomingMessage>
>;
export const https: Override<
    typeof coreHttps,
    RedirectScheme<coreHttps.RequestOptions, coreHttp.ClientRequest, coreHttp.IncomingMessage>
>;

export type WrappedScheme<T extends Scheme<any, any, any>> = Override<
    T,
    RedirectScheme<
        T extends Scheme<infer Options, any, any> ? Options : never,
        T extends Scheme<any, infer Request, any> ? Request : never,
        T extends Scheme<any, any, infer Response> ? Response : never
    >
>;

export function wrap<T extends { [key: string]: Scheme<any, any, any> }>(
    protocols: T,
): {
    [K in keyof T]: WrappedScheme<T[K]>;
};
