// Type definitions for mongodb-queue 4.0
// Project: https://github.com/chilts/mongodb-queue
// Definitions by: FiveOFive <https://github.com/FiveOFive>
//                 codejockie <https://github.com/codejockie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import { Db, MongoError } from 'mongodb';

declare function mongodbQueue(db: Db, name: string, opts?: mongodbQueue.QueueOptions): mongodbQueue.Queue;

declare namespace mongodbQueue {
    class Queue {
        constructor(db: Db, name: string, opts?: QueueOptions);

        createIndexes(callback: QueueCallback<string>): void;
        add(payload: Payload, callback: QueueCallback<string>): void;
        add(payload: ArrayPayload, callback: QueueCallback<string[]>): void;
        add(payload: Payload, opts: QueueOptions, callback: QueueCallback<string>): void;
        add(payload: ArrayPayload, opts: QueueOptions, callback: QueueCallback<string[]>): void;
        get(callback: QueueCallback<QueueMessage | undefined>): void;
        get(opts: QueueOptions, callback: QueueCallback<QueueMessage | undefined>): void;
        ping(ack: string, callback: QueueCallback<string>): void;
        ping(ack: string, opts: QueueOptions, callback: QueueCallback<string>): void;
        ack(ack: string, callback: QueueCallback<string>): void;
        clean(callback: QueueCallback<any>): void;
        total(callback: QueueCallback<number>): void;
        size(callback: QueueCallback<number>): void;
        inFlight(callback: QueueCallback<number>): void;
        done(callback: QueueCallback<number>): void;
    }

    type Payload = string | Record<string, unknown>;
    type ArrayPayload = Array<string | Record<string, unknown>>;

    interface QueueOptions {
        deadQueue?: Queue;
        delay?: number;
        maxRetries?: number;
        visibility?: number;
    }

    interface QueueMessage {
        ack: string;
        id: string;
        payload: Payload | ArrayPayload;
        tries: number;
    }

    interface QueueCallback<T> {
        (err: MongoError | Error, result: T): void;
    }
}

export = mongodbQueue;
