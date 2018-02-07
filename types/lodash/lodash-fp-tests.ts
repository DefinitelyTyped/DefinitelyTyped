import _ = require("lodash/fp");

let anything: any;

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
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        _.chunk<AbcObject>(42, array); // $ExpectType AbcObject[][]
        _.chunk<AbcObject>(42, list); // $ExpectType AbcObject[][]
    }
}

// _.compact
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let array2: Array<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;
    let list2: ArrayLike<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;

    _.compact(array); // $ExpectTypeAbcObject[]
    _.compact(list); // $ExpectTypeAbcObject[]
    _.compact(array2); // $ExpectTypeAbcObject[]
    _.compact(list2); // $ExpectTypeAbcObject[]
}

// _.difference
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];

    _.difference(array, array); // $ExpectType AbcObject[]
    _.difference(array)(array); // $ExpectType AbcObject[]
    _.difference(array, list); // $ExpectType AbcObject[]
    _.difference(list, list); // $ExpectType AbcObject[]
    _.difference(list, array); // $ExpectType AbcObject[]
}

// _.differenceBy
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let iteratee = (value: AbcObject) => 1;

    _.differenceBy(iteratee, array, array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee)(array, array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee)(array)(array); // $ExpectType AbcObject[]
    _.differenceBy<AbcObject, AbcObject>(iteratee, array)(list); // $ExpectType AbcObject[]
    _.differenceBy(iteratee, list, array); // $ExpectType AbcObject[]
    _.differenceBy(iteratee, list, list); // $ExpectType AbcObject[]
    _.differenceBy('a', array, array); // $ExpectType AbcObject[]
    _.differenceBy('a', array, list); // $ExpectType AbcObject[]
    _.differenceBy('a', list, array); // $ExpectType AbcObject[]
    _.differenceBy('a', list, list); // $ExpectType AbcObject[]
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
    const t1: T1 = { a: 'a', b: 'b' };
    const t2: T2 = { a: 'a', b: 30 };
    const t3: T3 = { a: 'a', b: true };

    // $ExpectType T1[]
    _.differenceBy('name', [t1], [t2]);
    // $ExpectType T1[]
    _.differenceBy((value: T1 | T2) => 0, [t1], [t2]);
    // $ExpectType T1[]
    _.differenceBy((value: T1 | T2 | T3) => 0, [t1], [t2, t3]);
}

// _.differenceWith
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let comparator = (a: AbcObject, b: AbcObject) => true;

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
    const t1: T1 = { a: 'a', b: 'b' };
    const t2: T2 | undefined = anything;

    _.differenceWith((a: T1, b: T2 | undefined) => true, [t1], [t2]); // $ExpectType T1[]
}

// _.drop
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.drop(42, array); // $ExpectType AbcObject[]
    _.drop(42)(array); // $ExpectType AbcObject[]
    _.drop(42, list); // $ExpectType AbcObject[]
}

// _.dropRight
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.dropRight(42, array); // $ExpectType AbcObject[]
    _.dropRight(42)(array); // $ExpectType AbcObject[]
    _.dropRight(42, list); // $ExpectType AbcObject[]
}

// _.dropRightWhile
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject) => true;

    _.dropRightWhile(predicateFn, array); // $ExpectType AbcObject[]
    _.dropRightWhile(predicateFn)(array); // $ExpectType AbcObject[]
    _.dropRightWhile('', array); // $ExpectType AbcObject[]
    _.dropRightWhile({a: 42}, array); // $ExpectType AbcObject[]
    _.dropRightWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.dropRightWhile('', list); // $ExpectType AbcObject[]
    _.dropRightWhile({a: 42}, list); // $ExpectType AbcObject[]
}

// _.dropWhile
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject) => true;

    _.dropWhile(predicateFn, array); // $ExpectType AbcObject[]
    _.dropWhile(predicateFn)(array); // $ExpectType AbcObject[]
    _.dropWhile('', array); // $ExpectType AbcObject[]
    _.dropWhile({a: 42}, array); // $ExpectType AbcObject[]
    _.dropWhile(predicateFn, list); // $ExpectType AbcObject[]
    _.dropWhile('', list); // $ExpectType AbcObject[]
    _.dropWhile({a: 42}, list); // $ExpectType AbcObject[]
}

// _.fill
{
    let array: number[] = [];
    let list: ArrayLike<number> = [];

    _.fill(0, 10, 42, array); // $ExpectType number[]
    _.fill(0, 10)(42, array); // $ExpectType number[]
    _.fill(0, 10)(42)(array); // $ExpectType number[]
    _.fill(0)(10)(42)(array); // $ExpectType number[]
    _.fill(0, 10, 42, list); // $ExpectType ArrayLike<number>
}

// _.findIndex
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject) => true;
    let fromIndex = 0;

    _.findIndex(predicateFn, array); // $ExpectType number
    _.findIndex(predicateFn)(array); // $ExpectType number
    _.findIndex('', array); // $ExpectType number
    _.findIndex({a: 42}, array); // $ExpectType number
    _.findIndex(predicateFn, list); // $ExpectType number
    _.findIndex('', list); // $ExpectType number
    _.findIndex({a: 42}, list); // $ExpectType number

    _.findIndexFrom(predicateFn, fromIndex, array); // $ExpectType number
    _.findIndexFrom(predicateFn)(fromIndex)(array); // $ExpectType number
    _.findIndexFrom('', fromIndex, array); // $ExpectType number
    _.findIndexFrom({a: 42}, fromIndex, array); // $ExpectType number
    _.findIndexFrom(predicateFn, fromIndex, list); // $ExpectType number
    _.findIndexFrom('', fromIndex, list); // $ExpectType number
    _.findIndexFrom({a: 42}, fromIndex, list); // $ExpectType number
}

// _.findLastIndex
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject) => true;
    let fromIndex = 0;

    _.findLastIndex(predicateFn, array); // $ExpectType number
    _.findLastIndex(predicateFn)(array); // $ExpectType number
    _.findLastIndex('', array); // $ExpectType number
    _.findLastIndex({a: 42}, array); // $ExpectType number
    _.findLastIndex(predicateFn, list); // $ExpectType number
    _.findLastIndex('', list); // $ExpectType number
    _.findLastIndex({a: 42}, list); // $ExpectType number

    _.findLastIndexFrom(predicateFn, fromIndex, array); // $ExpectType number
    _.findLastIndexFrom(predicateFn)(fromIndex)(array); // $ExpectType number
    _.findLastIndexFrom('', fromIndex, array); // $ExpectType number
    _.findLastIndexFrom({a: 42}, fromIndex, array); // $ExpectType number
    _.findLastIndexFrom(predicateFn, fromIndex, list); // $ExpectType number
    _.findLastIndexFrom('', fromIndex, list); // $ExpectType number
    _.findLastIndexFrom({a: 42}, fromIndex, list); // $ExpectType number
}

// _.first
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.first('abc'); // $ExpectType string | undefined
    _.first(array); // $ExpectType AbcObject | undefined
    _.first(list); // $ExpectType AbcObject | undefined
}

// _.flatten
{
    let array: number[][] | null | undefined = anything;
    let list: ArrayLike<number[]> | null | undefined = anything;

    _.flatten('abc'); // $ExpectType string[]
    _.flatten(array); // $ExpectType number[]
    _.flatten(list); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, 2, 3]); // $ExpectType number[]
    _.flatten([1, [2, 3]]); // $ExpectType number[]

    _.flatten({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    _.flatten({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]

    _.unnest('abc'); // $ExpectType string[]
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
    let array: number[][] | null | undefined = anything;
    let list: ArrayLike<number[]> | null | undefined = anything;

    _.flattenDeep('abc'); // $ExpectType string[]
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
    let twoDimensionalArray: Array<[string, string]> | null | undefined = anything;
    let numberTupleArray: Array<[string, number]> | null | undefined = anything;

    _.fromPairs(twoDimensionalArray); // $ExpectType Dictionary<string>
    _.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
}

// _.head
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.head('abc'); // $ExpectType string | undefined
    _.head(array); // $ExpectType AbcObject | undefined
    _.head(list); // $ExpectType AbcObject | undefined
}

// _.indexOf
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let value: AbcObject = { a: 1, b: "", c: true };

    _.indexOf(value, array); // $ExpectType number
    _.indexOf(value)(array); // $ExpectType number
    _.indexOf(value, list); // $ExpectType number
    _.indexOfFrom(value)(42)(array); // $ExpectType number
    _.indexOfFrom(value, 42, list); // $ExpectType number
}

// _.sortedIndexOf
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let value: AbcObject = { a: 1, b: "", c: true };

    _.sortedIndexOf(value, array); // $ExpectType number
    _.sortedIndexOf(value)(array); // $ExpectType number
    _.sortedIndexOf(value, list); // $ExpectType number
}

//_.initial
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.initial(array); // $ExpectType AbcObject[]
    _.initial(list); // $ExpectType AbcObject[]
}

// _.intersection
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;

    _.intersection(array, array); // $ExpectType AbcObject[]
    _.intersection(array)(array); // $ExpectType AbcObject[]
    _.intersection(array, list); // $ExpectType AbcObject[]
    _.intersection(array)(list); // $ExpectType AbcObject[]
    _.intersection(list, array); // $ExpectType AbcObject[]
    _.intersection(list)(array); // $ExpectType AbcObject[]
}

// _.intersectionBy
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;

    _.intersectionBy('a', array, list); // $ExpectType AbcObject[]
    _.intersectionBy<AbcObject, AbcObject>('a')(array, list); // $ExpectType AbcObject[]
    _.intersectionBy<AbcObject, AbcObject>('a')(array)(list); // $ExpectType AbcObject[]
    _.intersectionBy({ a: 42 }, array, list); // $ExpectType AbcObject[]
    _.intersectionBy(['a', 42], array, list); // $ExpectType AbcObject[]
    _.intersectionBy((value: AbcObject) => 0, array, list); // $ExpectType AbcObject[]
}

// _.intersectionWith
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;

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
    const t1: T1 = { a: 'a', b: 'b' };
    const t2: T2 = { a: 'a', b: 1 };

    _.intersectionWith((a: T1, b: T2) => true)([t1])([t2]); // $ExpectType T1[]
}

// _.join
{
    let array = [1, 2];
    let list = {0: 1, 1: 2, length: 2};
    let nilArray: string[] | null | undefined = anything;
    let nilList: ArrayLike<string> | null | undefined = anything;

    {
        let result: string;

        _.join('_', 'abc'); // $ExpectType string
        _.join('_')('abc'); // $ExpectType string
        _.join('_', array); // $ExpectType string
        _.join('_', list); // $ExpectType string
        _.join('_', nilArray); // $ExpectType string
        _.join('_', nilList); // $ExpectType string
    }
}

// _.last
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    _.last('abc'); // $ExpectType string | undefined
    _.last(array); // $ExpectType AbcObject | undefined
    _.last(list); // $ExpectType AbcObject | undefined
}

