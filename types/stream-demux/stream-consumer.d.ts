import ConsumableStream = require("consumable-stream");
import WritableConsumableStream = require("writable-consumable-stream");
import WritableConsumableStreamConsumer = require("writable-consumable-stream/consumer");

declare class StreamConsumer<T> implements ConsumableStream.Consumer<T> {
    id: number;
    currentNode: WritableConsumableStreamConsumer.Node<T>;
    timeout: number;
    isAlive: boolean;
    streamName: string;
    usabilityMode: boolean;

    constructor(mainStream: WritableConsumableStream<T>, id: number, startNode: WritableConsumableStreamConsumer.Node<T>, timeout?: number | undefined, usabilityMode?: unknown);

    getStats(): WritableConsumableStreamConsumer.ConsumerStats;

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
