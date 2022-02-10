import LRUCache = require('lru-cache');

const num = 1;

interface Foo {
    foo(): void;
}

const foo = {
    foo() {}
};

const cache = new LRUCache<string, Foo>();
cache; // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>({ // $ExpectType LRUCache<string, Foo>
    max: num,
    ttl: num,
    sizeCalculation(value) {
        value; // $ExpectType Foo
        return num;
    },
    dispose(value, key, reason) {
        key; // $ExpectType string
        value; // $ExpectType Foo
        reason; // $ExpectType DisposeReason
    },
    allowStale : false,
    noDisposeOnSet: false,
});
new LRUCache<string, Foo>({ max: num }); // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>(); // $ExpectType LRUCache<string, Foo>
new LRUCache<string, Foo>({ // $ExpectType LRUCache<string, Foo>
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

cache.ttl; // $ExpectType number
cache.ttl = 1; // $ExpectError

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
cache.purgeStale();

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
cache.values(); // $ExpectType Generator<Foo, any, unknown>

const dump = cache.dump();
dump; // $ExpectType [string, Entry<Foo>][]
cache.load(dump);
