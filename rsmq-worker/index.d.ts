// Type definitions for rsmq-worker 0.3.5
// Project: http://smrchy.github.io/rsmq/rsmq-worker/
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="rsmq"/>


import redis = require('redis');
import events = require('events');
import * as RedisSMQ from 'rsmq';

declare namespace RSMQWorker {
    export interface Client extends events.EventEmitter {
        start(): Client;
        stop(): Client;
        send(message: string, delay?: number, cb?: CallbackT<string>): Client;
        send(message: string, cb: CallbackT<string>): Client;
        del(id: string, cb?: CallbackT<void>): Client;
        changeInterval(interval: number | number[]): Client;
    }

    export interface Options {
        interval?: number;
        maxReceiveCount?: number;
        invisibletime?: number;
        defaultDelay?: number;
        autostart?: boolean;
        timeout?: number;
        customExceedCheck?: CustomExceedCheckCallback;
        rsmq?: RedisSMQ.Client;
        redis?: redis.RedisClient;
        redisPrefix?: string;
        host?: string;
        port?: number;
        options?: redis.ClientOpts;
    }

    export interface CustomExceedCheckCallback {
        (message: RedisSMQ.Message): boolean;
    }

    export interface CallbackT<R> {
        (e?: Error, res?: R): void;
    }
}

interface RSMQWorkerStatic {
    new (queuename: string, options?: RSMQWorker.Options): RSMQWorker.Client;
}

declare var RSMQWorker: RSMQWorkerStatic;
export = RSMQWorker;
