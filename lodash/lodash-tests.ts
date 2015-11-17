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

// _
module TestWrapper {
    {
        let result: _.LoDashImplicitWrapper<string>;
        result = _('');
    }

    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(42);
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(true);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;
        result = _<string>(['']);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;
        result = _<{a: string}>({a: ''});
    }
}

//Wrapped array shortcut methods
result = <string>_([1, 2, 3, 4]).join(',');
result = <number>_([1, 2, 3, 4]).pop();
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).push(5, 6, 7);
result = <number>_([1, 2, 3, 4]).shift();
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).sort((a, b) => 1);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).splice(1);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).unshift(5, 6);

/*********
 * Array *
 *********/

// _.chunk
module TestChunk {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[][];

        result = _.chunk<TResult>(array);
        result = _.chunk<TResult>(array, 42);

        result = _.chunk<TResult>(list);
        result = _.chunk<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult[]>;

        result = _(array).chunk();
        result = _(array).chunk(42);

        result = _(list).chunk<TResult>();
        result = _(list).chunk<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult[]>;

        result = _(array).chain().chunk();
        result = _(array).chain().chunk(42);

        result = _(list).chain().chunk<TResult>();
        result = _(list).chain().chunk<TResult>(42);
    }
}

// _.compact
module TestCompact {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.compact<TResult>();
        result = _.compact<TResult>(array);
        result = _.compact<TResult>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _<TResult>(array).compact();
        result = _(list).compact<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _<TResult>(array).chain().compact();
        result = _(list).chain().compact<TResult>();
    }
}

// _.difference
module TestDifference {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.difference<TResult>(array);
        result = _.difference<TResult>(array, array);
        result = _.difference<TResult>(array, list, array);
        result = _.difference<TResult>(array, array, list, array);

        result = _.difference<TResult>(list);
        result = _.difference<TResult>(list, list);
        result = _.difference<TResult>(list, array, list);
        result = _.difference<TResult>(list, list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).difference();
        result = _(array).difference(array);
        result = _(array).difference(list, array);
        result = _(array).difference(array, list, array);

        result = _(list).difference<TResult>();
        result = _(list).difference<TResult>(list);
        result = _(list).difference<TResult>(array, list);
        result = _(list).difference<TResult>(list, array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().difference();
        result = _(array).chain().difference(array);
        result = _(array).chain().difference(list, array);
        result = _(array).chain().difference(array, list, array);

        result = _(list).chain().difference<TResult>();
        result = _(list).chain().difference<TResult>(list);
        result = _(list).chain().difference<TResult>(array, list);
        result = _(list).chain().difference<TResult>(list, array, list);
    }
}

// _.drop
{
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];
        result = _.drop<TResult>(array);
        result = _.drop<TResult>(array, 42);

        result = _.drop<TResult>(list);
        result = _.drop<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).drop();
        result = _(array).drop(42);

        result = _(list).drop<TResult>();
        result = _(list).drop<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().drop();
        result = _(array).chain().drop(42);

        result = _(list).chain().drop<TResult>();
        result = _(list).chain().drop<TResult>(42);
    }
}

// _.dropRight
module TestDropRight {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.dropRight<TResult>(array);
        result = _.dropRight<TResult>(array, 42);

        result = _.dropRight<TResult>(list);
        result = _.dropRight<TResult>(list, 42);

    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).dropRight();
        result = _(array).dropRight(42);

        result = _(list).dropRight<TResult>();
        result = _(list).dropRight<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().dropRight();
        result = _(array).chain().dropRight(42);

        result = _(list).chain().dropRight<TResult>();
        result = _(list).chain().dropRight<TResult>(42);
    }
}

// _.dropRightWhile
module TestDropRightWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;

    {
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
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).dropRightWhile();
        result = _(array).dropRightWhile(predicateFn);
        result = _(array).dropRightWhile(predicateFn, any);
        result = _(array).dropRightWhile('');
        result = _(array).dropRightWhile('', any);
        result = _(array).dropRightWhile<{a: number;}>({a: 42});

        result = _(list).dropRightWhile<TResult>();
        result = _(list).dropRightWhile<TResult>(predicateFn);
        result = _(list).dropRightWhile<TResult>(predicateFn, any);
        result = _(list).dropRightWhile<TResult>('');
        result = _(list).dropRightWhile<TResult>('', any);
        result = _(list).dropRightWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().dropRightWhile();
        result = _(array).chain().dropRightWhile(predicateFn);
        result = _(array).chain().dropRightWhile(predicateFn, any);
        result = _(array).chain().dropRightWhile('');
        result = _(array).chain().dropRightWhile('', any);
        result = _(array).chain().dropRightWhile<{a: number;}>({a: 42});

        result = _(list).chain().dropRightWhile<TResult>();
        result = _(list).chain().dropRightWhile<TResult>(predicateFn);
        result = _(list).chain().dropRightWhile<TResult>(predicateFn, any);
        result = _(list).chain().dropRightWhile<TResult>('');
        result = _(list).chain().dropRightWhile<TResult>('', any);
        result = _(list).chain().dropRightWhile<{a: number;}, TResult>({a: 42});
    }
}

// _.dropWhile
module TestDropWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;

    {
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
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).dropWhile();
        result = _(array).dropWhile(predicateFn);
        result = _(array).dropWhile(predicateFn, any);
        result = _(array).dropWhile('');
        result = _(array).dropWhile('', any);
        result = _(array).dropWhile<{a: number;}>({a: 42});

        result = _(list).dropWhile<TResult>();
        result = _(list).dropWhile<TResult>(predicateFn);
        result = _(list).dropWhile<TResult>(predicateFn, any);
        result = _(list).dropWhile<TResult>('');
        result = _(list).dropWhile<TResult>('', any);
        result = _(list).dropWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().dropWhile();
        result = _(array).chain().dropWhile(predicateFn);
        result = _(array).chain().dropWhile(predicateFn, any);
        result = _(array).chain().dropWhile('');
        result = _(array).chain().dropWhile('', any);
        result = _(array).chain().dropWhile<{a: number;}>({a: 42});

        result = _(list).chain().dropWhile<TResult>();
        result = _(list).chain().dropWhile<TResult>(predicateFn);
        result = _(list).chain().dropWhile<TResult>(predicateFn, any);
        result = _(list).chain().dropWhile<TResult>('');
        result = _(list).chain().dropWhile<TResult>('', any);
        result = _(list).chain().dropWhile<{a: number;}, TResult>({a: 42});
    }
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

    {
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

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _<TResult>(array).chain().findIndex();
        result = _<TResult>(array).chain().findIndex(predicateFn);
        result = _<TResult>(array).chain().findIndex(predicateFn, any);
        result = _<TResult>(array).chain().findIndex('');
        result = _<TResult>(array).chain().findIndex('', any);
        result = _<TResult>(array).chain().findIndex<{a: number}>({a: 42});

        result = _(list).chain().findIndex();
        result = _(list).chain().findIndex<TResult>(predicateFn);
        result = _(list).chain().findIndex<TResult>(predicateFn, any);
        result = _(list).chain().findIndex('');
        result = _(list).chain().findIndex('', any);
        result = _(list).chain().findIndex<{a: number}>({a: 42});
    }
}

// _.findLastIndex
module TestFindLastIndex {
    let array: TResult[];
    let list: _.List<TResult>;

    let predicateFn: (value: TResult, index?: number, collection?: _.List<TResult>) => boolean;

    {
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

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _<TResult>(array).chain().findLastIndex();
        result = _<TResult>(array).chain().findLastIndex(predicateFn);
        result = _<TResult>(array).chain().findLastIndex(predicateFn, any);
        result = _<TResult>(array).chain().findLastIndex('');
        result = _<TResult>(array).chain().findLastIndex('', any);
        result = _<TResult>(array).chain().findLastIndex<{a: number}>({a: 42});

        result = _(list).chain().findLastIndex();
        result = _(list).chain().findLastIndex<TResult>(predicateFn);
        result = _(list).chain().findLastIndex<TResult>(predicateFn, any);
        result = _(list).chain().findLastIndex('');
        result = _(list).chain().findLastIndex('', any);
        result = _(list).chain().findLastIndex<{a: number}>({a: 42});
    }
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

result = <_.LoDashImplicitArrayWrapper<number>>_([[1, 2], [3, 4], 5, 6]).flatten();
result = <_.LoDashImplicitArrayWrapper<number|Array<Array<number>>>>_([1, [2], [3, [[4]]]]).flatten();

result = <_.LoDashImplicitArrayWrapper<number>>_([1, [2], [3, [[4]]]]).flatten(true);

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

    {
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

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().indexOf(value);
        result = _(array).chain().indexOf(value, true);
        result = _(array).chain().indexOf(value, 42);

        result = _(list).chain().indexOf<TResult>(value);
        result = _(list).chain().indexOf<TResult>(value, true);
        result = _(list).chain().indexOf<TResult>(value, 42);
    }
}

//_.initial
module TestInitial {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.initial<TResult>(array);
        result = _.initial<TResult>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).initial();
        result = _(list).initial<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().initial();
        result = _(list).chain().initial<TResult>();
    }
}

// _.intersection
module TestIntersection {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.intersection<TResult>(array, list);
        result = _.intersection<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).intersection<TResult>(array);
        result = _(array).intersection<TResult>(list, array);

        result = _(list).intersection<TResult>(array);
        result = _(list).intersection<TResult>(list, array);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().intersection<TResult>(array);
        result = _(array).chain().intersection<TResult>(list, array);

        result = _(list).chain().intersection<TResult>(array);
        result = _(list).chain().intersection<TResult>(list, array);
    }
}

// _.last
module TestLast {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult;

        result = _.last<TResult>(array);
        result = _.last<TResult>(list);

        result = _(array).last();
        result = _(list).last<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().last();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().last<_.List<TResult>>();
    }
}

// _.lastIndexOf
module TestLastIndexOf {
    let array: TResult[];
    let list: _.List<TResult>;
    let value: TResult;

    {
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

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().lastIndexOf(value);
        result = _(array).chain().lastIndexOf(value, true);
        result = _(array).chain().lastIndexOf(value, 42);

        result = _(list).chain().lastIndexOf<TResult>(value);
        result = _(list).chain().lastIndexOf<TResult>(value, true);
        result = _(list).chain().lastIndexOf<TResult>(value, 42);
    }
}

// _.object
module TestObject {
    let arrayOfKeys: string[];
    let arrayOfValues: number[];
    let arrayOfKeyValuePairs: (string|number)[][]

    let listOfKeys: _.List<string>;
    let listOfValues: _.List<number>;
    let listOfKeyValuePairs: _.List<_.List<string|number>>;

    {
        let result: _.Dictionary<void>;

        result = _.object<_.Dictionary<void>>(arrayOfKeys);
        result = _.object<_.Dictionary<void>>(listOfKeys);
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

        result = _.object<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.object<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.Dictionary<any>;

        result = _.object(arrayOfKeys);
        result = _.object(arrayOfKeys, arrayOfValues);
        result = _.object(arrayOfKeys, listOfValues);

        result = _.object(listOfKeys);
        result = _.object(listOfKeys, listOfValues);
        result = _.object(listOfKeys, arrayOfValues);

        result = _.object<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.object<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).object<_.Dictionary<void>>();
        result = _(listOfKeys).object<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).object<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).object<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).object<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).object<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).object<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).object<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).object<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).object<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).object<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).object<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).object();
        result = _(arrayOfKeys).object(arrayOfValues);
        result = _(arrayOfKeys).object(listOfValues);

        result = _(listOfKeys).object();
        result = _(listOfKeys).object(listOfValues);
        result = _(listOfKeys).object(arrayOfValues);

        result = _(listOfKeys).object(arrayOfKeyValuePairs);
        result = _(listOfKeys).object(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).chain().object<_.Dictionary<void>>();
        result = _(listOfKeys).chain().object<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).chain().object<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().object<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().object<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().object<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).chain().object<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().object<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().object<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().object<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).chain().object<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().object<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).chain().object();
        result = _(arrayOfKeys).chain().object(arrayOfValues);
        result = _(arrayOfKeys).chain().object(listOfValues);

        result = _(listOfKeys).chain().object();
        result = _(listOfKeys).chain().object(listOfValues);
        result = _(listOfKeys).chain().object(arrayOfValues);

        result = _(listOfKeys).chain().object(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().object(listOfKeyValuePairs);
    }
}

// _.pull
module TestPull {
    let array: TResult[];
    let list: _.List<TResult>;
    let value: TResult;

    {
        let result: TResult[];

        result = _.pull<TResult>(array);
        result = _.pull<TResult>(array, value);
        result = _.pull<TResult>(array, value, value);
        result = _.pull<TResult>(array, value, value, value);
    }

    {
        let result: _.List<TResult>;

        result = _.pull<TResult>(list);
        result = _.pull<TResult>(list, value);
        result = _.pull<TResult>(list, value, value);
        result = _.pull<TResult>(list, value, value, value);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).pull();
        result = _(array).pull(value);
        result = _(array).pull(value, value);
        result = _(array).pull(value, value, value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        result = _(list).pull<TResult>();
        result = _(list).pull<TResult>(value);
        result = _(list).pull<TResult>(value, value);
        result = _(list).pull<TResult>(value, value, value);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().pull();
        result = _(array).chain().pull(value);
        result = _(array).chain().pull(value, value);
        result = _(array).chain().pull(value, value, value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        result = _(list).chain().pull<TResult>();
        result = _(list).chain().pull<TResult>(value);
        result = _(list).chain().pull<TResult>(value, value);
        result = _(list).chain().pull<TResult>(value, value, value);
    }
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

    {
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
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _<TResult>(array).remove();
        result = _<TResult>(array).remove(predicateFn);
        result = _<TResult>(array).remove(predicateFn, any);
        result = _<TResult>(array).remove('');
        result = _<TResult>(array).remove('', any);
        result = _<TResult>(array).remove<{a: number}>({a: 42});

        result = _(list).remove<TResult>();
        result = _(list).remove<TResult>(predicateFn);
        result = _(list).remove<TResult>(predicateFn, any);
        result = _(list).remove<TResult>('');
        result = _(list).remove<TResult>('', any);
        result = _(list).remove<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _<TResult>(array).chain().remove();
        result = _<TResult>(array).chain().remove(predicateFn);
        result = _<TResult>(array).chain().remove(predicateFn, any);
        result = _<TResult>(array).chain().remove('');
        result = _<TResult>(array).chain().remove('', any);
        result = _<TResult>(array).chain().remove<{a: number}>({a: 42});

        result = _(list).chain().remove<TResult>();
        result = _(list).chain().remove<TResult>(predicateFn);
        result = _(list).chain().remove<TResult>(predicateFn, any);
        result = _(list).chain().remove<TResult>('');
        result = _(list).chain().remove<TResult>('', any);
        result = _(list).chain().remove<{a: number}, TResult>({a: 42});
    }
}

// _.rest
module TestRest {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.rest<TResult>(array);
        result = _.rest<TResult>(list);

    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).rest();
        result = _(list).rest<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().rest();
        result = _(list).chain().rest<TResult>();
    }
}

// _.slice
module TestSlice {
    let array: TResult[];

