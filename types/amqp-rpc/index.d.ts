// Type definitions for amqp-rpc v0.0.8
// Project: https://github.com/demchenkoe/node-amqp-rpc/
// Definitions by: Wonshik Kim <https://github.com/wokim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



export interface Options {
    connection?: any;
    url?: string;
    exchangeInstance?: any;
    exchange?: string;
    exchange_options?: {
        exclusive?: boolean;
        autoDelete?: boolean;
    };
    ipml_options?: {
        defaultExchangeName?: string;
    }
    conn_options?: any;
}

export interface CallOptions {
    correlationId?: string;
    autoDeleteCallback?: any;
}

export interface HandlerOptions {
    queueName?: string;
    durable?: boolean;
    exclusive?: boolean;
    autoDelete?: boolean;
}

export interface BroadcastOptions {
    ttl?: number;
    onResponse?: any;
    context?: any;
    onComplete?: any;
}

export interface CommandInfo {
    cmd?: string;
    exchange?: string;
    contentType?: string;
    size?: number;
}

export interface Callback {
    (...args: any[]): void;
}

export interface CallbackWithError {
    (err: any, ...args: any[]): void;
}

export declare function factory(opt?: Options): amqpRPC;

export declare class amqpRPC {
    constructor(opt?: Options);
    generateQueueName(type: string): string;
    disconnect(): void;
    call<T>(cmd: string, params: T, cb?: Callback, context?: any, options?: CallOptions): string;
    on<T>(cmd: string, cb: (param?: T, cb?: Callback, info?: CommandInfo) => void, context?: any, options?: HandlerOptions): boolean;
    off(cmd: string): boolean;
    callBroadcast<T>(cmd: string, params: T, options?: BroadcastOptions): void;
    onBroadcast<T>(cmd: string, cb?: (params?: T, cb?: CallbackWithError) => void, context?: any, options?: any): boolean;
    offBroadcast(cmd: string): boolean;
}
