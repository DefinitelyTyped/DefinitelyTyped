namespace adoneTests.collection.ArraySet {
    const {
        collection: {
            ArraySet
        }
    } = adone;

    type ArraySet<T = any> = adone.collection.ArraySet<T>;

    new ArraySet();
    { const a: number = new ArraySet().length; }
    { const a: ArraySet = new ArraySet<string>().add("hello"); }
    { const a: ArraySet = new ArraySet<string>().add("hello", true); }
    { const a: boolean = new ArraySet<string>().has("string"); }
    { const a: number = new ArraySet<string>().indexOf("hello"); }
    { const a: string[] = new ArraySet<string>().toArray(); }
    { const a: ArraySet<number> = ArraySet.from([1]); }
    { const a: ArraySet<number> = ArraySet.from([1], true); }
}
