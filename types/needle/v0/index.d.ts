// Type definitions for needle 0.7
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "needle" {
    import * as http from 'http';
    import * as Buffer from 'buffer';
    namespace Needle {
        interface NeedleResponse extends http.IncomingMessage {
            body: any;
            raw: Buffer;
            bytes: number;
        }

        type ReadableStream = NodeJS.ReadableStream;

        type NeedleCallback = (error: Error, response: NeedleResponse, body: any) => void;

        interface RequestOptions {
            timeout?: number;
            follow?: number;
            follow_max?: number;
            multipart?: boolean;
            proxy?: string;
            agent?: string;
            headers?: {};
            auth?: string; // auto | digest | basic (default)
            json?: boolean;

            // These properties are overwritten by those in the 'headers' field
            compressed?: boolean;
            cookies?: { [name: string]: any; };
            // Overwritten if present in the URI
            username?: string;
            password?: string;
        }

        interface ResponseOptions {
            decode?: boolean;
            parse?: boolean;
            output?: any;
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

        interface NeedleStatic {
            defaults(options?: any): void;

            head(url: string, callback?: NeedleCallback): ReadableStream;
            head(url: string, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;

            get(url: string, callback?: NeedleCallback): ReadableStream;
            get(url: string, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;

            post(url: string, data: any, callback?: NeedleCallback): ReadableStream;
            post(url: string, data: any, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;

            put(url: string, data: any, callback?: NeedleCallback): ReadableStream;
            put(url: string, data: any, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;

            delete(url: string, data: any, callback?: NeedleCallback): ReadableStream;
            delete(url: string, data: any, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;

            request(method: string, url: string, data: any, callback?: NeedleCallback): ReadableStream;
            request(method: string, url: string, data: any, options?: RequestOptions, callback?: NeedleCallback): ReadableStream;
        }
    }

    var needle: Needle.NeedleStatic;
    export = needle;
}