// _.lastIndexOf
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let value: AbcObject = { a: 1, b: "", c: true };

    _.lastIndexOf(value, array); // $ExpectType number
    _.lastIndexOf(value)(array); // $ExpectType number
    _.lastIndexOf(value, list); // $ExpectType number
    _.lastIndexOfFrom(value, 42, array); // $ExpectType number
    _.lastIndexOfFrom(value, 42)(array); // $ExpectType number
    _.lastIndexOfFrom(value)(42)(array); // $ExpectType number
    _.lastIndexOfFrom(value, 42, list); // $ExpectType number
}
/*
// _.nth
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let value = 0;

    {
        let result: AbcObject | undefined;

        _.nth<AbcObject>(array);

        _.nth<AbcObject>(array, 42);
    }
}

// _.pull
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: AbcObject[];

        _.pull<AbcObject>(array);
        _.pull<AbcObject>(array, value);
        _.pull<AbcObject>(array, value, value);
        _.pull<AbcObject>(array, value, value, value);
    }

    {
        let result: ArrayLike<AbcObject>;

        _.pull<AbcObject>(list);
        _.pull<AbcObject>(list, value);
        _.pull<AbcObject>(list, value, value);
        _.pull<AbcObject>(list, value, value, value);
    }
}

// _.pullAt
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];

    {
        let result: AbcObject[];

        _.pullAt<AbcObject>(array);
        _.pullAt<AbcObject>(array, 1);
        _.pullAt<AbcObject>(array, [2, 3], 1);
        _.pullAt<AbcObject>(array, 4, [2, 3], 1);
    }

    {
        let result: ArrayLike<AbcObject>;

        _.pullAt<AbcObject>(list);
        _.pullAt<AbcObject>(list, 1);
        _.pullAt<AbcObject>(list, [2, 3], 1);
        _.pullAt<AbcObject>(list, 4, [2, 3], 1);
    }
}

// _.pullAll
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;
    let values: ArrayLike<AbcObject> = anything;

    // $ExpectType AbcObject[]
    _.pullAll(array);
    // $ExpectType AbcObject[]
    _.pullAll(array, values);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAll(list);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAll(list, values);
}

// _.pullAllBy
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;
    let values: ArrayLike<AbcObject> = anything;

    // $ExpectType AbcObject[]
    _.pullAllBy(array);
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values);
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values, 'a');
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values, { a: 42 });
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values, ['a', 42]);
    // $ExpectType AbcObject[]
    _.pullAllBy(array, values, (value) => {
        value; // $ExpectType AbcObject
        return [];
    });
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list, values);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list, values, 'a');
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list, values, { a: 42 });
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list, values, ['a', 42]);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllBy(list, values, (value) => {
        value; // $ExpectType AbcObject
        return () => {};
    });
    interface T1 {
        a: string;
        b: string;
    }
    interface T2 {
        a: string;
        b: number;
    }
    const t1: T1 = { a: 'a', b: 'b' };
    const t2: T2 = { a: 'a', b: 1 };
    // $ExpectType T1[]
    _.pullAllBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
}

// _.pullAllWith
{
    let array: AbcObject[] = anything;
    let list: ArrayLike<AbcObject> = anything;
    let values: ArrayLike<AbcObject> = anything;

    // $ExpectType AbcObject[]
    _.pullAllWith(array);
    // $ExpectType AbcObject[]
    _.pullAllWith(array, values);
    // $ExpectType AbcObject[]
    _.pullAllWith(array, values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllWith(list);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllWith(list, values);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAllWith(list, values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    interface T1 {
        a: string;
        b: string;
    }
    interface T2 {
        a: string;
        b: number;
    }
    const t1: T1 = { a: 'a', b: 'b' };
    const t2: T2 = { a: 'a', b: 1 };
    // $ExpectType T1[]
    _.pullAllWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    _([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    _.chain([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
}

// _.remove
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let predicateFn = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;

    {
        let result: AbcObject[];

        _.remove<AbcObject>(array);
        _.remove<AbcObject>(array, predicateFn);
        _.remove<AbcObject>(array, '');
        _.remove(array, {a: 42});

        _.remove<AbcObject>(list);
        _.remove<AbcObject>(list, predicateFn);
        _.remove<AbcObject>(list, '');
        _.remove(list, {a: 42});
    }
}

// _.tail
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.tail<AbcObject>(array);
        _.tail<AbcObject>(list);
    }
}

// _.slice
{
    let array: AbcObject[] | null | undefined = anything;

    {
        let result: AbcObject[];

        _.slice<AbcObject>(array);
        _.slice(array, 42);
        _.slice(array, 42, 42);
    }
}

// _.sortedIndex
{
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: ArrayLike<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        _.sortedIndex<string>('', '');

        _.sortedIndex<SampleType>(array, value);

        _.sortedIndex<SampleType>(list, value);
    }
}

// _.sortedIndexBy
{
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: ArrayLike<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator = (x: string) => 0;
    let arrayIterator = (x: SampleType) => 0;
    let listIterator = (x: SampleType) => 0;

    {
        let result: number;

        _.sortedIndexBy<string>('', '', stringIterator);

        _.sortedIndexBy<SampleType>(array, value, arrayIterator);
        _.sortedIndexBy<SampleType>(array, value, '');
        _.sortedIndexBy<SampleType>(array, value, {a: 42});

        _.sortedIndexBy<SampleType>(list, value, listIterator);
        _.sortedIndexBy<SampleType>(list, value, '');
        _.sortedIndexBy<SampleType>(list, value, {a: 42});
    }
}

// _.sortedLastIndex
{
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: ArrayLike<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        _.sortedLastIndex<string>('', '');

        _.sortedLastIndex<SampleType>(array, value);

        _.sortedLastIndex<SampleType>(list, value);
    }
}

// _.sortedLastIndexBy
{
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: ArrayLike<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator = (x: string) => 0;
    let arrayIterator = (x: SampleType) => 0;
    let listIterator = (x: SampleType) => 0;

    {
        let result: number;

        _.sortedLastIndexBy<string>('', '', stringIterator);

        _.sortedLastIndexBy<SampleType>(array, value, arrayIterator);
        _.sortedLastIndexBy<SampleType>(array, value, '');
        _.sortedLastIndexBy<SampleType>(array, value, {a: 42});

        _.sortedLastIndexBy<SampleType>(list, value, listIterator);
        _.sortedLastIndexBy<SampleType>(list, value, '');
        _.sortedLastIndexBy<SampleType>(list, value, {a: 42});
    }
}

// _.take
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.take<AbcObject>(array);
        _.take<AbcObject>(array, 42);

        _.take<AbcObject>(list);
        _.take<AbcObject>(list, 42);
    }
}

// _.takeRight
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.takeRight<AbcObject>(array);
        _.takeRight<AbcObject>(array, 42);

        _.takeRight<AbcObject>(list);
        _.takeRight<AbcObject>(list, 42);
    }
}

// _.takeRightWhile
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;

    {
        let result: AbcObject[];

        _.takeRightWhile<AbcObject>(array);
        _.takeRightWhile<AbcObject>(array, predicateFn);
        _.takeRightWhile<AbcObject>(array, '');
        _.takeRightWhile(array, {a: 42});

        _.takeRightWhile<AbcObject>(list);
        _.takeRightWhile<AbcObject>(list, predicateFn);
        _.takeRightWhile<AbcObject>(list, '');
        _.takeRightWhile(list, {a: 42});
    }
}

// _.takeWhile
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let predicateFn = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;

    {
        let result: AbcObject[];

        _.takeWhile<AbcObject>(array);
        _.takeWhile<AbcObject>(array, predicateFn);
        _.takeWhile<AbcObject>(array, '');
        _.takeWhile(array, {a: 42});

        _.takeWhile<AbcObject>(list);
        _.takeWhile<AbcObject>(list, predicateFn);
        _.takeWhile<AbcObject>(list, '');
        _.takeWhile(list, {a: 42});
    }
}

// _.union
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.union<AbcObject>();

        _.union<AbcObject>(array);
        _.union<AbcObject>(array, list);
        _.union<AbcObject>(array, list, array);

        _.union<AbcObject>(list);
        _.union<AbcObject>(list, array);
        _.union<AbcObject>(list, array, list);
    }
}

// _.unionBy
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let iteratee: (value: AbcObject) => any = (value: AbcObject) => 1;

    {
        let result: AbcObject[];

        _.unionBy<AbcObject>(array, array);
        _.unionBy<AbcObject>(array, list, array);
        _.unionBy<AbcObject>(array, array, list, array);
        _.unionBy<AbcObject>(array, list, array, list, array);
        _.unionBy<AbcObject>(array, array, list, array, list, array);

        _.unionBy<AbcObject>(array, array, iteratee);
        _.unionBy<AbcObject>(array, list, array, iteratee);
        _.unionBy<AbcObject>(array, array, list, array, iteratee);
        _.unionBy<AbcObject>(array, list, array, list, array, iteratee);
        _.unionBy<AbcObject>(array, array, list, array, list, array, iteratee);

        _.unionBy<AbcObject>(array, array, 'a');
        _.unionBy<AbcObject>(array, list, array, 'a');
        _.unionBy<AbcObject>(array, array, list, array, 'a');
        _.unionBy<AbcObject>(array, list, array, list, array, 'a');
        _.unionBy<AbcObject>(array, array, list, array, list, array, 'a');

        _.unionBy(array, array, {a: 1});
        _.unionBy(array, list, array, {a: 1});
        _.unionBy(array, array, list, array, {a: 1});
        _.unionBy(array, list, array, list, array, {a: 1});
        _.unionBy<AbcObject>(array, list, array, list, array, list, {a: 1});

        _.unionBy<AbcObject>(list, list);
        _.unionBy<AbcObject>(list, array, list);
        _.unionBy<AbcObject>(list, list, array, list);
        _.unionBy<AbcObject>(list, array, list, array, list);
        _.unionBy<AbcObject>(list, list, array, list, array, list);

        _.unionBy<AbcObject>(list, list, iteratee);
        _.unionBy<AbcObject>(list, array, list, iteratee);
        _.unionBy<AbcObject>(list, list, array, list, iteratee);
        _.unionBy<AbcObject>(list, array, list, array, list, iteratee);
        _.unionBy<AbcObject>(list, list, array, list, array, list, iteratee);

        _.unionBy<AbcObject>(list, list, 'a');
        _.unionBy<AbcObject>(list, array, list, 'a');
        _.unionBy<AbcObject>(list, list, array, list, 'a');
        _.unionBy<AbcObject>(list, array, list, array, list, 'a');
        _.unionBy<AbcObject>(list, list, array, list, array, list, 'a');

        _.unionBy(list, list, {a: 1});
        _.unionBy(list, array, list, {a: 1});
        _.unionBy(list, list, array, list, {a: 1});
        _.unionBy(list, array, list, array, list, {a: 1});
        _.unionBy<AbcObject>(list, array, list, array, list, array, {a: 1});
    }
}

// _.uniq
{
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;

    {
        let result: string[];
        _.uniq<string>('abc');
    }

    {
        let result: SampleObject[];

        _.uniq<SampleObject>(array);
        _.uniq<SampleObject>(list);
    }
}

// _.uniqBy
{
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: ArrayLike<SampleObject>) => 0;

    {
        let result: string[];

        _.uniqBy('abc', stringIterator);
    }

    {
        let result: SampleObject[];

        _.uniqBy<SampleObject>(array, listIterator);
        _.uniqBy<SampleObject>(array, 'a');
        _.uniqBy<SampleObject>(array, {a: 42});

        _.uniqBy<SampleObject>(list, listIterator);
        _.uniqBy<SampleObject>(list, 'a');
        _.uniqBy<SampleObject>(list, {a: 42});
    }
}

// _.sortedUniq
{
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;

    {
        let result: string[];
        _.sortedUniq<string>('abc');
    }

    {
        let result: SampleObject[];
        _.sortedUniq<SampleObject>(array);
        _.sortedUniq<SampleObject>(list);
    }
}

// _.sortedUniqBy
{
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: ArrayLike<SampleObject>) => 0;

    {
        let result: string[];

        _.sortedUniqBy('abc', stringIterator);
    }

    {
        let result: SampleObject[];

        _.sortedUniqBy<SampleObject>(array, listIterator);
        _.sortedUniqBy<SampleObject>(array, 'a');
        _.sortedUniqBy<SampleObject>(array, {a: 42});

        _.sortedUniqBy<SampleObject>(list, listIterator);
        _.sortedUniqBy<SampleObject>(list, 'a');
        _.sortedUniqBy<SampleObject>(list, {a: 42});
    }
}

// _.unzip
{
    let array = [['a', 'b'], [1, 2], [true, false]];

    let list: ArrayLike<ArrayLike<string|number|boolean>> = {
        0: {0: 'a', 1: 'b', length: 2},
        1: {0: 1, 1: 2, length: 2},
        2: {0: true, 1: false, length: 2},
        length: 3
    };
    let nilArray: AbcObject[][] | null | undefined = anything;
    let nilList: ArrayLike<ArrayLike<AbcObject>> | null | undefined = anything;

    {
        let result: AbcObject[][];

        _.unzip(nilArray);
        _.unzip(nilList);
    }

    {
        let result: Array<Array<string|number|boolean>>;

        _.unzip<string|number|boolean>(array);
        _.unzip<string|number|boolean>(list);
    }
}

// _.unzipWith
{
    let testUnzipWithArray: Array<number[]|ArrayLike<number>> | null | undefined = anything;
    let testUnzipWithList: ArrayLike<number[]|ArrayLike<number>> | null | undefined = anything;

    {
        _.unzipWith(testUnzipWithArray); // $ExpectType number[][]
        _.unzipWith(testUnzipWithList); // $ExpectType number[][]
        _(testUnzipWithArray).unzipWith(); // $ExpectType LoDashImplicitWrapper<number[][]>
        _(testUnzipWithList).unzipWith(); // $ExpectType LoDashImplicitWrapper<number[][]>
        _.chain(testUnzipWithArray).unzipWith(); // $ExpectType LoDashExplicitWrapper<number[][]>
        _.chain(testUnzipWithList).unzipWith(); // $ExpectType LoDashExplicitWrapper<number[][]>
    }

    {
        let result: AbcObject[];
        _.unzipWith(testUnzipWithArray, (...group) => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        });
        _.unzipWith(testUnzipWithArray, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        });
        _.unzipWith(testUnzipWithList, (...group) => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        });
        _.unzipWith(testUnzipWithList, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        });
    }
}

// _.without
{
    let array: number[] | null | undefined = anything;
    let list: ArrayLike<number> | null | undefined = anything;

    {
        let result: number[];

        _.without<number>(array);
        _.without<number>(array, 1);
        _.without<number>(array, 1, 2);
        _.without<number>(array, 1, 2, 3);

        _.without<number>(list);
        _.without<number>(list, 1);
        _.without<number>(list, 1, 2);
        _.without<number>(list, 1, 2, 3);
    }
}

// _.xor
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.xor<AbcObject>();

        _.xor<AbcObject>(array);
        _.xor<AbcObject>(array, list);
        _.xor<AbcObject>(array, list, array);

        _.xor<AbcObject>(list);
        _.xor<AbcObject>(list, array);
        _.xor<AbcObject>(list, array, list);
    }
}

// _.zip
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;

    {
        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(array);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(array, list);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(array, list, array);

        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(list);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(list, array);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip<AbcObject>(list, array, list);

        // $ExpectType (AbcObject | undefined)[][]
        _.zip(list, array, list, array, list, array);
    }

    {
        _.zip([1, 2], [3, 4]); // $ExpectType [number | undefined, number | undefined][]
        _.zip([1, 2], ["a", "b"]); // $ExpectType [number | undefined, string | undefined][]
        _.zip([1, 2], ["a", "b"], [true, false]); // $ExpectType [number | undefined, string | undefined, boolean | undefined][]
    }
}

// _.zipObject
{
    const zipObject_.zipObject(['a', 'b'], [1, 2]);
    const zipObjectDeep_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);

    let arrayOfKeys: string[] = [];
    let arrayOfValues: number[] = [];

    let listOfKeys: ArrayLike<string> = [];
    let listOfValues: ArrayLike<number> = [];

    {
        let result: _.Dictionary<void>;

        _.zipObject(arrayOfKeys);
        _.zipObject(listOfKeys);
    }

    {
        let result: _.Dictionary<number>;

        _.zipObject(arrayOfKeys, arrayOfValues);
        _.zipObject(arrayOfKeys, listOfValues);
        _.zipObject(listOfKeys, listOfValues);
        _.zipObject(listOfKeys, arrayOfValues);

        _.zipObject(arrayOfKeys, arrayOfValues);
        _.zipObject(arrayOfKeys, listOfValues);
        _.zipObject(listOfKeys, listOfValues);
        _.zipObject(listOfKeys, arrayOfValues);
    }

    {
        let result: _.Dictionary<any>;

        _.zipObject(arrayOfKeys);
        _.zipObjectDeep(arrayOfKeys);
        _.zipObject(arrayOfKeys, arrayOfValues);
        _.zipObjectDeep(arrayOfKeys, arrayOfValues);
        _.zipObject(arrayOfKeys, listOfValues);
        _.zipObjectDeep(arrayOfKeys, listOfValues);

        _.zipObject(listOfKeys);
        _.zipObjectDeep(listOfKeys);
        _.zipObject(listOfKeys, listOfValues);
        _.zipObjectDeep(listOfKeys, listOfValues);
        _.zipObject(listOfKeys, arrayOfValues);
        _.zipObjectDeep(listOfKeys, arrayOfValues);
    }
}

// _.zipWith
{
    {
        let result: number[];

        _.zipWith([1, 2], (value1) => {
            value1; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], (value1, value2) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], [1, 2], (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5, value6) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            value6; // $ExpectType number
            return 1;
        });
        _.zipWith([1, 2], [1, 2], [1, 2], (...group: number[]) => 1);
        _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
            group; // $ExpectType number[]
            return 1;
        });

        let mat = [[1, 2], [1, 2], [1, 2]];
        _.zipWith(...mat, (...group: number[]) => 1);
    }
}
*/

