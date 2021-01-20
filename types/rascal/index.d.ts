// Type definitions for rascal 10.0
// Project: https://guidesmiths.github.io/rascal/
// Definitions by: ethan <https://github.com/zijin-m>
//                 MartinTechy <https://github.com/MartinTechy>
//                 Nikita Volodin <https://github.com/qlonik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Message, Options, Connection, Channel } from 'amqplib';

export interface BindingConfig {
    source?: string;
    destination?: string;
    destinationType?: 'queue' | 'exchange';
    bindingKey?: string;
    bindingKeys?: string[];
    options?: any;
}

export interface QueueConfig {
    assert?: boolean;
    check?: boolean;
    options?: Options.AssertQueue;
}

export interface ExchangeConfig {
    assert?: boolean;
    check?: boolean;
    type?: 'direct' | 'fanout' | 'headers' | 'topic';
    options?: Options.AssertExchange;
}

export interface ConnectionAttributes {
    slashes?: boolean;
    protocol?: string;
    hostname?: string;
    user?: string;
    password?: string;
    port?: string | number;
    vhost?: string;
    auth?: string;
    pathname?: string;
    query?: string;
    url?: string;
    loggableUrl?: string;
    options?: {
        heartbeat?: number;
        timeout?: number;
        channelMax?: number;
        connection_timeout?: number;
        [key: string]: any;
    };
    socketOptions?: {
        timeout?: number;
    };
}

export interface RetryConfig {
    factor?: number;
    max?: number;
    min?: number;
    strategy?: 'exponential' | 'linear';
    delay?: number;
}

export interface ConnectionConfig extends ConnectionAttributes {
    retry?: RetryConfig;
    management?: ConnectionAttributes;
}

export interface ChannelPoolConfig {
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    idleTimeoutMillis?: number;
    max?: number;
    min?: number;
    testOnBorrow?: boolean;
}

export interface VhostConfig {
    check?: boolean;
    assert?: boolean;
    namespace?: string | boolean;
    publicationChannelPools?: {
        regularPool?: ChannelPoolConfig;
        confirmPool?: ChannelPoolConfig;
    };
    connection?: ConnectionConfig;
    connections?: ConnectionConfig[];
    connectionStrategy?: 'random' | 'fixed';
    exchanges?:
        | {
              [key: string]: ExchangeConfig;
          }
        | string[];
    queues?:
        | {
              [key: string]: QueueConfig;
          }
        | string[];
    bindings?:
        | {
              [key: string]: BindingConfig;
          }
        | string[];
    publications?: {
        [key: string]: PublicationConfig;
    };
    subscriptions?: {
        [key: string]: SubscriptionConfig;
    };
}

export interface PublicationConfig {
    vhost?: string;
    exchange?: string;
    queue?: string;
    routingKey?: string;
    confirm?: boolean;
    options?: Options.Publish;
    autoCreated?: boolean;
    deprecated?: boolean;
    encryption?: string;
}

export interface Encryption {
    key: string;
    algorithm: string;
    ivLength: number;
}

export interface Redelivery {
    counters?: {
        [key: string]: {
            type: 'stub' | 'inMemory' | 'inMemoryCluster';
            size?: number;
        };
    };
}

export interface Recovery {
    strategy: 'ack' | 'nack' | 'republish' | 'forward';
    defer?: number;
    attempts?: number;
    requeue?: boolean;
    publication?: string;
    options?: PublicationConfig;
    xDeathFix?: boolean;
    immediateNack?: boolean;
}

export interface SubscriptionConfig {
    vhost?: string;
    queue?: string;
    contentType?: string;
    options?: Options.Consume;
    prefetch?: number;
    retry?: RetryConfig | boolean;
    handler?: string;
    handlers?: string[];
    recovery?: any;
    deferCloseChannel?: number;
    encryption?: string;
    autoCreated?: boolean;
    redeliveries?: {
        counter: string;
        limit: number;
        timeout?: number;
    };
}

interface BrokerConfig {
    vhosts?: {
        [key: string]: VhostConfig;
    };
    publications?: {
        [key: string]: PublicationConfig;
    };
    subscriptions?: {
        [key: string]: SubscriptionConfig;
    };
    redeliveries?: Redelivery;
    recovery?: {
        [key: string]: Recovery | Recovery[];
    };
    defaults?: VhostConfig;
    encryption?: {
        [key: string]: Encryption;
    };
}

