import i = require("icepick");
import * as _ from 'underscore';

"use strict"; // so attempted modifications of frozen objects will throw errors

// freeze(collection)
{
    let coll = {
        a: "foo",
        b: [1, 2, 3],
        c: {
            d: "bar"
        }
    };

    i.freeze(coll);
}

// thaw(collection)
class Foo {}

{
    let coll = i.freeze({ a: "foo", b: [1, 2, 3], c: { d: "bar" }, e: new Foo() });
    let thawed = i.thaw(coll);
}

// assoc(collection, key, value)
{
    let coll = { a: 1, b: 2 };
    let newColl = i.assoc<typeof coll, number>(coll, "b", 3); // {a: 1, b: 3}

    let arr = ["a", "b", "c"];
    let newArr = i.assoc(arr, 2, "d"); // ["a", "b", "d"]
}

// alias: set(collection, key, value)
{
    let coll = { a: 1, b: 2 };
    let newColl = i.set<typeof coll, number>(coll, "b", 3); // {a: 1, b: 3}

    let arr = ["a", "b", "c"];
    let newArr = i.set(arr, 2, "d"); // ["a", "b", "d"]
}

// dissoc(collection, key)
{
    let coll = { a: 1, b: 2, c: 3 };
    let newColl = i.dissoc(coll, "b"); // {a: 1, c: 3}

    let arr = ["a", "b", "c"];
    let newArr = i.dissoc(arr, 2); // ["a", , "c"]
}

// alias: unset(collection, key)
{
    let coll = { a: 1, b: 2, c: 3 };
    let newColl = i.unset(coll, "b"); // {a: 1, c: 3}

    let arr = ["a", "b", "c"];
    let newArr = i.unset(arr, 2); // ["a", , "c"]
}

// assocIn(collection, path, value)
{
    let coll = {
        a: "foo",
        b: [1, 2, 3],
        c: {
            d: "bar"
        }
    };

    let newColl = i.assocIn<typeof coll, string>(coll, ["c", "d"], "baz");

    let coll2 = {};
    let newColl2 = i.assocIn(coll2, ["a", "b", "c"], 1);
}

// alias: setIn(collection, path, value)
{
    let coll = {
        a: "foo",
        b: [1, 2, 3],
        c: {
            d: "bar"
        }
    };

    let newColl = i.setIn<typeof coll, string>(coll, ["c", "d"], "baz");

    let coll2 = {};
    let newColl2 = i.setIn(coll2, ["a", "b", "c"], 1);
}

// getIn(collection, path)
{
    let coll = i.freeze([
        { a: 1 },
        { b: 2 }
    ]);

    let result = i.getIn(coll, [1, "b"]) as number; // 2
}

// updateIn(collection, path, callback)
{
    let coll = i.freeze([
        { a: 1 },
        { b: 2 }
    ]);

    let newColl = i.updateIn(coll, [1, "b"], function(val: number) {
        return val * 2;
    }); // [ {a: 1}, {b: 4} ]
}

// assign(coll1, coll2, ...)
{
    let obj1 = { a: 1, b: 2, c: 3 };
    let obj2 = { c: 4, d: 5 };

    let result = i.assign(obj1, obj2); // {a: 1, b: 2, c: 4, d: 5}
}

// merge(target, source)
{
    let defaults = { a: 1, c: { d: 1, e: [1, 2, 3], f: { g: 1 } } };
    let obj = { c: { d: 2, e: [2], f: null as any } };

    let result1 = i.merge(defaults, obj); // {a: 1, c: {d: 2, e: [2]}, f: null}

    let obj2 = { c: { d: 2 } };
    let result2 = i.merge(result1, obj2);

    (result1 === result2); // true
}

// arrays
{
    var a = [1];
    a = i.push(a, 2); // [1, 2];
    a = i.unshift(a, 0); // [0, 1, 2];
    a = i.pop(a); // [0, 1];
    a = i.shift(a); // [1];
}
{
    i.map(function(v) { return v * 2 }, [1, 2, 3]); // [2, 4, 6]

    var removeEvens = _.partial(i.filter, function(v: number) { return v % 2; });

    removeEvens([1, 2, 3]); // [1, 3]
}
{
    var arr = i.freeze([{ a: 1 }, { b: 2 }]);

    //ECMAScript 2015
    //arr.find(function(item) { return item.b != null; }); // {b: 2} 
}

// chain(coll) - not defined
{
    let o = {
        a: [1, 2, 3],
        b: { c: 1 },
        d: 4
    };

    let result = i.chain(o)
        .assocIn<number>(["a", 2], 4)
        .setIn<number>(["a", 1], 5)
        .updateIn<number>(["d"], function(d) { return d * 2 })
        .merge({ b: { c: 2, c2: 3 } })
        .assoc<number>("e", 2)
        .set<number>("f", 3)
        .dissoc("d")
        .getIn(['a', 0])
        .value() as number;
}
