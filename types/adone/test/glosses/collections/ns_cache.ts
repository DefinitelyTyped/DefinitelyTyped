namespace adoneTests.collection.NSCache {
    const {
        collection: {
            NSCache
        }
    } = adone;

    new NSCache(10, ["a", "b", "c"]);
    new NSCache(10, ["a", "b", "c"]).resize(100);
    new NSCache(10, ["a", "b", "c"]).set("a", "b", "c");
    new NSCache(10, ["a", "b", "c"]).get("a", "b");
    new NSCache(10, ["a", "b", "c"]).has("a", "b");
    new NSCache(10, ["a", "b", "c"]).delete("a", "b");
    new NSCache(10, ["a", "b", "c"]).clear();

    {
        const a = new NSCache<string>(10, ["a", "b", "c"]);
        a.set("a", "b", "c");
        a.get("a", "b").charCodeAt(100);
    }
}
