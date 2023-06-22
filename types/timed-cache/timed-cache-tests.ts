import Cache, { CacheOptions } from 'timed-cache';

const option: CacheOptions = {defaultTtl: 5000};
const cache = new Cache<string>(option); // $ExpectType Cache<string>
cache.put('key', 'value', {ttl: 1000}); // $ExpectType void
cache.get('key'); // $ExpectType string | undefined

interface Foo {
    thing: string;
}

const cache2 = new Cache<Foo>();
cache2.put('key', {thing: 'foo'}); // $ExpectType void
cache2.get('key'); // $Expect Type Foo

const cache3 = new Cache<Foo>();
const objKey = { what: "ever"};
cache3.put(objKey, {thing: 'foo'}); // $ExpectType void
cache3.get(objKey); // $Expect Type Foo
cache3.remove(objKey); // $Expect Type void
