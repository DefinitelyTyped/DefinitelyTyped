import Consumer = require("writable-consumable-stream/consumer");

import DemuxedConsumableStream = require("./demuxed-consumable-stream");
import StreamConsumer = require("./stream-consumer");

declare class StreamDemux<T> {
    write(streamName: string, value: T): void;
    close(streamName: string, value?: T): void;
    closeAll(value?: T): void;

    writeToConsumer(consumerId: number, value: T): void;
    closeConsumer(consumerId: number, value: T): void;

    getConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getConsumerStatsList(streamName: string): Consumer.ConsumerStats[];
    getConsumerStatsListAll(): Consumer.ConsumerStats[];

    kill(streamName: string, value?: T): void;
    killAll(value?: T): void;
    killConsumer(consumerId: number, value?: T): void;

    getBackpressure(streamName: string): number;
    getBackpressureAll(): number;
    getConsumerBackpressure(consumerId: number): number;

    hasConsumer(streamName: string, consumerId: number): boolean;
    hasConsumerAll(consumerId: number): boolean;

    getConsumerCount(streamName: string): number;
    getConsumerCountAll(): number;

    createConsumer(streamName: string, timeout?: number, usabilityMode?: unknown): StreamConsumer<T>;

    stream(streamName: string, usabilityMode?: unknown): DemuxedConsumableStream<T>;
}

export = StreamDemux;
