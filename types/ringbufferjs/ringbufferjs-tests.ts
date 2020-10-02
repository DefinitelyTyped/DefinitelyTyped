import RingBuffer = require('ringbufferjs');

const buffer: RingBuffer<number> = new RingBuffer<number>(10);
buffer.enq(1);
const capacity: number = buffer.capacity();
const isEmpty: boolean = buffer.isEmpty();
const isFull: boolean = buffer.isFull();
const peeked: number = buffer.peek();
const peekedElements: number[] = buffer.peekN(2);
const removed: number = buffer.deq();
const removedElements: number[] = buffer.deqN(3);
const size: number = buffer.size();
