/// <reference types="node" />

declare abstract class ConsumableStream<T> implements AsyncIterator<T>, AsyncIterable<T> {
    next(timeout?: number): Promise<IteratorResult<T>>;
    once(timeout?: number): Promise<T>;
    abstract createConsumer(timeout?: number): ConsumableStream.Consumer<T>;
    [Symbol.asyncIterator](): AsyncIterator<T>;
}

export = ConsumableStream;

declare namespace ConsumableStream {
    interface Consumer<T> {
        next(): Promise<IteratorResult<T>>;
        return(): void;
    }
}