declare const defaultConfig: {
    defaults: {
        publications: {
            confirm: boolean;
            options: {
                mandatory: boolean;
                persistent: boolean;
            };
            vhost: string;
        };
        redeliveries: {
            counters: {
                inMemory: {
                    size: number;
                };
                stub: {};
            };
        };
        subscriptions: {
            deferCloseChannel: number;
            prefetch: number;
            redeliveries: {
                counter: string;
                limit: number;
                timeout: number;
            };
            retry: {
                factor: number;
                max: number;
                min: number;
                strategy: string;
            };
            vhost: string;
        };
        vhosts: {
            bindings: {
                bindingKey: string;
                destinationType: string;
            };
            connection: {
                hostname: string;
                management: {
                    options: {
                        timeout: number;
                    };
                    port: number;
                    protocol: string;
                    slashes: boolean;
                };
                options: {
                    channelMax: number;
                    connection_timeout: number;
                    heartbeat: number;
                };
                password: string;
                port: string;
                protocol: string;
                retry: {
                    factor: number;
                    max: number;
                    min: number;
                    strategy: string;
                };
                slashes: boolean;
                socketOptions: {
                    timeout: number;
                };
                user: string;
            };
            connectionStrategy: string;
            exchanges: {
                assert: boolean;
                type: string;
            };
            publicationChannelPools: {
                confirmPool: {
                    autostart: boolean;
                    evictionRunIntervalMillis: number;
                    idleTimeoutMillis: number;
                    max: number;
                    min: number;
                    testOnBorrow: boolean;
                };
                regularPool: {
                    autostart: boolean;
                    evictionRunIntervalMillis: number;
                    idleTimeoutMillis: number;
                    max: number;
                    min: number;
                    testOnBorrow: boolean;
                };
            };
            queues: {
                assert: boolean;
            };
        };
    };
};

declare const testConfig: {
    defaults: {
        publications: {
            confirm: boolean;
            options: {
                mandatory: boolean;
                persistent: boolean;
            };
            vhost: string;
        };
        redeliveries: {
            counters: {
                inMemory: {
                    size: number;
                };
                stub: {};
            };
        };
        subscriptions: {
            deferCloseChannel: number;
            prefetch: number;
            redeliveries: {
                counter: string;
                limit: number;
                timeout: number;
            };
            retry: {
                factor: number;
                max: number;
                min: number;
                strategy: string;
            };
            vhost: string;
        };
        vhosts: {
            bindings: {
                bindingKey: string;
                destinationType: string;
            };
            connection: {
                hostname: string;
                management: {
                    options: {
                        timeout: number;
                    };
                    port: number;
                    protocol: string;
                    slashes: boolean;
                };
                options: {
                    channelMax: number;
                    connection_timeout: number;
                    heartbeat: number;
                };
                password: string;
                port: string;
                protocol: string;
                retry: {
                    factor: number;
                    max: number;
                    min: number;
                    strategy: string;
                };
                slashes: boolean;
                socketOptions: {
                    timeout: number;
                };
                user: string;
            };
            connectionStrategy: string;
            exchanges: {
                assert: boolean;
                options: {
                    durable: boolean;
                };
                type: string;
            };
            namespace: boolean;
            publicationChannelPools: {
                confirmPool: {
                    autostart: boolean;
                    evictionRunIntervalMillis: number;
                    idleTimeoutMillis: number;
                    max: number;
                    min: number;
                    testOnBorrow: boolean;
                };
                regularPool: {
                    autostart: boolean;
                    evictionRunIntervalMillis: number;
                    idleTimeoutMillis: number;
                    max: number;
                    min: number;
                    testOnBorrow: boolean;
                };
            };
            queues: {
                assert: boolean;
                options: {
                    durable: boolean;
                };
                purge: boolean;
            };
        };
    };
    redeliveries: {
        counters: {
            inMemory: {
                size: number;
            };
            stub: {};
        };
    };
};

type AckOrNack = (err?: Error, recovery?: Recovery | Recovery[]) => void;

export class SubscriberSessionAsPromised extends EventEmitter {
    name: string;
    cancel(): Promise<void>;

    on(event: 'message', listener: (message: Message, content: any, ackOrNackFn: AckOrNack) => void): this;
    on(event: 'error' | 'cancelled', listener: (err: Error) => void): this;
    on(
        event: 'invalid_content' | 'redeliveries_exceeded' | 'redeliveries_error',
        listener: (err: Error, message: Message, ackOrNackFn: AckOrNack) => void,
    ): this;
}

declare class BrokerAsPromised extends EventEmitter {
    readonly config: BrokerConfig;
    static create(config: BrokerConfig, components?: any): Promise<BrokerAsPromised>;
    constructor(broker: Broker);
    connect(name: string): Promise<Connection>;
    nuke(): Promise<void>;
    purge(): Promise<void>;
    shutdown(): Promise<void>;
    bounce(): Promise<void>;
    publish(name: string, message: any, overrides?: PublicationConfig | string): Promise<PublicationSession>;
    forward(name: string, message: any, overrides?: PublicationConfig | string): Promise<PublicationSession>;
    unsubscribeAll(): Promise<void>;
    subscribe(name: string, overrides?: SubscriptionConfig): Promise<SubscriberSessionAsPromised>;
    subscribeAll(filter?: (config: SubscriptionConfig) => boolean): Promise<SubscriberSessionAsPromised[]>;
}

