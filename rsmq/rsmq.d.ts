// Type definitions for rsmq 0.3.16
// Project: http://smrchy.github.io/rsmq/
// Definitions by: Qubo <https://github.com/MugeSo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../redis/redis.d.ts'/>

declare module RedisSMQ {
    interface CallbackT<R> {
        (e?:Error, res?:R): void;
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

declare module 'rsmq' {
    import redis = require('redis');

    interface RedisSMQStatic {
        new (options:ClientOptions): Client;
    }

    interface Client {
        createQueue(options:RedisSMQ.QueueOptions, cb:RedisSMQ.CallbackT<number>): void;
        changeMessageVisibility(options:RedisSMQ.VisibilityOptions, cb:RedisSMQ.CallbackT<number>): void;
        deleteMessage(options:RedisSMQ.MessageIdentifier, cb:RedisSMQ.CallbackT<number>): void;
        deleteQueue(options:RedisSMQ.QueueIdentifier, cb:RedisSMQ.CallbackT<number>): void;
        getQueueAttributes(options:RedisSMQ.QueueIdentifier, cb:RedisSMQ.CallbackT<RedisSMQ.QueueAttributes>): void;
        listQueues(cb:RedisSMQ.CallbackT<string[]>): void;
        receiveMessage(options:RedisSMQ.ReceiveOptions, cb:RedisSMQ.CallbackT<RedisSMQ.Message>): void;
        sendMessage(options:RedisSMQ.NewMessage, cb:RedisSMQ.CallbackT<string>): void;
        setQueueAttributes(options:RedisSMQ.QueueOptions, cb:RedisSMQ.CallbackT<RedisSMQ.QueueAttributes>): void;
        quit(): void;
        redis: redis.RedisClient;
    }

    interface ClientOptions {
        host?: string;
        port?: number;
        options?: redis.ClientOpts;
        client?: redis.RedisClient;
        ns?: string;
    }

    var rsmq: RedisSMQStatic;
    export = rsmq;
}
