// Type definitions for azure-functions 1.0
// Project: https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';

export interface HttpRequest {
    body?: any;
    headers: IncomingHttpHeaders;
    method: string;
    originalUrl: string;
    params: { [key: string]: any; };
    query: { [key: string]: any; };
    rawBody?: string;
}

export interface HttpResponse {
    body?: any;
    headers?: OutgoingHttpHeaders;
    isRaw?: boolean;
    status?: number;
}

export interface Logger {
    (...message: any[]): void;
    error(...message: any[]): void;
    warn(...message: any[]): void;
    info(...message: any[]): void;
    verbose(...message: any[]): void;
    metric(...message: any[]): void;
}

export interface Context {
    bindings: any;
    req: HttpRequest;
    bindingData: any;
    res: HttpResponse;
    log: Logger;
    done(err?: Error | null, propertyBag?: { [key: string]: any }): void;
}
