import { assert } from 'commonjs-assert';

assert(true, "it's working");

assert.ok(true, "inner functions work as well");

// different overloads
assert.throws(function(){});
assert.throws(function(){}, function(){}, "works wonderfully");

// test index signature
assert['fail'](true, true, "works like a charm");
