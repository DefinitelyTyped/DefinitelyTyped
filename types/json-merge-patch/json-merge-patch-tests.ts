import * as jmp from "json-merge-patch";

var merge = jmp.merge;
var apply = jmp.apply;
var generate = jmp.generate;
var assert = {deepEqual: function (a: Object, b: Object) {
    return JSON.stringify(a) === JSON.stringify(b);
}};

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: 'b'}, {b: 'c'}),
    {a: 'b', b: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: 'b', b: 'd'}, {a: 'c'}),
    {a: 'c', b: 'd'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: null}, {b: 'c'}),
    {a: null, b: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: null}, {a: 'b'}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: 'b'}, {a: null}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge([], {a: 'b'}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: 'b'}, []),
    []
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: {b: {c: 'd'}}, d: 'e'}, {a: {b: 'a'}}),
    {a: {b: 'a'}, d: 'e'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    merge({a: {b: {c: 'd'}, d: 'e'}}, {a: {b: {c: 'e'}}}),
    {a: {b: {c: 'e'}, d: 'e'}}
);

assert.deepEqual(
    // $ExpectType null
    merge({a: 'b'}, null),
    null
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'b'}, { a: 'b', b: 'c'}),
    {b: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'b'}, {}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'b', b: 'c'}, {b: 'c'}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: ['b']}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'c'}, {a: ['b']}),
    {a: ['b']}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: [{b: 'c'}]}, {a: [1]}),
    {a: [1]}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate(['a', 'b'], ['c', 'd']),
    ['c', 'd']
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate(['a', 'b'], ['a']),
    ['a']
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'b'}, ['c']),
    ['c']
);

assert.deepEqual(
    // $ExpectType null
    generate({a: 'foo'}, null),
    null
);

assert.deepEqual(
    // $ExpectType JsonValue
    generate({a: 'foo'}, 'bar'),
    'bar'
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({e: null}, {e: null, a: 1}),
    {a: 1}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({}, {a: {bb: {}}}),
    {a: {bb: {}}}
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: 'a'}, {a: 'a'}),
    undefined
);

assert.deepEqual(
    // $ExpectType ValidJson
    generate({a: {b: 'c'}}, {a: {b: 'c'}}),
    undefined
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'b'}, {b: 'c'}),
    {a: 'b', b: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'b'}, {a: null}),
    {}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'b', b: 'c'}, {a: null}),
    {b: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: ['b']}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'c'}, {a: ['b']}),
    {a: ['b']}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: {b: 'c'}}, {a: {b: 'd', c: null}}),
    {a: {b: 'd'}}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: [{b: 'c'}]}, {a: [1]}),
    {a: [1]}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply(['a', 'b'], ['c', 'd']),
    ['c', 'd']
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({a: 'b'}, ['c']),
    ['c']
);

assert.deepEqual(
    // $ExpectType null
    apply({a: 'foo'}, null),
    null
);

assert.deepEqual(
    // $ExpectType JsonValue
    apply({a: 'foo'}, 'bar'),
    'bar'
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({e: null}, {a: 1}),
    {e: null, a: 1}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply([1, 2], {a: 'b', c: null}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType ValidJson
    apply({}, {a: {bb: {ccc: null}}}),
    {a: {bb: {}}}
);
