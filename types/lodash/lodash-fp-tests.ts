import _ = require("lodash/fp");
import lodash = require("lodash");

declare const anything: any;

interface AbcObject {
    a: number;
    b: string;
    c: boolean;
}

/*********
 * Array *
 *********/

// _.chunk
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.chunk(42, array); // $ExpectType AbcObject[][]
    _.chunk(42)(array); // $ExpectType AbcObject[][]
    _.chunk()(42)()(array); // $ExpectType AbcObject[][]
    _.chunk(42, list); // $ExpectType AbcObject[][]
    _.chunk(42)(list); // $ExpectType AbcObject[][]
}

// _.compact
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const array2: Array<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;
    const list2: ArrayLike<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;

    _.compact(array); // $ExpectTypeAbcObject[]
    _.compact(list); // $ExpectTypeAbcObject[]
    _.compact(array2); // $ExpectTypeAbcObject[]
    _.compact(list2); // $ExpectTypeAbcObject[]
}

// _.difference
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];

    _.difference(array, array); // $ExpectType AbcObject[]
    _.difference(array)(array); // $ExpectType AbcObject[]
    _.difference(array, list); // $ExpectType AbcObject[]
    _.difference(list, list); // $ExpectType AbcObject[]
    _.difference(list, array); // $ExpectType AbcObject[]
}

// _.differenceBy
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const iteratee = (value: AbcObject) => 1;

    _.differenceBy(iteratee, array, array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee)(array, array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee)(array)(array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee, array)(list); // $ExpectType AbcObject[]
    _.differenceBy(iteratee, list, array); // $ExpectType AbcObject[]
    _.differenceBy(iteratee, list, list); // $ExpectType AbcObject[]
    _.differenceBy("a", array, array); // $ExpectType AbcObject[]
    _.differenceBy("a", array, list); // $ExpectType AbcObject[]
    _.differenceBy("a", list, array); // $ExpectType AbcObject[]
    _.differenceBy("a", list, list); // $ExpectType AbcObject[]
    _.differenceBy({a: 1}, array, array); // $ExpectType AbcObject[]
    _.differenceBy({a: 1}, array, list); // $ExpectType AbcObject[]
    _.differenceBy({a: 1}, list, array); // $ExpectType AbcObject[]
    _.differenceBy({a: 1}, list, list); // $ExpectType AbcObject[]

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
    const t1: T1 = { a: "a", b: "b" };
    const t2: T2 = { a: "a", b: 30 };
    const t3: T3 = { a: "a", b: true };

    // $ExpectType T1[]
    _.differenceBy("name", [t1], [t2]);
    // $ExpectType T1[]
    _.differenceBy((value: T1 | T2) => 0, [t1], [t2]);
    // $ExpectType T1[]
    _.differenceBy((value: T1 | T2 | T3) => 0, [t1], [t2, t3]);
}

// _.differenceWith
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const comparator = (a: AbcObject, b: AbcObject) => true;

    _.differenceWith(comparator, array, array); // $ExpectType AbcObject[]
    _.differenceWith(comparator)(array, array); // $ExpectType AbcObject[]
    _.differenceWith(comparator)(array)(array); // $ExpectType AbcObject[]
    _.differenceWith(comparator, array, list); // $ExpectType AbcObject[]
    _.differenceWith(comparator, list, array); // $ExpectType AbcObject[]
    _.differenceWith(comparator, list, list); // $ExpectType AbcObject[]

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

    _.differenceWith((a: T1, b: T2 | undefined) => true, [t1], [t2]); // $ExpectType T1[]
}

// _.drop
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.drop(42, array); // $ExpectType AbcObject[]
    _.drop(42)(array); // $ExpectType AbcObject[]
    _.drop(42, list); // $ExpectType AbcObject[]
}

// _.dropRight
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.dropRight(42, array); // $ExpectType AbcObject[]
    _.dropRight(42)(array); // $ExpectType AbcObject[]
    _.dropRight(42, list); // $ExpectType AbcObject[]
}

// _.dropRightWhile
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;

    _.dropRightWhile(predicateFn, array); // $ExpectType AbcObject[]
    _.dropRightWhile(predicateFn)(array); // $ExpectType AbcObject[]
    _.dropRightWhile("", array); // $ExpectType AbcObject[]
    _.dropRightWhile({a: 42}, array); // $ExpectType AbcObject[]
    _.dropRightWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.dropRightWhile("", list); // $ExpectType AbcObject[]
    _.dropRightWhile({a: 42}, list); // $ExpectType AbcObject[]
}

// _.dropWhile
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;

    _.dropWhile(predicateFn, array); // $ExpectType AbcObject[]
    _.dropWhile(predicateFn)(array); // $ExpectType AbcObject[]
    _.dropWhile("", array); // $ExpectType AbcObject[]
    _.dropWhile({a: 42}, array); // $ExpectType AbcObject[]
    _.dropWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.dropWhile("", list); // $ExpectType AbcObject[]
    _.dropWhile({a: 42}, list); // $ExpectType AbcObject[]
}

// _.fill
{
    const array: number[] = [];
    const list: ArrayLike<number> = [];

    _.fill(0, 10, 42, array); // $ExpectType number[]
    _.fill(0, 10)(42, array); // $ExpectType number[]
    _.fill(0, 10)(42)(array); // $ExpectType number[]
    _.fill(0)(10)(42)(array); // $ExpectType number[]
    _.fill(0, 10, 42, list); // $ExpectType ArrayLike<number>
}

// _.findIndex
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;
    const fromIndex = 0;

    _.findIndex(predicateFn, array); // $ExpectType number
    _.findIndex(predicateFn)(array); // $ExpectType number
    _.findIndex("", array); // $ExpectType number
    _.findIndex({a: 42}, array); // $ExpectType number
    _.findIndex(predicateFn, list); // $ExpectType number
    _.findIndex("", list); // $ExpectType number
    _.findIndex({a: 42}, list); // $ExpectType number

    _.findIndexFrom(predicateFn, fromIndex, array); // $ExpectType number
    _.findIndexFrom(predicateFn)(fromIndex)(array); // $ExpectType number
    _.findIndexFrom("", fromIndex, array); // $ExpectType number
    _.findIndexFrom({a: 42}, fromIndex, array); // $ExpectType number
    _.findIndexFrom(predicateFn, fromIndex, list); // $ExpectType number
    _.findIndexFrom("", fromIndex, list); // $ExpectType number
    _.findIndexFrom({a: 42}, fromIndex, list); // $ExpectType number
}

// _.findLastIndex
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;
    const fromIndex = 0;

    _.findLastIndex(predicateFn, array); // $ExpectType number
    _.findLastIndex(predicateFn)(array); // $ExpectType number
    _.findLastIndex("", array); // $ExpectType number
    _.findLastIndex({a: 42}, array); // $ExpectType number
    _.findLastIndex(predicateFn, list); // $ExpectType number
    _.findLastIndex("", list); // $ExpectType number
    _.findLastIndex({a: 42}, list); // $ExpectType number

    _.findLastIndexFrom(predicateFn, fromIndex, array); // $ExpectType number
    _.findLastIndexFrom(predicateFn)(fromIndex)(array); // $ExpectType number
    _.findLastIndexFrom("", fromIndex, array); // $ExpectType number
    _.findLastIndexFrom({a: 42}, fromIndex, array); // $ExpectType number
    _.findLastIndexFrom(predicateFn, fromIndex, list); // $ExpectType number
    _.findLastIndexFrom("", fromIndex, list); // $ExpectType number
    _.findLastIndexFrom({a: 42}, fromIndex, list); // $ExpectType number
}

// _.first
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.first("abc"); // $ExpectType string | undefined
    _.first(array); // $ExpectType AbcObject | undefined
    _.first(list); // $ExpectType AbcObject | undefined
}

// _.flatten
{
    const array: number[][] | null | undefined = anything;
    const list: ArrayLike<number[]> | null | undefined = anything;

    _.flatten("abc"); // $ExpectType string[]
    _.flatten(array); // $ExpectType number[]
    _.flatten(list); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, [2, 3]]); // $ExpectType number[]

    _.flatten({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    _.flatten({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]

    _.unnest("abc"); // $ExpectType string[]
    _.unnest(array); // $ExpectType number[]
    _.unnest(list); // $ExpectType number[]
    _.unnest([1, 2, 3]); // $ExpectType number[]
    _.unnest([1, 2, 3]); // $ExpectType number[]
    _.unnest([1, 2, 3]); // $ExpectType number[]
    _.unnest([1, [2, 3]]); // $ExpectType number[]

    _.unnest({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    _.unnest({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]
}

// _.flattenDeep
{
    const array: number[][] | null | undefined = anything;
    const list: ArrayLike<number[]> | null | undefined = anything;

    _.flattenDeep("abc"); // $ExpectType string[]
    _.flattenDeep<number>(array); // $ExpectType number[]
    _.flattenDeep<number>(list); // $ExpectType number[]
    _.flattenDeep<number>([1, 2, 3]); // $ExpectType number[]
    _.flattenDeep<number>([1, [2, 3]]); // $ExpectType number[]
    _.flattenDeep<number>([1, [2, [3]]]); // $ExpectType number[]
    _.flattenDeep<number>([1, [2, [3]], [[4]]]); // $ExpectType number[]

    _.flattenDeep<number>({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    _.flattenDeep<number>({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]
    _.flattenDeep<number>({0: 1, 1: [2, [3]], length: 2}); // $ExpectType number[]
    _.flattenDeep<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}); // $ExpectType number[]
}

// _.fromPairs
{
    const twoDimensionalArray: Array<[string, string]> | null | undefined = anything;
    const numberTupleArray: Array<[string, number]> | null | undefined = anything;

    _.fromPairs(twoDimensionalArray); // $ExpectType Dictionary<string>
    _.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
}

// _.head
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.head("abc"); // $ExpectType string | undefined
    _.head(array); // $ExpectType AbcObject | undefined
    _.head(list); // $ExpectType AbcObject | undefined
}

// _.indexOf
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const value: AbcObject = { a: 1, b: "", c: true };

    _.indexOf(value, array); // $ExpectType number
    _.indexOf(value)(array); // $ExpectType number
    _.indexOf(value, list); // $ExpectType number
    _.indexOfFrom(value)(42)(array); // $ExpectType number
    _.indexOfFrom(value, 42, list); // $ExpectType number
}

// _.sortedIndexOf
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const value: AbcObject = { a: 1, b: "", c: true };

    _.sortedIndexOf(value, array); // $ExpectType number
    _.sortedIndexOf(value)(array); // $ExpectType number
    _.sortedIndexOf(value, list); // $ExpectType number
}

//_.initial
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.initial(array); // $ExpectType AbcObject[]
    _.initial(list); // $ExpectType AbcObject[]
}

// _.intersection
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;

    _.intersection(array, array); // $ExpectType AbcObject[]
    _.intersection(array)(array); // $ExpectType AbcObject[]
    _.intersection(array, list); // $ExpectType AbcObject[]
    _.intersection(array)(list); // $ExpectType AbcObject[]
    _.intersection(list, array); // $ExpectType AbcObject[]
    _.intersection(list)(array); // $ExpectType AbcObject[]
}

// _.intersectionBy
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;

    _.intersectionBy("a", array, list); // $ExpectType AbcObject[]
    _.intersectionBy<AbcObject, AbcObject>("a")(array, list); // $ExpectType AbcObject[]
    _.intersectionBy<AbcObject, AbcObject>("a")(array)(list); // $ExpectType AbcObject[]
    _.intersectionBy({ a: 42 }, array, list); // $ExpectType AbcObject[]
    _.intersectionBy(["a", 42], array, list); // $ExpectType AbcObject[]
    _.intersectionBy((value: AbcObject) => 0, array, list); // $ExpectType AbcObject[]
}

// _.intersectionWith
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;

    _.intersectionWith((a: AbcObject, b: AbcObject) => true, list, array); // $ExpectType AbcObject[]
    _.intersectionWith((a: AbcObject, b: AbcObject) => true)(list, array); // $ExpectType AbcObject[]
    _.intersectionWith((a: AbcObject, b: AbcObject) => true)(list)(array); // $ExpectType AbcObject[]

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

    _.intersectionWith((a: T1, b: T2) => true)([t1])([t2]); // $ExpectType T1[]
}

// _.join
{
    const array = [1, 2];
    const list = {0: 1, 1: 2, length: 2};
    const nilArray: string[] | null | undefined = anything;
    const nilList: ArrayLike<string> | null | undefined = anything;

    _.join("_", "abc"); // $ExpectType string
    _.join("_")("abc"); // $ExpectType string
    _.join("_", array); // $ExpectType string
    _.join("_", list); // $ExpectType string
    _.join("_", nilArray); // $ExpectType string
    _.join("_", nilList); // $ExpectType string
}

// _.last
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.last("abc"); // $ExpectType string | undefined
    _.last(array); // $ExpectType AbcObject | undefined
    _.last(list); // $ExpectType AbcObject | undefined
}

// _.lastIndexOf
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const value: AbcObject = { a: 1, b: "", c: true };

    _.lastIndexOf(value, array); // $ExpectType number
    _.lastIndexOf(value)(array); // $ExpectType number
    _.lastIndexOf(value, list); // $ExpectType number
    _.lastIndexOfFrom(value, 42, array); // $ExpectType number
    _.lastIndexOfFrom(value, 42)(array); // $ExpectType number
    _.lastIndexOfFrom(value)(42)(array); // $ExpectType number
    _.lastIndexOfFrom(value, 42, list); // $ExpectType number
}

// _.nth
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const value = 0;

    _.nth(42, array); // $ExpectType AbcObject | undefined
    _.nth(42)(array); // $ExpectType AbcObject | undefined
}

// _.pull
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const value: AbcObject = { a: 1, b: "", c: true };

    _.pull(value, array); // $ExpectType AbcObject[]
    _.pull(value, list); // $ExpectType ArrayLike<AbcObject>
    _.pull(value)(list); // $ExpectType ArrayLike<AbcObject>
}

// _.pullAll
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;
    const values: ArrayLike<AbcObject> = anything;

    _.pullAll(values, array); // $ExpectType AbcObject[]
    _.pullAll(values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAll(values)(list); // $ExpectType ArrayLike<AbcObject>
}

