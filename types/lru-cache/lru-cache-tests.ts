import LRUCache = require('lru-cache');

const num = 1;

interface Foo {
    foo(): void;
}

const foo = {
    foo() {},
};

const cache = new LRUCache<string, Foo>();
cache; // $ExpectType LRUCache<string, Foo>
// prettier-ignore
new LRUCache<string, Foo>({ // $ExpectType LRUCache<string, Foo>
    max: num,
    maxSize: num,
    ttl: num,
    ttlResolution: num,
    ttlAutopurge: false,
    sizeCalculation(value) {
        value; // $ExpectType Foo
        return num;
    },
    dispose(value, key) {
        value; // $ExpectType Foo
        key; // $ExpectType string
    },
    allowStale: false,
    noDisposeOnSet: false,
    updateAgeOnGet: false
});
new LRUCache<string, Foo>(num); // $ExpectError
new LRUCache<string, Foo>(); // $ExpectType LRUCache<string, Foo>
// prettier-ignore
new LRUCache<string, Foo>({ // $ExpectType LRUCache<string, Foo>
    max: num,
    ttl: num,
    sizeCalculation: value => {
        return num;
    },
    dispose: (value, key) => {},
    allowStale: false,
    noDisposeOnSet: false,
});

cache.size; // $ExpectType number
cache.size = 1; // $ExpectError

cache.calculatedSize; // $ExpectType number
cache.calculatedSize = 1; // $ExpectError

cache.max; // $ExpectType number
cache.max = 1;

cache.maxSize; // $ExpectType number | undefined
cache.maxSize = 1;

cache.sizeCalculation; // $ExpectType ((value: Foo, key?: string | undefined) => number) | undefined
cache.sizeCalculation = () => 1;

cache.dispose; // $ExpectType ((value: Foo, key: string, reason: "evict" | "set" | "delete") => void) | undefined
cache.dispose = () => 1;

cache.disposeAfter; // $ExpectType ((value: Foo, key: string, reason: "evict" | "set" | "delete") => void) | undefined
cache.disposeAfter = () => 1;

cache.noDisposeOnSet; // $ExpectType boolean | undefined
cache.noDisposeOnSet = true;

cache.ttl; // $ExpectType number | undefined
cache.ttl = 1;

cache.ttlResolution; // $ExpectType number | undefined
cache.ttlResolution = 1;

cache.ttlAutopurge; // $ExpectType boolean | undefined
cache.ttlAutopurge = true;

cache.allowStale; // $ExpectType boolean | undefined
cache.allowStale = true;

cache.updateAgeOnGet; // $ExpectType boolean | undefined
cache.updateAgeOnGet = true;

cache.set('foo', foo); // $ExpectType LRUCache<string, Foo>
cache.set(1, foo); // $ExpectError
cache.set('foo', 1); // $ExpectError

cache.get('foo'); // $ExpectType Foo | undefined
cache.get(1); // $ExpectError

cache.peek('foo'); // $ExpectType Foo | undefined
cache.peek(1); // $ExpectError

cache.has('foo'); // $ExpectType boolean
cache.has(1); // $ExpectError

cache.delete('foo');
cache.delete(1); // $ExpectError

cache.clear();
cache.keys(); // $ExpectType Generator<string, void, unknown>
cache.values(); // $ExpectType Generator<Foo, void, unknown>
cache.entries(); // $ExpectType Generator<Entry<string, Foo>, void, unknown>

cache.forEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo>
    this; // $ExpectType LRUCache<string, Foo>
});
cache.forEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo>
    this; // $ExpectType { foo(): void; }
}, foo);

cache.rforEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo>
    this; // $ExpectType LRUCache<string, Foo>
});
cache.rforEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo>
    this; // $ExpectType { foo(): void; }
}, foo);

const dump = cache.dump();
dump; // $ExpectType Entry<string, Foo>[]
cache.load(dump);
