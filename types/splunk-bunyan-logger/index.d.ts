// Type definitions for splunk-bunyan-logger 0.9
// Project: http://dev.splunk.com
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Stream as BunyanStream } from 'bunyan';
import {
    Config,
    EventFormatter,
    Logger as SplunkLogger,
    SendContext
} from 'splunk-logging';

export interface SplunkStream extends NodeJS.WritableStream {
    logger: SplunkLogger;
}

export interface SplunkBunyanStream extends BunyanStream {
    flush(callback?: (error: Error, req: any, res: any) => void): void;
    on(event: string, callback: (err: Error, context: SendContext) => void): void;
    setEventFormatter(eventFormatter: EventFormatter): void;
    stream: SplunkStream;
}

export function createStream(config: Config): SplunkBunyanStream;