    {
        let result: TResult[];

        result = _.slice(array);
        result = _.slice(array, 42);
        result = _.slice(array, 42, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).slice();
        result = _(array).slice(42);
        result = _(array).slice(42, 42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().slice();
        result = _(array).chain().slice(42);
        result = _(array).chain().slice(42, 42);
    }
}

// _.sortedIndex
module TestSortedIndex {
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
}

// _.sortedLastIndex
module TestSortedLastIndex {
    result = <number>_.sortedLastIndex([20, 30, 50], 40);
    result = <number>_.sortedLastIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
    var sortedLastIndexDict: { wordToNumber: { [idx: string]: number } } = {
        'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
    };
    result = <number>_.sortedLastIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
        return sortedLastIndexDict.wordToNumber[word];
    });
    result = <number>_.sortedLastIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word: string) {
        return this.wordToNumber[word];
    }, sortedLastIndexDict);
}

// _.tail
module TestTail {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.tail<TResult>(array);
        result = _.tail<TResult>(list);

    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).tail();
        result = _(list).tail<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().tail();
        result = _(list).chain().tail<TResult>();
    }
}

// _.take
module TestTake {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.take<TResult>(array);
        result = _.take<TResult>(array, 42);

        result = _.take<TResult>(list);
        result = _.take<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).take();
        result = _(array).take(42);

        result = _(list).take<TResult>();
        result = _(list).take<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().take();
        result = _(array).chain().take(42);

        result = _(list).chain().take<TResult>();
        result = _(list).chain().take<TResult>(42);
    }
}

// _.takeRight
module TestTakeRight {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.takeRight<TResult>(array);
        result = _.takeRight<TResult>(array, 42);

        result = _.takeRight<TResult>(list);
        result = _.takeRight<TResult>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeRight();
        result = _(array).takeRight(42);

        result = _(list).takeRight<TResult>();
        result = _(list).takeRight<TResult>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeRight();
        result = _(array).chain().takeRight(42);

        result = _(list).chain().takeRight<TResult>();
        result = _(list).chain().takeRight<TResult>(42);
    }
}

// _.takeRightWhile
module TestTakeRightWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;

    {
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
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeRightWhile();
        result = _(array).takeRightWhile(predicateFn);
        result = _(array).takeRightWhile(predicateFn, any);
        result = _(array).takeRightWhile('');
        result = _(array).takeRightWhile('', any);
        result = _(array).takeRightWhile<{a: number;}>({a: 42});

        result = _(list).takeRightWhile<TResult>();
        result = _(list).takeRightWhile<TResult>(predicateFn);
        result = _(list).takeRightWhile<TResult>(predicateFn, any);
        result = _(list).takeRightWhile<TResult>('');
        result = _(list).takeRightWhile<TResult>('', any);
        result = _(list).takeRightWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeRightWhile();
        result = _(array).chain().takeRightWhile(predicateFn);
        result = _(array).chain().takeRightWhile(predicateFn, any);
        result = _(array).chain().takeRightWhile('');
        result = _(array).chain().takeRightWhile('', any);
        result = _(array).chain().takeRightWhile<{a: number;}>({a: 42});

        result = _(list).chain().takeRightWhile<TResult>();
        result = _(list).chain().takeRightWhile<TResult>(predicateFn);
        result = _(list).chain().takeRightWhile<TResult>(predicateFn, any);
        result = _(list).chain().takeRightWhile<TResult>('');
        result = _(list).chain().takeRightWhile<TResult>('', any);
        result = _(list).chain().takeRightWhile<{a: number;}, TResult>({a: 42});
    }
}

// _.takeWhile
module TestTakeWhile {
    let array: TResult[];
    let list: _.List<TResult>;
    let predicateFn: (value: TResult, index: number, collection: _.List<TResult>) => boolean;

    {
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
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).takeWhile();
        result = _(array).takeWhile(predicateFn);
        result = _(array).takeWhile(predicateFn, any);
        result = _(array).takeWhile('');
        result = _(array).takeWhile('', any);
        result = _(array).takeWhile<{a: number;}>({a: 42});

        result = _(list).takeWhile<TResult>();
        result = _(list).takeWhile<TResult>(predicateFn);
        result = _(list).takeWhile<TResult>(predicateFn, any);
        result = _(list).takeWhile<TResult>('');
        result = _(list).takeWhile<TResult>('', any);
        result = _(list).takeWhile<{a: number;}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().takeWhile();
        result = _(array).chain().takeWhile(predicateFn);
        result = _(array).chain().takeWhile(predicateFn, any);
        result = _(array).chain().takeWhile('');
        result = _(array).chain().takeWhile('', any);
        result = _(array).chain().takeWhile<{a: number;}>({a: 42});

        result = _(list).chain().takeWhile<TResult>();
        result = _(list).chain().takeWhile<TResult>(predicateFn);
        result = _(list).chain().takeWhile<TResult>(predicateFn, any);
        result = _(list).chain().takeWhile<TResult>('');
        result = _(list).chain().takeWhile<TResult>('', any);
        result = _(list).chain().takeWhile<{a: number;}, TResult>({a: 42});
    }
}

// _.union
module TestUnion {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.union<TResult>();

        result = _.union<TResult>(array);
        result = _.union<TResult>(array, list);
        result = _.union<TResult>(array, list, array);

        result = _.union<TResult>(list);
        result = _.union<TResult>(list, array);
        result = _.union<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).union();
        result = _(array).union(list);
        result = _(array).union(list, array);

        result = _(array).union<TResult>();
        result = _(array).union<TResult>(list);
        result = _(array).union<TResult>(list, array);

        result = _(list).union<TResult>();
        result = _(list).union<TResult>(array);
        result = _(list).union<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().union();
        result = _(array).chain().union(list);
        result = _(array).chain().union(list, array);

        result = _(array).chain().union<TResult>();
        result = _(array).chain().union<TResult>(list);
        result = _(array).chain().union<TResult>(list, array);

        result = _(list).chain().union<TResult>();
        result = _(list).chain().union<TResult>(array);
        result = _(list).chain().union<TResult>(array, list);
    }
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

// _.upzip
module TestUnzip {
    let array = [['a', 'b'], [1, 2], [true, false]];

    let list: _.List<_.List<string|number|boolean>> = {
        0: {0: 'a', 1: 'b', length: 2},
        1: {0: 1, 1: 2, length: 2},
        2: {0: true, 1: false, length: 2},
        length: 3
    };

    {
        let result: (string|number|boolean)[][];

        result = _.unzip<string|number|boolean>(array);
        result = _.unzip<string|number|boolean>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<(string|number|boolean)[]>;

        result = _(array).unzip<string|number|boolean>();
        result = _(list).unzip<string|number|boolean>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<(string|number|boolean)[]>;

        result = _(array).chain().unzip<string|number|boolean>();
        result = _(list).chain().unzip<string|number|boolean>();
    }
}

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
module TestWithout {
    let array: number[];
    let list: _.List<number>;

    {
        let result: number[];

        result = _.without<number>(array);
        result = _.without<number>(array, 1);
        result = _.without<number>(array, 1, 2);
        result = _.without<number>(array, 1, 2, 3);

        result = _.without<number>(list);
        result = _.without<number>(list, 1);
        result = _.without<number>(list, 1, 2);
        result = _.without<number>(list, 1, 2, 3);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(array).without();
        result = _(array).without(1);
        result = _(array).without(1, 2);
        result = _(array).without(1, 2, 3);
        result = _(list).without<number>();
        result = _(list).without<number>(1);
        result = _(list).without<number>(1, 2);
        result = _(list).without<number>(1, 2, 3);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(array).chain().without();
        result = _(array).chain().without(1);
        result = _(array).chain().without(1, 2);
        result = _(array).chain().without(1, 2, 3);

        result = _(list).chain().without<number>();
        result = _(list).chain().without<number>(1);
        result = _(list).chain().without<number>(1, 2);
        result = _(list).chain().without<number>(1, 2, 3);
    }
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
result = <any[][]>_(['moe', 'larry']).zip([30, 40], [true, false]).value();

// _.zipObject
module TestZipObject {
    let arrayOfKeys: string[];
    let arrayOfValues: number[];
    let arrayOfKeyValuePairs: (string|number)[][]

    let listOfKeys: _.List<string>;
    let listOfValues: _.List<number>;
    let listOfKeyValuePairs: _.List<_.List<string|number>>;

    {
        let result: _.Dictionary<void>;

        result = _.zipObject<_.Dictionary<void>>(arrayOfKeys);
        result = _.zipObject<_.Dictionary<void>>(listOfKeys);
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

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.Dictionary<any>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);

        result = _.zipObject(listOfKeys);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _.zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).zipObject<_.Dictionary<void>>();
        result = _(listOfKeys).zipObject<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).zipObject<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).zipObject();
        result = _(arrayOfKeys).zipObject(arrayOfValues);
        result = _(arrayOfKeys).zipObject(listOfValues);

        result = _(listOfKeys).zipObject();
        result = _(listOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObject(arrayOfValues);

        result = _(listOfKeys).zipObject(arrayOfKeyValuePairs);
        result = _(listOfKeys).zipObject(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<void>>();
        result = _(listOfKeys).chain().zipObject<_.Dictionary<void>>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfValues);

        result = _(arrayOfKeys).chain().zipObject<number, _.Dictionary<number>>(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<number, _.Dictionary<number>>(listOfValues);
        result = _(listOfKeys).chain().zipObject<number, _.Dictionary<number>>(arrayOfValues);

        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObject<_.Dictionary<number>>(listOfKeyValuePairs);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).chain().zipObject();
        result = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject(listOfValues);

        result = _(listOfKeys).chain().zipObject();
        result = _(listOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObject(arrayOfValues);

        result = _(listOfKeys).chain().zipObject(arrayOfKeyValuePairs);
        result = _(listOfKeys).chain().zipObject(listOfKeyValuePairs);
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

// _.chain
module TestChain {
    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _.chain('');
        result = _('').chain();

        result = _.chain('').chain();
        result = _('').chain().chain();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _.chain(42);
        result = _(42).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _.chain(true);
        result = _(true).chain();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _.chain(['']);
        result = _(['']).chain();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _.chain<{a: string}>({a: ''});
        result = _<{a: string}>({a: ''}).chain();
    }
}

// _.tap
module TestTap {
    {
        let interceptor: (value: string) => void;
        let result: string;

        _.tap('', interceptor);
        _.tap('', interceptor, any);
    }

    {
        let interceptor: (value: string[]) => void;
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.tap([''], interceptor);
        _.tap([''], interceptor, any);
    }

    {
        let interceptor: (value: {a: string}) => void;
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        _.tap({a: ''}, interceptor);
        _.tap({a: ''}, interceptor, any);
    }

    {
        let interceptor: (value: string) => void;
        let result: _.LoDashImplicitWrapper<string>;

        _.chain('').tap(interceptor, any);
        _.chain('').tap(interceptor, any);

        _('').tap(interceptor);
        _('').tap(interceptor, any);
    }

    {
        let interceptor: (value: string[]) => void;
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);
        _.chain(['']).tap(interceptor, any);

        _(['']).tap(interceptor);
        _(['']).tap(interceptor, any);
    }

    {
        let interceptor: (value: {a: string}) => void;
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);
        _.chain({a: ''}).tap(interceptor, any);

        _({a: ''}).tap(interceptor);
        _({a: ''}).tap(interceptor, any);
    }

    {
        let interceptor: (value: string) => void;
        let result: _.LoDashExplicitWrapper<string>;

        _.chain('').tap(interceptor, any);
        _.chain('').tap(interceptor, any);

        _('').chain().tap(interceptor);
        _('').chain().tap(interceptor, any);
    }

    {
        let interceptor: (value: string[]) => void;
        let result: _.LoDashExplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);
        _.chain(['']).tap(interceptor, any);

        _(['']).chain().tap(interceptor);
        _(['']).chain().tap(interceptor, any);
    }

    {
        let interceptor: (value: {a: string}) => void;
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);
        _.chain({a: ''}).tap(interceptor, any);

        _({a: ''}).chain().tap(interceptor);
        _({a: ''}).chain().tap(interceptor, any);
    }
}

// _.thru
module TestThru {
    interface Interceptor<T> {
        (value: T): T;
    }

    {
        let interceptor: Interceptor<number>;
        let result: number;

        result = _.thru<number, number>(1, interceptor);
        result = _.thru<number, number>(1, interceptor, any);
    }

    {
        let interceptor: Interceptor<number>;
        let result: _.LoDashImplicitWrapper<number>;

        result = _(1).thru<number>(interceptor);
        result = _(1).thru<number>(interceptor, any);
    }

    {
        let interceptor: Interceptor<string>;
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').thru<string>(interceptor);
        result = _('').thru<string>(interceptor, any);
    }

    {
        let interceptor: Interceptor<boolean>;
        let result: _.LoDashImplicitWrapper<boolean>;

        result = _(true).thru<boolean>(interceptor);
        result = _(true).thru<boolean>(interceptor, any);
    }

    {
        let interceptor: Interceptor<{a: string}>;
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).thru<{a: string}>(interceptor);
        result = _({a: ''}).thru<{a: string}>(interceptor, any);
    }

    {
        let interceptor: Interceptor<number[]>;
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).thru<number>(interceptor);
        result = _([1, 2, 3]).thru<number>(interceptor, any);
    }

    {
        let interceptor: Interceptor<number>;
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().thru<number>(interceptor);
        result = _(1).chain().thru<number>(interceptor, any);
    }

    {
        let interceptor: Interceptor<string>;
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().thru<string>(interceptor);
        result = _('').chain().thru<string>(interceptor, any);
    }

    {
        let interceptor: Interceptor<boolean>;
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(true).chain().thru<boolean>(interceptor);
        result = _(true).chain().thru<boolean>(interceptor, any);
    }

    {
        let interceptor: Interceptor<{a: string}>;
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).chain().thru<{a: string}>(interceptor);
        result = _({a: ''}).chain().thru<{a: string}>(interceptor, any);
    }

    {
        let interceptor: Interceptor<number[]>;
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2, 3]).chain().thru<number>(interceptor);
        result = _([1, 2, 3]).chain().thru<number>(interceptor, any);
    }
}

// _.prototype.commit
module TestCommit {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(42).commit();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<any>;
        result = _<any>([]).commit();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<any>;
        result = _({}).commit();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(42).chain().commit();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;
        result = _<any>([]).chain().commit();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<any>;
        result = _({}).chain().commit();
    }
}

// _.prototype.concat
module TestConcat {
    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(1).concat<number>(2);
        result = _(1).concat<number>(2, 3);
        result = _(1).concat<number>(2, 3, 4);

        result = _(1).concat(2);
        result = _(1).concat(2, 3);
        result = _(1).concat(2, 3, 4);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _<string>(['']).concat<string>(['']);
        result = _<string>(['']).concat<string>([''], ['']);
        result = _<string>(['']).concat<string>([''], [''], ['']);

