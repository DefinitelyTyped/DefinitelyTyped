namespace adoneTests.collection.Set {
    const {
        collection: {
            Set
        }
    } = adone;

    new Set().add("a");
    new Set().has("a");
    new Set().delete("a");
    new Set().get("a");
    new Set().has("a") === true;
    new Set().only();
    new Set().size === 5;

    {
        const a = new Set<number>();

        a.add(1);
        a.has(2);
        a.delete(2);
        a.get(2); // ???
        a.only() === 5;
        a.size === 5;
    }
}
