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

    bark() {
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
namespace TestWrapper {
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
result = <number>_([1, 2, 3, 4]).pop();
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).push(5, 6, 7);
result = <number>_([1, 2, 3, 4]).shift();
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).sort((a, b) => 1);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).splice(1);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = <_.LoDashImplicitArrayWrapper<number>>_([1, 2, 3, 4]).unshift(5, 6);

// join (exists only in wrappers)
namespace TestJoin {
    let array = [1, 2];
    let list = {0: 1, 1: 2, length: 2};

    {
        let result: string;

        result = _('abc').join();
        result = _('abc').join('_');
        result = _(array).join();
        result = _(array).join('_');
        result = _(list).join();
        result = _(list).join('_');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().join();
        result = _('abc').chain().join('_');
        result = _(array).chain().join();
        result = _(array).chain().join('_');
        result = _(list).chain().join();
        result = _(list).chain().join('_');
    }
}

/*********
 * Array *
 *********/

// _.chunk
namespace TestChunk {
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
namespace TestCompact {
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
namespace TestDifference {
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
namespace TestDropRight {
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
namespace TestDropRightWhile {
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
namespace TestDropWhile {
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
namespace TestFill {
    let array: number[];
    let list: _.List<number>;

    {
        let result: number[];

        result = _.fill<number>(array, 42);
        result = _.fill<number>(array, 42, 0);
        result = _.fill<number>(array, 42, 0, 10);
    }

    {
        let result: _.List<number>;

        result = _.fill<number>(list, 42);
        result = _.fill<number>(list, 42, 0);
        result = _.fill<number>(list, 42, 0, 10);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(array).fill<number>(42);
        result = _(array).fill<number>(42, 0);
        result = _(array).fill<number>(42, 0, 10);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<number>>;

        result = _(list).fill<number>(42);
        result = _(list).fill<number>(42, 0);
        result = _(list).fill<number>(42, 0, 10);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(array).chain().fill<number>(42);
        result = _(array).chain().fill<number>(42, 0);
        result = _(array).chain().fill<number>(42, 0, 10);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<number>>;

        result = _(list).chain().fill<number>(42);
        result = _(list).chain().fill<number>(42, 0);
        result = _(list).chain().fill<number>(42, 0, 10);
    }
}

// _.findIndex
namespace TestFindIndex {
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
namespace TestFindLastIndex {
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
namespace TestFirst {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: string;

        result = _.first('abc');
        result = _('abc').first();
    }

    {
        let result: TResult;

        result = _.first<TResult>(array);
        result = _.first<TResult>(list);

        result = _(array).first();
        result = _(list).first<TResult>();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().first();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(array).chain().first<_.LoDashExplicitObjectWrapper<TResult>>();
        result = _(list).chain().first<_.LoDashExplicitObjectWrapper<TResult>>();
    }
}

// _.flatten
namespace TestFlatten {
    {
        let result: string[];

        result = _.flatten('abc');
    }

    {
        let result: number[];

        result = _.flatten<number>([1, 2, 3]);
        result = _.flatten<number>([1, [2, 3]]);
        result = _.flatten<number>([1, [2, [3]]], true);
        result = _.flatten<number>([1, [2, [3]], [[4]]], true);

        result = _.flatten<number>({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flatten<number>({0: 1, 1: [2, 3], length: 2});
        result = _.flatten<number>({0: 1, 1: [2, [3]], length: 2}, true);
        result = _.flatten<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}, true);
    }

    {
        let result: _.RecursiveArray<number>;

        result = _.flatten<number>([1, [2, [3]]]);
        result = _.flatten<number>([1, [2, [3]], [[4]]]);

        result = _.flatten<number>({0: 1, 1: [2, [3]], length: 2});
        result = _.flatten<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatten();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).flatten<number>();
        result = _([1, [2, 3]]).flatten<number>();
        result = _([1, [2, [3]]]).flatten<number>(true);
        result = _([1, [2, [3]], [[4]]]).flatten<number>(true);

        result = _({0: 1, 1: 2, 2: 3, length: 3}).flatten<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).flatten<number>();
        result = _({0: 1, 1: [2, [3]], length: 2}).flatten<number>(true);
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number>(true);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number|number[]>;

        result = _([1, [2, [3]]]).flatten<number|number[]>();
        result = _([1, [2, [3]], [[4]]]).flatten<number|number[]>();

        result = _({0: 1, 1: [2, [3]], length: 2}).flatten<number|number[]>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number|number[]>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flatten();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2, 3]).chain().flatten<number>();
        result = _([1, [2, 3]]).chain().flatten<number>();
        result = _([1, [2, [3]]]).chain().flatten<number>(true);
        result = _([1, [2, [3]], [[4]]]).chain().flatten<number>(true);

        result = _({0: 1, 1: 2, 2: 3, length: 3}).chain().flatten<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).chain().flatten<number>();
        result = _({0: 1, 1: [2, [3]], length: 2}).chain().flatten<number>(true);
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).chain().flatten<number>(true);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number|number[]>;

        result = _([1, [2, [3]]]).chain().flatten<number|number[]>();
        result = _([1, [2, [3]], [[4]]]).chain().flatten<number|number[]>();

        result = _({0: 1, 1: [2, [3]], length: 2}).chain().flatten<number|number[]>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).chain().flatten<number|number[]>();
    }
}

// _.flattenDeep
namespace TestFlattenDeep {
    {
        let result: string[];

        result = _.flattenDeep('abc');
    }

    {
        let result: number[];

        result = _.flattenDeep<number>([1, 2, 3]);
        result = _.flattenDeep<number>([1, [2, 3]]);
        result = _.flattenDeep<number>([1, [2, [3]]]);
        result = _.flattenDeep<number>([1, [2, [3]], [[4]]]);

        result = _.flattenDeep<number>({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flattenDeep<number>({0: 1, 1: [2, 3], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flattenDeep();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).flattenDeep<number>();
        result = _([1, [2, 3]]).flattenDeep<number>();
        result = _([1, [2, [3]]]).flattenDeep<number>();
        result = _([1, [2, [3]], [[4]]]).flattenDeep<number>();

        result = _({0: 1, 1: 2, 2: 3, length: 3}).flattenDeep<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).flattenDeep<number>();
        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number>();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number|number[]>;

        result = _([1, [2, [3]]]).flattenDeep<number|number[]>();
        result = _([1, [2, [3]], [[4]]]).flattenDeep<number|number[]>();

        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number|number[]>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number|number[]>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flattenDeep();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2, 3]).chain().flattenDeep<number>();
        result = _([1, [2, 3]]).chain().flattenDeep<number>();
        result = _([1, [2, [3]]]).chain().flattenDeep<number>();
        result = _([1, [2, [3]], [[4]]]).chain().flattenDeep<number>();

        result = _({0: 1, 1: 2, 2: 3, length: 3}).chain().flattenDeep<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).chain().flattenDeep<number>();
        result = _({0: 1, 1: [2, [3]], length: 2}).chain().flattenDeep<number>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).chain().flattenDeep<number>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number|number[]>;

        result = _([1, [2, [3]]]).chain().flattenDeep<number|number[]>();
        result = _([1, [2, [3]], [[4]]]).chain().flattenDeep<number|number[]>();

        result = _({0: 1, 1: [2, [3]], length: 2}).chain().flattenDeep<number|number[]>();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).chain().flattenDeep<number|number[]>();
    }
}

// _.head
namespace TestHead {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: string;

        result = _.head('abc');
        result = _('abc').head();
    }

    {
        let result: TResult;

        result = _.head<TResult>(array);
        result = _.head<TResult>(list);

        result = _(array).head();
        result = _(list).head<TResult>();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().head();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(array).chain().head<_.LoDashExplicitObjectWrapper<TResult>>();
        result = _(list).chain().head<_.LoDashExplicitObjectWrapper<TResult>>();
    }
}

// _.indexOf
namespace TestIndexOf {
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
namespace TestInitial {
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
namespace TestIntersection {
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
namespace TestLast {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: string;

        result = _.last('abc');
        result = _('abc').last();
    }

    {
        let result: TResult;

        result = _.last<TResult>(array);
        result = _.last<TResult>(list);

        result = _(array).last();
        result = _(list).last<TResult>();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().last();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(array).chain().last<_.LoDashExplicitObjectWrapper<TResult>>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _(list).chain().last<_.LoDashExplicitObjectWrapper<TResult>>();
    }
}

// _.lastIndexOf
namespace TestLastIndexOf {
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
namespace TestObject {
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
namespace TestPull {
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
namespace TestPullAt {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.pullAt<TResult>(array);
        result = _.pullAt<TResult>(array, 1);
        result = _.pullAt<TResult>(array, [2, 3], 1);
        result = _.pullAt<TResult>(array, 4, [2, 3], 1);

        result = _.pullAt<TResult>(list);
        result = _.pullAt<TResult>(list, 1);
        result = _.pullAt<TResult>(list, [2, 3], 1);
        result = _.pullAt<TResult>(list, 4, [2, 3], 1);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).pullAt();
        result = _(array).pullAt(1);
        result = _(array).pullAt([2, 3], 1);
        result = _(array).pullAt(4, [2, 3], 1);

        result = _(list).pullAt<TResult>();
        result = _(list).pullAt<TResult>(1);
        result = _(list).pullAt<TResult>([2, 3], 1);
        result = _(list).pullAt<TResult>(4, [2, 3], 1);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().pullAt();
        result = _(array).chain().pullAt(1);
        result = _(array).chain().pullAt([2, 3], 1);
        result = _(array).chain().pullAt(4, [2, 3], 1);

        result = _(list).chain().pullAt<TResult>();
        result = _(list).chain().pullAt<TResult>(1);
        result = _(list).chain().pullAt<TResult>([2, 3], 1);
        result = _(list).chain().pullAt<TResult>(4, [2, 3], 1);
    }
}

// _.remove
namespace TestRemove {
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
namespace TestRest {
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
namespace TestSlice {
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
namespace TestSortedIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;

    let value: SampleType;

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        result = _.sortedIndex<string>('', '');
        result = _.sortedIndex<string>('', '', stringIterator);
        result = _.sortedIndex<string>('', '', stringIterator, any);
        result = _.sortedIndex<string, number>('', '', stringIterator);
        result = _.sortedIndex<string, number>('', '', stringIterator, any);

        result = _.sortedIndex<SampleType>(array, value);
        result = _.sortedIndex<SampleType>(array, value, arrayIterator);
        result = _.sortedIndex<SampleType>(array, value, arrayIterator, any);
        result = _.sortedIndex<SampleType>(array, value, '');
        result = _.sortedIndex<SampleType>(array, value, {a: 42});
        result = _.sortedIndex<SampleType, number>(array, value, arrayIterator);
        result = _.sortedIndex<SampleType, number>(array, value, arrayIterator, any);
        result = _.sortedIndex<{a: number}, SampleType>(array, value, {a: 42});

        result = _.sortedIndex<SampleType>(list, value);
        result = _.sortedIndex<SampleType>(list, value, listIterator);
        result = _.sortedIndex<SampleType>(list, value, listIterator, any);
        result = _.sortedIndex<SampleType>(list, value, '');
        result = _.sortedIndex<SampleType>(list, value, {a: 42});
        result = _.sortedIndex<SampleType, number>(list, value, listIterator);
        result = _.sortedIndex<SampleType, number>(list, value, listIterator, any);
        result = _.sortedIndex<{a: number}, SampleType>(list, value, {a: 42});

        result = _('').sortedIndex('');
        result = _('').sortedIndex<number>('', stringIterator);
        result = _('').sortedIndex<number>('', stringIterator, any);

        result = _(array).sortedIndex(value);
        result = _(array).sortedIndex<number>(value, arrayIterator);
        result = _(array).sortedIndex<number>(value, arrayIterator, any);
        result = _(array).sortedIndex(value, '');
        result = _(array).sortedIndex<{a: number}>(value, {a: 42});

        result = _(list).sortedIndex<SampleType>(value);
        result = _(list).sortedIndex<SampleType>(value, listIterator);
        result = _(list).sortedIndex<SampleType>(value, listIterator, any);
        result = _(list).sortedIndex<SampleType>(value, '');
        result = _(list).sortedIndex<SampleType>(value, {a: 42});
        result = _(list).sortedIndex<SampleType, number>(value, listIterator);
        result = _(list).sortedIndex<SampleType, number>(value, listIterator, any);
        result = _(list).sortedIndex<{a: number}, SampleType>(value, {a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedIndex('');
        result = _('').chain().sortedIndex<number>('', stringIterator);
        result = _('').chain().sortedIndex<number>('', stringIterator, any);

        result = _(array).chain().sortedIndex(value);
        result = _(array).chain().sortedIndex<number>(value, arrayIterator);
        result = _(array).chain().sortedIndex<number>(value, arrayIterator, any);
        result = _(array).chain().sortedIndex(value, '');
        result = _(array).chain().sortedIndex<{a: number}>(value, {a: 42});

        result = _(list).chain().sortedIndex<SampleType>(value);
        result = _(list).chain().sortedIndex<SampleType>(value, listIterator);
        result = _(list).chain().sortedIndex<SampleType>(value, listIterator, any);
        result = _(list).chain().sortedIndex<SampleType>(value, '');
        result = _(list).chain().sortedIndex<SampleType>(value, {a: 42});
        result = _(list).chain().sortedIndex<SampleType, number>(value, listIterator);
        result = _(list).chain().sortedIndex<SampleType, number>(value, listIterator, any);
        result = _(list).chain().sortedIndex<{a: number}, SampleType>(value, {a: 42});
    }
}

// _.sortedLastIndex
namespace TestSortedLastIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;

    let value: SampleType;

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        result = _.sortedLastIndex<string>('', '');
        result = _.sortedLastIndex<string>('', '', stringIterator);
        result = _.sortedLastIndex<string>('', '', stringIterator, any);
        result = _.sortedLastIndex<string, number>('', '', stringIterator);
        result = _.sortedLastIndex<string, number>('', '', stringIterator, any);

        result = _.sortedLastIndex<SampleType>(array, value);
        result = _.sortedLastIndex<SampleType>(array, value, arrayIterator);
        result = _.sortedLastIndex<SampleType>(array, value, arrayIterator, any);
        result = _.sortedLastIndex<SampleType>(array, value, '');
        result = _.sortedLastIndex<SampleType>(array, value, {a: 42});
        result = _.sortedLastIndex<SampleType, number>(array, value, arrayIterator);
        result = _.sortedLastIndex<SampleType, number>(array, value, arrayIterator, any);
        result = _.sortedLastIndex<{a: number}, SampleType>(array, value, {a: 42});

        result = _.sortedLastIndex<SampleType>(list, value);
        result = _.sortedLastIndex<SampleType>(list, value, listIterator);
        result = _.sortedLastIndex<SampleType>(list, value, listIterator, any);
        result = _.sortedLastIndex<SampleType>(list, value, '');
        result = _.sortedLastIndex<SampleType>(list, value, {a: 42});
        result = _.sortedLastIndex<SampleType, number>(list, value, listIterator);
        result = _.sortedLastIndex<SampleType, number>(list, value, listIterator, any);
        result = _.sortedLastIndex<{a: number}, SampleType>(list, value, {a: 42});

        result = _('').sortedLastIndex('');
        result = _('').sortedLastIndex<number>('', stringIterator);
        result = _('').sortedLastIndex<number>('', stringIterator, any);

        result = _(array).sortedLastIndex(value);
        result = _(array).sortedLastIndex<number>(value, arrayIterator);
        result = _(array).sortedLastIndex<number>(value, arrayIterator, any);
        result = _(array).sortedLastIndex(value, '');
        result = _(array).sortedLastIndex<{a: number}>(value, {a: 42});

