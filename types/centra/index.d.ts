// Type definitions for centra 2.2
// Project: https://github.com/ethanent/centra
// Definitions by: Tony Wooster <https://github.com/twooster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { RequestOptions, IncomingMessage } from 'http';
import { URL } from 'url';

interface CentraFactory {
    (url: URL | string, method?: string): Centra.Request;
}

declare const Centra: CentraFactory;

declare namespace Centra {
    interface Response {
        coreRes: IncomingMessage;
        headers: IncomingMessage['headers'];
        statusCode: IncomingMessage['statusCode'];
        body: Buffer;

        json(): Promise<any>;
        text(): Promise<string>;
    }

    interface Request {
        url: URL;
        method: string;
        data: string | Buffer | null;
        sendDataAs: 'form' | 'json' | 'buffer' | null;
        reqHeaders: { [k: string]: string };
        streamEnabled: boolean;
        compressionEnabled: boolean;
        timeoutTime: number | null;
        coreOptions: RequestOptions;

        query(key: string, value: any): this;
        query(params: { [k: string]: any }): this;
        path(relativePath: string): this;
        body(data: any, sendAs?: 'json' | 'buffer' | 'form'): this;
        header(key: string, value: string): this;
        header(headers: { [k: string]: string }): this;
        timeout(timeMs: number): this;
        option<T extends keyof RequestOptions>(key: T, value: RequestOptions[T]): this;
        stream(): this;
        compress(): this;
        send(): Promise<Response>;
    }
}

export = Centra;
