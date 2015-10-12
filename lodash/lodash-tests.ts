/// <reference path="lodash.d.ts" />

declare var $: any, jQuery: any;

interface IFoodOrganic {
    name: string;
    organic: boolean;
}

interface IFoodType {
    name: string;
    type: string;
}

interface IFoodCombined {
    name: string;
    organic: boolean;
    type: string;
}

interface IStoogesQuote {
    name: string;
    quotes: string[];
}

interface IStoogesAge {
    name: string;
    age: number;
}

interface IStoogesCombined {
    name: string;
    age: number;
    quotes: string[];
}

interface IKey {
    dir: string;
    code: number;
}

interface IDictionary<T> {
    [index: string]: T;
}

var foodsOrganic: IFoodOrganic[] = [
    { name: 'banana', organic: true },
    { name: 'beet', organic: false },
];
var foodsType: IFoodType[] = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'beet', type: 'vegetable' }
];
var foodsCombined: IFoodCombined[] = [
    { 'name': 'apple', 'organic': false, 'type': 'fruit' },
    { 'name': 'carrot', 'organic': true, 'type': 'vegetable' }
];

var stoogesQuotes: IStoogesQuote[] = [
    { 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var stoogesAges: IStoogesAge[] = [
    { 'name': 'moe', 'age': 40 },
    { 'name': 'larry', 'age': 50 }
];
var stoogesAgesDict: IDictionary<IStoogesAge> = {
    first: { 'name': 'moe', 'age': 40 },
    second: { 'name': 'larry', 'age': 50 }
};
var stoogesCombined: IStoogesCombined[] = [
    { 'name': 'curly', 'age': 30, 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'age': 40, 'quotes': ['Spread out!', 'You knucklehead!'] }
];

var keys: IKey[] = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

class Dog {
    constructor(public name: string) { }

    public bark() {
        console.log('Woof, woof!');
    }
}

var result: any;

var any: any;

interface TResult {
    a: number;
    b: string;
    c: boolean;
}

// _.MapCache
var testMapCache: _.MapCache;
result = <(key: string) => boolean>testMapCache.delete;
result = <(key: string) => any>testMapCache.get;
result = <(key: string) => boolean>testMapCache.has;
result = <(key: string, value: any) => _.Dictionary<any>>testMapCache.set;

/*************
 * Chaining *
 *************/
result = <_.LoDashWrapper<string>>_('test');
result = <_.LoDashWrapper<number>>_(1);
result = <_.LoDashWrapper<boolean>>_(true);
result = <_.LoDashArrayWrapper<string>>_(['test1', 'test2']);
// Appears to be a change in the compiler, if the type explicity implements the object indexer.
// Looking at: https://typescript.codeplex.com/wikipage?title=Known%20breaking%20changes%20between%200.8%20and%200.9&referringTitle=Documentation
// "The ‘noimplicitany’ option now warns on the use of the hidden default indexer"
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' });

result = <_.LoDashWrapper<string>>_.chain('test');
result = <_.LoDashWrapper<string>>_('test').chain();
result = <_.LoDashWrapper<number>>_.chain(1);
result = <_.LoDashWrapper<number>>_(1).chain();
result = <_.LoDashWrapper<boolean>>_.chain(true);
result = <_.LoDashWrapper<boolean>>_(true).chain();
result = <_.LoDashArrayWrapper<string>>_.chain(['test1', 'test2']);
result = <_.LoDashArrayWrapper<string>>_(['test1', 'test2']).chain();
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_.chain(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' });
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).chain();

//Wrapped array shortcut methods
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).concat(5, 6);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).concat([5, 6]);
result = <string>_([1, 2, 3, 4]).join(',');
result = <number>_([1, 2, 3, 4]).pop();
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).push(5, 6, 7);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).reverse();
result = <number>_([1, 2, 3, 4]).shift();
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).sort((a, b) => 1);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).splice(1);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).unshift(5, 6);

result = <number[]>_.tap([1, 2, 3, 4], function (array) { console.log(array); });
result = <_.LoDashWrapper<string>>_('test').tap(function (value) { console.log(value); });
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).tap(function (array) { console.log(array); });
result = <_.LoDashObjectWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).tap(function (array) { console.log(array); });

result = <string>_('test').toString();
result = <string>_([1, 2, 3]).toString();
result = <string>_({ 'key1': 'test1', 'key2': 'test2' }).toString();

// _.value (aliases: _.run, _.toJSON, _.valueOf)
result = <string>_('test').value();
result = <number[]>_([1, 2, 3]).run();
result = <_.Dictionary<string>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).toJSON();
result = <_.Dictionary<number>>_({ a: 1, b: 2}).mapValues(function(num: number) { return num * 2; }).valueOf();

/*********
 * Array *
 *********/

// _.chunk
module TestChunk {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[][];
    result = _.chunk<TResult>(array);
    result = _.chunk<TResult>(array, 42);
    result = _.chunk<TResult>(list);
    result = _.chunk<TResult>(list, 42);
    result = _(array).chunk().value();
    result = _(array).chunk(42).value();
    result = _(list).chunk<TResult>().value();
    result = _(list).chunk<TResult>(42).value();
}

// _.compact
module TestCompact {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];

    result = _.compact<TResult>();
    result = _.compact<TResult>(array);
    result = _.compact<TResult>(list);
    result = _<TResult>(array).compact().value();
    result = _(list).compact<TResult>().value();
}

// _.difference
{
    let testDifferenceArray: TResult[];
    let testDifferenceList: _.List<TResult>;
    let result: TResult[];
    result = _.difference<TResult>(testDifferenceArray);
    result = _.difference<TResult>(testDifferenceArray, testDifferenceArray);
    result = _.difference<TResult>(testDifferenceArray, testDifferenceList, testDifferenceArray);
    result = _.difference<TResult>(testDifferenceArray, testDifferenceArray, testDifferenceList, testDifferenceArray);
    result = _.difference<TResult>(testDifferenceList);
    result = _.difference<TResult>(testDifferenceList, testDifferenceList);
    result = _.difference<TResult>(testDifferenceList, testDifferenceArray, testDifferenceList);
    result = _.difference<TResult>(testDifferenceList, testDifferenceList, testDifferenceArray, testDifferenceList);
    result = _(testDifferenceArray).difference().value();
    result = _(testDifferenceArray).difference(testDifferenceArray).value();
    result = _(testDifferenceArray).difference(testDifferenceList, testDifferenceArray).value();
    result = _(testDifferenceArray).difference(testDifferenceArray, testDifferenceList, testDifferenceArray).value();
    result = _(testDifferenceList).difference<TResult>().value();
    result = _(testDifferenceList).difference<TResult>(testDifferenceList).value();
    result = _(testDifferenceList).difference<TResult>(testDifferenceArray, testDifferenceList).value();
    result = _(testDifferenceList).difference<TResult>(testDifferenceList, testDifferenceArray, testDifferenceList).value();
}

// _.drop
{
    let testDropArray: TResult[];
    let testDropList: _.List<TResult>;
    let result: TResult[];
    result = _.drop<TResult>(testDropArray);
    result = _.drop<TResult>(testDropArray, 42);
    result = _.drop<TResult>(testDropList);
    result = _.drop<TResult>(testDropList, 42);
    result = _(testDropArray).drop().value();
    result = _(testDropArray).drop(42).value();
    result = _(testDropList).drop<TResult>().value();
    result = _(testDropList).drop<TResult>(42).value();
}

// _.dropRight
module TestDropRight {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];
    result = _.dropRight<TResult>(array);
    result = _.dropRight<TResult>(array, 42);
    result = _.dropRight<TResult>(list);
    result = _.dropRight<TResult>(list, 42);
    result = _(array).dropRight().value();
    result = _(array).dropRight(42).value();
    result = _(list).dropRight<TResult>().value();
    result = _(list).dropRight<TResult>(42).value();
}

// _.dropRightWhile
module TestDropRightWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let result: TResult[];

    result = _.dropRightWhile<TResult>(array);
    result = _.dropRightWhile<TResult>(array, predicateFn);
    result = _.dropRightWhile<TResult>(array, predicateFn, any);
    result = _.dropRightWhile<TResult>(array, '');
    result = _.dropRightWhile<TResult>(array, '', any);
    result = _.dropRightWhile<{a: number;}, TResult>(array, {a: 42});

    result = _.dropRightWhile<TResult>(list);
    result = _.dropRightWhile<TResult>(list, predicateFn);
    result = _.dropRightWhile<TResult>(list, predicateFn, any);
    result = _.dropRightWhile<TResult>(list, '');
    result = _.dropRightWhile<TResult>(list, '', any);
    result = _.dropRightWhile<{a: number;}, TResult>(list, {a: 42});

    result = _(array).dropRightWhile().value();
    result = _(array).dropRightWhile(predicateFn).value();
    result = _(array).dropRightWhile(predicateFn, any).value();
    result = _(array).dropRightWhile('').value();
    result = _(array).dropRightWhile('', any).value();
    result = _(array).dropRightWhile<{a: number;}>({a: 42}).value();

    result = _(list).dropRightWhile<TResult>().value();
    result = _(list).dropRightWhile<TResult>(predicateFn).value();
    result = _(list).dropRightWhile<TResult>(predicateFn, any).value();
    result = _(list).dropRightWhile<TResult>('').value();
    result = _(list).dropRightWhile<TResult>('', any).value();
    result = _(list).dropRightWhile<{a: number;}, TResult>({a: 42}).value();
}

// _.dropWhile
module TestDropWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let result: TResult[];

    result = _.dropWhile<TResult>(array);
    result = _.dropWhile<TResult>(array, predicateFn);
    result = _.dropWhile<TResult>(array, predicateFn, any);
    result = _.dropWhile<TResult>(array, '');
    result = _.dropWhile<TResult>(array, '', any);
    result = _.dropWhile<{a: number;}, TResult>(array, {a: 42});

    result = _.dropWhile<TResult>(list);
    result = _.dropWhile<TResult>(list, predicateFn);
    result = _.dropWhile<TResult>(list, predicateFn, any);
    result = _.dropWhile<TResult>(list, '');
    result = _.dropWhile<TResult>(list, '', any);
    result = _.dropWhile<{a: number;}, TResult>(list, {a: 42});

    result = _(array).dropWhile().value();
    result = _(array).dropWhile(predicateFn).value();
    result = _(array).dropWhile(predicateFn, any).value();
    result = _(array).dropWhile('').value();
    result = _(array).dropWhile('', any).value();
    result = _(array).dropWhile<{a: number;}>({a: 42}).value();

    result = _(list).dropWhile<TResult>().value();
    result = _(list).dropWhile<TResult>(predicateFn).value();
    result = _(list).dropWhile<TResult>(predicateFn, any).value();
    result = _(list).dropWhile<TResult>('').value();
    result = _(list).dropWhile<TResult>('', any).value();
    result = _(list).dropWhile<{a: number;}, TResult>({a: 42}).value();
}

// _.fill
var testFillArray = [1, 2, 3];
var testFillList: _.List<number> = {0: 1, 1: 2, 2: 3, length: 3};

result = <string[]>_.fill<string>(testFillArray, 'a', 0, 3);
result = <_.List<string>>_.fill<string>(testFillList, 'a', 0, 3);
result = <number[]>_(testFillArray).fill<number>(0, 0, 3).value();
result = <_.List<number>>_(testFillList).fill<number>(0, 0, 3).value();

// _.findIndex
module TestFindIndex {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index?: number, collection?: _.List<TResult>) => boolean;
    let result: number;

    result = _.findIndex<TResult>(array);
    result = _.findIndex<TResult>(array, predicateFn);
    result = _.findIndex<TResult>(array, predicateFn, any);
    result = _.findIndex<TResult>(array, '');
    result = _.findIndex<TResult>(array, '', any);
    result = _.findIndex<{a: number}, TResult>(array, {a: 42});

    result = _.findIndex<TResult>(list);
    result = _.findIndex<TResult>(list, predicateFn);
    result = _.findIndex<TResult>(list, predicateFn, any);
    result = _.findIndex<TResult>(list, '');
    result = _.findIndex<TResult>(list, '', any);
    result = _.findIndex<{a: number}, TResult>(list, {a: 42});

    result = _<TResult>(array).findIndex();
    result = _<TResult>(array).findIndex(predicateFn);
    result = _<TResult>(array).findIndex(predicateFn, any);
    result = _<TResult>(array).findIndex('');
    result = _<TResult>(array).findIndex('', any);
    result = _<TResult>(array).findIndex<{a: number}>({a: 42});

    result = _(list).findIndex();
    result = _(list).findIndex<TResult>(predicateFn);
    result = _(list).findIndex<TResult>(predicateFn, any);
    result = _(list).findIndex('');
    result = _(list).findIndex('', any);
    result = _(list).findIndex<{a: number}>({a: 42});
}

// _.findLastIndex
module TestFindLastIndex {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index?: number, collection?: _.List<TResult>) => boolean;
    let result: number;

    result = _.findLastIndex<TResult>(array);
    result = _.findLastIndex<TResult>(array, predicateFn);
    result = _.findLastIndex<TResult>(array, predicateFn, any);
    result = _.findLastIndex<TResult>(array, '');
    result = _.findLastIndex<TResult>(array, '', any);
    result = _.findLastIndex<{a: number}, TResult>(array, {a: 42});

    result = _.findLastIndex<TResult>(list);
    result = _.findLastIndex<TResult>(list, predicateFn);
    result = _.findLastIndex<TResult>(list, predicateFn, any);
    result = _.findLastIndex<TResult>(list, '');
    result = _.findLastIndex<TResult>(list, '', any);
    result = _.findLastIndex<{a: number}, TResult>(list, {a: 42});

    result = _<TResult>(array).findLastIndex();
    result = _<TResult>(array).findLastIndex(predicateFn);
    result = _<TResult>(array).findLastIndex(predicateFn, any);
    result = _<TResult>(array).findLastIndex('');
    result = _<TResult>(array).findLastIndex('', any);
    result = _<TResult>(array).findLastIndex<{a: number}>({a: 42});

    result = _(list).findLastIndex();
    result = _(list).findLastIndex<TResult>(predicateFn);
    result = _(list).findLastIndex<TResult>(predicateFn, any);
    result = _(list).findLastIndex('');
    result = _(list).findLastIndex('', any);
    result = _(list).findLastIndex<{a: number}>({a: 42});
}

// _.first
module TestFirst {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult;
    result = _.first<TResult>(array);
    result = _.first<TResult>(list);
    result = _(array).first();
    result = _(list).first<TResult>();
}

result = <Array<number>>_.flatten([[1, 2], [3, 4]]);
result = <Array<number>>_.flatten([[1, 2], [3, 4], 5, 6]);
result = <Array<number|Array<Array<number>>>>_.flatten([1, [2], [3, [[4]]]]);

result = <Array<number>>_.flatten([1, [2], [[3]]], true);
result = <Array<number>>_.flatten<number>([1, [2], [3, [[4]]]], true);
result = <Array<number|boolean>>_.flatten<number|boolean>([1, [2], [3, [[false]]]], true);

result = <_.LoDashArrayWrapper<number>>_([[1, 2], [3, 4], 5, 6]).flatten();
result = <_.LoDashArrayWrapper<number|Array<Array<number>>>>_([1, [2], [3, [[4]]]]).flatten();

result = <_.LoDashArrayWrapper<number>>_([1, [2], [3, [[4]]]]).flatten(true);

// _.flattenDeep
module TestFlattenDeep {
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends _.List<T|RecursiveArray<T>> {}
    interface RecursiveList<T> extends _.List<T|RecursiveList<T>> { }

    let recursiveArray: RecursiveArray<TResult>;
    let listOfMaybeRecursiveArraysOrValues: ListOfRecursiveArraysOrValues<TResult>;
    let recursiveList: RecursiveList<TResult>;

