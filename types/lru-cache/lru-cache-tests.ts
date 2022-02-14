import LRUCache = require('lru-cache');

const options = {
    max: 500, 
    maxSize: 5000,
    ttl: 1000 * 60 * 5,
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
    updateRecencyOnHas: false,
  }

const num = 1;

interface Foo {
    foo(): void;
}

const foo = {
    foo() {}
};

const cache = new LRUCache<string, Foo, string>();
cache; // $ExpectType LRUCache<string, Foo, string>
new LRUCache<string, Foo, string>({ // $ExpectType LRUCache<string, Foo, string>
    max: num,
    maxSize: num,
    dispose(key, value) {
        key; // $ExpectType string
        value; // $ExpectType Foo
    },
    noDisposeOnSet: false,
});
new LRUCache<string, Foo, string>(); // $ExpectType LRUCache<string, Foo, string>
new LRUCache<string, Foo, string>({ // $ExpectType LRUCache<string, Foo, string>
    max: num,
    maxSize: num,
    dispose: (key, value) => {},
    noDisposeOnSet: false,
});


cache.set('foo', foo); // $ExpectType boolean

cache.get('foo'); // $ExpectType Foo | undefined

cache.peek('foo'); // $ExpectType Foo | undefined

cache.has('foo'); // $ExpectType boolean

cache.pop();


cache.forEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo, string>
});
cache.rforEach(function(value, key, cache) {
    value; // $ExpectType Foo
    key; // $ExpectType string
    cache; // $ExpectType LRUCache<string, Foo, string>
});
cache.keys(); // $ExpectType string[]
cache.values(); // $ExpectType Foo[]

const dump = cache.dump();
dump; // $ExpectType Entry<string, Foo>[]
cache.load(dump);
