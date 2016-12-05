// Type definitions for amqplib 0.5.x
// Project: https://github.com/squaremo/amqp.node
// Definitions by: Michael Nahkies <https://github.com/mnahkies>, Ab Reitsma <https://github.com/abreits>, Nicolás Fantone <https://github.com/nfantone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'amqplib' {
    import * as Promise from 'bluebird';
    import * as events from 'events';
    import shared = require('amqplib/properties');

    export import Replies = shared.Replies;
    export import Options = shared.Options;
    export import Message = shared.Message;

    export interface Connection extends events.EventEmitter {
        close(): Promise<void>;
        createChannel(): Promise<Channel>;
        createConfirmChannel(): Promise<ConfirmChannel>;
    }

    export interface Channel extends events.EventEmitter {
        close(): Promise<void>;

        assertQueue(queue: string, options?: Options.AssertQueue): Promise<Replies.AssertQueue>;
        checkQueue(queue: string): Promise<Replies.AssertQueue>;

        deleteQueue(queue: string, options?: Options.DeleteQueue): Promise<Replies.DeleteQueue>;
        purgeQueue(queue: string): Promise<Replies.PurgeQueue>;

        bindQueue(queue: string, source: string, pattern: string, args?: any): Promise<Replies.Empty>;
        unbindQueue(queue: string, source: string, pattern: string, args?: any): Promise<Replies.Empty>;

        assertExchange(exchange: string, type: string, options?: Options.AssertExchange): Promise<Replies.AssertExchange>;
        checkExchange(exchange: string): Promise<Replies.Empty>;

        deleteExchange(exchange: string, options?: Options.DeleteExchange): Promise<Replies.Empty>;

        bindExchange(destination: string, source: string, pattern: string, args?: any): Promise<Replies.Empty>;
        unbindExchange(destination: string, source: string, pattern: string, args?: any): Promise<Replies.Empty>;

        publish(exchange: string, routingKey: string, content: Buffer, options?: Options.Publish): boolean;
        sendToQueue(queue: string, content: Buffer, options?: Options.Publish): boolean;

        consume(queue: string, onMessage: (msg: Message) => any, options?: Options.Consume): Promise<Replies.Consume>;

        cancel(consumerTag: string): Promise<Replies.Empty>;
        get(queue: string, options?: Options.Get): Promise<Message | boolean>;

        ack(message: Message, allUpTo?: boolean): void;
        ackAll(): void;

        nack(message: Message, allUpTo?: boolean, requeue?: boolean): void;
        nackAll(requeue?: boolean): void;
        reject(message: Message, requeue?: boolean): void;

        prefetch(count: number, global?: boolean): Promise<Replies.Empty>;
        recover(): Promise<Replies.Empty>;
    }

    export interface ConfirmChannel extends Channel {
        publish(exchange:string, routingKey:string, content:Buffer, options?:Options.Publish, callback?:(err:any, ok:Replies.Empty) => void):boolean;
        sendToQueue(queue:string, content:Buffer, options?:Options.Publish, callback?:(err:any, ok:Replies.Empty) => void):boolean;

        waitForConfirms(): Promise<void>;
    }

    export function connect(url: string, socketOptions?: any): Promise<Connection>;
}

declare module 'amqplib/properties' {
    export namespace Replies {
        interface Empty {
        }
        interface AssertQueue {
            queue: string;
            messageCount: number;
            consumerCount: number;
        }
        interface PurgeQueue {
            messageCount: number;
        }
        interface DeleteQueue {
            messageCount: number;
        }
        interface AssertExchange {
            exchange: string;
        }
        interface Consume {
            consumerTag: string;
        }
    }

    export namespace Options {
        interface AssertQueue {
            exclusive?: boolean;
            durable?: boolean;
            autoDelete?: boolean;
            arguments?: any;
            messageTtl?: number;
            expires?: number;
            deadLetterExchange?: string;
            deadLetterRoutingKey?: string;
            maxLength?: number;
            maxPriority?: number;
        }
        interface DeleteQueue {
            ifUnused?: boolean;
            ifEmpty?: boolean;
        }
        interface AssertExchange {
            durable?: boolean;
            internal?: boolean;
            autoDelete?: boolean;
            alternateExchange?: string;
            arguments?: any;
        }
        interface DeleteExchange {
            ifUnused?: boolean;
        }
        interface Publish {
            expiration?: string | number;
            userId?: string;
            CC?: string | string[];

