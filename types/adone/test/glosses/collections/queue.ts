namespace adoneTests.collection.Queue {
    const {
        collection: {
            Queue
        }
    } = adone;

    type Queue = adone.collection.Queue;

    new Queue();
    { const a: Queue = new Queue().push(123).push(123); }
    { const a: number | undefined = new Queue<number>().push(123).pop(); }
    { const a: string | undefined = new Queue<number, string>().push(123).pop(); }
    { const a: boolean = new Queue().full; }
    { const a: number = new Queue().length; }
    { const a: boolean = new Queue().empty; }

    {
        const q = Queue.from([1, 2, 3]);
        const a: number | undefined = q.pop();
    }
    {
        const q = Queue.from((function*() {
            yield 42;
        })());
        const a: number | undefined = q.pop();
    }
}
