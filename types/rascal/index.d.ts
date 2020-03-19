// Type definitions for rascal 8.0
// Project: https://guidesmiths.github.io/rascal/
// Definitions by: ethan <https://github.com/zijin-m>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import { EventEmitter } from "events";
import { Message, Options } from "amqplib";

interface BindingConfig {
    source?: string;
    destination?: string;
    destinationType?: 'queue' | 'exchange';
    bindingKey?: string;
    bindingKeys?: string[];
    options?: any;
}

interface QueueConfig {
    assert?: boolean;
    check?: boolean;
    options?: Options.AssertQueue;
}

interface ExchangeConfig {
    assert?: boolean;
    check?: boolean;
    type?: 'direct' | 'fanout' | 'headers' | 'topic';
    options?: Options.AssertExchange;
}

interface ConnectionAttributes {
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
        [key: string]: any
    };
    socketOptions?: {
        timeout?: number;
    };
}

interface RetryConfig {
    factor?: number;
    max?: number;
    min?: number;
    strategy?: 'exponential' | 'linear';
    delay?: number;
}

interface ConnectionConfig extends ConnectionAttributes {
    retry?: RetryConfig;
    management?: ConnectionAttributes;
}

interface ChannelPoolConfig {
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    idleTimeoutMillis?: number;
    max?: number;
    min?: number;
    testOnBorrow?: boolean;
}

interface VhostConfig {
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
    exchanges?: {
        [key: string]: ExchangeConfig;
    } | string[];
    queues?: {
        [key: string]: QueueConfig;
    } | string[];
    bindings?: {
        [key: string]: BindingConfig;
    } | string[];
    publications?: {
        [key: string]: PublicationConfig;
    };
    subscriptions?: {
        [key: string]: SubscriptionConfig;
    };
}

interface PublicationConfig {
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

interface Encryption {
    key: string;
    algorithm: string;
    ivLength: number;
}

interface Redelivery {
    counters?: {
        [key: string]: {
            type: 'stub' | 'inMemory' | 'inMemoryCluster';
            size?: number;
        }
    };
}

interface Recovery {
    strategy: "ack" | "nack" | "republish" | "forward";
    defer?: number;
    attempts?: number;
    requeue?: boolean;
    publication?: string;
    options?: PublicationConfig;
    xDeathFix?: boolean;
    immediateNack?: boolean;
}

interface SubscriptionConfig {
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

export interface BrokerConfig {
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
    defaults?: BrokerConfig;
    encryption?: {
        [key: string]: Encryption;
    };
}

export const defaultConfig: {
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
                stub: {
                };
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

export const testConfig: {
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
                stub: {
                };
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
            stub: {
            };
        };
    };
};

export type AckOrNackFn = (err?: Error, recovery?: Recovery | Recovery[]) => void;

declare class SubscriptionSession extends EventEmitter {
    name: string;
    isCancelled(): boolean;
    cancel(): Promise<void>;
    on(event: 'message', listener: (message: Message, content: any, ackOrNackFn: any) => void): this;
    on(event: 'error' | 'cancelled', listener: (err: Error) => void): this;
    on(event: 'invalid_content' | 'redeliveries_exceeded' | 'redeliveries_error' | 'redeliveries_error', listener: (err: Error, message: Message, ackOrNackFn: any) => void): this;
}

declare class PublishEventemitter extends EventEmitter {
    on(event: 'success', listener: (messageId: string) => void): this;
    on(event: 'error', listener: (err: Error, messageId: string) => void): this;
    on(event: 'return', listener: (message: Message) => void): this;
}

declare class BrokerAsPromisedClass extends EventEmitter {
    readonly config: BrokerConfig;
    constructor(config: BrokerConfig, compoents: any)
    connect(name: string): Promise<any>;
    nuke(): Promise<void>;
    purge(): Promise<void>;
    shutdown(): Promise<void>;
    bounce(): Promise<void>;
    unsubscribeAll(): Promise<void>;
    publish(name: string, message: any, overrides?: PublicationConfig | string): Promise<PublishEventemitter>;
    forward(name: string, message: any, overrides?: PublicationConfig | string): Promise<PublishEventemitter>;
    subscribe(name: string, overrides?: SubscriptionConfig): Promise<SubscriptionSession>;
}

export function createBroker(config: BrokerConfig, components: any, next: any, ...args: any[]): any;

export function createBrokerAsPromised(config: BrokerConfig, components: any): Promise<BrokerAsPromisedClass>;

export function withDefaultConfig(config: BrokerConfig): BrokerConfig;

export function withTestConfig(config: BrokerConfig): BrokerConfig;

export namespace Broker {
    function create(config: any, next: any, ...args: any[]): any;
    function create(config: any, components: any, next: any, ...args: any[]): any;
}

export namespace BrokerAsPromised {
    function create(config: BrokerConfig, components?: any): Promise<BrokerAsPromisedClass>;
}
export namespace counters {
    function inMemory(options: any): any;
    function stub(options: any): any;
    namespace inMemoryCluster {
        function master(options: any): void;
        function worker(options: any): any;
    }
}

export {};
