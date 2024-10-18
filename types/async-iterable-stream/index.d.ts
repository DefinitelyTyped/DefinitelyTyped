/// <reference types="node" />

declare abstract class AsyncIterableStream<T> implements AsyncIterator<T>, AsyncIterable<T> {
    next(timeout?: number): Promise<IteratorResult<T>>;
    once(timeout?: number): Promise<T>;
    abstract createAsyncIterator(timeout?: number): AsyncIterableStream.AsyncIterator<T>;
    createAsyncIterable(timeout?: number): AsyncIterable<T>;
    [Symbol.asyncIterator](): AsyncIterator<T>;
}

export = AsyncIterableStream;

declare namespace AsyncIterableStream {
    interface AsyncIterator<T> {
        next(): Promise<IteratorResult<T>>;
        return(): void;
    }
}