        result = _(list).sortedLastIndex<SampleType>(value);
        result = _(list).sortedLastIndex<SampleType>(value, listIterator);
        result = _(list).sortedLastIndex<SampleType>(value, listIterator, any);
        result = _(list).sortedLastIndex<SampleType>(value, '');
        result = _(list).sortedLastIndex<SampleType>(value, {a: 42});
        result = _(list).sortedLastIndex<SampleType, number>(value, listIterator);
        result = _(list).sortedLastIndex<SampleType, number>(value, listIterator, any);
        result = _(list).sortedLastIndex<{a: number}, SampleType>(value, {a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndex('');
        result = _('').chain().sortedLastIndex<number>('', stringIterator);
        result = _('').chain().sortedLastIndex<number>('', stringIterator, any);

        result = _(array).chain().sortedLastIndex(value);
        result = _(array).chain().sortedLastIndex<number>(value, arrayIterator);
        result = _(array).chain().sortedLastIndex<number>(value, arrayIterator, any);
        result = _(array).chain().sortedLastIndex(value, '');
        result = _(array).chain().sortedLastIndex<{a: number}>(value, {a: 42});

        result = _(list).chain().sortedLastIndex<SampleType>(value);
        result = _(list).chain().sortedLastIndex<SampleType>(value, listIterator);
        result = _(list).chain().sortedLastIndex<SampleType>(value, listIterator, any);
        result = _(list).chain().sortedLastIndex<SampleType>(value, '');
        result = _(list).chain().sortedLastIndex<SampleType>(value, {a: 42});
        result = _(list).chain().sortedLastIndex<SampleType, number>(value, listIterator);
        result = _(list).chain().sortedLastIndex<SampleType, number>(value, listIterator, any);
        result = _(list).chain().sortedLastIndex<{a: number}, SampleType>(value, {a: 42});
    }
}

// _.tail
namespace TestTail {
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
namespace TestTake {
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
namespace TestTakeRight {
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
namespace TestTakeRightWhile {
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
namespace TestTakeWhile {
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
namespace TestUnion {
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

// _.uniq
namespace TestUniq {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[];
    let list: _.List<SampleObject>;

    let stringIterator: (value: string, index: number, collection: string) => string;
    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => number;

    {
        let result: string[];

        result = _.uniq<string>('abc');
        result = _.uniq<string>('abc', true);
        result = _.uniq<string>('abc', true, stringIterator);
        result = _.uniq<string>('abc', true, stringIterator, any);
        result = _.uniq<string, string>('abc', true, stringIterator);
        result = _.uniq<string, string>('abc', true, stringIterator, any);
        result = _.uniq<string>('abc', stringIterator);
        result = _.uniq<string>('abc', stringIterator, any);
        result = _.uniq<string, string>('abc', stringIterator);
        result = _.uniq<string, string>('abc', stringIterator, any);
    }

    {
        let result: SampleObject[];

        result = _.uniq<SampleObject>(array);
        result = _.uniq<SampleObject>(array, true);
        result = _.uniq<SampleObject>(array, true, listIterator);
        result = _.uniq<SampleObject>(array, true, listIterator, any);
        result = _.uniq<SampleObject, number>(array, true, listIterator);
        result = _.uniq<SampleObject, number>(array, true, listIterator, any);
        result = _.uniq<SampleObject>(array, listIterator);
        result = _.uniq<SampleObject>(array, listIterator, any);
        result = _.uniq<SampleObject, number>(array, listIterator);
        result = _.uniq<SampleObject, number>(array, listIterator, any);
        result = _.uniq<SampleObject>(array, true, 'a');
        result = _.uniq<SampleObject>(array, true, 'a', any);
        result = _.uniq<SampleObject>(array, 'a');
        result = _.uniq<SampleObject>(array, 'a', any);
        result = _.uniq<SampleObject>(array, true, {a: 42});
        result = _.uniq<{a: number}, SampleObject>(array, true, {a: 42});
        result = _.uniq<SampleObject>(array, {a: 42});
        result = _.uniq<{a: number}, SampleObject>(array, {a: 42});

        result = _.uniq<SampleObject>(list);
        result = _.uniq<SampleObject>(list, true);
        result = _.uniq<SampleObject>(list, true, listIterator);
        result = _.uniq<SampleObject>(list, true, listIterator, any);
        result = _.uniq<SampleObject, number>(list, true, listIterator);
        result = _.uniq<SampleObject, number>(list, true, listIterator, any);
        result = _.uniq<SampleObject>(list, listIterator);
        result = _.uniq<SampleObject>(list, listIterator, any);
        result = _.uniq<SampleObject, number>(list, listIterator);
        result = _.uniq<SampleObject, number>(list, listIterator, any);
        result = _.uniq<SampleObject>(list, true, 'a');
        result = _.uniq<SampleObject>(list, true, 'a', any);
        result = _.uniq<SampleObject>(list, 'a');
        result = _.uniq<SampleObject>(list, 'a', any);
        result = _.uniq<SampleObject>(list, true, {a: 42});
        result = _.uniq<{a: number}, SampleObject>(list, true, {a: 42});
        result = _.uniq<SampleObject>(list, {a: 42});
        result = _.uniq<{a: number}, SampleObject>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').uniq();
        result = _('abc').uniq(true);
        result = _('abc').uniq<string>(true, stringIterator);
        result = _('abc').uniq<string>(true, stringIterator, any);
        result = _('abc').uniq<string>(stringIterator);
        result = _('abc').uniq<string>(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).uniq();
        result = _(array).uniq(true);
        result = _(array).uniq<number>(true, listIterator);
        result = _(array).uniq<number>(true, listIterator, any);
        result = _(array).uniq<number>(listIterator);
        result = _(array).uniq<number>(listIterator, any);
        result = _(array).uniq(true, 'a');
        result = _(array).uniq(true, 'a', any);
        result = _(array).uniq('a');
        result = _(array).uniq('a', any);
        result = _(array).uniq<{a: number}>(true, {a: 42});
        result = _(array).uniq<{a: number}>({a: 42});

        result = _(list).uniq<SampleObject>();
        result = _(list).uniq<SampleObject>(true);
        result = _(list).uniq<SampleObject>(true, listIterator);
        result = _(list).uniq<SampleObject>(true, listIterator, any);
        result = _(list).uniq<SampleObject, number>(true, listIterator);
        result = _(list).uniq<SampleObject, number>(true, listIterator, any);
        result = _(list).uniq<SampleObject>(listIterator);
        result = _(list).uniq<SampleObject>(listIterator, any);
        result = _(list).uniq<SampleObject, number>(listIterator);
        result = _(list).uniq<SampleObject, number>(listIterator, any);
        result = _(list).uniq<SampleObject>(true, 'a');
        result = _(list).uniq<SampleObject>(true, 'a', any);
        result = _(list).uniq<SampleObject>('a');
        result = _(list).uniq<SampleObject>('a', any);
        result = _(list).uniq<SampleObject>(true, {a: 42});
        result = _(list).uniq<{a: number}, SampleObject>(true, {a: 42});
        result = _(list).uniq<SampleObject>({a: 42});
        result = _(list).uniq<{a: number}, SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().uniq();
        result = _('abc').chain().uniq(true);
        result = _('abc').chain().uniq<string>(true, stringIterator);
        result = _('abc').chain().uniq<string>(true, stringIterator, any);
        result = _('abc').chain().uniq<string>(stringIterator);
        result = _('abc').chain().uniq<string>(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().uniq();
        result = _(array).chain().uniq(true);
        result = _(array).chain().uniq<number>(true, listIterator);
        result = _(array).chain().uniq<number>(true, listIterator, any);
        result = _(array).chain().uniq<number>(listIterator);
        result = _(array).chain().uniq<number>(listIterator, any);
        result = _(array).chain().uniq(true, 'a');
        result = _(array).chain().uniq(true, 'a', any);
        result = _(array).chain().uniq('a');
        result = _(array).chain().uniq('a', any);
        result = _(array).chain().uniq<{a: number}>(true, {a: 42});
        result = _(array).chain().uniq<{a: number}>({a: 42});

        result = _(list).chain().uniq<SampleObject>();
        result = _(list).chain().uniq<SampleObject>(true);
        result = _(list).chain().uniq<SampleObject>(true, listIterator);
        result = _(list).chain().uniq<SampleObject>(true, listIterator, any);
        result = _(list).chain().uniq<SampleObject, number>(true, listIterator);
        result = _(list).chain().uniq<SampleObject, number>(true, listIterator, any);
        result = _(list).chain().uniq<SampleObject>(listIterator);
        result = _(list).chain().uniq<SampleObject>(listIterator, any);
        result = _(list).chain().uniq<SampleObject, number>(listIterator);
        result = _(list).chain().uniq<SampleObject, number>(listIterator, any);
        result = _(list).chain().uniq<SampleObject>(true, 'a');
        result = _(list).chain().uniq<SampleObject>(true, 'a', any);
        result = _(list).chain().uniq<SampleObject>('a');
        result = _(list).chain().uniq<SampleObject>('a', any);
        result = _(list).chain().uniq<SampleObject>(true, {a: 42});
        result = _(list).chain().uniq<{a: number}, SampleObject>(true, {a: 42});
        result = _(list).chain().uniq<SampleObject>({a: 42});
        result = _(list).chain().uniq<{a: number}, SampleObject>({a: 42});
    }
}

// _.unique
namespace TestUnique {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[];
    let list: _.List<SampleObject>;

    let stringIterator: (value: string, index: number, collection: string) => string;
    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => number;

    {
        let result: string[];

        result = _.unique<string>('abc');
        result = _.unique<string>('abc', true);
        result = _.unique<string>('abc', true, stringIterator);
        result = _.unique<string>('abc', true, stringIterator, any);
        result = _.unique<string, string>('abc', true, stringIterator);
        result = _.unique<string, string>('abc', true, stringIterator, any);
        result = _.unique<string>('abc', stringIterator);
        result = _.unique<string>('abc', stringIterator, any);
        result = _.unique<string, string>('abc', stringIterator);
        result = _.unique<string, string>('abc', stringIterator, any);
    }

    {
        let result: SampleObject[];

        result = _.unique<SampleObject>(array);
        result = _.unique<SampleObject>(array, true);
        result = _.unique<SampleObject>(array, true, listIterator);
        result = _.unique<SampleObject>(array, true, listIterator, any);
        result = _.unique<SampleObject, number>(array, true, listIterator);
        result = _.unique<SampleObject, number>(array, true, listIterator, any);
        result = _.unique<SampleObject>(array, listIterator);
        result = _.unique<SampleObject>(array, listIterator, any);
        result = _.unique<SampleObject, number>(array, listIterator);
        result = _.unique<SampleObject, number>(array, listIterator, any);
        result = _.unique<SampleObject>(array, true, 'a');
        result = _.unique<SampleObject>(array, true, 'a', any);
        result = _.unique<SampleObject>(array, 'a');
        result = _.unique<SampleObject>(array, 'a', any);
        result = _.unique<SampleObject>(array, true, {a: 42});
        result = _.unique<{a: number}, SampleObject>(array, true, {a: 42});
        result = _.unique<SampleObject>(array, {a: 42});
        result = _.unique<{a: number}, SampleObject>(array, {a: 42});

        result = _.unique<SampleObject>(list);
        result = _.unique<SampleObject>(list, true);
        result = _.unique<SampleObject>(list, true, listIterator);
        result = _.unique<SampleObject>(list, true, listIterator, any);
        result = _.unique<SampleObject, number>(list, true, listIterator);
        result = _.unique<SampleObject, number>(list, true, listIterator, any);
        result = _.unique<SampleObject>(list, listIterator);
        result = _.unique<SampleObject>(list, listIterator, any);
        result = _.unique<SampleObject, number>(list, listIterator);
        result = _.unique<SampleObject, number>(list, listIterator, any);
        result = _.unique<SampleObject>(list, true, 'a');
        result = _.unique<SampleObject>(list, true, 'a', any);
        result = _.unique<SampleObject>(list, 'a');
        result = _.unique<SampleObject>(list, 'a', any);
        result = _.unique<SampleObject>(list, true, {a: 42});
        result = _.unique<{a: number}, SampleObject>(list, true, {a: 42});
        result = _.unique<SampleObject>(list, {a: 42});
        result = _.unique<{a: number}, SampleObject>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').unique();
        result = _('abc').unique(true);
        result = _('abc').unique<string>(true, stringIterator);
        result = _('abc').unique<string>(true, stringIterator, any);
        result = _('abc').unique<string>(stringIterator);
        result = _('abc').unique<string>(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).unique();
        result = _(array).unique(true);
        result = _(array).unique<number>(true, listIterator);
        result = _(array).unique<number>(true, listIterator, any);
        result = _(array).unique<number>(listIterator);
        result = _(array).unique<number>(listIterator, any);
        result = _(array).unique(true, 'a');
        result = _(array).unique(true, 'a', any);
        result = _(array).unique('a');
        result = _(array).unique('a', any);
        result = _(array).unique<{a: number}>(true, {a: 42});
        result = _(array).unique<{a: number}>({a: 42});

        result = _(list).unique<SampleObject>();
        result = _(list).unique<SampleObject>(true);
        result = _(list).unique<SampleObject>(true, listIterator);
        result = _(list).unique<SampleObject>(true, listIterator, any);
        result = _(list).unique<SampleObject, number>(true, listIterator);
        result = _(list).unique<SampleObject, number>(true, listIterator, any);
        result = _(list).unique<SampleObject>(listIterator);
        result = _(list).unique<SampleObject>(listIterator, any);
        result = _(list).unique<SampleObject, number>(listIterator);
        result = _(list).unique<SampleObject, number>(listIterator, any);
        result = _(list).unique<SampleObject>(true, 'a');
        result = _(list).unique<SampleObject>(true, 'a', any);
        result = _(list).unique<SampleObject>('a');
        result = _(list).unique<SampleObject>('a', any);
        result = _(list).unique<SampleObject>(true, {a: 42});
        result = _(list).unique<{a: number}, SampleObject>(true, {a: 42});
        result = _(list).unique<SampleObject>({a: 42});
        result = _(list).unique<{a: number}, SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().unique();
        result = _('abc').chain().unique(true);
        result = _('abc').chain().unique<string>(true, stringIterator);
        result = _('abc').chain().unique<string>(true, stringIterator, any);
        result = _('abc').chain().unique<string>(stringIterator);
        result = _('abc').chain().unique<string>(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().unique();
        result = _(array).chain().unique(true);
        result = _(array).chain().unique<number>(true, listIterator);
        result = _(array).chain().unique<number>(true, listIterator, any);
        result = _(array).chain().unique<number>(listIterator);
        result = _(array).chain().unique<number>(listIterator, any);
        result = _(array).chain().unique(true, 'a');
        result = _(array).chain().unique(true, 'a', any);
        result = _(array).chain().unique('a');
        result = _(array).chain().unique('a', any);
        result = _(array).chain().unique<{a: number}>(true, {a: 42});
        result = _(array).chain().unique<{a: number}>({a: 42});

        result = _(list).chain().unique<SampleObject>();
        result = _(list).chain().unique<SampleObject>(true);
        result = _(list).chain().unique<SampleObject>(true, listIterator);
        result = _(list).chain().unique<SampleObject>(true, listIterator, any);
        result = _(list).chain().unique<SampleObject, number>(true, listIterator);
        result = _(list).chain().unique<SampleObject, number>(true, listIterator, any);
        result = _(list).chain().unique<SampleObject>(listIterator);
        result = _(list).chain().unique<SampleObject>(listIterator, any);
        result = _(list).chain().unique<SampleObject, number>(listIterator);
        result = _(list).chain().unique<SampleObject, number>(listIterator, any);
        result = _(list).chain().unique<SampleObject>(true, 'a');
        result = _(list).chain().unique<SampleObject>(true, 'a', any);
        result = _(list).chain().unique<SampleObject>('a');
        result = _(list).chain().unique<SampleObject>('a', any);
        result = _(list).chain().unique<SampleObject>(true, {a: 42});
        result = _(list).chain().unique<{a: number}, SampleObject>(true, {a: 42});
        result = _(list).chain().unique<SampleObject>({a: 42});
        result = _(list).chain().unique<{a: number}, SampleObject>({a: 42});
    }
}

// _.upzip
namespace TestUnzip {
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
namespace TestWithout {
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
namespace TestXor {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[];