        result = _<string>(['']).concat(['']);
        result = _<string>(['']).concat([''], ['']);
        result = _<string>(['']).concat([''], [''], ['']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<{a: string}>;

        result = _({a: ''}).concat<{a: string}>({a: ''});
        result = _({a: ''}).concat<{a: string}>({a: ''}, {a: ''});
        result = _({a: ''}).concat<{a: string}>({a: ''}, {a: ''}, {a: ''});

        result = _({a: ''}).concat({a: ''});
        result = _({a: ''}).concat({a: ''}, {a: ''});
        result = _({a: ''}).concat({a: ''}, {a: ''}, {a: ''});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(1).chain().concat<number>(2);
        result = _(1).chain().concat<number>(2, 3);
        result = _(1).chain().concat<number>(2, 3, 4);

        result = _(1).chain().concat(2);
        result = _(1).chain().concat(2, 3);
        result = _(1).chain().concat(2, 3, 4);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _<string>(['']).chain().concat<string>(['']);
        result = _<string>(['']).chain().concat<string>([''], ['']);
        result = _<string>(['']).chain().concat<string>([''], [''], ['']);

        result = _<string>(['']).chain().concat(['']);
        result = _<string>(['']).chain().concat([''], ['']);
        result = _<string>(['']).chain().concat([''], [''], ['']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<{a: string}>;

        result = _({a: ''}).chain().concat<{a: string}>({a: ''});
        result = _({a: ''}).chain().concat<{a: string}>({a: ''}, {a: ''});
        result = _({a: ''}).chain().concat<{a: string}>({a: ''}, {a: ''}, {a: ''});

        result = _({a: ''}).chain().concat({a: ''});
        result = _({a: ''}).chain().concat({a: ''}, {a: ''});
        result = _({a: ''}).chain().concat({a: ''}, {a: ''}, {a: ''});
    }
}

// _.prototype.plant
module TestPlant {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(any).plant(42);
    }

    {
        let result: _.LoDashImplicitStringWrapper;
        result = _(any).plant('');
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(any).plant(true);
    }

    {
        let result: _.LoDashImplicitNumberArrayWrapper;
        result = _(any).plant([42]);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<any>;
        result = _(any).plant<any>([]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{}>;
        result = _(any).plant<{}>({});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(any).chain().plant(42);
    }

    {
        let result: _.LoDashExplicitStringWrapper;
        result = _(any).chain().plant('');
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _(any).chain().plant(true);
    }

    {
        let result: _.LoDashExplicitNumberArrayWrapper;
        result = _(any).chain().plant([42]);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;
        result = _(any).chain().plant<any>([]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{}>;
        result = _(any).chain().plant<{}>({});
    }
}

// _.prototype.reverse
module TestReverse {
    {
        let result: _.LoDashImplicitArrayWrapper<number>;
        result: _([42]).reverse();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;
        result: _([42]).chain().reverse();
    }
}

// _.prototype.run
module TestRun {
    {
        let result: string;

        result = _('').run();
        result = _('').chain().run();
    }

    {
        let result: number;

        result = _(42).run();
        result = _(42).chain().run();
    }

    {
        let result: boolean;

        result = _(true).run();
        result = _(true).chain().run();
    }

    {
        let result: string[];

        result = _<string>([]).run();
        result = _<string>([]).chain().run();
    }

    {
        let result: {a: string};

        result = _({a: ''}).run();
        result = _({a: ''}).chain().run();
    }
}

// _.prototype.toJSON
module TestToJSON {
    {
        let result: string;

        result = _('').toJSON();
        result = _('').chain().toJSON();
    }

    {
        let result: number;

        result = _(42).toJSON();
        result = _(42).chain().toJSON();
    }

    {
        let result: boolean;

        result = _(true).toJSON();
        result = _(true).chain().toJSON();
    }

    {
        let result: string[];

        result = _<string>([]).toJSON();
        result = _<string>([]).chain().toJSON();
    }

    {
        let result: {a: string};

        result = _({a: ''}).toJSON();
        result = _({a: ''}).chain().toJSON();
    }
}

// _.prototype.toString
module TestToString {
    let result: string;

    result = _('').toString();
    result = _(42).toString();
    result = _(true).toString();
    result = _<string>(['']).toString();
    result = _({}).toString();

    result = _('').chain().toString();
    result = _(42).chain().toString();
    result = _(true).chain().toString();
    result = _<string>(['']).chain().toString();
    result = _({}).chain().toString();
}

// _.prototype.value
module TestValue {
    {
        let result: string;

        result = _('').value();
        result = _('').chain().value();
    }

    {
        let result: number;

        result = _(42).value();
        result = _(42).chain().value();
    }

    {
        let result: boolean;

        result = _(true).value();
        result = _(true).chain().value();
    }

    {
        let result: string[];

        result = _<string>([]).value();
        result = _<string>([]).chain().value();
    }

    {
        let result: {a: string};

        result = _({a: ''}).value();
        result = _({a: ''}).chain().value();
    }
}

// _.prototype.valueOf
module TestValueOf {
    {
        let result: string;

        result = _('').valueOf();
        result = _('').chain().valueOf();
    }

    {
        let result: number;

        result = _(42).valueOf();
        result = _(42).chain().valueOf();
    }

    {
        let result: boolean;

        result = _(true).valueOf();
        result = _(true).chain().valueOf();
    }

    {
        let result: string[];

        result = _<string>([]).valueOf();
        result = _<string>([]).chain().valueOf();
    }

    {
        let result: {a: string};

        result = _({a: ''}).valueOf();
        result = _({a: ''}).chain().valueOf();
    }
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

    {
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

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().all();
        result = _(array).chain().all(listIterator);
        result = _(array).chain().all(listIterator, any);
        result = _(array).chain().all('');
        result = _(array).chain().all<{a: number}>({a: 42});

        result = _(list).chain().all<TResult>();
        result = _(list).chain().all<TResult>(listIterator);
        result = _(list).chain().all<TResult>(listIterator, any);
        result = _(list).chain().all('');
        result = _(list).chain().all<{a: number}>({a: 42});

        result = _(dictionary).chain().all<TResult>();
        result = _(dictionary).chain().all<TResult>(dictionaryIterator);
        result = _(dictionary).chain().all<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().all('');
        result = _(dictionary).chain().all<{a: number}>({a: 42});
    }
}

// _.any
module TestAny {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    {
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

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().any();
        result = _(array).chain().any(listIterator);
        result = _(array).chain().any(listIterator, any);
        result = _(array).chain().any('');
        result = _(array).chain().any<{a: number}>({a: 42});

        result = _(list).chain().any<TResult>();
        result = _(list).chain().any<TResult>(listIterator);
        result = _(list).chain().any<TResult>(listIterator, any);
        result = _(list).chain().any('');
        result = _(list).chain().any<{a: number}>({a: 42});

        result = _(dictionary).chain().any<TResult>();
        result = _(dictionary).chain().any<TResult>(dictionaryIterator);
        result = _(dictionary).chain().any<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().any('');
        result = _(dictionary).chain().any<{a: number}>({a: 42});
    }
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

    let listIterator: (value: number, index: number, collection: _.List<number>) => TResult;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => TResult;

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
    }

    {
        let result: boolean[];

        result = _.collect<number, {}>(array, {});
        result = _.collect<number, {}>(list, {});
        result = _.collect<number, {}>(dictionary, {});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _<number>(array).collect<TResult>();
        result = _<number>(array).collect<TResult>(listIterator);
        result = _<number>(array).collect<TResult>(listIterator, any);
        result = _<number>(array).collect<TResult>('');

        result = _(list).collect<number, TResult>();
        result = _(list).collect<number, TResult>(listIterator);
        result = _(list).collect<number, TResult>(listIterator, any);
        result = _(list).collect<number, TResult>('');

        result = _(dictionary).collect<number, TResult>();
        result = _(dictionary).collect<number, TResult>(dictionaryIterator);
        result = _(dictionary).collect<number, TResult>(dictionaryIterator, any);
        result = _(dictionary).collect<number, TResult>('');
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _<number>(array).collect<{}>({});
        result = _(list).collect<{}>({});
        result = _(dictionary).collect<{}>({});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _<number>(array).chain().collect<TResult>();
        result = _<number>(array).chain().collect<TResult>(listIterator);
        result = _<number>(array).chain().collect<TResult>(listIterator, any);
        result = _<number>(array).chain().collect<TResult>('');

        result = _(list).chain().collect<number, TResult>();
        result = _(list).chain().collect<number, TResult>(listIterator);
        result = _(list).chain().collect<number, TResult>(listIterator, any);
        result = _(list).chain().collect<number, TResult>('');

        result = _(dictionary).chain().collect<number, TResult>();
        result = _(dictionary).chain().collect<number, TResult>(dictionaryIterator);
        result = _(dictionary).chain().collect<number, TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().collect<number, TResult>('');
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _<number>(array).chain().collect<{}>({});
        result = _(list).chain().collect<{}>({});
        result = _(dictionary).chain().collect<{}>({});
    }
}

// _.contains
module TestContains {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;
    let dictionary: _.Dictionary<SampleType>;

    let target: SampleType;

    {
        let result: boolean;

        result = _.contains<SampleType>(array, target);
        result = _.contains<SampleType>(array, target, 42);

        result = _.contains<SampleType>(list, target);
        result = _.contains<SampleType>(list, target, 42);

        result = _.contains<SampleType>(dictionary, target);
        result = _.contains<SampleType>(dictionary, target, 42);

        result = _(array).contains(target);
        result = _(array).contains(target, 42);

        result = _(list).contains<SampleType>(target);
        result = _(list).contains<SampleType>(target, 42);

        result = _(dictionary).contains<SampleType>(target);
        result = _(dictionary).contains<SampleType>(target, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().contains(target);
        result = _(array).chain().contains(target, 42);

        result = _(list).chain().contains<SampleType>(target);
        result = _(list).chain().contains<SampleType>(target, 42);

        result = _(dictionary).chain().contains<SampleType>(target);
        result = _(dictionary).chain().contains<SampleType>(target, 42);
    }
}

result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return Math.floor(num); });
result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function (num) { return this.floor(num); }, Math);
result = <_.Dictionary<number>>_.countBy(['one', 'two', 'three'], 'length');

result = <_.LoDashImplicitObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return Math.floor(num); });
result = <_.LoDashImplicitObjectWrapper<_.Dictionary<number>>>_([4.3, 6.1, 6.4]).countBy(function (num) { return this.floor(num); }, Math);
result = <_.LoDashImplicitObjectWrapper<_.Dictionary<number>>>_(['one', 'two', 'three']).countBy('length');

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

// _.each
module TestEach {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string;

