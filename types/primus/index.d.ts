// Type definitions for primus 7.3
// Project: https://github.com/primus/primus#readme
// Definitions by: Christian Vaagland Tellnes <https://github.com/tellnes>
//                 Alaa Zorkane <https://github.com/alaazorkane>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

/// <reference types="node" />
import * as http from 'http';
import { EventEmitter } from 'events';
import { ParsedUrlQuery } from 'querystring';
import { Stream } from 'stream';

export = Primus;

// https://github.com/primus/emits
// This can't be typed correctly
//  - https://github.com/microsoft/TypeScript/issues/1360
//  - https://stackoverflow.com/questions/22043041/typescript-rest-parameter-in-the-middle-of-arguments-list
declare namespace emits {
    interface done {
        (err: Error | null | undefined, arg: any): void;
    }
    interface parser {
        (done: done, ...args: any[]): void;
    }
    interface fn {
        (...args: any[]): boolean;
    }
    interface emits {
        (event: string, parser: parser): fn;
        (event: string, arg1: any, parser: parser): fn;
        (event: string, ...args: any[]): fn;
    }
}

interface PrimusPacket {
    data: unknown;
}

interface Parser {
    encoder: (data: any, fn: (error: Error, response: any) => void) => void;
    decoder: (data: any, fn: (error: Error, response: any) => void) => void;
}

type AuthorizationHandler = (
    req: http.IncomingMessage,
    done: (err?: string | Error | { statusCode?: number; authenticate?: string; message?: string }) => void,
) => void;

type Middleware = (req: http.IncomingMessage, res: http.ServerResponse) => void;

declare class Primus extends EventEmitter {
    on(event: 'plugin' | 'plugout', cb: (name: string, energon: unknown) => void): this;
    on(event: 'connection' | 'disconnection', cb: (spark: Primus.Spark) => void): this;

    constructor(server: http.Server, options?: PrimusOptions);

    authorize(fn: AuthorizationHandler): this;

    forEach(cb: (spark: Primus.Spark) => boolean): this;
    forEach(
        cb: (spark: Primus.Spark, next: (err: Error | null, forward: boolean) => void) => void,
        done: (err: Error | null) => void,
    ): this;

    write(data: any): void;

    transform(type: 'incoming' | 'outgoing', fn: (packet: PrimusPacket) => void): this;

    // This is marked as private in the source code, but documented in the readme
    spark(id: string): Primus.Spark;

    library(): string;

    // This has a lot of variations and can be improved
    plugin(): { [name: string]: unknown };
    plugin(name?: string): unknown;
    plugin(energon: { name: string }): this;
    plugin(name: string, energon: string | { name: string }): this;

    plugout(name: string): this;

    use(fn: () => Middleware | Middleware, options?: object, level?: number): this;
    use(name: string, fn: () => Middleware | Middleware, options?: object, level?: number): this;

    remove(name: string): this;
    enable(name: string): this;
    disable(name: string): this;

    destroy(options: { close?: boolean; reconnect: boolean; timeout: number }, fn: () => void): this;
    end(data?: any, options?: { reconnect?: boolean }): void;

    reserved(name: string): boolean;

    emits: emits.emits;

    Socket: typeof Primus.Socket;
}

interface PrimusOptions {
    authorization?: AuthorizationHandler;
    pathname?: string;
    parser?: string | Parser;
    transformer?: 'websockets' | 'engine.io' | 'browserchannel' | 'sockjs' | 'faye' | 'uws';
    plugin?: string | object;
    pingInterval?: number;
    global?: string;
    compression?: boolean;
    maxLength?: number;
    transport?: object;
    idGenerator?(): string;

    // Cors
    origins?: string;
    methods?: string;
    credentials?: boolean;
    maxAge?: string;
    headers?: boolean;
    exposed?: boolean;
}

declare namespace Primus {
    function createSocket(options?: PrimusOptions): typeof Socket;

    function createServer(options?: PrimusOptions): Primus;
    function createServer(fn: (spark: Spark) => void, options?: PrimusOptions): Primus;

    interface Spark extends Stream {
        headers: http.IncomingHttpHeaders;
        address: {
            ip: string;
            secure: boolean;
            port: number;
        };
        query: ParsedUrlQuery;
        socket: unknown;
        id: string;
        request: http.IncomingMessage;

        write(data: any): void;
        end(data?: any, options?: { reconnect?: boolean }): void;
        emits: emits.emits;

        on(event: 'data', handler: (message: any) => void): this;
        on(event: 'end', handler: () => void): this;
    }

    interface ReconnectOpts {
        max?: number;
        min?: number;
        retries?: number | null;
        'reconnect timeout'?: number;
        factor?: number;
    }
    interface ReconnectEventOpts extends Required<ReconnectOpts> {
        start: number;
        duration: number;
        attempt: number;
        backoff: boolean;
        scheduled: number;
    }
    interface SocketOptions {
        // https://github.com/unshiftio/recovery
        reconnect?: {
            max?: number;
            min?: number;
            retries?: number;
            'reconnect timeout'?: number;
            factor?: number;
        };
        timeout?: number;
        pingTimeout?: number;
        strategy?: string | Array<'disconnect' | 'online' | 'timeout'>;
        manual?: boolean;
        websockets?: boolean;
        network?: boolean;
        transport?: object;
        queueSize?: number;
    }
    class Socket extends Stream {
        constructor(options?: SocketOptions);
        constructor(url?: string, options?: SocketOptions);

        write(data: any): this;
        end(data?: any): this;
        destroy(): void;
        emits: emits.emits;
        id(fn: (id: string) => void): this;

        on(event: 'open' | 'end', handler: () => void): this;
        on(event: 'reconnect' | 'reconnect scheduled' | 'reconnected', handler: (opts: ReconnectEventOpts) => void): this;
        on(event: 'reconnect timeout' | 'reconnect failed', handler: (err: Error, opts: ReconnectEventOpts) => void): this;
        on(event: 'data', handler: (message: any) => void): this;
        on(event: 'error', handler: (err: Error) => void): this;
        open(): this;
    }
}