    {
        let result: TResult[];

        result = _.flattenDeep<TResult>(recursiveArray);
        result = _.flattenDeep<TResult>(listOfMaybeRecursiveArraysOrValues);

        result = _(recursiveArray).flattenDeep<TResult>().value();

        result = _(listOfMaybeRecursiveArraysOrValues).flattenDeep<TResult>().value();
    }

    {
        let result: any;

        result = _.flattenDeep<TResult>(recursiveList);

        result = _(recursiveList).flattenDeep().value();
    }
}

// _.head
module TestHead {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult;
    result = _.head<TResult>(array);
    result = _.head<TResult>(list);
    result = _(array).head();
    result = _(list).head<TResult>();
}

// _.indexOf
module TestIndexOf {
    let array: TResult[];
    let list: _.List<TResult>;
    let value: TResult;
    let result: number;
    result = _.indexOf<TResult>(array, value);
    result = _.indexOf<TResult>(array, value, true);
    result = _.indexOf<TResult>(array, value, 42);
    result = _.indexOf<TResult>(list, value);
    result = _.indexOf<TResult>(list, value, true);
    result = _.indexOf<TResult>(list, value, 42);
    result = _(array).indexOf(value);
    result = _(array).indexOf(value, true);
    result = _(array).indexOf(value, 42);
    result = _(list).indexOf<TResult>(value);
    result = _(list).indexOf<TResult>(value, true);
    result = _(list).indexOf<TResult>(value, 42);
}

//_.initial
{
    let testInitalArray: TResult[];
    let testInitalList: _.List<TResult>;
    let result: TResult[];
    result = _.initial<TResult>(testInitalArray);
    result = _.initial<TResult>(testInitalList);
    result = _(testInitalArray).initial().value();
    result = _(testInitalList).initial<TResult>().value();
}

// _.intersection
{
    let testIntersectionArray: TResult[];
    let testIntersectionList: _.List<TResult>;
    let result: TResult[];
    result = _.intersection<TResult>(testIntersectionArray, testIntersectionList);
    result = _.intersection<TResult>(testIntersectionList, testIntersectionArray, testIntersectionList);
    result = _(testIntersectionArray).intersection<TResult>(testIntersectionArray).value();
    result = _(testIntersectionArray).intersection<TResult>(testIntersectionList, testIntersectionArray).value();
    result = _(testIntersectionList).intersection<TResult>(testIntersectionArray).value();
    result = _(testIntersectionList).intersection<TResult>(testIntersectionList, testIntersectionArray).value();
}

// _.last
module TestLast {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult;

    result = _.last<TResult>(array);
    result = _.last<TResult>(list);
    result = _<TResult>(array).last();
    result = _(list).last<TResult>();
}

// _.lastIndexOf
module TestLastIndexOf {
    let array: TResult[];
    let list: _.List<TResult>;
    let value: TResult;
    let result: number;

    result = _.lastIndexOf<TResult>(array, value);
    result = _.lastIndexOf<TResult>(array, value, true);
    result = _.lastIndexOf<TResult>(array, value, 42);

    result = _.lastIndexOf<TResult>(list, value);
    result = _.lastIndexOf<TResult>(list, value, true);
    result = _.lastIndexOf<TResult>(list, value, 42);

    result = _(array).lastIndexOf(value);
    result = _(array).lastIndexOf(value, true);
    result = _(array).lastIndexOf(value, 42);

    result = _(list).lastIndexOf<TResult>(value);
    result = _(list).lastIndexOf<TResult>(value, true);
    result = _(list).lastIndexOf<TResult>(value, 42);
}

// _.object
module TestObject {
    let arrayOfKeys: string[];
    let arrayOfValues: number[];

    let listOfKeys: _.List<string>;
    let listOfValues: _.List<number>;

    {
        let result: _.Dictionary<void>;

        result = _.object<_.Dictionary<void>>(arrayOfKeys);
        result = _.object<_.Dictionary<void>>(listOfKeys);

        result = _(arrayOfKeys).object<_.Dictionary<void>>().value();
        result = _(listOfKeys).object<_.Dictionary<void>>().value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.object<_.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.object<_.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.object<_.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.object<_.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _.object<number, _.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.object<number, _.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.object<number, _.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.object<number, _.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _(arrayOfKeys).object<_.Dictionary<number>>(arrayOfValues).value();
        result = _(arrayOfKeys).object<_.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).object<_.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).object<_.Dictionary<number>>(arrayOfValues).value();

        result = _(arrayOfKeys).object<number, _.Dictionary<number>>(arrayOfValues).value();
        result = _(arrayOfKeys).object<number, _.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).object<number, _.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).object<number, _.Dictionary<number>>(arrayOfValues).value();
    }

    {
        let result: _.Dictionary<any>;

        result = _.object(arrayOfKeys);
        result = _.object(arrayOfKeys, arrayOfValues);
        result = _.object(arrayOfKeys, listOfValues);

        result = _.object(listOfKeys);
        result = _.object(listOfKeys, listOfValues);
        result = _.object(listOfKeys, arrayOfValues);

        result = _(arrayOfKeys).object().value();
        result = _(arrayOfKeys).object(arrayOfValues).value();
        result = _(arrayOfKeys).object(listOfValues).value();

        result = _(listOfKeys).object().value();
        result = _(listOfKeys).object(listOfValues).value();
        result = _(listOfKeys).object(arrayOfValues).value();
    }
}

// _.pull
{
    let testPullArray: TResult[];
    let testPullValue: TResult;
    let result: TResult[];
    result = _.pull<TResult>(testPullArray);
    result = _.pull<TResult>(testPullArray, testPullValue);
    result = _.pull<TResult>(testPullArray, testPullValue, testPullValue);
    result = _.pull<TResult>(testPullArray, testPullValue, testPullValue, testPullValue);
    result = _(testPullArray).pull().value();
    result = _(testPullArray).pull(testPullValue).value();
    result = _(testPullArray).pull(testPullValue, testPullValue).value();
    result = _(testPullArray).pull(testPullValue, testPullValue, testPullValue).value();
}
{
    let testPullList: _.List<TResult>;
    let testPullValue: TResult;
    let result: _.List<TResult>;
    result = _.pull<TResult>(testPullList);
    result = _.pull<TResult>(testPullList, testPullValue);
    result = _.pull<TResult>(testPullList, testPullValue, testPullValue);
    result = _.pull<TResult>(testPullList, testPullValue, testPullValue, testPullValue);
    result = _(testPullList).pull<TResult>().value();
    result = _(testPullList).pull<TResult>(testPullValue).value();
    result = _(testPullList).pull<TResult>(testPullValue, testPullValue).value();
    result = _(testPullList).pull<TResult>(testPullValue, testPullValue, testPullValue).value();
}

// _.pullAt
{
    let testPullAtArray: TResult[];
    let testPullAtList: _.List<TResult>;
    let result: TResult[];
    result = _.pullAt<TResult>(testPullAtArray);
    result = _.pullAt<TResult>(testPullAtArray, 1);
    result = _.pullAt<TResult>(testPullAtArray, [2, 3], 1);
    result = _.pullAt<TResult>(testPullAtArray, 4, [2, 3], 1);
    result = _.pullAt<TResult>(testPullAtList);
    result = _.pullAt<TResult>(testPullAtList, 1);
    result = _.pullAt<TResult>(testPullAtList, [2, 3], 1);
    result = _.pullAt<TResult>(testPullAtList, 4, [2, 3], 1);
    result = _(testPullAtArray).pullAt().value();
    result = _(testPullAtArray).pullAt(1).value();
    result = _(testPullAtArray).pullAt([2, 3], 1).value();
    result = _(testPullAtArray).pullAt(4, [2, 3], 1).value();
    result = _(testPullAtList).pullAt<TResult>().value();
    result = _(testPullAtList).pullAt<TResult>(1).value();
    result = _(testPullAtList).pullAt<TResult>([2, 3], 1).value();
    result = _(testPullAtList).pullAt<TResult>(4, [2, 3], 1).value();
}

// _.remove
module TestRemove {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index?: number, collection?: _.List<TResult>) => boolean;
    let result: TResult[];

    result = _.remove<TResult>(array);
    result = _.remove<TResult>(array, predicateFn);
    result = _.remove<TResult>(array, predicateFn, any);
    result = _.remove<TResult>(array, '');
    result = _.remove<TResult>(array, '', any);
    result = _.remove<{a: number}, TResult>(array, {a: 42});

    result = _.remove<TResult>(list);
    result = _.remove<TResult>(list, predicateFn);
    result = _.remove<TResult>(list, predicateFn, any);
    result = _.remove<TResult>(list, '');
    result = _.remove<TResult>(list, '', any);
    result = _.remove<{a: number}, TResult>(list, {a: 42});

    result = _<TResult>(array).remove().value();
    result = _<TResult>(array).remove(predicateFn).value();
    result = _<TResult>(array).remove(predicateFn, any).value();
    result = _<TResult>(array).remove('').value();
    result = _<TResult>(array).remove('', any).value();
    result = _<TResult>(array).remove<{a: number}>({a: 42}).value();

    result = _(list).remove<TResult>().value();
    result = _(list).remove<TResult>(predicateFn).value();
    result = _(list).remove<TResult>(predicateFn, any).value();
    result = _(list).remove<TResult>('').value();
    result = _(list).remove<TResult>('', any).value();
    result = _(list).remove<{a: number}, TResult>({a: 42}).value();
}

// _.rest
module TestRest {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];

    result = _.rest<TResult>(array);
    result = _.rest<TResult>(list);
    result = _(array).rest().value();
    result = _(list).rest<TResult>().value();
}

// _.slice
{
    let testSliceArray: TResult[];
    let result: TResult[];
    result = _.slice(testSliceArray);
    result = _.slice(testSliceArray, 42);
    result = _.slice(testSliceArray, 42, 42);
    result = _(testSliceArray).slice().value();
    result = _(testSliceArray).slice(42).value();
    result = _(testSliceArray).slice(42, 42).value();
}

result = <number>_.sortedIndex([20, 30, 50], 40);
result = <number>_.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
var sortedIndexDict: { wordToNumber: { [idx: string]: number } } = {
    'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
};
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
    return sortedIndexDict.wordToNumber[word];
});
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
    return this.wordToNumber[word];
}, sortedIndexDict);

// _.tail
module TestTail {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];

    result = _.tail<TResult>(array);
    result = _.tail<TResult>(list);
    result = _(array).tail().value();
    result = _(list).tail<TResult>().value();
}

// _.take
module TestTake {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];
    result = _.take<TResult>(array);
    result = _.take<TResult>(array, 42);
    result = _.take<TResult>(list);
    result = _.take<TResult>(list, 42);
    result = _(array).take().value();
    result = _(array).take(42).value();
    result = _(list).take<TResult>().value();
    result = _(list).take<TResult>(42).value();
}

// _.takeRight
{
    let testTakeRightArray: TResult[];
    let testTakeRightList: _.List<TResult>;
    let result: TResult[];
    result = _.takeRight<TResult>(testTakeRightArray);
    result = _.takeRight<TResult>(testTakeRightArray, 42);
    result = _.takeRight<TResult>(testTakeRightList);
    result = _.takeRight<TResult>(testTakeRightList, 42);
    result = _(testTakeRightArray).takeRight().value();
    result = _(testTakeRightArray).takeRight(42).value();
    result = _(testTakeRightList).takeRight<TResult>().value();
    result = _(testTakeRightList).takeRight<TResult>(42).value();
}

// _.takeRightWhile
module TestTakeRightWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let result: TResult[];

    result = _.takeRightWhile<TResult>(array);
    result = _.takeRightWhile<TResult>(array, predicateFn);
    result = _.takeRightWhile<TResult>(array, predicateFn, any);
    result = _.takeRightWhile<TResult>(array, '');
    result = _.takeRightWhile<TResult>(array, '', any);
    result = _.takeRightWhile<{a: number;}, TResult>(array, {a: 42});

    result = _.takeRightWhile<TResult>(list);
    result = _.takeRightWhile<TResult>(list, predicateFn);
    result = _.takeRightWhile<TResult>(list, predicateFn, any);
    result = _.takeRightWhile<TResult>(list, '');
    result = _.takeRightWhile<TResult>(list, '', any);
    result = _.takeRightWhile<{a: number;}, TResult>(list, {a: 42});

    result = _(array).takeRightWhile().value();
    result = _(array).takeRightWhile(predicateFn).value();
    result = _(array).takeRightWhile(predicateFn, any).value();
    result = _(array).takeRightWhile('').value();
    result = _(array).takeRightWhile('', any).value();
    result = _(array).takeRightWhile<{a: number;}>({a: 42}).value();

    result = _(list).takeRightWhile<TResult>().value();
    result = _(list).takeRightWhile<TResult>(predicateFn).value();
    result = _(list).takeRightWhile<TResult>(predicateFn, any).value();
    result = _(list).takeRightWhile<TResult>('').value();
    result = _(list).takeRightWhile<TResult>('', any).value();
    result = _(list).takeRightWhile<{a: number;}, TResult>({a: 42}).value();
}

// _.takeWhile
module TestTakeWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let result: TResult[];

    result = _.takeWhile<TResult>(array);
    result = _.takeWhile<TResult>(array, predicateFn);
    result = _.takeWhile<TResult>(array, predicateFn, any);
    result = _.takeWhile<TResult>(array, '');
    result = _.takeWhile<TResult>(array, '', any);
    result = _.takeWhile<{a: number;}, TResult>(array, {a: 42});

    result = _.takeWhile<TResult>(list);
    result = _.takeWhile<TResult>(list, predicateFn);
    result = _.takeWhile<TResult>(list, predicateFn, any);
    result = _.takeWhile<TResult>(list, '');
    result = _.takeWhile<TResult>(list, '', any);
    result = _.takeWhile<{a: number;}, TResult>(list, {a: 42});

    result = _(array).takeWhile().value();
    result = _(array).takeWhile(predicateFn).value();
    result = _(array).takeWhile(predicateFn, any).value();
    result = _(array).takeWhile('').value();
    result = _(array).takeWhile('', any).value();
    result = _(array).takeWhile<{a: number;}>({a: 42}).value();

    result = _(list).takeWhile<TResult>().value();
    result = _(list).takeWhile<TResult>(predicateFn).value();
    result = _(list).takeWhile<TResult>(predicateFn, any).value();
    result = _(list).takeWhile<TResult>('').value();
    result = _(list).takeWhile<TResult>('', any).value();
    result = _(list).takeWhile<{a: number;}, TResult>({a: 42}).value();
}

// _.union
module TestUnion {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];

    result = _.union<TResult>();

    result = _.union<TResult>(array);
    result = _.union<TResult>(array, list);
    result = _.union<TResult>(array, list, array);

    result = _.union<TResult>(list);
    result = _.union<TResult>(list, array);
    result = _.union<TResult>(list, array, list);

    result = _(array).union().value();
    result = _(array).union(list).value();
    result = _(array).union(list, array).value();

    result = _(array).union<TResult>().value();
    result = _(array).union<TResult>(list).value();
    result = _(array).union<TResult>(list, array).value();

    result = _(list).union<TResult>().value();
    result = _(list).union<TResult>(array).value();
    result = _(list).union<TResult>(array, list).value();
}

