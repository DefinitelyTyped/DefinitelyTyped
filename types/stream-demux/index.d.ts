import WritableConsumableStream = require("writable-consumable-stream");
import Consumer = require("writable-consumable-stream/consumer");

import DemuxedConsumableStream = require("./demuxed-consumable-stream");

declare namespace StreamDemux {
    interface ConsumerStats extends Consumer.ConsumerStats {
        stream: string;
    }
}

declare class StreamDemux<T> {
    streams: Record<string, WritableConsumableStream<T>>;
    generateConsumerId: () => number;

    write(streamName: string, value: T): void;
    close(streamName: string, value?: T): void;
    closeAll(value?: T): void;

    writeToConsumer(consumerId: number, value: T): void;
    closeConsumer(consumerId: number, value: T): void;

    getConsumerStats(consumerId: number): StreamDemux.ConsumerStats | undefined;
    getConsumerStatsList(streamName: string): StreamDemux.ConsumerStats[];
    getConsumerStatsListAll(): StreamDemux.ConsumerStats[];

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

    createConsumer(streamName: string, timeout?: number, usabilityMode?: unknown): Consumer<T>;

    stream(streamName: string): DemuxedConsumableStream<T>;
    unstream(streamName: string): void;
}

export = StreamDemux;
