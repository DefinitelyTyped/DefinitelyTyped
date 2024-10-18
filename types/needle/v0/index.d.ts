/// <reference types="node" />

/* eslint-disable @definitelytyped/no-declare-current-package */
declare module "needle" {
    import * as http from "http";
    import * as Buffer from "buffer";
    namespace Needle {
        interface NeedleResponse extends http.IncomingMessage {
            body: any;
            raw: Buffer;
            bytes: number;
        }

        type ReadableStream = NodeJS.ReadableStream;

        type NeedleCallback = (error: Error, response: NeedleResponse, body: any) => void;

        interface RequestOptions {
            timeout?: number | undefined;
            follow?: number | undefined;
            follow_max?: number | undefined;
            multipart?: boolean | undefined;
            proxy?: string | undefined;
            agent?: string | undefined;
            headers?: {} | undefined;
            auth?: string | undefined; // auto | digest | basic (default)
            json?: boolean | undefined;

            // These properties are overwritten by those in the 'headers' field
            compressed?: boolean | undefined;
            cookies?: { [name: string]: any } | undefined;
            // Overwritten if present in the URI
            username?: string | undefined;
            password?: string | undefined;
        }

        interface ResponseOptions {
            decode?: boolean | undefined;
            parse?: boolean | undefined;
            output?: any;
        }

        interface TLSOptions {
            pfx?: any;
            key?: any;
            passphrase?: string | undefined;
            cert?: any;
            ca?: any;
            ciphers?: any;
            rejectUnauthorized?: boolean | undefined;
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
            request(
                method: string,
                url: string,
                data: any,
                options?: RequestOptions,
                callback?: NeedleCallback,
            ): ReadableStream;
        }
    }

    var needle: Needle.NeedleStatic;
    export = needle;
}