result = <number[]>_.uniq([1, 2, 1, 3, 1]);
result = <number[]>_.uniq([1, 1, 2, 2, 3], true);
result = <string[]>_.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = <number[]>_.uniq([1, 2.5, 3, 1.5, 2, 3.5], function (num) { return this.floor(num); }, Math);
result = <{ x: number; }[]>_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <number[]>_.unique([1, 2, 1, 3, 1]);
result = <number[]>_.unique([1, 1, 2, 2, 3], true);
result = <string[]>_.unique(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = <number[]>_.unique([1, 2.5, 3, 1.5, 2, 3.5], function (num) { return this.floor(num); }, Math);
result = <{ x: number; }[]>_.unique([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <number[]>_([1, 2, 1, 3, 1]).uniq().value();
result = <number[]>_([1, 1, 2, 2, 3]).uniq(true).value();
result = <string[]>_(['A', 'b', 'C', 'a', 'B', 'c']).uniq(function (letter) {
    return letter.toLowerCase();
}).value();
result = <number[]>_([1, 2.5, 3, 1.5, 2, 3.5]).uniq(function (num) { return this.floor(num); }, Math).value();
result = <{ x: number; }[]>_([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]).uniq('x').value();

result = <number[]>_([1, 2, 1, 3, 1]).unique().value();
result = <number[]>_([1, 1, 2, 2, 3]).unique(true).value();
result = <string[]>_(['A', 'b', 'C', 'a', 'B', 'c']).unique(function (letter) {
    return letter.toLowerCase();
}).value();
result = <number[]>_([1, 2.5, 3, 1.5, 2, 3.5]).unique(function (num) { return this.floor(num); }, Math).value();
result = <{ x: number; }[]>_([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }]).unique('x').value();

// _.unzipWith
{
    let testUnzipWithArray: (number[]|_.List<number>)[];
    let testUnzipWithList: _.List<number[]|_.List<number>>;
    let testUnzipWithIterator: {(prev: TResult, curr: number, index?: number, list?: number[]): TResult};
    let result: TResult[];
    result = _.unzipWith<number, TResult>(testUnzipWithArray);
    result = _.unzipWith<number, TResult>(testUnzipWithArray, testUnzipWithIterator);
    result = _.unzipWith<number, TResult>(testUnzipWithArray, testUnzipWithIterator, any);
    result = _.unzipWith<number, TResult>(testUnzipWithList);
    result = _.unzipWith<number, TResult>(testUnzipWithList, testUnzipWithIterator);
    result = _.unzipWith<number, TResult>(testUnzipWithList, testUnzipWithIterator, any);
    result = _(testUnzipWithArray).unzipWith<number, TResult>(testUnzipWithIterator).value();
    result = _(testUnzipWithArray).unzipWith<number, TResult>(testUnzipWithIterator, any).value();
    result = _(testUnzipWithList).unzipWith<number, TResult>(testUnzipWithIterator).value();
    result = _(testUnzipWithList).unzipWith<number, TResult>(testUnzipWithIterator, any).value();
}

// _.without
{
    let testWithoutArray: number[];
    let testWithoutList: _.List<number>;
    let result: number[];
    result = _.without<number>(testWithoutArray);
    result = _.without<number>(testWithoutArray, 1);
    result = _.without<number>(testWithoutArray, 1, 2);
    result = _.without<number>(testWithoutArray, 1, 2, 3);
    result = _.without<number>(testWithoutList);
    result = _.without<number>(testWithoutList, 1);
    result = _.without<number>(testWithoutList, 1, 2);
    result = _.without<number>(testWithoutList, 1, 2, 3);
    result = _(testWithoutArray).without().value();
    result = _(testWithoutArray).without(1).value();
    result = _(testWithoutArray).without(1, 2).value();
    result = _(testWithoutArray).without(1, 2, 3).value();
    result = _(testWithoutList).without<number>().value();
    result = _(testWithoutList).without<number>(1).value();
    result = _(testWithoutList).without<number>(1, 2).value();
    result = _(testWithoutList).without<number>(1, 2, 3).value();
}

// _.xor
module TestXor {
    let array: TResult[];
    let list: _.List<TResult>;
    let result: TResult[];

    result = _.xor<TResult>();

    result = _.xor<TResult>(array);
    result = _.xor<TResult>(array, list);
    result = _.xor<TResult>(array, list, array);

    result = _.xor<TResult>(list);
    result = _.xor<TResult>(list, array);
    result = _.xor<TResult>(list, array, list);

    result = _(array).xor().value();
    result = _(array).xor(list).value();
    result = _(array).xor(list, array).value();

    result = _(list).xor<TResult>().value();
    result = _(list).xor<TResult>(array).value();
    result = _(list).xor<TResult>(array, list).value();
}

result = <any[][]>_.zip(['moe', 'larry'], [30, 40], [true, false]);
result = <any[][]>_.unzip(['moe', 'larry'], [30, 40], [true, false]);
result = <any[][]>_(['moe', 'larry']).zip([30, 40], [true, false]).value();
result = <any[][]>_(['moe', 'larry']).unzip([30, 40], [true, false]).value();

// _.zipObject
module TestZipObject {
    let arrayOfKeys: string[];
    let arrayOfValues: number[];

    let listOfKeys: _.List<string>;
    let listOfValues: _.List<number>;

    {
        let result: _.Dictionary<void>;

        result = _.zipObject<_.Dictionary<void>>(arrayOfKeys);
        result = _.zipObject<_.Dictionary<void>>(listOfKeys);

        result = _(arrayOfKeys).zipObject<_.Dictionary<void>>().value();
        result = _(listOfKeys).zipObject<_.Dictionary<void>>().value();
    }

    {
        let result: _.Dictionary<number>;

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.zipObject<_.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.zipObject<_.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.zipObject<_.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _.zipObject<number, _.Dictionary<number>>(arrayOfKeys, arrayOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(arrayOfKeys, listOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(listOfKeys, listOfValues);
        result = _.zipObject<number, _.Dictionary<number>>(listOfKeys, arrayOfValues);

        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues).value();
        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues).value();

        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues).value();
        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues).value();
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues).value();
    }

    {
        let result: _.Dictionary<any>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);

        result = _.zipObject(listOfKeys);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);

        result = _(arrayOfKeys).zipObject().value();
        result = _(arrayOfKeys).zipObject(arrayOfValues).value();
        result = _(arrayOfKeys).zipObject(listOfValues).value();

        result = _(listOfKeys).zipObject().value();
        result = _(listOfKeys).zipObject(listOfValues).value();
        result = _(listOfKeys).zipObject(arrayOfValues).value();
    }
}

// _.zipWith
interface TestZipWithFn {
    (a1: number, a2: number): number;
}
var testZipWithFn: TestZipWithFn;
result = <number[]>_.zipWith<number>([1, 2]);
result = <number[]>_.zipWith<number>([1, 2], testZipWithFn);
result = <number[]>_.zipWith<number>([1, 2], testZipWithFn, any);
result = <number[]>_.zipWith<number>([1, 2], [1, 2], testZipWithFn, any);
result = <number[]>_.zipWith<number>([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn, any);
result = <number[]>_([1, 2]).zipWith<number>().value();
result = <number[]>_([1, 2]).zipWith<number>(testZipWithFn).value();
result = <number[]>_([1, 2]).zipWith<number>(testZipWithFn, any).value();
result = <number[]>_([1, 2]).zipWith<number>([1, 2], testZipWithFn, any).value();
result = <number[]>_([1, 2]).zipWith<number>([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], testZipWithFn, any).value();

/*********
 * Chain *
 *********/

// _.thru
{
    let result: number;
    result = _.thru<number, number>(1, (value: number) => value);
    result = _.thru<number, number>(1, (value: number) => value, any);
}
{
    let result: _.LoDashWrapper<number>;
    result = _(1).thru<number>((value: number) => value);
    result = _(1).thru<number>((value: number) => value, any);
}
{
    let result: _.LoDashWrapper<string>;
    result = _('').thru<string>((value: string) => value);
    result = _('').thru<string>((value: string) => value, any);
}
{
    let result: _.LoDashWrapper<boolean>;
    result = _(true).thru<boolean>((value: boolean) => value);
    result = _(true).thru<boolean>((value: boolean) => value, any);
}
{
    let result: _.LoDashObjectWrapper<any>;
    result = _({}).thru<Object>((value: Object) => value);
    result = _({}).thru<Object>((value: Object) => value, any);
}
{
    let result: _.LoDashArrayWrapper<number>;
    result = _([1, 2, 3]).thru<number>((value: number[]) => value);
    result = _([1, 2, 3]).thru<number>((value: number[]) => value, any);
}

// _.prototype.commit
{
    let result: _.LoDashWrapper<number>;
    result = _(42).commit();
}
{
    let result: _.LoDashArrayWrapper<any>;
    result = _<any>([]).commit();
}
{
    let result: _.LoDashObjectWrapper<any>;
    result = _({}).commit();
}

// _.prototype.plant
{
    let result: _.LoDashWrapper<number>;
    result = _(any).plant(42);
}
{
    let result: _.LoDashStringWrapper;
    result = _(any).plant('');
}
{
    let result: _.LoDashWrapper<boolean>;
    result = _(any).plant(true);
}
{
    let result: _.LoDashNumberArrayWrapper;
    result = _(any).plant([42]);
}
{
    let result: _.LoDashArrayWrapper<any>;
    result = _(any).plant<any>([]);
}
{
    let result: _.LoDashObjectWrapper<{}>;
    result = _(any).plant<{}>({});
}

/**************
 * Collection *
 **************/

// _.all
module TestAll {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: boolean;

    result = _.all<TResult>(array);
    result = _.all<TResult>(array, listIterator);
    result = _.all<TResult>(array, listIterator, any);
    result = _.all<TResult>(array, '');
    result = _.all<{a: number}, TResult>(array, {a: 42});

    result = _.all<TResult>(list);
    result = _.all<TResult>(list, listIterator);
    result = _.all<TResult>(list, listIterator, any);
    result = _.all<TResult>(list, '');
    result = _.all<{a: number}, TResult>(list, {a: 42});

    result = _.all<TResult>(dictionary);
    result = _.all<TResult>(dictionary, dictionaryIterator);
    result = _.all<TResult>(dictionary, dictionaryIterator, any);
    result = _.all<TResult>(dictionary, '');
    result = _.all<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).all();
    result = _(array).all(listIterator);
    result = _(array).all(listIterator, any);
    result = _(array).all('');
    result = _(array).all<{a: number}>({a: 42});

    result = _(list).all<TResult>();
    result = _(list).all<TResult>(listIterator);
    result = _(list).all<TResult>(listIterator, any);
    result = _(list).all('');
    result = _(list).all<{a: number}>({a: 42});

    result = _(dictionary).all<TResult>();
    result = _(dictionary).all<TResult>(dictionaryIterator);
    result = _(dictionary).all<TResult>(dictionaryIterator, any);
    result = _(dictionary).all('');
    result = _(dictionary).all<{a: number}>({a: 42});
}

// _.any
module TestAny {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: boolean;

    result = _.any<TResult>(array);
    result = _.any<TResult>(array, listIterator);
    result = _.any<TResult>(array, listIterator, any);
    result = _.any<TResult>(array, '');
    result = _.any<{a: number}, TResult>(array, {a: 42});

    result = _.any<TResult>(list);
    result = _.any<TResult>(list, listIterator);
    result = _.any<TResult>(list, listIterator, any);
    result = _.any<TResult>(list, '');
    result = _.any<{a: number}, TResult>(list, {a: 42});

    result = _.any<TResult>(dictionary);
    result = _.any<TResult>(dictionary, dictionaryIterator);
    result = _.any<TResult>(dictionary, dictionaryIterator, any);
    result = _.any<TResult>(dictionary, '');
    result = _.any<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).any();
    result = _(array).any(listIterator);
    result = _(array).any(listIterator, any);
    result = _(array).any('');
    result = _(array).any<{a: number}>({a: 42});

    result = _(list).any<TResult>();
    result = _(list).any<TResult>(listIterator);
    result = _(list).any<TResult>(listIterator, any);
    result = _(list).any('');
    result = _(list).any<{a: number}>({a: 42});

    result = _(dictionary).any<TResult>();
    result = _(dictionary).any<TResult>(dictionaryIterator);
    result = _(dictionary).any<TResult>(dictionaryIterator, any);
    result = _(dictionary).any('');
    result = _(dictionary).any<{a: number}>({a: 42});
}

// _.at
{
    let testAtArray: TResult[];
    let testAtList: _.List<TResult>;
    let testAtDictionary: _.Dictionary<TResult>;
    let result: TResult[];
    result = _.at<TResult>(testAtArray, 0, '1', [2], ['3'], [4, '5']);
    result = _.at<TResult>(testAtList, 0, '1', [2], ['3'], [4, '5']);
    result = _.at<TResult>(testAtDictionary, 0, '1', [2], ['3'], [4, '5']);
    result = _(testAtArray).at(0, '1', [2], ['3'], [4, '5']).value();
    result = _(testAtList).at<TResult>(0, '1', [2], ['3'], [4, '5']).value();
    result = _(testAtDictionary).at<TResult>(0, '1', [2], ['3'], [4, '5']).value();
}

// _.collect
module TestCollect {
    let array: number[];
    let list: _.List<number>;
    let dictionary: _.Dictionary<number>;
    let listIterator: {(value: number, index: number, collection: _.List<number>): TResult};
    let dictionaryIterator: {(value: number, key: string, collection: _.Dictionary<number>): TResult};
    {
        let result: TResult[];
        result = _.collect<number, TResult>(array);
        result = _.collect<number, TResult>(array, listIterator);
        result = _.collect<number, TResult>(array, listIterator, any);
        result = _.collect<number, TResult>(array, '');
        result = _.collect<number, TResult>(list);
        result = _.collect<number, TResult>(list, listIterator);
        result = _.collect<number, TResult>(list, listIterator, any);
        result = _.collect<number, TResult>(list, '');
        result = _.collect<number, TResult>(dictionary);
        result = _.collect<number, TResult>(dictionary, dictionaryIterator);
        result = _.collect<number, TResult>(dictionary, dictionaryIterator, any);
        result = _.collect<number, TResult>(dictionary, '');
        result = _<number>(array).collect<TResult>().value();
        result = _<number>(array).collect<TResult>(listIterator).value();
        result = _<number>(array).collect<TResult>(listIterator, any).value();
        result = _<number>(array).collect<TResult>('').value();
        result = _(list).collect<number, TResult>().value();
        result = _(list).collect<number, TResult>(listIterator).value();
        result = _(list).collect<number, TResult>(listIterator, any).value();
        result = _(list).collect<number, TResult>('').value();
        result = _(dictionary).collect<number, TResult>().value();
        result = _(dictionary).collect<number, TResult>(dictionaryIterator).value();
        result = _(dictionary).collect<number, TResult>(dictionaryIterator, any).value();
        result = _(dictionary).collect<number, TResult>('').value();
    }
    {
        let result: boolean[];
        result = _.collect<number, {}>(array, {});
        result = _.collect<number, {}>(list, {});
        result = _.collect<number, {}>(dictionary, {});
        result = _<number>(array).collect<{}>({}).value();
        result = _(list).collect<{}>({}).value();
        result = _(dictionary).collect<{}>({}).value();
    }
}

result = <boolean>_.contains([1, 2, 3], 1);
result = <boolean>_.contains([1, 2, 3], 1, 2);
result = <boolean>_.contains({ 'moe': 30, 'larry': 40, 'curly': 67 }, 40);
result = <boolean>_.contains('curly', 'ur');

result = <boolean>_([1, 2, 3]).contains(1);
result = <boolean>_([1, 2, 3]).contains(1, 2);
result = <boolean>_({ 'moe': 30, 'larry': 40, 'curly': 67 }).contains(40);
result = <boolean>_('curly').contains('ur');

result = <boolean>_.include([1, 2, 3], 1);
result = <boolean>_.include([1, 2, 3], 1, 2);
result = <boolean>_.include({ 'moe': 30, 'larry': 40, 'curly': 67 }, 40);
result = <boolean>_.include('curly', 'ur');

