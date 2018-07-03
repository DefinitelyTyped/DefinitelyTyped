// Type definitions for splunk-logging 0.9
// Project: http://dev.splunk.com
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CoreOptions as RequestOptions } from 'request';

export interface Config {
    token: string;
    name?: string;
    host?: string;
    maxRetries?: number;
    path?: string;
    protocol?: 'http' | 'https';
    port?: number;
    url?: string;
    level?: string;
    batchInterval?: number;
    maxBatchSize?: number;
    maxBatchCount?: number;
}

export interface SendContextMetadata {
    host?: string;
    index?: string;
    source?: string;
    sourcetype?: string;
}

export interface SendContext {
    message: any;
    severity?: string;
    metadata?: SendContextMetadata;
}

export type Callback = (error: Error | undefined, req: any, res: any) => void;
export type EventFormatter = (message: any, severity: string) => any;

export class Logger {
    error: (error: Error, context: SendContext) => void;
    eventFormatter: EventFormatter;
    requestOptions: RequestOptions;
    readonly serializedEventQueue: any[];

    constructor(config: Config);

    flush(callback?: Callback): void;
    send(context: SendContext, callback?: Callback): void;
}
