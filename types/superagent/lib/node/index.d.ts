import * as http from 'http';
import * as https from 'https';
import * as http2 from 'http2';
import { Stream } from "stream";
import { UrlObject } from "url";
import methods = require('methods');

import Agent = require('./agent');
import { Blob } from "buffer";
import { ReadStream } from "fs";
import { LookupFunction } from "net";
import RequestBase = require("../request-base");
import ResponseBase = require('./response');

type CallbackHandler = (err: any, res: ResponseBase) => void;

type MultipartValueSingle = Blob | Buffer | ReadStream | string | boolean | number;

type HttpMethod<Req extends SARequest> =
    | ((url: string, callback?: CallbackHandler) => Req)
    | ((url: string, data?: string | Record<string, any>, callback?: CallbackHandler) => Req)
;
type RequestMethods<Req extends SARequest> = {
    [key in (typeof methods[number]) | 'del']: HttpMethod<Req>;
}

declare class SARequest extends Stream implements RequestBase {
    constructor(method: string, url: string | URL | UrlObject);

    [Symbol.toStringTag]: string;

    abort(): this;
    clearTimeout(): this;
    parse(parser: ((str: string) => any) | ((res: ResponseBase, callback: (err: Error | null, body: any) => void) => void)): this;
    responseType(type: string): this;
    serialize(serializer: (obj: any) => string): this;
    timeout(ms: number | { deadline?: number; response?: number; }): this;
    retry(count?: number, callback?: ((err: any, res: ResponseBase) => void)): this;
    use(fn: (req: this) => void): this;
    ok(callback: (res: ResponseBase) => boolean): this;
    get(header: string): string;
    getHeader(header: string): string;
    set(field: Record<string, string>): this;
    set(field: string, val: string): this;
    set(field: 'Cookie', val: string[]): this;
    unset(field: string): this;
    field(name: string, val: (string | number | boolean | Blob | Buffer | ReadStream) | Array<string | number | boolean | Blob | Buffer | ReadStream>): this;
    field(fields: { [fieldName: string]: (string | number | boolean | Blob | Buffer | ReadStream) | Array<string | number | boolean | Blob | Buffer | ReadStream>; }): this;
    withCredentials(on?: boolean): this;
    redirects(n: number): this;
    maxResponseSize(n: number): this;
    send(data?: string | object): this;
    sortQuery(sort?: boolean | ((a: string, b: string) => number)): this;
    toJSON(): { method: string; url: string; data?: string | object; headers: Array<string | string[]>; };
    then<TResult1 = ResponseBase, TResult2 = never>(onfulfilled?: ((value: ResponseBase) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<ResponseBase | TResult>;
    finally(onfinally?: (() => void) | null): Promise<ResponseBase>;

    method: string;
    url: string;
    cookies: string;

    http2(enable?: boolean): this;
    attach(
        field: string,
        file: MultipartValueSingle,
        options?: string | { filename?: string | undefined; contentType?: string | undefined },
    ): this;
    agent(): Agent | http.Agent | https.Agent;
    agent(agent: Agent | http.Agent | https.Agent): this;
    lookup(): LookupFunction;
    lookup(lookup: LookupFunction): this;
    type(val: string): this;
    accept(type: string): this;
    query(val: Record<string, any> | string): this;
    write(data: string | Buffer, encoding?: string): boolean;
    buffer(val?: boolean): this;
    auth(user: string, pass: string, options?: { type: "basic" | "auto" }): this;
    auth(token: string, options: { type: "bearer" }): this;
    ca(cert: string | string[] | Buffer | Buffer[]): this;
    key(cert: string | string[] | Buffer | Buffer[]): this;
    pfx(cert: string | string[] | Buffer | Buffer[] | { pfx: string | Buffer; passphrase: string }): this;
    cert(cert: string | string[] | Buffer | Buffer[]): this;
    disableTLSCerts(): this;
    end(callback?: CallbackHandler): void;
    connect(override: string | { [hostname: string]: false | string | { host: string; port: number } }): this;
    trustLocalhost(enabled?: boolean): this;
}
declare namespace request {
    type Request = RequestBase & Stream;
    type Response = ResponseBase;
    type SuperAgentRequest = SARequest;
    type Plugin = <Req extends SuperAgentRequest = SuperAgentRequest>(req: Req) => void;

    interface ProgressEvent {
        direction: "download" | "upload";
        loaded: number;
        percent?: number | undefined;
        total?: number | undefined;
    }

    interface ResponseError extends Error {
        status?: number | undefined;
        response?: Response | undefined;
        timeout?: boolean | undefined;
    }

    interface HTTPError extends Error {
        status: number;
        text: string;
        method: string;
        path: string;
    }

    interface SuperAgent<Req extends SARequest = SARequest> extends RequestMethods<Req>, Stream {

    }

    interface SuperAgentStatic<Req extends SARequest = SARequest> extends SuperAgent<Req> {
        (url: string): SARequest;
        (method: string, url: string): SARequest;

        Request: SARequest;
        Response: ResponseBase;
        agent(): Agent;
        protocols: {
            'http:': typeof http;
            'https:': typeof https;
            'http2:': typeof http2;
        }
        serialize: Record<string, (...args: any[]) => string>;
        parse: Record<string, (res: Response, cb: ((err: any, res: Response) => void)) => void>;
        buffer: Record<string, boolean>;
    }
}

declare const request: request.SuperAgentStatic;

export = request;
