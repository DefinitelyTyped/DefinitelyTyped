// Type definitions for @hapi/wreck 15.0
// Project: https://github.com/hapijs/wreck
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
//                 Rodrigo Saboya <https://github.com/saboya>
//                 Silas Rech <https://github.com/lenovouser>
//                 Geoff Goodman <https://github.com/ggoodman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node" />


import * as Boom from "@hapi/boom";
import * as events from "events";
import * as http from "http";
import * as stream from "stream";
import * as Url from "url";

interface RequestOptions {
    baseUrl?: string;
    socketPath? : string;
    payload?: string | Buffer | stream.Readable | object;
    headers?: { [key: string]: string | number };
    redirects?: number;
    redirect303?: boolean;
    beforeRedirect?: (redirectMethod: string, statusCode: number, location: string, resHeaders: { [key: string]: unknown }, redirectOptions: RequestOptions, next: () => {}) => void;
    redirected?: (statusCode: number, location: string, req: http.ClientRequest) => void;
    timeout?: number;
    maxBytes?: number;
    rejectUnauthorized?: boolean;
    downstreamRes?: http.ServerResponse;
    agent?: http.Agent | false;
    secureProtocol?: string;
    ciphers?: string;
    events?: boolean;
}

interface ReadOptions {
    timeout?: number;
    json?: true | "strict" | "force";
    gunzip?: boolean | "force";
    maxBytes?: number;
}

interface RequestResponse {
    res: http.IncomingMessage;
    payload: Buffer | object;
}

declare type RequestCallback = (uri: string, options: RequestOptions & { payload?: Buffer | object }) => void;
declare type ResponseCallback = (err: Boom | undefined, details: { req: http.ClientRequest, res: http.IncomingMessage | undefined, start: number, url: Url.URL }) => void;

declare class WreckEventEmitter extends events.EventEmitter {
    on(event: "request", listener: RequestCallback): this;
    on(event: "response", listener: ResponseCallback): this;
}

interface WreckObject {
    defaults: (options: RequestOptions) => WreckObject;

    request: (method: string, uri: string, options: RequestOptions) => Promise<http.IncomingMessage> & { req: http.ClientRequest };

    read: (response: http.IncomingMessage, options: ReadOptions) => Promise<unknown>;

    get: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    post: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    patch: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    put: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    delete: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;

    toReadableStream: (payload: string | Buffer, encoding?: string) => stream.Readable;

    parseCacheControl: (field: string) => { [key: string]: string };

    agents: {
        http: http.Agent,
        https: http.Agent,
        httpsAllowUnauthorized: http.Agent
    };

    events?: WreckEventEmitter;
}

declare var wreck: WreckObject;

export = wreck;
