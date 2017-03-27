// Type definitions for needle 1.4
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>, Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "needle" {
    import * as http from 'http';
    import * as Buffer from 'buffer';
    import * as https from 'https';
    namespace Needle {
        interface NeedleResponse extends http.IncomingMessage {
            body: any;
            raw: Buffer;
            bytes: number;
        }

        type ReadableStream = NodeJS.ReadableStream;

        type NeedleCallback = (error: Error, response: NeedleResponse, body: any) => void;

        interface Cookies {
            [name: string]: any;
        }

        type NeedleOptions = RequestOptions & ResponseOptions & RedirectOptions & https.RequestOptions;

        interface RequestOptions {
            open_timeout?: number;
            read_timeout?: number;
            /**
             * Alias for open_timeout
             */
            timeout?: number;

            follow_max?: number;
            /**
             * Alias for follow_max
             */
            follow?: number;

            multipart?: boolean;
            agent?: http.Agent | boolean;
            proxy?: string;
            headers?: {};
            auth?: "auto" | "digest" | "basic";
            json?: boolean;

            // These properties are overwritten by those in the 'headers' field
            cookies?: Cookies;
            compressed?: boolean;
            // Overwritten if present in the URI
            username?: string;
            password?: string;
            accept?: string;
            connection?: string;
            user_agent?: string;
        }

        interface ResponseOptions {
            decode_response?: boolean;
            /**
             * Alias for decode_response
             */
            decode?: boolean;
            parse_response?: boolean;
            /**
             * Alias for parse_response
             */
            parse?: boolean;

            parse_cookies?: boolean;
            output?: string;
        }

        interface RedirectOptions {
            follow_set_cookie?: boolean;
            follow_set_referer?: boolean;
            follow_keep_method?: boolean;
            follow_if_same_host?: boolean;
            follow_if_same_protocol?: boolean;
        }

        interface KeyValue {
            [key: string]: any;
        }

        type BodyData = Buffer | KeyValue | NodeJS.ReadableStream | string | null;

        interface NeedleStatic {
            defaults(options: NeedleOptions): void;

            head(url: string, callback?: NeedleCallback): ReadableStream;
            head(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            get(url: string, callback?: NeedleCallback): ReadableStream;
            get(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            post(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            post(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            put(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            put(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            patch(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            patch(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            delete(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            delete(url: string, data: BodyData, options?: NeedleOptions, callback ?: NeedleCallback): ReadableStream;

            request(method: string, url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            request(method: string, url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;
        }
    }
    const needle: Needle.NeedleStatic;
    export = needle;
}
