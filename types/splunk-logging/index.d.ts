// Type definitions for splunk-logging 0.11
// Project: http://dev.splunk.com
// Definitions by: Alex Brick <https://github.com/bricka>
//                 Borui Gu <https://github.com/BoruiGu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CoreOptions as RequestOptions } from 'request';

export interface Config {
    token: string;
    name?: string | undefined;
    host?: string | undefined;
    maxRetries?: number | undefined;
    path?: string | undefined;
    protocol?: 'http' | 'https' | undefined;
    port?: number | undefined;
    url?: string | undefined;
    level?: string | undefined;
    batchInterval?: number | undefined;
    maxBatchSize?: number | undefined;
    maxBatchCount?: number | undefined;
}

export interface SendContextMetadata {
    host?: string | undefined;
    index?: string | undefined;
    source?: string | undefined;
    sourcetype?: string | undefined;
}

export interface SendContext {
    message: any;
    severity?: string | undefined;
    metadata?: SendContextMetadata | undefined;
}

export type Callback = (error: Error | undefined, req: any, res: any) => void;
export type EventFormatter = (message: any, severity: string) => any;

export class Logger {
    error: (error: Error, context: SendContext) => void;
    eventFormatter: EventFormatter;
    requestOptions: RequestOptions;
    readonly serializedContextQueue: any[];

    constructor(config: Config);

    flush(callback?: Callback): void;
    send(context: SendContext, callback?: Callback): void;
}
