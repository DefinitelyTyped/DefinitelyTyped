import LRU = require('lru-cache');

const num = 1;

interface Foo {
    foo(): void;
}

const foo = {
    foo() {}
};

const cache = LRU<string, Foo>();
cache; // $ExpectType Cache<string, Foo>
LRU<string, Foo>({ // $ExpectType Cache<string, Foo>
    max: num,
    maxAge: num,
    length(value) {
        value; // $ExpectType Foo
        return num;
    },
    dispose(key, value) {
        key; // $ExpectType string
        value; // $ExpectType Foo
    },
    stale: false,
    noDisposeOnSet: false,
});
LRU<string, Foo>(num); // $ExpectType Cache<string, Foo>
new LRU<string, Foo>(); // $ExpectType Cache<string, Foo>
new LRU<string, Foo>({ // $ExpectType Cache<string, Foo>
    max: num,
    maxAge: num,
    length: (value) => {
        return num;
    },
    dispose: (key, value) => {},
    stale: false,
    noDisposeOnSet: false,
});
new LRU<string, Foo>(num); // $ExpectType Cache<string, Foo>

cache.length; // $ExpectType number
cache.length = 1; // $ExpectError

cache.itemCount; // $ExpectType number
cache.itemCount = 1; // $ExpectError

cache.allowStale; // $ExpectType boolean
cache.allowStale = true;

cache.lengthCalculator; // $ExpectType (value: Foo) => number
cache.lengthCalculator = () => 1;

cache.max; // $ExpectType number
cache.max = 1;

cache.maxAge; // $ExpectType number
cache.maxAge = 1;

cache.set('foo', foo); // $ExpectType boolean
cache.set(1, foo); // $ExpectError
cache.set('foo', 1); // $ExpectError

cache.get('foo'); // $ExpectType Foo | undefined
cache.get(1); // $ExpectError

cache.peek('foo'); // $ExpectType Foo | undefined
cache.peek(1); // $ExpectError

cache.has('foo'); // $ExpectType boolean
cache.has(1); // $ExpectError

cache.del('foo');
cache.del(1); // $ExpectError

cache.reset();
cache.prune();

cache.forEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType Cache<string, Foo>
    this; // $ExpectType Cache<string, Foo>
});
cache.forEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType Cache<string, Foo>
    this; // $ExpectType { foo(): void; }
}, foo);

cache.rforEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType Cache<string, Foo>
    this; // $ExpectType Cache<string, Foo>
});
cache.rforEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType Cache<string, Foo>
    this; // $ExpectType { foo(): void; }
}, foo);

cache.keys(); // $ExpectType string[]
cache.values(); // $ExpectType Foo[]

const dump = cache.dump();
dump; // $ExpectType LRUEntry<string, Foo>[]
cache.load(dump);