        _.each('', stringIterator);
        _.each('', stringIterator, any);
    }

    {
        let result: TResult[];

        _.each<TResult>(array, listIterator);
        _.each<TResult>(array, listIterator, any);
    }

    {
        let result: _.List<TResult>;

        _.each<TResult>(list, listIterator);
        _.each<TResult>(list, listIterator, any);
    }

    {
        let result: _.Dictionary<TResult>;

        _.each<TResult>(dictionary, dictionaryIterator);
        _.each<TResult>(dictionary, dictionaryIterator, any);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        _('').each(stringIterator);
        _('').each(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        _(array).each(listIterator);
        _(array).each(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        _(list).each<TResult>(listIterator);
        _(list).each<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).each<TResult>(dictionaryIterator);
        _(dictionary).each<TResult>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        _('').chain().each(stringIterator);
        _('').chain().each(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        _(array).chain().each(listIterator);
        _(array).chain().each(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        _(list).chain().each<TResult>(listIterator);
        _(list).chain().each<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).chain().each<TResult>(dictionaryIterator);
        _(dictionary).chain().each<TResult>(dictionaryIterator, any);
    }
}

// _.eachRight
module TestEachRight {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string;

        _.eachRight('', stringIterator);
        _.eachRight('', stringIterator, any);
    }

    {
        let result: TResult[];

        _.eachRight<TResult>(array, listIterator);
        _.eachRight<TResult>(array, listIterator, any);
    }

    {
        let result: _.List<TResult>;

        _.eachRight<TResult>(list, listIterator);
        _.eachRight<TResult>(list, listIterator, any);
    }

    {
        let result: _.Dictionary<TResult>;

        _.eachRight<TResult>(dictionary, dictionaryIterator);
        _.eachRight<TResult>(dictionary, dictionaryIterator, any);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        _('').eachRight(stringIterator);
        _('').eachRight(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        _(array).eachRight(listIterator);
        _(array).eachRight(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        _(list).eachRight<TResult>(listIterator);
        _(list).eachRight<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).eachRight<TResult>(dictionaryIterator);
        _(dictionary).eachRight<TResult>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        _('').chain().eachRight(stringIterator);
        _('').chain().eachRight(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        _(array).chain().eachRight(listIterator);
        _(array).chain().eachRight(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        _(list).chain().eachRight<TResult>(listIterator);
        _(list).chain().eachRight<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).chain().eachRight<TResult>(dictionaryIterator);
        _(dictionary).chain().eachRight<TResult>(dictionaryIterator, any);
    }
}

// _.every
module TestEvery {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    {
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

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().every();
        result = _(array).chain().every(listIterator);
        result = _(array).chain().every(listIterator, any);
        result = _(array).chain().every('');
        result = _(array).chain().every<{a: number}>({a: 42});

        result = _(list).chain().every<TResult>();
        result = _(list).chain().every<TResult>(listIterator);
        result = _(list).chain().every<TResult>(listIterator, any);
        result = _(list).chain().every('');
        result = _(list).chain().every<{a: number}>({a: 42});

        result = _(dictionary).chain().every<TResult>();
        result = _(dictionary).chain().every<TResult>(dictionaryIterator);
        result = _(dictionary).chain().every<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().every('');
        result = _(dictionary).chain().every<{a: number}>({a: 42});
    }
}

// _.filter
module TestFilter {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string[];

        result = _.filter('', stringIterator);
        result = _.filter('', stringIterator, any);
    }

    {
        let result: TResult[];

        result = _.filter<TResult>(array, listIterator);
        result = _.filter<TResult>(array, listIterator, any);
        result = _.filter<TResult>(array, '');
        result = _.filter<TResult>(array, '', any);
        result = _.filter<{a: number}, TResult>(array, {a: 42});

        result = _.filter<TResult>(list, listIterator);
        result = _.filter<TResult>(list, listIterator, any);
        result = _.filter<TResult>(list, '');
        result = _.filter<TResult>(list, '', any);
        result = _.filter<{a: number}, TResult>(list, {a: 42});

        result = _.filter<TResult>(dictionary, dictionaryIterator);
        result = _.filter<TResult>(dictionary, dictionaryIterator, any);
        result = _.filter<TResult>(dictionary, '');
        result = _.filter<TResult>(dictionary, '', any);
        result = _.filter<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').filter(stringIterator);
        result = _('').filter(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).filter(listIterator);
        result = _(array).filter(listIterator, any);
        result = _(array).filter('');
        result = _(array).filter('', any);
        result = _(array).filter<{a: number}>({a: 42});

        result = _(list).filter<TResult>(listIterator);
        result = _(list).filter<TResult>(listIterator, any);
        result = _(list).filter<TResult>('');
        result = _(list).filter<TResult>('', any);
        result = _(list).filter<{a: number}, TResult>({a: 42});

        result = _(dictionary).filter<TResult>(dictionaryIterator);
        result = _(dictionary).filter<TResult>(dictionaryIterator, any);
        result = _(dictionary).filter<TResult>('');
        result = _(dictionary).filter<TResult>('', any);
        result = _(dictionary).filter<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().filter(stringIterator);
        result = _('').chain().filter(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().filter(listIterator);
        result = _(array).chain().filter(listIterator, any);
        result = _(array).chain().filter('');
        result = _(array).chain().filter('', any);
        result = _(array).chain().filter<{a: number}>({a: 42});

        result = _(list).chain().filter<TResult>(listIterator);
        result = _(list).chain().filter<TResult>(listIterator, any);
        result = _(list).chain().filter<TResult>('');
        result = _(list).chain().filter<TResult>('', any);
        result = _(list).chain().filter<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().filter<TResult>(dictionaryIterator);
        result = _(dictionary).chain().filter<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().filter<TResult>('');
        result = _(dictionary).chain().filter<TResult>('', any);
        result = _(dictionary).chain().filter<{a: number}, TResult>({a: 42});
    }
}

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

// _.forEach
module TestForEach {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string;

        _.forEach('', stringIterator);
        _.forEach('', stringIterator, any);
    }

    {
        let result: TResult[];

        _.forEach<TResult>(array, listIterator);
        _.forEach<TResult>(array, listIterator, any);
    }

    {
        let result: _.List<TResult>;

        _.forEach<TResult>(list, listIterator);
        _.forEach<TResult>(list, listIterator, any);
    }

    {
        let result: _.Dictionary<TResult>;

        _.forEach<TResult>(dictionary, dictionaryIterator);
        _.forEach<TResult>(dictionary, dictionaryIterator, any);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        _('').forEach(stringIterator);
        _('').forEach(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        _(array).forEach(listIterator);
        _(array).forEach(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        _(list).forEach<TResult>(listIterator);
        _(list).forEach<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).forEach<TResult>(dictionaryIterator);
        _(dictionary).forEach<TResult>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        _('').chain().forEach(stringIterator);
        _('').chain().forEach(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        _(array).chain().forEach(listIterator);
        _(array).chain().forEach(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        _(list).chain().forEach<TResult>(listIterator);
        _(list).chain().forEach<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).chain().forEach<TResult>(dictionaryIterator);
        _(dictionary).chain().forEach<TResult>(dictionaryIterator, any);
    }
}

// _.forEachRight
module TestForEachRight {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string;

        _.forEachRight('', stringIterator);
        _.forEachRight('', stringIterator, any);
    }

    {
        let result: TResult[];

        _.forEachRight<TResult>(array, listIterator);
        _.forEachRight<TResult>(array, listIterator, any);
    }

    {
        let result: _.List<TResult>;

        _.forEachRight<TResult>(list, listIterator);
        _.forEachRight<TResult>(list, listIterator, any);
    }

    {
        let result: _.Dictionary<TResult>;

        _.forEachRight<TResult>(dictionary, dictionaryIterator);
        _.forEachRight<TResult>(dictionary, dictionaryIterator, any);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        _('').forEachRight(stringIterator);
        _('').forEachRight(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        _(array).forEachRight(listIterator);
        _(array).forEachRight(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<TResult>>;

        _(list).forEachRight<TResult>(listIterator);
        _(list).forEachRight<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).forEachRight<TResult>(dictionaryIterator);
        _(dictionary).forEachRight<TResult>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        _('').chain().forEachRight(stringIterator);
        _('').chain().forEachRight(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        _(array).chain().forEachRight(listIterator);
        _(array).chain().forEachRight(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<TResult>>;

        _(list).chain().forEachRight<TResult>(listIterator);
        _(list).chain().forEachRight<TResult>(listIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        _(dictionary).chain().forEachRight<TResult>(dictionaryIterator);
        _(dictionary).chain().forEachRight<TResult>(dictionaryIterator, any);
    }
}

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

// _.include
module TestInclude {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;
    let dictionary: _.Dictionary<SampleType>;

    let target: SampleType;

    {
        let result: boolean;

        result = _.include<SampleType>(array, target);
        result = _.include<SampleType>(array, target, 42);

        result = _.include<SampleType>(list, target);
        result = _.include<SampleType>(list, target, 42);

        result = _.include<SampleType>(dictionary, target);
        result = _.include<SampleType>(dictionary, target, 42);

        result = _(array).include(target);
        result = _(array).include(target, 42);

        result = _(list).include<SampleType>(target);
        result = _(list).include<SampleType>(target, 42);

        result = _(dictionary).include<SampleType>(target);
        result = _(dictionary).include<SampleType>(target, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().include(target);
        result = _(array).chain().include(target, 42);

        result = _(list).chain().include<SampleType>(target);
        result = _(list).chain().include<SampleType>(target, 42);

        result = _(dictionary).chain().include<SampleType>(target);
        result = _(dictionary).chain().include<SampleType>(target, 42);
    }
}

// _.includes
module TestIncludes {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;
    let dictionary: _.Dictionary<SampleType>;

    let target: SampleType;

    {
        let result: boolean;

        result = _.includes<SampleType>(array, target);
        result = _.includes<SampleType>(array, target, 42);

        result = _.includes<SampleType>(list, target);
        result = _.includes<SampleType>(list, target, 42);

        result = _.includes<SampleType>(dictionary, target);
        result = _.includes<SampleType>(dictionary, target, 42);

        result = _(array).includes(target);
        result = _(array).includes(target, 42);

        result = _(list).includes<SampleType>(target);
        result = _(list).includes<SampleType>(target, 42);

        result = _(dictionary).includes<SampleType>(target);
        result = _(dictionary).includes<SampleType>(target, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().includes(target);
        result = _(array).chain().includes(target, 42);

        result = _(list).chain().includes<SampleType>(target);
        result = _(list).chain().includes<SampleType>(target, 42);

        result = _(dictionary).chain().includes<SampleType>(target);
        result = _(dictionary).chain().includes<SampleType>(target, 42);
    }
}

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
    }

    {
        let result: boolean[];

        result = _.map<number, {}>(array, {});
        result = _.map<number, {}>(list, {});
        result = _.map<number, {}>(dictionary, {});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _<number>(array).map<TResult>();
        result = _<number>(array).map<TResult>(listIterator);
        result = _<number>(array).map<TResult>(listIterator, any);
        result = _<number>(array).map<TResult>('');

        result = _(list).map<number, TResult>();
        result = _(list).map<number, TResult>(listIterator);
        result = _(list).map<number, TResult>(listIterator, any);
        result = _(list).map<number, TResult>('');

        result = _(dictionary).map<number, TResult>();
        result = _(dictionary).map<number, TResult>(dictionaryIterator);
        result = _(dictionary).map<number, TResult>(dictionaryIterator, any);
        result = _(dictionary).map<number, TResult>('');
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _<number>(array).map<{}>({});
        result = _(list).map<{}>({});
        result = _(dictionary).map<{}>({});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _<number>(array).chain().map<TResult>();
        result = _<number>(array).chain().map<TResult>(listIterator);
        result = _<number>(array).chain().map<TResult>(listIterator, any);
        result = _<number>(array).chain().map<TResult>('');

        result = _(list).chain().map<number, TResult>();
        result = _(list).chain().map<number, TResult>(listIterator);
        result = _(list).chain().map<number, TResult>(listIterator, any);
        result = _(list).chain().map<number, TResult>('');

        result = _(dictionary).chain().map<number, TResult>();
        result = _(dictionary).chain().map<number, TResult>(dictionaryIterator);
        result = _(dictionary).chain().map<number, TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().map<number, TResult>('');
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _<number>(array).chain().map<{}>({});
        result = _(list).chain().map<{}>({});
        result = _(dictionary).chain().map<{}>({});
    }
}

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

// _.pluck
module TestPluck {
    interface SampleObject {
        d: {b: TResult}[];
    }

    let array: SampleObject[];
    let list: _.List<SampleObject>;
    let dictionary: _.Dictionary<SampleObject>;

    {
        let result: any[];

        result = _.pluck<SampleObject>(array, 'd.0.b');
        result = _.pluck<SampleObject>(array, ['d', 0, 'b']);

        result = _.pluck<SampleObject>(list, 'd.0.b');
        result = _.pluck<SampleObject>(list, ['d', 0, 'b']);

        result = _.pluck<SampleObject>(dictionary, 'd.0.b');
        result = _.pluck<SampleObject>(dictionary, ['d', 0, 'b']);
    }

    {
        let result: TResult[];

        result = _.pluck<SampleObject, TResult>(array, 'd.0.b');
        result = _.pluck<SampleObject, TResult>(array, ['d', 0, 'b']);

        result = _.pluck<SampleObject, TResult>(list, 'd.0.b');
        result = _.pluck<SampleObject, TResult>(list, ['d', 0, 'b']);

        result = _.pluck<SampleObject, TResult>(dictionary, 'd.0.b');
        result = _.pluck<SampleObject, TResult>(dictionary, ['d', 0, 'b']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).pluck<TResult>('d.0.b');
        result = _(array).pluck<TResult>(['d', 0, 'b']);

        result = _(list).pluck<TResult>('d.0.b');
        result = _(list).pluck<TResult>(['d', 0, 'b']);

        result = _(dictionary).pluck<TResult>('d.0.b');
        result = _(dictionary).pluck<TResult>(['d', 0, 'b']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().pluck<TResult>('d.0.b');
        result = _(array).chain().pluck<TResult>(['d', 0, 'b']);

        result = _(list).chain().pluck<TResult>('d.0.b');
        result = _(list).chain().pluck<TResult>(['d', 0, 'b']);

        result = _(dictionary).chain().pluck<TResult>('d.0.b');
        result = _(dictionary).chain().pluck<TResult>(['d', 0, 'b']);
    }
}

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

// _.reject
module TestReject {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string[];

        result = _.reject('', stringIterator);
        result = _.reject('', stringIterator, any);
    }

    {
        let result: TResult[];

        result = _.reject<TResult>(array, listIterator);
        result = _.reject<TResult>(array, listIterator, any);
        result = _.reject<TResult>(array, '');
        result = _.reject<TResult>(array, '', any);
        result = _.reject<{a: number}, TResult>(array, {a: 42});

        result = _.reject<TResult>(list, listIterator);
        result = _.reject<TResult>(list, listIterator, any);
        result = _.reject<TResult>(list, '');
        result = _.reject<TResult>(list, '', any);
        result = _.reject<{a: number}, TResult>(list, {a: 42});

        result = _.reject<TResult>(dictionary, dictionaryIterator);
        result = _.reject<TResult>(dictionary, dictionaryIterator, any);
        result = _.reject<TResult>(dictionary, '');
        result = _.reject<TResult>(dictionary, '', any);
        result = _.reject<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').reject(stringIterator);
        result = _('').reject(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).reject(listIterator);
        result = _(array).reject(listIterator, any);
        result = _(array).reject('');
        result = _(array).reject('', any);
        result = _(array).reject<{a: number}>({a: 42});

        result = _(list).reject<TResult>(listIterator);
        result = _(list).reject<TResult>(listIterator, any);
        result = _(list).reject<TResult>('');
        result = _(list).reject<TResult>('', any);
        result = _(list).reject<{a: number}, TResult>({a: 42});

        result = _(dictionary).reject<TResult>(dictionaryIterator);
        result = _(dictionary).reject<TResult>(dictionaryIterator, any);
        result = _(dictionary).reject<TResult>('');
        result = _(dictionary).reject<TResult>('', any);
        result = _(dictionary).reject<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().reject(stringIterator);
        result = _('').chain().reject(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().reject(listIterator);
        result = _(array).chain().reject(listIterator, any);
        result = _(array).chain().reject('');
        result = _(array).chain().reject('', any);
        result = _(array).chain().reject<{a: number}>({a: 42});

        result = _(list).chain().reject<TResult>(listIterator);
        result = _(list).chain().reject<TResult>(listIterator, any);
        result = _(list).chain().reject<TResult>('');
        result = _(list).chain().reject<TResult>('', any);
        result = _(list).chain().reject<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().reject<TResult>(dictionaryIterator);
        result = _(dictionary).chain().reject<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().reject<TResult>('');
        result = _(dictionary).chain().reject<TResult>('', any);
        result = _(dictionary).chain().reject<{a: number}, TResult>({a: 42});
    }
}

result = <number>_.sample([1, 2, 3, 4]);
result = <number[]>_.sample([1, 2, 3, 4], 2);
result = <_.LoDashImplicitWrapper<number>>_([1, 2, 3, 4]).sample();
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).sample(2);
result = <number>_([1, 2, 3, 4]).sample().value();
result = <number[]>_([1, 2, 3, 4]).sample(2).value();

// _.select
module TestSelect {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let stringIterator: (char: string, index: number, string: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;

    {
        let result: string[];

        result = _.select('', stringIterator);
        result = _.select('', stringIterator, any);
    }

    {
        let result: TResult[];

        result = _.select<TResult>(array, listIterator);
        result = _.select<TResult>(array, listIterator, any);
        result = _.select<TResult>(array, '');
        result = _.select<TResult>(array, '', any);
        result = _.select<{a: number}, TResult>(array, {a: 42});

        result = _.select<TResult>(list, listIterator);
        result = _.select<TResult>(list, listIterator, any);
        result = _.select<TResult>(list, '');
        result = _.select<TResult>(list, '', any);
        result = _.select<{a: number}, TResult>(list, {a: 42});

        result = _.select<TResult>(dictionary, dictionaryIterator);
        result = _.select<TResult>(dictionary, dictionaryIterator, any);
        result = _.select<TResult>(dictionary, '');
        result = _.select<TResult>(dictionary, '', any);
        result = _.select<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').select(stringIterator);
        result = _('').select(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).select(listIterator);
        result = _(array).select(listIterator, any);
        result = _(array).select('');
        result = _(array).select('', any);
        result = _(array).select<{a: number}>({a: 42});

        result = _(list).select<TResult>(listIterator);
        result = _(list).select<TResult>(listIterator, any);
        result = _(list).select<TResult>('');
        result = _(list).select<TResult>('', any);
        result = _(list).select<{a: number}, TResult>({a: 42});

        result = _(dictionary).select<TResult>(dictionaryIterator);
        result = _(dictionary).select<TResult>(dictionaryIterator, any);
        result = _(dictionary).select<TResult>('');
        result = _(dictionary).select<TResult>('', any);
        result = _(dictionary).select<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().select(stringIterator);
        result = _('').chain().select(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().select(listIterator);
        result = _(array).chain().select(listIterator, any);
        result = _(array).chain().select('');
        result = _(array).chain().select('', any);
        result = _(array).chain().select<{a: number}>({a: 42});

        result = _(list).chain().select<TResult>(listIterator);
        result = _(list).chain().select<TResult>(listIterator, any);
        result = _(list).chain().select<TResult>('');
        result = _(list).chain().select<TResult>('', any);
        result = _(list).chain().select<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().select<TResult>(dictionaryIterator);
        result = _(dictionary).chain().select<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().select<TResult>('');
        result = _(dictionary).chain().select<TResult>('', any);
        result = _(dictionary).chain().select<{a: number}, TResult>({a: 42});
    }
}

// _.shuffle
module TestShuffle {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    {
        let result: string[];

        result = _.shuffle('abc');
    }

    {
        let result: TResult[];

        result = _.shuffle<TResult>(array);
        result = _.shuffle<TResult>(list);
        result = _.shuffle<TResult>(dictionary);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').shuffle();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).shuffle();
        result = _(list).shuffle<TResult>();
        result = _(dictionary).shuffle<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().shuffle();
        result = _(list).chain().shuffle<TResult>();
        result = _(dictionary).chain().shuffle<TResult>();
    }
}

// _.size
module TestSize {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;
    let dictionary: _.Dictionary<SampleType>;

    {
        let result: number;

        result = _.size<SampleType>(array);
        result = _.size<SampleType>(list);
        result = _.size<SampleType>(dictionary);
        result = _.size('');

        result = _(array).size();
        result = _(list).size();
        result = _(dictionary).size();
        result = _('').size();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().size();
        result = _(list).chain().size();
        result = _(dictionary).chain().size();
        result = _('').chain().size();
    }
}

// _.some
module TestSome {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => boolean;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => boolean;

    {
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

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().some();
        result = _(array).chain().some(listIterator);
        result = _(array).chain().some(listIterator, any);
        result = _(array).chain().some('');
        result = _(array).chain().some<{a: number}>({a: 42});

        result = _(list).chain().some<TResult>();
        result = _(list).chain().some<TResult>(listIterator);
        result = _(list).chain().some<TResult>(listIterator, any);
        result = _(list).chain().some('');
        result = _(list).chain().some<{a: number}>({a: 42});

        result = _(dictionary).chain().some<TResult>();
        result = _(dictionary).chain().some<TResult>(dictionaryIterator);
        result = _(dictionary).chain().some<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().some('');
        result = _(dictionary).chain().some<{a: number}>({a: 42});
    }
}

// _.sortBy
module TestSortBy {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => number;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => number;

    {
        let result: TResult[];

        result = _.sortBy<TResult>(array);
        result = _.sortBy<TResult, number>(array, listIterator);
        result = _.sortBy<TResult, number>(array, listIterator, any);
        result = _.sortBy<TResult>(array, '');
        result = _.sortBy<{a: number}, TResult>(array, {a: 42});

        result = _.sortBy<TResult>(list);
        result = _.sortBy<TResult, number>(list, listIterator);
        result = _.sortBy<TResult, number>(list, listIterator, any);
        result = _.sortBy<TResult>(list, '');
        result = _.sortBy<{a: number}, TResult>(list, {a: 42});

        result = _.sortBy<TResult>(dictionary);
        result = _.sortBy<TResult, number>(dictionary, dictionaryIterator);
        result = _.sortBy<TResult, number>(dictionary, dictionaryIterator, any);
        result = _.sortBy<TResult>(dictionary, '');
        result = _.sortBy<{a: number}, TResult>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).sortBy();
        result = _(array).sortBy<number>(listIterator);
        result = _(array).sortBy<number>(listIterator, any);
        result = _(array).sortBy('');
        result = _(array).sortBy<{a: number}>({a: 42});

        result = _(list).sortBy<TResult>();
        result = _(list).sortBy<TResult, number>(listIterator);
        result = _(list).sortBy<TResult, number>(listIterator, any);
        result = _(list).sortBy<TResult>('');
        result = _(list).sortBy<{a: number}, TResult>({a: 42});

        result = _(dictionary).sortBy<TResult>();
        result = _(dictionary).sortBy<TResult, number>(dictionaryIterator);
        result = _(dictionary).sortBy<TResult, number>(dictionaryIterator, any);
        result = _(dictionary).sortBy<TResult>('');
        result = _(dictionary).sortBy<{a: number}, TResult>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().sortBy();
        result = _(array).chain().sortBy<number>(listIterator);
        result = _(array).chain().sortBy<number>(listIterator, any);
        result = _(array).chain().sortBy('');
        result = _(array).chain().sortBy<{a: number}>({a: 42});

        result = _(list).chain().sortBy<TResult>();
        result = _(list).chain().sortBy<TResult, number>(listIterator);
        result = _(list).chain().sortBy<TResult, number>(listIterator, any);
        result = _(list).chain().sortBy<TResult>('');
        result = _(list).chain().sortBy<{a: number}, TResult>({a: 42});

        result = _(dictionary).chain().sortBy<TResult>();
        result = _(dictionary).chain().sortBy<TResult, number>(dictionaryIterator);
        result = _(dictionary).chain().sortBy<TResult, number>(dictionaryIterator, any);
        result = _(dictionary).chain().sortBy<TResult>('');
        result = _(dictionary).chain().sortBy<{a: number}, TResult>({a: 42});
    }
}

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

result = <IFoodOrganic[]>_(foodsOrganic).sortByAll('organic', (food) => food.name, { organic: true }).value();

result = <IStoogesCombined[]>_.where(stoogesCombined, { 'age': 40 });
result = <IStoogesCombined[]>_.where(stoogesCombined, { 'quotes': ['Poifect!'] });

result = <IStoogesCombined[]>_(stoogesCombined).where({ 'age': 40 }).value();
result = <IStoogesCombined[]>_(stoogesCombined).where({ 'quotes': ['Poifect!'] }).value();

/********
 * Date *
 ********/

module TestNow {
    {
        let result: number;

        result = _.now();
        result = _(42).now();
        result = _<any>([]).now();
        result = _({}).now();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().now();
        result = _<any>([]).chain().now();
        result = _({}).chain().now();
    }
}

/*************
 * Functions *
 *************/

// _after
module TestAfter {
    interface Func {
        (a: string, b: number): boolean;
    }

    let func: Func;

    {
        let result: Func;

        _.after(42, func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        _(42).after(func);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        _(42).chain().after(func);
    }
}

// _.ary
result = <number[]>['6', '8', '10'].map(_.ary<(s: string) => number>(parseInt, 1));
result = <number[]>['6', '8', '10'].map(_(parseInt).ary<(s: string) => number>(1).value());

// _.backflow
module TestBackflow {
    let Fn1: (n: number) => number;
    let Fn2: (m: number, n: number) => number;

    {
        let result: (m: number, n: number) => number;

        result = _.backflow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.backflow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.backflow<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).backflow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).backflow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).backflow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().backflow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().backflow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().backflow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }
}

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
module TestCompose {
    let Fn1: (n: number) => number;
    let Fn2: (m: number, n: number) => number;

    {
        let result: (m: number, n: number) => number;

        result = _.compose<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.compose<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.compose<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).compose<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).compose<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).compose<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().compose<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().compose<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().compose<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }
}

var createCallbackObj: { [index: string]: string; } = { name: 'Joe' };
result = <() => any>_.createCallback('name');
result = <() => boolean>_.createCallback(createCallbackObj);
result = <_.LoDashImplicitObjectWrapper<() => any>>_('name').createCallback();
result = <_.LoDashImplicitObjectWrapper<() => boolean>>_(createCallbackObj).createCallback();

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

result = <_.LoDashImplicitObjectWrapper<Function>>_(function () { }).debounce(150);

jQuery('#postbox').on('click', <_.LoDashImplicitObjectWrapper<Function>>_(function () { }).debounce(300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', <_.LoDashImplicitObjectWrapper<Function>>_(function () { }).debounce(250, {
    'maxWait': 1000
}), false);

var returnedDebounce = _.throttle(function (a: any) { return a * 5; }, 5);
returnedThrottled(4);

result = <number>_.defer(function () { console.log('deferred'); });
result = <_.LoDashImplicitWrapper<number>>_(function () { console.log('deferred'); }).defer();

var log = _.bind(console.log, console);
result = <number>_.delay(log, 1000, 'logged later');
result = <_.LoDashImplicitWrapper<number>>_(log).delay(1000, 'logged later');

// _.flow
var testFlowSquareFn = (n: number) => n * n;
var testFlowAddFn = (n: number, m: number) => n + m;
result = <number>_.flow<(n: number, m: number) => number>(testFlowAddFn, testFlowSquareFn)(1, 2);
result = <number>_(testFlowAddFn).flow<(n: number, m: number) => number>(testFlowSquareFn).value()(1, 2);

// _.flowRight
module TestFlowRight {
    let Fn1: (n: number) => number;
    let Fn2: (m: number, n: number) => number;

    {
        let result: (m: number, n: number) => number;

        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().flowRight<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }
}

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
module TestModArgs {
    type Func1 = (a: boolean) => boolean;
    type Func2 = (a: boolean, b: boolean) => boolean;

    let func1: Func1;
    let func2: Func2;

    let transform1: (a: string) => boolean;
    let transform2: (b: number) => boolean;

    {
        let result: (a: string) => boolean;

        result = _.modArgs<Func1, (a: string) => boolean>(func1, transform1);
        result = _.modArgs<Func1, (a: string) => boolean>(func1, [transform1]);
    }

    {
        let result: (a: string, b: number) => boolean;

        result = _.modArgs<Func2, (a: string, b: number) => boolean>(func2, transform1, transform2);
        result = _.modArgs<Func2, (a: string, b: number) => boolean>(func2, [transform1, transform2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).modArgs<(a: string) => boolean>(transform1);
        result = _(func1).modArgs<(a: string) => boolean>([transform1]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).modArgs<(a: string, b: number) => boolean>(transform1, transform2);
        result = _(func2).modArgs<(a: string, b: number) => boolean>([transform1, transform2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).chain().modArgs<(a: string) => boolean>(transform1);
        result = _(func1).chain().modArgs<(a: string) => boolean>([transform1]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).chain().modArgs<(a: string, b: number) => boolean>(transform1, transform2);
        result = _(func2).chain().modArgs<(a: string, b: number) => boolean>([transform1, transform2]);
    }
}

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
module TestOnce {
    interface Func {
        (a: number, b: string): boolean;
    }

    let func: Func;

    {
        let result: Func;

        result = _.once(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).once();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().once();
    }
}

var returnedOnce = _.throttle(function (a: any) { return a * 5; }, 5);
returnedOnce(4);

var greetPartial = function (greeting: string, name: string) { return greeting + ' ' + name; };
var hi = _.partial(greetPartial, 'hi');
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

// _.restParam
module TestRestParam {
    type Func = (a: string, b: number[]) => boolean;
    type ResultFunc = (a: string, ...b: number[]) => boolean;

    let func: Func;

    {
        let result: ResultFunc;

        result = _.restParam<ResultFunc>(func);
        result = _.restParam<ResultFunc>(func, 1);

        result = _.restParam<ResultFunc, Func>(func);
        result = _.restParam<ResultFunc, Func>(func, 1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).restParam<ResultFunc>();
        result = _(func).restParam<ResultFunc>(1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().restParam<ResultFunc>();
        result = _(func).chain().restParam<ResultFunc>(1);
    }
}

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

// _.eq
module TestEq {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.eq(any, any);
        result = _.eq(any, any, customizer);
        result = _.eq(any, any, customizer, any);

        result = _(any).eq(any);
        result = _(any).eq(any, customizer);
        result = _(any).eq(any, customizer, any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().eq(any);
        result = _(any).chain().eq(any, customizer);
        result = _(any).chain().eq(any, customizer, any);
    }
}

// _.gt
result = <boolean>_.gt(1, 2);
result = <boolean>_(1).gt(2);
result = <boolean>_([]).gt(2);
result = <boolean>_({}).gt(2);

// _.gte
module TestGte {
    {
        let result: boolean;

        result = _.gte(any, any);
        result = _(1).gte(any);
        result = _([]).gte(any);
        result = _({}).gte(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gte(any);
        result = _([]).chain().gte(any);
        result = _({}).chain().gte(any);
    }
}

// _.isArguments
result = <boolean>_.isArguments(any);
result = <boolean>_(1).isArguments();
result = <boolean>_<any>([]).isArguments();
result = <boolean>_({}).isArguments();
{
  let value: IArguments|number = 42;
  if (_.isArguments(value)) {
    let length: number = value.length;
    // compile error
    // let i: number = value + 1;
  } else {
    let i: number = value + 1;
    // compile error
    // let length: number = value.length;
  }
}

// _.isArray
result = <boolean>_.isArray(any);
result = <boolean>_(1).isArray();
result = <boolean>_<any>([]).isArray();
result = <boolean>_({}).isArray();
{
  let value: number[]|string = [1, 3, 5];
  if (_.isArray(value)) {
    let length: number[] = value.concat(4);
    // compile error
    // let char: string = value.charAt(0);
  } else {
    let char: string = value.charAt(0);
    // compile error
    // let length: number[] = value.concat(4);
  }
}

// _.isBoolean
result = <boolean>_.isBoolean(any);
result = <boolean>_(1).isBoolean();
result = <boolean>_<any>([]).isBoolean();
result = <boolean>_({}).isBoolean();
{
    let value: number[]|boolean = [1, 3, 5];
    if (_.isBoolean(value)) {
        let b: boolean = value;
        // compile error
        // let length: number = value.length;
    } else {
        let length: number = value.length;
        // compile error
        // let b: boolean = value;
    }
}

// _.isDate
result = <boolean>_.isDate(any);
result = <boolean>_(42).isDate();
result = <boolean>_<any>([]).isDate();
result = <boolean>_({}).isDate();
{
  let value: Date|string = "foo";
  if (_.isDate(value)) {
    value.toTimeString();
  } else {
    value.charAt(0);
  }
}

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

// _.isEqual
module TestIsEqual {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.isEqual(any, any);
        result = _.isEqual(any, any, customizer);
        result = _.isEqual(any, any, customizer, any);

        result = _(any).isEqual(any);
        result = _(any).isEqual(any, customizer);
        result = _(any).isEqual(any, customizer, any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isEqual(any);
        result = _(any).chain().isEqual(any, customizer);
        result = _(any).chain().isEqual(any, customizer, any);
    }
}

// _.isError
result = <boolean>_.isError(any);
result = <boolean>_(1).isError();
result = <boolean>_<any>([]).isError();
result = <boolean>_({}).isError();
{
  let value: Error|string = "error";
  if (_.isError(value)) {
    let message: string = value.message;
  } else {
    let message: string = value;
  }
}

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
{
  let value: Function|string = "foo";
  if (_.isFunction(value)) {
    value();
  } else {
    let result: string = value;
  }
}

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
{
  let value: Function|string = "foo";
  if (_.isNative(value)) {
    value();
  } else {
    let result: string = value;
  }
}

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
{
  let value: number|string = "foo";
  if (_.isNumber(value)) {
    let result: number = value * 42;
  } else {
    let result: string = value;
  }
}

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
{
  let value: RegExp|string = /^foo$/g;
  if (_.isRegExp(value)) {
    let regex: RegExp = value;
    let index: number = value.exec("foo").index;
  } else {
    let result: string = value;
  }
}

// _.isString
result = <boolean>_.isString(any);
result = <boolean>_(1).isString();
result = <boolean>_<any>([]).isString();
result = <boolean>_({}).isString();
{
  let value: string|number = "foo";
  if (_.isString(value)) {
    let result: string = value;
  } else {
    let result: number = value * 42;
  }
}

// _.isTypedArray
result = <boolean>_.isTypedArray([]);
result = <boolean>_([]).isTypedArray();

// _.isUndefined
result = <boolean>_.isUndefined(any);
result = <boolean>_(1).isUndefined();
result = <boolean>_<any>([]).isUndefined();
result = <boolean>_({}).isUndefined();

// _.lt

module TestLt {
    {
        let result: boolean;

        result = _.lt(any, any);
        result = _(1).lt(any);
        result = _([]).lt(any);
        result = _({}).lt(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lt(any);
        result = _([]).chain().lt(any);
        result = _({}).chain().lt(any);
    }
}

// _.lte
result = <boolean>_.lte(1, 2);
result = <boolean>_(1).lte(2);
result = <boolean>_([]).lte(2);
result = <boolean>_({}).lte(2);

// _.toArray
module TestToArray {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    {
        let result: string[];

        result = _.toArray('');

        result = (function (a: string) {return _.toArray<IArguments, string>(arguments);})('');

        result = _((function (a: string) {return arguments;})('')).toArray<string>().value();
    }

    {
        let result: TResult[];

        result = _.toArray<TResult>(array);
        result = _.toArray<TResult>(list);
        result = _.toArray<TResult>(dictionary);

        result = _(array).toArray().value();
        result = _(list).toArray<TResult>().value();
        result = _(dictionary).toArray<TResult>().value();
    }

    {
        let result: any[];

        result = _.toArray();
        result = _.toArray<number>(42);
        result = _.toArray<boolean>(true);

        result = _('').toArray<string>().value();
        result = _(42).toArray<any>().value();
        result = _(true).toArray<any>().value();
    }
}

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
module TestAdd {
    {
        let result: number;

        result = _.add(1, 1);
        result = _(1).add(1);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().add(1);
    }
}

// _.ceil
module TestCeil {
    {
        let result: number;

        result = _.ceil(6.004);
        result = _.ceil(6.004, 2);

        result = _(6.004).ceil();
        result = _(6.004).ceil(2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6.004).chain().ceil();
        result = _(6.004).chain().ceil(2);
    }
}

// _.floor
module TestFloor {
    {
        let result: number;

        result = _.floor(4.006);
        result = _.floor(0.046, 2);
        result = _.floor(4060, -2);

        result = _(4.006).floor();
        result = _(0.046).floor(2);
        result = _(4060).floor(-2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(4.006).chain().floor();
        result = _(0.046).chain().floor(2);
        result = _(4060).chain().floor(-2);
    }
}

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

// _.round
module TestRound {
    {
        let result: number;

        result = _.round(4.006);
        result = _.round(4.006, 2);

        result = _(4.006).round();
        result = _(4.006).round(2);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(4.006).chain().round();
        result = _(4.006).chain().round(2);
    }
}

// _.sum
module TestSum {
    let array: number[];
    let list: _.List<number>;
    let dictionary: _.Dictionary<number>;

    let listIterator: (value: number, index: number, collection: _.List<number>) => number;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => number;

    {
        let result: number;

        result = _.sum(array);
        result = _.sum<number>(array);
        result = _.sum<number>(array, listIterator);
        result = _.sum<number>(array, listIterator, any);
        result = _.sum<number>(array, '');


        result = _.sum(list);
        result = _.sum<number>(list);
        result = _.sum<number>(list, listIterator);
        result = _.sum<number>(list, listIterator, any);
        result = _.sum<number>(list, '');

        result = _.sum(dictionary);
        result = _.sum<number>(dictionary);
        result = _.sum<number>(dictionary, dictionaryIterator);
        result = _.sum<number>(dictionary, dictionaryIterator, any);
        result = _.sum<number>(dictionary, '');

        result = _(array).sum();
        result = _(array).sum(listIterator);
        result = _(array).sum(listIterator, any);
        result = _(array).sum('');


        result = _(list).sum();
        result = _(list).sum<number>(listIterator);
        result = _(list).sum<number>(listIterator, any);
        result = _(list).sum('');

        result = _(dictionary).sum();
        result = _(dictionary).sum<number>(dictionaryIterator);
        result = _(dictionary).sum<number>(dictionaryIterator, any);
        result = _(dictionary).sum('');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sum();
        result = _(array).chain().sum(listIterator);
        result = _(array).chain().sum(listIterator, any);
        result = _(array).chain().sum('');


        result = _(list).chain().sum();
        result = _(list).chain().sum<number>(listIterator);
        result = _(list).chain().sum<number>(listIterator, any);
        result = _(list).chain().sum('');

        result = _(dictionary).chain().sum();
        result = _(dictionary).chain().sum<number>(dictionaryIterator);
        result = _(dictionary).chain().sum<number>(dictionaryIterator, any);
        result = _(dictionary).chain().sum('');
    }
}

/**********
 * Number *
 **********/

// _.inRange
module TestInRange {
    {
        let result: boolean;

        result = _.inRange(3, 2, 4);
        result = _.inRange(4, 8);

        result = _(3).inRange(2, 4);
        result = _(4).inRange(8);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(3).chain().inRange(2, 4);
        result = _(4).chain().inRange(8);
    }
}

// _.random
module TestRandom {
    {
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

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().random();
        result = _(1).chain().random(2);
        result = _(1).chain().random(2, true);
        result = _(1).chain().random(true);
        result = _(true).chain().random();
    }
}

/**********
 * Object *
 **********/

// _.assign
module TestAssign {
    interface Obj {a: string};
    interface S1 {a: number};
    interface S2 {b: number};
    interface S3 {c: number};
    interface S4 {d: number};
    interface S5 {e: number};

    let obj: Obj;
    let s1: S1;
    let s2: S2;
    let s3: S3;
    let s4: S4;
    let s5: S5;

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    {
        let result: Obj;

        result = _.assign<Obj>(obj);
    }

    {
        let result: {a: number};

        result = _.assign<Obj, S1, {a: number}>(obj, s1);
        result = _.assign<Obj, S1, {a: number}>(obj, s1, customizer);
        result = _.assign<Obj, S1, {a: number}>(obj, s1, customizer, any);
    }

    {
        let result: {a: number, b: number};

        result = _.assign<Obj, S1, S2, {a: number, b: number}>(obj, s1, s2);
        result = _.assign<Obj, S1, S2, {a: number, b: number}>(obj, s1, s2, customizer);
        result = _.assign<Obj, S1, S2, {a: number, b: number}>(obj, s1, s2, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number};

        result = _.assign<Obj, S1, S2, S3, {a: number, b: number, c: number}>(obj, s1, s2, s3);
        result = _.assign<Obj, S1, S2, S3, {a: number, b: number, c: number}>(obj, s1, s2, s3, customizer);
        result = _.assign<Obj, S1, S2, S3, {a: number, b: number, c: number}>(obj, s1, s2, s3, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number, d: number};

        result = _.assign<Obj, S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(obj, s1, s2, s3, s4);
        result = _.assign<Obj, S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(obj, s1, s2, s3, s4, customizer);
        result = _.assign<Obj, S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(obj, s1, s2, s3, s4, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number, d: number, e: number};

        result = _.assign<Obj, {a: number, b: number, c: number, d: number, e: number}>(obj, s1, s2, s3, s4, s5);
        result = _.assign<Obj, {a: number, b: number, c: number, d: number, e: number}>(obj, s1, s2, s3, s4, s5, customizer);
        result = _.assign<Obj, {a: number, b: number, c: number, d: number, e: number}>(obj, s1, s2, s3, s4, s5, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assign();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number}>;

        result = _(obj).assign<S1, {a: number}>(s1);
        result = _(obj).assign<S1, {a: number}>(s1, customizer);
        result = _(obj).assign<S1, {a: number}>(s1, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number}>;

        result = _(obj).assign<S1, S2, {a: number, b: number}>(s1, s2);
        result = _(obj).assign<S1, S2, {a: number, b: number}>(s1, s2, customizer);
        result = _(obj).assign<S1, S2, {a: number, b: number}>(s1, s2, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number}>;

        result = _(obj).assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3);
        result = _(obj).assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3, customizer);
        result = _(obj).assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number, d: number}>;

        result = _(obj).assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4);
        result = _(obj).assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4, customizer);
        result = _(obj).assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number, d: number, e: number}>;

        result = _(obj).assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5);
        result = _(obj).assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5, customizer);
        result = _(obj).assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assign();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number}>;

        result = _(obj).chain().assign<S1, {a: number}>(s1);
        result = _(obj).chain().assign<S1, {a: number}>(s1, customizer);
        result = _(obj).chain().assign<S1, {a: number}>(s1, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number}>;

        result = _(obj).chain().assign<S1, S2, {a: number, b: number}>(s1, s2);
        result = _(obj).chain().assign<S1, S2, {a: number, b: number}>(s1, s2, customizer);
        result = _(obj).chain().assign<S1, S2, {a: number, b: number}>(s1, s2, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number}>;

        result = _(obj).chain().assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3);
        result = _(obj).chain().assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3, customizer);
        result = _(obj).chain().assign<S1, S2, S3, {a: number, b: number, c: number}>(s1, s2, s3, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number, d: number}>;

        result = _(obj).chain().assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4);
        result = _(obj).chain().assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4, customizer);
        result = _(obj).chain().assign<S1, S2, S3, S4, {a: number, b: number, c: number, d: number}>(s1, s2, s3, s4, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number, d: number, e: number}>;

        result = _(obj).chain().assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5);
        result = _(obj).chain().assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5, customizer);
        result = _(obj).chain().assign<{a: number, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5, customizer, any);
    }
}

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

