// tslint:disable-next-line:no-relative-import-in-test
import fp = require("./fp");
import _ = require("lodash");

declare const anything: any;

interface AbcObject {
    a: number;
    b: string;
    c: boolean;
}

const abcObject: AbcObject = anything;
const array: AbcObject[] | null | undefined = anything;
const list: _.List<AbcObject> | null | undefined = anything;
const dictionary: _.Dictionary<AbcObject> | null | undefined = anything;
const numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
const arrayParam: AbcObject[] = [];
const listParam: _.List<AbcObject> = [];
const comparator = (a: AbcObject, b: AbcObject) => true;
const listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
const dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;
const numericDictionaryIterator = (value: AbcObject, key: string, collection: _.NumericDictionary<AbcObject>) => true;
const valueIterator = (value: AbcObject) => true;
const stringIterator = (value: string) => "";

// Wrapped array shortcut methods
_([1, 2, 3, 4]).pop(); // $ExpectType number | undefined
_([1, 2, 3, 4]).push(5, 6, 7); // $ExpectType Collection<number>
_([1, 2, 3, 4]).shift(); // $ExpectType number | undefined
_([1, 2, 3, 4]).sort((a, b) => 1); // $ExpectType Collection<number>
_([1, 2, 3, 4]).splice(1); // $ExpectType Collection<number>
_([1, 2, 3, 4]).splice(1, 2, 5, 6); // $ExpectType Collection<number>
_([1, 2, 3, 4]).unshift(5, 6); // $ExpectType Collection<number>

_.chain([1, 2, 3, 4]).pop(); // $ExpectType PrimitiveChain<number>
_.chain([1, 2, 3, 4]).push(5, 6, 7); // $ExpectType CollectionChain<number>
_.chain([1, 2, 3, 4]).shift(); // $ExpectType PrimitiveChain<number>
_.chain([1, 2, 3, 4]).sort((a, b) => 1); // $ExpectType CollectionChain<number>
_.chain([1, 2, 3, 4]).splice(1); // $ExpectType CollectionChain<number>
_.chain([1, 2, 3, 4]).splice(1, 2, 5, 6); // $ExpectType CollectionChain<number>
_.chain([1, 2, 3, 4]).unshift(5, 6); // $ExpectType CollectionChain<number>

/*********
 * Array *
 *********/

// _.chunk
{
    _.chunk(list); // $ExpectType AbcObject[][]
    _.chunk(list, 42); // $ExpectType AbcObject[][]

    _(list).chunk(); // $ExpectType Collection<AbcObject[]>
    _(list).chunk(42); // $ExpectType Collection<AbcObject[]>

    _.chain(list).chunk(); // $ExpectType CollectionChain<AbcObject[]>
    _.chain(list).chunk(42); // $ExpectType CollectionChain<AbcObject[]>

    fp.chunk(42, list); // $ExpectType AbcObject[][]
    fp.chunk(42)(list); // $ExpectType AbcObject[][]
    fp.chunk(fp.__, list)(42); // $ExpectType AbcObject[][]
}

// _.compact
{
    const list: _.List<AbcObject | null | undefined | false | '' | 0> | null | undefined = anything;

    _.compact(list); // $ExpectType AbcObject[]
    _(list).compact(); // $ExpectType Collection<AbcObject>
    _.chain(list).compact(); // $ExpectType CollectionChain<AbcObject>
    fp.compact(list); // $ExpectType AbcObject[]
}

// _.compact in a pipe with other functions
{
    const list: _.List<_.Many<AbcObject | null | undefined> | null | undefined> = anything;

    fp.pipe(fp.flatten, fp.compact)(list); // $ExpectType AbcObject[]
}

// _.difference
{
    _.difference(list); // $ExpectType AbcObject[]
    _.difference(list, listParam); // $ExpectType AbcObject[]
    _.difference(list, listParam, arrayParam, listParam); // $ExpectType AbcObject[]

    _(list).difference(); // $ExpectType Collection<AbcObject>
    _(list).difference(listParam); // $ExpectType Collection<AbcObject>
    _(list).difference(listParam, arrayParam, listParam); // $ExpectType Collection<AbcObject>

    _.chain(list).difference(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).difference(listParam); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).difference(listParam, arrayParam, listParam); // $ExpectType CollectionChain<AbcObject>

    fp.difference(list, arrayParam); // $ExpectType AbcObject[]
    fp.difference(list)(arrayParam); // $ExpectType AbcObject[]
}