result = <boolean>_([1, 2, 3]).include(1);
result = <boolean>_([1, 2, 3]).include(1, 2);
result = <boolean>_({ 'moe': 30, 'larry': 40, 'curly': 67 }).include(40);
result = <boolean>_('curly').include('ur');

result = <boolean>_.includes([1, 2, 3], 1);
result = <boolean>_.includes([1, 2, 3], 1, 2);
result = <boolean>_.includes({ 'moe': 30, 'larry': 40, 'curly': 67 }, 40);
result = <boolean>_.includes('curly', 'ur');

result = <boolean>_([1, 2, 3]).includes(1);
result = <boolean>_([1, 2, 3]).includes(1, 2);
result = <boolean>_({ 'moe': 30, 'larry': 40, 'curly': 67 }).includes(40);
result = <boolean>_('curly').includes('ur');

result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return Math.floor(num); });
result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<number>>_.countBy(['one', 'two', 'three'], 'length');

result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return Math.floor(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return this.floor(num); }, Math);
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(['one', 'two', 'three']).countBy('length');

// _.detect
module TestDetect {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: TResult;

    result = _.detect<TResult>(array);
    result = _.detect<TResult>(array, listIterator);
    result = _.detect<TResult>(array, listIterator, any);
    result = _.detect<TResult>(array, '');
    result = _.detect<{a: number}, TResult>(array, {a: 42});

    result = _.detect<TResult>(list);
    result = _.detect<TResult>(list, listIterator);
    result = _.detect<TResult>(list, listIterator, any);
    result = _.detect<TResult>(list, '');
    result = _.detect<{a: number}, TResult>(list, {a: 42});

    result = _.detect<TResult>(dictionary);
    result = _.detect<TResult>(dictionary, dictionaryIterator);
    result = _.detect<TResult>(dictionary, dictionaryIterator, any);
    result = _.detect<TResult>(dictionary, '');
    result = _.detect<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).detect();
    result = _(array).detect(listIterator);
    result = _(array).detect(listIterator, any);
    result = _(array).detect('');
    result = _(array).detect<{a: number}>({a: 42});

    result = _(list).detect<TResult>();
    result = _(list).detect<TResult>(listIterator);
    result = _(list).detect<TResult>(listIterator, any);
    result = _(list).detect<TResult>('');
    result = _(list).detect<{a: number}, TResult>({a: 42});

    result = _(dictionary).detect<TResult>();
    result = _(dictionary).detect<TResult>(dictionaryIterator);
    result = _(dictionary).detect<TResult>(dictionaryIterator, any);
    result = _(dictionary).detect<TResult>('');
    result = _(dictionary).detect<{a: number}, TResult>({a: 42});
}

// _.every
module TestEvery {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: boolean;

    result = _.every<TResult>(array);
    result = _.every<TResult>(array, listIterator);
    result = _.every<TResult>(array, listIterator, any);
    result = _.every<TResult>(array, '');
    result = _.every<{a: number}, TResult>(array, {a: 42});

    result = _.every<TResult>(list);
    result = _.every<TResult>(list, listIterator);
    result = _.every<TResult>(list, listIterator, any);
    result = _.every<TResult>(list, '');
    result = _.every<{a: number}, TResult>(list, {a: 42});

    result = _.every<TResult>(dictionary);
    result = _.every<TResult>(dictionary, dictionaryIterator);
    result = _.every<TResult>(dictionary, dictionaryIterator, any);
    result = _.every<TResult>(dictionary, '');
    result = _.every<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).every();
    result = _(array).every(listIterator);
    result = _(array).every(listIterator, any);
    result = _(array).every('');
    result = _(array).every<{a: number}>({a: 42});

    result = _(list).every<TResult>();
    result = _(list).every<TResult>(listIterator);
    result = _(list).every<TResult>(listIterator, any);
    result = _(list).every('');
    result = _(list).every<{a: number}>({a: 42});

    result = _(dictionary).every<TResult>();
    result = _(dictionary).every<TResult>(dictionaryIterator);
    result = _(dictionary).every<TResult>(dictionaryIterator, any);
    result = _(dictionary).every('');
    result = _(dictionary).every<{a: number}>({a: 42});
}

result = <number[]>_.filter([1, 2, 3, 4, 5, 6]);
result = <number[]>_.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.filter(foodsCombined, 'organic');
result = <IFoodCombined[]>_.filter(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).filter(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).filter('organic').value();
result = <IFoodCombined[]>_(foodsCombined).filter({ 'type': 'fruit' }).value();

result = <number[]>_.select([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.select(foodsCombined, 'organic');
result = <IFoodCombined[]>_.select(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).select(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).select('organic').value();
result = <IFoodCombined[]>_(foodsCombined).select({ 'type': 'fruit' }).value();

// _.find
module TestFind {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: TResult;

    result = _.find<TResult>(array);
    result = _.find<TResult>(array, listIterator);
    result = _.find<TResult>(array, listIterator, any);
    result = _.find<TResult>(array, '');
    result = _.find<{a: number}, TResult>(array, {a: 42});

    result = _.find<TResult>(list);
    result = _.find<TResult>(list, listIterator);
    result = _.find<TResult>(list, listIterator, any);
    result = _.find<TResult>(list, '');
    result = _.find<{a: number}, TResult>(list, {a: 42});

    result = _.find<TResult>(dictionary);
    result = _.find<TResult>(dictionary, dictionaryIterator);
    result = _.find<TResult>(dictionary, dictionaryIterator, any);
    result = _.find<TResult>(dictionary, '');
    result = _.find<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).find();
    result = _(array).find(listIterator);
    result = _(array).find(listIterator, any);
    result = _(array).find('');
    result = _(array).find<{a: number}>({a: 42});

    result = _(list).find<TResult>();
    result = _(list).find<TResult>(listIterator);
    result = _(list).find<TResult>(listIterator, any);
    result = _(list).find<TResult>('');
    result = _(list).find<{a: number}, TResult>({a: 42});

    result = _(dictionary).find<TResult>();
    result = _(dictionary).find<TResult>(dictionaryIterator);
    result = _(dictionary).find<TResult>(dictionaryIterator, any);
    result = _(dictionary).find<TResult>('');
    result = _(dictionary).find<{a: number}, TResult>({a: 42});
}

result = <number>_.findWhere([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.findWhere(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findWhere(foodsCombined, 'organic');

result = <number>_.findLast([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_.findLast(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findLast(foodsCombined, 'organic');

result = <number>_([1, 2, 3, 4]).findLast(function (num) {
    return num % 2 == 0;
});
result = <IFoodCombined>_(foodsCombined).findLast({ 'type': 'vegetable' });
result = <IFoodCombined>_(foodsCombined).findLast('organic');

result = <number[]>_.forEach([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });
result = <IFoodType>_.forEach<IFoodType, string>({ name: 'apple', type: 'fruit' }, function (value, key) { console.log(value, key) });

result = <number[]>_.each([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.each({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });
result = <IFoodType>_.each<IFoodType, string>({ name: 'apple', type: 'fruit' }, function (value, key) { console.log(value, key) });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).forEach(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).forEach(function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).each(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).each(function (num) { console.log(num); });

result = <number[]>_.forEachRight([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.forEachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });

result = <number[]>_.eachRight([1, 2, 3], function (num) { console.log(num); });
result = <_.Dictionary<number>>_.eachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).forEachRight(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).forEachRight(function (num) { console.log(num); });

result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).eachRight(function (num) { console.log(num); });
result = <_.LoDashObjectWrapper<_.Dictionary<number>>>_(<{ [index: string]: number; }>{ 'one': 1, 'two': 2, 'three': 3 }).eachRight(function (num) { console.log(num); });

result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function (num) { return Math.floor(num); });
result = <_.Dictionary<number[]>>_.groupBy([4.2, 6.1, 6.4], function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<string[]>>_.groupBy(['one', 'two', 'three'], 'length');

result = <_.Dictionary<number[]>>_.groupBy({ prop1: 4.2, prop2: 6.1, prop3: 6.4}, function (num) { return Math.floor(num); });
result = <_.Dictionary<number[]>>_.groupBy({ prop1: 4.2, prop2: 6.1, prop3: 6.4}, function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<string[]>>_.groupBy({ prop1: 'one', prop2: 'two', prop3: 'three'}, 'length');

result = <_.Dictionary<number[]>>_([4.2, 6.1, 6.4]).groupBy(function (num) { return Math.floor(num); }).value();
result = <_.Dictionary<number[]>>_([4.2, 6.1, 6.4]).groupBy(function (num) { return this.floor(num); }, Math).value();
result = <_.Dictionary<string[]>>_(['one', 'two', 'three']).groupBy('length').value();

result = <_.Dictionary<number[]>>_({ prop1: 4.2, prop2: 6.1, prop3: 6.4}).groupBy<number>(function (num) { return Math.floor(num); }).value();
result = <_.Dictionary<number[]>>_({ prop1: 4.2, prop2: 6.1, prop3: 6.4}).groupBy<number>(function (num) { return this.floor(num); }, Math).value();
result = <_.Dictionary<string[]>>_({ prop1: 'one', prop2: 'two', prop3: 'three'}).groupBy<string>('length').value();

result = <_.Dictionary<IKey>>_.indexBy(keys, 'dir');
result = <_.Dictionary<IKey>>_.indexBy(keys, function (key) { return String.fromCharCode(key.code); });
result = <_.Dictionary<IKey>>_.indexBy(keys, function (key) { this.fromCharCode(key.code); }, String);

result = <number[][]>_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
result = <string[][]>_.invoke([123, 456], String.prototype.split, '');

// _.map
module TestMap {
    let array: number[];
    let list: _.List<number>;
    let dictionary: _.Dictionary<number>;

    let listIterator: (value: number, index: number, collection: _.List<number>) => TResult;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => TResult;

    {
        let result: TResult[];

        result = _.map<number, TResult>(array);
        result = _.map<number, TResult>(array, listIterator);
        result = _.map<number, TResult>(array, listIterator, any);
        result = _.map<number, TResult>(array, '');

        result = _.map<number, TResult>(list);
        result = _.map<number, TResult>(list, listIterator);
        result = _.map<number, TResult>(list, listIterator, any);
        result = _.map<number, TResult>(list, '');

        result = _.map<number, TResult>(dictionary);
        result = _.map<number, TResult>(dictionary, dictionaryIterator);
        result = _.map<number, TResult>(dictionary, dictionaryIterator, any);
        result = _.map<number, TResult>(dictionary, '');

        result = _<number>(array).map<TResult>().value();
        result = _<number>(array).map<TResult>(listIterator).value();
        result = _<number>(array).map<TResult>(listIterator, any).value();
        result = _<number>(array).map<TResult>('').value();

        result = _(list).map<number, TResult>().value();
        result = _(list).map<number, TResult>(listIterator).value();
        result = _(list).map<number, TResult>(listIterator, any).value();
        result = _(list).map<number, TResult>('').value();

        result = _(dictionary).map<number, TResult>().value();
        result = _(dictionary).map<number, TResult>(dictionaryIterator).value();
        result = _(dictionary).map<number, TResult>(dictionaryIterator, any).value();
        result = _(dictionary).map<number, TResult>('').value();
    }
    {
        let result: boolean[];

        result = _.map<number, {}>(array, {});
        result = _.map<number, {}>(list, {});
        result = _.map<number, {}>(dictionary, {});

        result = _<number>(array).map<{}>({}).value();
        result = _(list).map<{}>({}).value();
        result = _(dictionary).map<{}>({}).value();
    }
}

// _.ceil
result = <number>_.ceil(4.006);
// → 5
result = <number>_.ceil(6.004, 2);
// → 6.01
result = <number>_.ceil(6040, -2);
// → 6100
result = <number>_(4.006).ceil();
// → 5
result = <number>_(6.004).ceil(2);
// → 6.01
result = <number>_(6040).ceil(-2);
// → 6100

// _.floor
result = <number>_.floor(4.006);
// → 4
result = <number>_.floor(0.046, 2);
// → 0.04
result = <number>_.floor(4060, -2);
// → 4000
result = <number>_(4.006).floor();
// → 4
result = <number>_(0.046).floor(2);
// → 0.04
result = <number>_(4060).floor(-2);
// → 4000

// _.round
result = <number>_.round(4.006);
// → 4
result = <number>_.round(4.006, 2);
// → 4.01
result = <number>_.round(4060, -2);
// → 4100
result = <number>_(4.006).round();
// → 4
result = <number>_(4.006).round(2);
// → 4.01
result = <number>_(4060).round(-2);
// → 4100

result = <number>_.sum([4, 2, 8, 6]);
result = <number>_.sum([4, 2, 8, 6], function(v) { return v; });
result = <number>_.sum({a: 2, b: 4});
result = <number>_.sum({a: 2, b: 4}, function(v) { return v; });
result = <number>_.sum(stoogesAges, function (stooge) { return stooge.age; });
result = <number>_.sum(stoogesAges, 'age');
result = <number>_.sum(stoogesAgesDict, function(stooge) { return stooge.age; });
result = <number>_.sum(stoogesAgesDict, 'age');
result = <number>_([4, 2, 8, 6]).sum();
result = <number>_([4, 2, 8, 6]).sum(function(v) { return v; });
result = <number>_({a: 2, b: 4}).sum();
result = <number>_({a: 2, b: 4}).sum(function(v) { return v; });
result = <number>_(stoogesAges).sum(function (stooge) { return stooge.age; });
result = <number>_(stoogesAges).sum('age');
result = <number>_(stoogesAgesDict).sum(function (stooge) { return stooge.age; });
result = <number>_(stoogesAgesDict).sum('age');

result = <string[]>_.pluck(stoogesAges, 'name');
result = <string[]>_(stoogesAges).pluck('name').value();
result = <string[]>_.pluck(stoogesAges, ['name']);

// _.partition
result = <string[][]>_.partition<string>('abcd', (n) => n < 'c');
result = <string[][]>_.partition<string>(['a', 'b', 'c', 'd'], (n) => n < 'c');
result = <number[][]>_.partition<number>([1, 2, 3, 4], (n) => n < 3);
result = <number[][]>_.partition<number>({0: 1, 1: 2, 2: 3, 3: 4, length: 4}, (n) => n < 3);
result = <number[][]>_.partition<number>({a: 1, b: 2, c: 3, d: 4}, (n) => n < 3);
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>([{a: 1}, {a: 2}], {a: 2});
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, {a: 2});
result = <{a: number}[][]>_.partition<{a: number}, {a: number}>({0: {a: 1}, 1: {a: 2}}, {a: 2});
result = <{a: number}[][]>_.partition<{a: number}>([{a: 1}, {a: 2}], 'a');
result = <{a: number}[][]>_.partition<{a: number}>([{a: 1}, {a: 2}], 'a', 2);
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, 'a');
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}, length: 2}, 'a', 2);
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}}, 'a');
result = <{a: number}[][]>_.partition<{a: number}>({0: {a: 1}, 1: {a: 2}}, 'a', 2);
result = <string[][]>_('abcd').partition((n) => n < 'c').value();
result = <string[][]>_(['a', 'b', 'c', 'd']).partition((n) => n < 'c').value();
result = <number[][]>_([1, 2, 3, 4]).partition((n) => n < 3).value();
result = <number[][]>_({0: 1, 1: 2, 2: 3, 3: 4, length: 4}).partition<number>((n) => n < 3).value();
result = <number[][]>_({a: 1, b: 2, c: 3, d: 4}).partition<number>((n) => n < 3).value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition<{a: number}>({a: 2}).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}, length: 2}).partition<{a: number}, {a: number}>({a: 2}).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}, {a: number}>({a: 2}).value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition('a').value();
result = <{a: number}[][]>_([{a: 1}, {a: 2}]).partition('a', 2).value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}>('a').value();
result = <{a: number}[][]>_({0: {a: 1}, 1: {a: 2}}).partition<{a: number}>('a', 2).value();

