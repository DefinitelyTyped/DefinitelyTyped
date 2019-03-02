import PQueue = require('p-queue');

const queue = new PQueue({ concurrency: 1 });
new PQueue({ autoStart: false });
new PQueue({ intervalCap: 1 });
new PQueue({ interval: 0 });
new PQueue({ carryoverConcurrencyCount: true });

queue.add(() => Promise.resolve('sindresorhus.com')); // $ExpectType Promise<string>
queue.add(() => 'sindresorhus.com'); // $ExpectType Promise<string>
queue.add(() => 'sindresorhus.com', { priority: 1 }); // $ExpectType Promise<string>

queue.addAll([() => Promise.resolve('oh'), () => 'hi']); // $ExpectType Promise<string[]>
queue.addAll<string | number>([() => Promise.resolve('oh'), () => 1]); // $ExpectType Promise<(string | number)[]>
queue.addAll([() => Promise.resolve('oh'), () => 'hi'], { priority: 1 }); // $ExpectType Promise<string[]>

queue.onEmpty(); // $ExpectType Promise<void>
queue.onIdle(); // $ExpectType Promise<void>
queue.start();
queue.pause();
queue.clear();

queue.size; // $ExpectType number
queue.size = 1; // $ExpectError
queue.pending; // $ExpectType number
queue.pending = 5; // $ExpectError
queue.isPaused; // $ExpectType boolean
queue.isPaused = true; // $ExpectError

class QueueClass implements PQueue.QueueClass<{ any: string }> {
    private readonly queue: Array<() => void>;

    size = 0;

    constructor() {
        this.queue = [];
    }

    enqueue(run: () => void, options: { any: string }) {
        this.queue.push(run);
    }

    dequeue() {
        return this.queue.shift();
    }
}

const queue2 = new PQueue({ queueClass: QueueClass });
queue2.add(() => Promise.resolve(), { any: 'hi' });
