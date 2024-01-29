/// <reference types="node" />

import * as events from "events";
import * as net from "net";

export type Callback<T> = (value: T) => void;
export interface AMQPClient extends net.Socket {
    publish(routingKey: string, body: any, options: {}, callback: (err?: boolean, msg?: string) => void): void;

    disconnect(): void;

    queue(queueName: string, callback?: Callback<QueueCallback>): AMQPQueue;
    queue(queueName: string, options: QueueOptions, callback?: Callback<QueueCallback>): AMQPQueue;

    exchange(callback?: Callback<void>): AMQPExchange;
    exchange(exchangeName: string, callback?: Callback<void>): AMQPExchange;
    exchange(exchangeName: string, options: ExchangeOptions, callback?: Callback<void>): AMQPExchange;
}

export interface AMQPQueue extends events.EventEmitter {
    subscribe(callback: SubscribeCallback): void;
    subscribe(options: SubscribeOptions, callback: SubscribeCallback): void;

    unsubscribe(consumerTag: string): void;

    bind(exchangeName: string, routingKey: string, callback?: Callback<AMQPQueue>): void;
    bind(routingKey: string, callback?: Callback<AMQPQueue>): void;

    unbind(exchangeName: string, routingKey: string): void;
    unbind(routingKey: string): void;

    bind_headers(exchangeName: string, routingKey: string): void;
    bind_headers(routingKey: string): void;

    unbind_headers(exchangeName: string, routingKey: string): void;
    unbind_headers(routingKey: string): void;

    shift(reject: boolean): void;
    shift(reject: boolean, requeue: boolean): void;

    destroy(options?: DestroyOptions): void;
}

export interface AMQPExchange extends events.EventEmitter {
    on(event: "open" | "ack" | "error" | "exchangeBindOk" | "exchangeUnbindOk", callback: Callback<void>): this;

    publish(routingKey: string, message: Buffer | {}, callback: (err?: boolean, msg?: string) => void): void;
    publish(
        routingKey: string,
        message: Buffer | {},
        options: ExchangePublishOptions,
        callback?: (err?: boolean, msg?: string) => void,
    ): void;

    /**
     * ifUnused default: true
     *
     * Deletes an exchange.
     *
     * If the optional boolean second argument is set, the server will only delete the exchange if it has no queue bindings.
     *
     * If the exchange has queue bindings the server does not delete it but raises a channel exception instead
     */
    destroy(ifUnused: boolean): void;

    bind(sourceExchange: string, routingKey: string, callback?: Callback<void>): void;
    unbind(sourceExchange: string, routingKey: string, callback?: Callback<void>): void;
    bind_headers(exchange: string, routing: string, callback?: Callback<void>): void;
}

export function createConnection(options: ConnectionOptions): AMQPClient;

export interface DeliveryInfo {
    contentType: string;
    consumerTag: string;
    deliveryTag: Uint8Array;
    exchange: string;
    queue: string;
    redelivered: boolean;
    routingKey: string;
}

export interface Ack extends DeliveryInfo {
    acknowledge(all: boolean): void;
    reject(requeue: boolean): void;
}

export interface ConnectionOptions {
    host?: string | undefined;
    url?: string | undefined;
    port?: number | undefined;
    login?: string | undefined;
    password?: string | undefined;
    connectionTimeout?: number | undefined;
    authMechanism?: string | undefined;
    vhost?: string | undefined;
    noDelay?: boolean | undefined;
    heartbeat?: number | undefined;
    ssl?: {
        enabled: boolean;
        keyFile?: string | undefined;
        certFile?: string | undefined;
        caFile?: string | undefined;
        rejectUnauthorized?: boolean | undefined;
    } | undefined;

    /** Default: 'node-amqp' */
    product?: string | undefined;

    /** Default: 'node-{NODE_VERSION}' */
    platform?: string | undefined;

    /** Default: node-amqp/package.json version */
    version?: string | undefined;

    defaultExchangeName?: string | undefined;

    /** Default: true */
    reconnect?: boolean | undefined;

    /** Default: 'linear' */
    reconnectBackoffStrategy?: string | undefined;

    /** Default: 120000 */
    reconnectExponentialLimit?: number | undefined;

    /** Default: 1000 */
    reconnectBackoffTime?: number | undefined;

    clientProperties?: {
        applicationName?: string | undefined;
        capabilities?: {
            consumer_cancel_notify?: boolean | undefined;
        } | undefined;
        /** Default: 'node-' + process.version */
        platform?: string | undefined;
        /** Default: node-amqp */
        product?: string | undefined;
        /** Default: 'nodeAMQPVersion' */
        version?: string | undefined;
    } | undefined;
}

export interface QueueOptions {
    /**
     * Default: false
     *
     * If set, the server will not create the queue.
     *
     * The client can use this to check whether a queue exists without modifying the server state
     */
    passive?: boolean | undefined;

    /**
     * Default: false
     *
     * Durable queues remain active when a server restarts.
     *
     * Non-durable queues (transient queues) are purged if/when a server restarts.
     *
     * Note that durable queues do not necessarily hold persistent messages,
     * although it does not make sense to send persistent messages to a transient queue
     */
    durable?: boolean | undefined;

    /**
     * Default: false
     *
     * Exclusive queues may only be consumed from by the current connection.
     *
     * Setting the 'exclusive' flag always implies 'autoDelete'
     */
    exclusive?: boolean | undefined;