interface ABC {
    [index: string]: number;
    a: number;
    b: number;
    c: number;
}

result = <number>_.reduce<number, number>([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.foldl([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.foldl({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.inject([1, 2, 3], function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_.inject({ 'a': 1, 'b': 2, 'c': 3 }, function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).reduce<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).reduce<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).foldl<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).foldl<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).inject<number>(function (sum: number, num: number) {
    return sum + num;
});
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).inject<number, ABC>(function (r: ABC, num: number, key: string) {
    r[key] = num * 3;
    return r;
}, {});

result = <number[]>_.reduceRight([[0, 1], [2, 3], [4, 5]], function (a: number[], b: number[]) { return a.concat(b); }, <number[]>[]);
result = <number[]>_.foldr([[0, 1], [2, 3], [4, 5]], function (a: number[], b: number[]) { return a.concat(b); }, <number[]>[]);

result = <number[]>_.reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.reject(foodsCombined, 'organic');
result = <IFoodCombined[]>_.reject(foodsCombined, { 'type': 'fruit' });

result = <number[]>_([1, 2, 3, 4, 5, 6]).reject(function (num) { return num % 2 == 0; }).value();
result = <IFoodCombined[]>_(foodsCombined).reject('organic').value();
result = <IFoodCombined[]>_(foodsCombined).reject({ 'type': 'fruit' }).value();

result = <number>_.sample([1, 2, 3, 4]);
result = <number[]>_.sample([1, 2, 3, 4], 2);
result = <_.LoDashWrapper<number>>_([1, 2, 3, 4]).sample();
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3, 4]).sample(2);
result = <number>_([1, 2, 3, 4]).sample().value();
result = <number[]>_([1, 2, 3, 4]).sample(2).value();

result = <number[]>_.shuffle([1, 2, 3, 4, 5, 6]);
result = <_.LoDashArrayWrapper<number>>_([1, 2, 3]).shuffle();
result = <_.LoDashArrayWrapper<_.Dictionary<string>>>_(<{ [index: string]: string; }>{ 'key1': 'test1', 'key2': 'test2' }).shuffle();

result = <number>_.size([1, 2]);
result = <number>_([1, 2]).size();
result = <number>_.size({ 'one': 1, 'two': 2, 'three': 3 });
result = <number>_({ 'one': 1, 'two': 2, 'three': 3 }).size();
result = <number>_.size('curly');

// _.some
module TestSome {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    let result: boolean;

    result = _.some<TResult>(array);
    result = _.some<TResult>(array, listIterator);
    result = _.some<TResult>(array, listIterator, any);
    result = _.some<TResult>(array, '');
    result = _.some<{a: number}, TResult>(array, {a: 42});

    result = _.some<TResult>(list);
    result = _.some<TResult>(list, listIterator);
    result = _.some<TResult>(list, listIterator, any);
    result = _.some<TResult>(list, '');
    result = _.some<{a: number}, TResult>(list, {a: 42});

    result = _.some<TResult>(dictionary);
    result = _.some<TResult>(dictionary, dictionaryIterator);
    result = _.some<TResult>(dictionary, dictionaryIterator, any);
    result = _.some<TResult>(dictionary, '');
    result = _.some<{a: number}, TResult>(dictionary, {a: 42});

    result = _(array).some();
    result = _(array).some(listIterator);
    result = _(array).some(listIterator, any);
    result = _(array).some('');
    result = _(array).some<{a: number}>({a: 42});

    result = _(list).some<TResult>();
    result = _(list).some<TResult>(listIterator);
    result = _(list).some<TResult>(listIterator, any);
    result = _(list).some('');
    result = _(list).some<{a: number}>({a: 42});

    result = _(dictionary).some<TResult>();
    result = _(dictionary).some<TResult>(dictionaryIterator);
    result = _(dictionary).some<TResult>(dictionaryIterator, any);
    result = _(dictionary).some('');
    result = _(dictionary).some<{a: number}>({a: 42});
}

result = <number[]>_.sortBy([1, 2, 3], function (num) { return Math.sin(num); });
result = <number[]>_.sortBy([1, 2, 3], function (num) { return this.sin(num); }, Math);
result = <string[]>_.sortBy(['banana', 'strawberry', 'apple'], 'length');

result = <IStoogesAge[]>_.sortByAll(stoogesAges, function(stooge) { return Math.sin(stooge.age); }, function(stooge) { return stooge.name.slice(1); });
result = <IStoogesAge[]>_.sortByAll(stoogesAges, ['name', 'age']);
result = <IStoogesAge[]>_.sortByAll(stoogesAges, 'name', function(stooge) { return Math.sin(stooge.age); });

result = <IStoogesAge[]>_.sortByOrder(stoogesAges, [function(stooge) { return Math.sin(stooge.age); }, function(stooge) { return stooge.name.slice(1); }]);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', 'age']);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', function(stooge) { return Math.sin(stooge.age); }]);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, [function(stooge) { return Math.sin(stooge.age); }, function(stooge) { return stooge.name.slice(1); }], ['asc', 'desc']);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', 'age'], ['asc', 'desc']);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', function(stooge) { return Math.sin(stooge.age); }], ['asc', 'desc']);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, [function(stooge) { return Math.sin(stooge.age); }, function(stooge) { return stooge.name.slice(1); }], [true, false]);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', 'age'], [true, false]);
result = <IStoogesAge[]>_.sortByOrder(stoogesAges, ['name', function(stooge) { return Math.sin(stooge.age); }], [true, false]);

result = <number[]>_([1, 2, 3]).sortBy(function (num) { return Math.sin(num); }).value();
result = <number[]>_([1, 2, 3]).sortBy(function (num) { return this.sin(num); }, Math).value();
result = <string[]>_(['banana', 'strawberry', 'apple']).sortBy('length').value();
result = <IFoodOrganic[]>_(foodsOrganic).sortByAll('organic', (food) => food.name, { organic: true }).value();

(function (a: number, b: number, c: number, d: number): Array<number> { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
result = <number[]>_.toArray([1, 2, 3, 4]);
(function (a: number, b: number, c: number, d: number): Array<number> { return _(arguments).toArray<number>().slice(1).value(); })(1, 2, 3, 4);
result = <number[]>_([1,2,3,4]).toArray().value();


result = <IStoogesCombined[]>_.where(stoogesCombined, { 'age': 40 });
result = <IStoogesCombined[]>_.where(stoogesCombined, { 'quotes': ['Poifect!'] });

result = <IStoogesCombined[]>_(stoogesCombined).where({ 'age': 40 }).value();
result = <IStoogesCombined[]>_(stoogesCombined).where({ 'quotes': ['Poifect!'] }).value();

/********
 * Date *
 ********/

result = <number>_.now();

/*************
 * Functions *
 *************/
var saves = ['profile', 'settings'];
var asyncSave = (obj: any) => obj.done();
var done: Function;

done = _.after(saves.length, function () {
    console.log('Done saving!');
});

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

done = _(saves.length).after(function () {
    console.log('Done saving!');
}).value();

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

// _.ary
result = <number[]>['6', '8', '10'].map(_.ary<(s: string) => number>(parseInt, 1));
result = <number[]>['6', '8', '10'].map(_(parseInt).ary<(s: string) => number>(1).value());

// _.backflow
var testBackflowSquareFn = (n: number) => n * n;
var testBackflowAddFn = (n: number, m: number) => n + m;
result = <number>_.backflow<(n: number, m: number) => number>(testBackflowSquareFn, testBackflowAddFn)(1, 2);
result = <number>_(testBackflowSquareFn).backflow<(n: number, m: number) => number>(testBackflowAddFn).value()(1, 2);

// _.before
var testBeforeFn = ((n: number) => () => ++n)(0);
var testBeforeResultFn = <() => number>_.before<() => number>(3, testBeforeFn);
result = <number>testBeforeResultFn();
// → 1
result = <number>testBeforeResultFn();
// → 2
result = <number>testBeforeResultFn();
// → 2
var testBeforeFn = ((n: number) => () => ++n)(0);
var testBeforeResultFn = <() => number>_(3).before<() => number>(testBeforeFn);
result = <number>testBeforeResultFn();
// → 1
result = <number>testBeforeResultFn();
// → 2
result = <number>testBeforeResultFn();
// → 2

var funcBind = function(greeting: string, punctuation: string) { return greeting + ' ' + this.user + punctuation; };
var funcBound1: (punctuation: string) => any = _.bind(funcBind, { 'name': 'moe' }, 'hi');
funcBound1('!');

var funcBound2: (punctuation: string) => any = _(funcBind).bind({ 'name': 'moe' }, 'hi').value();
funcBound2('!');

var addTwoNumbers = function (x: number, y: number) { return x + y };
var plusTwo = _.bind(addTwoNumbers, null, 2);
plusTwo(100);

var view = {
    'label': 'docs',
    'onClick': function () { console.log('clicked ' + this.label); }
};

view = _.bindAll(view);
jQuery('#docs').on('click', view.onClick);

view = _(view).bindAll().value();
jQuery('#docs').on('click', view.onClick);

var objectBindKey = {
    'name': 'moe',
    'greet': function (greeting: string) {
        return greeting + ' ' + this.name;
    }
};

var funcBindKey: Function = _.bindKey(objectBindKey, 'greet', 'hi');
funcBindKey();

objectBindKey.greet = function (greeting) {
    return greeting + ', ' + this.name + '!';
};

funcBindKey();

funcBindKey = _(objectBindKey).bindKey('greet', 'hi').value();
funcBindKey();

// _.compose
var testComposeSquareFn = (n: number) => n * n;
var testComposeAddFn = (n: number, m: number) => n + m;
result = <number>_.compose<(n: number, m: number) => number>(testComposeSquareFn, testComposeAddFn)(1, 2);
result = <number>_(testComposeSquareFn).compose<(n: number, m: number) => number>(testComposeAddFn).value()(1, 2);

var createCallbackObj: { [index: string]: string; } = { name: 'Joe' };
result = <() => any>_.createCallback('name');
result = <() => boolean>_.createCallback(createCallbackObj);
result = <_.LoDashObjectWrapper<() => any>>_('name').createCallback();
result = <_.LoDashObjectWrapper<() => boolean>>_(createCallbackObj).createCallback();

// _.curry
var testCurryFn = (a: number, b: number, c: number) => [a, b, c];
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
curryResult0 = _(testCurryFn).curry().value()(1, 2, 3);
curryResult2 = _(testCurryFn).curry().value()(1);

declare function testCurry2(a: string, b: number, c: boolean): [string, number, boolean];
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
var testCurryRightFn = (a: number, b: number, c: number) => [a, b, c];
curryResult0 = _.curryRight(testCurryRightFn)(1, 2, 3);
curryResult2 = _.curryRight(testCurryRightFn)(1);
curryResult0 = _(testCurryRightFn).curryRight().value()(1, 2, 3);
curryResult2 = _(testCurryRightFn).curryRight().value()(1);

let curryResult7: _.CurriedFunction1<string, [string, number, boolean]>;
let curryResult8: _.CurriedFunction2<number, string, [string, number, boolean]>;
let curryResult9: _.CurriedFunction3<boolean, number, string, [string, number, boolean]>;
curryResult3 = _.curryRight(testCurry2)(true, 2, "1");
curryResult3 = _.curryRight(testCurry2)(true, 2)("1");
curryResult3 = _.curryRight(testCurry2)(true)(2, "1");
curryResult3 = _.curryRight(testCurry2)(true)(2)("1");
curryResult7 = _.curryRight(testCurry2)(true, 2);
curryResult7 = _.curryRight(testCurry2)(true)(2);
curryResult8 = _.curryRight(testCurry2)(true);
curryResult9 = _.curryRight(testCurry2);

declare var source: any;
result = <Function>_.debounce(function () { }, 150);

jQuery('#postbox').on('click', <Function>_.debounce(function () { }, 300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', <Function>_.debounce(function () { }, 250, {
    'maxWait': 1000
}), false);

result = <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(150);

jQuery('#postbox').on('click', <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', <_.LoDashObjectWrapper<Function>>_(function () { }).debounce(250, {
    'maxWait': 1000
}), false);

var returnedDebounce = _.throttle(function (a: any) { return a * 5; }, 5);
returnedThrottled(4);

result = <number>_.defer(function () { console.log('deferred'); });
result = <_.LoDashWrapper<number>>_(function () { console.log('deferred'); }).defer();

var log = _.bind(console.log, console);
result = <number>_.delay(log, 1000, 'logged later');
result = <_.LoDashWrapper<number>>_(log).delay(1000, 'logged later');

// _.flow
var testFlowSquareFn = (n: number) => n * n;
var testFlowAddFn = (n: number, m: number) => n + m;
result = <number>_.flow<(n: number, m: number) => number>(testFlowAddFn, testFlowSquareFn)(1, 2);
result = <number>_(testFlowAddFn).flow<(n: number, m: number) => number>(testFlowSquareFn).value()(1, 2);

// _.flowRight
var testFlowRightSquareFn = (n: number) => n * n;
var testFlowRightAddFn = (n: number, m: number) => n + m;
result = <number>_.flowRight<(n: number, m: number) => number>(testFlowRightSquareFn, testFlowRightAddFn)(1, 2);
result = <number>_(testFlowRightSquareFn).flowRight<(n: number, m: number) => number>(testFlowRightAddFn).value()(1, 2);

// _.memoize
var testMemoizedFunction: _.MemoizedFunction;
result = <_.MapCache>testMemoizedFunction.cache;
interface TestMemoizedResultFn extends _.MemoizedFunction {
    (...args: any[]): any;
}
var testMemoizeFn: (...args: any[]) => any;
var testMemoizeResolverFn: (...args: any[]) => any;
result = <TestMemoizedResultFn>_.memoize<TestMemoizedResultFn>(testMemoizeFn);
result = <TestMemoizedResultFn>_.memoize<TestMemoizedResultFn>(testMemoizeFn, testMemoizeResolverFn);
result = <TestMemoizedResultFn>(_(testMemoizeFn).memoize<TestMemoizedResultFn>().value());
result = <TestMemoizedResultFn>(_(testMemoizeFn).memoize<TestMemoizedResultFn>(testMemoizeResolverFn).value());

var returnedMemoize = _.throttle(function (a: any) { return a * 5; }, 5);
returnedMemoize(4);

// _.modArgs
function modArgsFn1(n: number): string {return n.toString()}
function modArgsFn2(n: boolean): string {return n.toString()}
interface ModArgsFunc {
    (x: string, y: string): string[];
}
interface ModArgsResult {
    (x: number, y: boolean): string[]
}
result = <ModArgsResult>_.modArgs<ModArgsFunc, ModArgsResult>((x: string, y: string) => [x, y], modArgsFn1, modArgsFn2);
result = <string[]>result(1, true);

result = <ModArgsResult>_.modArgs<ModArgsFunc, ModArgsResult>((x: string, y: string) => [x, y], [modArgsFn1, modArgsFn2]);
result = <string[]>result(1, true);

result = <ModArgsResult>_<ModArgsFunc>((x: string, y: string) => [x, y]).modArgs<ModArgsResult>(modArgsFn1, modArgsFn2).value();
result = <string[]>result(1, true);

result = <ModArgsResult>_<ModArgsFunc>((x: string, y: string) => [x, y]).modArgs<ModArgsResult>([modArgsFn1, modArgsFn2]).value();
result = <string[]>result(1, true);

