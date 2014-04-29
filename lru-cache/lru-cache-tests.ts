/// <reference path="lru-cache.d.ts" />

import lru = require('lru-cache');

var x: any;
var num: number;
var bool: boolean;
var key: string;
var strArr: string[];

interface Foo {
	foo(): void;
}

var foo: Foo;
var fooArr: Foo[];

var opts: lru.Options<any>;
opts = {
	max: num,
	maxAge: num,
	stale: bool
};
var cache: lru.Cache<Foo> = lru<Foo>({
	max: num,
	maxAge: num,
	length: (value: Foo) => {
		return num
	},
	dispose: (key: string, value: Foo) => {

	},
	stale: bool
});

cache = lru<Foo>(num);

cache.set(key, foo);
foo = cache.get(key);
foo = cache.peek(key);
bool = cache.has(key);
cache.del(key);
cache.reset();

cache.forEach((value: Foo, key: string, cache: lru.Cache<Foo>) => {

});
cache.forEach((value: Foo, key: string, cache: lru.Cache<Foo>) => {

}, x);
cache.forEach((value, key, cache) => {
	foo = cache.peek(key);
});

strArr = cache.keys();
fooArr  = cache.values();
