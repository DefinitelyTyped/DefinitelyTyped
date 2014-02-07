/// <reference path="../node/node.d.ts" />
/// <reference path="../form-data/form-data.d.ts" />

// https://github.com/mikeal/request

declare module "request" {

    export = request;

    import stream = require('stream');
    import http = require('http');
    import FormData = require('form-data');

    function request(uri: string, options?: request.Options, callback?: (error: any, response: any, body: any) => void ): request.Request;
    function request(uri: string, callback?: (error: any, response: any, body: any) => void ): request.Request;
    function request(options: request.Options, callback?: (error: any, response: any, body: any) => void ): request.Request;

    module request {
        export function request(uri: string, options: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export var initParams;
        export function defaults(options, requester);
        export function forever(agentOptions, optionsArg);
        export function jar(): CookieJar;
        export function cookie(str: string): Cookie;

        export function get(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export function get(uri: string, callback?: (error: any, response: any, body: any) => void ): Request;
        export function get(options: Options, callback?: (error: any, response: any, body: any) => void ): Request;

        export function post(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export function post(uri: string, callback?: (error: any, response: any, body: any) => void ): Request;
        export function post(options: Options, callback?: (error: any, response: any, body: any) => void ): Request;

        export function put(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export function put(uri: string, callback?: (error: any, response: any, body: any) => void ): Request;
        export function put(options: Options, callback?: (error: any, response: any, body: any) => void ): Request;

        export function head(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export function head(uri: string, callback?: (error: any, response: any, body: any) => void ): Request;
        export function head(options: Options, callback?: (error: any, response: any, body: any) => void ): Request;

        export function del(uri: string, options?: Options, callback?: (error: any, response: any, body: any) => void ): Request;
        export function del(uri: string, callback?: (error: any, response: any, body: any) => void ): Request;
        export function del(options: Options, callback?: (error: any, response: any, body: any) => void ): Request;

        interface Options {
            uri?: string;
            callback?: (error: any, response: any, body: any) => void;
            jar?;
            form?;
            oauth?;
            aws?;
            qs?;
            json?;
            multipart?;
            ca?;
            agentOptions?;
            agentClass?;
            forever?;
            requestBodyStream?;
            host?;
            port?;
            method?;
            headers?;
            body?;
            followRedirect?;
            followAllRedirects?;
            maxRedirects?;
            encoding?;
            pool?;
            timeout?;
            proxy?;
            strictSSL?;
        }

        interface Request {
            // _updateProtocol();
            getAgent(): http.Agent;
            //start();
            //abort();
            pipeDest(dest);
            setHeader(name: string, value: string, clobber?: boolean): Request;
            setHeaders(headers: any): Request;
            qs(q: any, clobber?: boolean): Request;
            form(form: any): FormData.FormData;
            multipart(multipart: { body: any; }[]): Request;
            json(val: any): Request;
            aws(opts, now): Request;
            oauth(oauth): Request;
            jar(jar): Request;
            pipe(dest: stream.WritableStream, opts: any): stream.WritableStream;
            write();
            end(chunk);
            pause();
            resume();
            destroy();
            toJSON(): string;
        }

        export interface CookieJar {
            add(cookie: Cookie): void;
            get(req): Cookie;
            cookieString(req): string;
        }

        export interface Cookie extends Array<{ name; value; httpOnly; }> {
            constructor(str, req);
            str: string;
            expires: Date;
            path: string;
            toString(): string;
        }

    }
}