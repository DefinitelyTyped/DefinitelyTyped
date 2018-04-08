namespace adoneTests.collection.LRU {
    const {
        collection: {
            LRU
        }
    } = adone;

    type LRU = adone.collection.LRU;

    new LRU();
    new LRU(100);
    new LRU({});
    new LRU({ max: 100 });
    new LRU<string, number>({ dispose: (key: string, value: number) => null });
    new LRU<string, number>({ maxAge: 100 });
    new LRU<string, number>({ noDisposeOnSet: false });
    new LRU<string, number>({ stale: true });
    { const a: number = new LRU<string, number>().max; }
    { new LRU<string, number>().max = 100; }
    { const a: boolean = new LRU<string, number>().allowStale; }
    { new LRU<string, number>().allowStale = false; }
    { const a: number = new LRU<string, number>().maxAge; }
    { new LRU<string, number>().maxAge = 100; }
    { const a: (v: number, k: string) => number = new LRU<string, number>().lengthCalculator; }
    { new LRU<string, number>().lengthCalculator = () => 123; }
    { const a: number = new LRU<string, number>().length; }
    { const a: number = new LRU<string, number>().itemCount; }
    new LRU<string, number>().rforEach((value: number, key: string) => null);
    new LRU<string, number>().rforEach(function (value: number, key: string) {
        const b: number = this.a;
    }, { a: 1 });
    new LRU<string, number>().forEach((value: number, key: string) => null);
    new LRU<string, number>().forEach(function (value: number, key: string) {
        const b: number = this.a;
    }, { a: 1 });
    { const a: string[] = new LRU<string, number>().keys(); }
    { const a: number[] = new LRU<string, number>().values(); }
    new LRU<string, number>().reset();
    {
        const a: Array<adone.collection.I.LRU.SerializedEntry<string, number>> = new LRU<string, number>().dump();
        const [b] = a;
        { const c: number = b.e; }
        { const c: string = b.key; }
        { const c: number = b.value; }
    }
    {
        const a: adone.collection.LinkedList<adone.collection.I.LRU.Entry<string, number>> = new LRU<string, number>().dumpLru();
        const b = a.shift();
        if (b !== undefined) {
            { const a: string = b.key; }
            { const a: number = b.value; }
            { const a: number = b.now; }
            { const a: number = b.maxAge; }
        }
    }
    { const a: string = new LRU<string, number>().inspect(); }
    { const a: string = new LRU<string, number>().inspect({}); }
    { const a: boolean = new LRU<string, number>().set("asd", 13); }
    { const a: boolean = new LRU<string, number>().set("asd", 13, 100500); }
    { const a: boolean = new LRU<string, number>().has("asd"); }
    { const a: number | undefined = new LRU<string, number>().get("asd"); }
    { const a: number | undefined = new LRU<string, number>().peek("asd"); }
    { const a: adone.collection.I.LRU.Entry<string, number> = new LRU<string, number>().pop(); }
    new LRU<string, number>().del("asd");
    new LRU<string, number>().load(new LRU<string, number>().dump());
    new LRU<string, number>().prune();
}