/*********
 * Chain *
 *********/
/*
// _.tap
{
    {
        let interceptor = (value: string) => {};
        let result: string;

        _.tap('', interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.tap([''], interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        _.tap({a: ''}, interceptor);
    }
}

// _.thru
{
    type Interceptor<T> = (value: T) => T;

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: number;

        _.thru<number, number>(1, interceptor);
    }
}
*/
/**************
 * Collection *
 **************/
/*
// _.at
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let dictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        _.at<AbcObject>(array, 0, '1', [2], ['3'], [4, '5']);
        _.at<AbcObject>(list, 0, '1', [2], ['3'], [4, '5']);
        _.at<AbcObject>(dictionary, 0, '1', [2], ['3'], [4, '5']);
    }
}

// _.countBy
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => any = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;
    let numericDictionaryIterator: (value: AbcObject, key: number, collection: _.NumericDictionary<AbcObject>) => any = (value: AbcObject, key: number, collection: _.NumericDictionary<AbcObject>) => 1;

    {
        let result: _.Dictionary<number>;

        _.countBy<string>('');
        _.countBy<string>('', stringIterator);

        _.countBy<AbcObject>(array);
        _.countBy<AbcObject>(array, listIterator);
        _.countBy<AbcObject>(array, '');
        _.countBy(array, {a: 42});
        _.countBy<AbcObject>(array, {a: 42});

        _.countBy<AbcObject>(list);
        _.countBy<AbcObject>(list, listIterator);
        _.countBy<AbcObject>(list, '');
        _.countBy(list, {a: 42});
        _.countBy<AbcObject>(list, {a: 42});

        _.countBy<AbcObject>(dictionary);
        _.countBy(dictionary, dictionaryIterator);
        _.countBy<AbcObject>(dictionary, '');
        _.countBy(dictionary, {a: 42});
        _.countBy<AbcObject>(dictionary, {a: 42});

        _.countBy<AbcObject>(numericDictionary);
        _.countBy<AbcObject>(numericDictionary, numericDictionaryIterator);
        _.countBy<AbcObject>(numericDictionary, '');
        _.countBy(numericDictionary, {a: 42});
        _.countBy<AbcObject>(numericDictionary, {a: 42});
    }
}

// _.each
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = anything;
    let nilList: ArrayLike<AbcObject> | null | undefined = anything;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => any = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        _.each('', stringIterator);
    }

    {
        let result: string | null | undefined;

        _.each('' as (string | null | undefined), stringIterator);
    }

    {
        let result: AbcObject[];

        _.each(array, listIterator);
    }

    {
        let result: AbcObject[] | null | undefined;

        _.each(nilArray, listIterator);
    }

    {
        let result: ArrayLike<AbcObject>;

        _.each(list, listIterator);
    }

    {
        let result: ArrayLike<AbcObject> | null | undefined;

        _.each(nilList, listIterator);
    }

    {
        let result: _.Dictionary<AbcObject | null | undefined>;

        _.each(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        _.each(nilDictionary, dictionaryIterator);
    }
}

// _.eachRight
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = anything;
    let nilList: ArrayLike<AbcObject> | null | undefined = anything;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => any = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        _.eachRight('', stringIterator);
    }

    {
        let result: string | null | undefined;

        _.eachRight('' as (string | null | undefined), stringIterator);
    }

    {
        let result: AbcObject[];

        _.eachRight(array, listIterator);
    }

    {
        let result: AbcObject[] | null | undefined;

        _.eachRight(nilArray, listIterator);
    }

    {
        let result: ArrayLike<AbcObject>;

        _.eachRight(list, listIterator);
    }

    {
        let result: ArrayLike<AbcObject> | null | undefined;

        _.eachRight(nilList, listIterator);
    }

    {
        let result: _.Dictionary<AbcObject | null | undefined>;

        _.eachRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        _.eachRight(nilDictionary, dictionaryIterator);
    }
}

// _.every
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: ArrayLike<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;

    {
        let result: boolean;

        _.every<SampleObject>(array);
        _.every<SampleObject>(array, listIterator);
        _.every<SampleObject>(array, 'a');
        _.every<SampleObject>(array, ['a', 42]);
        _.every<SampleObject>(array, {a: 42});

        _.every<SampleObject>(list);
        _.every<SampleObject>(list, listIterator);
        _.every<SampleObject>(list, 'a');
        _.every<SampleObject>(list, ['a', 42]);
        _.every<SampleObject>(list, {a: 42});

        _.every<SampleObject>(dictionary);
        _.every(dictionary, dictionaryIterator);
        _.every<SampleObject>(dictionary, 'a');
        _.every<SampleObject>(dictionary, ['a', 42]);
        _.every<SampleObject>(dictionary, {a: 42});

        _.every<SampleObject>(numericDictionary);
        _.every<SampleObject>(numericDictionary, numericDictionaryIterator);
        _.every<SampleObject>(numericDictionary, 'a');
        _.every<SampleObject>(numericDictionary, ['a', 42]);
        _.every<SampleObject>(numericDictionary, {a: 42});
    }
}

// _.filter
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => true;
    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    {
        let result: string[];

        _.filter('', stringIterator);
    }

    {
        let result: AbcObject[];

        _.filter<AbcObject>(array, listIterator);
        _.filter<AbcObject>(array, '');
        _.filter<AbcObject>(array, {a: 42});
        _.filter<AbcObject>(array, ["a", 42]);

        _.filter<AbcObject>(list, listIterator);
        _.filter<AbcObject>(list, '');
        _.filter<AbcObject>(list, {a: 42});
        _.filter<AbcObject>(list, ["a", 42]);

        _.filter(dictionary, dictionaryIterator);
        _.filter(dictionary, '');
        _.filter(dictionary, {a: 42});
        _.filter(dictionary, ["a", 42]);
    }
}

// _.find
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    let result: AbcObject | undefined;

    _.find(array);
    _.find<AbcObject>(array);
    _.find<AbcObject>(array, listIterator);
    _.find<AbcObject>(array, listIterator, 1);
    _.find<AbcObject>(array, '');
    _.find<AbcObject>(array, '', 1);
    _.find<AbcObject>(array, {a: 42});
    _.find<AbcObject>(array, {a: 42}, 1);
    _.find(array, ['a', 5]);
    _.find(array, ['a', 5], 1);

    _.find(list);
    _.find<AbcObject>(list);
    _.find<AbcObject>(list, listIterator);
    _.find<AbcObject>(list, listIterator, 1);
    _.find<AbcObject>(list, '');
    _.find<AbcObject>(list, '', 1);
    _.find<AbcObject>(list, {a: 42});
    _.find<AbcObject>(list, {a: 42}, 1);
    _.find(list, ['a', 5]);
    _.find(list, ['a', 5], 1);

    _.find(dictionary);
    _.find(dictionary);
    _.find(dictionary, dictionaryIterator);
    _.find(dictionary, dictionaryIterator, 1);
    _.find(dictionary, '');
    _.find(dictionary, '', 1);
    _.find(dictionary, {a: 42});
    _.find(dictionary, {a: 42}, 1);
    _.find(dictionary, ['a', 5]);
    _.find(dictionary, ['a', 5], 1);
    _.find([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
}

// _.findLast
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    let result: AbcObject | undefined;

    _.findLast(array);
    _.findLast<AbcObject>(array);
    _.findLast<AbcObject>(array, listIterator);
    _.findLast<AbcObject>(array, listIterator, 1);
    _.findLast<AbcObject>(array, '');
    _.findLast<AbcObject>(array, '', 1);
    _.findLast<AbcObject>(array, {a: 42});
    _.findLast<AbcObject>(array, {a: 42}, 1);
    _.findLast(array, ['a', 5]);
    _.findLast(array, ['a', 5], 1);

    _.findLast(list);
    _.findLast<AbcObject>(list);
    _.findLast<AbcObject>(list, listIterator);
    _.findLast<AbcObject>(list, listIterator, 1);
    _.findLast<AbcObject>(list, '');
    _.findLast<AbcObject>(list, '', 1);
    _.findLast<AbcObject>(list, {a: 42});
    _.findLast<AbcObject>(list, {a: 42}, 1);
    _.findLast(list, ['a', 5]);
    _.findLast(list, ['a', 5], 1);

    _.findLast(dictionary);
    _.findLast(dictionary);
    _.findLast(dictionary, dictionaryIterator);
    _.findLast(dictionary, dictionaryIterator, 1);
    _.findLast(dictionary, '');
    _.findLast(dictionary, '', 1);
    _.findLast(dictionary, {a: 42});
    _.findLast(dictionary, {a: 42}, 1);
    _.findLast(dictionary, ['a', 5]);
    _.findLast(dictionary, ['a', 5], 1);
    _.findLast([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
}

// _.flatMap
{
    let numArray: Array<number|number[]> | null | undefined = anything;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let obj: any = {};
    let numList: ArrayLike<number|number[]> | null | undefined = obj;
    let objList: ArrayLike<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = obj;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = obj;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: ArrayLike<string>) => string|string[] = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: ArrayLike<number|number[]>) => number|number[] = (a, b, c) => 1;

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    {
        let result: string[];

        _.flatMap<string>('abc');
        _.flatMap('abc');

        _.flatMap<string, string>('abc', stringIterator);
        _.flatMap('abc', stringIterator);
    }

    {
        let result: number[];

        _.flatMap(numArray);
        _.flatMap<number>(numArray);

        _.flatMap(numArray, listIterator);
        _.flatMap<number|number[], number>(numArray, listIterator);

        _.flatMap(objArray, 'a');

        _.flatMap(numList);
        _.flatMap<number>(numList);

        _.flatMap(numList, listIterator);
        _.flatMap<number|number[], number>(numList, listIterator);

        _.flatMap(objList, 'a');

        _.flatMap(numDictionary);
        _.flatMap<number>(numDictionary);

        _.flatMap(numDictionary, dictionaryIterator);

        _.flatMap(objDictionary, 'a');

        _.flatMap(numNumericDictionary);
        _.flatMap<number>(numNumericDictionary);

        _.flatMap(numNumericDictionary, numericDictionaryIterator);
        _.flatMap<number|number[], number>(numNumericDictionary, numericDictionaryIterator);

        _.flatMap(objNumericDictionary, 'a');
    }

    {
        let result: boolean[];

        _.flatMap(objArray, ['a', 42]);
        _.flatMap(objArray, {'a': 42});

        _.flatMap(objList, ['a', 42]);
        _.flatMap(objList, {'a': 42});

        _.flatMap(objDictionary, ['a', 42]);
        _.flatMap(objDictionary, {'a': 42});

        _.flatMap(objNumericDictionary, ['a', 42]);
        _.flatMap(objNumericDictionary, {'a': 42});
    }
    {
        interface SampleObject {
            bar: number;
            foo: string[];
        }
        const obj: SampleObject = {
            bar: 1,
            foo: [''],
        };

        const result1: Array<string | number> = _.flatMap(obj);
    }
}

// _.flatMapDeep
{
    let numArray: Array<number|number[]> | null | undefined = anything;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numList: ArrayLike<number|number[]> | null | undefined = anything;
    let objList: ArrayLike<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: ArrayLike<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => ['a', 'b', 'c'];

    let listIterator: (value: number|number[], index: number, collection: ArrayLike<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) =>_.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        _.flatMapDeep('abc');

        _.flatMapDeep('abc', stringIterator);
    }

    {
        let result: number[];

        _.flatMapDeep<number>(numArray);

        _.flatMapDeep(numArray, listIterator);

        _.flatMapDeep(objArray, 'a');

        _.flatMapDeep<number>(numList);

        _.flatMapDeep(numList, listIterator);

        _.flatMapDeep(objList, 'a');

        _.flatMapDeep<number>(numDictionary);

        _.flatMapDeep(numDictionary, dictionaryIterator);

        _.flatMapDeep(objDictionary, 'a');

        _.flatMapDeep<number>(numNumericDictionary);

        _.flatMapDeep(numNumericDictionary, numericDictionaryIterator);

        _.flatMapDeep(objNumericDictionary, 'a');
    }

    {
        let result: boolean[];

        _.flatMapDeep(objArray, ['a', 42]);
        _.flatMapDeep(objArray, {'a': 42});

        _.flatMapDeep(objList, ['a', 42]);
        _.flatMapDeep(objList, {'a': 42});

        _.flatMapDeep(objDictionary, ['a', 42]);
        _.flatMapDeep(objDictionary, {'a': 42});

        _.flatMapDeep(objNumericDictionary, ['a', 42]);
        _.flatMapDeep(objNumericDictionary, {'a': 42});
    }
}

// _.flatMapDepth
{
    let numArray: Array<number|number[]> | null | undefined = anything;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numList: ArrayLike<number|number[]> | null | undefined = anything;
    let objList: ArrayLike<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: ArrayLike<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: ArrayLike<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) =>[ 1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        _.flatMapDepth('abc');

        _.flatMapDepth('abc', stringIterator, 1);
    }

    {
        let result: number[];

        _.flatMapDepth<number>(numArray);

        _.flatMapDepth(numArray, listIterator, 1);

        _.flatMapDepth(objArray, 'a');

        _.flatMapDepth<number>(numList);

        _.flatMapDepth(numList, listIterator, 1);

        _.flatMapDepth(objList, 'a', 1);

        _.flatMapDepth<number>(numDictionary);

        _.flatMapDepth(numDictionary, dictionaryIterator, 1);

        _.flatMapDepth(objDictionary, 'a', 1);

        _.flatMapDepth<number>(numNumericDictionary);

        _.flatMapDepth(numNumericDictionary, numericDictionaryIterator, 1);

        _.flatMapDepth(objNumericDictionary, 'a', 1);
    }

    {
        let result: boolean[];

        _.flatMapDepth(objArray, ['a', 42], 1);
        _.flatMapDepth(objArray, {'a': 42}, 1);

        _.flatMapDepth(objList, ['a', 42], 1);
        _.flatMapDepth(objList, {'a': 42}, 1);

        _.flatMapDepth(objDictionary, ['a', 42], 1);
        _.flatMapDepth(objDictionary, {'a': 42}, 1);

        _.flatMapDepth(objNumericDictionary, ['a', 42], 1);
        _.flatMapDepth(objNumericDictionary, {'a': 42}, 1);
    }
}

// _.forEach
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = anything;
    let nilList: ArrayLike<AbcObject> | null | undefined = anything;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator: (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => any = (value, index, collection) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value, key, collection) => 1;
    let objectIterator: (value: number | string | boolean, key: string, collection: AbcObject) => any = (value, key, collection) => 1;

    {
        let result: string;

        _.forEach('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        _.forEach('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: AbcObject[];
        _.forEach(array, (value, index, collection: ArrayLike<AbcObject>) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
        });
        _.forEach(array, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: AbcObject[] | null | undefined;

        _.forEach(array, (value, index, collection: ArrayLike<AbcObject>) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
        });
        _.forEach(nilArray, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: ArrayLike<AbcObject>;

        _.forEach(list, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: ArrayLike<AbcObject> | null | undefined;

        _.forEach(nilList, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject>;

        _.forEach(dictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        _.forEach(nilDictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let sample1: AbcObject = anything;
        sample1 = _.forEach(sample1, objectIterator);

        let sample2: AbcObject | null | undefined = anything;
        sample2 = _.forEach(sample2, objectIterator);
    }
}

// _.forEachRight
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = anything;
    let nilList: ArrayLike<AbcObject> | null | undefined = anything;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator: (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => any = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        _.forEachRight('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        _.forEachRight('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: AbcObject[];

        _.forEachRight(array, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: AbcObject[] | null | undefined;

        _.forEachRight(nilArray, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: ArrayLike<AbcObject>;

        _.forEachRight(list, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: ArrayLike<AbcObject> | null | undefined;

        _.forEachRight(nilList, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject>;

        _.forEachRight(dictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        _.forEachRight(nilDictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }
}

// _.groupBy
{
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] | null | undefined = anything;
    let list: ArrayLike<SampleType> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => 0;
    let listIterator = (value: SampleType, index: number, collection: ArrayLike<SampleType>) => 0;
    let dictionaryIterator = (value: SampleType, key: string, collection: _.Dictionary<SampleType>) => 0;

    {
        let result: _.Dictionary<string[]>;

        _.groupBy('');
        _.groupBy('', stringIterator);
    }

    {
        let result: _.Dictionary<SampleType[]>;

        _.groupBy<SampleType>(array);
        _.groupBy<SampleType>(array, listIterator);
        _.groupBy<SampleType>(array, '');
        _.groupBy<SampleType>(array, {a: 42});

        _.groupBy<SampleType>(list);
        _.groupBy<SampleType>(list, listIterator);
        _.groupBy<SampleType>(list, '');
        _.groupBy<SampleType>(list, {a: 42});

        _.groupBy(dictionary);
        _.groupBy(dictionary, dictionaryIterator);
        _.groupBy(dictionary, '');
        _.groupBy(dictionary, {a: 42});
    }
}

// _.includes
{
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = anything;
    let list: ArrayLike<SampleType> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let target: SampleType = { a: "", b: 1, c: true };

    {
        let result: boolean;

        _.includes<SampleType>(array, target);
        _.includes<SampleType>(array, target, 42);

        _.includes<SampleType>(list, target);
        _.includes<SampleType>(list, target, 42);

        _.includes<SampleType>(dictionary, target);
        _.includes<SampleType>(dictionary, target, 42);
    }
}

// _.keyBy
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let stringIterator = (value: string, index: number, collection: string) => "a";
    let listIterator = (value: SampleObject, index: number, collection: ArrayLike<SampleObject>) => 1;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => Symbol.name;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => "a";

    {
        let result: _.Dictionary<string>;

        _.keyBy('abcd');
        _.keyBy('abcd', stringIterator);
    }

    {
        let result: _.Dictionary<SampleObject>;

        _.keyBy<SampleObject>(array);
        _.keyBy<SampleObject>(array, listIterator);
        _.keyBy<SampleObject>(array, 'a');
        _.keyBy<SampleObject>(array, {a: 42});

        _.keyBy<SampleObject>(list);
        _.keyBy<SampleObject>(list, listIterator);
        _.keyBy<SampleObject>(list, 'a');
        _.keyBy<SampleObject>(list, {a: 42});

        _.keyBy<SampleObject>(numericDictionary);
        _.keyBy<SampleObject>(numericDictionary, numericDictionaryIterator);
        _.keyBy<SampleObject>(numericDictionary, 'a');
        _.keyBy<SampleObject>(numericDictionary, {a: 42});

        _.keyBy(dictionary);
        _.keyBy(dictionary, dictionaryIterator);
        _.keyBy(dictionary, 'a');
        _.keyBy(dictionary, {a: 42});
    }
}

//_.invoke
{
    let boolArray: boolean[] = [true, false];

    let nestedDict: _.Dictionary<number[]> = {
        a: [0, 1, 2]
    }

    let numDict: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }

    let result: string;

    _.invoke(boolArray, "[1]");
    _.invoke(boolArray, "[1]", 2);
    _.invoke(boolArray, [1, "toString"]);
    _.invoke(boolArray, [1, "toString"], 2);

    _.invoke(boolArray, "[1]");
    _.invoke(boolArray, "[1]", 2);
    _.invoke(boolArray, [1, "toString"]);
    _.invoke(boolArray, [1, "toString"], 2);

    _.invoke(numDict, "a.toString");
    _.invoke(numDict, "a.toString", 2);
    _.invoke(numDict, ["a", "toString"]);
    _.invoke(numDict, ["a", "toString"], 2);

    _.invoke(numDict, "a.toString");
    _.invoke(numDict, "a.toString", 2);
    _.invoke(numDict, ["a", "toString"]);
    _.invoke(numDict, ["a", "toString"], 2);

    _.invoke(nestedDict, ["a[0].toString"]);
    _.invoke(nestedDict, ["a[0].toString"], 2);
    _.invoke(nestedDict, ["a", 0, "toString"]);
    _.invoke(nestedDict, ["a", 0, "toString"], 2);

    _.invoke(nestedDict, ["a[0].toString"]);
    _.invoke(nestedDict, ["a[0].toString"], 2);
    _.invoke(nestedDict, ["a", 0, "toString"]);
    _.invoke(nestedDict, ["a", 0, "toString"], 2);
}

//_.invokeMap
{
    let numArray: number[] | null | undefined = anything;
    let obj: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    let numDict: _.Dictionary<number> | null | undefined = anything;

    let result: string[];
    _.invokeMap(numArray, 'toString');
    _.invokeMap(numArray, 'toString', 2);

    _.invokeMap(numArray, Number.prototype.toString);
    _.invokeMap(numArray, Number.prototype.toString, 2);

    _.invokeMap(numDict, 'toString');
    _.invokeMap(numDict, 'toString', 2);

    _.invokeMap(numDict, Number.prototype.toString);
    _.invokeMap(numDict, Number.prototype.toString, 2);
}

// _.map
{
    let array: number[] | null | undefined = anything;
    let list: ArrayLike<number> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator: (value: number, index: number, collection: ArrayLike<number>) => AbcObject = (value: number, index: number, collection: ArrayLike<number>) => ({ a: 1, b: "", c: true });
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => AbcObject = (value: number, key: string, collection: _.Dictionary<number>) => ({ a: 1, b: "", c: true });

    {
        _.map(array);  // $ExpectType number[]
        _.map(array, listIterator);  // $ExpectType AbcObject[]

        _.map(list);  // $ExpectType number[]
        _.map(list, listIterator);  // $ExpectType AbcObject[]

        _.map(dictionary);  // $ExpectType number[]
        _.map(dictionary, dictionaryIterator);  // $ExpectType AbcObject[]

        // _.matches iteratee shorthand.
        _.map(array, {});  // $ExpectType boolean[]
        _.map(list, {});  // $ExpectType boolean[]
        _.map(dictionary, {});  // $ExpectType boolean[]

        // $ExpectType number[]
        _.map(['a', 'b', 'c'], (
            v,  // $ExpectType string
            k  // $ExpectType number
          ) => k);
    }
}

// _.partition
{
    {
        let result: any[][];

        _.partition(anything, (n) => {
            n; // $ExpectType any
            return n < 'c';
        });
    }

    {
        let result: string[][];

        _.partition('abcd', (n) => {
            n; // $ExpectType string
            return n < 'c';
        });
        _.partition(['a', 'b', 'c', 'd'], (n) => {
            n; // $ExpectType string
            return n < 'c';
        });
    }

    {
        let result: number[][];

        _.partition([1, 2, 3, 4], (n) => n < 3);
        _.partition({0: 1, 1: 2, 2: 3, 3: 4, length: 4}, (n) => n < 3);
        _.partition({a: 1, b: 2, c: 3, d: 4}, (n) => {
            n; // $ExpectType number
            return n < 3;
        });
    }

    {
        let result: Array<Array<{ a: number }>>;

        _.partition([{a: 1}, {a: 2}], {a: 2});
        _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, {a: 2});
        _.partition({0: {a: 1}, 1: {a: 2}}, {a: 2});
        _.partition([{a: 1}, {a: 2}], 'a');
        _.partition([{a: 1}, {a: 2}], ['a', 2]);
        _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, 'a');
        _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, ['a', 2]);
        _.partition({0: {a: 1}, 1: {a: 2}}, 'a');
        _.partition({0: {a: 1}, 1: {a: 2}}, ['a', 2]);
    }

    {
        _.partition(null, 'a');
    }
}

{
    interface ABC {
        [key: string]: number;
        a: number;
        b: number;
        c: number;
    }

    // $ExpectType number | undefined
    _.reduce([1, 2, 3], (sum: number, num: number) => sum + num);
    // $ExpectType number | undefined
    _.reduce(null, (sum: number, num: number) => sum + num);

    // $ExpectType ABC
    _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, (r: ABC, num: number, key: string) => {
        r[key] = num * 3;
        return r;
    // tslint:disable-next-line:no-object-literal-type-assertion
    }, {} as ABC);

    // $ExpectType number[]
    _.reduceRight([[0, 1], [2, 3], [4, 5]], (a: number[], b: number[]) => a.concat(b), []);
}

// _.reject
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => true;
    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    {
        let result: string[];

        _.reject('', stringIterator);
    }

    {
        let result: AbcObject[];

        _.reject<AbcObject>(array, listIterator);
        _.reject<AbcObject>(array, '');
        _.reject(array, {a: 42});

        _.reject<AbcObject>(list, listIterator);
        _.reject<AbcObject>(list, '');
        _.reject(list, {a: 42});

        _.reject(dictionary, dictionaryIterator);
        _.reject(dictionary, '');
        _.reject(dictionary, {a: 42});
    }
}

// _.sample
{
    let array: string[] | null | undefined = anything;
    let list: ArrayLike<string> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string>  | null | undefined= obj;

    {
        let result: string | undefined;

        _.sample('abc');
        _.sample(array);
        _.sample(list);
        _.sample(dictionary);
        _.sample(numericDictionary);
        _.sample({a: 'foo'});
        _.sample<string>({a: 'foo'});

        _('abc').sample();
        _(array).sample();
        _(list).sample<string>();
        _(dictionary).sample<string>();
        _(numericDictionary).sample<string>();
        _({a: 'foo'}).sample<string>();
    }
}

// _.sampleSize
{
    let array: string[] | null | undefined = anything;
    let list: ArrayLike<string> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string> | null | undefined = obj;

    {
        let result: string[];

        _.sampleSize('abc');
        _.sampleSize('abc', 42);
        _.sampleSize(array);
        _.sampleSize(array, 42);
        _.sampleSize(list);
        _.sampleSize(list, 42);
        _.sampleSize(dictionary);
        _.sampleSize(dictionary, 42);
        _.sampleSize(numericDictionary);
        _.sampleSize(numericDictionary, 42);
        _.sampleSize({a: 'foo'});
        _.sampleSize({a: 'foo'}, 42);
        _.sampleSize<string>({a: 'foo'});
        _.sampleSize<string>({a: 'foo'}, 42);
    }
}

// _.shuffle
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    {
        let result: string[];

        _.shuffle('abc');
    }

    {
        let result: AbcObject[];

        _.shuffle<AbcObject>(array);
        _.shuffle<AbcObject>(list);
        _.shuffle(dictionary);
    }
}

// _.size
{
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = anything;
    let list: ArrayLike<SampleType> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    {
        let result: number;

        _.size(array);
        _.size(list);
        _.size(dictionary);
        _.size('');
    }
}

// _.some
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = anything;
    let list: ArrayLike<SampleObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;
    let sampleObject: SampleObject | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: ArrayLike<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;
    let objectIterator = (value: any, key: string, collection: any) => true;

    {
        let result: boolean;

        _.some<SampleObject>(array);
        _.some<SampleObject>(array, listIterator);
        _.some<SampleObject>(array, 'a');
        _.some<SampleObject>(array, ['a', 42]);
        _.some<SampleObject>(array, {a: 42});

        _.some<SampleObject>(list);
        _.some<SampleObject>(list, listIterator);
        _.some<SampleObject>(list, 'a');
        _.some<SampleObject>(list, ['a', 42]);
        _.some<SampleObject>(list, {a: 42});

        _.some<SampleObject>(dictionary);
        _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        _.some(dictionary, (value, key, collection) => {
            value; // $ExpectType SampleObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
            return true;
        });
        _.some<SampleObject>(dictionary, 'a');
        _.some<SampleObject>(dictionary, ['a', 42]);
        _.some<SampleObject>(dictionary, {a: 42});

        _.some<SampleObject>(numericDictionary);
        _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        _.some<SampleObject>(numericDictionary, 'a');
        _.some<SampleObject>(numericDictionary, ['a', 42]);
        _.some<SampleObject>(numericDictionary, {a: 42});

        _.some(sampleObject);
        _.some(sampleObject, objectIterator);
        _.some(sampleObject, 'a');
        _.some(sampleObject, ['a', 42]);
        _.some<{a: number}>(sampleObject, {a: 42});
    }

    _.some((n: number) => true, [1, 2]); // $ExpectType boolean
    _.some((n: number) => true)([1, 2]); // $ExpectType boolean
    _.some()((n: number) => true)()([1, 2]); // $ExpectType boolean
}

// _.sortBy
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => 0;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 0;

    {
        let result: AbcObject[];

        _.sortBy(array);
        _.sortBy(array, listIterator);
        _.sortBy(array, '');
        _.sortBy(array, {a: 42});

        _.sortBy(list);
        _.sortBy(list, listIterator);
        _.sortBy(list, '');
        _.sortBy(list, {a: 42});

        _.sortBy(dictionary);
        _.sortBy(dictionary, dictionaryIterator);
        _.sortBy(dictionary, '');
        _.sortBy(dictionary, {a: 42});
    }
}

// _.orderBy
{
    type SampleObject = {a: number; b: string; c: boolean};

    const array: SampleObject[] | null | undefined = anything;
    const list: ArrayLike<SampleObject> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = anything;
    const dictionary: _.Dictionary<SampleObject> | null | undefined = anything;
    const orders: boolean|string|Array<boolean|string> = anything;

    {
        let iteratees: ((value: string) => any)|Array<(value: string) => any> = anything;
        let result: string[];

        _.orderBy<string>('acbd', iteratees);
        _.orderBy<string>('acbd', iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: SampleObject[];

        _.orderBy(array, iteratees);
        _.orderBy(array, iteratees, orders);
        _.orderBy<SampleObject>(array, iteratees);
        _.orderBy<SampleObject>(array, iteratees, orders);

        _.orderBy(list, iteratees);
        _.orderBy(list, iteratees, orders);
        _.orderBy<SampleObject>(list, iteratees);
        _.orderBy<SampleObject>(list, iteratees, orders);

        _.orderBy(numericDictionary, iteratees);
        _.orderBy(numericDictionary, iteratees, orders);
        _.orderBy<SampleObject>(numericDictionary, iteratees);
        _.orderBy<SampleObject>(numericDictionary, iteratees, orders);

        _.orderBy(dictionary, iteratees);
        _.orderBy(dictionary, iteratees, orders);
        _.orderBy<SampleObject>(dictionary, iteratees);
        _.orderBy<SampleObject>(dictionary, iteratees, orders);
    }
}*/