// _.pullAllBy
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;
    const values: ArrayLike<AbcObject> = anything;

    _.pullAllBy("a", values, array); // $ExpectType AbcObject[]
    _.pullAllBy({ a: 42 }, values, array); // $ExpectType AbcObject[]
    _.pullAllBy(["a", 42], values, array); // $ExpectType AbcObject[]
    _.pullAllBy((value: AbcObject) => true, values, array); // $ExpectType AbcObject[]
    _.pullAllBy((value: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    _.pullAllBy((value: AbcObject) => true, values)(array); // $ExpectType AbcObject[]
    _.pullAllBy((value: AbcObject) => true)(values)(array); // $ExpectType AbcObject[]
    _.pullAllBy("a", values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy({ a: 42 }, values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(["a", 42], values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy((value: AbcObject) => true, values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy((value: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy((value: AbcObject) => true, values)(list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy((value: AbcObject) => true)(values)(list); // $ExpectType ArrayLike<AbcObject>

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

    _.pullAllBy((value: T1 | T2) => value.a, [t2], [t1]); // $ExpectType T1[]
    _.pullAllBy((value: T1 | T2) => value.a)([t2])([t1]); // $ExpectType (T1 | T2)[]
}

// _.pullAllWith
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;
    const values: ArrayLike<AbcObject> = anything;

    _.pullAllWith((a, b) => true, values, array); // $ExpectType AbcObject[]
    _.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    _.pullAllWith((a, b) => true, values, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject>

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

    _.pullAllWith((a, b) => a.a === b.a, [t2], [t1]); // $ExpectType T1[]
    _.pullAllWith((a: T1, b: T2) => a.a === b.a)([t2], [t1]); // $ExpectType T1[]
}

// _.pullAt
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];

    _.pullAt(1, array); // $ExpectType AbcObject[]
    _.pullAt([2, 3], array); // $ExpectType AbcObject[]
    _.pullAt(1, list); // $ExpectType ArrayLike<AbcObject>
    _.pullAt([2, 3], list); // $ExpectType ArrayLike<AbcObject>
    _.pullAt(1)(list); // $ExpectType ArrayLike<AbcObject>
    _.pullAt([2, 3])(list); // $ExpectType ArrayLike<AbcObject>
}

// _.remove
{
    const list: ArrayLike<AbcObject> = [];
    const predicateFn = (value: AbcObject) => true;

    _.remove(predicateFn, list); // $ExpectType AbcObject[]
    _.remove(predicateFn)(list); // $ExpectType AbcObject[]
    _.remove("", list); // $ExpectType AbcObject[]
    _.remove({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.tail
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.tail(list); // $ExpectType AbcObject[]
}

// _.slice
{
    const array: AbcObject[] = anything;

    _.slice(0, 10, array); // $ExpectType AbcObject[]
    _.slice(0)(10, array); // $ExpectType AbcObject[]
    _.slice(0)(10)(array); // $ExpectType AbcObject[]
}

// _.sortedIndex
{
    const list: ArrayLike<AbcObject> = [];
    const value: AbcObject = { a: 1, b: "", c: true };

    _.sortedIndex("a", "abc"); // $ExpectType number
    _.sortedIndex(value, list); // $ExpectType number
    _.sortedIndex(value)(list); // $ExpectType number
}

// _.sortedIndexBy
{
    const list: ArrayLike<AbcObject> = [];
    const value: AbcObject = { a: 1, b: "", c: true };

    const stringIterator = (x: string) => 0;
    const arrayIterator = (x: AbcObject) => 0;
    const listIterator = (x: AbcObject) => 0;

    _.sortedIndexBy(stringIterator, "a", "abc"); // $ExpectType number
    _.sortedIndexBy(listIterator, value, list); // $ExpectType number
    _.sortedIndexBy(listIterator)(value)(list); // $ExpectType number
    _.sortedIndexBy("a", value, list); // $ExpectType number
    _.sortedIndexBy({ a: 42 }, value, list); // $ExpectType number
    _.sortedIndexBy(["a", 42], value, list); // $ExpectType number
}

// _.sortedLastIndex
{
    const list: ArrayLike<AbcObject> = [];
    const value: AbcObject = { a: 1, b: "", c: true };

    _.sortedLastIndex("a", "abc"); // $ExpectType number
    _.sortedLastIndex(value, list); // $ExpectType number
    _.sortedLastIndex(value)(list); // $ExpectType number
}

// _.sortedLastIndexBy
{
    const list: ArrayLike<AbcObject> = [];
    const value: AbcObject = { a: 1, b: "", c: true };

    const stringIterator = (x: string) => 0;
    const arrayIterator = (x: AbcObject) => 0;
    const listIterator = (x: AbcObject) => 0;

    _.sortedLastIndexBy(stringIterator, "a", "abc"); // $ExpectType number
    _.sortedLastIndexBy(listIterator, value, list); // $ExpectType number
    _.sortedLastIndexBy(listIterator)(value)(list); // $ExpectType number
    _.sortedLastIndexBy("a", value, list); // $ExpectType number
    _.sortedLastIndexBy({ a: 42 }, value, list); // $ExpectType number
    _.sortedLastIndexBy(["a", 42], value, list); // $ExpectType number
}

// _.take
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.take(42, list); // $ExpectType AbcObject[]
    _.take(42)(list); // $ExpectType AbcObject[]
}

// _.takeRight
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.takeRight(42, list); // $ExpectType AbcObject[]
    _.takeRight(42)(list); // $ExpectType AbcObject[]
}

// _.takeRightWhile
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;

    _.takeRightWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.takeRightWhile(predicateFn)(list); // $ExpectType AbcObject[]
    _.takeRightWhile("a", list); // $ExpectType AbcObject[]
    _.takeRightWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.takeWhile
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const predicateFn = (value: AbcObject) => true;

    _.takeWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.takeWhile(predicateFn)(list); // $ExpectType AbcObject[]
    _.takeWhile("a", list); // $ExpectType AbcObject[]
    _.takeWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.union
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.union(array, list); // $ExpectType AbcObject[]
    _.union(array)(list); // $ExpectType AbcObject[]
}

// _.unionBy
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const iteratee = (value: AbcObject) => 1;

    _.unionBy(iteratee, array, list); // $ExpectType AbcObject[]
    _.unionBy(iteratee)(array)(list); // $ExpectType AbcObject[]
    _.unionBy("a", array, list); // $ExpectType AbcObject[]
    _.unionBy({ a: 1 }, array, list); // $ExpectType AbcObject[]
}

// _.uniq
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.uniq("abc"); // $ExpectType string[]
    _.uniq(list); // $ExpectType AbcObject[]
}

// _.uniqBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    const stringIterator = (value: string) => "";
    const listIterator = (value: AbcObject) => 0;

    _.uniqBy(stringIterator, "abc"); // $ExpectType string[]
    _.uniqBy(listIterator, list); // $ExpectType AbcObject[]
    _.uniqBy(listIterator)(list); // $ExpectType AbcObject[]
    _.uniqBy("a", list); // $ExpectType AbcObject[]
    _.uniqBy({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.sortedUniq
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.sortedUniq("abc"); // $ExpectType string[]
    _.sortedUniq(list); // $ExpectType AbcObject[]
}

// _.sortedUniqBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    const stringIterator = (value: string) => "";
    const listIterator = (value: AbcObject) => 0;

    _.sortedUniqBy(stringIterator, "abc"); // $ExpectType string[]
    _.sortedUniqBy(listIterator, list); // $ExpectType AbcObject[]
    _.sortedUniqBy(listIterator)(list); // $ExpectType AbcObject[]
    _.sortedUniqBy("a", list); // $ExpectType AbcObject[]
    _.sortedUniqBy({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.unzip
{
    const list: ArrayLike<ArrayLike<AbcObject>> = anything;

    _.unzip(list); // $ExpectType AbcObject[][]
}

// _.unzipWith
{
    const testUnzipWithList: ArrayLike<number[]|ArrayLike<number>> | null | undefined = anything;

    _.unzipWith((value1: number, value2: number) => "", testUnzipWithList); // $ExpectType string[]
    _.unzipWith((...values: number[]) => "", testUnzipWithList); // $ExpectType string[]
    _.unzipWith((...values: number[]) => "")(testUnzipWithList); // $ExpectType string[]
}

// _.without
{
    const array: number[] | null | undefined = anything;
    const list: ArrayLike<number> | null | undefined = anything;

    _.without([1, 2], list);
    _.without([1, 2])(list);
}

// _.xor
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;

    _.xor(array, list);
    _.xor(array)(list);
}

// _.zip
{
    const array: AbcObject[] = anything;
    const list: ArrayLike<AbcObject> = anything;

    _.zip(array, list); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    _.zip(array)(list); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    _.zipAll([array, list, array]); // $ExpectType (AbcObject | undefined)[][]
    _.zip(["a", "b"], [1, 2]); // $ExpectType [number | undefined, string | undefined][]
    _.zipAll<number | string | boolean>([[1, 2], ["a", "b"], [true, false]]); // $ExpectType (string | number | boolean | undefined)[][]
}

// _.zipObject
{
    const listOfKeys: ArrayLike<string> = [];
    const listOfValues: ArrayLike<number> = [];

    _.zipObject([1, 2], ["a", "b"]); // $ExpectType Dictionary<number>
    _.zipObject([1, 2])(["a", "b"]); // $ExpectType Dictionary<number>
    _.zipObject(listOfValues, listOfKeys); // $ExpectType Dictionary<number>

    _.zipObjectDeep([1, 2], ["a.b[0].c", "a.b[1].d"]); // $ExpectType object
    _.zipObjectDeep([1, 2])(["a.b[0].c", "a.b[1].d"]); // $ExpectType object
    _.zipObjectDeep(listOfValues, listOfKeys); // $ExpectType object
}

// _.zipWith
{
    _.zipWith((value1, value2) => "a", [1, 2], [1, 2]); // $ExpectType string[]
    _.zipWith((value1: number, value2: number) => "a")([1, 2])([1, 2]); // $ExpectType string[]
}

/*********
 * Chain *
 *********/

// _.tap
{
    _.tap((value: string) => {}, ""); // $ExpectType ""
    _.tap((value: string) => {})(""); // $ExpectType string
    _.tap((value: string[]) => {}, [""]); // $ExpectType string[]
}

// _.thru
{
    _.thru((x: number) => x.toString(), 1); // $ExpectType string
    _.thru((x: number) => x.toString())(1); // $ExpectType string
    _.thru((x: number[]) => x.toString())([1]); // $ExpectType string
}

/**************
 * Collection *
 **************/

// _.at
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const obj: AbcObject | null | undefined = anything;

    _.at(0, list); // $ExpectType AbcObject[]
    _.at(0)(list); // $ExpectType AbcObject[]
    _.at([0, "1"], list); // $ExpectType AbcObject[]
    _.at("a", obj); // $ExpectType (string | number | boolean)[]
    _.at(["a" as "a", "b" as "b"], obj); // $ExpectType (string | number | boolean)[]
    _.at<AbcObject>(["a" as "a", "b" as "b"])(obj); // $ExpectType (string | number | boolean)[]
}

// _.countBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject } | null | undefined = anything;
    const numericDictionary: { [key: number]: AbcObject } | null | undefined = anything;

    const stringIterator = (value: string) => 1;
    const abcIterator = (value: AbcObject) => 1;

    _.countBy(stringIterator, ""); // $ExpectType Dictionary<number>
    _.countBy(stringIterator)(""); // $ExpectType Dictionary<number>
    _.countBy(abcIterator, list); // $ExpectType Dictionary<number>
    _.countBy("", list); // $ExpectType Dictionary<number>
    _.countBy({ a: 42 }, list); // $ExpectType Dictionary<number>
    _.countBy(abcIterator, dictionary); // $ExpectType Dictionary<number>
    _.countBy("", dictionary); // $ExpectType Dictionary<number>
    _.countBy({ a: 42 }, dictionary); // $ExpectType Dictionary<number>
    _.countBy(abcIterator, numericDictionary); // $ExpectType Dictionary<number>
    _.countBy("", numericDictionary); // $ExpectType Dictionary<number>
    _.countBy({ a: 42 }, numericDictionary); // $ExpectType Dictionary<number>
}

// _.each
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const dictionary: { [key: string]: AbcObject } = {};
    const nilArray: AbcObject[] | null | undefined = anything;
    const nilList: ArrayLike<AbcObject> | null | undefined = anything;
    const nilDictionary: { [key: string]: AbcObject } | null | undefined = anything;

    const stringIterator = (char: string) => 1;
    const listIterator = (value: AbcObject) => 1;

    _.each(stringIterator, ""); // $ExpectType string
    _.each(listIterator, array); // $ExpectType AbcObject[]
    _.each(listIterator)(array); // $ExpectType AbcObject[]
    _.each(listIterator, list); // $ExpectType ArrayLike<AbcObject>
    _.each(listIterator, dictionary); // $ExpectType { [key: string]: AbcObject; }
    _.each(listIterator, nilArray); // $ExpectType AbcObject[] | null | undefined
    _.each(listIterator, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    _.each(listIterator, nilDictionary); // $ExpectType { [key: string]: AbcObject; } | null | undefined
}

// _.eachRight
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const dictionary: { [key: string]: AbcObject } = {};
    const nilArray: AbcObject[] | null | undefined = anything;
    const nilList: ArrayLike<AbcObject> | null | undefined = anything;
    const nilDictionary: { [key: string]: AbcObject } | null | undefined = anything;

    const stringIterator = (char: string) => 1;
    const listIterator = (value: AbcObject) => 1;

    _.eachRight(stringIterator, ""); // $ExpectType string
    _.eachRight(listIterator, array); // $ExpectType AbcObject[]
    _.eachRight(listIterator)(array); // $ExpectType AbcObject[]
    _.eachRight(listIterator, list); // $ExpectType ArrayLike<AbcObject>
    _.eachRight(listIterator, dictionary); // $ExpectType { [key: string]: AbcObject; }
    _.eachRight(listIterator, nilArray); // $ExpectType AbcObject[] | null | undefined
    _.eachRight(listIterator, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    _.eachRight(listIterator, nilDictionary); // $ExpectType { [key: string]: AbcObject; } | null | undefined
}

// _.every
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject } | null | undefined = anything;
    const numericDictionary: { [key: number]: AbcObject } | null | undefined = anything;

    const iterator = (value: AbcObject) => true;

    _.every(iterator, list); // $ExpectType boolean
    _.every(iterator)(list); // $ExpectType boolean
    _.every("a", list); // $ExpectType boolean
    _.every("a")(list); // $ExpectType boolean
    _.every({ a: 42 }, list); // $ExpectType boolean
    _.every(["a", 42], list); // $ExpectType boolean
    _.every(["a", 42], list); // $ExpectType boolean

    _.every(iterator, dictionary); // $ExpectType boolean
    _.every(iterator)(dictionary); // $ExpectType boolean
    _.every("a", dictionary); // $ExpectType boolean
    _.every("a")(dictionary); // $ExpectType boolean
    _.every({ a: 42 }, dictionary); // $ExpectType boolean
    _.every(["a", 42], dictionary); // $ExpectType boolean
    _.every(["a", 42], dictionary); // $ExpectType boolean

    _.every(iterator, numericDictionary); // $ExpectType boolean
    _.every(iterator)(numericDictionary); // $ExpectType boolean
    _.every("a", numericDictionary); // $ExpectType boolean
    _.every("a")(numericDictionary); // $ExpectType boolean
    _.every({ a: 42 }, numericDictionary); // $ExpectType boolean
    _.every(["a", 42], numericDictionary); // $ExpectType boolean
    _.every(["a", 42], numericDictionary); // $ExpectType boolean
}

// _.filter
{
    const list: ArrayLike<AbcObject | undefined> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject | undefined } | null | undefined = anything;

    const stringIterator = (char: string) => true;
    const listIterator = (value: AbcObject | undefined) => true;
    const listIteratorTypeGuard = (value: AbcObject | undefined): value is AbcObject => !!value;

    _.filter(stringIterator, ""); // $ExpectType string[]

    _.filter(listIterator, list); // $ExpectType (AbcObject | undefined)[]
    _.filter(listIterator)(list); // $ExpectType (AbcObject | undefined)[]
    _.filter(listIteratorTypeGuard, list); // $ExpectType AbcObject[]
    _.filter("", list); // $ExpectType (AbcObject | undefined)[]
    _.filter({ a: 42 }, list); // $ExpectType (AbcObject | undefined)[]
    _.filter(["a", 42], list); // $ExpectType (AbcObject | undefined)[]

    _.filter(listIterator, dictionary); // $ExpectType (AbcObject | undefined)[]
    _.filter(listIterator)(dictionary); // $ExpectType (AbcObject | undefined)[]
    _.filter(listIteratorTypeGuard, dictionary); // $ExpectType AbcObject[]
    _.filter("", dictionary); // $ExpectType (AbcObject | undefined)[]
    _.filter({ a: 42 }, dictionary); // $ExpectType (AbcObject | undefined)[]
    _.filter(["a", 42], dictionary); // $ExpectType (AbcObject | undefined)[]
}