// _.negate
interface TestNegatePredicate {
    (a1: number, a2: number): boolean;
}
interface TestNegateResult {
    (a1: number, a2: number): boolean;
}
var testNegatePredicate = (a1: number, a2: number) => a1 > a2;
result = <TestNegateResult>_.negate<TestNegatePredicate>(testNegatePredicate);
result = <TestNegateResult>_.negate<TestNegatePredicate, TestNegateResult>(testNegatePredicate);
result = <TestNegateResult>_(testNegatePredicate).negate().value();
result = <TestNegateResult>_(testNegatePredicate).negate<TestNegateResult>().value();

// _.once
result = <() => void>_.once<() => void>(function () {});
result = <() => void>(_(function () {}).once().value());

var returnedOnce = _.throttle(function (a: any) { return a * 5; }, 5);
returnedOnce(4);

var greetPartial = function (greeting: string, name: string) { return greeting + ' ' + name; };
var hi = <Function>_.partial(greetPartial, 'hi');
hi('moe');

var defaultsDeep = <Function>_.partialRight(_.merge, _.defaults);

var optionsPartialRight = {
    'variable': 'data',
    'imports': { 'jq': $ }
};

defaultsDeep(optionsPartialRight, _.templateSettings);

//_.rearg
var testReargFn = (a: string, b: string, c: string) => [a, b, c];
interface TestReargResultFn {
    (b: string, c: string, a: string): string[];
}
result = <string[]>(_.rearg<TestReargResultFn>(testReargFn, 2, 0, 1))('b', 'c', 'a');
result = <string[]>(_.rearg<TestReargResultFn>(testReargFn, [2, 0, 1]))('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg<TestReargResultFn>(2, 0, 1).value())('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg<TestReargResultFn>([2, 0, 1]).value())('b', 'c', 'a');

//_.restParam
var testRestParamFn = (a: string, b: string, c: number[]) => a + ' ' + b + ' ' + c.join(' ');
interface testRestParamFunc {
    (a: string, b: string, c: number[]): string;
}
interface testRestParamResult {
    (a: string, b: string, ...c: number[]): string;
}
result = <string>(_.restParam<testRestParamResult, testRestParamFunc>(testRestParamFn, 2))('a', 'b', 1, 2, 3);
result = <string>(_.restParam<testRestParamResult>(testRestParamFn, 2))('a', 'b', 1, 2, 3);
result = <string>(_(testRestParamFn).restParam<testRestParamResult>(2).value())('a', 'b', 1, 2, 3);

//_.spread
var testSpreadFn = (who: string, what: string) => who + ' says ' + what;
interface TestSpreadResultFn {
    (args: string[]): string;
}
result = <string>(_.spread<TestSpreadResultFn>(testSpreadFn))(['fred', 'hello']);
result = <string>(_(testSpreadFn).spread<TestSpreadResultFn>().value())(['fred', 'hello']);

var throttled = _.throttle(function () { }, 100);
jQuery(window).on('scroll', throttled);

jQuery('.interactive').on('click', _.throttle(function () { }, 300000, {
    'trailing': false
}));

var returnedThrottled = _.throttle(function (a: any) { return a * 5; }, 5);
returnedThrottled(4);

var helloWrap = function (name: string) { return 'hello ' + name; };
var helloWrap2 = _.wrap(helloWrap, function (func) {
    return 'before, ' + func('moe') + ', after';
});
helloWrap2();

/********
 * Lang *
 ********/

// _.clone
interface TestCloneCustomizerFn {
    (value: any): any;
}
var testCloneCustomizerFn: TestCloneCustomizerFn;
{
    let result: number;
    result = _.clone<number>(42);
    result = _.clone<number>(42, false);
    result = _.clone<number>(42, false, testCloneCustomizerFn);
    result = _.clone<number>(42, false, testCloneCustomizerFn, any);
    result = _.clone<number>(42, testCloneCustomizerFn);
    result = _.clone<number>(42, testCloneCustomizerFn, any);
    result = _(42).clone();
    result = _(42).clone(false);
    result = _(42).clone(false, testCloneCustomizerFn);
    result = _(42).clone(false, testCloneCustomizerFn, any);
    result = _(42).clone(testCloneCustomizerFn);
    result = _(42).clone(testCloneCustomizerFn, any);
}
{
    let result: string[];
    result = _.clone<string[]>([]);
    result = _.clone<string[]>([], false);
    result = _.clone<string[]>([], false, testCloneCustomizerFn);
    result = _.clone<string[]>([], false, testCloneCustomizerFn, any);
    result = _.clone<string[]>([], testCloneCustomizerFn);
    result = _.clone<string[]>([], testCloneCustomizerFn, any);
    result = _<string>([]).clone();
    result = _<string>([]).clone(false);
    result = _<string>([]).clone(false, testCloneCustomizerFn);
    result = _<string>([]).clone(false, testCloneCustomizerFn, any);
    result = _<string>([]).clone(testCloneCustomizerFn);
    result = _<string>([]).clone(testCloneCustomizerFn, any);
}
{
    let result: {a: {b: number;}};
    result = _.clone<{a: {b: number;}}>({a: {b: 2}});
    result = _.clone<{a: {b: number;}}>({a: {b: 2}}, false);
    result = _.clone<{a: {b: number;}}>({a: {b: 2}}, false, testCloneCustomizerFn);
    result = _.clone<{a: {b: number;}}>({a: {b: 2}}, false, testCloneCustomizerFn, any);
    result = _.clone<{a: {b: number;}}>({a: {b: 2}}, testCloneCustomizerFn);
    result = _.clone<{a: {b: number;}}>({a: {b: 2}}, testCloneCustomizerFn, any);
    result = _({a: {b: 2}}).clone();
    result = _({a: {b: 2}}).clone(false);
    result = _({a: {b: 2}}).clone(false, testCloneCustomizerFn);
    result = _({a: {b: 2}}).clone(false, testCloneCustomizerFn, any);
    result = _({a: {b: 2}}).clone(testCloneCustomizerFn);
    result = _({a: {b: 2}}).clone(testCloneCustomizerFn, any);
}

// _.cloneDeep
interface TestCloneDeepCustomizerFn {
    (value: any): any;
}
var testCloneDeepCustomizerFn: TestCloneDeepCustomizerFn;
{
    let result: number;
    result = _.cloneDeep<number>(42);
    result = _.cloneDeep<number>(42, testCloneDeepCustomizerFn);
    result = _.cloneDeep<number>(42, testCloneDeepCustomizerFn, any);
    result = _(42).cloneDeep();
    result = _(42).cloneDeep(testCloneDeepCustomizerFn);
    result = _(42).cloneDeep(testCloneDeepCustomizerFn, any);
}
{
    let result: string[];
    result = _.cloneDeep<string[]>([]);
    result = _.cloneDeep<string[]>([], testCloneDeepCustomizerFn);
    result = _.cloneDeep<string[]>([], testCloneDeepCustomizerFn, any);
    result = _<string>([]).cloneDeep();
    result = _<string>([]).cloneDeep(testCloneDeepCustomizerFn);
    result = _<string>([]).cloneDeep(testCloneDeepCustomizerFn, any);
}
{
    let result: {a: {b: number;}};
    result = _.cloneDeep<{a: {b: number;}}>({a: {b: 2}});
    result = _.cloneDeep<{a: {b: number;}}>({a: {b: 2}}, testCloneDeepCustomizerFn);
    result = _.cloneDeep<{a: {b: number;}}>({a: {b: 2}}, testCloneDeepCustomizerFn, any);
    result = _({a: {b: 2}}).cloneDeep();
    result = _({a: {b: 2}}).cloneDeep(testCloneDeepCustomizerFn);
    result = _({a: {b: 2}}).cloneDeep(testCloneDeepCustomizerFn, any);
}

// _.gt
result = <boolean>_.gt(1, 2);
result = <boolean>_(1).gt(2);
result = <boolean>_([]).gt(2);
result = <boolean>_({}).gt(2);

// _.gte
result = <boolean>_.gte(1, 2);
result = <boolean>_(1).gte(2);
result = <boolean>_([]).gte(2);
result = <boolean>_({}).gte(2);

// _.isArguments
result = <boolean>_.isArguments(any);
result = <boolean>_(1).isArguments();
result = <boolean>_<any>([]).isArguments();
result = <boolean>_({}).isArguments();

// _.isArray
result = <boolean>_.isArray(any);
result = <boolean>_(1).isArray();
result = <boolean>_<any>([]).isArray();
result = <boolean>_({}).isArray();

// _.isBoolean
result = <boolean>_.isBoolean(any);
result = <boolean>_(1).isBoolean();
result = <boolean>_<any>([]).isBoolean();
result = <boolean>_({}).isBoolean();

// _.isDate
result = <boolean>_.isDate(any);
result = <boolean>_(42).isDate();
result = <boolean>_<any>([]).isDate();
result = <boolean>_({}).isDate();

// _.isElement
result = <boolean>_.isElement(any);
result = <boolean>_(42).isElement();
result = <boolean>_<any>([]).isElement();
result = <boolean>_({}).isElement();

// _.isEmpty
result = <boolean>_.isEmpty([1, 2, 3]);
result = <boolean>_.isEmpty({});
result = <boolean>_.isEmpty('');
result = <boolean>_([1, 2, 3]).isEmpty();
result = <boolean>_({}).isEmpty();
result = <boolean>_('').isEmpty();

// _.isError
result = <boolean>_.isError(any);
result = <boolean>_(1).isError();
result = <boolean>_<any>([]).isError();
result = <boolean>_({}).isError();

// _.isFinite
result = <boolean>_.isFinite(any);
result = <boolean>_(1).isFinite();
result = <boolean>_<any>([]).isFinite();
result = <boolean>_({}).isFinite();

// _.isFunction
result = <boolean>_.isFunction(any);
result = <boolean>_(1).isFunction();
result = <boolean>_<any>([]).isFunction();
result = <boolean>_({}).isFunction();

// _.isMatch
var testIsMatchCustiomizerFn: (value: any, other: any, indexOrKey: number|string) => boolean;
result = <boolean>_.isMatch({}, {});
result = <boolean>_.isMatch({}, {}, testIsMatchCustiomizerFn);
result = <boolean>_.isMatch({}, {}, testIsMatchCustiomizerFn, {});
result = <boolean>_({}).isMatch({});
result = <boolean>_({}).isMatch({}, testIsMatchCustiomizerFn);
result = <boolean>_({}).isMatch({}, testIsMatchCustiomizerFn, {});

// _.isNaN
result = <boolean>_.isNaN(NaN);
result = <boolean>_.isNaN(new Number(NaN));
result = <boolean>_.isNaN(undefined);
result = <boolean>_(NaN).isNaN();
result = <boolean>_(new Number(NaN)).isNaN();
result = <boolean>_(undefined).isNaN();

// _.isNative
result = <boolean>_.isNative(Array.prototype.push);
result = <boolean>_(Array.prototype.push).isNative();

// _.isNull
result = <boolean>_.isNull(any);
result = <boolean>_(1).isNull();
result = <boolean>_<any>([]).isNull();
result = <boolean>_({}).isNull();

// _.isNumber
result = <boolean>_.isNumber(any);
result = <boolean>_(1).isNumber();
result = <boolean>_<any>([]).isNumber();
result = <boolean>_({}).isNumber();

// _.isObject
result = <boolean>_.isObject(any);
result = <boolean>_(1).isObject();
result = <boolean>_<any>([]).isObject();
result = <boolean>_({}).isObject();

// _.isPlainObject
result = <boolean>_.isPlainObject(any);
result = <boolean>_(1).isPlainObject();
result = <boolean>_<any>([]).isPlainObject();
result = <boolean>_({}).isPlainObject();

// _.isRegExp
result = <boolean>_.isRegExp(any);
result = <boolean>_(1).isRegExp();
result = <boolean>_<any>([]).isRegExp();
result = <boolean>_({}).isRegExp();

// _.isString
result = <boolean>_.isString(any);
result = <boolean>_(1).isString();
result = <boolean>_<any>([]).isString();
result = <boolean>_({}).isString();

// _.isTypedArray
result = <boolean>_.isTypedArray([]);
result = <boolean>_([]).isTypedArray();

// _.isUndefined
result = <boolean>_.isUndefined(any);
result = <boolean>_(1).isUndefined();
result = <boolean>_<any>([]).isUndefined();
result = <boolean>_({}).isUndefined();

// _.lt
result = <boolean>_.lt(1, 2);
result = <boolean>_(1).lt(2);
result = <boolean>_([]).lt(2);
result = <boolean>_({}).lt(2);

// _.lte
result = <boolean>_.lte(1, 2);
result = <boolean>_(1).lte(2);
result = <boolean>_([]).lte(2);
result = <boolean>_({}).lte(2);

// _.toPlainObject
module TestToPlainObject {
    let result: TResult;

    result = _.toPlainObject<TResult>();
    result = _.toPlainObject<TResult>(true);
    result = _.toPlainObject<TResult>(1);
    result = _.toPlainObject<TResult>('a');
    result = _.toPlainObject<TResult>([]);
    result = _.toPlainObject<TResult>({});

    result = _(true).toPlainObject<TResult>().value();
    result = _(1).toPlainObject<TResult>().value();
    result = _('a').toPlainObject<TResult>().value();
    result = _([1]).toPlainObject<TResult>().value();
    result = _<string>([]).toPlainObject<TResult>().value();
    result = _({}).toPlainObject<TResult>().value();
}

/********
 * Math *
 ********/

// _.add
result = <number>_.add(1, 1);
result = <number>_(1).add(1);

// _.max
module TestMax {
    let array: number[];
    let list: _.List<number>;
    let dictionary: _.Dictionary<number>;

    let listIterator: (value: number, index: number, collection: _.List<number>) => number;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => number;

    let result: number;

    result = _.max<number>(array);
    result = _.max<number>(array, listIterator);
    result = _.max<number>(array, listIterator, any);
    result = _.max<number>(array, '');
    result = _.max<{a: number}, number>(array, {a: 42});

    result = _.max<number>(list);
    result = _.max<number>(list, listIterator);
    result = _.max<number>(list, listIterator, any);
    result = _.max<number>(list, '');
    result = _.max<{a: number}, number>(list, {a: 42});

    result = _.max<number>(dictionary);
    result = _.max<number>(dictionary, dictionaryIterator);
    result = _.max<number>(dictionary, dictionaryIterator, any);
    result = _.max<number>(dictionary, '');
    result = _.max<{a: number}, number>(dictionary, {a: 42});

    result = _(array).max();
    result = _(array).max(listIterator);
    result = _(array).max(listIterator, any);
    result = _(array).max('');
    result = _(array).max<{a: number}>({a: 42});

    result = _(list).max<number>();
    result = _(list).max<number>(listIterator);
    result = _(list).max<number>(listIterator, any);
    result = _(list).max<number>('');
    result = _(list).max<{a: number}, number>({a: 42});

    result = _(dictionary).max<number>();
    result = _(dictionary).max<number>(dictionaryIterator);
    result = _(dictionary).max<number>(dictionaryIterator, any);
    result = _(dictionary).max<number>('');
    result = _(dictionary).max<{a: number}, number>({a: 42});
}

// _.min
module TestMin {
    let array: number[];
    let list: _.List<number>;
    let dictionary: _.Dictionary<number>;

    let listIterator: (value: number, index: number, collection: _.List<number>) => number;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => number;

    let result: number;

    result = _.min<number>(array);
    result = _.min<number>(array, listIterator);
    result = _.min<number>(array, listIterator, any);
    result = _.min<number>(array, '');
    result = _.min<{a: number}, number>(array, {a: 42});

    result = _.min<number>(list);
    result = _.min<number>(list, listIterator);
    result = _.min<number>(list, listIterator, any);
    result = _.min<number>(list, '');
    result = _.min<{a: number}, number>(list, {a: 42});

