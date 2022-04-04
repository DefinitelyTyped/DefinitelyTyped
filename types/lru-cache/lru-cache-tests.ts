import LRUCache = require('lru-cache');

const num = 1;

interface Foo {
    foo(): void;
}

const foo = {
    foo() {},
};

const cache = new LRUCache<string, Foo>({ max: 10 });
cache; // $ExpectType LRUCache<string, Foo>

// $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>({
    max: num,
    maxAge: num, // deprecated
    stale: false, // deprecated
    noDisposeOnSet: false,
    ttl: 1000 * 60 * 5,
    allowStale: false,
    updateAgeOnGet: false,
    length(value) {
        value; // $ExpectType Foo
        return num;
    }, // deprecated
    dispose(value, key, reason) {
        value; // $ExpectType Foo
        key; // $ExpectType string
        reason; // $ExpectType DisposeReason
    },
    sizeCalculation(value, key) {
        value; // $ExpectType Foo
        key; // $ExpectType string

        return 1;
    },
});
new LRUCache<string, Foo>({ max: num }); // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>({ ttl: 1 }); // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>({ maxSize: 1000 }); // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>(); // $ExpectError

new LRUCache<string, Foo>({
    max: num,
    ttl: num,
    sizeCalculation: (value) => {
        return num;
    },
    dispose: (key, value) => {},
    allowStale: false,
    noDisposeOnSet: false,
});
new LRUCache<string, Foo>({ max: num }); // $ExpectType LRUCache<string, Foo>

cache.size; // $ExpectType number
cache.size = 1; // $ExpectError

cache.calculatedSize; // $ExpectType number
cache.calculatedSize = 1; // $ExpectError

cache.allowStale; // $ExpectType boolean
cache.allowStale = true; // $ExpectError

cache.sizeCalculation; // $ExpectType SizeCalculator<string, Foo> | undefined
cache.sizeCalculation = () => 1; // $ExpectError

cache.max; // $ExpectType number
cache.max = 1; // $ExpectError

cache.maxSize; // $ExpectType number
cache.maxSize = 1; // $ExpectError

cache.noDisposeOnSet; // $ExpectType boolean
cache.noDisposeOnSet = true; // $ExpectError

cache.ttl; // $ExpectType number
cache.ttl = 1; // $ExpectError

cache.updateAgeOnGet; // $ExpectType boolean
cache.updateAgeOnGet = false; // $ExpectError

cache.size = 1; // $ExpectError

cache.calculatedSize = 1; // $ExpectError

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
cache.del('foo');
cache.del(1); // $ExpectError

cache.clear();
cache.purgeStale();
cache.reset();

cache.prune();

cache.pop();

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

cache.keys(); // $ExpectType Generator<string, any, unknown>
cache.rkeys(); // $ExpectType Generator<string, any, unknown>
cache.values(); // $ExpectType Generator<Foo, any, unknown>
cache.rvalues(); // $ExpectType Generator<Foo, any, unknown>
cache.entries(); // $ExpectType Generator<[string, Foo], any, unknown>
cache.rentries(); // $ExpectType Generator<[string, Foo], any, unknown>

cache.fetchMethod; // $ExpectType Fetcher<string, Foo> | null
cache.fetch('someKey'); // $ExpectType Promise<Foo | undefined>
cache.fetch(42); // $ExpectError
cache.getRemainingTTL('test'); // $ExpectType number

const dump = cache.dump();
dump; // $ExpectType [string, Entry<Foo>][]
cache.load(dump);
