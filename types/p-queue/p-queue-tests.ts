import PQueue = require('p-queue');

const queue = new PQueue({concurrency: 1});

queue.add(() => Promise.resolve('sindresorhus.com')).then((sindre) => {
    const str: string = sindre;
});

Promise.resolve((): Promise<string> => Promise.resolve('unicorn'))
    .then(task => queue.add(task, {priority: 5}))
    .then(unicorn => {
        const str: string = unicorn;
    });

queue.onEmpty().then(() => {
});
queue.clear();

let num: number;
num = queue.size;
num = queue.pending;

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

const queue2 = new PQueue({queueClass: QueueClass});
queue2.add(() => Promise.resolve(), {any: 'hi'});
