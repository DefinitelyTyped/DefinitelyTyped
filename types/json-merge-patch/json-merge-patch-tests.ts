import * as jmp from "json-merge-patch";

var merge = jmp.merge;
var apply = jmp.apply;
var generate = jmp.generate;
var assert = {deepEqual: function (a: Object, b: Object) {
  return JSON.stringify(a) === JSON.stringify(b);
}};

assert.deepEqual(
	merge({a: 'b'}, {b: 'c'}),
  {a: 'b', b: 'c'}
);

assert.deepEqual(
	merge({a: 'b'}, {a: 'c'}),
	{a: 'c'}
);

assert.deepEqual(
	merge({a: 'b', b: 'd'}, {a: 'c'}),
	{a: 'c', b: 'd'}
);

assert.deepEqual(
	merge({a: null}, {b: 'c'}),
	{a: null, b: 'c'}
);

assert.deepEqual(
	merge({a: null}, {a: 'b'}),
	{a: 'b'}
);

assert.deepEqual(
	merge({a: 'b'}, {a: null}),
	{a: null}
);

assert.deepEqual(
	merge([], {a: 'b'}),
	{a: 'b'}
);

assert.deepEqual(
	merge({a: 'b'}, []),
	[]
);

assert.deepEqual(
	merge({a: {b: {c: 'd'}}, d: 'e'}, {a: {b: 'a'}}),
	{a: {b: 'a'}, d: 'e'}
);

assert.deepEqual(
	merge({a: {b: {c: 'd'}, d: 'e'}}, {a: {b: {c: 'e'}}}),
	{a: {b: {c: 'e'}, d: 'e'}}
);

assert.deepEqual(
	merge({a: 'b'}, null),
	null
);

assert.deepEqual(
	generate({a: 'b'}, {a: 'c'}),
  {a: 'c'}
);

assert.deepEqual(
	generate({a: 'b'}, { a: 'b', b: 'c'}),
	{b: 'c'}
);

assert.deepEqual(
	generate({a: 'b'}, {}),
	{a: null}
);

assert.deepEqual(
	generate({a: 'b', b: 'c'}, {b: 'c'}),
	{a: null}
);

assert.deepEqual(
	generate({a: ['b']}, {a: 'c'}),
	{a: 'c'}
);

assert.deepEqual(
	generate({a: 'c'}, {a: ['b']}),
	{a: ['b']}
);

assert.deepEqual(
	generate({a: [{b: 'c'}]}, {a: [1]}),
	{a: [1]}
);

assert.deepEqual(
	generate(['a', 'b'], ['c', 'd']),
	['c', 'd']
);

assert.deepEqual(
	generate(['a', 'b'], ['a']),
	['a']
);

assert.deepEqual(
	generate({a: 'b'}, ['c']),
	['c']
);

assert.deepEqual(
	generate({a: 'foo'}, null),
	null
);

assert.deepEqual(
	generate({a: 'foo'}, 'bar'),
	'bar'
);

assert.deepEqual(
	generate({e: null}, {e: null, a: 1}),
	{a: 1}
);

assert.deepEqual(
	generate({}, {a: {bb: {}}}),
	{a: {bb: {}}}
);

assert.deepEqual(
	generate({a: 'a'}, {a: 'a'}),
	undefined
);

assert.deepEqual(
	generate({a: {b: 'c'}}, {a: {b: 'c'}}),
	undefined
);

assert.deepEqual(
	generate([1,2,3], [1,2,3]),
	undefined
);

assert.deepEqual(
	apply({a: 'b'}, {a: 'c'}),
  {a: 'c'}
);

assert.deepEqual(
	apply({a: 'b'}, {b: 'c'}),
  {a: 'b', b: 'c'}
);

assert.deepEqual(
	apply({a: 'b'}, {a: null}),
  {}
);

assert.deepEqual(
	apply({a: 'b', b: 'c'}, {a: null}),
  {b: 'c'}
);

assert.deepEqual(
	apply({a: ['b']}, {a: 'c'}),
  {a: 'c'}
);

assert.deepEqual(
	apply({a: 'c'}, {a: ['b']}),
  {a: ['b']}
);

assert.deepEqual(
	apply({a: {b: 'c'}}, {a: {b: 'd', c: null}}),
  {a: {b: 'd'}}
);

assert.deepEqual(
	apply({a: [{b: 'c'}]}, {a: [1]}),
  {a: [1]}
);

assert.deepEqual(
	apply(['a', 'b'], ['c', 'd']),
	['c', 'd']
);

assert.deepEqual(
	apply({a: 'b'}, ['c']),
	['c']
);

assert.deepEqual(
	apply({a: 'foo'}, null),
	null
);

assert.deepEqual(
	apply({a: 'foo'}, 'bar'),
	'bar'
);

assert.deepEqual(
	apply({e: null}, {a: 1}),
	{e: null, a: 1}
);

assert.deepEqual(
	apply([1, 2], {a: 'b', c: null}),
	{a: 'b'}
);

assert.deepEqual(
	apply({}, {a: {bb: {ccc: null}}}),
	{a: {bb: {}}}
);