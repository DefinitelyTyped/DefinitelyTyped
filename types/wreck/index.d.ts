/// <reference types="node" />

import * as Boom from "boom";
import * as events from "events";
import * as http from "http";
import * as stream from "stream";
import * as Url from "url";

interface RequestOptions {
    baseUrl?: string | undefined;
    socketPath?: string | undefined;
    payload?: any;
    headers?: { [key: string]: any } | undefined;
    redirects?: number | undefined;
    redirect303?: boolean | undefined;
    beforeRedirect?:
        | ((
            redirectMethod: string,
            statusCode: number,
            location: string,
            resHeaders: { [key: string]: any },
            redirectOptions: any,
            next: () => {},
        ) => void)
        | undefined;
    redirected?: ((statusCode: number, location: string, req: http.ClientRequest) => void) | undefined;
    timeout?: number | undefined;
    maxBytes?: number | undefined;
    rejectUnauthorized?: boolean | undefined;
    downstreamRes?: any;
    agent?: WreckObject["agents"] | false | undefined;
    secureProtocol?: string | undefined;
    ciphers?: string | undefined;
    events?: boolean | undefined;
}

interface ReadOptions {
    timeout?: number | undefined;
    json?: true | "strict" | "force" | undefined;
    gunzip?: boolean | "force" | undefined;
    maxBytes?: number | undefined;
}

interface RequestResponse {
    res: http.IncomingMessage;
    payload: any;
}

declare type RequestCallback = (uri: string, options: RequestOptions & { payload?: any }) => void;
declare type ResponseCallback = (
    err: Boom | undefined,
    details: { req: http.ClientRequest; res: http.IncomingMessage | undefined; start: number; url: Url.URL },
) => void;

declare class WreckEventEmitter extends events.EventEmitter {
    on(event: "request", listener: RequestCallback): this;
    on(event: "response", listener: ResponseCallback): this;
}

interface WreckObject {
    defaults: (options: RequestOptions) => WreckObject;

    request: (
        method: string,
        uri: string,
        options: RequestOptions,
    ) => Promise<http.IncomingMessage> & { req: http.ClientRequest };

    read: (response: http.IncomingMessage, options: ReadOptions) => Promise<any>;

    get: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    post: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    patch: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    put: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;
    delete: (uri: string, options: RequestOptions & ReadOptions) => Promise<RequestResponse>;

    toReadableStream: (payload: any, encoding?: string) => stream.Readable;

    parseCacheControl: (field: string) => any;

    agents: {
        http: http.Agent;
        https: http.Agent;
        httpsAllowUnauthorized: http.Agent;
    };

    events?: WreckEventEmitter | undefined;
}

declare var wreck: WreckObject;

export = wreck;
