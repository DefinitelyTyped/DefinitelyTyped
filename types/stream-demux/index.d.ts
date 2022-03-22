// Type definitions for stream-demux 8.0
// Project: https://github.com/SocketCluster/stream-demux
// Definitions by: Daniel Rose <https://github.com/DanielRose>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Consumer = require('writable-consumable-stream/consumer');

import DemuxedConsumableStream = require('./demuxed-consumable-stream');

declare class StreamDemux<T> {
    write(streamName: string, value: T): void;
    close(streamName: string, value?: T): void;
    closeAll(value?: T): void;

    writeToConsumer(consumerId: number, value: T): void;
    closeConsumer(consumerId: number, value: T): void;

    kill(streamName: string, value?: T): void;
    killAll(value?: T): void;
    killConsumer(consumerId: number, value?: T): void;

    getBackpressure(streamName: string): number;
    getBackpressureAll(): number;
    getConsumerBackpressure(consumerId: number): number;

    hasConsumer(streamName: string, consumerId: number): boolean;
    hasConsumerAll(consumerId: number): boolean;

    getConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getConsumerStatsList(streamName: string): Consumer.ConsumerStats[];
    getConsumerStatsListAll(): Consumer.ConsumerStats[];

    createConsumer(streamName: string, timeout?: number): Consumer<T>;

    stream(streamName: string): DemuxedConsumableStream<T>;
}

export = StreamDemux;