// _.differenceBy
{
    _.differenceBy(list); // $ExpectType AbcObject[]
    _.differenceBy(list, listParam); // $ExpectType AbcObject[]
    _.differenceBy(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam); // $ExpectType AbcObject[]

    _.differenceBy(list, listParam, valueIterator); // $ExpectType AbcObject[]
    _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, valueIterator); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, valueIterator);

    _.differenceBy(list, listParam, "a"); // $ExpectType AbcObject[]
    _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, "a"); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, "a");

    _.differenceBy(list, listParam, {a: 1}); // $ExpectType AbcObject[]
    _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1}); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});

    _(list).differenceBy(listParam); // $ExpectType Collection<AbcObject>
    _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam); // $ExpectType Collection<AbcObject>

    _(list).differenceBy(listParam, valueIterator); // $ExpectType Collection<AbcObject>
    _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, valueIterator); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, valueIterator);

    _(list).differenceBy(listParam, "a"); // $ExpectType Collection<AbcObject>
    _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, "a"); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, "a");

    _(list).differenceBy(listParam, {a: 1}); // $ExpectType Collection<AbcObject>
    _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, {a: 1}); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});

    _.chain(list).differenceBy(arrayParam); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam); // $ExpectType CollectionChain<AbcObject>

    _.chain(list).differenceBy(arrayParam, valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, valueIterator); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, valueIterator);

    _.chain(list).differenceBy(arrayParam, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, "a"); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, "a");

    _.chain(list).differenceBy(arrayParam, {a: 1}); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, 'a'); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});

    fp.differenceBy(valueIterator, list, arrayParam); // $ExpectType AbcObject[]
    fp.differenceBy<AbcObject, AbcObject>(valueIterator)(list)(listParam); // $ExpectType AbcObject[]
    fp.differenceBy("a", list, arrayParam); // $ExpectType AbcObject[]
    fp.differenceBy({a: 1}, list, arrayParam); // $ExpectType AbcObject[]

    {
        interface T1 {
            a: string;
            b: string;
        }
        interface T2 {
            a: string;
            b: number;
        }
        interface T3 {
            a: string;
            b: boolean;
        }
        interface T4 {
            a: string;
            b: any[];
        }

        const t1: T1 = { a: "a", b: "b" };
        const t2: T2 = { a: "a", b: 30 };
        const t3: T3 = { a: "a", b: true };
        const t4: T4 = { a: "a", b: [] };

        // $ExpectType T1[]
        _.differenceBy([t1], [t2], "name");
        // $ExpectType T1[]
        _.differenceBy([t1], [t2], (value) => {
            value; // $ExpectType T1 | T2
            return 0;
        });
        // $ExpectType T1[]
        _.differenceBy([t1], [t2, t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType (T1 | T2)[]
        _.differenceBy([t1, t2], [t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType T1[]
        _.differenceBy([t1], [t2], [t3], [t4], [""], [42], (value) => {
            value; // $ExpectType string | number | T1 | T2 | T3 | T4
            return 0;
        });

        // $ExpectType Collection<T1>
        _([t1]).differenceBy([t2], "name");
        // $ExpectType Collection<T1>
        _([t1]).differenceBy([t2], (value) => {
            value; // $ExpectType T1 | T2
            return 0;
        });
        // $ExpectType Collection<T1>
        _([t1]).differenceBy([t2, t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType Collection<T1 | T2>
        _([t1, t2]).differenceBy([t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType Collection<T1>
        _([t1]).differenceBy([t2], [t3], [t4], [""], [42], (value) => {
            value; // $ExpectType T1
            return 0;
        });

        // $ExpectType CollectionChain<T1>
        _.chain([t1]).differenceBy([t2], "name");
        // $ExpectType CollectionChain<T1>
        _.chain([t1]).differenceBy([t2], (value) => {
            value; // $ExpectType T1 | T2
            return 0;
        });
        // $ExpectType CollectionChain<T1>
        _.chain([t1]).differenceBy([t2, t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType CollectionChain<T1 | T2>
        _.chain([t1, t2]).differenceBy([t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType CollectionChain<T1>
        _.chain([t1]).differenceBy([t2], [t3], [t4], [""], [42], (value) => {
            value; // $ExpectType T1
            return 0;
        });

        fp.differenceBy("name", [t1], [t2]); // $ExpectType T1[]
        fp.differenceBy((value: T1 | T2) => 0, [t1], [t2]); // $ExpectType T1[]
        fp.differenceBy((value: T1 | T2 | T3) => 0, [t1], [t2, t3]); // $ExpectType T1[]
    }
}

// _.differenceWith
{
    _.differenceWith(list); // $ExpectType AbcObject[]
    _.differenceWith(list, arrayParam, comparator); // $ExpectType AbcObject[]
    _.differenceWith(list, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator); // $ExpectType AbcObject[]

    _(list).differenceWith(arrayParam, comparator); // $ExpectType Collection<AbcObject>
    _(list).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator); // $ExpectType Collection<AbcObject>

    _.chain(list).differenceWith(arrayParam, comparator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator); // $ExpectType CollectionChain<AbcObject>

    fp.differenceWith(comparator, list, arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator)(list)(arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator)(list, arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator, list)(arrayParam); // $ExpectType AbcObject[]

    {
        interface T1 {
            a: string;
            b: string;
        }
        interface T2 {
            a: string;
            b: number;
        }

        const t1: T1 = { a: "a", b: "b" };
        const t2: T2 | undefined = anything;

        // $ExpectType T1[]
        _.differenceWith([t1], [t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });

        // $ExpectType Collection<T1>
        _([t1]).differenceWith([t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });

        // $ExpectType CollectionChain<T1>
        _.chain([t1]).differenceWith([t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });

        fp.differenceWith((a: T1, b: T2 | undefined) => true, [t1], [t2]); // $ExpectType T1[]
    }
}

// _.drop
// _.dropRight
{
    _.drop(list); // $ExpectType AbcObject[]
    _.drop(list, 42); // $ExpectType AbcObject[]
    _(list).drop(42); // $ExpectType Collection<AbcObject>
    _.chain(list).drop(42); // $ExpectType CollectionChain<AbcObject>

    fp.drop(42, list); // $ExpectType AbcObject[]
    fp.drop(42)(list); // $ExpectType AbcObject[]

    _.dropRight(list); // $ExpectType AbcObject[]
    _.dropRight(list, 42); // $ExpectType AbcObject[]
    _(list).dropRight(42); // $ExpectType Collection<AbcObject>
    _.chain(list).dropRight(42); // $ExpectType CollectionChain<AbcObject>

    fp.dropRight(42, list); // $ExpectType AbcObject[]
    fp.dropRight(42)(list); // $ExpectType AbcObject[]
}

// _.dropWhile
// _.dropRightWhile
{
    _.dropWhile(list); // $ExpectType AbcObject[]
    _.dropWhile(list, listIterator); // $ExpectType AbcObject[]
    _.dropWhile(list, ""); // $ExpectType AbcObject[]
    _.dropWhile(list, {a: 42}); // $ExpectType AbcObject[]

    _(list).dropWhile(); // $ExpectType Collection<AbcObject>
    _(list).dropWhile(listIterator); // $ExpectType Collection<AbcObject>
    _(list).dropWhile(""); // $ExpectType Collection<AbcObject>
    _(list).dropWhile({a: 42}); // $ExpectType Collection<AbcObject>

    _.chain(list).dropWhile(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropWhile(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropWhile(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropWhile({a: 42}); // $ExpectType CollectionChain<AbcObject>

    fp.dropWhile(valueIterator, list); // $ExpectType AbcObject[]
    fp.dropWhile(valueIterator)(list); // $ExpectType AbcObject[]
    fp.dropWhile("", list); // $ExpectType AbcObject[]
    fp.dropWhile({ a: 42 }, list); // $ExpectType AbcObject[]

    _.dropRightWhile(list); // $ExpectType AbcObject[]
    _.dropRightWhile(list, listIterator); // $ExpectType AbcObject[]
    _.dropRightWhile(list, ""); // $ExpectType AbcObject[]
    _.dropRightWhile(list, {a: 42}); // $ExpectType AbcObject[]

    _(list).dropRightWhile(); // $ExpectType Collection<AbcObject>
    _(list).dropRightWhile(listIterator); // $ExpectType Collection<AbcObject>
    _(list).dropRightWhile(""); // $ExpectType Collection<AbcObject>
    _(list).dropRightWhile({a: 42}); // $ExpectType Collection<AbcObject>

    _.chain(list).dropRightWhile(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropRightWhile(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropRightWhile(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).dropRightWhile({a: 42}); // $ExpectType CollectionChain<AbcObject>

    fp.dropRightWhile(valueIterator, list); // $ExpectType AbcObject[]
    fp.dropRightWhile(valueIterator)(list); // $ExpectType AbcObject[]
    fp.dropRightWhile("", list); // $ExpectType AbcObject[]
    fp.dropRightWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.fill
{
    _.fill(array, abcObject); // $ExpectType AbcObject[]
    _.fill(array, abcObject, 0); // $ExpectType AbcObject[]
    _.fill(array, abcObject, 0, 10); // $ExpectType AbcObject[]

    _.fill(list, abcObject); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.fill(list, abcObject, 0); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.fill(list, abcObject, 0, 10); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    _(list).fill(abcObject); // $ExpectType Collection<AbcObject>
    _(list).fill(abcObject, 0); // $ExpectType Collection<AbcObject>
    _(list).fill(abcObject, 0, 10); // $ExpectType Collection<AbcObject>

    _.chain(list).fill(abcObject); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).fill(abcObject, 0); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).fill(abcObject, 0, 10); // $ExpectType CollectionChain<AbcObject>

    fp.fill(0, 10, abcObject, array); // $ExpectType AbcObject[]
    fp.fill(0)(10)(abcObject)(array); // $ExpectType AbcObject[]
    fp.fill(0, 10, abcObject, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
}

// _.findIndex
// _.findLastIndex
{
    _.findIndex(list); // $ExpectType number
    _.findIndex(list, listIterator); // $ExpectType number
    _.findIndex(list, ""); // $ExpectType number
    _.findIndex(list, {a: 42}); // $ExpectType number
    _.findIndex(list, listIterator, 1); // $ExpectType number

    _(list).findIndex(); // $ExpectType number
    _(list).findIndex(listIterator); // $ExpectType number
    _(list).findIndex(""); // $ExpectType number
    _(list).findIndex({a: 42}); // $ExpectType number
    _(list).findIndex(listIterator, 1); // $ExpectType number

    _.chain(list).findIndex(); // $ExpectType PrimitiveChain<number>
    _.chain(list).findIndex(listIterator); // $ExpectType PrimitiveChain<number>
    _.chain(list).findIndex(""); // $ExpectType PrimitiveChain<number>
    _.chain(list).findIndex({a: 42}); // $ExpectType PrimitiveChain<number>
    _.chain(list).findIndex(listIterator, 1); // $ExpectType PrimitiveChain<number>

    fp.findIndex(valueIterator, list); // $ExpectType number
    fp.findIndex(valueIterator)(list); // $ExpectType number
    fp.findIndex("", list); // $ExpectType number
    fp.findIndex({ a: 42 }, list); // $ExpectType number

    fp.findIndexFrom(valueIterator, 1, list); // $ExpectType number
    fp.findIndexFrom(valueIterator)(1)(list); // $ExpectType number
    fp.findIndexFrom("", 1, list); // $ExpectType number
    fp.findIndexFrom({ a: 42 }, 1, list); // $ExpectType number

    _.findLastIndex(list); // $ExpectType number
    _.findLastIndex(list, listIterator); // $ExpectType number
    _.findLastIndex(list, ""); // $ExpectType number
    _.findLastIndex(list, {a: 42}); // $ExpectType number
    _.findLastIndex(list, listIterator, 1); // $ExpectType number

    _(list).findLastIndex(); // $ExpectType number
    _(list).findLastIndex(listIterator); // $ExpectType number
    _(list).findLastIndex(""); // $ExpectType number
    _(list).findLastIndex({a: 42}); // $ExpectType number
    _(list).findLastIndex(listIterator, 1); // $ExpectType number

    _.chain(list).findLastIndex(); // $ExpectType PrimitiveChain<number>
    _.chain(list).findLastIndex(listIterator); // $ExpectType PrimitiveChain<number>
    _.chain(list).findLastIndex(""); // $ExpectType PrimitiveChain<number>
    _.chain(list).findLastIndex({a: 42}); // $ExpectType PrimitiveChain<number>
    _.chain(list).findLastIndex(listIterator, 1); // $ExpectType PrimitiveChain<number>

    fp.findLastIndex(valueIterator, list); // $ExpectType number
    fp.findLastIndex(valueIterator)(list); // $ExpectType number
    fp.findLastIndex("", list); // $ExpectType number
    fp.findLastIndex({ a: 42 }, list); // $ExpectType number

    fp.findLastIndexFrom(valueIterator, 1, list); // $ExpectType number
    fp.findLastIndexFrom(valueIterator)(1)(list); // $ExpectType number
    fp.findLastIndexFrom("", 1, list); // $ExpectType number
    fp.findLastIndexFrom({ a: 42 }, 1, list); // $ExpectType number
}

// _.first
{
    _.first("abc"); // $ExpectType string | undefined
    _.first(list); // $ExpectType AbcObject | undefined

    _("abc").first(); // $ExpectType string | undefined
    _(list).first(); // $ExpectType AbcObject | undefined

    _.chain("abc").first(); // $ExpectType StringNullableChain
    _.chain(list).first(); // $ExpectType ObjectChain<AbcObject>

    fp.first("abc"); // $ExpectType string | undefined
    fp.first(list); // $ExpectType AbcObject | undefined
}

// _.flatten
{
    _.flatten("abc"); // $ExpectType string[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, [2, 3]]); // $ExpectType number[]
    _.flatten({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]

    _("abc").flatten(); // $ExpectType Collection<string>
    _([1, 2, 3]).flatten(); // $ExpectType Collection<number>
    _([1, [2, 3]]).flatten(); // $ExpectType Collection<number>
    _({0: 1, 1: [2, 3], length: 2}).flatten(); // $ExpectType Collection<number>

    _.chain("abc").flatten(); // $ExpectType CollectionChain<string>
    _.chain([1, 2, 3]).flatten(); // $ExpectType CollectionChain<number>
    _.chain([1, [2, 3]]).flatten(); // $ExpectType CollectionChain<number>
    _.chain({0: 1, 1: [2, 3], length: 2}).flatten(); // $ExpectType CollectionChain<number>

    fp.flatten("abc"); // $ExpectType string[]
    fp.flatten([1, 2, 3]); // $ExpectType number[]
    fp.flatten([1, [2, 3]]); // $ExpectType number[]
    fp.flatten({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]
    fp.unnest([1, [2, 3]]); // $ExpectType number[]
}

// _.flattenDeep
{
    _.flattenDeep([1, 2, 3]); // $ExpectType number[]
    _.flattenDeep([[1, 2, 3]]); // $ExpectType number[]
    _.flattenDeep([1, [2, [3, [4, 5]]]]); // $ExpectType number[]
    _.flattenDeep({0: 1, 1: [2, [3, [4, 5]]], length: 2}); // $ExpectType number[]

    _.flattenDeep(['x']); // $ExpectType string[]
    _.flattenDeep(['x', ['y']]); // $ExpectType string[]

    _.flattenDeep<number>([1, 2, 3]); // $ExpectType number[]
    _.flattenDeep<number>([[1, 2, 3]]); // $ExpectType number[]
    _.flattenDeep<number>([1, [2, [3, [4, 5]]]]); // $ExpectType number[]
    _.flattenDeep<number>({0: 1, 1: [2, [3, [4, 5]]], length: 2}); // $ExpectType number[]

    _([1, 2, 3]).flattenDeep(); // $ExpectType Collection<number>
    _([[1, 2, 3]]).flattenDeep(); // $ExpectType Collection<number>
    _([1, [2, [3, [4, 5]]]]).flattenDeep(); // $ExpectType Collection<number>
    _({0: 1, 1: [2, [3, [4, 5]]], length: 2 }).flattenDeep(); // $ExpectType Collection<number>

    _.chain([1, 2, 3]).flattenDeep(); // $ExpectType CollectionChain<number>
    _.chain([[1, 2, 3]]).flattenDeep(); // $ExpectType CollectionChain<number>
    _.chain([1, [2, [3, [4, 5]]]]).flattenDeep(); // $ExpectType CollectionChain<number>
    _.chain({0: 1, 1: [2, [3, [4, 5]]], length: 2}).flattenDeep(); // $ExpectType CollectionChain<number>

    fp.flattenDeep<number>([1, 2, 3]); // $ExpectType number[]
    fp.flattenDeep<number>([[1, 2, 3]]); // $ExpectType number[]
    fp.flattenDeep<number>([1, [2, [3, [4, 5]]]]); // $ExpectType number[]
    fp.flattenDeep<number>({0: 1, 1: [2, [3, [4, 5]]], length: 2}); // $ExpectType number[]
}

// _.fromPairs
{
    const twoDimensionalArray: string[][] | null | undefined = anything;
    const numberTupleArray: Array<[string, number]> | null | undefined = anything;

    _.fromPairs(twoDimensionalArray); // $ExpectType Dictionary<any>
    _.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
    _(twoDimensionalArray).fromPairs(); // $ExpectType Object<Dictionary<any>>
    _.chain(twoDimensionalArray).fromPairs(); // $ExpectType ObjectChain<Dictionary<any>>
    fp.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
}

// _.head
{
    _.head("abc"); // $ExpectType string | undefined
    _.head(list); // $ExpectType AbcObject | undefined

    _("abc").head(); // $ExpectType string | undefined
    _(list).head(); // $ExpectType AbcObject | undefined

    _.chain("abc").head(); // $ExpectType StringNullableChain
    _.chain(list).head(); // $ExpectType ObjectChain<AbcObject>

    fp.head("abc"); // $ExpectType string | undefined
    fp.head(list); // $ExpectType AbcObject | undefined
}

// _.indexOf
// _.lastIndexOf
// _.sortedIndexOf
// _.sortedLastIndexOf
{
    _.indexOf(list, abcObject); // $ExpectType number
    _.indexOf(list, abcObject, 42); // $ExpectType number
    _(list).indexOf(abcObject); // $ExpectType number
    _(list).indexOf(abcObject, 42); // $ExpectType number
    _.chain(list).indexOf(abcObject); // $ExpectType PrimitiveChain<number>
    _.chain(list).indexOf(abcObject, 42); // $ExpectType PrimitiveChain<number>
    fp.indexOf(abcObject, list); // $ExpectType number
    fp.indexOf(abcObject)(list); // $ExpectType number
    fp.indexOfFrom(abcObject)(42)(list); // $ExpectType number

    _.lastIndexOf(list, abcObject); // $ExpectType number
    _.lastIndexOf(list, abcObject, 42); // $ExpectType number
    _(list).lastIndexOf(abcObject); // $ExpectType number
    _(list).lastIndexOf(abcObject, 42); // $ExpectType number
    _.chain(list).lastIndexOf(abcObject); // $ExpectType PrimitiveChain<number>
    _.chain(list).lastIndexOf(abcObject, 42); // $ExpectType PrimitiveChain<number>
    fp.lastIndexOf(abcObject, list); // $ExpectType number
    fp.lastIndexOf(abcObject)(list); // $ExpectType number
    fp.lastIndexOfFrom(abcObject)(42)(list); // $ExpectType number

    _.sortedIndexOf(list, abcObject); // $ExpectType number
    _(list).sortedIndexOf(abcObject); // $ExpectType number
    _.chain(list).indexOf(abcObject); // $ExpectType PrimitiveChain<number>
    fp.sortedIndexOf(abcObject, list); // $ExpectType number
    fp.sortedIndexOf(abcObject)(list); // $ExpectType number

    _.sortedLastIndexOf(list, abcObject); // $ExpectType number
    _(list).sortedLastIndexOf(abcObject); // $ExpectType number
    _.chain(list).sortedLastIndexOf(abcObject); // $ExpectType PrimitiveChain<number>
    fp.sortedLastIndexOf(abcObject, list); // $ExpectType number
    fp.sortedLastIndexOf(abcObject)(list); // $ExpectType number
}

// _.initial
{
    _.initial(list); // $ExpectType AbcObject[]
    _(list).initial(); // $ExpectType Collection<AbcObject>
    _.chain(list).initial(); // $ExpectType CollectionChain<AbcObject>
    fp.initial(list); // $ExpectType AbcObject[]
}

// _.intersection
{
    const list: _.List<AbcObject> = anything;

    _.intersection(list, list); // $ExpectType AbcObject[]
    _.intersection(list, list, list); // $ExpectType AbcObject[]
    _.intersection(undefined, list); // $ExpectType AbcObject[]
    _.intersection(null, list); // $ExpectType AbcObject[]
    _(list).intersection(list); // $ExpectType Collection<AbcObject>
    _(list).intersection(list, list); // $ExpectType Collection<AbcObject>
    _(list).intersection(undefined); // $ExpectType Collection<AbcObject>
    _(list).intersection(null); // $ExpectType Collection<AbcObject>
    _.chain(list).intersection(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersection(list, list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersection(undefined); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersection(null); // $ExpectType CollectionChain<AbcObject>
    fp.intersection(list, list); // $ExpectType AbcObject[]
    fp.intersection(list)(list); // $ExpectType AbcObject[]
}

// _.intersectionBy
{
    const list: _.List<AbcObject> = anything;

    _.intersectionBy(list, list); // $ExpectType AbcObject[]
    _.intersectionBy(list, list, list); // $ExpectType AbcObject[]
    _.intersectionBy(list, list, "a"); // $ExpectType AbcObject[]
    _.intersectionBy(list, list, list, { a: 42 }); // $ExpectType AbcObject[]
    _.intersectionBy(list, list, ["a", 42]); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.intersectionBy(list, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType AbcObject[]
    _.intersectionBy(list, list, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType AbcObject[]
    _.intersectionBy(...[list], (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    _(list).intersectionBy(list); // $ExpectType Collection<AbcObject>
    _(list).intersectionBy(list, "a"); // $ExpectType Collection<AbcObject>
    _(list).intersectionBy(list, list, { a: 42 }); // $ExpectType Collection<AbcObject>
    _(list).intersectionBy(list, ["a", 42]); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return 1;
    });

    _.chain(list).intersectionBy(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionBy(list, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionBy(list, list, { a: 42 }); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionBy(list, ["a", 42]); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return null;
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionBy(...[list], (value) => {
        value; // $ExpectType AbcObject
        return null;
    });

    fp.intersectionBy("a", list, list); // $ExpectType AbcObject[]
    fp.intersectionBy("a", list, list); // $ExpectType AbcObject[]
    fp.intersectionBy({ a: 42 }, list, list); // $ExpectType AbcObject[]
    fp.intersectionBy(["a", 42], list, list); // $ExpectType AbcObject[]
    fp.intersectionBy((value: AbcObject) => 0, list, list); // $ExpectType AbcObject[]

    interface T1 {
        a: string;
        b: string;
    }
    interface T2 {
        a: string;
        b: number;
    }
    const t1: T1 = { a: "a", b: "b" };
    const t2: T2 = { a: "a", b: 1 };
    // $ExpectType T1[]
    _.intersectionBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return undefined;
    });
    // $ExpectType Collection<T1>
    _([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });
    // $ExpectType CollectionChain<T1>
    _.chain([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });
}

// _.intersectionWith
{
    const list: _.List<AbcObject> = anything;

    _.intersectionWith(list, list); // $ExpectType AbcObject[]
    _.intersectionWith(list, list, list); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.intersectionWith(list, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType AbcObject[]
    _.intersectionWith(list, list, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType AbcObject[]
    _.intersectionWith(...[list, list], (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType never
        return true;
    });

    _(list).intersectionWith(list); // $ExpectType Collection<AbcObject>
    _(list).intersectionWith(list, list); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    _.chain(list).intersectionWith(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionWith(list, list); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    fp.intersectionWith((a: AbcObject, b: AbcObject) => true, list, list); // $ExpectType AbcObject[]
    fp.intersectionWith((a: AbcObject, b: AbcObject) => true)(list)(list); // $ExpectType AbcObject[]

    interface T1 {
        a: string;
        b: string;
    }
    interface T2 {
        a: string;
        b: number;
    }
    const t1: T1 = { a: "a", b: "b" };
    const t2: T2 = { a: "a", b: 1 };
    // $ExpectType T1[]
    _.intersectionWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType Collection<T1>
    _([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType CollectionChain<T1>
    _.chain([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });

    fp.intersectionWith((a: T1, b: T2) => true)([t1])([t2]); // $ExpectType T1[]
}

// _.join
{
    const list: _.List<string> | null | undefined = anything;

    _.join("abc"); // $ExpectType string
    _.join("abc", "_"); // $ExpectType string
    _.join(list); // $ExpectType string
    _.join(list, "_"); // $ExpectType string

    _("abc").join(); // $ExpectType string
    _("abc").join("_"); // $ExpectType string
    _(list).join(); // $ExpectType string
    _(list).join("_"); // $ExpectType string

    _.chain("abc").join(); // $ExpectType StringChain
    _.chain("abc").join("_"); // $ExpectType StringChain
    _.chain(list).join(); // $ExpectType StringChain
    _.chain(list).join("_"); // $ExpectType StringChain

    fp.join("_", "abc"); // $ExpectType string
    fp.join("_")(list); // $ExpectType string
}

// _.last
{
    _.last("abc"); // $ExpectType string | undefined
    _.last(list); // $ExpectType AbcObject | undefined

    _("abc").last(); // $ExpectType string | undefined
    _(list).last(); // $ExpectType AbcObject | undefined

    _.chain("abc").last(); // $ExpectType StringNullableChain
    _.chain(list).last(); // $ExpectType ObjectChain<AbcObject>

    fp.last("abc"); // $ExpectType string | undefined
    fp.last(list); // $ExpectType AbcObject | undefined
}

// _.nth
{
    _.nth(list, 42); // $ExpectType AbcObject | undefined
    _(list).nth(42); // $ExpectType AbcObject | undefined
    _.chain(list).nth(42); // $ExpectType ObjectChain<AbcObject>

    fp.nth(42, list); // $ExpectType AbcObject | undefined
    fp.nth(42)(list); // $ExpectType AbcObject | undefined
}

// _.pull
{
    const array: AbcObject[] = [];
    const list: _.List<AbcObject> = [];

    _.pull(array); // $ExpectType AbcObject[]
    _.pull(array, abcObject); // $ExpectType AbcObject[]
    _.pull(array, abcObject, abcObject, abcObject); // $ExpectType AbcObject[]
    _.pull(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pull(list, abcObject); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pull(list, abcObject, abcObject, abcObject); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    _(array).pull(); // $ExpectType Collection<AbcObject>
    _(array).pull(abcObject); // $ExpectType Collection<AbcObject>
    _(array).pull(abcObject, abcObject, abcObject); // $ExpectType Collection<AbcObject>
    _(list).pull(); // $ExpectType Collection<AbcObject>
    _(list).pull(abcObject); // $ExpectType Collection<AbcObject>
    _(list).pull(abcObject, abcObject, abcObject); // $ExpectType Collection<AbcObject>

    _.chain(array).pull(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pull(abcObject); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pull(abcObject, abcObject, abcObject); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pull(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pull(abcObject); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pull(abcObject, abcObject, abcObject); // $ExpectType CollectionChain<AbcObject>

    fp.pull(abcObject, array); // $ExpectType AbcObject[]
    fp.pull(abcObject)(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
}

// _.pullAt
{
    const array: AbcObject[] = [];
    const list: _.List<AbcObject> = [];

    _.pullAt(array); // $ExpectType AbcObject[]
    _.pullAt(array, 1); // $ExpectType AbcObject[]
    _.pullAt(array, [2, 3], 4); // $ExpectType AbcObject[]
    _.pullAt(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAt(list, 1); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAt(list, [2, 3], 4); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    _(array).pullAt(); // $ExpectType Collection<AbcObject>
    _(array).pullAt(1); // $ExpectType Collection<AbcObject>
    _(array).pullAt([2, 3], 4); // $ExpectType Collection<AbcObject>
    _(list).pullAt(); // $ExpectType Collection<AbcObject>
    _(list).pullAt(1); // $ExpectType Collection<AbcObject>
    _(list).pullAt([2, 3], 4); // $ExpectType Collection<AbcObject>

    _.chain(array).pullAt(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAt(1); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAt([2, 3], 4); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAt(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAt(1); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAt([2, 3], 4); // $ExpectType CollectionChain<AbcObject>

    fp.pullAt(1, array); // $ExpectType AbcObject[]
    fp.pullAt([2, 3], array); // $ExpectType AbcObject[]
    fp.pullAt(1, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAt([2, 3], list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAt(1)(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
}

// _.pullAll
{
    const array: AbcObject[] = anything;
    const list: _.List<AbcObject> = anything;
    const values: _.List<AbcObject> = anything;

    _.pullAll(array); // $ExpectType AbcObject[]
    _.pullAll(array, values); // $ExpectType AbcObject[]
    _.pullAll(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAll(list, values); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    _(array).pullAll(); // $ExpectType Collection<AbcObject>
    _(array).pullAll(values); // $ExpectType Collection<AbcObject>
    _(list).pullAll(); // $ExpectType Collection<AbcObject>
    _(list).pullAll(values); // $ExpectType Collection<AbcObject>

    _.chain(array).pullAll(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAll(values); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAll(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAll(values); // $ExpectType CollectionChain<AbcObject>

    fp.pullAll(values, array); // $ExpectType AbcObject[]
    fp.pullAll(values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAll(values)(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
}

// _.pullAllBy
// _.pullAllWith
{
    const array: AbcObject[] = anything;
    const list: _.List<AbcObject> = anything;
    const values: _.List<AbcObject> = anything;

    _.pullAllBy(array); // $ExpectType AbcObject[]
    _.pullAllBy(array, values, "a"); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values, (value) => {
        value; // $ExpectType AbcObject
        return [];
    });

    _.pullAllBy(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllBy(list, values); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllBy(list, values, "a"); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllBy(list, values, { a: 42 }); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllBy(list, values, ["a", 42]); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllBy(list, values, (value) => {
        value; // $ExpectType AbcObject
        return () => {};
    });

    _(array).pullAllBy(); // $ExpectType Collection<AbcObject>
    _(array).pullAllBy(values, "a"); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(array).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    _(list).pullAllBy(); // $ExpectType Collection<AbcObject>
    _(list).pullAllBy(values, "a"); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    _.chain(array).pullAllBy(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAllBy(values, "a"); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    _.chain(list).pullAllBy(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAllBy(values, "a"); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    fp.pullAllBy("a", values, array); // $ExpectType AbcObject[]
    fp.pullAllBy({ a: 42 }, values, array); // $ExpectType AbcObject[]
    fp.pullAllBy(["a", 42], values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true, values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true, values)(array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true)(values)(array); // $ExpectType AbcObject[]
    fp.pullAllBy("a", values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy({ a: 42 }, values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy(["a", 42], values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy((value: AbcObject) => true, values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy((value: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy((value: AbcObject) => true, values)(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllBy((value: AbcObject) => true)(values)(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    interface T1 {
        a: string;
        b: string;
    }
    interface T2 {
        a: string;
        b: number;
    }
    const t1: T1 = { a: "a", b: "b" };
    const t2: T2 = { a: "a", b: 1 };
    // $ExpectType T1[]
    _.pullAllBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
    // $ExpectType Collection<T1>
    _([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
    // $ExpectType CollectionChain<T1>
    _.chain([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });

    fp.pullAllBy<T1, T2>((value: T1 | T2) => value.a, [t2], [t1]); // $ExpectType T1[]
    fp.pullAllBy((value: T1 | T2) => value.a)([t2])([t1]); // $ExpectType (T1 | T2)[]

    _.pullAllWith(array); // $ExpectType AbcObject[]
    _.pullAllWith(array, values); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.pullAllWith(array, values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    _.pullAllWith(list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.pullAllWith(list, values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    _(array).pullAllWith(); // $ExpectType Collection<AbcObject>
    _(array).pullAllWith(values); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(array).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    _(list).pullAllWith(); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<AbcObject>
    _(list).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    _.chain(array).pullAllWith(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAllWith(values); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    _.chain(list).pullAllWith(); // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    fp.pullAllWith((a, b) => true, values, array); // $ExpectType AbcObject[]
    fp.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    fp.pullAllWith((a, b) => true, values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>

    // $ExpectType T1[]
    _.pullAllWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType Collection<T1>
    _([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType CollectionChain<T1>
    _.chain([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });

    fp.pullAllWith((a, b) => a.a === b.a, [t2], [t1]); // $ExpectType T1[]
    fp.pullAllWith((a: T1, b: T2) => a.a === b.a)([t2], [t1]); // $ExpectType T1[]
}

// _.remove
{
    const list: _.List<AbcObject> = [];

    _.remove(list); // $ExpectType AbcObject[]
    _.remove(list, listIterator); // $ExpectType AbcObject[]
    _.remove(list, ""); // $ExpectType AbcObject[]
    _.remove(list, { a: 42 }); // $ExpectType AbcObject[]

    _(list).remove(); // $ExpectType Collection<AbcObject>
    _(list).remove(listIterator); // $ExpectType Collection<AbcObject>
    _(list).remove(""); // $ExpectType Collection<AbcObject>
    _(list).remove({ a: 42 }); // $ExpectType Collection<AbcObject>

    _.chain(list).remove(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).remove(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).remove(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).remove({ a: 42 }); // $ExpectType CollectionChain<AbcObject>

    fp.remove(valueIterator, list); // $ExpectType AbcObject[]
    fp.remove(valueIterator)(list); // $ExpectType AbcObject[]
    fp.remove("", list); // $ExpectType AbcObject[]
    fp.remove({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.tail
{
    _.tail(list); // $ExpectType AbcObject[]
    _(list).tail(); // $ExpectType Collection<AbcObject>
    _.chain(list).tail(); // $ExpectType CollectionChain<AbcObject>
    fp.tail(list); // $ExpectType AbcObject[]
}

// _.slice
{
    _.slice(array); // $ExpectType AbcObject[]
    _.slice(array, 42); // $ExpectType AbcObject[]
    _.slice(array, 42, 42); // $ExpectType AbcObject[]
    _(array).slice(); // $ExpectType Collection<AbcObject>
    _(array).slice(42, 42); // $ExpectType Collection<AbcObject>
    _.chain(array).slice(); // $ExpectType CollectionChain<AbcObject>
    _.chain(array).slice(42, 42); // $ExpectType CollectionChain<AbcObject>
    fp.slice(0, 10, array); // $ExpectType AbcObject[]
    fp.slice(0)(10, array); // $ExpectType AbcObject[]
    fp.slice(0)(10)(array); // $ExpectType AbcObject[]
}

// _.sortedIndexBy
// _.sortedLastIndexBy
{
    _.sortedIndexBy(list, abcObject, valueIterator); // $ExpectType number
    _.sortedIndexBy(list, abcObject, ""); // $ExpectType number
    _.sortedIndexBy(list, abcObject, { a: 42 }); // $ExpectType number
    _(list).sortedIndexBy(abcObject, valueIterator); // $ExpectType number
    _(list).sortedIndexBy(abcObject, ""); // $ExpectType number
    _(list).sortedIndexBy(abcObject, { a: 42 }); // $ExpectType number
    _.chain(list).sortedIndexBy(abcObject, valueIterator); // $ExpectType PrimitiveChain<number>
    _.chain(list).sortedIndexBy(abcObject, ""); // $ExpectType PrimitiveChain<number>
    _.chain(list).sortedIndexBy(abcObject, { a: 42 }); // $ExpectType PrimitiveChain<number>
    fp.sortedIndexBy(valueIterator, abcObject, list); // $ExpectType number
    fp.sortedIndexBy(valueIterator)(abcObject)(list); // $ExpectType number
    fp.sortedIndexBy("a", abcObject, list); // $ExpectType number
    fp.sortedIndexBy({ a: 42 }, abcObject, list); // $ExpectType number

    _.sortedLastIndexBy(list, abcObject, valueIterator); // $ExpectType number
    _.sortedLastIndexBy(list, abcObject, ""); // $ExpectType number
    _.sortedLastIndexBy(list, abcObject, { a: 42 }); // $ExpectType number
    _(list).sortedLastIndexBy(abcObject, valueIterator); // $ExpectType number
    _(list).sortedLastIndexBy(abcObject, ""); // $ExpectType number
    _(list).sortedLastIndexBy(abcObject, { a: 42 }); // $ExpectType number
    _.chain(list).sortedLastIndexBy(abcObject, valueIterator); // $ExpectType PrimitiveChain<number>
    _.chain(list).sortedLastIndexBy(abcObject, ""); // $ExpectType PrimitiveChain<number>
    _.chain(list).sortedLastIndexBy(abcObject, { a: 42 }); // $ExpectType PrimitiveChain<number>
    fp.sortedLastIndexBy(valueIterator, abcObject, list); // $ExpectType number
    fp.sortedLastIndexBy(valueIterator)(abcObject)(list); // $ExpectType number
    fp.sortedLastIndexBy("a", abcObject, list); // $ExpectType number
    fp.sortedLastIndexBy({ a: 42 }, abcObject, list); // $ExpectType number
}

// _.sortedIndex
// _.sortedLastIndex
{
    _.sortedIndex(list, abcObject); // $ExpectType number
    _(list).sortedIndex(abcObject); // $ExpectType number
    _.chain(list).sortedIndex(abcObject); // $ExpectType PrimitiveChain<number>
    fp.sortedIndex(abcObject, list); // $ExpectType number
    fp.sortedIndex(abcObject)(list); // $ExpectType number

    _.sortedLastIndex(list, abcObject); // $ExpectType number
    _(list).sortedLastIndex(abcObject); // $ExpectType number
    _.chain(list).sortedLastIndex(abcObject); // $ExpectType PrimitiveChain<number>
    fp.sortedLastIndex(abcObject, list); // $ExpectType number
    fp.sortedLastIndex(abcObject)(list); // $ExpectType number
}

// _.take
// _.takeRight
{
    _.take(list); // $ExpectType AbcObject[]
    _.take(list, 42); // $ExpectType AbcObject[]
    _(list).take(); // $ExpectType Collection<AbcObject>
    _(list).take(42); // $ExpectType Collection<AbcObject>
    _.chain(list).take(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).take(42); // $ExpectType CollectionChain<AbcObject>
    fp.take(42, list); // $ExpectType AbcObject[]
    fp.take(42)(list); // $ExpectType AbcObject[]

    _.takeRight(list); // $ExpectType AbcObject[]
    _.takeRight(list, 42); // $ExpectType AbcObject[]
    _(list).takeRight(); // $ExpectType Collection<AbcObject>
    _(list).takeRight(42); // $ExpectType Collection<AbcObject>
    _.chain(list).takeRight(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeRight(42); // $ExpectType CollectionChain<AbcObject>
    fp.takeRight(42, list); // $ExpectType AbcObject[]
    fp.takeRight(42)(list); // $ExpectType AbcObject[]
}

// _.takeWhile
// _.takeRightWhile
{
    _.takeWhile(list); // $ExpectType AbcObject[]
    _.takeWhile(list, listIterator); // $ExpectType AbcObject[]
    _.takeWhile(list, ""); // $ExpectType AbcObject[]
    _.takeWhile(list, { a: 42 }); // $ExpectType AbcObject[]

    _(list).takeWhile(); // $ExpectType Collection<AbcObject>
    _(list).takeWhile(listIterator); // $ExpectType Collection<AbcObject>
    _(list).takeWhile(""); // $ExpectType Collection<AbcObject>
    _(list).takeWhile({ a: 42 }); // $ExpectType Collection<AbcObject>

    _.chain(list).takeWhile(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeWhile(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeWhile(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeWhile({ a: 42 }); // $ExpectType CollectionChain<AbcObject>

    fp.takeWhile(valueIterator, list); // $ExpectType AbcObject[]
    fp.takeWhile(valueIterator)(list); // $ExpectType AbcObject[]
    fp.takeWhile("a", list); // $ExpectType AbcObject[]
    fp.takeWhile({ a: 42 }, list); // $ExpectType AbcObject[]

    _.takeRightWhile(list); // $ExpectType AbcObject[]
    _.takeRightWhile(list, listIterator); // $ExpectType AbcObject[]
    _.takeRightWhile(list, ""); // $ExpectType AbcObject[]
    _.takeRightWhile(list, { a: 42 }); // $ExpectType AbcObject[]

    _(list).takeRightWhile(); // $ExpectType Collection<AbcObject>
    _(list).takeRightWhile(listIterator); // $ExpectType Collection<AbcObject>
    _(list).takeRightWhile(""); // $ExpectType Collection<AbcObject>
    _(list).takeRightWhile({ a: 42 }); // $ExpectType Collection<AbcObject>

    _.chain(list).takeRightWhile(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeRightWhile(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeRightWhile(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).takeRightWhile({ a: 42 }); // $ExpectType CollectionChain<AbcObject>

    fp.takeRightWhile(valueIterator, list); // $ExpectType AbcObject[]
    fp.takeRightWhile(valueIterator)(list); // $ExpectType AbcObject[]
    fp.takeRightWhile("a", list); // $ExpectType AbcObject[]
    fp.takeRightWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.union
{
    _.union(list); // $ExpectType AbcObject[]
    _.union(list, list); // $ExpectType AbcObject[]
    _.union(list, list, list); // $ExpectType AbcObject[]

    _(list).union(); // $ExpectType Collection<AbcObject>
    _(list).union(list); // $ExpectType Collection<AbcObject>
    _(list).union(list, list); // $ExpectType Collection<AbcObject>

    _.chain(list).union(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).union(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).union(list, list); // $ExpectType CollectionChain<AbcObject>

    fp.union(list, list); // $ExpectType AbcObject[]
    fp.union(list)(list); // $ExpectType AbcObject[]
}

// _.unionBy
{
    _.unionBy(list, list); // $ExpectType AbcObject[]
    _.unionBy(list, list, valueIterator); // $ExpectType AbcObject[]
    _.unionBy(list, list, list, list, list, list, valueIterator); // $ExpectType AbcObject[]
    _.unionBy(list, list, "a"); // $ExpectType AbcObject[]
    _.unionBy(list, list, list, list, list, list, "a"); // $ExpectType AbcObject[]
    _.unionBy(list, list, {a: 1}); // $ExpectType AbcObject[]
    _.unionBy(list, list, list, list, list, list, {a: 1}); // $ExpectType AbcObject[]

    _(list).unionBy(list); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, valueIterator); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, list, list, list, list, valueIterator); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, "a"); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, list, list, list, list, "a"); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, {a: 1}); // $ExpectType Collection<AbcObject>
    _(list).unionBy(list, list, list, list, list, {a: 1}); // $ExpectType Collection<AbcObject>

    _.chain(list).unionBy(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, list, list, list, list, valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, list, list, list, list, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, {a: 1}); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).unionBy(list, list, list, list, list, {a: 1}); // $ExpectType CollectionChain<AbcObject>

    fp.unionBy(valueIterator, list, list); // $ExpectType AbcObject[]
    fp.unionBy(valueIterator)(list)(list); // $ExpectType AbcObject[]
    fp.unionBy("a", list, list); // $ExpectType AbcObject[]
    fp.unionBy({ a: 1 }, list, list); // $ExpectType AbcObject[]
}

// _.uniq
// _.sortedUniq
{
    _.uniq("abc"); // $ExpectType string[]
    _.uniq(list); // $ExpectType AbcObject[]
    _(list).uniq(); // $ExpectType Collection<AbcObject>
    _.chain(list).uniq(); // $ExpectType CollectionChain<AbcObject>
    fp.uniq("abc"); // $ExpectType string[]
    fp.uniq(list); // $ExpectType AbcObject[]

    _.sortedUniq("abc"); // $ExpectType string[]
    _.sortedUniq(list); // $ExpectType AbcObject[]
    _(list).sortedUniq(); // $ExpectType Collection<AbcObject>
    _.chain(list).sortedUniq(); // $ExpectType CollectionChain<AbcObject>
    fp.sortedUniq("abc"); // $ExpectType string[]
    fp.sortedUniq(list); // $ExpectType AbcObject[]
}

// _.uniqBy
// _.sortedUniqBy
{
    _.uniqBy("abc", stringIterator); // $ExpectType string[]
    _.uniqBy(list, valueIterator); // $ExpectType AbcObject[]
    _.uniqBy(list, "a"); // $ExpectType AbcObject[]
    _(list).uniqBy(valueIterator); // $ExpectType Collection<AbcObject>
    _(list).uniqBy("a"); // $ExpectType Collection<AbcObject>
    _.chain(list).uniqBy(valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).uniqBy("a"); // $ExpectType CollectionChain<AbcObject>

    fp.uniqBy(stringIterator, "abc"); // $ExpectType string[]
    fp.uniqBy(valueIterator, list); // $ExpectType AbcObject[]
    fp.uniqBy(valueIterator)(list); // $ExpectType AbcObject[]
    fp.uniqBy("a", list); // $ExpectType AbcObject[]

    _.sortedUniqBy("abc", stringIterator); // $ExpectType string[]
    _.sortedUniqBy(list, valueIterator); // $ExpectType AbcObject[]
    _.sortedUniqBy(list, "a"); // $ExpectType AbcObject[]
    _(list).sortedUniqBy(valueIterator); // $ExpectType Collection<AbcObject>
    _(list).sortedUniqBy("a"); // $ExpectType Collection<AbcObject>
    _.chain(list).sortedUniqBy(valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortedUniqBy("a"); // $ExpectType CollectionChain<AbcObject>

    fp.sortedUniqBy(stringIterator, "abc"); // $ExpectType string[]
    fp.sortedUniqBy(valueIterator, list); // $ExpectType AbcObject[]
    fp.sortedUniqBy(valueIterator)(list); // $ExpectType AbcObject[]
    fp.sortedUniqBy("a", list); // $ExpectType AbcObject[]
}

// _.unzip
{
    const list: _.List<_.List<AbcObject>> | null | undefined = anything;

    _.unzip(list); // $ExpectType AbcObject[][]
    _(list).unzip(); // $ExpectType Collection<AbcObject[]>
    _.chain(list).unzip(); // $ExpectType CollectionChain<AbcObject[]>
    fp.unzip(list); // $ExpectType AbcObject[][]
}

// _.unzipWith
{
    const list: _.List<_.List<AbcObject>> | null | undefined = anything;

    _.unzipWith(list); // $ExpectType AbcObject[][]
    // $ExpectType number[]
    _.unzipWith(list, (...group) => {
        group; // $ExpectType AbcObject[]
        return 1;
    });
    // $ExpectType boolean[]
    _.unzipWith(list, (value1, value2, value3) => {
        value1; // $ExpectType AbcObject
        value2; // $ExpectType AbcObject
        value3; // $ExpectType AbcObject
        return true;
    });
    _(list).unzipWith(); // $ExpectType Collection<AbcObject[]>
    // $ExpectType Collection<number>
    _(list).unzipWith((...group) => {
        group; // $ExpectType AbcObject[]
        return 1;
    });
    _.chain(list).unzipWith(); // $ExpectType CollectionChain<AbcObject[]>
    // $ExpectType CollectionChain<number>
    _.chain(list).unzipWith((...group) => {
        group; // $ExpectType AbcObject[]
        return 1;
    });

    fp.unzipWith((...group: AbcObject[]) => 1, list); // $ExpectType number[]
    fp.unzipWith((...group: AbcObject[]) => 1)(list); // $ExpectType number[]
}

// _.without
{
    const list: _.List<number> | null | undefined = anything;

    _.without(list); // $ExpectType number[]
    _.without(list, 1); // $ExpectType number[]
    _.without(list, 1, 2, 3); // $ExpectType number[]

    _(list).without(); // $ExpectType Collection<number>
    _(list).without(1); // $ExpectType Collection<number>
    _(list).without(1, 2, 3); // $ExpectType Collection<number>

    _.chain(list).without(); // $ExpectType CollectionChain<number>
    _.chain(list).without(1); // $ExpectType CollectionChain<number>
    _.chain(list).without(1, 2, 3); // $ExpectType CollectionChain<number>

    fp.without([1, 2], list);
    fp.without([1, 2])(list);
}

// _.xor
{
    _.xor(list); // $ExpectType AbcObject[]
    _.xor(list, list); // $ExpectType AbcObject[]
    _.xor(list, list, list); // $ExpectType AbcObject[]

    _(list).xor(); // $ExpectType Collection<AbcObject>
    _(list).xor(list); // $ExpectType Collection<AbcObject>
    _(list).xor(list, list); // $ExpectType Collection<AbcObject>

    _.chain(list).xor(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xor(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xor(list, list); // $ExpectType CollectionChain<AbcObject>

    fp.xor(list, list); // $ExpectType AbcObject[]
    fp.xor(list)(list); // $ExpectType AbcObject[]
}

// _.xorBy
{
    _.xorBy(list, list); // $ExpectType AbcObject[]
    _.xorBy(list, list, valueIterator); // $ExpectType AbcObject[]
    _.xorBy(list, list, list, list, list, list, valueIterator); // $ExpectType AbcObject[]
    _.xorBy(list, list, "a"); // $ExpectType AbcObject[]
    _.xorBy(list, list, list, list, list, list, "a"); // $ExpectType AbcObject[]
    _.xorBy(list, list, {a: 1}); // $ExpectType AbcObject[]
    _.xorBy(list, list, list, list, list, list, {a: 1}); // $ExpectType AbcObject[]

    _(list).xorBy(list); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, valueIterator); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, list, list, list, list, valueIterator); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, "a"); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, list, list, list, list, "a"); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, {a: 1}); // $ExpectType Collection<AbcObject>
    _(list).xorBy(list, list, list, list, list, {a: 1}); // $ExpectType Collection<AbcObject>

    _.chain(list).xorBy(list); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, list, list, list, list, valueIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, list, list, list, list, "a"); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, {a: 1}); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).xorBy(list, list, list, list, list, {a: 1}); // $ExpectType CollectionChain<AbcObject>

    fp.xorBy(valueIterator, list, list); // $ExpectType AbcObject[]
    fp.xorBy(valueIterator)(list)(list); // $ExpectType AbcObject[]
    fp.xorBy("a", list, list); // $ExpectType AbcObject[]
    fp.xorBy({ a: 1 }, list, list); // $ExpectType AbcObject[]
}

// _.zip
{
    _.zip(list); // $ExpectType (AbcObject | undefined)[][]
    _.zip(list, list); // $ExpectType (AbcObject | undefined)[][]
    _.zip(list, list, list, list, list, list); // $ExpectType (AbcObject | undefined)[][]
    _.zip([1, 2], [3, 4]); // $ExpectType [number | undefined, number | undefined][]
    _.zip([1, 2], ["a", "b"]); // $ExpectType [number | undefined, string | undefined][]
    _.zip([1, 2], ["a", "b"], [true, false]); // $ExpectType [number | undefined, string | undefined, boolean | undefined][]

    _(list).zip(list); // $ExpectType Collection<(AbcObject | undefined)[]>
    _(list).zip(list, list, list, list, list); // $ExpectType Collection<(AbcObject | undefined)[]>

    _.chain(list).zip(list); // $ExpectType CollectionChain<(AbcObject | undefined)[]>
    _.chain(list).zip(list, list, list, list, list); // $ExpectType CollectionChain<(AbcObject | undefined)[]>

    const list2: _.List<AbcObject> = anything;
    fp.zip(list2, list2); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    fp.zip(list2)(list2); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    fp.zip(["a", "b"], [1, 2]); // $ExpectType [string | undefined, number | undefined][]
    fp.zipAll<AbcObject>([list2, list2, list2]); // $ExpectType (AbcObject | undefined)[][]
    fp.zipAll<number | string | boolean>([[1, 2], ["a", "b"], [true, false]]); // $ExpectType (string | number | boolean | undefined)[][]
}

// _.zipObject
// _.zipObjectDeep
{
    const listOfKeys: _.List<string> = anything;
    const listOfValues: _.List<boolean> = anything;

    _.zipObject(["a", "b"], [1, 2]); // $ExpectType Dictionary<number>
    _.zipObject(listOfKeys, listOfValues); // $ExpectType Dictionary<boolean>
     _(listOfKeys).zipObject(listOfValues); // $ExpectType Object<Dictionary<boolean>>
     _.chain(listOfKeys).zipObject(listOfValues); // $ExpectType ObjectChain<Dictionary<boolean>>
    fp.zipObject(["a", "b"], [1, 2]); // $ExpectType Dictionary<number>
    fp.zipObject(listOfKeys)(listOfValues); // $ExpectType Dictionary<boolean>

    _.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]); // $ExpectType object
    _.zipObjectDeep(listOfKeys, listOfValues); // $ExpectType object
    _(listOfKeys).zipObjectDeep(listOfValues); // $ExpectType Object<object>
    _.chain(listOfKeys).zipObjectDeep(listOfValues); // $ExpectType ObjectChain<object>
    fp.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]); // $ExpectType object
    fp.zipObjectDeep(listOfKeys)(listOfValues); // $ExpectType object
}

// _.zipWith
{
    // $ExpectType string[]
    _.zipWith([1, 2], (value1) => {
        value1; // $ExpectType number
        return "";
    });
    // $ExpectType string[]
    _.zipWith([1, 2], [1, 2], (value1, value2) => {
        value1; // $ExpectType number
        value2; // $ExpectType number
        return "";
    });
    // $ExpectType string[]
    _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5, value6) => {
        value1; // $ExpectType number
        value2; // $ExpectType number
        value3; // $ExpectType number
        value4; // $ExpectType number
        value5; // $ExpectType number
        value6; // $ExpectType number
        return "";
    });
    // $ExpectType string[]
    _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
        group; // $ExpectType number[]
        return "";
    });
    // $ExpectType string[]
    _.zipWith([1, 2], ["a", "b"], [true, false], (value1, value2, value3) => {
        value1; // $ExpectType number
        value2; // $ExpectType string
        value3; // $ExpectType boolean
        return "";
    });

    const values = [[1, 2], [1, 2], [1, 2]];
    _.zipWith(...values, (...group: number[]) => ""); // $ExpectType string[]

    // $ExpectType Collection<string>
    _([1, 2]).zipWith((value1) => {
        value1; // $ExpectType number
        return "";
    });
    // $ExpectType Collection<string>
    _([1, 2]).zipWith([1, 2], (value1, value2) => {
        value1; // $ExpectType number
        value2; // $ExpectType number
        return "";
    });
    // $ExpectType Collection<string>
    _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
        group; // $ExpectType number[]
        return "";
    });
    // $ExpectType Collection<string>
    _([1, 2]).zipWith(["a", "b"], [true, false], (value1, value2, value3) => {
        value1; // $ExpectType number
        value2; // $ExpectType string
        value3; // $ExpectType boolean
        return "";
    });

    // $ExpectType CollectionChain<string>
    _.chain([1, 2]).zipWith((value1) => {
        value1; // $ExpectType number
        return "";
    });
    // $ExpectType CollectionChain<string>
    _.chain([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
        group; // $ExpectType number[]
        return "";
    });
    // $ExpectType CollectionChain<string>
    _.chain([1, 2]).zipWith(["a", "b"], [true, false], (value1, value2, value3) => {
        value1; // $ExpectType number
        value2; // $ExpectType string
        value3; // $ExpectType boolean
        return "";
    });

    fp.zipWith((value1, value2) => "a", [1, 2], [1, 2]); // $ExpectType string[]
    fp.zipWith((value1: number, value2: number) => "a")([1, 2])([1, 2]); // $ExpectType string[]
}

/**************
 * Collection *
 **************/

// _.at
{
    const abcObject: AbcObject | null | undefined = anything;

    _.at(list, 0, "1", [2], ["3"], [4, "5"]); // $ExpectType AbcObject[]
    _.at(numericDictionary, 0, "1", [2], ["3"], [4, "5"]); // $ExpectType AbcObject[]
    _.at(dictionary, "a", ["b", "c"]); // $ExpectType AbcObject[]
    _.at(abcObject, "a", ["b", "c"]); // $ExpectType (string | number | boolean)[]

    _(list).at(0, "1", [2], ["3"], [4, "5"]); // $ExpectType Collection<AbcObject>
    _(numericDictionary).at(0, 1, [2], [3], [4, 5]); // $ExpectType Collection<AbcObject>
    _(dictionary).at("a", ["b", "c"]); // $ExpectType Collection<AbcObject>
    _(abcObject).at("a", ["b", "c"]); // $ExpectType Collection<string | number | boolean>

    _.chain(list).at(0, "1", [2], ["3"], [4, "5"]); // $ExpectType CollectionChain<AbcObject>
    _.chain(numericDictionary).at(0, 1, [2], [3], [4, 5]); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).at("a", ["b", "c"]); // $ExpectType CollectionChain<AbcObject>
    _.chain(abcObject).at("a", ["b", "c"]); // $ExpectType CollectionChain<string | number | boolean>

    fp.at(0, list); // $ExpectType AbcObject[]
    fp.at(0)(list); // $ExpectType AbcObject[]
    fp.at([0, "1"], list); // $ExpectType AbcObject[]
    fp.at("a", abcObject); // $ExpectType (string | number | boolean)[]
}

// _.countBy
{
    _.countBy(""); // $ExpectType Dictionary<number>
    _.countBy("", stringIterator); // $ExpectType Dictionary<number>

    _.countBy(list); // $ExpectType Dictionary<number>
    _.countBy(list, valueIterator); // $ExpectType Dictionary<number>
    _.countBy(list, ""); // $ExpectType Dictionary<number>
    _.countBy(list, { a: 42 }); // $ExpectType Dictionary<number>

    _.countBy(dictionary); // $ExpectType Dictionary<number>
    _.countBy(dictionary, valueIterator); // $ExpectType Dictionary<number>
    _.countBy(dictionary, ""); // $ExpectType Dictionary<number>
    _.countBy(dictionary, { a: 42 }); // $ExpectType Dictionary<number>

    _.countBy(numericDictionary); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, valueIterator); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, ""); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, { a: 42 }); // $ExpectType Dictionary<number>

    _("").countBy(); // $ExpectType Object<Dictionary<number>>
    _("").countBy(stringIterator); // $ExpectType Object<Dictionary<number>>

    _(list).countBy(); // $ExpectType Object<Dictionary<number>>
    _(list).countBy(valueIterator); // $ExpectType Object<Dictionary<number>>
    _(list).countBy(""); // $ExpectType Object<Dictionary<number>>
    _(list).countBy({ a: 42 }); // $ExpectType Object<Dictionary<number>>

    _(dictionary).countBy(); // $ExpectType Object<Dictionary<number>>
    _(dictionary).countBy(valueIterator); // $ExpectType Object<Dictionary<number>>
    _(dictionary).countBy(""); // $ExpectType Object<Dictionary<number>>
    _(dictionary).countBy({ a: 42 }); // $ExpectType Object<Dictionary<number>>

    _(numericDictionary).countBy(); // $ExpectType Object<Dictionary<number>>
    _(numericDictionary).countBy(valueIterator); // $ExpectType Object<Dictionary<number>>
    _(numericDictionary).countBy(""); // $ExpectType Object<Dictionary<number>>
    _(numericDictionary).countBy({ a: 42 }); // $ExpectType Object<Dictionary<number>>

    _.chain("").countBy(); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain("").countBy(stringIterator); // $ExpectType ObjectChain<Dictionary<number>>

    _.chain(list).countBy(); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(list).countBy(valueIterator); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(list).countBy(""); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(list).countBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<number>>

    _.chain(dictionary).countBy(); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(dictionary).countBy(valueIterator); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(dictionary).countBy(""); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(dictionary).countBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<number>>

    _.chain(numericDictionary).countBy(); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(numericDictionary).countBy(valueIterator); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(numericDictionary).countBy(""); // $ExpectType ObjectChain<Dictionary<number>>
    _.chain(numericDictionary).countBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<number>>

    fp.countBy(stringIterator, ""); // $ExpectType Dictionary<number>
    fp.countBy(stringIterator)(""); // $ExpectType Dictionary<number>
    fp.countBy(valueIterator, list); // $ExpectType Dictionary<number>
    fp.countBy("", list); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, list); // $ExpectType Dictionary<number>
    fp.countBy(valueIterator, dictionary); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, dictionary); // $ExpectType Dictionary<number>
    fp.countBy(valueIterator, numericDictionary); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, numericDictionary); // $ExpectType Dictionary<number>
}

// _.every
{
    _.every(list); // $ExpectType boolean
    _.every(list, listIterator); // $ExpectType boolean
    _.every(list, "a"); // $ExpectType boolean
    _.every(list, ["a", 42]); // $ExpectType boolean
    _.every(list, { a: 42 }); // $ExpectType boolean

    _.every(dictionary); // $ExpectType boolean
    _.every(dictionary, dictionaryIterator); // $ExpectType boolean
    _.every(dictionary, "a"); // $ExpectType boolean
    _.every(dictionary, ["a", 42]); // $ExpectType boolean
    _.every(dictionary, { a: 42 }); // $ExpectType boolean

    _.every(numericDictionary); // $ExpectType boolean
    _.every(numericDictionary, numericDictionaryIterator); // $ExpectType boolean
    _.every(numericDictionary, "a"); // $ExpectType boolean
    _.every(numericDictionary, ["a", 42]); // $ExpectType boolean
    _.every(numericDictionary, { a: 42 }); // $ExpectType boolean

    _(list).every(); // $ExpectType boolean
    _(list).every(listIterator); // $ExpectType boolean
    _(list).every("a"); // $ExpectType boolean
    _(list).every(["a", 42]); // $ExpectType boolean
    _(list).every({ a: 42 }); // $ExpectType boolean

    _(dictionary).every(); // $ExpectType boolean
    _(dictionary).every(dictionaryIterator); // $ExpectType boolean
    _(dictionary).every("a"); // $ExpectType boolean
    _(dictionary).every(["a", 42]); // $ExpectType boolean
    _(dictionary).every({ a: 42 }); // $ExpectType boolean

    _(numericDictionary).every(); // $ExpectType boolean
    _(numericDictionary).every(numericDictionaryIterator); // $ExpectType boolean
    _(numericDictionary).every("a"); // $ExpectType boolean
    _(numericDictionary).every(["a", 42]); // $ExpectType boolean
    _(numericDictionary).every({ a: 42 }); // $ExpectType boolean

    _.chain(list).every(); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).every(listIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).every("a"); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).every(["a", 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).every({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    _.chain(dictionary).every(); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).every(dictionaryIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).every("a"); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).every(["a", 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).every({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    _.chain(numericDictionary).every(); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).every(numericDictionaryIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).every("a"); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).every(["a", 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).every({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    fp.every(valueIterator, list); // $ExpectType boolean
    fp.every("a")(list); // $ExpectType boolean
    fp.every({ a: 42 }, list); // $ExpectType boolean
    fp.every(["a", 42], list); // $ExpectType boolean

    fp.every(valueIterator, dictionary); // $ExpectType boolean
    fp.every("a")(dictionary); // $ExpectType boolean
    fp.every({ a: 42 })(dictionary); // $ExpectType boolean
    fp.every(["a", 42])(dictionary); // $ExpectType boolean

    fp.every(valueIterator, numericDictionary); // $ExpectType boolean
    fp.every("a")(numericDictionary); // $ExpectType boolean
    fp.every({ a: 42 })(numericDictionary); // $ExpectType boolean
    fp.every(["a", 42])(numericDictionary); // $ExpectType boolean
}

// _.filter
{
    const stringIterator = (char: string, index: number, string: string) => true;

    _.filter("", stringIterator); // $ExpectType string[]
    _.filter(list, listIterator); // $ExpectType AbcObject[]
    _.filter(list, ""); // $ExpectType AbcObject[]
    _.filter(list, { a: 42 }); // $ExpectType AbcObject[]
    _.filter([{ a: { b: { c: 1 }, other1: "o" }, other2: "p" }], { a: { b: 0 } }); // $ExpectType { a: { b: { c: number; }; other1: string; }; other2: string; }[]
    _.filter(list, ["a", 42]); // $ExpectType AbcObject[]
    _.filter(dictionary, dictionaryIterator); // $ExpectType AbcObject[]
    _.filter(dictionary, ""); // $ExpectType AbcObject[]
    _.filter(dictionary, { a: 42 }); // $ExpectType AbcObject[]
    _.filter(dictionary, ["a", 42]); // $ExpectType AbcObject[]

    _("").filter(stringIterator); // $ExpectType Collection<string>
    _(list).filter(listIterator); // $ExpectType Collection<AbcObject>
    _(list).filter(""); // $ExpectType Collection<AbcObject>
    _(list).filter({ a: 42 }); // $ExpectType Collection<AbcObject>
    _(list).filter(["a", 42]); // $ExpectType Collection<AbcObject>
    _(dictionary).filter(dictionaryIterator); // $ExpectType Collection<AbcObject>
    _(dictionary).filter(""); // $ExpectType Collection<AbcObject>
    _(dictionary).filter({ a: 42 }); // $ExpectType Collection<AbcObject>
    _(dictionary).filter(["a", 42]); // $ExpectType Collection<AbcObject>

    _.chain("").filter(stringIterator); // $ExpectType CollectionChain<string>
    _.chain(list).filter(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).filter(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).filter({ a: 42 }); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).filter(["a", 42]); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).filter(dictionaryIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).filter(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).filter({ a: 42 }); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).filter(["a", 42]); // $ExpectType CollectionChain<AbcObject>

    fp.filter(valueIterator, list); // $ExpectType AbcObject[]
    fp.filter(valueIterator)(list); // $ExpectType AbcObject[]
    fp.filter("", list); // $ExpectType AbcObject[]
    fp.filter({ a: 42 }, list); // $ExpectType AbcObject[]
    fp.filter(["a", 42], list); // $ExpectType AbcObject[]
    fp.filter(valueIterator, dictionary); // $ExpectType AbcObject[]
    fp.filter("", dictionary); // $ExpectType AbcObject[]
    fp.filter({ a: 42 }, dictionary); // $ExpectType AbcObject[]
    fp.filter(["a", 42], dictionary); // $ExpectType AbcObject[]
    fp.filter((s: string) => s === "a")(["a", "b"]); // $ExpectType string[]
    fp.filter((s: string) => s === "a")("ab"); // $ExpectType string[]

    // Test filtering with type guard
    const a2: Array<string | number> | null | undefined = anything;
    const d2: _.Dictionary<string | number> | null | undefined = anything;

    _.filter(a2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
    _.filter(d2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]

    _(a2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType Collection<number>
    _(d2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType Collection<number>

    _.chain(a2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType CollectionChain<number>
    _.chain(d2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType CollectionChain<number>

    fp.filter((item: string | number): item is number => typeof item === "number", a2); // $ExpectType number[]
    fp.filter((item: string | number): item is number => typeof item === "number", d2); // $ExpectType number[]
}

// _.find
// _.findLast
{
    _.find(list); // $ExpectType AbcObject | undefined
    _.find(list, listIterator); // $ExpectType AbcObject | undefined
    _.find(list, listIterator, 1); // $ExpectType AbcObject | undefined
    _.find(list, "a"); // $ExpectType AbcObject | undefined
    _.find(list, "a", 1); // $ExpectType AbcObject | undefined
    _.find(list, { a: 42 }); // $ExpectType AbcObject | undefined
    _.find(list, { a: 42 }, 1); // $ExpectType AbcObject | undefined
    _.find(list, ["a", 5]); // $ExpectType AbcObject | undefined
    _.find(list, ["a", 5], 1); // $ExpectType AbcObject | undefined
    _.find(dictionary); // $ExpectType AbcObject | undefined
    _.find(dictionary, dictionaryIterator); // $ExpectType AbcObject | undefined
    _.find(dictionary, dictionaryIterator, 1); // $ExpectType AbcObject | undefined
    _.find(dictionary, "a"); // $ExpectType AbcObject | undefined
    _.find(dictionary, { a: 42 }); // $ExpectType AbcObject | undefined
    _.find(dictionary, ["a", 5]); // $ExpectType AbcObject | undefined
    _.find([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null); // $ExpectType AbcObject | undefined

    _(list).find(); // $ExpectType AbcObject | undefined
    _(list).find(listIterator); // $ExpectType AbcObject | undefined
    _(list).find(listIterator, 1); // $ExpectType AbcObject | undefined
    _(list).find("a"); // $ExpectType AbcObject | undefined
    _(list).find({ a: 42 }); // $ExpectType AbcObject | undefined
    _(list).find(["a", 5]); // $ExpectType AbcObject | undefined
    _(dictionary).find(); // $ExpectType AbcObject | undefined
    _(dictionary).find(dictionaryIterator); // $ExpectType AbcObject | undefined
    _(dictionary).find(dictionaryIterator, 1); // $ExpectType AbcObject | undefined
    _(dictionary).find("a"); // $ExpectType AbcObject | undefined
    _(dictionary).find({ a: 42 }); // $ExpectType AbcObject | undefined
    _(dictionary).find(["a", 5]); // $ExpectType AbcObject | undefined
    _([anything as AbcObject, null, undefined]).find((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null); // $ExpectType AbcObject | undefined

    _.chain(list).find(); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).find(listIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).find(listIterator, 1); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).find("a"); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).find({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).find(["a", 5]); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find(); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find(dictionaryIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find(dictionaryIterator, 1); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find(""); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).find(["a", 5]); // $ExpectType ObjectChain<AbcObject>
    // $ExpectType ObjectChain<AbcObject>
    _.chain([anything as AbcObject, null, undefined]).find((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);

    fp.find(valueIterator, list); // $ExpectType AbcObject | undefined
    fp.find(valueIterator)(list); // $ExpectType AbcObject | undefined
    fp.find("a", list); // $ExpectType AbcObject | undefined
    fp.find({ a: 42 }, list); // $ExpectType AbcObject | undefined
    fp.find(["a", 42], list); // $ExpectType AbcObject | undefined
    fp.find(valueIterator, dictionary); // $ExpectType AbcObject | undefined
    fp.find(valueIterator)(dictionary); // $ExpectType AbcObject | undefined
    fp.find({ a: 42 }, dictionary); // $ExpectType AbcObject | undefined
    fp.find(["a", 42], dictionary); // $ExpectType AbcObject | undefined
    fp.find((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null, [anything as AbcObject, null, undefined]); // $ExpectType AbcObject | undefined
    fp.findFrom(valueIterator, 1, list); // $ExpectType AbcObject | undefined
    fp.findFrom(valueIterator)(1)(list); // $ExpectType AbcObject | undefined

    _.findLast(list); // $ExpectType AbcObject | undefined
    _.findLast(list, listIterator); // $ExpectType AbcObject | undefined
    _.findLast(list, listIterator, 1); // $ExpectType AbcObject | undefined
    _.findLast(list, "a"); // $ExpectType AbcObject | undefined
    _.findLast(list, "a", 1); // $ExpectType AbcObject | undefined
    _.findLast(list, { a: 42 }); // $ExpectType AbcObject | undefined
    _.findLast(list, { a: 42 }, 1); // $ExpectType AbcObject | undefined
    _.findLast(list, ["a", 5]); // $ExpectType AbcObject | undefined
    _.findLast(list, ["a", 5], 1); // $ExpectType AbcObject | undefined
    _.findLast(dictionary); // $ExpectType AbcObject | undefined
    _.findLast(dictionary, dictionaryIterator); // $ExpectType AbcObject | undefined
    _.findLast(dictionary, dictionaryIterator, 1); // $ExpectType AbcObject | undefined
    _.findLast(dictionary, "a"); // $ExpectType AbcObject | undefined
    _.findLast(dictionary, { a: 42 }); // $ExpectType AbcObject | undefined
    _.findLast(dictionary, ["a", 5]); // $ExpectType AbcObject | undefined
    _.findLast([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null); // $ExpectType AbcObject | undefined

    _(list).findLast(); // $ExpectType AbcObject | undefined
    _(list).findLast(listIterator); // $ExpectType AbcObject | undefined
    _(list).findLast(listIterator, 1); // $ExpectType AbcObject | undefined
    _(list).findLast("a"); // $ExpectType AbcObject | undefined
    _(list).findLast({ a: 42 }); // $ExpectType AbcObject | undefined
    _(list).findLast(["a", 5]); // $ExpectType AbcObject | undefined
    _(dictionary).findLast(); // $ExpectType AbcObject | undefined
    _(dictionary).findLast(dictionaryIterator); // $ExpectType AbcObject | undefined
    _(dictionary).findLast(dictionaryIterator, 1); // $ExpectType AbcObject | undefined
    _(dictionary).findLast("a"); // $ExpectType AbcObject | undefined
    _(dictionary).findLast({ a: 42 }); // $ExpectType AbcObject | undefined
    _(dictionary).findLast(["a", 5]); // $ExpectType AbcObject | undefined
    _([anything as AbcObject, null, undefined]).findLast((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null); // $ExpectType AbcObject | undefined

    _.chain(list).findLast(); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).findLast(listIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).findLast(listIterator, 1); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).findLast("a"); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).findLast({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).findLast(["a", 5]); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast(); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast(dictionaryIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast(dictionaryIterator, 1); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast(""); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    _.chain(dictionary).findLast(["a", 5]); // $ExpectType ObjectChain<AbcObject>
    // $ExpectType ObjectChain<AbcObject>
    _.chain([anything as AbcObject, null, undefined]).findLast((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);

    fp.findLast(valueIterator, list); // $ExpectType AbcObject | undefined
    fp.findLast(valueIterator)(list); // $ExpectType AbcObject | undefined
    fp.findLast("a", list); // $ExpectType AbcObject | undefined
    fp.findLast({ a: 42 }, list); // $ExpectType AbcObject | undefined
    fp.findLast(["a", 42], list); // $ExpectType AbcObject | undefined
    fp.findLast(valueIterator, dictionary); // $ExpectType AbcObject | undefined
    fp.findLast(valueIterator)(dictionary); // $ExpectType AbcObject | undefined
    fp.findLast({ a: 42 }, dictionary); // $ExpectType AbcObject | undefined
    fp.findLast(["a", 42], dictionary); // $ExpectType AbcObject | undefined
    fp.findLast((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null, [anything as AbcObject, null, undefined]); // $ExpectType AbcObject | undefined
    fp.findLastFrom(valueIterator, 1, list); // $ExpectType AbcObject | undefined
    fp.findLastFrom(valueIterator)(1)(list); // $ExpectType AbcObject | undefined
}

// _.flatMap
{
    const numList: _.List<number|number[]> | null | undefined = anything;
    const objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;
    const numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    const objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;
    const numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    const objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    const stringIterator = (value: string, index: number, collection: _.List<string>): string | string[] => "";
    const listIterator = (value: number | number[], index: number, collection: _.List<number | number[]>): number | number[] => 1;
    const dictionaryIterator = (value: number | number[], key: string, collection: _.Dictionary<number | number[]>): number | number[] => 1;
    const numericDictionaryIterator = (value: number | number[], key: string, collection: _.NumericDictionary<number | number[]>): number | number[] => 1;
    const valueIterator = (value: number | number[]): number | number[] => 1;

    _.flatMap("abc"); // $ExpectType string[]
    _.flatMap("abc", stringIterator); // $ExpectType string[]
    _.flatMap(numList); // $ExpectType number[]
    _.flatMap(numList, listIterator); // $ExpectType number[]
    _.flatMap(objList, "a"); // $ExpectType any[]
    _.flatMap(objList, ["a", 42]); // $ExpectType boolean[]
    _.flatMap(objList, { a: 42 }); // $ExpectType boolean[]
    _.flatMap(numDictionary); // $ExpectType number[]
    _.flatMap(numDictionary, dictionaryIterator); // $ExpectType number[]
    _.flatMap(objDictionary, "a"); // $ExpectType any[]
    _.flatMap(objDictionary, ["a", 42]); // $ExpectType boolean[]
    _.flatMap(objDictionary, { a: 42 }); // $ExpectType boolean[]
    _.flatMap(numNumericDictionary); // $ExpectType number[]
    _.flatMap(numNumericDictionary, numericDictionaryIterator); // $ExpectType number[]
    _.flatMap(objNumericDictionary, "a"); // $ExpectType any[]
    _.flatMap(objNumericDictionary, ["a", 42]); // $ExpectType boolean[]
    _.flatMap(objNumericDictionary, { a: 42 }); // $ExpectType boolean[]

    _("abc").flatMap(stringIterator); // $ExpectType Collection<string>
    _(numList).flatMap(); // $ExpectType Collection<number>
    _(numList).flatMap(listIterator); // $ExpectType Collection<number>
    _(objList).flatMap("a"); // $ExpectType Collection<any>
    _(objList).flatMap(["a", 42]); // $ExpectType Collection<boolean>
    _(objList).flatMap({ a: 42 }); // $ExpectType Collection<boolean>
    _(numDictionary).flatMap(dictionaryIterator); // $ExpectType Collection<number>
    _(objDictionary).flatMap("a"); // $ExpectType Collection<any>
    _(numNumericDictionary).flatMap(numericDictionaryIterator); // $ExpectType Collection<number>
    _(objNumericDictionary).flatMap("a"); // $ExpectType Collection<any>

    _.chain("abc").flatMap(stringIterator); // $ExpectType CollectionChain<string>
    _.chain(numList).flatMap(); // $ExpectType CollectionChain<number>
    _.chain(numList).flatMap(listIterator); // $ExpectType CollectionChain<number>
    _.chain(objList).flatMap("a"); // $ExpectType CollectionChain<any>
    _.chain(objList).flatMap(["a", 42]); // $ExpectType CollectionChain<boolean>
    _.chain(objList).flatMap({ a: 42 }); // $ExpectType CollectionChain<boolean>
    _.chain(numDictionary).flatMap(dictionaryIterator); // $ExpectType CollectionChain<number>
    _.chain(objDictionary).flatMap("a"); // $ExpectType CollectionChain<any>
    _.chain(numNumericDictionary).flatMap(numericDictionaryIterator); // $ExpectType CollectionChain<number>
    _.chain(objNumericDictionary).flatMap("a"); // $ExpectType CollectionChain<any>

    fp.flatMap(valueIterator, numList); // $ExpectType number[]
    fp.flatMap(valueIterator)(numList); // $ExpectType number[]
    fp.flatMap("a", objList); // $ExpectType any[]
    fp.flatMap({ a: 42 }, objList); // $ExpectType boolean[]
    fp.flatMap(["a", 42], objList); // $ExpectType boolean[]
    fp.flatMap(valueIterator, numDictionary); // $ExpectType number[]
    fp.flatMap("a", objDictionary); // $ExpectType any[]
    fp.flatMap({ a: 42 }, objDictionary); // $ExpectType boolean[]
    fp.flatMap(["a", 42], objDictionary); // $ExpectType boolean[]
    fp.flatMap(valueIterator, numNumericDictionary); // $ExpectType number[]
    fp.flatMap("a", objNumericDictionary); // $ExpectType any[]
    fp.flatMap({ a: 42 }, objNumericDictionary); // $ExpectType boolean[]
    fp.flatMap(["a", 42], objNumericDictionary); // $ExpectType boolean[]
}

// _.flatMapDeep, _.flatMapDepth
{
    const numList: _.List<number|number[]> | null | undefined = anything;
    const objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;
    const numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    const objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;
    const numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    const objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    const stringIterator = (value: string, index: number, collection: _.List<string>): _.ListOfRecursiveArraysOrValues<string> | string => "";
    const listIterator = (value: number | number[], index: number, collection: _.List<number | number[]>): _.ListOfRecursiveArraysOrValues<number> | number => 1;
    const dictionaryIterator = (value: number | number[], key: string, collection: _.Dictionary<number | number[]>): _.ListOfRecursiveArraysOrValues<number> | number => 1;
    const numericDictionaryIterator = (value: number | number[], key: string, collection: _.NumericDictionary<number | number[]>): _.ListOfRecursiveArraysOrValues<number> | number => 1;
    const valueIterator = (value: number | number[]): _.ListOfRecursiveArraysOrValues<number> | number => 1;

    _.flatMapDeep("abc"); // $ExpectType string[]
    _.flatMapDeep("abc", stringIterator); // $ExpectType string[]
    _.flatMapDeep<number>(numList); // $ExpectType number[]
    _.flatMapDeep(numList, listIterator); // $ExpectType number[]
    _.flatMapDeep(objList, "a"); // $ExpectType any[]
    _.flatMapDeep(objList, ["a", 42]); // $ExpectType boolean[]
    _.flatMapDeep(objList, { a: 42 }); // $ExpectType boolean[]
    _.flatMapDeep<number>(numDictionary); // $ExpectType number[]
    _.flatMapDeep(numDictionary, dictionaryIterator); // $ExpectType number[]
    _.flatMapDeep(objDictionary, "a"); // $ExpectType any[]
    _.flatMapDeep(objDictionary, ["a", 42]); // $ExpectType boolean[]
    _.flatMapDeep(objDictionary, { a: 42 }); // $ExpectType boolean[]
    _.flatMapDeep<number>(numNumericDictionary); // $ExpectType number[]
    _.flatMapDeep(numNumericDictionary, numericDictionaryIterator); // $ExpectType number[]
    _.flatMapDeep(objNumericDictionary, "a"); // $ExpectType any[]
    _.flatMapDeep(objNumericDictionary, ["a", 42]); // $ExpectType boolean[]
    _.flatMapDeep(objNumericDictionary, { a: 42 }); // $ExpectType boolean[]

    _("abc").flatMapDeep(stringIterator); // $ExpectType Collection<string>
    _(numList).flatMapDeep(); // $ExpectType Collection<number | number[]>
    _(numList).flatMapDeep(listIterator); // $ExpectType Collection<number>
    _(objList).flatMapDeep("a"); // $ExpectType Collection<any>
    _(objList).flatMapDeep(["a", 42]); // $ExpectType Collection<boolean>
    _(objList).flatMapDeep({ a: 42 }); // $ExpectType Collection<boolean>
    _(numDictionary).flatMapDeep(dictionaryIterator); // $ExpectType Collection<number>
    _(objDictionary).flatMapDeep("a"); // $ExpectType Collection<any>
    _(numNumericDictionary).flatMapDeep(numericDictionaryIterator); // $ExpectType Collection<number>
    _(objNumericDictionary).flatMapDeep("a"); // $ExpectType Collection<any>

    _.chain("abc").flatMapDeep(stringIterator); // $ExpectType CollectionChain<string>
    _.chain(numList).flatMapDeep(); // $ExpectType CollectionChain<number | number[]>
    _.chain(numList).flatMapDeep(listIterator); // $ExpectType CollectionChain<number>
    _.chain(objList).flatMapDeep("a"); // $ExpectType CollectionChain<any>
    _.chain(objList).flatMapDeep(["a", 42]); // $ExpectType CollectionChain<boolean>
    _.chain(objList).flatMapDeep({ a: 42 }); // $ExpectType CollectionChain<boolean>
    _.chain(numDictionary).flatMapDeep(dictionaryIterator); // $ExpectType CollectionChain<number>
    _.chain(objDictionary).flatMapDeep("a"); // $ExpectType CollectionChain<any>
    _.chain(numNumericDictionary).flatMapDeep(numericDictionaryIterator); // $ExpectType CollectionChain<number>
    _.chain(objNumericDictionary).flatMapDeep("a"); // $ExpectType CollectionChain<any>

    fp.flatMapDeep(valueIterator, numList); // $ExpectType number[]
    fp.flatMapDeep(valueIterator)(numList); // $ExpectType number[]
    fp.flatMapDeep("a", objList); // $ExpectType any[]
    fp.flatMapDeep({ a: 42 }, objList); // $ExpectType boolean[]
    fp.flatMapDeep(["a", 42], objList); // $ExpectType boolean[]
    fp.flatMapDeep(valueIterator, numDictionary); // $ExpectType number[]
    fp.flatMapDeep("a", objDictionary); // $ExpectType any[]
    fp.flatMapDeep({ a: 42 }, objDictionary); // $ExpectType boolean[]
    fp.flatMapDeep(["a", 42], objDictionary); // $ExpectType boolean[]
    fp.flatMapDeep(valueIterator, numNumericDictionary); // $ExpectType number[]
    fp.flatMapDeep("a", objNumericDictionary); // $ExpectType any[]
    fp.flatMapDeep({ a: 42 }, objNumericDictionary); // $ExpectType boolean[]
    fp.flatMapDeep(["a", 42], objNumericDictionary); // $ExpectType boolean[]

    _.flatMapDepth("abc"); // $ExpectType string[]
    _.flatMapDepth("abc", stringIterator); // $ExpectType string[]
    _.flatMapDepth("abc", stringIterator, 3); // $ExpectType string[]
    _.flatMapDepth(numList, listIterator, 3); // $ExpectType number[]
    _.flatMapDepth(objList, "a", 3); // $ExpectType any[]
    _.flatMapDepth(objList, ["a", 42], 3); // $ExpectType boolean[]
    _.flatMapDepth(objList, { a: 42 }, 3); // $ExpectType boolean[]
    _.flatMapDepth(numDictionary, dictionaryIterator, 3); // $ExpectType number[]
    _.flatMapDepth(objDictionary, "a", 3); // $ExpectType any[]
    _.flatMapDepth(objDictionary, ["a", 42], 3); // $ExpectType boolean[]
    _.flatMapDepth(objDictionary, { a: 42 }, 3); // $ExpectType boolean[]
    _.flatMapDepth(numNumericDictionary, numericDictionaryIterator, 3); // $ExpectType number[]
    _.flatMapDepth(objNumericDictionary, "a", 3); // $ExpectType any[]
    _.flatMapDepth(objNumericDictionary, ["a", 42], 3); // $ExpectType boolean[]
    _.flatMapDepth(objNumericDictionary, { a: 42 }, 3); // $ExpectType boolean[]

    _("abc").flatMapDepth(stringIterator, 3); // $ExpectType Collection<string>
    _(numList).flatMapDepth(listIterator, 3); // $ExpectType Collection<number>
    _(objList).flatMapDepth("a", 3); // $ExpectType Collection<any>
    _(objList).flatMapDepth(["a", 42], 3); // $ExpectType Collection<boolean>
    _(objList).flatMapDepth({ a: 42 }, 3); // $ExpectType Collection<boolean>
    _(numDictionary).flatMapDepth(dictionaryIterator, 3); // $ExpectType Collection<number>
    _(objDictionary).flatMapDepth("a", 3); // $ExpectType Collection<any>
    _(numNumericDictionary).flatMapDepth(numericDictionaryIterator, 3); // $ExpectType Collection<number>
    _(objNumericDictionary).flatMapDepth("a", 3); // $ExpectType Collection<any>

    _.chain("abc").flatMapDepth(stringIterator, 3); // $ExpectType CollectionChain<string>
    _.chain(numList).flatMapDepth(listIterator, 3); // $ExpectType CollectionChain<number>
    _.chain(objList).flatMapDepth("a", 3); // $ExpectType CollectionChain<any>
    _.chain(objList).flatMapDepth(["a", 42], 3); // $ExpectType CollectionChain<boolean>
    _.chain(objList).flatMapDepth({ a: 42 }, 3); // $ExpectType CollectionChain<boolean>
    _.chain(numDictionary).flatMapDepth(dictionaryIterator, 3); // $ExpectType CollectionChain<number>
    _.chain(objDictionary).flatMapDepth("a", 3); // $ExpectType CollectionChain<any>
    _.chain(numNumericDictionary).flatMapDepth(numericDictionaryIterator, 3); // $ExpectType CollectionChain<number>
    _.chain(objNumericDictionary).flatMapDepth("a", 3); // $ExpectType CollectionChain<any>

    fp.flatMapDepth(valueIterator, 3, numList); // $ExpectType number[]
    fp.flatMapDepth(valueIterator)(3)(numList); // $ExpectType number[]
    fp.flatMapDepth("a", 3, objList); // $ExpectType any[]
    fp.flatMapDepth({ a: 42 }, 3, objList); // $ExpectType boolean[]
    fp.flatMapDepth(["a", 42], 3, objList); // $ExpectType boolean[]
    fp.flatMapDepth(valueIterator, 3, numDictionary); // $ExpectType number[]
    fp.flatMapDepth("a", 3, objDictionary); // $ExpectType any[]
    fp.flatMapDepth({ a: 42 }, 3, objDictionary); // $ExpectType boolean[]
    fp.flatMapDepth(["a", 42], 3, objDictionary); // $ExpectType boolean[]
    fp.flatMapDepth(valueIterator, 3, numNumericDictionary); // $ExpectType number[]
    fp.flatMapDepth("a", 3, objNumericDictionary); // $ExpectType any[]
    fp.flatMapDepth({ a: 42 }, 3, objNumericDictionary); // $ExpectType boolean[]
    fp.flatMapDepth(["a", 42], 3, objNumericDictionary); // $ExpectType boolean[]
}

// _.forEach
// _.forEachRight
// _.each
// _.eachRight
{
    const str: string = anything;
    const nilStr: string | null | undefined = anything;
    const array: AbcObject[] = anything;
    const list: _.List<AbcObject> = anything;
    const dictionary: _.Dictionary<AbcObject> = anything;
    const numericDictionary: _.NumericDictionary<AbcObject> = anything;
    const nilArray: AbcObject[] | null | undefined = anything;
    const nilList: _.List<AbcObject> | null | undefined = anything;
    const nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;
    const nilNumericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
    const nilAbcObject: AbcObject | null | undefined = anything;

    // $ExpectType string
    _.forEach(str, (value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType string | null | undefined
    _.forEach(nilStr, (value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType AbcObject[]
    _.forEach(array, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType AbcObject[] | null | undefined
    _.forEach(nilArray, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    _.forEach(list, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType ArrayLike<AbcObject> | null | undefined || List<AbcObject> | null | undefined
    _.forEach(nilList, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType Dictionary<AbcObject>
    _.forEach(dictionary, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType Dictionary<AbcObject> | null | undefined
    _.forEach(nilDictionary, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType NumericDictionary<AbcObject>
    _.forEach(numericDictionary, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType NumericDictionary<AbcObject> | null | undefined
    _.forEach(nilNumericDictionary, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType AbcObject
    _.forEach(abcObject, (value, index, collection) => {
        value; // $ExpectType string | number | boolean
        index; // $ExpectType string
        collection; // $ExpectType AbcObject
    });

    // $ExpectType AbcObject | null | undefined
    _.forEach(nilAbcObject, (value, index, collection) => {
        value; // $ExpectType string | number | boolean
        index; // $ExpectType string
        collection; // $ExpectType AbcObject
    });

    // $ExpectType String
    _(str).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType String
    _(nilStr).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType Collection<AbcObject>
    _(array).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType Collection<AbcObject>
    _(nilArray).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType Collection<AbcObject>
    _(list).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType Collection<AbcObject>
    _(nilList).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType Object<Dictionary<AbcObject>>
    _(nilDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType Object<NumericDictionary<AbcObject>>
    _(numericDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType Object<NumericDictionary<AbcObject>>
    _(nilNumericDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType StringChain
    _.chain(str).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType StringNullableChain
    _.chain(nilStr).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType CollectionChain<AbcObject>
    _.chain(nilArray).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType CollectionChain<AbcObject>
    _.chain(list).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType CollectionChain<AbcObject>
    _.chain(nilList).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });

    // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(nilDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType ObjectChain<NumericDictionary<AbcObject>>
    _.chain(numericDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType ObjectChain<NumericDictionary<AbcObject>>
    _.chain(nilNumericDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    fp.forEach(stringIterator, ""); // $ExpectType ArrayLike<string> || List<string>
    fp.forEach(valueIterator, array); // $ExpectType AbcObject[]
    fp.forEach(valueIterator)(array); // $ExpectType AbcObject[]
    fp.forEach(valueIterator, list); // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    fp.forEach(valueIterator, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.forEach(valueIterator, nilArray); // $ExpectType AbcObject[] | null | undefined
    fp.forEach(valueIterator, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined || List<AbcObject> | null | undefined
    fp.forEach(valueIterator, nilDictionary); // $ExpectType Dictionary<AbcObject> | null | undefined

    // $ExpectType AbcObject[]
    _.forEachRight(array, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });
    // $ExpectType ArrayLike<AbcObject> | null | undefined || List<AbcObject> | null | undefined
    _.forEachRight(nilList, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(array).forEachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(nilList).forEachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).forEachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(nilList).forEachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    fp.forEachRight(valueIterator, array); // $ExpectType AbcObject[]
    fp.forEachRight(valueIterator)(array); // $ExpectType AbcObject[]

    // $ExpectType AbcObject[]
    _.each(array, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });
    // $ExpectType ArrayLike<AbcObject> | null | undefined || List<AbcObject> | null | undefined
    _.each(nilList, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(array).each((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(nilList).each((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).each((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(nilList).each((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    fp.each(valueIterator, array); // $ExpectType AbcObject[]
    fp.each(valueIterator)(array); // $ExpectType AbcObject[]

    // $ExpectType AbcObject[]
    _.eachRight(array, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });
    // $ExpectType ArrayLike<AbcObject> | null | undefined || List<AbcObject> | null | undefined
    _.eachRight(nilList, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(array).eachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType Collection<AbcObject>
    _(nilList).eachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(array).eachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    // $ExpectType CollectionChain<AbcObject>
    _.chain(nilList).eachRight((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
    });
    fp.eachRight(valueIterator, array); // $ExpectType AbcObject[]
    fp.eachRight(valueIterator)(array); // $ExpectType AbcObject[]
}

// _.groupBy
{
    _.groupBy(""); // $ExpectType Dictionary<string[]>
    _.groupBy("", stringIterator); // $ExpectType Dictionary<string[]>
    _.groupBy(list); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(list, valueIterator); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(list, "a"); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(list, { a: 42 }); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(dictionary); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(dictionary, valueIterator); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(dictionary, ""); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(dictionary, { a: 42 }); // $ExpectType Dictionary<AbcObject[]>

    _("").groupBy(); // $ExpectType Object<Dictionary<string[]>>
    _("").groupBy(stringIterator); // $ExpectType Object<Dictionary<string[]>>
    _(list).groupBy(); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(list).groupBy(valueIterator); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(list).groupBy(""); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(list).groupBy({ a: 42 }); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(dictionary).groupBy(); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(dictionary).groupBy(valueIterator); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(dictionary).groupBy(""); // $ExpectType Object<Dictionary<AbcObject[]>>
    _(dictionary).groupBy({ a: 42 }); // $ExpectType Object<Dictionary<AbcObject[]>>

    _.chain("").groupBy(); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain("").groupBy(stringIterator); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain(list).groupBy(); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(list).groupBy(valueIterator); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(list).groupBy(""); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(list).groupBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(dictionary).groupBy(); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(dictionary).groupBy(valueIterator); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(dictionary).groupBy(""); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>
    _.chain(dictionary).groupBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<AbcObject[]>>

    fp.groupBy(valueIterator, list); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy(valueIterator)(list); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy("a", list); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy({ a: 42 }, list); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy(["a", 42], list); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy(valueIterator, dictionary); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy("a", dictionary); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy({ a: 42 }, dictionary); // $ExpectType Dictionary<AbcObject[]>
    fp.groupBy(["a", 42], dictionary); // $ExpectType Dictionary<AbcObject[]>
}

// _.includes
{
    _.includes(list, abcObject); // $ExpectType boolean
    _.includes(list, abcObject, 42); // $ExpectType boolean
    _.includes(dictionary, abcObject); // $ExpectType boolean
    _.includes(dictionary, abcObject, 42); // $ExpectType boolean

    _(list).includes(abcObject); // $ExpectType boolean
    _(list).includes(abcObject, 42); // $ExpectType boolean
    _(dictionary).includes(abcObject); // $ExpectType boolean
    _(dictionary).includes(abcObject, 42); // $ExpectType boolean
    _('hi').includes('h'); // $ExpectType boolean
    _('hi').includes('h', 0); // $ExpectType boolean

    _.chain(list).includes(abcObject); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).includes(abcObject, 42); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).includes(abcObject); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).includes(abcObject, 42); // $ExpectType PrimitiveChain<boolean>
    _.chain('hi').includes('h'); // $ExpectType PrimitiveChain<boolean>
    _.chain('hi').includes('h', 0); // $ExpectType PrimitiveChain<boolean>

    fp.includes(abcObject, list); // $ExpectType boolean
    fp.includes(abcObject)(list); // $ExpectType boolean
    fp.includes(abcObject, dictionary); // $ExpectType boolean

    fp.includesFrom(abcObject, 42, list); // $ExpectType boolean
    fp.includesFrom(abcObject)(42)(list); // $ExpectType boolean
    fp.includesFrom(abcObject, 42, dictionary); // $ExpectType boolean
}

// _.keyBy
{
    const valueIterator = (value: AbcObject) => "";
    const subKey: string | number | symbol = anything;

    _.keyBy("abcd"); // $ExpectType Dictionary<string>
    _.keyBy("abcd", stringIterator); // $ExpectType Dictionary<string>
    _.keyBy(list); // $ExpectType Dictionary<AbcObject>
    _.keyBy(list, valueIterator); // $ExpectType Dictionary<AbcObject>
    _.keyBy(list, subKey); // $ExpectType Dictionary<AbcObject>
    _.keyBy(list, { a: 42 }); // $ExpectType Dictionary<AbcObject>
    _.keyBy(dictionary); // $ExpectType Dictionary<AbcObject>
    _.keyBy(dictionary, valueIterator); // $ExpectType Dictionary<AbcObject>
    _.keyBy(dictionary, subKey); // $ExpectType Dictionary<AbcObject>
    _.keyBy(dictionary, { a: 42 }); // $ExpectType Dictionary<AbcObject>
    _.keyBy(numericDictionary); // $ExpectType Dictionary<AbcObject>
    _.keyBy(numericDictionary, valueIterator); // $ExpectType Dictionary<AbcObject>
    _.keyBy(numericDictionary, "a"); // $ExpectType Dictionary<AbcObject>
    _.keyBy(numericDictionary, subKey); // $ExpectType Dictionary<AbcObject>
    _.keyBy(numericDictionary, { a: 42 }); // $ExpectType Dictionary<AbcObject>

    _("abcd").keyBy(); // $ExpectType Object<Dictionary<string>>
    _("abcd").keyBy(stringIterator); // $ExpectType Object<Dictionary<string>>
    _(list).keyBy(); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).keyBy(valueIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).keyBy(subKey); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).keyBy({ a: 42 }); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).keyBy(); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).keyBy(valueIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).keyBy(subKey); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).keyBy({ a: 42 }); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).keyBy(); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).keyBy(valueIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).keyBy(subKey); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).keyBy({ a: 42 }); // $ExpectType Object<Dictionary<AbcObject>>

    _.chain("abcd").keyBy(); // $ExpectType ObjectChain<Dictionary<string>>
    _.chain("abcd").keyBy(stringIterator); // $ExpectType ObjectChain<Dictionary<string>>
    _.chain(list).keyBy(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).keyBy(valueIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).keyBy(subKey); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).keyBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).keyBy(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).keyBy(valueIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).keyBy(subKey); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).keyBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).keyBy(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).keyBy(valueIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).keyBy(subKey); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).keyBy({ a: 42 }); // $ExpectType ObjectChain<Dictionary<AbcObject>>

    fp.keyBy(valueIterator, list); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(valueIterator)(list); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(subKey, list); // $ExpectType Dictionary<AbcObject>
    fp.keyBy({ a: 42 }, list); // $ExpectType Dictionary<AbcObject>
    fp.keyBy([subKey, 42], list); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(valueIterator, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(subKey, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy({ a: 42 }, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy([subKey, 42], dictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(valueIterator, numericDictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy(subKey, numericDictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy({ a: 42 }, numericDictionary); // $ExpectType Dictionary<AbcObject>
    fp.keyBy([subKey, 42], numericDictionary); // $ExpectType Dictionary<AbcObject>
}

// _.invoke
{
    const array = [(n?: number) => {}];
    const nestedDict = { a: [(n?: number) => {}] };

    _.invoke(array, "[0]"); // $ExpectType any
    _.invoke(array, "[0]", 2); // $ExpectType any
    _.invoke(array, [0, "call"]); // $ExpectType any
    _.invoke(array, [0, "call"], 2); // $ExpectType any

    _.invoke(nestedDict, ["a[0].toString"]); // $ExpectType any
    _.invoke(nestedDict, ["a[0].toString"], 2); // $ExpectType any
    _.invoke(nestedDict, ["a", 0, "toString"]); // $ExpectType any
    _.invoke(nestedDict, ["a", 0, "toString"], 2); // $ExpectType any

    _(array).invoke("[0]"); // $ExpectType any
    _(array).invoke("[0]", 2); // $ExpectType any
    _(array).invoke([0, "call"]); // $ExpectType any
    _(array).invoke([0, "call"], 2); // $ExpectType any

    _(nestedDict).invoke(["a[0].toString"]); // $ExpectType any
    _(nestedDict).invoke(["a[0].toString"], 2); // $ExpectType any
    _(nestedDict).invoke(["a", 0, "toString"]); // $ExpectType any
    _(nestedDict).invoke(["a", 0, "toString"], 2); // $ExpectType any

    _.chain(array).invoke("[0]"); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(array).invoke("[0]", 2); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(array).invoke([0, "call"]); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(array).invoke([0, "call"], 2); // $ExpectType LoDashExplicitWrapper<any>

    _.chain(nestedDict).invoke(["a[0].toString"]); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(nestedDict).invoke(["a[0].toString"], 2); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(nestedDict).invoke(["a", 0, "toString"]); // $ExpectType LoDashExplicitWrapper<any>
    _.chain(nestedDict).invoke(["a", 0, "toString"], 2); // $ExpectType LoDashExplicitWrapper<any>

    fp.invoke("[0]", array); // $ExpectType any
    fp.invoke("[0]")(array); // $ExpectType any
    fp.invoke(["[0]", 2], array); // $ExpectType any

    fp.invoke("a[0].toString", nestedDict); // $ExpectType any
    fp.invoke(["a", 0, "toString"], nestedDict); // $ExpectType any
}

// _.invokeMap
{
    const numArray: number[] | null | undefined = anything;
    const numDict: _.Dictionary<number> | null | undefined = anything;

    _.invokeMap(numArray, "toString"); // $ExpectType any[]
    _.invokeMap(numArray, "toString", 2); // $ExpectType any[]
    _.invokeMap(numArray, Number.prototype.toString); // $ExpectType string[]
    _.invokeMap(numDict, "toString"); // $ExpectType any[]

    _(numArray).invokeMap("toString"); // $ExpectType Collection<any>
    _(numArray).invokeMap("toString", 2); // $ExpectType Collection<any>
    _(numArray).invokeMap(Number.prototype.toString); // $ExpectType Collection<string>
    _(numDict).invokeMap("toString"); // $ExpectType Collection<any>

    _.chain(numArray).invokeMap("toString"); // $ExpectType CollectionChain<any>
    _.chain(numArray).invokeMap("toString", 2); // $ExpectType CollectionChain<any>
    _.chain(numArray).invokeMap(Number.prototype.toString); // $ExpectType CollectionChain<string>
    _.chain(numDict).invokeMap("toString"); // $ExpectType CollectionChain<any>

    fp.invokeMap("toString", numArray); // $ExpectType any[]
    fp.invokeMap("toString")(numArray); // $ExpectType any[]
    fp.invokeMap(Number.prototype.toString, numArray); // $ExpectType string[]
    fp.invokeMap("toString", numDict); // $ExpectType any[]
    fp.invokeMap(Number.prototype.toString, numDict); // $ExpectType string[]

    fp.invokeArgsMap("toString", [16], numArray); // $ExpectType any[]
    fp.invokeArgsMap("toString")([16])(numArray); // $ExpectType any[]
    fp.invokeArgsMap(Number.prototype.toString, [16], numArray); // $ExpectType string[]
    fp.invokeArgsMap("toString", [16], numDict); // $ExpectType any[]
    fp.invokeArgsMap(Number.prototype.toString, [16], numDict); // $ExpectType string[]
}

// _.map
{
    _.map(list);  // $ExpectType AbcObject[]
    // $ExpectType number[]
    _.map(list, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
        return 0;
    });
    _.map(dictionary);  // $ExpectType AbcObject[]
    // $ExpectType number[]
    _.map(dictionary, (value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return 0;
    });
    _.map(numericDictionary);  // $ExpectType AbcObject[]
    // $ExpectType number[]
    _.map(numericDictionary, (value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return 0;
    });
    _.map(list, "a"); // $ExpectType number[]
    _.map(dictionary, "a"); // $ExpectType number[]
    _.map(numericDictionary, "a"); // $ExpectType number[]
    _.map(list, "d.0.b"); // $ExpectType any[]
    _.map(dictionary, "d.0.b"); // $ExpectType any[]
    _.map(numericDictionary, "d.0.b"); // $ExpectType any[]
    _.map(list, { a: 42 });  // $ExpectType boolean[]
    _.map(dictionary, { a: 42 });  // $ExpectType boolean[]
    _.map(numericDictionary, { a: 42 });  // $ExpectType boolean[]

    _(list).map(); // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<number>
    _(list).map((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
        return 0;
    });
    _(dictionary).map();  // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<number>
    _(dictionary).map((value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return 0;
    });
    _(numericDictionary).map();  // $ExpectType Collection<AbcObject>
    // $ExpectType Collection<number>
    _(numericDictionary).map((value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return 0;
    });
    _(list).map("a"); // $ExpectType Collection<number>
    _(dictionary).map("a"); // $ExpectType Collection<number>
    _(numericDictionary).map("a"); // $ExpectType Collection<number>
    _(list).map("d.0.b"); // $ExpectType Collection<any>
    _(dictionary).map("d.0.b"); // $ExpectType Collection<any>
    _(numericDictionary).map("d.0.b"); // $ExpectType Collection<any>
    _(list).map({ a: 42 });  // $ExpectType Collection<boolean>
    _(dictionary).map({ a: 42 });  // $ExpectType Collection<boolean>
    _(numericDictionary).map({ a: 42 });  // $ExpectType Collection<boolean>

    _.chain(list).map();  // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<number>
    _.chain(list).map((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject> || List<AbcObject>
        return 0;
    });
    _.chain(dictionary).map();  // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<number>
    _.chain(dictionary).map((value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return 0;
    });
    _.chain(numericDictionary).map();  // $ExpectType CollectionChain<AbcObject>
    // $ExpectType CollectionChain<number>
    _.chain(numericDictionary).map((value, key, collection) => {
        value; // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return 0;
    });
    _.chain(list).map("a"); // $ExpectType CollectionChain<number>
    _.chain(dictionary).map("a"); // $ExpectType CollectionChain<number>
    _.chain(numericDictionary).map("a"); // $ExpectType CollectionChain<number>
    _.chain(list).map("d.0.b"); // $ExpectType CollectionChain<any>
    _.chain(dictionary).map("d.0.b"); // $ExpectType CollectionChain<any>
    _.chain(numericDictionary).map("d.0.b"); // $ExpectType CollectionChain<any>
    _.chain(list).map({ a: 42 }); // $ExpectType CollectionChain<boolean>
    _.chain(dictionary).map({ a: 42 }); // $ExpectType CollectionChain<boolean>
    _.chain(numericDictionary).map({ a: 42 }); // $ExpectType CollectionChain<boolean>

    const valueIterator = (value: AbcObject): number => value.a;
    fp.map(valueIterator)(list); // $ExpectType number[]
    fp.map(valueIterator, dictionary); // $ExpectType number[]
    fp.map("a", list); // $ExpectType number[]
    fp.map({ a: 42 }, list); // $ExpectType boolean[]
    fp.map(["a", 42], dictionary); // $ExpectType boolean[]
}

// _.partition
{
    // $ExpectType [any[], any[]]
    _.partition(anything, (value) => {
        value; // $ExpectType any
        return value < "c";
    });
    // $ExpectType [string[], string[]]
    _.partition("abcd", (value) => {
        value; // $ExpectType string
        return value < "c";
    });
    // $ExpectType [AbcObject[], AbcObject[]]
    _.partition(list, (value) => {
        value; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType LoDashImplicitWrapper<[any[], any[]]>
    _(anything).partition((value) => {
        value; // $ExpectType any
        return value < "c";
    });
    // $ExpectType LoDashImplicitWrapper<[string[], string[]]>
    _("abcd").partition((value) => {
        value; // $ExpectType string
        return value < "c";
    });
    // $ExpectType LoDashImplicitWrapper<[AbcObject[], AbcObject[]]>
    _(list).partition((value) => {
        value; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType LoDashExplicitWrapper<[any[], any[]]>
    _.chain(anything).partition((value) => {
        value; // $ExpectType any
        return value < "c";
    });
    // $ExpectType LoDashExplicitWrapper<[string[], string[]]>
    _.chain("abcd").partition((value) => {
        value; // $ExpectType string
        return value < "c";
    });
    // $ExpectType LoDashExplicitWrapper<[AbcObject[], AbcObject[]]>
    _.chain(list).partition((value) => {
        value; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType [any[], any[]]
    fp.partition((value) => {
        value; // $ExpectType any
        return value < "c";
    }, anything);
    // $ExpectType [any[], any[]]
    fp.partition((value: any) => value < "c")(anything);
    // $ExpectType [string[], string[]]
    fp.partition((value) => {
        value; // $ExpectType string
        return value < "c";
    }, "abcd");
    // $ExpectType [AbcObject[], AbcObject[]]
    fp.partition((value) => {
        value; // $ExpectType AbcObject
        return true;
    }, list);
}

// _.reduce
{
    interface ABC {
        [key: string]: number;
        a: number;
        b: number;
        c: number;
    }
    const initial: ABC = { a: 1, b: 2, c: 3 };

    // $ExpectType number | undefined
    _.reduce([1, 2, 3], (sum, curr, key, coll) => {
        sum; // $ExpectType number
        curr; // $ExpectType number
        key; // $ExpectType number
        coll; // $ExpectType number[]
        return sum + curr;
    });
    _.reduce(null, (sum: number, num: number) => sum + num); // $ExpectType number | undefined
    _.reduce({ a: 1, b: 2, c: 3 }, (r: ABC, num: number, key: string) => r, initial); // $ExpectType ABC

    _([1, 2, 3]).reduce((sum, num) => sum + num); // $ExpectType number | undefined
    _({ a: 1, b: 2, c: 3 }).reduce((r: ABC, num: number, key: string) => r, initial); // $ExpectType ABC

    _.chain([1, 2, 3]).reduce((sum, num) => sum + num); // $ExpectType PrimitiveChain<number>
    _.chain({ a: 1, b: 2, c: 3 }).reduce((r: ABC, num: number, key: string) => r, initial); // $ExpectType ObjectChain<ABC>

    fp.reduce((s: string, num: number) => s + num, "", [1, 2, 3]); // $ExpectType string
    fp.reduce((s: string, num: number) => s + num)("")([1, 2, 3]); // $ExpectType string

    _.reduceRight([1, 2, 3], (sum, num) => sum + num); // $ExpectType number | undefined
    _.reduceRight(null, (sum: number, num: number) => sum + num); // $ExpectType number | undefined
    _.reduceRight({ a: 1, b: 2, c: 3 }, (r: ABC, num: number, key: string) => r, initial); // $ExpectType ABC

    _([1, 2, 3]).reduceRight((sum, num) => sum + num); // $ExpectType number | undefined
    _({ a: 1, b: 2, c: 3 }).reduceRight((r: ABC, num: number, key: string) => r, initial); // $ExpectType ABC

    _.chain([1, 2, 3]).reduceRight((sum, num) => sum + num); // $ExpectType PrimitiveChain<number>
    _.chain({ a: 1, b: 2, c: 3 }).reduceRight((r: ABC, num: number, key: string) => r, initial); // $ExpectType ObjectChain<ABC>

    fp.reduceRight((num: number, s: string) => s + num, "", [1, 2, 3]); // $ExpectType string
    fp.reduceRight((num: number, s: string) => s + num)("")([1, 2, 3]); // $ExpectType string
}

// _.reject
{
    const stringIterator = (char: string, index: number, string: string) => true;

    _.reject("", stringIterator); // $ExpectType string[]
    _.reject(list, listIterator); // $ExpectType AbcObject[]
    _.reject(list, ""); // $ExpectType AbcObject[]
    _.reject(list, { a: 42 }); // $ExpectType AbcObject[]
    _.reject(dictionary, dictionaryIterator); // $ExpectType AbcObject[]
    _.reject(dictionary, ""); // $ExpectType AbcObject[]
    _.reject(dictionary, { a: 42 }); // $ExpectType AbcObject[]

    _("").reject(stringIterator); // $ExpectType Collection<string>
    _(list).reject(listIterator); // $ExpectType Collection<AbcObject>
    _(list).reject(""); // $ExpectType Collection<AbcObject>
    _(list).reject({ a: 42 }); // $ExpectType Collection<AbcObject>
    _(dictionary).reject(dictionaryIterator); // $ExpectType Collection<AbcObject>
    _(dictionary).reject(""); // $ExpectType Collection<AbcObject>
    _(dictionary).reject({ a: 42 }); // $ExpectType Collection<AbcObject>

    _.chain("").reject(stringIterator); // $ExpectType CollectionChain<string>
    _.chain(list).reject(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).reject(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).reject({ a: 42 }); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).reject(dictionaryIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).reject(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).reject({ a: 42 }); // $ExpectType CollectionChain<AbcObject>

    fp.reject(valueIterator, list); // $ExpectType AbcObject[]
    fp.reject(valueIterator)(list); // $ExpectType AbcObject[]
    fp.reject(valueIterator, dictionary); // $ExpectType AbcObject[]
    fp.reject("a", list); // $ExpectType AbcObject[]
    fp.reject({ a: 42 }, list); // $ExpectType AbcObject[]
    fp.reject(["a", 42], list); // $ExpectType AbcObject[]
}

// _.sample
// _.sampleSize
{
    const list: _.List<string> | null | undefined = anything;
    const dictionary: _.Dictionary<string> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<string>  | null | undefined = anything;

    _.sample("abc"); // $ExpectType string | undefined
    _.sample(list); // $ExpectType string | undefined
    _.sample(dictionary); // $ExpectType string | undefined
    _.sample(numericDictionary); // $ExpectType string | undefined
    _.sample({ a: "foo" }); // $ExpectType string | undefined

    _("abc").sample(); // $ExpectType string | undefined
    _(list).sample(); // $ExpectType string | undefined
    _(dictionary).sample(); // $ExpectType string | undefined
    _(numericDictionary).sample(); // $ExpectType string | undefined
    _({ a: "foo" }).sample(); // $ExpectType string | undefined

    _.chain("abc").sample(); // $ExpectType StringNullableChain
    _.chain(list).sample(); // $ExpectType StringChain
    _.chain(dictionary).sample(); // $ExpectType StringChain
    _.chain(numericDictionary).sample(); // $ExpectType StringChain
    _.chain({ a: "foo" }).sample(); // $ExpectType StringChain

    fp.sample("abc"); // $ExpectType string | undefined
    fp.sample(list); // $ExpectType string | undefined
    fp.sample({ a: "foo" }); // $ExpectType string | undefined

    _.sampleSize("abc"); // $ExpectType string[]
    _.sampleSize("abc", 3); // $ExpectType string[]
    _.sampleSize(list, 3); // $ExpectType string[]
    _.sampleSize(dictionary, 3); // $ExpectType string[]
    _.sampleSize(numericDictionary, 3); // $ExpectType string[]
    _.sampleSize({ a: "foo" }, 3); // $ExpectType string[]

    _("abc").sampleSize(); // $ExpectType Collection<string>
    _("abc").sampleSize(3); // $ExpectType Collection<string>
    _(list).sampleSize(3); // $ExpectType Collection<string>
    _(dictionary).sampleSize(3); // $ExpectType Collection<string>
    _(numericDictionary).sampleSize(3); // $ExpectType Collection<string>
    _({ a: "foo" }).sampleSize(3); // $ExpectType Collection<string>

    _.chain("abc").sampleSize(); // $ExpectType CollectionChain<string>
    _.chain("abc").sampleSize(3); // $ExpectType CollectionChain<string>
    _.chain(list).sampleSize(3); // $ExpectType CollectionChain<string>
    _.chain(dictionary).sampleSize(3); // $ExpectType CollectionChain<string>
    _.chain(numericDictionary).sampleSize(3); // $ExpectType CollectionChain<string>
    _.chain({ a: "foo" }).sampleSize(3); // $ExpectType CollectionChain<string>

    fp.sampleSize(3, "abc"); // $ExpectType string[]
    fp.sampleSize(3)(list); // $ExpectType string[]
    fp.sampleSize(3)({ a: "foo" }); // $ExpectType string[]
}

// _.shuffle
{
    _.shuffle("abc"); // $ExpectType string[]
    _.shuffle(list); // $ExpectType AbcObject[]
    _.shuffle(dictionary); // $ExpectType AbcObject[]
    _("abc").shuffle(); // $ExpectType Collection<string>
    _(list).shuffle(); // $ExpectType Collection<AbcObject>
    _(dictionary).shuffle(); // $ExpectType Collection<AbcObject>
    _.chain("abc").shuffle(); // $ExpectType CollectionChain<string>
    _.chain(list).shuffle(); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).shuffle(); // $ExpectType CollectionChain<AbcObject>
    fp.shuffle("abc"); // $ExpectType string[]
    fp.shuffle(list); // $ExpectType AbcObject[]
    fp.shuffle(dictionary); // $ExpectType AbcObject[]
}

// _.size
{
    _.size(list); // $ExpectType number
    _.size(dictionary); // $ExpectType number
    _.size(""); // $ExpectType number
    _(list).size(); // $ExpectType number
    _(dictionary).size(); // $ExpectType number
    _("").size(); // $ExpectType number
    _.chain(list).size(); // $ExpectType PrimitiveChain<number>
    _.chain(dictionary).size(); // $ExpectType PrimitiveChain<number>
    _.chain("").size(); // $ExpectType PrimitiveChain<number>
    fp.size(list); // $ExpectType number
    fp.size(dictionary); // $ExpectType number
    fp.size(""); // $ExpectType number
}

// _.some
{
    const subKey: string | number | symbol = anything;

    _.some(list); // $ExpectType boolean
    _.some(list, listIterator); // $ExpectType boolean
    _.some(list, subKey); // $ExpectType boolean
    _.some(list, [subKey, 42]); // $ExpectType boolean
    _.some(list, { a: 42 }); // $ExpectType boolean

    _.some(dictionary); // $ExpectType boolean
    _.some(dictionary, dictionaryIterator); // $ExpectType boolean
    _.some(dictionary, subKey); // $ExpectType boolean
    _.some(dictionary, [subKey, 42]); // $ExpectType boolean
    _.some(dictionary, { a: 42 }); // $ExpectType boolean

    _.some(numericDictionary); // $ExpectType boolean
    _.some(numericDictionary, numericDictionaryIterator); // $ExpectType boolean
    _.some(numericDictionary, subKey); // $ExpectType boolean
    _.some(numericDictionary, [subKey, 42]); // $ExpectType boolean
    _.some(numericDictionary, { a: 42 }); // $ExpectType boolean

    _(list).some(); // $ExpectType boolean
    _(list).some(listIterator); // $ExpectType boolean
    _(list).some(subKey); // $ExpectType boolean
    _(list).some([subKey, 42]); // $ExpectType boolean
    _(list).some({ a: 42 }); // $ExpectType boolean

    _(dictionary).some(); // $ExpectType boolean
    _(dictionary).some(dictionaryIterator); // $ExpectType boolean
    _(dictionary).some(subKey); // $ExpectType boolean
    _(dictionary).some([subKey, 42]); // $ExpectType boolean
    _(dictionary).some({ a: 42 }); // $ExpectType boolean

    _(numericDictionary).some(); // $ExpectType boolean
    _(numericDictionary).some(numericDictionaryIterator); // $ExpectType boolean
    _(numericDictionary).some(subKey); // $ExpectType boolean
    _(numericDictionary).some([subKey, 42]); // $ExpectType boolean
    _(numericDictionary).some({ a: 42 }); // $ExpectType boolean

    _.chain(list).some(); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).some(listIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).some(subKey); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).some([subKey, 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(list).some({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    _.chain(dictionary).some(); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).some(dictionaryIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).some(subKey); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).some([subKey, 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(dictionary).some({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    _.chain(numericDictionary).some(); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).some(numericDictionaryIterator); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).some(subKey); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).some([subKey, 42]); // $ExpectType PrimitiveChain<boolean>
    _.chain(numericDictionary).some({ a: 42 }); // $ExpectType PrimitiveChain<boolean>

    fp.some(valueIterator, list); // $ExpectType boolean
    fp.some(subKey)(list); // $ExpectType boolean
    fp.some({ a: 42 }, list); // $ExpectType boolean
    fp.some([subKey, 42], list); // $ExpectType boolean

    fp.some(valueIterator, dictionary); // $ExpectType boolean
    fp.some(subKey)(dictionary); // $ExpectType boolean
    fp.some({ a: 42 })(dictionary); // $ExpectType boolean
    fp.some([subKey, 42])(dictionary); // $ExpectType boolean

    fp.some(valueIterator, numericDictionary); // $ExpectType boolean
    fp.some(subKey)(numericDictionary); // $ExpectType boolean
    fp.some({ a: 42 })(numericDictionary); // $ExpectType boolean
    fp.some([subKey, 42])(numericDictionary); // $ExpectType boolean
}

// _.sortBy
{
    _.sortBy(list); // $ExpectType AbcObject[]
    _.sortBy(list, listIterator); // $ExpectType AbcObject[]
    _.sortBy(list, listIterator, listIterator); // $ExpectType AbcObject[]
    _.sortBy(list, [listIterator, listIterator]); // $ExpectType AbcObject[]
    _.sortBy(list, ""); // $ExpectType AbcObject[]
    _.sortBy(list, { a: 42 }); // $ExpectType AbcObject[]
    _.sortBy(dictionary); // $ExpectType AbcObject[]
    _.sortBy(dictionary, dictionaryIterator); // $ExpectType AbcObject[]
    _.sortBy(dictionary, ""); // $ExpectType AbcObject[]
    _.sortBy(dictionary, { a: 42 }); // $ExpectType AbcObject[]

    _(list).sortBy(); // $ExpectType Collection<AbcObject>
    _(list).sortBy(listIterator); // $ExpectType Collection<AbcObject>
    _(list).sortBy(listIterator, listIterator); // $ExpectType Collection<AbcObject>
    _(list).sortBy([listIterator, listIterator]); // $ExpectType Collection<AbcObject>
    _(list).sortBy(""); // $ExpectType Collection<AbcObject>
    _(list).sortBy({ a: 42 }); // $ExpectType Collection<AbcObject>
    _(dictionary).sortBy(); // $ExpectType Collection<AbcObject>
    _(dictionary).sortBy(dictionaryIterator); // $ExpectType Collection<AbcObject>
    _(dictionary).sortBy(""); // $ExpectType Collection<AbcObject>
    _(dictionary).sortBy({ a: 42 }); // $ExpectType Collection<AbcObject>

    _.chain(list).sortBy(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortBy(listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortBy(listIterator, listIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortBy([listIterator, listIterator]); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortBy(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).sortBy({ a: 42 }); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).sortBy(); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).sortBy(dictionaryIterator); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).sortBy(""); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).sortBy({ a: 42 }); // $ExpectType CollectionChain<AbcObject>

    fp.sortBy(fp.identity, "bca"); // $ExpectType string[]
    fp.sortBy(valueIterator, list); // $ExpectType AbcObject[]
    fp.sortBy(valueIterator)(list); // $ExpectType AbcObject[]
    fp.sortBy([valueIterator, valueIterator])(list); // $ExpectType AbcObject[]
    fp.sortBy("a", list); // $ExpectType AbcObject[]
    fp.sortBy({ a: 42 }, list); // $ExpectType AbcObject[]
    fp.sortBy(fp.identity, dictionary); // $ExpectType AbcObject[]
    fp.sortBy(valueIterator, dictionary); // $ExpectType AbcObject[]
    fp.sortBy("a", dictionary); // $ExpectType AbcObject[]
    fp.sortBy({ a: 42 }, dictionary); // $ExpectType AbcObject[]
}

// _.orderBy
{
    _.orderBy("acbd", (value) => 1); // $ExpectType string[]
    _.orderBy("acbd", (value) => 1, true); // $ExpectType string[]
    _.orderBy("acbd", [(value) => 1, (value) => 2], [true, false]); // $ExpectType string[]
    _.orderBy(list, (value) => 1); // $ExpectType AbcObject[]
    _.orderBy(list, (value) => 1, true); // $ExpectType AbcObject[]
    _.orderBy(list, [(value) => 1, 'third', (value) => 2], [true, false]); // $ExpectType AbcObject[]
    _.orderBy(dictionary, (value) => 1); // $ExpectType AbcObject[]
    _.orderBy(dictionary, (value) => 1, true); // $ExpectType AbcObject[]
    _.orderBy(numericDictionary, (value) => 1); // $ExpectType AbcObject[]
    _.orderBy(numericDictionary, (value) => 1, true); // $ExpectType AbcObject[]

    _(list).orderBy((value) => 1); // $ExpectType Collection<AbcObject>
    _(list).orderBy((value) => 1, true); // $ExpectType Collection<AbcObject>
    _(list).orderBy([(value) => 1, (value) => 2], true); // $ExpectType Collection<AbcObject>
    _(dictionary).orderBy((value) => 1); // $ExpectType Collection<AbcObject>
    _(dictionary).orderBy((value) => 1, true); // $ExpectType Collection<AbcObject>
    _(numericDictionary).orderBy((value) => 1); // LoDashImplicitWrapper<AbcObject[]>
    _(numericDictionary).orderBy((value) => 1, true); // LoDashImplicitWrapper<AbcObject[]>

    _.chain(list).orderBy((value) => 1); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).orderBy((value) => 1, true); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).orderBy([(value) => 1, 'third', (value) => 2], true); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).orderBy((value) => 1); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).orderBy((value) => 1, true); // $ExpectType CollectionChain<AbcObject>
    _.chain(numericDictionary).orderBy((value) => 1); // $ExpectType CollectionChain<AbcObject>
    _.chain(numericDictionary).orderBy((value) => 1, true); // $ExpectType CollectionChain<AbcObject>

    fp.orderBy(fp.identity, "asc", "bca"); // $ExpectType string[]
    fp.orderBy(fp.identity, true, "bca"); // $ExpectType string[]
    fp.orderBy((value: AbcObject) => 1, true, list); // $ExpectType AbcObject[]
    fp.orderBy([(value: AbcObject) => 1, (value: AbcObject) => 1])([true, false])(list); // $ExpectType AbcObject[]
    fp.orderBy("a", true, list); // $ExpectType AbcObject[]
    fp.orderBy({ a: 42 }, true, list); // $ExpectType AbcObject[]
    fp.orderBy((value: AbcObject) => 1, true, dictionary); // $ExpectType AbcObject[]
    fp.orderBy("a", true, dictionary); // $ExpectType AbcObject[]
    fp.orderBy({ a: 42 }, true, dictionary); // $ExpectType AbcObject[]
}

/********
 * Date *
 ********/

_.now(); // $ExpectType number
_({}).now(); // $ExpectType number
_.chain({}).now(); // $ExpectType PrimitiveChain<number>
fp.now(); // $ExpectType number

/************
 * Function *
 ************/

// _.after
{
    _.after(42, (a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
    _(42).after((a: string, b: number): boolean => true); // $ExpectType Function<(a: string, b: number) => boolean>
    _.chain(42).after((a: string, b: number): boolean => true); // $ExpectType FunctionChain<(a: string, b: number) => boolean>
    fp.after((a: string, b: number): boolean => true, 42); // $ExpectType (a: string, b: number) => boolean
    fp.after((a: string, b: number): boolean => true)(42); // $ExpectType (a: string, b: number) => boolean
}

// _.ary
{
    const func = (a: string, b: number) => true;

    _.ary(func); // $ExpectType (...args: any[]) => any
    _.ary(func, 2); // $ExpectType (...args: any[]) => any
    _(func).ary(); // $ExpectType Function<(...args: any[]) => any>
    _(func).ary(2); // $ExpectType Function<(...args: any[]) => any>
    _.chain(func).ary(); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(func).ary(2); // $ExpectType FunctionChain<(...args: any[]) => any>
    fp.ary(1, func); // $ExpectType (...args: any[]) => any
}

// _.before
{
    _.before(42, (a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
    _(42).before((a: string, b: number): boolean => true); // $ExpectType Function<(a: string, b: number) => boolean>
    _.chain(42).before((a: string, b: number): boolean => true); // $ExpectType FunctionChain<(a: string, b: number) => boolean>
    fp.before((a: string, b: number): boolean => true, 42); // $ExpectType (a: string, b: number) => boolean
    fp.before((a: string, b: number): boolean => true)(42); // $ExpectType (a: string, b: number) => boolean
}

// _.bind
{
    const func = (a: string, b: number) => true;

    _.bind(func, anything); // $ExpectType (...args: any[]) => any
    _.bind(func, anything, 42); // $ExpectType (...args: any[]) => any
    _.bind(func, anything, 42, ""); // $ExpectType (...args: any[]) => any
    _(func).bind(anything); // $ExpectType Function<(...args: any[]) => any>
    _(func).bind(anything, 42); // $ExpectType Function<(...args: any[]) => any>
    _(func).bind(anything, 42, ""); // $ExpectType Function<(...args: any[]) => any>
    _.chain(func).bind(anything); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(func).bind(anything, 42); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(func).bind(anything, 42, ""); // $ExpectType FunctionChain<(...args: any[]) => any>
    fp.bind((a: string, b: number) => true, anything); // $ExpectType (...args: any[]) => any
    fp.bind((a: string, b: number) => true)(anything); // $ExpectType (...args: any[]) => any
}

// _.bindAll
{
    const object = { a: () => {}, b: () => {}, c: () => {} };

    _.bindAll(object); // $ExpectType { a: () => void; b: () => void; c: () => void; }
    _.bindAll(object, "a", ["b", "c"]); // $ExpectType { a: () => void; b: () => void; c: () => void; }
    _(object).bindAll(); // $ExpectType Object<{ a: () => void; b: () => void; c: () => void; }>
    _(object).bindAll("a", ["b", "c"]); // $ExpectType Object<{ a: () => void; b: () => void; c: () => void; }>
    _.chain(object).bindAll(); // $ExpectType ObjectChain<{ a: () => void; b: () => void; c: () => void; }>
    _.chain(object).bindAll("a", ["b", "c"]); // $ExpectType ObjectChain<{ a: () => void; b: () => void; c: () => void; }>
    fp.bindAll("a", object); // $ExpectType { a: () => void; b: () => void; c: () => void; }
    fp.bindAll(["b", "c"])(object); // $ExpectType { a: () => void; b: () => void; c: () => void; }
}

// _.bindKey
{
    const object = {
        foo: (a: number, b: string) => true,
    };

    _.bindKey(object, "foo"); // $ExpectType (...args: any[]) => any
    _.bindKey(object, "foo", 42, ""); // $ExpectType (...args: any[]) => any
    _(object).bindKey("foo"); // $ExpectType Function<(...args: any[]) => any>
    _(object).bindKey("foo", 42, ""); // $ExpectType Function<(...args: any[]) => any>
    _.chain(object).bindKey("foo"); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(object).bindKey("foo", 42, ""); // $ExpectType FunctionChain<(...args: any[]) => any>
    fp.bindKey(object, "foo"); // $ExpectType (...args: any[]) => any
    fp.bindKey(object)("foo"); // $ExpectType (...args: any[]) => any
}

// _.curry
{
    const testCurry = (a: string, b: number, c: boolean): [string, number, boolean] => [a, b, c];
    _.curry(testCurry)("1", 2, true); // $ExpectType [string, number, boolean]
    _.curry(testCurry)("1", 2)(true); // $ExpectType [string, number, boolean]
    _.curry(testCurry)("1")(2, true); // $ExpectType [string, number, boolean]
    _.curry(testCurry)("1")(2)(true); // $ExpectType [string, number, boolean]
    _.curry(testCurry)("1", 2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    _.curry(testCurry)("1")(2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    _.curry(testCurry)("1"); // $ExpectType CurriedFunction2<number, boolean, [string, number, boolean]>
    _.curry(testCurry); // $ExpectType CurriedFunction3<string, number, boolean, [string, number, boolean]>
    _.curry(testCurry)(_, 2, true)("1"); // $ExpectType [string, number, boolean]
    _.curry(testCurry)(_.curry.placeholder, 2, true)("1"); // $ExpectType [string, number, boolean]
    _.curry(testCurry)("1", _, true)(2); // $ExpectType [string, number, boolean]
    _.curry(testCurry)(_, 2)("1", true); // $ExpectType [string, number, boolean]
    _.curry(testCurry)(_.curry.placeholder, 2)("1", true); // $ExpectType [string, number, boolean]
    _(testCurry).curry(); // $ExpectType Function<CurriedFunction3<string, number, boolean, [string, number, boolean]>>
    _.chain(testCurry).curry(); // $ExpectType FunctionChain<CurriedFunction3<string, number, boolean, [string, number, boolean]>>

    fp.curry(testCurry)("1", 2, true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry)("1", 2)(true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry)("1")(2, true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry)("1")(2)(true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry)("1", 2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    fp.curry(testCurry)("1")(2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    fp.curry(testCurry)("1"); // $ExpectType CurriedFunction2<number, boolean, [string, number, boolean]>
    fp.curry(testCurry); // $ExpectType CurriedFunction3<string, number, boolean, [string, number, boolean]>
    fp.curry(testCurry)(fp.__, 2, true)("1"); // $ExpectType [string, number, boolean]
    fp.curry(testCurry)(fp.curry.placeholder, 2, true)("1"); // $ExpectType [string, number, boolean]
    fp.curryN(3)(testCurry)(fp.curryN.placeholder, 2, true)("1"); // $ExpectType [string, number, boolean]

    // _.curryRight
    _.curryRight(testCurry)("1", 2, true); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(2, true)("1"); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(true)("1", 2); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(true)(2)("1"); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(2, true); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    _.curryRight(testCurry)(true)(2); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    _.curryRight(testCurry)(true); // $ExpectType RightCurriedFunction2<string, number, [string, number, boolean]>
    _.curryRight(testCurry); // $ExpectType RightCurriedFunction3<string, number, boolean, [string, number, boolean]>
    _.curryRight(testCurry)("1", _, true)(2); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)("1", _.curryRight.placeholder, true)(2); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(true)("1", _)(2); // $ExpectType [string, number, boolean]
    _.curryRight(testCurry)(true)("1", _.curryRight.placeholder)(2); // $ExpectType [string, number, boolean]
    _(testCurry).curryRight(); // $ExpectType Function<RightCurriedFunction3<string, number, boolean, [string, number, boolean]>>
    _.chain(testCurry).curryRight(); // $ExpectType FunctionChain<RightCurriedFunction3<string, number, boolean, [string, number, boolean]>>

    fp.curryRight(testCurry)("1", 2, true); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry)(true)("1", 2); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry)(2, true)("1"); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry)(true)(2)("1"); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry)(2, true); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    fp.curryRight(testCurry)(true)(2); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    fp.curryRight(testCurry)(true); // $ExpectType RightCurriedFunction2<string, number, [string, number, boolean]>
    fp.curryRight(testCurry); // $ExpectType RightCurriedFunction3<string, number, boolean, [string, number, boolean]>
    fp.curryRight(testCurry)("1", fp.__, true)(2); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry)("1", fp.curryRight.placeholder, true)(2); // $ExpectType [string, number, boolean]
    fp.curryRightN(3)(testCurry)("1", fp.curryRightN.placeholder, true)(2); // $ExpectType [string, number, boolean]
}

// _.debounce
{
    const func = (n: number, s: string): boolean => true;
    const options: _.DebounceSettings = {
        leading: true,
        maxWait: 100,
        trailing: false,
    };

    const result = _.debounce(func); // $ExpectType DebouncedFunc<(n: number, s: string) => boolean>
    result.cancel(); // $ExpectType void
    result.flush(); // $ExpectType boolean | undefined
    _.debounce(func, 42); // $ExpectType DebouncedFunc<(n: number, s: string) => boolean>
    _.debounce(func, 42, options); // $ExpectType DebouncedFunc<(n: number, s: string) => boolean>

    _(func).debounce(42, options); // $ExpectType Function<DebouncedFunc<(n: number, s: string) => boolean>>
    _.chain(func).debounce(42, options); // $ExpectType FunctionChain<DebouncedFunc<(n: number, s: string) => boolean>>
    fp.debounce(42, func); // $ExpectType DebouncedFunc<(n: number, s: string) => boolean>
    fp.debounce(42)(func); // $ExpectType DebouncedFunc<(n: number, s: string) => boolean>
}

// _.defer
{
    const func = (a: number, b: string) => true;

    _.defer(func); // $ExpectType number
    _.defer(func, anything, anything, anything); // $ExpectType number
    _(func).defer(); // $ExpectType Primitive<number>
    _(func).defer(anything, anything, anything); // $ExpectType Primitive<number>
    _.chain(func).defer(); // $ExpectType PrimitiveChain<number>
    _.chain(func).defer(anything, anything, anything); // $ExpectType PrimitiveChain<number>
    fp.defer(func); // $ExpectType number
}

// _.delay
{
    const func = (a: number, b: string) => true;

    _.delay(func, 500); // $ExpectType number
    _.delay(func, 500, anything, anything); // $ExpectType number
    _(func).delay(500); // $ExpectType Primitive<number>
    _(func).delay(500, anything, anything); // $ExpectType Primitive<number>
    _.chain(func).delay(500); // $ExpectType PrimitiveChain<number>
    _.chain(func).delay(500, anything, anything); // $ExpectType PrimitiveChain<number>
    fp.delay(500, func); // $ExpectType number
    fp.delay(500)(func); // $ExpectType number
}

// _.flip
{
    // TODO: fix - output arguments should be reversed
    _.flip((a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
    _((a: string, b: number): boolean => true).flip(); // $ExpectType Function<(a: string, b: number) => boolean>
    _.chain((a: string, b: number): boolean => true).flip(); // $ExpectType FunctionChain<(a: string, b: number) => boolean>
    fp.flip((a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
}

// _.flow
// _.flowRight
{
    const fn1 = (n: number): number => 0;
    const fn2 = (m: number, n: number): number => 0;
    const fn3 = (a: number): string => "";
    const fn4 = (a: string): boolean => true;
    const fn5 = (): number => 0;

    _.flow(fn2, fn1); // $ExpectType (m: number, n: number) => number
    _.flow(fn2, fn1, fn1, fn1, fn1, fn1, fn1); // $ExpectType (m: number, n: number) => number
    _.flow(fn2, fn1, fn3, fn4); // $ExpectType (m: number, n: number) => boolean
    _.flow([fn2, fn1, fn3, fn4]); // $ExpectType (...args: any[]) => any
    _.flow(fn5, fn1); // $ExpectType () => number

    _(fn2).flow(fn1); // $ExpectType Function<(m: number, n: number) => number>
    _(fn2).flow(fn1, fn1); // $ExpectType Function<(m: number, n: number) => number>
    _(fn2).flow(fn1, fn1, fn1); // $ExpectType Function<(m: number, n: number) => number>
    _(fn2).flow([fn1, fn1, fn1]); // $ExpectType Function<(...args: any[]) => any>
    _(fn5).flow(fn1); // $ExpectType Function<() => number>

    _.chain(fn2).flow(fn1); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn2).flow(fn1, fn1); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn2).flow(fn1, fn1, fn1); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn2).flow([fn1, fn1, fn1]); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(fn5).flow(fn1); // $ExpectType FunctionChain<() => number>

    fp.flow(fn1, fn1); // $ExpectType (n: number) => number
    fp.flow(fn1, fn3); // $ExpectType (n: number) => string
    fp.flow(fn2, fn1, fn1); // $ExpectType (m: number, n: number) => number
    fp.flow(fn2, fn1, fn1, fn1); // $ExpectType (m: number, n: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1); // $ExpectType (m: number, n: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1, fn1); // $ExpectType (m: number, n: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1, fn1, fn1); // $ExpectType (m: number, n: number) => number
    fp.flow(fn2, fn3); // $ExpectType (m: number, n: number) => string
    fp.flow(fn2, fn3, fn4); // $ExpectType (m: number, n: number) => boolean
    fp.flow(fn2, fn1, fn3, fn4); // $ExpectType (m: number, n: number) => boolean
    fp.flow([fn2, fn1, fn3, fn4]); // $ExpectType (...args: any[]) => any
    fp.flow(fn5, fn1); // $ExpectType () => number

    _.flowRight(fn1, fn2); // $ExpectType (m: number, n: number) => number
    _.flowRight(fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    _.flowRight(fn1, fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    _.flowRight([fn1, fn1, fn1, fn2]); // $ExpectType (...args: any[]) => any
    _.flowRight(fn1, fn5); // $ExpectType () => number

    _(fn1).flowRight(fn2); // $ExpectType Function<(m: number, n: number) => number>
    _(fn1).flowRight(fn1, fn2); // $ExpectType Function<(m: number, n: number) => number>
    _(fn1).flowRight(fn1, fn1, fn2); // $ExpectType Function<(m: number, n: number) => number>
    _(fn1).flowRight([fn1, fn1, fn2]); // $ExpectType Function<(...args: any[]) => any>
    _(fn1).flowRight(fn5); // $ExpectType Function<() => number>

    _.chain(fn1).flowRight(fn2); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn1).flowRight(fn1, fn2); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn1).flowRight(fn1, fn1, fn2); // $ExpectType FunctionChain<(m: number, n: number) => number>
    _.chain(fn1).flowRight([fn1, fn1, fn2]); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(fn1).flowRight(fn5); // $ExpectType FunctionChain<() => number>

    fp.flowRight(fn1, fn1); // $ExpectType (n: number) => number
    fp.flowRight(fn3, fn1); // $ExpectType (n: number) => string
    fp.flowRight(fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    fp.flowRight(fn1, fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn1, fn1, fn2); // $ExpectType (m: number, n: number) => number
    fp.flowRight(fn3, fn2); // $ExpectType (m: number, n: number) => string
    fp.flowRight(fn4, fn3, fn2); // $ExpectType (m: number, n: number) => boolean
    fp.flowRight(fn4, fn3, fn1, fn2); // $ExpectType (m: number, n: number) => boolean
    fp.flowRight([fn4, fn3, fn1, fn2]); // $ExpectType (...args: any[]) => any
    fp.flowRight(fn1, fn5); // $ExpectType () => number
}

// _.memoize
{
    const memoizedFunction: _.MemoizedFunction = anything;
    memoizedFunction.cache; // $ExpectType MapCache

    const testMapCache: _.MapCache = {
        delete(key: string) { return true; },
        get(key: string): any { return 1; },
        has(key: string) { return true; },
        set(key: string, value: any): _.MapCache { return this; },
        clear() { },
    };

    const memoizeFn = (a1: string, a2: number): boolean => true;
    const memoizeResolverFn = (a1: string, a2: number) => "";

    _.memoize(memoizeFn); // $ExpectType ((a1: string, a2: number) => boolean) & MemoizedFunction
    _.memoize(memoizeFn, memoizeResolverFn); // $ExpectType ((a1: string, a2: number) => boolean) & MemoizedFunction
    _(memoizeFn).memoize(); // $ExpectType Function<((a1: string, a2: number) => boolean) & MemoizedFunction>
    _(memoizeFn).memoize(memoizeResolverFn); // $ExpectType Function<((a1: string, a2: number) => boolean) & MemoizedFunction>
    _.chain(memoizeFn).memoize(); // $ExpectType FunctionChain<((a1: string, a2: number) => boolean) & MemoizedFunction>
    _.chain(memoizeFn).memoize(memoizeResolverFn); // $ExpectType FunctionChain<((a1: string, a2: number) => boolean) & MemoizedFunction>
    fp.memoize(memoizeFn); // $ExpectType ((a1: string, a2: number) => boolean) & MemoizedFunction

    // $ExpectType MapCache
    new _.memoize.Cache();
    _.memoize.Cache = WeakMap;
    _.memoize.Cache = Map;
    const memoizedFn = _.memoize(memoizeFn);
    memoizedFn.cache = new WeakMap();
    memoizedFn.cache = new Map();
}

// _.overArgs
{
    const func = (a: number, b: string) => true;

    _.overArgs(func, (a: number) => true, (b: string) => true); // $ExpectType (...args: any[]) => any
    _.overArgs(func, [(a: number) => true, (b: string) => true]); // $ExpectType (...args: any[]) => any
    _(func).overArgs((a: number) => true, (b: string) => true); // $ExpectType Function<(...args: any[]) => any>
    _(func).overArgs([(a: number) => true, (b: string) => true]); // $ExpectType Function<(...args: any[]) => any>
    _.chain(func).overArgs((a: number) => true, (b: string) => true); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(func).overArgs([(a: number) => true, (b: string) => true]); // $ExpectType FunctionChain<(...args: any[]) => any>

    fp.overArgs(func, [(a: number) => true, (b: string) => true]); // $ExpectType (...args: any[]) => any
    fp.overArgs(func)([(a: number) => true, (b: string) => true]); // $ExpectType (...args: any[]) => any
}

// _.negate
{
    const fnWithRestParameters: (...args: number[]) => boolean = anything;
    _.negate(fnWithRestParameters); // $ExpectType (...args: number[]) => boolean
    _(fnWithRestParameters).negate(); // $ExpectType Function<(...args: number[]) => boolean>
    _.chain(fnWithRestParameters).negate(); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    fp.negate(fnWithRestParameters); // $ExpectType (...args: number[]) => boolean

    _.negate(() => 'foo'); // $ExpectError

    _.negate((a1: number, a2: number): boolean => true); // $ExpectType (a1: number, a2: number) => boolean
    _((a1: number, a2: number): boolean => true).negate(); // $ExpectType Function<(a1: number, a2: number) => boolean>
    _.chain((a1: number, a2: number): boolean => true).negate(); // $ExpectType FunctionChain<(a1: number, a2: number) => boolean>
    fp.negate((a1: number, a2: number): boolean => true); // $ExpectType (a1: number, a2: number) => boolean

    const userDefinedTypeGuard = (item: any): item is number => typeof item === "number";

    _.negate(userDefinedTypeGuard); // $ExpectType (item: any) => boolean
    _(userDefinedTypeGuard).negate(); // $ExpectType Function<(item: any) => boolean>
    _.chain(userDefinedTypeGuard).negate(); // $ExpectType FunctionChain<(item: any) => boolean>
    fp.negate(userDefinedTypeGuard); // $ExpectType (item: any) => boolean

    _.negate((a1: number, a2: number, a3: number): boolean => true); // $ExpectType (a1: number, a2: number, a3: number) => boolean
    _((a1: number, a2: number, a3: number): boolean => true).negate(); // $ExpectType Function<(a1: number, a2: number, a3: number) => boolean>
    _.chain((a1: number, a2: number, a3: number): boolean => true).negate(); // $ExpectType FunctionChain<(a1: number, a2: number, a3: number) => boolean>
    fp.negate((a1: number, a2: number, a3: number): boolean => true); // $ExpectType (a1: number, a2: number, a3: number) => boolean
}

// _.once
{
    _.once((a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
    _((a: string, b: number): boolean => true).once(); // $ExpectType Function<(a: string, b: number) => boolean>
    _.chain((a: string, b: number): boolean => true).once(); // $ExpectType FunctionChain<(a: string, b: number) => boolean>
    fp.once((a: string, b: number): boolean => true); // $ExpectType (a: string, b: number) => boolean
}

// _.rearg
{
    const testReargFn = (a: string, b: string, c: string) => [a, b, c];
    _.rearg(testReargFn, 2, 0, 1); // $ExpectType (...args: any[]) => any
    _.rearg(testReargFn, [2, 0, 1]); // $ExpectType (...args: any[]) => any
    _(testReargFn).rearg(2, 0, 1); // $ExpectType Function<(...args: any[]) => any>
    _(testReargFn).rearg([2, 0, 1]); // $ExpectType Function<(...args: any[]) => any>
    _.chain(testReargFn).rearg(2, 0, 1); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain(testReargFn).rearg([2, 0, 1]); // $ExpectType FunctionChain<(...args: any[]) => any>

    fp.rearg([2, 0, 1], testReargFn); // $ExpectType (...args: any[]) => any
    fp.rearg([2, 0, 1])(testReargFn); // $ExpectType (...args: any[]) => any
}

// _.rest
{
    _.rest((a: string, b: number[]) => true); // $ExpectType (...args: any[]) => any
    _.rest((a: string, b: number[]) => true, 1); // $ExpectType (...args: any[]) => any
    _((a: string, b: number[]) => true).rest(); // $ExpectType Function<(...args: any[]) => any>
    _((a: string, b: number[]) => true).rest(1); // $ExpectType Function<(...args: any[]) => any>
    _.chain((a: string, b: number[]) => true).rest(); // $ExpectType FunctionChain<(...args: any[]) => any>
    _.chain((a: string, b: number[]) => true).rest(1); // $ExpectType FunctionChain<(...args: any[]) => any>
    fp.rest((a: string, b: number[]) => true); // $ExpectType (...args: any[]) => any
    fp.restFrom(1)((a: string, b: number[]) => true); // $ExpectType (...args: any[]) => any
}

// _.spread
{
    _.spread((a: Array<number | string>): boolean => true); // $ExpectType (...args: any[]) => boolean
    _((a: Array<number | string>): boolean => true).spread(); // $ExpectType Function<(...args: any[]) => boolean>
    _.chain((a: Array<number | string>): boolean => true).spread(); // $ExpectType FunctionChain<(...args: any[]) => boolean>
    fp.spread((a: Array<number | string>): boolean => true); // $ExpectType (...args: any[]) => boolean
}

// _.throttle
{
    const options: _.ThrottleSettings = {
        leading: true,
        trailing: false,
    };

    const func = (a: number, b: string): boolean => true;

    _.throttle(func); // $ExpectType DebouncedFunc<(a: number, b: string) => boolean>
    _.throttle(func, 42); // $ExpectType DebouncedFunc<(a: number, b: string) => boolean>
    _.throttle(func, 42, options); // $ExpectType DebouncedFunc<(a: number, b: string) => boolean>
    _(func).throttle(); // $ExpectType Function<DebouncedFunc<(a: number, b: string) => boolean>>
    _(func).throttle(42); // $ExpectType Function<DebouncedFunc<(a: number, b: string) => boolean>>
    _(func).throttle(42, options); // $ExpectType Function<DebouncedFunc<(a: number, b: string) => boolean>>
    _.chain(func).throttle(); // $ExpectType FunctionChain<DebouncedFunc<(a: number, b: string) => boolean>>
    _.chain(func).throttle(42); // $ExpectType FunctionChain<DebouncedFunc<(a: number, b: string) => boolean>>
    _.chain(func).throttle(42, options); // $ExpectType FunctionChain<DebouncedFunc<(a: number, b: string) => boolean>>

    fp.throttle(42, func); // $ExpectType DebouncedFunc<(a: number, b: string) => boolean>
    fp.throttle(42)(func); // $ExpectType DebouncedFunc<(a: number, b: string) => boolean>
}

// _.unary
{
    _.unary((a: string, b: number): boolean => true); // $ExpectType (arg1: string) => boolean
    _((a: string, b: number): boolean => true).unary(); // $ExpectType Function<(arg1: string) => boolean>
    _.chain((a: string, b: number): boolean => true).unary(); // $ExpectType FunctionChain<(arg1: string) => boolean>
    fp.unary((a: string, b: number): boolean => true); // $ExpectType (arg1: string) => boolean
}

// _.wrap
{
    _.wrap("a", (arg1: string, ...args: number[]): boolean => true); // $ExpectType (...args: number[]) => boolean
    _("a").wrap((arg1: string, ...args: number[]): boolean => true); // $ExpectType Function<(...args: number[]) => boolean>
    _.chain("a").wrap((arg1: string, ...args: number[]): boolean => true); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    fp.wrap((arg1: string, ...args: number[]): boolean => true, "a"); // $ExpectType (...args: number[]) => boolean
    fp.wrap((arg1: string, ...args: number[]): boolean => true)("a"); // $ExpectType (...args: number[]) => boolean
}

/********
 * Lang *
 ********/

// _.castArray
{
    _.castArray(42); // $ExpectType number[]
    _.castArray([42]); // $ExpectType number[]
    _.castArray({ a: 42 }); // $ExpectType { a: number; }[]
    _(42).castArray(); // $ExpectType Collection<number>
    _([42]).castArray(); // $ExpectType Collection<number>
    _.chain(42).castArray(); // $ExpectType CollectionChain<number>
    _.chain([42]).castArray(); // $ExpectType CollectionChain<number>

    fp.castArray(42); // $ExpectType number[]
    fp.castArray([42]); // $ExpectType number[]
}

// _.clone
{
    _.clone(42); // $ExpectType 42
    _.clone({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
    _(42).clone(); // $ExpectType number
    _({ a: { b: 42 } }).clone(); // $ExpectType { a: { b: number; }; }
    _.chain(42).clone(); // $ExpectType PrimitiveChain<number>
    _.chain({ a: { b: 42 } }).clone(); // $ExpectType ObjectChain<{ a: { b: number; }; }>
    fp.clone(42); // $ExpectType 42
    fp.clone({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
}

// _.cloneDeep
{
    _.cloneDeep(42); // $ExpectType 42
    _.cloneDeep({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
    _(42).cloneDeep(); // $ExpectType number
    _({ a: { b: 42 } }).cloneDeep(); // $ExpectType { a: { b: number; }; }
    _.chain(42).cloneDeep(); // $ExpectType PrimitiveChain<number>
    _.chain({ a: { b: 42 } }).cloneDeep(); // $ExpectType ObjectChain<{ a: { b: number; }; }>
    fp.cloneDeep(42); // $ExpectType 42
    fp.cloneDeep({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
}

// _.cloneDeepWith
{
    const customizer = (x: any) => "";

    _.cloneDeepWith(42, customizer); // $ExpectType any
    _(42).cloneDeepWith(customizer); // $ExpectType any
    _.chain(42).cloneDeepWith(customizer); // $ExpectType LoDashExplicitWrapper<any>

    _.cloneDeepWith({a: {b: 42}}, customizer); // $ExpectType any

    fp.cloneDeepWith((x) => "", 42); // $ExpectType any
    fp.cloneDeepWith((x) => "")(42); // $ExpectType any
    fp.cloneDeepWith((x) => "", [42]); // $ExpectType any
    fp.cloneDeepWith((x) => "", { a: { b: 42 } }); // $ExpectType any
}

// _.cloneWith
{
    {
        const customizer = (x: number) => "";

        _.cloneWith(42, customizer); // $ExpectType string
        _(42).cloneWith(customizer); // $ExpectType string
        _.chain(42).cloneWith<string>(customizer); // $ExpectType StringChain

        fp.cloneWith(customizer, 42); // $ExpectType string
        fp.cloneWith(customizer)(42); // $ExpectType string
    }

    {
        const customizer = (x: number): string | undefined => "";
        const value: number = anything;

        _.cloneWith(value, customizer); // string | number
        _(value).cloneWith(customizer); // string | number
        _.chain(value).cloneWith(customizer); // string | number

        fp.cloneWith(customizer, value); // $ExpectType string | number
        fp.cloneWith(customizer)(value); // $ExpectType string | number
    }
}

// _.conforms
{
    _.conforms({ })({ foo: "foo" }); // $ExpectType boolean
    _({ foo: (v: string) => false }).conforms().value()({ foo: "foo" }); // $ExpectType boolean
    _.chain({ foo: (v: string) => false }).conforms().value()({ foo: "foo" }); // $ExpectType boolean
    fp.conforms({ foo: (v: string) => false })({ foo: "foo" }); // $ExpectType boolean
}

// _.conformsTo
{
    _.conformsTo({ foo: "foo" }, { foo: (v: string) => false }); // $ExpectType boolean
    _({ foo: "foo" }).conformsTo({ foo: (v: string) => false }); // $ExpectType boolean
    _.chain({ foo: "foo" }).conformsTo({ foo: (v: string) => false }); // $ExpectType PrimitiveChain<boolean>

    fp.conformsTo({ foo: (v: string) => false }, { foo: "foo" }); // $ExpectType boolean
    fp.conformsTo({ foo: (v: string) => false })({ foo: "foo" }); // $ExpectType boolean
}

// _.eq
{
    _.eq(anything, anything); // $ExpectType boolean
    _(anything).eq(anything); // $ExpectType boolean
    _.chain(anything).eq(anything); // $ExpectType PrimitiveChain<boolean>

    fp.eq(anything, anything); // $ExpectType boolean
    fp.eq(anything)(anything); // $ExpectType boolean
}

// _.gt
{
    _.gt(anything, anything); // $ExpectType boolean
    _(anything).gt(anything); // $ExpectType boolean
    _.chain(anything).gt(anything); // $ExpectType PrimitiveChain<boolean>

    fp.gt(anything, anything); // $ExpectType boolean
    fp.gt(anything)(anything); // $ExpectType boolean
}

// _.gte
{
    _.gte(anything, anything); // $ExpectType boolean
    _(anything).gte(anything); // $ExpectType boolean
    _.chain(anything).gte(anything); // $ExpectType PrimitiveChain<boolean>

    fp.gte(anything, anything); // $ExpectType boolean
    fp.gte(anything)(anything); // $ExpectType boolean
}

// _.isArguments
{
    const  value: number | IArguments = 0;

    if (_.isArguments(value)) {
        const result: IArguments = value;
    } else {
        value; // $ExpectType number
    }

    if (fp.isArguments(value)) {
        const result: IArguments = value;
    } else {
        value; // $ExpectType number
    }

    _.isArguments(""); // $ExpectType boolean
    _({}).isArguments(); // $ExpectType boolean
    _.chain([]).isArguments(); // $ExpectType PrimitiveChain<boolean>
    fp.isArguments(anything); // $ExpectType boolean
}

// _.isArray
{
    const value: number | string[] | boolean[] = anything;

    if (_.isArray(value)) {
        const result: string[] | boolean[] = value;
    } else {
        value; // $ExpectType number
    }

    if (fp.isArray(value)) {
        const result: string[] | boolean[] = value;
    } else {
        value; // $ExpectType number
    }

    _.isArray(anything); // $ExpectType boolean
    _({}).isArray(); // $ExpectType boolean
    _.chain([]).isArray(); // $ExpectType PrimitiveChain<boolean>
    fp.isArray(anything); // $ExpectType boolean
}

// _.isArrayBuffer
{
    const value: ArrayBuffer | number = anything;

    if (_.isArrayBuffer(value)) {
        value; // $ExpectType ArrayBuffer
    } else {
        value; // $ExpectType number
    }

    if (fp.isArrayBuffer(value)) {
        value; // $ExpectType ArrayBuffer
    } else {
        value; // $ExpectType number
    }

    _.isArrayBuffer(anything); // $ExpectType boolean
    _({}).isArrayBuffer(); // $ExpectType boolean
    _.chain([]).isArrayBuffer(); // $ExpectType PrimitiveChain<boolean>
    fp.isArrayBuffer(anything); // $ExpectType boolean
}

// _.isArrayLike
{
    {
        const value: string | string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLike(value)) {
            const result: string | string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            const result: number | { length: string } | { a: string; } | null | undefined = value;
        }

        if (fp.isArrayLike(value)) {
            const result: string | string[] | { [index: number]: boolean; length: number; } | [number, boolean] = value;
        } else {
            const result: number | { length: string; } | { a: string; } | null | undefined = value;
        }
    }

    {
        const value: boolean[] = anything;

        if (_.isArrayLike(value)) {
            const result: boolean[] = value;
        } else {
            value; // $ExpectType never
        }

        if (fp.isArrayLike(value)) {
            value; // $ExpectType boolean[]
        } else {
            value; // $ExpectType never
        }
    }

    {
        const value: () => number = anything;

        if (_.isArrayLike(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType () => number
        }

        if (fp.isArrayLike(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType () => number
        }
    }

    {
        const value: { a: string } = anything;

        if (_.isArrayLike(value)) {
            const result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }

        if (fp.isArrayLike(value)) {
            const result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        const value: any = anything;

        if (_.isArrayLike(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }

        if (fp.isArrayLike(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }
    }

    _.isArrayLike(anything); // $ExpectType boolean
    _({}).isArrayLike(); // $ExpectType boolean
    _.chain([]).isArrayLike(); // $ExpectType PrimitiveChain<boolean>
    fp.isArrayLike(anything); // $ExpectType boolean
}

// _.isArrayLikeObject
{
    {
        const value: string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | string | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLikeObject(value)) {
            const result: string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            const result: string | number | { length: string; } | { a: string; } | null | undefined = value;
        }

        if (fp.isArrayLikeObject(value)) {
            const result: string[] | [number, boolean] | { [index: number]: boolean; length: number; } =  value;
        } else {
            const result: string | number | { length: string; } | { a: string; } | null | undefined = value;
        }
    }

    {
        const value: boolean[] = anything;

        if (_.isArrayLikeObject(value)) {
            const result: boolean[] = value;
        } else {
            value; // $ExpectType never
        }

        if (fp.isArrayLikeObject(value)) {
            const result: boolean[] = value;
        } else {
            value; // $ExpectType never
        }
    }

    {
        const value: (a: string) => boolean = anything;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType (a: string) => boolean
        }

        if (fp.isArrayLikeObject(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType (a: string) => boolean
        }
    }

    {
        const value: { a: string } = anything;

        if (_.isArrayLikeObject(value)) {
            const result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }

        if (fp.isArrayLikeObject(value)) {
            const result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        const value: any = anything;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }

        if (fp.isArrayLikeObject(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }
    }

    _.isArrayLikeObject(anything); // $ExpectType boolean
    _({}).isArrayLikeObject(); // $ExpectType boolean
    _.chain([]).isArrayLikeObject(); // $ExpectType PrimitiveChain<boolean>
    fp.isArrayLikeObject(anything); // $ExpectType boolean
}

// _.isBoolean
{
    const value: number | boolean = 0;

    if (_.isBoolean(value)) {
        const result: boolean = value;
    } else {
        value; // $ExpectType number
    }

    if (fp.isBoolean(value)) {
        const result: boolean = value;
    } else {
        value; // $ExpectType number
    }

    _.isBoolean(anything); // $ExpectType boolean
    _({}).isBoolean(); // $ExpectType boolean
    _.chain([]).isBoolean(); // $ExpectType PrimitiveChain<boolean>
}

// _.isBuffer
{
    _.isBuffer(anything); // $ExpectType boolean
    _({}).isBuffer(); // $ExpectType boolean
    _.chain([]).isBuffer(); // $ExpectType PrimitiveChain<boolean>
    fp.isBuffer(anything); // $ExpectType boolean
}

// _.isDate
{
    const value: number | Date = 0;

    if (_.isDate(value)) {
        const result: Date = value;
    } else {
        value; // $ExpectType number
    }

    if (fp.isDate(value)) {
        const date: Date = value;
    } else {
        value; // $ExpectType number
    }

    _.isDate(anything); // $ExpectType boolean
    _({}).isDate(); // $ExpectType boolean
    _.chain([]).isDate(); // $ExpectType PrimitiveChain<boolean>
    fp.isDate(anything); // $ExpectType boolean
}

// _.isElement
{
    _.isElement(anything); // $ExpectType boolean
    _({}).isElement(); // $ExpectType boolean
    _.chain([]).isElement(); // $ExpectType PrimitiveChain<boolean>
    fp.isElement(anything); // $ExpectType boolean
}

// _.isEmpty
{
    _.isEmpty(anything); // $ExpectType boolean
    _({}).isEmpty(); // $ExpectType boolean
    _.chain([]).isEmpty(); // $ExpectType PrimitiveChain<boolean>
    fp.isEmpty(anything); // $ExpectType boolean
}

// _.isEqual
{
    _.isEqual(anything, anything); // $ExpectType boolean
    _(anything).isEqual(anything); // $ExpectType boolean
    _.chain(anything).isEqual(anything); // $ExpectType PrimitiveChain<boolean>

    fp.isEqual(anything, anything); // $ExpectType boolean
    fp.isEqual(anything)(anything); // $ExpectType boolean
    fp.equals(anything)(anything); // $ExpectType boolean
}

// _.isEqualWith
{
    const customizer = (value: any, other: any, indexOrKey: number|string|symbol|undefined, parent: any, otherParent: any, stack: any) => true;

    _.isEqualWith(anything, anything, customizer); // $ExpectType boolean
    _(anything).isEqualWith(anything, customizer); // $ExpectType boolean
    _.chain(anything).isEqualWith(anything, customizer); // $ExpectType PrimitiveChain<boolean>

    fp.isEqualWith(customizer, anything, anything); // $ExpectType boolean
    fp.isEqualWith(customizer)(anything)(anything); // $ExpectType boolean
}

// _.isError
{
    {
        const value: number | Error = anything;

        if (_.isError(value)) {
            value; // $ExpectType Error
        } else {
            value; // $ExpectType number
        }

        if (fp.isError(value)) {
            value; // $ExpectType Error
        } else {
            value; // $ExpectType number
        }
    }

    {
        class CustomError extends Error {
            custom: string;
        }

        const value: number | CustomError = anything;

        if (_.isError(value)) {
            value; // $ExpectType CustomError
        } else {
            value; // $ExpectType number
        }

        if (fp.isError(value)) {
            value; // $ExpectType CustomError
        } else {
            value; // $ExpectType number
        }
    }

    _.isError(anything); // $ExpectType boolean
    _({}).isError(); // $ExpectType boolean
    _.chain([]).isError(); // $ExpectType PrimitiveChain<boolean>
    fp.isError(anything); // $ExpectType boolean
}

// _.isFinite
{
    _.isFinite(NaN); // $ExpectType boolean
    _(42).isFinite(); // $ExpectType boolean
    _.chain([]).isFinite(); // $ExpectType PrimitiveChain<boolean>
    fp.isFinite(anything); // $ExpectType boolean
}

// _.isFunction
{
    const value: number | (() => void) = anything;

    if (_.isFunction(value)) {
        value; // $ExpectType () => void
    } else {
        value; // $ExpectType number
    }

    if (fp.isFunction(value)) {
        value; // $ExpectType () => void
    } else {
        value; // $ExpectType number
    }

    if (_.isFunction(anything)) {
        anything();
    }

    if (fp.isFunction(anything)) {
        anything();
    }

    _.isFunction(anything); // $ExpectType boolean
    _({}).isFunction(); // $ExpectType boolean
    _.chain([]).isFunction(); // $ExpectType PrimitiveChain<boolean>
    fp.isFunction(anything); // $ExpectType boolean
}

// _.isInteger
{
    _.isInteger(NaN); // $ExpectType boolean
    _(42).isInteger(); // $ExpectType boolean
    _.chain([]).isInteger(); // $ExpectType PrimitiveChain<boolean>
    fp.isInteger(anything); // $ExpectType boolean
}

// _.isLength
{
    _.isLength(NaN); // $ExpectType boolean
    _(42).isLength(); // $ExpectType boolean
    _.chain([]).isLength(); // $ExpectType PrimitiveChain<boolean>
    fp.isLength(anything); // $ExpectType boolean
}

// _.isMap
{
    const value: number | Map<string, number> = 0;

    if (_.isMap(value)) {
        const result: Map<string, number> = value;
    } else {
        const result: number = value;
    }

    if (fp.isMap(value)) {
        const result: Map<string, number> = value;
    } else {
        const result: number = value;
    }

    _.isMap(anything); // $ExpectType boolean
    _({}).isMap(); // $ExpectType boolean
    _.chain([]).isMap(); // $ExpectType PrimitiveChain<boolean>
    fp.isMap(anything); // $ExpectType boolean
}

// _.isMatch
{
    _.isMatch({}, {}); // $ExpectType boolean
    _({}).isMatch({}); // $ExpectType boolean
    _.chain({}).isMatch({}); // $ExpectType PrimitiveChain<boolean>
    fp.isMatch({}, {}); // $ExpectType boolean
    fp.isMatch({})({}); // $ExpectType boolean
}

// _.isMatchWith
{
    const testIsMatchCustiomizerFnBoolean = (value: any, other: any, indexOrKey: number|string|symbol, object: object, source: object) => true;
    const testIsMatchCustiomizerFnUndefined = (value: any, other: any, indexOrKey: number|string|symbol, object: object, source: object) => undefined;

    _.isMatchWith({}, {}, testIsMatchCustiomizerFnBoolean); // $ExpectType boolean
    _.isMatchWith({}, {}, testIsMatchCustiomizerFnUndefined); // $ExpectType boolean
    _({}).isMatchWith({}, testIsMatchCustiomizerFnBoolean); // $ExpectType boolean
    _({}).isMatchWith({}, testIsMatchCustiomizerFnUndefined); // $ExpectType boolean
    _.chain({}).isMatchWith({}, testIsMatchCustiomizerFnBoolean); // $ExpectType PrimitiveChain<boolean>
    _.chain({}).isMatchWith({}, testIsMatchCustiomizerFnUndefined); // $ExpectType PrimitiveChain<boolean>

    fp.isMatchWith(testIsMatchCustiomizerFnBoolean, {}, {}); // $ExpectType boolean
    fp.isMatchWith(testIsMatchCustiomizerFnUndefined, {}, {}); // $ExpectType boolean
    fp.isMatchWith(testIsMatchCustiomizerFnBoolean)({})({}); // $ExpectType boolean
    fp.isMatchWith(testIsMatchCustiomizerFnUndefined)({})({}); // $ExpectType boolean
}

// _.isNaN
{
    _.isNaN(NaN); // $ExpectType boolean
    _(42).isNaN(); // $ExpectType boolean
    _.chain([]).isNaN(); // $ExpectType PrimitiveChain<boolean>
    fp.isNaN(anything); // $ExpectType boolean
}

// _.isNative
{
    const value: number | (() => void) = anything;

    if (_.isNative(value)) {
        value; // $ExpectType () => void
    } else {
        value; // $ExpectType number
    }

    if (fp.isNative(value)) {
        value; // $ExpectType () => void
    } else {
        value; // $ExpectType number
    }

    _.isNative(anything); // $ExpectType boolean
    _({}).isNative(); // $ExpectType boolean
    _.chain([]).isNative(); // $ExpectType PrimitiveChain<boolean>
    fp.isNative(anything); // $ExpectType boolean
}

// _.isNil
{
    _.isNil(null); // $ExpectType boolean
    _(undefined).isNil(); // $ExpectType boolean
    _.chain(NaN).isNil(); // $ExpectType PrimitiveChain<boolean>
    fp.isNil(undefined); // $ExpectType boolean
}

// _.isNull
{
    _.isNull(null); // $ExpectType boolean
    _(undefined).isNull(); // $ExpectType boolean
    _.chain(NaN).isNull(); // $ExpectType PrimitiveChain<boolean>
    fp.isNull(undefined); // $ExpectType boolean
}

// _.isNumber
{
    const value: string | number = 0;

    if (_.isNumber(value)) {
        const result: number = value;
    } else {
        const result: string = value;
    }

    if (fp.isNumber(value)) {
        const result: number = value;
    } else {
        const result: string = value;
    }

    _.isNumber(NaN); // $ExpectType boolean
    _(42).isNumber(); // $ExpectType boolean
    _.chain([]).isNumber(); // $ExpectType PrimitiveChain<boolean>
    fp.isNumber(anything); // $ExpectType boolean
}

// _.isObject
{
    _.isObject(NaN); // $ExpectType boolean
    _(42).isObject(); // $ExpectType boolean
    _.chain([]).isObject(); // $ExpectType PrimitiveChain<boolean>
    fp.isObject(anything); // $ExpectType boolean
    if (fp.isObject(anything)) {
        anything; // $ExpectType object
    }
    if (_.isObject(anything)) {
        anything; // $ExpectType object
    }
}

// _.isObjectLike
{
    _.isObjectLike(NaN); // $ExpectType boolean
    _(42).isObjectLike(); // $ExpectType boolean
    _.chain([]).isObjectLike(); // $ExpectType PrimitiveChain<boolean>
    fp.isObjectLike(anything); // $ExpectType boolean
}

// _.isPlainObject
{
    _.isPlainObject(NaN); // $ExpectType boolean
    _(42).isPlainObject(); // $ExpectType boolean
    _.chain([]).isPlainObject(); // $ExpectType PrimitiveChain<boolean>
    fp.isPlainObject(anything); // $ExpectType boolean
}

// _.isRegExp
{
    {
        const value: number | RegExp = anything;

        if (_.isRegExp(value)) {
            const result: RegExp = value;
        } else {
            const result: number = value;
        }

        if (fp.isRegExp(value)) {
            const result: RegExp = value;
        } else {
            const result: number = value;
        }
    }

    _.isRegExp(/./); // $ExpectType boolean
    _(42).isRegExp(); // $ExpectType boolean
    _.chain([]).isRegExp(); // $ExpectType PrimitiveChain<boolean>
    fp.isRegExp(anything); // $ExpectType boolean
}

// _.isSafeInteger
{
    _.isSafeInteger(NaN); // $ExpectType boolean
    _(42).isSafeInteger(); // $ExpectType boolean
    _.chain([]).isSafeInteger(); // $ExpectType PrimitiveChain<boolean>
    fp.isSafeInteger(anything); // $ExpectType boolean
}

// _.isSet
{
    const value: number | Set<string> = 0;

    if (_.isSet(value)) {
        const result: Set<string> = value;
    } else {
        const result: number = value;
    }

    if (fp.isSet(value)) {
        const result: Set<string> = value;
    } else {
        const result: number = value;
    }

    _.isSet(NaN); // $ExpectType boolean
    _(42).isSet(); // $ExpectType boolean
    _.chain([]).isSet(); // $ExpectType PrimitiveChain<boolean>
    fp.isSet(anything); // $ExpectType boolean
}

// _.isString
{
    const value: number | string = "";

    if (_.isString(value)) {
        const result: string = value;
    } else {
        const result: number = value;
    }

    if (fp.isString(value)) {
        const result: string = value;
    } else {
        const result: number = value;
    }

    _.isString(""); // $ExpectType boolean
    _(42).isString(); // $ExpectType boolean
    _.chain([]).isString(); // $ExpectType PrimitiveChain<boolean>
    fp.isString(anything); // $ExpectType boolean
}

// _.isSymbol
{
    _.isSymbol(NaN); // $ExpectType boolean
    _(42).isSymbol(); // $ExpectType boolean
    _.chain([]).isSymbol(); // $ExpectType PrimitiveChain<boolean>
    fp.isSymbol(anything); // $ExpectType boolean
    if (fp.isSymbol(anything)) {
        anything; // $ExpectType symbol
    }
    if (_.isSymbol(anything)) {
        anything; // $ExpectType symbol
    }
}

// _.isTypedArray
{
    _.isTypedArray(NaN); // $ExpectType boolean
    _(42).isTypedArray(); // $ExpectType boolean
    _.chain([]).isTypedArray(); // $ExpectType PrimitiveChain<boolean>
    fp.isTypedArray(anything); // $ExpectType boolean
}

// _.isUndefined
{
    _.isUndefined(null); // $ExpectType boolean
    _(undefined).isUndefined(); // $ExpectType boolean
    _.chain(NaN).isUndefined(); // $ExpectType PrimitiveChain<boolean>
    fp.isUndefined(undefined); // $ExpectType boolean
}

// _.isWeakMap
{
    const value: number | WeakMap<object, number> = 0;

    if (_.isWeakMap(value)) {
        const result: WeakMap<object, number> = value;
    } else {
        const result: number = value;
    }

    if (fp.isWeakMap(value)) {
        const result: WeakMap<object, number> = value;
    } else {
        const result: number = value;
    }

    _.isWeakMap(NaN); // $ExpectType boolean
    _(42).isWeakMap(); // $ExpectType boolean
    _.chain([]).isWeakMap(); // $ExpectType PrimitiveChain<boolean>
    fp.isWeakMap(anything); // $ExpectType boolean
}

// _.isWeakSet
{
    const value: number | WeakSet<object> = 0;

    if (_.isWeakSet(value)) {
        const result: WeakSet<object> = value;
    } else {
        const result: number = value;
    }

    if (fp.isWeakSet(value)) {
        const result: WeakSet<object> = value;
    } else {
        const result: number = value;
    }

    _.isWeakSet(NaN); // $ExpectType boolean
    _(42).isWeakSet(); // $ExpectType boolean
    _.chain([]).isWeakSet(); // $ExpectType PrimitiveChain<boolean>
    fp.isWeakSet(anything); // $ExpectType boolean
}

// _.lt
{
    _.lt(anything, anything); // $ExpectType boolean
    _(anything).lt(anything); // $ExpectType boolean
    _.chain(anything).lt(anything); // $ExpectType PrimitiveChain<boolean>

    fp.lt(anything, anything); // $ExpectType boolean
    fp.lt(anything)(anything); // $ExpectType boolean
}

// _.lte
{
    _.lte(anything, anything); // $ExpectType boolean
    _(anything).lte(anything); // $ExpectType boolean
    _.chain(anything).lte(anything); // $ExpectType PrimitiveChain<boolean>

    fp.lte(anything, anything); // $ExpectType boolean
    fp.lte(anything)(anything); // $ExpectType boolean
}

// _.toArray
{
    const array: AbcObject[] = [];
    const list: _.List<AbcObject> = [];
    const dictionary: _.Dictionary<AbcObject> = {};
    const numericDictionary: _.NumericDictionary<AbcObject> = {};

    _.toArray(""); // $ExpectType string[]
    _.toArray(array); // $ExpectType AbcObject[]
    _.toArray(list); // $ExpectType AbcObject[]
    _.toArray(dictionary); // $ExpectType AbcObject[]
    _.toArray(numericDictionary); // $ExpectType AbcObject[]

    _(array).toArray(); // $ExpectType Collection<AbcObject>
    _(list).toArray(); // $ExpectType Collection<AbcObject>
    _(dictionary).toArray(); // $ExpectType Collection<AbcObject>
    _(numericDictionary).toArray(); // $ExpectType Collection<AbcObject>

    _.chain(array).toArray(); // $ExpectType CollectionChain<AbcObject>
    _.chain(list).toArray(); // $ExpectType CollectionChain<AbcObject>
    _.chain(dictionary).toArray(); // $ExpectType CollectionChain<AbcObject>
    _.chain(numericDictionary).toArray(); // $ExpectType CollectionChain<AbcObject>

    fp.toArray(""); // $ExpectType string[]
    fp.toArray(array); // $ExpectType AbcObject[]
    fp.toArray(list); // $ExpectType AbcObject[]
    fp.toArray(dictionary); // $ExpectType AbcObject[]
    fp.toArray(numericDictionary); // $ExpectType AbcObject[]
}

// _.toPlainObject
{
    _.toPlainObject(); // $ExpectType any
    _.toPlainObject(true); // $ExpectType any
    _.toPlainObject(1); // $ExpectType any
    _.toPlainObject("a"); // $ExpectType any
    _.toPlainObject([]); // $ExpectType any
    _.toPlainObject({}); // $ExpectType any

    _(true).toPlainObject(); // $ExpectType Object<any>
    _([""]).toPlainObject(); // $ExpectType Object<any>
    _({}).toPlainObject(); // $ExpectType Object<any>

    _.chain(true).toPlainObject(); // $ExpectType ObjectChain<any>
    _.chain([""]).toPlainObject(); // $ExpectType ObjectChain<any>
    _.chain({}).toPlainObject(); // $ExpectType ObjectChain<any>

    fp.toPlainObject(true); // $ExpectType any
    fp.toPlainObject(["a"]); // $ExpectType any
    fp.toPlainObject({}); // $ExpectType any
}

// _.toFinite
{
    _.toFinite(true); // $ExpectType number
    _.toFinite(1); // $ExpectType number
    _.toFinite("3.2"); // $ExpectType number
    _(1).toFinite(); // $ExpectType number
    _("3.2").toFinite(); // $ExpectType number
    _.chain(1).toFinite(); // $ExpectType PrimitiveChain<number>
    _.chain("3.2").toFinite(); // $ExpectType PrimitiveChain<number>
    fp.toFinite(true); // $ExpectType number
    fp.toFinite(1); // $ExpectType number
    fp.toFinite("3.2"); // $ExpectType number
}

// _.toInteger
{
    _.toInteger(true); // $ExpectType number
    _.toInteger(1); // $ExpectType number
    _.toInteger("3.2"); // $ExpectType number
    _(1).toInteger(); // $ExpectType number
    _("3.2").toInteger(); // $ExpectType number
    _.chain(1).toInteger(); // $ExpectType PrimitiveChain<number>
    _.chain("3.2").toInteger(); // $ExpectType PrimitiveChain<number>
    fp.toInteger(true); // $ExpectType number
    fp.toInteger(1); // $ExpectType number
    fp.toInteger("3.2"); // $ExpectType number
}

// _.toLength
{
    _.toLength(true); // $ExpectType number
    _.toLength(1); // $ExpectType number
    _.toLength("3.2"); // $ExpectType number
    _(1).toLength(); // $ExpectType number
    _("3.2").toLength(); // $ExpectType number
    _.chain(1).toLength(); // $ExpectType PrimitiveChain<number>
    _.chain("3.2").toLength(); // $ExpectType PrimitiveChain<number>
    fp.toLength(true); // $ExpectType number
    fp.toLength(1); // $ExpectType number
    fp.toLength("3.2"); // $ExpectType number
}

// _.toNumber
{
    _.toNumber(true); // $ExpectType number
    _.toNumber(1); // $ExpectType number
    _.toNumber("3.2"); // $ExpectType number
    _(1).toNumber(); // $ExpectType number
    _("3.2").toNumber(); // $ExpectType number
    _.chain(1).toNumber(); // $ExpectType PrimitiveChain<number>
    _.chain("3.2").toNumber(); // $ExpectType PrimitiveChain<number>
    fp.toNumber(true); // $ExpectType number
    fp.toNumber(1); // $ExpectType number
    fp.toNumber("3.2"); // $ExpectType number
}

// _.toSafeInteger
{
    _.toSafeInteger(true); // $ExpectType number
    _.toSafeInteger(1); // $ExpectType number
    _.toSafeInteger("3.2"); // $ExpectType number
    _(1).toSafeInteger(); // $ExpectType number
    _("3.2").toSafeInteger(); // $ExpectType number
    _.chain(1).toSafeInteger(); // $ExpectType PrimitiveChain<number>
    _.chain("3.2").toSafeInteger(); // $ExpectType PrimitiveChain<number>
    fp.toSafeInteger(true); // $ExpectType number
    fp.toSafeInteger(1); // $ExpectType number
    fp.toSafeInteger("3.2"); // $ExpectType number
}

/********
 * Math *
 ********/

// _.add
{
    _.add(1, 1); // $ExpectType number
    _(1).add(1); // $ExpectType number
    _(1).chain().add(1); // $ExpectType PrimitiveChain<number>
    fp.add(1, 1); // $ExpectType number
    fp.add(1)(1); // $ExpectType number
}

// _.ceil
{
    _.ceil(6.004); // $ExpectType number
    _.ceil(6.004, 2); // $ExpectType number
    _(6.004).ceil(); // $ExpectType number
    _(6.004).ceil(2); // $ExpectType number
    _(6.004).chain().ceil(); // $ExpectType PrimitiveChain<number>
    _(6.004).chain().ceil(2); // $ExpectType PrimitiveChain<number>
    fp.ceil(6.004); // $ExpectType number
}

// _.divide
{
    _.divide(6, 4); // $ExpectType number
    _(6).divide(4); // $ExpectType number
    _(6).chain().floor(4); // $ExpectType PrimitiveChain<number>
    fp.divide(6, 4); // $ExpectType number
    fp.divide(6)(4); // $ExpectType number
}

// _.floor
{
    _.floor(4.006); // $ExpectType number
    _.floor(0.046, 2); // $ExpectType number
    _.floor(4060, -2); // $ExpectType number
    _(4.006).floor(); // $ExpectType number
    _(0.046).floor(2); // $ExpectType number
    _(4060).floor(-2); // $ExpectType number
    _(4.006).chain().floor(); // $ExpectType PrimitiveChain<number>
    _(0.046).chain().floor(2); // $ExpectType PrimitiveChain<number>
    _(4060).chain().floor(-2); // $ExpectType PrimitiveChain<number>
    fp.floor(4.006); // $ExpectType number
}

// _.max
// _.min
{
    const list: ArrayLike<string> = anything;

    _.max(list); // $ExpectType string | undefined
     _(list).max(); // $ExpectType string | undefined
    _.chain(list).max(); // $ExpectType StringChain
    fp.max(list); // $ExpectType string | undefined

    _.min(list); // $ExpectType string | undefined
     _(list).min(); // $ExpectType string | undefined
    _.chain(list).min(); // $ExpectType StringChain
    fp.min(list); // $ExpectType string | undefined
}

// _.maxBy
// _.minBy
{
    const list: ArrayLike<AbcObject> = anything;

    _.maxBy(list, valueIterator); // $ExpectType AbcObject | undefined
    _.maxBy(list, "a"); // $ExpectType AbcObject | undefined
    _.maxBy(list, { a: 42 }); // $ExpectType AbcObject | undefined
    _(list).maxBy(valueIterator); // $ExpectType AbcObject | undefined
    _(list).maxBy("a"); // $ExpectType AbcObject | undefined
    _(list).maxBy({ a: 42 }); // $ExpectType AbcObject | undefined
    _.chain(list).maxBy(valueIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).maxBy("a"); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).maxBy({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    fp.maxBy(valueIterator)(list); // $ExpectType AbcObject | undefined
    fp.maxBy("a", list); // $ExpectType AbcObject | undefined
    fp.maxBy({ a: 42 }, list); // $ExpectType AbcObject | undefined

    _.minBy(list, valueIterator); // $ExpectType AbcObject | undefined
    _.minBy(list, "a"); // $ExpectType AbcObject | undefined
    _.minBy(list, { a: 42 }); // $ExpectType AbcObject | undefined
    _(list).minBy(valueIterator); // $ExpectType AbcObject | undefined
    _(list).minBy("a"); // $ExpectType AbcObject | undefined
    _(list).minBy({ a: 42 }); // $ExpectType AbcObject | undefined
    _.chain(list).minBy(valueIterator); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).minBy("a"); // $ExpectType ObjectChain<AbcObject>
    _.chain(list).minBy({ a: 42 }); // $ExpectType ObjectChain<AbcObject>
    fp.minBy(valueIterator)(list); // $ExpectType AbcObject | undefined
    fp.minBy("a", list); // $ExpectType AbcObject | undefined
    fp.minBy({ a: 42 }, list); // $ExpectType AbcObject | undefined
}

// _.mean
{
    const list: ArrayLike<number> = anything;

    _.mean(list); // $ExpectType number
     _(list).mean(); // $ExpectType number
    _.chain(list).mean(); // $ExpectType PrimitiveChain<number>
    fp.mean(list); // $ExpectType number
}

// _.meanBy
{
    const list: ArrayLike<AbcObject> = anything;

    _.meanBy(list, (x) => x.a); // $ExpectType number
    _.meanBy(list, "a"); // $ExpectType number
    _(list).meanBy((x) => x.a); // $ExpectType number
    _.chain(list).meanBy((x) => x.a); // $ExpectType PrimitiveChain<number>

    fp.meanBy((x) => x.a, list); // $ExpectType number
    fp.meanBy((x: AbcObject) => x.a)(list); // $ExpectType number
    fp.meanBy("a", list); // $ExpectType number
}

// _.multiply
{
    _.multiply(6, 4); // $ExpectType number
    _(6).multiply(4); // $ExpectType number
    _(6).chain().multiply(4); // $ExpectType PrimitiveChain<number>
    fp.multiply(6, 4); // $ExpectType number
    fp.multiply(6)(4); // $ExpectType number
}

// _.round
{
    _.round(4.006); // $ExpectType number
    _.round(4.006, 2); // $ExpectType number
    _(4.006).round(); // $ExpectType number
    _(4.006).round(2); // $ExpectType number
    _(4.006).chain().round(); // $ExpectType PrimitiveChain<number>
    _(4.006).chain().round(2); // $ExpectType PrimitiveChain<number>
    fp.round(4.006); // $ExpectType number
}

 // _.subtract
{
    _.subtract(3, 2); // $ExpectType number
    _(3).subtract(2); // $ExpectType number
    _(3).chain().subtract(2); // $ExpectType PrimitiveChain<number>
    fp.subtract(3, 2); // $ExpectType number
    fp.subtract(3)(2); // $ExpectType number
}

// _.sum
{
    const list: ArrayLike<number> | null | undefined = anything;

    _.sum(list); // $ExpectType number
    _(list).sum(); // $ExpectType number
    _(list).chain().sum(); // $ExpectType PrimitiveChain<number>
    fp.sum(list); // $ExpectType number
}

// _.sumBy
{
    const listIterator = (value: AbcObject) => 0;

    _.sumBy(list, listIterator); // $ExpectType number
    _.sumBy(list, "a"); // $ExpectType number
    _(list).sumBy(listIterator); // $ExpectType number
    _(list).sumBy("a"); // $ExpectType number
    _(list).chain().sumBy(listIterator); // $ExpectType PrimitiveChain<number>
    _(list).chain().sumBy("a"); // $ExpectType PrimitiveChain<number>

    fp.sumBy(listIterator, list); // $ExpectType number
    fp.sumBy("a")(list); // $ExpectType number
}

/**********
 * Number *
 **********/

// _.clamp
{
    _.clamp(3, 2, 4); // $ExpectType number
    _.clamp(3, 4); // $ExpectType number
    _(3).clamp(2, 4); // $ExpectType number
    _(3).clamp(4); // $ExpectType number
    _.chain(3).clamp(2, 4); // $ExpectType PrimitiveChain<number>
    fp.clamp(2, 4, 3); // $ExpectType number
    fp.clamp(2)(4)(3); // $ExpectType number
}

// _.inRange
{
    _.inRange(3, 2, 4); // $ExpectType boolean
    _.inRange(4, 8); // $ExpectType boolean
    _(3).inRange(2, 4); // $ExpectType boolean
    _(4).inRange(8); // $ExpectType boolean
    _.chain(3).inRange(2, 4); // $ExpectType PrimitiveChain<boolean>
    _.chain(4).inRange(8); // $ExpectType PrimitiveChain<boolean>
    fp.inRange(2, 4, 3); // $ExpectType boolean
    fp.inRange(2)(4)(3); // $ExpectType boolean
}

// _.random
{
    _.random(); // $ExpectType number
    _.random(1); // $ExpectType number
    _.random(1, 2); // $ExpectType number
    _.random(1, 2, true); // $ExpectType number
    _.random(1, true); // $ExpectType number
    _.random(true); // $ExpectType number

    _(1).random(); // $ExpectType number
    _(1).random(2); // $ExpectType number
    _(1).random(2, true); // $ExpectType number
    _(1).random(true); // $ExpectType number
    _(true).random(); // $ExpectType number

    _.chain(1).random(); // $ExpectType PrimitiveChain<number>
    _.chain(1).random(2); // $ExpectType PrimitiveChain<number>
    _.chain(1).random(2, true); // $ExpectType PrimitiveChain<number>
    _.chain(1).random(true); // $ExpectType PrimitiveChain<number>
    _.chain(true).random(); // $ExpectType PrimitiveChain<number>

    fp.random(1, 2); // $ExpectType number
    fp.random(1)(2); // $ExpectType number

    _.map([5, 5], _.random); // $ExpectType number[]
}

/**********
 * Object *
 **********/

// _.assign
// _.assignIn
// _.assignWith
// _.assignInWith
// _.defaults
// _.extend
// _.extendWith
// _.merge
// _.mergeWith
{
    const obj = { a: "" };
    const s1 = { b: 1 };
    const s2 = { c: 1 };
    const s3 = { d: 1 };
    const s4 = { e: 1 };
    const s5 = { f: 1 };

    const customizer = (objectValue: any, sourceValue: any, key: string | undefined, object: {} | undefined, source: {} | undefined) => 1;

    _.assign(obj); // $ExpectType { a: string; }
    _.assign(obj, s1); // $ExpectType { a: string; } & { b: number; }
    _.assign(obj, s1, s2, s3, s4); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.assign(obj, s1, s2, s3, s4, s5);
    _(obj).assign(); // $ExpectType Object<{ a: string; }>
    _(obj).assign(s1); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).assign(s1, s2, s3, s4); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).assign(s1, s2, s3, s4, s5);
    _.chain(obj).assign(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).assign(s1); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).assign(s1, s2, s3, s4); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).assign(s1, s2, s3, s4, s5);
    fp.assign(obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.assign(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.assignIn(obj); // $ExpectType { a: string; }
    _.assignIn(obj, s1); // $ExpectType { a: string; } & { b: number; }
    _.assignIn(obj, s1, s2, s3, s4); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.assignIn(obj, s1, s2, s3, s4, s5);
    _(obj).assignIn(); // $ExpectType Object<{ a: string; }>
    _(obj).assignIn(s1); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).assignIn(s1, s2, s3, s4); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).assignIn(s1, s2, s3, s4, s5);
    _.chain(obj).assignIn(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).assignIn(s1); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).assignIn(s1, s2, s3, s4); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).assignIn(s1, s2, s3, s4, s5);
    fp.assignIn(obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.assignIn(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.assignWith(obj); // $ExpectType { a: string; }
    _.assignWith(obj, s1, customizer); // $ExpectType { a: string; } & { b: number; }
    _.assignWith(obj, s1, s2, s3, s4, customizer); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.assignWith(obj, s1, s2, s3, s4, s5, customizer);
    _(obj).assignWith(); // $ExpectType Object<{ a: string; }>
    _(obj).assignWith(s1, customizer); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).assignWith(s1, s2, s3, s4, customizer); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).assignWith(s1, s2, s3, s4, s5, customizer);
    _.chain(obj).assignWith(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).assignWith(s1, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).assignWith(s1, s2, s3, s4, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).assignWith(s1, s2, s3, s4, s5, customizer);
    fp.assignWith(customizer, obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.assignWith(customizer)(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.assignInWith(obj); // $ExpectType { a: string; }
    _.assignInWith(obj, s1, customizer); // $ExpectType { a: string; } & { b: number; }
    _.assignInWith(obj, s1, s2, s3, s4, customizer); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.assignInWith(obj, s1, s2, s3, s4, s5, customizer);
    _(obj).assignInWith(); // $ExpectType Object<{ a: string; }>
    _(obj).assignInWith(s1, customizer); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).assignInWith(s1, s2, s3, s4, customizer); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).assignInWith(s1, s2, s3, s4, s5, customizer);
    _.chain(obj).assignInWith(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).assignInWith(s1, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).assignInWith(s1, s2, s3, s4, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).assignInWith(s1, s2, s3, s4, s5, customizer);
    fp.assignInWith(customizer, obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.assignInWith(customizer)(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.defaults(obj); // $ExpectType { a: string; }
    _.defaults(obj, s1); // $ExpectType { b: number; } & { a: string; }
    _.defaults(obj, s1, s2, s3, s4); // $ExpectType { e: number; } & { d: number; } & { c: number; } & { b: number; } & { a: string; }
    _.defaults(obj, s1, s2, s3, s4, s5);
    _(obj).defaults(); // $ExpectType Object<{ a: string; }>
    _(obj).defaults(s1); // $ExpectType Object<{ b: number; } & { a: string; }>
    _(obj).defaults(s1, s2, s3, s4); // $ExpectType Object<{ e: number; } & { d: number; } & { c: number; } & { b: number; } & { a: string; }>
    _(obj).defaults(s1, s2, s3, s4, s5);
    _.chain(obj).defaults(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).defaults(s1); // $ExpectType ObjectChain<{ b: number; } & { a: string; }>
    _.chain(obj).defaults(s1, s2, s3, s4); // $ExpectType ObjectChain<{ e: number; } & { d: number; } & { c: number; } & { b: number; } & { a: string; }>
    _.chain(obj).defaults(s1, s2, s3, s4, s5);
    fp.defaults(obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.defaults(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.extend(obj); // $ExpectType { a: string; }
    _.extend(obj, s1); // $ExpectType { a: string; } & { b: number; }
    _.extend(obj, s1, s2, s3, s4); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.extend(obj, s1, s2, s3, s4, s5);
    _(obj).extend(); // $ExpectType Object<{ a: string; }>
    _(obj).extend(s1); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).extend(s1, s2, s3, s4); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).extend(s1, s2, s3, s4, s5);
    _.chain(obj).extend(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).extend(s1); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).extend(s1, s2, s3, s4); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).extend(s1, s2, s3, s4, s5);
    fp.extend(obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.extend(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.extendWith(obj); // $ExpectType { a: string; }
    _.extendWith(obj, s1, customizer); // $ExpectType { a: string; } & { b: number; }
    _.extendWith(obj, s1, s2, s3, s4, customizer); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.extendWith(obj, s1, s2, s3, s4, s5, customizer);
    _(obj).extendWith(); // $ExpectType Object<{ a: string; }>
    _(obj).extendWith(s1, customizer); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).extendWith(s1, s2, s3, s4, customizer); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).extendWith(s1, s2, s3, s4, s5, customizer);
    _.chain(obj).extendWith(); // $ExpectType ObjectChain<{ a: string; }>
    _.chain(obj).extendWith(s1, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).extendWith(s1, s2, s3, s4, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).extendWith(s1, s2, s3, s4, s5, customizer);
    fp.extendWith(customizer, obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.extendWith(customizer)(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.merge(obj, s1); // $ExpectType { a: string; } & { b: number; }
    _.merge(obj, s1, s2, s3, s4); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.merge(obj, s1, s2, s3, s4, s5);
    _(obj).merge(s1); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).merge(s1, s2, s3, s4); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).merge(s1, s2, s3, s4, s5);
    _.chain(obj).merge(s1); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).merge(s1, s2, s3, s4); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).merge(s1, s2, s3, s4, s5);
    fp.merge(obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.merge(obj)(s1); // $ExpectType { a: string; } & { b: number; }

    _.mergeWith(obj, s1, customizer); // $ExpectType { a: string; } & { b: number; }
    _.mergeWith(obj, s1, s2, s3, s4, customizer); // $ExpectType { a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }
    _.mergeWith(obj, s1, s2, s3, s4, s5, customizer);
    _(obj).mergeWith(s1, customizer); // $ExpectType Object<{ a: string; } & { b: number; }>
    _(obj).mergeWith(s1, s2, s3, s4, customizer); // $ExpectType Object<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _(obj).mergeWith(s1, s2, s3, s4, s5, customizer);
    _.chain(obj).mergeWith(s1, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; }>
    _.chain(obj).mergeWith(s1, s2, s3, s4, customizer); // $ExpectType ObjectChain<{ a: string; } & { b: number; } & { c: number; } & { d: number; } & { e: number; }>
    _.chain(obj).mergeWith(s1, s2, s3, s4, s5, customizer);
    fp.mergeWith(customizer, obj, s1); // $ExpectType { a: string; } & { b: number; }
    fp.mergeWith(customizer)(obj)(s1); // $ExpectType { a: string; } & { b: number; }
}

// _.create
{
    const prototype = { a: 1 };
    const properties = { b: "" };

    _.create(prototype, properties); // $ExpectType { a: number; } & { b: string; }
    _(prototype).create(properties); // $ExpectType Object<{ a: number; } & { b: string; }>
    _.chain(prototype).create(properties); // $ExpectType ObjectChain<{ a: number; } & { b: string; }>
    const combined: { a: number } & object = fp.create(prototype);
}

// _.defaultsDeep
{
    const testDefaultsDeepObject = { user: { name: "barney" } };
    const testDefaultsDeepSource = { user: { name: "fred", age: 36 } };
    _.defaultsDeep(testDefaultsDeepObject, testDefaultsDeepSource); // $ExpectType any
    _(testDefaultsDeepObject).defaultsDeep(testDefaultsDeepSource); // $ExpectType Object<any>
    _.chain(testDefaultsDeepObject).defaultsDeep(testDefaultsDeepSource); // $ExpectType ObjectChain<any>

    fp.defaultsDeep(testDefaultsDeepSource, testDefaultsDeepObject); // $ExpectType any
    fp.defaultsDeep(testDefaultsDeepSource)(testDefaultsDeepObject); // $ExpectType any
}

// _.entries
// _.entriesIn
{
    const dictionary: _.Dictionary<number> = anything;
    const numericDictionary: _.NumericDictionary<number> = anything;

    _.entries(dictionary); // $ExpectType [string, number][]
    _.entries(numericDictionary); // $ExpectType [string, number][]
    _.entries(abcObject); // $ExpectType [string, any][]
    _(dictionary).entries(); // $ExpectType Collection<[string, number]>
    _(numericDictionary).entries(); // $ExpectType Collection<[string, number]>
    _.chain(dictionary).entries(); // $ExpectType CollectionChain<[string, number]>
    _.chain(numericDictionary).entries(); // $ExpectType CollectionChain<[string, number]>
    _.chain(abcObject).entries(); // $ExpectType CollectionChain<[string, string | number | boolean]>
    fp.entries(dictionary); // $ExpectType [string, number][]

    _.entriesIn(dictionary); // $ExpectType [string, number][]
    _.entriesIn(numericDictionary); // $ExpectType [string, number][]
    _.entriesIn(abcObject); // $ExpectType [string, any][]
    _(dictionary).entriesIn(); // $ExpectType Collection<[string, number]>
    _(numericDictionary).entriesIn(); // $ExpectType Collection<[string, number]>
    _.chain(dictionary).entriesIn(); // $ExpectType CollectionChain<[string, number]>
    _.chain(numericDictionary).entriesIn(); // $ExpectType CollectionChain<[string, number]>
    _.chain(abcObject).entriesIn(); // $ExpectType CollectionChain<[string, string | number | boolean]>
    fp.entriesIn(dictionary); // $ExpectType [string, number][]
}

// _.findKey
// _.findLastKey
{
    const predicateFn = (value: string, key: string, object: { a: string }) => true;
    const predicateFn2 = (value: number) => true;

    _.findKey({ a: "" }); // $ExpectType string | undefined
    _.findKey({ a: "" }, predicateFn); // $ExpectType string | undefined
    _.findKey({ a: "" }, ""); // $ExpectType string | undefined
    _.findKey({ a: { b: 5 } }, { b: 42 }); // $ExpectType string | undefined
    _.findKey({ a: { b: 5 } }, ["b", 5]); // $ExpectType string | undefined
    _({ a: "" }).findKey(); // $ExpectType string | undefined
    _({ a: "" }).findKey(predicateFn); // $ExpectType string | undefined
    _({ a: "" }).findKey(""); // $ExpectType string | undefined
    _({ a: { b: 5 } }).findKey({ b: 42 }); // $ExpectType string | undefined
    _({ a: { b: 5 } }).findKey(["b", 5]); // $ExpectType string | undefined
    _.chain({ a: "" }).findKey(); // $ExpectType StringNullableChain
    _.chain({ a: "" }).findKey(predicateFn); // $ExpectType StringNullableChain
    _.chain({ a: "" }).findKey(""); // $ExpectType StringNullableChain
    _.chain({ a: { b: 5 } }).findKey({ b: 42 }); // $ExpectType StringNullableChain
    _.chain({ a: { b: 5 } }).findKey(["b", 5]); // $ExpectType StringNullableChain
    fp.findKey(predicateFn2, { a: 1 }); // $ExpectType string | undefined
    fp.findKey(predicateFn2)({ a: 1 }); // $ExpectType string | undefined

    _.findLastKey({ a: "" }); // $ExpectType string | undefined
    _.findLastKey({ a: "" }, predicateFn); // $ExpectType string | undefined
    _.findLastKey({ a: "" }, ""); // $ExpectType string | undefined
    _.findLastKey({ a: { b: 5 } }, { b: 42 }); // $ExpectType string | undefined
    _.findLastKey({ a: { b: 5 } }, ["b", 5]); // $ExpectType string | undefined
    _({ a: "" }).findLastKey(); // $ExpectType string | undefined
    _({ a: "" }).findLastKey(predicateFn); // $ExpectType string | undefined
    _({ a: "" }).findLastKey(""); // $ExpectType string | undefined
    _({ a: { b: 5 } }).findLastKey({ b: 42 }); // $ExpectType string | undefined
    _({ a: { b: 5 } }).findLastKey(["b", 5]); // $ExpectType string | undefined
    _.chain({ a: "" }).findLastKey(); // $ExpectType StringNullableChain
    _.chain({ a: "" }).findLastKey(predicateFn); // $ExpectType StringNullableChain
    _.chain({ a: "" }).findLastKey(""); // $ExpectType StringNullableChain
    _.chain({ a: { b: 5 } }).findLastKey({ b: 42 }); // $ExpectType StringNullableChain
    _.chain({ a: { b: 5 } }).findLastKey(["b", 5]); // $ExpectType StringNullableChain
    fp.findLastKey(predicateFn2, { a: 1 }); // $ExpectType string | undefined
    fp.findLastKey(predicateFn2)({ a: 1 }); // $ExpectType string | undefined
}

// _.forIn
// _.forInRight
// _.forOwn
// _.forOwnRight
{
    const dictionary: _.Dictionary<number> = {};
    const dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => {};
    const dictionaryIterator2 = (value: number) => {};

    const object: AbcObject | null | undefined = anything;
    const objectIterator = (element: string | number | boolean, key: string, collection: AbcObject) => {};
    const objectIterator2 = (element: number | string | boolean) => {};

    _.forIn(dictionary); // $ExpectType Dictionary<number>
    _.forIn(dictionary, dictionaryIterator); // $ExpectType Dictionary<number>
    _.forIn(object); // $ExpectType AbcObject | null | undefined
    _.forIn(object, objectIterator); // $ExpectType AbcObject | null | undefined
    _(object).forIn(); // $ExpectType Object<AbcObject>
    _(object).forIn(objectIterator); // $ExpectType Object<AbcObject>
    _.chain(object).forIn(); // $ExpectType ObjectChain<AbcObject>
    _.chain(object).forIn(objectIterator); // $ExpectType ObjectChain<AbcObject>
    fp.forIn(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forIn(objectIterator2)(object); // $ExpectType AbcObject | null | undefined

    _.forInRight(dictionary); // $ExpectType Dictionary<number>
    _.forInRight(dictionary, dictionaryIterator); // $ExpectType Dictionary<number>
    _.forInRight(object); // $ExpectType AbcObject | null | undefined
    _.forInRight(object, objectIterator); // $ExpectType AbcObject | null | undefined
    _(object).forInRight(); // $ExpectType Object<AbcObject>
    _(object).forInRight(objectIterator); // $ExpectType Object<AbcObject>
    _.chain(object).forInRight(); // $ExpectType ObjectChain<AbcObject>
    _.chain(object).forInRight(objectIterator); // $ExpectType ObjectChain<AbcObject>
    fp.forInRight(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forInRight(objectIterator2)(object); // $ExpectType AbcObject | null | undefined

    _.forOwn(dictionary); // $ExpectType Dictionary<number>
    _.forOwn(dictionary, dictionaryIterator); // $ExpectType Dictionary<number>
    _.forOwn(object); // $ExpectType AbcObject | null | undefined
    _.forOwn(object, objectIterator); // $ExpectType AbcObject | null | undefined
    _(object).forOwn(); // $ExpectType Object<AbcObject>
    _(object).forOwn(objectIterator); // $ExpectType Object<AbcObject>
    _.chain(object).forOwn(); // $ExpectType ObjectChain<AbcObject>
    _.chain(object).forOwn(objectIterator); // $ExpectType ObjectChain<AbcObject>
    fp.forOwn(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forOwn(objectIterator2)(object); // $ExpectType AbcObject | null | undefined

    _.forOwnRight(dictionary); // $ExpectType Dictionary<number>
    _.forOwnRight(dictionary, dictionaryIterator); // $ExpectType Dictionary<number>
    _.forOwnRight(object); // $ExpectType AbcObject | null | undefined
    _.forOwnRight(object, objectIterator); // $ExpectType AbcObject | null | undefined
    _(object).forOwnRight(); // $ExpectType Object<AbcObject>
    _(object).forOwnRight(objectIterator); // $ExpectType Object<AbcObject>
    _.chain(object).forOwnRight(); // $ExpectType ObjectChain<AbcObject>
    _.chain(object).forOwnRight(objectIterator); // $ExpectType ObjectChain<AbcObject>
    fp.forOwnRight(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forOwnRight(objectIterator2)(object); // $ExpectType AbcObject | null | undefined
}

// _.functions
// _.functionsIn
{
    _.functions(abcObject); // $ExpectType string[]
    _(abcObject).functions(); // $ExpectType Collection<string>
    _.chain(abcObject).functions(); // $ExpectType CollectionChain<string>
    fp.functions(abcObject); // $ExpectType string[]

    _.functionsIn(abcObject); // $ExpectType string[]
    _(abcObject).functionsIn(); // $ExpectType Collection<string>
    _.chain(abcObject).functionsIn(); // $ExpectType CollectionChain<string>
    fp.functionsIn(abcObject); // $ExpectType string[]
}

// _.get
{
    const value: string | undefined = anything;
    const defaultValue: boolean = anything;

    _.get([], Symbol.iterator);
    _.get([], [Symbol.iterator]);

    _.get("abc", 1); // $ExpectType string
    _.get("abc", [0], "_");
    _.get([42], 0, -1); // $ExpectType number
    _.get({ a: { b: true } }, "a"); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a"]); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a", "b"]); // $ExpectType boolean
    _.get({ a: { b: { c: { d: true } } } }, ["a", "b", "c", "d"]); // $ExpectType boolean
    _.get({ a: undefined }, "a"); // $ExpectType undefined
    _.get({ a: value }, "a", defaultValue); // $ExpectType string | boolean
    _.get({ a: undefined }, "a", defaultValue); // $ExpectType boolean

    _("abc").get(1); // $ExpectType string
    _("abc").get([0], "_");
    _([42]).get(0, -1); // $ExpectType number
    _({ a: { b: true } }).get("a"); // $ExpectType { b: boolean; }
    _({ a: { b: true } }).get(["a"]); // $ExpectType { b: boolean; }
    _({ a: { b: true } }).get(["a", "b"]); // $ExpectType boolean
    _({ a: { b: { c: {d: true } } } }).get(["a", "b", "c", "d"]); // $ExpectType boolean
    _({ a: undefined }).get("a"); // $ExpectType undefined
    _({ a: value }).get("a", defaultValue); // $ExpectType string | boolean
    _({ a: undefined }).get("a", defaultValue); // $ExpectType boolean

    _.chain("abc").get(1); // $ExpectType StringChain
    _.chain("abc").get([0], "_");
    _.chain([42]).get(0, -1); // ExpectType PrimitiveChain<number>
    _.chain({ a: { b: true } }).get("a"); // $ExpectType ObjectChain<{ b: boolean; }>
    _.chain({ a: { b: true } }).get(["a"]); // $ExpectType ObjectChain<{ b: boolean; }>
    _.chain({ a: { b: true } }).get(["a", "b"]); // $ExpectType PrimitiveChain<false> | PrimitiveChain<true>
    _.chain({ a: { b: { c: { d: true } } } }).get(["a", "b"]); // $ExpectType ObjectChain<{ c: { d: boolean; }; }>
    _.chain({ a: { b: { c: { d: true } } } }).get(["a", "b", "c", "d"]); // $ExpectType PrimitiveChain<false> | PrimitiveChain<true>
    _.chain({ a: { b: { c: { d: true } } } }).get(["a", "b", "c", "d2"]); // $ExpectType LoDashExplicitWrapper<any>
    _.chain({ a: undefined }).get("a"); // $ExpectType never
    _.chain({ a: value }).get("a", defaultValue); // $ExpectType StringChain | PrimitiveChain<false> | PrimitiveChain<true>
    _.chain({ a: undefined }).get("a", defaultValue); // $ExpectType PrimitiveChain<false> | PrimitiveChain<true>
    _.chain({ a: [1] }).get("a", []).map((val) => val.toFixed()); // $ExpectType CollectionChain<string>

    fp.get(Symbol.iterator, []); // $ExpectType any || () => IterableIterator<never>
    fp.get(Symbol.iterator)([]); // $ExpectType any || () => IterableIterator<never>
    fp.get([Symbol.iterator], []); // $ExpectType any || () => IterableIterator<never>
    fp.get(1)("abc"); // $ExpectType string
    fp.get("1")("abc"); // $ExpectType any
    fp.get("a", { a: { b: true } }); // $ExpectType { b: boolean; }
    fp.get<{ a: { b: boolean } }, "a">("a")({ a: { b: true } }); // $ExpectType { b: boolean; }
    fp.get(["a", "b"])({ a: { b: true } }); // $ExpectType any
    fp.get(0)([42]); // $ExpectType number

    fp.getOr(-1, 0, [42]); // $ExpectType number
    fp.getOr(-1)(0)([42]); // $ExpectType number
    fp.getOr("empty" as "empty")(0)([42]); // $ExpectType number | "empty"
}

// _.has
// _.hasIn
{
    _.has(abcObject, ""); // $ExpectType boolean
    _.has(abcObject, 42); // $ExpectType boolean
    _.has(abcObject, ["", 42]); // $ExpectType boolean
    _(abcObject).has(""); // $ExpectType boolean
    _(abcObject).has(42); // $ExpectType boolean
    _(abcObject).has(["", 42]); // $ExpectType boolean
    _.chain(abcObject).has(""); // $ExpectType PrimitiveChain<boolean>
    _.chain(abcObject).has(42); // $ExpectType PrimitiveChain<boolean>
    _.chain(abcObject).has(["", 42]); // $ExpectType PrimitiveChain<boolean>
    fp.has("a", abcObject); // $ExpectType boolean
    fp.has("a")(abcObject); // $ExpectType boolean
    fp.has(["a", 42])(abcObject); // $ExpectType boolean

    _.hasIn(abcObject, ""); // $ExpectType boolean
    _.hasIn(abcObject, 42); // $ExpectType boolean
    _.hasIn(abcObject, ["", 42]); // $ExpectType boolean
    _(abcObject).hasIn(""); // $ExpectType boolean
    _(abcObject).hasIn(42); // $ExpectType boolean
    _(abcObject).hasIn(["", 42]); // $ExpectType boolean
    _.chain(abcObject).hasIn(""); // $ExpectType PrimitiveChain<boolean>
    _.chain(abcObject).hasIn(42); // $ExpectType PrimitiveChain<boolean>
    _.chain(abcObject).hasIn(["", 42]); // $ExpectType PrimitiveChain<boolean>
    fp.hasIn("a", abcObject); // $ExpectType boolean
    fp.hasIn("a")(abcObject); // $ExpectType boolean
    fp.hasIn(["a", 42])(abcObject); // $ExpectType boolean
}

// _.invert
{
    _.invert({}); // $ExpectType Dictionary<string>
    _({}).invert(); // $ExpectType Object<Dictionary<string>>
    _.chain({}).invert(); // $ExpectType ObjectChain<Dictionary<string>>
    fp.invert({}); // $ExpectType Dictionary<string>
}

// _.invertBy
{
    const list: ArrayLike<{ a: number }> = anything;
    const dictionary: _.Dictionary<{ a: number }> = {};
    const numericDictionary: _.NumericDictionary<{ a: number }> = {};

    const valueIterator = (value: {a: number }) => 1;

    _.invertBy("foo"); // $ExpectType Dictionary<string[]>
    _.invertBy("foo", stringIterator); // $ExpectType Dictionary<string[]>
    _.invertBy(list); // $ExpectType Dictionary<string[]>
    _.invertBy(list, "a"); // $ExpectType Dictionary<string[]>
    _.invertBy(list, valueIterator); // $ExpectType Dictionary<string[]>
    _.invertBy(list, {a: 1}); // $ExpectType Dictionary<string[]>
    _.invertBy(dictionary); // $ExpectType Dictionary<string[]>
    _.invertBy(dictionary, "a"); // $ExpectType Dictionary<string[]>
    _.invertBy(dictionary, valueIterator); // $ExpectType Dictionary<string[]>
    _.invertBy(dictionary, {a: 1}); // $ExpectType Dictionary<string[]>
    _.invertBy(numericDictionary); // $ExpectType Dictionary<string[]>
    _.invertBy(numericDictionary, "a"); // $ExpectType Dictionary<string[]>
    _.invertBy(numericDictionary, valueIterator); // $ExpectType Dictionary<string[]>
    _.invertBy(numericDictionary, {a: 1}); // $ExpectType Dictionary<string[]>

    _("foo").invertBy(stringIterator); // $ExpectType Object<Dictionary<string[]>>
    _(list).invertBy(); // $ExpectType Object<Dictionary<string[]>>
    _(list).invertBy("a"); // $ExpectType Object<Dictionary<string[]>>
    _(dictionary).invertBy(valueIterator); // $ExpectType Object<Dictionary<string[]>>
    _(numericDictionary).invertBy({a: 1}); // $ExpectType Object<Dictionary<string[]>>

    _.chain("foo").invertBy(stringIterator); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain(list).invertBy(); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain(list).invertBy("a"); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain(dictionary).invertBy(valueIterator); // $ExpectType ObjectChain<Dictionary<string[]>>
    _.chain(numericDictionary).invertBy({a: 1}); // $ExpectType ObjectChain<Dictionary<string[]>>

    fp.invertBy(stringIterator, "foo"); // $ExpectType Dictionary<string[]>
    fp.invertBy(stringIterator)("foo"); // $ExpectType Dictionary<string[]>
    fp.invertBy(valueIterator)(list); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(list); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(list); // $ExpectType Dictionary<string[]>
    fp.invertBy(valueIterator)(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy(valueIterator)(numericDictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(numericDictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(numericDictionary); // $ExpectType Dictionary<string[]>
}

// _.keys
// _.keysIn
{
    const object: AbcObject | null | undefined = anything;

    _.keys(object); // $ExpectType string[]
    _(object).keys(); // $ExpectType Collection<string>
    _.chain(object).keys(); // $ExpectType CollectionChain<string>
    fp.keys({}); // $ExpectType string[]

    _.keysIn(object); // $ExpectType string[]
    _(object).keysIn(); // $ExpectType Collection<string>
    _.chain(object).keysIn(); // $ExpectType CollectionChain<string>
    fp.keysIn({}); // $ExpectType string[]
}

// _.mapKeys
{
    const abcObjectIterator = (value: AbcObject[keyof AbcObject], key: string, collection: AbcObject) => "";

    _.mapKeys(list); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(list, listIterator); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(list, ""); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(list, {}); // $ExpectType Dictionary<AbcObject>

    _.mapKeys(dictionary); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(dictionary, dictionaryIterator); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(dictionary, ""); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(dictionary, {}); // $ExpectType Dictionary<AbcObject>

    _.mapKeys(numericDictionary); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(numericDictionary, numericDictionaryIterator); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(numericDictionary, ""); // $ExpectType Dictionary<AbcObject>
    _.mapKeys(numericDictionary, {}); // $ExpectType Dictionary<AbcObject>

    _.mapKeys(abcObject); // $ExpectType Dictionary<string | number | boolean>
    _.mapKeys(abcObject, abcObjectIterator); // $ExpectType Dictionary<string | number | boolean>
    _.mapKeys(abcObject, ""); // $ExpectType Dictionary<string | number | boolean>

    _(list).mapKeys(); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).mapKeys(listIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).mapKeys(""); // $ExpectType Object<Dictionary<AbcObject>>
    _(list).mapKeys({}); // $ExpectType Object<Dictionary<AbcObject>>

    _(dictionary).mapKeys(); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).mapKeys(dictionaryIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).mapKeys(""); // $ExpectType Object<Dictionary<AbcObject>>
    _(dictionary).mapKeys({}); // $ExpectType Object<Dictionary<AbcObject>>

    _(numericDictionary).mapKeys(); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).mapKeys(numericDictionaryIterator); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).mapKeys(""); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).mapKeys({}); // $ExpectType Object<Dictionary<AbcObject>>

    _(abcObject).mapKeys(); // $ExpectType Object<Dictionary<string | number | boolean>>
    _(abcObject).mapKeys(abcObjectIterator); // $ExpectType Object<Dictionary<string | number | boolean>>
    _(abcObject).mapKeys(""); // $ExpectType Object<Dictionary<string | number | boolean>>

    _.chain(list).mapKeys(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).mapKeys(listIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).mapKeys(""); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(list).mapKeys({}); // $ExpectType ObjectChain<Dictionary<AbcObject>>

    _.chain(dictionary).mapKeys(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).mapKeys(dictionaryIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).mapKeys(""); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(dictionary).mapKeys({}); // $ExpectType ObjectChain<Dictionary<AbcObject>>

    _.chain(numericDictionary).mapKeys(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).mapKeys(numericDictionaryIterator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).mapKeys(""); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).mapKeys({}); // $ExpectType ObjectChain<Dictionary<AbcObject>>

    _.chain(abcObject).mapKeys(); // $ExpectType ObjectChain<Dictionary<string | number | boolean>>
    _.chain(abcObject).mapKeys(abcObjectIterator); // $ExpectType ObjectChain<Dictionary<string | number | boolean>>
    _.chain(abcObject).mapKeys(""); // $ExpectType ObjectChain<Dictionary<string | number | boolean>>

    const indexIterator = (index: number) => index + 1;
    const keyIterator = (key: string) => "_" + key;
    fp.mapKeys(indexIterator, list); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(keyIterator)(dictionary); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(keyIterator)(abcObject); // $ExpectType Dictionary<string | number | boolean>
}

// _.mapValues
{
    const abcObjectRecord: Record<'a' | 'b' | 'c', string> = anything;
    // $ExpectType { a: string; b: string; c: string; }
    _.mapValues(abcObjectRecord, (value, key, collection) => {
        value;  // $ExpectType string
        key; // $ExpectType string
        collection; // $ExpectType Record<"a" | "b" | "c", string>
        return "";
    });

    const abcObjectOrNull: AbcObject | null = anything;
    const key: string = anything;

    // $ExpectType NumericDictionary<AbcObject>
    _.mapValues("foo", (char, index, str) => {
        char; // $ExpectType string
        index; // $ExpectType number
        str; // $ExpectType string
        return abcObject;
    });

    // $ExpectType { [x: string]: string; }
    _.mapValues(dictionary, (value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return "";
    });

    // $ExpectType { [x: number]: string; }
    _.mapValues(numericDictionary, (value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return "";
    });

    // $ExpectType { a: string; b: string; c: string; }
    _.mapValues(abcObject, (value, key, collection) => {
        value;  // $ExpectType string | number | boolean
        key; // $ExpectType string
        collection; // $ExpectType AbcObject
        return "";
    });

    _.mapValues(dictionary, {}); // $ExpectType Dictionary<boolean>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _.mapValues(numericDictionary, {}); // $ExpectType Dictionary<boolean>
    _.mapValues(abcObject, {}); // $ExpectType { a: boolean; b: boolean; c: boolean; }

    _.mapValues(dictionary, "a"); // $ExpectType Dictionary<number>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _.mapValues(numericDictionary, "a"); // $ExpectType Dictionary<number>

    _.mapValues(abcObject, key); // $ExpectType { a: any; b: any; c: any; }
    _.mapValues(dictionary, key); // $ExpectType Dictionary<any>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _.mapValues(numericDictionary, key); // $ExpectType Dictionary<any>

    _.mapValues("a"); // $ExpectType NumericDictionary<string>
    _.mapValues(dictionary); // $ExpectType Dictionary<AbcObject>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _.mapValues(numericDictionary); // $ExpectType Dictionary<AbcObject>
    _.mapValues(abcObject); // $ExpectType AbcObject
    _.mapValues(abcObjectOrNull); // $ExpectType Partial<AbcObject>

    // $ExpectType Object<NumericDictionary<AbcObject>>
    _("foo").mapValues((char, index, str) => {
        char; // $ExpectType string
        index; // $ExpectType number
        str; // $ExpectType string
        return abcObject;
    });

    // $ExpectType Object<{ [x: string]: string; }>
    _(dictionary).mapValues((value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return "";
    });

    // $ExpectType Object<{ [x: number]: string; }>
    _(numericDictionary).mapValues((value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return "";
    });

    // $ExpectType Object<{ a: string; b: string; c: string; }>
    _(abcObject).mapValues((value, key, collection) => {
        value;  // $ExpectType string | number | boolean
        key; // $ExpectType string
        collection; // $ExpectType AbcObject
        return "";
    });

    _(dictionary).mapValues({}); // $ExpectType Object<{ [x: string]: boolean; }>
    _(numericDictionary).mapValues({}); // $ExpectType Object<{ [x: number]: boolean; }>
    _(abcObject).mapValues({}); // $ExpectType Object<{ a: boolean; b: boolean; c: boolean; }>

    _(dictionary).mapValues("a"); // $ExpectType Object<Dictionary<number>>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _(numericDictionary).mapValues("a"); // $ExpectType Object<Dictionary<number>>

    _(abcObject).mapValues(key); // $ExpectType Object<{ a: any; b: any; c: any; }>
    _(dictionary).mapValues(key); // $ExpectType Object<{ [x: string]: any; }>
    _(numericDictionary).mapValues(key); // $ExpectType Object<{ [x: number]: any; }>

    _("a").mapValues(); // $ExpectType Object<NumericDictionary<string>>
    _(dictionary).mapValues(); // $ExpectType Object<Dictionary<AbcObject>>
    _(numericDictionary).mapValues(); // $ExpectType Object<NumericDictionary<AbcObject>>
    _(abcObject).mapValues(); // $ExpectType Object<AbcObject>
    _(abcObjectOrNull).mapValues(); // $ExpectType Object<AbcObject>

    // $ExpectType ObjectChain<NumericDictionary<AbcObject>>
    _.chain("foo").mapValues((char, index, str) => {
        char; // $ExpectType string
        index; // $ExpectType number
        str; // $ExpectType string
        return abcObject;
    });

    // $ExpectType ObjectChain<{ [x: string]: string; }>
    _.chain(dictionary).mapValues((value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
        return "";
    });

    // $ExpectType ObjectChain<{ [x: number]: string; }>
    _.chain(numericDictionary).mapValues((value, key, collection) => {
        value;  // $ExpectType AbcObject
        key; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
        return "";
    });

    // $ExpectType ObjectChain<{ a: string; b: string; c: string; }>
    _.chain(abcObject).mapValues((value, key, collection) => {
        value;  // $ExpectType string | number | boolean
        key; // $ExpectType string
        collection; // $ExpectType AbcObject
        return "";
    });

    _.chain(dictionary).mapValues({}); // $ExpectType ObjectChain<{ [x: string]: boolean; }>
    _.chain(numericDictionary).mapValues({}); // $ExpectType ObjectChain<{ [x: number]: boolean; }>
    _.chain(abcObject).mapValues({}); // $ExpectType ObjectChain<{ a: boolean; b: boolean; c: boolean; }>

    _.chain(dictionary).mapValues("a"); // $ExpectType ObjectChain<Dictionary<number>>
    // Can"t really support NumericDictionary fully, but it at least gets treated like a Dictionary
    _.chain(numericDictionary).mapValues("a"); // $ExpectType ObjectChain<Dictionary<number>>

    _.chain(abcObject).mapValues(key); // $ExpectType ObjectChain<{ a: any; b: any; c: any; }>
    _.chain(dictionary).mapValues(key); // $ExpectType ObjectChain<{ [x: string]: any; }>
    _.chain(numericDictionary).mapValues(key); // $ExpectType ObjectChain<{ [x: number]: any; }>

    _.chain("a").mapValues(); // $ExpectType ObjectChain<NumericDictionary<string>>
    _.chain(dictionary).mapValues(); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    _.chain(numericDictionary).mapValues(); // $ExpectType ObjectChain<NumericDictionary<AbcObject>>

    _.chain(abcObject).mapValues(); // $ExpectType ObjectChain<AbcObject>
    _.chain(abcObjectOrNull).mapValues(); // $ExpectType ObjectChain<AbcObject>

    fp.mapValues(valueIterator)(dictionary); // $ExpectType Dictionary<boolean>
    fp.mapValues("a", dictionary); // $ExpectType Dictionary<number>
    fp.mapValues(valueIterator)(numericDictionary); // $ExpectType Dictionary<boolean>
    fp.mapValues({ a: 42 })(numericDictionary); // $ExpectType Dictionary<boolean>
    fp.mapValues(value => "", abcObjectOrNull); // $ExpectType { a: string; b: string; c: string; }
}

// _.omit
{
    const obj: AbcObject | null | undefined = anything;
    const dictionary: _.Dictionary<AbcObject> = anything;
    const numericDictionary: _.NumericDictionary<AbcObject> = anything;

    _.omit(obj, "a"); // $ExpectType Pick<AbcObject, "b" | "c">
    _.omit(obj, ["b", 1], 0, "a"); // $ExpectType Partial<AbcObject>
    _.omit(dictionary, "a"); // $ExpectType Pick<Dictionary<AbcObject>, string | number>
    _.omit(numericDictionary, "a"); // $ExpectType Pick<NumericDictionary<AbcObject>, number>
    _(obj).omit("a"); // $ExpectType Object<Pick<AbcObject, "b" | "c">> || Object<Omit<AbcObject, "a">>
    _(obj).omit(["b", 1], 0, "a"); // $ExpectType Object<Partial<AbcObject>>
    _(dictionary).omit("a"); // $ExpectType Object<Pick<Dictionary<AbcObject>, string | number>> || Object<Omit<Dictionary<AbcObject>, "a">>
    _(numericDictionary).omit(100); // $ExpectType Object<Pick<NumericDictionary<AbcObject>, number>> || Object<Omit<NumericDictionary<AbcObject>, 100>>

    _.chain(obj).omit("a"); // $ExpectType ObjectChain<Pick<AbcObject, "b" | "c">> || ObjectChain<Omit<AbcObject, "a">>
    _.chain(obj).omit(["b", 1], 0, "a"); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(dictionary).omit("a"); // $ExpectType ObjectChain<Pick<Dictionary<AbcObject>, string | number>> || ObjectChain<Omit<Dictionary<AbcObject>, "a">>
    _.chain(numericDictionary).omit("a"); // $ExpectType ObjectChain<Partial<NumericDictionary<AbcObject>>>

    fp.omit("a", obj); // $ExpectType Pick<AbcObject, "b" | "c"> || Omit<AbcObject, "a">
    fp.omit("a")(obj); // $ExpectType Partial<AbcObject>
    fp.omit(["a", "b"])(obj); // $ExpectType Partial<AbcObject>
}

// _.omitBy
{
    const obj: AbcObject | null | undefined = anything;
    const dictionary: _.Dictionary<boolean> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<boolean> | null | undefined = anything;
    const predicate = (element: string | number | boolean, key: string) => true;
    const predicate2 = (element: boolean, key: string) => true;

    _.omitBy(obj, predicate); // $ExpectType Partial<AbcObject>
    _.omitBy(dictionary, predicate2); // $ExpectType Dictionary<boolean>
    _.omitBy(numericDictionary, predicate2); // $ExpectType NumericDictionary<boolean>
    _(obj).omitBy(predicate); // $ExpectType Object<Partial<AbcObject>>
    _(dictionary).omitBy(predicate2); // $ExpectType Object<Partial<Dictionary<boolean>>>
    _(numericDictionary).omitBy(predicate2); // $ExpectType Object<Partial<NumericDictionary<boolean>>>
    _.chain(obj).omitBy(predicate); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(dictionary).omitBy(predicate2); // $ExpectType ObjectChain<Partial<Dictionary<boolean>>>
    _.chain(numericDictionary).omitBy(predicate2); // $ExpectType ObjectChain<Partial<NumericDictionary<boolean>>>
    fp.omitBy(predicate, obj); // $ExpectType Partial<AbcObject>
    fp.omitBy(predicate2)(dictionary); // $ExpectType Dictionary<boolean>
    fp.omitBy(predicate2)(numericDictionary); // $ExpectType NumericDictionary<boolean>
}

// _.pick
{
    const obj1: AbcObject | null | undefined = anything;
    const obj2: AbcObject = anything;
    const readonlyArray: ReadonlyArray<string> = ["a", "b"];
    const literalsArray: Array<"a" | "b"> = ["a", "b"];
    const roLiteralsArray: ReadonlyArray<"a" | "b"> = literalsArray;

    _.pick(obj1, "a"); // $ExpectType Partial<AbcObject>
    _.pick(obj1, 0, "a"); // $ExpectType Partial<AbcObject>
    _.pick(obj1, ["b", 1], 0, "a"); // $ExpectType Partial<AbcObject>
    _.pick(obj1, readonlyArray); // $ExpectType Partial<AbcObject>
    _.pick(obj2, "a", "b"); // $ExpectType Pick<AbcObject, "a" | "b">
    // We can't use ExpectType here because typescript keeps changing what order the types appear.
    let result1: Pick<AbcObject, "a" | "b">;
    result1 = _.pick(obj2, literalsArray);
    result1 = _.pick(obj2, roLiteralsArray);

    _(obj1).pick("a"); // $ExpectType Object<Pick<AbcObject, "a">>
    _(obj1).pick(0, "a"); // $ExpectType Object<Partial<AbcObject>>
    _(obj1).pick(["b", 1], 0, "a"); // $ExpectType Object<Partial<AbcObject>>
    _(obj1).pick(readonlyArray); // $ExpectType Object<Partial<AbcObject>>
    _(obj2).pick("a", "b"); // $ExpectType Object<Pick<AbcObject, "a" | "b">>
    let result2: _.Object<Pick<AbcObject, "a" | "b">>;
    result2 = _(obj2).pick(literalsArray);
    result2 = _(obj2).pick(roLiteralsArray);

    _.chain(obj1).pick("a"); // $ExpectType ObjectChain<Pick<AbcObject, "a">>
    _.chain(obj1).pick(0, "a"); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(obj1).pick(["b", 1], 0, "a"); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(obj1).pick(readonlyArray); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(obj2).pick("a", "b"); // $ExpectType ObjectChain<Pick<AbcObject, "a" | "b">>
    let result3: _.LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>;
    result3 = _.chain(obj2).pick(literalsArray);
    result3 = _.chain(obj2).pick(roLiteralsArray);

    fp.pick<AbcObject, "a">("a", obj2); // $ExpectType Pick<AbcObject, "a">
    fp.pick<AbcObject, "a">("a")(obj2); // $ExpectType Pick<AbcObject, "a">
    result1 = fp.pick<AbcObject, "a" | "b">(literalsArray)(obj2);
}

// _.pickBy
{
    const obj: AbcObject | null | undefined = anything;
    const dictionary: _.Dictionary<boolean> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<boolean> | null | undefined = anything;
    const predicate = (element: string | number | boolean, key: string) => true;
    const predicate2 = (element: boolean, key: string) => true;

    _.pickBy(obj, predicate); // $ExpectType Partial<AbcObject>
    _.pickBy(dictionary, predicate2); // $ExpectType Dictionary<boolean>
    _.pickBy(numericDictionary, predicate2); // $ExpectType NumericDictionary<boolean>
    _(obj).pickBy(predicate); // $ExpectType Object<Partial<AbcObject>>
    _(dictionary).pickBy(predicate2); // $ExpectType Object<Partial<Dictionary<boolean>>>
    _(numericDictionary).pickBy(predicate2); // $ExpectType Object<Partial<NumericDictionary<boolean>>>
    _.chain(obj).pickBy(predicate); // $ExpectType ObjectChain<Partial<AbcObject>>
    _.chain(dictionary).pickBy(predicate2); // $ExpectType ObjectChain<Partial<Dictionary<boolean>>>
    _.chain(numericDictionary).pickBy(predicate2); // $ExpectType ObjectChain<Partial<NumericDictionary<boolean>>>
    fp.pickBy(predicate, obj); // $ExpectType Partial<AbcObject>
    fp.pickBy(predicate2)(dictionary); // $ExpectType Dictionary<boolean>
    fp.pickBy(predicate2)(numericDictionary); // $ExpectType NumericDictionary<boolean>

    const mixedDictionary: _.Dictionary<string | number> | null | undefined = anything;

    const userDefinedTypeGuard = (item: string | number): item is number => typeof item === "number";

    _.pickBy(mixedDictionary, userDefinedTypeGuard); // $ExpectType Dictionary<number>
    _(mixedDictionary).pickBy(userDefinedTypeGuard); // $ExpectType Object<Dictionary<number>>
    _.chain(mixedDictionary).pickBy(userDefinedTypeGuard); // $ExpectType ObjectChain<Dictionary<number>>
    fp.pickBy(userDefinedTypeGuard)(mixedDictionary); // $ExpectType Dictionary<number>

    const mixedNumericDictionary: _.NumericDictionary<string | number> | null | undefined = anything;

    _.pickBy(mixedNumericDictionary, userDefinedTypeGuard); // $ExpectType NumericDictionary<number>
    _(mixedNumericDictionary).pickBy(userDefinedTypeGuard); // $ExpectType Object<Dictionary<number>>
    _.chain(mixedNumericDictionary).pickBy(userDefinedTypeGuard); // $ExpectType ObjectChain<Dictionary<number>>
    fp.pickBy(userDefinedTypeGuard)(mixedNumericDictionary); // $ExpectType NumericDictionary<number>
}

// _.result
{
    _.result<string>("abc", "0"); // $ExpectType string
    _.result<string>("abc", 0, "_"); // $ExpectType string
    _.result<string>("abc", "0", () => "_"); // $ExpectType string
    _.result<string>("abc", ["0"]); // $ExpectType string
    _.result<string>("abc", [0], () => "_"); // $ExpectType string
    _.result<boolean>({ a: () => true }, "a"); // $ExpectType boolean
    _("abc").result<string>("0"); // $ExpectType string
    _("abc").result<string>(0, "_"); // $ExpectType string
    _("abc").result<string>("0", () => "_"); // $ExpectType string
    _("abc").result<string>(["0"]); // $ExpectType string
    _("abc").result<string>([0], () => "_"); // $ExpectType string
    _({ a: () => true }).result<boolean>("a"); // $ExpectType boolean
    _.chain("abc").result<string>("0"); // $ExpectType StringChain
    _.chain("abc").result<string>(0, "_"); // $ExpectType StringChain
    _.chain("abc").result<string>("0", () => "_"); // $ExpectType StringChain
    _.chain("abc").result<string>(["0"]); // $ExpectType StringChain
    _.chain("abc").result<string>([0], () => "_"); // $ExpectType StringChain
    _.chain({ a: () => true }).result<boolean>("a"); // $ExpectType PrimitiveChain<false> | PrimitiveChain<true>

    fp.result<string>("0", "abc"); // $ExpectType string
    fp.result("0")<string>("abc"); // $ExpectType string
}

// _.set
// _.setWith
{
    interface SampleResult {
        a: {
            b: number[];
        };
    }

    const object = { a: {} };

    _.set<SampleResult>(object, "a.b[1]", 42); // $ExpectType SampleResult
    _.set<SampleResult>(object, ["a", "b", 1], 42); // $ExpectType SampleResult

    _(object).set<SampleResult>("a.b[1]", 42); // $ExpectType Object<SampleResult>
    _(object).set<SampleResult>(["a", "b", 1], 42); // $ExpectType Object<SampleResult>

    _.chain(object).set<SampleResult>("a.b[1]", 42); // $ExpectType ObjectChain<SampleResult>
    _.chain(object).set<SampleResult>(["a", "b", 1], 42); // $ExpectType ObjectChain<SampleResult>

    fp.set("a", 42, object); // $ExpectType { a: {}; }
    fp.set("a.b[1]")(42)(object); // $ExpectType { a: {}; }
    fp.set(["a", "b", 1])(42)(object); // $ExpectType { a: {}; }
}
{
    interface SampleResult {
        a: {
            b: number[];
        };
    }

    const object: SampleResult = { a: { b: [0, 1] } };
    const customizer = (value: any, key: string, object: SampleResult) => 0;

    _.setWith<SampleResult>(object, "a.b[1]", 42); // $ExpectType SampleResult
    _.setWith<SampleResult>(object, "a.b[1]", 42, customizer); // $ExpectType SampleResult
    _.setWith<SampleResult>(object, ["a", "b", 1], 42, customizer); // $ExpectType SampleResult

    _(object).setWith<SampleResult>("a.b[1]", 42); // $ExpectType Object<SampleResult>
    _(object).setWith<SampleResult>("a.b[1]", 42, customizer); // $ExpectType Object<SampleResult>
    _(object).setWith<SampleResult>(["a", "b", 1], 42, customizer); // $ExpectType Object<SampleResult>

    _.chain(object).setWith<SampleResult>("a.b[1]", 42); // $ExpectType ObjectChain<SampleResult>
    _.chain(object).setWith<SampleResult>("a.b[1]", 42, customizer); // $ExpectType ObjectChain<SampleResult>
    _.chain(object).setWith<SampleResult>(["a", "b", 1], 42, customizer); // $ExpectType ObjectChain<SampleResult>

    fp.setWith(customizer, "a", 42, object); // $ExpectType SampleResult
    fp.setWith(customizer)("a.b[1]")(42)(object); // $ExpectType SampleResult
    fp.setWith(customizer)(["a", "b", 1])(42)(object); // $ExpectType SampleResult
}

// _.toPairs
// _.toPairsIn
{
    const dictionary: _.Dictionary<number> = {};
    const numericDictionary: _.NumericDictionary<number> = {};

    _.toPairs(dictionary); // $ExpectType [string, number][]
    _.toPairs(numericDictionary); // $ExpectType [string, number][]
    _.toPairs(abcObject);  // $ExpectType [string, any][]

    _(dictionary).toPairs(); // $ExpectType Collection<[string, number]>
    _(numericDictionary).toPairs(); // $ExpectType Collection<[string, number]>
    _(abcObject).toPairs(); // $ExpectType Collection<[string, any]>

    _.chain(dictionary).toPairs(); // $ExpectType CollectionChain<[string, number]>
    _.chain(numericDictionary).toPairs(); // $ExpectType CollectionChain<[string, number]>
    _.chain(abcObject).toPairs(); // $ExpectType CollectionChain<[string, any]>

    fp.toPairs(dictionary); // $ExpectType [string, number][]

    _.toPairsIn(dictionary); // $ExpectType [string, number][]
    _.toPairsIn(numericDictionary); // $ExpectType [string, number][]
    _.toPairsIn(abcObject);  // $ExpectType [string, any][]

    _(dictionary).toPairsIn(); // $ExpectType Collection<[string, number]>
    _(numericDictionary).toPairsIn(); // $ExpectType Collection<[string, number]>
    _(abcObject).toPairsIn(); // $ExpectType Collection<[string, any]>

    _.chain(dictionary).toPairsIn(); // $ExpectType CollectionChain<[string, number]>
    _.chain(numericDictionary).toPairsIn(); // $ExpectType CollectionChain<[string, number]>
    _.chain(abcObject).toPairsIn(); // $ExpectType CollectionChain<[string, any]>

    fp.toPairsIn(dictionary); // $ExpectType [string, number][]
}

// _.transform
{
    const array: number[] = [];
    const readonlyArray: ReadonlyArray<number> = [];
    const dictionary: _.Dictionary<number> = {};

    {
        const iterator = (acc: AbcObject[], curr: number, index?: number, arr?: number[]) => {};
        const accumulator: AbcObject[] = [];

        _.transform(array); // $ExpectType any[]
        _.transform<number, AbcObject[]>(array, iterator); // $ExpectType AbcObject[]
        _.transform<number, AbcObject[]>(array, iterator, accumulator); // $ExpectType AbcObject[]
        _.transform<number, AbcObject[]>(readonlyArray, iterator, accumulator); // $ExpectType AbcObject[]
        _(array).transform(); // $ExpectType Collection<any>
        _(array).transform(iterator); // $ExpectType Collection<AbcObject>
        _(array).transform(iterator, accumulator); // $ExpectType Collection<AbcObject>
        _.chain(array).transform(iterator, accumulator); // $ExpectType CollectionChain<AbcObject>
    }

    {
        const iterator = (acc: _.Dictionary<AbcObject>, curr: number, index?: number, arr?: number[]) => {};
        const accumulator: _.Dictionary<AbcObject> = {};

        _.transform<number, _.Dictionary<AbcObject>>(array, iterator, accumulator); // $ExpectType Dictionary<AbcObject>
        _(array).transform(iterator, accumulator); // $ExpectType Object<Dictionary<AbcObject>>
        _.chain(array).transform(iterator, accumulator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    }

    {
        const abcObjectRecord: Record<'a' | 'b' | 'c', number> = anything;
        const iterator = (acc: _.Dictionary<AbcObject>, curr: number, index: 'a' | 'b' | 'c', arr: typeof abcObjectRecord) => {};
        const accumulator: _.Dictionary<AbcObject> = {};

        _.transform<typeof abcObjectRecord, _.Dictionary<AbcObject>>(abcObjectRecord, iterator, accumulator); // $ExpectType Dictionary<AbcObject>
        _(abcObjectRecord).transform(iterator, accumulator); // $ExpectType Object<Dictionary<AbcObject>>
        _.chain(abcObjectRecord).transform(iterator, accumulator); // $ExpectType ObjectChain<Dictionary<AbcObject>>
    }

    {
        const iterator = (acc: _.Dictionary<AbcObject>, curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        const accumulator: _.Dictionary<AbcObject> = {};

        _.transform(dictionary); // $ExpectType Dictionary<any>
        _.transform(dictionary, iterator); // $ExpectType Dictionary<AbcObject>
        _.transform<number, _.Dictionary<AbcObject>>(dictionary, iterator, accumulator); // $ExpectType Dictionary<AbcObject>
        _(dictionary).transform(); // $ExpectType Object<Dictionary<any>>
        _(dictionary).transform(iterator); // $ExpectType Object<Dictionary<AbcObject>>
        _(dictionary).transform(iterator, accumulator); // $ExpectType Object<Dictionary<AbcObject>>
    }

    {
        const iterator = (acc: AbcObject[], curr: number, index?: string, dict?: _.Dictionary<number>) => {};
        const accumulator: AbcObject[] = [];

        _.transform<number, AbcObject[]>(dictionary, iterator, accumulator); // $ExpectType AbcObject[]
        _(dictionary).transform(iterator, accumulator); // $ExpectType Collection<AbcObject>
        _.chain(dictionary).transform(iterator, accumulator); // $ExpectType CollectionChain<AbcObject>
    }

    {
        const iterator = (acc: AbcObject[], curr: number): AbcObject => anything;
        const accumulator: AbcObject[] = [];

        fp.transform(iterator, accumulator, array); // $ExpectType AbcObject[]
        fp.transform(iterator)(accumulator)(array); // $ExpectType AbcObject[]
        fp.transform(iterator)(accumulator)(dictionary); // $ExpectType AbcObject[]
    }

    {
        const iterator = (acc: _.Dictionary<AbcObject>, curr: number): AbcObject => anything;
        const accumulator: _.Dictionary<AbcObject> = {};

        fp.transform(iterator)(accumulator)(array); // $ExpectType Dictionary<AbcObject>
        fp.transform(iterator)(accumulator)(dictionary); // $ExpectType Dictionary<AbcObject>
    }
}

// _.unset
{
    const object = { a: { b: "", c: true } };

    _.unset(object, "a.b"); // $ExpectType boolean
    _.unset(object, ["a", "b"]); // $ExpectType boolean
    _(object).unset("a.b"); // $ExpectType Primitive<boolean>
    _(object).unset(["a", "b"]); // $ExpectType Primitive<boolean>
    _.chain(object).unset("a.b"); // $ExpectType PrimitiveChain<boolean>
    _.chain(object).unset(["a", "b"]); // $ExpectType PrimitiveChain<boolean>

    fp.unset("a.b", object); // $ExpectType { a: { b: string; c: boolean; }; }
    fp.unset("a.b")(object); // $ExpectType { a: { b: string; c: boolean; }; }
    fp.unset(["a", "b"])(object); // $ExpectType { a: { b: string; c: boolean; }; }
}

// _.update
{
    const object = { a: { b: [0] } };
    const updater = (value: any) => 0;

    _.update(object, "a.b[1]", updater); // $ExpectType any
    _.update(object, ["a", "b", 1], updater); // $ExpectType any
    _(object).update("a.b[1]", updater); // $ExpectType Object<any>
    _(object).update(["a", "b", 1], updater); // $ExpectType Object<any>
    _.chain(object).update("a.b[1]", updater); // $ExpectType ObjectChain<any>
    _.chain(object).update(["a", "b", 1], updater); // $ExpectType ObjectChain<any>
    fp.update("a.b[1]", updater, object); // $ExpectType any
    fp.update(["a", "b", 1])(updater)(object); // $ExpectType any
}

// _.updateWith
{
    interface SampleResult {
        a: {
            b: number[];
        };
    }
    const object: SampleResult = { a: { b: [] } };
    const updater = (value: any) => 0;
    const customizer = (value: any, key: string, object: SampleResult) => 0;

    _.updateWith<SampleResult>(object, "a.b[1]", updater); // $ExpectType SampleResult
    _.updateWith<SampleResult>(object, "a.b[1]", updater, customizer); // $ExpectType SampleResult
    _.updateWith<SampleResult>(object, ["a", "b", 1], updater, customizer); // $ExpectType SampleResult
    _(object).updateWith<SampleResult>("a.b[1]", updater); // $ExpectType Object<SampleResult>
    _(object).updateWith<SampleResult>("a.b[1]", updater, customizer); // $ExpectType Object<SampleResult>
    _(object).updateWith<SampleResult>(["a", "b", 1], updater, customizer); // $ExpectType Object<SampleResult>
    _.chain(object).updateWith<SampleResult>("a.b[1]", updater, customizer); // $ExpectType ObjectChain<SampleResult>
    fp.updateWith(customizer, "a.b[1]", updater, object); // $ExpectType SampleResult
    fp.updateWith(customizer)(["a", "b", 1])(updater)(object); // $ExpectType SampleResult
}

// _.values
// _.valuesIn
{
    const dict: _.Dictionary<AbcObject> = {};
    const numDict: _.NumericDictionary<AbcObject> = {};

    _.values(123); // $ExpectType any[]
    _.values(true); // $ExpectType any[]
    _.values("hi"); // $ExpectType string[]
    _.values(["h", "i"]); // $ExpectType string[]
    _.values([true, false]); // $ExpectType boolean[]
    _.values(dict); // $ExpectType AbcObject[]
    _.values(numDict); // $ExpectType AbcObject[]
    _.values(list); // $ExpectType AbcObject[]
    _.values(abcObject); // $ExpectType (string | number | boolean)[]

    // _(true).values(); // $ExpectError
    _("hi").values(); // $ExpectType Collection<string>
    _(dict).values(); // $ExpectType Collection<AbcObject>

    // _.chain(true).values(); // $ExpectError
    _.chain("hi").values(); // $ExpectType CollectionChain<string>
    _.chain(dict).values(); // $ExpectType CollectionChain<AbcObject>

    fp.values("hi"); // $ExpectType string[]
    fp.values(["h", "i"]); // $ExpectType string[]
    fp.values([true, false]); // $ExpectType boolean[]
    fp.values(dict); // $ExpectType AbcObject[]
    fp.values(numDict); // $ExpectType AbcObject[]
    fp.values(list); // $ExpectType AbcObject[]
    fp.values(abcObject); // $ExpectType (string | number | boolean)[]

    _.valuesIn([true, false]); // $ExpectType boolean[]
    _.valuesIn(dict); // $ExpectType AbcObject[]
    _.valuesIn(numDict); // $ExpectType AbcObject[]
    _.valuesIn(list); // $ExpectType AbcObject[]
    _.valuesIn(abcObject); // $ExpectType (string | number | boolean)[]

    _(dict).valuesIn(); // $ExpectType Collection<AbcObject>
    _.chain(dict).valuesIn(); // $ExpectType CollectionChain<AbcObject>

    fp.valuesIn(dict); // $ExpectType AbcObject[]
    fp.valuesIn(numDict); // $ExpectType AbcObject[]
    fp.valuesIn(list); // $ExpectType AbcObject[]
    fp.valuesIn(abcObject); // $ExpectType (string | number | boolean)[]
}

/*******
 * Seq *
 *******/

// _
{
    _(""); // $ExpectType String
    _(42); // $ExpectType Primitive<number>
    _(true); // $ExpectType Primitive<boolean>
    _([""]); // $ExpectType Collection<string>
    _({ a: "" }); // $ExpectType Object<{ a: string; }>
    _(array); // $ExpectType Collection<AbcObject>
}

// _.chain
{
    _.chain(""); // $ExpectType StringChain
    _("").chain(); // $ExpectType StringChain
    _.chain("").chain(); // $ExpectType StringChain
    _.chain(42); // $ExpectType PrimitiveChain<number>
    _.chain([""]); // $ExpectType CollectionChain<string>
    _.chain({ a: 42 }); // $ExpectType ObjectChain<{ a: number; }>
}

// _.tap
{
    // $ExpectType string
    _.tap("a", (value) => {
        value; // $ExpectType string
    });
    // $ExpectType boolean[]
    _.tap([true], (value) => {
        value; // $ExpectType boolean[]
    });
    // $ExpectType { a: number; }
    _.tap({ a: 42 }, (value) => {
        value; // $ExpectType { a: number; }
    });

    // $ExpectType String
    _("a").tap((value) => {
        value; // $ExpectType string
    });
    // $ExpectType Collection<boolean>
    _([true]).tap((value) => {
        value; // $ExpectType boolean[]
    });
    // $ExpectType Object<{ a: number; }>
    _({ a: 42 }).tap((value) => {
        value; // $ExpectType { a: number; }
    });

    // $ExpectType StringChain
    _.chain("a").tap((value) => {
        value; // $ExpectType string
    });
    // $ExpectType CollectionChain<boolean>
    _.chain([true]).tap((value) => {
        value; // $ExpectType boolean[]
    });
    // $ExpectType ObjectChain<{ a: number; }>
    _.chain({ a: 42 }).tap((value) => {
        value; // $ExpectType { a: number; }
    });

    fp.tap((value: string) => {}, "a" as string); // $ExpectType string
    fp.tap((value: string) => {})("a"); // $ExpectType string
    fp.tap((value: string[]) => {}, ["a"]); // $ExpectType string[]
}

// _.thru
{
    // $ExpectType number
    _.thru("a", (value) => {
        value; // $ExpectType string
        return 1;
    });
    // $ExpectType number
    _.thru([true], (value) => {
        value; // $ExpectType boolean[]
        return 1;
    });
    // $ExpectType number
    _.thru({ a: 42 }, (value) => {
        value; // $ExpectType { a: number; }
        return 1;
    });

    // $ExpectType Primitive<number>
    _("a").thru((value) => {
        value; // $ExpectType string
        return 1;
    });
    // $ExpectType Primitive<number>
    _([true]).thru((value) => {
        value; // $ExpectType boolean[]
        return 1;
    });
    // $ExpectType Primitive<number>
    _({ a: 42 }).thru((value) => {
        value; // $ExpectType { a: number; }
        return 1;
    });

    // $ExpectType PrimitiveChain<number>
    _.chain("a").thru((value) => {
        value; // $ExpectType string
        return 1;
    });
    // $ExpectType PrimitiveChain<number>
    _.chain([true]).thru((value) => {
        value; // $ExpectType boolean[]
        return 1;
    });
    // $ExpectType PrimitiveChain<number>
    _.chain({ a: 42 }).thru((value) => {
        value; // $ExpectType { a: number; }
        return 1;
    });

    fp.thru((x: number) => x.toString(), 1); // $ExpectType string
    fp.thru((x: number) => x.toString())(1); // $ExpectType string
    fp.thru((x: number[]) => x.toString())([1]); // $ExpectType string
}

// _.prototype.commit
{
    _(42).commit(); // $ExpectType Primitive<number>
    _({ a: 42 }).commit(); // $ExpectType Object<{ a: number; }>
    _.chain(42).commit(); // $ExpectType PrimitiveChain<number>
    _.chain({ a: 42 }).commit(); // $ExpectType ObjectChain<{ a: number; }>
}

// _.prototype.concat
{
    const numberROA: ReadonlyArray<number> = [0];

    _.concat(1); // $ExpectType number[]
    _.concat([1]); // $ExpectType number[]
    _.concat(numberROA); // $ExpectType number[]
    _.concat(1, 2); // $ExpectType number[]
    _.concat(1, [1]); // $ExpectType number[]
    _.concat(1, [1], numberROA); // $ExpectType number[]

    _(1).concat(2); // $ExpectType Collection<number>
    _(1).concat([1]); // $ExpectType Collection<number>
    _(1).concat([2], numberROA); // $ExpectType Collection<number>
    _([1]).concat(2); // $ExpectType Collection<number>
    _(numberROA).concat(numberROA); // $ExpectType Collection<number>
    _(numberROA).concat(numberROA, numberROA); // $ExpectType Collection<number>

    _.chain(1).concat(2); // $ExpectType CollectionChain<number>
    _.chain(1).concat([1]); // $ExpectType CollectionChain<number>
    _.chain(1).concat([2], numberROA); // $ExpectType CollectionChain<number>
    _.chain([1]).concat(2); // $ExpectType CollectionChain<number>
    _.chain(numberROA).concat(numberROA); // $ExpectType CollectionChain<number>
    _.chain(numberROA).concat(numberROA, numberROA); // $ExpectType CollectionChain<number>

    const objectROA: ReadonlyArray<AbcObject> = [{ a: 1, b: 'foo', c: true }];

    _.concat(abcObject, abcObject); // $ExpectType AbcObject[]
    _.concat(abcObject, [abcObject], objectROA); // $ExpectType AbcObject[]

    _(abcObject).concat(abcObject); // $ExpectType Collection<AbcObject>
    _(abcObject).concat([abcObject], objectROA); // $ExpectType Collection<AbcObject>

    _.chain(abcObject).concat(abcObject); // $ExpectType CollectionChain<AbcObject>
    _.chain(abcObject).concat([abcObject], objectROA); // $ExpectType CollectionChain<AbcObject>
}

// _.prototype.plant
{
    _(anything).plant(""); // $ExpectType Collection<any> & Function<any> & Object<any> & Primitive<any> & String
    _(anything).plant(42); // $ExpectType Collection<any> & Function<any> & Object<any> & Primitive<any> & String
    _(anything).plant([""]); // $ExpectType Collection<any> & Function<any> & Object<any> & Primitive<any> & String
    _(anything).plant({ a: 42 }); // $ExpectType Collection<any> & Function<any> & Object<any> & Primitive<any> & String

    _.chain(anything).plant(""); // $ExpectType CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain
    _.chain(anything).plant(42); // $ExpectType CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain
    _.chain(anything).plant([""]); // $ExpectType CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain
    _.chain(anything).plant({ a: 42 }); // $ExpectType CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain
}

// _.prototype.reverse
{
    _([42]).reverse(); // $ExpectType Collection<number>
    _.chain([42]).reverse(); // $ExpectType CollectionChain<number>
}

// _.prototype.toString
{
    _('').toString(); // $ExpectType string
    _(42).toString(); // $ExpectType string
    _([true]).toString(); // $ExpectType string
    _({}).toString(); // $ExpectType string

    _.chain('').toString(); // $ExpectType string
    _.chain(42).toString(); // $ExpectType string
    _.chain([true]).toString(); // $ExpectType string
    _.chain({}).toString(); // $ExpectType string
}

// _.prototype.value
// _.prototype.valueOf
// _.prototype.toJSON
{
    _("").value(); // $ExpectType string
    _([true]).value(); // $ExpectType boolean[]
    _({ a: 42 }).value(); // $ExpectType { a: number; }
    _({ a: 42 }).valueOf(); // $ExpectType { a: number; }
    _({ a: 42 }).toJSON(); // $ExpectType { a: number; }

    _.chain("").value(); // $ExpectType string
    _.chain([true]).value(); // $ExpectType boolean[]
    _.chain({ a: 42 }).value(); // $ExpectType { a: number; }
    _.chain({ a: 42 }).valueOf(); // $ExpectType { a: number; }
    _.chain({ a: 42 }).toJSON(); // $ExpectType { a: number; }
}

/**********
 * String *
 **********/

// _.camelCase
{
    _.camelCase("Foo Bar"); // $ExpectType string
    _("Foo Bar").camelCase(); // $ExpectType string
    _.chain("Foo Bar").camelCase(); // $ExpectType StringChain
    fp.camelCase("Foo Bar"); // $ExpectType string
}

// _.capitalize
{
    _.capitalize("fred"); // $ExpectType string
    _("fred").capitalize(); // $ExpectType string
    _.chain("fred").capitalize(); // $ExpectType StringChain
    fp.capitalize("fred"); // $ExpectType string
}

// _.deburr
{
    _.deburr("déjà vu"); // $ExpectType string
    _("déjà vu").deburr(); // $ExpectType string
    _.chain("déjà vu").deburr(); // $ExpectType StringChain
    fp.deburr("déjà vu"); // $ExpectType string
}

// _.endsWith
{
    _.endsWith("abc", "c"); // $ExpectType boolean
    _.endsWith("abc", "c", 1); // $ExpectType boolean
    _("abc").endsWith("c"); // $ExpectType boolean
    _("abc").endsWith("c", 1); // $ExpectType boolean
    _.chain("abc").endsWith("c"); // $ExpectType PrimitiveChain<boolean>
    _.chain("abc").endsWith("c", 1); // $ExpectType PrimitiveChain<boolean>
    fp.endsWith("c", "abc"); // $ExpectType boolean
    fp.endsWith("c")("abc"); // $ExpectType boolean
}

// _.escape
{
    _.escape("fred, barney, & pebbles"); // $ExpectType string
    _("fred, barney, & pebbles").escape(); // $ExpectType string
    _.chain("fred, barney, & pebbles").escape(); // $ExpectType StringChain
    fp.escape("fred, barney, & pebbles"); // $ExpectType string
}

// _.escapeRegExp
{
    _.escapeRegExp("[lodash](https://lodash.com/)"); // $ExpectType string
    _("[lodash](https://lodash.com/)").escapeRegExp(); // $ExpectType string
    _.chain("[lodash](https://lodash.com/)").escapeRegExp(); // $ExpectType StringChain
    fp.escapeRegExp("[lodash](https://lodash.com/)"); // $ExpectType string
}

// _.kebabCase
{
    _.kebabCase("Foo Bar"); // $ExpectType string
    _("Foo Bar").kebabCase(); // $ExpectType string
    _.chain("Foo Bar").kebabCase(); // $ExpectType StringChain
    fp.kebabCase("Foo Bar"); // $ExpectType string
}

// _.lowerCase
{
    _.lowerCase("Foo Bar"); // $ExpectType string
    _("Foo Bar").lowerCase(); // $ExpectType string
    _.chain("Foo Bar").lowerCase(); // $ExpectType StringChain
    fp.lowerCase("Foo Bar"); // $ExpectType string
}

// _.lowerFirst
{
    _.lowerFirst("Foo Bar"); // $ExpectType string
    _("Foo Bar").lowerFirst(); // $ExpectType string
    _.chain("Foo Bar").lowerFirst(); // $ExpectType StringChain
    fp.lowerFirst("Foo Bar"); // $ExpectType string
}

// _.pad
{
    _.pad("abc"); // $ExpectType string
    _.pad("abc", 8); // $ExpectType string
    _.pad("abc", 8, "_-"); // $ExpectType string
    _("abc").pad(); // $ExpectType string
    _("abc").pad(8); // $ExpectType string
    _("abc").pad(8, "_-"); // $ExpectType string
    _.chain("abc").pad(); // $ExpectType StringChain
    _.chain("abc").pad(8); // $ExpectType StringChain
    _.chain("abc").pad(8, "_-"); // $ExpectType StringChain
    fp.pad(8, "abc"); // $ExpectType string
    fp.pad(8)("abc"); // $ExpectType string
    fp.padChars("_", 8, "abc"); // $ExpectType string
    fp.padChars("_")(8)("abc"); // $ExpectType string
}

// _.padEnd
{
    _.padEnd("abc"); // $ExpectType string
    _.padEnd("abc", 6); // $ExpectType string
    _.padEnd("abc", 6, "_-"); // $ExpectType string
    _("abc").padEnd(); // $ExpectType string
    _("abc").padEnd(6); // $ExpectType string
    _("abc").padEnd(6, "_-"); // $ExpectType string
    _.chain("abc").padEnd(); // $ExpectType StringChain
    _.chain("abc").padEnd(6); // $ExpectType StringChain
    _.chain("abc").padEnd(6, "_-"); // $ExpectType StringChain
    fp.padEnd(8, "abc"); // $ExpectType string
    fp.padEnd(8)("abc"); // $ExpectType string
    fp.padCharsEnd("_", 8, "abc"); // $ExpectType string
    fp.padCharsEnd("_")(8)("abc"); // $ExpectType string
}

// _.padStart
{
    _.padStart("abc"); // $ExpectType string
    _.padStart("abc", 6); // $ExpectType string
    _.padStart("abc", 6, "_-"); // $ExpectType string
    _("abc").padStart(); // $ExpectType string
    _("abc").padStart(6); // $ExpectType string
    _("abc").padStart(6, "_-"); // $ExpectType string
    _.chain("abc").padStart(); // $ExpectType StringChain
    _.chain("abc").padStart(6); // $ExpectType StringChain
    _.chain("abc").padStart(6, "_-"); // $ExpectType StringChain
    fp.padStart(8, "abc"); // $ExpectType string
    fp.padStart(8)("abc"); // $ExpectType string
    fp.padCharsStart("_", 8, "abc"); // $ExpectType string
    fp.padCharsStart("_")(8)("abc"); // $ExpectType string
}

// _.parseInt
{
    _.parseInt("08"); // $ExpectType number
    _.parseInt("08", 10); // $ExpectType number
    _("08").parseInt(); // $ExpectType number
    _("08").parseInt(10); // $ExpectType number
    _.chain("08").parseInt(); // $ExpectType PrimitiveChain<number>
    _.chain("08").parseInt(10); // $ExpectType PrimitiveChain<number>
    fp.parseInt(10, "08"); // $ExpectType number
    fp.parseInt(10)("08"); // $ExpectType number
}

// _.repeat
{
    _.repeat("*"); // $ExpectType string
    _.repeat("*", 3); // $ExpectType string
    _("*").repeat(); // $ExpectType string
    _("*").repeat(3); // $ExpectType string
    _.chain("*").repeat(); // $ExpectType StringChain
    _.chain("*").repeat(3); // $ExpectType StringChain
    fp.repeat(3, "*"); // $ExpectType string
}

// _.replace
{
    const replacer = (match: string, offset: number, string: string) => "Barney";

    _.replace("Hi Fred", "Fred", "Barney"); // $ExpectType string
    _.replace("Hi Fred", "Fred", replacer); // $ExpectType string
    _.replace("Hi Fred", /fred/i, "Barney"); // $ExpectType string
    _.replace("Hi Fred", /fred/i, replacer); // $ExpectType string

    _("Hi Fred").replace("Fred", "Barney"); // $ExpectType string
    _("Hi Fred").replace("Fred", replacer); // $ExpectType string
    _("Hi Fred").replace(/fred/i, "Barney"); // $ExpectType string
    _("Hi Fred").replace(/fred/i, replacer); // $ExpectType string

    _.chain("Hi Fred").replace("Fred", "Barney"); // $ExpectType StringChain
    _.chain("Hi Fred").replace("Fred", replacer); // $ExpectType StringChain
    _.chain("Hi Fred").replace(/fred/i, "Barney"); // $ExpectType StringChain
    _.chain("Hi Fred").replace(/fred/i, replacer); // $ExpectType StringChain

    fp.replace("Fred", "Barney", "Hi Fred"); // $ExpectType string
    fp.replace("Fred")("Barney")("Hi Fred"); // $ExpectType string
    fp.replace("Fred")(replacer)("Hi Fred"); // $ExpectType string
    fp.replace(/fred/i)("Barney")("Hi Fred"); // $ExpectType string
    fp.replace(/fred/i)(replacer)("Hi Fred"); // $ExpectType string
}

// _.snakeCase
{
    _.snakeCase("Foo Bar"); // $ExpectType string
    _("Foo Bar").snakeCase(); // $ExpectType string
    _.chain("Foo Bar").snakeCase(); // $ExpectType StringChain
    fp.snakeCase("Foo Bar"); // $ExpectType string
}

// _.split
{
    _.split(undefined); // $ExpectType string[]
    _.split(null); // $ExpectType string[]
    _.split("a-b-c"); // $ExpectType string[]
    _.split(null, "-"); // $ExpectType string[]
    _.split("a-b-c", "-"); // $ExpectType string[]
    _.split(null, "-", 2); // $ExpectType string[]
    _.split("a-b-c", "-", 2); // $ExpectType string[]
    _(null).split();  // $ExpectType Collection<string>
    _("a-b-c").split(); // $ExpectType Collection<string>
    _(null).split("-");  // $ExpectType Collection<string>
    _("a-b-c").split("-"); // $ExpectType Collection<string>
    _(null).split("-", 2);  // $ExpectType Collection<string>
    _("a-b-c").split("-", 2); // $ExpectType Collection<string>
    _.chain(null).split(); // $ExpectType CollectionChain<string>
    _.chain("a-b-c").split(); // $ExpectType CollectionChain<string>
    _.chain(null).split("-"); // $ExpectType CollectionChain<string>
    _.chain("a-b-c").split("-"); // $ExpectType CollectionChain<string>
    _.chain(null).split("-", 2); // $ExpectType CollectionChain<string>
    _.chain("a-b-c").split("-", 2); // $ExpectType CollectionChain<string>
    fp.split("-", undefined); // $ExpectType string[]
    fp.split("-", null); // $ExpectType string[]
    fp.split("-", "a-b-c"); // $ExpectType string[]
    fp.split("-")(null); // $ExpectType string[]
    fp.split("-")("a-b-c"); // $ExpectType string[]

    _.map(["abc", "def"], _.split); // $ExpectType string[][]
}

// _.startCase
{
    _.startCase("--foo-bar"); // $ExpectType string
    _("--foo-bar").startCase(); // $ExpectType string
    _.chain("--foo-bar").startCase(); // $ExpectType StringChain
    fp.startCase("--foo-bar"); // $ExpectType string
}

// _.startsWith
{
    _.startsWith("abc", "a"); // $ExpectType boolean
    _.startsWith("abc", "a", 1); // $ExpectType boolean
    _("abc").startsWith("a"); // $ExpectType boolean
    _("abc").startsWith("a", 1); // $ExpectType boolean
    _.chain("abc").startsWith("a"); // $ExpectType PrimitiveChain<boolean>
    _.chain("abc").startsWith("a", 1); // $ExpectType PrimitiveChain<boolean>
    fp.startsWith("a", "abc"); // $ExpectType boolean
    fp.startsWith("a")("abc"); // $ExpectType boolean
}

// _.template
{
    const options: _.TemplateOptions = {
        escape: / /,
        evaluate: / /,
        imports: {},
        interpolate: / /,
        sourceURL: "",
        variable: "a",
    };

    const result = _.template("");
    result.source; // $ExpectType string
    result({}); // $ExpectType string

    _.template(""); // $ExpectType TemplateExecutor
    _.template("", options); // $ExpectType TemplateExecutor
    _("").template(); // $ExpectType TemplateExecutor
    _("").template(options); // $ExpectType TemplateExecutor
    _.chain("").template(); // $ExpectType FunctionChain<TemplateExecutor>
    _.chain("").template(options); // $ExpectType FunctionChain<TemplateExecutor>

    const result2 = fp.template("");
    result2(); // $ExpectType string
    result2.source; // $ExpectType string
}

// _.toLower
{
    _.toLower("fred, barney, &amp; pebbles"); // $ExpectType string
    _("fred, barney, &amp; pebbles").toLower(); // $ExpectType string
    _.chain("fred, barney, &amp; pebbles").toLower(); // $ExpectType StringChain
    fp.toLower("fred, barney, &amp; pebbles"); // $ExpectType string
}

// _.toUpper
{
    _.toUpper("fred, barney, &amp; pebbles"); // $ExpectType string
    _("fred, barney, &amp; pebbles").toUpper(); // $ExpectType string
    _.chain("fred, barney, &amp; pebbles").toUpper(); // $ExpectType StringChain
    fp.toUpper("fred, barney, &amp; pebbles"); // $ExpectType string
}

// _.trim
{
    _.trim(); // $ExpectType string
    _.trim("  abc  "); // $ExpectType string
    _.trim("-_-abc-_-", "_-"); // $ExpectType string
    _("-_-abc-_-").trim(); // $ExpectType string
    _("-_-abc-_-").trim("_-"); // $ExpectType string
    _.chain("-_-abc-_-").trim(); // $ExpectType StringChain
    _.chain("-_-abc-_-").trim("_-"); // $ExpectType StringChain
    fp.trim("  abc  "); // $ExpectType string
    fp.trimChars(" ", "  abc  "); // $ExpectType string
    fp.trimChars(" ")("  abc  "); // $ExpectType string

    _.map(["  foo  ", "  bar  "], _.trim); // $ExpectType string[]
}

// _.trimEnd
{
    _.trimEnd(); // $ExpectType string
    _.trimEnd("  abc  "); // $ExpectType string
    _.trimEnd("-_-abc-_-", "_-"); // $ExpectType string
    _("-_-abc-_-").trimEnd(); // $ExpectType string
    _("-_-abc-_-").trimEnd("_-"); // $ExpectType string
    _.chain("-_-abc-_-").trimEnd(); // $ExpectType StringChain
    _.chain("-_-abc-_-").trimEnd("_-"); // $ExpectType StringChain
    fp.trimEnd("  abc  "); // $ExpectType string
    fp.trimCharsEnd(" ", "  abc  "); // $ExpectType string
    fp.trimCharsEnd(" ")("  abc  "); // $ExpectType string
}

// _.trimStart
{
    _.trimStart(); // $ExpectType string
    _.trimStart("  abc  "); // $ExpectType string
    _.trimStart("-_-abc-_-", "_-"); // $ExpectType string
    _("-_-abc-_-").trimStart(); // $ExpectType string
    _("-_-abc-_-").trimStart("_-"); // $ExpectType string
    _.chain("-_-abc-_-").trimStart(); // $ExpectType StringChain
    _.chain("-_-abc-_-").trimStart("_-"); // $ExpectType StringChain
    fp.trimStart("  abc  "); // $ExpectType string
    fp.trimCharsStart(" ", "  abc  "); // $ExpectType string
    fp.trimCharsStart(" ")("  abc  "); // $ExpectType string
}

// _.truncate
{
    _.truncate("hi-diddly-ho there, neighborino"); // $ExpectType string
    _.truncate("hi-diddly-ho there, neighborino", { length: 24, separator: " " }); // $ExpectType string
    _.truncate("hi-diddly-ho there, neighborino", { length: 24, separator: /,? +/ }); // $ExpectType string
    _.truncate("hi-diddly-ho there, neighborino", { omission: " […]" }); // $ExpectType string

    _("hi-diddly-ho there, neighborino").truncate(); // $ExpectType string
    _("hi-diddly-ho there, neighborino").truncate({ length: 24, separator: " " }); // $ExpectType string
    _("hi-diddly-ho there, neighborino").truncate({ length: 24, separator: /,? +/ }); // $ExpectType string
    _("hi-diddly-ho there, neighborino").truncate({ omission: " […]" }); // $ExpectType string

    _.chain("hi-diddly-ho there, neighborino").truncate(); // $ExpectType StringChain
    _.chain("hi-diddly-ho there, neighborino").truncate({ length: 24, separator: " " }); // $ExpectType StringChain
    _.chain("hi-diddly-ho there, neighborino").truncate({ length: 24, separator: /,? +/ }); // $ExpectType StringChain
    _.chain("hi-diddly-ho there, neighborino").truncate({ omission: " […]" }); // $ExpectType StringChain

    fp.truncate({ length: 24, separator: " " }, "hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ length: 24, separator: " " })("hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ length: 24, separator: /,? +/ }, "hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ omission: " […]" }, "hi-diddly-ho there, neighborino"); // $ExpectType string
}

// _.unescape
{
    _.unescape("fred, barney, &amp; pebbles"); // $ExpectType string
    _("fred, barney, &amp; pebbles").unescape(); // $ExpectType string
    _.chain("fred, barney, &amp; pebbles").unescape(); // $ExpectType StringChain
    fp.unescape("fred, barney, &amp; pebbles"); // $ExpectType string
}

// _.upperCase
{
    _.upperCase("fred, barney, &amp; pebbles"); // $ExpectType string
    _("fred, barney, &amp; pebbles").upperCase(); // $ExpectType string
    _.chain("fred, barney, &amp; pebbles").upperCase(); // $ExpectType StringChain
    fp.upperCase("fred, barney, &amp; pebbles"); // $ExpectType string
}

// _.upperFirst
{
    _.upperFirst("fred, barney, &amp; pebbles"); // $ExpectType string
    _("fred, barney, &amp; pebbles").upperFirst(); // $ExpectType string
    _.chain("fred, barney, &amp; pebbles").upperFirst(); // $ExpectType StringChain
    fp.upperFirst("fred, barney, &amp; pebbles"); // $ExpectType string
}

// _.words
{
    _.words("fred, barney, & pebbles"); // $ExpectType string[]
    _.words("fred, barney, & pebbles", /[^, ]+/g); // $ExpectType string[]
    _("fred, barney, & pebbles").words(); // $ExpectType string[]
    _("fred, barney, & pebbles").words(/[^, ]+/g); // $ExpectType string[]
    _.chain("fred, barney, & pebbles").words(); // $ExpectType CollectionChain<string>
    _.chain("fred, barney, & pebbles").words(/[^, ]+/g); // $ExpectType CollectionChain<string>
    fp.words("fred, barney, & pebbles"); // $ExpectType string[]

    _.map(["fred, barney", "pebbles"], _.words); // $ExpectType string[][]
}

/********
 * Util *
 ********/

// _.attempt
{
    const func = (...args: any[]): AbcObject => anything;

    // We can't use ExpectType here because typescript keeps changing what order the types appear.
    let result: Error | AbcObject;
    result = _.attempt(func);
    result = _.attempt(func, "foo", "bar", "baz");
    result = _(func).attempt<AbcObject>();
    result = _(func).attempt<AbcObject>("foo", "bar", "baz");

    let explicitResult: _.ObjectChain<Error> | _.ObjectChain<AbcObject>;
    explicitResult = _.chain(func).attempt<AbcObject>();
    explicitResult = _.chain(func).attempt<AbcObject>("foo", "bar", "baz");

    result = fp.attempt(func);
}

// _.cond
{
    const pairPred1 = (val: string) => true;
    const pairPred2 = (val: string) => false;
    const pairRes1 = (val: string) => 1;
    const pairRes2 = (val: string) => 2;

    _.cond([[pairPred1, pairRes1], [pairPred2, pairRes2]])("hello"); // $ExpectType number
    fp.cond([[pairPred1, pairRes1], [pairPred2, pairRes2]])("hello"); // $ExpectType number
}

// _.constant
{
    _.constant(42); // $ExpectType () => number
    _.constant("a"); // $ExpectType () => string
    _.constant([true]); // $ExpectType () => boolean[]
    _.constant({ a: "" }); // $ExpectType () => { a: string; }

    _(42).constant(); // $ExpectType Function<() => number>
    _("a").constant(); // $ExpectType Function<() => string>
    _([true]).constant(); // $ExpectType Function<() => boolean[]>
    _({ a: "" }).constant(); // $ExpectType Function<() => { a: string; }>

    _.chain(42).constant(); // $ExpectType FunctionChain<() => number>
    _.chain("a").constant(); // $ExpectType FunctionChain<() => string>
    _.chain([true]).constant(); // $ExpectType FunctionChain<() => boolean[]>
    _.chain({ a: "" }).constant(); // $ExpectType FunctionChain<() => { a: string; }>

    fp.constant(42); // $ExpectType () => number
    fp.constant("a"); // $ExpectType () => string
    fp.constant([true]); // $ExpectType () => boolean[]
    fp.constant({ a: "" }); // $ExpectType () => { a: string; }
}

// _.defaultTo
{
    _.defaultTo(42, 42); // $ExpectType 42
    _.defaultTo(undefined, 42); // $ExpectType 42
    _.defaultTo(null, 42); // $ExpectType 42
    _.defaultTo(NaN, 42); // $ExpectType number
    _.defaultTo(undefined, "default"); // $ExpectType "default"
    _.defaultTo(undefined, [true]); // $ExpectType boolean[]
    _.defaultTo(undefined, { a: "" }); // $ExpectType { a: string; }

    _(42).defaultTo(42); // $ExpectType number
    _(undefined).defaultTo(42); // $ExpectType 42
    _(null).defaultTo(42); // $ExpectType 42
    _(NaN).defaultTo(42); // $ExpectType number
    _(undefined).defaultTo("default"); // $ExpectType "default"
    _(undefined).defaultTo([true]); // $ExpectType boolean[]
    _(undefined).defaultTo({ a: "" }); // $ExpectType { a: string; }

    _.chain(42).defaultTo(42); // $ExpectType PrimitiveChain<number>
    const z1: _.PrimitiveChain<number> = _.chain(undefined).defaultTo(42);
    const z2: _.PrimitiveChain<number> = _.chain(null).defaultTo(42);
    _.chain(NaN).defaultTo(42); // $ExpectType PrimitiveChain<number>
    const z3: _.LoDashExplicitWrapper<string> =  _.chain(undefined).defaultTo("default");
    _.chain(undefined).defaultTo([true]); // $ExpectType CollectionChain<boolean>
    _.chain(undefined).defaultTo({ a: "" }); // $ExpectType ObjectChain<{ a: string; }>

    const n: number = anything;
    fp.defaultTo(42, n); // $ExpectType number
    fp.defaultTo(42)(n); // $ExpectType number
    fp.defaultTo(42)(undefined); // $ExpectType number
    fp.defaultTo(42)(null); // $ExpectType number
    fp.defaultTo(42)(NaN); // $ExpectType number

    const arr: boolean[] | undefined = anything;
    const result: boolean[] | "a" = fp.defaultTo("a", arr);
}

// _.identity
{
    _.identity(42); // $ExpectType 42
    _.identity([""]); // $ExpectType string[]
    _.identity({ a: true }); // $ExpectType { a: boolean; }
    _(42).identity(); // $ExpectType number
    _([""]).identity(); // $ExpectType string[]
    _({ a: true }).identity(); // $ExpectType { a: boolean; }
    _.chain(42).identity(); // $ExpectType PrimitiveChain<number>
    _.chain([""]).identity(); // $ExpectType CollectionChain<string>
    _.chain({ a: true }).identity(); // $ExpectType ObjectChain<{ a: boolean; }>
    fp.identity(42); // $ExpectType 42
    fp.identity([""]); // $ExpectType string[]
    fp.identity({ a: true }); // $ExpectType { a: boolean; }
}

// _.iteratee
{
    _.iteratee((a: AbcObject): boolean => anything); // $ExpectType (a: AbcObject) => boolean
    _.iteratee((...args: any[]): AbcObject => anything); // $ExpectType (...args: any[]) => AbcObject
    _.iteratee("a"); // $ExpectType (...args: any[]) => any
    _.iteratee({ a: 42 }); // $ExpectType (...args: any[]) => any
    _.iteratee(["a", 42]); // $ExpectType (...args: any[]) => any

    _((a: AbcObject): boolean => anything).iteratee(); // $ExpectType Function<(a: AbcObject) => boolean>
    _("a").iteratee(); // $ExpectType Function<(o: object) => any>
    _({ a: 42 }).iteratee(); // $ExpectType Function<(o: { a: number; }) => boolean>
    _(["a", 42]).iteratee(); // $ExpectType Function<(o: object) => boolean>

    _.chain((a: AbcObject): boolean => anything).iteratee(); // $ExpectType FunctionChain<(a: AbcObject) => boolean>
    _.chain("a").iteratee(); // $ExpectType FunctionChain<(o: object) => any>
    _.chain({ a: 42 }).iteratee(); // $ExpectType FunctionChain<(o: { a: number; }) => boolean>
    _.chain(["a", 42]).iteratee(); // $ExpectType FunctionChain<(o: object) => boolean>

    fp.iteratee((a: AbcObject): boolean => anything); // $ExpectType (a: AbcObject) => boolean
    fp.iteratee((...args: any[]): AbcObject => anything); // $ExpectType (...args: any[]) => AbcObject
    fp.iteratee(""); // $ExpectType (...args: any[]) => any
    fp.iteratee({ a: 42 }); // $ExpectType (...args: any[]) => any
    fp.iteratee(["a", 42]); // $ExpectType (...args: any[]) => any
}

// _.matches
{
    _.matches(abcObject); // $ExpectType (value: any) => boolean
    _.matches<AbcObject, AbcObject>(abcObject); // $ExpectType (value: AbcObject) => boolean
    _(abcObject).matches<AbcObject>(); // $ExpectType Function<(value: AbcObject) => boolean>
    _.chain(abcObject).matches<AbcObject>(); // $ExpectType FunctionChain<(value: AbcObject) => boolean>

    fp.matches(abcObject, {}); // $ExpectType boolean
    fp.matches(abcObject)({}); // $ExpectType boolean
}

// _.matchesProperty
{
    const path: string | string[] = anything;

    _.matchesProperty(path, abcObject); // $ExpectType (value: any) => boolean
    _.matchesProperty<AbcObject, AbcObject>(path, abcObject); // $ExpectType (value: AbcObject) => boolean
    _(path).matchesProperty(abcObject); // $ExpectType Function<(value: any) => boolean>
    _(path).matchesProperty<AbcObject, AbcObject>(abcObject);
    _.chain(path).matchesProperty(abcObject); // $ExpectType FunctionChain<(value: any) => boolean>
    fp.matchesProperty(path, abcObject); // $ExpectType (value: any) => boolean
}

// _.method
{
    _.method("a.0"); // $ExpectType (object: any) => any
    _.method("a.0", anything, anything, anything); // $ExpectType (object: any) => any
    _.method(["a", 0]); // $ExpectType (object: any) => any
    _.method(["a", 0], anything, anything, anything); // $ExpectType (object: any) => any

    _("a.0").method(); // $ExpectType Function<(object: any) => any>
    _("a.0").method(anything, anything, anything); // $ExpectType Function<(object: any) => any>
    _(["a", 0]).method(); // $ExpectType Function<(object: any) => any>
    _(["a", 0]).method(anything, anything, anything); // $ExpectType Function<(object: any) => any>

    _.chain("a.0").method(); // $ExpectType FunctionChain<(object: any) => any>
    _.chain("a.0").method(anything, anything, anything); // $ExpectType FunctionChain<(object: any) => any>
    _.chain(["a", 0]).method(); // $ExpectType FunctionChain<(object: any) => any>
    _.chain(["a", 0]).method(anything, anything, anything); // $ExpectType FunctionChain<(object: any) => any>

    fp.method("a.0"); // $ExpectType (object: any) => any
    fp.method(["a", 0]); // $ExpectType (object: any) => any
    fp.method(Symbol.replace); // $ExpectType (object: any) => any
}

// _.methodOf
{
    _.methodOf(abcObject) as (path: _.Many<_.PropertyName>) => any;
    _.methodOf(abcObject, anything, anything, anything) as (path: _.Many<_.PropertyName>) => any;
    _(abcObject).methodOf() as _.LoDashImplicitWrapper<(path: _.Many<_.PropertyName>) => any>;
    _(abcObject).methodOf(anything, anything, anything) as _.LoDashImplicitWrapper<(path: _.Many<_.PropertyName>) => any>;
    _.chain(abcObject).methodOf() as _.LoDashExplicitWrapper<(path: _.Many<_.PropertyName>) => any>;
    _.chain(abcObject).methodOf(anything, anything, anything) as _.LoDashExplicitWrapper<(path: _.Many<_.PropertyName>) => any>;
    fp.methodOf(abcObject) as (path: _.Many<_.PropertyName>) => any;
}

// _.mixin
{
    const source: _.Dictionary<(...args: any[]) => any> = {};
    const dest: AbcObject = anything;
    const options: {chain?: boolean} = {};

    _.mixin(source); // $ExpectType LoDashStatic
    _.mixin(source, options); // $ExpectType LoDashStatic
    _.mixin(dest, source); // $ExpectType AbcObject
    _.mixin(dest, source, options); // $ExpectType AbcObject

    _(source).mixin(); // $ExpectType LoDashImplicitWrapper<LoDashStatic>
    _(source).mixin(options); // $ExpectType LoDashImplicitWrapper<LoDashStatic>
    _(dest).mixin(source); // $ExpectType Object<AbcObject>
    _(dest).mixin(source, options); // $ExpectType Object<AbcObject>

    _.chain(source).mixin(); // $ExpectType LoDashExplicitWrapper<LoDashStatic>
    _.chain(source).mixin(options); // $ExpectType LoDashExplicitWrapper<LoDashStatic>
    _.chain(dest).mixin(source); // $ExpectType ObjectChain<AbcObject>
    _.chain(dest).mixin(source, options); // $ExpectType ObjectChain<AbcObject>
}

// _.noConflict
{
    _.noConflict(); // $ExpectType LoDashStatic
    _(42).noConflict(); // $ExpectType LoDashStatic
    _.chain(42).noConflict(); // $ExpectType LoDashExplicitWrapper<LoDashStatic>
    fp.noConflict(); // $ExpectType LoDashFp
}

// _.noop
{
    _.noop(); // $ExpectType void
    _.noop(1); // $ExpectType void
    _.noop(true, "a", 1); // $ExpectType void
    _("a").noop(true, "a", 1); // $ExpectType void
    _.chain("a").noop(true, "a", 1); // $ExpectType PrimitiveChain<undefined>

    fp.noop(); // $ExpectType void
    fp.noop(1); // $ExpectType void
    fp.noop(true, "a", 1); // $ExpectType void
}

{
    _.nthArg(); // $ExpectType (...args: any[]) => any
    _.nthArg(1); // $ExpectType (...args: any[]) => any
    _(1).nthArg(); // $ExpectType Function<(...args: any[]) => any>
    _.chain(1).nthArg(); // $ExpectType FunctionChain<(...args: any[]) => any>
    fp.nthArg(1); // $ExpectType (...args: any[]) => any
}

// _.over
{
    _.over(Math.max); // $ExpectType (...args: any[]) => number[]
    _.over(Math.max, Math.min); // $ExpectType (...args: any[]) => number[]
    _.over([Math.max]); // $ExpectType (...args: any[]) => number[]
    _.over([Math.max], [Math.min]); // $ExpectType (...args: any[]) => number[]

    _(Math.max).over<number>(); // $ExpectType Function<(...args: any[]) => number[]>
    _(Math.max).over<number>(Math.min); // $ExpectType Function<(...args: any[]) => number[]>
    _([Math.max]).over<number>(); // $ExpectType Function<(...args: any[]) => number[]>
    _([Math.max]).over<number>([Math.min]); // $ExpectType Function<(...args: any[]) => number[]>

    _.chain(Math.max).over<number>(); // $ExpectType FunctionChain<(...args: any[]) => number[]>
    _.chain(Math.max).over<number>(Math.min); // $ExpectType FunctionChain<(...args: any[]) => number[]>
    _.chain([Math.max]).over<number>(); // $ExpectType FunctionChain<(...args: any[]) => number[]>
    _.chain([Math.max]).over<number>([Math.min]); // $ExpectType FunctionChain<(...args: any[]) => number[]>

    fp.over(Math.max); // $ExpectType (...args: any[]) => number[]
    fp.over([Math.max, Math.min]); // $ExpectType (...args: any[]) => number[]
}

// _.overEvery
// _.overSome
{
    _.overEvery((number: number) => true); // $ExpectType (...args: number[]) => boolean
    _.overEvery((number: number) => true, (number: number) => true); // $ExpectType (...args: number[]) => boolean
    _.overEvery([(number: number) => true]); // $ExpectType (...args: number[]) => boolean
    _.overEvery([(number: number) => true], [(number: number) => true]); // $ExpectType (...args: number[]) => boolean

    _(Math.max).overEvery<number>(); // $ExpectType Function<(...args: number[]) => boolean>
    _(Math.max).overEvery((number: number) => true); // $ExpectType Function<(...args: number[]) => boolean>
    _([Math.max]).overEvery([(number: number) => true]); // $ExpectType Function<(...args: number[]) => boolean>

    _.chain(Math.max).overEvery<number>(); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    _.chain(Math.max).overEvery((number: number) => true); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    _.chain([Math.max]).overEvery([(number: number) => true]); // $ExpectType FunctionChain<(...args: number[]) => boolean>

    fp.overEvery((number: number) => true); // $ExpectType (...args: number[]) => boolean
    fp.overEvery([(number: number) => true, (number: number) => true]); // $ExpectType (...args: number[]) => boolean

    _.overSome((number: number) => true); // $ExpectType (...args: number[]) => boolean
    _.overSome((number: number) => true, (number: number) => true); // $ExpectType (...args: number[]) => boolean
    _.overSome([(number: number) => true]); // $ExpectType (...args: number[]) => boolean
    _.overSome([(number: number) => true], [(number: number) => true]); // $ExpectType (...args: number[]) => boolean

    _(Math.max).overSome<number>(); // $ExpectType Function<(...args: number[]) => boolean>
    _(Math.max).overSome((number: number) => true); // $ExpectType Function<(...args: number[]) => boolean>
    _([Math.max]).overSome([(number: number) => true]); // $ExpectType Function<(...args: number[]) => boolean>

    _.chain(Math.max).overSome<number>(); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    _.chain(Math.max).overSome((number: number) => true); // $ExpectType FunctionChain<(...args: number[]) => boolean>
    _.chain([Math.max]).overSome([(number: number) => true]); // $ExpectType FunctionChain<(...args: number[]) => boolean>

    fp.overSome((number: number) => true); // $ExpectType (...args: number[]) => boolean
    fp.overSome([(number: number) => true, (number: number) => true]); // $ExpectType (...args: number[]) => boolean
}

// _.property
{
    interface SampleObject {
        a: {
            b: number[];
        };
    }

    _.property<SampleObject, number>("a.b[0]"); // $ExpectType (obj: SampleObject) => number
    _.property<SampleObject, number>(["a", "b", 0]); // $ExpectType (obj: SampleObject) => number
    _("a.b[0]").property<SampleObject, number>(); // $ExpectType Function<(obj: SampleObject) => number>
    _(["a", "b", 0]).property<SampleObject, number>(); // $ExpectType Function<(obj: SampleObject) => number>
    _.chain("a.b[0]").property<SampleObject, number>(); // $ExpectType FunctionChain<(obj: SampleObject) => number>
    _.chain(["a", "b", 0]).property<SampleObject, number>(); // $ExpectType FunctionChain<(obj: SampleObject) => number>
    fp.property(Symbol.iterator)([]); // $ExpectType any
    fp.property([Symbol.iterator], []); // $ExpectType any || () => IterableIterator<never>
    fp.property(1)("abc"); // $ExpectType string
}

// _.propertyOf
{
    _.propertyOf({}) as (path: _.Many<_.PropertyName>) => any;
    _({}).propertyOf() as _.LoDashImplicitWrapper<(path: _.Many<_.PropertyName>) => any>;
    _.chain({}).propertyOf() as _.LoDashExplicitWrapper<(path: _.Many<_.PropertyName>) => any>;

    fp.propertyOf(Symbol.iterator)([]); // $ExpectType any
    fp.propertyOf([Symbol.iterator], []); // $ExpectType any || () => IterableIterator<never>
    fp.propertyOf(1)("abc"); // $ExpectType string
}

// _.range
// _.rangeRight
{
    _.range(10); // $ExpectType number[]
    _.range(1, 11); // $ExpectType number[]
    _.range(0, 30, 5); // $ExpectType number[]
    _(10).range(); // $ExpectType Collection<number>
    _(1).range(11); // $ExpectType Collection<number>
    _(0).range(30, 5); // $ExpectType Collection<number>
    _.chain(10).range(); // $ExpectType CollectionChain<number>
    _.chain(1).range(11); // $ExpectType CollectionChain<number>
    _.chain(0).range(30, 5); // $ExpectType CollectionChain<number>
    fp.range(1, 11); // $ExpectType number[]
    fp.range(1)(11); // $ExpectType number[]

    _.rangeRight(10); // $ExpectType number[]
    _.rangeRight(1, 11); // $ExpectType number[]
    _.rangeRight(0, 30, 5); // $ExpectType number[]
    _(10).rangeRight(); // $ExpectType Collection<number>
    _(1).rangeRight(11); // $ExpectType Collection<number>
    _(0).rangeRight(30, 5); // $ExpectType Collection<number>
    _.chain(10).rangeRight(); // $ExpectType CollectionChain<number>
    _.chain(1).rangeRight(11); // $ExpectType CollectionChain<number>
    _.chain(0).rangeRight(30, 5); // $ExpectType CollectionChain<number>
    fp.rangeRight(1, 11); // $ExpectType number[]
    fp.rangeRight(1)(11); // $ExpectType number[]

    _.map([5, 5], _.range); // $ExpectType number[][]
    _.map([5, 5], _.rangeRight); // $ExpectType number[][]
}

// _.runInContext
{
    _.runInContext(); // $ExpectType LoDashStatic
    _.runInContext({}); // $ExpectType LoDashStatic
    _({}).runInContext(); // $ExpectType LoDashStatic
    fp.runInContext({}); // $ExpectType LoDashStatic
}

// _.stubArray
{
    _.stubArray(); // $ExpectType any[]
    _(anything).stubArray(); // $ExpectType any[]
    _.chain(anything).stubArray(); // $ExpectType CollectionChain<any>
    fp.stubArray(); // $ExpectType any[]
}

// _.stubObject
{
    _.stubObject(); // $ExpectType any
    _(anything).stubObject(); // $ExpectType any
    _.chain(anything).stubObject(); // $ExpectType LoDashExplicitWrapper<any>
    fp.stubObject(); // $ExpectType any
}

// _.stubString
{
    _.stubString(); // $ExpectType string
    _(anything).stubString(); // $ExpectType string
    _.chain(anything).stubString(); // $ExpectType StringChain
    fp.stubString(); // $ExpectType string
}

// _.times
{
    const iteratee = (num: number): AbcObject => ({ a: 1, b: "", c: true });

    _.times(42); // $ExpectType number[]
    _.times(42, iteratee); // $ExpectType AbcObject[]
    _(42).times(); // $ExpectType number[]
    _(42).times(iteratee); // $ExpectType AbcObject[]
    _.chain(42).times(); // $ExpectType CollectionChain<number>
    _.chain(42).times(iteratee); // $ExpectType CollectionChain<AbcObject>
    fp.times(iteratee, 42); // $ExpectType AbcObject[]
    fp.times(iteratee)(42); // $ExpectType AbcObject[]
}

// _.toPath
{
   _.toPath(1); // $ExpectType string[]
   _.toPath("a[0].b.c"); // $ExpectType string[]
   _.toPath(["a", 1]); // $ExpectType string[]
   _(1).toPath(); // $ExpectType Collection<string>
   _("a[0].b.c").toPath(); // $ExpectType Collection<string>
   _(["a", 1]).toPath(); // $ExpectType Collection<string>
   _.chain(1).toPath(); // $ExpectType CollectionChain<string>
   _.chain("a[0].b.c").toPath(); // $ExpectType CollectionChain<string>
   _.chain(["a", 1]).toPath(); // $ExpectType CollectionChain<string>
   fp.toPath(true); // $ExpectType string[]
   fp.toPath(1); // $ExpectType string[]
   fp.toPath("a"); // $ExpectType string[]
   fp.toPath(["a"]); // $ExpectType string[]
   fp.toPath({}); // $ExpectType string[]
}

// _.uniqueId
{
    _.uniqueId(); // $ExpectType string
    _.uniqueId(""); // $ExpectType string
    _("").uniqueId(); // $ExpectType string
    _.chain("").uniqueId(); // $ExpectType StringChain
    fp.uniqueId(""); // $ExpectType string
}

_.VERSION; // $ExpectType string
_.templateSettings; // $ExpectType TemplateSettings

// _.partial & _.partialRight
{
    const func0 = (): number => {
        return 42;
    };
    const func1 = (arg1: number): number => {
        return arg1 * 2;
    };
    const func2 = (arg1: number, arg2: string): number => {
        return arg1 * arg2.length;
    };
    const func3 = (arg1: number, arg2: string, arg3: boolean): number => {
        return arg1 * arg2.length + (arg3 ? 1 : 0);
    };

    // with arity 0 function
    _.partial(func0); // $ExpectType () => number
    // with arity 1 function
    _.partial(func1, 42); // $ExpectType () => number
    _.partial(func1); // $ExpectType (arg1: number) => number
    // with arity 2 function
    _.partial(func2); // $ExpectType (arg1: number, arg2: string) => number
    _.partial(func2, 42); // $ExpectType (arg2: string) => number
    _.partial(func2,  _, "foo"); // $ExpectType Function1<number, number>
    _.partial(func2, _.partial.placeholder, "foo"); // $ExpectType Function1<number, number>
    _.partial(func2, 42, "foo"); // $ExpectType () => number
    // with arity 3 function
    _.partial(func3, 42,     _, true);

    // with arity 0 function
    _.partialRight(func0); // $ExpectType Function0<number>
    // with arity 1 function
    _.partialRight(func1, 42); // $ExpectType Function0<number>
    _.partialRight(func1); // $ExpectType Function1<number, number>
    // with arity 2 function
    _.partialRight(func2); // $ExpectType Function2<number, string, number>
    _.partialRight(func2, 42,     _); // $ExpectType Function1<string, number>
    _.partialRight(func2, 42, _.partialRight.placeholder); // $ExpectType Function1<string, number>
    _.partialRight(func2,     "foo"); // $ExpectType Function1<number, number>
    _.partialRight(func2, 42, "foo"); // $ExpectType Function0<number>
    // with arity 3 function
    _.partialRight(func3, 42,     _, true);

    fp.partial(func1, [42]); // $ExpectType () => number
    fp.partial<[], number, number>(func1)([42]); // $ExpectType () => number
    fp.partial(func2)([fp.partial.placeholder, "foo"]); // $ExpectType Function1<number, number>
    fp.partialRight(func1, [42]); // $ExpectType Function0<number>
    fp.partialRight(func1)([42]); // $ExpectType Function0<number>
    fp.partialRight(func2)([42, fp.partialRight.placeholder]); // $ExpectType Function1<string, number>
}

// _.stubTrue
{
    _.stubTrue(); // $ExpectType true
    _("").stubTrue(); // $ExpectType true
    _.chain("").stubTrue(); // $ExpectType LoDashExplicitWrapper<true>
    fp.stubTrue(); // $ExpectType true
}

// _.stubFalse
{
    _.stubFalse(); // $ExpectType false
    _("").stubFalse(); // $ExpectType false
    _.chain("").stubFalse(); // $ExpectType LoDashExplicitWrapper<false>
    fp.stubFalse(); // $ExpectType false
}