// _.defaults
module TestDefaults {
    interface Obj {a: string};
    interface S1 {a: number};
    interface S2 {b: number};
    interface S3 {c: number};
    interface S4 {d: number};
    interface S5 {e: number};

    let obj: Obj;
    let s1: S1;
    let s2: S2;
    let s3: S3;
    let s4: S4;
    let s5: S5;

    {
        let result: Obj;

        result = _.defaults<Obj>(obj);
    }

    {
        let result: {a: string};

        result = _.defaults<Obj, S1, {a: string}>(obj, s1);
    }

    {
        let result: {a: string, b: number};

        result = _.defaults<Obj, S1, S2, {a: string, b: number}>(obj, s1, s2);
    }

    {
        let result: {a: string, b: number, c: number};

        result = _.defaults<Obj, S1, S2, S3, {a: string, b: number, c: number}>(obj, s1, s2, s3);
    }

    {
        let result: {a: string, b: number, c: number, d: number};

        result = _.defaults<Obj, S1, S2, S3, S4, {a: string, b: number, c: number, d: number}>(obj, s1, s2, s3, s4);
    }

    {
        let result: {a: string, b: number, c: number, d: number, e: number};

        result = _.defaults<Obj, {a: string, b: number, c: number, d: number, e: number}>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).defaults();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        result = _(obj).defaults<S1, {a: string}>(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string, b: number}>;

