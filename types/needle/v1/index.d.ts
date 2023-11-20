/// <reference types="node" />

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "needle" {
    import * as http from "http";
    import * as Buffer from "buffer";
    import * as https from "https";
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
            open_timeout?: number | undefined;
            read_timeout?: number | undefined;
            /**
             * Alias for open_timeout
             */
            timeout?: number | undefined;

            follow_max?: number | undefined;
            /**
             * Alias for follow_max
             */
            follow?: number | undefined;

            multipart?: boolean | undefined;
            agent?: http.Agent | boolean | undefined;
            proxy?: string | undefined;
            headers?: {} | undefined;
            auth?: "auto" | "digest" | "basic" | undefined;
            json?: boolean | undefined;

            // These properties are overwritten by those in the 'headers' field
            cookies?: Cookies | undefined;
            compressed?: boolean | undefined;
            // Overwritten if present in the URI
            username?: string | undefined;
            password?: string | undefined;
            accept?: string | undefined;
            connection?: string | undefined;
            user_agent?: string | undefined;
        }

        interface ResponseOptions {
            decode_response?: boolean | undefined;
            /**
             * Alias for decode_response
             */
            decode?: boolean | undefined;
            parse_response?: boolean | undefined;
            /**
             * Alias for parse_response
             */
            parse?: boolean | undefined;

            parse_cookies?: boolean | undefined;
            output?: string | undefined;
        }

        interface RedirectOptions {
            follow_set_cookie?: boolean | undefined;
            follow_set_referer?: boolean | undefined;
            follow_keep_method?: boolean | undefined;
            follow_if_same_host?: boolean | undefined;
            follow_if_same_protocol?: boolean | undefined;
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
            delete(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            request(method: string, url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            request(
                method: string,
                url: string,
                data: BodyData,
                options?: NeedleOptions,
                callback?: NeedleCallback,
            ): ReadableStream;
        }
    }
    const needle: Needle.NeedleStatic;
    export = needle;
}