    result = _.min<number>(dictionary);
    result = _.min<number>(dictionary, dictionaryIterator);
    result = _.min<number>(dictionary, dictionaryIterator, any);
    result = _.min<number>(dictionary, '');
    result = _.min<{a: number}, number>(dictionary, {a: 42});

    result = _(array).min();
    result = _(array).min(listIterator);
    result = _(array).min(listIterator, any);
    result = _(array).min('');
    result = _(array).min<{a: number}>({a: 42});

    result = _(list).min<number>();
    result = _(list).min<number>(listIterator);
    result = _(list).min<number>(listIterator, any);
    result = _(list).min<number>('');
    result = _(list).min<{a: number}, number>({a: 42});

    result = _(dictionary).min<number>();
    result = _(dictionary).min<number>(dictionaryIterator);
    result = _(dictionary).min<number>(dictionaryIterator, any);
    result = _(dictionary).min<number>('');
    result = _(dictionary).min<{a: number}, number>({a: 42});
}

/**********
 * Number *
 **********/

// _.inRange
result = <boolean>_.inRange(3, 2, 4);
result = <boolean>_.inRange(4, 8);
result = <boolean>_(3).inRange(2, 4);
result = <boolean>_(4).inRange(8);

// _.random
module TestRandom {
    let result: number;

    result = _.random();
    result = _.random(1);
    result = _.random(1, 2);
    result = _.random(1, 2, true);
    result = _.random(1, true);
    result = _.random(true);

    result = _(1).random();
    result = _(1).random(2);
    result = _(1).random(2, true);
    result = _(1).random(true);
    result = _(true).random();
}

