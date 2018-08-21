// Type definitions for request 2.47
// Project: https://github.com/request/request
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>,
//                 bonnici <https://github.com/bonnici>,
//                 Bart van der Schoor <https://github.com/Bartvds>,
//                 Joe Skeen <https://github.com/joeskeen>,
//                 Christopher Currens <https://github.com/ccurrens>,
//                 Jon Stevens <https://github.com/lookfirst>,
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Jose Colella <https://github.com/josecolella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import caseless = require('caseless');
import stream = require('stream');
import http = require('http');
import https = require('https');
import fs = require('fs');
import FormData = require('form-data');
import net = require('net');
import tough = require('tough-cookie');
import { Url } from 'url';

declare namespace request {
    interface RequestAPI<TRequest extends Request, TOptions extends CoreOptions, TUriUrlOptions> {
        defaults(options: TOptions): RequestAPI<TRequest, TOptions, RequiredUriUrl>;
        defaults(options: RequiredUriUrl & TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>;

        (uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        (uri: string, callback?: RequestCallback): TRequest;
        (options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        get(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        get(uri: string, callback?: RequestCallback): TRequest;
        get(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        post(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        post(uri: string, callback?: RequestCallback): TRequest;
        post(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        put(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        put(uri: string, callback?: RequestCallback): TRequest;
        put(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        head(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        head(uri: string, callback?: RequestCallback): TRequest;
        head(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        patch(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        patch(uri: string, callback?: RequestCallback): TRequest;
        patch(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        del(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        del(uri: string, callback?: RequestCallback): TRequest;
        del(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        delete(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        delete(uri: string, callback?: RequestCallback): TRequest;
        delete(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;

        initParams(uri: string, options?: TOptions, callback?: RequestCallback): RequiredUriUrl & TOptions;
        initParams(uriOrOpts: string | RequiredUriUrl & TOptions, callback?: RequestCallback): RequiredUriUrl & TOptions;

        forever(agentOptions: any, optionsArg: any): TRequest;
        jar(store?: any): CookieJar;
        cookie(str: string): Cookie | undefined;

        debug: boolean;
    }

    interface DefaultUriUrlRequestApi<TRequest extends Request,
            TOptions extends CoreOptions,
            TUriUrlOptions> extends RequestAPI<TRequest, TOptions, TUriUrlOptions> {
        defaults(options: TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>;
        (callback?: RequestCallback): TRequest;

        get(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        get(uri: string, callback?: RequestCallback): TRequest;
        get(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        get(callback?: RequestCallback): TRequest;

        post(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        post(uri: string, callback?: RequestCallback): TRequest;
        post(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        post(callback?: RequestCallback): TRequest;

        put(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        put(uri: string, callback?: RequestCallback): TRequest;
        put(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        put(callback?: RequestCallback): TRequest;

        head(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        head(uri: string, callback?: RequestCallback): TRequest;
        head(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        head(callback?: RequestCallback): TRequest;

        patch(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        patch(uri: string, callback?: RequestCallback): TRequest;
        patch(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        patch(callback?: RequestCallback): TRequest;

        del(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        del(uri: string, callback?: RequestCallback): TRequest;
        del(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        del(callback?: RequestCallback): TRequest;

        delete(uri: string, options?: TOptions, callback?: RequestCallback): TRequest;
        delete(uri: string, callback?: RequestCallback): TRequest;
        delete(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest;
        delete(callback?: RequestCallback): TRequest;
    }

    interface CoreOptions {
        baseUrl?: string;
        callback?: RequestCallback;
        jar?: CookieJar | boolean;
        formData?: { [key: string]: any };
        form?: { [key: string]: any } | string;
        auth?: AuthOptions;
        oauth?: OAuthOptions;
        aws?: AWSOptions;
        hawk?: HawkOptions;
        qs?: any;
        qsStringifyOptions?: any;
        qsParseOptions?: any;
        json?: any;
        jsonReviver?: (key: string, value: any) => any;
        jsonReplacer?: (key: string, value: any) => any;
        multipart?: RequestPart[] | Multipart;
        agent?: http.Agent | https.Agent;
        agentOptions?: any;
        agentClass?: any;
        forever?: any;
        host?: string;
        port?: number;
        method?: string;
        headers?: Headers;
        body?: any;
        family?: 4 | 6;
        followRedirect?: boolean | ((response: http.IncomingMessage) => boolean);
        followAllRedirects?: boolean;
        followOriginalHttpMethod?: boolean;
        maxRedirects?: number;
        removeRefererHeader?: boolean;
        encoding?: string | null;
        pool?: any;
        timeout?: number;
        localAddress?: string;
        proxy?: any;
        tunnel?: boolean;
        strictSSL?: boolean;
        rejectUnauthorized?: boolean;
        time?: boolean;
        gzip?: boolean;
        preambleCRLF?: boolean;
        postambleCRLF?: boolean;
        withCredentials?: boolean;
        key?: Buffer;
        cert?: Buffer;
        passphrase?: string;
        ca?: string | Buffer | string[] | Buffer[];
        har?: HttpArchiveRequest;
        useQuerystring?: boolean;
    }

    interface UriOptions {
        uri: string | Url;
    }
    interface UrlOptions {
        url: string | Url;
    }
    type RequiredUriUrl = UriOptions | UrlOptions;

    type OptionalUriUrl = RequiredUriUrl | {};

    type OptionsWithUri = UriOptions & CoreOptions;
    type OptionsWithUrl = UrlOptions & CoreOptions;
    type Options = OptionsWithUri | OptionsWithUrl;

    type RequestCallback = (error: any, response: Response, body: any) => void;

    interface HttpArchiveRequest {
        url?: string;
        method?: string;
        headers?: NameValuePair[];
        postData?: {
            mimeType?: string;
            params?: NameValuePair[];
        };
    }

    interface NameValuePair {
        name: string;
        value: string;
    }

    interface Multipart {
        chunked?: boolean;
        data?: Array<{
            'content-type'?: string,
            body: string
        }>;
    }

    interface RequestPart {
        headers?: Headers;
        body: any;
    }

    interface Request extends caseless.Httpified, stream.Stream {
        readable: boolean;
        writable: boolean;
        explicitMethod?: true;

        debug(...args: any[]): void;
        pipeDest(dest: any): void;
        qs(q: object, clobber?: boolean): Request;
        form(): FormData;
        form(form: any): Request;
        multipart(multipart: RequestPart[]): Request;
        json(val: any): Request;
        aws(opts: AWSOptions, now?: boolean): Request;
        hawk(opts: HawkOptions): void;
        auth(username: string, password: string, sendImmediately?: boolean, bearer?: string): Request;
        oauth(oauth: OAuthOptions): Request;
        jar(jar: CookieJar): Request;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'request', listener: (req: http.ClientRequest) => void): this;
        on(event: 'response', listener: (resp: Response) => void): this;
        on(event: 'data', listener: (data: Buffer | string) => void): this;
        on(event: 'error', listener: (e: Error) => void): this;
        on(event: 'complete', listener: (resp: Response, body?: string | Buffer) => void): this;
        on(event: 'pipe', listener: (src: stream.Readable) => void): this;
        on(event: 'socket', listener: (src: net.Socket) => void): this;

        write(buffer: Buffer | string, cb?: (err?: Error) => void): boolean;
        write(str: string, encoding?: string, cb?: (err?: Error) => void): boolean;
        end(cb?: () => void): void;
        end(chunk: string | Buffer, cb?: () => void): void;
        end(str: string, encoding?: string, cb?: () => void): void;

        pause(): void;
        resume(): void;
        abort(): void;
        destroy(): void;
        toJSON(): RequestAsJSON;

        // several of the CoreOptions are copied onto the request instance
        host?: string;
        port?: number;
        followAllRedirects?: boolean;
        followOriginalHttpMethod?: boolean;
        maxRedirects?: number;
        removeRefererHeader?: boolean;
        encoding?: string | null;
        timeout?: number;
        localAddress?: string;
        strictSSL?: boolean;
        rejectUnauthorized?: boolean;
        time?: boolean;
        gzip?: boolean;
        preambleCRLF?: boolean;
        postambleCRLF?: boolean;
        withCredentials?: boolean;
        key?: Buffer;
        cert?: Buffer;
        passphrase?: string;
        ca?: string | Buffer | string[] | Buffer[];
        har?: HttpArchiveRequest;

        // set in `Request.prototype.init`
        headers: Headers;
        method: string;
        pool: false | { [key: string]: http.Agent | https.Agent };
        dests: stream.Readable[];
        callback?: RequestCallback;
        uri: Url & { href: string, pathname: string };
        proxy: null | string | Url;
        tunnel: boolean;
        setHost: boolean;
        path: string;
        agent: false | http.Agent | https.Agent;
        body: Buffer | Buffer[] | string | string[] | stream.Readable;
        timing?: boolean;
        src?: stream.Readable;

        // set in `Request.prototype.start`
        href: string;
        startTime?: number;
        startTimeNow?: number;
        timings?: {
            socket: number;
            lookup: number;
            connect: number;
            response: number;
            end: number;
        };

        // set in `Request.prototype.onRequestResponse`
        elapsedTime?: number;
        response?: Response;
    }

    interface Response extends http.IncomingMessage {
        statusCode: number;
        statusMessage: string;
        request: Request;
        body: any; // Buffer, string, stream.Readable, or a plain object if `json` was truthy
        caseless: caseless.Caseless; // case-insensitive access to headers
        toJSON(): ResponseAsJSON;

        timingStart?: number;
        elapsedTime?: number;
        timings?: {
            socket: number;
            lookup: number;
            connect: number;
            response: number;
            end: number;
        };
        timingPhases?: {
            wait: number;
            dns: number;
            tcp: number;
            firstByte: number;
            download: number;
            total: number;
        };
    }

    // aliases for backwards compatibility
    type ResponseRequest = Request;
    type RequestResponse = Response;

    interface Headers {
        [key: string]: any;
    }

    interface AuthOptions {
        user?: string;
        username?: string;
        pass?: string;
        password?: string;
        sendImmediately?: boolean;
        bearer?: string | (() => string);
    }

    interface OAuthOptions {
        callback?: string;
        consumer_key?: string;
        consumer_secret?: string;
        token?: string;
        token_secret?: string;
        transport_method?: 'body' | 'header' | 'query';
        verifier?: string;
        body_hash?: true | string;
    }

    interface HawkOptions {
        credentials: any;
    }

    interface AWSOptions {
        secret: string;
        bucket?: string;
    }

    interface RequestAsJSON {
        uri: Url;
        method: string;
        headers: Headers;
    }

    interface ResponseAsJSON {
        statusCode: number;
        body: any;
        headers: Headers;
        request: RequestAsJSON;
    }

    type Cookie = tough.Cookie;

    interface CookieJar {
        setCookie(cookieOrStr: Cookie | string, uri: string | Url, options?: tough.CookieJar.SetCookieOptions): void;
        getCookieString(uri: string | Url): string;
        getCookies(uri: string | Url): Cookie[];
    }
}
declare var request: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
export = request;
