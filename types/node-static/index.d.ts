/// <reference types="node" />

import * as events from "events";
import * as fs from "fs";
import * as http from "http";
import * as mime from "mime";

export interface Headers {
    [k: string]: any;
}
export type Finish = (status: number, headers?: Headers) => void;
export type Callback = (e: Error) => void;

export interface Options {
    headers?: Headers | undefined;
    indexFile?: string | undefined;
    cache?: number | boolean | undefined;
    serverInfo?: Buffer | undefined;
    server?: string | undefined;
    "cache-control"?: string | undefined;
}

export interface ByteRange {
    from: number;
    to: number;
    valid: boolean;
}

export class Server {
    root: string;
    options: Options;
    cache: number | boolean;
    defaultHeaders: Headers;
    serverInfo: string;
    constructor(root: string, options?: Options);

    serveDir: (pathname: string, req: http.IncomingMessage, res: http.ServerResponse, finish: Finish) => void;
    serveFile: (
        pathname: string,
        status: number,
        headers: Headers,
        req: http.IncomingMessage,
        res: http.ServerResponse,
    ) => events.EventEmitter;
    finish: (
        status: number,
        headers: Headers,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        promise: events.EventEmitter,
        callback: Callback,
    ) => void;
    servePath: (
        pathname: string,
        status: number,
        headers: Headers,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        finish: Finish,
    ) => events.EventEmitter;
    resolve: (pathname: string) => string;
    serve: (req: http.IncomingMessage, res: http.ServerResponse, callback?: Callback) => events.EventEmitter;
    gzipOk: (req: http.IncomingMessage, contentType: string) => boolean;
    respondGzip: (
        pathname: string,
        status: number,
        contentType: string,
        _headers: Headers,
        files: string[],
        stat: fs.Stats,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        finish: Finish,
    ) => void;
    parseByteRange: (req: http.IncomingMessage, stat: fs.Stats) => ByteRange;
    respondNoGzip: (
        pathname: string,
        status: number,
        contentType: string,
        _headers: Headers,
        files: string[],
        stat: fs.Stats,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        finish: Finish,
    ) => void;
    respond: (
        pathname: string,
        status: number,
        _headers: Headers,
        files: string[],
        stat: fs.Stats,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        finish: Finish,
    ) => void;
    stream: (
        pathname: string,
        files: string[],
        length: number,
        startByte: number,
        res: http.ServerResponse,
        callback: Callback,
    ) => void;
}

export const version: [number, number, number];
export { mime };