/********
 * Date *
 ********/
/*
{
    {
        let result: number;

        _.now();
    }
}*/

/*************
 * Functions *
 *************/
/*
// _.after
{
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.after(42, func);
    }
}

// _.ary
{
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: SampleFunc;

        _.ary(func);
        _.ary(func, 2);
        _.ary(func);
        _.ary(func, 2);
    }
}

// _.before
{
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.before(42, func);
    }
}

// _.bind
{
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        type Sample(a: number, b: string) => boolean;

        let result: SampleResult;

        _.bind(func, anything);
        _.bind(func, anything);
    }

    {
        type Sample(b: string) => boolean;

        let result: SampleResult;

        _.bind(func, anything, 42);
        _.bind(func, anything, 42);
    }

    {
        type Sample() => boolean;

        let result: SampleResult;

        _.bind(func, anything, 42, '');
        _.bind(func, anything, 42, '');
    }
}

// _.bindAll
{
    interface SampleObject {
        a(): void;
        b(): void;
        c(): void;
    }

    let object: SampleObject = { a: () => {}, b: () => {}, c: () => {} };

    {
        let result: SampleObject;

        _.bindAll<SampleObject>(object);
        _.bindAll<SampleObject>(object, 'c');
        _.bindAll<SampleObject>(object, ['b'], 'c');
        _.bindAll<SampleObject>(object, 'a', ['b'], 'c');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleObject>;

        _(object).bindAll();
        _(object).bindAll('c');
        _(object).bindAll(['b'], 'c');
        _(object).bindAll('a', ['b'], 'c');
    }
}

// _.bindKey
{
    let object = {
        foo: (a: number, b: string) => true,
    };

    {
        type Sample(a: number, b: string) => boolean;

        let result: SampleResult;

        _.bindKey(object, 'foo');
    }

    {
        type Sample(b: string) => boolean;

        let result: SampleResult;

        _.bindKey(object, 'foo', 42);
    }

    {
        type Sample() => boolean;

        let result: SampleResult;

        _.bindKey(object, 'foo', 42, '');
    }
}

// _.curry
{
    const testCurryFn = (a: number, b: number, c: number) => [a, b, c];
    let curryResult0: number[]
    let curryResult1: _.CurriedFunction1<number, number[]>
    let curryResult2: _.CurriedFunction2<number, number, number[]>

    curryResult0 = _.curry(testCurryFn)(1, 2, 3);
    curryResult1 = _.curry(testCurryFn)(1, 2);
    curryResult0 = _.curry(testCurryFn)(1, 2)(3);
    curryResult0 = _.curry(testCurryFn)(1)(2)(3);
    curryResult2 = _.curry(testCurryFn)(1);
    curryResult1 = _.curry(testCurryFn)(1)(2);
    curryResult0 = _.curry(testCurryFn)(1)(2)(3);
    curryResult0 = _.curry(testCurryFn)(1)(2, 3);

    const testCurry2 = (a: string, b: number, c: boolean): [string, number, boolean]  =>  ["A", 1, true];
    let curryResult3: [string, number, boolean];
    let curryResult4: _.CurriedFunction1<boolean, [string, number, boolean]>;
    let curryResult5: _.CurriedFunction2<number, boolean, [string, number, boolean]>;
    let curryResult6: _.CurriedFunction3<string, number, boolean, [string, number, boolean]>;
    curryResult3 = _.curry(testCurry2)("1", 2, true);
    curryResult3 = _.curry(testCurry2)("1", 2)(true);
    curryResult3 = _.curry(testCurry2)("1")(2, true);
    curryResult3 = _.curry(testCurry2)("1")(2)(true);
    curryResult4 = _.curry(testCurry2)("1", 2);
    curryResult4 = _.curry(testCurry2)("1")(2);
    curryResult5 = _.curry(testCurry2)("1");
    curryResult6 = _.curry(testCurry2);

    // _.curryRight
    const testCurryRightFn = (a: number, b: number, c: number) => [a, b, c];
    curryResult0 = _.curryRight(testCurryRightFn)(1, 2, 3);
    curryResult2 = _.curryRight(testCurryRightFn)(1);
    let curryResult7: _.RightCurriedFunction1<string, [string, number, boolean]>;
    let curryResult8: _.RightCurriedFunction2<string,number , [string, number, boolean]>;
    let curryResult9: _.RightCurriedFunction3<string, number, boolean, [string, number, boolean]>;
    curryResult3 = _.curryRight(testCurry2)("1", 2, true);
    curryResult3 = _.curryRight(testCurry2)( 2,true)("1");
    curryResult3 = _.curryRight(testCurry2)(true)( "1",2);
    curryResult3 = _.curryRight(testCurry2)(true)(2)("1");
    curryResult7 = _.curryRight(testCurry2)(2,true);
    curryResult7 = _.curryRight(testCurry2)(true)(2);
    curryResult8 = _.curryRight(testCurry2)(true);
    curryResult9 = _.curryRight(testCurry2);
}

// _.debounce
{
    type SampleFunc = (n: number, s: string) => boolean;

    interface Options {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
        flush(): void;
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        _.debounce<SampleFunc>(func);
        _.debounce<SampleFunc>(func, 42);
        _.debounce<SampleFunc>(func, 42, options);
    }
}

// _.defer
{
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        _.defer(func);
        _.defer(func, anything);
        _.defer(func, anything, anything);
        _.defer(func, anything, anything, anything);
    }
}

// _.delay
{
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        _.delay(func, 1);
        _.delay(func, 1, 2);
        _.delay(func, 1, 2, '');
    }
}

// _.flip
{
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.flip(func);
    }
}

// _.flow
{
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;
    let Fn3 = (a: number) => "";
    let Fn4 = (a: string) => 0;

    {
        // type infer test
        let result: (m: number, n: number) => number;

        _.flow(Fn2, Fn1);
        _.flow(Fn2, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn1, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn3, Fn4);
        _.flow([Fn2, Fn1, Fn3, Fn4]);
    }

    {
        let result: (m: number, n: number) => number;

        _.flow(Fn2, Fn1);
        _.flow(Fn2, Fn1, Fn1);
        _.flow(Fn2, Fn1, Fn1, Fn1);
        _.flow([Fn1, Fn1, Fn1, Fn2]);
    }
}

// _.flowRight
{
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;

    {
        let result: (m: number, n: number) => number;

        _.flowRight(Fn1, Fn2);
        _.flowRight(Fn1, Fn1, Fn2);
        _.flowRight(Fn1, Fn1, Fn1, Fn2);
        _.flowRight([Fn1, Fn1, Fn1, Fn2]);
    }
}

// _.memoize
{
    {
        let fn: any = () => {};
        let memoizedFunction: _.MemoizedFunction = fn;
        let cache: _.MapCache = memoizedFunction.cache;
    }

    interface MemoizedResultFn extends _.MemoizedFunction {
        (a1: string, a2: number): boolean;
    }

    let memoizeFn = (a1: string, a2: number) => true;
    let memoizeResolverFn = (a1: string, a2: number) => "";

    {
        let result: MemoizedResultFn;

        _.memoize(memoizeFn);
        _.memoize(memoizeFn, memoizeResolverFn);

        result('foo', 1);
        result.cache.get('foo1');
    }

    interface MemoizeCache<K, V> {
        delete(key: K): boolean;
        get(key: K): V;
        has(key: K): boolean;
        set(key: K, value: V): this;
        clear(): void;
    }
    class MemoizeCacheClass implements MemoizeCache<any, any> {
        delete: (key: any) => true;
        get: (key: any) => 1;
        has: (key: any) => true;
        set: (key: any, value: any) => this;
        clear: () => { };
    }

    _.memoize.Cache = MemoizeCacheClass;
}

// _.overArgs
{
    type Func1 = (a: boolean) => boolean;
    type Func2 = (a: boolean, b: boolean) => boolean;

    let func1: Func1 = (a) => true;
    let func2: Func2 = (a, b) => true;

    let transform1 = (a: string) => true;
    let transform2 = (b: number) => true;

    {
        let result: (a: string) => boolean;

        _.overArgs(func1, transform1);
        _.overArgs(func1, [transform1]);
    }

    {
        let result: (a: string, b: number) => boolean;

        _.overArgs(func2, transform1, transform2);
        _.overArgs(func2, [transform1, transform2]);
    }
}

// _.negate
{
    type PredicateFn = (a1: number, a2: number) => boolean;

    const predicate = (a1: number, a2: number) => a1 > a2;

    {
        let result: PredicateFn;

        _.negate<PredicateFn>(predicate);
    }
}

// _.once
{
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.once(func);
    }
}

//_.rearg
{
    const testReargFn = (a: string, b: string, c: string) => [a, b, c];
    _.rearg(testReargFn, 2, 0, 1)('b', 'c', 'a'); // $ExpectType string[]
    _.rearg(testReargFn, [2, 0, 1])('b', 'c', 'a'); // $ExpectType string[]
}

// _.rest
{
    type Func = (a: string, b: number[]) => boolean;
    type ResultFunc = (a: string, ...b: number[]) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: ResultFunc;

        _.rest(func);
        _.rest(func, 1);
    }
}

//_.spread
{
    type SampleFunc = (args: Array<number|string>) => boolean;
    type Sample(a: number, b: string) => boolean;

    let func: SampleFunc = (a) => true;

    {
        let result: SampleResult;

        _.spread(func);
    }
}

// _.throttle
{
    type SampleFunc = (n: number, s: string) => boolean;

    interface Options {
        leading?: boolean;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
        flush(): void;
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        _.throttle<SampleFunc>(func);
        _.throttle<SampleFunc>(func, 42);
        _.throttle<SampleFunc>(func, 42, options);
    }
}

// _.unary
{
    type Func = (a: string, b: number[]) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        _.unary(func);
    }
}

// _.wrap
{
    type SampleValue = {a: number; b: string; c: boolean}
    type Sample(arg2: number, arg3: string) => boolean;

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: SampleResult;

        _.wrap(value, wrapper);
    }
}
*/
/********
 * Lang *
 ********/
