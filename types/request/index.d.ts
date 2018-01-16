// Type definitions for request 2.0
// Project: https://github.com/request/request
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>,
//                 bonnici <https://github.com/bonnici>,
//                 Bart van der Schoor <https://github.com/Bartvds>,
//                 Joe Skeen <https://github.com/joeskeen>,
//                 Christopher Currens <https://github.com/ccurrens>,
//                 Jon Stevens <https://github.com/lookfirst>,
//                 Matt R. Wilson <https://github.com/mastermatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import stream = require('stream');
import http = require('http');
import https = require('https');
import fs = require('fs');
import FormData = require('form-data');
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
        initParams(uri: string, callback?: RequestCallback): RequiredUriUrl & TOptions;
        // tslint:disable-next-line unified-signatures
        initParams(options: RequiredUriUrl & TOptions, callback?: RequestCallback): RequiredUriUrl & TOptions;

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
        callback?: (error: any, response: RequestResponse, body: any) => void;
        jar?: any; // CookieJar
        formData?: any; // Object
        form?: any; // Object or string
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

    type RequestCallback = (error: any, response: RequestResponse, body: any) => void;

    type ResponseRequest = CoreOptions & {
      uri: Url;
    };

	interface RequestResponse extends http.IncomingMessage {
		request: ResponseRequest;
		body: any;
		timingStart?: number;
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

    interface Request extends stream.Stream {
        readable: boolean;
        writable: boolean;

        getAgent(): http.Agent;
        // start(): void;
        // abort(): void;
        pipeDest(dest: any): void;
        setHeader(name: string, value: string, clobber?: boolean): Request;
        setHeaders(headers: Headers): Request;
        qs(q: object, clobber?: boolean): Request;
        form(): FormData;
        form(form: any): Request;
        multipart(multipart: RequestPart[]): Request;
        json(val: any): Request;
        aws(opts: AWSOptions, now?: boolean): Request;
        auth(username: string, password: string, sendInmediately?: boolean, bearer?: string): Request;
        oauth(oauth: OAuthOptions): Request;
        jar(jar: CookieJar): Request;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'request', listener: (req: http.ClientRequest) => void): this;
        on(event: 'response', listener: (resp: http.IncomingMessage) => void): this;
        on(event: 'data', listener: (data: Buffer | string) => void): this;
        on(event: 'error', listener: (e: Error) => void): this;
        on(event: 'complete', listener: (resp: http.IncomingMessage, body?: string | Buffer) => void): this;

        write(buffer: Buffer | string, cb?: (err?: Error) => void): boolean;
        write(str: string, encoding?: string, cb?: (err?: Error) => void): boolean;
        end(cb?: () => void): void;
        end(chunk: string | Buffer, cb?: () => void): void;
        end(str: string, encoding?: string, cb?: () => void): void;

        pause(): void;
        resume(): void;
        abort(): void;
        destroy(): void;
        toJSON(): object;
    }

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

    type Cookie = tough.Cookie;

    interface CookieJar {
        setCookie(cookieOrStr: Cookie | string, uri: string | Url, options?: tough.CookieJar.SetCookieOptions): void;
        getCookieString(uri: string | Url): string;
        getCookies(uri: string | Url): Cookie[];
    }
}
declare var request: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
export = request;
