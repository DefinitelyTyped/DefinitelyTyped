namespace adoneTests.collection.RefcountedCache {
    const {
        collection: {
            RefcountedCache
        }
    } = adone;

    new RefcountedCache();
    new RefcountedCache().ref("a");
    new RefcountedCache().unref("a");
    new RefcountedCache().references("a") === 5;

    {
        const a = new RefcountedCache<string>();
        a.get("b").charCodeAt(100);
    }
}
