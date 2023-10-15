// Type definitions for ringbufferjs 1.1
// Project: https://github.com/janogonzalez/ringbufferjs#readme
// Definitions by: Amchelle Clendenin <https://github.com/amchelle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RingBuffer;

declare class RingBuffer<T> {
    _elements: T[];
    _first: number;
    _last: number;
    _size: number;
    _evictedCb: (element: T) => any;

    constructor(capacity: number, evictedCB?: (element: T) => any);

    capacity(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    peek(): T;
    peekN(count: number): T[];
    deq(): T;
    deqN(count: number): T[];
    enq(element: T): number;
    size(): number;
}
