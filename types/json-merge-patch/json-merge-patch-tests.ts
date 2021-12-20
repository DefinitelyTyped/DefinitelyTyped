import * as jmp from "json-merge-patch";

var merge = jmp.merge;
var apply = jmp.apply;
var generate = jmp.generate;
var assert = {deepEqual: function (a: Object, b: Object) {
    return JSON.stringify(a) === JSON.stringify(b);
}};

assert.deepEqual(
    // $ExpectType { a: string; b?: undefined; } | { b: string; a?: undefined; }
    merge({a: 'b'}, {b: 'c'}),
    {a: 'b', b: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    merge({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string; b: string; } | { a: string; b?: undefined; }
    merge({a: 'b', b: 'd'}, {a: 'c'}),
    {a: 'c', b: 'd'}
);

assert.deepEqual(
    // $ExpectType { a: any; b?: undefined; } | { b: string; a?: undefined; }
    merge({a: null}, {b: 'c'}),
    {a: null, b: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    merge({a: null}, {a: 'b'}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    merge({a: 'b'}, {a: null}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType any[] | { a: string; }
    merge([], {a: 'b'}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType any[] | { a: string; }
    merge({a: 'b'}, []),
    []
);

assert.deepEqual(
    // $ExpectType { a: { b: { c: string; }; }; d: string; } | { a: { b: string; }; d?: undefined; }
    merge({a: {b: {c: 'd'}}, d: 'e'}, {a: {b: 'a'}}),
    {a: {b: 'a'}, d: 'e'}
);

assert.deepEqual(
    // $ExpectType { a: { b: { c: string; }; d: string; }; } | { a: { b: { c: string; }; d?: undefined; }; }
    merge({a: {b: {c: 'd'}, d: 'e'}}, {a: {b: {c: 'e'}}}),
    {a: {b: {c: 'e'}, d: 'e'}}
);

assert.deepEqual(
    // $ExpectType null
    merge({a: 'b'}, null),
    null
);

assert.deepEqual(
    // $ExpectType { a: string; }
    generate({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string; b: string; }
    generate({a: 'b'}, { a: 'b', b: 'c'}),
    {b: 'c'}
);

assert.deepEqual(
    // $ExpectType {}
    generate({a: 'b'}, {}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType { b: string; }
    generate({a: 'b', b: 'c'}, {b: 'c'}),
    {a: null}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    generate({a: ['b']}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string[]; }
    generate({a: 'c'}, {a: ['b']}),
    {a: ['b']}
);

assert.deepEqual(
    // $ExpectType { a: number[]; }
    generate({a: [{b: 'c'}]}, {a: [1]}),
    {a: [1]}
);

assert.deepEqual(
    // $ExpectType string[]
    generate(['a', 'b'], ['c', 'd']),
    ['c', 'd']
);

assert.deepEqual(
    // $ExpectType string[]
    generate(['a', 'b'], ['a']),
    ['a']
);

assert.deepEqual(
    // $ExpectType string[]
    generate({a: 'b'}, ['c']),
    ['c']
);

assert.deepEqual(
    // $ExpectType null
    generate({a: 'foo'}, null),
    null
);

assert.deepEqual(
    // $ExpectType string
    generate({a: 'foo'}, 'bar' as string),
    'bar'
);

assert.deepEqual(
    // $ExpectType { e: any; a: number; }
    generate({e: null}, {e: null, a: 1}),
    {a: 1}
);

assert.deepEqual(
    // $ExpectType { a: { bb: {}; }; }
    generate({}, {a: {bb: {}}}),
    {a: {bb: {}}}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    generate({a: 'a'}, {a: 'a'}),
    undefined
);

assert.deepEqual(
    // $ExpectType { a: { b: string; }; }
    generate({a: {b: 'c'}}, {a: {b: 'c'}}),
    undefined
);

assert.deepEqual(
    // $ExpectType { a: string; }
    apply({a: 'b'}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType { b: string; }
    apply({a: 'b'}, {b: 'c'}),
    {a: 'b', b: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: any; }
    apply({a: 'b'}, {a: null}),
    {}
);

assert.deepEqual(
    // $ExpectType { a: string; }
    apply({a: ['b']}, {a: 'c'}),
    {a: 'c'}
);

assert.deepEqual(
    // $ExpectType { a: string[]; }
    apply({a: 'c'}, {a: ['b']}),
    {a: ['b']}
);

assert.deepEqual(
    // $ExpectType { a: { b: string; c: any; }; }
    apply({a: {b: 'c'}}, {a: {b: 'd', c: null}}),
    {a: {b: 'd'}}
);

assert.deepEqual(
    // $ExpectType { a: number[]; }
    apply({a: [{b: 'c'}]}, {a: [1]}),
    {a: [1]}
);

assert.deepEqual(
    // $ExpectType string[]
    apply(['a', 'b'], ['c', 'd']),
    ['c', 'd']
);

assert.deepEqual(
    // $ExpectType string[]
    apply({a: 'b'}, ['c']),
    ['c']
);

assert.deepEqual(
    // $ExpectType null
    apply({a: 'foo'}, null),
    null
);

assert.deepEqual(
    // $ExpectType string
    apply({a: 'foo'}, 'bar' as string),
    'bar'
);

assert.deepEqual(
    // $ExpectType { a: number; }
    apply({e: null}, {a: 1}),
    {e: null, a: 1}
);

assert.deepEqual(
    // $ExpectType { a: string; c: any; }
    apply([1, 2], {a: 'b', c: null}),
    {a: 'b'}
);

assert.deepEqual(
    // $ExpectType { a: { bb: { ccc: any; }; }; }
    apply({}, {a: {bb: {ccc: null}}}),
    {a: {bb: {}}}
);