/*
// _.castArray
{
    {
        let result: number[];

        _.castArray(42);
    }
}

// _.clone
{
    {
        let result: number;

        _.clone<number>(42);
    }
    {
        let result: string[];

        _.clone<string[]>(['']);
    }

    {
        let result: {a: {b: number;};};

        _.clone<{a: {b: number;};}>({a: {b: 42}});
    }
}

// _.cloneDeep
{
    {
        let result: number;

        _.cloneDeep<number>(42);
    }

    {
        let result: string[];

        _.cloneDeep<string[]>(['']);
    }

    {
        let result: {a: {b: number;};};

        _.cloneDeep<{a: {b: number;};}>({a: {b: 42}});
    }
}

// _.cloneDeepWith
{
    type CloneDeepWithCustomizer<V, R> = (value: V) => R;

    {
        let customizer: CloneDeepWithCustomizer<number, string> = (x) => "";
        let result: string;

        _.cloneDeepWith(42, customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number[], string[]> = (x) => [];
        let result: string[];

        _.cloneDeepWith([42], customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: {a: {b: string;};};

        _.cloneDeepWith({a: {b: 42}}, customizer);
    }
}

// _.cloneWith
{
    type CloneWithCustomizer<V, R> = (value: V) => R;

    {
        let customizer: CloneWithCustomizer<number, string> = (x) => "";
        let result: string;

        _.cloneWith(42, customizer);
    }

    {
        let customizer: CloneWithCustomizer<number[], string[]> = (x) => [];
        let result: string[];

        _.cloneWith([42], customizer);
    }

    {
        let customizer: CloneWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: {a: {b: string;};};

        _.cloneWith({a: {b: 42}}, customizer);
    }
}

// _.conforms
{
    let result: boolean = _.conforms({foo: (v: string) => false})({foo: "foo"});
    let result2: boolean = _.conforms({})({foo: "foo"});
}

// _.conformsTo
{
    let result: boolean = _.conformsTo({foo: "foo"}, {foo: (v: string) => false});
    let result2: boolean = _.conformsTo({}, {foo: (v: string) => false});
}

// _.eq
{
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        _.eq(anything, anything);
    }
}

// _.gt
{
    {
        let result: boolean;

        _.gt(anything, anything);
    }
}

// _.gte
{
    {
        let result: boolean;

        _.gte(anything, anything);
    }
}

// _.isArguments
{
    {
        let value: number|IArguments = 0;

        if (_.isArguments(value)) {
            let result: IArguments = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isArguments(anything);
    }
}

// _.isArray
{
    {
        let value: number|string[]|boolean[] = anything;

        if (_.isArray(value)) {
            value; // $ExpectType string[] | boolean[]
        }
        else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        _.isArray(anything);
    }
}

// _.isArrayBuffer
{
    {
        let value: ArrayBuffer|number = anything;

        if (_.isArrayBuffer(value)) {
            value; // $ExpectType ArrayBuffer
        }
        else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        _.isArrayBuffer(anything);
    }
}

// _.isArrayLike
{
    {
        let value: string | string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLike(value)) {
            let result: string | string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            let result: number | { length: string } | { a: string; } | null | undefined = value;
        }
    }

    {
        let value: boolean[] = anything;

        if (_.isArrayLike(value)) {
            let result: boolean[] = value;
        }
        else {
            value; // $ExpectType never
        }
    }

    {
        let value: () => number = anything;

        if (_.isArrayLike(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType () => number
        }
    }

    {
        let value: { a: string } = anything;

        if (_.isArrayLike(value)) {
            let result: { a: string, length: number } = value;
        }
        else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = anything;

        if (_.isArrayLike(value)) {
            value; // $ExpectType any
        }
        else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        _.isArrayLike(anything);
    }
}

// _.isArrayLikeObject
{
    {
        let value: string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | string | { length: string } | { a: string } | null | undefined
            = anything;

        if (_.isArrayLikeObject(value)) {
            let result: string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            let result: string | number | { length: string; } | { a: string; } | null | undefined = value;
        }
    }

    {
        let value: boolean[] = anything;

        if (_.isArrayLikeObject(value)) {
            let result: boolean[] = value;
        }
        else {
            value; // $ExpectType never
        }
    }

    {
        let value: (a: string) => boolean = anything;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType (a: string) => boolean
        }
    }

    {
        let value: { a: string } = anything;

        if (_.isArrayLikeObject(value)) {
            let result: { a: string, length: number } = value;
        }
        else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = anything;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType any
        }
        else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        _.isArrayLikeObject(anything);
    }
}

// _.isBoolean
{
    {
        let value: number|boolean = 0;

        if (_.isBoolean(value)) {
            let result: boolean = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isBoolean(anything);
    }
}

// _.isBuffer
{
    {
        let result: boolean;

        _.isBuffer(anything);
    }
}

// _.isDate
{
    {
        let value: number|Date = 0;

        if (_.isDate(value)) {
            let result: Date = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isDate(anything);
    }
}

// _.isElement
{
    {
        let result: boolean;

        _.isElement(anything);
    }
}

// _.isEmpty
{
    {
        let result: boolean;

        _.isEmpty(anything);
    }
}

// _.isEqual
{
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        _.isEqual(anything, anything);
    }
}

// _.isEqualWith
{
    let customizer = (value: any, other: any, indexOrKey: number|string|symbol|undefined, parent: any, otherParent: any, stack: any) => true;

    {
        let result: boolean;

        _.isEqualWith(anything, anything, customizer);
    }
}

// _.isError
{
    let x: any = 1;
    {
        let value: number|Error = x;

        if (_.isError(value)) {
            let result: Error = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        class CustomError extends Error {
            custom: string
        }

        let value: number|CustomError = x;

        if (_.isError(value)) {
            let result: CustomError = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isError(anything);
    }
}

// _.isFinite
{
    {
        let result: boolean;

        _.isFinite(anything);
    }
}

// _.isFunction
{
    {
        let value: number|(() => void) = anything;

        if (_.isFunction(value)) {
            value; // $ExpectType () => void
        }
        else {
            value; // $ExpectType number
        }

        if (_.isFunction(anything)) {
            anything();
        }
    }

    {
        let result: boolean;

        _.isFunction(anything);
    }
}

// _.isInteger
{
    {
        let result: boolean;

        _.isInteger(anything);
    }
}

// _.isLength
{
    {
        let result: boolean;

        _.isLength(anything);
    }
}

// _.isMap
{
    {
        let value: number|Map<string, number> = 0;

        if (_.isMap(value)) {
            let result: Map<string, number> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isMap(anything);
    }
}

// _.isMatch
{
    _.isMatch({}, {}); // $ExpectType boolean
}

// _.isMatchWith
{
    let testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string|symbol) => true;

    _.isMatchWith({}, {}, testIsMatchCustiomizerFn); // $ExpectType boolean
}

// _.isNaN
{
    {
        let result: boolean;

        _.isNaN(anything);
    }
}

// _.isNative
{
    {
        let value: number|(() => void) = anything;

        if (_.isNative(value)) {
            value; // $ExpectType () => void
        }
        else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        _.isNative(anything);
    }
}

// _.isNil
{
    {
        let result: boolean;

        _.isNil(anything);
    }
}

// _.isNull
{
    {
        let result: boolean;

        _.isNull(anything);
    }
}

// _.isNumber
{
    {
        let value: string|number = 0;

        if (_.isNumber(value)) {
            let result: number = value;
        }
        else {
            let result: string = value;
        }
    }

    {
        let result: boolean;

        _.isNumber(anything);
    }
}

// _.isObject
{
    {
        let result: boolean;

        _.isObject(anything);
    }
}

// _.isObjectLike
{
    {
        let result: boolean;

        _.isObjectLike(anything);
    }
}

// _.isPlainObject
{
    {
        let result: boolean;

        _.isPlainObject(anything);
    }
}

// _.isRegExp
{
    {
        let value: number|RegExp = /./;

        if (_.isRegExp(value)) {
            let result: RegExp = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isRegExp(anything);
    }
}

// _.isSafeInteger
{
    {
        let result: boolean;

        _.isSafeInteger(anything);
    }
}

// _.isSet
{
    {
        let value: number|Set<string> = 0;

        if (_.isSet(value)) {
            let result: Set<string> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isSet(anything);
    }
}

// _.isString
{
    {
        let value: number|string = '';

        if (_.isString(value)) {
            let result: string = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isString(anything);
    }
}

// _.isSymbol
{
    {
        let result: boolean;

        _.isSymbol(anything);
    }
}

// _.isTypedArray
{
    {
        let result: boolean;

        _.isTypedArray([]);
    }
}

// _.isUndefined
{
    {
        let result: boolean;

        _.isUndefined(anything);
    }
}

// _.isWeakMap
{
    {
        let value: number | WeakMap<object, number> = 0;

        if (_.isWeakMap(value)) {
            let result: WeakMap<object, number> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isWeakMap(anything);
    }
}

// _.isWeakSet
{
    {
        let value: number | WeakSet<object> = 0;

        if (_.isWeakSet(value)) {
            let result: WeakSet<object> = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        _.isWeakSet(anything);
    }
}

// _.lt
{
    {
        let result: boolean;

        _.lt(anything, anything);
    }
}

// _.lte
{
    {
        let result: boolean;

        _.lte(anything, anything);
    }
}

// _.toArray
{
    let array: AbcObject[] = [];
    let list: ArrayLike<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let numericDictionary: _.NumericDictionary<AbcObject> = {};

    {
        let result: string[];

        _.toArray<string>('');
        _.toArray('');
    }

    {
        let result: AbcObject[];

        _.toArray<AbcObject>(array);
        _.toArray<AbcObject>(list);
        _.toArray<AbcObject>(dictionary);
        _.toArray<AbcObject>(numericDictionary);

        _.toArray(array);
        _.toArray(list);
        _.toArray(dictionary);
        _.toArray(numericDictionary);
    }

    {
        let result: any[];

        _.toArray();
        _.toArray(42);
        _.toArray(true);
    }
}

// _.toPlainObject
{
    {
        let result: AbcObject;
        _.toPlainObject();
        _.toPlainObject(true);
        _.toPlainObject(1);
        _.toPlainObject('a');
        _.toPlainObject([]);
        _.toPlainObject({});
    }
}

// _.toFinite
{
   {
       let result: number;
       _.toFinite(true);
       _.toFinite(1);
       _.toFinite('3.2');
       _.toFinite([]);
       _.toFinite({});
   }
}

// _.toInteger
{
   {
       let result: number;
       _.toInteger(true);
       _.toInteger(1);
       _.toInteger('3.2');
       _.toInteger([]);
       _.toInteger({});
   }
}

// _.toLength
{
   {
       let result: number;
       _.toLength(true);
       _.toLength(1);
       _.toLength('a');
       _.toLength([]);
       _.toLength({});
   }
}

// _.toNumber
{
   {
       let result: number;
       _.toNumber(true);
       _.toNumber(1);
       _.toNumber('a');
       _.toNumber([]);
       _.toNumber({});
   }
}

// _.toSafeInteger
{
   {
       let result: number;
       _.toSafeInteger(true);
       _.toSafeInteger(1);
       _.toSafeInteger('a');
       _.toSafeInteger([]);
       _.toSafeInteger({});
   }
}
*/
/********
 * Math *
 ********/
