import promiseTheWorld = require("promise-the-world");
import { Deferred } from "promise-the-world/defer";
import { Mutex } from "promise-the-world/mutex";
import { Queue } from "promise-the-world/queue";

const { defer, queue, delay, mutex } = promiseTheWorld;

function deferTest(): Promise<string> {
    const foo: boolean = <any> {};
    const deferred: Deferred<string> = defer<string>();

    if (foo) {
        deferred.resolve("foo");
    } else {
        deferred.reject(new Error("bar"));
    }

    deferred.resolve();

    return deferred.promise;
}

function delayTest() {
    delay(1000).then(() => {
        // 'after 1 second'
    });
}

function mutexTest(): Promise<any> {
    const access: Mutex = mutex();

    async function limitedFetch(url: string) {
        await access.lock();

        try {
            const result = await Promise.resolve(url);

            access.unlock();

            return result;
        } catch (err) {
            // make sure you unlock the mutex if an error was thrown!
            access.unlock();

            throw err;
        }
    }

    return Promise.all([
        limitedFetch("http://example.org/"),
        limitedFetch("http://example.com/"),
    ]);
}

function queueTest() {
    let fetchQueue: Queue = queue(2);
    fetchQueue = queue(2, 100);

    const length: number = fetchQueue.length;
    const maxPending: number = fetchQueue.maxPending;
    const maxQueued: number = fetchQueue.maxQueued;
    const pending: number = fetchQueue.pending;

    const queued: Promise<[string, number, boolean]> = Promise.all([
        fetchQueue.add(() => Promise.resolve("foo")),
        fetchQueue.add(() => Promise.resolve(10)),
        fetchQueue.add(() => Promise.resolve(false)),
    ]);
}
