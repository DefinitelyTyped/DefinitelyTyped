// Type definitions for winston-loggly-bulk 3.0
// Project: https://github.com/loggly/winston-loggly-bulk
// Definitions by: Simcha Wood <https://github.com/SimchaWood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Url } from 'url';
import Transport = require('winston-transport');

export interface BufferOptions {
    size: number;
    retriesInMilliseconds: number;
}

export interface LogglyOptions extends Transport.TransportStreamOptions {
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

export class Loggly extends Transport {
    constructor(options?: LogglyOptions);
}

export function flushLogsAndExit(): void;