/*
// _.add
{
    {
        let result: number;

        _.add(1, 1);
    }
}

// _.ceil
{
    {
        let result: number;

        _.ceil(6.004);
        _.ceil(6.004, 2);
    }
}

// _.divide
{
    {
        let result: number;

        _.divide(6, 4);
    }
}

// _.floor
{
    {
        let result: number;

        _.floor(4.006);
        _.floor(0.046, 2);
        _.floor(4060, -2);
    }
}

// _.max
{
    let array: number[] = [];
    let list: ArrayLike<number> = [];

    let result: number | undefined;

    _.max<number>(array);
    _.max<number>(list);
}

// _.maxBy
{
    let array: number[] = [];
    let list: ArrayLike<number> = [];
    let array2: AbcObject[] = [];
    let list2: ArrayLike<AbcObject> = [];

    let listIterator = (value: number, index: number, collection: ArrayLike<number>) => 0;

    let result: number | undefined;
    let result2: AbcObject | undefined;

    _.maxBy<number>(array);
    _.maxBy<number>(array, listIterator);
    _.maxBy<number>(array, '');
    result2 = _.maxBy(array2, {a: 42});

    _.maxBy<number>(list);
    _.maxBy<number>(list, listIterator);
    _.maxBy<number>(list, '');
    result2 = _.maxBy(list2, {a: 42});
}

// _.mean
{
    let array: number[] = [];

    let result: number;

    _.mean(array);
}

// _.meanBy
{
    let array: AbcObject[] = [];

    let result: number;

    _.meanBy(array, (x) => x.a);
    _.meanBy(array, 'a');
}

// _.min
{
    let array: number[] = [];
    let list: ArrayLike<number> = [];

    let result: number | undefined;

    _.min<number>(array);
    _.min<number>(list);
}

// _.minBy
{
    let array: number[] = [];
    let list: ArrayLike<number> = [];
    let array2: AbcObject[] = [];
    let list2: ArrayLike<AbcObject> = [];

    let listIterator = (value: number, index: number, collection: ArrayLike<number>) => 0;

    let result: number | undefined;
    let result2: AbcObject | undefined;

    _.minBy<number>(array);
    _.minBy<number>(array, listIterator);
    _.minBy<number>(array, '');
    result2 = _.minBy(array2, {a: 42});

    _.minBy<number>(list);
    _.minBy<number>(list, listIterator);
    _.minBy<number>(list, '');
    result2 = _.minBy(list2, {a: 42});
}

// _.multiply
{
    {
        let result: number;

        _.multiply(6, 4);
    }
}

// _.round
{
    {
        let result: number;

        _.round(4.006);
        _.round(4.006, 2);
    }
}

// _.sum
{
    let array: number[] | null | undefined = anything;
    let list: ArrayLike<number> | null | undefined = anything;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator = (value: number, index: number, collection: ArrayLike<number>) => 0;
    let dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => 0;

    {
        let result: number;

        _.sum(array);

        _.sum(list);
    }
}

// _.sumBy
{
    let array: number[] | null | undefined = anything;
    let objectArray: Array<{ 'age': number }> | null | undefined = anything;

    let list: ArrayLike<number> | null | undefined = anything;
    let objectList: ArrayLike<{ 'age': number }> | null | undefined = anything;

    let listIterator = (value: number) => 0;

    {
        let result: number;

        _.sumBy(array);
        _.sumBy(array, listIterator);
        _.sumBy(objectArray, 'age');

        _.sumBy(list);
        _.sumBy(list, listIterator);
        _.sumBy(objectList, 'age');
    }
}
*/
/**********
 * Number *
 **********/