        result = _(obj).defaults<S1, S2, {a: string, b: number}>(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string, b: number, c: number}>;

        result = _(obj).defaults<S1, S2, S3, {a: string, b: number, c: number}>(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string, b: number, c: number, d: number}>;

        result = _(obj).defaults<S1, S2, S3, S4, {a: string, b: number, c: number, d: number}>(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string, b: number, c: number, d: number, e: number}>;

        result = _(obj).defaults<{a: string, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().defaults();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _(obj).chain().defaults<S1, {a: string}>(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string, b: number}>;

        result = _(obj).chain().defaults<S1, S2, {a: string, b: number}>(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string, b: number, c: number}>;

        result = _(obj).chain().defaults<S1, S2, S3, {a: string, b: number, c: number}>(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string, b: number, c: number, d: number}>;

        result = _(obj).chain().defaults<S1, S2, S3, S4, {a: string, b: number, c: number, d: number}>(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string, b: number, c: number, d: number, e: number}>;

        result = _(obj).chain().defaults<{a: string, b: number, c: number, d: number, e: number}>(s1, s2, s3, s4, s5);
    }
}

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

// _.extend
module TestExtend {
    type Obj = {a: string};
    type S1 = {a: number};
    type S2 = {b: number};
    type S3 = {c: number};
    type S4 = {d: number};
    type S5 = {e: number};

    let obj: Obj;
    let s1: S1;
    let s2: S2;
    let s3: S3;
    let s4: S4;
    let s5: S5;

    let customizer: (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    {
        let result: Obj;

        result = _.extend<Obj>(obj);
    }

    {
        let result: {a: number};

        result = _.extend<Obj, S1, Obj & S1>(obj, s1);
        result = _.extend<Obj, S1, Obj & S1>(obj, s1, customizer);
        result = _.extend<Obj, S1, Obj & S1>(obj, s1, customizer, any);
    }

    {
        let result: {a: number, b: number};

        result = _.extend<Obj, S1, S2, Obj & S1 & S2>(obj, s1, s2);
        result = _.extend<Obj, S1, S2, Obj & S1 & S2>(obj, s1, s2, customizer);
        result = _.extend<Obj, S1, S2, Obj & S1 & S2>(obj, s1, s2, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number};

        result = _.extend<Obj, S1, S2, S3, Obj & S1 & S2 & S3>(obj, s1, s2, s3);
        result = _.extend<Obj, S1, S2, S3, Obj & S1 & S2 & S3>(obj, s1, s2, s3, customizer);
        result = _.extend<Obj, S1, S2, S3, Obj & S1 & S2 & S3>(obj, s1, s2, s3, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number, d: number};

        result = _.extend<Obj, S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(obj, s1, s2, s3, s4);
        result = _.extend<Obj, S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(obj, s1, s2, s3, s4, customizer);
        result = _.extend<Obj, S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(obj, s1, s2, s3, s4, customizer, any);
    }

    {
        let result: {a: number, b: number, c: number, d: number, e: number};

        result = _.extend<Obj, Obj & S1 & S2 & S3 & S4 & S5>(obj, s1, s2, s3, s4, s5);
        result = _.extend<Obj, Obj & S1 & S2 & S3 & S4 & S5>(obj, s1, s2, s3, s4, s5, customizer);
        result = _.extend<Obj, Obj & S1 & S2 & S3 & S4 & S5>(obj, s1, s2, s3, s4, s5, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).extend();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number}>;

        result = _(obj).extend<S1, Obj & S1>(s1);
        result = _(obj).extend<S1, Obj & S1>(s1, customizer);
        result = _(obj).extend<S1, Obj & S1>(s1, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number}>;

        result = _(obj).extend<S1, S2, Obj & S1 & S2>(s1, s2);
        result = _(obj).extend<S1, S2, Obj & S1 & S2>(s1, s2, customizer);
        result = _(obj).extend<S1, S2, Obj & S1 & S2>(s1, s2, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number}>;

        result = _(obj).extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3);
        result = _(obj).extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3, customizer);
        result = _(obj).extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number, d: number}>;

        result = _(obj).extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4);
        result = _(obj).extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4, customizer);
        result = _(obj).extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4, customizer, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number, b: number, c: number, d: number, e: number}>;

        result = _(obj).extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5);
        result = _(obj).extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5, customizer);
        result = _(obj).extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().extend();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number}>;

        result = _(obj).chain().extend<S1, Obj & S1>(s1);
        result = _(obj).chain().extend<S1, Obj & S1>(s1, customizer);
        result = _(obj).chain().extend<S1, Obj & S1>(s1, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number}>;

        result = _(obj).chain().extend<S1, S2, Obj & S1 & S2>(s1, s2);
        result = _(obj).chain().extend<S1, S2, Obj & S1 & S2>(s1, s2, customizer);
        result = _(obj).chain().extend<S1, S2, Obj & S1 & S2>(s1, s2, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number}>;

        result = _(obj).chain().extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3);
        result = _(obj).chain().extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3, customizer);
        result = _(obj).chain().extend<S1, S2, S3, Obj & S1 & S2 & S3>(s1, s2, s3, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number, d: number}>;

        result = _(obj).chain().extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4);
        result = _(obj).chain().extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4, customizer);
        result = _(obj).chain().extend<S1, S2, S3, S4, Obj & S1 & S2 & S3 & S4>(s1, s2, s3, s4, customizer, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number, b: number, c: number, d: number, e: number}>;

        result = _(obj).chain().extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5);
        result = _(obj).chain().extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5, customizer);
        result = _(obj).chain().extend<Obj & S1 & S2 & S3 & S4 & S5>(s1, s2, s3, s4, s5, customizer, any);
    }
}

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