    /**
     * Default: true
     *
     * If set, the queue is deleted when all consumers have finished using it.
     *
     * Last consumer can be cancelled either explicitly or because its channel is closed.
     *
     * If there was no consumer ever on the queue, it won't be deleted
     */
    autoDelete?: boolean | undefined;

    /**
     * Default: false
     *
     * If set, the queue will not be declared, this will allow a queue to be deleted if you don't know its previous options
     */
    noDeclare?: boolean | undefined;

    /**
     * a map of additional arguments to pass in when creating a queue
     */
    arguments?: { [arg: string]: any } | undefined;

    /**
     * Default: false
     *
     * when true the channel will close on unsubscribe
     */
    closeChannelOnUnsubscribe?: boolean | undefined;
}

export interface ExchangeOptions {
    /**
     * Default: 'topic'
     */
    type?: "direct" | "fanout" | "topic" | undefined;

    /**
     * Default: false
     *
     * f set, the server will not create the exchange. The client can use this to check whether an exchange exists without modifying the server state
     */
    passive?: boolean | undefined;

    /**
     * Default: true
     *
     * If set when creating a new exchange, the exchange will be marked as durable.
     *
     * Durable exchanges remain active when a server restarts.
     *
     * Non-durable exchanges (transient exchanges) are purged if/when a server restarts
     */
    durable?: boolean | undefined;

    /**
     * Default: true
     *
     * If set, the exchange is deleted when there are no longer queues bound to it
     */
    autoDelete?: boolean | undefined;

    /**
     * Default: false
     *
     * If set, the exchange will not be declared,
     * this will allow the exchange to be deleted if you dont know its previous options
     */
    noDeclare?: boolean | undefined;

    /**
     * Default: false
     *
     * If set, the exchange will be in confirm mode, and you will get a 'ack'|'error' event emitted on a publish,
     * or the callback on the publish will be called
     */
    confirm?: boolean | undefined;

    /**
     * a map of additional arguments to pass in when creating an exchange
     */
    arguments?: { [arg: string]: any } | undefined;
}

export interface SubscribeOptions {
    /**
     * Default: false
     *
     * If set to true, only one subscriber is allowed at a time
     */
    exclusive?: boolean | undefined;

    /**
     * Default: false
     *
     * Make it so that the AMQP server only delivers single messages at a time.
     * When you want the next message, call queue.shift()
     *
     * When false, you will receive messages as fast as they are emitted
     */
    ack?: boolean | undefined;

    /**
     * Default: 1
     *
     * Will only send you N messages before you 'ack'.
     *
     * Setting to zero will widen that window to 'unlimited'. If this is set, queue.shift() should not be used
     */
    prefetchCount?: number | undefined;

    /**
     * Default: undefined
     *
     * Will inject the routingKey into the payload received
     */
    routingKeyInPayload?: boolean | undefined;

    /**
     * Default: undefined
     *
     * Will inject the routingKey into the payload received
     */
    deliveryKeyInPayload?: boolean | undefined;
}

export interface DestroyOptions {
    /**
     * Default: false
     *
     * Will only destroy the queue if it has no consumers
     */
    ifUnused?: boolean | undefined;

    /**
     * Default: false
     *
     * Will ony be deleted if the queue has no messages
     */
    ifEmpty?: boolean | undefined;
}

export type SubscribeCallback = (
    message: any,
    headers: { [key: string]: any },
    deliveryInfo: DeliveryInfo,
    ack: Ack,
) => void;

export interface QueueCallback {
    name: string;
    consumerTagListeners: { [tag: string]: any };
    consumerTagOptions: { [option: string]: any };
    options: QueueOptions;
    state: string;
    channel: number;
}

export interface ExchangePublishOptions {
    /**
     * Default: false
     *
     * This flag tells the server how to react if the message cannot be routed to a queue.
     *
     * If this flag is set, the server will return an unroutable message with a Return method.
     *
     * If this flag is false, the server silently drops the message
     */
    mandatory?: boolean | undefined;

    /**
     * Default: false
     *
     * This flag tells the server how to react if the message cannot be routed to a queue consumer immediately.
     *
     * If this flag is set, the server will return an undeliverable message with a Return method.
     *
     * If this flag is false, the server will queue the message, but with no guarantee that it will ever be consumed
     */
    immediate?: boolean | undefined;

    /**
     * Default: 'application/octet-stream'
     */
    contentType?: string | undefined;

    /**
     * Default: null
     */
    contentEncoding?: string | undefined;

    /**
     * Default: {}
     *
     * Arbitrary application-specific message headers
     */
    headers?: any;

    /**
     * 1: Non-persistent
     * 2: Persistent
     */
    deliveryMode?: 1 | 2 | undefined;

    priority?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;

    /**
     * Application correlation identifier
     */
    correlationId?: string | undefined;

    /**
     * Usually used to name a reply queue for a request message
     */
    replyTo?: string | undefined;

    /**
     * Default: null
     *
     * Message expiration specification -- ISO date string?
     */
    expiration?: string | undefined;

    /**
     * Default: null
     *
     * Application message identifier
     */
    messageId?: string | undefined;

    /**
     * Default: null
     *
     * Message timestamp
     *
     * ISO date string?
     */
    timestamp?: string | undefined;

    /**
     * Default: null
     *
     * Message type name
     */
    type?: string | undefined;

    /**
     * Default: null
     *
     * Creating user id
     */
    userId?: string | undefined;

    /**
     * Default: null
     *
     * Creating application id
     */
    appId?: string | undefined;
}
