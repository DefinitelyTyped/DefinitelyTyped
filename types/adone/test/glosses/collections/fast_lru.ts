namespace adoneTests.collection.FastLRU {
    const {
        collection: {
            FastLRU
        }
    } = adone;

    new FastLRU();
    new FastLRU(100);
    new FastLRU<string, number>(100, { dispose: (key: string, value: number) => null });
    { const a: number = new FastLRU().size; }
    { const a: number | undefined = new FastLRU<string, number>().get("key"); }
    new FastLRU<string, number>().set("key", 123);
    { const a: boolean = new FastLRU<string, number>().delete("key"); }
    { const a: boolean = new FastLRU<string, number>().has("key"); }
    { const a: string[] = [...new FastLRU<string, number>().keys()]; }
    { const a: number[] = [...new FastLRU<string, number>().values()]; }
    { const a: number[] = [...new FastLRU<string, number>().values()]; }
    { const a: Array<[string, number]> = [...new FastLRU<string, number>().entries()]; }
    new FastLRU<string, number>().clear();
}
