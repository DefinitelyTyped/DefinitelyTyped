import ConsumableStream = require("consumable-stream");

import Consumer = require("./consumer");

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
    removeConsumer(consumerId: number): boolean;

    getConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getConsumerStatsList(): Consumer.ConsumerStats[];

    createConsumer(timeout?: number): Consumer<T>;

    getConsumerCount(): number;
}

export = WritableConsumableStream;
