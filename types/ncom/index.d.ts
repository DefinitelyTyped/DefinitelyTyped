/// <reference types="node" />

import { EventEmitter } from "events";
import { ListenOptions, Socket, SocketConstructorOpts } from "net";
import { TlsOptions } from "tls";

export class ComSocket extends EventEmitter {
    id: string;
    connected: boolean;
    batchDuration: number;

    socket: Socket;

    constructor(options: SocketConstructorOpts | Socket, id: string);

    /**
     * events.EventEmitter
     *   1. error
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "error", err: Error): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "error", listener: (err: Error) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "error", listener: (err: Error) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;

    write(data: any, writeOptions?: WriteOptions): void;

    end: () => void;
    destroy: () => void;
}

export class ComServer extends EventEmitter {
    constructor(options?: ComServerOptions);
    constructor(options: SecureComServerOptions);

    /**
     * events.EventEmitter
     *   1. error
     *   2. connection
     *
     * All other events are forwarded to net.Server
     */

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "connection", listener: ConnectionListener): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "connection", listener: ConnectionListener): this;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "connection", listener: ConnectionListener): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "connection", listener: ConnectionListener): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "connection", listener: ConnectionListener): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "connection", listener: ConnectionListener): this;

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "connection", listener: ConnectionListener): this;

    /**
     * Forwards to net.Server.listen()
     */
    // tslint:disable:unified-signatures Copied from net.d.ts, where the rule is disabled
    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): this;
    listen(port?: number, hostname?: string, listeningListener?: () => void): this;
    listen(port?: number, backlog?: number, listeningListener?: () => void): this;
    listen(port?: number, listeningListener?: () => void): this;
    listen(path: string, backlog?: number, listeningListener?: () => void): this;
    listen(path: string, listeningListener?: () => void): this;
    listen(options: ListenOptions, listeningListener?: () => void): this;
    listen(handle: any, backlog?: number, listeningListener?: () => void): this;
    listen(handle: any, listeningListener?: () => void): this;
    // tslint:enable:unified-signatures

    /**
     * Forwards to net.Server.close()
     */

    close(callback?: (err?: Error) => void): this;
}

export function createServer(options?: ComServerOptions, listener?: ConnectionListener): ComServer;
export function createServer(options: SecureComServerOptions, listener?: ConnectionListener): ComServer;
export function createServer(listener?: ConnectionListener): ComServer;

export interface WriteOptions {
    filters?: FilterFunction[] | undefined;
    batch?: boolean | undefined;
}

export type FilterFunction = (data: any) => string;

export interface SecureComServerOptions extends TlsOptions {
    secure: true;
}

export interface ComServerOptions {
    allowHalfOpen?: boolean | undefined;
    pauseOnConnect?: boolean | undefined;
}

export type ConnectionListener = (socket: ComSocket) => void;
