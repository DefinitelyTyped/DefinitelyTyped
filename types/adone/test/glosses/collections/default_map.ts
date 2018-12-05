namespace adoneTests.collection.DefaultMap {
    const {
        collection: {
            DefaultMap
        }
    } = adone;

    type DefaultMap<K = any, V = any> = adone.collection.DefaultMap<K, V>;

    new DefaultMap();
    { const a: DefaultMap<string, number> = new DefaultMap(undefined, [["1", 2]]); }
    { const a: DefaultMap<string, number> = new DefaultMap((key: string) => 123); }
    { const a: DefaultMap<string, number> = new DefaultMap({ a: 123 }); }
}
