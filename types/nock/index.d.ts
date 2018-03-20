// Type definitions for nock v9.1.3
// Project: https://github.com/node-nock/nock
// Definitions by: bonnici <https://github.com/bonnici>
//                 Horiuchi_H <https://github.com/horiuchi>
//                 afharo <https://github.com/afharo>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Garanzha Dmitriy <https://github.com/damour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = nock;

declare function nock(basePath: string | RegExp, options?: nock.Options): nock.Scope;

declare namespace nock {
    export function cleanAll(): void;

    export function activate(): void;
    export function isActive(): boolean;
    export function isDone(): boolean;
    export function pendingMocks(): string[];
    export function removeInterceptor(interceptor: Interceptor | RequestOptions): boolean;
    export function disableNetConnect(): void;
    export function enableNetConnect(matcher?: string | RegExp): void;

    export function load(path: string): Scope[];
    export function loadDefs(path: string): NockDefinition[];
    export function define(defs: NockDefinition[]): Scope[];

    export var emitter: NodeJS.EventEmitter;

    export var recorder: Recorder;
    export function restore(): void;

    export var back: NockBack;

    type HttpHeaders = { [key: string]: string | string[] | { (req: any, res: any, body: string): any; }; };
    type InterceptFunction = (
        uri: string | RegExp | { (uri: string): boolean; },
        requestBody?: string | RegExp | { (body: any): boolean; } | any,
        interceptorOptions?: Options
    ) => Interceptor;
    export type ReplyCallback = (err: any, result: ReplyCallbackResult) => void;
    type ReplyCallbackResult = string | [number, string | any] | [number, string | any, HttpHeaders] | any;


    export interface Scope extends NodeJS.EventEmitter {
        get: InterceptFunction;
        post: InterceptFunction;
        put: InterceptFunction;
        head: InterceptFunction;
        patch: InterceptFunction;
        merge: InterceptFunction;
        delete: InterceptFunction;
        options: InterceptFunction;

        intercept: (
            uri: string | RegExp | { (uri: string): boolean; },
            method: string,
            requestBody?: string | RegExp | { (body: any): boolean; } | any,
            options?: Options
        ) => Interceptor;


        defaultReplyHeaders(headers: HttpHeaders): this;
        matchHeader(name: string, value: string | RegExp | { (value: string): boolean; }): this;
        filteringPath(regex: RegExp, replace: string): this;
        filteringPath(fn: (path: string) => string): this;
        filteringRequestBody(regex: RegExp, replace: string): this;
        filteringRequestBody(fn: (body: string) => string): this;

        log(out: () => void): this;
        persist(flag?: boolean): this;
        shouldPersist(): boolean;
        replyContentLength(): this;
        replyDate(d?: Date): this;

        done(): void;
        isDone(): boolean;
        restore(): void;
        pendingMocks(): string[];
    }

    export interface Interceptor {
        query(params: boolean | { (querObject: any): boolean; } | any): this;

        reply(responseCode: number, body?: string | any, headers?: HttpHeaders): Scope;
        reply(responseCode: number, callback: (uri: string, body: string, cb?: ReplyCallback) => ReplyCallbackResult, headers?: HttpHeaders): Scope;
        reply(callback: (uri: string, body: string, cb?: ReplyCallback) => ReplyCallbackResult, headers?: HttpHeaders): Scope;
        replyWithError(errorMessage: string | any): Scope;
        replyWithFile(responseCode: number, fileName: string, headers?: HttpHeaders): Scope;

        basicAuth(options: { user: string; pass?: string; }): this;

        times(newCounter: number): this;
        once(): this;
        twice(): this;
        thrice(): this;
        optionally(): this;

        delay(opts: number | { head?: number; body?: number; }): this;
        delayBody(timeMs: number): this;
        delayConnection(timeMs: number): this;
        getTotalDelay(): number;
        socketDelay(timeMs: number): this;
    }

    export interface Options {
        allowUnmocked?: boolean;
        reqheaders?: { [key: string]: string | RegExp | { (headerValue: string): boolean; }; };
        badheaders?: string[];
        filteringScope?: { (scope: string): boolean; };
    }

    export interface RequestOptions {
        proto?: string;
        _https_?: boolean;
        hostname?: string;
        host?: string;
        port?: number;
        method?: string;
        path?: string;
    }

    export interface Recorder {
        rec(options?: boolean | RecorderOptions): void;
        clear(): void;
        play(): string[] | NockDefinition[];
    }

    export interface RecorderOptions {
        dont_print?: boolean;
        output_objects?: boolean;
        enable_reqheaders_recording?: boolean;
        logging?: (content: string) => void;
        use_separator?: boolean;
    }

    export interface NockDefinition {
        scope: string;
        port?: number | string;
        method?: string;
        path: string;
        body?: string | any;
        status?: number;
        response?: string | any;
        headers?: HttpHeaders;
        reqheaders?: { [key: string]: string | RegExp | { (headerValue: string): boolean; }; };
        options?: Options;
    }

    export type NockBackMode = "wild" | "dryrun" | "record" | "lockdown";

    export interface NockBack {
        fixtures: string;
        setMode(mode: NockBackMode): void;

        (fixtureName: string, nockedFn: (nockDone: () => void) => void): void;
        (fixtureName: string, options: NockBackOptions, nockedFn: (nockDone: () => void) => void): void;
    }

    export interface NockBackOptions {
        before?: (def: NockDefinition) => void;
        after?: (scope: Scope) => void;
        afterRecord?: (defs: NockDefinition[]) => NockDefinition[];
        recorder?: RecorderOptions;
    }
}
