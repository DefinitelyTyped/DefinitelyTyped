// Type definitions for winston-loggly-bulk 3.0.1
// Project: https://github.com/loggly/winston-loggly-bulk
// Definitions by: Simcha Wood <https://github.com/SimchaWood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Url } from 'url';
import Transport from 'winston-transport';

export namespace Loggly {
    interface BufferOptions {
        size: number;
        retriesInMilliseconds: number;
    }

    interface LogglyOptions extends Transport.TransportStreamOptions {
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
}

export class Loggly extends Transport {
    constructor(options?: Loggly.LogglyOptions);
}

export function flushLogsAndExit(): void;

export {};
