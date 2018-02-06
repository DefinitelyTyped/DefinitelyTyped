import PromiseQueue = require('promise-queue');

PromiseQueue.configure(Promise);

const queue1 = new PromiseQueue();
const queue2 = new PromiseQueue(1, 1, {onEmpty: () => null});

const queuedPromise: Promise<number> = queue1.add(() => Promise.resolve(123));

const running: number = queue1.getPendingLength();
const inQueue: number = queue1.getQueueLength();
