// Type definitions for nanomsg 4.2
// Project: https://github.com/nickdesaulniers/node-nanomsg
// Definitions by: Tobey Blaber <https://github.com/toebeann>
//                 Titan <https://github.com/titan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export interface Options {
    raw?: boolean | undefined;
    tcpnodelay?: boolean | undefined;
    maxttl?: number | undefined;
    linger?: number | undefined;
    sndbuf?: number | undefined;
    rcvbuf?: number | undefined;
    sndtimeo?: number | undefined;
    rcvtimeo?: number | undefined;
    reconn?: number | undefined;
    maxreconn?: number | undefined;
    sndprio?: number | undefined;
    rcvprio?: number | undefined;
    ipv6?: boolean | undefined;
    rcvmaxsize?: number | undefined;
    chan?: string[] | undefined;
    wsopt?: 'text' | 'binary' | undefined;
    dontwait?: boolean | undefined;
}

export type SocketType =
    | 'pair'
    | 'pub' | 'sub'
    | 'req' | 'rep'
    | 'push' | 'pull'
    | 'surveyor' | 'respondent'
    | 'bus';

export type Domain =
    | 1 | 2;

export type Protocol =
    | 16
    | 32 | 33
    | 48 | 49
    | 80 | 81
    | 98 | 99
    | 112;

export interface SocketEvents {
    data(data: Buffer): void;
    error(error: unknown): void;
    close(): void;
}

export interface SocketEventEmitter {
    addListener<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    on<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    once<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    prependListener<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    prependOnceListener<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;

    off<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    removeAllListeners(event?: keyof SocketEvents): this;
    removeListener<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;

    emit<E extends keyof SocketEvents>(event: E, ...args: Parameters<SocketEvents[E]>): boolean;
    eventNames(): Array<keyof SocketEvents>;
    rawListeners<E extends keyof SocketEvents>(event: E): Array<SocketEvents[E]>;
    listeners<E extends keyof SocketEvents>(event: E): Array<SocketEvents[E]>;
    listenerCount(event: keyof SocketEvents): number;

    getMaxListeners(): number;
    setMaxListeners(maxListeners: number): this;
}

export class Socket extends (EventEmitter as new () => SocketEventEmitter) {
    type: SocketType;
    af_domain: Domain;
    protocol: Protocol;
    sender: boolean;
    receiver: boolean;
    binding: number;
    bound: { readonly [addr: string]: number };
    connected: { readonly [addr: string]: number };
    queue: Array<Buffer | string>;
    closed?: boolean;
    closed_status?: number;

    constructor(type: SocketType, opts?: Options)

    /* Socket API */
    bind(addr: string): number | null;
    connect(addr: string): number | null;
    shutdown(addr: string): number | null;
    flush(): void;
    close(): void;
    send(buf: Buffer | string): number;

    /* Sockopt API */
    linger(duration: number): boolean;
    linger(): number;
    sndbuf(size: number): boolean;
    sndbuf(): number;
    rcvbuf(size: number): boolean;
    rcvbuf(): number;
    sndtimeo(duration: number): boolean;
    sndtimeo(): number;
    rcvtimeo(duration: number): boolean;
    rcvtimeo(): number;
    reconn(duration: number): boolean;
    reconn(): number;
    maxreconn(duration: number): boolean;
    maxreconn(): number;
    sndprio(priority: number): boolean;
    sndprio(): number;
    rcvprio(priority: number): boolean;
    rcvprio(): number;
    rcvmaxsize(size: number): boolean;
    rcvmaxsize(): number;
    maxttl(hops: number): boolean;
    maxttl(): number;
    ipv6(boolean?: boolean): boolean;
    tcpnodelay(boolean?: boolean): boolean;
    wsopt(str: string): boolean;
    wsopt(): string;
    dontwait(boolean?: boolean): boolean;

    /* Subscription API */
    chan(list: string[]): void;
    rmchan(...list: string[]): void;
}

export type Device = EventEmitter & {
    sock1: Socket;
    sock2: Socket;
    s1: number;
    s2: number;
};

export function createSocket(type: SocketType, opts?: Options): Socket;
export function symbolInfo(symbol: any): any;
export function symbol(symbol: any): any;
export function term(): any;
export function socket(type: SocketType, opts?: Options): Socket;

export function createDevice(sock1: Socket, sock2: Socket): Device;
export function device(sock1: Socket, sock2: Socket): Device;