/*
 // _.subtract
 {
     {
         let result: number;

         _.subtract(3, 2);
     }
 }

// _.clamp
{
    {
        let result: number;

        _.clamp(3, 2, 4);
        _.clamp(3, 4);
    }
}

// _.inRange
{
    {
        let result: boolean;

        _.inRange(3, 2, 4);
        _.inRange(4, 8);
    }
}

// _.random
{
    {
        let result: number;

        _.random();
        _.random(1);
        _.random(1, 2);
        _.random(1, 2, true);
        _.random(1, true);
        _.random(true);
    }

    // $ExpectType number[]
    _.map([5, 5], _.random);
}
*/
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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    {
        let result: Obj;

        _.assign(obj);
    }

    {
        let result: { a: number };

        _.assign(obj, s1);
    }

    {
        let result: { a: number, b: number };

        _.assign(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        _.assign(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        _.assign(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        _.assignWith(obj);
    }

    {
        let result: { a: number };
        _.assignWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        _.assignWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        _.assignWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        _.assignWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        _.assignIn(obj);
    }

    {
        let result: { a: number };

        _.assignIn(obj, s1);
    }

    {
        let result: { a: number, b: number };

        _.assignIn(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        _.assignIn(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        _.assignIn(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        _.assignInWith(obj);
    }

    {
        let result: { a: number };
        _.assignInWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        _.assignInWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        _.assignInWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        _.assignInWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
        _.assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }
}

// _.create
{
    type SampleProto = {a: number};
    type SampleProps = {b: string};

    let prototype: SampleProto = { a: 1 };
    let properties: SampleProps = { b: "" };

    {
        let result: {a: number; b: string};

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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    {
    let result: Obj;

    _.defaults(obj);
    }

    {
    let result: { a: string };

    _.defaults(obj, s1);
    }

    {
    let result: { a: string, b: number };

    _.defaults(obj, s1, s2);
    }

    {
    let result: { a: string, b: number, c: number };

    _.defaults(obj, s1, s2, s3);
    }

    {
    let result: { a: string, b: number, c: number, d: number };

    _.defaults(obj, s1, s2, s3, s4);
    }

    {
    let result: { a: string, b: number, c: number, d: number, e: number };

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
    const TestDefaultsDeepObject = { 'user': { 'name': 'barney' } };
    const TestDefaultsDeepSource = { 'user': { 'name': 'fred', 'age': 36 } };
    _.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource); // $ExpectType DefaultsDeepResult
}

// _.entries
{
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        _.entries(object);
    }
}

// _.entriesIn
{
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        _.extend(obj);
    }

    {
        let result: { a: number };

        _.extend(obj, s1);
    }

    {
        let result: { a: number, b: number };

        _.extend(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        _.extend(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        _.extend(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

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

    let obj: Obj = { a: "" };
    let s1: S1 = { a: 1 };
    let s2: S2 = { b: 1 };
    let s3: S3 = { c: 1 };
    let s4: S4 = { d: 1 };
    let s5: S5 = { e: 1 };

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => 1;

    {
        let result: Obj;

        _.extendWith(obj);
    }

    {
        let result: { a: number };

        _.extendWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };

        _.extendWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };

        _.extendWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        _.extendWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        _.extendWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }
}

// _.findKey
{
    {
        let a: keyof undefined;
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        _.findKey<{a: string;}>({a: ''});

        _.findKey<{a: string;}>({a: ''}, predicateFn);

        _.findKey<{a: string;}>({a: ''}, '');

        _.findKey({a: { b: 5 }}, {b: 42});

        _.findKey({a: { b: 5 }}, ['b', 5]);
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        _.findKey({a: ''}, predicateFn);
    }
}

// _.findLastKey
{
    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        _.findLastKey<{a: string;}>({a: ''});

        _.findLastKey<{a: string;}>({a: ''}, predicateFn);

        _.findLastKey<{a: string;}>({a: ''}, '');

        _.findLastKey({a: { b: 5 }}, {b: 42});

        _.findLastKey({a: { b: 5 }}, ['b', 5]);
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        _.findLastKey({a: ''}, predicateFn);
    }
}

// _.forIn
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        _.forIn(dictionary);
        _.forIn(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        _.forIn(nilDictionary);
        _.forIn(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        _.forIn<SampleObject>(object);
        _.forIn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        _.forIn<SampleObject | null | undefined>(nilObject);
        _.forIn<SampleObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forInRight
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        _.forInRight(dictionary);
        _.forInRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        _.forInRight(nilDictionary);
        _.forInRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        _.forInRight<SampleObject>(object);
        _.forInRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        _.forInRight<SampleObject | null | undefined>(nilObject);
        _.forInRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forOwn
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        _.forOwn(dictionary);
        _.forOwn(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        _.forOwn(nilDictionary);
        _.forOwn(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        _.forOwn<SampleObject>(object);
        _.forOwn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        _.forOwn<SampleObject | null | undefined>(nilObject);
        _.forOwn<SampleObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.forOwnRight
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        _.forOwnRight(dictionary);
        _.forOwnRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        _.forOwnRight(nilDictionary);
        _.forOwnRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        _.forOwnRight<SampleObject>(object);
        _.forOwnRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        _.forOwnRight<SampleObject | null | undefined>(nilObject);
        _.forOwnRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }
}

// _.functions
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        _.functions(object);
    }
}

// _.functionsIn
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        _.functionsIn<SampleObject>(object);
    }
}

// _.get
{
    _.get([], Symbol.iterator); // $ExpectType any
    _.get([], [Symbol.iterator]); // $ExpectType any
    _.get('abc', 1); // $ExpectType string
    _.get({ a: { b: true } }, "a"); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a"]); // $ExpectType { b: boolean; }
    _.get({ a: { b: true } }, ["a", "b"]); // $ExpectType any

    {
        let result: string;

        _.get('abc', '0');
        _.get('abc', '0', '_');
        _.get('abc', ['0']);
        _.get('abc', ['0'], '_');
    }

    {
        let result: number;

        _.get([42], '0');
        _.get([42], '0', -1);
        _.get([42], ['0']);
        _.get([42], ['0'], -1);
    }

    {
        let result: boolean;

        _.get({a: true}, 'a');
        _.get({a: true}, 'a', false);
        _.get({a: true}, ['a']);
        _.get({a: true}, ['a'], false);
    }
}

// _.has
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        _.has<SampleObject>(object, '');
        _.has<SampleObject>(object, 42);
        _.has<SampleObject>(object, ['', 42]);
    }
}

// _.hasIn
{
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        _.hasIn<SampleObject>(object, '');
        _.hasIn<SampleObject>(object, 42);
        _.hasIn<SampleObject>(object, ['', 42]);
    }
}

// _.invert
{
    {
        let result: _.Dictionary<string>;

        _.invert({});
    }
}

// _.invertBy
{
    let array: Array<{a: number;}> = [];
    let list: ArrayLike<{a: number;}> = [];
    let dictionary: _.Dictionary<{a: number;}> = {};
    let numericDictionary: _.NumericDictionary<{a: number;}> = {};

    let stringIterator: (value: string) => any = (value: string) => 1;
    let arrayIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let listIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let dictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let numericDictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;

    {
        let result: _.Dictionary<string[]>;

        _.invertBy('foo');
        _.invertBy('foo', stringIterator);

        _.invertBy(array);
        _.invertBy<{a: number;}>(array, 'a');
        _.invertBy<{a: number;}>(array, arrayIterator);
        _.invertBy<{a: number;}>(array, {a: 1});

        _.invertBy(list);
        _.invertBy<{a: number;}>(list, 'a');
        _.invertBy<{a: number;}>(list, listIterator);
        _.invertBy<{a: number;}>(list, {a: 1});

        _.invertBy(dictionary);
        _.invertBy<{a: number;}>(dictionary, 'a');
        _.invertBy<{a: number;}>(dictionary, dictionaryIterator);
        _.invertBy<{a: number;}>(dictionary, {a: 1});

        _.invertBy(numericDictionary);
        _.invertBy<{a: number;}>(numericDictionary, 'a');
        _.invertBy<{a: number;}>(numericDictionary, numericDictionaryIterator);
        _.invertBy<{a: number;}>(numericDictionary, {a: 1});
    }
}

// _.keys
{
    let object: _.Dictionary<any> | null | undefined = anything;

    {
        let result: string[];

        _.keys(object);
    }
}

// _.keysIn
{
    let object: _.Dictionary<any> | null | undefined = anything;

    {
        let result: string[];

        _.keysIn(object);
    }
}

