/// <reference types="rsmq"/>

import redis = require("redis");
import events = require("events");
import * as RedisSMQ from "rsmq";

declare namespace RSMQWorker {
    export interface Client extends events.EventEmitter {
        start(): Client;
        stop(): Client;
        send(message: string, delay?: number, cb?: CallbackT<string>): Client;
        send(message: string, cb: CallbackT<string>): Client;
        del(id: string, cb?: CallbackT<void>): Client;
        changeInterval(interval: number | number[]): Client;
        quit(): void;
    }

    export interface Options {
        interval?: number | undefined;
        maxReceiveCount?: number | undefined;
        invisibletime?: number | undefined;
        defaultDelay?: number | undefined;
        autostart?: boolean | undefined;
        timeout?: number | undefined;
        customExceedCheck?: CustomExceedCheckCallback | undefined;
        rsmq?: RedisSMQ.Client | undefined;
        redis?: redis.RedisClient | undefined;
        redisPrefix?: string | undefined;
        host?: string | undefined;
        port?: number | undefined;
        options?: redis.ClientOpts | undefined;
    }

    export interface CustomExceedCheckCallback {
        (message: RedisSMQ.Message): boolean;
    }

    export interface CallbackT<R> {
        (e?: Error, res?: R): void;
    }
}

interface RSMQWorkerStatic {
    new(queuename: string, options?: RSMQWorker.Options): RSMQWorker.Client;
}

declare var RSMQWorker: RSMQWorkerStatic;
export = RSMQWorker;
