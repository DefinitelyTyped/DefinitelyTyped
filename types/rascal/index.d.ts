/// <reference types="node" />

import { Channel, Connection, Message, Options } from "amqplib";
import { EventEmitter } from "events";

export interface BindingConfig {
    source?: string | undefined;
    destination?: string | undefined;
    destinationType?: "queue" | "exchange" | undefined;
    bindingKey?: string | undefined;
    bindingKeys?: string[] | undefined;
    options?: any;
}

export interface QueueConfig {
    name?: string | undefined;
    assert?: boolean | undefined;
    check?: boolean | undefined;
    options?: Options.AssertQueue | undefined;
}

export interface ExchangeConfig {
    name?: string | undefined;
    assert?: boolean | undefined;
    check?: boolean | undefined;
    type?: "direct" | "fanout" | "headers" | "topic" | undefined;
    options?: Options.AssertExchange | undefined;
}

export interface ConnectionAttributes {
    slashes?: boolean | undefined;
    protocol?: string | undefined;
    hostname?: string | undefined;
    user?: string | undefined;
    password?: string | undefined;
    port?: string | number | undefined;
    vhost?: string | undefined;
    auth?: string | undefined;
    pathname?: string | undefined;
    query?: string | undefined;
    url?: string | undefined;
    loggableUrl?: string | undefined;
    options?:
        | {
            heartbeat?: number | undefined;
            timeout?: number | undefined;
            channelMax?: number | undefined;
            connection_timeout?: number | undefined;
            [key: string]: any;
        }
        | undefined;
    socketOptions?:
        | {
            timeout?: number | undefined;
            clientProperties?: {
                connection_name?: string | undefined;
                [key: string]: string | undefined;
            };
        }
        | undefined;
}

export interface RetryConfig {
    factor?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
    strategy?: "exponential" | "linear" | undefined;
    delay?: number | undefined;
}

export interface ConnectionConfig extends ConnectionAttributes {
    retry?: RetryConfig | undefined;
    management?: ConnectionAttributes | undefined;
}

export interface ChannelPoolConfig {
    autostart?: boolean | undefined;
    evictionRunIntervalMillis?: number | undefined;
    idleTimeoutMillis?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
    testOnBorrow?: boolean | undefined;
}

export interface VhostConfig {
    check?: boolean | undefined;
    assert?: boolean | undefined;
    namespace?: string | boolean | undefined;
    publicationChannelPools?:
        | {
            regularPool?: ChannelPoolConfig | undefined;
            confirmPool?: ChannelPoolConfig | undefined;
        }
        | undefined;
    connection?: ConnectionConfig | undefined;
    connections?: ConnectionConfig[] | undefined;
    connectionStrategy?: "random" | "fixed" | undefined;
    exchanges?:
        | {
            [key: string]: ExchangeConfig;
        }
        | Array<string | ExchangeConfig>
        | undefined;
    queues?:
        | {
            [key: string]: QueueConfig;
        }
        | Array<string | QueueConfig>
        | undefined;
    bindings?:
        | {
            [key: string]: BindingConfig;
        }
        | Array<string | BindingConfig>
        | undefined;
    publications?:
        | {
            [key: string]: PublicationConfig;
        }
        | undefined;
    subscriptions?:
        | {
            [key: string]: SubscriptionConfig;
        }
        | undefined;
}

export interface PublicationConfig {
    vhost?: string | undefined;
    exchange?: string | undefined;
    queue?: string | undefined;
    routingKey?: string | undefined;
    confirm?: boolean | undefined;
    options?: Options.Publish | undefined;
    autoCreated?: boolean | undefined;
    deprecated?: boolean | undefined;
    encryption?: string | undefined;
}

export interface Encryption {
    key: string;
    algorithm: string;
    ivLength: number;
}

export interface Redelivery {
    counters?:
        | {
            [key: string]: {
                type: "stub" | "inMemory" | "inMemoryCluster";
                size?: number | undefined;
            };
        }
        | undefined;
}

export interface Recovery {
    strategy: "ack" | "nack" | "republish" | "forward";
    defer?: number | undefined;
    attempts?: number | undefined;
    requeue?: boolean | undefined;
    publication?: string | undefined;
    options?: PublicationConfig | undefined;
    xDeathFix?: boolean | undefined;
    immediateNack?: boolean | undefined;
}

export interface SubscriptionConfig {
    vhost?: string | undefined;
    queue?: string | undefined;
    contentType?: string | undefined;
    options?: Options.Consume | undefined;
    prefetch?: number | undefined;
    retry?: RetryConfig | boolean | undefined;
    handler?: string | undefined;
    handlers?: string[] | undefined;
    recovery?: any;
    deferCloseChannel?: number | undefined;
    encryption?: string | undefined;
    autoCreated?: boolean | undefined;
    redeliveries?:
        | {
            counter: string;
            limit: number;
            timeout?: number | undefined;
        }
        | undefined;
}

interface BrokerConfig {
    vhosts?:
        | {
            [key: string]: VhostConfig;
        }
        | undefined;
    publications?:
        | {
            [key: string]: PublicationConfig;
        }
        | undefined;
    subscriptions?:
        | {
            [key: string]: SubscriptionConfig;
        }
        | undefined;
    redeliveries?: Redelivery | undefined;
    recovery?:
        | {
            [key: string]: Recovery | Recovery[];
        }
        | undefined;
    defaults?: VhostConfig | undefined;
    encryption?:
        | {
            [key: string]: Encryption;
        }
        | undefined;
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

    on(event: "message", listener: (message: Message, content: any, ackOrNackFn: AckOrNack) => void): this;
    on(event: "error" | "cancelled", listener: (err: Error) => void): this;
    on(
        event: "invalid_content" | "redeliveries_exceeded" | "redeliveries_error",
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

    on(event: "message", listener: (message: Message, content: any, ackOrNackFn: AckOrNack) => void): this;
    on(event: "error" | "cancelled", listener: (err: Error) => void): this;
    on(
        event: "invalid_content" | "redeliveries_exceeded" | "redeliveries_error",
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

    on(event: "error", cb: (err: Error, messageId: string) => void): this;
    on(event: "success", cb: (messageId: string) => void): this;
    on(event: "return", cb: (message: Message) => void): this;
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
    AckOrNack,
    Broker,
    BrokerAsPromised,
    BrokerConfig,
    counters,
    createBroker,
    createBrokerAsPromised,
    defaultConfig,
    testConfig,
    withDefaultConfig,
    withTestConfig,
};
