/// <reference types="qunit"/>


namespace MxTests {

    "use strict";

    import Enumerator = mx.Enumerator;
    import Enumerable = mx.Enumerable;
    import Comparer = mx.Comparer;
    import EqualityComparer = mx.EqualityComparer;
    import Collection = mx.Collection;
    import List = mx.List;
    import ReadOnlyCollection = mx.ReadOnlyCollection;
    import Dictionary = mx.Dictionary;
    import SortedList = mx.SortedList;
    import HashSet = mx.HashSet;
    import LinkedList = mx.LinkedList;
    import Queue = mx.Queue;
    import Stack = mx.Stack;
    import Lookup = mx.Lookup;
    import RuntimeComparer = mx.RuntimeComparer;


    var Enumerator = mx.Enumerator,
        Enumerable = mx.Enumerable,
        Comparer = mx.Comparer,
        EqualityComparer = mx.EqualityComparer,
        Collection = mx.Collection,
        List = mx.List,
        ReadOnlyCollection = mx.ReadOnlyCollection,
        KeyValuePair = mx.KeyValuePair,
        Dictionary = mx.Dictionary,
        SortedList = mx.SortedList,
        HashSet = mx.HashSet,
        LinkedList = mx.LinkedList,
        LinkedListNode = mx.LinkedListNode,
        Queue = mx.Queue,
        Stack = mx.Stack;






    /* Classes
    ---------------------------------------------------------------------- */

    interface SimpleObject {
        name: string;
        value: number;
    }

    // class without equality-comparer
    class SimpleClass {
    };


    // class overriding '__hash__' and '__equals__' methods.
    class SimpleClassWithComparer implements RuntimeComparer, SimpleObject {

        constructor(val: number) {
            this.value = val;
            this.name = val.toString();
        }

        public name: string;
        public value: number;

        __hash__(): number {
            return mx.hash(this.value, this.name);
        }

        __equals__(obj: any) {
            return obj instanceof SimpleClassWithComparer && obj.value === this.value && obj.name === this.name;
        }
    };






    /* Tests
    ---------------------------------------------------------------------- */

    namespace MultiplexTests {

        QUnit.module("Multiplex");


        QUnit.test("Multiplex Array", function (assert) {

            var _source = mx([1, 2, 3, 4]);
            assert.ok(MxCount(_source) === 4, "Passed!");
        });


        QUnit.test("Multiplex String", function (assert) {
            var _source = mx("Multiplex");
            assert.ok(MxCount(_source) === 9, "Passed!");
        });


        QUnit.test("Multiplex Object", function (assert) {
            var _source = mx({ name: "mx", id: 1 });
            assert.ok(MxCount(_source) === 2, "Passed!");
        });


        QUnit.test("Multiplex Array-like", function (assert) {
            var _source = mx(arguments);
            assert.ok(MxCount(_source) === 1, "Passed!");
        });


        //QUnit.test("Multiplex Iterable", function (assert) {
        //    var _set = new Set<number>(),
        //        _source = mx(_set);

        //    _set.add(1);
        //    _set.add(2);
        //    _set.add(3);
        //    assert.ok(MxCount(_source) === 3, "Passed!");
        //});


        QUnit.test("Multiplex Custom Enumerator", function (assert) {
            var _source = mx(<Enumerable<number>>{
                getEnumerator: function (): Enumerator<number> {
                    var count = 3, index = 0;
                    return {
                        current: undefined,
                        next: function () {
                            if (index++ < count) {
                                this.current = index;
                                return true;
                            }
                            else {
                                this.current = undefined;
                                return false;
                            }
                        }
                    };
                }
            });
            assert.ok(MxCount(_source) === 3, "Passed!");
        });


        QUnit.test("Multiplex Generator", function (assert) {
            try {
                var _source = eval("mx(function* () { yield 1; yield 2; yield 3; })");
                assert.ok(MxCount(_source) === 3, "Passed!");
            }
            catch (e) { assert.ok(true, "Generator not implemented by the browser"); }
        });


        QUnit.test("Multiplex Legacy Generator", function (assert) {
            var _source = mx(function () {
                var count = 3,
                    index = 0;

                return new Enumerator<number>(function (yielder) {
                    if (index++ < count) {
                        yielder(index);
                    }
                });
            });
            assert.ok(MxCount(_source) === 3, "Passed!");
        });


        QUnit.test("mx.range", function (assert) {
            var _source = mx.range(0, 4);
            assert.deepEqual(_source.toArray(), [0, 1, 2, 3], "Passed!");
        });


        QUnit.test("mx.repeat", function (assert) {
            var _source = mx.repeat(1, 4);
            assert.deepEqual(_source.toArray(), [1, 1, 1, 1], "Passed!");
        });


        QUnit.test("mx.empty", function (assert) {
            var _source = mx.empty();
            assert.ok(MxCount(_source) === 0, "Passed!");
        });


        QUnit.test("mx.is", function (assert) {
            assert.ok(mx.is(mx.range(1, 10)), "Enumerable Passed!");
            assert.ok(mx.is([1]), "Array Passed!");
            assert.ok(mx.is("mx"), "String Passed!");
            //assert.ok(mx.is(new Set()), "Iterable Passed!");

            assert.ok(mx.is({
                getEnumerator: function (): Enumerator<number> {
                    var count = 3, index = 0;
                    return {
                        current: undefined,
                        next: function () {
                            if (index++ < count) {
                                this.current = index;
                                return true;
                            }
                            else {
                                this.current = undefined;
                                return false;
                            }
                        }
                    };
                }
            }), "Custom Enumerator Passed!");

            try {
                assert.ok(mx.is(eval("mx(function* () { yield 1; yield 2; yield 3; })")), "Generator Passed!");
            }
            catch (e) { assert.ok(true, "Generator not implemented by the browser"); }
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function MxCount(source: Enumerable<any>): number {
            var _e = source.getEnumerator(),
                _i = 0;

            while (_e.next()) {
                _i++;
            }

            return _i;
        }
    }


    namespace RuntimeTests {

        QUnit.module("Runtime");


        QUnit.test("hash", function (assert) {

            assert.ok(mx.hash(null) === 0, "hash null!");
            assert.ok(mx.hash(undefined) === 0, "hash undefined!");
            assert.ok(mx.hash(10) === mx.hash(10), "hash integer number!");
            assert.ok(mx.hash(10.5) === mx.hash(10.5), "hash float number!");
            assert.ok(mx.hash("string") === mx.hash("string"), "hash string!");
            assert.ok(mx.hash(true) === mx.hash(true), "hash boolean!");
            assert.ok(mx.hash(new Date(2015, 0, 1)) === mx.hash(new Date(2015, 0, 1)), "hash date!");
            assert.ok(mx.hash({ name: "A" }) === mx.hash({ name: "A" }), "hash object literal!");
            assert.ok(mx.hash(new SimpleClass()) !== mx.hash(new SimpleClass()), "hash class instance!");
            assert.ok(mx.hash(new SimpleClassWithComparer(10)) === mx.hash(new SimpleClassWithComparer(10)), "hash class instance overriding __hash__ method!");
            assert.ok(mx.hash(10, 10.5, "string", new Date(2015, 0, 1)) === mx.hash(10, 10.5, "string", new Date(2015, 0, 1)), "combine hash codes!");
        });


        QUnit.test("equals", function (assert) {

            assert.ok(mx.equals(null, null) === true, "equals null!");
            assert.ok(mx.equals(undefined, undefined) === true, "equals undefined!");
            assert.ok(mx.equals(10, 10), "equals integer number!");
            assert.ok(mx.equals(10.5, 10.5), "equals float number!");
            assert.ok(mx.equals("string", "string"), "equals string!");
            assert.ok(mx.equals(true, true), "equals boolean!");
            assert.ok(mx.equals(new Date(2015, 0, 1), new Date(2015, 0, 1)), "equals date!");
            assert.ok(mx.equals({ name: "A" }, { name: "A" }), "equals object literal!");
            assert.ok(mx.equals(new SimpleClass(), new SimpleClass()) === false, "equals class instance!");
            assert.ok(mx.equals(new SimpleClass(), new SimpleClass(), EqualityComparer.create((obj) => 0, (a, b) => true)), "equals class instance using comparer!");
            assert.ok(mx.equals(new SimpleClassWithComparer(10), new SimpleClassWithComparer(10)), "equals class instance overriding __equals__ method!");
        });


        QUnit.test("compare", function (assert) {

            assert.ok(mx.compare(1, null) === 1 && mx.compare(null, 1) === -1 && mx.compare(null, null) === 0, "compare null!");
            assert.ok(mx.compare(1, 0) === 1 && mx.compare(0, 1) === -1 && mx.compare(1, 1) === 0, "compare numbers!");
            assert.ok(mx.compare("B", "A") === 1 && mx.compare("A", "B") === -1 && mx.compare("A", "A") === 0, "compare string!");
            assert.ok(mx.compare(true, false) === 1 && mx.compare(false, true) === -1 && mx.compare(true, true) === 0, "compare bolean!");
            assert.ok(mx.compare(new Date(2015, 0, 2), new Date(2015, 0, 1)) === 1 && mx.compare(new Date(2015, 0, 1), new Date(2015, 0, 2)) === -1 && mx.compare(new Date(2015, 0, 1), new Date(2015, 0, 1)) === 0, "compare date!");
            assert.ok(mx.compare({ name: "A" }, { name: "B" }) === 0, "compare objects!");
        });


        QUnit.test("lambda", function (assert) {

            var _f1 = mx.runtime.lambda<number, number>("t => t * t"),
                _f2 = mx.runtime.lambda<number, number, number>("(t, u) => t + u"),
                _f3 = mx.runtime.lambda<number, number, number, number>("(t, u, r) => t + u + r"),
                _f4 = mx.runtime.lambda<number, string, { id: number; name: string }>("(t, u) => {id:t, name:u}");

            assert.ok(_f1(2) === 4, "square root lambda!");
            assert.ok(_f2(1, 2) === 3, "sum of 2 numbers lambda!");
            assert.ok(_f3(1, 2, 3) === 6, "sum of 3 numbers lambda!");
            assert.ok(_f4(1, "A").id === 1 && _f4(1, "A").name === "A", "object literal lambda!");
        });
    }


    namespace LinqTests {

        QUnit.module("Linq");


        QUnit.test("aggregate", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).aggregate((a, b) => a + b) === 45, "Aggregate 10 numbers without seed!");
            assert.ok(mx(_arr).aggregate(10, (a, b) => a + b) === 55, "Aggregate 10 numbers with seed!");
            assert.ok(mx(_arr).aggregate(10, (a, b) => a + b, t => t * 2) === 110, "Aggregate 10 numbers with seed and result selector!");
        });