        result = _.xor<TResult>();

        result = _.xor<TResult>(array);
        result = _.xor<TResult>(array, list);
        result = _.xor<TResult>(array, list, array);

        result = _.xor<TResult>(list);
        result = _.xor<TResult>(list, array);
        result = _.xor<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).xor();
        result = _(array).xor(list);
        result = _(array).xor(list, array);

        result = _(list).xor<TResult>();
        result = _(list).xor<TResult>(array);
        result = _(list).xor<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().xor();
        result = _(array).chain().xor(list);
        result = _(array).chain().xor(list, array);

        result = _(list).chain().xor<TResult>();
        result = _(list).chain().xor<TResult>(array);
        result = _(list).chain().xor<TResult>(array, list);
    }
}

// _.zip
namespace TestZip {
    let array: TResult[];
    let list: _.List<TResult>;

    {
        let result: TResult[][];

        result = _.zip<TResult>(array);
        result = _.zip<TResult>(array, list);
        result = _.zip<TResult>(array, list, array);

        result = _.zip<TResult>(list);
        result = _.zip<TResult>(list, array);
        result = _.zip<TResult>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult[]>;

        result = _(array).zip<TResult>(list);
        result = _(array).zip<TResult>(list, array);

        result = _(list).zip<TResult>(array);
        result = _(list).zip<TResult>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult[]>;

        result = _(array).chain().zip<TResult>(list);
        result = _(array).chain().zip<TResult>(list, array);

        result = _(list).chain().zip<TResult>(array);
        result = _(list).chain().zip<TResult>(array, list);
    }
}

// _.zipObject
namespace TestZipObject {
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
namespace TestChain {
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
namespace TestTap {
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
namespace TestThru {
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
namespace TestCommit {
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
namespace TestConcat {
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
namespace TestPlant {
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
namespace TestReverse {
    {
        let result: _.LoDashImplicitArrayWrapper<number> = _([42]).reverse();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number> = _([42]).chain().reverse();
    }
}

// _.prototype.run
namespace TestRun {
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
namespace TestToJSON {
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
namespace TestToString {
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
namespace TestValue {
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
namespace TestValueOf {
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
namespace TestAll {
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
namespace TestAny {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[];
    let list: _.List<SampleObject>;
    let dictionary: _.Dictionary<SampleObject>;
    let numericDictionary: _.NumericDictionary<SampleObject>;
    let sampleObject: SampleObject;

    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => boolean;
    let dictionaryIterator: (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => boolean;
    let numericDictionaryIterator: (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => boolean;
    let objectIterator: (value: any, key: string, collection: any) => boolean;

    {
        let result: boolean;

        result = _.any<SampleObject>(array);
        result = _.any<SampleObject>(array, listIterator);
        result = _.any<SampleObject>(array, listIterator, any);
        result = _.any<SampleObject>(array, 'a');
        result = _.any<SampleObject>(array, 'a', 42);
        result = _.any<{a: number}, SampleObject>(array, {a: 42});

        result = _.any<SampleObject>(list);
        result = _.any<SampleObject>(list, listIterator);
        result = _.any<SampleObject>(list, listIterator, any);
        result = _.any<SampleObject>(list, 'a');
        result = _.any<SampleObject>(list, 'a', 42);
        result = _.any<{a: number}, SampleObject>(list, {a: 42});

        result = _.any<SampleObject>(dictionary);
        result = _.any<SampleObject>(dictionary, dictionaryIterator);
        result = _.any<SampleObject>(dictionary, dictionaryIterator, any);
        result = _.any<SampleObject>(dictionary, 'a');
        result = _.any<SampleObject>(dictionary, 'a', 42);
        result = _.any<{a: number}, SampleObject>(dictionary, {a: 42});

        result = _.any<SampleObject>(numericDictionary);
        result = _.any<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.any<SampleObject>(numericDictionary, numericDictionaryIterator, any);
        result = _.any<SampleObject>(numericDictionary, 'a');
        result = _.any<SampleObject>(numericDictionary, 'a', 42);
        result = _.any<{a: number}, SampleObject>(numericDictionary, {a: 42});

        result = _.any(sampleObject);
        result = _.any(sampleObject, objectIterator);
        result = _.any(sampleObject, objectIterator, any);
        result = _.any(sampleObject, 'a');
        result = _.any(sampleObject, 'a', 42);
        result = _.any<{a: number}>(sampleObject, {a: 42});

        result = _(array).any();
        result = _(array).any(listIterator);
        result = _(array).any(listIterator, any);
        result = _(array).any('a');
        result = _(array).any('a', 42);
        result = _(array).any<{a: number}>({a: 42});

        result = _(list).any<SampleObject>();
        result = _(list).any<SampleObject>(listIterator);
        result = _(list).any<SampleObject>(listIterator, any);
        result = _(list).any('a');
        result = _(list).any('a', 42);
        result = _(list).any<{a: number}>({a: 42});

        result = _(dictionary).any<SampleObject>();
        result = _(dictionary).any<SampleObject>(dictionaryIterator);
        result = _(dictionary).any<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).any('a');
        result = _(dictionary).any('a', 42);
        result = _(dictionary).any<{a: number}>({a: 42});

        result = _(numericDictionary).any<SampleObject>();
        result = _(numericDictionary).any<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).any<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).any('a');
        result = _(numericDictionary).any('a', 42);
        result = _(numericDictionary).any<{a: number}>({a: 42});

        result = _(sampleObject).any<SampleObject>();
        result = _(sampleObject).any<SampleObject>(objectIterator);
        result = _(sampleObject).any<SampleObject>(objectIterator, any);
        result = _(sampleObject).any('a');
        result = _(sampleObject).any('a', 42);
        result = _(sampleObject).any<{a: number}>({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().any();
        result = _(array).chain().any(listIterator);
        result = _(array).chain().any(listIterator, any);
        result = _(array).chain().any('a');
        result = _(array).chain().any('a', 42);
        result = _(array).chain().any<{a: number}>({a: 42});

        result = _(list).chain().any<SampleObject>();
        result = _(list).chain().any<SampleObject>(listIterator);
        result = _(list).chain().any<SampleObject>(listIterator, any);
        result = _(list).chain().any('a');
        result = _(list).chain().any('a', 42);
        result = _(list).chain().any<{a: number}>({a: 42});

        result = _(dictionary).chain().any<SampleObject>();
        result = _(dictionary).chain().any<SampleObject>(dictionaryIterator);
        result = _(dictionary).chain().any<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).chain().any('a');
        result = _(dictionary).chain().any('a', 42);
        result = _(dictionary).chain().any<{a: number}>({a: 42});

        result = _(numericDictionary).chain().any<SampleObject>();
        result = _(numericDictionary).chain().any<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().any<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).chain().any('a');
        result = _(numericDictionary).chain().any('a', 42);
        result = _(numericDictionary).chain().any<{a: number}>({a: 42});

        result = _(sampleObject).chain().any();
        result = _(sampleObject).chain().any(objectIterator);
        result = _(sampleObject).chain().any(objectIterator, any);
        result = _(sampleObject).chain().any('a');
        result = _(sampleObject).chain().any('a', 42);
        result = _(sampleObject).chain().any<{a: number}>({a: 42});
    }
}

// _.at
namespace TestAt {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    {
        let result: TResult[];

        result = _.at<TResult>(array, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<TResult>(list, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<TResult>(dictionary, 0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).at<TResult>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).at<TResult>(0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).chain().at<TResult>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).chain().at<TResult>(0, '1', [2], ['3'], [4, '5']);
    }
}

// _.collect
namespace TestCollect {
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
namespace TestContains {
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

// _.countBy
namespace TestCountBy {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;
    let numericDictionary: _.NumericDictionary<TResult>;

