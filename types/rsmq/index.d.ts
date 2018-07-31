// Type definitions for rsmq 0.3.16
// Project: http://smrchy.github.io/rsmq/
// Definitions by: Qubo <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RedisSMQ {
    interface CallbackT<R> {
        (e?:Error, res?:R): void;
    }

    interface Client {
        createQueue(options:QueueOptions, cb:CallbackT<number>): void;
        changeMessageVisibility(options:VisibilityOptions, cb:CallbackT<number>): void;
        deleteMessage(options:MessageIdentifier, cb:CallbackT<number>): void;
        deleteQueue(options:QueueIdentifier, cb:CallbackT<number>): void;
        getQueueAttributes(options:QueueIdentifier, cb:CallbackT<QueueAttributes>): void;
        listQueues(cb:CallbackT<string[]>): void;
        receiveMessage(options:ReceiveOptions, cb:CallbackT<Message>): void;
        sendMessage(options:NewMessage, cb:CallbackT<string>): void;
        setQueueAttributes(options:QueueOptions, cb:CallbackT<QueueAttributes>): void;
        quit(): void;
    }

    interface QueueIdentifier {
        qname: string;
    }

    interface QueueOptions extends QueueIdentifier {
        vt?: number;
        delay?: number;
        maxsize?: number;
    }

    interface MessageIdentifier extends QueueIdentifier {
        id: string;
    }

    interface VisibilityOptions extends MessageIdentifier {
        vt: number;
    }

    export interface QueueAttributes extends QueueIdentifier {
        vt: number;
        delay: number;
        maxsize: number;
        totalrecv: number;
        totalsent: number;
        created: number;
        modified: number;
        msgs: number;
        hiddenmsgs: number;
    }

    interface ReceiveOptions extends QueueIdentifier {
        vt?: number;
    }

    export interface Message extends MessageIdentifier {
        message: string;
        sent: number;
        fr: number;
        rc: number;
    }

    interface NewMessage extends QueueIdentifier {
        message: string;
        delay?: number;
    }
}

import redis = require('redis');

interface RedisSMQStatic {
    new (options:ClientOptions): Client;
}

interface Client extends RedisSMQ.Client{
    redis: redis.RedisClient;
}

interface ClientOptions {
    host?: string;
    port?: number;
    options?: redis.ClientOpts;
    client?: redis.RedisClient;
    ns?: string;
}

declare var RedisSMQ: RedisSMQStatic;
export = RedisSMQ;