        QUnit.test("all", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).all(t => t < 100) === true, "First 10 numbers less than 100!");
            assert.ok(mx(_arr).all(t => t < 5) === false, "First 10 numbers less than 5!");
        });


        QUnit.test("any", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).any() === true, "First 10 numbers!");
            assert.ok(mx(_arr).any(t => t % 2 === 0) === true, "Any of the first 10 numbers is even!");
            assert.ok(mx(_arr).any(t => t > 10) === false, "Any of the first 10 numbers greater than 10!");
        });


        QUnit.test("average", function (assert) {

            assert.ok(mx(CreateNumberArray()).average() === 4.5, "Average of the first 10 numbers!");
            assert.throws(() => mx(CreateObjectLiteralArray()).average(), "throws an exception for average of non numeric values!");
            assert.throws(() => mx([]).average(), "throws an exception for average of empty collection!");
        });


        QUnit.test("concat", function (assert) {
            var _s1 = [1, 2, 3],
                _s2 = [3, 4],
                _arr = CreateNumberArray();

            assert.deepEqual(mx(_s1).concat(_s2).toArray(), [1, 2, 3, 3, 4], "Concat two array!");
            assert.ok(mx(_arr).concat(_arr).count() === 20, "Concat the first 10 numbers to itself!");
        });


        QUnit.test("contains", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateSimpleClassArray(),
                _arr3 = CreateSimpleClassWithComparerArray(),
                _arr4 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).contains(1) === true, "1 contains in the first 10 numbers!");
            assert.ok(mx(_arr1).contains(10) === false, "10 does not contains in the first 10 numbers!");

            assert.ok(mx(_arr2).contains(new SimpleClass()) === false, "Class instance without equality-comparer!");
            assert.ok(mx(_arr2).contains(new SimpleClass(), { hash: () => 0, equals: () => true }) === true, "Class instance with equality-comparer!");

            assert.ok(mx(_arr3).contains(new SimpleClassWithComparer(5)) === true, "Class instance overriding equality-comparer!");

            assert.ok(mx(_arr4).contains({ name: "n5", inner: { index: 5, val: {} } }) === true, "Object literal without equality-comparer!");
            assert.ok(mx(_arr4).contains({ name: "n5", inner: null }, {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }) === true, "Object literal with equality-comparer!");
        });


        QUnit.test("count", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).count() === 10, "Count of the first 10 numbers!");
            assert.ok(mx(_arr).count(t => t % 2 === 0) === 5, "Count of the first even 10 numbers!");
        });


        QUnit.test("defaultIfEmpty", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx([]).defaultIfEmpty(1).toArray(), [1], "Empty array devalut value!");
            assert.ok(mx(_arr).defaultIfEmpty(1).count() === 10, "Count of the first 10 numbers with defaultIfEmpty!");
            assert.ok(mx(_arr).where(t => t > 100).defaultIfEmpty(10).count() === 1, "Count of the first 10 numbers greater than 100 with defaultIfEmpty!");
        });


        QUnit.test("distinct", function (assert) {

            var _arr1 = CreateObjectLiteralArray(),
                _arr2 = CreateComplexObjectLiteralArray(),
                _arr3 = CreateNumberArray(),
                _arr4 = CreateFloatNumberArray(),
                _arr5 = CreateStringArray(),
                _arr6 = CreateDateArray(),
                _arr7 = CreateBooleanArray(),
                _arr8 = CreateSimpleClassWithComparerArray(),
                _arr9 = CreateSimpleClassArray();

            assert.ok(mx(_arr1).distinct().count() === 1, "Array of 10 empty object literal!");
            assert.ok(mx(_arr2).distinct().count() === 10, "Array of 10 distinct complex object literal!");
            assert.ok(mx(_arr3).distinct().count() === 10, "Array of 10 distinct numbers!");
            assert.ok(mx(_arr4).distinct().count() === 10, "Array of 10 distinct float numbers!");
            assert.ok(mx(_arr5).distinct().count() === 10, "Array of 10 distinct strings!");
            assert.ok(mx(_arr6).distinct().count() === 10, "Array of 10 distinct date objects!");
            assert.ok(mx(_arr7).distinct().count() === 2, "Array of 10 boolean values!");
            assert.ok(mx(_arr8).distinct().count() === 10, "Array of 10 distinct class instances overriding equality-comparer!");
            assert.ok(mx(_arr9).distinct().count() === 10, "Array of 10 distinct class instances!");
            assert.ok(mx(_arr2).distinct({
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).count() === 10, "Array of 10 distinct complex object literal with equality-comparer!");
        });


        QUnit.test("except", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateObjectLiteralArray(),
                _arr3 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).except(CreateNumberArray()).count() === 0, "Array of first 10 numbers except first 10 numbers!");
            assert.deepEqual(mx(_arr1).except([0, 1, 2, 3, 4]).toArray(), [5, 6, 7, 8, 9], "Array of first 10 numbers except first 5 numbers!");
            assert.ok(mx(_arr2).except([{}]).count() === 0, "Array of 10 empty object literal except an empty object literal!");
            assert.ok(mx(_arr3).except([{ name: "n5", inner: null }]).count() === 10, "Array of 10 distinct complex object literal without equality-comparer!");
            assert.ok(mx(_arr3).except([{ name: "n5", inner: null }], {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).count() === 9, "Array of 10 distinct complex object literal with equality-comparer!");
        });


        QUnit.test("elementAt", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).elementAt(0) === 0, "First element of the first 10 numbers!");
            assert.throws(() => mx(_arr).elementAt(100), "throws an exception for 100th element of the first 10 numbers!");
        });


        QUnit.test("first", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).first() === 0, "First element of the first 10 numbers!");
            assert.ok(mx(_arr).first(t => t > 5) === 6, "First element greater than 5 of the first 10 numbers!");
            assert.throws(() => mx([]).first(), "throws an exception getting first element of an empty collection!");
            assert.throws(() => mx(_arr).first(t => t > 100), "throws an exception getting first element greater than 100 of the first 10 numbers!");
        });


        QUnit.test("firstOrDefault", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).firstOrDefault() === 0, "First element of the first 10 numbers or default!");
            assert.ok(mx(_arr).firstOrDefault(t => t > 5) === 6, "First element greater than 5 of the first 10 numbers or default!");
            assert.ok(mx(_arr).firstOrDefault(t => t > 100) === null, "First element greater than 100 of the first 10 numbers or default!");
            assert.ok(mx(_arr).firstOrDefault(t => t > 100, 100) === 100, "First element greater than 100 of the first 10 numbers or 100 as default!");
        });


        QUnit.test("forEach", function (assert) {

            var _arr = CreateNumberArray(),
                _sum = 0;

            mx(_arr).forEach(t => _sum += t);
            assert.ok(_sum === 45, "ForEach operation on the first 10 numbers!");
        });


        QUnit.test("groupBy", function (assert) {

            var _arr1 = CreateObjectLiteralArray(),
                _arr2 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).groupBy(t => t).count() === 1, "Group 10 distinct empty object literals!");
            assert.ok(mx(_arr2).groupBy(t => t.name).count() === 10, "Group 10 distinct complex object literals by name!");
            assert.ok(mx(_arr2).groupBy(t => t.name).first().key === "n0", "Group 10 distinct complex object literals by name, retrieve first key!");
            assert.ok(mx(_arr2).groupBy(t => t.name).first().count() === 1, "Group 10 distinct complex object literals by name, retrieve first group count!");
        });


        QUnit.test("groupJoin", function (assert) {

            var _arr1 = [{ name: "A", val: 1 }, { name: "B", val: 2 }, { name: "C", val: 3 }, { name: "D", val: 4 }],
                _arr2 = [{ code: "A" }, { code: "A" }, { code: "B" }, { code: "B" }, { code: "C" }],
                _result = mx(_arr1).groupJoin(_arr2, t => t.name, u => u.code, (t, u) => ({ item: t, group: u }));

            assert.ok(_result.count() === 4, "groupJoin 2 complex-object array, getting count");
            assert.ok(_result.first().item.name === "A", "groupJoin 2 complex-object array, getting item");
            assert.ok(_result.first().group.count() === 2, "groupJoin 2 complex-object array, getting group count");
            assert.ok(_result.last().group.count() === 0, "groupJoin 2 complex-object array, getting empty group count");
        });


        QUnit.test("intersect", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateObjectLiteralArray(),
                _arr3 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).intersect(CreateNumberArray()).count() === 10, "Array of first 10 numbers intersect with first 10 numbers!");
            assert.deepEqual(mx(_arr1).intersect([2, 3, 4]).toArray(), [2, 3, 4], "Array of first 10 numbers intersect with 3 numbers!");
            assert.ok(mx(_arr2).intersect([{}]).count() === 10, "Array of 10 empty object literal intersect with an empty object literal!");
            assert.ok(mx(_arr3).intersect([{ name: "n5", inner: null }]).count() === 0, "Array of 10 distinct complex object literal without equality-comparer!");
            assert.ok(mx(_arr3).intersect([{ name: "n5", inner: null }], {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).count() === 1, "Array of 10 distinct complex object literal with equality-comparer!");
        });


        QUnit.test("join", function (assert) {
            var _arr1 = [{ name: "A", val: 1 }, { name: "B", val: 2 }, { name: "C", val: 3 }, { name: "D", val: 4 }],
                _arr2 = [{ code: "A" }, { code: "A" }, { code: "B" }, { code: "B" }, { code: "C" }],
                _arr3 = CreateObjectLiteralArray(),
                _result = mx(_arr1).join(_arr2, t => t.name, u => u.code, (t, u) => ({ item1: t, item2: u }));

            assert.ok(_result.count() === 5, "join 2 complex-object array, getting count");
            assert.ok(_result.first().item1.name === "A" && _result.first().item2.code === "A", "join 2 complex-object array, getting item");
            assert.ok(mx(_arr3).join(mx(CreateObjectLiteralArray()), t => t, u => u, (t, u) => t).count() === 100, "join 2 empty object-literal array");
            assert.ok(mx(mx.empty()).join(mx(_arr3), t => t, u => u, (t, u) => t).count() === 0, "join empty collection with an array");
        });


        QUnit.test("last", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).last() === 9, "Last element of the first 10 numbers!");
            assert.ok(mx(_arr).last(t => t < 5) === 4, "Last element less than 5 of the first 10 numbers!");
            assert.throws(() => mx([]).last(), "throws an exception getting last element of an empty collection!");
            assert.throws(() => mx(_arr).last(t => t > 100), "throws an exception getting first element greater than 100 of the first 10 numbers!");
        });


        QUnit.test("lastOrDefault", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).lastOrDefault() === 9, "Last element of the first 10 numbers or default!");
            assert.ok(mx(_arr).lastOrDefault(t => t < 5) === 4, "Last element greater than 5 of the first 10 numbers or default!");
            assert.ok(mx(_arr).lastOrDefault(t => t > 100) === null, "Last element greater than 100 of the first 10 numbers or default!");
            assert.ok(mx(_arr).lastOrDefault(t => t > 100, 100) === 100, "Last element greater than 100 of the first 10 numbers or 100 as default!");
        });


        QUnit.test("max", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateStringArray(),
                _arr3 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).max() === 9, "Maximum of the first 10 numbers!");
            assert.ok(mx(_arr2).max() === "9_string", "Maximum of the 10 string array!");
            assert.ok(mx(_arr3).max(t => t.name) === "n9", "Maximum of a complex array by selector!");
            assert.throws(() => mx([]).max(), "throws an exception getting maximum of an empty collection!");
        });


        QUnit.test("min", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateStringArray(),
                _arr3 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).min() === 0, "Minimum of the first 10 numbers!");
            assert.ok(mx(_arr2).min() === "0_string", "Minimum of the 10 string array!");
            assert.ok(mx(_arr3).min(t => t.name) === "n0", "Minimum of a complex array by selector!");
            assert.throws(() => mx([]).min(), "throws an exception getting minimum of an empty collection!");
        });


        QUnit.test("ofType", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).ofType(Number).count() === 10, "Cast array of numbers to number!");
            assert.ok(mx(_arr).ofType(String).count() === 0, "Cast array of numbers to string!");
        });


        QUnit.test("orderBy", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateComplexObjectLiteralArray(),
                _arr3 = [{ name: "a", val: 1 }, { name: "a", val: 2 }, { name: "b", val: 1 }, { name: "c", val: 2 }],
                _result = [{ name: "a", val: 1 }, { name: "b", val: 1 }, { name: "a", val: 2 }, { name: "c", val: 2 }]

            assert.deepEqual(mx(_arr1).orderBy(t => t).take(5).toArray(), [0, 1, 2, 3, 4], "Order array of numbers ascending!");
            assert.ok(mx(_arr2).orderBy(t => t.name).thenByDescending(t => t.inner.index).first().name === "n0", "Order array of complex object by 'name' ascending then by 'inner.index' descending !");
            assert.deepEqual(mx(_arr3).orderBy(t => t.val).thenBy(t => t.name).toArray(), _result, "Order and thenBy!");
            assert.ok(mx(_arr2).orderBy(t => t.name, {
                hash: o => mx.hash(o),
                equals: (a, b) => a === b
            }).first().name === "n0", "Order array of complex object ascending with comparer!");
        });


        QUnit.test("orderByDescending", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateComplexObjectLiteralArray(),
                _arr3 = [{ name: "a", val: 1 }, { name: "a", val: 2 }, { name: "b", val: 1 }, { name: "c", val: 2 }],
                _result = [{ name: "a", val: 2 }, { name: "c", val: 2 }, { name: "a", val: 1 }, { name: "b", val: 1 }];

            assert.deepEqual(mx(_arr1).orderByDescending(t => t).take(5).toArray(), [9, 8, 7, 6, 5], "Order array of numbers descending!");
            assert.ok(mx(_arr2).orderByDescending(t => t.name).thenByDescending(t => t.inner.index).first().name === "n9", "Order array of complex object by 'name' descending then by 'inner.index' descending !");
            assert.deepEqual(mx(_arr3).orderByDescending(t => t.val).thenBy(t => t.name).toArray(), _result, "Order descending and thenBy!");
            assert.ok(mx(_arr2).orderByDescending(t => t.name, {
                hash: o => mx.hash(o),
                equals: (a, b) => a === b
            }).first().name === "n9", "Order array of complex object descending with comparer!");
        });


        QUnit.test("reverse", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateStringArray();

            assert.deepEqual(mx(_arr1).reverse().take(5).toArray(), [9, 8, 7, 6, 5], "Reverse array of first 10 numbers!");
            assert.ok(mx(_arr2).reverse().first() === "9_string", "Reverse array of strings!");
        });


        QUnit.test("sequenceEqual", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).sequenceEqual(mx(CreateNumberArray())), "sequenceEqual on array of numbers!");
            assert.ok(mx([1, 2, 3]).sequenceEqual(mx([1, 2])) === false, "sequenceEqual on inharmonic arrays of numbers!");
            assert.ok(mx([{ name: "a" }]).sequenceEqual(mx([{ name: "a", val: 1 }]), {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }), "sequenceEqual on arrays of objects with comparer!");
        });


        QUnit.test("select", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).select(t => t + 100).first() === 100, "select first 10 numbers plus 100!");
            assert.ok(mx(_arr).select((t, i) => i).last() === 9, "select index while enumerating 10 numbers!");
        });


        QUnit.test("selectMany", function (assert) {

            var _arr = [{ name: "A", values: [1, 2, 3, 4] }, { name: "B", values: [5, 6, 7, 8] }];

            assert.ok(mx(_arr).selectMany(t => t.values).count() === 8, "selectMany on complex objects!");
            assert.deepEqual(mx(_arr).selectMany(t => t.values, (t, u) => ({ name: t.name, value: u })).first(), { name: "A", value: 1 }, "selectMany on complex objects with result selector!");
        });


        QUnit.test("single", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx([1]).single() === 1, "Single element of a single array!");
            assert.ok(mx(_arr).single(t => t === 1) === 1, "Single element equal to 1 of the first 10 numbers!");
            assert.throws(() => mx([]).single(), "throws an exception getting single element of an empty collection!");
            assert.throws(() => mx(_arr).single(), "throws an exception getting single element of an collection containing more than one element!");
            assert.throws(() => mx(_arr).single(t => t > 100), "throws an exception getting single element greater than 100 of the first 10 numbers!");
            assert.throws(() => mx(_arr).single(t => t < 10), "throws an exception getting single element less than 10 of the first 10 numbers!");
        });


        QUnit.test("singleOrDefault", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx([1]).singleOrDefault() === 1, "Single element of a single array or default!");
            assert.ok(mx([]).singleOrDefault() === null, "Single element of an empty array or default!");
            assert.ok(mx(_arr).singleOrDefault(t => t === 1) === 1, "Single element equal to 1 of the first 10 numbers or default!");
            assert.ok(mx(_arr).singleOrDefault(t => t === 100, 100) === 100, "Single element of an empty array or default!");
            assert.throws(() => mx(_arr).singleOrDefault(), "throws an exception getting single element of an collection containing more than one element!");
            assert.throws(() => mx(_arr).singleOrDefault(t => t < 10), "throws an exception getting single element less than 10 of the first 10 numbers!");
        });


        QUnit.test("skip", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx(_arr).skip(5).toArray(), [5, 6, 7, 8, 9], "Skip 5 element of a the first 10 numbers!");
            assert.deepEqual(mx(_arr).where(t => t % 2 === 0).skip(3).toArray(), [6, 8], "Skip 3 element of a the first 10 even numbers!");
            assert.ok(mx(_arr).skip(0).count() === 10, "Skip no items!");
            assert.ok(mx(_arr).skip(100).count() === 0, "Skip more than count of the collection!");
        });


        QUnit.test("skipWhile", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx(_arr).skipWhile(t => t < 5).toArray(), [5, 6, 7, 8, 9], "Skip while elements are less than 5 from the first 10 even numbers!");
            assert.ok(mx(_arr).skipWhile(t => t > 5).count() === 10, "Skip while elements are greater than 5 from the first 10 even numbers!");
        });


        QUnit.test("sum", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).sum() === 45, "Sum of the first 10 numbers!");
            assert.ok(mx(_arr).sum(t => t * 2) === 90, "Sum of the first 10 numbers multiply by 2!");
            assert.throws(() => mx(CreateObjectLiteralArray()).sum(), "throws an exception getting sum of non numeric elements!");
            assert.throws(() => mx(CreateComplexObjectLiteralArray()).sum(t => <any>t.name), "throws an exception getting sum of non numeric properties!");
        });


        QUnit.test("take", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx(_arr).take(5).toArray(), [0, 1, 2, 3, 4], "Take 5 element of a the first 10 numbers!");
            assert.deepEqual(mx(_arr).where(t => t % 2 === 0).take(3).toArray(), [0, 2, 4], "Take 3 element of a the first 10 even numbers!");
            assert.ok(mx(_arr).take(0).count() === 0, "Take no items!");
            assert.ok(mx(_arr).take(100).count() === 10, "Take more than count of the collection!");
        });


        QUnit.test("takeWhile", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx(_arr).takeWhile(t => t < 5).toArray(), [0, 1, 2, 3, 4], "Take while elements are less than 5 from the first 10 even numbers!");
            assert.ok(mx(_arr).takeWhile(t => t > 5).count() === 0, "Take while elements are greater than 5 from the first 10 even numbers!");
        });


        QUnit.test("toArray", function (assert) {

            var _arr = CreateNumberArray();

            assert.deepEqual(mx(_arr).where(t => t < 5).toArray(), [0, 1, 2, 3, 4], "Elements less than 5 from the first 10 even numbers!");
        });


        QUnit.test("toDictionary", function (assert) {

            var _arr = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr).toDictionary(t => t.name).count() === 10, "toDictionary key-selector!");
            assert.ok(mx(_arr).toDictionary(t => t.name, t => t.inner.index).first().value === 0, "toDictionary key-selector & element-selector!");
            assert.ok(mx(_arr).toDictionary(t => t, {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).first().key.name === "n0", "toDictionary key-selector & comparer!");

            assert.ok(mx(_arr).toDictionary(t => t, t => t.inner.index, {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).first().value === 0, "toDictionary key-selector, element-selector & comparer!");

            assert.throws(() => mx([1, 1, 2]).toDictionary(t => t), "throws an exception with duplicate keys!");
        });


        QUnit.test("toList", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).toList().count() === 10, "toList first 10 numbers!");
            assert.ok(mx(_arr).toList()[1] === 1, "toList indexer first 10 numbers!");
        });


        QUnit.test("toLookup", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).toLookup(t => t).count() === 10, "toLookup first 10 numbers!");
            assert.ok(mx(_arr1).toLookup(t => t).get(1).count() === 1, "toLookup indexer first 10 numbers!");

            assert.ok(mx(_arr2).toLookup(t => t, {
                hash: o => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).first().first().name === "n0", "toLookup with key-selector and comparer!");

            assert.ok(mx(_arr2).toLookup(t => t, t => t.name, {
                hash: (o) => mx.hash(o.name),
                equals: (a, b) => a.name === b.name
            }).first().first() === "n0", "toLookup with key-selector, element-selector and comparer!");
        });


        QUnit.test("union", function (assert) {

            var _arr = CreateNumberArray();

            assert.ok(mx(_arr).union(CreateNumberArray()).count() === 10, "Union first 10 numbers with itself!");
            assert.deepEqual(mx([1, 2]).union(mx([2, 3])).toArray(), [1, 2, 3], "Union two arrays!");
        });


        QUnit.test("where", function (assert) {

            var _arr1 = CreateNumberArray(),
                _arr2 = CreateComplexObjectLiteralArray();

            assert.ok(mx(_arr1).where(t => t < 5).count() === 5, "Filter first 10 numbers less than 10!");
            assert.ok(mx(_arr2).where(t => t.inner.index < 5).count() === 5, "Filter complex object by value!");
            assert.deepEqual(mx(_arr1).where(t => t <= 1).toArray(), [0, 1], "Deep equal check!");
        });


        QUnit.test("zip", function (assert) {

            assert.ok(mx([1, 2]).zip([3, 4], (t, u) => t + u).first() === 4, "Zip two numeric array!");
            assert.ok(mx([1, 2]).zip([3], (t, u) => t + u).count() === 1, "Zip two inharmonic numeric array!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateObjectLiteralArray(): Object[] {
            return mx.range(0, 10).select(t => ({})).toArray();
        }

        function CreateComplexObjectLiteralArray(): { name: string; inner: { index: number; val: Object } }[] {
            return mx.range(0, 10).select(t => ({
                name: "n" + t,
                inner: {
                    index: t,
                    val: {}
                }
            })).toArray();
        }

        function CreateSimpleClassArray(): SimpleClass[] {
            return mx.range(0, 10).select(t => new SimpleClass()).toArray();
        }

        function CreateSimpleClassWithComparerArray(): SimpleClassWithComparer[] {
            return mx.range(0, 10).select(t => new SimpleClassWithComparer(t)).toArray();
        }

        function CreateNumberArray(): number[] {
            return mx.range(0, 10).toArray();
        }

        function CreateFloatNumberArray(): number[] {
            return mx.range(0, 10).select(t => t + 0.1).toArray();
        }

        function CreateStringArray(): string[] {
            return mx.range(0, 10).select(t => t + "_string").toArray();
        }

        function CreateDateArray(): Date[] {
            return mx.range(0, 10).select(t => new Date(new Date().getTime() + t)).toArray();
        }

        function CreateBooleanArray(): boolean[] {
            return mx.range(0, 10).select(t => t % 2 === 0).toArray();
        }
    }


    namespace CollectionTests {

        QUnit.module("Collection");


        QUnit.test("constructor", function (assert) {

            assert.ok(CreateCollection().count() === 5, "initialize a Collection using specified collection!");
        });


        QUnit.test("count", function (assert) {

            var _col = CreateCollection();
            assert.ok(_col.count() === 5, "collection containing count!");
            assert.throws(() => new Collection().count(), "throws an error getting count of an empty collection.");
        });


        QUnit.test("copyTo", function (assert) {

            var _col = CreateCollection(),
                _arr = new Array(_col.count());

            _col.copyTo(_arr, 0);

            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "Collection copy to an array!");
            assert.throws(() => _col.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("collection enumerable", function (assert) {

            var _col = CreateCollection();
            assert.deepEqual(_col.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a collection!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateCollection(): Collection<number> {
            return new Collection(mx.range(1, 5));
        }
    }


    namespace ListTests {

        QUnit.module("List");


        QUnit.test("constructor", function (assert) {
            assert.ok(new List<number>().count() === 0, "an empty list!");
            assert.ok(new List<number>(10).count() === 10, "an empty list with initial capacity!");
            assert.ok(new List<number>(1, 2, 3, 4, 5).count() === 5, "list initializer!");
            assert.ok(new List<number>(mx.range(0, 10)).count() === 10, "list from an Enumerable!");
        });


        QUnit.test("indexer", function (assert) {

            var _list = CreateList();

            assert.ok(_list[0] === 1, "indexer get!");

            _list[0] = 0;
            assert.ok(_list[0] === 0 && _list.first() === 0, "indexer set!");
        });


        QUnit.test("add", function (assert) {

            var _list = new List();

            _list.add(1);
            assert.ok(_list[0] === 1, "add!");
            assert.ok(_list.count() === 1, "add count!");
        });


        QUnit.test("addRange", function (assert) {

            var _list = new List();

            _list.addRange(mx.range(0, 10));
            assert.ok(_list.count() === 10, "add range of numbers!");
        });


        QUnit.test("asReadOnly", function (assert) {

            var _rlist = new List<number>(mx.range(0, 10)).asReadOnly();

            assert.ok(_rlist.count() === 10, "readOnlyCollection count!");
            assert.ok(_rlist[0] === 0, "readOnlyCollection get!");
        });


        QUnit.test("binarySearch", function (assert) {

            var _list1 = new List<number>(mx.range(0, 100)),
                _list2 = new List<{ index: number }>(mx.range(0, 100).select(t => ({ index: t })));

            assert.ok(_list1.binarySearch(50) === 50, "binary-search to find an item!");
            assert.ok(_list1.binarySearch(100) < 0, "binary-search item not found!");

            assert.ok(_list2.binarySearch({ index: 50 }, { compare: (a, b) => a.index - b.index }) === 50, "binary-search find an item with comparer!");
            assert.ok(_list2.binarySearch({ index: 80 }, 50, 40, { compare: (a, b) => a.index - b.index }) === 80, "binary-search find an item with index, count and comparer!");
        });


        QUnit.test("clear", function (assert) {

            var _list = CreateList();

            _list.clear();
            assert.ok(_list.count() === 0, "Clear list!");
        });


        QUnit.test("contains", function (assert) {

            var _list = CreateList();

            assert.ok(_list.contains(3) === true, "list contains!");
            assert.ok(_list.contains(6) === false, "list not containing!");
        });


        QUnit.test("copyTo", function (assert) {

            var _list = CreateList(),
                _arr = new Array(_list.count());

            _list.copyTo(_arr, 0);

            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "list copyTo an array!");
        });


        QUnit.test("exists", function (assert) {

            var _list = CreateList();

            assert.ok(_list.exists(t => t % 2 === 0), "an even number exists in a list of the first 5 number!");
            assert.ok(_list.exists(t => t > 5) === false, "6 exists in a list of the first 5 number!");
        });


        QUnit.test("find", function (assert) {

            var _list = CreateList();

            assert.ok(_list.find(t => t % 2 === 0) === 2, "find an even number in a list of the first 5 number!");
            assert.ok(_list.find(t => t > 5) === null, "find a number greater than 5 in a list of the first 5 number!");
        });


        QUnit.test("findIndex", function (assert) {

            var _list = CreateList();

            assert.ok(_list.findIndex(t => t % 2 === 0) === 1, "find index of an even numbers in a list of the first 5 number!");
            assert.ok(_list.findIndex(2, t => t % 2 === 0) === 3, "find index of an even numbers in a list of the first 5 number, starting from 2!");
            assert.ok(_list.findIndex(2, 1, t => t % 2 === 0) === -1, "find index of an even numbers in a list of the first 5 number, starting from 3, for 1 attempt!");
        });


        QUnit.test("findLast", function (assert) {

            var _list = CreateList();

            assert.ok(_list.findLast(t => t % 2 === 0) === 4, "find last even number in a list of the first 5 number!");
            assert.ok(_list.findLast(t => t > 5) === null, "find last number greater than 5 in a list of the first 5 number!");
        });


        QUnit.test("findLastIndex", function (assert) {

            var _list = new List(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

            assert.ok(_list.findLastIndex(t => t % 2 === 0) === 8, "find last index of an even numbers in a list of the first 10 number!");
            assert.ok(_list.findLastIndex(5, t => t % 2 === 0) === 4, "find last index of an even numbers in a list of the first 10 number, starting from 5!");
            assert.ok(_list.findLastIndex(5, 1, t => t % 2 === 0) === -1, "find last index of an even numbers in a list of the first 10 number, starting from 5, for 1 attempt!");
        });


        QUnit.test("forEach", function (assert) {

            var _list = CreateList(),
                _count = 0;

            _list.forEach(t  => _count += t);

            assert.ok(_count === 15, "forEach to get sum of a the items in a list!");
        });


        QUnit.test("get", function (assert) {

            var _list = CreateList();

            assert.ok(_list.get(1) === 2, "get item at index 1 from a list of 5 numbers!");
            assert.throws(() => _list.get(10), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("getRange", function (assert) {

            var _list = CreateList();

            assert.deepEqual(_list.getRange(0, 3).toArray(), [1, 2, 3], "get range of first 3 items of a list of first 5 numbers!");
            assert.throws(() => _list.getRange(0, 10), "throws an error getting first 10 items from a list of 5 numbers!");
        });


        QUnit.test("indexOf", function (assert) {

            var _list = CreateList();

            assert.ok(_list.indexOf(3) === 2, "get index of 3 in a list of first 5 numbers!");
            assert.ok(_list.indexOf(10) === -1, "get index of 10 in a list of first 5 numbers!");
            assert.ok(_list.indexOf(3, 4) === -1, "get index of 3 in a list of first 5 numbers, starting from index 4!");
        });


        QUnit.test("insert", function (assert) {

            var _list = CreateList();

            _list.insert(3, 0);

            assert.ok(_list.count() === 6, "insert an item in a list of 5 numbers, get count!");
            assert.ok(_list[3] === 0, "insert an item in a list of 5 numbers, get item!");
            assert.throws(() => _list.insert(10, 0), "throws an error inserting in 10th index of a list of 5 numbers!");
        });


        QUnit.test("insertRange", function (assert) {

            var _list = CreateList();

            _list.insertRange(3, mx.range(0, 3));

            assert.ok(_list.count() === 8, "insert range of items in a list of 5 numbers, get count!");
            assert.ok(_list[3] === 0 && _list[4] === 1 && _list[5] === 2, "insert range of items in a list of 5 numbers, get items!");
            assert.throws(() => _list.insertRange(10, mx.range(0, 3)), "throws an error inserting range of items in 10th index of a list of 5 numbers!");
        });


        QUnit.test("lastIndexOf", function (assert) {

            var _list = CreateList();

            assert.ok(_list.lastIndexOf(3) === 2, "get last index of 3 in a list of first 5 numbers!");
            assert.ok(_list.lastIndexOf(10) === -1, "get last index of 10 in a list of first 5 numbers!");
            assert.ok(_list.lastIndexOf(3, 1) === -1, "get last index of 3 in a list of first 5 numbers, starting from index 1!");
        });


        QUnit.test("remove", function (assert) {

            var _list = CreateList();

            assert.ok(_list.remove(2) === true && _list.count() === 4, "remove an item from a list, get count!");
            assert.ok(_list.remove(10) === false && _list.count() === 4, "remove an item which does not exist in a list, get count!");
        });


        QUnit.test("removeAll", function (assert) {

            var _list = CreateList();

            assert.ok(_list.removeAll(t => t % 2 === 0) === 2 && _list.count() === 3, "remove all even numbers from a list of first 5 numbers, get count!");
            assert.ok(_list.removeAll(t => t % 2 === 0) === 0 && _list.count() === 3, "remove all even numbers from a list of first 3 odd numbers, get count!");
        });


        QUnit.test("removeAt", function (assert) {

            var _list = CreateList();

            _list.removeAt(2);

            assert.ok(_list[2] === 4 && _list.count() === 4, "remove item from 2nd index of a list of first 5 numbers, get count!");
            assert.throws(() => _list.removeAt(10), "throws an error removing item from 10th index of a list of first 5 numbers!");
        });


        QUnit.test("removeRange", function (assert) {

            var _list = CreateList();

            _list.removeRange(1, 3);

            assert.ok(_list[0] === 1 && _list[1] === 5 && _list.count() === 2, "remove range of 3 items, starting from 1st index from a list of first 5 numbers, get count!");
            assert.throws(() => _list.removeRange(10, 10), "throws an error removing a range of items starting from 10th index of a list of first 5 numbers!");
        });


        QUnit.test("reverse", function (assert) {

            var _arr = [1, 2, 3, 4, 5],
                _list1 = new List<number>(_arr),
                _list2 = new List<number>(_arr);

            _list1.reverse();
            _list2.reverse(0, 3);

            assert.deepEqual(_list1.toArray(), [5, 4, 3, 2, 1], "reverse list of 5 first numbers!");
            assert.deepEqual(_list2.toArray(), [3, 2, 1, 4, 5], "reverse first 3 items of a list of 5 first numbers!");
        });


        QUnit.test("set", function (assert) {

            var _list = CreateList();

            _list.set(1, 0);

            assert.ok(_list[1] === 0, "set value at index 1 of a list!");
            assert.throws(() => _list.set(10, 1), "throws an error setting item at index 10 from a list of 5 numbers!");
        });


        QUnit.test("sort", function (assert) {

            var _arr = [7, 1, 8, 3, 2, 0, 9, 6, 4, 5],
                _list1 = new List<number>(_arr),
                _list2 = new List<number>(_arr),
                _list3 = new List<number>(_arr),
                _list4 = new List<number>(_arr),
                _sorter = (a: number, b: number) => a - b;

            _list1.sort();
            _list2.sort(_sorter);
            _list3.sort({ compare: _sorter });
            _list4.sort(0, 5, { compare: _sorter });

            assert.deepEqual(_list1.toArray(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "sort list of first 10 numbers!");
            assert.deepEqual(_list2.toArray(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "sort list of first 10 numbers with a comparison function!");
            assert.deepEqual(_list3.toArray(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "sort list of first 10 numbers with a comparer!");
            assert.deepEqual(_list4.toArray(), [1, 2, 3, 7, 8, 0, 9, 6, 4, 5], "sort 5 first items of list of first 10 numbers with a comparer!");
        });


        QUnit.test("toArray", function (assert) {

            var _list = CreateList();

            assert.deepEqual(_list.toArray(), [1, 2, 3, 4, 5], "converts a list of numbers to an array!");
        });


        QUnit.test("trueForAll", function (assert) {

            var _list = CreateList();

            assert.ok(_list.trueForAll(t => t < 10) === true, "checks whether all items in a list of 5 first numbers are less than 10!");
            assert.ok(_list.trueForAll(t => t < 3) === false, "checks whether all items in a list of 5 first numbers are less than 3!");
        });


        QUnit.test("list enumerable", function (assert) {

            var _list = CreateList();

            assert.deepEqual(_list.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a list!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateList(): List<number> {
            return new List(1, 2, 3, 4, 5);
        }
    }


    namespace ReadOnlyCollectionTests {

        QUnit.module("ReadOnlyCollection");


        QUnit.test("constructor", function (assert) {
            assert.ok(CreateReadOnlyCollection().count() === 5, "initialize a ReadOnlyCollection!");
            assert.throws(() => new ReadOnlyCollection<number>(null), "throws an exception creating an ampty ReadOnlyCollection!");
        });


        QUnit.test("indexer", function (assert) {

            var _col = CreateReadOnlyCollection();

            assert.ok(_col[0] === 1, "indexer get!");
            assert.ok(function () {
                try { _col[0] = 0; }
                catch (e) { }
                return _col[0] === 1;
            }, "indexer set!");

            assert.ok(function () {
                try { _col[10] = 0; }
                catch (e) { }
                return _col[10] === undefined;
            }, "out of range indexer set!");
        });


        QUnit.test("get", function (assert) {

            var _col = CreateReadOnlyCollection();

            assert.ok(_col.get(1) === 2, "get item at index 1 from a collection of 5 numbers!");
            assert.throws(() => _col.get(10), "throws error getting item at index 10 from a collection of 5 numbers!");
        });


        QUnit.test("contains", function (assert) {

            var _col = CreateReadOnlyCollection();

            assert.ok(_col.contains(3) === true, "collection contains!");
            assert.ok(_col.contains(6) === false, "collection not containing!");
        });


        QUnit.test("copyTo", function (assert) {

            var _col = CreateReadOnlyCollection(),
                _arr = new Array(_col.count());

            _col.copyTo(_arr, 0);
            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "collection copyTo an array!");
            assert.throws(() => _col.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("indexOf", function (assert) {

            var _col = CreateReadOnlyCollection();

            assert.ok(_col.indexOf(3) === 2, "get index of 3 in a collection of first 5 numbers!");
            assert.ok(_col.indexOf(10) === -1, "get index of 10 in a collection of first 5 numbers!");
        });


        QUnit.test("collection enumerable", function (assert) {

            var _col = CreateReadOnlyCollection();

            assert.deepEqual(_col.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a collection!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateReadOnlyCollection(): ReadOnlyCollection<number> {
            return new ReadOnlyCollection(new List<number>(1, 2, 3, 4, 5));
        }
    }


    namespace SortedListTests {

        QUnit.module("SortedList");


        QUnit.test("constructor", function (assert) {

            var _comparer = Comparer.create((a: number, b: number) => a - b),
                _dic = CreateDictionary(),
                _s1 = new SortedList(),
                _s2 = new SortedList(5),
                _s3 = new SortedList(_dic),
                _s4 = new SortedList(_comparer),
                _s5 = new SortedList(5, _comparer),
                _s6 = new SortedList(_dic, _comparer);


            assert.ok(_s1.count() === 0 && _s1.capacity() === 0, "initialize a SortedList!");
            assert.ok(_s2.count() === 0 && _s2.capacity() === 5, "initialize a SortedList using initial capacity!");
            assert.ok(_s3.count() === 5 && _s3.capacity() === 5, "initialize a SortedList using specified dictionary!");
            assert.ok(_s4.count() === 0 && _s4.capacity() === 0, "initialize a SortedList using specified comparer!");
            assert.ok(_s5.count() === 0 && _s5.capacity() === 5, "initialize a SortedList using using initial capacity and comparer!");
            assert.ok(_s6.count() === 5 && _s6.capacity() === 5, "initialize a SortedList using specified dictionary and comparer!");
        });


        QUnit.test("add", function (assert) {

            assert.ok(CreateSortedList().count() == 5, "sorted-list add!");
            assert.throws(() => CreateSortedList().add(1, "AA"), "throws an error adding existing key to the list!");
        });


        QUnit.test("get", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.get(1) === "A", "sorted-list get!");
            assert.throws(() => _list.get(10), "throws an error getting invalid key!");
        });


        QUnit.test("capacity", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.capacity() > 0, "get sorted-list capacity!");

            _list.capacity(10);
            assert.ok(_list.capacity() === 10, "set sorted-list capacity!");
        });


        QUnit.test("clear", function (assert) {

            var _list = CreateSortedList();

            _list.clear();
            assert.ok(_list.count() === 0 && _list.capacity() === 0, "clear sorted-list!");
        });


        QUnit.test("comparer", function (assert) {

            var _comparer = CreateSortedList().comparer();

            assert.ok(_comparer.compare(5, 1) > 0 && _comparer.compare(1, 5) < 0 && _comparer.compare(1, 1) === 0, "sorted-list comparer!");
        });


        QUnit.test("containsKey", function (assert) {

            var _list1 = CreateSortedList(),
                _list2 = new SortedList<{ id: number; name: string }, number>({ compare: (a, b) => a.name.localeCompare(b.name) });

            assert.ok(_list1.containsKey(1) === true, "sorted-list contains key!");
            assert.ok(_list1.containsKey(10) === false, "sorted-list does not contain key!");


            _list2.add({ id: 2, name: "B" }, 2);
            _list2.add({ id: 5, name: "E" }, 5);
            _list2.add({ id: 4, name: "D" }, 4);
            _list2.add({ id: 3, name: "C" }, 3);
            _list2.add({ id: 1, name: "A" }, 1);

            assert.ok(_list2.containsKey({ id: 3, name: "C" }), "sorted-list contains key using specified comparer");
        });


        QUnit.test("containsValue", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.containsValue("A") === true, "sorted-list contains value!");
            assert.ok(_list.containsValue("Z") === false, "sorted-list does not contain value!");
        });


        QUnit.test("keys", function (assert) {

            var _list = CreateSortedList();

            assert.deepEqual(_list.keys().toArray(), [1, 2, 3, 4, 5], "sorted-list keys!");
            assert.deepEqual(new SortedList().keys().toArray(), [], "empty sorted-list keys!");
        });


        QUnit.test("values", function (assert) {

            var _list = CreateSortedList();

            assert.deepEqual(_list.values().toArray(), ["A", "B", "C", "D", "E"], "sorted-list values!");
            assert.deepEqual(new SortedList().values().toArray(), [], "empty sorted-list values!");
        });


        QUnit.test("indexOfKey", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.indexOfKey(1) === 0, "sorted-list index of key!");
            assert.ok(_list.indexOfKey(10) < 0, "sorted-list index of invalid key!");
        });


        QUnit.test("indexOfValue", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.indexOfValue("A") === 0, "sorted-list index of value!");
            assert.ok(_list.indexOfValue("Z") < 0, "sorted-list index of invalid value!");
        });


        QUnit.test("remove", function (assert) {

            var _list = CreateSortedList();

            assert.ok(_list.remove(1) === true && _list.count() === 4 && _list.indexOfKey(1) < 0, "sorted-list remove key!");
            assert.ok(_list.remove(1) === false && _list.count() === 4, "sorted-list remove invalid key!");
        });


        QUnit.test("removeAt", function (assert) {

            var _list = CreateSortedList();

            _list.removeAt(0);
            assert.ok(_list.count() === 4 && _list.indexOfKey(1) < 0, "sorted-list remove at index!");
            assert.throws(() => _list.removeAt(10), "throws an error removing item at invalid index");
        });


        QUnit.test("set", function (assert) {

            var _list = CreateSortedList();

            _list.set(1, "AA");
            assert.ok(_list.count() === 5 && _list.get(1) === "AA", "sorted-list set exisiting key's value!");

            _list.set(6, "F");
            assert.ok(_list.count() === 6 && _list.get(6) === "F", "sorted-list set new key and value!");
        });


        QUnit.test("tryGetValue", function (assert) {

            var _list = CreateSortedList();

            assert.ok(function () {
                var value: string;
                var res = _list.tryGetValue(1, val => value = val);

                return res && value === "A";

            }, "sorted-list tryGetValue, exisiting key!");


            assert.ok(function () {
                var value: string;
                var res = _list.tryGetValue(10, val => value = val);

                return res === false;

            }, "sorted-list tryGetValue, invalid key!");
        });


        QUnit.test("sorted-list enumerable", function (assert) {

            var _list = CreateSortedList();

            assert.deepEqual(_list.select(t => t.key * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a sorted-list!");
            assert.deepEqual(_list.where(t => t.key > 2).select(t => t.value).toArray(), ["C", "D", "E"], "where-select-toArray over a sorted-list!");
        });


        QUnit.test("evaluate sorting", function (assert) {

            var _list1 = CreateSortedList(),
                _list2 = new SortedList<{ id: number; name: string }, number>({ compare: (a, b) => a.name.localeCompare(b.name) });

            _list1.remove(5);
            _list1.add(6, "F");
            _list1.remove(4);
            _list1.add(7, "G");
            _list1.remove(3);
            _list1.add(8, "H");
            _list1.remove(2);
            _list1.add(9, "I");
            _list1.remove(1);
            _list1.add(10, "J");

            assert.deepEqual(_list1.keys().toArray(), [6, 7, 8, 9, 10], "evaluate sorted keys after multiple add/remove");
            assert.deepEqual(_list1.values().toArray(), ["F", "G", "H", "I", "J"], "evaluate sorted values after multiple add/remove");



            _list2.add({ id: 2, name: "B" }, 2);
            _list2.add({ id: 5, name: "E" }, 5);
            _list2.add({ id: 4, name: "D" }, 4);
            _list2.add({ id: 3, name: "C" }, 3);
            _list2.add({ id: 1, name: "A" }, 1);

            assert.deepEqual(_list2.keys().select(t => t.id).toArray(), [1, 2, 3, 4, 5], "evaluate sorted keys after multiple add/remove using specified comparer!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateDictionary(): Dictionary<number, string> {
            var _dic = new Dictionary<number, string>();
            _dic.add(1, "A");
            _dic.add(2, "B");
            _dic.add(3, "C");
            _dic.add(4, "D");
            _dic.add(5, "E");

            return _dic;
        }

        function CreateSortedList(): SortedList<number, string> {
            var _list = new SortedList<number, string>();
            _list.add(5, "E");
            _list.add(3, "C");
            _list.add(2, "B");
            _list.add(4, "D");
            _list.add(1, "A");

            return _list;
        }
    }


    namespace DictionaryTests {

        QUnit.module("Dictionary");


        QUnit.test("constructor", function (assert) {

            var _comparer = EqualityComparer.create(o => mx.hash(o), (a, b) => a === b),
                _d1 = new Dictionary<number, string>(),
                _d2 = new Dictionary<number, string>(CreateDictionary()),
                _d3 = new Dictionary<number, string>(_comparer),
                _d4 = new Dictionary<number, string>(5),
                _d5 = new Dictionary<number, string>(5, _comparer),
                _d6 = new Dictionary<number, string>(CreateDictionary(), _comparer);


            assert.ok(_d1.count() === 0, "initialize a Dictionary!");
            assert.ok(_d2.count() === 5, "initialize a Dictionary using specified dictionary!");
            assert.ok(_d3.count() === 0, "initialize a Dictionary using specified comparer!");
            assert.ok(_d4.count() === 0, "initialize a Dictionary using initial capacity!");
            assert.ok(_d5.count() === 0, "initialize a Dictionary using using initial capacity and comparer!");
            assert.ok(_d6.count() === 5, "initialize a Dictionary using specified dictionary and comparer!");
        });


        QUnit.test("add", function (assert) {
            var _dic = new Dictionary<number, string>();
            _dic.add(1, "A");

            assert.ok(_dic.count() === 1, "ditionary add");
            assert.throws(() => _dic.add(1, "B"), "throws an error adding duplicate key");
        });


        QUnit.test("clear", function (assert) {
            var _dic = CreateDictionary();
            _dic.clear();

            assert.ok(_dic.count() === 0, "ditionary clear!");
        });


        QUnit.test("containsKey", function (assert) {

            var _dic = CreateDictionary();

            assert.ok(_dic.containsKey(1) === true, "dictionary contains key!");
            assert.ok(_dic.containsKey(10) === false, "dictionary does not contain key!");
        });


        QUnit.test("containsValue", function (assert) {

            var _dic = CreateDictionary();

            assert.ok(_dic.containsValue("A") === true, "dictionary contains value!");
            assert.ok(_dic.containsValue("Z") === false, "dictionary does not contain value!");
        });


        QUnit.test("copyTo", function (assert) {

            var _dic = CreateDictionary(),
                _arr = new Array(_dic.count());

            _dic.copyTo(_arr, 0);
            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "dictionary copy to an array!");
            assert.throws(() => _dic.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("keys", function (assert) {

            var _dic = CreateDictionary();

            assert.deepEqual(_dic.keys().toArray(), [1, 2, 3, 4, 5], "dictionary keys!");
            assert.deepEqual(new Dictionary().keys().toArray(), [], "empty dictionary keys!");
        });


        QUnit.test("values", function (assert) {

            var _dic = CreateDictionary();

            assert.deepEqual(_dic.values().toArray(), ["A", "B", "C", "D", "E"], "dictionary values!");
            assert.deepEqual(new Dictionary().values().toArray(), [], "empty dictionary values!");
        });


        QUnit.test("get", function (assert) {

            var _dic = CreateDictionary();

            assert.ok(_dic.get(1) === "A", "dictionary get value!");
            assert.throws(() => _dic.get(10), "throws an error getting non existing key!");
        });


        QUnit.test("set", function (assert) {

            var _dic = CreateDictionary();

            _dic.set(1, "AA");
            assert.ok(_dic.get(1) === "AA", "dictionary set value!");

            _dic.set(6, "F");
            assert.ok(_dic.count() === 6 && _dic.get(6) === "F", "dictionary set new key and value!");
        });


        QUnit.test("tryGetValue", function (assert) {

            var _dic = CreateDictionary();

            assert.ok(function () {
                var value: string;
                var res = _dic.tryGetValue(1, val => value = val);

                return res && value === "A";

            }, "dictionary tryGetValue, exisiting key!");


            assert.ok(function () {
                var value: string;
                var res = _dic.tryGetValue(10, val => value = val);

                return res === false;

            }, "dictionary tryGetValue, invalid key!");
        });


        QUnit.test("remove", function (assert) {

            var _dic = CreateDictionary();

            assert.ok(_dic.remove(1) === true && _dic.count() === 4, "dictionary remove key!");
            assert.ok(_dic.remove(10) === false && _dic.count() === 4, "dictionary remove non existing key!");
        });


        QUnit.test("key-value pair", function (assert) {

            var _pair1 = new KeyValuePair(1, "A"),
                _pair2 = new KeyValuePair(1, "A");

            assert.ok(_pair1.key === 1 && _pair1.value === "A", "KeyValuePair get key/value!");
            assert.throws(() => _pair1.key = 2, "throws an error trysing to set KeyValuePair key!");
            assert.throws(() => _pair1.value = "B", "throws an error trysing to set KeyValuePair value!");
            assert.ok(mx.hash(_pair1) === mx.hash(_pair2), "KeyValuePair get hash code!");
            assert.ok(mx.equals(_pair1, _pair2), "KeyValuePair equality check!");
        });


        QUnit.test("dictionary enumerable", function (assert) {

            var _dic = CreateDictionary();

            assert.deepEqual(_dic.select(t => t.key).toArray(), [1, 2, 3, 4, 5], "dictionary select keys, to array!");
            assert.deepEqual(_dic.select(t => t.value).toArray(), ["A", "B", "C", "D", "E"], "dictionary select values, to array!");
            assert.ok(_dic.toArray()[0].key === 1 && _dic.toArray()[0].value === "A", "dictionary select key-value items!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateDictionary(): Dictionary<number, string> {
            var _dic = new Dictionary<number, string>();
            _dic.add(1, "A");
            _dic.add(2, "B");
            _dic.add(3, "C");
            _dic.add(4, "D");
            _dic.add(5, "E");

            return _dic;
        }
    }


    namespace HashSetTests {

        QUnit.module("Hashset");


        QUnit.test("constructor", function (assert) {

            assert.ok(new HashSet<number>().count() === 0, "initialize an empty HashSet!");
            assert.ok(new HashSet<number>(mx.range(1, 5)).count() === 5, "initialize a HashSet using specified collection!");
            assert.ok(new HashSet<number>(mx.EqualityComparer.defaultComparer).count() === 0, "initialize a HashSet using specified equality comparer!");
            assert.ok(CreateObjectHashSet().count() === 2, "initialize a HashSet using specified collection and equality comparer!");
        });


        QUnit.test("add", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.add(6) === true, "add item to a HashSet of numbers!");
            assert.ok(_hash1.add(1) === false, "add existing item to a HashSet of numbers!");
            assert.ok(_hash2.add({ name: "C", value: 5 }) === true, "add item to a HashSet of objects!");
            assert.ok(_hash2.add({ name: "A", value: 5 }) === false, "add an existing item to a HashSet of objects!");
        });


        QUnit.test("clear", function (assert) {

            var _hash = CreateNumericHashSet();

            _hash.clear();
            assert.ok(_hash.count() === 0, "clear a HashSet!");
        });


        QUnit.test("contains", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.contains(1) === true, "HashSet of numbers contains an item!");
            assert.ok(_hash1.contains(6) === false, "HashSet of numbers does not contain an item!");
            assert.ok(_hash2.contains({ name: "A", value: 5 }) === true, "HashSet of objects contains an item!");
            assert.ok(_hash2.contains({ name: "C", value: 5 }) === false, "HashSet of objects does not contain an item!");
        });


        QUnit.test("copyTo", function (assert) {

            var _hash = CreateNumericHashSet(),
                _arr = new Array(_hash.count());

            _hash.copyTo(_arr, 0);

            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "HashSet copy to an array!");
            assert.throws(() => _hash.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("comparer", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.comparer() === mx.EqualityComparer.defaultComparer, "HashSet default comparer!");
            assert.ok(_hash2.comparer().equals({ name: "A", value: 1 }, { name: "A", value: 2 }), "HashSet custom comparer!");
        });


        QUnit.test("remove", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.remove(1) === true, "HashSet of numbers remove an item!");
            assert.ok(_hash1.remove(1) === false, "HashSet of numbers remove non existing item!");
            assert.ok(_hash2.remove({ name: "A", value: 1 }) === true, "HashSet of objects remove an item!");
            assert.ok(_hash2.remove({ name: "A", value: 1 }) === false, "HashSet of objects remove non existing item!");
        });


        QUnit.test("removeWhere", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.removeWhere(t => t < 3) === 2, "HashSet of numbers remove with predicate, get number of items removed!");
            assert.ok(_hash1.removeWhere(t => t < 3) === 0, "HashSet of numbers remove with invalid predicate, get number of items removed!");
            assert.ok(_hash1.count() === 3, "HashSet of numbers remove with predicate, get count!");

            assert.ok(_hash2.removeWhere(t => t.value < 3) === 1, "HashSet of objects remove with predicate, get number of items removed!");
            assert.ok(_hash2.removeWhere(t => t.value < 3) === 0, "HashSet of objects remove with invalid predicate, get number of items removed!");
            assert.ok(_hash2.count() === 1, "HashSet of objects remove with predicate, get count!");
        });


        QUnit.test("exceptWith", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet(),
                _hash3 = CreateNumericHashSet();

            _hash1.exceptWith([1, 2, 3]);
            _hash2.exceptWith([{ name: "A", value: 0 }]);
            _hash3.exceptWith(CreateNumericHashSet());

            assert.ok(_hash1.count() === 2 && _hash1.contains(1) === false, "HashSet of numbers except a collection, get count!");
            assert.ok(_hash2.count() === 1 && _hash2.contains({ name: "A", value: 0 }) === false, "HashSet of objects except a collection, get count!");
            assert.ok(_hash3.count() === 0, "HashSet of numbers except an equal set, get count!");
        });


        QUnit.test("intersectWith", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet(),
                _hash3 = CreateNumericHashSet();

            _hash1.intersectWith([1, 2, 3]);
            _hash2.intersectWith([{ name: "A", value: 0 }]);
            _hash3.intersectWith(CreateNumericHashSet());

            assert.ok(_hash1.count() === 3 && _hash1.contains(1) === true, "HashSet of numbers intersect with a collection, get count!");
            assert.ok(_hash2.count() === 1 && _hash2.contains({ name: "A", value: 0 }) === true, "HashSet of objects intersect with a collection, get count!");
            assert.ok(_hash3.count() === 5, "HashSet of numbers intersect with an equal set, get count!");
        });


        QUnit.test("isProperSubsetOf", function (assert) {

            var _hash = CreateNumericHashSet();

            assert.ok(new HashSet<number>().isProperSubsetOf([1, 2, 3]) === true, "an empty set is a proper subset of any other collection!");
            assert.ok(new HashSet<number>().isProperSubsetOf([]) === false, "an empty set is not a proper subset of another empty collection!");
            assert.ok(_hash.isProperSubsetOf([1, 2, 3, 4]) === false, "a hash set is not a proper subset of another collection when count is greater than the number of elements in other!");
            assert.ok(_hash.isProperSubsetOf([1, 2, 3, 4, 5]) === false, "a hash set is not a proper subset of another collection when count is equal to the number of elements in other!");
            assert.ok(_hash.isProperSubsetOf([1, 2, 3, 4, 5, 6]) === true, "hash set proper subset!");
        });


        QUnit.test("isProperSupersetOf", function (assert) {

            var _hash = CreateNumericHashSet();

            assert.ok(new HashSet<number>().isProperSupersetOf([1, 2, 3]) === false, "an empty set is a not superset of any other collection!");
            assert.ok(new HashSet<number>().isProperSupersetOf([]) === false, "an empty set is not a proper superset of another empty collection!");
            assert.ok(_hash.isProperSupersetOf([1, 2, 3, 4, 5, 6]) === false, "a hash set is not a proper superset of another collection when count is less than the number of elements in other!");
            assert.ok(_hash.isProperSupersetOf([1, 2, 3, 4, 5]) === false, "a hash set is not a proper superset of another collection when count is equal to the number of elements in other!");
            assert.ok(_hash.isProperSupersetOf([1, 2, 3]) === true, "hash set proper superset!");
        });


        QUnit.test("isSubsetOf", function (assert) {

            var _hash = CreateNumericHashSet();

            assert.ok(new HashSet<number>().isSubsetOf([1, 2, 3]) === true, "an empty set is a subset of any other collection!");
            assert.ok(new HashSet<number>().isSubsetOf([]) === true, "an empty set is a subset of another empty collection!");
            assert.ok(_hash.isSubsetOf([1, 2, 3, 4]) === false, "a hash set is not a subset of another collection when count is greater than the number of elements in other!");
            assert.ok(_hash.isSubsetOf([1, 2, 3, 4, 5]) === true, "a hash set is a proper subset of another collection when count is equal to the number of elements in other!");
            assert.ok(_hash.isSubsetOf([1, 2, 3, 4, 5, 6]) === true, "hash set subset!");
        });


        QUnit.test("isSupersetOf", function (assert) {

            var _hash = CreateNumericHashSet();

            assert.ok(new HashSet<number>().isSupersetOf([1, 2, 3]) === false, "an empty set is a not superset of any other collection!");
            assert.ok(new HashSet<number>().isSupersetOf([]) === true, "an empty set is superset of another empty collection!");
            assert.ok(_hash.isSupersetOf([1, 2, 3, 4, 5, 6]) === false, "a hash set is not a superset of another collection when count is less than the number of elements in other!");
            assert.ok(_hash.isSupersetOf([1, 2, 3, 4, 5]) === true, "a hash set is a proper superset of another collection when count is equal to the number of elements in other!");
            assert.ok(_hash.isSupersetOf([1, 2, 3]) === true, "hash set superset!");
        });


        QUnit.test("overlaps", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.ok(_hash1.overlaps([1, 2, 3]) === true, "HashSet of numbers overlaps with another collection!");
            assert.ok(_hash2.overlaps([{ name: "A", value: 0 }]) === true, "HashSet of objects overlaps with another collection!");
            assert.ok(new HashSet().overlaps([1, 2, 3]) === false, "an empty HashSet does not overlap with another collection!");
        });


        QUnit.test("setEquals", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateNumericHashSet();

            assert.ok(_hash1.setEquals(_hash2) === true, "HashSet of numbers equals with another HashSet!");
            assert.ok(_hash1.setEquals([1, 2, 3, 4, 5]) === true, "HashSet of numbers equals with another collection!");
            assert.ok(new HashSet<number>().setEquals([]) === true, "an empty HashSet equals with an empty collection!");
            assert.ok(new HashSet<number>().setEquals([1, 2, 3]) === false, "an empty HashSet does not equals with another collection!");
        });


        QUnit.test("symmetricExceptWith", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet(),
                _hash3 = CreateNumericHashSet();

            _hash1.symmetricExceptWith([2, 3, 4]);
            _hash2.symmetricExceptWith([{ name: "A", value: 0 }]);
            _hash3.exceptWith(CreateNumericHashSet());

            assert.ok(_hash1.count() === 2, "HashSet of numbers symmetric except another collection, get count!");
            assert.ok(_hash1.contains(1) === true && _hash1.contains(5) === true, "HashSet of numbers symmetric except another collection, check contains!");
            assert.ok(_hash2.count() === 1, "HashSet of objects symmetric except another collection, get count!");
            assert.ok(_hash2.contains({ name: "A", value: 0 }) === false && _hash2.contains({ name: "B", value: 0 }) === true, "HashSet of objects symmetric except another collection, check contains!");
            assert.ok(_hash3.count() === 0, "HashSet of numbers symmetric except an equal set, get count!");
        });


        QUnit.test("unionWith", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet(),
                _hash3 = CreateNumericHashSet();

            _hash1.unionWith([5, 6, 7, 8]);
            _hash2.unionWith([{ name: "A", value: 5 }, { name: "B", value: 6 }, { name: "C", value: 7 }, { name: "D", value: 8 }]);
            _hash3.unionWith(CreateNumericHashSet());

            assert.ok(_hash1.count() === 8, "HashSet of numbers union with another collection, get count!");
            assert.ok(_hash1.contains(1) === true && _hash1.contains(8) === true, "HashSet of numbers union with another collection, check contains!");
            assert.ok(_hash2.count() === 4, "HashSet of objects union with another collection, get count!");
            assert.ok(_hash2.contains({ name: "A", value: 0 }) === true && _hash2.contains({ name: "D", value: 0 }) === true, "HashSet of objects union with another collection, check contains!");
            assert.ok(_hash3.count() === 5, "HashSet of numbers union with an equal set, get count!");
        });


        QUnit.test("set enumerable", function (assert) {

            var _hash1 = CreateNumericHashSet(),
                _hash2 = CreateObjectHashSet();

            assert.deepEqual(_hash1.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a HashSet of numbers!");
            assert.deepEqual(_hash2.select(t => t.value * 2).where(t => t > 5).toArray(), [6], "select-where-toArray over a HashSet of objects!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateNumericHashSet(): HashSet<number> {
            return new HashSet<number>(mx.range(1, 5));
        }

        function CreateObjectHashSet(): HashSet<SimpleObject> {

            var _items: SimpleObject[] = [{ name: "A", value: 1 }, { name: "A", value: 2 }, { name: "B", value: 3 }, { name: "B", value: 4 }],
                _comparer = EqualityComparer.create<SimpleObject>(obj => mx.hash(obj.name), (a, b) => a.name === b.name);

            return new HashSet<SimpleObject>(_items, _comparer);
        }
    }


    namespace LinkedListTests {

        QUnit.module("LinkedList");


        QUnit.test("constructor", function (assert) {

            assert.ok(new LinkedList<number>().count() === 0, "initialize an empty LinkedList!");
            assert.ok(CreateLinkedList().count() === 5, "initialize a LinkedList using specified collection!");
        });


        QUnit.test("add", function (assert) {

            var _list = CreateLinkedList();

            _list.add(6);
            assert.ok(_list.count() === 6, "add an item to a LinkedList!");
        });


        QUnit.test("clear", function (assert) {

            var _list = CreateLinkedList();

            _list.clear();
            assert.ok(_list.count() === 0, "clear a LinkedList!");
        });


        QUnit.test("contains", function (assert) {

            var _list = CreateLinkedList();

            assert.ok(_list.contains(1) && _list.contains(5), "LinkedList contains an item!");
            assert.ok(_list.contains(10) === false, "LinkedList does not contains an item!");
        });


        QUnit.test("copyTo", function (assert) {

            var _list = CreateLinkedList(),
                _arr = new Array(_list.count());

            _list.copyTo(_arr, 0);

            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "LinkedList copy to an array!");
            assert.throws(() => _list.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("getFirst", function (assert) {

            var _list = CreateLinkedList();

            assert.ok(_list.getFirst().value() === 1, "LinkedList first item!");
            assert.ok(new LinkedList<number>().getFirst() === null, "empty LinkedList first item!");
        });


        QUnit.test("getLast", function (assert) {

            var _list = CreateLinkedList();

            assert.ok(_list.getLast().value() === 5, "LinkedList last item!");
            assert.ok(new LinkedList<number>().getLast() === null, "empty LinkedList last item!");
        });


        QUnit.test("addAfter", function (assert) {

            var _list = CreateLinkedList(),
                _first = _list.getFirst(),
                _node = new LinkedListNode(6);

            _list.addAfter(_first, _node);
            _list.addAfter(_first, 7);

            assert.ok(_list.count() === 7, "LinkedList add after item, get count!");
            assert.ok(_list.contains(6) && _list.contains(7), "LinkedList add after item, check contains!");
        });


        QUnit.test("addBefore", function (assert) {

            var _list = CreateLinkedList(),
                _last = _list.getLast(),
                _node = new LinkedListNode(6);

            _list.addBefore(_last, _node);
            _list.addBefore(_last, 7);

            assert.ok(_list.count() === 7, "LinkedList add before item, get count!");
            assert.ok(_list.contains(6) && _list.contains(7), "LinkedList add before item, check contains!");
        });


        QUnit.test("addFirst", function (assert) {

            var _list = CreateLinkedList(),
                _node = new LinkedListNode(0);

            _list.addFirst(_node);
            _list.addFirst(-1);

            assert.ok(_list.count() === 7, "LinkedList add first, get count!");
            assert.ok(_list.contains(0) && _list.contains(-1), "LinkedList add first, check contains!");
            assert.ok(_list.getFirst().value() === -1, "LinkedList add first, get first!");
        });


        QUnit.test("addLast", function (assert) {

            var _list = CreateLinkedList(),
                _node = new LinkedListNode(6);

            _list.addLast(_node);
            _list.addLast(7);

            assert.ok(_list.count() === 7, "LinkedList add last, get count!");
            assert.ok(_list.contains(6) && _list.contains(7), "LinkedList add last, check contains!");
            assert.ok(_list.getLast().value() === 7, "LinkedList add last, get last!");
        });


        QUnit.test("find", function (assert) {

            var _list = CreateLinkedList();

            assert.ok(_list.find(4).value() === 4, "LinkedList find an item!");
            assert.ok(_list.find(10) === null, "LinkedList does not find an item!");
        });


        QUnit.test("findLast", function (assert) {

            var _list = CreateLinkedList(),
                _node = new LinkedListNode(1);

            _list.addLast(_node);

            assert.ok(_list.findLast(1) === _node, "LinkedList find last!");
            assert.ok(_list.findLast(10) === null, "LinkedList does not find last item!");
        });


        QUnit.test("remove", function (assert) {

            var _list = CreateLinkedList(),
                _last = _list.getLast();

            assert.ok(_list.remove(1) === true, "LinkedList remove an item!");
            assert.ok(_list.remove(1) === false, "LinkedList remove non existing item!");
            assert.ok(_list.remove(_last) === true, "LinkedList remove a node!");
            assert.throws(() => _list.remove(_last), "throws an error when removing non existing or invalid node!");
            assert.ok(_list.count() === 3, "LinkedList remove, get count!");
        });


        QUnit.test("removeFirst", function (assert) {

            var _list = CreateLinkedList();

            _list.removeFirst();

            assert.ok(_list.count() === 4 && _list.contains(1) === false, "LinkedList remove first node!");
            assert.throws(() => new LinkedList<number>().removeFirst(), "throws an error removing from an empty linked list!");
        });


        QUnit.test("removeLast", function (assert) {

            var _list = CreateLinkedList();

            _list.removeLast();

            assert.ok(_list.count() === 4 && _list.contains(5) === false, "LinkedList remove last node!");
            assert.throws(() => new LinkedList<number>().removeLast(), "throws an error removing from an empty linked list!");
        });


        QUnit.test("linked-list enumerable", function (assert) {

            var _list = CreateLinkedList();
            assert.deepEqual(_list.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a linked-list!");
        });




        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateLinkedList(): LinkedList<number> {
            return new LinkedList(mx.range(1, 5));
        }
    }


    namespace QueueTests {

        QUnit.module("Queue");


        QUnit.test("constructor", function (assert) {

            assert.ok(new Queue<number>().count() === 0, "initialize an empty Queue!");
            assert.ok(CreateQueue().count() === 5, "initialize a Queue using specified collection!");
        });


        QUnit.test("clear", function (assert) {

            var _queue = CreateQueue();

            _queue.clear();
            assert.ok(_queue.count() === 0, "clears a Queue!");
        });


        QUnit.test("contains", function (assert) {

            var _queue = CreateQueue();

            assert.ok(_queue.contains(1) === true, "queue containing an item!");
            assert.ok(_queue.contains(10) === false, "queue does not contain an item!");
        });


        QUnit.test("copyTo", function (assert) {

            var _queue = CreateQueue(),
                _arr = new Array(_queue.count());

            _queue.copyTo(_arr, 0);
            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "queue copy to an array!");
            assert.throws(() => _queue.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("dequeue", function (assert) {

            var _queue = CreateQueue();

            assert.ok(_queue.dequeue() === 1, "queue dequeue an item!");

            _queue.clear();
            assert.throws(() => _queue.dequeue(), "throws an error dequeue from empty queue!");
        });


        QUnit.test("enqueue", function (assert) {

            var _queue = CreateQueue();

            _queue.enqueue(6);
            assert.ok(_queue.count() === 6 && _queue.peek() === 1, "queue dequeue an item!");
        });


        QUnit.test("peek", function (assert) {

            var _queue = CreateQueue();

            assert.ok(_queue.peek() === 1, "queue peek an item!");

            _queue.clear();
            assert.throws(() => _queue.peek(), "throws an error peek from empty queue!");
        });


        QUnit.test("toArray", function (assert) {

            var _queue = CreateQueue();

            assert.deepEqual(_queue.toArray(), [1, 2, 3, 4, 5], "queue to array!");
        });


        QUnit.test("queue enumerable", function (assert) {

            var _queue = CreateQueue();

            assert.deepEqual(_queue.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a queue!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateQueue(): Queue<number> {
            return new Queue(mx.range(1, 5));
        }
    }


    namespace StackTests {

        QUnit.module("Stack");


        QUnit.test("constructor", function (assert) {

            assert.ok(new Stack<number>().count() === 0, "initialize an empty Stack!");
            assert.ok(CreateStack().count() === 5, "initialize a Stack using specified collection!");
        });


        QUnit.test("clear", function (assert) {

            var _stack = CreateStack();

            _stack.clear();
            assert.ok(_stack.count() === 0, "clears a Stack!");
        });


        QUnit.test("contains", function (assert) {

            var _stack = CreateStack();

            assert.ok(_stack.contains(1) === true, "stack containing an item!");
            assert.ok(_stack.contains(10) === false, "stack does not contain an item!");
        });


        QUnit.test("copyTo", function (assert) {

            var _stack = CreateStack(),
                _arr = new Array(_stack.count());

            _stack.copyTo(_arr, 0);
            assert.deepEqual(_arr, [1, 2, 3, 4, 5], "stack copy to an array!");
            assert.throws(() => _stack.copyTo([], 0), "throws an error when the number of elements is greater than the number of elements that the destination array can contain!");
        });


        QUnit.test("peek", function (assert) {

            var _stack = CreateStack();

            assert.ok(_stack.peek() === 5, "stack peek an item!");

            _stack.clear();
            assert.throws(() => _stack.peek(), "throws an error peek from empty stack!");
        });


        QUnit.test("pop", function (assert) {

            var _stack = CreateStack();

            assert.ok(_stack.pop() === 5, "stack pop an item!");

            _stack.clear();
            assert.throws(() => _stack.pop(), "throws an error pop from empty stack!");
        });


        QUnit.test("push", function (assert) {

            var _stack = CreateStack();

            _stack.push(6);
            assert.ok(_stack.count() === 6 && _stack.peek() === 6, "stack push an item!");
        });


        QUnit.test("toArray", function (assert) {

            var _stack = CreateStack();

            assert.deepEqual(_stack.toArray(), [1, 2, 3, 4, 5], "stack to array!");
        });


        QUnit.test("stack enumerable", function (assert) {

            var _stack = CreateStack();

            assert.deepEqual(_stack.select(t => t * 2).where(t => t > 5).toArray(), [6, 8, 10], "select-where-toArray over a stack!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateStack(): Stack<number> {
            return new Stack(mx.range(1, 5));
        }
    }


    namespace LookupTests {

        QUnit.module("Lookup");


        QUnit.test("contains", function (assert) {

            var _lookup = CreateLookup();

            assert.ok(_lookup.contains(1) === true, "lookup contains an item!");
            assert.ok(_lookup.contains(10) === false, "lookup does not an item!");
        });


        QUnit.test("count", function (assert) {

            var _lookup = CreateLookup();

            assert.ok(_lookup.count() === 4, "lookup count!");
        });


        QUnit.test("get", function (assert) {

            var _lookup = CreateLookup();

            assert.ok(_lookup.get(1).count() === 2, "lookup get an item!");
            assert.ok(_lookup.get(10).count() === 0, "lookup get non existing item!");
        });


        QUnit.test("lookup enumerable", function (assert) {

            var _lookup = CreateLookup();

            assert.deepEqual(_lookup.select(t => t.key).toArray(), [1, 2, 3, 4], "lookup select keys, to array!");
            assert.deepEqual(_lookup.selectMany(t => t).toArray(), [1, 1, 2, 3, 3, 4, 4, 4], "lookup select all items, to array!");
            assert.deepEqual(_lookup.select(t => t.count()).toArray(), [2, 1, 2, 3], "lookup select items count!");
        });



        /* Factory methods
        ---------------------------------------------------------------------- */

        function CreateLookup(): Lookup<number, number> {
            return mx([1, 1, 2, 3, 3, 4, 4, 4]).toLookup(t => t);
        }
    }
}
