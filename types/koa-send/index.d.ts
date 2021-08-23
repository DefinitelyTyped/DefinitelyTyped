// Type definitions for koa-send 4.1
// Project: https://github.com/koajs/send
// Definitions by: Peter Safranek <https://github.com/pe8ter>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
    ParameterizedContext,
} from "koa";

import {
    Stats,
} from "fs";

declare function send(ctx: ParameterizedContext, path: string, opts?: send.SendOptions): Promise<string>;

declare namespace send {
    type SetHeaders = (res: ParameterizedContext["res"], path: string, stats: Stats) => any;

    interface SendOptions {
        /** Browser cache max-age in milliseconds. (defaults to 0) */
        maxage?: number | undefined;
        maxAge?: SendOptions["maxage"] | undefined;
        /** Tell the browser the resource is immutable and can be cached indefinitely. (defaults to false) */
        immutable?: boolean | undefined;
        /** Allow transfer of hidden files. (defaults to false) */
        hidden?: boolean | undefined;
        /** Root directory to restrict file access. (defaults to '') */
        root?: string | undefined;
        /** Name of the index file to serve automatically when visiting the root location. (defaults to none) */
        index?: string | false | undefined;
        /** Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. (defaults to true). */
        gzip?: boolean | undefined;
        /** Try to serve the brotli version of a file automatically when brotli is supported by a client and if the requested file with .br extension exists. (defaults to true). */
        brotli?: boolean | undefined;
        /** If not false (defaults to true), format the path to serve static file servers and not require a trailing slash for directories, so that you can do both /directory and /directory/. */
        format?: boolean | undefined;
        /** Function to set custom headers on response. */
        setHeaders?: SetHeaders | undefined;
        /** Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to false) */
        extensions?: string[] | false | undefined;
    }
}

export = send;
