import ConsumableStream = require("consumable-stream");
import WritableConsumableStream = require("writable-consumable-stream");
import Consumer = require("writable-consumable-stream/consumer");

declare class StreamConsumer<T> implements ConsumableStream.Consumer<T> {
    id: number;
    currentNode: Consumer.Node<T>;
    timeout: number;
    isAlive: boolean;
    streamName: string;
    usabilityMode: boolean;

    constructor(
        mainStream: WritableConsumableStream<T>,
        id: number,
        startNode: Consumer.Node<T>,
        timeout?: number,
        usabilityMode?: unknown,
    );

    getStats(): Consumer.ConsumerStats;

    applyBackpressure(packet: any): void;
    releaseBackpressure(packet: any): void;
    getBackpressure(): number;

    clearActiveTimeout(): void;

    write(packet: any): void;

    kill(value?: any): void;

    next(): Promise<IteratorResult<T>>;
    return(): {};

    [Symbol.asyncIterator](): AsyncIterator<T>;
}

export = StreamConsumer;