// _.mapKeys
{
    let array: AbcObject[] | null | undefined = anything;
    let list: ArrayLike<AbcObject>| null | undefined = anything;
    let dictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator = (value: AbcObject, index: number, collection: ArrayLike<AbcObject>) => "";
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => "";

    {
        let result: _.Dictionary<AbcObject>;

        _.mapKeys(array);
        _.mapKeys(array, listIterator);
        _.mapKeys(array, '');
        _.mapKeys(array, {});

        _.mapKeys(list);
        _.mapKeys(list, listIterator);
        _.mapKeys(list, '');
        _.mapKeys(list, {});

        _.mapKeys(dictionary);
        _.mapKeys(dictionary, dictionaryIterator);
        _.mapKeys(dictionary, '');
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
    let result: ExpectedResult;

    // Test for basic merging

    _.merge(initialValue, mergingValue);

    _.merge(initialValue, {}, mergingValue);

    _.merge(initialValue, {}, {}, mergingValue);

    _.merge(initialValue, {}, {}, {}, mergingValue);

    // Once we get to the varargs version, you have to specify the result explicitly
    _.merge(initialValue, {}, {}, {}, {}, mergingValue);

    type ComplicatedExpectedType = { a: number, b: string, c: {}, d: number[], e: boolean };

    let complicatedResult: ComplicatedExpectedType = _.merge({ a: 1 },
                                                             { b: "string" },
                                                             { c: {} },
                                                             { d: [1] },
                                                             { e: true });
    // Test for type overriding

    type ExpectedTypeAfterOverriding = { a: boolean };

    let overriddenResult: ExpectedTypeAfterOverriding = _.merge({ a: 1 },
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
    let result: ExpectedResult;

    let customizer: (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => any = (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => 1;

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
    let obj: AbcObject | null | undefined = anything;
    let dict: { [key: string]: AbcObject } = { };

    {
        let result: Partial<AbcObject>;

        _.omit(obj, 'a');
        _.omit(obj, 0, 'a');
        _.omit(obj, ['b', 1], 0, 'a');

        dict = _.omit(dict, 'a');
    }
}

// _.omitBy
{
    let obj: AbcObject | null | undefined = anything;
    let predicate = (element: any, key: string) => true;

    {
        let result: Partial<AbcObject>;

        _.omitBy(obj, predicate);
    }
}

// _.pick
{
    let obj1: AbcObject | null | undefined = anything;
    let obj2: AbcObject = anything;

    {
        let result: Partial<AbcObject>;

        _.pick(obj1, 'a');
        _.pick(obj1, 0, 'a');
        _.pick(obj1, ['b', 1], 0, 'a');
    }

    {
        let result: Pick<AbcObject, 'a' | 'b'>;
        _.pick(obj2, 'a', 'b');
        _.pick(obj2, ['a' as 'a', 'b' as 'b']);
    }
}

// _.pickBy
{
    let obj: AbcObject | null | undefined = anything;
    let predicate = (element: any, key: string) => true;

    {
        let result: Partial<AbcObject>;

        _.pickBy(obj, predicate);
    }
}

// _.result
{
    {
        let result: string;

        _.result<string>('abc', '0');
        _.result<string>('abc', '0', '_');
        _.result<string>('abc', '0', () => '_');
        _.result<string>('abc', ['0']);
        _.result<string>('abc', ['0'], '_');
        _.result<string>('abc', ['0'], () => '_');
    }

    {
        let result: number;

        _.result<number>([42], '0');
        _.result<number>([42], '0', -1);
        _.result<number>([42], '0', () => -1);
        _.result<number>([42], ['0']);
        _.result<number>([42], ['0'], -1);
        _.result<number>([42], ['0'], () => -1);
    }

    {
        let result: boolean;

        _.result<boolean>({a: true}, 'a');
        _.result<boolean>({a: true}, 'a', false);
        _.result<boolean>({a: true}, 'a', () => false);
        _.result<boolean>({a: true}, ['a']);
        _.result<boolean>({a: true}, ['a'], false);
        _.result<boolean>({a: true}, ['a'], () => false);
    }
}

// _.set
{
    type SampleObject = {a: {}};
    type Sample{a: {b: number[]}};

    let object: SampleObject = { a: {} };
    let value = 0;

    {
        let result: SampleResult;

        _.set<SampleResult>(object, 'a.b[1]', value);
        _.set<SampleResult>(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        _(object).set<SampleResult>('a.b[1]', value);
        _(object).set<SampleResult>(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        _(object).chain().set<SampleResult>('a.b[1]', value);
        _(object).chain().set<SampleResult>(['a', 'b', 1], value);
    }
}

// _.setWith
{
    type Sample{a: {b: number[]}};

    let object: Sample{ a: { b: [] } };
    let value = 0;
    let customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        let result: SampleResult;

        _.setWith<SampleResult>(object, 'a.b[1]', value);
        _.setWith<SampleResult>(object, 'a.b[1]', value, customizer);
        _.setWith<SampleResult>(object, ['a', 'b', 1], value);
        _.setWith<SampleResult>(object, ['a', 'b', 1], value, customizer);
    }
}

// _.toPairs
{
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        _.toPairs(object);
    }
}

// _.toPairsIn
{
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        _.toPairsIn(object);
    }
}

// _.transform
{
    let array: number[] = [];
    let dictionary: _.Dictionary<number> = {};

    {
        let iterator = (acc: AbcObject[], curr: number, index?: number, arr?: number[]) => {};
        let accumulator: AbcObject[] = [];
        let result: AbcObject[];

        _.transform(array);
        _.transform<number, AbcObject>(array, iterator);
        _.transform<number, AbcObject>(array, iterator, accumulator);
    }

    {
        let iterator = (acc: _.Dictionary<AbcObject>, curr: number, index?: number, arr?: number[]) => {};
        let accumulator: _.Dictionary<AbcObject> = {};
        let result: _.Dictionary<AbcObject>;

        _.transform<number, AbcObject>(array, iterator, accumulator);
    }

    {
        let iterator = (acc: _.Dictionary<AbcObject>, curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: _.Dictionary<AbcObject> = {};
        let result: _.Dictionary<AbcObject>;

        _.transform(dictionary);
        _.transform<number, AbcObject>(dictionary, iterator);
        _.transform<number, AbcObject>(dictionary, iterator, accumulator);
    }

    {
        let iterator = (acc: AbcObject[], curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: AbcObject[] = [];
        let result: AbcObject[];

        _.transform<number, AbcObject>(dictionary, iterator, accumulator);
    }
}

// _.unset
{
    type SampleObject = {a: {b: string; c: boolean}};

    let object: SampleObject = { a: { b: "", c: true } };

    {
        let result: boolean;

        _.unset(object, 'a.b');
        _.unset(object, ['a', 'b']);
    }
}

// _.update
{
    type Sample{a: {b: number[]}};

    let object: Sample{ a: { b: [] } };
    let updater = (value: any) => 0;

    {
        let result: SampleResult;

        _.update(object, 'a.b[1]', updater);
        _.update(object, ['a', 'b', 1], updater);
    }
}

// _.updateWith
{
    type Sample{a: {b: number[]}};

    let object: Sample{ a: { b: [] } };
    let updater = (value: any) => 0;
    let customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        let result: SampleResult;

        _.updateWith<SampleResult>(object, 'a.b[1]', updater);
        _.updateWith<SampleResult>(object, 'a.b[1]', updater, customizer);
        _.updateWith<SampleResult>(object, ['a', 'b', 1], updater);
        _.updateWith<SampleResult>(object, ['a', 'b', 1], updater, customizer);

        _.updateWith<SampleResult>(object, 'a.b[1]', updater);
        _.updateWith<SampleResult>(object, 'a.b[1]', updater, customizer);
        _.updateWith<SampleResult>(object, ['a', 'b', 1], updater);
        _.updateWith<SampleResult>(object, ['a', 'b', 1], updater, customizer);
    }
}

// _.values
{
    type SampleObject = {a: {}};

    {
        let result: any[];

        _.values(123);
        _.values(true);
        _.values(null);
    }

    {
        let result: string[];

        _.values('hi');
        _.values(['h', 'i']);
    }

    {
        let result: number[];

        _.values([1, 2]);
    }

    {
        let result: boolean[];

        _.values([true, false]);
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: ArrayLike<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: SampleObject[];

        _.values(dict);
        _.values(numDict);
        _.values(list);
        _.values<SampleObject>(object);
    }
}

// _.valuesIn
{
    let object: _.Dictionary<AbcObject> = {};

    {
        let result: AbcObject[];

        _.valuesIn(object);
    }

    {
        let result: AbcObject[];

        // Without this type hint, this will fail to compile, as expected.
        _.valuesIn<AbcObject>({});
    }

    {
        let result: AbcObject[];

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
        let result: string;

        _.camelCase('Foo Bar');
    }
}

// _.capitalize
{
    {
        let result: string;

        _.capitalize('fred');
    }
}

// _.deburr
{
    {
        let result: string;

        _.deburr('déjà vu');
    }
}

// _.endsWith
{
    {
        let result: boolean;

        _.endsWith('abc', 'c');
        _.endsWith('abc', 'c', 1);
    }
}

// _.escape
{
    {
        let result: string;

        _.escape('fred, barney, & pebbles');
    }
}

// _.escapeRegExp
{
    {
        let result: string;

        _.escapeRegExp('[lodash](https://lodash.com/)');
    }
}

// _.kebabCase
{
    {
        let result: string;

        _.kebabCase('Foo Bar');
    }
}

// _.lowerCase
{
    {
        let result: string;

        _.lowerCase('Foo Bar');
    }
}

// _.lowerFirst
{
    {
        let result: string;

        _.lowerFirst('Foo Bar');
    }
}

// _.pad
{
    {
        let result: string;

        _.pad('abc');
        _.pad('abc', 8);
        _.pad('abc', 8, '_-');
    }
}

// _.padEnd
{
    {
        let result: string;

        _.padEnd('abc');
        _.padEnd('abc', 6);
        _.padEnd('abc', 6, '_-');
    }
}

// _.padStart
{
    {
        let result: string;

        _.padStart('abc');
        _.padStart('abc', 6);
        _.padStart('abc', 6, '_-');
    }
}

// _.parseInt
{
    {
        let result: number;

        _.parseInt('08');
        _.parseInt('08', 10);
    }
}

// _.repeat
{
    {
        let result: string;
        _.repeat('*');
        _.repeat('*', 3);
    }
}

// _.replace
{
    let replacer = (match: string, offset: number, string: string) => 'Barney';

    {
        let result: string;

        _.replace('Hi Fred', 'Fred', 'Barney');
        _.replace('Hi Fred', 'Fred', replacer);

        _.replace('Hi Fred', /fred/i, 'Barney');
        _.replace('Hi Fred', /fred/i, replacer);

        _.replace('Fred', 'Barney');
        _.replace('Fred', replacer);

        _.replace(/fred/i, 'Barney');
        _.replace(/fred/i, replacer);
    }
}

// _.snakeCase
{
    {
        let result: string;

        _.snakeCase('Foo Bar');
    }
}

// _.split
{
    {
        let result: string[];

        _.split('a-b-c');
        _.split('a-b-c', '-');
        _.split('a-b-c', '-', 2);
    }

    // $ExpectType string[][]
    _.map(['abc', 'def'], _.split);
}

// _.startCase
{
    {
        let result: string;

        _.startCase('--foo-bar');
    }
}

// _.startsWith
{
    {
        let result: boolean;

        _.startsWith('abc', 'a');
        _.startsWith('abc', 'a', 1);
    }
}

// _.template
{
    interface TemplateExecutor {
        (obj?: object): string;
        source: string;
    }

    let options: {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: _.Dictionary<any>;
        interpolate?: RegExp;
        sourceURL?: string;
        variable?: string;
    } = {};

    {
        let result: TemplateExecutor;

        _.template('');
        _.template('', options);
    }
}

// _.toLower
{
    {
        let result: string;

        _.toLower('fred, barney, &amp; pebbles');
    }
}

// _.toUpper
{
    {
        let result: string;

        _.toUpper('fred, barney, &amp; pebbles');
    }
}

// _.trim
{
    {
        let result: string;

        _.trim();
        _.trim('  abc  ');
        _.trim('-_-abc-_-', '_-');
    }
    // $ExpectType string[]
    _.map(['  foo  ', '  bar  '], _.trim);
}

// _.trimEnd
{
    {
        let result: string;

        _.trimEnd();
        _.trimEnd('  abc  ');
        _.trimEnd('-_-abc-_-', '_-');
    }
}

// _.trimStart
{
    {
        let result: string;

        _.trimStart();
        _.trimStart('  abc  ');
        _.trimStart('-_-abc-_-', '_-');
    }
}

// _.truncate
{
    {
        let result: string;

        _.truncate('hi-diddly-ho there, neighborino');
        _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
        _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
        _.truncate('hi-diddly-ho there, neighborino', { 'omission': ' […]' });
    }
}

// _.unescape
{
    {
        let result: string;

        _.unescape('fred, barney, &amp; pebbles');
    }
}

// _.upperCase
{
    {
        let result: string;

        _.upperCase('fred, barney, &amp; pebbles');
    }
}

// _.upperFirst
{
    {
        let result: string;

        _.upperFirst('fred, barney, &amp; pebbles');
    }
}

// _.words
{
    {
        let result: string[];

        _.words('fred, barney, & pebbles');
        _.words('fred, barney, & pebbles', /[^, ]+/g);
    }

    // $ExpectType string[][]
    _.map(['fred, barney', 'pebbles'], _.words);
}
*/
/***********
 * Utility *
 ***********/
/*
// _.attempt
{
    let func: (...args: any[]) => {a: string} = (...args) => ({ a: "" });

    {
        let result: {a: string}|Error;

        _.attempt<{a: string}>(func);
        _.attempt<{a: string}>(func, 'foo', 'bar', 'baz');
    }
}

// _.cond
{
    let pairPred1: (val: string) => boolean = (val) => true;
    let pairPred2: (val: string) => boolean = (val) => false;
    let pairRes1: (val: string) => number = (val) => 1;
    let pairRes2: (val: string) => number = (val) => 2;

    {
        let result: number;

        _.cond([[pairPred1, pairRes1],[pairPred2, pairRes2]])('hello');
    }
}

// _.constant
{
    {
        let result: () => number;
        _.constant<number>(42);
    }

    {
        let result: () => string;
        _.constant<string>('a');
    }

    {
        let result: () => boolean;
        _.constant<boolean>(true);
    }

    {
        let result: () => string[];
        _.constant<string[]>(['a']);
    }

    {
        let result: () => {a: string};
        _.constant<{a: string}>({a: 'a'});
    }
}

// _.defaultTo
{
    {
        let result: number;
        _.defaultTo<number>(42, 42);
        _.defaultTo<number>(undefined, 42);
        _.defaultTo<number>(null, 42);
        _.defaultTo<number>(NaN, 42);
    }

    {
        let result: string;
        _.defaultTo<string>('a', 'default');
        _.defaultTo<string>(undefined, 'default');
        _.defaultTo<string>(null, 'default');
    }

    {
        let result: boolean;
        _.defaultTo<boolean>(true, true);
        _.defaultTo<boolean>(undefined, true);
        _.defaultTo<boolean>(null, true);
    }

    {
        let result: string[];
        _.defaultTo<string[]>(['a'], ['default']);
        _.defaultTo<string[]>(undefined, ['default']);
        _.defaultTo<string[]>(null, ['default']);
    }

    {
        let result: {a: string};
        _.defaultTo<{a: string}>({a: 'a'}, {a: 'a'});
        _.defaultTo<{a: string}>(undefined, {a: 'a'});
        _.defaultTo<{a: string}>(null, {a: 'a'});
    }
}

// _.identity
{
    {
        let result: number;

        _.identity(42);
    }

    {
        let result: number[];

        _.identity([42]);
    }

    {
        let result: {a: number};

        _.identity({a: 42});
    }

    {
        let input: { a: number; } | null | undefined = anything;
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
        let result: (object: any) => AbcObject;

        _.iteratee('');
    }

    {
        let result: (object: any) => boolean;

        _.iteratee({});
    }
}

// _.matches
{
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;
        _.matches<AbcObject>(source);
    }

    {
        let result: (value: AbcObject) => boolean;
        _.matches<AbcObject, AbcObject>(source);
    }
}

// _.matchesProperty
{
    let path: string | string[] = [];
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;

        _.matchesProperty<AbcObject>(path, source);
    }

    {
        let result: (value: AbcObject) => boolean;

        _.matchesProperty<AbcObject, AbcObject>(path, source);
    }
}

// _.method
{
    {
        let result: (object: any) => {a: string};

        _.method('a.0');
        _.method('a.0', anything, anything);
        _.method('a.0', anything, anything, anything);

        _.method(['a', 0]);
        _.method(['a', 0], anything);
        _.method(['a', 0], anything, anything);
        _.method(['a', 0], anything, anything, anything);
    }

    {
        let result: (object: {a: string}) => {b: string};

        _.method('a.0');
        _.method('a.0', anything, anything);
        _.method('a.0', anything, anything, anything);

        _.method(['a', 0]);
        _.method(['a', 0], anything);
        _.method(['a', 0], anything, anything);
        _.method(['a', 0], anything, anything, anything);
    }
}

// _.methodOf
{
    type SampleObject = { a: Array<{ b(): AbcObject }> };
    type ResultFn = (path: string | string[]) => AbcObject;

    let object: SampleObject = { a: [] };

    {
        let result: ResultFn;

        _.methodOf(object);
        _.methodOf(object, anything);
        _.methodOf(object, anything, anything);
        _.methodOf(object, anything, anything, anything);
    }
}

// _.mixin
{
    let source: _.Dictionary<(...args: any[]) => any> = {};
    let dest: AbcObject = anything;
    let options: {chain?: boolean} = {};

    {
        let result: _.LoDashStatic;

        _.mixin(source);
        _.mixin(source, options);
    }

    {
        let result: AbcObject;

        _.mixin(dest, source);
        _.mixin(dest, source, options);
    }
}

// _.noConflict
{
    {
        let result: typeof _;

        _.noConflict();
    }
}

// _.noop
{
    {
        _.noop(); // $ExpectType void
        _.noop(1); // $ExpectType void
        _.noop('a', 1); // $ExpectType void
        _.noop(true, 'a', 1); // $ExpectType void
    }
}

{
    type SampleFunc = (...args: any[]) => any;

    {
        let result: SampleFunc;

        _.nthArg();
        _.nthArg(1);
    }
}

// _.over
{
    {
        let result: (...args: any[]) => number[];

        _.over<number>(Math.max);
        _.over<number>(Math.max, Math.min);
        _.over<number>([Math.max]);
        _.over<number>([Math.max], [Math.min]);
    }
}

// _.overEvery
{
    {
        let result: (...args: number[]) => boolean;

        _.overEvery((number) => true);
        _.overEvery((number) => true, (number) => true);
        _.overEvery([(number) => true]);
        _.overEvery([(number) => true], [(number) => true]);
    }
}

// _.overSome
{
    {
        let result: (...args: number[]) => boolean;

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
        let result: (object: SampleObject) => number;

        _.property<SampleObject, number>('a.b[0]');
        _.property<SampleObject, number>(['a', 'b', 0]);
    }
}

// _.propertyOf
{
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    let object: SampleObject = { a: { b: [] } };

    {
        let result: (path: string|string[]) => any;

        _.propertyOf({});
        _.propertyOf<SampleObject>(object);
    }
}

// _.range
{
    {
        let result: number[];

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
        let result: number[];

        _.rangeRight(10);
        _.rangeRight(1, 11);
        _.rangeRight(0, 30, 5);
    }

    // $ExpectType number[][]
    _.map([5, 5], _.rangeRight);
}

// _.runInContext
{
    let result: typeof _;
    _.runInContext();
    _.runInContext({});
}

// _.stubArray
{
    {
        let result: any[];

        _.stubArray();
    }
}

// _.stubFalse
{
    {
        let result: boolean;

        _.stubFalse();
    }
}

// _.stubObject
{
    {
        let result: object;

        _.stubObject();
    }
}

// _.stubString
{
    {
        let result: string;

        _.stubString();
    }
}

// _.stubTrue
{
    {
        let result: boolean;

        _.stubTrue();
    }
}

// _.times
{
    let iteratee: (num: number) => AbcObject = (num: number) => ({ a: 1, b: "", c: true });

    {
        let result: number[];

        _.times(42);
    }

    {
        let result: AbcObject[];

        _.times(42, iteratee);
    }
}

// _.toPath
{
   {
       let result: string[];
       _.toPath(true);
       _.toPath(1);
       _.toPath('a');
       _.toPath(["a"]);
       _.toPath({});
   }
}

// _.uniqueId
{
    {
        let result: string;

        _.uniqueId();
        _.uniqueId('');
    }
}

// _.partial & _.partialRight
{
    const func0 = (): number => 42;
    const func1 = (arg1: number): number => arg1 * 2;
    const func2 = (arg1: number, arg2: string): number => arg1 * arg2.length;
    const func3 = (arg1: number, arg2: string, arg3: boolean): number => arg1 * arg2.length + (arg3 ? 1 : 0);
    const func4 = (arg1: number, arg2: string, arg3: boolean, arg4: number): number => arg1 * arg2.length + (arg3 ? 1 : 0) - arg4;

    let res____: () => number;
    let res1___: (arg1: number                                              ) => number;
    let res12__: (arg1: number, arg2: string                                ) => number;
    let res123_: (arg1: number, arg2: string,   arg3: boolean               ) => number;
    let res1234: (arg1: number, arg2: string,   arg3: boolean,  arg4: number) => number;

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
