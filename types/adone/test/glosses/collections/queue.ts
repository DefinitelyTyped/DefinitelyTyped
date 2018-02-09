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
}