// _.find
{
    const list: ArrayLike<AbcObject | null> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject | null } | null | undefined = anything;

    const stringIterator = (char: string) => true;
    const listIterator = (value: AbcObject | null) => true;
    const listIteratorTypeGuard = (value: AbcObject | null): value is AbcObject => !!value;

    _.find(stringIterator, ""); // $ExpectType string | undefined

    _.find(listIterator, list); // $ExpectType AbcObject | null | undefined
    _.find(listIterator)(list); // $ExpectType AbcObject | null | undefined
    _.find(listIteratorTypeGuard, list); // $ExpectType AbcObject | undefined
    _.find("", list); // $ExpectType AbcObject | null | undefined
    _.find({ a: 42 }, list); // $ExpectType AbcObject | null | undefined
    _.find(["a", 42], list); // $ExpectType AbcObject | null | undefined

    _.find(listIterator, dictionary); // $ExpectType AbcObject | null | undefined
    _.find(listIterator)(dictionary); // $ExpectType AbcObject | null | undefined
    _.find(listIteratorTypeGuard, dictionary); // $ExpectType AbcObject | undefined
    _.find("", dictionary); // $ExpectType AbcObject | null | undefined
    _.find({ a: 42 }, dictionary); // $ExpectType AbcObject | null | undefined
    _.find(["a", 42], dictionary); // $ExpectType AbcObject | null | undefined
}

// _.findLast
{
    const list: ArrayLike<AbcObject | null> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject | null } | null | undefined = anything;

    const stringIterator = (char: string) => true;
    const listIterator = (value: AbcObject | null) => true;
    const listIteratorTypeGuard = (value: AbcObject | null): value is AbcObject => !!value;

    _.findLast(stringIterator, ""); // $ExpectType string | undefined

    _.findLast(listIterator, list); // $ExpectType AbcObject | null | undefined
    _.findLast(listIterator)(list); // $ExpectType AbcObject | null | undefined
    _.findLast(listIteratorTypeGuard, list); // $ExpectType AbcObject | undefined
    _.findLast("", list); // $ExpectType AbcObject | null | undefined
    _.findLast({ a: 42 }, list); // $ExpectType AbcObject | null | undefined
    _.findLast(["a", 42], list); // $ExpectType AbcObject | null | undefined

    _.findLast(listIterator, dictionary); // $ExpectType AbcObject | null | undefined
    _.findLast(listIterator)(dictionary); // $ExpectType AbcObject | null | undefined
    _.findLast(listIteratorTypeGuard, dictionary); // $ExpectType AbcObject | undefined
    _.findLast("", dictionary); // $ExpectType AbcObject | null | undefined
    _.findLast({ a: 42 }, dictionary); // $ExpectType AbcObject | null | undefined
    _.findLast(["a", 42], dictionary); // $ExpectType AbcObject | null | undefined
}

// _.flatMap
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject } | null | undefined = anything;
    const numericDictionary: { [key: number]: AbcObject } | null | undefined = anything;

    const stringIterator: (value: string) => string|string[] = (a) => "";
    const objIterator: (value: AbcObject) => AbcObject|AbcObject[] = (a) => anything;

    _.flatMap(stringIterator, "abc"); // $ExpectType string[]
    _.flatMap(objIterator, list); // $ExpectType AbcObject[]
    _.flatMap(objIterator)(list); // $ExpectType AbcObject[]
    _.flatMap("a", list); // $ExpectType any[]
    _.flatMap({ a: 42 }, list); // $ExpectType boolean[]
    _.flatMap(["a", 42], list); // $ExpectType boolean[]
    _.flatMap(objIterator, dictionary); // $ExpectType AbcObject[]
    _.flatMap("a", dictionary); // $ExpectType any[]
    _.flatMap({ a: 42 }, dictionary); // $ExpectType boolean[]
    _.flatMap(["a", 42], dictionary); // $ExpectType boolean[]
    _.flatMap(objIterator, numericDictionary); // $ExpectType AbcObject[]
    _.flatMap("a", numericDictionary); // $ExpectType any[]
    _.flatMap({ a: 42 }, numericDictionary); // $ExpectType boolean[]
    _.flatMap(["a", 42], numericDictionary); // $ExpectType boolean[]
}

// _.flatMapDeep
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: lodash.NumericDictionary<AbcObject> | null | undefined = anything;

    const iterator: (value: AbcObject) => lodash.ListOfRecursiveArraysOrValues<number> = (value) => [[[[[1]]]], 2, [[[3], 4]]];

    _.flatMapDeep(iterator, list); // $ExpectType number[]
    _.flatMapDeep(iterator)(list); // $ExpectType number[]
    _.flatMapDeep("a", list); // $ExpectType any[]
    _.flatMapDeep({ a: 42 }, list); // $ExpectType boolean[]
    _.flatMapDeep(["a", 42], list); // $ExpectType boolean[]
    _.flatMapDeep(iterator, dictionary); // $ExpectType number[]
    _.flatMapDeep(iterator, numericDictionary); // $ExpectType number[]
}

// _.flatMapDepth
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: lodash.NumericDictionary<AbcObject> | null | undefined = anything;

    const iterator: (value: AbcObject) => lodash.ListOfRecursiveArraysOrValues<number> = (value) => [[[[[1]]]], 2, [[[3], 4]]];

    _.flatMapDepth(iterator, 5, list); // $ExpectType number[]
    _.flatMapDepth(iterator)(5)(list); // $ExpectType number[]
    _.flatMapDepth("a", 5, list); // $ExpectType any[]
    _.flatMapDepth({ a: 42 }, 5, list); // $ExpectType boolean[]
    _.flatMapDepth(["a", 42], 5, list); // $ExpectType boolean[]
    _.flatMapDepth(iterator, 5, dictionary); // $ExpectType number[]
    _.flatMapDepth(iterator, 5, numericDictionary); // $ExpectType number[]
}

// _.forEach
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const dictionary: { [key: string]: AbcObject } = {};
    const nilArray: AbcObject[] | null | undefined = anything;
    const nilList: ArrayLike<AbcObject> | null | undefined = anything;
    const nilDictionary: { [key: string]: AbcObject } | null | undefined = anything;

    const stringIterator = (char: string) => 1;
    const listIterator = (value: AbcObject) => 1;

    _.forEach(stringIterator, ""); // $ExpectType string
    _.forEach(listIterator, array); // $ExpectType AbcObject[]
    _.forEach(listIterator)(array); // $ExpectType AbcObject[]
    _.forEach(listIterator, list); // $ExpectType ArrayLike<AbcObject>
    _.forEach(listIterator, dictionary); // $ExpectType { [key: string]: AbcObject; }
    _.forEach(listIterator, nilArray); // $ExpectType AbcObject[] | null | undefined
    _.forEach(listIterator, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    _.forEach(listIterator, nilDictionary); // $ExpectType { [key: string]: AbcObject; } | null | undefined
}

// _.forEachRight
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const dictionary: { [key: string]: AbcObject } = {};
    const nilArray: AbcObject[] | null | undefined = anything;
    const nilList: ArrayLike<AbcObject> | null | undefined = anything;
    const nilDictionary: { [key: string]: AbcObject } | null | undefined = anything;

    const stringIterator = (char: string) => 1;
    const listIterator = (value: AbcObject) => 1;

    _.forEachRight(stringIterator, ""); // $ExpectType string
    _.forEachRight(listIterator, array); // $ExpectType AbcObject[]
    _.forEachRight(listIterator)(array); // $ExpectType AbcObject[]
    _.forEachRight(listIterator, list); // $ExpectType ArrayLike<AbcObject>
    _.forEachRight(listIterator, dictionary); // $ExpectType { [key: string]: AbcObject; }
    _.forEachRight(listIterator, nilArray); // $ExpectType AbcObject[] | null | undefined
    _.forEachRight(listIterator, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    _.forEachRight(listIterator, nilDictionary); // $ExpectType { [key: string]: AbcObject; } | null | undefined
}

// _.groupBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const stringIterator = (char: string) => 0;
    const listIterator = (value: AbcObject) => 0;

    _.groupBy(stringIterator, ""); // $ExpectType Dictionary<string[]>

    _.groupBy(listIterator, list); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(listIterator)(list); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy("a", list); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy({ a: 42 }, list); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(["a", 42], list); // $ExpectType Dictionary<AbcObject[]>

    _.groupBy(listIterator, dictionary); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(listIterator)(dictionary); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy("a", dictionary); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy({ a: 42 }, dictionary); // $ExpectType Dictionary<AbcObject[]>
    _.groupBy(["a", 42], dictionary); // $ExpectType Dictionary<AbcObject[]>
}

// _.includes
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const target: AbcObject = { a: 1, b: "", c: true };

    _.includes(target, list); // $ExpectType boolean
    _.includes(target)(list); // $ExpectType boolean
    _.includes(target, dictionary); // $ExpectType boolean

    _.includesFrom(target, 42, list); // $ExpectType boolean
    _.includesFrom(target)(42)(list); // $ExpectType boolean
    _.includesFrom(target, 42, dictionary); // $ExpectType boolean
}

// _.keyBy
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: lodash.NumericDictionary<AbcObject> | null | undefined = anything;

    const stringIterator = (value: string) => 1;
    const listIterator = (value: AbcObject) => "a";
    const listIteratorSymbol = (value: AbcObject) => Symbol.name;

    _.keyBy(stringIterator, "abcd"); // $ExpectType Dictionary<string>

    _.keyBy(listIterator, list);
    _.keyBy(listIterator)(list);
    _.keyBy(listIteratorSymbol, list);
    _.keyBy("a", list);
    _.keyBy({ a: 42 }, list);
    _.keyBy(["a", 42], list);

    _.keyBy(listIterator, dictionary);
    _.keyBy("a", dictionary);
    _.keyBy({ a: 42 }, dictionary);
    _.keyBy(["a", 42], dictionary);

    _.keyBy(listIterator, numericDictionary);
    _.keyBy("a", numericDictionary);
    _.keyBy({ a: 42 }, numericDictionary);
    _.keyBy(["a", 42], numericDictionary);
}

//_.invoke
{
    const boolArray: boolean[] = [true, false];

    const nestedDict: lodash.Dictionary<number[]> = {
        a: [0, 1, 2]
    }

    const numDict: lodash.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    _.invoke("[1]", boolArray); // $ExpectType any
    _.invoke("[1]")(boolArray); // $ExpectType any
    _.invoke(["[1]", 2], boolArray); // $ExpectType any

    _.invoke("a.toString", numDict); // $ExpectType any
    _.invoke(["a.toString", 2], numDict); // $ExpectType any
    _.invoke("a[0].toString", nestedDict); // $ExpectType any
    _.invoke(["a", 0, "toString"], nestedDict); // $ExpectType any

    _.invokeArgs("a.toString", [16], numDict); // $ExpectType any
    _.invokeArgs("a.toString")([16])(numDict); // $ExpectType any
}

