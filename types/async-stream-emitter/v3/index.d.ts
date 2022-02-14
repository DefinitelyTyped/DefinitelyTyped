// Type definitions for async-stream-emitter 3.0
// Project: https://github.com/SocketCluster/async-stream-emitter
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import ConsumableStream = require('consumable-stream');
import Consumer = require('writable-consumable-stream/consumer');

declare class AsyncStreamEmitter<T> {
    emit(eventName: string, data: T): void;

    listener(eventName: string): ConsumableStream<T>;

    closeListener(eventName: string): void;
    closeAllListeners(): void;

    getListenerConsumerStats(consumerId: number): Consumer.ConsumerStats;
    getListenerConsumerStatsList(eventName: string): Consumer.ConsumerStats[];
    getAllListenersConsumerStatsList(): Consumer.ConsumerStats[];

    killListener(eventName: string): void;
    killAllListeners(): void;
    killListenerConsumer(consumerId: number): void;

    getListenerBackpressure(eventName: string): number;
    getAllListenersBackpressure(): number;
    getListenerConsumerBackpressure(consumerId: number): number;

    hasListenerConsumer(eventName: string, consumerId: number): boolean;
    hasAnyListenerConsumer(consumerId: number): boolean;
}

export = AsyncStreamEmitter;
