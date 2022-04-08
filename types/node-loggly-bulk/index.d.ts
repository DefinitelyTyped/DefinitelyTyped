// Type definitions for node-loggly-bulk 2.2
// Project: https://github.com/loggly/node-loggly-bulk#readme
// Definitions by: Andrei Kazakou <https://github.com/akazakou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LogglyInstance, LogglyOptions } from 'loggly';

export interface LogglyBulkOptions extends LogglyOptions {
    proxy?: any;
    userAgent?: string;
    useTagHeader?: boolean;
    isBulk?: boolean;
    bufferOptions?: {
        size: number;
        retriesInMilliSeconds: number;
    };
    networkErrorsOnConsole?: boolean;
}

export interface LogglyBulkConstructor {
    new (options: LogglyBulkOptions): LogglyInstance;
}

export const Loggly: LogglyBulkConstructor;

export const version: string;

export function createClient(options: LogglyBulkOptions): LogglyInstance;

export function serialize(obj: any, key?: string): string;