export class SubscriptionSession extends EventEmitter {
    name: string;
    isCancelled(): boolean;
    cancel(next: ErrorCb): void;

    on(event: 'message', listener: (message: Message, content: any, ackOrNackFn: AckOrNack) => void): this;
    on(event: 'error' | 'cancelled', listener: (err: Error) => void): this;
    on(
        event: 'invalid_content' | 'redeliveries_exceeded' | 'redeliveries_error',
        listener: (err: Error, message: Message, ackOrNackFn: AckOrNack) => void,
    ): this;
}

type Cb<E, A> = (...x: [E, never] | [null, A]) => void;
type ErrorCb = (x: Error | null) => void;
type CreateCb = (...x: [Error, Broker] | [null, Broker]) => void;
type ConnectCb = (...x: [Error, null] | [Error, Connection] | [null, Connection]) => void;

declare class Broker extends EventEmitter {
    readonly config: BrokerConfig;
    static create(config: BrokerConfig, next: CreateCb): void;
    static create(config: BrokerConfig, components: unknown, next: CreateCb): void;
    connect(name: string, next: ConnectCb): void;
    nuke(next: ErrorCb): void;
    purge(next: ErrorCb): void;
    shutdown(next: ErrorCb): void;
    bounce(next: ErrorCb): void;
    publish(name: string, message: any, next: Cb<Error, PublicationSession>): void;
    publish(
        name: string,
        message: any,
        overrides: PublicationConfig | string,
        next: Cb<Error, PublicationSession>,
    ): void;
    forward(name: string, message: any, next: Cb<Error, PublicationSession>): void;
    forward(
        name: string,
        message: any,
        overrides: PublicationConfig | string,
        next: Cb<Error, PublicationSession>,
    ): void;
    subscribe(name: string, next: Cb<Error, SubscriptionSession>): void;
    subscribe(name: string, overrides: SubscriptionConfig | string, next: Cb<Error, SubscriptionSession>): void;
    subscribeAll(next: Cb<Error, SubscriptionSession[]>): void;
    subscribeAll(filter: (config: SubscriptionConfig) => boolean, next: Cb<Error, SubscriptionSession[]>): void;
    unsubscribeAll(next: ErrorCb): void;
}

export class PublicationSession extends EventEmitter {
    constructor(vhost: Vhost, messageId: string);
    abort(): void;
    isAborted(): boolean;
    emitPaused(): void;

    on(event: 'error', cb: (err: Error, messageId: string) => void): this;
    on(event: 'success', cb: (messageId: string) => void): this;
    on(event: 'return', cb: (message: Message) => void): this;
}

export class Vhost extends EventEmitter {
    static create(config: VhostConfig, next: (err?: Error, vhost?: Vhost) => void): void;
    init(next: (err?: Error, vhost?: Vhost) => void): Vhost;
    shutdown(next: (err?: Error) => void): void;
    nuke(next: (err?: Error) => void): void;
    purge(next: (err?: Error) => void): void;
    bounce(next: (err?: Error, result?: any) => void): void;
    connect(next: (err?: Error, connection?: Connection) => void): void;
    disconnect(next: (err?: Error, connection?: Connection) => void): void;
    getChannel(next: (err?: Error, channel?: Channel) => void): void;
    getConfirmChannel(next: (err?: Error, channel?: Channel) => void): void;
    borrowChannel(next: (err?: Error, channel?: Channel) => void): void;
    returnChannel(channel: Channel): void;
    destroyChannel(channel: Channel): void;
    borrowConfirmChannel(next: (err?: Error, channel?: Channel) => void): void;
    returnConfirmChannel(channel: Channel): void;
    destroyConfirmChannel(channel: Channel): void;
    isPaused(): boolean;
}

declare function createBroker(config: BrokerConfig, next: CreateCb): void;
declare function createBroker(config: BrokerConfig, components: unknown, next: CreateCb): void;

declare function createBrokerAsPromised(config: BrokerConfig, components?: unknown): Promise<BrokerAsPromised>;

declare function withDefaultConfig(config: BrokerConfig): BrokerConfig;

declare function withTestConfig(config: BrokerConfig): BrokerConfig;

declare namespace counters {
    function inMemory(options: any): any;
    function stub(options: any): any;
    namespace inMemoryCluster {
        function master(options: any): void;
        function worker(options: any): any;
    }
}

export {
    Broker,
    BrokerAsPromised,
    createBroker,
    createBrokerAsPromised,
    defaultConfig,
    testConfig,
    withDefaultConfig,
    withTestConfig,
    counters,
    BrokerConfig,
    AckOrNack,
};