            mandatory?: boolean;
            persistent?: boolean;
            deliveryMode?: boolean | number;
            BCC?: string | string[];

            contentType?: string;
            contentEncoding?: string;
            headers?: any;
            priority?: number;
            correlationId?: string;
            replyTo?: string;
            messageId?: string;
            timestamp?: number;
            type?: string;
            appId?: string;
        }
        interface Consume {
            consumerTag?: string;
            noLocal?: boolean;
            noAck?: boolean;
            exclusive?: boolean;
            priority?: number;
            arguments?: any;
        }
        interface Get {
            noAck?: boolean;
        }
    }

    export interface Message {
        content: Buffer;
        fields: any;
        properties: any;
    }
}

declare module 'amqplib/callback_api' {
    import events = require('events');
    import shared = require('amqplib/properties')

    export import Replies = shared.Replies;
    export import Options = shared.Options;
    export import Message = shared.Message;

    export interface Connection extends events.EventEmitter {
        close(callback?: (err: any) => void): void;
        createChannel(callback: (err: any, channel: Channel) => void): void;
        createConfirmChannel(callback: (err: any, confirmChannel: ConfirmChannel) => void): void;
    }

    export interface Channel extends events.EventEmitter {
        close(callback: (err: any) => void): void;

        assertQueue(queue?: string, options?: Options.AssertQueue, callback?: (err: any, ok: Replies.AssertQueue) => void): void;
        checkQueue(queue: string, callback?: (err: any, ok: Replies.AssertQueue) => void): void;

        deleteQueue(queue: string, options?: Options.DeleteQueue, callback?: (err: any, ok: Replies.DeleteQueue) => void): void;
        purgeQueue(queue: string, callback?: (err: any, ok: Replies.PurgeQueue) => void): void;

        bindQueue(queue: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void): void;
        unbindQueue(queue: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void): void;

        assertExchange(exchange: string, type: string, options?: Options.AssertExchange, callback?: (err: any, ok: Replies.AssertExchange) => void): void;
        checkExchange(exchange: string, callback?: (err: any, ok: Replies.Empty) => void): void;

        deleteExchange(exchange: string, options?: Options.DeleteExchange, callback?: (err: any, ok: Replies.Empty) => void): void;

        bindExchange(destination: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void): void;
        unbindExchange(destination: string, source: string, pattern: string, args?: any, callback?: (err: any, ok: Replies.Empty) => void): void;

        publish(exchange: string, routingKey: string, content: Buffer, options?: Options.Publish): boolean;
        sendToQueue(queue: string, content: Buffer, options?: Options.Publish): boolean;

        consume(queue: string, onMessage: (msg: Message) => any, options?: Options.Consume, callback?: (err: any, ok: Replies.Consume) => void): void;

        cancel(consumerTag: string, callback?: (err: any, ok: Replies.Empty) => void): void;
        get(queue: string, options?: Options.Get, callback?: (err: any, ok: Message | boolean) => void): void;

        ack(message: Message, allUpTo?: boolean): void;
        ackAll(): void;

        nack(message: Message, allUpTo?: boolean, requeue?: boolean): void;
        nackAll(requeue?: boolean): void;
        reject(message: Message, requeue?: boolean): void;

        prefetch(count: number, global?: boolean): void;
        recover(callback?: (err: any, ok: Replies.Empty) => void): void;
    }

    export interface ConfirmChannel extends Channel {
        publish(exchange: string, routingKey: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void): boolean;
        sendToQueue(queue: string, content: Buffer, options?: Options.Publish, callback?: (err: any, ok: Replies.Empty) => void): boolean;

        waitForConfirms(callback?: (err: any) => void): void;
    }

    export function connect(callback: (err: any, connection: Connection) => void): void;
    export function connect(url: string, callback: (err: any, connection: Connection) => void): void;
    export function connect(url: string, socketOptions: any, callback: (err: any, connection: Connection) => void): void;
}
