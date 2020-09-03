// Type definitions for winston-loggly-bulk 3.0
// Project: https://github.com/loggly/winston-loggly-bulk
// Definitions by: Simcha Wood <https://github.com/SimchaWood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Url } from 'url';
import TransportStream = require('winston-transport');

export interface BufferOptions {
    size: number;
    retriesInMilliseconds: number;
}

export interface LogglyOptions extends TransportStream.TransportStreamOptions {
    auth?: {
        username: string;
        password: string;
    } | null;
    bufferOptions?: BufferOptions;
    isBulk?: boolean;
    json?: boolean;
    networkErrorOnConsole?: boolean;
    proxy?: null | string | Url;
    stripColors?: boolean;
    subdomain: string;
    tags?: string[];
    timestamp?: boolean;
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
