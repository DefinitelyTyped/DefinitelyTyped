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

declare type HttpMethod =
    | ((url: string, callback?: CallbackHandler) => SARequest)
    | ((url: string, data?: string | Record<string, any>, callback?: CallbackHandler) => SARequest)
;
declare type RequestMethods = {
    [key in (typeof methods[number]) | 'del']: HttpMethod;
}

declare class SARequest extends Stream implements RequestBase {
    constructor(method: string, url: string | URL | UrlObject);

    [Symbol.toStringTag]: string;

    abort(): this;
    clearTimeout(): this;
    parse(parser: ((str: string) => any) | ((res: ResponseBase, callback: (err: Error | null, body: any) => void) => void)): this;
    responseType(type: string): this;
    serialize(serializer: (obj: any) => string): this;
    timeout(ms: number | { deadline?: number | undefined; response?: number | undefined; }): this;
    retry(count?: number | undefined, callback?: ((err: any, res: ResponseBase) => void) | undefined): this;
    use(fn: (req: this) => void): this;
    ok(callback: (res: ResponseBase) => boolean): this;
    get(header: string): string;
    getHeader(header: string): string;
    set(field: Record<string, string>): this;
    set(field: string, val: string): this;
    set(field: 'Cookie', val: string[]): this;
    unset(field: string): this;
    field(name: string, val: (string | number | boolean | Blob | Buffer | ReadStream) | (string | number | boolean | Blob | Buffer | ReadStream)[]): this;
    field(fields: { [fieldName: string]: (string | number | boolean | Blob | Buffer | ReadStream) | (string | number | boolean | Blob | Buffer | ReadStream)[]; }): this;
    withCredentials(on?: boolean | undefined): this;
    redirects(n: number): this;
    maxResponseSize(n: number): this;
    send(data?: string | object | undefined): this;
    sortQuery(sort?: boolean | ((a: string, b: string) => number) | undefined): this;
    toJSON(): { method: string; url: string; data?: string | object | undefined; headers: (string | string[])[]; };
    then<TResult1 = ResponseBase, TResult2 = never>(onfulfilled?: ((value: ResponseBase) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined): Promise<ResponseBase | TResult>;
    finally(onfinally?: (() => void) | null | undefined): Promise<ResponseBase>;

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
    export type Response = ResponseBase;
    export type SuperAgentRequest = SARequest;
    export type Plugin = (req: SARequest) => void;
    export interface ProgressEvent {
        direction: "download" | "upload";
        loaded: number;
        percent?: number | undefined;
        total?: number | undefined;
    }

    export interface ResponseError extends Error {
        status?: number | undefined;
        response?: Response | undefined;
        timeout?: boolean | undefined;
    }

    export interface HTTPError extends Error {
        status: number;
        text: string;
        method: string;
        path: string;
    }

    export interface SuperAgentStatic extends RequestMethods {
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
