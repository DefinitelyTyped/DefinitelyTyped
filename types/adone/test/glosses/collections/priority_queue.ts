namespace adoneTests.collection.PriorityQueue {
    const {
        collection: {
            PriorityQueue
        }
    } = adone;

    type PriorityQueue<T = any> = adone.collection.PriorityQueue<T>;

    { const a: boolean = new PriorityQueue().empty; }
    { const a: number = new PriorityQueue().length; }
    new PriorityQueue();
    new PriorityQueue({});
    new PriorityQueue<number>({
        compare(a: number, b: number) {
            return a - b;
        }
    });
    new PriorityQueue<string>({
        priority(a: string, b: string) {
            return a.length - b.length;
        }
    });
    { const a: PriorityQueue<string> = new PriorityQueue<string>().clone(); }
    { const a: PriorityQueue<string> = new PriorityQueue<string>().push("123"); }
    { const a: string | undefined = new PriorityQueue<string>().pop(); }
    { const a: PriorityQueue<string> = new PriorityQueue<string>().delete("123"); }
    { const a: PriorityQueue<string> = new PriorityQueue<string>().delete("123"); }
    { const a: string = new PriorityQueue<string>().replace("123"); }
    { const a: string = new PriorityQueue<string>().pushpop("123"); }
    { const a: string[] = new PriorityQueue<string>().toArray(); }
    { const a: PriorityQueue<string> = PriorityQueue.from(["1"]); }
    { const a: PriorityQueue<string> = PriorityQueue.from(["1"], {}); }
    { const a: PriorityQueue<string> = PriorityQueue.from(["1"], { compare: (a: string, b: string) => a.length - b.length }); }
    { const a: PriorityQueue<string> = PriorityQueue.from(["1"], { priority: (a: string, b: string) => a.length - b.length }); }
}