//_.invokeMap
{
    const numArray: number[] | null | undefined = anything;
    const obj: lodash.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    const numDict: lodash.Dictionary<number> | null | undefined = anything;

    _.invokeMap("toString", numArray); // $ExpectType any[]
    _.invokeMap("toString")(numArray); // $ExpectType any[]
    _.invokeMap(Number.prototype.toString, numArray); // $ExpectType string[]
    _.invokeMap("toString", numDict); // $ExpectType any[]
    _.invokeMap(Number.prototype.toString, numDict); // $ExpectType string[]

    _.invokeArgsMap("toString", [16], numArray); // $ExpectType any[]
    _.invokeArgsMap("toString")([16])(numArray); // $ExpectType any[]
    _.invokeArgsMap(Number.prototype.toString, [16], numArray); // $ExpectType string[]
    _.invokeArgsMap("toString", [16], numDict); // $ExpectType any[]
    _.invokeArgsMap(Number.prototype.toString, [16], numDict); // $ExpectType string[]
}

// _.map
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const listIterator = (value: AbcObject) => value.a;

    _.map(listIterator, array); // $ExpectType number[]
    _.map(listIterator)(array); // $ExpectType number[]
    _.map(listIterator, list); // $ExpectType number[]
    _.map(listIterator, dictionary); // $ExpectType number[]
    _.map("a", array); // $ExpectType number[]
    _.map({ a: 42 }, list); // $ExpectType boolean[]
    _.map(["a", 42], dictionary); // $ExpectType boolean[]
}

// _.partition
{
    // $ExpectType [any[], any[]]
    _.partition((n) => {
        n; // $ExpectType any
        return n < "c";
    }, anything);

    // $ExpectType [any[], any[]]
    _.partition((n: any) => n < "c")(anything);

    // $ExpectType [string[], string[]]
    _.partition((n) => {
        n; // $ExpectType string
        return n < "c";
    }, "abcd");
}

// _.reduce
{
    _.reduce((s: string, num: number) => s + num, "", [1, 2, 3]); // $ExpectType string
    _.reduce((s: string, num: number) => s + num)("")([1, 2, 3]); // $ExpectType string

    _.reduceRight((num: number, s: string) => s + num, "", [1, 2, 3]); // $ExpectType string
    _.reduceRight((num: number, s: string) => s + num)("")([1, 2, 3]); // $ExpectType string
}

// _.reject
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const stringIterator = (char: string) => true;
    const listIterator = (value: AbcObject) => true;

    _.reject(stringIterator, ""); // $ExpectType string[]
    _.reject(listIterator, list); // $ExpectType AbcObject[]
    _.reject(listIterator)(list); // $ExpectType AbcObject[]
    _.reject(listIterator, dictionary); // $ExpectType AbcObject[]
    _.reject("a", list); // $ExpectType AbcObject[]
    _.reject({ a: 42 }, list); // $ExpectType AbcObject[]
    _.reject(["a", 42], list); // $ExpectType AbcObject[]
}

// _.sample
{
    const array: string[] | null | undefined = anything;
    const list: ArrayLike<string> | null | undefined = anything;

    _.sample("abc"); // $ExpectType string | undefined
    _.sample(array); // $ExpectType string | undefined
    _.sample(list); // $ExpectType string | undefined
    _.sample({a: "foo"}); // $ExpectType string | undefined
}

// _.sampleSize
{
    const array: string[] | null | undefined = anything;
    const list: ArrayLike<string> | null | undefined = anything;

    _.sampleSize(42, "abc"); // $ExpectType string[]
    _.sampleSize(42)("abc"); // $ExpectType string[]
    _.sampleSize(42, array); // $ExpectType string[]
    _.sampleSize(42, list); // $ExpectType string[]
    _.sampleSize(42, {a: "foo"}); // $ExpectType string[]
}

// _.shuffle
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    _.shuffle("abc"); // $ExpectType string[]
    _.shuffle(list); // $ExpectType AbcObject[]
    _.shuffle(dictionary); // $ExpectType AbcObject[]
}

// _.size
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    _.size(array); // $ExpectType number
    _.size(list); // $ExpectType number
    _.size(dictionary); // $ExpectType number
    _.size(""); // $ExpectType number
}

// _.some
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: lodash.NumericDictionary<AbcObject> | null | undefined = anything;
    const sampleObject: AbcObject | null | undefined = anything;

    const listIterator = (value: AbcObject) => true;
    const objectIterator = (value: any) => true;

    _.some(listIterator, list); // $ExpectType boolean
    _.some(listIterator)(list); // $ExpectType boolean
    _.some("a", list); // $ExpectType boolean
    _.some({ a: 42 }, list); // $ExpectType boolean
    _.some(["a", 42], list); // $ExpectType boolean

    _.some(listIterator, dictionary); // $ExpectType boolean
    _.some(listIterator)(dictionary); // $ExpectType boolean
    _.some("a", dictionary); // $ExpectType boolean
    _.some({ a: 42 }, dictionary); // $ExpectType boolean
    _.some(["a", 42], dictionary); // $ExpectType boolean

    _.some(listIterator, numericDictionary); // $ExpectType boolean
    _.some(listIterator)(numericDictionary); // $ExpectType boolean
    _.some("a", numericDictionary); // $ExpectType boolean
    _.some({ a: 42 }, numericDictionary); // $ExpectType boolean
    _.some(["a", 42], numericDictionary); // $ExpectType boolean
}

// _.sortBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const listIterator = (value: AbcObject) => 0;

    _.sortBy(_.identity, "bca"); // $ExpectType string[]
    _.sortBy(listIterator, list); // $ExpectType AbcObject[]
    _.sortBy(listIterator)(list); // $ExpectType AbcObject[]
    _.sortBy("a", list); // $ExpectType AbcObject[]
    _.sortBy({ a: 42 }, list); // $ExpectType AbcObject[]

    _.sortBy(_.identity, dictionary); // $ExpectType AbcObject[]
    _.sortBy(listIterator, dictionary); // $ExpectType AbcObject[]
    _.sortBy("a", dictionary); // $ExpectType AbcObject[]
    _.sortBy({ a: 42 }, dictionary); // $ExpectType AbcObject[]
}

// _.orderBy
{
    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const listIterator = (value: AbcObject) => 0;

    _.orderBy(_.identity, "asc", "bca"); // $ExpectType string[]
    _.orderBy(_.identity, true, "bca"); // $ExpectType string[]
    _.orderBy(listIterator, true, list); // $ExpectType AbcObject[]
    _.orderBy(listIterator)(true)(list); // $ExpectType AbcObject[]
    _.orderBy("a", true, list); // $ExpectType AbcObject[]
    _.orderBy({ a: 42 }, true, list); // $ExpectType AbcObject[]

    _.orderBy(_.identity, true, dictionary); // $ExpectType AbcObject[]
    _.orderBy(listIterator, true, dictionary); // $ExpectType AbcObject[]
    _.orderBy("a", true, dictionary); // $ExpectType AbcObject[]
    _.orderBy({ a: 42 }, true, dictionary); // $ExpectType AbcObject[]
}

/********
 * Date *
 ********/

// _.now
{
    _.now(); // $ExpectType number
}

/*************
 * Functions *
 *************/

// _.after
{
    _.after((a: string, b: number) => true, 42); // $ExpectType (a: string, b: number) => boolean
    _.after((a: string, b: number) => true)(42); // $ExpectType (a: string, b: number) => boolean
}

// _.ary
{
    _.ary(1, (a: string, b: number) => true); // $ExpectType (...args: any[]) => any
}

// _.before
{
    _.before((a: string, b: number) => true, 42); // $ExpectType (a: string, b: number) => boolean
    _.before((a: string, b: number) => true)(42); // $ExpectType (a: string, b: number) => boolean
}

// _.bind
{
    _.bind((a: string, b: number) => true, anything); // $ExpectType (...args: any[]) => any
    _.bind((a: string, b: number) => true)(anything); // $ExpectType (...args: any[]) => any
}

// _.bindAll
{
    interface SampleObject {
        a(): void;
        b(): void;
        c(): void;
    }

    const object: SampleObject = anything;

    _.bindAll("c", object); // $ExpectType SampleObject
    _.bindAll(["b", "c"], object); // $ExpectType SampleObject
}

// _.bindKey
{
    const object = {
        foo: (a: number, b: string) => true,
    };

    _.bindKey(object, "foo"); // $ExpectType (...args: any[]) => any
    _.bindKey(object)("foo"); // $ExpectType (...args: any[]) => any
}