// _.findLastKey
module TestFindLastKey {
    let result: string;

    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;

        result = _.findLastKey<{a: string;}>({a: ''});

        result = _.findLastKey<{a: string;}>({a: ''}, predicateFn);
        result = _.findLastKey<{a: string;}>({a: ''}, predicateFn, any);


        result = _.findLastKey<{a: string;}>({a: ''}, '');
        result = _.findLastKey<{a: string;}>({a: ''}, '', any);

        result = _.findLastKey<{a: number;}, {a: string;}>({a: ''}, {a: 42});

        result = _<{a: string;}>({a: ''}).findLastKey();

        result = _<{a: string;}>({a: ''}).findLastKey(predicateFn);
        result = _<{a: string;}>({a: ''}).findLastKey(predicateFn, any);


        result = _<{a: string;}>({a: ''}).findLastKey('');
        result = _<{a: string;}>({a: ''}).findLastKey('', any);

        result = _<{a: string;}>({a: ''}).findLastKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn: (value: string, key?: string, collection?: _.Dictionary<string>) => boolean;

        result = _.findLastKey<string, {a: string;}>({a: ''}, predicateFn);
        result = _.findLastKey<string, {a: string;}>({a: ''}, predicateFn, any);

        result = _<{a: string;}>({a: ''}).findLastKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).findLastKey<string>(predicateFn, any);
    }
}

// _.forIn
module TestForIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number>;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any;

    let object: SampleObject;
    let objectIterator: (element: any, key?: string, collection?: any) => any;

    {
        let result: _.Dictionary<number>;

        result = _.forIn<number>(dictionary);
        result = _.forIn<number>(dictionary, dictionaryIterator);
        result = _.forIn<number>(dictionary, dictionaryIterator, any);
    }

    {
        let result: SampleObject;

        result = _.forIn<SampleObject>(object);
        result = _.forIn<SampleObject>(object, objectIterator);
        result = _.forIn<SampleObject>(object, objectIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forIn<number>();
        result = _(dictionary).forIn<number>(dictionaryIterator);
        result = _(dictionary).forIn<number>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forIn<number>();
        result = _(dictionary).chain().forIn<number>(dictionaryIterator);
        result = _(dictionary).chain().forIn<number>(dictionaryIterator, any);
    }
}

result = <Dog>_.forInRight(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = <_.LoDashImplicitObjectWrapper<Dog>>_(new Dog('Dagny')).forInRight(function (value, key) {
    console.log(key);
});

// _.forOwn
module TestForOwn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number>;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any;

    let object: SampleObject;
    let objectIterator: (element: any, key?: string, collection?: any) => any;

    {
        let result: _.Dictionary<number>;

        result = _.forOwn<number>(dictionary);
        result = _.forOwn<number>(dictionary, dictionaryIterator);
        result = _.forOwn<number>(dictionary, dictionaryIterator, any);
    }

    {
        let result: SampleObject;

        result = _.forOwn<SampleObject>(object);
        result = _.forOwn<SampleObject>(object, objectIterator);
        result = _.forOwn<SampleObject>(object, objectIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwn<number>();
        result = _(dictionary).forOwn<number>(dictionaryIterator);
        result = _(dictionary).forOwn<number>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwn<number>();
        result = _(dictionary).chain().forOwn<number>(dictionaryIterator);
        result = _(dictionary).chain().forOwn<number>(dictionaryIterator, any);
    }
}

interface ZeroOne {
    0: string;
    1: string;
    one: string;
}

result = <any>_.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function (num, key) {
    console.log(key);
});

result = <_.LoDashImplicitObjectWrapper<ZeroOne>>_({ '0': 'zero', '1': 'one', 'length': 2 }).forOwnRight(function (num, key) {
    console.log(key);
});

// _.functions
module TestFunctions {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject;

    {
        let result: string[];

        result = _.functions<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).functions();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().functions();
    }
}

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
module TestHas {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject;

    {
        let result: boolean;

        result = _.has<SampleObject>(object, '');
        result = _.has<SampleObject>(object, 42);
        result = _.has<SampleObject>(object, true);
        result = _.has<SampleObject>(object, ['', 42, true]);

        result = _(object).has('');
        result = _(object).has(42);
        result = _(object).has(true);
        result = _(object).has(['', 42, true]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().has('');
        result = _(object).chain().has(42);
        result = _(object).chain().has(true);
        result = _(object).chain().has(['', 42, true]);
    }
}

// _.invert
{
    let result: TResult;
    result = _.invert<Object, TResult>({});
    result = _.invert<Object, TResult>({}, true);
    result = _({}).invert<TResult>().value();
    result = _({}).invert<TResult>(true).value();
}

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

// _.methods
module TestFunctions {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject;

    {
        let result: string[];

        result = _.methods<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).methods();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().methods();
    }
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

// _.pairs
module TestPairs {
    let object: _.Dictionary<string>;

    {
        let result: any[][];

        result = _.pairs<_.Dictionary<string>>(object);
    }

    {
        let result: string[][];

        result = _.pairs<_.Dictionary<string>, string>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string[]>;

        result = _(object).pairs<string>();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<any[]>;

        result = _(object).pairs();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string[]>;

        result = _(object).chain().pairs<string>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any[]>;

        result = _(object).chain().pairs();
    }
}

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
module TestSet {
    type SampleValue = {a: number; b: string; c: boolean;};

    let object: TResult;
    let value = {a: 1, b: '', c: true};

