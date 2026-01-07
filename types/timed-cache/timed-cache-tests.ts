import Cache, { CacheOptions } from "timed-cache";

// constructor
{
    new Cache<string>();
    new Cache<string>({});
    new Cache<string>({ defaultTtl: 5000 });
}

// Method

{
    interface Foo {
        thing: string;
    }

    const cache = new Cache<Foo>();

    // $ExpectType void
    cache.clear();

    // $ExpectType Foo | undefined
    cache.get("key");
    // $ExpectType Foo | undefined
    cache.get({ key: "val" });

    // $ExpectType void
    cache.put("key", { thing: "foo" }, {
        ttl: 50,
        callback: (key, value) => {
            // $ExpectType Key
            key;
            // $ExpectType Foo
            value;
        },
    });
    // $ExpectType void
    cache.put({ key: "val" }, { thing: "foo" }, {
        ttl: 50,
        callback: (key, value) => {
            // $ExpectType Key
            key;
            // $ExpectType Foo
            value;
        },
    });

    // $Expect Type void
    cache.remove("key");
    // $Expect Type void
    cache.remove({ key: "val" });

    // $ExpectType number
    cache.size();
}
