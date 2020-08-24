// Type definitions for writable-consumable-stream 1.1
// Project: https://github.com/SocketCluster/writable-consumable-stream
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ConsumableStream = require('consumable-stream');

import Consumer = require('./consumer');

declare class WritableConsumableStream<T> extends ConsumableStream<T> {
    nextConsumerId: number;

    write(value: T): void;
    close(value?: T): void;

    writeToConsumer(consumerId: number, value: T): void;
    closeConsumer(consumerId: number, value?: T): void;

    kill(value?: T): void;
    killConsumer(consumerId: number, value?: T): void;

    getBackpressure(): number;
    getConsumerBackpressure(consumerId: number): number;

    hasConsumer(consumerId: number): boolean;

    setConsumer(consumerId: number, consumer: Consumer<T>): void;
    removeConsumer(consumerId: number): void;

    getConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getConsumerStatsList(): Consumer.ConsumerStats[];

    createConsumer(timeout?: number): Consumer<T>;
}

export = WritableConsumableStream;
