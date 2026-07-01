/// <reference types="node" />

import { EventEmitter } from "events";

export interface RtpEngineResponse {
    result: string;
    sdp?: string;
    "error-reason"?: string;
    [key: string]: any;
}

export interface ClientOptions {
    localPort?: number;
    localAddress?: string;
    timeout?: number;
    rejectOnError?: boolean;
}

export interface WsClientOptions {
    url: string;
    timeout?: number;
}

export interface TcpClientOptions {
    hostport: string;
    timeout?: number;
}

export interface UdpDestination {
    port: number;
    host: string;
}

export interface UdpCommand {
    (port: number, host: string, opts?: object): Promise<RtpEngineResponse>;
    (port: number, host: string, opts: object, callback: (err: any, data: RtpEngineResponse) => void): Client;
    (dest: UdpDestination, opts?: object): Promise<RtpEngineResponse>;
    (dest: UdpDestination, opts: object, callback: (err: any, data: RtpEngineResponse) => void): Client;
}

export interface WsCommand {
    (opts?: object): Promise<RtpEngineResponse>;
    (opts: object, callback: (err: any, data: RtpEngineResponse) => void): WsClient;
}

export interface TcpCommand {
    (opts?: object): Promise<RtpEngineResponse>;
    (opts: object, callback: (err: any, data: RtpEngineResponse) => void): TcpClient;
}

export class RtpEngineError extends Error {
    constructor(message?: string);
}

export class BaseClient extends EventEmitter {
    connected: boolean;
    timeout: number;
    readonly type: string;
    close(): void;
    on(event: "listening", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
}

export class Client extends BaseClient {
    constructor(callback?: () => void);
    constructor(port: number, callback?: () => void);
    constructor(port: number, host: string, callback?: () => void);
    constructor(opts: ClientOptions, callback?: () => void);

    answer: UdpCommand;
    delete: UdpCommand;
    list: UdpCommand;
    offer: UdpCommand;
    ping: UdpCommand;
    query: UdpCommand;
    startRecording: UdpCommand;
    stopRecording: UdpCommand;
    blockDTMF: UdpCommand;
    unblockDTMF: UdpCommand;
    playDTMF: UdpCommand;
    blockMedia: UdpCommand;
    unblockMedia: UdpCommand;
    silenceMedia: UdpCommand;
    unsilenceMedia: UdpCommand;
    startForwarding: UdpCommand;
    stopForwarding: UdpCommand;
    playMedia: UdpCommand;
    stopMedia: UdpCommand;
    statistics: UdpCommand;
    publish: UdpCommand;
    subscribeRequest: UdpCommand;
    subscribeAnswer: UdpCommand;
    unsubscribe: UdpCommand;
}

export class WsClient extends BaseClient {
    constructor(url: string);
    constructor(opts: WsClientOptions);

    on(event: "close", listener: () => void): this;
    on(event: "reconnected", listener: () => void): this;
    on(event: "listening", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;

    answer: WsCommand;
    delete: WsCommand;
    list: WsCommand;
    offer: WsCommand;
    ping: WsCommand;
    query: WsCommand;
    startRecording: WsCommand;
    stopRecording: WsCommand;
    blockDTMF: WsCommand;
    unblockDTMF: WsCommand;
    playDTMF: WsCommand;
    blockMedia: WsCommand;
    unblockMedia: WsCommand;
    silenceMedia: WsCommand;
    unsilenceMedia: WsCommand;
    startForwarding: WsCommand;
    stopForwarding: WsCommand;
    playMedia: WsCommand;
    stopMedia: WsCommand;
    statistics: WsCommand;
    publish: WsCommand;
    subscribeRequest: WsCommand;
    subscribeAnswer: WsCommand;
    unsubscribe: WsCommand;
}

export class TcpClient extends BaseClient {
    constructor(hostport: string);
    constructor(opts: TcpClientOptions);

    on(event: "connect", listener: () => void): this;
    on(event: "listening", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;

    answer: TcpCommand;
    delete: TcpCommand;
    list: TcpCommand;
    offer: TcpCommand;
    ping: TcpCommand;
    query: TcpCommand;
    startRecording: TcpCommand;
    stopRecording: TcpCommand;
    blockDTMF: TcpCommand;
    unblockDTMF: TcpCommand;
    playDTMF: TcpCommand;
    blockMedia: TcpCommand;
    unblockMedia: TcpCommand;
    silenceMedia: TcpCommand;
    unsilenceMedia: TcpCommand;
    startForwarding: TcpCommand;
    stopForwarding: TcpCommand;
    playMedia: TcpCommand;
    stopMedia: TcpCommand;
    statistics: TcpCommand;
    publish: TcpCommand;
    subscribeRequest: TcpCommand;
    subscribeAnswer: TcpCommand;
    unsubscribe: TcpCommand;
}