// _.curry
{
    const testCurryFn = (a: string, b: number, c: boolean): [string, number, boolean] => [a, b, c];

    _.curry(testCurryFn)("1", 2, true); // $ExpectType [string, number, boolean]
    _.curry(testCurryFn)("1", 2)(true); // $ExpectType [string, number, boolean]
    _.curry(testCurryFn)("1")(2, true); // $ExpectType [string, number, boolean]
    _.curry(testCurryFn)("1")(2)(true); // $ExpectType [string, number, boolean]
    _.curry(testCurryFn)("1", 2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    _.curry(testCurryFn)("1")(2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    _.curry(testCurryFn)("1"); // $ExpectType CurriedFunction2<number, boolean, [string, number, boolean]>
    _.curry(testCurryFn); // $ExpectType CurriedFunction3<string, number, boolean, [string, number, boolean]>

    _.curryRight(testCurryFn)("1", 2, true); // $ExpectType [string, number, boolean]
    _.curryRight(testCurryFn)(true)("1", 2); // $ExpectType [string, number, boolean]
    _.curryRight(testCurryFn)(2, true)("1"); // $ExpectType [string, number, boolean]
    _.curryRight(testCurryFn)(true)(2)("1"); // $ExpectType [string, number, boolean]
    _.curryRight(testCurryFn)(2, true); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    _.curryRight(testCurryFn)(true)(2); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    _.curryRight(testCurryFn)(true); // $ExpectType RightCurriedFunction2<string, number, [string, number, boolean]>
    _.curryRight(testCurryFn); // $ExpectType RightCurriedFunction3<string, number, boolean, [string, number, boolean]>
}

// _.debounce
{
    const func = (a: number, b: string) => true;
    const result1 = _.debounce(42, func);
    result1(1, "a"); // $ExpectType boolean
    result1.cancel(); // $ExpectType void
    result1.flush(); // $ExpectType void

    const result2 = _.debounce(42)(func);
    result2(1, "a"); // $ExpectType boolean
    result2.cancel(); // $ExpectType void
    result2.flush(); // $ExpectType void
}

// _.defer
{
    _.defer((a: number, b: string) => true); // number
}

// _.delay
{
    _.delay(500, (a, b) => true); // $ExpectType number
    _.delay(500)((a, b) => true); // $ExpectType number
}

// _.flip
{
    // TODO: fix - output arguments should be reversed
    _.flip((a: string, b: number) => true); // $ExpectType (a: string, b: number) => boolean
}

// _.flow
{
    const Fn1 = (a: number) => 0;
    const Fn2 = (a: number, b: number) => 0;
    const Fn3 = (a: number) => "";
    const Fn4 = (a: string) => true;

    _.flow(Fn1, Fn1); // $ExpectType (a1: number) => number
    _.flow(Fn1, Fn3); // $ExpectType (a1: number) => string
    _.flow(Fn2, Fn1, Fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(Fn2, Fn1, Fn1, Fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(Fn2, Fn1, Fn1, Fn1, Fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1, Fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(Fn2, Fn3); // $ExpectType (a1: number, a2: number) => string
    _.flow(Fn2, Fn3, Fn4); // $ExpectType (a1: number, a2: number) => boolean
    _.flow(Fn2, Fn1, Fn3, Fn4); // $ExpectType (a1: number, a2: number) => boolean
    _.flow([Fn2, Fn1, Fn3, Fn4]); // $ExpectType (...args: any[]) => any
}

// _.flowRight
{
    const Fn1 = (a: number) => 0;
    const Fn2 = (a: number, b: number) => 0;
    const Fn3 = (a: number) => "";
    const Fn4 = (a: string) => true;

    _.flowRight(Fn1, Fn1); // $ExpectType (a1: number) => number
    _.flowRight(Fn3, Fn1); // $ExpectType (a1: number) => string
    _.flowRight(Fn1, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(Fn1, Fn1, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(Fn1, Fn1, Fn1, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(Fn1, Fn1, Fn1, Fn1, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(Fn1, Fn1, Fn1, Fn1, Fn1, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(Fn3, Fn2); // $ExpectType (a1: number, a2: number) => string
    _.flowRight(Fn4, Fn3, Fn2); // $ExpectType (a1: number, a2: number) => boolean
    _.flowRight(Fn4, Fn3, Fn1, Fn2); // $ExpectType (a1: number, a2: number) => boolean
    _.flowRight([Fn4, Fn3, Fn1, Fn2]); // $ExpectType (...args: any[]) => any
}

// _.memoize
{
    const memoizeFn = (a1: string, a2: number) => true;

    const result = _.memoize((a1: string, a2: number) => true);
    result("a", 1); // $ExpectType boolean
    result.cache.delete("key"); // $ExpectType boolean
    result.cache.get("key"); // $ExpectType any
    result.cache.has("key"); // $ExpectType boolean
    result.cache.set("key", "value"); // $ExpectType Dictionary<any>
    result.cache.clear(); // $ExpectType void
}

// _.overArgs
{
    const func1 = (a: boolean) => true;
    const func2 = (a: boolean, b: boolean) => true;
    const transform1 = (a: string) => true;
    const transform2 = (b: number) => true;

    _.overArgs(func1, transform1);
    _.overArgs(func1)(transform1);
    _.overArgs(func1, [transform1]);
    _.overArgs(func2, [transform1, transform2]);
    _.overArgs(func2)([transform1, transform2]);
}

// _.negate
{
    _.negate((a1: number, a2: number) => true); // $ExpectType (a1: number, a2: number) => boolean
}

// _.once
{
    const func = (a: string, b: number) => true;

    _.once(func); // $ExpectType (a: string, b: number) => boolean
}

// _.rearg
{
    const testReargFn = (a: string, b: string, c: string) => [a, b, c];
    _.rearg([2, 0, 1], testReargFn); // $ExpectType (...args: any[]) => any
    _.rearg([2, 0, 1])(testReargFn); // $ExpectType (...args: any[]) => any
}

// _.rest
{
    _.rest((a, b) => true); // $ExpectType (...args: any[]) => any
}

// _.spread
{
    _.spread((a) => true); // $ExpectType (...args: any[]) => boolean
}

// _.throttle
{
    const func = (a: number, b: string) => true;
    const result1 = _.throttle(42, func);
    result1(1, "a"); // $ExpectType boolean
    result1.cancel(); // $ExpectType void
    result1.flush(); // $ExpectType void

    const result2 = _.throttle(42)(func);
    result2(1, "a"); // $ExpectType boolean
    result2.cancel(); // $ExpectType void
    result2.flush(); // $ExpectType void
}

// _.unary
{
    _.unary((a: string, b: number) => true); // $ExpectType (arg1: string) => boolean
}

// _.wrap
{
    const value: AbcObject = { a: 1, b: "", c: true };
    const wrapper = (a: AbcObject, b: number, c: string) => true;

    _.wrap(wrapper, value); // $ExpectType (...args: any[]) => boolean
}

/********
 * Lang *
 ********/

// _.castArray
{
    _.castArray(42); // $ExpectType number[]
}

// _.clone
{
    _.clone(42); // $ExpectType 42
    _.clone([""]); // $ExpectType string[]
    _.clone({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
}

// _.cloneDeep
{
    _.cloneDeep(42); // $ExpectType 42
    _.cloneDeep([""]); // $ExpectType string[]
    _.cloneDeep({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
}

// _.cloneDeepWith
{
    _.cloneDeepWith((x) => "", 42); // $ExpectType any
    _.cloneDeepWith((x) => "")(42); // $ExpectType any
    _.cloneDeepWith((x) => "", [42]); // $ExpectType any
    _.cloneDeepWith((x) => "", { a: { b: 42 } }); // $ExpectType any
}

// _.cloneWith
{
    _.cloneWith((x): "" | undefined => "", 42); // $ExpectType "" | 42
    _.cloneWith((x: number): "" | undefined => "")(42); // $ExpectType number | ""
    _.cloneWith((x: any): "" | undefined => "")(42); // $ExpectType any
    _.cloneWith((x): "" | undefined => "", [42]); // $ExpectType "" | number[]
    _.cloneWith((x): "" | undefined => "", { a: { b: 42 } }); // $ExpectType "" | { a: { b: number; }; }
}

// _.conforms
{
    _.conforms({foo: (v: string) => false})({foo: "foo"}); // $ExpectType boolean
}

// _.conformsTo
{
    _.conformsTo({foo: (v: string) => false}, {foo: "foo"}, ); // $ExpectType boolean
    _.conformsTo({foo: (v: string) => false})({foo: "foo"}, ); // $ExpectType boolean
}

// _.eq
{
    _.eq(anything, anything); // $ExpectType boolean
    _.eq(anything)(anything); // $ExpectType boolean
}

// _.gt
{
    _.gt(anything, anything); // $ExpectType boolean
    _.gt(anything)(anything); // $ExpectType boolean
}

// _.gte
{
    _.gte(anything, anything); // $ExpectType boolean
    _.gte(anything)(anything); // $ExpectType boolean
}

// _.isArguments
{
    _.isArguments(anything); // $ExpectType boolean

    {
        const value: number | IArguments = 0;

        if (_.isArguments(value)) {
            const result: IArguments = value;
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isArray
{
    _.isArray(anything); // $ExpectType boolean

    {
        const value: number | string[] | boolean[] = anything;

        if (_.isArray(value)) {
            value; // $ExpectType string[] | boolean[]
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isArrayBuffer
{
    _.isArrayBuffer(anything); // $ExpectType boolean

    {
        const value: ArrayBuffer | number = anything;

        if (_.isArrayBuffer(value)) {
            value; // $ExpectType ArrayBuffer
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isArrayLike
{
    _.isArrayLike(anything); // $ExpectType boolean

    {
        const value: string | string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLike(value)) {
            value; // $ExpectType string | string[] | { [index: number]: boolean; length: number; } | [number, boolean]
        } else {
            value; // $ExpectType number | { length: string; } | { a: string; } | null | undefined
        }
    }

    {
        const value: boolean[] = anything;

        if (_.isArrayLike(value)) {
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
    }

    {
        const value: { a: string } = anything;

        if (_.isArrayLike(value)) {
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
    }
}

// _.isArrayLikeObject
{
    _.isArrayLikeObject(anything); // $ExpectType boolean

    {
        const value: string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | string | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType string[] | [number, boolean] | { [index: number]: boolean; length: number; }
        } else {
            value; // $ExpectTpye string | number | { length: string; } | { a: string; } | null | undefined
        }
    }

    {
        const value: boolean[] = anything;

        if (_.isArrayLikeObject(value)) {
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
    }

    {
        const value: { a: string } = anything;

        if (_.isArrayLikeObject(value)) {
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
    }
}

// _.isBoolean
{
    _.isBoolean(anything); // $ExpectType boolean

    {
        const value: number | boolean = anything;

        if (_.isBoolean(value)) {
            value; // $ExpectType boolean
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isBuffer
{
    _.isBuffer(anything); // $ExpectType boolean
}

// _.isDate
{
    _.isDate(anything); // $ExpectType boolean

    {
        const value: number | Date = 0;

        if (_.isDate(value)) {
            const date: Date = value;
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isElement
{
     _.isElement(anything); // $ExpectType boolean
}

// _.isEmpty
{
    _.isEmpty(anything); // $ExpectType boolean
}

// _.isEqual
{
    _.isEqual(anything, anything); // $ExpectType boolean
    _.isEqual(anything)(anything); // $ExpectType boolean
    _.equals(anything)(anything); // $ExpectType boolean
}

// _.isEqualWith
{
    const customizer = (value: any, other: any, indexOrKey: number|string|symbol|undefined, parent: any, otherParent: any, stack: any) => true;

    _.isEqualWith(customizer, anything, anything); // $ExpectType boolean
    _.isEqualWith(customizer)(anything)(anything); // $ExpectType boolean
}

// _.isError
{
    _.isError(anything); // $ExpectType boolean

    {
        const value: number|Error = anything;

        if (_.isError(value)) {
            value; // $ExpectType Error
        } else {
            value; // $ExpectType number
        }
    }

    {
        class CustomError extends Error {
            custom: string
        }

        const value: number | CustomError = anything;

        if (_.isError(value)) {
            value; // $ExpectType CustomError
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isFinite
{
    _.isFinite(anything); // $ExpectType boolean
}

// _.isFunction
{
    _.isFunction(anything); // $ExpectType boolean

    {
        const value: number|(() => void) = anything;

        if (_.isFunction(value)) {
            value; // $ExpectType () => void
        } else {
            value; // $ExpectType number
        }

        if (_.isFunction(anything)) {
            anything();
        }
    }
}

// _.isInteger
{
    _.isInteger(anything); // $ExpectType boolean
}

// _.isLength
{
    _.isLength(anything); // $ExpectType boolean
}

// _.isMap
{
    _.isMap(anything); // $ExpectType boolean

    {
        const value: number | Map<string, number> = 0;

        if (_.isMap(value)) {
            const result: Map<string, number> = value;
        } else {
            const result: number = value;
        }
    }
}

// _.isMatch
{
    _.isMatch({}, {}); // $ExpectType boolean
}

// _.isMatchWith
{
    const testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string|symbol) => true;

    _.isMatchWith(testIsMatchCustiomizerFn, {}, {}); // $ExpectType boolean
    _.isMatchWith(testIsMatchCustiomizerFn)({})({}); // $ExpectType boolean
}

// _.isNaN
{
    _.isNaN(anything); // $ExpectType boolean
}

// _.isNative
{
    _.isNative(anything); // $ExpectType boolean

    {
        const value: number|(() => void) = anything;

        if (_.isNative(value)) {
            value; // $ExpectType () => void
        } else {
            value; // $ExpectType number
        }
    }
}

// _.isNil
{
    _.isNil(anything); // $ExpectType boolean
}

// _.isNull
{
    _.isNull(anything); // $ExpectType boolean
}

// _.isNumber
{
    _.isNumber(anything); // $ExpectType boolean

    {
        const value: string | number = 0;

        if (_.isNumber(value)) {
            const result: number = value;
        } else {
            const result: string = value;
        }
    }
}

// _.isObject
{
    _.isObject(anything); // $ExpectType boolean
}

// _.isObjectLike
{
    _.isObjectLike(anything); // $ExpectType boolean
}

// _.isPlainObject
{
    _.isPlainObject(anything); // $ExpectType boolean
}

// _.isRegExp
{
    _.isRegExp(anything); // $ExpectType boolean

    {
        const value: number|RegExp = /./;

        if (_.isRegExp(value)) {
            const result: RegExp = value;
        } else {
            const result: number = value;
        }
    }
}

// _.isSafeInteger
{
    _.isSafeInteger(anything); // $ExpectType boolean
}

// _.isSet
{
    _.isSet(anything); // $ExpectType boolean

    {
        const value: number|Set<string> = 0;

        if (_.isSet(value)) {
            const result: Set<string> = value;
        } else {
            const result: number = value;
        }
    }
}

// _.isString
{
    _.isString(anything); // $ExpectType boolean

    {
        const value: number|string = "";

        if (_.isString(value)) {
            const result: string = value;
        }
        else {
            const result: number = value;
        }
    }
}

// _.isSymbol
{
    _.isSymbol(anything); // $ExpectType boolean
}

// _.isTypedArray
{
    _.isTypedArray([]); // $ExpectType boolean
}

// _.isUndefined
{
    _.isUndefined(anything); // $ExpectType boolean
}

// _.isWeakMap
{
    _.isWeakMap(anything); // $ExpectType boolean

    {
        const value: number | WeakMap<object, number> = 0;

        if (_.isWeakMap(value)) {
            const result: WeakMap<object, number> = value;
        } else {
            const result: number = value;
        }
    }
}

// _.isWeakSet
{
    _.isWeakSet(anything); // $ExpectType boolean

    {
        const value: number | WeakSet<object> = 0;

        if (_.isWeakSet(value)) {
            const result: WeakSet<object> = value;
        }
        else {
            const result: number = value;
        }
    }
}

// _.lt
{
    _.lt(anything, anything); // $ExpectType boolean
}

// _.lte
{
    _.lte(anything, anything); // $ExpectType boolean
}

// _.toArray
{
    const array: AbcObject[] = [];
    const list: ArrayLike<AbcObject> = [];
    const dictionary: lodash.Dictionary<AbcObject> = {};
    const numericDictionary: lodash.NumericDictionary<AbcObject> = {};

    _.toArray(""); // $ExpectType string[]

    _.toArray(array); // $ExpectType AbcObject[]
    _.toArray(list); // $ExpectType AbcObject[]
    _.toArray(dictionary); // $ExpectType AbcObject[]
    _.toArray(numericDictionary); // $ExpectType AbcObject[]
}

// _.toPlainObject
{
    _.toPlainObject(true); // $ExpectType any
    _.toPlainObject(1); // $ExpectType any
    _.toPlainObject("a"); // $ExpectType any
    _.toPlainObject([]); // $ExpectType any
    _.toPlainObject({}); // $ExpectType any
}

// _.toFinite
{
    _.toFinite(true); // $ExpectType number
    _.toFinite(1); // $ExpectType number
    _.toFinite("3.2"); // $ExpectType number
}

// _.toInteger
{
    _.toInteger(true); // $ExpectType number
    _.toInteger(1); // $ExpectType number
    _.toInteger("3.2"); // $ExpectType number
}

// _.toLength
{
    _.toLength(true); // $ExpectType number
    _.toLength(1); // $ExpectType number
    _.toLength("a"); // $ExpectType number
}

// _.toNumber
{
    _.toNumber(true); // $ExpectType number
    _.toNumber(1); // $ExpectType number
    _.toNumber("a"); // $ExpectType number
}

// _.toSafeInteger
{
    _.toSafeInteger(true); // $ExpectType number
    _.toSafeInteger(1); // $ExpectType number
    _.toSafeInteger("a"); // $ExpectType number
}

/********
 * Math *
 ********/

// _.add
{
    _.add(1, 1); // $ExpectType number
}

// _.ceil
{
    _.ceil(6.004); // $ExpectType number
}

// _.divide
{
    _.divide(6, 4); // $ExpectType number
}

// _.floor
{
    _.floor(4.006); // $ExpectType number
}

// _.max
{
    const list: ArrayLike<number> = [];

    _.max(list); // $ExpectType number | undefined
}

// _.maxBy
{
    const list: ArrayLike<number> = [];
    const list2: ArrayLike<AbcObject> = [];

    const listIterator = (value: number) => 0;

    _.maxBy(listIterator, list); // $ExpectType number | undefined
    _.maxBy(listIterator)(list); // $ExpectType number | undefined
    _.maxBy((value) => value.a, list2); // $ExpectType AbcObject | undefined
    _.maxBy("a", list2); // $ExpectType AbcObject | undefined
    _.maxBy({ a: 42 }, list2); // $ExpectType AbcObject | undefined
}

// _.mean
{
    const array: number[] = [];

    _.mean(array); // $ExpectType number
}

// _.meanBy
{
    const array: AbcObject[] = [];

    _.meanBy((x) => x.a, array); // $ExpectType number
    _.meanBy((x: AbcObject) => x.a)(array); // $ExpectType number
    _.meanBy("a", array); // $ExpectType number
}

// _.min
{
    const list: ArrayLike<number> = [];

    _.min(list); // $ExpectType number | undefined
}

// _.minBy
{
    const list: ArrayLike<number> = [];
    const list2: ArrayLike<AbcObject> = [];

    const listIterator = (value: number) => 0;

    _.minBy(listIterator, list); // $ExpectType number | undefined
    _.minBy(listIterator)(list); // $ExpectType number | undefined
    _.minBy((value) => value.a, list2); // $ExpectType AbcObject | undefined
    _.minBy("a", list2); // $ExpectType AbcObject | undefined
    _.minBy({ a: 42 }, list2); // $ExpectType AbcObject | undefined
}

// _.multiply
{
    _.multiply(6, 4); // $ExpectType number
    _.multiply(6)(4); // $ExpectType number
}

// _.round
{
    _.round(4.006); // $ExpectType number
}

// _.sum
{
    const list: ArrayLike<number> | null | undefined = anything;

    _.sum(list); // $ExpectType number
}

// _.sumBy
{
    const list: ArrayLike<number> | null | undefined = anything;
    const objectList: ArrayLike<{ "age": number }> | null | undefined = anything;

    const listIterator = (value: number) => 0;

    _.sumBy(listIterator, list); // $ExpectType number
    _.sumBy(listIterator)(list); // $ExpectType number
    _.sumBy("age", objectList); // $ExpectType number
    _.sumBy("age")(objectList); // $ExpectType number
}

/**********
 * Number *
 **********/

// _.subtract
{
     _.subtract(3, 2); // $ExpectType number
     _.subtract(3)(2); // $ExpectType number
}

// _.clamp
{
    _.clamp(2, 4, 3); // $ExpectType number
    _.clamp(2)(4)(3); // $ExpectType number
}

// _.inRange
{
    _.inRange(2, 4, 3); // $ExpectType number
    _.inRange(2)(4)(3); // $ExpectType number
}

// _.random
{
    _.random(1, 2); // $ExpectType number
    _.random(1)(2); // $ExpectType number
}

/**********
 * Object *
 **********/
/*
// _.assign
{
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    {
        const result: Obj;

        _.assign(obj);
    }

    {
        const result: { a: number };

        _.assign(obj, s1);
    }

    {
        const result: { a: number, b: number };

        _.assign(obj, s1, s2);
    }

    {
        const result: { a: number, b: number, c: number };

        _.assign(obj, s1, s2, s3);
    }

    {
        const result: { a: number, b: number, c: number, d: number };

        _.assign(obj, s1, s2, s3, s4);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };

        _.assign(obj, s1, s2, s3, s4, s5);
    }
}

// _.assignWith
{
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    const customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        const result: Obj;

        _.assignWith(obj);
    }

    {
        const result: { a: number };
        _.assignWith(obj, s1, customizer);
    }

    {
        const result: { a: number, b: number };
        _.assignWith(obj, s1, s2, customizer);
    }

    {
        const result: { a: number, b: number, c: number };
        _.assignWith(obj, s1, s2, s3, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number };
        _.assignWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };
        _.assignWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }
}

// _.assignIn
{
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    const customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        const result: Obj;

        _.assignIn(obj);
    }

    {
        const result: { a: number };

        _.assignIn(obj, s1);
    }

    {
        const result: { a: number, b: number };

        _.assignIn(obj, s1, s2);
    }

    {
        const result: { a: number, b: number, c: number };

        _.assignIn(obj, s1, s2, s3);
    }

    {
        const result: { a: number, b: number, c: number, d: number };

        _.assignIn(obj, s1, s2, s3, s4);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };

        _.assignIn<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }
}

// _.assignInWith
{
    interface Obj { a: string };
    interface S1 { a: number };
    interface S2 { b: number };
    interface S3 { c: number };
    interface S4 { d: number };
    interface S5 { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    const customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        const result: Obj;

        _.assignInWith(obj);
    }

    {
        const result: { a: number };
        _.assignInWith(obj, s1, customizer);
    }

    {
        const result: { a: number, b: number };
        _.assignInWith(obj, s1, s2, customizer);
    }

    {
        const result: { a: number, b: number, c: number };
        _.assignInWith(obj, s1, s2, s3, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number };
        _.assignInWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };
        _.assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }
}

// _.create
{
    type SampleProto = {a: number};
    type SampleProps = {b: string};

    const prototype: SampleProto = { a: 1 };
    const properties: SampleProps = { b: "" };

    {
        const result: {a: number; b: string};

        _.create<SampleProto, SampleProps>(prototype, properties);
        _.create(prototype, properties);
    }
}

// _.defaults
{
  interface Obj { a: string };
  interface S1 { a: number };
  interface S2 { b: number };
  interface S3 { c: number };
  interface S4 { d: number };
  interface S5 { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    {
    const result: Obj;

    _.defaults(obj);
    }

    {
    const result: { a: string };

    _.defaults(obj, s1);
    }

    {
    const result: { a: string, b: number };

    _.defaults(obj, s1, s2);
    }

    {
    const result: { a: string, b: number, c: number };

    _.defaults(obj, s1, s2, s3);
    }

    {
    const result: { a: string, b: number, c: number, d: number };

    _.defaults(obj, s1, s2, s3, s4);
    }

    {
    const result: { a: string, b: number, c: number, d: number, e: number };

    _.defaults(obj, s1, s2, s3, s4, s5);
    }
}

//_.defaultsDeep
{
    interface DefaultsDeepResult {
        user: {
            name: string;
            age: number;
        }
    }
    const TestDefaultsDeepObject = { "user": { "name": "barney" } };
    const TestDefaultsDeepSource = { "user": { "name": "fred", "age": 36 } };
    _.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource); // $ExpectType DefaultsDeepResult
}

// _.entries
{
    const object: lodash.Dictionary<string> = {};

    {
        const result: Array<[string, string]>;

        _.entries(object);
    }
}

// _.entriesIn
{
    const object: lodash.Dictionary<string> = {};

    {
        const result: Array<[string, string]>;

        _.entriesIn(object);
    }
}

// _.extend
{
    type Obj = { a: string };
    type S1 = { a: number };
    type S2 = { b: number };
    type S3 = { c: number };
    type S4 = { d: number };
    type S5 = { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    const customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        const result: Obj;

        _.extend(obj);
    }

    {
        const result: { a: number };

        _.extend(obj, s1);
    }

    {
        const result: { a: number, b: number };

        _.extend(obj, s1, s2);
    }

    {
        const result: { a: number, b: number, c: number };

        _.extend(obj, s1, s2, s3);
    }

    {
        const result: { a: number, b: number, c: number, d: number };

        _.extend(obj, s1, s2, s3, s4);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };

        _.extend<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }
}

// _.extendWith
{
    type Obj = { a: string };
    type S1 = { a: number };
    type S2 = { b: number };
    type S3 = { c: number };
    type S4 = { d: number };
    type S5 = { e: number };

    const obj: Obj = { a: "" };
    const s1: S1 = { a: 1 };
    const s2: S2 = { b: 1 };
    const s3: S3 = { c: 1 };
    const s4: S4 = { d: 1 };
    const s5: S5 = { e: 1 };

    const customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        const result: Obj;

        _.extendWith(obj);
    }

    {
        const result: { a: number };

        _.extendWith(obj, s1, customizer);
    }

    {
        const result: { a: number, b: number };

        _.extendWith(obj, s1, s2, customizer);
    }

    {
        const result: { a: number, b: number, c: number };

        _.extendWith(obj, s1, s2, s3, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number };

        _.extendWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        const result: { a: number, b: number, c: number, d: number, e: number };

        _.extendWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }
}

// _.findKey
{
    {
        const a: keyof undefined;
        const predicateFn = (value: any, key: string, object: {}) => true;
        const result: string | undefined;

        _.findKey<{a: string;}>({a: ""});

        _.findKey<{a: string;}>({a: ""}, predicateFn);

        _.findKey<{a: string;}>({a: ""}, "");

        _.findKey({a: { b: 5 }}, {b: 42});

        _.findKey({a: { b: 5 }}, ["b", 5]);
    }

    {
        const predicateFn = (value: string, key: string, collection: lodash.Dictionary<string>) => true;
        const result: string | undefined;

        _.findKey({a: ""}, predicateFn);
    }
}

// _.findLastKey
{
    {
        const predicateFn = (value: any, key: string, object: {}) => true;
        const result: string | undefined;

        _.findLastKey<{a: string;}>({a: ""});

        _.findLastKey<{a: string;}>({a: ""}, predicateFn);

        _.findLastKey<{a: string;}>({a: ""}, "");

        _.findLastKey({a: { b: 5 }}, {b: 42});

        _.findLastKey({a: { b: 5 }}, ["b", 5]);
    }

    {
        const predicateFn = (value: string, key: string, collection: lodash.Dictionary<string>) => true;
        const result: string | undefined;

        _.findLastKey({a: ""}, predicateFn);
    }
}

// _.forIn
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const dictionary: lodash.Dictionary<number> = {};
    const nilDictionary: lodash.Dictionary<number> | null | undefined = anything;
    const dictionaryIterator: (value: number, key: string, collection: lodash.Dictionary<number>) => any = (value: number, key: string, collection: lodash.Dictionary<number>) => 1;

    const object: AbcObject = { a: 1, b: "", c: true };
    const nilObject: AbcObject | null | undefined = anything;
    const objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        const result: lodash.Dictionary<number>;

        _.forIn(dictionary);
        _.forIn(dictionary, dictionaryIterator);
    }

    {
        const result: lodash.Dictionary<number> | null | undefined;

        _.forIn(nilDictionary);
        _.forIn(nilDictionary, dictionaryIterator);
    }

    {
        const result: AbcObject;

        _.forIn<AbcObject>(object);
        _.forIn<AbcObject>(object, objectIterator);
    }

    {
        const result: AbcObject | null | undefined;

        _.forIn<AbcObject | null | undefined>(nilObject);
        _.forIn<AbcObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forInRight
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const dictionary: lodash.Dictionary<number> = {};
    const nilDictionary: lodash.Dictionary<number> | null | undefined = anything;
    const dictionaryIterator: (value: number, key: string, collection: lodash.Dictionary<number>) => any = (value: number, key: string, collection: lodash.Dictionary<number>) => 1;

    const object: AbcObject = { a: 1, b: "", c: true };
    const nilObject: AbcObject | null | undefined = anything;
    const objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        const result: lodash.Dictionary<number>;

        _.forInRight(dictionary);
        _.forInRight(dictionary, dictionaryIterator);
    }

    {
        const result: lodash.Dictionary<number> | null | undefined;

        _.forInRight(nilDictionary);
        _.forInRight(nilDictionary, dictionaryIterator);
    }

    {
        const result: AbcObject;

        _.forInRight<AbcObject>(object);
        _.forInRight<AbcObject>(object, objectIterator);
    }

    {
        const result: AbcObject | null | undefined;

        _.forInRight<AbcObject | null | undefined>(nilObject);
        _.forInRight<AbcObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forOwn
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const dictionary: lodash.Dictionary<number> = {};
    const nilDictionary: lodash.Dictionary<number> | null | undefined = anything;
    const dictionaryIterator: (value: number, key: string, collection: lodash.Dictionary<number>) => any = (value: number, key: string, collection: lodash.Dictionary<number>) => 1;

    const object: AbcObject = { a: 1, b: "", c: true };
    const nilObject: AbcObject | null | undefined = anything;
    const objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        const result: lodash.Dictionary<number>;

        _.forOwn(dictionary);
        _.forOwn(dictionary, dictionaryIterator);
    }

    {
        const result: lodash.Dictionary<number> | null | undefined;

        _.forOwn(nilDictionary);
        _.forOwn(nilDictionary, dictionaryIterator);
    }

    {
        const result: AbcObject;

        _.forOwn<AbcObject>(object);
        _.forOwn<AbcObject>(object, objectIterator);
    }

    {
        const result: AbcObject | null | undefined;

        _.forOwn<AbcObject | null | undefined>(nilObject);
        _.forOwn<AbcObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forOwnRight
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const dictionary: lodash.Dictionary<number> = {};
    const nilDictionary: lodash.Dictionary<number> | null | undefined = anything;
    const dictionaryIterator: (value: number, key: string, collection: lodash.Dictionary<number>) => any = (value: number, key: string, collection: lodash.Dictionary<number>) => 1;

    const object: AbcObject = { a: 1, b: "", c: true };
    const nilObject: AbcObject | null | undefined = anything;
    const objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        const result: lodash.Dictionary<number>;

        _.forOwnRight(dictionary);
        _.forOwnRight(dictionary, dictionaryIterator);
    }

    {
        const result: lodash.Dictionary<number> | null | undefined;

        _.forOwnRight(nilDictionary);
        _.forOwnRight(nilDictionary, dictionaryIterator);
    }

    {
        const result: AbcObject;

        _.forOwnRight<AbcObject>(object);
        _.forOwnRight<AbcObject>(object, objectIterator);
    }

    {
        const result: AbcObject | null | undefined;

        _.forOwnRight<AbcObject | null | undefined>(nilObject);
        _.forOwnRight<AbcObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.functions
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const object: AbcObject = { a: 1, b: "", c: true };

    {
        const result: string[];

        _.functions(object);
    }
}

// _.functionsIn
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const object: AbcObject = { a: 1, b: "", c: true };

    {
        const result: string[];

        _.functionsIn<AbcObject>(object);
    }
}

// _.get
{
    _.get([], Symbol.iterator); // $ExpectType any
    _.get([], [Symbol.iterator]); // $ExpectType any
    _.get("abc", 1); // $ExpectType string
    _.get({ a: { b: true } }, "a"); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a"]); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a", "b"]); // $ExpectType any

    {
        const result: string;

        _.get("abc", "0");
        _.get("abc", "0", "_");
        _.get("abc", ["0"]);
        _.get("abc", ["0"], "_");
    }

    {
        const result: number;

        _.get([42], "0");
        _.get([42], "0", -1);
        _.get([42], ["0"]);
        _.get([42], ["0"], -1);
    }

    {
        const result: boolean;

        _.get({a: true}, "a");
        _.get({a: true}, "a", false);
        _.get({a: true}, ["a"]);
        _.get({a: true}, ["a"], false);
    }
}

// _.has
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const object: AbcObject = { a: 1, b: "", c: true };

    {
        const result: boolean;

        _.has<AbcObject>(object, "");
        _.has<AbcObject>(object, 42);
        _.has<AbcObject>(object, ["", 42]);
    }
}

// _.hasIn
{
    type AbcObject = {a: number; b: string; c: boolean;};

    const object: AbcObject = { a: 1, b: "", c: true };

    {
        const result: boolean;

        _.hasIn<AbcObject>(object, "");
        _.hasIn<AbcObject>(object, 42);
        _.hasIn<AbcObject>(object, ["", 42]);
    }
}

// _.invert
{
    {
        const result: lodash.Dictionary<string>;

        _.invert({});
    }
}

// _.invertBy
{
    const array: Array<{a: number;}> = [];
    const list: ArrayLike<{a: number;}> = [];
    const dictionary: lodash.Dictionary<{a: number;}> = {};
    const numericDictionary: lodash.NumericDictionary<{a: number;}> = {};

    const stringIterator: (value: string) => any = (value: string) => 1;
    const arrayIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    const listIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    const dictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    const numericDictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;

    {
        const result: lodash.Dictionary<string[]>;

        _.invertBy("foo");
        _.invertBy("foo", stringIterator);

        _.invertBy(array);
        _.invertBy<{a: number;}>(array, "a");
        _.invertBy<{a: number;}>(array, arrayIterator);
        _.invertBy<{a: number;}>(array, {a: 1});

        _.invertBy(list);
        _.invertBy<{a: number;}>(list, "a");
        _.invertBy<{a: number;}>(list, listIterator);
        _.invertBy<{a: number;}>(list, {a: 1});

        _.invertBy(dictionary);
        _.invertBy<{a: number;}>(dictionary, "a");
        _.invertBy<{a: number;}>(dictionary, dictionaryIterator);
        _.invertBy<{a: number;}>(dictionary, {a: 1});

        _.invertBy(numericDictionary);
        _.invertBy<{a: number;}>(numericDictionary, "a");
        _.invertBy<{a: number;}>(numericDictionary, numericDictionaryIterator);
        _.invertBy<{a: number;}>(numericDictionary, {a: 1});
    }
}

// _.keys
{
    const object: lodash.Dictionary<any> | null | undefined = anything;

    {
        const result: string[];

        _.keys(object);
    }
}

// _.keysIn
{
    const object: lodash.Dictionary<any> | null | undefined = anything;

    {
        const result: string[];

        _.keysIn(object);
    }
}

// _.mapKeys
{
    const array: AbcObject[] | null | undefined = anything;
    const list: ArrayLike<AbcObject>| null | undefined = anything;
    const dictionary: lodash.Dictionary<AbcObject> | null | undefined = anything;

    const listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => "";
    const dictionaryIterator = (value: AbcObject, key: string, collection: lodash.Dictionary<AbcObject>) => "";

    {
        const result: lodash.Dictionary<AbcObject>;

        _.mapKeys(array);
        _.mapKeys(array, listIterator);
        _.mapKeys(array, "");
        _.mapKeys(array, {});

        _.mapKeys(list);
        _.mapKeys(list, listIterator);
        _.mapKeys(list, "");
        _.mapKeys(list, {});

        _.mapKeys(dictionary);
        _.mapKeys(dictionary, dictionaryIterator);
        _.mapKeys(dictionary, "");
        _.mapKeys(dictionary, {});
    }
}

// _.merge
{
    const initialValue = { a : 1 };
    const mergingValue = { b : "hi" };

    interface ExpectedResult {
        a: number;
        b: string;
    }
    const result: ExpectedResult;

    // Test for basic merging

    _.merge(initialValue, mergingValue);

    _.merge(initialValue, {}, mergingValue);

    _.merge(initialValue, {}, {}, mergingValue);

    _.merge(initialValue, {}, {}, {}, mergingValue);

    // Once we get to the varargs version, you have to specify the result explicitly
    _.merge(initialValue, {}, {}, {}, {}, mergingValue);

    type ComplicatedExpectedType = { a: number, b: string, c: {}, d: number[], e: boolean };

    const complicatedResult: ComplicatedExpectedType = _.merge({ a: 1 },
                                                             { b: "string" },
                                                             { c: {} },
                                                             { d: [1] },
                                                             { e: true });
    // Test for type overriding

    type ExpectedTypeAfterOverriding = { a: boolean };

    const overriddenResult: ExpectedTypeAfterOverriding = _.merge({ a: 1 },
                                                                { a: "string" },
                                                                { a: {} },
                                                                { a: [1] },
                                                                { a: true });
}

// _.mergeWith
{
    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    interface ExpectedResult {
        a: number;
        b: string;
    }
    const result: ExpectedResult;

    const customizer: (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => any = (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => 1;

    // Test for basic merging
    _.mergeWith(initialValue, mergingValue, customizer);
    _.mergeWith(initialValue, {}, mergingValue, customizer);
    _.mergeWith(initialValue, {}, {}, mergingValue, customizer);
    _.mergeWith(initialValue, {}, {}, {}, mergingValue, customizer);

    // Once we get to the varargs version, you have to specify the result explicitl
    _.mergeWith(initialValue, {}, {}, {}, {}, mergingValue, customizer);
}

// _.omit
{
    const obj: AbcObject | null | undefined = anything;
    const dict: { [key: string]: AbcObject } = { };

    {
        const result: Partial<AbcObject>;

        _.omit(obj, "a");
        _.omit(obj, 0, "a");
        _.omit(obj, ["b", 1], 0, "a");

        dict = _.omit(dict, "a");
    }
}
*/
// _.omitBy
{
    const obj: AbcObject = anything;
    const predicate = (element: string | number | boolean, key: string) => true;

    _.omitBy(predicate, obj); // $ExpectType Partial<AbcObject>
    _.omitBy(predicate)(obj); // $ExpectType Partial<AbcObject>
}
/*
// _.pick
{
    const obj1: AbcObject | null | undefined = anything;
    const obj2: AbcObject = anything;

    {
        const result: Partial<AbcObject>;

        _.pick(obj1, "a");
        _.pick(obj1, 0, "a");
        _.pick(obj1, ["b", 1], 0, "a");
    }

    {
        const result: Pick<AbcObject, "a" | "b">;
        _.pick(obj2, "a", "b");
        _.pick(obj2, ["a" as "a", "b" as "b"]);
    }
}

// _.pickBy
{
    const obj: AbcObject | null | undefined = anything;
    const predicate = (element: any, key: string) => true;

    {
        const result: Partial<AbcObject>;

        _.pickBy(obj, predicate);
    }
}

// _.result
{
    {
        const result: string;

        _.result<string>("abc", "0");
        _.result<string>("abc", "0", "_");
        _.result<string>("abc", "0", () => "_");
        _.result<string>("abc", ["0"]);
        _.result<string>("abc", ["0"], "_");
        _.result<string>("abc", ["0"], () => "_");
    }

    {
        const result: number;

        _.result<number>([42], "0");
        _.result<number>([42], "0", -1);
        _.result<number>([42], "0", () => -1);
        _.result<number>([42], ["0"]);
        _.result<number>([42], ["0"], -1);
        _.result<number>([42], ["0"], () => -1);
    }

    {
        const result: boolean;

        _.result<boolean>({a: true}, "a");
        _.result<boolean>({a: true}, "a", false);
        _.result<boolean>({a: true}, "a", () => false);
        _.result<boolean>({a: true}, ["a"]);
        _.result<boolean>({a: true}, ["a"], false);
        _.result<boolean>({a: true}, ["a"], () => false);
    }
}

// _.set
{
    type SampleObject = {a: {}};
    type Sample{a: {b: number[]}};

    const object: SampleObject = { a: {} };
    const value = 0;

    {
        const result: SampleResult;

        _.set<SampleResult>(object, "a.b[1]", value);
        _.set<SampleResult>(object, ["a", "b", 1], value);
    }

    {
        const result: _.LoDashImplicitObjectWrapper<SampleResult>;

        _(object).set<SampleResult>("a.b[1]", value);
        _(object).set<SampleResult>(["a", "b", 1], value);
    }

    {
        const result: _.LoDashExplicitObjectWrapper<SampleResult>;

        _(object).chain().set<SampleResult>("a.b[1]", value);
        _(object).chain().set<SampleResult>(["a", "b", 1], value);
    }
}

// _.setWith
{
    type Sample{a: {b: number[]}};

    const object: Sample{ a: { b: [] } };
    const value = 0;
    const customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        const result: SampleResult;

        _.setWith<SampleResult>(object, "a.b[1]", value);
        _.setWith<SampleResult>(object, "a.b[1]", value, customizer);
        _.setWith<SampleResult>(object, ["a", "b", 1], value);
        _.setWith<SampleResult>(object, ["a", "b", 1], value, customizer);
    }
}

// _.toPairs
{
    const object: lodash.Dictionary<string> = {};

    {
        const result: Array<[string, string]>;

        _.toPairs(object);
    }
}

// _.toPairsIn
{
    const object: lodash.Dictionary<string> = {};

    {
        const result: Array<[string, string]>;

        _.toPairsIn(object);
    }
}

// _.transform
{
    const array: number[] = [];
    const dictionary: lodash.Dictionary<number> = {};

    {
        const iterator = (acc: AbcObject[], curr: number, index?: number, arr?: number[]) => {};
        const accumulator: AbcObject[] = [];
        const result: AbcObject[];

        _.transform(array);
        _.transform<number, AbcObject>(array, iterator);
        _.transform<number, AbcObject>(array, iterator, accumulator);
    }

    {
        const iterator = (acc: lodash.Dictionary<AbcObject>, curr: number, index?: number, arr?: number[]) => {};
        const accumulator: lodash.Dictionary<AbcObject> = {};
        const result: lodash.Dictionary<AbcObject>;

        _.transform<number, AbcObject>(array, iterator, accumulator);
    }

    {
        const iterator = (acc: lodash.Dictionary<AbcObject>, curr: number, key?: string, dict?: lodash.Dictionary<number>) => {};
        const accumulator: lodash.Dictionary<AbcObject> = {};
        const result: lodash.Dictionary<AbcObject>;

        _.transform(dictionary);
        _.transform<number, AbcObject>(dictionary, iterator);
        _.transform<number, AbcObject>(dictionary, iterator, accumulator);
    }

    {
        const iterator = (acc: AbcObject[], curr: number, key?: string, dict?: lodash.Dictionary<number>) => {};
        const accumulator: AbcObject[] = [];
        const result: AbcObject[];

        _.transform<number, AbcObject>(dictionary, iterator, accumulator);
    }
}

// _.unset
{
    type SampleObject = {a: {b: string; c: boolean}};

    const object: SampleObject = { a: { b: "", c: true } };

    {
        const result: boolean;

        _.unset(object, "a.b");
        _.unset(object, ["a", "b"]);
    }
}

// _.update
{
    type Sample{a: {b: number[]}};

    const object: Sample{ a: { b: [] } };
    const updater = (value: any) => 0;

    {
        const result: SampleResult;

        _.update(object, "a.b[1]", updater);
        _.update(object, ["a", "b", 1], updater);
    }
}

// _.updateWith
{
    type Sample{a: {b: number[]}};

    const object: Sample{ a: { b: [] } };
    const updater = (value: any) => 0;
    const customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        const result: SampleResult;

        _.updateWith<SampleResult>(object, "a.b[1]", updater);
        _.updateWith<SampleResult>(object, "a.b[1]", updater, customizer);
        _.updateWith<SampleResult>(object, ["a", "b", 1], updater);
        _.updateWith<SampleResult>(object, ["a", "b", 1], updater, customizer);

        _.updateWith<SampleResult>(object, "a.b[1]", updater);
        _.updateWith<SampleResult>(object, "a.b[1]", updater, customizer);
        _.updateWith<SampleResult>(object, ["a", "b", 1], updater);
        _.updateWith<SampleResult>(object, ["a", "b", 1], updater, customizer);
    }
}

// _.values
{
    type SampleObject = {a: {}};

    {
        const result: any[];

        _.values(123);
        _.values(true);
        _.values(null);
    }

    {
        const result: string[];

        _.values("hi");
        _.values(["h", "i"]);
    }

    {
        const result: number[];

        _.values([1, 2]);
    }

    {
        const result: boolean[];

        _.values([true, false]);
    }

    {
        const dict: lodash.Dictionary<SampleObject> = {};
        const numDict: lodash.NumericDictionary<SampleObject> = {};
        const list: ArrayLike<SampleObject> = [];
        const object: {a: SampleObject} = { a: { a: {} } };
        const result: SampleObject[];

        _.values(dict);
        _.values(numDict);
        _.values(list);
        _.values<SampleObject>(object);
    }
}

// _.valuesIn
{
    const object: lodash.Dictionary<AbcObject> = {};

    {
        const result: AbcObject[];

        _.valuesIn(object);
    }

    {
        const result: AbcObject[];

        // Without this type hint, this will fail to compile, as expected.
        _.valuesIn<AbcObject>({});
    }

    {
        const result: AbcObject[];

        _.values(object);
    }
}
*/
/**********
 * String *
 **********/
/*
// _.camelCase
{
    {
        const result: string;

        _.camelCase("Foo Bar");
    }
}

// _.capitalize
{
    {
        const result: string;

        _.capitalize("fred");
    }
}

// _.deburr
{
    {
        const result: string;

        _.deburr("déjà vu");
    }
}

// _.endsWith
{
    {
        const result: boolean;

        _.endsWith("abc", "c");
        _.endsWith("abc", "c", 1);
    }
}

// _.escape
{
    {
        const result: string;

        _.escape("fred, barney, & pebbles");
    }
}

// _.escapeRegExp
{
    {
        const result: string;

        _.escapeRegExp("[lodash](https://lodash.com/)");
    }
}

// _.kebabCase
{
    {
        const result: string;

        _.kebabCase("Foo Bar");
    }
}

// _.lowerCase
{
    {
        const result: string;

        _.lowerCase("Foo Bar");
    }
}

// _.lowerFirst
{
    {
        const result: string;

        _.lowerFirst("Foo Bar");
    }
}

// _.pad
{
    {
        const result: string;

        _.pad("abc");
        _.pad("abc", 8);
        _.pad("abc", 8, "_-");
    }
}

// _.padEnd
{
    {
        const result: string;

        _.padEnd("abc");
        _.padEnd("abc", 6);
        _.padEnd("abc", 6, "_-");
    }
}

// _.padStart
{
    {
        const result: string;

        _.padStart("abc");
        _.padStart("abc", 6);
        _.padStart("abc", 6, "_-");
    }
}

// _.parseInt
{
    {
        const result: number;

        _.parseInt("08");
        _.parseInt("08", 10);
    }
}

// _.repeat
{
    {
        const result: string;
        _.repeat("*");
        _.repeat("*", 3);
    }
}

// _.replace
{
    const replacer = (match: string, offset: number, string: string) => "Barney";

    {
        const result: string;

        _.replace("Hi Fred", "Fred", "Barney");
        _.replace("Hi Fred", "Fred", replacer);

        _.replace("Hi Fred", /fred/i, "Barney");
        _.replace("Hi Fred", /fred/i, replacer);

        _.replace("Fred", "Barney");
        _.replace("Fred", replacer);

        _.replace(/fred/i, "Barney");
        _.replace(/fred/i, replacer);
    }
}

// _.snakeCase
{
    {
        const result: string;

        _.snakeCase("Foo Bar");
    }
}

// _.split
{
    {
        const result: string[];

        _.split("a-b-c");
        _.split("a-b-c", "-");
        _.split("a-b-c", "-", 2);
    }

    // $ExpectType string[][]
    _.map(["abc", "def"], _.split);
}

// _.startCase
{
    {
        const result: string;

        _.startCase("--foo-bar");
    }
}

// _.startsWith
{
    {
        const result: boolean;

        _.startsWith("abc", "a");
        _.startsWith("abc", "a", 1);
    }
}

// _.template
{
    interface TemplateExecutor {
        (obj?: object): string;
        source: string;
    }

    const options: {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: lodash.Dictionary<any>;
        interpolate?: RegExp;
        sourceURL?: string;
        variable?: string;
    } = {};

    {
        const result: TemplateExecutor;

        _.template("");
        _.template("", options);
    }
}

// _.toLower
{
    {
        const result: string;

        _.toLower("fred, barney, &amp; pebbles");
    }
}

// _.toUpper
{
    {
        const result: string;

        _.toUpper("fred, barney, &amp; pebbles");
    }
}

// _.trim
{
    {
        const result: string;

        _.trim();
        _.trim("  abc  ");
        _.trim("-_-abc-_-", "_-");
    }
    // $ExpectType string[]
    _.map(["  foo  ", "  bar  "], _.trim);
}

// _.trimEnd
{
    {
        const result: string;

        _.trimEnd();
        _.trimEnd("  abc  ");
        _.trimEnd("-_-abc-_-", "_-");
    }
}

// _.trimStart
{
    {
        const result: string;

        _.trimStart();
        _.trimStart("  abc  ");
        _.trimStart("-_-abc-_-", "_-");
    }
}

// _.truncate
{
    {
        const result: string;

        _.truncate("hi-diddly-ho there, neighborino");
        _.truncate("hi-diddly-ho there, neighborino", { "length": 24, "separator": " " });
        _.truncate("hi-diddly-ho there, neighborino", { "length": 24, "separator": /,? +/ });
        _.truncate("hi-diddly-ho there, neighborino", { "omission": " […]" });
    }
}

// _.unescape
{
    {
        const result: string;

        _.unescape("fred, barney, &amp; pebbles");
    }
}

// _.upperCase
{
    {
        const result: string;

        _.upperCase("fred, barney, &amp; pebbles");
    }
}

// _.upperFirst
{
    {
        const result: string;

        _.upperFirst("fred, barney, &amp; pebbles");
    }
}

// _.words
{
    {
        const result: string[];

        _.words("fred, barney, & pebbles");
        _.words("fred, barney, & pebbles", /[^, ]+/g);
    }

    // $ExpectType string[][]
    _.map(["fred, barney", "pebbles"], _.words);
}
*/
/***********
 * Utility *
 ***********/
/*
// _.attempt
{
    const func: (...args: any[]) => {a: string} = (...args) => ({ a: "" });

    {
        const result: {a: string}|Error;

        _.attempt<{a: string}>(func);
        _.attempt<{a: string}>(func, "foo", "bar", "baz");
    }
}

// _.cond
{
    const pairPred1: (val: string) => boolean = (val) => true;
    const pairPred2: (val: string) => boolean = (val) => false;
    const pairRes1: (val: string) => number = (val) => 1;
    const pairRes2: (val: string) => number = (val) => 2;

    {
        const result: number;

        _.cond([[pairPred1, pairRes1],[pairPred2, pairRes2]])("hello");
    }
}

// _.constant
{
    {
        const result: () => number;
        _.constant<number>(42);
    }

    {
        const result: () => string;
        _.constant<string>("a");
    }

    {
        const result: () => boolean;
        _.constant<boolean>(true);
    }

    {
        const result: () => string[];
        _.constant<string[]>(["a"]);
    }

    {
        const result: () => {a: string};
        _.constant<{a: string}>({a: "a"});
    }
}

// _.defaultTo
{
    {
        const result: number;
        _.defaultTo<number>(42, 42);
        _.defaultTo<number>(undefined, 42);
        _.defaultTo<number>(null, 42);
        _.defaultTo<number>(NaN, 42);
    }

    {
        const result: string;
        _.defaultTo<string>("a", "default");
        _.defaultTo<string>(undefined, "default");
        _.defaultTo<string>(null, "default");
    }

    {
        const result: boolean;
        _.defaultTo<boolean>(true, true);
        _.defaultTo<boolean>(undefined, true);
        _.defaultTo<boolean>(null, true);
    }

    {
        const result: string[];
        _.defaultTo<string[]>(["a"], ["default"]);
        _.defaultTo<string[]>(undefined, ["default"]);
        _.defaultTo<string[]>(null, ["default"]);
    }

    {
        const result: {a: string};
        _.defaultTo<{a: string}>({a: "a"}, {a: "a"});
        _.defaultTo<{a: string}>(undefined, {a: "a"});
        _.defaultTo<{a: string}>(null, {a: "a"});
    }
}

// _.identity
{
    {
        const result: number;

        _.identity(42);
    }

    {
        const result: number[];

        _.identity([42]);
    }

    {
        const result: {a: number};

        _.identity({a: 42});
    }

    {
        const input: { a: number; } | null | undefined = anything;
        _.identity(input); // $ExpectType { a: number; } | null | undefined
        _.identity(); // $ExpectType undefined
    }
}

// _.iteratee
{
    {
        _.iteratee((...args: any[]): AbcObject => anything); // $ExpectType (...args: any[]) => AbcObject
        _.iteratee((a: AbcObject): boolean => anything); // $ExpectType (a: AbcObject) => boolean
        _.iteratee((a: AbcObject | undefined): a is undefined => anything); // $ExpectType (a: AbcObject | undefined) => a is undefined
    }

    {
        const result: (object: any) => AbcObject;

        _.iteratee("");
    }

    {
        const result: (object: any) => boolean;

        _.iteratee({});
    }
}

// _.matches
{
    const source: AbcObject = { a: 1, b: "", c: true };

    {
        const result: (value: any) => boolean;
        _.matches<AbcObject>(source);
    }

    {
        const result: (value: AbcObject) => boolean;
        _.matches<AbcObject, AbcObject>(source);
    }
}

// _.matchesProperty
{
    const path: string | string[] = [];
    const source: AbcObject = { a: 1, b: "", c: true };

    {
        const result: (value: any) => boolean;

        _.matchesProperty<AbcObject>(path, source);
    }

    {
        const result: (value: AbcObject) => boolean;

        _.matchesProperty<AbcObject, AbcObject>(path, source);
    }
}

// _.method
{
    {
        const result: (object: any) => {a: string};

        _.method("a.0");
        _.method("a.0", anything, anything);
        _.method("a.0", anything, anything, anything);

        _.method(["a", 0]);
        _.method(["a", 0], anything);
        _.method(["a", 0], anything, anything);
        _.method(["a", 0], anything, anything, anything);
    }

    {
        const result: (object: {a: string}) => {b: string};

        _.method("a.0");
        _.method("a.0", anything, anything);
        _.method("a.0", anything, anything, anything);

        _.method(["a", 0]);
        _.method(["a", 0], anything);
        _.method(["a", 0], anything, anything);
        _.method(["a", 0], anything, anything, anything);
    }
}

// _.methodOf
{
    type SampleObject = { a: Array<{ b(): AbcObject }> };
    type ResultFn = (path: string | string[]) => AbcObject;

    const object: SampleObject = { a: [] };

    {
        const result: ResultFn;

        _.methodOf(object);
        _.methodOf(object, anything);
        _.methodOf(object, anything, anything);
        _.methodOf(object, anything, anything, anything);
    }
}

// _.mixin
{
    const source: lodash.Dictionary<(...args: any[]) => any> = {};
    const dest: AbcObject = anything;
    const options: {chain?: boolean} = {};

    {
        const result: _.LoDashStatic;

        _.mixin(source);
        _.mixin(source, options);
    }

    {
        const result: AbcObject;

        _.mixin(dest, source);
        _.mixin(dest, source, options);
    }
}

// _.noConflict
{
    {
        const result: typeof _;

        _.noConflict();
    }
}

// _.noop
{
    {
        _.noop(); // $ExpectType void
        _.noop(1); // $ExpectType void
        _.noop("a", 1); // $ExpectType void
        _.noop(true, "a", 1); // $ExpectType void
    }
}

{
    type SampleFunc = (...args: any[]) => any;

    {
        const result: SampleFunc;

        _.nthArg();
        _.nthArg(1);
    }
}

// _.over
{
    {
        const result: (...args: any[]) => number[];

        _.over<number>(Math.max);
        _.over<number>(Math.max, Math.min);
        _.over<number>([Math.max]);
        _.over<number>([Math.max], [Math.min]);
    }
}

// _.overEvery
{
    {
        const result: (...args: number[]) => boolean;

        _.overEvery((number) => true);
        _.overEvery((number) => true, (number) => true);
        _.overEvery([(number) => true]);
        _.overEvery([(number) => true], [(number) => true]);
    }
}

// _.overSome
{
    {
        const result: (...args: number[]) => boolean;

        _.overSome((n: number) => true);
        _.overSome((n: number) => true, (n: number) => true);
        _.overSome([(n: number) => true]);
        _.overSome([(n: number) => true], [(n: number) => true]);
    }
}

// _.property
{
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    {
        const result: (object: SampleObject) => number;

        _.property<SampleObject, number>("a.b[0]");
        _.property<SampleObject, number>(["a", "b", 0]);
    }
}

// _.propertyOf
{
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    const object: SampleObject = { a: { b: [] } };

    {
        const result: (path: string|string[]) => any;

        _.propertyOf({});
        _.propertyOf<SampleObject>(object);
    }
}

// _.range
{
    {
        const result: number[];

        _.range(10);
        _.range(1, 11);
        _.range(0, 30, 5);
    }
    // $ExpectType number[][]
    _.map([5, 5], _.range);
}

// _.rangeRight
{
    {
        const result: number[];

        _.rangeRight(10);
        _.rangeRight(1, 11);
        _.rangeRight(0, 30, 5);
    }

    // $ExpectType number[][]
    _.map([5, 5], _.rangeRight);
}

// _.runInContext
{
    const result: typeof _;
    _.runInContext();
    _.runInContext({});
}

// _.stubArray
{
    {
        const result: any[];

        _.stubArray();
    }
}

// _.stubFalse
{
    {
        const result: boolean;

        _.stubFalse();
    }
}

// _.stubObject
{
    {
        const result: object;

        _.stubObject();
    }
}

// _.stubString
{
    {
        const result: string;

        _.stubString();
    }
}

// _.stubTrue
{
    {
        const result: boolean;

        _.stubTrue();
    }
}

// _.times
{
    const iteratee: (num: number) => AbcObject = (num: number) => ({ a: 1, b: "", c: true });

    {
        const result: number[];

        _.times(42);
    }

    {
        const result: AbcObject[];

        _.times(42, iteratee);
    }
}

// _.toPath
{
   {
       const result: string[];
       _.toPath(true);
       _.toPath(1);
       _.toPath("a");
       _.toPath(["a"]);
       _.toPath({});
   }
}

// _.uniqueId
{
    {
        const result: string;

        _.uniqueId();
        _.uniqueId("");
    }
}

// _.partial & _.partialRight
{
    const func0 = (): number => 42;
    const func1 = (arg1: number): number => arg1 * 2;
    const func2 = (arg1: number, arg2: string): number => arg1 * arg2.length;
    const func3 = (arg1: number, arg2: string, arg3: boolean): number => arg1 * arg2.length + (arg3 ? 1 : 0);
    const func4 = (arg1: number, arg2: string, arg3: boolean, arg4: number): number => arg1 * arg2.length + (arg3 ? 1 : 0) - arg4;

    const res____: () => number;
    const res1___: (arg1: number                                              ) => number;
    const res12__: (arg1: number, arg2: string                                ) => number;
    const res123_: (arg1: number, arg2: string,   arg3: boolean               ) => number;
    const res1234: (arg1: number, arg2: string,   arg3: boolean,  arg4: number) => number;

    //
    // _.partial
    //
    // with arity 0 function
    res____ = _.partial(func0);
    // with arity 1 function
    res____ = _.partial(func1, 42       );
    res1___ = _.partial(func1           );
    // with arity 2 function
    res12__ = _.partial(func2           );
    res_2__ = _.partial(func2, 42       );
    res____ = _.partial(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partial(func3                 );
    res_23_ = _.partial(func3, 42             );
    res__3_ = _.partial(func3, 42, "foo"      );
    res____ = _.partial(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partial(func4                      );
    res_234 = _.partial(func4, 42                  );
    res__34 = _.partial(func4, 42, "foo"           );
    res___4 = _.partial(func4, 42, "foo", true     );
    res____ = _.partial(func4, 42, "foo", true, 100);

    //
    // _.partialRight
    //
    // with arity 0 function
    res____ = _.partialRight(func0);
    // with arity 1 function
    res____ = _.partialRight(func1, 42       );
    res1___ = _.partialRight(func1           );
    // with arity 2 function
    res12__ = _.partialRight(func2           );
    res1___ = _.partialRight(func2,     "foo");
    res____ = _.partialRight(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partialRight(func3                 );
    res12__ = _.partialRight(func3,            true);
    res1___ = _.partialRight(func3,     "foo", true);
    res____ = _.partialRight(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partialRight(func4                      );
    res123_ = _.partialRight(func4,                  100);
    res12__ = _.partialRight(func4,            true, 100);
    res1___ = _.partialRight(func4,     "foo", true, 100);
    res____ = _.partialRight(func4, 42, "foo", true, 100);
}
*/
