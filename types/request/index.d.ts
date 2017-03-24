// Type definitions for request
// Project: https://github.com/request/request
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, bonnici <https://github.com/bonnici>, Bart van der Schoor <https://github.com/Bartvds>, Joe Skeen <http://github.com/joeskeen>, Christopher Currens <https://github.com/ccurrens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import stream = require('stream');
import http = require('http');
import https = require('https');
import url = require('url');
import fs = require('fs');
import FormData = require('form-data');
import { Url } from 'url';

declare namespace request {
    export interface RequestAPI<TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions> {

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

        forever(agentOptions: any, optionsArg: any): TRequest;
        jar(store?: any): CookieJar;
        cookie(str: string): Cookie;

        initParams: any;
        debug: boolean;
    }

    interface DefaultUriUrlRequestApi<TRequest extends Request,
        TOptions extends CoreOptions,
        TUriUrlOptions> extends RequestAPI<TRequest, TOptions, TUriUrlOptions> {

        defaults(options: TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>;
        (): TRequest;
        get(): TRequest;
        post(): TRequest;
        put(): TRequest;
        head(): TRequest;
        patch(): TRequest;
        del(): TRequest;
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
        maxRedirects?: number;
        encoding?: string | null;
        pool?: any;
        timeout?: number;
        proxy?: any;
        strictSSL?: boolean;
        gzip?: boolean;
        preambleCRLF?: boolean;
        postambleCRLF?: boolean;
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
    export type RequiredUriUrl = UriOptions | UrlOptions;

    interface OptionalUriUrl {
        uri?: string;
        url?: string;
    }

    export type OptionsWithUri = UriOptions & CoreOptions;
    export type OptionsWithUrl = UrlOptions & CoreOptions;
    export type Options = OptionsWithUri | OptionsWithUrl;

    export interface RequestCallback {
        (error: any, response: RequestResponse, body: any): void;
    }

	export interface RequestResponse extends http.IncomingMessage {
		request: Options;
		body: any;
	}

    export interface HttpArchiveRequest {
        url?: string;
        method?: string;
        headers?: NameValuePair[];
        postData?: {
            mimeType?: string;
            params?: NameValuePair[];
        }
    }

    export interface NameValuePair {
        name: string;
        value: string;
    }

    export interface Multipart {
        chunked?: boolean;
        data?: {
            'content-type'?: string,
            body: string
        }[];
    }

    export interface RequestPart {
        headers?: Headers;
        body: any;
    }

    export interface Request extends stream.Stream {
        readable: boolean;
        writable: boolean;

        getAgent(): http.Agent;
        //start(): void;
        //abort(): void;
        pipeDest(dest: any): void;
        setHeader(name: string, value: string, clobber?: boolean): Request;
        setHeaders(headers: Headers): Request;
        qs(q: Object, clobber?: boolean): Request;
        form(): FormData;
        form(form: any): Request;
        multipart(multipart: RequestPart[]): Request;
        json(val: any): Request;
        aws(opts: AWSOptions, now?: boolean): Request;
        auth(username: string, password: string, sendInmediately?: boolean, bearer?: string): Request;
        oauth(oauth: OAuthOptions): Request;
        jar(jar: CookieJar): Request;

        on(event: string, listener: Function): this;
        on(event: 'request', listener: (req: http.ClientRequest) => void): this;
        on(event: 'response', listener: (resp: http.IncomingMessage) => void): this;
        on(event: 'data', listener: (data: Buffer | string) => void): this;
        on(event: 'error', listener: (e: Error) => void): this;
        on(event: 'complete', listener: (resp: http.IncomingMessage, body?: string | Buffer) => void): this;

        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;
        end(): void;
        end(chunk: Buffer, cb?: Function): void;
        end(chunk: string, cb?: Function): void;
        end(chunk: string, encoding: string, cb?: Function): void;
        pause(): void;
        resume(): void;
        abort(): void;
        destroy(): void;
        toJSON(): Object;
    }

    export interface Headers {
        [key: string]: any;
    }

    export interface AuthOptions {
        user?: string;
        username?: string;
        pass?: string;
        password?: string;
        sendImmediately?: boolean;
        bearer?: string | (() => string);
    }

    export interface OAuthOptions {
        callback?: string;
        consumer_key?: string;
        consumer_secret?: string;
        token?: string;
        token_secret?: string;
        verifier?: string;
    }

    export interface HawkOptions {
        credentials: any;
    }

    export interface AWSOptions {
        secret: string;
        bucket?: string;
    }

    export interface CookieJar {
        setCookie(cookie: Cookie, uri: string | url.Url, options?: any): void
        getCookieString(uri: string | url.Url): string
        getCookies(uri: string | url.Url): Cookie[]
    }

    export interface CookieValue {
        name: string;
        value: any;
        httpOnly: boolean;
    }

    export interface Cookie extends Array<CookieValue> {
        constructor(name: string, req: Request): void;
        str: string;
        expires: Date;
        path: string;
        toString(): string;
    }
}
declare var request: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
export = request;
