// Type definitions for rsmq-worker 0.3.5
// Project: http://smrchy.github.io/rsmq/rsmq-worker/
// Definitions by: Qubo <https://github.com/MugeSo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../rsmq/rsmq.d.ts'/>

declare module "rsmq-worker" {
    import redis = require('redis');
    import events = require('events');

    interface CallbackT<R> {
        (e?:Error, res?:R): void;
    }

    interface RSMQWorkerStatic {
        new(queuename: string, options?: WorkerOptions): RSMQWorker;
    }

    interface WorkerOptions {
        interval?: number;
        maxReceiveCount?: number;
        invisibletime?: number;
        defaultDelay?: number;
        autostart?: boolean;
        timeout: number;
        customExceedCheck?: CustomExceedCheckCallback;
        rsmq?: RedisSMQ.Client;
        redis?: redis.RedisClient;
        redisPrefix?: string;
        host?: string;
        port?: number;
        options?: redis.ClientOpts;
    }

    interface CustomExceedCheckCallback {
        (message: RedisSMQ.Message): boolean;
    }


    interface RSMQWorker extends events.EventEmitter {
        start(): RSMQWorker;
        stop(): RSMQWorker;
        send(message: string, delay?: number, cb?: CallbackT<string>): RSMQWorker;
        send(message: string, cb: CallbackT<string>): RSMQWorker;
        del(id: string, cb?: CallbackT<void>): RSMQWorker;
        changeInterval(interval: number|number[]): RSMQWorker;
    }

    var worker: RSMQWorkerStatic;
    export = worker;
}
