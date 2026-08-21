/// <reference types="node" />

import { Url } from "url";
import TransportStream = require("winston-transport");

export interface BufferOptions {
    size: number;
    retriesInMilliseconds: number;
}

export interface LogglyOptions extends TransportStream.TransportStreamOptions {
    auth?:
        | {
            username: string;
            password: string;
        }
        | null
        | undefined;
    bufferOptions?: BufferOptions | undefined;
    isBulk?: boolean | undefined;
    json?: boolean | undefined;
    networkErrorsOnConsole?: boolean | undefined;
    proxy?: null | string | Url | undefined;
    stripColors?: boolean | undefined;
    subdomain: string;
    tags?: string[] | undefined;
    timestamp?: boolean | undefined;
    token: string;
}

export class Loggly extends TransportStream {
    constructor(options?: LogglyOptions);

    extend(destination: any, source: any): any;

    extractContext(obj: any): any;

    formatQuery(query: any): any;

    formatResults(results: any, _options: any): any;

    log(meta: any, callback: any): any;

    loglify(obj: any): any;

    query(options: any, callback: any): any;

    sanitizeLogs(logs: any): any;

    stream(maybeOptions: any): any;
}

export function flushLogsAndExit(): void;
