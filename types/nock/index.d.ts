// Type definitions for nock 10.0
// Project: https://github.com/nock/nock
// Definitions by: bonnici <https://github.com/bonnici>
//                 Horiuchi_H <https://github.com/horiuchi>
//                 afharo <https://github.com/afharo>
//                 Matt R. Wilson <https://github.com/mastermatt>
//                 Garanzha Dmitriy <https://github.com/damour>
//                 GP <https://github.com/paambaati>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ReadStream } from 'fs';
import { ClientRequest } from "http";
import { Url } from 'url';

export = nock;

declare function nock(basePath: string | RegExp | Url, options?: nock.Options): nock.Scope;

declare namespace nock {
    function cleanAll(): void;

    function activate(): void;
    function isActive(): boolean;
    function isDone(): boolean;
    function pendingMocks(): string[];
    function activeMocks(): string[];
    function removeInterceptor(interceptor: Interceptor | RequestOptions): boolean;
    function disableNetConnect(): void;
    function enableNetConnect(matcher?: string | RegExp): void;

    function load(path: string): Scope[];
    function loadDefs(path: string): NockDefinition[];
    function define(defs: NockDefinition[]): Scope[];

    let emitter: NodeJS.EventEmitter;

    let recorder: Recorder;
    function restore(): void;

    let back: NockBack;

    interface POJO { [k: string]: any; }
    type RequestBodyMatcher = string | Buffer | RegExp | POJO | { (body: any): boolean; };
    interface RequestHeaderMatcher { [key: string]: string | RegExp | { (headerValue: string): boolean; }; }

    interface HttpHeaders { [key: string]: string | string[] | { (req: any, res: any, body: string): any; }; }
    type InterceptFunction = (
        uri: string | RegExp | { (uri: string): boolean; },
        requestBody?: RequestBodyMatcher,
        interceptorOptions?: Options
    ) => Interceptor;

    type ReplyBody = string | Buffer | ReadStream | POJO;
    type ReplyCallback = (err: any, result: ReplyCallbackResult) => void;
    type ReplyCallbackResult = ReplyBody | [number, ReplyBody] | [number, ReplyBody, HttpHeaders];
    interface ReplyCallbackContext extends Interceptor {
        req: ClientRequest & {
            headers: { [k: string]: string }
        };
    }

    interface Scope extends NodeJS.EventEmitter {
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
            requestBody?: RequestBodyMatcher,
            options?: Options
        ) => Interceptor;

        defaultReplyHeaders(headers: HttpHeaders): this;
        matchHeader(name: string, value: string | RegExp | { (value: string): boolean; }): this;
        filteringPath(regex: RegExp, replace: string): this;
        filteringPath(fn: (path: string) => string): this;
        filteringRequestBody(regex: RegExp, replace: string): this;
        filteringRequestBody(fn: (body: string) => string): this;

        log(out: (message: any, ...optionalParams: any[]) => void): this;
        persist(flag?: boolean): this;
        shouldPersist(): boolean;
        replyContentLength(): this;
        replyDate(d?: Date): this;

        done(): void;
        isDone(): boolean;
        restore(): void;
        pendingMocks(): string[];
        activeMocks(): string[];
    }

    interface Interceptor {
        query(params: boolean | string | { (queryObject: any): boolean; } | POJO): this;

        // tslint (as of 5.16) is under the impression that the callback types can be unified,
        // however, doing so causes the params to lose their inherited types during use.
        /* tslint:disable:unified-signatures */
        reply(callback: (this: ReplyCallbackContext, uri: string, body: ReplyBody, cb: ReplyCallback) => void): Scope;
        reply(callback: (this: ReplyCallbackContext, uri: string, body: ReplyBody) => ReplyCallbackResult): Scope;
        reply(responseCode: number, callback: (this: ReplyCallbackContext, uri: string, body: ReplyBody, cb: ReplyCallback) => void): Scope;
        reply(responseCode: number, callback: (this: ReplyCallbackContext, uri: string, body: ReplyBody) => ReplyCallbackResult): Scope;
        reply(responseCode: number, body?: ReplyBody, headers?: HttpHeaders): Scope;
        /* tslint:enable:unified-signatures */

        replyWithError(errorMessage: string | POJO): Scope;
        replyWithFile(responseCode: number, fileName: string, headers?: HttpHeaders): Scope;

        matchHeader(name: string, value: string | RegExp | { (value: string): boolean; }): this;
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

    interface Options {
        allowUnmocked?: boolean;
        reqheaders?: RequestHeaderMatcher;
        badheaders?: string[];
        filteringScope?: { (scope: string): boolean; };
        encodedQueryParams?: boolean;
    }

    interface RequestOptions {
        proto?: string;
        _https_?: boolean;
        hostname?: string;
        host?: string;
        port?: number;
        method?: string;
        path?: string;
    }

    interface Recorder {
        rec(options?: boolean | RecorderOptions): void;
        clear(): void;
        play(): string[] | NockDefinition[];
    }

    interface RecorderOptions {
        dont_print?: boolean;
        output_objects?: boolean;
        enable_reqheaders_recording?: boolean;
        logging?: (content: string) => void;
        use_separator?: boolean;
    }

    interface NockDefinition {
        scope: string;
        port?: number | string;
        method?: string;
        path: string;
        body?: RequestBodyMatcher;
        status?: number;
        response?: ReplyBody;
        headers?: HttpHeaders;
        reqheaders?: RequestHeaderMatcher;
        options?: Options;
    }

    type NockBackMode = "wild" | "dryrun" | "record" | "lockdown";

    interface NockBack {
        fixtures: string;
        setMode(mode: NockBackMode): void;

        (fixtureName: string, nockedFn: (nockDone: () => void) => void): void;
        (fixtureName: string, options: NockBackOptions, nockedFn: (nockDone: () => void) => void): void;
        (fixtureName: string, options?: NockBackOptions): Promise<{ nockDone: () => void, context: NockBackContext }>;
    }

    interface NockBackContext {
        scopes: Scope[];
        assertScopesFinished(): void;
        isLoaded: boolean;
    }

    interface NockBackOptions {
        before?: (def: NockDefinition) => void;
        after?: (scope: Scope) => void;
        afterRecord?: (defs: NockDefinition[]) => NockDefinition[];
        recorder?: RecorderOptions;
    }
}
