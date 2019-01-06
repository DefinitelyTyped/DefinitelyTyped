namespace adoneTests.collection.AsyncQueue {
    const {
        collection: {
            AsyncQueue
        }
    } = adone;

    type AsyncQueue = adone.collection.AsyncQueue;

    { const a: AsyncQueue = new AsyncQueue().push(123); }
    { const a: Promise<number> = new AsyncQueue<number>().push(123).pop(); }
}