    {
        let result: TResult;

        result = _.set(object, '', any);
        result = _.set(object, ['a', 'b', 1], any);

        result = _.set<SampleValue>(object, '', value);
        result = _.set<SampleValue>(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _(object).set('', any);
        result = _(object).set(['a', 'b', 1], any);

        result = _(object).set<SampleValue>('', value);
        result = _(object).set<SampleValue>(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(object).chain().set('', any);
        result = _(object).chain().set(['a', 'b', 1], any);

        result = _(object).chain().set<SampleValue>('', value);
        result = _(object).chain().set<SampleValue>(['a', 'b', 1], value);
    }
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
 * String *
 **********/

// _.camelCase
module TestCamelCase {
    {
        let result: string;

        result = _.camelCase('Foo Bar');
        result = _('Foo Bar').camelCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().camelCase();
    }
}

// _.capitalize
module TestCapitalize {
    {
        let result: string;

        result = _.capitalize('fred');
        result = _('fred').capitalize();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred').chain().capitalize();
    }
}

// _.deburr
module TestDeburr {
    {
        let result: string;

        result = _.deburr('déjà vu');
        result = _('déjà vu').deburr();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('déjà vu').chain().deburr();
    }
}

// _.endsWith
module TestEndsWith {
    {
        let result: boolean;

        result = _.endsWith('abc', 'c');
        result = _.endsWith('abc', 'c', 1);

        result = _('abc').endsWith('c');
        result = _('abc').endsWith('c', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('abc').chain().endsWith('c');
        result = _('abc').chain().endsWith('c', 1);
    }
}

// _.escape
module TestEscape {
    {
        let result: string;

        result = _.escape('fred, barney, & pebbles');
        result = _('fred, barney, & pebbles').escape();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, & pebbles').chain().escape();
    }
}

// _.escapeRegExp
module TestEscapeRegExp {
    {
        let result: string;

        result = _.escapeRegExp('[lodash](https://lodash.com/)');
        result = _('[lodash](https://lodash.com/)').escapeRegExp();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('[lodash](https://lodash.com/)').chain().escapeRegExp();
    }
}

// _.kebabCase
module TestKebabCase {
    {
        let result: string;

        result = _.kebabCase('Foo Bar');
        result = _('Foo Bar').kebabCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().kebabCase();
    }
}

// _.pad
module TestPad {
    {
        let result: string;

        result = _.pad('abd');
        result = _.pad('abc', 8);
        result = _.pad('abc', 8, '_-');

        result = _('abc').pad();
        result = _('abc').pad(8);
        result = _('abc').pad(8, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().pad();
        result = _('abc').chain().pad(8);
        result = _('abc').chain().pad(8, '_-');
    }
}

// _.padLeft
module TestPadLeft {
    {
        let result: string;

        result = _.padLeft('abc');
        result = _.padLeft('abc', 6);
        result = _.padLeft('abc', 6, '_-');

        result = _('abc').padLeft();
        result = _('abc').padLeft(6);
        result = _('abc').padLeft(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padLeft();
        result = _('abc').chain().padLeft(6);
        result = _('abc').chain().padLeft(6, '_-');
    }
}

// _.padRight
module TestPadRight {
    {
        let result: string;

        result = _.padRight('abc');
        result = _.padRight('abc', 6);
        result = _.padRight('abc', 6, '_-');

        result = _('abc').padRight();
        result = _('abc').padRight(6);
        result = _('abc').padRight(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padRight();
        result = _('abc').chain().padRight(6);
        result = _('abc').chain().padRight(6, '_-');
    }
}


// _.parseInt
module TestParseInt {
    {
        let result: number;

        result = _.parseInt('08');
        result = _.parseInt('08', 10);

        result = _('08').parseInt();
        result = _('08').parseInt(10);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('08').chain().parseInt();
        result = _('08').chain().parseInt(10);
    }
}

// _.repeat
module TestRepeat {
    {
        let result: string;
        result = _.repeat('*');
        result = _.repeat('*', 3);

        result = _('*').repeat();
        result = _('*').repeat(3);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('*').chain().repeat();
        result = _('*').chain().repeat(3);
    }
}

// _.snakeCase
module TestSnakeCase {
    {
        let result: string;

        result = _.snakeCase('Foo Bar');
        result = _('Foo Bar').snakeCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().snakeCase();
    }
}

// _.startCase
module TestStartCase {
    {
        let result: string;

        result = _.startCase('--foo-bar');
        result = _('--foo-bar').startCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('--foo-bar').chain().startCase();
    }
}

// _.startsWith
module TestStartsWith {
    {
        let result: boolean;

        result = _.startsWith('abc', 'a');
        result = _.startsWith('abc', 'a', 1);

        result = _('abc').startsWith('a');
        result = _('abc').startsWith('a', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('abc').chain().startsWith('a');
        result = _('abc').chain().startsWith('a', 1);
    }
}

// _.template
module TestTemplate {
    interface TemplateExecutor {
        (obj?: Object): string;
        source: string;
    }

    let options: {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: _.Dictionary<any>;
        interpolate?: RegExp;
        sourceURL?: string;
        variable?: string;
    };

    {
        let result: TemplateExecutor;

        result = _.template('');
        result = _.template('', options);

        result = _('').template();
        result = _('').template(options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TemplateExecutor>;

        result = _('').chain().template();
        result = _('').chain().template(options);
    }
}

// _.trim
module TestTrim {
    {
        let result: string;

        result = _.trim();
        result = _.trim('  abc  ');
        result = _.trim('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trim();
        result = _('-_-abc-_-').trim('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trim();
        result = _('-_-abc-_-').chain().trim('_-');
    }
}

// _.trimLeft
module TestTrimLeft {
    {
        let result: string;

        result = _.trimLeft();
        result = _.trimLeft('  abc  ');
        result = _.trimLeft('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimLeft();
        result = _('-_-abc-_-').trimLeft('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimLeft();
        result = _('-_-abc-_-').chain().trimLeft('_-');
    }
}

// _.trimRight

module TestTrimRight {
    {
        let result: string;

        result = _.trimRight();
        result = _.trimRight('  abc  ');
        result = _.trimRight('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimRight();
        result = _('-_-abc-_-').trimRight('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimRight();
        result = _('-_-abc-_-').chain().trimRight('_-');
    }
}

// _.trunc
module TestTrunc {
    {
        let result: string;

        result = _.trunc('hi-diddly-ho there, neighborino');
        result = _.trunc('hi-diddly-ho there, neighborino', 24);
        result = _.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
        result = _.trunc('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
        result = _.trunc('hi-diddly-ho there, neighborino', { 'omission': ' […]' });

        result = _('hi-diddly-ho there, neighborino').trunc();
        result = _('hi-diddly-ho there, neighborino').trunc(24);
        result = _('hi-diddly-ho there, neighborino').trunc({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').trunc({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').trunc({ 'omission': ' […]' });
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('hi-diddly-ho there, neighborino').chain().trunc();
        result = _('hi-diddly-ho there, neighborino').chain().trunc(24);
        result = _('hi-diddly-ho there, neighborino').chain().trunc({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').chain().trunc({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').chain().trunc({ 'omission': ' […]' });
    }
}

// _.unescape
module TestUnescape {
    {
        let result: string;

        result = _.unescape('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').unescape();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().unescape();
    }
}

// _.words
module TestWords {
    {
        let result: string[];

        result = _.words('fred, barney, & pebbles');
        result = _.words('fred, barney, & pebbles', /[^, ]+/g);

        result = _('fred, barney, & pebbles').words();
        result = _('fred, barney, & pebbles').words(/[^, ]+/g);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('fred, barney, & pebbles').chain().words();
        result = _('fred, barney, & pebbles').chain().words(/[^, ]+/g);
    }
}

/***********
 * Utility *
 ***********/

// _.attempt
module TestAttempt {
    let func: (...args: any[]) => {a: string};

    {
        let result: {a: string}|Error;

        result = _.attempt<{a: string}>(func);
        result = _(func).attempt<{a: string}>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}|Error>;

        result = _(func).chain().attempt<{a: string}>();
    }
}

// _.callback
module TestCallback {
    {
        let result: (...args: any[]) => TResult;

        result = _.callback<TResult>(Function);
        result = _.callback<TResult>(Function, any);
    }

    {
        let result: (object: any) => TResult;

        result = _.callback<TResult>('');
        result = _.callback<TResult>('', any);
    }

    {
        let result: (object: any) => boolean;

        result = _.callback({});
        result = _.callback({}, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => TResult>;

        result = _(Function).callback<TResult>();
        result = _(Function).callback<TResult>(any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => TResult>;

        result = _('').callback<TResult>();
        result = _('').callback<TResult>(any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).callback();
        result = _({}).callback(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => TResult>;

        result = _(Function).chain().callback<TResult>();
        result = _(Function).chain().callback<TResult>(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => TResult>;

        result = _('').chain().callback<TResult>();
        result = _('').chain().callback<TResult>(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).chain().callback();
        result = _({}).chain().callback(any);
    }
}

// _.constant
module TestConstant {
    {
        let result: () => number;
        result: _.constant<number>(42);
    }

    {
        let result: () => string;
        result: _.constant<string>('a');
    }

    {
        let result: () => boolean;
        result: _.constant<boolean>(true);
    }

    {
        let result: () => string[];
        result: _.constant<string[]>(['a']);
    }

    {
        let result: () => {a: string};
        result: _.constant<{a: string}>({a: 'a'});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => number>;
        result: _(42).constant<number>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string>;
        result: _('a').constant<string>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => boolean>;
        result: _(true).constant<boolean>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string[]>;
        result: _(['a']).constant<string[]>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => {a: string}>;
        result: _({a: 'a'}).constant<{a: string}>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => number>;
        result: _(42).chain().constant<number>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string>;
        result: _('a').chain().constant<string>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => boolean>;
        result: _(true).chain().constant<boolean>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string[]>;
        result: _(['a']).chain().constant<string[]>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => {a: string}>;
        result: _({a: 'a'}).chain().constant<{a: string}>();
    }
}

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
module TestIteratee {
    {
        let result: (...args: any[]) => TResult;

        result = _.iteratee<TResult>(Function);
        result = _.iteratee<TResult>(Function, any);
    }

    {
        let result: (object: any) => TResult;

        result = _.iteratee<TResult>('');
        result = _.iteratee<TResult>('', any);
    }

    {
        let result: (object: any) => boolean;

        result = _.iteratee({});
        result = _.iteratee({}, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => TResult>;

        result = _(Function).iteratee<TResult>();
        result = _(Function).iteratee<TResult>(any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => TResult>;

        result = _('').iteratee<TResult>();
        result = _('').iteratee<TResult>(any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).iteratee();
        result = _({}).iteratee(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => TResult>;

        result = _(Function).chain().iteratee<TResult>();
        result = _(Function).chain().iteratee<TResult>(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => TResult>;

        result = _('').chain().iteratee<TResult>();
        result = _('').chain().iteratee<TResult>(any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).chain().iteratee();
        result = _({}).chain().iteratee(any);
    }
}

// _.matches
module TestMatches {
    let source: TResult;

    {
        let result: (value: any) => boolean;
        result = _.matches<TResult>(source);
    }

    {
        let result: (value: TResult) => boolean;
        result = _.matches<TResult, TResult>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: TResult) => boolean>;
        result = _(source).matches<TResult>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: TResult) => boolean>;
        result = _(source).chain().matches<TResult>();
    }
}

// _.matchesProperty
module TestMatches {
    let path: {toString(): string;}|{toString(): string;}[];
    let source: TResult;

    {
        let result: (value: any) => boolean;

        result = _.matchesProperty<TResult>(path, source);
    }

    {
        let result: (value: TResult) => boolean;

        result = _.matchesProperty<TResult, TResult>(path, source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).matchesProperty<TResult>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: TResult) => boolean>;

        result = _(path).matchesProperty<TResult, TResult>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).chain().matchesProperty<TResult>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: TResult) => boolean>;

        result = _(path).chain().matchesProperty<TResult, TResult>(source);
    }
}

// _.method
module TestMethod {
    {
        let result: (object: any) => {a: string};

        result = _.method<{a: string}>('a.0');
        result = _.method<{a: string}>('a.0', any);
        result = _.method<{a: string}>('a.0', any, any);
        result = _.method<{a: string}>('a.0', any, any, any);

        result = _.method<{a: string}>(['a', 0]);
        result = _.method<{a: string}>(['a', 0], any);
        result = _.method<{a: string}>(['a', 0], any, any);
        result = _.method<{a: string}>(['a', 0], any, any, any);
    }

    {
        let result: (object: {a: string}) => {b: string};

        result = _.method<{a: string}, {b: string}>('a.0');
        result = _.method<{a: string}, {b: string}>('a.0', any);
        result = _.method<{a: string}, {b: string}>('a.0', any, any);
        result = _.method<{a: string}, {b: string}>('a.0', any, any, any);

        result = _.method<{a: string}, {b: string}>(['a', 0]);
        result = _.method<{a: string}, {b: string}>(['a', 0], any);
        result = _.method<{a: string}, {b: string}>(['a', 0], any, any);
        result = _.method<{a: string}, {b: string}>(['a', 0], any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').method<{a: string}>();
        result = _('a.0').method<{a: string}>(any);
        result = _('a.0').method<{a: string}>(any, any);
        result = _('a.0').method<{a: string}>(any, any, any);

        result = _(['a', 0]).method<{a: string}>();
        result = _(['a', 0]).method<{a: string}>(any);
        result = _(['a', 0]).method<{a: string}>(any, any);
        result = _(['a', 0]).method<{a: string}>(any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').method<{a: string}, {b: string}>();
        result = _('a.0').method<{a: string}, {b: string}>(any);
        result = _('a.0').method<{a: string}, {b: string}>(any, any);
        result = _('a.0').method<{a: string}, {b: string}>(any, any, any);

        result = _(['a', 0]).method<{a: string}, {b: string}>();
        result = _(['a', 0]).method<{a: string}, {b: string}>(any);
        result = _(['a', 0]).method<{a: string}, {b: string}>(any, any);
        result = _(['a', 0]).method<{a: string}, {b: string}>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').chain().method<{a: string}>();
        result = _('a.0').chain().method<{a: string}>(any);
        result = _('a.0').chain().method<{a: string}>(any, any);
        result = _('a.0').chain().method<{a: string}>(any, any, any);

        result = _(['a', 0]).chain().method<{a: string}>();
        result = _(['a', 0]).chain().method<{a: string}>(any);
        result = _(['a', 0]).chain().method<{a: string}>(any, any);
        result = _(['a', 0]).chain().method<{a: string}>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').chain().method<{a: string}, {b: string}>();
        result = _('a.0').chain().method<{a: string}, {b: string}>(any);
        result = _('a.0').chain().method<{a: string}, {b: string}>(any, any);
        result = _('a.0').chain().method<{a: string}, {b: string}>(any, any, any);

        result = _(['a', 0]).chain().method<{a: string}, {b: string}>();
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any);
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any, any);
        result = _(['a', 0]).chain().method<{a: string}, {b: string}>(any, any, any);
    }
}

// _.methodOf
module TestMethodOf {
    type SampleObject = {a: {b: () => TResult}[]};
    type ResultFn = (path: _.StringRepresentable|_.StringRepresentable[]) => TResult;

    let object: SampleObject;

    {
        let result: ResultFn;

        result = _.methodOf<SampleObject, TResult>(object);
        result = _.methodOf<SampleObject, TResult>(object, any);
        result = _.methodOf<SampleObject, TResult>(object, any, any);
        result = _.methodOf<SampleObject, TResult>(object, any, any, any);

        result = _.methodOf<TResult>(object);
        result = _.methodOf<TResult>(object, any);
        result = _.methodOf<TResult>(object, any, any);
        result = _.methodOf<TResult>(object, any, any, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFn>;

        result = _(object).methodOf<TResult>();
        result = _(object).methodOf<TResult>(any);
        result = _(object).methodOf<TResult>(any, any);
        result = _(object).methodOf<TResult>(any, any, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFn>;

        result = _(object).chain().methodOf<TResult>();
        result = _(object).chain().methodOf<TResult>(any);
        result = _(object).chain().methodOf<TResult>(any, any);
        result = _(object).chain().methodOf<TResult>(any, any, any);
    }
}

// _.mixin
module TestMixin {
    let source: _.Dictionary<Function>;
    let options: {chain?: boolean};

    {
        let result: TResult;

        result = _.mixin<TResult, Object>({}, source);
        result = _.mixin<TResult, Object>({}, source, options);
        result = _.mixin<TResult>(source);
        result = _.mixin<TResult>(source, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).mixin<TResult>(source);
        result = _({}).mixin<TResult>(source, options);
        result = _(source).mixin<TResult>();
        result = _(source).mixin<TResult>(options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().mixin<TResult>(source);
        result = _({}).chain().mixin<TResult>(source, options);
        result = _(source).chain().mixin<TResult>();
        result = _(source).chain().mixin<TResult>(options);
    }
}

// _.noConflict
{
    let result: typeof _;
    result = _.noConflict();
    result = _(42).noConflict();
    result = _<any>([]).noConflict();
    result = _({}).noConflict();
}

// _.noop
module TestNoop {
    {
        let result: void;

        result = _.noop();
        result = _.noop(1);
        result = _.noop('a', 1);
        result = _.noop(true, 'a', 1);

        result = _('a').noop(true, 'a', 1);
        result = _([1]).noop(true, 'a', 1);
        result = _<string>([]).noop(true, 'a', 1);
        result = _({}).noop(true, 'a', 1);
        result = _(any).noop(true, 'a', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<void>;

        result = _('a').chain().noop(true, 'a', 1);
        result = _([1]).chain().noop(true, 'a', 1);
        result = _<string>([]).chain().noop(true, 'a', 1);
        result = _({}).chain().noop(true, 'a', 1);
        result = _(any).chain().noop(true, 'a', 1);
    }
}

// _.property
module TestProperty {
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    {
        let result: (object: SampleObject) => number;

        result = _.property<SampleObject, number>('a.b[0]');
        result = _.property<SampleObject, number>(['a', 'b', 0]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').property<SampleObject, number>();
        result = _(['a', 'b', 0]).property<SampleObject, number>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').chain().property<SampleObject, number>();
        result = _(['a', 'b', 0]).chain().property<SampleObject, number>();
    }
}

// _.propertyOf
module TestPropertyOf {
    interface SampleObject {
        a: {
            b: number[];
        }
    }

    let object: SampleObject;

    {
        let result: (path: string|string[]) => any;

        result = _.propertyOf({});
        result = _.propertyOf<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(path: string|string[]) => any>;

        result = _({}).propertyOf();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(path: string|string[]) => any>;

        result = _({}).chain().propertyOf();
    }
}

// _.range
module TestRange {
    {
        let result: number[];

        result = _.range(10);
        result = _.range(1, 11);
        result = _.range(0, 30, 5);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(10).range();
        result = _(1).range(11);
        result = _(0).range(30, 5);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(10).chain().range();
        result = _(1).chain().range(11);
        result = _(0).chain().range(30, 5);
    }
}

// _.runInContext
{
    let result: typeof _;
    result = _.runInContext();
    result = _.runInContext({});
    result = _({}).runInContext();
}

// _.times
module TestTimes {
    let iteratee: (num: number) => TResult;

    {
        let result: number[];

        result = _.times(42);
    }

    {
        let result: TResult[];

        result = _.times(42, iteratee);
        result = _.times(42, iteratee, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(42).times();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(42).times(iteratee);
        result = _(42).times(iteratee, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(42).chain().times();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(42).chain().times(iteratee);
        result = _(42).chain().times(iteratee, any);
    }
}

// _.uniqueId
module TestUniqueId {
    {
        let result: string;

        result = _.uniqueId();
        result = _.uniqueId('');

        result = _('').uniqueId();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().uniqueId();
    }
}

result = <string>_.VERSION;
result = <_.Support>_.support;
result = <_.TemplateSettings>_.templateSettings;

// _.partial & _.partialRight
{
    function func0(): number {
        return 42;
    }
    function func1(arg1: number): number {
        return arg1 * 2;
    }
    function func2(arg1: number, arg2: string): number {
        return arg1 * arg2.length;
    }
    function func3(arg1: number, arg2: string, arg3: boolean): number {
        return arg1 * arg2.length + (arg3 ? 1 : 0);
    }
    function func4(arg1: number, arg2: string, arg3: boolean, arg4: number): number {
        return arg1 * arg2.length + (arg3 ? 1 : 0) - arg4;
    }
    let res____: () => number;
    let res1___: (arg1: number                                              ) => number;
    let res_2__: (              arg2: string                                ) => number;
    let res__3_: (                              arg3: boolean               ) => number;
    let res___4: (                                              arg4: number) => number;
    let res12__: (arg1: number, arg2: string                                ) => number;
    let res1_3_: (arg1: number,                 arg3: boolean               ) => number;
    let res1__4: (arg1: number,                                 arg4: number) => number;
    let res_23_: (              arg2: string,   arg3: boolean               ) => number;
    let res_2_4: (              arg2: string,                   arg4: number) => number;
    let res__34: (                              arg3: boolean,  arg4: number) => number;
    let res123_: (arg1: number, arg2: string,   arg3: boolean               ) => number;
    let res12_4: (arg1: number, arg2: string,                   arg4: number) => number;
    let res1_34: (arg1: number,                 arg3: boolean,  arg4: number) => number;
    let res_234: (              arg2: string,   arg3: boolean,  arg4: number) => number;
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
    res1___ = _.partial(func2,  _, "foo");
    res____ = _.partial(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partial(func3                 );
    res_23_ = _.partial(func3, 42             );
    res1_3_ = _.partial(func3,  _, "foo"      );
    res__3_ = _.partial(func3, 42, "foo"      );
    res12__ = _.partial(func3,  _,     _, true);
    res_2__ = _.partial(func3, 42,     _, true);
    res1___ = _.partial(func3,  _, "foo", true);
    res____ = _.partial(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partial(func4                      );
    res_234 = _.partial(func4, 42                  );
    res1_34 = _.partial(func4,  _, "foo"           );
    res__34 = _.partial(func4, 42, "foo"           );
    res12_4 = _.partial(func4,  _,     _, true     );
    res_2_4 = _.partial(func4, 42,     _, true     );
    res1__4 = _.partial(func4,  _, "foo", true     );
    res___4 = _.partial(func4, 42, "foo", true     );
    res123_ = _.partial(func4,  _,     _,    _, 100);
    res_23_ = _.partial(func4, 42,     _,    _, 100);
    res1_3_ = _.partial(func4,  _, "foo",    _, 100);
    res__3_ = _.partial(func4, 42, "foo",    _, 100);
    res12__ = _.partial(func4,  _,     _, true, 100);
    res_2__ = _.partial(func4, 42,     _, true, 100);
    res1___ = _.partial(func4,  _, "foo", true, 100);
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
    res_2__ = _.partialRight(func2, 42,     _);
    res1___ = _.partialRight(func2,     "foo");
    res____ = _.partialRight(func2, 42, "foo");
    // with arity 3 function
    res123_ = _.partialRight(func3                 );
    res_23_ = _.partialRight(func3, 42,     _,    _);
    res1_3_ = _.partialRight(func3,     "foo",    _);
    res__3_ = _.partialRight(func3, 42, "foo",    _);
    res12__ = _.partialRight(func3,            true);
    res_2__ = _.partialRight(func3, 42,     _, true);
    res1___ = _.partialRight(func3,     "foo", true);
    res____ = _.partialRight(func3, 42, "foo", true);
    // with arity 4 function
    res1234 = _.partialRight(func4                      );
    res_234 = _.partialRight(func4, 42,     _,    _,   _);
    res1_34 = _.partialRight(func4,     "foo",    _,   _);
    res__34 = _.partialRight(func4, 42, "foo",    _,   _);
    res12_4 = _.partialRight(func4,            true,   _);
    res_2_4 = _.partialRight(func4, 42,     _, true,   _);
    res1__4 = _.partialRight(func4,     "foo", true,   _);
    res___4 = _.partialRight(func4, 42, "foo", true,   _);
    res123_ = _.partialRight(func4,                  100);
    res_23_ = _.partialRight(func4, 42,     _,    _, 100);
    res1_3_ = _.partialRight(func4,     "foo",    _, 100);
    res__3_ = _.partialRight(func4, 42, "foo",    _, 100);
    res12__ = _.partialRight(func4,            true, 100);
    res_2__ = _.partialRight(func4, 42,     _, true, 100);
    res1___ = _.partialRight(func4,     "foo", true, 100);
    res____ = _.partialRight(func4, 42, "foo", true, 100);
}
