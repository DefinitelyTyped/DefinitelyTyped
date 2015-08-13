// Type definitions for needle 0.7.8
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module Needle {
	interface ReadableStream extends NodeJS.ReadableStream {
	}

    interface Callback {
        (error: Error, response: any, body: any): void;
    }

    interface RequestOptions {
        timeout?: number;
        follow?: any; // number | string
        multipart?: boolean;
        proxy?: string;
        agent?: string;
        headers?: any;
        auth?: string; // auto | digest | basic (default)
        json?: boolean;
    }

    interface ResponseOptions {
        decode?: boolean;
        parse?: boolean;
        output?: any;
    }

    interface HttpHeaderOptions {
        compressed?: boolean;
        username?: string;
        password?: string;
        accept?: string;
        connection?: string;
        user_agent?: string;
    }

    interface TLSOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: any;
        rejectUnauthorized?: boolean;
        secureProtocol?: any;
    }

    interface NeedleOptions extends RequestOptions, ResponseOptions, HttpHeaderOptions, TLSOptions {
    }

    interface NeedleStatic {
        defaults(options?: any): void;

        head(url: string): ReadableStream;
        head(url: string, callback?: Callback): ReadableStream;
        head(url: string, options?: RequestOptions, callback?: Callback): ReadableStream;

        get(url: string): ReadableStream;
        get(url: string, callback?: Callback): ReadableStream;
        get(url: string, options?: RequestOptions, callback?: Callback): ReadableStream;

        post(url: string, data: any): ReadableStream;
        post(url: string, data: any, callback?: Callback): ReadableStream;
        post(url: string, data: any, options?: RequestOptions, callback?: Callback): ReadableStream;

        put(url: string, data: any): ReadableStream;
        put(url: string, data: any, callback?: Callback): ReadableStream;
        put(url: string, data: any, options?: RequestOptions, callback?: Callback): ReadableStream;

        delete(url: string, data: any): ReadableStream;
        delete(url: string, data: any, callback?: Callback): ReadableStream;
        delete(url: string, data: any, options?: RequestOptions, callback?: Callback): ReadableStream;

        request(method: string, url: string, data: any): ReadableStream;
        request(method: string, url: string, data: any, callback?: Callback): ReadableStream;
        request(method: string, url: string, data: any, options?: RequestOptions, callback?: Callback): ReadableStream;
    }
}

declare module "needle" {
    var needle: Needle.NeedleStatic;
    export = needle;
}
