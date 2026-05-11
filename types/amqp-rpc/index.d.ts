/// <reference types="node" />

export interface Options {
    connection?: any;
    url?: string | undefined;
    exchangeInstance?: any;
    exchange?: string | undefined;
    exchange_options?: {
        exclusive?: boolean | undefined;
        autoDelete?: boolean | undefined;
    } | undefined;
    ipml_options?: {
        defaultExchangeName?: string | undefined;
    } | undefined;
    conn_options?: any;
}

export interface CallOptions {
    correlationId?: string | undefined;
    autoDeleteCallback?: any;
}

export interface HandlerOptions {
    queueName?: string | undefined;
    durable?: boolean | undefined;
    exclusive?: boolean | undefined;
    autoDelete?: boolean | undefined;
}

export interface BroadcastOptions {
    ttl?: number | undefined;
    onResponse?: any;
    context?: any;
    onComplete?: any;
}

export interface CommandInfo {
    cmd?: string | undefined;
    exchange?: string | undefined;
    contentType?: string | undefined;
    size?: number | undefined;
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
    on<T>(
        cmd: string,
        cb: (param?: T, cb?: Callback, info?: CommandInfo) => void,
        context?: any,
        options?: HandlerOptions,
    ): boolean;
    off(cmd: string): boolean;
    callBroadcast<T>(cmd: string, params: T, options?: BroadcastOptions): void;
    onBroadcast<T>(
        cmd: string,
        cb?: (params?: T, cb?: CallbackWithError) => void,
        context?: any,
        options?: any,
    ): boolean;
    offBroadcast(cmd: string): boolean;
}
