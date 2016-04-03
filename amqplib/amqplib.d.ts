// Type definitions for amqplib 0.3.x
// Project: https://github.com/squaremo/amqp.node
// Definitions by: Michael Nahkies <https://github.com/mnahkies>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../when/when.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module "amqplib" {

    import events = require("events");
    import when = require("when");

    interface Connection extends events.EventEmitter {
        close(): when.Promise<void>;
        createChannel(): when.Promise<Channel>;
        createConfirmChannel(): when.Promise<Channel>;
    }

    module Replies {
        interface Empty {
        }
        interface AssertQueue {
            queue: string;
            messageCount: number;
            consumerCount: number;
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

    module Options {
        interface AssertQueue {
            exclusive?: boolean;
            durable?: boolean;
            autoDelete?: boolean;
            arguments?: any;
            messageTtl?: number;
            expires?: number;
            deadLetterExchange?: string;
            maxLength?: number;
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
            expiration?: string;
            userId?: string;
            CC?: string | string[];

            mandatory?: boolean;
            persistent?: boolean;
            deliveryMode?: boolean | number;
            BCC?: string | string[];

            contentType?: string;
            contentEncoding?: string;
            headers?: Object;
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
            arguments?: Object;
        }
        interface Get {
            noAck?: boolean;
        }
    }

    interface Message {
        content: Buffer;
        fields: Object;
        properties: Object;
    }

    interface Channel extends events.EventEmitter {
        close(): when.Promise<void>;

        assertQueue(queue: string, options?: Options.AssertQueue): when.Promise<Replies.AssertQueue>;
        checkQueue(queue: string): when.Promise<Replies.AssertQueue>;

        deleteQueue(queue: string, options?: Options.DeleteQueue): when.Promise<Replies.DeleteQueue>;
        purgeQueue(queue: string): when.Promise<Replies.DeleteQueue>;

        bindQueue(queue: string, source: string, pattern: string, args?: any): when.Promise<Replies.Empty>;
        unbindQueue(queue: string, source: string, pattern: string, args?: any): when.Promise<Replies.Empty>;

        assertExchange(exchange: string, type: string, options?: Options.AssertExchange): when.Promise<Replies.AssertExchange>;
        checkExchange(exchange: string): when.Promise<Replies.Empty>;

        deleteExchange(exchange: string, options?: Options.DeleteExchange): when.Promise<Replies.Empty>;

        bindExchange(destination: string, source: string, pattern: string, args?: any): when.Promise<Replies.Empty>;
        unbindExchange(destination: string, source: string, pattern: string, args?: any): when.Promise<Replies.Empty>;

        publish(exchange: string, routingKey: string, content: Buffer, options?: Options.Publish): boolean;
        sendToQueue(queue: string, content: Buffer, options?: Options.Publish): boolean;

        consume(queue: string, onMessage: (msg: Message) => any, options?: Options.Consume): when.Promise<Replies.Consume>;

        cancel(consumerTag: string): when.Promise<Replies.Empty>;
        get(queue: string, options?: Options.Get): when.Promise<Message | boolean>;

        ack(message: Message, allUpTo?: boolean): void;
        ackAll(): void;

        nack(message: Message, allUpTo?: boolean, requeue?: boolean): void;
        nackAll(requeue?: boolean): void;
        reject(message: Message, requeue?: boolean): void;

        prefetch(count: number, global?: boolean): when.Promise<Replies.Empty>;
        recover(): when.Promise<Replies.Empty>;
    }

    function connect(url: string, socketOptions?: any): when.Promise<Connection>;
}