    let stringIterator: (value: string, index: number, collection: string) => any;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any;
    let numericDictionaryIterator: (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => any;

    {
        let result: _.Dictionary<number>;

        result = _.countBy<string>('');
        result = _.countBy<string>('', stringIterator);
        result = _.countBy<string>('', stringIterator, any);

        result = _.countBy<TResult>(array);
        result = _.countBy<TResult>(array, listIterator);
        result = _.countBy<TResult>(array, listIterator, any);
        result = _.countBy<TResult>(array, '');
        result = _.countBy<TResult>(array, '', any);
        result = _.countBy<{a: number}, TResult>(array, {a: 42});
        result = _.countBy<TResult>(array, {a: 42});

        result = _.countBy<TResult>(list);
        result = _.countBy<TResult>(list, listIterator);
        result = _.countBy<TResult>(list, listIterator, any);
        result = _.countBy<TResult>(list, '');
        result = _.countBy<TResult>(list, '', any);
        result = _.countBy<{a: number}, TResult>(list, {a: 42});
        result = _.countBy<TResult>(list, {a: 42});

        result = _.countBy<TResult>(dictionary);
        result = _.countBy<TResult>(dictionary, dictionaryIterator);
        result = _.countBy<TResult>(dictionary, dictionaryIterator, any);
        result = _.countBy<TResult>(dictionary, '');
        result = _.countBy<TResult>(dictionary, '', any);
        result = _.countBy<{a: number}, TResult>(dictionary, {a: 42});
        result = _.countBy<TResult>(dictionary, {a: 42});

        result = _.countBy<TResult>(numericDictionary);
        result = _.countBy<TResult>(numericDictionary, numericDictionaryIterator);
        result = _.countBy<TResult>(numericDictionary, numericDictionaryIterator, any);
        result = _.countBy<TResult>(numericDictionary, '');
        result = _.countBy<TResult>(numericDictionary, '', any);
        result = _.countBy<{a: number}, TResult>(numericDictionary, {a: 42});
        result = _.countBy<TResult>(numericDictionary, {a: 42});
    }

    {
        let resutl: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _('').countBy();
        result = _('').countBy(stringIterator);
        result = _('').countBy(stringIterator, any);

        result = _(array).countBy();
        result = _(array).countBy(listIterator);
        result = _(array).countBy(listIterator, any);
        result = _(array).countBy('');
        result = _(array).countBy('', any);
        result = _(array).countBy<{a: number}>({a: 42});
        result = _(array).countBy({a: 42});

        result = _(list).countBy();
        result = _(list).countBy<TResult>(listIterator);
        result = _(list).countBy<TResult>(listIterator, any);
        result = _(list).countBy('');
        result = _(list).countBy('', any);
        result = _(list).countBy<{a: number}>({a: 42});
        result = _(list).countBy({a: 42});

        result = _(dictionary).countBy();
        result = _(dictionary).countBy<TResult>(dictionaryIterator);
        result = _(dictionary).countBy<TResult>(dictionaryIterator, any);
        result = _(dictionary).countBy('');
        result = _(dictionary).countBy('', any);
        result = _(dictionary).countBy<{a: number}>({a: 42});
        result = _(dictionary).countBy({a: 42});

        result = _(numericDictionary).countBy();
        result = _(numericDictionary).countBy<TResult>(numericDictionaryIterator);
        result = _(numericDictionary).countBy<TResult>(numericDictionaryIterator, any);
        result = _(numericDictionary).countBy('');
        result = _(numericDictionary).countBy('', any);
        result = _(numericDictionary).countBy<{a: number}>({a: 42});
        result = _(numericDictionary).countBy({a: 42});
    }

    {
        let resutl: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _('').chain().countBy();
        result = _('').chain().countBy(stringIterator);
        result = _('').chain().countBy(stringIterator, any);

        result = _(array).chain().countBy();
        result = _(array).chain().countBy(listIterator);
        result = _(array).chain().countBy(listIterator, any);
        result = _(array).chain().countBy('');
        result = _(array).chain().countBy('', any);
        result = _(array).chain().countBy<{a: number}>({a: 42});
        result = _(array).chain().countBy({a: 42});

        result = _(list).chain().countBy();
        result = _(list).chain().countBy<TResult>(listIterator);
        result = _(list).chain().countBy<TResult>(listIterator, any);
        result = _(list).chain().countBy('');
        result = _(list).chain().countBy('', any);
        result = _(list).chain().countBy<{a: number}>({a: 42});
        result = _(list).chain().countBy({a: 42});

        result = _(dictionary).chain().countBy();
        result = _(dictionary).chain().countBy<TResult>(dictionaryIterator);
        result = _(dictionary).chain().countBy<TResult>(dictionaryIterator, any);
        result = _(dictionary).chain().countBy('');
        result = _(dictionary).chain().countBy('', any);
        result = _(dictionary).chain().countBy<{a: number}>({a: 42});
        result = _(dictionary).chain().countBy({a: 42});

        result = _(numericDictionary).chain().countBy();
        result = _(numericDictionary).chain().countBy<TResult>(numericDictionaryIterator);
        result = _(numericDictionary).chain().countBy<TResult>(numericDictionaryIterator, any);
        result = _(numericDictionary).chain().countBy('');
        result = _(numericDictionary).chain().countBy('', any);
        result = _(numericDictionary).chain().countBy<{a: number}>({a: 42});
        result = _(numericDictionary).chain().countBy({a: 42});
    }
}

// _.detect
namespace TestDetect {
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
namespace TestEach {
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
namespace TestEachRight {
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
namespace TestEvery {
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
namespace TestFilter {
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
namespace TestFind {
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

result = <number>_.findWhere([1, 2, 3, 4], num => num % 2 == 0);
result = <IFoodCombined>_.findWhere(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findWhere(foodsCombined, 'organic');

result = <number>_.findLast([1, 2, 3, 4], num => num % 2 == 0);
result = <IFoodCombined>_.findLast(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findLast(foodsCombined, 'organic');

result = <number>_([1, 2, 3, 4]).findLast(num => num % 2 == 0);
result = <IFoodCombined>_(foodsCombined).findLast({ 'type': 'vegetable' });
result = <IFoodCombined>_(foodsCombined).findLast('organic');

// _.forEach
namespace TestForEach {
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
namespace TestForEachRight {
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

// _.groupBy
namespace TestGroupBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[];
    let list: _.List<SampleType>;
    let dictionary: _.Dictionary<SampleType>;

    let stringIterator: (char: string, index: number, string: string) => number;
    let listIterator: (value: SampleType, index: number, collection: _.List<SampleType>) => number;
    let dictionaryIterator: (value: SampleType, key: string, collection: _.Dictionary<SampleType>) => number;

    {
        let result: _.Dictionary<string[]>;

        result = _.groupBy<string>('');
        result = _.groupBy<string>('', stringIterator);
        result = _.groupBy<string>('', stringIterator, any);
        result = _.groupBy<string, number>('', stringIterator);
        result = _.groupBy<string, number>('', stringIterator, any);
    }

    {
        let result: _.Dictionary<SampleType[]>;

        result = _.groupBy<SampleType>(array);
        result = _.groupBy<SampleType>(array, listIterator);
        result = _.groupBy<SampleType>(array, listIterator, any);
        result = _.groupBy<SampleType>(array, '');
        result = _.groupBy<SampleType>(array, '', any);
        result = _.groupBy<SampleType>(array, {a: 42});

        result = _.groupBy<SampleType, number>(array, listIterator);
        result = _.groupBy<SampleType, number>(array, listIterator, any);
        result = _.groupBy<SampleType, boolean>(array, '', true);
        result = _.groupBy<{a: number}, SampleType>(array, {a: 42});

        result = _.groupBy<SampleType>(list);
        result = _.groupBy<SampleType>(list, listIterator);
        result = _.groupBy<SampleType>(list, listIterator, any);
        result = _.groupBy<SampleType>(list, '');
        result = _.groupBy<SampleType>(list, '', any);
        result = _.groupBy<SampleType>(list, {a: 42});

        result = _.groupBy<SampleType, number>(list, listIterator);
        result = _.groupBy<SampleType, number>(list, listIterator, any);
        result = _.groupBy<SampleType, boolean>(list, '', true);
        result = _.groupBy<{a: number}, SampleType>(list, {a: 42});

        result = _.groupBy<SampleType>(dictionary);
        result = _.groupBy<SampleType>(dictionary, dictionaryIterator);
        result = _.groupBy<SampleType>(dictionary, dictionaryIterator, any);
        result = _.groupBy<SampleType>(dictionary, '');
        result = _.groupBy<SampleType>(dictionary, '', any);
        result = _.groupBy<SampleType>(dictionary, {a: 42});

        result = _.groupBy<SampleType, number>(dictionary, dictionaryIterator);
        result = _.groupBy<SampleType, number>(dictionary, dictionaryIterator, any);
        result = _.groupBy<SampleType, boolean>(dictionary, '', true);
        result = _.groupBy<{a: number}, SampleType>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('').groupBy();
        result = _('').groupBy<number>(stringIterator);
        result = _('').groupBy<number>(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<SampleType[]>>;

        result = _(array).groupBy();
        result = _(array).groupBy<number>(listIterator);
        result = _(array).groupBy<number>(listIterator, any);
        result = _(array).groupBy('');
        result = _(array).groupBy<boolean>('', true);
        result = _(array).groupBy<{a: number}>({a: 42});

        result = _(list).groupBy<SampleType>();
        result = _(list).groupBy<SampleType>(listIterator);
        result = _(list).groupBy<SampleType>(listIterator, any);
        result = _(list).groupBy<SampleType>('');
        result = _(list).groupBy<SampleType>('', any);
        result = _(list).groupBy<SampleType>({a: 42});

        result = _(list).groupBy<SampleType, number>(listIterator);
        result = _(list).groupBy<SampleType, number>(listIterator, any);
        result = _(list).groupBy<SampleType, boolean>('', true);
        result = _(list).groupBy<{a: number}, SampleType>({a: 42});

        result = _(dictionary).groupBy<SampleType>();
        result = _(dictionary).groupBy<SampleType>(dictionaryIterator);
        result = _(dictionary).groupBy<SampleType>(dictionaryIterator, any);
        result = _(dictionary).groupBy<SampleType>('');
        result = _(dictionary).groupBy<SampleType>('', any);
        result = _(dictionary).groupBy<SampleType>({a: 42});

        result = _(dictionary).groupBy<SampleType, number>(dictionaryIterator);
        result = _(dictionary).groupBy<SampleType, number>(dictionaryIterator, any);
        result = _(dictionary).groupBy<SampleType, boolean>('', true);
        result = _(dictionary).groupBy<{a: number}, SampleType>({a: 42});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('').chain().groupBy();
        result = _('').chain().groupBy<number>(stringIterator);
        result = _('').chain().groupBy<number>(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<SampleType[]>>;

        result = _(array).chain().groupBy();
        result = _(array).chain().groupBy<number>(listIterator);
        result = _(array).chain().groupBy<number>(listIterator, any);
        result = _(array).chain().groupBy('');
        result = _(array).chain().groupBy<boolean>('', true);
        result = _(array).chain().groupBy<{a: number}>({a: 42});

        result = _(list).chain().groupBy<SampleType>();
        result = _(list).chain().groupBy<SampleType>(listIterator);
        result = _(list).chain().groupBy<SampleType>(listIterator, any);
        result = _(list).chain().groupBy<SampleType>('');
        result = _(list).chain().groupBy<SampleType>('', any);
        result = _(list).chain().groupBy<SampleType>({a: 42});

        result = _(list).chain().groupBy<SampleType, number>(listIterator);
        result = _(list).chain().groupBy<SampleType, number>(listIterator, any);
        result = _(list).chain().groupBy<SampleType, boolean>('', true);
        result = _(list).chain().groupBy<{a: number}, SampleType>({a: 42});

        result = _(dictionary).chain().groupBy<SampleType>();
        result = _(dictionary).chain().groupBy<SampleType>(dictionaryIterator);
        result = _(dictionary).chain().groupBy<SampleType>(dictionaryIterator, any);
        result = _(dictionary).chain().groupBy<SampleType>('');
        result = _(dictionary).chain().groupBy<SampleType>('', any);
        result = _(dictionary).chain().groupBy<SampleType>({a: 42});

        result = _(dictionary).chain().groupBy<SampleType, number>(dictionaryIterator);
        result = _(dictionary).chain().groupBy<SampleType, number>(dictionaryIterator, any);
        result = _(dictionary).chain().groupBy<SampleType, boolean>('', true);
        result = _(dictionary).chain().groupBy<{a: number}, SampleType>({a: 42});
    }
}

// _.include
namespace TestInclude {
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
namespace TestIncludes {
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

// _.indexBy
namespace TestIndexBy {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[];
    let list: _.List<SampleObject>;
    let dictionary: _.Dictionary<SampleObject>;
    let numericDictionary: _.NumericDictionary<SampleObject>;

    let stringIterator: (value: string, index: number, collection: string) => any;
    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => any;
    let dictionaryIterator: (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => any;
    let numericDictionaryIterator: (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => any;

    {
        let result: _.Dictionary<string>;

        result = _.indexBy<string>('abcd');
        result = _.indexBy<string>('abcd', stringIterator);
        result = _.indexBy<string>('abcd', stringIterator, any);
    }

    {
        let result: _.Dictionary<SampleObject>;

        result = _.indexBy<SampleObject>(array);
        result = _.indexBy<SampleObject>(array, listIterator);
        result = _.indexBy<SampleObject>(array, listIterator, any);
        result = _.indexBy<SampleObject>(array, 'a');
        result = _.indexBy<SampleObject>(array, 'a', any);
        result = _.indexBy<{a: number}, SampleObject>(array, {a: 42});
        result = _.indexBy<SampleObject>(array, {a: 42});

        result = _.indexBy<SampleObject>(list);
        result = _.indexBy<SampleObject>(list, listIterator);
        result = _.indexBy<SampleObject>(list, listIterator, any);
        result = _.indexBy<SampleObject>(list, 'a');
        result = _.indexBy<SampleObject>(list, 'a', any);
        result = _.indexBy<{a: number}, SampleObject>(list, {a: 42});
        result = _.indexBy<SampleObject>(list, {a: 42});

        result = _.indexBy<SampleObject>(numericDictionary);
        result = _.indexBy<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.indexBy<SampleObject>(numericDictionary, numericDictionaryIterator, any);
        result = _.indexBy<SampleObject>(numericDictionary, 'a');
        result = _.indexBy<SampleObject>(numericDictionary, 'a', any);
        result = _.indexBy<{a: number}, SampleObject>(numericDictionary, {a: 42});
        result = _.indexBy<SampleObject>(numericDictionary, {a: 42});

        result = _.indexBy<SampleObject>(dictionary);
        result = _.indexBy<SampleObject>(dictionary, dictionaryIterator);
        result = _.indexBy<SampleObject>(dictionary, dictionaryIterator, any);
        result = _.indexBy<SampleObject>(dictionary, 'a');
        result = _.indexBy<SampleObject>(dictionary, 'a', any);
        result = _.indexBy<{a: number}, SampleObject>(dictionary, {a: 42});
        result = _.indexBy<SampleObject>(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string>>;

        result = _('abcd').indexBy();
        result = _('abcd').indexBy(stringIterator);
        result = _('abcd').indexBy(stringIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<SampleObject>>;

        result = _(array).indexBy();
        result = _(array).indexBy(listIterator);
        result = _(array).indexBy(listIterator, any);
        result = _(array).indexBy('a');
        result = _(array).indexBy('a', any);
        result = _(array).indexBy<{a: number}>({a: 42});

        result = _(list).indexBy<SampleObject>();
        result = _(list).indexBy<SampleObject>(listIterator);
        result = _(list).indexBy<SampleObject>(listIterator, any);
        result = _(list).indexBy<SampleObject>('a');
        result = _(list).indexBy<SampleObject>('a', any);
        result = _(list).indexBy<{a: number}, SampleObject>({a: 42});
        result = _(list).indexBy<SampleObject>({a: 42});

        result = _(numericDictionary).indexBy<SampleObject>();
        result = _(numericDictionary).indexBy<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).indexBy<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).indexBy<SampleObject>('a');
        result = _(numericDictionary).indexBy<SampleObject>('a', any);
        result = _(numericDictionary).indexBy<{a: number}, SampleObject>({a: 42});
        result = _(numericDictionary).indexBy<SampleObject>({a: 42});

        result = _(dictionary).indexBy<SampleObject>();
        result = _(dictionary).indexBy<SampleObject>(dictionaryIterator);
        result = _(dictionary).indexBy<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).indexBy<SampleObject>('a');
        result = _(dictionary).indexBy<SampleObject>('a', any);
        result = _(dictionary).indexBy<{a: number}, SampleObject>({a: 42});
        result = _(dictionary).indexBy<SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string>>;

        result = _('abcd').chain().indexBy();
        result = _('abcd').chain().indexBy(stringIterator);
        result = _('abcd').chain().indexBy(stringIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<SampleObject>>;

        result = _(array).chain().indexBy();
        result = _(array).chain().indexBy(listIterator);
        result = _(array).chain().indexBy(listIterator, any);
        result = _(array).chain().indexBy('a');
        result = _(array).chain().indexBy('a', any);
        result = _(array).chain().indexBy<{a: number}>({a: 42});

        result = _(list).chain().indexBy<SampleObject>();
        result = _(list).chain().indexBy<SampleObject>(listIterator);
        result = _(list).chain().indexBy<SampleObject>(listIterator, any);
        result = _(list).chain().indexBy<SampleObject>('a');
        result = _(list).chain().indexBy<SampleObject>('a', any);
        result = _(list).chain().indexBy<{a: number}, SampleObject>({a: 42});
        result = _(list).chain().indexBy<SampleObject>({a: 42});

        result = _(numericDictionary).chain().indexBy<SampleObject>();
        result = _(numericDictionary).chain().indexBy<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().indexBy<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).chain().indexBy<SampleObject>('a');
        result = _(numericDictionary).chain().indexBy<SampleObject>('a', any);
        result = _(numericDictionary).chain().indexBy<{a: number}, SampleObject>({a: 42});
        result = _(numericDictionary).chain().indexBy<SampleObject>({a: 42});

        result = _(dictionary).chain().indexBy<SampleObject>();
        result = _(dictionary).chain().indexBy<SampleObject>(dictionaryIterator);
        result = _(dictionary).chain().indexBy<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).chain().indexBy<SampleObject>('a');
        result = _(dictionary).chain().indexBy<SampleObject>('a', any);
        result = _(dictionary).chain().indexBy<{a: number}, SampleObject>({a: 42});
        result = _(dictionary).chain().indexBy<SampleObject>({a: 42});
    }
}

result = <number[][]>_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
result = <string[][]>_.invoke([123, 456], String.prototype.split, '');

// _.map
namespace TestMap {
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
namespace TestPluck {
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

result = <number>_.reduce<number, number>([1, 2, 3], (sum: number, num: number) => sum + num);
result = <ABC>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, (r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.foldl([1, 2, 3], (sum: number, num: number) => sum + num);
result = <ABC>_.foldl({ 'a': 1, 'b': 2, 'c': 3 }, (r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_.inject([1, 2, 3], (sum: number, num: number) => sum + num);
result = <ABC>_.inject({ 'a': 1, 'b': 2, 'c': 3 },  (r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).reduce<number>((sum: number, num: number) => sum + num);
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).reduce<number, ABC>((r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).foldl<number>((sum: number, num: number) => sum + num);
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).foldl<number, ABC>((r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number>_([1, 2, 3]).inject<number>((sum: number, num: number) => sum + num);
result = <ABC>_({ 'a': 1, 'b': 2, 'c': 3 }).inject<number, ABC>((r: ABC, num: number, key: string) => {
    r[key] = num * 3;
    return r;
}, {});

result = <number[]>_.reduceRight([[0, 1], [2, 3], [4, 5]], (a: number[], b: number[]) => a.concat(b), <number[]>[]);
result = <number[]>_.foldr([[0, 1], [2, 3], [4, 5]], (a: number[], b: number[]) => a.concat(b), <number[]>[]);

// _.reject
namespace TestReject {
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

// _.select
namespace TestSelect {
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

// _.sample
namespace TestSample {
    let array: string[];
    let list: _.List<string>;
    let dictionary: _.Dictionary<string>;
    let numericDictionary: _.NumericDictionary<string>;

    {
        let result: string;

        result = _.sample('abc');
        result = _.sample(array);
        result = _.sample(list);
        result = _.sample(dictionary);
        result = _.sample(numericDictionary);
        result = _.sample<{a: string}, string>({a: 'foo'});
        result = _.sample<string>({a: 'foo'});

        result = _('abc').sample();
        result = _(array).sample();
        result = _(list).sample<string>();
        result = _(dictionary).sample<string>();
        result = _(numericDictionary).sample<string>();
        result = _({a: 'foo'}).sample<string>();
    }

    {
        let result: string[];

        result = _.sample('abc', 42);
        result = _.sample(array, 42);
        result = _.sample(list, 42);
        result = _.sample(dictionary, 42);
        result = _.sample(numericDictionary, 42);
        result = _.sample<{a: string}, string>({a: 'foo'}, 42);
        result = _.sample<string>({a: 'foo'}, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').sample(42);
        result = _(array).sample(42);
        result = _(list).sample<string>(42);
        result = _(dictionary).sample<string>(42);
        result = _(numericDictionary).sample<string>(42);
        result = _({a: 'foo'}).sample<string>(42);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().sample();
        result = _(array).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(list).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(dictionary).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _(numericDictionary).chain().sample<_.LoDashExplicitWrapper<string>>();
        result = _({a: 'foo'}).chain().sample<_.LoDashExplicitWrapper<string>>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().sample(42);
        result = _(array).chain().sample(42);
        result = _(list).chain().sample<string>(42);
        result = _(dictionary).chain().sample<string>(42);
        result = _(numericDictionary).chain().sample<string>(42);
        result = _({a: 'foo'}).chain().sample<string>(42);
    }
}

// _.shuffle
namespace TestShuffle {
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
namespace TestSize {
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
namespace TestSome {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[];
    let list: _.List<SampleObject>;
    let dictionary: _.Dictionary<SampleObject>;
    let numericDictionary: _.NumericDictionary<SampleObject>;
    let sampleObject: SampleObject;

    let listIterator: (value: SampleObject, index: number, collection: _.List<SampleObject>) => boolean;
    let dictionaryIterator: (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => boolean;
    let numericDictionaryIterator: (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => boolean;
    let objectIterator: (value: any, key: string, collection: any) => boolean;

    {
        let result: boolean;

        result = _.some<SampleObject>(array);
        result = _.some<SampleObject>(array, listIterator);
        result = _.some<SampleObject>(array, listIterator, any);
        result = _.some<SampleObject>(array, 'a');
        result = _.some<SampleObject>(array, 'a', 42);
        result = _.some<{a: number}, SampleObject>(array, {a: 42});

        result = _.some<SampleObject>(list);
        result = _.some<SampleObject>(list, listIterator);
        result = _.some<SampleObject>(list, listIterator, any);
        result = _.some<SampleObject>(list, 'a');
        result = _.some<SampleObject>(list, 'a', 42);
        result = _.some<{a: number}, SampleObject>(list, {a: 42});

        result = _.some<SampleObject>(dictionary);
        result = _.some<SampleObject>(dictionary, dictionaryIterator);
        result = _.some<SampleObject>(dictionary, dictionaryIterator, any);
        result = _.some<SampleObject>(dictionary, 'a');
        result = _.some<SampleObject>(dictionary, 'a', 42);
        result = _.some<{a: number}, SampleObject>(dictionary, {a: 42});

        result = _.some<SampleObject>(numericDictionary);
        result = _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.some<SampleObject>(numericDictionary, numericDictionaryIterator, any);
        result = _.some<SampleObject>(numericDictionary, 'a');
        result = _.some<SampleObject>(numericDictionary, 'a', 42);
        result = _.some<{a: number}, SampleObject>(numericDictionary, {a: 42});

        result = _.some(sampleObject);
        result = _.some(sampleObject, objectIterator);
        result = _.some(sampleObject, objectIterator, any);
        result = _.some(sampleObject, 'a');
        result = _.some(sampleObject, 'a', 42);
        result = _.some<{a: number}>(sampleObject, {a: 42});

        result = _(array).some();
        result = _(array).some(listIterator);
        result = _(array).some(listIterator, any);
        result = _(array).some('a');
        result = _(array).some('a', 42);
        result = _(array).some<{a: number}>({a: 42});

        result = _(list).some<SampleObject>();
        result = _(list).some<SampleObject>(listIterator);
        result = _(list).some<SampleObject>(listIterator, any);
        result = _(list).some('a');
        result = _(list).some('a', 42);
        result = _(list).some<{a: number}>({a: 42});

        result = _(dictionary).some<SampleObject>();
        result = _(dictionary).some<SampleObject>(dictionaryIterator);
        result = _(dictionary).some<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).some('a');
        result = _(dictionary).some('a', 42);
        result = _(dictionary).some<{a: number}>({a: 42});

        result = _(numericDictionary).some<SampleObject>();
        result = _(numericDictionary).some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).some<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).some('a');
        result = _(numericDictionary).some('a', 42);
        result = _(numericDictionary).some<{a: number}>({a: 42});

        result = _(sampleObject).some<SampleObject>();
        result = _(sampleObject).some<SampleObject>(objectIterator);
        result = _(sampleObject).some<SampleObject>(objectIterator, any);
        result = _(sampleObject).some('a');
        result = _(sampleObject).some('a', 42);
        result = _(sampleObject).some<{a: number}>({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().some();
        result = _(array).chain().some(listIterator);
        result = _(array).chain().some(listIterator, any);
        result = _(array).chain().some('a');
        result = _(array).chain().some('a', 42);
        result = _(array).chain().some<{a: number}>({a: 42});

        result = _(list).chain().some<SampleObject>();
        result = _(list).chain().some<SampleObject>(listIterator);
        result = _(list).chain().some<SampleObject>(listIterator, any);
        result = _(list).chain().some('a');
        result = _(list).chain().some('a', 42);
        result = _(list).chain().some<{a: number}>({a: 42});

        result = _(dictionary).chain().some<SampleObject>();
        result = _(dictionary).chain().some<SampleObject>(dictionaryIterator);
        result = _(dictionary).chain().some<SampleObject>(dictionaryIterator, any);
        result = _(dictionary).chain().some('a');
        result = _(dictionary).chain().some('a', 42);
        result = _(dictionary).chain().some<{a: number}>({a: 42});

        result = _(numericDictionary).chain().some<SampleObject>();
        result = _(numericDictionary).chain().some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().some<SampleObject>(numericDictionaryIterator, any);
        result = _(numericDictionary).chain().some('a');
        result = _(numericDictionary).chain().some('a', 42);
        result = _(numericDictionary).chain().some<{a: number}>({a: 42});

        result = _(sampleObject).chain().some();
        result = _(sampleObject).chain().some(objectIterator);
        result = _(sampleObject).chain().some(objectIterator, any);
        result = _(sampleObject).chain().some('a');
        result = _(sampleObject).chain().some('a', 42);
        result = _(sampleObject).chain().some<{a: number}>({a: 42});
    }
}

// _.sortBy
namespace TestSortBy {
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

result = <IStoogesAge[]>_.sortByAll(stoogesAges, (stooge) => Math.sin(stooge.age), (stooge) => stooge.name.slice(1));
result = <IStoogesAge[]>_.sortByAll(stoogesAges, ['name', 'age']);
result = <IStoogesAge[]>_.sortByAll(stoogesAges, 'name', (stooge) => Math.sin(stooge.age));

result = <IFoodOrganic[]>_(foodsOrganic).sortByAll('organic', (food) => food.name, { organic: true }).value();

// _.sortByOrder
namespace TestSortByOrder {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[];
    let list: _.List<SampleObject>;
    let numericDictionary: _.NumericDictionary<SampleObject>;
    let dictionary: _.Dictionary<SampleObject>;
    let orders: boolean|string|(boolean|string)[];

    {
        let iteratees: (value: string) => any|((value: string) => any)[];
        let result: string[];

        result = _.sortByOrder<string>('acbd', iteratees);
        result = _.sortByOrder<string>('acbd', iteratees, orders);
    }

    {
        let iteratees: (value: SampleObject) => any|string|{a: number}|((value: SampleObject) => any|string|{a: number})[];
        let result: SampleObject[];

        result = _.sortByOrder<{a: number}, SampleObject>(array, iteratees);
        result = _.sortByOrder<{a: number}, SampleObject>(array, iteratees, orders);
        result = _.sortByOrder<SampleObject>(array, iteratees);
        result = _.sortByOrder<SampleObject>(array, iteratees, orders);

        result = _.sortByOrder<{a: number}, SampleObject>(list, iteratees);
        result = _.sortByOrder<{a: number}, SampleObject>(list, iteratees, orders);
        result = _.sortByOrder<SampleObject>(list, iteratees);
        result = _.sortByOrder<SampleObject>(list, iteratees, orders);

        result = _.sortByOrder<{a: number}, SampleObject>(numericDictionary, iteratees);
        result = _.sortByOrder<{a: number}, SampleObject>(numericDictionary, iteratees, orders);
        result = _.sortByOrder<SampleObject>(numericDictionary, iteratees);
        result = _.sortByOrder<SampleObject>(numericDictionary, iteratees, orders);

        result = _.sortByOrder<{a: number}, SampleObject>(dictionary, iteratees);
        result = _.sortByOrder<{a: number}, SampleObject>(dictionary, iteratees, orders);
        result = _.sortByOrder<SampleObject>(dictionary, iteratees);
        result = _.sortByOrder<SampleObject>(dictionary, iteratees, orders);
    }

    {
        let iteratees: (value: SampleObject) => any|string|{a: number}|((value: SampleObject) => any|string|{a: number})[];
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).sortByOrder<{a: number}>(iteratees);
        result = _(array).sortByOrder<{a: number}>(iteratees, orders);

        result = _(list).sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(list).sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(list).sortByOrder<SampleObject>(iteratees);
        result = _(list).sortByOrder<SampleObject>(iteratees, orders);

        result = _(numericDictionary).sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(numericDictionary).sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(numericDictionary).sortByOrder<SampleObject>(iteratees);
        result = _(numericDictionary).sortByOrder<SampleObject>(iteratees, orders);

        result = _(dictionary).sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(dictionary).sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(dictionary).sortByOrder<SampleObject>(iteratees);
        result = _(dictionary).sortByOrder<SampleObject>(iteratees, orders);
    }

    {
        let iteratees: (value: SampleObject) => any|string|{a: number}|((value: SampleObject) => any|string|{a: number})[];
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().sortByOrder<{a: number}>(iteratees);
        result = _(array).chain().sortByOrder<{a: number}>(iteratees, orders);

        result = _(list).chain().sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(list).chain().sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(list).chain().sortByOrder<SampleObject>(iteratees);
        result = _(list).chain().sortByOrder<SampleObject>(iteratees, orders);

        result = _(numericDictionary).chain().sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(numericDictionary).chain().sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(numericDictionary).chain().sortByOrder<SampleObject>(iteratees);
        result = _(numericDictionary).chain().sortByOrder<SampleObject>(iteratees, orders);

        result = _(dictionary).chain().sortByOrder<{a: number}, SampleObject>(iteratees);
        result = _(dictionary).chain().sortByOrder<{a: number}, SampleObject>(iteratees, orders);
        result = _(dictionary).chain().sortByOrder<SampleObject>(iteratees);
        result = _(dictionary).chain().sortByOrder<SampleObject>(iteratees, orders);
    }
}

result = <IStoogesCombined[]>_.where(stoogesCombined, { 'age': 40 });
result = <IStoogesCombined[]>_.where(stoogesCombined, { 'quotes': ['Poifect!'] });

result = <IStoogesCombined[]>_(stoogesCombined).where({ 'age': 40 }).value();
result = <IStoogesCombined[]>_(stoogesCombined).where({ 'quotes': ['Poifect!'] }).value();

/********
 * Date *
 ********/

namespace TestNow {
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
namespace TestAfter {
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
namespace TestAry {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc;

    {
        let result: SampleFunc;

        result = _.ary<SampleFunc>(func);
        result = _.ary<SampleFunc>(func, 2);
        result = _.ary<SampleFunc, SampleFunc>(func);
        result = _.ary<SampleFunc, SampleFunc>(func, 2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleFunc>;

        result = _(func).ary<SampleFunc>();
        result = _(func).ary<SampleFunc>(2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleFunc>;

        result = _(func).chain().ary<SampleFunc>();
        result = _(func).chain().ary<SampleFunc>(2);
    }
}

// _.backflow
namespace TestBackflow {
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
namespace TestBefore {
    interface Func {
        (a: string, b: number): boolean;
    }

    let func: Func;

    {
        let result: Func;

        _.before(42, func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        _(42).before(func);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        _(42).chain().before(func);
    }
}

// _.bind
namespace TestBind {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any);
        result = _.bind<SampleResult>(func, any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any, 42);
        result = _.bind<SampleResult>(func, any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bind<SampleFunc, SampleResult>(func, any, 42, '');
        result = _.bind<SampleResult>(func, any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind<SampleResult>(any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind<SampleResult>(any, 42, '');
    }
}

// _.bindAll
namespace TestBindAll {
    interface SampleObject {
        a: Function;
        b: Function;
        c: Function;
    }

    let object: SampleObject;

    {
        let result: SampleObject;

        result = _.bindAll<SampleObject>(object);
        result = _.bindAll<SampleObject>(object, 'c');
        result = _.bindAll<SampleObject>(object, ['b'], 'c');
        result = _.bindAll<SampleObject>(object, 'a', ['b'], 'c');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleObject>;

        result = _(object).bindAll();
        result = _(object).bindAll('c');
        result = _(object).bindAll(['b'], 'c');
        result = _(object).bindAll('a', ['b'], 'c');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleObject>;

        result = _(object).chain().bindAll();
        result = _(object).chain().bindAll('c');
        result = _(object).chain().bindAll(['b'], 'c');
        result = _(object).chain().bindAll('a', ['b'], 'c');
    }
}

// _.bindKey
namespace TestBindKey {
    let object: {
        foo: (a: number, b: string) => boolean;
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo');
        result = _.bindKey<SampleResult>(object, 'foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo', 42);
        result = _.bindKey<SampleResult>(object, 'foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bindKey<Object, SampleResult>(object, 'foo', 42, '');
        result = _.bindKey<SampleResult>(object, 'foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey<SampleResult>('foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey<SampleResult>('foo', 42, '');
    }
}

// _.compose
namespace TestCompose {
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

// _.debounce
namespace TestDebounce {
    interface SampleFunc {
        (n: number, s: string): boolean;
    }

    interface Options {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
    }

    let func: SampleFunc;
    let options: Options;

    {
        let result: ResultFunc;

        result = _.debounce<SampleFunc>(func);
        result = _.debounce<SampleFunc>(func, 42);
        result = _.debounce<SampleFunc>(func, 42, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).debounce();
        result = _(func).debounce(42);
        result = _(func).debounce(42, options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().debounce();
        result = _(func).chain().debounce(42);
        result = _(func).chain().debounce(42, options);
    }
}

// _.defer
namespace TestDefer {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc;

    {
        let result: number;

        result = _.defer<SampleFunc>(func);
        result = _.defer<SampleFunc>(func, any);
        result = _.defer<SampleFunc>(func, any, any);
        result = _.defer<SampleFunc>(func, any, any, any);
    }

    {
        let result: _.LoDashImplicitWrapper<number>;

        result = _(func).defer();
        result = _(func).defer(any);
        result = _(func).defer(any, any);
        result = _(func).defer(any, any, any);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(func).chain().defer();
        result = _(func).chain().defer(any);
        result = _(func).chain().defer(any, any);
        result = _(func).chain().defer(any, any, any);
    }
}

// _.delay
namespace TestDelay {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc;

    {
        let result: number;

        result = _.delay<SampleFunc>(func, 1);
        result = _.delay<SampleFunc>(func, 1, 2);
        result = _.delay<SampleFunc>(func, 1, 2, '');
    }

    {
        let result: _.LoDashImplicitWrapper<number>;

        result = _(func).delay(1);
        result = _(func).delay(1, 2);
        result = _(func).delay(1, 2, '');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(func).chain().delay(1);
        result = _(func).chain().delay(1, 2);
        result = _(func).chain().delay(1, 2, '');
    }
}

// _.flow
namespace TestFlow {
    let Fn1: (n: number) => number;
    let Fn2: (m: number, n: number) => number;

    {
        let result: (m: number, n: number) => number;

        result = _.flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _.flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
        result = _.flow<(m: number, n: number) => number>(Fn1, Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn2);
        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn1, Fn2);
        result = _(Fn1).chain().flow<(m: number, n: number) => number>(Fn1, Fn1, Fn2);
    }
}

// _.flowRight
namespace TestFlowRight {
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
namespace TestMemoize {
    {
        let memoizedFunction: _.MemoizedFunction;
        let cache: _.MapCache = memoizedFunction.cache;
    }

    interface MemoizedResultFn extends _.MemoizedFunction {
        (a1: string, a2: number): boolean;
    }

    let memoizeFn: (a1: string, a2: number) => boolean;
    let memoizeResolverFn: (a1: string, a2: number) => string;

    {
        let result: MemoizedResultFn;

        result = _.memoize(memoizeFn);
        result = _.memoize(memoizeFn, memoizeResolverFn);

        result('foo', 1);
        result.cache.get('foo1');
    }

    {
        let result: _.LoDashImplicitObjectWrapper<MemoizedResultFn>;

        result = _(memoizeFn).memoize();
        result = _(memoizeFn).memoize(memoizeResolverFn);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<MemoizedResultFn>;

        result = _(memoizeFn).chain().memoize();
        result = _(memoizeFn).chain().memoize(memoizeResolverFn);
    }

    _.memoize.Cache = {
        delete: key => false,
        get: key => undefined,
        has: key => false,
        set(key, value) { return this; }
    };
}

// _.modArgs
namespace TestModArgs {
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
namespace TestNegate {
    interface PredicateFn {
        (a1: number, a2: number): boolean;
    }

    interface ResultFn {
        (a1: number, a2: number): boolean;
    }

    var predicate = (a1: number, a2: number) => a1 > a2;

    {
        let result: ResultFn;

        result = _.negate<PredicateFn>(predicate);
        result = _.negate<PredicateFn, ResultFn>(predicate);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFn>;

        result = _(predicate).negate();
        result = _(predicate).negate<ResultFn>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFn>;

        result = _(predicate).chain().negate();
        result = _(predicate).chain().negate<ResultFn>();
    }
}

// _.once
namespace TestOnce {
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

var greetPartial = (greeting: string, name: string) => greeting + ' ' + name;
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
namespace TestRestParam {
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
namespace TestSpread {
    type SampleFunc = (args: (number|string)[]) => boolean;
    type SampleResult = (a: number, b: string) => boolean;

    let func: SampleFunc;

    {
        let result: SampleResult;

        result = _.spread<SampleFunc, SampleResult>(func);
        result = _.spread<SampleResult>(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).spread<SampleResult>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().spread<SampleResult>();
    }
}

// _.throttle
namespace TestThrottle {
    interface SampleFunc {
        (n: number, s: string): boolean;
    }

    interface Options {
        leading?: boolean;
        trailing?: boolean;
    }

    interface ResultFunc {
        (n: number, s: string): boolean;
        cancel(): void;
    }

    let func: SampleFunc;
    let options: Options;

    {
        let result: ResultFunc;

        result = _.throttle<SampleFunc>(func);
        result = _.throttle<SampleFunc>(func, 42);
        result = _.throttle<SampleFunc>(func, 42, options);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).throttle();
        result = _(func).throttle(42);
        result = _(func).throttle(42, options);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().throttle();
        result = _(func).chain().throttle(42);
        result = _(func).chain().throttle(42, options);
    }
}

// _.wrap
namespace TestWrap {
    type SampleValue = {a: number; b: string; c: boolean}
    type SampleResult = (arg2: number, arg3: string) => boolean;

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue;
        let wrapper: SampleWrapper;
        let result: SampleResult;

        result = _.wrap<SampleValue, SampleWrapper, SampleResult>(value, wrapper);
        result = _.wrap<SampleValue, SampleResult>(value, wrapper);
        result = _.wrap<SampleResult>(value, wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value: number;
        let wrapper: SampleWrapper;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[];
        let wrapper: SampleWrapper;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue;
        let wrapper: SampleWrapper;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value: number;
        let wrapper: SampleWrapper;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[];
        let wrapper: SampleWrapper;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue;
        let wrapper: SampleWrapper;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap<SampleWrapper, SampleResult>(wrapper);
        result = _(value).chain().wrap<SampleResult>(wrapper);
    }
}

/********
 * Lang *
 ********/

// _.clone
namespace TestClone {
    interface CloneCustomizer<V, R> {
        (value: V): R;
    }

    {
        let customizer: CloneCustomizer<number, number>;
        let result: number;

        result = _.clone(42);
        result = _.clone(42, false);
        result = _(42).clone();
        result = _(42).clone(false);
    }

    {
        let customizer: CloneCustomizer<number, number>;
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().clone();
        result = _(42).chain().clone(false);
    }

    {
        let customizer: CloneCustomizer<number, string>;
        let result: string;

        result = _.clone<string>(42, false, customizer);
        result = _.clone<string>(42, false, customizer, any);
        result = _.clone<string>(42, customizer);
        result = _.clone<string>(42, customizer, any);
        result = _.clone<number, string>(42, false, customizer);
        result = _.clone<number, string>(42, false, customizer, any);
        result = _.clone<number, string>(42, customizer);
        result = _.clone<number, string>(42, customizer, any);
        result = _(42).clone<string>(false, customizer);
        result = _(42).clone<string>(false, customizer, any);
        result = _(42).clone<string>(customizer);
        result = _(42).clone<string>(customizer, any);
    }

    {
        let customizer: CloneCustomizer<number, string>;
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().clone<string>(false, customizer);
        result = _(42).chain().clone<string>(false, customizer, any);
        result = _(42).chain().clone<string>(customizer);
        result = _(42).chain().clone<string>(customizer, any);
    }

    {
        let customizer: CloneCustomizer<number[], number[]>;
        let result: number[];

        result = _.clone([42]);
        result = _.clone([42], false);
        result = _([42]).clone();
        result = _([42]).clone(false);
    }

    {
        let customizer: CloneCustomizer<number[], number[]>;
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([42]).chain().clone();
        result = _([42]).chain().clone(false);
    }

    {
        let customizer: CloneCustomizer<number[], string[]>;
        let result: string[];

        result = _.clone<string[]>([42], false, customizer);
        result = _.clone<string[]>([42], false, customizer, any);
        result = _.clone<string[]>([42], customizer);
        result = _.clone<string[]>([42], customizer, any);
        result = _.clone<number[], string[]>([42], false, customizer);
        result = _.clone<number[], string[]>([42], false, customizer, any);
        result = _.clone<number[], string[]>([42], customizer);
        result = _.clone<number[], string[]>([42], customizer, any);
        result = _([42]).clone<string[]>(false, customizer);
        result = _([42]).clone<string[]>(false, customizer, any);
        result = _([42]).clone<string[]>(customizer);
        result = _([42]).clone<string[]>(customizer, any);
    }

    {
        let customizer: CloneCustomizer<number[], string[]>;
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().clone<string>(false, customizer);
        result = _([42]).chain().clone<string>(false, customizer, any);
        result = _([42]).chain().clone<string>(customizer);
        result = _([42]).chain().clone<string>(customizer, any);
    }

    {
        let customizer: CloneCustomizer<{a: {b: string;};}, {a: {b: number;};}>;
        let result: {a: {b: number;};};

        result = _.clone({a: {b: 42}});
        result = _.clone({a: {b: 42}}, false);
        result = _({a: {b: 42}}).clone();
        result = _({a: {b: 42}}).clone(false);
    }

    {
        let customizer: CloneCustomizer<{a: {b: string;};}, {a: {b: number;};}>;
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().clone();
        result = _({a: {b: 42}}).chain().clone(false);
    }

    {
        let customizer: CloneCustomizer<{a: {b: number;};}, {a: {b: string;};}>;
        let result: {a: {b: string;};};

        result = _.clone<{a: {b: string;};}>({a: {b: 42}}, false, customizer);
        result = _.clone<{a: {b: string;};}>({a: {b: 42}}, false, customizer, any);
        result = _.clone<{a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.clone<{a: {b: string;};}>({a: {b: 42}}, customizer, any);
        result = _.clone<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, false, customizer);
        result = _.clone<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, false, customizer, any);
        result = _.clone<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.clone<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer, any);
        result = _({a: {b: 42}}).clone<{a: {b: string;};}>(false, customizer);
        result = _({a: {b: 42}}).clone<{a: {b: string;};}>(false, customizer, any);
        result = _({a: {b: 42}}).clone<{a: {b: string;};}>(customizer);
        result = _({a: {b: 42}}).clone<{a: {b: string;};}>(customizer, any);
    }

    {
        let customizer: CloneCustomizer<{a: {b: number;};}, {a: {b: string;};}>;
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().clone<{a: {b: string;};}>(false, customizer);
        result = _({a: {b: 42}}).chain().clone<{a: {b: string;};}>(false, customizer, any);
        result = _({a: {b: 42}}).chain().clone<{a: {b: string;};}>(customizer);
        result = _({a: {b: 42}}).chain().clone<{a: {b: string;};}>(customizer, any);
    }
}

// _.cloneDeep
namespace TestCloneDeep {
    interface CloneDeepCustomizer<V, R> {
        (value: V): R;
    }

    {
        let customizer: CloneDeepCustomizer<number, number>;
        let result: number;

        result = _.cloneDeep(42);
        result = _(42).cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<number, number>;
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<number, string>;
        let result: string;

        result = _.cloneDeep<string>(42, customizer);
        result = _.cloneDeep<string>(42, customizer, any);
        result = _.cloneDeep<number, string>(42, customizer);
        result = _.cloneDeep<number, string>(42, customizer, any);
        result = _(42).cloneDeep<string>(customizer);
        result = _(42).cloneDeep<string>(customizer, any);
    }

    {
        let customizer: CloneDeepCustomizer<number, string>;
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().cloneDeep<string>(customizer);
        result = _(42).chain().cloneDeep<string>(customizer, any);
    }

    {
        let customizer: CloneDeepCustomizer<number[], number[]>;
        let result: number[];

        result = _.cloneDeep([42]);
        result = _([42]).cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<number[], number[]>;
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([42]).chain().cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<number[], string[]>;
        let result: string[];

        result = _.cloneDeep<string[]>([42], customizer);
        result = _.cloneDeep<string[]>([42], customizer, any);
        result = _.cloneDeep<number[], string[]>([42], customizer);
        result = _.cloneDeep<number[], string[]>([42], customizer, any);
        result = _([42]).cloneDeep<string[]>(customizer);
        result = _([42]).cloneDeep<string[]>(customizer, any);
    }

    {
        let customizer: CloneDeepCustomizer<number[], string[]>;
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().cloneDeep<string>(customizer);
        result = _([42]).chain().cloneDeep<string>(customizer, any);
    }

    {
        let customizer: CloneDeepCustomizer<{a: {b: string;};}, {a: {b: number;};}>;
        let result: {a: {b: number;};};

        result = _.cloneDeep({a: {b: 42}});
        result = _({a: {b: 42}}).cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<{a: {b: string;};}, {a: {b: number;};}>;
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().cloneDeep();
    }

    {
        let customizer: CloneDeepCustomizer<{a: {b: number;};}, {a: {b: string;};}>;
        let result: {a: {b: string;};};

        result = _.cloneDeep<{a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.cloneDeep<{a: {b: string;};}>({a: {b: 42}}, customizer, any);
        result = _.cloneDeep<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _.cloneDeep<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer, any);
        result = _({a: {b: 42}}).cloneDeep<{a: {b: string;};}>(customizer);
        result = _({a: {b: 42}}).cloneDeep<{a: {b: string;};}>(customizer, any);
    }

    {
        let customizer: CloneDeepCustomizer<{a: {b: number;};}, {a: {b: string;};}>;
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().cloneDeep<{a: {b: string;};}>(customizer);
        result = _({a: {b: 42}}).chain().cloneDeep<{a: {b: string;};}>(customizer, any);
    }
}

// _.eq
namespace TestEq {
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
namespace TestGt {
    {
        let result: boolean;

        result = _.gt(any, any);
        result = _(1).gt(any);
        result = _([]).gt(any);
        result = _({}).gt(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gt(any);
        result = _([]).chain().gt(any);
        result = _({}).chain().gt(any);
    }
}

// _.gte
namespace TestGte {
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
namespace TestisArguments {
    {
        let value: number|IArguments;

        if (_.isArguments(value)) {
            let result: IArguments = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isArguments(any);
        result = _(1).isArguments();
        result = _<any>([]).isArguments();
        result = _({}).isArguments();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArguments();
        result = _<any>([]).chain().isArguments();
        result = _({}).chain().isArguments();
    }
}

// _.isArray
namespace TestIsArray {
    {
        let value: number|string[]|boolean[];

        if (_.isArray<string>(value)) {
            let result: string[] = value;
        }
        else {
            if (_.isArray<boolean>(value)) {
                let result: boolean[] = value;
            }
            else {
                let result: number = value;
            }
        }
    }

    {
        let result: boolean;

        result = _.isArray(any);
        result = _(1).isArray();
        result = _<any>([]).isArray();
        result = _({}).isArray();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArray();
        result = _<any>([]).chain().isArray();
        result = _({}).chain().isArray();
    }
}

// _.isBoolean
namespace TestIsBoolean {
    {
        let value: number|boolean;

        if (_.isBoolean(value)) {
            let result: boolean = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isBoolean(any);
        result = _(1).isBoolean();
        result = _<any>([]).isBoolean();
        result = _({}).isBoolean();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBoolean();
        result = _<any>([]).chain().isBoolean();
        result = _({}).chain().isBoolean();
    }
}

// _.isDate
namespace TestIsBoolean {
    {
        let value: number|Date;

        if (_.isDate(value)) {
            let result: Date = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isDate(any);
        result = _(42).isDate();
        result = _<any>([]).isDate();
        result = _({}).isDate();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isDate();
        result = _<any>([]).chain().isDate();
        result = _({}).chain().isDate();
    }
}

// _.isElement
namespace TestIsElement {
    {
        let result: boolean;

        result = _.isElement(any);

        result = _(42).isElement();
        result = _<any>([]).isElement();
        result = _({}).isElement();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isElement();
        result = _<any>([]).chain().isElement();
        result = _({}).chain().isElement();
    }
}

// _.isEmpty
namespace TestIsEmpty {
    {
        let result: boolean;

        result = _.isEmpty(any);
        result = _(1).isEmpty();
        result = _('').isEmpty();
        result = _<any>([]).isEmpty();
        result = _({}).isEmpty();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isEmpty();
        result = _('').chain().isEmpty();
        result = _<any>([]).chain().isEmpty();
        result = _({}).chain().isEmpty();
    }
}

// _.isEqual
namespace TestIsEqual {
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
namespace TestIsError {
    {
        let value: number|Error;

        if (_.isError(value)) {
            let result: Error = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        class CustomError extends Error {}

        let value: number|CustomError;

        if (_.isError(value)) {
            let result: CustomError = value;
        }
        else {
            let result: number = value as number;
        }
    }

    {
        let result: boolean;

        result = _.isError(any);
        result = _(1).isError();
        result = _<any>([]).isError();
        result = _({}).isError();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isError();
        result = _<any>([]).chain().isError();
        result = _({}).chain().isError();
    }
}

// _.isFinite
namespace TestIsFinite {
    {
        let result: boolean;

        result = _.isFinite(any);
        result = _(1).isFinite();
        result = _<any>([]).isFinite();
        result = _({}).isFinite();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isFinite();
        result = _<any>([]).chain().isFinite();
        result = _({}).chain().isFinite();
    }
}

// _.isFunction
namespace TestIsFunction {
    {
        let value: number|Function;

        if (_.isFunction(value)) {
            let result: Function = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isFunction(any);
        result = _(1).isFunction();
        result = _<any>([]).isFunction();
        result = _({}).isFunction();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isFunction();
        result = _<any>([]).chain().isFunction();
        result = _({}).chain().isFunction();
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
namespace TestIsNaN {
    {
        let result: boolean;

        result = _.isNaN(any);

        result = _(1).isNaN();
        result = _<any>([]).isNaN();
        result = _({}).isNaN();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNaN();
        result = _<any>([]).chain().isNaN();
        result = _({}).chain().isNaN();
    }
}

// _.isNative
namespace TestIsNative {
    {
        let value: number|Function;

        if (_.isNative(value)) {
            let result: Function = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isNative(any);

        result = _(1).isNative();
        result = _<any>([]).isNative();
        result = _({}).isNative();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNative();
        result = _<any>([]).chain().isNative();
        result = _({}).chain().isNative();
    }
}

// _.isNull
namespace TestIsNull {
    {
        let result: boolean;

        result = _.isNull(any);

        result = _(1).isNull();
        result = _<any>([]).isNull();
        result = _({}).isNull();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNull();
        result = _<any>([]).chain().isNull();
        result = _({}).chain().isNull();
    }
}

// _.isNumber
namespace TestIsNumber {
    {
        let value: string|number;

        if (_.isNumber(value)) {
            let result: number = value;
        }
        else {
            let result: string = value;
        }
    }

    {
        let result: boolean;

        result = _.isNumber(any);

        result = _(1).isNumber();
        result = _<any>([]).isNumber();
        result = _({}).isNumber();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNumber();
        result = _<any>([]).chain().isNumber();
        result = _({}).chain().isNumber();
    }
}

// _.isObject
namespace TestIsObject {
    {
        let result: boolean;

        result = _.isObject(any);
        result = _(1).isObject();
        result = _<any>([]).isObject();
        result = _({}).isObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObject();
        result = _<any>([]).chain().isObject();
        result = _({}).chain().isObject();
    }
}

// _.isPlainObject
namespace TestIsPlainObject {
    {
        let result: boolean;

        result = _.isPlainObject(any);
        result = _(1).isPlainObject();
        result = _<any>([]).isPlainObject();
        result = _({}).isPlainObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isPlainObject();
        result = _<any>([]).chain().isPlainObject();
        result = _({}).chain().isPlainObject();
    }
}

// _.isRegExp
namespace TestIsRegExp {
    {
        let value: number|RegExp;

        if (_.isRegExp(value)) {
            let result: RegExp = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isRegExp(any);
        result = _(1).isRegExp();
        result = _<any>([]).isRegExp();
        result = _({}).isRegExp();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isRegExp();
        result = _<any>([]).chain().isRegExp();
        result = _({}).chain().isRegExp();
    }
}

// _.isString
namespace TestIsString {
    {
        let value: number|string;

        if (_.isString(value)) {
            let result: string = value;
        }
        else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isString(any);
        result = _(1).isString();
        result = _<any>([]).isString();
        result = _({}).isString();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isString();
        result = _<any>([]).chain().isString();
        result = _({}).chain().isString();
    }
}

// _.isTypedArray
namespace TestIsTypedArray {
    {
        let result: boolean;

        result = _.isTypedArray([]);
        result = _([]).isTypedArray();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _([]).chain().isTypedArray();
    }
}

// _.isUndefined
namespace TestIsUndefined {
    {
        let result: boolean;

        result = _.isUndefined(any);

        result = _(1).isUndefined();
        result = _<any>([]).isUndefined();
        result = _({}).isUndefined();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isUndefined();
        result = _<any>([]).chain().isUndefined();
        result = _({}).chain().isUndefined();
    }
}

// _.lt
namespace TestLt {
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
namespace TestLte {
    {
        let result: boolean;

        result = _.lte(any, any);
        result = _(1).lte(any);
        result = _([]).lte(any);
        result = _({}).lte(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lte(any);
        result = _([]).chain().lte(any);
        result = _({}).chain().lte(any);
    }
}

// _.toArray
namespace TestToArray {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;
    let numericDictionary: _.NumericDictionary<TResult>;

    {
        let result: string[];

        result = _.toArray<string>('');
        result = _.toArray('');
    }

    {
        let result: TResult[];

        result = _.toArray<TResult>(array);
        result = _.toArray<TResult>(list);
        result = _.toArray<TResult>(dictionary);
        result = _.toArray<TResult>(numericDictionary);

        result = _.toArray(array);
        result = _.toArray(list);
        result = _.toArray(dictionary);
        result = _.toArray(numericDictionary);
    }

    {
        let result: any[];

        result = _.toArray();
        result = _.toArray(42);
        result = _.toArray(true);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(array).toArray();
        result = _(list).toArray<TResult>();
        result = _(dictionary).toArray<TResult>();
        result = _(numericDictionary).toArray<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(array).chain().toArray();
        result = _(list).chain().toArray<TResult>();
        result = _(dictionary).chain().toArray<TResult>();
        result = _(numericDictionary).chain().toArray<TResult>();
    }
}

// _.toPlainObject
namespace TestToPlainObject {
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
namespace TestAdd {
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
namespace TestCeil {
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
namespace TestFloor {
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
namespace TestMax {
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
namespace TestMin {
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
namespace TestRound {
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
namespace TestSum {
    let array: number[];
    let objectArray: { 'age': number }[];

    let list: _.List<number>;
    let objectList: _.List<{ 'age': number }>;

    let dictionary: _.Dictionary<number>;
    let objectDictionary: _.Dictionary<{ 'age': number }>;

    let listIterator: (value: number, index: number, collection: _.List<number>) => number;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => number;

    {
        let result: number;

        result = _.sum(array);
        result = _.sum<number>(array);
        result = _.sum<number>(array, listIterator);
        result = _.sum<number>(array, listIterator, any);
        result = _.sum(objectArray, 'age');


        result = _.sum(list);
        result = _.sum<number>(list);
        result = _.sum<number>(list, listIterator);
        result = _.sum<number>(list, listIterator, any);
        result = _.sum(objectList, 'age');

        result = _.sum(dictionary);
        result = _.sum<number>(dictionary);
        result = _.sum<number>(dictionary, dictionaryIterator);
        result = _.sum<number>(dictionary, dictionaryIterator, any);
        result = _.sum(objectDictionary, 'age');

        result = _(array).sum();
        result = _(array).sum(listIterator);
        result = _(array).sum(listIterator, any);
        result = _(objectArray).sum('age');


        result = _(list).sum();
        result = _(list).sum<number>(listIterator);
        result = _(list).sum<number>(listIterator, any);
        result = _(objectList).sum('age');

        result = _(dictionary).sum();
        result = _(dictionary).sum<number>(dictionaryIterator);
        result = _(dictionary).sum<number>(dictionaryIterator, any);
        result = _(objectDictionary).sum('age');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sum();
        result = _(array).chain().sum(listIterator);
        result = _(array).chain().sum(listIterator, any);
        result = _(objectArray).chain().sum('');


        result = _(list).chain().sum();
        result = _(list).chain().sum<number>(listIterator);
        result = _(list).chain().sum<number>(listIterator, any);
        result = _(objectList).chain().sum('age');

        result = _(dictionary).chain().sum();
        result = _(dictionary).chain().sum<number>(dictionaryIterator);
        result = _(dictionary).chain().sum<number>(dictionaryIterator, any);
        result = _(objectDictionary).chain().sum('age');
    }
}

/**********
 * Number *
 **********/

// _.inRange
namespace TestInRange {
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
namespace TestRandom {
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
namespace TestAssign {
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
namespace TestCreate {
    type SampleProto = {a: number};
    type SampleProps = {b: string};

    let prototype: SampleProto;
    let properties: SampleProps;

    {
        let result: {a: number; b: string};

        result = _.create<SampleProto, SampleProps>(prototype, properties);
        result = _.create(prototype, properties);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: number; b: string}>;

        result = _(prototype).create<SampleProps>(properties);
        result = _(prototype).create(properties);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number; b: string}>;

        result = _(prototype).chain().create<SampleProps>(properties);
        result = _(prototype).chain().create(properties);
    }
}

// _.defaults
namespace TestDefaults {
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
namespace TestExtend {
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
namespace TestFindKey {
    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;
        let result: string;

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
        let result: string;

        result = _.findKey<string, {a: string;}>({a: ''}, predicateFn);
        result = _.findKey<string, {a: string;}>({a: ''}, predicateFn, any);

        result = _<{a: string;}>({a: ''}).findKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).findKey<string>(predicateFn, any);
    }

    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;
        let result: _.LoDashExplicitWrapper<string>;

        result = _<{a: string;}>({a: ''}).chain().findKey();

        result = _<{a: string;}>({a: ''}).chain().findKey(predicateFn);
        result = _<{a: string;}>({a: ''}).chain().findKey(predicateFn, any);


        result = _<{a: string;}>({a: ''}).chain().findKey('');
        result = _<{a: string;}>({a: ''}).chain().findKey('', any);

        result = _<{a: string;}>({a: ''}).chain().findKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn: (value: string, key?: string, collection?: _.Dictionary<string>) => boolean;
        let result: _.LoDashExplicitWrapper<string>;

        result = _<{a: string;}>({a: ''}).chain().findKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).chain().findKey<string>(predicateFn, any);
    }
}

// _.findLastKey
namespace TestFindLastKey {
    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;
        let result: string;

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
        let result: string;

        result = _.findLastKey<string, {a: string;}>({a: ''}, predicateFn);
        result = _.findLastKey<string, {a: string;}>({a: ''}, predicateFn, any);

        result = _<{a: string;}>({a: ''}).findLastKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).findLastKey<string>(predicateFn, any);
    }

    {
        let predicateFn: (value: any, key?: string, object?: {}) => boolean;
        let result: _.LoDashExplicitWrapper<string>;

        result = _<{a: string;}>({a: ''}).chain().findLastKey();

        result = _<{a: string;}>({a: ''}).chain().findLastKey(predicateFn);
        result = _<{a: string;}>({a: ''}).chain().findLastKey(predicateFn, any);


        result = _<{a: string;}>({a: ''}).chain().findLastKey('');
        result = _<{a: string;}>({a: ''}).chain().findLastKey('', any);

        result = _<{a: string;}>({a: ''}).chain().findLastKey<{a: number;}>({a: 42});
    }

    {
        let predicateFn: (value: string, key?: string, collection?: _.Dictionary<string>) => boolean;
        let result: _.LoDashExplicitWrapper<string>;

        result = _<{a: string;}>({a: ''}).chain().findLastKey<string>(predicateFn);
        result = _<{a: string;}>({a: ''}).chain().findLastKey<string>(predicateFn, any);
    }
}

// _.forIn
namespace TestForIn {
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

// _.forInRight
namespace TestForInRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number>;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any;

    let object: SampleObject;
    let objectIterator: (element: any, key?: string, collection?: any) => any;

    {
        let result: _.Dictionary<number>;

        result = _.forInRight<number>(dictionary);
        result = _.forInRight<number>(dictionary, dictionaryIterator);
        result = _.forInRight<number>(dictionary, dictionaryIterator, any);
    }

    {
        let result: SampleObject;

        result = _.forInRight<SampleObject>(object);
        result = _.forInRight<SampleObject>(object, objectIterator);
        result = _.forInRight<SampleObject>(object, objectIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forInRight<number>();
        result = _(dictionary).forInRight<number>(dictionaryIterator);
        result = _(dictionary).forInRight<number>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forInRight<number>();
        result = _(dictionary).chain().forInRight<number>(dictionaryIterator);
        result = _(dictionary).chain().forInRight<number>(dictionaryIterator, any);
    }
}

// _.forOwn
namespace TestForOwn {
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

// _.forOwnRight
namespace TestForOwnRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number>;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any;

    let object: SampleObject;
    let objectIterator: (element: any, key?: string, collection?: any) => any;

    {
        let result: _.Dictionary<number>;

        result = _.forOwnRight<number>(dictionary);
        result = _.forOwnRight<number>(dictionary, dictionaryIterator);
        result = _.forOwnRight<number>(dictionary, dictionaryIterator, any);
    }

    {
        let result: SampleObject;

        result = _.forOwnRight<SampleObject>(object);
        result = _.forOwnRight<SampleObject>(object, objectIterator);
        result = _.forOwnRight<SampleObject>(object, objectIterator, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwnRight<number>();
        result = _(dictionary).forOwnRight<number>(dictionaryIterator);
        result = _(dictionary).forOwnRight<number>(dictionaryIterator, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwnRight<number>();
        result = _(dictionary).chain().forOwnRight<number>(dictionaryIterator);
        result = _(dictionary).chain().forOwnRight<number>(dictionaryIterator, any);
    }
}

// _.functions
namespace TestFunctions {
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
namespace TestGet {
    {
        let result: string;

        result = _.get<string, string>('abc', '0');
        result = _.get<string, string>('abc', '0', '_');
        result = _.get<string, string>('abc', ['0']);
        result = _.get<string, string>('abc', ['0'], '_');

        result = _.get<string>('abc', '0');
        result = _.get<string>('abc', '0', '_');
        result = _.get<string>('abc', ['0']);
        result = _.get<string>('abc', ['0'], '_');

        result = _('abc').get<string>('0');
        result = _('abc').get<string>('0', '_');
        result = _('abc').get<string>(['0']);
        result = _('abc').get<string>(['0'], '_');
    }

    {
        let result: number;

        result = _.get<number[], number>([42], '0');
        result = _.get<number[], number>([42], '0', -1);
        result = _.get<number[], number>([42], ['0']);
        result = _.get<number[], number>([42], ['0'], -1);

        result = _.get<number>([42], '0');
        result = _.get<number>([42], '0', -1);
        result = _.get<number>([42], ['0']);
        result = _.get<number>([42], ['0'], -1);

        result = _([42]).get<number>('0');
        result = _([42]).get<number>('0', -1);
        result = _([42]).get<number>(['0']);
        result = _([42]).get<number>(['0'], -1);
    }

    {
        let result: boolean;

        result = _.get<{a: boolean}, boolean>({a: true}, 'a');
        result = _.get<{a: boolean}, boolean>({a: true}, 'a', false);
        result = _.get<{a: boolean}, boolean>({a: true}, ['a']);
        result = _.get<{a: boolean}, boolean>({a: true}, ['a'], false);

        result = _.get<boolean>({a: true}, 'a');
        result = _.get<boolean>({a: true}, 'a', false);
        result = _.get<boolean>({a: true}, ['a']);
        result = _.get<boolean>({a: true}, ['a'], false);

        result = _({a: true}).get<boolean>('a');
        result = _({a: true}).get<boolean>('a', false);
        result = _({a: true}).get<boolean>(['a']);
        result = _({a: true}).get<boolean>(['a'], false);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>('0');
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>(['0']);
        result = _('abc').chain().get<_.LoDashExplicitWrapper<string>>(['0'], '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>('0');
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>('0', -1);
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>(['0']);
        result = _([42]).chain().get<_.LoDashExplicitWrapper<number>>(['0'], -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>('a');
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>('a', false);
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>(['a']);
        result = _({a: true}).chain().get<_.LoDashExplicitWrapper<boolean>>(['a'], false);
    }
}

// _.has
namespace TestHas {
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
namespace TestInvert {
    {
        let result: TResult;

        result = _.invert<Object, TResult>({});
        result = _.invert<Object, TResult>({}, true);

        result = _.invert<TResult>({});
        result = _.invert<TResult>({}, true);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).invert<TResult>();
        result = _({}).invert<TResult>(true);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().invert<TResult>();
        result = _({}).chain().invert<TResult>(true);
    }
}

// _.keys
namespace TestKeys {
    let object: _.Dictionary<any>;

    {
        let result: string[];

        result = _.keys(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).keys();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().keys();
    }
}

// _.keysIn
namespace TestKeysIn {
    let object: _.Dictionary<any>;

    {
        let result: string[];

        result = _.keysIn(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).keysIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().keysIn();
    }
}

// _.mapKeys
namespace TestMapKeys {
    let array: TResult[];
    let list: _.List<TResult>;
    let dictionary: _.Dictionary<TResult>;

    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => string;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => string;

    {
        let result: _.Dictionary<TResult>;

        result = _.mapKeys<TResult, string>(array);
        result = _.mapKeys<TResult, string>(array, listIterator);
        result = _.mapKeys<TResult, string>(array, listIterator, any);
        result = _.mapKeys<TResult>(array, '');
        result = _.mapKeys<TResult>(array, '', any);
        result = _.mapKeys<TResult, {}>(array, {});

        result = _.mapKeys<TResult, string>(list);
        result = _.mapKeys<TResult, string>(list, listIterator);
        result = _.mapKeys<TResult, string>(list, listIterator, any);
        result = _.mapKeys<TResult>(list, '');
        result = _.mapKeys<TResult>(list, '', any);
        result = _.mapKeys<TResult, {}>(list, {});

        result = _.mapKeys<TResult, string>(dictionary);
        result = _.mapKeys<TResult, string>(dictionary, dictionaryIterator);
        result = _.mapKeys<TResult, string>(dictionary, dictionaryIterator, any);
        result = _.mapKeys<TResult>(dictionary, '');
        result = _.mapKeys<TResult>(dictionary, '', any);
        result = _.mapKeys<TResult, {}>(dictionary, {});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(array).mapKeys<string>();
        result = _(array).mapKeys<string>(listIterator);
        result = _(array).mapKeys<string>(listIterator, any);
        result = _(array).mapKeys('');
        result = _(array).mapKeys('', any);
        result = _(array).mapKeys<{}>({});

        result = _(list).mapKeys<TResult, string>();
        result = _(list).mapKeys<TResult, string>(listIterator);
        result = _(list).mapKeys<TResult, string>(listIterator, any);
        result = _(list).mapKeys<TResult>('');
        result = _(list).mapKeys<TResult>('', any);
        result = _(list).mapKeys<TResult, {}>({});

        result = _(dictionary).mapKeys<TResult, string>();
        result = _(dictionary).mapKeys<TResult, string>(dictionaryIterator);
        result = _(dictionary).mapKeys<TResult, string>(dictionaryIterator, any);
        result = _(dictionary).mapKeys<TResult>('');
        result = _(dictionary).mapKeys<TResult>('', any);
        result = _(dictionary).mapKeys<TResult, {}>({});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<TResult>>;

        result = _(array).chain().mapKeys<string>();
        result = _(array).chain().mapKeys<string>(listIterator);
        result = _(array).chain().mapKeys<string>(listIterator, any);
        result = _(array).chain().mapKeys('');
        result = _(array).chain().mapKeys('', any);
        result = _(array).chain().mapKeys<{}>({});

        result = _(list).chain().mapKeys<TResult, string>();
        result = _(list).chain().mapKeys<TResult, string>(listIterator);
        result = _(list).chain().mapKeys<TResult, string>(listIterator, any);
        result = _(list).chain().mapKeys<TResult>('');
        result = _(list).chain().mapKeys<TResult>('', any);
        result = _(list).chain().mapKeys<TResult, {}>({});

        result = _(dictionary).chain().mapKeys<TResult, string>();
        result = _(dictionary).chain().mapKeys<TResult, string>(dictionaryIterator);
        result = _(dictionary).chain().mapKeys<TResult, string>(dictionaryIterator, any);
        result = _(dictionary).chain().mapKeys<TResult>('');
        result = _(dictionary).chain().mapKeys<TResult>('', any);
        result = _(dictionary).chain().mapKeys<TResult, {}>({});
    }
}

// _.merge
namespace TestMerge {
    type InitialValue = { a : number };
    type MergingValue = { b : string };

    var initialValue  = { a : 1 };
    var mergingValue  = { b : "hi" };

    type ExpectedResult = { a: number, b: string };
    let result: ExpectedResult;

    let customizer: (value: any, srcValue: any, key?: string, object?: InitialValue, source?: MergingValue) => any;

    // Test for basic merging

    result = _.merge(initialValue, mergingValue);
    result = _.merge(initialValue, mergingValue, customizer);
    result = _.merge(initialValue, mergingValue, customizer, any);

    result = _.merge(initialValue, {}, mergingValue);
    result = _.merge(initialValue, {}, mergingValue, customizer);
    result = _.merge(initialValue, {}, mergingValue, customizer, any);

    result = _.merge(initialValue, {}, {}, mergingValue);
    result = _.merge(initialValue, {}, {}, mergingValue, customizer);
    result = _.merge(initialValue, {}, {}, mergingValue, customizer, any);

    result = _.merge(initialValue, {}, {}, {}, mergingValue);
    result = _.merge(initialValue, {}, {}, {}, mergingValue, customizer);
    result = _.merge(initialValue, {}, {}, {}, mergingValue, customizer, any);

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _.merge<ExpectedResult>(initialValue, {}, {}, {}, {}, mergingValue);
    result = _.merge<ExpectedResult>(initialValue, {}, {}, {}, {}, mergingValue, customizer);
    result = _.merge<ExpectedResult>(initialValue, {}, {}, {}, {}, mergingValue, customizer, any);

    // Test for multiple combinations of many types

    type ComplicatedExpectedType = { a: number, b: string, c: {}, d: number[], e: boolean };

    var complicatedResult: ComplicatedExpectedType = _.merge({ a: 1 },
                                                             { b: "string" },
                                                             { c: {} },
                                                             { d: [1] },
                                                             { e: true });
    // Test for type overriding

    type ExpectedTypeAfterOverriding = { a: boolean };

    var overriddenResult: ExpectedTypeAfterOverriding = _.merge({ a: 1 },
                                                                { a: "string" },
                                                                { a: {} },
                                                                { a: [1] },
                                                                { a: true });

    // Tests for basic chaining with merge

    result = _(initialValue).merge(mergingValue).value();
    result = _(initialValue).merge(mergingValue, customizer).value();
    result = _(initialValue).merge(mergingValue, customizer, any).value();

    result = _(initialValue).merge({}, mergingValue).value();
    result = _(initialValue).merge({}, mergingValue, customizer).value();
    result = _(initialValue).merge({}, mergingValue, customizer, any).value();

    result = _(initialValue).merge({}, {}, mergingValue).value();
    result = _(initialValue).merge({}, {}, mergingValue, customizer).value();
    result = _(initialValue).merge({}, {}, mergingValue, customizer, any).value();

    result = _(initialValue).merge({}, {}, {}, mergingValue).value();
    result = _(initialValue).merge({}, {}, {}, mergingValue, customizer).value();
    result = _(initialValue).merge({}, {}, {}, mergingValue, customizer, any).value();

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _(initialValue).merge<ExpectedResult>({}, {}, {}, {}, mergingValue).value();
    result = _(initialValue).merge<ExpectedResult>({}, {}, {}, {}, mergingValue, customizer).value();
    result = _(initialValue).merge<ExpectedResult>({}, {}, {}, {}, mergingValue, customizer, any).value();

    // Test complex multiple combinations with chaining

    var complicatedResult: ComplicatedExpectedType = _({ a: 1 }).merge({ b: "string" },
                                                                       { c: {} },
                                                                       { d: [1] },
                                                                       { e: true }).value();

    // Test for type overriding with chaining

    var overriddenResult: ExpectedTypeAfterOverriding = _({ a: 1 }).merge({ a: "string" },
                                                                          { a: {} },
                                                                          { a: [1] },
                                                                          { a: true }).value();

}

// _.methods
namespace TestFunctions {
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

// _.omit
namespace TestOmit {
    let predicate: (element: any, key: string, collection: any) => boolean;

    {
        let result: TResult;

        result = _.omit<TResult, Object>({}, 'a');
        result = _.omit<TResult, Object>({}, 0, 'a');
        result = _.omit<TResult, Object>({}, true, 0, 'a');
        result = _.omit<TResult, Object>({}, ['b', 1, false], true, 0, 'a');
        result = _.omit<TResult, Object>({}, predicate);
        result = _.omit<TResult, Object>({}, predicate, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).omit<TResult>('a');
        result = _({}).omit<TResult>(0, 'a');
        result = _({}).omit<TResult>(true, 0, 'a');
        result = _({}).omit<TResult>(['b', 1, false], true, 0, 'a');
        result = _({}).omit<TResult>(predicate);
        result = _({}).omit<TResult>(predicate, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().omit<TResult>('a');
        result = _({}).chain().omit<TResult>(0, 'a');
        result = _({}).chain().omit<TResult>(true, 0, 'a');
        result = _({}).chain().omit<TResult>(['b', 1, false], true, 0, 'a');
        result = _({}).chain().omit<TResult>(predicate);
        result = _({}).chain().omit<TResult>(predicate, any);
    }
}

// _.pairs
namespace TestPairs {
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
namespace TestPick {
    let predicate: (element: any, key: string, collection: any) => boolean;

    {
        let result: TResult;

        result = _.pick<TResult, Object>({}, 'a');
        result = _.pick<TResult, Object>({}, 0, 'a');
        result = _.pick<TResult, Object>({}, true, 0, 'a');
        result = _.pick<TResult, Object>({}, ['b', 1, false], true, 0, 'a');
        result = _.pick<TResult, Object>({}, predicate);
        result = _.pick<TResult, Object>({}, predicate, any);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<TResult>;

        result = _({}).pick<TResult>('a');
        result = _({}).pick<TResult>(0, 'a');
        result = _({}).pick<TResult>(true, 0, 'a');
        result = _({}).pick<TResult>(['b', 1, false], true, 0, 'a');
        result = _({}).pick<TResult>(predicate);
        result = _({}).pick<TResult>(predicate, any);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<TResult>;

        result = _({}).chain().pick<TResult>('a');
        result = _({}).chain().pick<TResult>(0, 'a');
        result = _({}).chain().pick<TResult>(true, 0, 'a');
        result = _({}).chain().pick<TResult>(['b', 1, false], true, 0, 'a');
        result = _({}).chain().pick<TResult>(predicate);
        result = _({}).chain().pick<TResult>(predicate, any);
    }
}

// _.result
namespace TestResult {
    {
        let result: string;

        result = _.result<string, string>('abc', '0');
        result = _.result<string, string>('abc', '0', '_');
        result = _.result<string, string>('abc', '0', () => '_');
        result = _.result<string, string>('abc', ['0']);
        result = _.result<string, string>('abc', ['0'], '_');
        result = _.result<string, string>('abc', ['0'], () => '_');

        result = _.result<string>('abc', '0');
        result = _.result<string>('abc', '0', '_');
        result = _.result<string>('abc', '0', () => '_');
        result = _.result<string>('abc', ['0']);
        result = _.result<string>('abc', ['0'], '_');
        result = _.result<string>('abc', ['0'], () => '_');

        result = _('abc').result<string>('0');
        result = _('abc').result<string>('0', '_');
        result = _('abc').result<string>('0', () => '_');
        result = _('abc').result<string>(['0']);
        result = _('abc').result<string>(['0'], '_');
        result = _('abc').result<string>(['0'], () => '_');
    }

    {
        let result: number;

        result = _.result<number[], number>([42], '0');
        result = _.result<number[], number>([42], '0', -1);
        result = _.result<number[], number>([42], '0', () => -1);
        result = _.result<number[], number>([42], ['0']);
        result = _.result<number[], number>([42], ['0'], -1);
        result = _.result<number[], number>([42], ['0'], () => -1);

        result = _.result<number>([42], '0');
        result = _.result<number>([42], '0', -1);
        result = _.result<number>([42], '0', () => -1);
        result = _.result<number>([42], ['0']);
        result = _.result<number>([42], ['0'], -1);
        result = _.result<number>([42], ['0'], () => -1);

        result = _([42]).result<number>('0');
        result = _([42]).result<number>('0', -1);
        result = _([42]).result<number>('0', () => -1);
        result = _([42]).result<number>(['0']);
        result = _([42]).result<number>(['0'], -1);
        result = _([42]).result<number>(['0'], () => -1);
    }

    {
        let result: boolean;

        result = _.result<{a: boolean}, boolean>({a: true}, 'a');
        result = _.result<{a: boolean}, boolean>({a: true}, 'a', false);
        result = _.result<{a: boolean}, boolean>({a: true}, 'a', () => false);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a']);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a'], false);
        result = _.result<{a: boolean}, boolean>({a: true}, ['a'], () => false);

        result = _.result<boolean>({a: true}, 'a');
        result = _.result<boolean>({a: true}, 'a', false);
        result = _.result<boolean>({a: true}, 'a', () => false);
        result = _.result<boolean>({a: true}, ['a']);
        result = _.result<boolean>({a: true}, ['a'], false);
        result = _.result<boolean>({a: true}, ['a'], () => false);

        result = _({a: true}).result<boolean>('a');
        result = _({a: true}).result<boolean>('a', false);
        result = _({a: true}).result<boolean>('a', () => false);
        result = _({a: true}).result<boolean>(['a']);
        result = _({a: true}).result<boolean>(['a'], false);
        result = _({a: true}).result<boolean>(['a'], () => false);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>('0', '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0']);
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0'], () => '_');
        result = _('abc').chain().result<_.LoDashExplicitWrapper<string>>(['0'], () => '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0');
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0', -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>('0', () => -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0']);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0'], -1);
        result = _([42]).chain().result<_.LoDashExplicitWrapper<number>>(['0'], () => -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a');
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a', false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>('a', () => false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a']);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a'], false);
        result = _({a: true}).chain().result<_.LoDashExplicitWrapper<boolean>>(['a'], () => false);
    }
}

// _.set
namespace TestSet {
    type SampleObject = {a: {}};
    type SampleResult = {a: {b: number[]}};

    let object: SampleObject;
    let value: number;

    {
        let result: SampleResult;

        result = _.set<SampleResult>(object, 'a.b[1]', value);
        result = _.set<SampleResult>(object, ['a', 'b', 1], value);

        result = _.set<number, SampleResult>(object, 'a.b[1]', value);
        result = _.set<number, SampleResult>(object, ['a', 'b', 1], value);

        result = _.set<SampleObject, number, SampleResult>(object, 'a.b[1]', value);
        result = _.set<SampleObject, number, SampleResult>(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).set<SampleResult>('a.b[1]', value);
        result = _(object).set<SampleResult>(['a', 'b', 1], value);

        result = _(object).set<number, SampleResult>('a.b[1]', value);
        result = _(object).set<number, SampleResult>(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().set<SampleResult>('a.b[1]', value);
        result = _(object).chain().set<SampleResult>(['a', 'b', 1], value);

        result = _(object).chain().set<number, SampleResult>('a.b[1]', value);
        result = _(object).chain().set<number, SampleResult>(['a', 'b', 1], value);
    }
}

// _.transform
namespace TestTransform {
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
namespace TestValues {
    let object: _.Dictionary<TResult>;

    {
        let result: TResult[];

        result = _.values<TResult>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(object).values<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(object).chain().values<TResult>();
    }
}

// _.valuesIn
namespace TestValuesIn {
    let object: _.Dictionary<TResult>;

    {
        let result: TResult[];

        result = _.valuesIn<TResult>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<TResult>;

        result = _(object).valuesIn<TResult>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<TResult>;

        result = _(object).chain().valuesIn<TResult>();
    }
}

/**********
 * String *
 **********/

// _.camelCase
namespace TestCamelCase {
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
namespace TestCapitalize {
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
namespace TestDeburr {
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
namespace TestEndsWith {
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
namespace TestEscape {
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
namespace TestEscapeRegExp {
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
namespace TestKebabCase {
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
namespace TestPad {
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
namespace TestPadLeft {
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
namespace TestPadRight {
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
namespace TestParseInt {
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
namespace TestRepeat {
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
namespace TestSnakeCase {
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

// _.split
namespace TestSplit {
    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('a-b-c').split();
        result = _('a-b-c').split('-');
        result = _('a-b-c').split('-', 2);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('a-b-c').chain().split();
        result = _('a-b-c').chain().split('-');
        result = _('a-b-c').chain().split('-', 2);
    }
}

// _.startCase
namespace TestStartCase {
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
namespace TestStartsWith {
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
namespace TestTemplate {
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
namespace TestTrim {
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
namespace TestTrimLeft {
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

namespace TestTrimRight {
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
namespace TestTrunc {
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
namespace TestUnescape {
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
namespace TestWords {
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
namespace TestAttempt {
    let func: (...args: any[]) => {a: string};

    {
        let result: {a: string}|Error;

        result = _.attempt<{a: string}>(func);
        result = _.attempt<{a: string}>(func, 'foo', 'bar', 'baz');
        result = _(func).attempt<{a: string}>();
        result = _(func).attempt<{a: string}>('foo', 'bar', 'baz');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: string}|Error>;

        result = _(func).chain().attempt<{a: string}>();
        result = _(func).chain().attempt<{a: string}>('foo', 'bar', 'baz');
    }
}

// _.callback
namespace TestCallback {
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
namespace TestConstant {
    {
        let result: () => number = _.constant<number>(42);
    }

    {
        let result: () => string = _.constant<string>('a');
    }

    {
        let result: () => boolean = _.constant<boolean>(true);
    }

    {
        let result: () => string[] = _.constant<string[]>(['a']);
    }

    {
        let result: () => {a: string} = _.constant<{a: string}>({a: 'a'});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => number> = _(42).constant<number>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string> = _('a').constant<string>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => boolean> = _(true).constant<boolean>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string[]> = _(['a']).constant<string[]>();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => {a: string}> = _({a: 'a'}).constant<{a: string}>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => number> = _(42).chain().constant<number>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string> = _('a').chain().constant<string>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => boolean> = _(true).chain().constant<boolean>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string[]> = _(['a']).chain().constant<string[]>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => {a: string}> = _({a: 'a'}).chain().constant<{a: string}>();
    }
}

// _.identity
namespace TestIdentity {
    {
        let result: number;

        result = _.identity(42);
        result = _(42).identity();
    }

    {
        let result: number[];

        result = _.identity([42]);
        result = _([42]).identity();
    }

    {
        let result: {a: number};

        result = _.identity({a: 42});
        result = _({a: 42}).identity();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().identity();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([42]).chain().identity();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: number}>;

        result = _({a: 42}).chain().identity();
    }
}

// _.iteratee
namespace TestIteratee {
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
namespace TestMatches {
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
namespace TestMatches {
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
namespace TestMethod {
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
namespace TestMethodOf {
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
namespace TestMixin {
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
namespace TestNoConflict {
    {
        let result: typeof _;

        result = _.noConflict();
        result = _(42).noConflict();
        result = _<any>([]).noConflict();
        result = _({}).noConflict();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<typeof _>;

        result = _(42).chain().noConflict();
        result = _<any>([]).chain().noConflict();
        result = _({}).chain().noConflict();
    }
}

// _.noop
namespace TestNoop {
    {
        let result: void; // tslint:disable-line:void-return

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
namespace TestProperty {
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
namespace TestPropertyOf {
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
namespace TestRange {
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
namespace TestTimes {
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
namespace TestUniqueId {
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