/*********
* Object *
**********/
interface NameAge {
    name: string;
    age: number;
}
result = <NameAge>_.assign({ 'name': 'moe' }, { 'age': 40 });
result = <NameAge>_.assign({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).assign({ 'age': 40 });
result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).assign({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <NameAge>_.extend({ 'name': 'moe' }, { 'age': 40 });
result = <NameAge>_.extend({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).extend({ 'age': 40 });
result = <_.LoDashObjectWrapper<NameAge>>_({ 'name': 'moe' }).extend({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

// _.create
interface TestCreateProto {
    a: number;
}
interface TestCreateProps {
    b: string;
}
interface TestCreateTResult extends TestCreateProto, TestCreateProps {}
var testCreateProto: TestCreateProto;
var testCreateProps: TestCreateProps;
result = <{}>_.create(testCreateProto);
result = <{}>_.create(testCreateProto, testCreateProps);
result = <TestCreateProto>_.create<TestCreateProto>(testCreateProto);
result = <TestCreateTResult>_.create<TestCreateTResult>(testCreateProto, testCreateProps);
result = <{}>_(testCreateProto).create().value();
result = <{}>_(testCreateProto).create(testCreateProps).value();
result = <TestCreateProto>_(testCreateProto).create<TestCreateProto>().value();
result = <TestCreateTResult>_(testCreateProto).create<TestCreateTResult>(testCreateProps).value();

interface Food {
    name: string;
    type: string;
}
var foodDefaults = { 'name': 'apple' };
result = <Food>_.defaults(foodDefaults, { 'name': 'banana', 'type': 'fruit' });
result = <_.LoDashObjectWrapper<Food>>_(foodDefaults).defaults({ 'name': 'banana', 'type': 'fruit' });

//_.defaultsDeep
interface DefaultsDeepResult {
    user: {
        name: string;
        age: number;
    }
}
var TestDefaultsDeepObject = {'user': {'name': 'barney'}};
var TestDefaultsDeepSource = {'user': {'name': 'fred', 'age': 36}};
result = <DefaultsDeepResult>_.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource);
result = <DefaultsDeepResult>_(TestDefaultsDeepObject).defaultsDeep<DefaultsDeepResult>(TestDefaultsDeepSource).value();

// _.findKey
module TestFindKey {
    let result: string;

    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;

        result = _.findKey<{a: string;}>({a: ''});

        result = _.findKey<{a: string;}>({a: ''}, predicateFn);
        result = _.findKey<{a: string;}>({a: ''}, predicateFn, any);


        result = _.findKey<{a: string;}>({a: ''}, '');
        result = _.findKey<{a: string;}>({a: ''}, '', any);

        result = _.findKey<{a: number;}, {a: string;}>({a: ''}, {a: 42});

        result = _<{a: string;}>({a: ''}).findKey();

        result = _<{a: string;}>({a: ''}).findKey(predicateFn);
        result = _<{a: string;}>({a: ''}).findKey(predicateFn, any);


        result = _<{a: string;}>({a: ''}).findKey('');
        result = _<{a: string;}>({a: ''}).findKey('', any);

        result = _<{a: string;}>({a: ''}).findKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn: (value: string, key?: string, collection?: _.Dictionary<string>) => boolean;

        result = _.findKey<string, {a: string;}>({a: ''}, predicateFn);
        result = _.findKey<string, {a: string;}>({a: ''}, predicateFn, any);

        result = _<{a: string;}>({a: ''}).findKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).findKey<string>(predicateFn, any);
    }
}

result = <string>_.findLastKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function (num) {
    return num % 2 == 1;
});

result = <Dog>_.forIn(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<Dog>>_(new Dog('Dagny')).forIn(function (value, key) {
    console.log(key);
});

result = <Dog>_.forInRight(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<Dog>>_(new Dog('Dagny')).forInRight(function (value, key) {
    console.log(key);
});

interface ZeroOne {
    0: string;
    1: string;
    one: string;
}

result = <ZeroOne>_.forOwn(<ZeroOne>{ '0': 'zero', '1': 'one', 'one': '2' }, function (num, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<ZeroOne>>_({ '0': 'zero', '1': 'one', 'length': 2 }).forOwn(function (num, key) {
    console.log(key);
});

result = <any>_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function (num, key) {
    console.log(key);
});

result = <_.LoDashObjectWrapper<ZeroOne>>_({ '0': 'zero', '1': 'one', 'length': 2 }).forOwnRight(function (num, key) {
    console.log(key);
});

result = <string[]>_.functions(_);
result = <string[]>_.methods(_);

result = <_.LoDashArrayWrapper<string>>_(_).functions();
result = <_.LoDashArrayWrapper<string>>_(_).methods();

// _.get
result = <number>_.get<number>({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c');

{
    let result: TResult;
    result = _.get<TResult>({}, '');
    result = _.get<TResult>({}, 42);
    result = _.get<TResult>({}, true);
    result = _.get<TResult>({}, ['', 42, true]);
    result = _({}).get<TResult>('');
    result = _({}).get<TResult>(42);
    result = _({}).get<TResult>(true);
    result = _({}).get<TResult>(['', 42, true]);
}

// _.has
result = <boolean>_.has({}, '');
result = <boolean>_.has({}, 42);
result = <boolean>_.has({}, true);
result = <boolean>_.has({}, ['', 42, true]);
result = <boolean>_({}).has('');
result = <boolean>_({}).has(42);
result = <boolean>_({}).has(true);
result = <boolean>_({}).has(['', 42, true]);

// _.invert
{
    let result: TResult;
    result = _.invert<Object, TResult>({});
    result = _.invert<Object, TResult>({}, true);
    result = _({}).invert<TResult>().value();
    result = _({}).invert<TResult>(true).value();
}

// _.isEqual (alias: _.eq)
result = <boolean>_.isEqual(1, 1);
result = <boolean>_(1).isEqual(1);
result = <boolean>_.eq(1, 1);
result = <boolean>_(1).eq(1);

var testEqObject = { 'user': 'fred' };
var testEqOtherObject = { 'user': 'fred' };
result = <boolean>_.isEqual(testEqObject, testEqOtherObject);
result = <boolean>_(testEqObject).isEqual(testEqOtherObject);
result = <boolean>_.eq(testEqObject, testEqOtherObject);
result = <boolean>_(testEqObject).eq(testEqOtherObject);

var testEqArray = ['hello', 'goodbye'];
var testEqOtherArray = ['hi', 'goodbye'];
var testEqCustomizerFn = (value: any, other: any): boolean => {
    if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
        return true;
    }
};
result = <boolean>_.isEqual(testEqArray, testEqOtherArray, testEqCustomizerFn);
result = <boolean>_(testEqArray).isEqual(testEqOtherArray, testEqCustomizerFn);
result = <boolean>_.eq(testEqArray, testEqOtherArray, testEqCustomizerFn);
result = <boolean>_(testEqArray).eq(testEqOtherArray, testEqCustomizerFn);

class Stooge {
    constructor(
        public name: string,
        public age: number
        ) { }
}

result = <string[]>_.keys({ 'one': 1, 'two': 2, 'three': 3 });
result = <string[]>_({ 'one': 1, 'two': 2, 'three': 3 }).keys().value();

result = <string[]>_.keysIn({ 'one': 1, 'two': 2, 'three': 3 });
result = <string[]>_({ 'one': 1, 'two': 2, 'three': 3 }).keysIn().value();

// _.mapKeys
module TestMapKeys {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => string;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => string;

    let result: _.Dictionary<TResult>;

    result = _.mapKeys<TResult, string>(array);
    result = _.mapKeys<TResult, string>(array, listIterator);
    result = _.mapKeys<TResult, string>(array, listIterator, any);
    result = _.mapKeys<TResult>(array, '');
    result = _.mapKeys<TResult, {}>(array, {});

    result = _.mapKeys<TResult, string>(list);
    result = _.mapKeys<TResult, string>(list, listIterator);
    result = _.mapKeys<TResult, string>(list, listIterator, any);
    result = _.mapKeys<TResult>(list, '');
    result = _.mapKeys<TResult, {}>(list, {});

    result = _.mapKeys<TResult, string>(dictionary);
    result = _.mapKeys<TResult, string>(dictionary, dictionaryIterator);
    result = _.mapKeys<TResult, string>(dictionary, dictionaryIterator, any);
    result = _.mapKeys<TResult>(dictionary, '');
    result = _.mapKeys<TResult, {}>(dictionary, {});

    result = _(array).mapKeys<string>().value();
    result = _(array).mapKeys<string>(listIterator).value();
    result = _(array).mapKeys<string>(listIterator, any).value();
    result = _(array).mapKeys('').value();
    result = _(array).mapKeys<{}>({}).value();

    result = _(list).mapKeys<TResult, string>().value();
    result = _(list).mapKeys<TResult, string>(listIterator).value();
    result = _(list).mapKeys<TResult, string>(listIterator, any).value();
    result = _(list).mapKeys<TResult>('').value();
    result = _(list).mapKeys<TResult, {}>({}).value();

    result = _(dictionary).mapKeys<TResult, string>().value();
    result = _(dictionary).mapKeys<TResult, string>(dictionaryIterator).value();
    result = _(dictionary).mapKeys<TResult, string>(dictionaryIterator, any).value();
    result = _(dictionary).mapKeys<TResult>('').value();
    result = _(dictionary).mapKeys<TResult, {}>({}).value();
}

// _.merge
module TestMerge {
    let customizer: (value: any, srcValue: any, key?: string, object?: {}, source?: {}) => any;
    let result: TResult;

    result = _.merge<{}, {}, TResult>({}, {});
    result = _.merge<{}, {}, TResult>({}, {}, customizer);
    result = _.merge<{}, {}, TResult>({}, {}, customizer, any);

    result = _.merge<{}, {}, {}, TResult>({}, {}, {});
    result = _.merge<{}, {}, {}, TResult>({}, {}, {}, customizer);
    result = _.merge<{}, {}, {}, TResult>({}, {}, {}, customizer, any);

    result = _.merge<{}, {}, {}, {}, TResult>({}, {}, {}, {});
    result = _.merge<{}, {}, {}, {}, TResult>({}, {}, {}, {}, customizer);
    result = _.merge<{}, {}, {}, {}, TResult>({}, {}, {}, {}, customizer, any);

    result = _.merge<{}, {}, {}, {}, {}, TResult>({}, {}, {}, {}, {});
    result = _.merge<{}, {}, {}, {}, {}, TResult>({}, {}, {}, {}, {}, customizer);
    result = _.merge<{}, {}, {}, {}, {}, TResult>({}, {}, {}, {}, {}, customizer, any);

    result = _.merge<{}, TResult>({}, {}, {}, {}, {}, {});
    result = _.merge<{}, TResult>({}, {}, {}, {}, {}, {}, customizer);
    result = _.merge<{}, TResult>({}, {}, {}, {}, {}, {}, customizer, any);

    result = _({}).merge<{}, TResult>({}).value();
    result = _({}).merge<{}, TResult>({}, customizer).value();
    result = _({}).merge<{}, TResult>({}, customizer, any).value();

    result = _({}).merge<{}, {}, TResult>({}, {}).value();
    result = _({}).merge<{}, {}, TResult>({}, {}, customizer).value();
    result = _({}).merge<{}, {}, TResult>({}, {}, customizer, any).value();

    result = _({}).merge<{}, {}, {}, TResult>({}, {}, {}).value();
    result = _({}).merge<{}, {}, {}, TResult>({}, {}, {}, customizer).value();
    result = _({}).merge<{}, {}, {}, TResult>({}, {}, {}, customizer, any).value();

    result = _({}).merge<{}, {}, {}, {}, TResult>({}, {}, {}, {}).value();
    result = _({}).merge<{}, {}, {}, {}, TResult>({}, {}, {}, {}, customizer).value();
    result = _({}).merge<{}, {}, {}, {}, TResult>({}, {}, {}, {}, customizer, any).value();

    result = _({}).merge<TResult>({}, {}, {}, {}, {}).value();
    result = _({}).merge<TResult>({}, {}, {}, {}, {}, customizer).value();
    result = _({}).merge<TResult>({}, {}, {}, {}, {}, customizer, any).value();
}

interface HasName {
    name: string;
}
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, 'age');
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, ['age']);
result = <HasName>_.omit({ 'name': 'moe', 'age': 40 }, function (value) {
    return typeof value == 'number';
});
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit('age').value();
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit(['age']).value();
result = <HasName>_({ 'name': 'moe', 'age': 40 }).omit(function (value) {
    return typeof value == 'number';
}).value();

result = <any[][]>_.pairs({ 'moe': 30, 'larry': 40 });
result = <any[][]>_({ 'moe': 30, 'larry': 40 }).pairs().value();

// _.pick
interface TestPickFn {
    (element: any, key: string, collection: any): boolean;
}
{
    let testPickFn: TestPickFn;
    let result: TResult;
    result = _.pick<TResult, Object>({}, 0, '1', true, [2], ['3'], [true], [4, '5', true]);
    result = _.pick<TResult, Object>({}, testPickFn);
    result = _.pick<TResult, Object>({}, testPickFn, any);
    result = _({}).pick<TResult>(0, '1', true, [2], ['3'], [true], [4, '5', true]).value();
    result = _({}).pick<TResult>(testPickFn).value();
    result = _({}).pick<TResult>(testPickFn, any).value();
}

// _.result
{
    let testResultPath: number|string|boolean|Array<number|string|boolean>;
    let testResultDefaultValue: TResult;
    let result: TResult;
    result = _.result<{}, TResult>({}, testResultPath);
    result = _.result<{}, TResult>({}, testResultPath, testResultDefaultValue);
    result = _({}).result<TResult>(testResultPath);
    result = _({}).result<TResult>(testResultPath, testResultDefaultValue);
}

// _.set
{
    let testSetObject: TResult;
    let testSetPath: {toSting(): string};
    let result: TResult;
    result = _.set(testSetObject, testSetPath, any);
    result = _.set(testSetObject, [testSetPath], any);
    result = _(testSetObject).set(testSetPath, any).value();
    result = _(testSetObject).set([testSetPath], any).value();
}

// _.transform
module TestTransform {
    let array: number[];
    let dictionary: _.Dictionary<number>;

    {
        let iterator: (acc: TResult[], curr: number, index?: number, arr?: number[]) => void;
        let accumulator: TResult[];
        let result: TResult[];

        result = _.transform<number, TResult>(array);
        result = _.transform<number, TResult>(array, iterator);
        result = _.transform<number, TResult>(array, iterator, accumulator);
        result = _.transform<number, TResult>(array, iterator, accumulator, any);

        result = _<number>(array).transform<TResult>().value();
        result = _<number>(array).transform<TResult>(iterator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator, any).value();
    }

    {
        let iterator: (acc: _.Dictionary<TResult>, curr: number, index?: number, arr?: number[]) => void;
        let accumulator: _.Dictionary<TResult>;
        let result: _.Dictionary<TResult>;

        result = _.transform<number, TResult>(array, iterator);
        result = _.transform<number, TResult>(array, iterator, accumulator);
        result = _.transform<number, TResult>(array, iterator, accumulator, any);

        result = _<number>(array).transform<TResult>(iterator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator).value();
        result = _<number>(array).transform<TResult>(iterator, accumulator, any).value();
    }

    {
        let iterator: (acc: _.Dictionary<TResult>, curr: number, key?: string, dict?: _.Dictionary<number>) => void;
        let accumulator: _.Dictionary<TResult>;
        let result: _.Dictionary<TResult>;

        result = _.transform<number, TResult>(dictionary);
        result = _.transform<number, TResult>(dictionary, iterator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator, any);

        result = _(dictionary).transform<number, TResult>().value();
        result = _(dictionary).transform<number, TResult>(iterator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator, any).value();
    }

    {
        let iterator: (acc: TResult[], curr: number, key?: string, dict?: _.Dictionary<number>) => void;
        let accumulator: TResult[];
        let result: TResult[];

        result = _.transform<number, TResult>(dictionary, iterator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator);
        result = _.transform<number, TResult>(dictionary, iterator, accumulator, any);

        result = _(dictionary).transform<number, TResult>(iterator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator).value();
        result = _(dictionary).transform<number, TResult>(iterator, accumulator, any).value();
    }
}

// _.values
class TestValues {
    public a = 1;
    public b = 2;
    public c: string;
}
TestValues.prototype.c = 'a';
result = <number[]>_.values<number>(new TestValues());
// → [1, 2] (iteration order is not guaranteed)
result = <number[]>_(new TestValues()).values<number>().value();
// → [1, 2] (iteration order is not guaranteed)

// _.valueIn
class TestValueIn {
    public a = 1;
    public b = 2;
    public c: number;
}
TestValueIn.prototype.c = 3;
result = <number[]>_.valuesIn<number>(new TestValueIn());
// → [1, 2, 3]
result = <number[]>_(new TestValueIn()).valuesIn<number>().value();
// → [1, 2, 3]

/**********
* Utility *
***********/

// _.attempt
interface TestAttemptFn {
    (): TResult;
}
var testAttempFn: TestAttemptFn;
result = <TResult|Error>_.attempt<TResult>(testAttempFn);
result = <TResult|Error>_(testAttempFn).attempt<TResult>();

// _.noop
result = <void>_.noop();
result = <void>_.noop(1);
result = <void>_.noop('a', 1);
result = <void>_.noop(true, 'a', 1);
result = <void>_('a').noop(true, 'a', 1);
result = <void>_([1]).noop(true, 'a', 1);
result = <void>_<string>([]).noop(true, 'a', 1);
result = <void>_({}).noop(true, 'a', 1);
result = <void>_(any).noop(true, 'a', 1);

// _.property
interface TestPropertyObject {
    a: {
        b: number;
    }
}
var testPropertyObject: TestPropertyObject;
result = <number>_.property<TestPropertyObject, number>('a.b')(testPropertyObject);
result = <number>_.property<TestPropertyObject, number>(['a', 'b'])(testPropertyObject);
result = <number>(_('a.b').property<TestPropertyObject, number>().value())(testPropertyObject);
result = <number>(_(['a', 'b']).property<TestPropertyObject, number>().value())(testPropertyObject);

// _.propertyOf
interface TestPropertyOfObject {
    a: {
        b: number[];
    }
}
var testPropertyOfObject: TestPropertyOfObject;
result = <(path: string|string[]) => any>_.propertyOf({});
result = <(path: string|string[]) => any>_.propertyOf<TestPropertyOfObject>(testPropertyOfObject);
result = <(path: string|string[]) => any>_({}).propertyOf().value();

// _.range
result = <number[]>_.range(10);
result = <number[]>_.range(1, 11);
result = <number[]>_.range(0, 30, 5);
result = <number[]>_(10).range().value();
result = <number[]>_(1).range(11).value();
result = <number[]>_(0).range(30, 5).value();

class Mage {
    public castSpell(n: number) {
        return n;
    }

    public cast(n: number) {
        return n;
    }
}

/*********
* String
*********/

// _.camelCase
result = <string>_.camelCase('Foo Bar');
result = <string>_('Foo Bar').camelCase();

// _.capitalize
result = <string>_.capitalize('fred');
result = <string>_('fred').capitalize();

// _.deburr
result = <string>_.deburr('déjà vu');
result = <string>_('déjà vu').deburr();

// _.endsWith
result = <boolean>_.endsWith('abc', 'c');
result = <boolean>_.endsWith('abc', 'c', 1);
result = <boolean>_('abc').endsWith('c');
result = <boolean>_('abc').endsWith('c', 1);

// _.escape
result = <string>_.escape('fred, barney, & pebbles');
result = <string>_('fred, barney, & pebbles').escape();

// _.escapeRegExp
result = <string>_.escapeRegExp('[lodash](https://lodash.com/)');
result = <string>_('[lodash](https://lodash.com/)').escapeRegExp();

// _.kebabCase
result = <string>_.kebabCase('Foo Bar');
result = <string>_('Foo Bar').kebabCase();

// _.pad
result = <string>_.pad('abd');
result = <string>_.pad('abc', 8);
result = <string>_.pad('abc', 8, '_-');
result = <string>_('abc').pad();
result = <string>_('abc').pad(8);
result = <string>_('abc').pad(8, '_-');

// _.padLeft
result = <string>_.padLeft('abc');
result = <string>_.padLeft('abc', 6);
result = <string>_.padLeft('abc', 6, '_-');
result = <string>_('abc').padLeft();
result = <string>_('abc').padLeft(6);
result = <string>_('abc').padLeft(6, '_-');

// _.padRight
result = <string>_.padRight('abc');
result = <string>_.padRight('abc', 6);
result = <string>_.padRight('abc', 6, '_-');
result = <string>_('abc').padRight();
result = <string>_('abc').padRight(6);
result = <string>_('abc').padRight(6, '_-');

// _.parseInt
result = <number>_.parseInt('08');
result = <number>_.parseInt('08', 10);
result = <number>_('08').parseInt();
result = <number>_('08').parseInt(10);

// _.repeat
result = <string>_.repeat('*', 3);
result = <string>_('*').repeat(3);

// _.snakeCase
result = <string>_.snakeCase('Foo Bar');
result = <string>_('Foo Bar').snakeCase();

// _.startCase
result = <string>_.startCase('--foo-bar');
result = <string>_('--foo-bar').startCase();

// _.startsWith
result = <boolean>_.startsWith('abc', 'a');
result = <boolean>_.startsWith('abc', 'a', 1);
result = <boolean>_('abc').startsWith('a');
result = <boolean>_('abc').startsWith('a', 1);

// _.template
interface TestTemplateOptions {
    escape?: RegExp;
    evaluate?: RegExp;
    imports?: _.Dictionary<any>;
    interpolate?: RegExp;
    variable?: string;
}
interface TestTemplateExecutor {
    (obj?: Object): string;
    source: string;
}
{
    let testTemplateOptions: TestTemplateOptions
    let result: TestTemplateExecutor;
    result = _.template('');
    result = _.template('', testTemplateOptions);
    result = _('').template();
    result = _('').template(testTemplateOptions);
}

// _.trim
result = <string>_.trim();
result = <string>_.trim('  abc  ');
result = <string>_.trim('-_-abc-_-', '_-');
result = <string>_('-_-abc-_-').trim();
result = <string>_('-_-abc-_-').trim('_-');

// _.trimLeft
result = <string>_.trimLeft();
result = <string>_.trimLeft('  abc  ');
result = <string>_.trimLeft('-_-abc-_-', '_-');
result = <string>_('-_-abc-_-').trimLeft();
result = <string>_('-_-abc-_-').trimLeft('_-');

// _.trimRight
result = <string>_.trimRight();
result = <string>_.trimRight('  abc  ');
result = <string>_.trimRight('-_-abc-_-', '_-');
result = <string>_('-_-abc-_-').trimRight();
result = <string>_('-_-abc-_-').trimRight('_-');

// _.trunc
result = <string>_.trunc('hi-diddly-ho there, neighborino');
result = <string>_.trunc('hi-diddly-ho there, neighborino', 24);
result = <string>_.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
result = <string>_.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
result = <string>_.trunc('hi-diddly-ho there, neighborino', { 'omission': ' […]' });
result = <string>_('hi-diddly-ho there, neighborino').trunc();
result = <string>_('hi-diddly-ho there, neighborino').trunc(24);
result = <string>_('hi-diddly-ho there, neighborino').trunc({ 'length': 24, 'separator': ' ' });
result = <string>_('hi-diddly-ho there, neighborino').trunc({ 'length': 24, 'separator': /,? +/ });
result = <string>_('hi-diddly-ho there, neighborino').trunc({ 'omission': ' […]' });

// _.unescape
result = <string>_.unescape('fred, barney, &amp; pebbles');
result = <string>_('fred, barney, &amp; pebbles').unescape();

// _.words
result = <string[]>_.words('fred, barney, & pebbles');
result = <string[]>_.words('fred, barney, & pebbles', /[^, ]+/g);
result = <string[]>_('fred, barney, & pebbles').words();
result = <string[]>_('fred, barney, & pebbles').words(/[^, ]+/g);

/***********
 * Utility *
 ***********/

// _.callback
{
    let result: (...args: any[]) => TResult;
    result = _.callback<TResult>(Function);
    result = _.callback<TResult>(Function, any);
    result = _(Function).callback<TResult>().value();
    result = _(Function).callback<TResult>(any).value();
}
{
    let result: (object: any) => TResult;
    result = _.callback<TResult>('');
    result = _.callback<TResult>('', any);
    result = _('').callback<TResult>().value();
    result = _('').callback<TResult>(any).value();
}
{
    let result: (object: any) => boolean;
    result = _.callback({});
    result = _.callback({}, any);
    result = _({}).callback().value();
    result = _({}).callback(any).value();
}

// _.constant
result = <() => number>_.constant<number>(1);
result = <() => string>_.constant<string>('a');
result = <() => boolean>_.constant<boolean>(true);
result = <() => any[]>_.constant<any[]>([]);
result = <() => {}>_.constant<{}>({});
result = <() => number>_(1).constant<number>();
result = <() => string>_('a').constant<string>();
result = <() => boolean>_(true).constant<boolean>();
result = <() => any[]>_(['a']).constant<any[]>();
result = <() => {}>_({}).constant<{}>();

// _.identity
{
    let testIdentityValue: TResult;
    let result: TResult;
    result = _.identity<TResult>(testIdentityValue);
    result = _(testIdentityValue).identity();
}
{
    let result: number;
    result = _(42).identity();
}
{
    let result: boolean[];
    result = _<boolean>([]).identity();
}

// _.iteratee
{
    let result: (...args: any[]) => TResult;
    result = _.iteratee<TResult>(Function);
    result = _.iteratee<TResult>(Function, any);
    result = _(Function).iteratee<TResult>().value();
    result = _(Function).iteratee<TResult>(any).value();
}
{
    let result: (object: any) => TResult;
    result = _.iteratee<TResult>('');
    result = _.iteratee<TResult>('', any);
    result = _('').iteratee<TResult>().value();
    result = _('').iteratee<TResult>(any).value();
}
{
    let result: (object: any) => boolean;
    result = _.iteratee({});
    result = _.iteratee({}, any);
    result = _({}).iteratee().value();
    result = _({}).iteratee(any).value();
}

// _.matches
module TestMatches {
    let source: TResult;

    {
        let result: (value: any) => boolean;
        result = _.matches<TResult>(source);
        result = _(source).matches().value();
    }

    {
        let result: (value: TResult) => boolean;
        result = _.matches<TResult, TResult>(source);
        result = _(source).matches<TResult>().value();
    }
}

// _.matchesProperty
module TestMatches {
    let path: {toString(): string;}|{toString(): string;}[];
    let source: TResult;

    {
        let result: (value: any) => boolean;
        result = _.matchesProperty<TResult>(path, source);
        result = _(path).matchesProperty<TResult>(source).value();
    }

    {
        let result: (value: TResult) => boolean;
        result = _.matchesProperty<TResult, TResult>(path, source);
        result = _(path).matchesProperty<TResult, TResult>(source).value();
    }
}

// _.method
class TestMethod {
    a = {
        b: (a1: number, a2: number) => a1 + a2
    }
}
var TestMethodObject = new TestMethod();
result = <number>(_.method<number>('a.b', 1, 2))(TestMethodObject);
result = <number>(_.method<number>(['a', 'b'], 1, 2))(TestMethodObject);
result = <number>(_('a.b').method<number>(1, 2).value())(TestMethodObject);
result = <number>(_(['a', 'b']).method<number>(1, 2).value())(TestMethodObject);

// _.methodOf
class TestMethodOf {
    a = [
        (a1: number, a2: number) => a1 + a2
    ];
}
var TestMethodOfObject = new TestMethodOf();
result = <number>(_.methodOf<number>(TestMethodOfObject, 1, 2))('a[0]');
result = <number>(_.methodOf<number>(TestMethodOfObject, 1, 2))(['a', '0']);
result = <number>(_(TestMethodOfObject).methodOf<number>(1, 2).value())('a[0]');
result = <number>(_(TestMethodOfObject).methodOf<number>(1, 2).value())(['a', '0']);

// _.mixin
{
    let testMixinSource: _.Dictionary<Function>;
    let testMixinOptions: {chain?: boolean;}
    let result: TResult;
    result = _.mixin<TResult, Object>({}, testMixinSource);
    result = _.mixin<TResult, Object>({}, testMixinSource, testMixinOptions);
    result = _.mixin<TResult>(testMixinSource);
    result = _.mixin<TResult>(testMixinSource, testMixinOptions);
    result = _({}).mixin<TResult>(testMixinSource).value();
    result = _({}).mixin<TResult>(testMixinSource, testMixinOptions).value();
    result = _(testMixinSource).mixin<TResult>().value();
    result = _(testMixinSource).mixin<TResult>(testMixinOptions).value();
}

// _.noConflict
{
    let result: typeof _;
    result = _.noConflict();
    result = _(42).noConflict();
    result = _<any>([]).noConflict();
    result = _({}).noConflict();
}

// _.runInContext
{
    let result: typeof _;
    result = _.runInContext();
    result = _.runInContext({});
    result = _({}).runInContext();
}

// _.uniqueId
result = <string>_.uniqueId();
result = <string>_.uniqueId('');
result = <string>_('').uniqueId();

result = <string>_.VERSION;
result = <_.Support>_.support;
result = <_.TemplateSettings>_.templateSettings;

// _.times
{
    let result: number[];
    result = _.times(42);
    result = _(42).times().value();
}
{
    let testTimesFn: (num: number) => TResult;
    let result: TResult[];
    result = _.times(42, testTimesFn);
    result = _.times(42, testTimesFn, any);
    result = _(42).times(testTimesFn).value();
    result = _(42).times(testTimesFn, any).value();
}
