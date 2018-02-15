namespace adoneTests.collection.MapCache {
    const {
        collection: {
            MapCache
        }
    } = adone;

    new MapCache();

    new MapCache().has("hello");
    new MapCache().get("hello");
    new MapCache().set("hello", "world");
    new MapCache().delete("hello");
    new MapCache().clear();

    {
        const a = new MapCache<string>();
        a.set("a", "b");
        a.get("a").charCodeAt(20);
    }
}
