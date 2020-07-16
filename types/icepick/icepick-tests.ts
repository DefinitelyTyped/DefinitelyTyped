import * as i from 'icepick';

'use strict'; // so attempted modifications of frozen objects will throw errors

// freeze(collection)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    i.freeze(coll);
}

// thaw(collection)
class Foo {}

{
    const coll = i.freeze({ a: 'foo', b: [1, 2, 3], c: { d: 'bar' }, e: new Foo() });
    const thawed = i.thaw(coll);
}

// assoc(collection, key, value)
{
    const coll = { a: 1, b: 2 };
    const newColl = i.assoc<typeof coll>(coll, 'b', 3); // {a: 1, b: 3}

    const arr = ['a', 'b', 'c'];
    const newArr = i.assoc(arr, 2, 'd'); // ["a", "b", "d"]
}

// alias: set(collection, key, value)
{
    const coll = { a: 1, b: 2 };
    const newColl = i.set<typeof coll>(coll, 'b', 3); // {a: 1, b: 3}

    const arr = ['a', 'b', 'c'];
    const newArr = i.set(arr, 2, 'd'); // ["a", "b", "d"]
}

// dissoc(collection, key)
{
    const coll = { a: 1, b: 2, c: 3 };
    const newColl = i.dissoc(coll, 'b'); // {a: 1, c: 3}

    const arr = ['a', 'b', 'c'];
    const newArr = i.dissoc(arr, 2); // ["a", , "c"]
}

// alias: unset(collection, key)
{
    const coll = { a: 1, b: 2, c: 3 };
    const newColl = i.unset(coll, 'b'); // {a: 1, c: 3}

    const arr = ['a', 'b', 'c'];
    const newArr = i.unset(arr, 2); // ["a", , "c"]
}

// dissocIn(collection, path)
{
    const coll = { a: 1, b: { d: 5, e: 7 }, c: 3 };
    const newColl = i.dissocIn(coll, ['b', 'd']); // {a: 1, {b: {e: 7}}, c: 3}

    const col2 = { a: 1, b: { d: 5 }, c: 3 };
    const newCol2 = i.dissocIn(coll, ['b', 'd']); // {a: 1, {b: {}}, c: 3}
}

// alias: unsetIn(collection, path)
{
    const coll = { a: 1, b: { d: 5, e: 7 }, c: 3 };
    const newColl = i.unsetIn(coll, ['b', 'd']); // {a: 1, {b: {e: 7}}, c: 3}

    const col2 = { a: 1, b: { d: 5 }, c: 3 };
    const newCol2 = i.unsetIn(coll, ['b', 'd']); // {a: 1, {b: {}}, c: 3}
}

// assocIn(collection, path, value)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    const newColl = i.assocIn<typeof coll>(coll, ['c', 'd'], 'baz');

    const coll2 = {};
    const newColl2 = i.assocIn(coll2, ['a', 'b', 'c'], 1);
}

// alias: setIn(collection, path, value)
{
    const coll = {
        a: 'foo',
        b: [1, 2, 3],
        c: {
            d: 'bar',
        },
    };

    const newColl = i.setIn<typeof coll>(coll, ['c', 'd'], 'baz');

    const coll2 = {};
    const newColl2 = i.setIn(coll2, ['a', 'b', 'c'], 1);
}

// getIn(collection, path)
{
    const coll = i.freeze([{ a: 1 }, { b: 2 }]);

    const result = i.getIn(coll, [1, 'b']) as number; // 2
}

// updateIn(collection, path, callback)
{
    const coll = i.freeze([{ a: 1 }, { b: 2 }]);

    const newColl = i.updateIn(coll, [1, 'b'], (val: number) => val * 2); // [ {a: 1}, {b: 4} ]
}

// assign(coll1, coll2, ...)
{
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 4, d: 5 };

    const result = i.assign(obj1, obj2); // {a: 1, b: 2, c: 4, d: 5}
}

// alias: extend(coll1, coll2, ...)
{
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 4, d: 5 };

    const result = i.extend(obj1, obj2); // {a: 1, b: 2, c: 4, d: 5}
}

// merge(target, source)
{
    const defaults = { a: 1, c: { d: 1, e: [1, 2, 3], f: { g: 1 } } };
    const obj = { c: { d: 2, e: [2], f: null as any } };

    const result1 = i.merge(defaults, obj); // {a: 1, c: {d: 2, e: [2]}, f: null}

    const obj2 = { c: { d: 2 } };
    const result2 = i.merge(result1, obj2);

    result1 === result2; // true
}

// arrays
{
    let a = [1];
    a = i.push(a, 2); // [1, 2];
    a = i.unshift(a, 0); // [0, 1, 2];
    a = i.pop(a); // [0, 1];
    a = i.shift(a); // [1];
    a = i.splice(a, 0, 0, 2, 3); // [2, 3, 1]
    a = i.slice(a, 2, 1); // [1]
}
{
    i.map(v => v * 2, [1, 2, 3]); // [2, 4, 6]

    i.filter((v: number) => v % 2 === 0, [1, 2, 3]); // [1, 3]
}
{
    const arr = i.freeze([{ a: 1 }, { b: 2 }]);

    // ECMAScript 2015
    // arr.find(function(item) { return item.b != null; }); // {b: 2}
}

// chain(coll) - not defined
{
    const o = {
        a: [1, 2, 3],
        b: { c: 1 },
        d: 4,
    };

    const result = i
        .chain(o)
        .assocIn(['a', 2], 4)
        .setIn(['a', 1], 5)
        .updateIn(['d'], d => d * 2)
        .merge({ b: { c: 2, c2: 3 } })
        .assoc('e', 2)
        .set('f', 3)
        .dissoc('d')
        .getIn(['a', 0])
        .value() as number;
}

// readonly array
{
    // typescript@3.3
    const a: ReadonlyArray<number> = [1];

    // typescript@3.4
    // const a: readonly number[] = [1];

    let result: number[];
    result = i.push(a, 2);
    result = i.unshift(a, 0);
    result = i.pop(a);
    result = i.shift(a);
    result = i.splice(a, 0, 0, 2);
    result = i.slice(a, 1, 1);
    result = i.map(x => x, a);
    result = i.filter(x => x > 1, a);
}
{
    // typescript@3.3
    const a: Readonly<[number, string]> = [1, 'one'];

    // typescript@3.4
    // const a: readonly [number, string] = [1, "one"];

    const result = i.set(a, 1, 'two');
}

// readonly object
{
    const obj1: Readonly<{ readonly a: number; b: number; c: number }> = { a: 1, b: 2, c: 3 };
    const result = i.assocIn(obj1, ['a'], 2);
}
