declare const $: any;

interface FoodOrganic {
    name: string;
    organic: boolean;
}
interface StoogesAge {
    name: string;
    age: number;
}

const foodsOrganic: FoodOrganic[] = [
    { name: 'banana', organic: true },
    { name: 'beet', organic: false },
];
const stoogesAges: StoogesAge[] = [
    { 'name': 'moe', 'age': 40 },
    { 'name': 'larry', 'age': 50 }
];

let result: any;

let anything: any;

interface AbcObject {
    a: number;
    b: string;
    c: boolean;
}

// _.MapCache
let testMapCache: _.MapCache = {
    delete(key: string) { return true; },
    get(key: string): any { return 1; },
    has(key: string) { return true; },
    set(key: string, value: any): _.Dictionary<any> { return {}; },
    clear() { },
};
result = <(key: string) => boolean>testMapCache.delete;
result = <(key: string) => any>testMapCache.get;
result = <(key: string) => boolean>testMapCache.has;
result = <(key: string, value: any) => _.Dictionary<any>>testMapCache.set;
result = <() => void>testMapCache.clear;

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
        result = _(['']);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;
        result = _<{a: string}>({a: ''});
    }

    {
        let a: AbcObject[] = [];
        _(a); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    }

    {
        let a: AbcObject[] | null | undefined = anything;
        _(a); // $ExpectType LoDashImplicitWrapper<AbcObject[] | null | undefined>
    }
}

// Wrapped array shortcut methods
_([1, 2, 3, 4]).pop(); // $ExpectType number | undefined
_([1, 2, 3, 4]).push(5, 6, 7); // $ExpectType LoDashImplicitWrapper<number[]>
_([1, 2, 3, 4]).shift(); // $ExpectType number | undefined
_([1, 2, 3, 4]).sort((a, b) => 1); // $ExpectType LoDashImplicitWrapper<number[]>
_([1, 2, 3, 4]).splice(1); // $ExpectType LoDashImplicitWrapper<number[]>
_([1, 2, 3, 4]).splice(1, 2, 5, 6); // $ExpectType LoDashImplicitWrapper<number[]>
_([1, 2, 3, 4]).unshift(5, 6); // $ExpectType LoDashImplicitWrapper<number[]>

_.chain([1, 2, 3, 4]).pop(); // $ExpectType LoDashExplicitWrapper<number | undefined>
_.chain([1, 2, 3, 4]).push(5, 6, 7); // $ExpectType LoDashExplicitWrapper<number[]>
_.chain([1, 2, 3, 4]).shift(); // $ExpectType LoDashExplicitWrapper<number | undefined>
_.chain([1, 2, 3, 4]).sort((a, b) => 1); // $ExpectType LoDashExplicitWrapper<number[]>
_.chain([1, 2, 3, 4]).splice(1); // $ExpectType LoDashExplicitWrapper<number[]>
_.chain([1, 2, 3, 4]).splice(1, 2, 5, 6); // $ExpectType LoDashExplicitWrapper<number[]>
_.chain([1, 2, 3, 4]).unshift(5, 6); // $ExpectType LoDashExplicitWrapper<number[]>

/*********
 * Array *
 *********/

// _.chunk
namespace TestChunk {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[][];

        result = _.chunk<AbcObject>(array);
        result = _.chunk<AbcObject>(array, 42);

        result = _.chunk<AbcObject>(list);
        result = _.chunk<AbcObject>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject[]>;

        result = _(array).chunk();
        result = _(array).chunk(42);

        result = _(list).chunk<AbcObject>();
        result = _(list).chunk<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject[]>;

        result = _.chain(array).chunk();
        result = _(array).chain().chunk();
        result = _(array).chain().chunk(42);

        result = _(list).chain().chunk<AbcObject>();
        result = _(list).chain().chunk<AbcObject>(42);
    }
}

// _.compact
namespace TestCompact {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let array2: Array<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;
    let list2: _.List<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;

    {
        let result: AbcObject[];

        result = _.compact<AbcObject>(array);
        result = _.compact<AbcObject>(list);
        result = _.compact(array2);
        result = _.compact(list2);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).compact();
        result = _(list).compact<AbcObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().compact();
        result = _(list).chain().compact<AbcObject>();
    }
}

// _.difference
namespace TestDifference {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let arrayParam: AbcObject[] = [];
    let listParam: _.List<AbcObject> = [];

    {
        let result: AbcObject[];

        result = _.difference(array);
        result = _.difference(array, arrayParam);
        result = _.difference(array, listParam, arrayParam);
        result = _.difference(array, listParam, listParam, arrayParam);

        result = _.difference(list);
        result = _.difference(list, listParam);
        result = _.difference(list, arrayParam, listParam);
        result = _.difference(list, listParam, arrayParam, listParam);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).difference();
        result = _(array).difference(arrayParam);
        result = _(array).difference(listParam, arrayParam);
        result = _(array).difference(arrayParam, listParam, arrayParam);

        result = _(list).difference<AbcObject>();
        result = _(list).difference<AbcObject>(listParam);
        result = _(list).difference<AbcObject>(arrayParam, listParam);
        result = _(list).difference<AbcObject>(listParam, arrayParam, listParam);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().difference();
        result = _(array).chain().difference(arrayParam);
        result = _(array).chain().difference(listParam, arrayParam);
        result = _(array).chain().difference(arrayParam, listParam, arrayParam);

        result = _(list).chain().difference<AbcObject>();
        result = _(list).chain().difference<AbcObject>(listParam);
        result = _(list).chain().difference<AbcObject>(arrayParam, listParam);
        result = _(list).chain().difference<AbcObject>(listParam, arrayParam, listParam);
    }
}

// _.differenceBy
namespace TestDifferenceBy {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let arrayParam: AbcObject[] = [];
    let listParam: _.List<AbcObject> = [];
    let iteratee: (value: AbcObject) => any = (value: AbcObject) => 1;

    {
        let result: AbcObject[];

        result = _.differenceBy(array);
        result = _.differenceBy<AbcObject>(array, arrayParam);
        result = _.differenceBy<AbcObject>(array, listParam, arrayParam);
        result = _.differenceBy<AbcObject>(array, arrayParam, listParam, arrayParam);
        result = _.differenceBy<AbcObject>(array, listParam, arrayParam, listParam, arrayParam);
        result = _.differenceBy<AbcObject>(array, arrayParam, listParam, arrayParam, listParam, arrayParam);
        result = _.differenceBy<AbcObject>(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        result = _.differenceBy(array, arrayParam, iteratee);
        result = _.differenceBy(array, listParam, arrayParam, iteratee);
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, iteratee);
        result = _.differenceBy(array, listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);

        result = _.differenceBy(array, arrayParam, 'a');
        result = _.differenceBy(array, listParam, arrayParam, 'a');
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, 'a');
        result = _.differenceBy(array, listParam, arrayParam, listParam, arrayParam, 'a');
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');

        result = _.differenceBy(array, arrayParam, {a: 1});
        result = _.differenceBy(array, listParam, arrayParam, {a: 1});
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, {a: 1});
        result = _.differenceBy(array, listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _.differenceBy(array, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});

        result = _.differenceBy(list);
        result = _.differenceBy<AbcObject>(list, listParam);
        result = _.differenceBy<AbcObject>(list, arrayParam, listParam);
        result = _.differenceBy<AbcObject>(list, listParam, arrayParam, listParam);
        result = _.differenceBy<AbcObject>(list, arrayParam, listParam, arrayParam, listParam);
        result = _.differenceBy<AbcObject>(list, listParam, arrayParam, listParam, arrayParam, listParam);
        result = _.differenceBy<AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam);

        result = _.differenceBy(list, listParam, iteratee);
        result = _.differenceBy(list, arrayParam, listParam, iteratee);
        result = _.differenceBy(list, listParam, arrayParam, listParam, iteratee);
        result = _.differenceBy(list, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);

        result = _.differenceBy(list, listParam, 'a');
        result = _.differenceBy(list, arrayParam, listParam, 'a');
        result = _.differenceBy(list, listParam, arrayParam, listParam, 'a');
        result = _.differenceBy(list, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, 'a');

        result = _.differenceBy(list, listParam, {a: 1});
        result = _.differenceBy(list, arrayParam, listParam, {a: 1});
        result = _.differenceBy(list, listParam, arrayParam, listParam, {a: 1});
        result = _.differenceBy(list, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
    }

    {
        let result: _.LoDashImplicitWrapper<AbcObject[]>;

        result = _(array).differenceBy<AbcObject>(arrayParam);
        result = _(array).differenceBy<AbcObject>(listParam, arrayParam);
        result = _(array).differenceBy<AbcObject>(arrayParam, listParam, arrayParam);
        result = _(array).differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam);
        result = _(array).differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam);
        result = _(array).differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        result = _(array).differenceBy(arrayParam, iteratee);
        result = _(array).differenceBy(listParam, arrayParam, iteratee);
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, iteratee);
        result = _(array).differenceBy(listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _(array).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);

        result = _(array).differenceBy(arrayParam, 'a');
        result = _(array).differenceBy(listParam, arrayParam, 'a');
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, 'a');
        result = _(array).differenceBy(listParam, arrayParam, listParam, arrayParam, 'a');
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');
        result = _(array).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');

        result = _(array).differenceBy(arrayParam, {a: 1});
        result = _(array).differenceBy(listParam, arrayParam, {a: 1});
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).differenceBy(listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});

        result = _(list).differenceBy<AbcObject>(listParam);
        result = _(list).differenceBy<AbcObject>(arrayParam, listParam);
        result = _(list).differenceBy<AbcObject>(listParam, arrayParam, listParam);
        result = _(list).differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam);
        result = _(list).differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam);
        result = _(list).differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam);

        result = _(list).differenceBy(listParam, iteratee);
        result = _(list).differenceBy(arrayParam, listParam, iteratee);
        result = _(list).differenceBy(listParam, arrayParam, listParam, iteratee);
        result = _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);

        result = _(list).differenceBy(listParam, 'a');
        result = _(list).differenceBy(arrayParam, listParam, 'a');
        result = _(list).differenceBy(listParam, arrayParam, listParam, 'a');
        result = _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, 'a');
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, 'a');

        result = _(list).differenceBy(listParam, {a: 1});
        result = _(list).differenceBy(arrayParam, listParam, {a: 1});
        result = _(list).differenceBy(listParam, arrayParam, listParam, {a: 1});
        result = _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject[]>;

        result = _(array).chain().differenceBy<AbcObject>(arrayParam);
        result = _(array).chain().differenceBy<AbcObject>(listParam, arrayParam);
        result = _(array).chain().differenceBy<AbcObject>(arrayParam, listParam, arrayParam);
        result = _(array).chain().differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam);
        result = _(array).chain().differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam);
        result = _(array).chain().differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        result = _(array).chain().differenceBy(arrayParam, iteratee);
        result = _(array).chain().differenceBy(listParam, arrayParam, iteratee);
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, iteratee);
        result = _(array).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _(array).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);

        result = _(array).chain().differenceBy(arrayParam, 'a');
        result = _(array).chain().differenceBy(listParam, arrayParam, 'a');
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, 'a');
        result = _(array).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, 'a');
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');
        result = _(array).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');

        result = _(array).chain().differenceBy(arrayParam, {a: 1});
        result = _(array).chain().differenceBy(listParam, arrayParam, {a: 1});
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _(array).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});

        result = _(list).chain().differenceBy<AbcObject>(listParam);
        result = _(list).chain().differenceBy<AbcObject>(arrayParam, listParam);
        result = _(list).chain().differenceBy<AbcObject>(listParam, arrayParam, listParam);
        result = _(list).chain().differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam);
        result = _(list).chain().differenceBy<AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam);
        result = _(list).chain().differenceBy<AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam);

        result = _(list).chain().differenceBy(listParam, iteratee);
        result = _(list).chain().differenceBy(arrayParam, listParam, iteratee);
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, iteratee);
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);

        result = _(list).chain().differenceBy(listParam, 'a');
        result = _(list).chain().differenceBy(arrayParam, listParam, 'a');
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, 'a');
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, 'a');
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, 'a');

        result = _(list).chain().differenceBy(listParam, {a: 1});
        result = _(list).chain().differenceBy(arrayParam, listParam, {a: 1});
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, {a: 1});
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
    }

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

        const t1: T1 = { a: 'a', b: 'b' };
        const t2: T2 = { a: 'a', b: 30 };
        const t3: T3 = { a: 'a', b: true };
        const t4: T4 = { a: 'a', b: [] };

        // $ExpectType T1[]
        _.differenceBy([t1], [t2], 'name');
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
        _.differenceBy([t1], [t2], [t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType T1[]
        _.differenceBy([t1], [t2], [t3], [t4], (value) => {
            value; // $ExpectType T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType T1[]
        _.differenceBy([t1], [t2], [t3], [t4], [''], (value) => {
            value; // $ExpectType string | T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType T1[]
        _.differenceBy([t1], [t2], [t3], [t4], [''], [42], (value) => {
            value; // $ExpectType string | number | T1 | T2 | T3 | T4
            return 0;
        });

        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], 'name');
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], (value) => {
            value; // $ExpectType T1 | T2
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2, t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<(T1 | T2)[]>
        _([t1, t2]).differenceBy([t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], [t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], [t3], [t4], (value) => {
            value; // $ExpectType T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], [t3], [t4], [''], (value) => {
            value; // $ExpectType string | T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceBy([t2], [t3], [t4], [''], [42], (value) => {
            value; // $ExpectType string | number | T1 | T2 | T3 | T4
            return 0;
        });

        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], 'name');
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], (value) => {
            value; // $ExpectType T1 | T2
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2, t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<(T1 | T2)[]>
        _.chain([t1, t2]).differenceBy([t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], [t3], (value) => {
            value; // $ExpectType T1 | T2 | T3
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], [t3], [t4], (value) => {
            value; // $ExpectType T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], [t3], [t4], [''], (value) => {
            value; // $ExpectType string | T1 | T2 | T3 | T4
            return 0;
        });
        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceBy([t2], [t3], [t4], [''], [42], (value) => {
            value; // $ExpectType string | number | T1 | T2 | T3 | T4
            return 0;
        });
    }
}

// _.differenceWith
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let arrayParam: AbcObject[] = [];
    let listParam: _.List<AbcObject> = [];
    let comparator = (a: AbcObject, b: AbcObject) => true;

    {
        // $ExpectType AbcObject[]
        _.differenceWith(array);
        // $ExpectType AbcObject[]
        _.differenceWith(array, arrayParam);
        // $ExpectType AbcObject[]
        _.differenceWith(array, listParam, arrayParam);
        // $ExpectType AbcObject[]
        _.differenceWith(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        // $ExpectType AbcObject[]
        _.differenceWith(array, arrayParam, comparator);
        // $ExpectType AbcObject[]
        _.differenceWith(array, listParam, arrayParam, comparator);
        // $ExpectType AbcObject[]
        _.differenceWith(array, listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator);
    }

    {
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(arrayParam);
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(listParam, arrayParam);
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(arrayParam, listParam, arrayParam);
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(arrayParam, comparator);
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(listParam, arrayParam, comparator);
        // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        _(array).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator);
    }

    {
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(arrayParam);
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(listParam, arrayParam);
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(arrayParam, listParam, arrayParam);
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(arrayParam, comparator);
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(listParam, arrayParam, comparator);
        // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        _.chain(array).differenceWith(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, comparator);
    }

    {
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

        // $ExpectType T1[]
        _.differenceWith([t1], [t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });

        // $ExpectType LoDashImplicitWrapper<T1[]>
        _([t1]).differenceWith([t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });

        // $ExpectType LoDashExplicitWrapper<T1[]>
        _.chain([t1]).differenceWith([t2], (a, b) => {
            a; // $ExpectType T1
            b; // $ExpectType T2 | undefined
            return true;
        });
    }
}

// _.drop
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];
        result = _.drop<AbcObject>(array);
        result = _.drop<AbcObject>(array, 42);

        result = _.drop<AbcObject>(list);
        result = _.drop<AbcObject>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).drop();
        result = _(array).drop(42);

        result = _(list).drop<AbcObject>();
        result = _(list).drop<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().drop();
        result = _(array).chain().drop(42);

        result = _(list).chain().drop<AbcObject>();
        result = _(list).chain().drop<AbcObject>(42);
    }
}

// _.dropRight
namespace TestDropRight {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.dropRight<AbcObject>(array);
        result = _.dropRight<AbcObject>(array, 42);

        result = _.dropRight<AbcObject>(list);
        result = _.dropRight<AbcObject>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropRight();
        result = _(array).dropRight(42);

        result = _(list).dropRight<AbcObject>();
        result = _(list).dropRight<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropRight();
        result = _(array).chain().dropRight(42);

        result = _(list).chain().dropRight<AbcObject>();
        result = _(list).chain().dropRight<AbcObject>(42);
    }
}

// _.dropRightWhile
namespace TestDropRightWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.dropRightWhile<AbcObject>(array);
        result = _.dropRightWhile<AbcObject>(array, predicateFn);
        result = _.dropRightWhile<AbcObject>(array, '');
        result = _.dropRightWhile(array, {a: 42});

        result = _.dropRightWhile<AbcObject>(list);
        result = _.dropRightWhile<AbcObject>(list, predicateFn);
        result = _.dropRightWhile<AbcObject>(list, '');
        result = _.dropRightWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropRightWhile();
        result = _(array).dropRightWhile(predicateFn);
        result = _(array).dropRightWhile('');
        result = _(array).dropRightWhile({a: 42});

        result = _(list).dropRightWhile<AbcObject>();
        result = _(list).dropRightWhile<AbcObject>(predicateFn);
        result = _(list).dropRightWhile<AbcObject>('');
        result = _(list).dropRightWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropRightWhile();
        result = _(array).chain().dropRightWhile(predicateFn);
        result = _(array).chain().dropRightWhile('');
        result = _(array).chain().dropRightWhile({a: 42});

        result = _(list).chain().dropRightWhile<AbcObject>();
        result = _(list).chain().dropRightWhile<AbcObject>(predicateFn);
        result = _(list).chain().dropRightWhile<AbcObject>('');
        result = _(list).chain().dropRightWhile({a: 42});
    }
}

// _.dropWhile
namespace TestDropWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.dropWhile<AbcObject>(array);
        result = _.dropWhile<AbcObject>(array, predicateFn);
        result = _.dropWhile<AbcObject>(array, '');
        result = _.dropWhile(array, {a: 42});

        result = _.dropWhile<AbcObject>(list);
        result = _.dropWhile<AbcObject>(list, predicateFn);
        result = _.dropWhile<AbcObject>(list, '');
        result = _.dropWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropWhile();
        result = _(array).dropWhile(predicateFn);
        result = _(array).dropWhile('');
        result = _(array).dropWhile({a: 42});

        result = _(list).dropWhile<AbcObject>();
        result = _(list).dropWhile<AbcObject>(predicateFn);
        result = _(list).dropWhile<AbcObject>('');
        result = _(list).dropWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropWhile();
        result = _(array).chain().dropWhile(predicateFn);
        result = _(array).chain().dropWhile('');
        result = _(array).chain().dropWhile({a: 42});

        result = _(list).chain().dropWhile<AbcObject>();
        result = _(list).chain().dropWhile<AbcObject>(predicateFn);
        result = _(list).chain().dropWhile<AbcObject>('');
        result = _(list).chain().dropWhile({a: 42});
    }
}

// _.fill
namespace TestFill {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

    {
        let result: number[];

        result = _.fill<number>(array, 42);
        result = _.fill(array, 42, 0);
        result = _.fill(array, 42, 0, 10);
    }

    {
        let result: _.List<number>;

        result = _.fill<number>(list, 42);
        result = _.fill(list, 42, 0);
        result = _.fill(list, 42, 0, 10);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(array).fill<number>(42);
        result = _(array).fill(42, 0);
        result = _(array).fill(42, 0, 10);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<number>>;

        result = _(list).fill<number>(42);
        result = _(list).fill(42, 0);
        result = _(list).fill(42, 0, 10);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(array).chain().fill<number>(42);
        result = _(array).chain().fill(42, 0);
        result = _(array).chain().fill(42, 0, 10);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<number>>;

        result = _(list).chain().fill<number>(42);
        result = _(list).chain().fill(42, 0);
        result = _(list).chain().fill(42, 0, 10);
    }
}

// _.findIndex
namespace TestFindIndex {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findIndex<AbcObject>(array);
        result = _.findIndex<AbcObject>(array, predicateFn);
        result = _.findIndex<AbcObject>(array, '');
        result = _.findIndex(array, {a: 42});
        result = _.findIndex<AbcObject>(array, predicateFn, fromIndex);

        result = _.findIndex<AbcObject>(list);
        result = _.findIndex<AbcObject>(list, predicateFn);
        result = _.findIndex<AbcObject>(list, '');
        result = _.findIndex(list, {a: 42});
        result = _.findIndex<AbcObject>(list, predicateFn, fromIndex);
        result = _.findIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findIndex();
        result = _(array).findIndex(predicateFn);
        result = _(array).findIndex('');
        result = _(array).findIndex<{a: number}>({a: 42});
        result = _(array).findIndex(predicateFn, fromIndex);

        result = _(list).findIndex();
        result = _(list).findIndex<AbcObject>(predicateFn);
        result = _(list).findIndex('');
        result = _(list).findIndex<{a: number}>({a: 42});
        result = _(list).findIndex<AbcObject>(predicateFn, fromIndex);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().findIndex();
        result = _(array).chain().findIndex(predicateFn);
        result = _(array).chain().findIndex('');
        result = _(array).chain().findIndex<{a: number}>({a: 42});
        result = _(array).chain().findIndex(predicateFn, fromIndex);

        result = _(list).chain().findIndex();
        result = _(list).chain().findIndex<AbcObject>(predicateFn);
        result = _(list).chain().findIndex('');
        result = _(list).chain().findIndex<{a: number}>({a: 42});
        result = _(list).chain().findIndex<AbcObject>(predicateFn, fromIndex);
    }
}

// _.findLastIndex
namespace TestFindLastIndex {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findLastIndex<AbcObject>(array);
        result = _.findLastIndex<AbcObject>(array, predicateFn);
        result = _.findLastIndex<AbcObject>(array, '');
        result = _.findLastIndex(array, {a: 42});
        result = _.findLastIndex<AbcObject>(array, predicateFn, fromIndex);

        result = _.findLastIndex<AbcObject>(list);
        result = _.findLastIndex<AbcObject>(list, predicateFn);
        result = _.findLastIndex<AbcObject>(list, '');
        result = _.findLastIndex(list, {a: 42});
        result = _.findLastIndex<AbcObject>(list, predicateFn, fromIndex);
        result = _.findLastIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findLastIndex();
        result = _(array).findLastIndex(predicateFn);
        result = _(array).findLastIndex('');
        result = _(array).findLastIndex<{a: number}>({a: 42});
        result = _(array).findLastIndex(predicateFn, fromIndex);

        result = _(list).findLastIndex();
        result = _(list).findLastIndex<AbcObject>(predicateFn);
        result = _(list).findLastIndex('');
        result = _(list).findLastIndex<{a: number}>({a: 42});
        result = _(list).findLastIndex<AbcObject>(predicateFn, fromIndex);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().findLastIndex();
        result = _(array).chain().findLastIndex(predicateFn);
        result = _(array).chain().findLastIndex('');
        result = _(array).chain().findLastIndex<{a: number}>({a: 42});
        result = _(array).chain().findLastIndex(predicateFn, fromIndex);

        result = _(list).chain().findLastIndex();
        result = _(list).chain().findLastIndex<AbcObject>(predicateFn);
        result = _(list).chain().findLastIndex('');
        result = _(list).chain().findLastIndex<{a: number}>({a: 42});
        result = _(list).chain().findLastIndex<AbcObject>(predicateFn, fromIndex);
    }
}

// _.first
namespace TestFirst {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.first('abc');
        result = _('abc').first();
    }

    {
        let result: AbcObject | undefined;

        result = _.first<AbcObject>(array);
        result = _.first<AbcObject>(list);

        result = _(array).first();
        result = _(list).first<AbcObject>();
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _('abc').chain().first();
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(array).chain().first();
        result = _(list).chain().first();
    }
}

// _.flatten
namespace TestFlatten {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flatten('abc');
    }

    {
        let result: number[];

        result = _.flatten<number>(array);
        result = _.flatten<number>(list);
        result = _.flatten<number>([1, 2, 3]);
        result = _.flatten<number>([1, 2, 3]);
        result = _.flatten<number>([1, 2, 3]);
        result = _.flatten<number>([1, [2, 3]]);

        result = _.flatten<number>({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flatten<number>({0: 1, 1: [2, 3], length: 2});
    }

    {
        let result: _.RecursiveArray<number>;

        result = _.flatten([1, [2, [3]]]);
        result = _.flatten([1, [2, [3]], [[4]]]);

        result = _.flatten({0: 1, 1: [2, [3]], length: 2});
        result = _.flatten({0: 1, 1: [2, [3]], 2: [[4]], length: 3});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatten();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).flatten<number>();
        result = _([1, [2, 3]]).flatten<number>();

        result = _({0: 1, 1: 2, 2: 3, length: 3}).flatten<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).flatten<number>();
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

        result = _({0: 1, 1: 2, 2: 3, length: 3}).chain().flatten<number>();
        result = _({0: 1, 1: [2, 3], length: 2}).chain().flatten<number>();
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
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flattenDeep('abc');
    }

    {
        let result: number[];

        result = _.flattenDeep<number>(array);
        result = _.flattenDeep<number>(list);
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

// _.fromPairs
namespace TestFromPairs {
    let twoDimensionalArray: string[][] | null | undefined = [] as any;
    let numberTupleArray: Array<[string, number]> | null | undefined = [] as any;
    let stringDict: _.Dictionary<string>;
    let numberDict: _.Dictionary<number>;

    {
        stringDict = _.fromPairs(twoDimensionalArray);
        numberDict = _.fromPairs(numberTupleArray);
        // Ensure we're getting the parameterized overload rather than the 'any' catch-all.
        numberDict = _.fromPairs<number>(numberTupleArray);
        // This doesn't compile because you can't assign arrays to tuples.
        // stringDict = _.fromPairs<string>(twoDimensionalArray);
    }

    {
        stringDict = _(twoDimensionalArray).fromPairs().value();
    }

    {
        stringDict = _.chain(twoDimensionalArray).fromPairs().value();
    }
}

// _.head
namespace TestHead {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.head('abc');
        result = _('abc').head();
    }

    {
        let result: AbcObject | undefined;

        result = _.head<AbcObject>(array);
        result = _.head<AbcObject>(list);

        result = _(array).head();
        result = _(list).head<AbcObject>();
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _('abc').chain().head();
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(array).chain().head();
        result = _(list).chain().head();
    }
}

// _.indexOf
namespace TestIndexOf {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.indexOf<AbcObject>(array, value);
        result = _.indexOf<AbcObject>(array, value, true);
        result = _.indexOf<AbcObject>(array, value, 42);

        result = _.indexOf<AbcObject>(list, value);
        result = _.indexOf<AbcObject>(list, value, true);
        result = _.indexOf<AbcObject>(list, value, 42);

        result = _(array).indexOf(value);
        result = _(array).indexOf(value, true);
        result = _(array).indexOf(value, 42);

        result = _(list).indexOf<AbcObject>(value);
        result = _(list).indexOf<AbcObject>(value, true);
        result = _(list).indexOf<AbcObject>(value, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().indexOf(value);
        result = _(array).chain().indexOf(value, true);
        result = _(array).chain().indexOf(value, 42);

        result = _(list).chain().indexOf<AbcObject>(value);
        result = _(list).chain().indexOf<AbcObject>(value, true);
        result = _(list).chain().indexOf<AbcObject>(value, 42);
    }
}

// _.sortedIndexOf
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedIndexOf<AbcObject>(array, value);
        result = _.sortedIndexOf<AbcObject>(list, value);
        result = _(array).sortedIndexOf(value);
        result = _(list).sortedIndexOf<AbcObject>(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sortedIndexOf(value);
        result = _(list).chain().sortedIndexOf<AbcObject>(value);
    }
}

//_.initial
namespace TestInitial {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.initial<AbcObject>(array);
        result = _.initial<AbcObject>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).initial();
        result = _(list).initial<AbcObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().initial();
        result = _(list).chain().initial<AbcObject>();
    }
}

// _.intersection
namespace TestIntersection {
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    {
        let result: AbcObject[];

        result = _.intersection<AbcObject>(array, list);
        result = _.intersection<AbcObject>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).intersection<AbcObject>(arrayParam);
        result = _(array).intersection<AbcObject>(listParam, arrayParam);

        result = _(list).intersection<AbcObject>(arrayParam);
        result = _(list).intersection<AbcObject>(listParam, arrayParam);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().intersection<AbcObject>(arrayParam);
        result = _(array).chain().intersection<AbcObject>(listParam, arrayParam);

        result = _(list).chain().intersection<AbcObject>(arrayParam);
        result = _(list).chain().intersection<AbcObject>(listParam, arrayParam);
    }
}

// _.intersectionBy
{
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    // $ExpectType AbcObject[]
    result = _.intersectionBy(array, list);
    // $ExpectType AbcObject[]
    result = _.intersectionBy(list, array, list);
    // $ExpectType AbcObject[]
    result = _.intersectionBy(array, list, 'a');
    // $ExpectType AbcObject[]
    result = _.intersectionBy(array, list, { a: 42 });
    // $ExpectType AbcObject[]
    result = _.intersectionBy(list, array, list, { a: 42 });
    // $ExpectType AbcObject[]
    result = _.intersectionBy(array, list, ['a', 42]);
    // $ExpectType AbcObject[]
    result = _.intersectionBy(array, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType AbcObject[]
    result = _.intersectionBy(list, array, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(arrayParam);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(listParam, arrayParam);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(list, 'a');
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(list, { a: 42 });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(list).intersectionBy(array, list, { a: 42 });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(list, ['a', 42]);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return "";
    });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(list).intersectionBy(array, list, (value) => {
        value; // $ExpectType AbcObject
        return 1;
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(arrayParam);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(listParam, arrayParam);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(list, 'a');
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(list, { a: 42 });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(list).intersectionBy(array, list, { a: 42 });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(list, ['a', 42]);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return false;
    });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(list).intersectionBy(array, list, (value) => {
        value; // $ExpectType AbcObject
        return null;
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
    result = _.intersectionBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return undefined;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    result = _([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    result = _.chain([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });
}

// _.intersectionWith
{
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    // $ExpectType AbcObject[]
    result = _.intersectionWith(array, list);
    // $ExpectType AbcObject[]
    result = _.intersectionWith(list, array, list);
    // $ExpectType AbcObject[]
    result = _.intersectionWith(array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType AbcObject[]
    result = _.intersectionWith(list, array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionWith(arrayParam);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionWith(listParam, arrayParam);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(array).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    result = _(list).intersectionWith(array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionWith(arrayParam);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionWith(listParam, arrayParam);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(array).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    result = _.chain(list).intersectionWith(array, list, (a, b) => {
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
    result = _.intersectionWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    result = _([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    result = _.chain([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
}

// _.join
namespace TestJoin {
    let array = [1, 2];
    let list = {0: 1, 1: 2, length: 2};
    let nilArray: string[] | null | undefined = undefined as any;
    let nilList: _.List<string> | null | undefined = undefined as any;

    {
        let result: string;

        result = _.join('abc');
        result = _.join('abc', '_');
        result = _.join(array);
        result = _.join(array, '_');
        result = _.join(list);
        result = _.join(list, '_');
        result = _.join(nilArray);
        result = _.join(nilArray, '_');
        result = _.join(nilList);
        result = _.join(nilList, '_');

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

// _.last
namespace TestLast {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.last('abc');
        result = _('abc').last();
    }

    {
        let result: AbcObject | undefined;

        result = _.last<AbcObject>(array);
        result = _.last<AbcObject>(list);

        result = _(array).last();
        result = _(list).last<AbcObject>();
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _('abc').chain().last();
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(array).chain().last();
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(list).chain().last();
    }
}

// _.lastIndexOf
namespace TestLastIndexOf {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.lastIndexOf<AbcObject>(array, value);
        result = _.lastIndexOf<AbcObject>(array, value, true);
        result = _.lastIndexOf<AbcObject>(array, value, 42);

        result = _.lastIndexOf<AbcObject>(list, value);
        result = _.lastIndexOf<AbcObject>(list, value, true);
        result = _.lastIndexOf<AbcObject>(list, value, 42);

        result = _(array).lastIndexOf(value);
        result = _(array).lastIndexOf(value, true);
        result = _(array).lastIndexOf(value, 42);

        result = _(list).lastIndexOf<AbcObject>(value);
        result = _(list).lastIndexOf<AbcObject>(value, true);
        result = _(list).lastIndexOf<AbcObject>(value, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().lastIndexOf(value);
        result = _(array).chain().lastIndexOf(value, true);
        result = _(array).chain().lastIndexOf(value, 42);

        result = _(list).chain().lastIndexOf<AbcObject>(value);
        result = _(list).chain().lastIndexOf<AbcObject>(value, true);
        result = _(list).chain().lastIndexOf<AbcObject>(value, 42);
    }
}

// _.nth
namespace TestNth {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value = 0;

    {
        let result: AbcObject | undefined;

        result = _.nth<AbcObject>(array);

        result = _.nth<AbcObject>(array, 42);

        result = _(array).nth();
        result = _(array).nth(42);

        result = _(list).nth<AbcObject>();
        result = _(list).nth<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(array).chain().nth();
        result = _(array).chain().nth(42);

        result = _(list).chain().nth<AbcObject>();
        result = _(list).chain().nth<AbcObject>(42);
    }
}

// _.pull
namespace TestPull {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: AbcObject[];

        result = _.pull<AbcObject>(array);
        result = _.pull<AbcObject>(array, value);
        result = _.pull<AbcObject>(array, value, value);
        result = _.pull<AbcObject>(array, value, value, value);
    }

    {
        let result: _.List<AbcObject>;

        result = _.pull<AbcObject>(list);
        result = _.pull<AbcObject>(list, value);
        result = _.pull<AbcObject>(list, value, value);
        result = _.pull<AbcObject>(list, value, value, value);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).pull();
        result = _(array).pull(value);
        result = _(array).pull(value, value);
        result = _(array).pull(value, value, value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).pull<AbcObject>();
        result = _(list).pull<AbcObject>(value);
        result = _(list).pull<AbcObject>(value, value);
        result = _(list).pull<AbcObject>(value, value, value);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().pull();
        result = _(array).chain().pull(value);
        result = _(array).chain().pull(value, value);
        result = _(array).chain().pull(value, value, value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).chain().pull<AbcObject>();
        result = _(list).chain().pull<AbcObject>(value);
        result = _(list).chain().pull<AbcObject>(value, value);
        result = _(list).chain().pull<AbcObject>(value, value, value);
    }
}

// _.pullAt
namespace TestPullAt {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];

    {
        let result: AbcObject[];

        result = _.pullAt<AbcObject>(array);
        result = _.pullAt<AbcObject>(array, 1);
        result = _.pullAt<AbcObject>(array, [2, 3], 1);
        result = _.pullAt<AbcObject>(array, 4, [2, 3], 1);
    }

    {
        let result: ArrayLike<AbcObject>;

        result = _.pullAt<AbcObject>(list);
        result = _.pullAt<AbcObject>(list, 1);
        result = _.pullAt<AbcObject>(list, [2, 3], 1);
        result = _.pullAt<AbcObject>(list, 4, [2, 3], 1);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).pullAt();
        result = _(array).pullAt(1);
        result = _(array).pullAt([2, 3], 1);
        result = _(array).pullAt(4, [2, 3], 1);
    }

    {
        let result: _.LoDashImplicitWrapper<ArrayLike<AbcObject>>;

        result = _(list).pullAt();
        result = _(list).pullAt(1);
        result = _(list).pullAt([2, 3], 1);
        result = _(list).pullAt(4, [2, 3], 1);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().pullAt();
        result = _(array).chain().pullAt(1);
        result = _(array).chain().pullAt([2, 3], 1);
        result = _(array).chain().pullAt(4, [2, 3], 1);
    }

    {
        let result: _.LoDashExplicitWrapper<ArrayLike<AbcObject>>;

        result = _(list).chain().pullAt();
        result = _(list).chain().pullAt(1);
        result = _(list).chain().pullAt([2, 3], 1);
        result = _(list).chain().pullAt(4, [2, 3], 1);
    }
}

// _.pullAll
{
    let array: AbcObject[] = anything;
    let list: _.List<AbcObject> = anything;
    let values: _.List<AbcObject> = anything;

    // $ExpectType AbcObject[]
    _.pullAll(array);
    // $ExpectType AbcObject[]
    _.pullAll(array, values);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAll(list);
    // $ExpectType ArrayLike<AbcObject>
    _.pullAll(list, values);

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAll();
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAll(values);
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAll();
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAll(values);

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAll();
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAll(values);
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAll();
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAll(values);
}

// _.pullAllBy
{
    let array: AbcObject[] = anything;
    let list: _.List<AbcObject> = anything;
    let values: _.List<AbcObject> = anything;

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

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy();
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy(values);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy(values, 'a');
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy(values, { a: 42 });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy(values, ['a', 42]);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy();
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy(values);
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy(values, 'a');
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy(values, { a: 42 });
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy(values, ['a', 42]);
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy();
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy(values);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy(values, 'a');
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy(values, { a: 42 });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy(values, ['a', 42]);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy();
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy(values);
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy(values, 'a');
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy(values, { a: 42 });
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy(values, ['a', 42]);
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllBy(values, (value) => {
        value; // $ExpectType AbcObject
        return 0;
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
    result = _.pullAllBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    result = _([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    result = _.chain([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
}

// _.pullAllWith
{
    let array: AbcObject[] = anything;
    let list: _.List<AbcObject> = anything;
    let values: _.List<AbcObject> = anything;

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

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllWith();
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllWith(values);
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllWith();
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllWith(values);
    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllWith();
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllWith(values);
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).pullAllWith(values, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllWith();
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllWith(values);
    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _.chain(list).pullAllWith(values, (a, b) => {
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
    result = _.pullAllWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    result = _([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    result = _.chain([t1]).pullAllWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
}

// _.remove
namespace TestRemove {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.remove<AbcObject>(array);
        result = _.remove<AbcObject>(array, predicateFn);
        result = _.remove<AbcObject>(array, '');
        result = _.remove(array, {a: 42});

        result = _.remove<AbcObject>(list);
        result = _.remove<AbcObject>(list, predicateFn);
        result = _.remove<AbcObject>(list, '');
        result = _.remove(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).remove();
        result = _(array).remove(predicateFn);
        result = _(array).remove('');
        result = _(array).remove({a: 42});

        result = _(list).remove<AbcObject>();
        result = _(list).remove<AbcObject>(predicateFn);
        result = _(list).remove<AbcObject>('');
        result = _(list).remove({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().remove();
        result = _(array).chain().remove(predicateFn);
        result = _(array).chain().remove('');
        result = _(array).chain().remove({a: 42});

        result = _(list).chain().remove<AbcObject>();
        result = _(list).chain().remove<AbcObject>(predicateFn);
        result = _(list).chain().remove<AbcObject>('');
        result = _(list).chain().remove({a: 42});
    }
}

// _.tail
namespace TestTail {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.tail<AbcObject>(array);
        result = _.tail<AbcObject>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).tail();
        result = _(list).tail<AbcObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().tail();
        result = _(list).chain().tail<AbcObject>();
    }
}

// _.slice
namespace TestSlice {
    let array: AbcObject[] | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.slice<AbcObject>(array);
        result = _.slice(array, 42);
        result = _.slice(array, 42, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).slice();
        result = _(array).slice(42);
        result = _(array).slice(42, 42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().slice();
        result = _(array).chain().slice(42);
        result = _(array).chain().slice(42, 42);
    }
}

// _.sortedIndex
namespace TestSortedIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedIndex<string>('', '');

        result = _.sortedIndex<SampleType>(array, value);

        result = _.sortedIndex<SampleType>(list, value);

        result = _('').sortedIndex('');

        result = _(array).sortedIndex(value);

        result = _(list).sortedIndex<SampleType>(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedIndex('');

        result = _(array).chain().sortedIndex(value);

        result = _(list).chain().sortedIndex<SampleType>(value);
    }
}

// _.sortedIndexBy
namespace TestSortedIndexBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator = (x: string) => 0;
    let arrayIterator = (x: SampleType) => 0;
    let listIterator = (x: SampleType) => 0;

    {
        let result: number;

        result = _.sortedIndexBy<string>('', '', stringIterator);

        result = _.sortedIndexBy<SampleType>(array, value, arrayIterator);
        result = _.sortedIndexBy<SampleType>(array, value, '');
        result = _.sortedIndexBy<SampleType>(array, value, {a: 42});

        result = _.sortedIndexBy<SampleType>(list, value, listIterator);
        result = _.sortedIndexBy<SampleType>(list, value, '');
        result = _.sortedIndexBy<SampleType>(list, value, {a: 42});

        result = _('').sortedIndexBy('', stringIterator);

        result = _(array).sortedIndexBy(value, arrayIterator);
        result = _(array).sortedIndexBy(value, '');
        result = _(array).sortedIndexBy(value, {a: 42});

        result = _(list).sortedIndexBy<SampleType>(value, listIterator);
        result = _(list).sortedIndexBy<SampleType>(value, '');
        result = _(list).sortedIndexBy<SampleType>(value, {a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedIndexBy('', stringIterator);

        result = _(array).chain().sortedIndexBy(value, arrayIterator);
        result = _(array).chain().sortedIndexBy(value, '');
        result = _(array).chain().sortedIndexBy(value, {a: 42});

        result = _(list).chain().sortedIndexBy<SampleType>(value, listIterator);
        result = _(list).chain().sortedIndexBy<SampleType>(value, '');
        result = _(list).chain().sortedIndexBy<SampleType>(value, {a: 42});
    }
}

// _.sortedLastIndex
namespace TestSortedLastIndex {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedLastIndex<string>('', '');

        result = _.sortedLastIndex<SampleType>(array, value);

        result = _.sortedLastIndex<SampleType>(list, value);

        result = _('').sortedLastIndex('');

        result = _(array).sortedLastIndex(value);

        result = _(list).sortedLastIndex<SampleType>(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndex('');

        result = _(array).chain().sortedLastIndex(value);

        result = _(list).chain().sortedLastIndex<SampleType>(value);
    }
}

// _.sortedLastIndexBy
namespace TestSortedLastIndexBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator = (x: string) => 0;
    let arrayIterator = (x: SampleType) => 0;
    let listIterator = (x: SampleType) => 0;

    {
        let result: number;

        result = _.sortedLastIndexBy<string>('', '', stringIterator);

        result = _.sortedLastIndexBy<SampleType>(array, value, arrayIterator);
        result = _.sortedLastIndexBy<SampleType>(array, value, '');
        result = _.sortedLastIndexBy<SampleType>(array, value, {a: 42});

        result = _.sortedLastIndexBy<SampleType>(list, value, listIterator);
        result = _.sortedLastIndexBy<SampleType>(list, value, '');
        result = _.sortedLastIndexBy<SampleType>(list, value, {a: 42});

        result = _('').sortedLastIndexBy('', stringIterator);

        result = _(array).sortedLastIndexBy(value, arrayIterator);
        result = _(array).sortedLastIndexBy(value, '');
        result = _(array).sortedLastIndexBy(value, {a: 42});

        result = _(list).sortedLastIndexBy<SampleType>(value, listIterator);
        result = _(list).sortedLastIndexBy<SampleType>(value, '');
        result = _(list).sortedLastIndexBy<SampleType>(value, {a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndexBy('', stringIterator);

        result = _(array).chain().sortedLastIndexBy(value, arrayIterator);
        result = _(array).chain().sortedLastIndexBy(value, '');
        result = _(array).chain().sortedLastIndexBy(value, {a: 42});

        result = _(list).chain().sortedLastIndexBy<SampleType>(value, listIterator);
        result = _(list).chain().sortedLastIndexBy<SampleType>(value, '');
        result = _(list).chain().sortedLastIndexBy<SampleType>(value, {a: 42});
    }
}

// _.take
namespace TestTake {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.take<AbcObject>(array);
        result = _.take<AbcObject>(array, 42);

        result = _.take<AbcObject>(list);
        result = _.take<AbcObject>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).take();
        result = _(array).take(42);

        result = _(list).take<AbcObject>();
        result = _(list).take<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().take();
        result = _(array).chain().take(42);

        result = _(list).chain().take<AbcObject>();
        result = _(list).chain().take<AbcObject>(42);
    }
}

// _.takeRight
namespace TestTakeRight {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.takeRight<AbcObject>(array);
        result = _.takeRight<AbcObject>(array, 42);

        result = _.takeRight<AbcObject>(list);
        result = _.takeRight<AbcObject>(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeRight();
        result = _(array).takeRight(42);

        result = _(list).takeRight<AbcObject>();
        result = _(list).takeRight<AbcObject>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeRight();
        result = _(array).chain().takeRight(42);

        result = _(list).chain().takeRight<AbcObject>();
        result = _(list).chain().takeRight<AbcObject>(42);
    }
}

// _.takeRightWhile
namespace TestTakeRightWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.takeRightWhile<AbcObject>(array);
        result = _.takeRightWhile<AbcObject>(array, predicateFn);
        result = _.takeRightWhile<AbcObject>(array, '');
        result = _.takeRightWhile(array, {a: 42});

        result = _.takeRightWhile<AbcObject>(list);
        result = _.takeRightWhile<AbcObject>(list, predicateFn);
        result = _.takeRightWhile<AbcObject>(list, '');
        result = _.takeRightWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeRightWhile();
        result = _(array).takeRightWhile(predicateFn);
        result = _(array).takeRightWhile('');
        result = _(array).takeRightWhile({a: 42});

        result = _(list).takeRightWhile<AbcObject>();
        result = _(list).takeRightWhile<AbcObject>(predicateFn);
        result = _(list).takeRightWhile<AbcObject>('');
        result = _(list).takeRightWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeRightWhile();
        result = _(array).chain().takeRightWhile(predicateFn);
        result = _(array).chain().takeRightWhile('');
        result = _(array).chain().takeRightWhile({a: 42});

        result = _(list).chain().takeRightWhile<AbcObject>();
        result = _(list).chain().takeRightWhile<AbcObject>(predicateFn);
        result = _(list).chain().takeRightWhile<AbcObject>('');
        result = _(list).chain().takeRightWhile({a: 42});
    }
}

// _.takeWhile
namespace TestTakeWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.takeWhile<AbcObject>(array);
        result = _.takeWhile<AbcObject>(array, predicateFn);
        result = _.takeWhile<AbcObject>(array, '');
        result = _.takeWhile(array, {a: 42});

        result = _.takeWhile<AbcObject>(list);
        result = _.takeWhile<AbcObject>(list, predicateFn);
        result = _.takeWhile<AbcObject>(list, '');
        result = _.takeWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeWhile();
        result = _(array).takeWhile(predicateFn);
        result = _(array).takeWhile('');
        result = _(array).takeWhile({a: 42});

        result = _(list).takeWhile<AbcObject>();
        result = _(list).takeWhile<AbcObject>(predicateFn);
        result = _(list).takeWhile<AbcObject>('');
        result = _(list).takeWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeWhile();
        result = _(array).chain().takeWhile(predicateFn);
        result = _(array).chain().takeWhile('');
        result = _(array).chain().takeWhile({a: 42});

        result = _(list).chain().takeWhile<AbcObject>();
        result = _(list).chain().takeWhile<AbcObject>(predicateFn);
        result = _(list).chain().takeWhile<AbcObject>('');
        result = _(list).chain().takeWhile({a: 42});
    }
}

// _.union
namespace TestUnion {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.union<AbcObject>();

        result = _.union<AbcObject>(array);
        result = _.union<AbcObject>(array, list);
        result = _.union<AbcObject>(array, list, array);

        result = _.union<AbcObject>(list);
        result = _.union<AbcObject>(list, array);
        result = _.union<AbcObject>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).union();
        result = _(array).union(list);
        result = _(array).union(list, array);

        result = _(array).union<AbcObject>();
        result = _(array).union<AbcObject>(list);
        result = _(array).union<AbcObject>(list, array);

        result = _(list).union<AbcObject>();
        result = _(list).union<AbcObject>(array);
        result = _(list).union<AbcObject>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().union();
        result = _(array).chain().union(list);
        result = _(array).chain().union(list, array);

        result = _(array).chain().union<AbcObject>();
        result = _(array).chain().union<AbcObject>(list);
        result = _(array).chain().union<AbcObject>(list, array);

        result = _(list).chain().union<AbcObject>();
        result = _(list).chain().union<AbcObject>(array);
        result = _(list).chain().union<AbcObject>(array, list);
    }
}

// _.unionBy
namespace TestUnionBy {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let iteratee: (value: AbcObject) => any = (value: AbcObject) => 1;

    {
        let result: AbcObject[];

        result = _.unionBy<AbcObject>(array, array);
        result = _.unionBy<AbcObject>(array, list, array);
        result = _.unionBy<AbcObject>(array, array, list, array);
        result = _.unionBy<AbcObject>(array, list, array, list, array);
        result = _.unionBy<AbcObject>(array, array, list, array, list, array);

        result = _.unionBy<AbcObject>(array, array, iteratee);
        result = _.unionBy<AbcObject>(array, list, array, iteratee);
        result = _.unionBy<AbcObject>(array, array, list, array, iteratee);
        result = _.unionBy<AbcObject>(array, list, array, list, array, iteratee);
        result = _.unionBy<AbcObject>(array, array, list, array, list, array, iteratee);

        result = _.unionBy<AbcObject>(array, array, 'a');
        result = _.unionBy<AbcObject>(array, list, array, 'a');
        result = _.unionBy<AbcObject>(array, array, list, array, 'a');
        result = _.unionBy<AbcObject>(array, list, array, list, array, 'a');
        result = _.unionBy<AbcObject>(array, array, list, array, list, array, 'a');

        result = _.unionBy(array, array, {a: 1});
        result = _.unionBy(array, list, array, {a: 1});
        result = _.unionBy(array, array, list, array, {a: 1});
        result = _.unionBy(array, list, array, list, array, {a: 1});
        result = _.unionBy<AbcObject>(array, list, array, list, array, list, {a: 1});

        result = _.unionBy<AbcObject>(list, list);
        result = _.unionBy<AbcObject>(list, array, list);
        result = _.unionBy<AbcObject>(list, list, array, list);
        result = _.unionBy<AbcObject>(list, array, list, array, list);
        result = _.unionBy<AbcObject>(list, list, array, list, array, list);

        result = _.unionBy<AbcObject>(list, list, iteratee);
        result = _.unionBy<AbcObject>(list, array, list, iteratee);
        result = _.unionBy<AbcObject>(list, list, array, list, iteratee);
        result = _.unionBy<AbcObject>(list, array, list, array, list, iteratee);
        result = _.unionBy<AbcObject>(list, list, array, list, array, list, iteratee);

        result = _.unionBy<AbcObject>(list, list, 'a');
        result = _.unionBy<AbcObject>(list, array, list, 'a');
        result = _.unionBy<AbcObject>(list, list, array, list, 'a');
        result = _.unionBy<AbcObject>(list, array, list, array, list, 'a');
        result = _.unionBy<AbcObject>(list, list, array, list, array, list, 'a');

        result = _.unionBy(list, list, {a: 1});
        result = _.unionBy(list, array, list, {a: 1});
        result = _.unionBy(list, list, array, list, {a: 1});
        result = _.unionBy(list, array, list, array, list, {a: 1});
        result = _.unionBy<AbcObject>(list, array, list, array, list, array, {a: 1});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).unionBy<AbcObject>(array);
        result = _(array).unionBy<AbcObject>(list, array);
        result = _(array).unionBy<AbcObject>(array, list, array);
        result = _(array).unionBy<AbcObject>(list, array, list, array);
        result = _(array).unionBy<AbcObject>(array, list, array, list, array);

        result = _(array).unionBy<AbcObject>(array, iteratee);
        result = _(array).unionBy<AbcObject>(list, array, iteratee);
        result = _(array).unionBy<AbcObject>(array, list, array, iteratee);
        result = _(array).unionBy<AbcObject>(list, array, list, array, iteratee);
        result = _(array).unionBy<AbcObject>(array, list, array, list, array, iteratee);

        result = _(array).unionBy<AbcObject>(array, 'a');
        result = _(array).unionBy<AbcObject>(list, array, 'a');
        result = _(array).unionBy<AbcObject>(array, list, array, 'a');
        result = _(array).unionBy<AbcObject>(list, array, list, array, 'a');
        result = _(array).unionBy<AbcObject>(array, list, array, list, array, 'a');

        result = _(array).unionBy(array, {a: 1});
        result = _(array).unionBy(list, array, {a: 1});
        result = _(array).unionBy(array, list, array, {a: 1});
        result = _(array).unionBy(list, array, list, array, {a: 1});
        result = _(array).unionBy<AbcObject>(list, array, list, array, list, {a: 1});

        result = _(list).unionBy<AbcObject>(list);
        result = _(list).unionBy<AbcObject>(array, list);
        result = _(list).unionBy<AbcObject>(list, array, list);
        result = _(list).unionBy<AbcObject>(array, list, array, list);
        result = _(list).unionBy<AbcObject>(list, array, list, array, list);

        result = _(list).unionBy<AbcObject>(list, iteratee);
        result = _(list).unionBy<AbcObject>(array, list, iteratee);
        result = _(list).unionBy<AbcObject>(list, array, list, iteratee);
        result = _(list).unionBy<AbcObject>(array, list, array, list, iteratee);
        result = _(list).unionBy<AbcObject>(list, array, list, array, list, iteratee);

        result = _(list).unionBy<AbcObject>(list, 'a');
        result = _(list).unionBy<AbcObject>(array, list, 'a');
        result = _(list).unionBy<AbcObject>(list, array, list, 'a');
        result = _(list).unionBy<AbcObject>(array, list, array, list, 'a');
        result = _(list).unionBy<AbcObject>(list, array, list, array, list, 'a');

        result = _(list).unionBy(list, {a: 1});
        result = _(list).unionBy(array, list, {a: 1});
        result = _(list).unionBy(list, array, list, {a: 1});
        result = _(list).unionBy(array, list, array, list, {a: 1});
        result = _(list).unionBy<AbcObject>(array, list, array, list, array, {a: 1});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().unionBy<AbcObject>(array);
        result = _(array).chain().unionBy<AbcObject>(list, array);
        result = _(array).chain().unionBy<AbcObject>(array, list, array);
        result = _(array).chain().unionBy<AbcObject>(list, array, list, array);
        result = _(array).chain().unionBy<AbcObject>(array, list, array, list, array);

        result = _(array).chain().unionBy<AbcObject>(array, iteratee);
        result = _(array).chain().unionBy<AbcObject>(list, array, iteratee);
        result = _(array).chain().unionBy<AbcObject>(array, list, array, iteratee);
        result = _(array).chain().unionBy<AbcObject>(list, array, list, array, iteratee);
        result = _(array).chain().unionBy<AbcObject>(array, list, array, list, array, iteratee);

        result = _(array).chain().unionBy<AbcObject>(array, 'a');
        result = _(array).chain().unionBy<AbcObject>(list, array, 'a');
        result = _(array).chain().unionBy<AbcObject>(array, list, array, 'a');
        result = _(array).chain().unionBy<AbcObject>(list, array, list, array, 'a');
        result = _(array).chain().unionBy<AbcObject>(array, list, array, list, array, 'a');

        result = _(array).chain().unionBy(array, {a: 1});
        result = _(array).chain().unionBy(list, array, {a: 1});
        result = _(array).chain().unionBy(array, list, array, {a: 1});
        result = _(array).chain().unionBy(list, array, list, array, {a: 1});
        result = _(array).chain().unionBy<AbcObject>(list, array, list, array, list, {a: 1});

        result = _(list).chain().unionBy<AbcObject>(list);
        result = _(list).chain().unionBy<AbcObject>(array, list);
        result = _(list).chain().unionBy<AbcObject>(list, array, list);
        result = _(list).chain().unionBy<AbcObject>(array, list, array, list);
        result = _(list).chain().unionBy<AbcObject>(list, array, list, array, list);

        result = _(list).chain().unionBy<AbcObject>(list, iteratee);
        result = _(list).chain().unionBy<AbcObject>(array, list, iteratee);
        result = _(list).chain().unionBy<AbcObject>(list, array, list, iteratee);
        result = _(list).chain().unionBy<AbcObject>(array, list, array, list, iteratee);
        result = _(list).chain().unionBy<AbcObject>(list, array, list, array, list, iteratee);

        result = _(list).chain().unionBy<AbcObject>(list, 'a');
        result = _(list).chain().unionBy<AbcObject>(array, list, 'a');
        result = _(list).chain().unionBy<AbcObject>(list, array, list, 'a');
        result = _(list).chain().unionBy<AbcObject>(array, list, array, list, 'a');
        result = _(list).chain().unionBy<AbcObject>(list, array, list, array, list, 'a');

        result = _(list).chain().unionBy(list, {a: 1});
        result = _(list).chain().unionBy(array, list, {a: 1});
        result = _(list).chain().unionBy(list, array, list, {a: 1});
        result = _(list).chain().unionBy(array, list, array, list, {a: 1});
        result = _(list).chain().unionBy<AbcObject>(array, list, array, list, array, {a: 1});
    }
}

// _.uniq
namespace TestUniq {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.uniq<string>('abc');
    }

    {
        let result: SampleObject[];

        result = _.uniq<SampleObject>(array);
        result = _.uniq<SampleObject>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;
        result = _('abc').uniq();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).uniq();
        result = _(list).uniq<SampleObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().uniq();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().uniq();
        result = _(list).chain().uniq<SampleObject>();
    }
}

// _.uniqBy
namespace TestUniqBy {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 0;

    {
        let result: string[];

        result = _.uniqBy('abc', stringIterator);
    }

    {
        let result: SampleObject[];

        result = _.uniqBy<SampleObject>(array, listIterator);
        result = _.uniqBy<SampleObject>(array, 'a');
        result = _.uniqBy<SampleObject>(array, {a: 42});

        result = _.uniqBy<SampleObject>(list, listIterator);
        result = _.uniqBy<SampleObject>(list, 'a');
        result = _.uniqBy<SampleObject>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').uniqBy(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).uniqBy(listIterator);
        result = _(array).uniqBy('a');
        result = _(array).uniqBy({a: 42});

        result = _(list).uniqBy<SampleObject>(listIterator);
        result = _(list).uniqBy<SampleObject>('a');
        result = _(list).uniqBy<SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().uniqBy(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().uniqBy(listIterator);
        result = _(array).chain().uniqBy('a');
        result = _(array).chain().uniqBy({a: 42});

        result = _(list).chain().uniqBy<SampleObject>(listIterator);
        result = _(list).chain().uniqBy<SampleObject>('a');
        result = _(list).chain().uniqBy<SampleObject>({a: 42});
    }
}

// _.sortedUniq
namespace TestSortedUniq {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.sortedUniq<string>('abc');
    }

    {
        let result: SampleObject[];
        result = _.sortedUniq<SampleObject>(array);
        result = _.sortedUniq<SampleObject>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;
        result = _('abc').sortedUniq();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;
        result = _(array).sortedUniq();
        result = _(list).sortedUniq<SampleObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;
        result = _('abc').chain().sortedUniq();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;
        result = _(array).chain().sortedUniq();
        result = _(list).chain().sortedUniq<SampleObject>();
    }
}

// _.sortedUniqBy
namespace TestSortedUniqBy {
    type SampleObject = {a: number; b: string; c: boolean};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 0;

    {
        let result: string[];

        result = _.sortedUniqBy('abc', stringIterator);
    }

    {
        let result: SampleObject[];

        result = _.sortedUniqBy<SampleObject>(array, listIterator);
        result = _.sortedUniqBy<SampleObject>(array, 'a');
        result = _.sortedUniqBy<SampleObject>(array, {a: 42});

        result = _.sortedUniqBy<SampleObject>(list, listIterator);
        result = _.sortedUniqBy<SampleObject>(list, 'a');
        result = _.sortedUniqBy<SampleObject>(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').sortedUniqBy(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).sortedUniqBy(listIterator);
        result = _(array).sortedUniqBy('a');
        result = _(array).sortedUniqBy({a: 42});

        result = _(list).sortedUniqBy<SampleObject>(listIterator);
        result = _(list).sortedUniqBy<SampleObject>('a');
        result = _(list).sortedUniqBy<SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().sortedUniqBy(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().sortedUniqBy(listIterator);
        result = _(array).chain().sortedUniqBy('a');
        result = _(array).chain().sortedUniqBy({a: 42});

        result = _(list).chain().sortedUniqBy<SampleObject>(listIterator);
        result = _(list).chain().sortedUniqBy<SampleObject>('a');
        result = _(list).chain().sortedUniqBy<SampleObject>({a: 42});
    }
}

// _.unzip
namespace TestUnzip {
    let array = [['a', 'b'], [1, 2], [true, false]];

    let list: _.List<_.List<string|number|boolean>> = {
        0: {0: 'a', 1: 'b', length: 2},
        1: {0: 1, 1: 2, length: 2},
        2: {0: true, 1: false, length: 2},
        length: 3
    };
    let nilArray: AbcObject[][] | null | undefined = [] as any;
    let nilList: _.List<_.List<AbcObject>> | null | undefined = [] as any;

    {
        let result: AbcObject[][];

        result = _.unzip(nilArray);
        result = _.unzip(nilList);
    }

    {
        let result: Array<Array<string|number|boolean>>;

        result = _.unzip<string|number|boolean>(array);
        result = _.unzip<string|number|boolean>(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<Array<string|number|boolean>>;

        result = _(array).unzip<string|number|boolean>();
        result = _(list).unzip<string|number|boolean>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<Array<string|number|boolean>>;

        result = _(array).chain().unzip<string|number|boolean>();
        result = _(list).chain().unzip<string|number|boolean>();
    }
}

// _.unzipWith
{
    let testUnzipWithArray: Array<number[]|_.List<number>> | null | undefined = [] as any;
    let testUnzipWithList: _.List<number[]|_.List<number>> | null | undefined = [] as any;

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
        result = _.unzipWith(testUnzipWithArray, (...group) => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        });
        result = _.unzipWith(testUnzipWithArray, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        });
        result = _.unzipWith(testUnzipWithList, (...group) => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        });
        result = _.unzipWith(testUnzipWithList, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        });

        result = _(testUnzipWithArray).unzipWith((...group): AbcObject => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        }).value();
        result = _(testUnzipWithArray).unzipWith((value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        }).value();
        result = _(testUnzipWithList).unzipWith((...group): AbcObject => {
            group; // $ExpectType number[]
            return anything as AbcObject;
        }).value();
        result = _(testUnzipWithList).unzipWith((value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return anything as AbcObject;
        }).value();
    }
}

// _.without
namespace TestWithout {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

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
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.xor<AbcObject>();

        result = _.xor<AbcObject>(array);
        result = _.xor<AbcObject>(array, list);
        result = _.xor<AbcObject>(array, list, array);

        result = _.xor<AbcObject>(list);
        result = _.xor<AbcObject>(list, array);
        result = _.xor<AbcObject>(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).xor();
        result = _(array).xor(list);
        result = _(array).xor(list, array);

        result = _(list).xor<AbcObject>();
        result = _(list).xor<AbcObject>(array);
        result = _(list).xor<AbcObject>(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().xor();
        result = _(array).chain().xor(list);
        result = _(array).chain().xor(list, array);

        result = _(list).chain().xor<AbcObject>();
        result = _(list).chain().xor<AbcObject>(array);
        result = _(list).chain().xor<AbcObject>(array, list);
    }
}

// _.zip
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

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
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(array).zip<AbcObject>(list);
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(array).zip<AbcObject>(list, array);

        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(list).zip<AbcObject>(array);
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(list).zip<AbcObject>(array, list);
    }

    {
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(array).chain().zip<AbcObject>(list);
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(array).chain().zip<AbcObject>(list, array);

        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(list).chain().zip<AbcObject>(array);
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(list).chain().zip<AbcObject>(array, list);
    }

    {
        _.zip([1, 2], [3, 4]); // $ExpectType [number | undefined, number | undefined][]
        _.zip([1, 2], ["a", "b"]); // $ExpectType [number | undefined, string | undefined][]
        _.zip([1, 2], ["a", "b"], [true, false]); // $ExpectType [number | undefined, string | undefined, boolean | undefined][]
    }
}

// _.zipObject
namespace TestZipObject {
    const zipObjectResult = _.zipObject(['a', 'b'], [1, 2]);
    const zipObjectDeepResult = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);

    let arrayOfKeys: string[] = [];
    let arrayOfValues: number[] = [];

    let listOfKeys: _.List<string> = [];
    let listOfValues: _.List<number> = [];

    {
        let result: _.Dictionary<void>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObject(listOfKeys);
    }

    {
        let result: _.Dictionary<number>;

        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);

        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);
    }

    {
        let result: _.Dictionary<any>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObjectDeep(arrayOfKeys);
        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObjectDeep(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);
        result = _.zipObjectDeep(arrayOfKeys, listOfValues);

        result = _.zipObject(listOfKeys);
        result = _.zipObjectDeep(listOfKeys);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _.zipObjectDeep(listOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);
        result = _.zipObjectDeep(listOfKeys, arrayOfValues);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).zipObject();
        result = _(listOfKeys).zipObject();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).zipObject(arrayOfValues);
        result = _(arrayOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObject(arrayOfValues);

        result = _(arrayOfKeys).zipObject(arrayOfValues);
        result = _(arrayOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObject(arrayOfValues);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).zipObject();
        result = _(arrayOfKeys).zipObjectDeep();
        result = _(arrayOfKeys).zipObject(arrayOfValues);
        result = _(arrayOfKeys).zipObjectDeep(arrayOfValues);
        result = _(arrayOfKeys).zipObject(listOfValues);
        result = _(arrayOfKeys).zipObjectDeep(listOfValues);

        result = _(listOfKeys).zipObject();
        result = _(listOfKeys).zipObjectDeep();
        result = _(listOfKeys).zipObject(listOfValues);
        result = _(listOfKeys).zipObjectDeep(listOfValues);
        result = _(listOfKeys).zipObject(arrayOfValues);
        result = _(listOfKeys).zipObjectDeep(arrayOfValues);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<void>>;

        result = _(arrayOfKeys).chain().zipObject();
        result = _(listOfKeys).chain().zipObject();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObject(arrayOfValues);

        result = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObject(arrayOfValues);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<any>>;

        result = _(arrayOfKeys).chain().zipObject();
        result = _(arrayOfKeys).chain().zipObjectDeep();
        result = _(arrayOfKeys).chain().zipObject(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObjectDeep(arrayOfValues);
        result = _(arrayOfKeys).chain().zipObject(listOfValues);
        result = _(arrayOfKeys).chain().zipObjectDeep(listOfValues);

        result = _(listOfKeys).chain().zipObject();
        result = _(listOfKeys).chain().zipObjectDeep();
        result = _(listOfKeys).chain().zipObject(listOfValues);
        result = _(listOfKeys).chain().zipObjectDeep(listOfValues);
        result = _(listOfKeys).chain().zipObject(arrayOfValues);
        result = _(listOfKeys).chain().zipObjectDeep(arrayOfValues);
    }
}

// _.zipWith
{
    {
        let result: number[];

        result = _.zipWith([1, 2], (value1) => {
            value1; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], (value1, value2) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], [1, 2], (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5, value6) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            value6; // $ExpectType number
            return 1;
        });
        result = _.zipWith([1, 2], [1, 2], [1, 2], (...group: number[]) => 1);
        result = _.zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
            group; // $ExpectType number[]
            return 1;
        });

        let mat = [[1, 2], [1, 2], [1, 2]];
        result = _.zipWith(...mat, (...group: number[]) => 1);

        result = _([1, 2]).zipWith((value1) => {
            value1; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], (value1, value2) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], (value1, value2, value3, value4) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5, value6) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            value6; // $ExpectType number
            return 1;
        }).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], (...group: number[]) => 1).value();
        result = _([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
            group; // $ExpectType number[]
            return 1;
        }).value();

        result = _.chain([1, 2]).zipWith((value1) => {
            value1; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], (value1, value2) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], [1, 2], (value1, value2, value3, value4) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (value1, value2, value3, value4, value5, value6) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            value4; // $ExpectType number
            value5; // $ExpectType number
            value6; // $ExpectType number
            return 1;
        }).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], (...group: number[]) => 1).value();
        result = _.chain([1, 2]).zipWith([1, 2], [1, 2], [1, 2], [1, 2], [1, 2], (...group) => {
            group; // $ExpectType number[]
            return 1;
        }).value();

        result = _([1, 2]).zipWith(["a", "b"], (value1, value2) => {
            value1; // $ExpectType number
            value2; // $ExpectType string
            return 1;
        }).value();

        result = _([1, 2]).zipWith(["a", "b"], [true, false], (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType string
            value3; // $ExpectType boolean
            return 1;
        }).value();
    }
}

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

    {
        let interceptor = (value: string) => {};
        let result: _.LoDashImplicitWrapper<string>;

        _.chain('').tap(interceptor);

        _('').tap(interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashImplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);

        _(['']).tap(interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashImplicitWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);

        _({a: ''}).tap(interceptor);
    }

    {
        let interceptor = (value: string) => {};
        let result: _.LoDashExplicitWrapper<string>;

        _.chain('').tap(interceptor);

        _('').chain().tap(interceptor);
    }

    {
        let interceptor = (value: string[]) => {};
        let result: _.LoDashExplicitArrayWrapper<string>;

        _.chain(['']).tap(interceptor);

        _(['']).chain().tap(interceptor);
    }

    {
        let interceptor = (value: {a: string}) => {};
        let result: _.LoDashExplicitWrapper<{a: string}>;

        _.chain({a: ''}).tap(interceptor);

        _({a: ''}).chain().tap(interceptor);
    }
}

// _.thru
namespace TestThru {
    type Interceptor<T> = (value: T) => T;

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: number;

        result = _.thru<number, number>(1, interceptor);
    }

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: _.LoDashImplicitWrapper<number>;

        result = _(1).thru<number>(interceptor);
    }

    {
        let interceptor: Interceptor<string> = (x) => x;
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').thru<string>(interceptor);
    }

    {
        let interceptor: Interceptor<boolean> = (x) => x;
        let result: _.LoDashImplicitWrapper<boolean>;

        result = _(true).thru<boolean>(interceptor);
    }

    {
        let interceptor: Interceptor<{a: string}> = (x) => x;
        let result: _.LoDashImplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).thru<{a: string}>(interceptor);
    }

    {
        let interceptor: Interceptor<number[]> = (x) => x;
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2, 3]).thru(interceptor);
    }

    {
        let interceptor: Interceptor<number> = (x) => x;
        let result: _.LoDashExplicitWrapper<number>;

        result = _(1).chain().thru<number>(interceptor);
    }

    {
        let interceptor: Interceptor<string> = (x) => x;
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().thru<string>(interceptor);
    }

    {
        let interceptor: Interceptor<boolean> = (x) => x;
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(true).chain().thru<boolean>(interceptor);
    }

    {
        let interceptor: Interceptor<{a: string}> = (x) => x;
        let result: _.LoDashExplicitObjectWrapper<{a: string}>;

        result = _({a: ''}).chain().thru<{a: string}>(interceptor);
    }

    {
        let interceptor: Interceptor<number[]> = (x) => x;
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2, 3]).chain().thru(interceptor);
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
    const numberROA: ReadonlyArray<number> = [0];

    _.concat(1); // $ExpectType number[]
    _.concat([1]); // $ExpectType number[]
    _.concat(numberROA); // $ExpectType number[]
    _.concat(1, 2); // $ExpectType number[]
    _.concat(1, [1]); // $ExpectType number[]
    _.concat(1, [1], numberROA); // $ExpectType number[]

    _(1).concat(2); // $ExpectType LoDashImplicitWrapper<number[]>
    _(1).concat([1]); // $ExpectType LoDashImplicitWrapper<number[]>
    _(1).concat([2], numberROA); // $ExpectType LoDashImplicitWrapper<number[]>
    _([1]).concat(2); // $ExpectType LoDashImplicitWrapper<number[]>
    _(numberROA).concat(numberROA); // $ExpectType LoDashImplicitWrapper<number[]>
    _(numberROA).concat(numberROA, numberROA); // $ExpectType LoDashImplicitWrapper<number[]>

    _.chain(1).concat(2); // $ExpectType LoDashExplicitWrapper<number[]>
    _.chain(1).concat([1]); // $ExpectType LoDashExplicitWrapper<number[]>
    _.chain(1).concat([2], numberROA); // $ExpectType LoDashExplicitWrapper<number[]>
    _.chain([1]).concat(2); // $ExpectType LoDashExplicitWrapper<number[]>
    _.chain(numberROA).concat(numberROA); // $ExpectType LoDashExplicitWrapper<number[]>
    _.chain(numberROA).concat(numberROA, numberROA); // $ExpectType LoDashExplicitWrapper<number[]>

    const stringROA: ReadonlyArray<string> = [''];

    _.concat('a'); // $ExpectType string[]
    _.concat(['a']); // $ExpectType string[]
    _.concat(stringROA); // $ExpectType string[]
    _.concat('a', 'b'); // $ExpectType string[]
    _.concat('a', ['a']); // $ExpectType string[]
    _.concat('a', ['a'], stringROA); // $ExpectType string[]

    _('a').concat('b'); // $ExpectType LoDashImplicitWrapper<string[]>
    _('a').concat(['a']); // $ExpectType LoDashImplicitWrapper<string[]>
    _('a').concat(['b'], stringROA); // $ExpectType LoDashImplicitWrapper<string[]>
    _(['a']).concat('b'); // $ExpectType LoDashImplicitWrapper<string[]>
    _(stringROA).concat(stringROA); // $ExpectType LoDashImplicitWrapper<string[]>
    _(stringROA).concat(stringROA, stringROA); // $ExpectType LoDashImplicitWrapper<string[]>

    _.chain('a').concat('b'); // $ExpectType LoDashExplicitWrapper<string[]>
    _.chain('a').concat(['a']); // $ExpectType LoDashExplicitWrapper<string[]>
    _.chain('a').concat(['b'], stringROA); // $ExpectType LoDashExplicitWrapper<string[]>
    _.chain(['a']).concat('b'); // $ExpectType LoDashExplicitWrapper<string[]>
    _.chain(stringROA).concat(stringROA); // $ExpectType LoDashExplicitWrapper<string[]>
    _.chain(stringROA).concat(stringROA, stringROA); // $ExpectType LoDashExplicitWrapper<string[]>

    const abcObject: AbcObject = { a: 1, b: 'foo', c: true };
    const objectROA: ReadonlyArray<AbcObject> = [{ a: 1, b: 'foo', c: true }];

    _.concat(abcObject); // $ExpectType AbcObject[]
    _.concat([abcObject]); // $ExpectType AbcObject[]
    _.concat(objectROA); // $ExpectType AbcObject[]
    _.concat(abcObject, abcObject); // $ExpectType AbcObject[]
    _.concat(abcObject, [abcObject]); // $ExpectType AbcObject[]
    _.concat(abcObject, [abcObject], objectROA); // $ExpectType AbcObject[]

    _(abcObject).concat(abcObject); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(abcObject).concat([abcObject]); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(abcObject).concat([abcObject], objectROA); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _([abcObject]).concat(abcObject); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(objectROA).concat(objectROA); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(objectROA).concat(objectROA, objectROA); // $ExpectType LoDashImplicitWrapper<AbcObject[]>

    _.chain(abcObject).concat(abcObject); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(abcObject).concat([abcObject]); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(abcObject).concat([abcObject], objectROA); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain([abcObject]).concat(abcObject); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(objectROA).concat(objectROA); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(objectROA).concat(objectROA, objectROA); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
}

// _.prototype.plant
namespace TestPlant {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(anything).plant(42);
    }

    {
        let result: _.LoDashImplicitStringWrapper;
        result = _(anything).plant('');
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(anything).plant(true);
    }

    {
        let result: _.LoDashImplicitNumberArrayWrapper;
        result = _(anything).plant([42]);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<any>;
        result = _(anything).plant<any>([]);
    }

    {
        let result: _.LoDashImplicitWrapper<{}>;
        result = _(anything).plant<{}>({});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(anything).chain().plant(42);
    }

    {
        let result: _.LoDashExplicitStringWrapper;
        result = _(anything).chain().plant('');
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _(anything).chain().plant(true);
    }

    {
        let result: _.LoDashExplicitNumberArrayWrapper;
        result = _(anything).chain().plant([42]);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;
        result = _(anything).chain().plant<any>([]);
    }

    {
        let result: _.LoDashExplicitWrapper<{}>;
        result = _(anything).chain().plant<{}>({});
    }
}

// _.prototype.reverse
namespace TestReverse {
    {
        let result: _.LoDashImplicitArrayWrapper<number>;
        result = _([42]).reverse();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;
        result = _([42]).chain().reverse();
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

        result = _(['']).toJSON();
        result = _(['']).chain().toJSON();
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
    result = _(['']).toString();
    result = _({}).toString();

    result = _('').chain().toString();
    result = _(42).chain().toString();
    result = _(true).chain().toString();
    result = _(['']).chain().toString();
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

        result = _(['']).value();
        result = _(['']).chain().value();
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

        result = _(['']).valueOf();
        result = _(['']).chain().valueOf();
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

// _.at
namespace TestAt {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let dictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    {
        let result: AbcObject[];

        result = _.at<AbcObject>(array, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<AbcObject>(list, 0, '1', [2], ['3'], [4, '5']);
        result = _.at<AbcObject>(dictionary, 0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).at<AbcObject>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).at<AbcObject>(0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).chain().at<AbcObject>(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).chain().at<AbcObject>(0, '1', [2], ['3'], [4, '5']);
    }
}

// _.countBy
namespace TestCountBy {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: _.List<AbcObject>) => any = (value: AbcObject, index: number, collection: _.List<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;
    let numericDictionaryIterator: (value: AbcObject, key: number, collection: _.NumericDictionary<AbcObject>) => any = (value: AbcObject, key: number, collection: _.NumericDictionary<AbcObject>) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.countBy<string>('');
        result = _.countBy<string>('', stringIterator);

        result = _.countBy<AbcObject>(array);
        result = _.countBy<AbcObject>(array, listIterator);
        result = _.countBy<AbcObject>(array, '');
        result = _.countBy(array, {a: 42});
        result = _.countBy<AbcObject>(array, {a: 42});

        result = _.countBy<AbcObject>(list);
        result = _.countBy<AbcObject>(list, listIterator);
        result = _.countBy<AbcObject>(list, '');
        result = _.countBy(list, {a: 42});
        result = _.countBy<AbcObject>(list, {a: 42});

        result = _.countBy<AbcObject>(dictionary);
        result = _.countBy(dictionary, dictionaryIterator);
        result = _.countBy<AbcObject>(dictionary, '');
        result = _.countBy(dictionary, {a: 42});
        result = _.countBy<AbcObject>(dictionary, {a: 42});

        result = _.countBy<AbcObject>(numericDictionary);
        result = _.countBy<AbcObject>(numericDictionary, numericDictionaryIterator);
        result = _.countBy<AbcObject>(numericDictionary, '');
        result = _.countBy(numericDictionary, {a: 42});
        result = _.countBy<AbcObject>(numericDictionary, {a: 42});
    }

    {
        let resutl: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _('').countBy();
        result = _('').countBy(stringIterator);

        result = _(array).countBy();
        result = _(array).countBy(listIterator);
        result = _(array).countBy('');
        result = _(array).countBy<{a: number}>({a: 42});
        result = _(array).countBy({a: 42});

        result = _(list).countBy();
        result = _(list).countBy<AbcObject>(listIterator);
        result = _(list).countBy('');
        result = _(list).countBy<{a: number}>({a: 42});
        result = _(list).countBy({a: 42});

        result = _(dictionary).countBy();
        result = _(dictionary).countBy(dictionaryIterator);
        result = _(dictionary).countBy('');
        result = _(dictionary).countBy<{a: number}>({a: 42});
        result = _(dictionary).countBy({a: 42});

        result = _(numericDictionary).countBy();
        result = _(numericDictionary).countBy<AbcObject>(numericDictionaryIterator);
        result = _(numericDictionary).countBy('');
        result = _(numericDictionary).countBy<{a: number}>({a: 42});
        result = _(numericDictionary).countBy({a: 42});
    }

    {
        let resutl: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _('').chain().countBy();
        result = _('').chain().countBy(stringIterator);

        result = _(array).chain().countBy();
        result = _(array).chain().countBy(listIterator);
        result = _(array).chain().countBy('');
        result = _(array).chain().countBy<{a: number}>({a: 42});
        result = _(array).chain().countBy({a: 42});

        result = _(list).chain().countBy();
        result = _(list).chain().countBy<AbcObject>(listIterator);
        result = _(list).chain().countBy('');
        result = _(list).chain().countBy<{a: number}>({a: 42});
        result = _(list).chain().countBy({a: 42});

        result = _(dictionary).chain().countBy();
        result = _(dictionary).chain().countBy(dictionaryIterator);
        result = _(dictionary).chain().countBy('');
        result = _(dictionary).chain().countBy<{a: number}>({a: 42});
        result = _(dictionary).chain().countBy({a: 42});

        result = _(numericDictionary).chain().countBy();
        result = _(numericDictionary).chain().countBy<AbcObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().countBy('');
        result = _(numericDictionary).chain().countBy<{a: number}>({a: 42});
        result = _(numericDictionary).chain().countBy({a: 42});
    }
}

// _.each
namespace TestEach {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = [] as any;
    let nilList: _.List<AbcObject> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: _.List<AbcObject>) => any = (value: AbcObject, index: number, collection: _.List<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        result = _.each('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.each('' as (string | null | undefined), stringIterator);
    }

    {
        let result: AbcObject[];

        result = _.each(array, listIterator);
    }

    {
        let result: AbcObject[] | null | undefined;

        result = _.each(nilArray, listIterator);
    }

    {
        let result: _.List<AbcObject>;

        result = _.each(list, listIterator);
    }

    {
        let result: _.List<AbcObject> | null | undefined;

        result = _.each(nilList, listIterator);
    }

    {
        let result: _.Dictionary<AbcObject | null | undefined>;

        result = _.each(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        result = _.each(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').each(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).each(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).each<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).each(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().each(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().each(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).chain().each<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().each(dictionaryIterator);
    }
}

// _.eachRight
namespace TestEachRight {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = [] as any;
    let nilList: _.List<AbcObject> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: AbcObject, index: number, collection: _.List<AbcObject>) => any = (value: AbcObject, index: number, collection: _.List<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        result = _.eachRight('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.eachRight('' as (string | null | undefined), stringIterator);
    }

    {
        let result: AbcObject[];

        result = _.eachRight(array, listIterator);
    }

    {
        let result: AbcObject[] | null | undefined;

        result = _.eachRight(nilArray, listIterator);
    }

    {
        let result: _.List<AbcObject>;

        result = _.eachRight(list, listIterator);
    }

    {
        let result: _.List<AbcObject> | null | undefined;

        result = _.eachRight(nilList, listIterator);
    }

    {
        let result: _.Dictionary<AbcObject | null | undefined>;

        result = _.eachRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        result = _.eachRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').eachRight(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).eachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).eachRight<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).eachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().eachRight(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().eachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).chain().eachRight<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().eachRight(dictionaryIterator);
    }
}

// _.every
namespace TestEvery {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;

    {
        let result: boolean;

        result = _.every<SampleObject>(array);
        result = _.every<SampleObject>(array, listIterator);
        result = _.every<SampleObject>(array, 'a');
        result = _.every<SampleObject>(array, ['a', 42]);
        result = _.every<SampleObject>(array, {a: 42});

        result = _.every<SampleObject>(list);
        result = _.every<SampleObject>(list, listIterator);
        result = _.every<SampleObject>(list, 'a');
        result = _.every<SampleObject>(list, ['a', 42]);
        result = _.every<SampleObject>(list, {a: 42});

        result = _.every<SampleObject>(dictionary);
        result = _.every(dictionary, dictionaryIterator);
        result = _.every<SampleObject>(dictionary, 'a');
        result = _.every<SampleObject>(dictionary, ['a', 42]);
        result = _.every<SampleObject>(dictionary, {a: 42});

        result = _.every<SampleObject>(numericDictionary);
        result = _.every<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.every<SampleObject>(numericDictionary, 'a');
        result = _.every<SampleObject>(numericDictionary, ['a', 42]);
        result = _.every<SampleObject>(numericDictionary, {a: 42});

        result = _(array).every();
        result = _(array).every(listIterator);
        result = _(array).every('a');
        result = _(array).every(['a', 42]);
        result = _(array).every({a: 42});

        result = _(list).every<SampleObject>();
        result = _(list).every<SampleObject>(listIterator);
        result = _(list).every('a');
        result = _(list).every(['a', 42]);
        result = _(list).every({a: 42});

        result = _(dictionary).every<SampleObject>();
        result = _(dictionary).every(dictionaryIterator);
        result = _(dictionary).every('a');
        result = _(dictionary).every(['a', 42]);
        result = _(dictionary).every({a: 42});

        result = _(numericDictionary).every<SampleObject>();
        result = _(numericDictionary).every<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).every('a');
        result = _(numericDictionary).every(['a', 42]);
        result = _(numericDictionary).every({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().every();
        result = _(array).chain().every(listIterator);
        result = _(array).chain().every('a');
        result = _(array).chain().every(['a', 42]);
        result = _(array).chain().every({a: 42});

        result = _(list).chain().every<SampleObject>();
        result = _(list).chain().every<SampleObject>(listIterator);
        result = _(list).chain().every('a');
        result = _(list).chain().every(['a', 42]);
        result = _(list).chain().every<SampleObject>({a: 42});

        result = _(dictionary).chain().every<SampleObject>();
        result = _(dictionary).chain().every(dictionaryIterator);
        result = _(dictionary).chain().every('a');
        result = _(dictionary).chain().every(['a', 42]);
        result = _(dictionary).chain().every<SampleObject>({a: 42});

        result = _(numericDictionary).chain().every<SampleObject>();
        result = _(numericDictionary).chain().every<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().every('a');
        result = _(numericDictionary).chain().every(['a', 42]);
        result = _(numericDictionary).chain().every<{a: number}>({a: 42});
    }
}

// _.filter
namespace TestFilter {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => true;
    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    {
        let result: string[];

        result = _.filter('', stringIterator);
    }

    {
        let result: AbcObject[];

        result = _.filter<AbcObject>(array, listIterator);
        result = _.filter<AbcObject>(array, '');
        result = _.filter<AbcObject>(array, {a: 42});
        result = _.filter<AbcObject>(array, ["a", 42]);

        result = _.filter<AbcObject>(list, listIterator);
        result = _.filter<AbcObject>(list, '');
        result = _.filter<AbcObject>(list, {a: 42});
        result = _.filter<AbcObject>(list, ["a", 42]);

        result = _.filter(dictionary, dictionaryIterator);
        result = _.filter(dictionary, '');
        result = _.filter(dictionary, {a: 42});
        result = _.filter(dictionary, ["a", 42]);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').filter(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).filter(listIterator);
        result = _(array).filter('');
        result = _(array).filter({a: 42});
        result = _(array).filter(["a", 42]);

        result = _(list).filter<AbcObject>(listIterator);
        result = _(list).filter<AbcObject>('');
        result = _(list).filter<AbcObject>({a: 42});
        result = _(list).filter<AbcObject>(["a", 42]);

        result = _(dictionary).filter(dictionaryIterator);
        result = _(dictionary).filter('');
        result = _(dictionary).filter({a: 42});
        result = _(dictionary).filter(["a", 42]);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().filter(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().filter(listIterator);
        result = _(array).chain().filter('');
        result = _(array).chain().filter({a: 42});
        result = _(array).chain().filter(["a", 42]);

        result = _(list).chain().filter<AbcObject>(listIterator);
        result = _(list).chain().filter<AbcObject>('');
        result = _(list).chain().filter<AbcObject>({a: 42});
        result = _(list).chain().filter<AbcObject>(["a", 42]);

        result = _(dictionary).chain().filter(dictionaryIterator);
        result = _(dictionary).chain().filter('');
        result = _(dictionary).chain().filter({a: 42});
        result = _(dictionary).chain().filter(["a", 42]);
    }

    {
        // Test filtering with type guard
        let a2: Array<string | number> | null | undefined = anything;
        let d2: _.Dictionary<string | number> | null | undefined = anything;

        _.filter(a2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _.filter(d2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _(a2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitWrapper<number[]>
        _(d2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitWrapper<number[]>
        _(a2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitWrapper<number[]>
        _(d2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitWrapper<number[]>
    }
}

// _.find
namespace TestFind {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    let result: AbcObject | undefined;

    result = _.find(array);
    result = _.find<AbcObject>(array);
    result = _.find<AbcObject>(array, listIterator);
    result = _.find<AbcObject>(array, listIterator, 1);
    result = _.find<AbcObject>(array, '');
    result = _.find<AbcObject>(array, '', 1);
    result = _.find<AbcObject>(array, {a: 42});
    result = _.find<AbcObject>(array, {a: 42}, 1);
    result = _.find(array, ['a', 5]);
    result = _.find(array, ['a', 5], 1);

    result = _.find(list);
    result = _.find<AbcObject>(list);
    result = _.find<AbcObject>(list, listIterator);
    result = _.find<AbcObject>(list, listIterator, 1);
    result = _.find<AbcObject>(list, '');
    result = _.find<AbcObject>(list, '', 1);
    result = _.find<AbcObject>(list, {a: 42});
    result = _.find<AbcObject>(list, {a: 42}, 1);
    result = _.find(list, ['a', 5]);
    result = _.find(list, ['a', 5], 1);

    result = _.find(dictionary);
    result = _.find(dictionary);
    result = _.find(dictionary, dictionaryIterator);
    result = _.find(dictionary, dictionaryIterator, 1);
    result = _.find(dictionary, '');
    result = _.find(dictionary, '', 1);
    result = _.find(dictionary, {a: 42});
    result = _.find(dictionary, {a: 42}, 1);
    result = _.find(dictionary, ['a', 5]);
    result = _.find(dictionary, ['a', 5], 1);

    result = _(array).find();
    result = _(array).find(listIterator);
    result = _(array).find(listIterator, 1);
    result = _(array).find('');
    result = _(array).find('', 1);
    result = _(array).find({a: 42});
    result = _(array).find({a: 42}, 1);
    result = _(array).find(['a', 5]);
    result = _(array).find(['a', 5], 1);

    result = _(list).find<AbcObject>();
    result = _(list).find<AbcObject>(listIterator);
    result = _(list).find<AbcObject>(listIterator, 1);
    result = _(list).find<AbcObject>('');
    result = _(list).find<AbcObject>('', 1);
    result = _(list).find<AbcObject>({a: 42});
    result = _(list).find<AbcObject>({a: 42}, 1);
    result = _(list).find<AbcObject>(['a', 5]);
    result = _(list).find<AbcObject>(['a', 5], 1);

    result = _(dictionary).find();
    result = _(dictionary).find(dictionaryIterator);
    result = _(dictionary).find(dictionaryIterator, 1);
    result = _(dictionary).find('');
    result = _(dictionary).find('', 1);
    result = _(dictionary).find({a: 42});
    result = _(dictionary).find({a: 42}, 1);
    result = _(dictionary).find(['a', 5]);
    result = _(dictionary).find(['a', 5], 1);

    result = _.find([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
    result = _([anything as AbcObject, null, undefined]).find((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
}

// _.findLast
namespace TestFindLast {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    let result: AbcObject | undefined;

    result = _.findLast(array);
    result = _.findLast<AbcObject>(array);
    result = _.findLast<AbcObject>(array, listIterator);
    result = _.findLast<AbcObject>(array, listIterator, 1);
    result = _.findLast<AbcObject>(array, '');
    result = _.findLast<AbcObject>(array, '', 1);
    result = _.findLast<AbcObject>(array, {a: 42});
    result = _.findLast<AbcObject>(array, {a: 42}, 1);
    result = _.findLast(array, ['a', 5]);
    result = _.findLast(array, ['a', 5], 1);

    result = _.findLast(list);
    result = _.findLast<AbcObject>(list);
    result = _.findLast<AbcObject>(list, listIterator);
    result = _.findLast<AbcObject>(list, listIterator, 1);
    result = _.findLast<AbcObject>(list, '');
    result = _.findLast<AbcObject>(list, '', 1);
    result = _.findLast<AbcObject>(list, {a: 42});
    result = _.findLast<AbcObject>(list, {a: 42}, 1);
    result = _.findLast(list, ['a', 5]);
    result = _.findLast(list, ['a', 5], 1);

    result = _.findLast(dictionary);
    result = _.findLast(dictionary);
    result = _.findLast(dictionary, dictionaryIterator);
    result = _.findLast(dictionary, dictionaryIterator, 1);
    result = _.findLast(dictionary, '');
    result = _.findLast(dictionary, '', 1);
    result = _.findLast(dictionary, {a: 42});
    result = _.findLast(dictionary, {a: 42}, 1);
    result = _.findLast(dictionary, ['a', 5]);
    result = _.findLast(dictionary, ['a', 5], 1);

    result = _(array).findLast();
    result = _(array).findLast(listIterator);
    result = _(array).findLast(listIterator, 1);
    result = _(array).findLast('');
    result = _(array).findLast('', 1);
    result = _(array).findLast({a: 42});
    result = _(array).findLast({a: 42}, 1);
    result = _(array).findLast(['a', 5]);
    result = _(array).findLast(['a', 5], 1);

    result = _(list).findLast<AbcObject>();
    result = _(list).findLast<AbcObject>(listIterator);
    result = _(list).findLast<AbcObject>(listIterator, 1);
    result = _(list).findLast<AbcObject>('');
    result = _(list).findLast<AbcObject>('', 1);
    result = _(list).findLast<AbcObject>({a: 42});
    result = _(list).findLast<AbcObject>({a: 42}, 1);
    result = _(list).findLast<AbcObject>(['a', 5]);
    result = _(list).findLast<AbcObject>(['a', 5], 1);

    result = _(dictionary).findLast();
    result = _(dictionary).findLast(dictionaryIterator);
    result = _(dictionary).findLast(dictionaryIterator, 1);
    result = _(dictionary).findLast('');
    result = _(dictionary).findLast('', 1);
    result = _(dictionary).findLast({a: 42});
    result = _(dictionary).findLast({a: 42}, 1);
    result = _(dictionary).findLast(['a', 5]);
    result = _(dictionary).findLast(['a', 5], 1);

    result = _.findLast([anything as AbcObject, null, undefined], (value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
    result = _([anything as AbcObject, null, undefined]).findLast((value: AbcObject | null | undefined): value is AbcObject | undefined => value !== null);
}

// _.flatMap
namespace TestFlatMap {
    let numArray: Array<number|number[]> | null | undefined = [1, [2, 3]] as any;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = [{a: 1}, [{a: 2}, {a: 3}]] as any;

    let obj: any = {};
    let numList: _.List<number|number[]> | null | undefined = obj;
    let objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = obj;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = obj;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => string|string[] = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => number|number[] = (a, b, c) => 1;

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

    {
        let result: string[];

        result = _.flatMap<string>('abc');
        result = _.flatMap('abc');

        result = _.flatMap<string, string>('abc', stringIterator);
        result = _.flatMap('abc', stringIterator);
    }

    {
        let result: number[];

        result = _.flatMap(numArray);
        result = _.flatMap<number>(numArray);

        result = _.flatMap(numArray, listIterator);
        result = _.flatMap<number|number[], number>(numArray, listIterator);

        result = _.flatMap(objArray, 'a');

        result = _.flatMap(numList);
        result = _.flatMap<number>(numList);

        result = _.flatMap(numList, listIterator);
        result = _.flatMap<number|number[], number>(numList, listIterator);

        result = _.flatMap(objList, 'a');

        result = _.flatMap(numDictionary);
        result = _.flatMap<number>(numDictionary);

        result = _.flatMap(numDictionary, dictionaryIterator);

        result = _.flatMap(objDictionary, 'a');

        result = _.flatMap(numNumericDictionary);
        result = _.flatMap<number>(numNumericDictionary);

        result = _.flatMap(numNumericDictionary, numericDictionaryIterator);
        result = _.flatMap<number|number[], number>(numNumericDictionary, numericDictionaryIterator);

        result = _.flatMap(objNumericDictionary, 'a');
    }

    {
        let result: boolean[];

        result = _.flatMap(objArray, ['a', 42]);
        result = _.flatMap(objArray, {'a': 42});

        result = _.flatMap(objList, ['a', 42]);
        result = _.flatMap(objList, {'a': 42});

        result = _.flatMap(objDictionary, ['a', 42]);
        result = _.flatMap(objDictionary, {'a': 42});

        result = _.flatMap(objNumericDictionary, ['a', 42]);
        result = _.flatMap(objNumericDictionary, {'a': 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatMap();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(numArray).flatMap<number>();
        result = _(numArray).flatMap(listIterator);
        result = _(objArray).flatMap('a');

        result = _(numList).flatMap<number>();
        result = _(numList).flatMap<number|number[], number>(listIterator);
        result = _(objList).flatMap('a');

        result = _(numDictionary).flatMap<number>();
        result = _(numDictionary).flatMap(dictionaryIterator);
        result = _(objDictionary).flatMap('a');

        result = _(numNumericDictionary).flatMap<number>();
        result = _(numNumericDictionary).flatMap<number|number[], number>(numericDictionaryIterator);
        result = _(objNumericDictionary).flatMap('a');
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _(objArray).flatMap(['a', 42]);
        result = _(objArray).flatMap({a: 42});

        result = _(objList).flatMap(['a', 42]);
        result = _(objList).flatMap({a: 42});

        result = _(objDictionary).flatMap(['a', 42]);
        result = _(objDictionary).flatMap({a: 42});

        result = _(objNumericDictionary).flatMap(['a', 42]);
        result = _(objNumericDictionary).flatMap({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flatMap();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(numArray).chain().flatMap<number>();
        result = _(numArray).chain().flatMap(listIterator);
        result = _(objArray).chain().flatMap('a');

        result = _(numList).chain().flatMap<number>();
        result = _(numList).chain().flatMap<number|number[], number>(listIterator);
        result = _(objList).chain().flatMap('a');

        result = _(numDictionary).chain().flatMap<number>();
        result = _(numDictionary).chain().flatMap(dictionaryIterator);
        result = _(objDictionary).chain().flatMap('a');

        result = _(numNumericDictionary).chain().flatMap<number>();
        result = _(numNumericDictionary).chain().flatMap<number|number[], number>(numericDictionaryIterator);
        result = _(objNumericDictionary).chain().flatMap('a');
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _(objArray).chain().flatMap(['a', 42]);
        result = _(objArray).chain().flatMap({a: 42});

        result = _(objList).chain().flatMap(['a', 42]);
        result = _(objList).chain().flatMap({a: 42});

        result = _(objDictionary).chain().flatMap(['a', 42]);
        result = _(objDictionary).chain().flatMap({a: 42});

        result = _(objNumericDictionary).chain().flatMap(['a', 42]);
        result = _(objNumericDictionary).chain().flatMap({a: 42});
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
        const result2: _.LoDashImplicitWrapper<Array<string | number>> = _(obj).flatMap();
        const result3: _.LoDashExplicitWrapper<Array<string | number>> = _.chain(obj).flatMap();
    }
}

// _.flatMapDeep
namespace TestFlatMapDeep {
    let numArray: Array<number|number[]> | null | undefined = [1, [2, 3]] as any;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = [{a: 1}, [{a: 2}, {a: 3}]] as any;

    let numList: _.List<number|number[]> | null | undefined = anything;
    let objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => ['a', 'b', 'c'];

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) =>_.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        result = _.flatMapDeep('abc');

        result = _.flatMapDeep('abc', stringIterator);
    }

    {
        let result: number[];

        result = _.flatMapDeep<number>(numArray);

        result = _.flatMapDeep(numArray, listIterator);

        result = _.flatMapDeep(objArray, 'a');

        result = _.flatMapDeep<number>(numList);

        result = _.flatMapDeep(numList, listIterator);

        result = _.flatMapDeep(objList, 'a');

        result = _.flatMapDeep<number>(numDictionary);

        result = _.flatMapDeep(numDictionary, dictionaryIterator);

        result = _.flatMapDeep(objDictionary, 'a');

        result = _.flatMapDeep<number>(numNumericDictionary);

        result = _.flatMapDeep(numNumericDictionary, numericDictionaryIterator);

        result = _.flatMapDeep(objNumericDictionary, 'a');
    }

    {
        let result: boolean[];

        result = _.flatMapDeep(objArray, ['a', 42]);
        result = _.flatMapDeep(objArray, {'a': 42});

        result = _.flatMapDeep(objList, ['a', 42]);
        result = _.flatMapDeep(objList, {'a': 42});

        result = _.flatMapDeep(objDictionary, ['a', 42]);
        result = _.flatMapDeep(objDictionary, {'a': 42});

        result = _.flatMapDeep(objNumericDictionary, ['a', 42]);
        result = _.flatMapDeep(objNumericDictionary, {'a': 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatMapDeep();
        result = _('abc').flatMapDeep(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(numArray).flatMapDeep<number>();
        result = _(numArray).flatMapDeep(listIterator);
        result = _(objArray).flatMapDeep('a');

        result = _(numList).flatMapDeep<number>();
        result = _(numList).flatMapDeep(listIterator);
        result = _(objList).flatMapDeep('a');

        result = _(numDictionary).flatMapDeep<number>();
        result = _(numDictionary).flatMapDeep(dictionaryIterator);
        result = _(objDictionary).flatMapDeep('a');

        result = _(numNumericDictionary).flatMapDeep<number>();
        result = _(numNumericDictionary).flatMapDeep(numericDictionaryIterator);
        result = _(objNumericDictionary).flatMapDeep('a');
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _(objArray).flatMapDeep(['a', 42]);
        result = _(objArray).flatMapDeep({a: 42});

        result = _(objList).flatMapDeep(['a', 42]);
        result = _(objList).flatMapDeep({a: 42});

        result = _(objDictionary).flatMapDeep(['a', 42]);
        result = _(objDictionary).flatMapDeep({a: 42});

        result = _(objNumericDictionary).flatMapDeep(['a', 42]);
        result = _(objNumericDictionary).flatMapDeep({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flatMapDeep();
        result = _('abc').chain().flatMapDeep(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(numArray).chain().flatMapDeep<number>();
        result = _(numArray).chain().flatMapDeep(listIterator);
        result = _(objArray).chain().flatMapDeep('a');

        result = _(numList).chain().flatMapDeep<number>();
        result = _(numList).chain().flatMapDeep(listIterator);
        result = _(objList).chain().flatMapDeep('a');

        result = _(numDictionary).chain().flatMapDeep<number>();
        result = _(numDictionary).chain().flatMapDeep(dictionaryIterator);
        result = _(objDictionary).chain().flatMapDeep('a');

        result = _(numNumericDictionary).chain().flatMapDeep<number>();
        result = _(numNumericDictionary).chain().flatMapDeep(numericDictionaryIterator);
        result = _(objNumericDictionary).chain().flatMapDeep('a');
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _(objArray).chain().flatMapDeep(['a', 42]);
        result = _(objArray).chain().flatMapDeep({a: 42});

        result = _(objList).chain().flatMapDeep(['a', 42]);
        result = _(objList).chain().flatMapDeep({a: 42});

        result = _(objDictionary).chain().flatMapDeep(['a', 42]);
        result = _(objDictionary).chain().flatMapDeep({a: 42});

        result = _(objNumericDictionary).chain().flatMapDeep(['a', 42]);
        result = _(objNumericDictionary).chain().flatMapDeep({a: 42});
    }
}

// _.flatMapDepth
namespace TestFlatMapDepth {
    let numArray: Array<number|number[]> | null | undefined = [1, [2, 3]] as any;
    let objArray: Array<{a: number}|Array<{a: number}>> | null | undefined = [{a: 1}, [{a: 2}, {a: 3}]] as any;

    let numList: _.List<number|number[]> | null | undefined = anything;
    let objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) =>[ 1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: number, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        result = _.flatMapDepth('abc');

        result = _.flatMapDepth('abc', stringIterator, 1);
    }

    {
        let result: number[];

        result = _.flatMapDepth<number>(numArray);

        result = _.flatMapDepth(numArray, listIterator, 1);

        result = _.flatMapDepth(objArray, 'a');

        result = _.flatMapDepth<number>(numList);

        result = _.flatMapDepth(numList, listIterator, 1);

        result = _.flatMapDepth(objList, 'a', 1);

        result = _.flatMapDepth<number>(numDictionary);

        result = _.flatMapDepth(numDictionary, dictionaryIterator, 1);

        result = _.flatMapDepth(objDictionary, 'a', 1);

        result = _.flatMapDepth<number>(numNumericDictionary);

        result = _.flatMapDepth(numNumericDictionary, numericDictionaryIterator, 1);

        result = _.flatMapDepth(objNumericDictionary, 'a', 1);
    }

    {
        let result: boolean[];

        result = _.flatMapDepth(objArray, ['a', 42], 1);
        result = _.flatMapDepth(objArray, {'a': 42}, 1);

        result = _.flatMapDepth(objList, ['a', 42], 1);
        result = _.flatMapDepth(objList, {'a': 42}, 1);

        result = _.flatMapDepth(objDictionary, ['a', 42], 1);
        result = _.flatMapDepth(objDictionary, {'a': 42}, 1);

        result = _.flatMapDepth(objNumericDictionary, ['a', 42], 1);
        result = _.flatMapDepth(objNumericDictionary, {'a': 42}, 1);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').flatMapDepth();
        result = _('abc').flatMapDepth(stringIterator, 1);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(numArray).flatMapDepth<number>();
        result = _(numArray).flatMapDepth(listIterator, 1);
        result = _(objArray).flatMapDepth('a', 1);

        result = _(numList).flatMapDepth<number>();
        result = _(numList).flatMapDepth(listIterator, 1);
        result = _(objList).flatMapDepth('a', 1);

        result = _(numDictionary).flatMapDepth<number>();
        result = _(numDictionary).flatMapDepth(dictionaryIterator, 1);
        result = _(objDictionary).flatMapDepth('a', 1);

        result = _(numNumericDictionary).flatMapDepth<number>();
        result = _(numNumericDictionary).flatMapDepth(numericDictionaryIterator, 1);
        result = _(objNumericDictionary).flatMapDepth('a', 1);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _(objArray).flatMapDepth(['a', 42], 1);
        result = _(objArray).flatMapDepth({a: 42}, 1);

        result = _(objList).flatMapDepth(['a', 42], 1);
        result = _(objList).flatMapDepth({a: 42}, 1);

        result = _(objDictionary).flatMapDepth(['a', 42], 1);
        result = _(objDictionary).flatMapDepth({a: 42}, 1);

        result = _(objNumericDictionary).flatMapDepth(['a', 42], 1);
        result = _(objNumericDictionary).flatMapDepth({a: 42}, 1);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().flatMapDepth();
        result = _('abc').chain().flatMapDepth(stringIterator, 1);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(numArray).chain().flatMapDepth<number>();
        result = _(numArray).chain().flatMapDepth(listIterator, 1);
        result = _(objArray).chain().flatMapDepth('a', 1);

        result = _(numList).chain().flatMapDepth<number>();
        result = _(numList).chain().flatMapDepth(listIterator, 1);
        result = _(objList).chain().flatMapDepth('a', 1);

        result = _(numDictionary).chain().flatMapDepth<number>();
        result = _(numDictionary).chain().flatMapDepth(dictionaryIterator, 1);
        result = _(objDictionary).chain().flatMapDepth('a', 1);

        result = _(numNumericDictionary).chain().flatMapDepth<number>();
        result = _(numNumericDictionary).chain().flatMapDepth(numericDictionaryIterator, 1);
        result = _(objNumericDictionary).chain().flatMapDepth('a', 1);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _(objArray).chain().flatMapDepth(['a', 42], 1);
        result = _(objArray).chain().flatMapDepth({a: 42}, 1);

        result = _(objList).chain().flatMapDepth(['a', 42], 1);
        result = _(objList).chain().flatMapDepth({a: 42}, 1);

        result = _(objDictionary).chain().flatMapDepth(['a', 42], 1);
        result = _(objDictionary).chain().flatMapDepth({a: 42}, 1);

        result = _(objNumericDictionary).chain().flatMapDepth(['a', 42], 1);
        result = _(objNumericDictionary).chain().flatMapDepth({a: 42}, 1);
    }
}

// _.forEach
namespace TestForEach {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = [] as any;
    let nilList: _.List<AbcObject> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator: (value: AbcObject, index: number, collection: _.List<AbcObject>) => any = (value, index, collection) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value, key, collection) => 1;
    let objectIterator: (value: number | string | boolean, key: string, collection: AbcObject) => any = (value, key, collection) => 1;

    {
        let result: string;

        result = _.forEach('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        result = _.forEach('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: AbcObject[];
        result = _.forEach(array, (value, index, collection: ArrayLike<AbcObject>) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
        });
        result = _.forEach(array, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: AbcObject[] | null | undefined;

        result = _.forEach(array, (value, index, collection: ArrayLike<AbcObject>) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
        });
        result = _.forEach(nilArray, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.List<AbcObject>;

        result = _.forEach(list, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.List<AbcObject> | null | undefined;

        result = _.forEach(nilList, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject>;

        result = _.forEach(dictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        result = _.forEach(nilDictionary, (value, index, collection) => {
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

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').forEach((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).forEach((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashImplicitNillableArrayWrapper<AbcObject>;

        result = _(nilArray).forEach((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).forEach<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.List<AbcObject>>;

        result = _(nilList).forEach<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).forEach(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(nilDictionary).forEach(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().forEach((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().forEach((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashExplicitNillableArrayWrapper<AbcObject>;

        result = _(nilArray).chain().forEach((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).chain().forEach<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.List<AbcObject>>;

        result = _(nilList).chain().forEach<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().forEach(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(nilDictionary).chain().forEach(dictionaryIterator);
    }
}

// _.forEachRight
namespace TestForEachRight {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let nilArray: AbcObject[] | null | undefined = [] as any;
    let nilList: _.List<AbcObject> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator: (value: AbcObject, index: number, collection: _.List<AbcObject>) => any = (value: AbcObject, index: number, collection: _.List<AbcObject>) => 1;
    let dictionaryIterator: (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 1;

    {
        let result: string;

        result = _.forEachRight('', (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: string | null | undefined;

        result = _.forEachRight('' as (string | null | undefined), (value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: AbcObject[];

        result = _.forEachRight(array, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: AbcObject[] | null | undefined;

        result = _.forEachRight(nilArray, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.List<AbcObject>;

        result = _.forEachRight(list, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.List<AbcObject> | null | undefined;

        result = _.forEachRight(nilList, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject>;

        result = _.forEachRight(dictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let result: _.Dictionary<AbcObject> | null | undefined;

        result = _.forEachRight(nilDictionary, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').forEachRight((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).forEachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableArrayWrapper<AbcObject>;

        result = _(nilArray).forEachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).forEachRight<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.List<AbcObject>>;

        result = _(nilList).forEachRight<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).forEachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(nilDictionary).forEachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().forEachRight((value, index, collection) => {
            value; // $ExpectType string
            index; // $ExpectType number
            collection; // $ExpectType string
        });
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashExplicitNillableArrayWrapper<AbcObject>;

        result = _(nilArray).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
        });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.List<AbcObject>>;

        result = _(list).chain().forEachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.List<AbcObject>>;

        result = _(nilList).chain().forEachRight<AbcObject>(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().forEachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(nilDictionary).chain().forEachRight(dictionaryIterator);
    }
}

// _.groupBy
namespace TestGroupBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => 0;
    let listIterator = (value: SampleType, index: number, collection: _.List<SampleType>) => 0;
    let dictionaryIterator = (value: SampleType, key: string, collection: _.Dictionary<SampleType>) => 0;

    {
        let result: _.Dictionary<string[]>;

        result = _.groupBy('');
        result = _.groupBy('', stringIterator);
    }

    {
        let result: _.Dictionary<SampleType[]>;

        result = _.groupBy<SampleType>(array);
        result = _.groupBy<SampleType>(array, listIterator);
        result = _.groupBy<SampleType>(array, '');
        result = _.groupBy<SampleType>(array, {a: 42});

        result = _.groupBy<SampleType>(list);
        result = _.groupBy<SampleType>(list, listIterator);
        result = _.groupBy<SampleType>(list, '');
        result = _.groupBy<SampleType>(list, {a: 42});

        result = _.groupBy(dictionary);
        result = _.groupBy(dictionary, dictionaryIterator);
        result = _.groupBy(dictionary, '');
        result = _.groupBy(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('').groupBy();
        result = _('').groupBy((char: string, index: number, string: ArrayLike<string>) => 0);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<SampleType[]>>;

        result = _(array).groupBy();
        result = _(array).groupBy(listIterator);
        result = _(array).groupBy('');
        result = _(array).groupBy({a: 42});

        result = _(list).groupBy<SampleType>();
        result = _(list).groupBy<SampleType>(listIterator);
        result = _(list).groupBy<SampleType>('');
        result = _(list).groupBy<SampleType>({a: 42});

        result = _(dictionary).groupBy<SampleType>();
        result = _(dictionary).groupBy(dictionaryIterator);
        result = _(dictionary).groupBy<SampleType>('');
        result = _(dictionary).groupBy<SampleType>({a: 42});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('').chain().groupBy();
        result = _('').chain().groupBy((char: string, index: number, string: ArrayLike<string>) => 0);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<SampleType[]>>;

        result = _(array).chain().groupBy();
        result = _(array).chain().groupBy(listIterator);
        result = _(array).chain().groupBy('');
        result = _(array).chain().groupBy({a: 42});

        result = _(list).chain().groupBy<SampleType>();
        result = _(list).chain().groupBy<SampleType>(listIterator);
        result = _(list).chain().groupBy<SampleType>('');
        result = _(list).chain().groupBy<SampleType>({a: 42});

        result = _(dictionary).chain().groupBy<SampleType>();
        result = _(dictionary).chain().groupBy(dictionaryIterator);
        result = _(dictionary).chain().groupBy<SampleType>('');
        result = _(dictionary).chain().groupBy<SampleType>({a: 42});
    }
}

// _.includes
namespace TestIncludes {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let target: SampleType = { a: "", b: 1, c: true };

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

// _.keyBy
namespace TestKeyBy {
    type SampleObject = {a: number; b: string; c: boolean;};

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let stringIterator = (value: string, index: number, collection: string) => "a";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 1;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => Symbol.name;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => "a";

    {
        let result: _.Dictionary<string>;

        result = _.keyBy('abcd');
        result = _.keyBy('abcd', stringIterator);
    }

    {
        let result: _.Dictionary<SampleObject>;

        result = _.keyBy<SampleObject>(array);
        result = _.keyBy<SampleObject>(array, listIterator);
        result = _.keyBy<SampleObject>(array, 'a');
        result = _.keyBy<SampleObject>(array, {a: 42});

        result = _.keyBy<SampleObject>(list);
        result = _.keyBy<SampleObject>(list, listIterator);
        result = _.keyBy<SampleObject>(list, 'a');
        result = _.keyBy<SampleObject>(list, {a: 42});

        result = _.keyBy<SampleObject>(numericDictionary);
        result = _.keyBy<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.keyBy<SampleObject>(numericDictionary, 'a');
        result = _.keyBy<SampleObject>(numericDictionary, {a: 42});

        result = _.keyBy(dictionary);
        result = _.keyBy(dictionary, dictionaryIterator);
        result = _.keyBy(dictionary, 'a');
        result = _.keyBy(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string>>;

        result = _('abcd').keyBy();
        result = _('abcd').keyBy(stringIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<SampleObject>>;

        result = _(array).keyBy();
        result = _(array).keyBy(listIterator);
        result = _(array).keyBy('a');
        result = _(array).keyBy({a: 42});

        result = _(list).keyBy<SampleObject>();
        result = _(list).keyBy<SampleObject>(listIterator);
        result = _(list).keyBy<SampleObject>('a');
        result = _(list).keyBy<SampleObject>({a: 42});

        result = _(numericDictionary).keyBy<SampleObject>();
        result = _(numericDictionary).keyBy<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).keyBy<SampleObject>('a');
        result = _(numericDictionary).keyBy<SampleObject>({a: 42});

        result = _(dictionary).keyBy();
        result = _(dictionary).keyBy(dictionaryIterator);
        result = _(dictionary).keyBy('a');
        result = _(dictionary).keyBy({a: 42});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string>>;

        result = _('abcd').chain().keyBy();
        result = _('abcd').chain().keyBy(stringIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<SampleObject>>;

        result = _(array).chain().keyBy();
        result = _(array).chain().keyBy(listIterator);
        result = _(array).chain().keyBy('a');
        result = _(array).chain().keyBy({a: 42});

        result = _(list).chain().keyBy<SampleObject>();
        result = _(list).chain().keyBy<SampleObject>(listIterator);
        result = _(list).chain().keyBy<SampleObject>('a');
        result = _(list).chain().keyBy<SampleObject>({a: 42});

        result = _(numericDictionary).chain().keyBy<SampleObject>();
        result = _(numericDictionary).chain().keyBy<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().keyBy<SampleObject>('a');
        result = _(numericDictionary).chain().keyBy<SampleObject>({a: 42});

        result = _(dictionary).chain().keyBy();
        result = _(dictionary).chain().keyBy(dictionaryIterator);
        result = _(dictionary).chain().keyBy('a');
        result = _(dictionary).chain().keyBy({a: 42});
    }
}

//_.invoke
namespace TestInvoke {
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

    result = _.invoke(boolArray, "[1]");
    result = _.invoke(boolArray, "[1]", 2);
    result = _.invoke(boolArray, [1, "toString"]);
    result = _.invoke(boolArray, [1, "toString"], 2);

    result = _.invoke(boolArray, "[1]");
    result = _.invoke(boolArray, "[1]", 2);
    result = _.invoke(boolArray, [1, "toString"]);
    result = _.invoke(boolArray, [1, "toString"], 2);

    result = _.invoke(numDict, "a.toString");
    result = _.invoke(numDict, "a.toString", 2);
    result = _.invoke(numDict, ["a", "toString"]);
    result = _.invoke(numDict, ["a", "toString"], 2);

    result = _.invoke(numDict, "a.toString");
    result = _.invoke(numDict, "a.toString", 2);
    result = _.invoke(numDict, ["a", "toString"]);
    result = _.invoke(numDict, ["a", "toString"], 2);

    result = _.invoke(nestedDict, ["a[0].toString"]);
    result = _.invoke(nestedDict, ["a[0].toString"], 2);
    result = _.invoke(nestedDict, ["a", 0, "toString"]);
    result = _.invoke(nestedDict, ["a", 0, "toString"], 2);

    result = _.invoke(nestedDict, ["a[0].toString"]);
    result = _.invoke(nestedDict, ["a[0].toString"], 2);
    result = _.invoke(nestedDict, ["a", 0, "toString"]);
    result = _.invoke(nestedDict, ["a", 0, "toString"], 2);

    result = _(boolArray).invoke("[1]");
    result = _(boolArray).invoke("[1]", 2);
    result = _(boolArray).invoke([1, "toString"]);
    result = _(boolArray).invoke([1, "toString"], 2);

    result = _(numDict).invoke("a.toString");
    result = _(numDict).invoke("a.toString", 2);
    result = _(numDict).invoke(["a", "toString"]);
    result = _(numDict).invoke(["a", "toString"], 2);

    result = _(nestedDict).invoke("a[0].toString");
    result = _(nestedDict).invoke("a[0].toString", 2);
    result = _(nestedDict).invoke(["a", 0, "toString"]);
    result = _(nestedDict).invoke(["a", 0, "toString"], 2);

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _(boolArray).chain().invoke("[1]");
        result = _(boolArray).chain().invoke("[1]", 2);
        result = _(boolArray).chain().invoke([1, "toString"]);
        result = _(boolArray).chain().invoke([1, "toString"], 2);

        result = _(numDict).chain().invoke("a.toString");
        result = _(numDict).chain().invoke("a.toString", 2);
        result = _(numDict).chain().invoke(["a", "toString"]);
        result = _(numDict).chain().invoke(["a", "toString"], 2);

        result = _(nestedDict).chain().invoke("a[0].toString");
        result = _(nestedDict).chain().invoke("a[0].toString", 2);
        result = _(nestedDict).chain().invoke(["a", 0, "toString"]);
        result = _(nestedDict).chain().invoke(["a", 0, "toString"], 2);
    }
}

//_.invokeMap
namespace TestInvokeMap {
    let numArray: number[] | null | undefined = [4, 2, 1, 3] as any;
    let obj: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    let numDict: _.Dictionary<number> | null | undefined = obj as any;

    let result: string[];
    result = _.invokeMap(numArray, 'toString');
    result = _.invokeMap(numArray, 'toString', 2);
    result = _.invokeMap(numArray, 'toString');
    result = _.invokeMap(numArray, 'toString', 2);
    result = _(numArray).invokeMap('toString').value();
    result = _(numArray).invokeMap('toString', 2).value();
    result = _(numArray).chain().invokeMap('toString').value();
    result = _(numArray).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numArray, Number.prototype.toString);
    result = _.invokeMap(numArray, Number.prototype.toString, 2);
    result = _.invokeMap<string>(numArray, Number.prototype.toString);
    result = _.invokeMap<string>(numArray, Number.prototype.toString, 2);
    result = _(numArray).invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString, 2).value();

    result = _.invokeMap(numDict, 'toString');
    result = _.invokeMap(numDict, 'toString', 2);
    result = _.invokeMap(numDict, 'toString');
    result = _.invokeMap(numDict, 'toString', 2);
    result = _(numDict).invokeMap('toString').value();
    result = _(numDict).invokeMap('toString', 2).value();
    result = _(numDict).chain().invokeMap('toString').value();
    result = _(numDict).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numDict, Number.prototype.toString);
    result = _.invokeMap(numDict, Number.prototype.toString, 2);
    result = _.invokeMap<string>(numDict, Number.prototype.toString);
    result = _.invokeMap<string>(numDict, Number.prototype.toString, 2);
    result = _(numDict).invokeMap<string>(Number.prototype.toString).value();
    result = _(numDict).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numDict).chain().invokeMap<string>(Number.prototype.toString).value();
    result = _(numDict).chain().invokeMap<string>(Number.prototype.toString, 2).value();
}

// _.map
namespace TestMap {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator: (value: number, index: number, collection: _.List<number>) => AbcObject = (value: number, index: number, collection: _.List<number>) => ({ a: 1, b: "", c: true });
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => AbcObject = (value: number, key: string, collection: _.Dictionary<number>) => ({ a: 1, b: "", c: true });

    {
        _.map(array);  // $ExpectType number[]
        _.map(array, listIterator);  // $ExpectType AbcObject[]

        _.map(list);  // $ExpectType number[]
        _.map(list, listIterator);  // $ExpectType AbcObject[]

        _.map(dictionary);  // $ExpectType number[]
        _.map(dictionary, dictionaryIterator);  // $ExpectType AbcObject[]
    }

    {
        // _.matches iteratee shorthand.
        _.map(array, {});  // $ExpectType boolean[]
        _.map(list, {});  // $ExpectType boolean[]
        _.map(dictionary, {});  // $ExpectType boolean[]
    }

    {
        _(array).map().value();  // $ExpectType number[]
        _(array).map(listIterator).value();  // $ExpectType AbcObject[]

        _(list).map().value();  // $ExpectType number[]
        _(list).map(listIterator).value();  // $ExpectType AbcObject[]

        _(dictionary).map().value();  // $ExpectType number[]
        _(dictionary).map(dictionaryIterator).value();  // $ExpectType AbcObject[]
    }

    {
        _(array).map({}).value();  // $ExpectType boolean[]
        _(list).map({}).value();  // $ExpectType boolean[]
        _(dictionary).map({}).value();  // $ExpectType boolean[]
    }

    {
        _(array).chain().map().value();  // $ExpectType number[]
        _(array).chain().map(listIterator).value();  // $ExpectType AbcObject[]

        _(list).chain().map().value();  // $ExpectType number[]
        _(list).chain().map(listIterator).value();  // $ExpectType AbcObject[]

        _(dictionary).chain().map().value();  // $ExpectType number[]
        _(dictionary).chain().map(dictionaryIterator).value();  // $ExpectType AbcObject[]
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _(array).chain().map({});
        result = _(list).chain().map({});
        result = _(dictionary).chain().map({});
    }

    {
        // "pluck"-style map.
        _.map([{a: 1}, {a: 2}], 'a');  // $ExpectType number[]
        _.map({a: {b: 'str'}, c: {b: 1}}, 'b');  // ExpectType (string | number)[]

        _([{a: 1}, {a: 2}]).map('a').value();  // $ExpectType number[]
        _.chain([{a: 1}, {a: 2}]).map('a').value();  // $ExpectType number[]
        _([{a: 1}, {a: 2}]).chain().map('a').value();  // $ExpectType number[]
    }

    {
        // $ExpectType number[]
        _.map(['a', 'b', 'c'], (
            v,  // $ExpectType string
            k  // $ExpectType number
          ) => k);
    }
}

// _.partition
namespace TestPartition {
    {
        let result: any[][];

        result = _.partition(anything, (n) => {
            n; // $ExpectType any
            return n < 'c';
        });
    }

    {
        let result: string[][];

        result = _.partition('abcd', (n) => {
            n; // $ExpectType string
            return n < 'c';
        });
        result = _.partition(['a', 'b', 'c', 'd'], (n) => {
            n; // $ExpectType string
            return n < 'c';
        });
    }

    {
        let result: number[][];

        result = _.partition([1, 2, 3, 4], (n) => n < 3);
        result = _.partition({0: 1, 1: 2, 2: 3, 3: 4, length: 4}, (n) => n < 3);
        result = _.partition({a: 1, b: 2, c: 3, d: 4}, (n) => {
            n; // $ExpectType number
            return n < 3;
        });
    }

    {
        let result: Array<Array<{ a: number }>>;

        result = _.partition([{a: 1}, {a: 2}], {a: 2});
        result = _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, {a: 2});
        result = _.partition({0: {a: 1}, 1: {a: 2}}, {a: 2});
        result = _.partition([{a: 1}, {a: 2}], 'a');
        result = _.partition([{a: 1}, {a: 2}], ['a', 2]);
        result = _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, 'a');
        result = _.partition({0: {a: 1}, 1: {a: 2}, length: 2}, ['a', 2]);
        result = _.partition({0: {a: 1}, 1: {a: 2}}, 'a');
        result = _.partition({0: {a: 1}, 1: {a: 2}}, ['a', 2]);
    }

    {
        _.partition(null, 'a');
    }

    {
        let result: _.LoDashImplicitWrapper<any[][]>;

        result = _(anything).partition((n) => {
            n; // $ExpectType any
            return n < 'c';
        });
    }

    {
        let result: _.LoDashImplicitWrapper<string[][]>;

        result = _('abcd').partition((n) => {
            n; // $ExpectType string
            return n < 'c';
        });
        result = _(['a', 'b', 'c', 'd']).partition((n) => {
            n; // $ExpectType string
            return n < 'c';
        });
    }

    {
        let result: _.LoDashImplicitWrapper<number[][]>;

        result = _([1, 2, 3, 4]).partition((n) => n < 3);
        result = _({0: 1, 1: 2, 2: 3, 3: 4, length: 4}).partition((n) => n < 3);
        result = _({a: 1, b: 2, c: 3, d: 4}).partition((n) => {
            n; // $ExpectType number
            return n < 3;
        });
    }

    {
        let result: _.LoDashImplicitWrapper<Array<Array<{ a: number }>>>;

        result = _([{a: 1}, {a: 2}]).partition({a: 2});
        result = _({0: {a: 1}, 1: {a: 2}, length: 2}).partition({a: 2});
        result = _({0: {a: 1}, 1: {a: 2}}).partition({a: 2});
        result = _([{a: 1}, {a: 2}]).partition('a');
        result = _([{a: 1}, {a: 2}]).partition(['a', 2]);
        result = _({0: {a: 1}, 1: {a: 2}}).partition('a');
        result = _({0: {a: 1}, 1: {a: 2}}).partition(['a', 2]);
    }

    {
        let result: _.LoDashExplicitWrapper<any[][]>;

        result = _.chain(anything).partition((n) => {
            n; // $ExpectType any
            return n < 'c';
        });
    }

    {
        let result: _.LoDashExplicitWrapper<string[][]>;

        result = _.chain('abcd').partition((n) => {
            n; // $ExpectType string
            return n < 'c';
        });
        result = _.chain(['a', 'b', 'c', 'd']).partition((n) => {
            n; // $ExpectType string
            return n < 'c';
        });
    }

    {
        let result: _.LoDashExplicitWrapper<number[][]>;

        result = _.chain([1, 2, 3, 4]).partition((n) => n < 3);
        result = _.chain({0: 1, 1: 2, 2: 3, 3: 4, length: 4}).partition((n) => n < 3);
        result = _.chain({a: 1, b: 2, c: 3, d: 4}).partition((n) => {
            n; // $ExpectType number
            return n < 3;
        });
    }

    {
        let result: _.LoDashExplicitWrapper<Array<Array<{ a: number }>>>;

        result = _.chain([{a: 1}, {a: 2}]).partition({a: 2});
        result = _.chain({0: {a: 1}, 1: {a: 2}, length: 2}).partition({a: 2});
        result = _.chain({0: {a: 1}, 1: {a: 2}}).partition({a: 2});
        result = _.chain([{a: 1}, {a: 2}]).partition('a');
        result = _.chain([{a: 1}, {a: 2}]).partition(['a', 2]);
        result = _.chain({0: {a: 1}, 1: {a: 2}}).partition('a');
        result = _.chain({0: {a: 1}, 1: {a: 2}}).partition(['a', 2]);
    }
}

// TODO
// _.map with iteratee shorthand
// module TestMapInsteadOfPluck {
//     interface SampleObject {
//         d: {b: AbcObject}[];
//     }
//
//     let array: SampleObject[] = [];
//     let list: _.List<SampleObject> = [];
//     let dictionary: _.Dictionary<SampleObject> = {};
//
//     {
//         let result: any[];
//
//         result = _.map<SampleObject>(array, 'd.0.b');
//         result = _.map<SampleObject>(array, ['d', 0, 'b']);
//
//         result = _.map<SampleObject>(list, 'd.0.b');
//         result = _.map<SampleObject>(list, ['d', 0, 'b']);
//
//         result = _.map<SampleObject>(dictionary, 'd.0.b');
//         result = _.map<SampleObject>(dictionary, ['d', 0, 'b']);
//     }
//
//     {
//         let result: AbcObject[];
//
//         result = _.map<SampleObject, AbcObject>(array, 'd.0.b');
//         result = _.map<SampleObject, AbcObject>(array, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, AbcObject>(list, 'd.0.b');
//         result = _.map<SampleObject, AbcObject>(list, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, AbcObject>(dictionary, 'd.0.b');
//         result = _.map<SampleObject, AbcObject>(dictionary, ['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashImplicitArrayWrapper<AbcObject>;
//
//         result = _(array).map<AbcObject>('d.0.b');
//         result = _(array).map<AbcObject>(['d', 0, 'b']);
//
//         result = _(list).map<AbcObject>('d.0.b');
//         result = _(list).map<AbcObject>(['d', 0, 'b']);
//
//         result = _(dictionary).map<AbcObject>('d.0.b');
//         result = _(dictionary).map<AbcObject>(['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashExplicitArrayWrapper<AbcObject>;
//
//         result = _(array).chain().map<AbcObject>('d.0.b');
//         result = _(array).chain().map<AbcObject>(['d', 0, 'b']);
//
//         result = _(list).chain().map<AbcObject>('d.0.b');
//         result = _(list).chain().map<AbcObject>(['d', 0, 'b']);
//
//         result = _(dictionary).chain().map<AbcObject>('d.0.b');
//         result = _(dictionary).chain().map<AbcObject>(['d', 0, 'b']);
//     }
// }
namespace TestReduce {
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

    // chained
    _([1, 2 ,3]).reduce((sum: number, num: number) => sum + num);
    _.chain([1, 2 ,3]).reduce((sum: number, num: number) => sum + num).value();

    // $ExpectType ABC
    _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, (r: ABC, num: number, key: string) => {
        r[key] = num * 3;
        return r;
    // tslint:disable-next-line:no-object-literal-type-assertion
    }, {} as ABC);

    // $ExpectType number | undefined
    _([1, 2, 3]).reduce((sum: number, num: number) => sum + num);

    const initial: ABC = { a: 1, b: 2, c: 3 };
    // $ExpectType ABC
    _({ 'a': 1, 'b': 2, 'c': 3 }).reduce((r: ABC, num: number, key: string) => {
        r[key] = num * 3;
        return r;
    // tslint:disable-next-line:no-object-literal-type-assertion
    }, initial);

    // $ExpectType number[]
    _.reduceRight([[0, 1], [2, 3], [4, 5]], (a: number[], b: number[]) => a.concat(b), []);
}

// _.reject
namespace TestReject {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let stringIterator = (char: string, index: number, string: string) => true;
    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => true;

    {
        let result: string[];

        result = _.reject('', stringIterator);
    }

    {
        let result: AbcObject[];

        result = _.reject<AbcObject>(array, listIterator);
        result = _.reject<AbcObject>(array, '');
        result = _.reject(array, {a: 42});

        result = _.reject<AbcObject>(list, listIterator);
        result = _.reject<AbcObject>(list, '');
        result = _.reject(list, {a: 42});

        result = _.reject(dictionary, dictionaryIterator);
        result = _.reject(dictionary, '');
        result = _.reject(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('').reject(stringIterator);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).reject(listIterator);
        result = _(array).reject('');
        result = _(array).reject({a: 42});

        result = _(list).reject<AbcObject>(listIterator);
        result = _(list).reject<AbcObject>('');
        result = _(list).reject({a: 42});

        result = _(dictionary).reject(dictionaryIterator);
        result = _(dictionary).reject('');
        result = _(dictionary).reject({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('').chain().reject(stringIterator);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().reject(listIterator);
        result = _(array).chain().reject('');
        result = _(array).chain().reject({a: 42});

        result = _(list).chain().reject<AbcObject>(listIterator);
        result = _(list).chain().reject<AbcObject>('');
        result = _(list).chain().reject({a: 42});

        result = _(dictionary).chain().reject(dictionaryIterator);
        result = _(dictionary).chain().reject('');
        result = _(dictionary).chain().reject({a: 42});
    }
}

// _.sample
namespace TestSample {
    let array: string[] | null | undefined = [] as any;
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string>  | null | undefined= obj;

    {
        let result: string | undefined;

        result = _.sample('abc');
        result = _.sample(array);
        result = _.sample(list);
        result = _.sample(dictionary);
        result = _.sample(numericDictionary);
        result = _.sample({a: 'foo'});
        result = _.sample<string>({a: 'foo'});

        result = _('abc').sample();
        result = _(array).sample();
        result = _(list).sample<string>();
        result = _(dictionary).sample<string>();
        result = _(numericDictionary).sample<string>();
        result = _({a: 'foo'}).sample<string>();
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _('abc').chain().sample();
        result = _(array).chain().sample();
        result = _(list).chain().sample();
        result = _(dictionary).chain().sample();
        result = _(numericDictionary).chain().sample();
        result = _({a: 'foo'}).chain().sample();
    }
}

// _.sampleSize
namespace TestSampleSize {
    let array: string[] | null | undefined = [] as any;
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string> | null | undefined = obj;

    {
        let result: string[];

        result = _.sampleSize('abc');
        result = _.sampleSize('abc', 42);
        result = _.sampleSize(array);
        result = _.sampleSize(array, 42);
        result = _.sampleSize(list);
        result = _.sampleSize(list, 42);
        result = _.sampleSize(dictionary);
        result = _.sampleSize(dictionary, 42);
        result = _.sampleSize(numericDictionary);
        result = _.sampleSize(numericDictionary, 42);
        result = _.sampleSize({a: 'foo'});
        result = _.sampleSize({a: 'foo'}, 42);
        result = _.sampleSize<string>({a: 'foo'});
        result = _.sampleSize<string>({a: 'foo'}, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').sampleSize();
        result = _('abc').sampleSize(42);
        result = _(array).sampleSize();
        result = _(array).sampleSize(42);
        result = _(list).sampleSize<string>();
        result = _(list).sampleSize<string>(42);
        result = _(dictionary).sampleSize<string>();
        result = _(dictionary).sampleSize<string>(42);
        result = _(numericDictionary).sampleSize<string>();
        result = _(numericDictionary).sampleSize<string>(42);
        result = _({a: 'foo'}).sampleSize<string>();
        result = _({a: 'foo'}).sampleSize<string>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().sampleSize();
        result = _('abc').chain().sampleSize(42);
        result = _(array).chain().sampleSize();
        result = _(array).chain().sampleSize(42);
        result = _(list).chain().sampleSize<string>();
        result = _(list).chain().sampleSize<string>(42);
        result = _(dictionary).chain().sampleSize<string>();
        result = _(dictionary).chain().sampleSize<string>(42);
        result = _(numericDictionary).chain().sampleSize<string>();
        result = _(numericDictionary).chain().sampleSize<string>(42);
        result = _({a: 'foo'}).chain().sampleSize<string>();
        result = _({a: 'foo'}).chain().sampleSize<string>(42);
    }
}

// _.shuffle
namespace TestShuffle {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    {
        let result: string[];

        result = _.shuffle('abc');
    }

    {
        let result: AbcObject[];

        result = _.shuffle<AbcObject>(array);
        result = _.shuffle<AbcObject>(list);
        result = _.shuffle(dictionary);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').shuffle();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).shuffle();
        result = _(list).shuffle<AbcObject>();
        result = _(dictionary).shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().shuffle();
        result = _(list).chain().shuffle<AbcObject>();
        result = _(dictionary).chain().shuffle();
    }
}

// _.size
namespace TestSize {
    type SampleType = {a: string; b: number; c: boolean;};

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    {
        let result: number;

        result = _.size(array);
        result = _.size(list);
        result = _.size(dictionary);
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

    let array: SampleObject[] | null | undefined = [] as any;
    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;
    let sampleObject: SampleObject | null | undefined = obj;

    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => true;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => true;
    let numericDictionaryIterator = (value: SampleObject, key: number, collection: _.NumericDictionary<SampleObject>) => true;
    let objectIterator = (value: any, key: string, collection: any) => true;

    {
        let result: boolean;

        result = _.some<SampleObject>(array);
        result = _.some<SampleObject>(array, listIterator);
        result = _.some<SampleObject>(array, 'a');
        result = _.some<SampleObject>(array, ['a', 42]);
        result = _.some<SampleObject>(array, {a: 42});

        result = _.some<SampleObject>(list);
        result = _.some<SampleObject>(list, listIterator);
        result = _.some<SampleObject>(list, 'a');
        result = _.some<SampleObject>(list, ['a', 42]);
        result = _.some<SampleObject>(list, {a: 42});

        result = _.some<SampleObject>(dictionary);
        result = _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.some(dictionary, (value, key, collection) => {
            value; // $ExpectType SampleObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
            return true;
        });
        result = _.some<SampleObject>(dictionary, 'a');
        result = _.some<SampleObject>(dictionary, ['a', 42]);
        result = _.some<SampleObject>(dictionary, {a: 42});

        result = _.some<SampleObject>(numericDictionary);
        result = _.some<SampleObject>(numericDictionary, numericDictionaryIterator);
        result = _.some<SampleObject>(numericDictionary, 'a');
        result = _.some<SampleObject>(numericDictionary, ['a', 42]);
        result = _.some<SampleObject>(numericDictionary, {a: 42});

        result = _.some(sampleObject);
        result = _.some(sampleObject, objectIterator);
        result = _.some(sampleObject, 'a');
        result = _.some(sampleObject, ['a', 42]);
        result = _.some<{a: number}>(sampleObject, {a: 42});

        result = _(array).some();
        result = _(array).some(listIterator);
        result = _(array).some('a');
        result = _(array).some(['a', 42]);
        result = _(array).some({a: 42});

        result = _(list).some<SampleObject>();
        result = _(list).some<SampleObject>(listIterator);
        result = _(list).some('a');
        result = _(list).some(['a', 42]);
        result = _(list).some<SampleObject>({a: 42});

        result = _(dictionary).some<SampleObject>();
        result = _(dictionary).some(dictionaryIterator);
        result = _(dictionary).some('a');
        result = _(dictionary).some(['a', 42]);
        result = _(dictionary).some<SampleObject>({a: 42});

        result = _(numericDictionary).some<SampleObject>();
        result = _(numericDictionary).some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).some('a');
        result = _(numericDictionary).some(['a', 42]);
        result = _(numericDictionary).some<SampleObject>({a: 42});

        result = _(sampleObject).some();
        result = _(sampleObject).some(objectIterator);
        result = _(sampleObject).some('a');
        result = _(sampleObject).some(['a', 42]);
        result = _(sampleObject).some<SampleObject>({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().some();
        result = _(array).chain().some(listIterator);
        result = _(array).chain().some('a');
        result = _(array).chain().some(['a', 42]);
        result = _(array).chain().some({a: 42});

        result = _(list).chain().some<SampleObject>();
        result = _(list).chain().some<SampleObject>(listIterator);
        result = _(list).chain().some('a');
        result = _(list).chain().some(['a', 42]);
        result = _(list).chain().some<SampleObject>({a: 42});

        result = _(dictionary).chain().some<SampleObject>();
        result = _(dictionary).chain().some(dictionaryIterator);
        result = _(dictionary).chain().some('a');
        result = _(dictionary).chain().some(['a', 42]);
        result = _(dictionary).chain().some<SampleObject>({a: 42});

        result = _(numericDictionary).chain().some<SampleObject>();
        result = _(numericDictionary).chain().some<SampleObject>(numericDictionaryIterator);
        result = _(numericDictionary).chain().some('a');
        result = _(numericDictionary).chain().some(['a', 42]);
        result = _(numericDictionary).chain().some<SampleObject>({a: 42});

        result = _(sampleObject).chain().some();
        result = _(sampleObject).chain().some(objectIterator);
        result = _(sampleObject).chain().some('a');
        result = _(sampleObject).chain().some(['a', 42]);
        result = _(sampleObject).chain().some<AbcObject>({a: 42});
    }
}

// _.sortBy
namespace TestSortBy {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<AbcObject> | null | undefined = obj;

    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => 0;
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => 0;

    {
        let result: AbcObject[];

        result = _.sortBy(array);
        result = _.sortBy(array, listIterator);
        result = _.sortBy(array, '');
        result = _.sortBy(array, {a: 42});

        result = _.sortBy(list);
        result = _.sortBy(list, listIterator);
        result = _.sortBy(list, '');
        result = _.sortBy(list, {a: 42});

        result = _.sortBy(dictionary);
        result = _.sortBy(dictionary, dictionaryIterator);
        result = _.sortBy(dictionary, '');
        result = _.sortBy(dictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).sortBy();
        result = _(array).sortBy(listIterator);
        result = _(array).sortBy('');
        result = _(array).sortBy({a: 42});

        result = _(list).sortBy();
        result = _(list).sortBy(listIterator);
        result = _(list).sortBy('');
        result = _(list).sortBy({a: 42});

        result = _(dictionary).sortBy();
        result = _(dictionary).sortBy(dictionaryIterator);
        result = _(dictionary).sortBy('');
        result = _(dictionary).sortBy({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().sortBy();
        result = _(array).chain().sortBy(listIterator);
        result = _(array).chain().sortBy('');
        result = _(array).chain().sortBy({a: 42});

        result = _(list).chain().sortBy();
        result = _(list).chain().sortBy(listIterator);
        result = _(list).chain().sortBy('');
        result = _(list).chain().sortBy({a: 42});

        result = _(dictionary).chain().sortBy();
        result = _(dictionary).chain().sortBy(dictionaryIterator);
        result = _(dictionary).chain().sortBy('');
        result = _(dictionary).chain().sortBy({a: 42});
    }
}

_.sortBy(stoogesAges, stooge => Math.sin(stooge.age), stooge => stooge.name.slice(1)); // $ExpectType StoogesAge[]
_.sortBy(stoogesAges, ['name', 'age']); // $ExpectType StoogesAge[]
_.sortBy(stoogesAges, 'name', stooge => Math.sin(stooge.age)); // $ExpectType StoogesAge[]

_(foodsOrganic).sortBy('organic', (food) => food.name, { organic: true }).value(); // $ExpectType FoodOrganic[]

// _.orderBy
namespace TestorderBy {
    type SampleObject = {a: number; b: string; c: boolean};

    const array: SampleObject[] | null | undefined = anything;
    const list: _.List<SampleObject> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = anything;
    const dictionary: _.Dictionary<SampleObject> | null | undefined = anything;
    const orders: boolean|string|Array<boolean|string> = anything;

    {
        let iteratees: ((value: string) => any)|Array<(value: string) => any> = anything;
        let result: string[];

        result = _.orderBy<string>('acbd', iteratees);
        result = _.orderBy<string>('acbd', iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: SampleObject[];

        result = _.orderBy(array, iteratees);
        result = _.orderBy(array, iteratees, orders);
        result = _.orderBy<SampleObject>(array, iteratees);
        result = _.orderBy<SampleObject>(array, iteratees, orders);

        result = _.orderBy(list, iteratees);
        result = _.orderBy(list, iteratees, orders);
        result = _.orderBy<SampleObject>(list, iteratees);
        result = _.orderBy<SampleObject>(list, iteratees, orders);

        result = _.orderBy(numericDictionary, iteratees);
        result = _.orderBy(numericDictionary, iteratees, orders);
        result = _.orderBy<SampleObject>(numericDictionary, iteratees);
        result = _.orderBy<SampleObject>(numericDictionary, iteratees, orders);

        result = _.orderBy(dictionary, iteratees);
        result = _.orderBy(dictionary, iteratees, orders);
        result = _.orderBy<SampleObject>(dictionary, iteratees);
        result = _.orderBy<SampleObject>(dictionary, iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).orderBy(iteratees);
        result = _(array).orderBy(iteratees, orders);

        result = _(list).orderBy(iteratees);
        result = _(list).orderBy(iteratees, orders);
        result = _(list).orderBy<SampleObject>(iteratees);
        result = _(list).orderBy<SampleObject>(iteratees, orders);

        result = _(numericDictionary).orderBy(iteratees);
        result = _(numericDictionary).orderBy(iteratees, orders);
        result = _(numericDictionary).orderBy<SampleObject>(iteratees);
        result = _(numericDictionary).orderBy<SampleObject>(iteratees, orders);

        result = _(dictionary).orderBy(iteratees);
        result = _(dictionary).orderBy(iteratees, orders);
        result = _(dictionary).orderBy<SampleObject>(iteratees);
        result = _(dictionary).orderBy<SampleObject>(iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().orderBy(iteratees);
        result = _(array).chain().orderBy(iteratees, orders);

        result = _(list).chain().orderBy(iteratees);
        result = _(list).chain().orderBy(iteratees, orders);
        result = _(list).chain().orderBy<SampleObject>(iteratees);
        result = _(list).chain().orderBy<SampleObject>(iteratees, orders);

        result = _(numericDictionary).chain().orderBy(iteratees);
        result = _(numericDictionary).chain().orderBy(iteratees, orders);
        result = _(numericDictionary).chain().orderBy<SampleObject>(iteratees);
        result = _(numericDictionary).chain().orderBy<SampleObject>(iteratees, orders);

        result = _(dictionary).chain().orderBy(iteratees);
        result = _(dictionary).chain().orderBy(iteratees, orders);
        result = _(dictionary).chain().orderBy<SampleObject>(iteratees);
        result = _(dictionary).chain().orderBy<SampleObject>(iteratees, orders);
    }
}

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
// _.after
namespace TestAfter {
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

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

    let func: SampleFunc = (a, b) => true;

    {
        let result: SampleFunc;

        result = _.ary(func);
        result = _.ary(func, 2);
        result = _.ary(func);
        result = _.ary(func, 2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleFunc>;

        result = _(func).ary();
        result = _(func).ary(2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleFunc>;

        result = _(func).chain().ary();
        result = _(func).chain().ary(2);
    }
}

// _.before
namespace TestBefore {
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

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

    let func: SampleFunc = (a, b) => true;

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bind(func, anything);
        result = _.bind(func, anything);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bind(func, anything, 42);
        result = _.bind(func, anything, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bind(func, anything, 42, '');
        result = _.bind(func, anything, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind(anything);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind(anything, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).bind(anything, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().bind(anything);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(func).chain().bind(anything, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(func).chain().bind(anything, 42, '');
    }
}

// _.bindAll
namespace TestBindAll {
    interface SampleObject {
        a(): void;
        b(): void;
        c(): void;
    }

    let object: SampleObject = { a: () => {}, b: () => {}, c: () => {} };

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
    let object = {
        foo: (a: number, b: string) => true,
    };

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey(object, 'foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bindKey(object, 'foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bindKey(object, 'foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).bindKey('foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo', 42, '');
    }
}

// _.curry
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
const testCurryRightFn = (a: number, b: number, c: number) => [a, b, c];
curryResult0 = _.curryRight(testCurryRightFn)(1, 2, 3);
curryResult2 = _.curryRight(testCurryRightFn)(1);
curryResult0 = _(testCurryRightFn).curryRight().value()(1, 2, 3);
curryResult2 = _(testCurryRightFn).curryRight().value()(1);
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

// _.debounce
namespace TestDebounce {
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

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        result = _.defer(func);
        result = _.defer(func, anything);
        result = _.defer(func, anything, anything);
        result = _.defer(func, anything, anything, anything);
    }

    {
        let result: _.LoDashImplicitWrapper<number>;

        result = _(func).defer();
        result = _(func).defer(anything);
        result = _(func).defer(anything, anything);
        result = _(func).defer(anything, anything, anything);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(func).chain().defer();
        result = _(func).chain().defer(anything);
        result = _(func).chain().defer(anything, anything);
        result = _(func).chain().defer(anything, anything, anything);
    }
}

// _.delay
namespace TestDelay {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        let result: number;

        result = _.delay(func, 1);
        result = _.delay(func, 1, 2);
        result = _.delay(func, 1, 2, '');
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

// _.flip
namespace TestFlip {
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.flip(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).flip();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().flip();
    }
}

// _.flow
namespace TestFlow {
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;
    let Fn3 = (a: number) => "";
    let Fn4 = (a: string) => 0;

    {
        // type infer test
        let result: (m: number, n: number) => number;

        result = _.flow(Fn2, Fn1);
        result = _.flow(Fn2, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1, Fn1, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn3, Fn4);
        result = _.flow([Fn2, Fn1, Fn3, Fn4]);
    }

    {
        let result: (m: number, n: number) => number;

        result = _.flow(Fn2, Fn1);
        result = _.flow(Fn2, Fn1, Fn1);
        result = _.flow(Fn2, Fn1, Fn1, Fn1);
        result = _.flow([Fn1, Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn2).flow(Fn1);
        result = _(Fn2).flow(Fn1, Fn1);
        result = _(Fn2).flow(Fn1, Fn1, Fn1);
        result = _(Fn2).flow([Fn1, Fn1, Fn1]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn2).chain().flow(Fn1);
        result = _(Fn2).chain().flow(Fn1, Fn1);
        result = _(Fn2).chain().flow(Fn1, Fn1, Fn1);
        result = _(Fn2).chain().flow([Fn1, Fn1, Fn1]);
    }
}

// _.flowRight
namespace TestFlowRight {
    let Fn1 = (n: number) => 0;
    let Fn2 = (m: number, n: number) => 0;

    {
        let result: (m: number, n: number) => number;

        result = _.flowRight(Fn1, Fn2);
        result = _.flowRight(Fn1, Fn1, Fn2);
        result = _.flowRight(Fn1, Fn1, Fn1, Fn2);
        result = _.flowRight([Fn1, Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flowRight(Fn2);
        result = _(Fn1).flowRight(Fn1, Fn2);
        result = _(Fn1).flowRight(Fn1, Fn1, Fn2);
        result = _(Fn1).flowRight([Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flowRight(Fn2);
        result = _(Fn1).chain().flowRight(Fn1, Fn2);
        result = _(Fn1).chain().flowRight(Fn1, Fn1, Fn2);
        result = _(Fn1).chain().flowRight([Fn1, Fn1, Fn2]);
    }
}

// _.memoize
namespace TestMemoize {
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
namespace TestOverArgs {
    type Func1 = (a: boolean) => boolean;
    type Func2 = (a: boolean, b: boolean) => boolean;

    let func1: Func1 = (a) => true;
    let func2: Func2 = (a, b) => true;

    let transform1 = (a: string) => true;
    let transform2 = (b: number) => true;

    {
        let result: (a: string) => boolean;

        result = _.overArgs(func1, transform1);
        result = _.overArgs(func1, [transform1]);
    }

    {
        let result: (a: string, b: number) => boolean;

        result = _.overArgs(func2, transform1, transform2);
        result = _.overArgs(func2, [transform1, transform2]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).overArgs(transform1);
        result = _(func1).overArgs([transform1]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).overArgs(transform1, transform2);
        result = _(func2).overArgs([transform1, transform2]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string) => boolean>;

        result = _(func1).chain().overArgs(transform1);
        result = _(func1).chain().overArgs([transform1]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(a: string, b: number) => boolean>;

        result = _(func2).chain().overArgs(transform1, transform2);
        result = _(func2).chain().overArgs([transform1, transform2]);
    }
}

// _.negate
namespace TestNegate {
    type PredicateFn = (a1: number, a2: number) => boolean;

    const predicate = (a1: number, a2: number) => a1 > a2;

    {
        let result: PredicateFn;

        result = _.negate<PredicateFn>(predicate);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<PredicateFn>;

        result = _(predicate).negate();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<PredicateFn>;

        result = _(predicate).chain().negate();
    }
}

// _.once
namespace TestOnce {
    type Func = (a: string, b: number) => boolean;

    let func: Func = (a, b) => true;

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

const greetPartial = (greeting: string, name: string) => `${greeting} ${name}`;
const hi = _.partial(greetPartial, 'hi');
hi('moe');

const defaultsDeep: (...args: any[]) => any = _.partialRight(_.merge, _.defaults);

const optionsPartialRight = {
    'variable': 'data',
    'imports': { 'jq': $ }
};

defaultsDeep(optionsPartialRight, _.templateSettings);

//_.rearg
const testReargFn = (a: string, b: string, c: string) => [a, b, c];
result = <string[]>(_.rearg(testReargFn, 2, 0, 1))('b', 'c', 'a');
result = <string[]>(_.rearg(testReargFn, [2, 0, 1]))('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg(2, 0, 1).value())('b', 'c', 'a');
result = <string[]>(_(testReargFn).rearg([2, 0, 1]).value())('b', 'c', 'a');

// _.rest
namespace TestRest {
    type Func = (a: string, b: number[]) => boolean;
    type ResultFunc = (a: string, ...b: number[]) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: ResultFunc;

        result = _.rest(func);
        result = _.rest(func, 1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFunc>;

        result = _(func).rest();
        result = _(func).rest(1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFunc>;

        result = _(func).chain().rest();
        result = _(func).chain().rest(1);
    }
}

//_.spread
namespace TestSpread {
    type SampleFunc = (args: Array<number|string>) => boolean;
    type SampleResult = (a: number, b: string) => boolean;

    let func: SampleFunc = (a) => true;

    {
        let result: SampleResult;

        result = _.spread(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(func).spread();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(func).chain().spread();
    }
}

// _.throttle
namespace TestThrottle {
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

// _.unary
namespace TestUnary {
    type Func = (a: string, b: number[]) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.unary(func);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Func>;

        result = _(func).unary();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Func>;

        result = _(func).chain().unary();
    }
}

// _.wrap
namespace TestWrap {
    type SampleValue = {a: number; b: string; c: boolean}
    type SampleResult = (arg2: number, arg3: string) => boolean;

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: SampleResult;

        result = _.wrap(value, wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value = 0;
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[] = [];
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(value).wrap(wrapper);
    }

    {
        type SampleWrapper = (arg1: number, arg2: number, arg3: string) => boolean;

        let value = 0;
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap(wrapper);
    }

    {
        type SampleWrapper = (arg1: number[], arg2: number, arg3: string) => boolean;

        let value: number[] = [];
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap(wrapper);
    }

    {
        type SampleWrapper = (arg1: SampleValue, arg2: number, arg3: string) => boolean;

        let value: SampleValue = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(value).chain().wrap(wrapper);
    }
}

/********
 * Lang *
 ********/

// _.castArray
namespace TestCastArray {
    {
        let result: number[];

        result = _.castArray(42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(42).castArray();
        result = _([42]).castArray();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<{a: number}>;

        result = _({a: 42}).castArray();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(42).chain().castArray();
        result = _([42]).chain().castArray();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<{a: number}>;

        result = _({a: 42}).chain().castArray();
    }
}

// _.clone
namespace TestClone {
    {
        let result: number;

        result = _.clone<number>(42);
        result = _(42).clone();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().clone();
    }

    {
        let result: string[];

        result = _.clone<string[]>(['']);
        result = _(['']).clone();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(['']).chain().clone();
    }

    {
        let result: {a: {b: number;};};

        result = _.clone<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).clone();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().clone();
    }
}

// _.cloneDeep
namespace TestCloneDeep {
    {
        let result: number;

        result = _.cloneDeep<number>(42);
        result = _(42).cloneDeep();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().cloneDeep();
    }

    {
        let result: string[];

        result = _.cloneDeep<string[]>(['']);
        result = _(['']).cloneDeep();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(['']).chain().cloneDeep();
    }

    {
        let result: {a: {b: number;};};

        result = _.cloneDeep<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).cloneDeep();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().cloneDeep();
    }
}

// _.cloneDeepWith
namespace TestCloneDeepWith {
    type CloneDeepWithCustomizer<V, R> = (value: V) => R;

    {
        let customizer: CloneDeepWithCustomizer<number, string> = (x) => "";
        let reslut: string;

        result = _.cloneDeepWith(42, customizer);
        result = _(42).cloneDeepWith(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number, string> = (x) => "";
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().cloneDeepWith(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number[], string[]> = (x) => [];
        let reslut: string[];

        result = _.cloneDeepWith([42], customizer);
        result = _([42]).cloneDeepWith(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<number[], string[]> = (x) => [];
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().cloneDeepWith(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let reslut: {a: {b: string;};};

        result = _.cloneDeepWith({a: {b: 42}}, customizer);
        result = _({a: {b: 42}}).cloneDeepWith(customizer);
    }

    {
        let customizer: CloneDeepWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().cloneDeepWith(customizer);
    }
}

// _.cloneWith
namespace TestCloneWith {
    type CloneWithCustomizer<V, R> = (value: V) => R;

    {
        let customizer: CloneWithCustomizer<number, string> = (x) => "";
        let reslut: string;

        result = _.cloneWith(42, customizer);
        result = _.cloneWith<number, string>(42, customizer);
        result = _(42).cloneWith<string>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number, string> = (x) => "";
        let result: _.LoDashExplicitWrapper<string>;

        result = _(42).chain().cloneWith<string>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number[], string[]> = (x) => [];
        let reslut: string[];

        result = _.cloneWith([42], customizer);
        result = _.cloneWith<number[], string[]>([42], customizer);
        result = _([42]).cloneWith<string[]>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<number[], string[]> = (x) => [];
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _([42]).chain().cloneWith(customizer);
    }

    {
        let customizer: CloneWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let reslut: {a: {b: string;};};

        result = _.cloneWith({a: {b: 42}}, customizer);
        result = _.cloneWith<{a: {b: number;};}, {a: {b: string;};}>({a: {b: 42}}, customizer);
        result = _({a: {b: 42}}).cloneWith<{a: {b: string;};}>(customizer);
    }

    {
        let customizer: CloneWithCustomizer<{a: {b: number;};}, {a: {b: string;};}> = (x) => ({ a: { b: "" } });
        let result: _.LoDashExplicitObjectWrapper<{a: {b: string;};}>;

        result = _({a: {b: 42}}).chain().cloneWith<{a: {b: string;};}>(customizer);
    }
}

// _.conforms
namespace TestConforms {
    let result: boolean = _.conforms({foo: (v: string) => false})({foo: "foo"});
    let result2: boolean = _.conforms({})({foo: "foo"});
}

// _.conformsTo
namespace TestConformsTo {
    let result: boolean = _.conformsTo({foo: "foo"}, {foo: (v: string) => false});
    let result2: boolean = _.conformsTo({}, {foo: (v: string) => false});
}

// _.eq
namespace TestEq {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.eq(anything, anything);

        result = _(anything).eq(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(anything).chain().eq(anything);
    }
}

// _.gt
namespace TestGt {
    {
        let result: boolean;

        result = _.gt(anything, anything);
        result = _(1).gt(anything);
        result = _([]).gt(anything);
        result = _({}).gt(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gt(anything);
        result = _([]).chain().gt(anything);
        result = _({}).chain().gt(anything);
    }
}

// _.gte
namespace TestGte {
    {
        let result: boolean;

        result = _.gte(anything, anything);
        result = _(1).gte(anything);
        result = _([]).gte(anything);
        result = _({}).gte(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().gte(anything);
        result = _([]).chain().gte(anything);
        result = _({}).chain().gte(anything);
    }
}

// _.isArguments
namespace TestisArguments {
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

        result = _.isArguments(anything);
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

        result = _.isArray(anything);
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

// _.isArrayBuffer
namespace TestIsArrayBuffer {
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

        result = _.isArrayBuffer(anything);
        result = _(1).isArrayBuffer();
        result = _<any>([]).isArrayBuffer();
        result = _({}).isArrayBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayBuffer();
        result = _<any>([]).chain().isArrayBuffer();
        result = _({}).chain().isArrayBuffer();
    }
}

// _.isArrayLike
namespace TestIsArrayLike {
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

        result = _.isArrayLike(anything);
        result = _(1).isArrayLike();
        result = _<any>([]).isArrayLike();
        result = _({}).isArrayLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayLike();
        result = _<any>([]).chain().isArrayLike();
        result = _({}).chain().isArrayLike();
    }
}

// _.isArrayLikeObject
namespace TestIsArrayLikeObject {
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

        result = _.isArrayLikeObject(anything);
        result = _(1).isArrayLikeObject();
        result = _<any>([]).isArrayLikeObject();
        result = _({}).isArrayLikeObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayLikeObject();
        result = _<any>([]).chain().isArrayLikeObject();
        result = _({}).chain().isArrayLikeObject();
    }
}

// _.isBoolean
namespace TestIsBoolean {
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

        result = _.isBoolean(anything);
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

// _.isBuffer
namespace TestIsBuffer {
    {
        let result: boolean;

        result = _.isBuffer(anything);
        result = _(1).isBuffer();
        result = _<any>([]).isBuffer();
        result = _({}).isBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBuffer();
        result = _<any>([]).chain().isBuffer();
        result = _({}).chain().isBuffer();
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

        result = _.isDate(anything);
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

        result = _.isElement(anything);

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

        result = _.isEmpty(anything);
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

        result = _.isEqual(anything, anything);

        result = _(anything).isEqual(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(anything).chain().isEqual(anything);
    }
}

// _.isEqualWith
namespace TestIsEqualWith {
    let customizer = (value: any, other: any, indexOrKey: number|string|symbol|undefined, parent: any, otherParent: any, stack: any) => true;

    {
        let result: boolean;

        result = _.isEqualWith(anything, anything, customizer);

        result = _(anything).isEqualWith(anything, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(anything).chain().isEqualWith(anything, customizer);
    }
}

// _.isError
namespace TestIsError {
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

        result = _.isError(anything);
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

        result = _.isFinite(anything);
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

        result = _.isFunction(anything);
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

// _.isInteger
namespace TestIsInteger {
    {
        let result: boolean;

        result = _.isInteger(anything);

        result = _(1).isInteger();
        result = _<any>([]).isInteger();
        result = _({}).isInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isInteger();
        result = _<any>([]).chain().isInteger();
        result = _({}).chain().isInteger();
    }
}

// _.isLength
namespace TestIsLength {
    {
        let result: boolean;

        result = _.isLength(anything);

        result = _(1).isLength();
        result = _<any>([]).isLength();
        result = _({}).isLength();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isLength();
        result = _<any>([]).chain().isLength();
        result = _({}).chain().isLength();
    }
}

// _.isMap
namespace TestIsMap {
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

        result = _.isMap(anything);
        result = _(1).isMap();
        result = _<any>([]).isMap();
        result = _({}).isMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isMap();
        result = _<any>([]).chain().isMap();
        result = _({}).chain().isMap();
    }
}

// _.isMatch
namespace TestIsMatch {
    _.isMatch({}, {}); // $ExpectType boolean
    _({}).isMatch({}); // $ExpectType boolean
    _.chain({}).isMatch({}); // $ExpectType LoDashExplicitWrapper<boolean>
}

// _.isMatchWith
namespace TestIsMatchWith {
    let testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string|symbol) => true;

    _.isMatchWith({}, {}, testIsMatchCustiomizerFn); // $ExpectType boolean
    _({}).isMatchWith({}, testIsMatchCustiomizerFn); // $ExpectType boolean
    _.chain({}).isMatchWith({}, testIsMatchCustiomizerFn); // $ExpectType LoDashExplicitWrapper<boolean>
}

// _.isNaN
namespace TestIsNaN {
    {
        let result: boolean;

        result = _.isNaN(anything);

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

        result = _.isNative(anything);

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

// _.isNil
namespace TestIsNil {
    {
        let result: boolean;

        result = _.isNil(anything);

        result = _(1).isNil();
        result = _<any>([]).isNil();
        result = _({}).isNil();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNil();
        result = _<any>([]).chain().isNil();
        result = _({}).chain().isNil();
    }
}

// _.isNull
namespace TestIsNull {
    {
        let result: boolean;

        result = _.isNull(anything);

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

        result = _.isNumber(anything);

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

        result = _.isObject(anything);
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

// _.isObjectLike
namespace TestIsObjectLike {
    {
        let result: boolean;

        result = _.isObjectLike(anything);
        result = _(1).isObjectLike();
        result = _<any>([]).isObjectLike();
        result = _({}).isObjectLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObjectLike();
        result = _<any>([]).chain().isObjectLike();
        result = _({}).chain().isObjectLike();
    }
}

// _.isPlainObject
namespace TestIsPlainObject {
    {
        let result: boolean;

        result = _.isPlainObject(anything);
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

        result = _.isRegExp(anything);
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

// _.isSafeInteger
namespace TestIsSafeInteger {
    {
        let result: boolean;

        result = _.isSafeInteger(anything);

        result = _(1).isSafeInteger();
        result = _<any>([]).isSafeInteger();
        result = _({}).isSafeInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSafeInteger();
        result = _<any>([]).chain().isSafeInteger();
        result = _({}).chain().isSafeInteger();
    }
}

// _.isSet
namespace TestIsSet {
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

        result = _.isSet(anything);
        result = _(1).isSet();
        result = _<any>([]).isSet();
        result = _({}).isSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSet();
        result = _<any>([]).chain().isSet();
        result = _({}).chain().isSet();
    }
}

// _.isString
namespace TestIsString {
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

        result = _.isString(anything);
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

// _.isSymbol
namespace TestIsSymbol {
    {
        let result: boolean;

        result = _.isSymbol(anything);

        result = _(1).isSymbol();
        result = _<any>([]).isSymbol();
        result = _({}).isSymbol();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSymbol();
        result = _<any>([]).chain().isSymbol();
        result = _({}).chain().isSymbol();
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

        result = _.isUndefined(anything);

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

// _.isWeakMap
namespace TestIsWeakMap {
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

        result = _.isWeakMap(anything);
        result = _(1).isWeakMap();
        result = _<any>([]).isWeakMap();
        result = _({}).isWeakMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakMap();
        result = _<any>([]).chain().isWeakMap();
        result = _({}).chain().isWeakMap();
    }
}

// _.isWeakSet
namespace TestIsWeakSet {
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

        result = _.isWeakSet(anything);
        result = _(1).isWeakSet();
        result = _<any>([]).isWeakSet();
        result = _({}).isWeakSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakSet();
        result = _<any>([]).chain().isWeakSet();
        result = _({}).chain().isWeakSet();
    }
}

// _.lt
namespace TestLt {
    {
        let result: boolean;

        result = _.lt(anything, anything);
        result = _(1).lt(anything);
        result = _([]).lt(anything);
        result = _({}).lt(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lt(anything);
        result = _([]).chain().lt(anything);
        result = _({}).chain().lt(anything);
    }
}

// _.lte
namespace TestLte {
    {
        let result: boolean;

        result = _.lte(anything, anything);
        result = _(1).lte(anything);
        result = _([]).lte(anything);
        result = _({}).lte(anything);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().lte(anything);
        result = _([]).chain().lte(anything);
        result = _({}).chain().lte(anything);
    }
}

// _.toArray
namespace TestToArray {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let dictionary: _.Dictionary<AbcObject> = {};
    let numericDictionary: _.NumericDictionary<AbcObject> = {};

    {
        let result: string[];

        result = _.toArray<string>('');
        result = _.toArray('');
    }

    {
        let result: AbcObject[];

        result = _.toArray<AbcObject>(array);
        result = _.toArray<AbcObject>(list);
        result = _.toArray<AbcObject>(dictionary);
        result = _.toArray<AbcObject>(numericDictionary);

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
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).toArray();
        result = _(list).toArray<AbcObject>();
        result = _(dictionary).toArray<AbcObject>();
        result = _(numericDictionary).toArray<AbcObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().toArray();
        result = _(list).chain().toArray<AbcObject>();
        result = _(dictionary).chain().toArray<AbcObject>();
        result = _(numericDictionary).chain().toArray<AbcObject>();
    }
}

// _.toPlainObject
namespace TestToPlainObject {
    {
        let result: AbcObject;
        result = _.toPlainObject();
        result = _.toPlainObject(true);
        result = _.toPlainObject(1);
        result = _.toPlainObject('a');
        result = _.toPlainObject([]);
        result = _.toPlainObject({});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<AbcObject>;

        result = _(true).toPlainObject();
        result = _(1).toPlainObject();
        result = _('a').toPlainObject();
        result = _([1]).toPlainObject();
        result = _(['']).toPlainObject();
        result = _({}).toPlainObject();
    }
}

// _.toFinite
namespace TestToFinite {
   {
       let result: number;
       result = _.toFinite(true);
       result = _.toFinite(1);
       result = _.toFinite('3.2');
       result = _.toFinite([]);
       result = _.toFinite({});
   }

   {
       let result: number;

       result = _(true).toFinite();
       result = _(1).toFinite();
       result = _('3.2').toFinite();
       result = _([1]).toFinite();
       result = _([]).toFinite();
       result = _({}).toFinite();
   }
}

// _.toInteger
namespace TestToInteger {
   {
       let result: number;
       result = _.toInteger(true);
       result = _.toInteger(1);
       result = _.toInteger('3.2');
       result = _.toInteger([]);
       result = _.toInteger({});
   }

   {
       let result: number;

       result = _(true).toInteger();
       result = _(1).toInteger();
       result = _('a').toInteger();
       result = _([1]).toInteger();
       result = _(['']).toInteger();
       result = _({}).toInteger();
   }
}

// _.toLength
namespace TestToLength {
   {
       let result: number;
       result = _.toLength(true);
       result = _.toLength(1);
       result = _.toLength('a');
       result = _.toLength([]);
       result = _.toLength({});
   }

   {
       let result: number;

       result = _(true).toLength();
       result = _(1).toLength();
       result = _('a').toLength();
       result = _([1]).toLength();
       result = _(['']).toLength();
       result = _({}).toLength();
   }
}

// _.toNumber
namespace TestToNumber {
   {
       let result: number;
       result = _.toNumber(true);
       result = _.toNumber(1);
       result = _.toNumber('a');
       result = _.toNumber([]);
       result = _.toNumber({});
   }

   {
       let result: number;

       result = _(true).toNumber();
       result = _(1).toNumber();
       result = _('a').toNumber();
       result = _([1]).toNumber();
       result = _(['']).toNumber();
       result = _({}).toNumber();
   }
}

// _.toSafeInteger
namespace TestToSafeInteger {
   {
       let result: number;
       result = _.toSafeInteger(true);
       result = _.toSafeInteger(1);
       result = _.toSafeInteger('a');
       result = _.toSafeInteger([]);
       result = _.toSafeInteger({});
   }

   {
       let result: number;

       result = _(true).toSafeInteger();
       result = _(1).toSafeInteger();
       result = _('a').toSafeInteger();
       result = _([1]).toSafeInteger();
       result = _(['']).toSafeInteger();
       result = _({}).toSafeInteger();
   }
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

// _.divide
namespace TestDivide {
    {
        let result: number;

        result = _.divide(6, 4);

        result = _(6).divide(4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6).chain().floor(4);
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
    let array: number[] = [];
    let list: _.List<number> = [];

    let result: number | undefined;

    result = _.max<number>(array);
    result = _.max<number>(list);

    result = _(array).max();
    result = _(list).max<number>();
}

// _.maxBy
namespace TestMaxBy {
    let array: number[] = [];
    let list: _.List<number> = [];
    let array2: AbcObject[] = [];
    let list2: _.List<AbcObject> = [];

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;

    let result: number | undefined;
    let result2: AbcObject | undefined;

    result = _.maxBy<number>(array);
    result = _.maxBy<number>(array, listIterator);
    result = _.maxBy<number>(array, '');
    result2 = _.maxBy(array2, {a: 42});

    result = _.maxBy<number>(list);
    result = _.maxBy<number>(list, listIterator);
    result = _.maxBy<number>(list, '');
    result2 = _.maxBy(list2, {a: 42});

    result = _(array).maxBy();
    result = _(array).maxBy(listIterator);
    result = _(array).maxBy('');
    result2 = _(array2).maxBy({a: 42});

    result = _(list).maxBy<number>();
    result = _(list).maxBy<number>(listIterator);
    result = _(list).maxBy<number>('');
    result2 = _(list2).maxBy({a: 42});
}

// _.mean
namespace TestMean {
    let array: number[] = [];

    let result: number;

    result = _.mean(array);

    result = _(array).mean();
}

// _.meanBy
{
    let array: AbcObject[] = [];

    let result: number;

    result = _.meanBy(array, (x) => x.a);
    result = _.meanBy(array, 'a');

    result = _(array).mean();
}

// _.min
namespace TestMin {
    let array: number[] = [];
    let list: _.List<number> = [];

    let result: number | undefined;

    result = _.min<number>(array);
    result = _.min<number>(list);

    result = _(array).min();
    result = _(list).min<number>();
}

// _.minBy
namespace TestMinBy {
    let array: number[] = [];
    let list: _.List<number> = [];
    let array2: AbcObject[] = [];
    let list2: _.List<AbcObject> = [];

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;

    let result: number | undefined;
    let result2: AbcObject | undefined;

    result = _.minBy<number>(array);
    result = _.minBy<number>(array, listIterator);
    result = _.minBy<number>(array, '');
    result2 = _.minBy(array2, {a: 42});

    result = _.minBy<number>(list);
    result = _.minBy<number>(list, listIterator);
    result = _.minBy<number>(list, '');
    result2 = _.minBy(list2, {a: 42});

    result = _(array).minBy();
    result = _(array).minBy(listIterator);
    result = _(array).minBy('');
    result2 = _(array2).minBy({a: 42});

    result = _(list).minBy<number>();
    result = _(list).minBy<number>(listIterator);
    result = _(list).minBy<number>('');
    result2 = _(list2).minBy({a: 42});
}

// _.multiply
namespace TestMultiply {
    {
        let result: number;

        result = _.multiply(6, 4);

        result = _(6).multiply(4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(6).chain().multiply(4);
    }
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
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator = (value: number, index: number, collection: _.List<number>) => 0;
    let dictionaryIterator = (value: number, key: string, collection: _.Dictionary<number>) => 0;

    {
        let result: number;

        result = _.sum(array);

        result = _.sum(list);

        result = _(array).sum();

        result = _(list).sum();

        result = _(dictionary).sum();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sum();

        result = _(list).chain().sum();

        result = _(dictionary).chain().sum();
    }
}

// _.sumBy
namespace TestSumBy {
    let array: number[] | null | undefined = [] as any;
    let objectArray: Array<{ 'age': number }> | null | undefined = [] as any;

    let list: _.List<number> | null | undefined = [] as any;
    let objectList: _.List<{ 'age': number }> | null | undefined = [] as any;

    let listIterator = (value: number) => 0;

    {
        let result: number;

        result = _.sumBy(array);
        result = _.sumBy(array, listIterator);
        result = _.sumBy(objectArray, 'age');

        result = _.sumBy(list);
        result = _.sumBy(list, listIterator);
        result = _.sumBy(objectList, 'age');

        result = _(array).sumBy(listIterator);
        result = _(objectArray).sumBy('age');

        result = _(list).sumBy(listIterator);
        result = _(objectList).sumBy('age');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sumBy(listIterator);
        result = _(objectArray).chain().sumBy('age');

        result = _(list).chain().sumBy(listIterator);
        result = _(objectList).chain().sumBy('age');
    }
}

/**********
 * Number *
 **********/

 // _.subtract
 namespace subtract {
     {
         let result: number;

         result = _.subtract(3, 2);

         result = _(3).subtract(2);
     }

     {
         let result: _.LoDashExplicitWrapper<number>;

         result = _(3).chain().subtract(2);
     }
 }

// _.clamp
namespace TestInClamp {
    {
        let result: number;

        result = _.clamp(3, 2, 4);
        result = _.clamp(3, 4);

        result = _(3).clamp(2, 4);
        result = _(3).clamp(4);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(3).chain().clamp(2, 4);
    }
}

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

    // $ExpectType number[]
    _.map([5, 5], _.random);
}

/**********
 * Object *
 **********/

// _.assign
namespace TestAssign {
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

        result = _.assign(obj);
    }

    {
        let result: { a: number };

        result = _.assign(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.assign(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.assign(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.assign(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.assign(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assign();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).assign(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).assign(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).assign(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assign(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assign();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).chain().assign(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).chain().assign(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).chain().assign(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).chain().assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assign(s1, s2, s3, s4, s5);
    }
}

// _.assignWith
namespace TestAssignWith {
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

        result = _.assignWith(obj);
    }

    {
        let result: { a: number };
        result = _.assignWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        result = _.assignWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        result = _.assignWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        result = _.assignWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
        result = _.assignWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;
        result = _(obj).assignWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;
        result = _(obj).assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;
        result = _(obj).assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;
        result = _(obj).assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;
        result = _(obj).chain().assignWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;
        result = _(obj).chain().assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.assignIn
namespace TestAssignIn {
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

        result = _.assignIn(obj);
    }

    {
        let result: { a: number };

        result = _.assignIn(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.assignIn(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.assignIn(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.assignIn(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.assignIn<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignIn();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).assignIn(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).assignIn(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assignIn<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignIn();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).chain().assignIn(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).chain().assignIn(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3, s4, s5);
    }
}

// _.assignInWith
namespace TestAssignInWith {
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

        result = _.assignInWith(obj);
    }

    {
        let result: { a: number };
        result = _.assignInWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };
        result = _.assignInWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };
        result = _.assignInWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };
        result = _.assignInWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };
        result = _.assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).assignInWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;
        result = _(obj).assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;
        result = _(obj).assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;
        result = _(obj).assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;
        result = _(obj).assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().assignInWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;
        result = _(obj).chain().assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;
        result = _(obj).chain().assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.create
namespace TestCreate {
    type SampleProto = {a: number};
    type SampleProps = {b: string};

    let prototype: SampleProto = { a: 1 };
    let properties: SampleProps = { b: "" };

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

    result = _.defaults(obj);
    }

    {
    let result: { a: string };

    result = _.defaults(obj, s1);
    }

    {
    let result: { a: string, b: number };

    result = _.defaults(obj, s1, s2);
    }

    {
    let result: { a: string, b: number, c: number };

    result = _.defaults(obj, s1, s2, s3);
    }

    {
    let result: { a: string, b: number, c: number, d: number };

    result = _.defaults(obj, s1, s2, s3, s4);
    }

    {
    let result: { a: string, b: number, c: number, d: number, e: number };

    result = _.defaults(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).defaults();
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string & number }>;

    result = _(obj).defaults(s1);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string & number, b: number }>;

    result = _(obj).defaults(s1, s2);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string & number, b: number, c: number }>;

    result = _(obj).defaults(s1, s2, s3);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string & number, b: number, c: number, d: number }>;

    result = _(obj).defaults(s1, s2, s3, s4);
    }

    {
    let result: _.LoDashImplicitObjectWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

    result = _(obj).defaults(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().defaults();
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string & number }>;

    result = _(obj).chain().defaults(s1);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string & number, b: number }>;

    result = _(obj).chain().defaults(s1, s2);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string & number, b: number, c: number }>;

    result = _(obj).chain().defaults(s1, s2, s3);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string & number, b: number, c: number, d: number }>;

    result = _(obj).chain().defaults(s1, s2, s3, s4);
    }

    {
    let result: _.LoDashExplicitObjectWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

    result = _(obj).chain().defaults(s1, s2, s3, s4, s5);
    }
}

//_.defaultsDeep
interface DefaultsDeepResult {
    user: {
        name: string;
        age: number;
    }
}
const TestDefaultsDeepObject = { 'user': { 'name': 'barney' } };
const TestDefaultsDeepSource = { 'user': { 'name': 'fred', 'age': 36 } };
result = <DefaultsDeepResult>_.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource);
result = <DefaultsDeepResult>_(TestDefaultsDeepObject).defaultsDeep(TestDefaultsDeepSource).value();

// _.entries
namespace TestEntries {
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        result = _.entries(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).entries();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().entries();
    }
}

// _.entriesIn
namespace TestEntriesIn {
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        result = _.entriesIn(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).entriesIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().entriesIn<string>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, any]>;

        result = _(object).chain().entriesIn();
    }
}

// _.extend
namespace TestExtend {
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

        result = _.extend(obj);
    }

    {
        let result: { a: number };

        result = _.extend(obj, s1);
    }

    {
        let result: { a: number, b: number };

        result = _.extend(obj, s1, s2);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.extend(obj, s1, s2, s3);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.extend(obj, s1, s2, s3, s4);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.extend<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).extend();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).extend(s1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).extend(s1, s2);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).extend(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extend(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().extend();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).chain().extend(s1);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).chain().extend(s1, s2);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).chain().extend(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).chain().extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extend(s1, s2, s3, s4, s5);
    }
}

// _.extendWith
namespace TestExtendWith {
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

        result = _.extendWith(obj);
    }

    {
        let result: { a: number };

        result = _.extendWith(obj, s1, customizer);
    }

    {
        let result: { a: number, b: number };

        result = _.extendWith(obj, s1, s2, customizer);
    }

    {
        let result: { a: number, b: number, c: number };

        result = _.extendWith(obj, s1, s2, s3, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number };

        result = _.extendWith(obj, s1, s2, s3, s4, customizer);
    }

    {
        let result: { a: number, b: number, c: number, d: number, e: number };

        result = _.extendWith<{ a: number, b: number, c: number, d: number, e: number }>(obj, s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<Obj>;

        result = _(obj).extendWith();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).extendWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extendWith(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<Obj>;

        result = _(obj).chain().extendWith();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string }>;

        result = _(obj).chain().extendWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number }>;

        result = _(obj).chain().extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number & string, b: number, c: number, d: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.findKey
namespace TestFindKey {
    {
        let a: keyof undefined;
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        result = _.findKey<{a: string;}>({a: ''});

        result = _.findKey<{a: string;}>({a: ''}, predicateFn);

        result = _.findKey<{a: string;}>({a: ''}, '');

        result = _.findKey({a: { b: 5 }}, {b: 42});

        result = _.findKey({a: { b: 5 }}, ['b', 5]);

        result = _<{a: string;}>({a: ''}).findKey();

        result = _<{a: string;}>({a: ''}).findKey(predicateFn);

        result = _<{a: string;}>({a: ''}).findKey('');

        result = _({a: { b: 5 }}).findKey({b: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        result = _.findKey({a: ''}, predicateFn);

        result = _({a: ''}).findKey(predicateFn);
    }

    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findKey();

        result = _<{a: string;}>({a: ''}).chain().findKey(predicateFn);

        result = _<{a: string;}>({a: ''}).chain().findKey('');

        result = _({a: { b: 5 }}).chain().findKey({b: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _({a: ''}).chain().findKey(predicateFn);
    }
}

// _.findLastKey
namespace TestFindLastKey {
    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: string | undefined;

        result = _.findLastKey<{a: string;}>({a: ''});

        result = _.findLastKey<{a: string;}>({a: ''}, predicateFn);

        result = _.findLastKey<{a: string;}>({a: ''}, '');

        result = _.findLastKey({a: { b: 5 }}, {b: 42});

        result = _.findLastKey({a: { b: 5 }}, ['b', 5]);

        result = _<{a: string;}>({a: ''}).findLastKey();

        result = _<{a: string;}>({a: ''}).findLastKey(predicateFn);

        result = _<{a: string;}>({a: ''}).findLastKey('');

        result = _({a: { b: 5 }}).findLastKey({b: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: string | undefined;

        result = _.findLastKey({a: ''}, predicateFn);

        result = _({a: ''}).findLastKey(predicateFn);
    }

    {
        let predicateFn = (value: any, key: string, object: {}) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _<{a: string;}>({a: ''}).chain().findLastKey();

        result = _<{a: string;}>({a: ''}).chain().findLastKey(predicateFn);

        result = _<{a: string;}>({a: ''}).chain().findLastKey('');

        result = _({a: { b: 5 }}).chain().findLastKey({b: 42});
    }

    {
        let predicateFn = (value: string, key: string, collection: _.Dictionary<string>) => true;
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _({a: ''}).chain().findLastKey(predicateFn);
    }
}

// _.forIn
namespace TestForIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forIn(dictionary);
        result = _.forIn(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forIn(nilDictionary);
        result = _.forIn(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forIn<SampleObject>(object);
        result = _.forIn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forIn<SampleObject | null | undefined>(nilObject);
        result = _.forIn<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forIn();
        result = _(dictionary).forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forIn();
        result = _(nilDictionary).forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forIn();
        result = _(dictionary).chain().forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forIn();
        result = _(nilDictionary).chain().forIn(dictionaryIterator);
    }
}

// _.forInRight
namespace TestForInRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forInRight(dictionary);
        result = _.forInRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forInRight(nilDictionary);
        result = _.forInRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forInRight<SampleObject>(object);
        result = _.forInRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forInRight<SampleObject | null | undefined>(nilObject);
        result = _.forInRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forInRight();
        result = _(dictionary).forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forInRight();
        result = _(nilDictionary).forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forInRight();
        result = _(dictionary).chain().forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forInRight();
        result = _(nilDictionary).chain().forInRight(dictionaryIterator);
    }
}

// _.forOwn
namespace TestForOwn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forOwn(dictionary);
        result = _.forOwn(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forOwn(nilDictionary);
        result = _.forOwn(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forOwn<SampleObject>(object);
        result = _.forOwn<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forOwn<SampleObject | null | undefined>(nilObject);
        result = _.forOwn<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwn();
        result = _(dictionary).forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forOwn();
        result = _(nilDictionary).forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwn();
        result = _(dictionary).chain().forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forOwn();
        result = _(nilDictionary).chain().forOwn(dictionaryIterator);
    }
}

// _.forOwnRight
namespace TestForOwnRight {
    type SampleObject = {a: number; b: string; c: boolean;};

    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = anything;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: SampleObject = { a: 1, b: "", c: true };
    let nilObject: SampleObject | null | undefined = anything;
    let objectIterator: (element: any, key?: string, collection?: any) => any = (element: any, key?: string, collection?: any) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.forOwnRight(dictionary);
        result = _.forOwnRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<number> | null | undefined;

        result = _.forOwnRight(nilDictionary);
        result = _.forOwnRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: SampleObject;

        result = _.forOwnRight<SampleObject>(object);
        result = _.forOwnRight<SampleObject>(object, objectIterator);
    }

    {
        let result: SampleObject | null | undefined;

        result = _.forOwnRight<SampleObject | null | undefined>(nilObject);
        result = _.forOwnRight<SampleObject | null | undefined>(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwnRight();
        result = _(dictionary).forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).forOwnRight();
        result = _(nilDictionary).forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwnRight();
        result = _(dictionary).chain().forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<number>>;

        result = _(nilDictionary).chain().forOwnRight();
        result = _(nilDictionary).chain().forOwnRight(dictionaryIterator);
    }
}

// _.functions
namespace TestFunctions {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functions(object);
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

// _.functionsIn
namespace TestFunctionsIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functionsIn<SampleObject>(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _(object).functionsIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _(object).chain().functionsIn();
    }
}

// _.get
namespace TestGet {
    _.get([], Symbol.iterator);
    _.get([], [Symbol.iterator]);

    _.get('abc', 1); // $ExpectType string
    _('abc').get(1); // $ExpectType string
    _.chain('abc').get(1); // $ExpectType LoDashExplicitWrapper<string>

    _.get({ a: { b: true } }, "a"); // $ExpectType { b: boolean; }
    _({ a: { b: true } }).get("a"); // $ExpectType { b: boolean; }
    _.chain({ a: { b: true } }).get("a"); // $ExpectType LoDashExplicitWrapper<{ b: boolean; }>

    _.get({ a: { b: true } }, ["a"]); // $ExpectType { b: boolean; }
    _({ a: { b: true } }).get(["a"]); // $ExpectType { b: boolean; }
    _.chain({ a: { b: true } }).get(["a"]); // $ExpectType LoDashExplicitWrapper<{ b: boolean; }>

    _.get({ a: { b: true } }, ["a", "b"]); // $ExpectType any
    _({ a: { b: true } }).get(["a", "b"]); // $ExpectType any
    _.chain({ a: { b: true } }).get(["a", "b"]); // $ExpectType LoDashExplicitWrapper<any>

    {
        let result: string;

        result = _.get('abc', '0');
        result = _.get('abc', '0', '_');
        result = _.get('abc', ['0']);
        result = _.get('abc', ['0'], '_');

        result = _.get('abc', '0');
        result = _.get('abc', '0', '_');
        result = _.get('abc', ['0']);
        result = _.get('abc', ['0'], '_');

        result = _('abc').get<string>('0');
        result = _('abc').get<string>('0', '_');
        result = _('abc').get<string>(['0']);
        result = _('abc').get<string>(['0'], '_');
    }

    {
        let result: number;

        result = _.get([42], '0');
        result = _.get([42], '0', -1);
        result = _.get([42], ['0']);
        result = _.get([42], ['0'], -1);

        result = _.get([42], '0');
        result = _.get([42], '0', -1);
        result = _.get([42], ['0']);
        result = _.get([42], ['0'], -1);

        result = _([42]).get<number>('0');
        result = _([42]).get<number>('0', -1);
        result = _([42]).get<number>(['0']);
        result = _([42]).get<number>(['0'], -1);
    }

    {
        let result: boolean;

        result = _.get({a: true}, 'a');
        result = _.get({a: true}, 'a', false);
        result = _.get({a: true}, ['a']);
        result = _.get({a: true}, ['a'], false);

        result = _.get({a: true}, 'a');
        result = _.get({a: true}, 'a', false);
        result = _.get({a: true}, ['a']);
        result = _.get({a: true}, ['a'], false);

        result = _({a: true}).get<boolean>('a');
        result = _({a: true}).get<boolean>('a', false);
        result = _({a: true}).get<boolean>(['a']);
        result = _({a: true}).get<boolean>(['a'], false);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().get('0');
        result = _('abc').chain().get('0', '_');
        result = _('abc').chain().get(['0']);
        result = _('abc').chain().get(['0'], '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().get('0');
        result = _([42]).chain().get('0', -1);
        result = _([42]).chain().get(['0']);
        result = _([42]).chain().get(['0'], -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().get('a');
        result = _({a: true}).chain().get('a', false);
        result = _({a: true}).chain().get(['a']);
        result = _({a: true}).chain().get(['a'], false);
    }
}

// _.has
namespace TestHas {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.has<SampleObject>(object, '');
        result = _.has<SampleObject>(object, 42);
        result = _.has<SampleObject>(object, ['', 42]);

        result = _(object).has('');
        result = _(object).has(42);
        result = _(object).has(['', 42]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().has('');
        result = _(object).chain().has(42);
        result = _(object).chain().has(['', 42]);
    }
}

// _.hasIn
namespace TestHasIn {
    type SampleObject = {a: number; b: string; c: boolean;};

    let object: SampleObject = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.hasIn<SampleObject>(object, '');
        result = _.hasIn<SampleObject>(object, 42);
        result = _.hasIn<SampleObject>(object, ['', 42]);

        result = _(object).hasIn('');
        result = _(object).hasIn(42);
        result = _(object).hasIn(['', 42]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().hasIn('');
        result = _(object).chain().hasIn(42);
        result = _(object).chain().hasIn(['', 42]);
    }
}

// _.invert
namespace TestInvert {
    {
        let result: _.Dictionary<string>;

        result = _.invert({});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string>>;

        result = _({}).invert();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string>>;

        result = _({}).chain().invert();
    }
}

// _.invertBy
namespace TestInvertBy {
    let array: Array<{a: number;}> = [];
    let list: _.List<{a: number;}> = [];
    let dictionary: _.Dictionary<{a: number;}> = {};
    let numericDictionary: _.NumericDictionary<{a: number;}> = {};

    let stringIterator: (value: string) => any = (value: string) => 1;
    let arrayIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let listIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let dictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;
    let numericDictionaryIterator: (value: {a: number;}) => any = (value: {a: number;}) => 1;

    {
        let result: _.Dictionary<string[]>;

        result = _.invertBy('foo');
        result = _.invertBy('foo', stringIterator);

        result = _.invertBy(array);
        result = _.invertBy<{a: number;}>(array, 'a');
        result = _.invertBy<{a: number;}>(array, arrayIterator);
        result = _.invertBy<{a: number;}>(array, {a: 1});

        result = _.invertBy(list);
        result = _.invertBy<{a: number;}>(list, 'a');
        result = _.invertBy<{a: number;}>(list, listIterator);
        result = _.invertBy<{a: number;}>(list, {a: 1});

        result = _.invertBy(dictionary);
        result = _.invertBy<{a: number;}>(dictionary, 'a');
        result = _.invertBy<{a: number;}>(dictionary, dictionaryIterator);
        result = _.invertBy<{a: number;}>(dictionary, {a: 1});

        result = _.invertBy(numericDictionary);
        result = _.invertBy<{a: number;}>(numericDictionary, 'a');
        result = _.invertBy<{a: number;}>(numericDictionary, numericDictionaryIterator);
        result = _.invertBy<{a: number;}>(numericDictionary, {a: 1});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('foo').invertBy();
        result = _('foo').invertBy(stringIterator);

        result = _(array).invertBy();
        result = _(array).invertBy('a');
        result = _(array).invertBy(arrayIterator);
        result = _(array).invertBy({a: 1});

        result = _(list).invertBy();
        result = _(list).invertBy('a');
        result = _(list).invertBy(listIterator);
        result = _(list).invertBy<{a: number;}>({a: 1});

        result = _(dictionary).invertBy();
        result = _(dictionary).invertBy('a');
        result = _(dictionary).invertBy(dictionaryIterator);
        result = _(dictionary).invertBy<{a: number;}>({a: 1});

        result = _(numericDictionary).invertBy();
        result = _(numericDictionary).invertBy('a');
        result = _(numericDictionary).invertBy(numericDictionaryIterator);
        result = _(numericDictionary).invertBy<{a: number;}>({a: 1});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('foo').chain().invertBy();
        result = _('foo').chain().invertBy(stringIterator);

        result = _(array).chain().invertBy();
        result = _(array).chain().invertBy('a');
        result = _(array).chain().invertBy(arrayIterator);
        result = _(array).chain().invertBy({a: 1});

        result = _(list).chain().invertBy();
        result = _(list).chain().invertBy('a');
        result = _(list).chain().invertBy(listIterator);
        result = _(list).chain().invertBy<{a: number;}>({a: 1});

        result = _(dictionary).chain().invertBy();
        result = _(dictionary).chain().invertBy('a');
        result = _(dictionary).chain().invertBy(dictionaryIterator);
        result = _(dictionary).chain().invertBy<{a: number;}>({a: 1});

        result = _(numericDictionary).chain().invertBy();
        result = _(numericDictionary).chain().invertBy('a');
        result = _(numericDictionary).chain().invertBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().invertBy<{a: number;}>({a: 1});
    }
}

// _.keys
namespace TestKeys {
    let object: _.Dictionary<any> | null | undefined = anything;

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
    let object: _.Dictionary<any> | null | undefined = anything;

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
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject>| null | undefined = [] as any;
    let dictionary: _.Dictionary<AbcObject> | null | undefined = anything;

    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => "";
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => "";

    {
        let result: _.Dictionary<AbcObject>;

        result = _.mapKeys(array);
        result = _.mapKeys(array, listIterator);
        result = _.mapKeys(array, '');
        result = _.mapKeys(array, {});

        result = _.mapKeys(list);
        result = _.mapKeys(list, listIterator);
        result = _.mapKeys(list, '');
        result = _.mapKeys(list, {});

        result = _.mapKeys(dictionary);
        result = _.mapKeys(dictionary, dictionaryIterator);
        result = _.mapKeys(dictionary, '');
        result = _.mapKeys(dictionary, {});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(array).mapKeys();
        result = _(array).mapKeys(listIterator);
        result = _(array).mapKeys('');
        result = _(array).mapKeys({});

        result = _(list).mapKeys();
        result = _(list).mapKeys(listIterator);
        result = _(list).mapKeys('');
        result = _(list).mapKeys({});

        result = _(dictionary).mapKeys();
        result = _(dictionary).mapKeys(dictionaryIterator);
        result = _(dictionary).mapKeys('');
        result = _(dictionary).mapKeys({});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(array).chain().mapKeys();
        result = _(array).chain().mapKeys(listIterator);
        result = _(array).chain().mapKeys('');
        result = _(array).chain().mapKeys({});

        result = _(list).chain().mapKeys();
        result = _(list).chain().mapKeys(listIterator);
        result = _(list).chain().mapKeys('');
        result = _(list).chain().mapKeys({});

        result = _(dictionary).chain().mapKeys();
        result = _(dictionary).chain().mapKeys(dictionaryIterator);
        result = _(dictionary).chain().mapKeys('');
        result = _(dictionary).chain().mapKeys({});
    }
}

// _.merge
namespace TestMerge {
    type InitialValue = { a : number };
    type MergingValue = { b : string };

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    type ExpectedResult = { a: number, b: string };
    let result: ExpectedResult;

    // Test for basic merging

    result = _.merge(initialValue, mergingValue);

    result = _.merge(initialValue, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, {}, mergingValue);

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _.merge(initialValue, {}, {}, {}, {}, mergingValue);

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

    // Tests for basic chaining with merge

    result = _(initialValue).merge(mergingValue).value();

    result = _(initialValue).merge({}, mergingValue).value();

    result = _(initialValue).merge({}, {}, mergingValue).value();

    result = _(initialValue).merge({}, {}, {}, mergingValue).value();

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _(initialValue).merge({}, {}, {}, {}, mergingValue).value();

    // Test complex multiple combinations with chaining

    complicatedResult = _({ a: 1 }).merge({ b: "string" },
                                                                       { c: {} },
                                                                       { d: [1] },
                                                                       { e: true }).value();

    // Test for type overriding with chaining

    overriddenResult = _({ a: 1 }).merge({ a: "string" },
                                                                          { a: {} },
                                                                          { a: [1] },
                                                                          { a: true }).value();

    {
        let result: _.LoDashExplicitObjectWrapper<ExpectedResult>;
        // result = _(initialValue).chain().merge(mergingValue);
        // result = _(initialValue).chain().merge({}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, {}, mergingValue);
        // result = _(initialValue).chain().merge<ExpectedResult>({}, {}, {}, {}, mergingValue);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ComplicatedExpectedType>;

        //result = _({ a: 1 }).chain().merge({ b: "string" }, { c: {} }, { d: [1] }, { e: true });
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ExpectedTypeAfterOverriding>;

        //result = _({ a: 1 }).chain().merge({ a: "string" }, { a: {} }, { a: [1] }, { a: true });
    }
}

// _.mergeWith
namespace TestMergeWith {
    type InitialValue = { a : number };
    type MergingValue = { b : string };

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    type ExpectedResult = { a: number, b: string };
    let result: ExpectedResult;

    let customizer: (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => any = (value: any, srcValue: any, key: string, object: InitialValue, source: MergingValue) => 1;

    // Test for basic merging
    result = _.mergeWith(initialValue, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, {}, mergingValue, customizer);

    // Once we get to the varargs version, you have to specify the result explicitl
    result = _.mergeWith(initialValue, {}, {}, {}, {}, mergingValue, customizer);

    // Tests for basic chaining with mergeWith
    result = _(initialValue).mergeWith(mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, {}, mergingValue, customizer).value();
}

// _.omit
namespace TestOmit {
    let obj: AbcObject | null | undefined = anything;
    let dict: { [key: string]: AbcObject } = { };

    {
        let result: Partial<AbcObject>;

        result = _.omit(obj, 'a');
        result = _.omit(obj, 0, 'a');
        result = _.omit(obj, ['b', 1], 0, 'a');

        dict = _.omit(dict, 'a');
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<AbcObject>>;

        result = _(obj).omit('a');
        result = _(obj).omit(0, 'a');
        result = _(obj).omit(['b', 1], 0, 'a');

        dict = _(dict).omit('a').value();
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<AbcObject>>;

        result = _(obj).chain().omit('a');
        result = _(obj).chain().omit(0, 'a');
        result = _(obj).chain().omit(['b', 1], 0, 'a');

        dict = _(dict).chain().omit('a').value();
    }
}

// _.omitBy
namespace TestOmitBy {
    let obj: AbcObject | null | undefined = anything;
    let predicate = (element: any, key: string) => true;

    {
        let result: Partial<AbcObject>;

        result = _.omitBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<AbcObject>>;

        result = _(obj).omitBy<AbcObject>(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<AbcObject>>;

        result = _(obj).chain().omitBy<AbcObject>(predicate);
    }
}

// _.pick
namespace TestPick {
    const obj1: AbcObject | null | undefined = anything;
    const obj2: AbcObject = anything;
    const readonlyArray: ReadonlyArray<string> = ['a', 'b'];
    const literalsArray = ['a' as 'a', 'b' as 'b'];
    const roLiteralsArray: ReadonlyArray<'a' | 'b'> = literalsArray;

    _.pick(obj1, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, 0, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, ['b', 1], 0, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, readonlyArray); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj2, 'a', 'b'); // $ExpectType Pick<AbcObject, "a" | "b">
    _.pick(obj2, literalsArray); // $ExpectType Pick<AbcObject, "a" | "b">
    _.pick(obj2, roLiteralsArray); // $ExpectType Pick<AbcObject, "a" | "b">

    _(obj1).pick('a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(['b', 1], 0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(readonlyArray); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj2).pick('a', 'b'); // $ExpectType LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>
    _(obj2).pick(literalsArray); // $ExpectType LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>
    _(obj2).pick(roLiteralsArray); // $ExpectType LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>

    _.chain(obj1).pick('a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(['b', 1], 0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(readonlyArray); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj2).pick('a', 'b'); // $ExpectType LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>
    _.chain(obj2).pick(literalsArray); // $ExpectType LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>
    _.chain(obj2).pick(roLiteralsArray); // $ExpectType LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>
}

// _.pickBy
namespace TestPickBy {
    let obj: AbcObject | null | undefined = anything;
    let predicate = (element: any, key: string) => true;

    {
        let result: Partial<AbcObject>;

        result = _.pickBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<AbcObject>>;

        result = _(obj).pickBy<AbcObject>(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<AbcObject>>;

        result = _(obj).chain().pickBy<AbcObject>(predicate);
    }
}

// _.result
namespace TestResult {
    {
        let result: string;

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

        result = _('abc').chain().result<string>('0');
        result = _('abc').chain().result('0', '_');
        result = _('abc').chain().result('0', '_');
        result = _('abc').chain().result<string>(['0']);
        result = _('abc').chain().result(['0'], () => '_');
        result = _('abc').chain().result(['0'], () => '_');
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _([42]).chain().result<number>('0');
        result = _([42]).chain().result('0', -1);
        result = _([42]).chain().result('0', () => -1);
        result = _([42]).chain().result<number>(['0']);
        result = _([42]).chain().result(['0'], -1);
        result = _([42]).chain().result(['0'], () => -1);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _({a: true}).chain().result<boolean>('a');
        result = _({a: true}).chain().result('a', false);
        result = _({a: true}).chain().result('a', () => false);
        result = _({a: true}).chain().result<boolean>(['a']);
        result = _({a: true}).chain().result(['a'], false);
        result = _({a: true}).chain().result(['a'], () => false);
    }
}

// _.set
namespace TestSet {
    type SampleObject = {a: {}};
    type SampleResult = {a: {b: number[]}};

    let object: SampleObject = { a: {} };
    let value = 0;

    {
        let result: SampleResult;

        result = _.set<SampleResult>(object, 'a.b[1]', value);
        result = _.set<SampleResult>(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).set<SampleResult>('a.b[1]', value);
        result = _(object).set<SampleResult>(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().set<SampleResult>('a.b[1]', value);
        result = _(object).chain().set<SampleResult>(['a', 'b', 1], value);
    }
}

// _.setWith
namespace TestSetWith {
    type SampleResult = {a: {b: number[]}};

    let object: SampleResult = { a: { b: [] } };
    let value = 0;
    let customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        let result: SampleResult;

        result = _.setWith<SampleResult>(object, 'a.b[1]', value);
        result = _.setWith<SampleResult>(object, 'a.b[1]', value, customizer);
        result = _.setWith<SampleResult>(object, ['a', 'b', 1], value);
        result = _.setWith<SampleResult>(object, ['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).setWith<SampleResult>('a.b[1]', value);
        result = _(object).setWith<SampleResult>('a.b[1]', value, customizer);
        result = _(object).setWith<SampleResult>(['a', 'b', 1], value);
        result = _(object).setWith<SampleResult>(['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().setWith<SampleResult>('a.b[1]', value);
        result = _(object).chain().setWith<SampleResult>('a.b[1]', value, customizer);
        result = _(object).chain().setWith<SampleResult>(['a', 'b', 1], value);
        result = _(object).chain().setWith<SampleResult>(['a', 'b', 1], value, customizer);
    }
}

// _.toPairs
namespace TestToPairs {
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        result = _.toPairs(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).toPairs();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().toPairs();
    }
}

// _.toPairsIn
namespace TestToPairsIn {
    let object: _.Dictionary<string> = {};

    {
        let result: Array<[string, string]>;

        result = _.toPairsIn(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<[string, string]>;

        result = _(object).toPairsIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, string]>;

        result = _(object).chain().toPairsIn<string>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<[string, any]>;

        result = _(object).chain().toPairsIn();
    }
}

// _.transform
namespace TestTransform {
    let array: number[] = [];
    let dictionary: _.Dictionary<number> = {};

    {
        let iterator = (acc: AbcObject[], curr: number, index?: number, arr?: number[]) => {};
        let accumulator: AbcObject[] = [];
        let result: AbcObject[];

        result = _.transform(array);
        result = _.transform<number, AbcObject>(array, iterator);
        result = _.transform<number, AbcObject>(array, iterator, accumulator);

        result = _(array).transform().value();
        result = _(array).transform(iterator).value();
        result = _(array).transform(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<AbcObject>, curr: number, index?: number, arr?: number[]) => {};
        let accumulator: _.Dictionary<AbcObject> = {};
        let result: _.Dictionary<AbcObject>;

        result = _.transform<number, AbcObject>(array, iterator, accumulator);

        result = _(array).transform(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<AbcObject>, curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: _.Dictionary<AbcObject> = {};
        let result: _.Dictionary<AbcObject>;

        result = _.transform(dictionary);
        result = _.transform<number, AbcObject>(dictionary, iterator);
        result = _.transform<number, AbcObject>(dictionary, iterator, accumulator);

        result = _(dictionary).transform().value();
        result = _(dictionary).transform<number, AbcObject>(iterator).value();
        result = _(dictionary).transform<number, AbcObject>(iterator, accumulator).value();
    }

    {
        let iterator = (acc: AbcObject[], curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: AbcObject[] = [];
        let result: AbcObject[];

        result = _.transform<number, AbcObject>(dictionary, iterator, accumulator);

        result = _(dictionary).transform<number, AbcObject>(iterator, accumulator).value();
    }
}

// _.unset
namespace TestUnset {
    type SampleObject = {a: {b: string; c: boolean}};

    let object: SampleObject = { a: { b: "", c: true } };

    {
        let result: boolean;

        result = _.unset(object, 'a.b');
        result = _.unset(object, ['a', 'b']);
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;

        result = _(object).unset('a.b');
        result = _(object).unset(['a', 'b']);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().unset('a.b');
        result = _(object).chain().unset(['a', 'b']);
    }
}

// _.update
namespace TestUpdate {
    type SampleResult = {a: {b: number[]}};

    let object: SampleResult = { a: { b: [] } };
    let updater = (value: any) => 0;

    {
        let result: SampleResult;

        result = _.update(object, 'a.b[1]', updater);
        result = _.update(object, ['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).update('a.b[1]', updater);
        result = _(object).update(['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().update('a.b[1]', updater);
        result = _(object).chain().update(['a', 'b', 1], updater);
    }
}

// _.updateWith
namespace TestUpdateWith {
    type SampleResult = {a: {b: number[]}};

    let object: SampleResult = { a: { b: [] } };
    let updater = (value: any) => 0;
    let customizer = (value: any, key: string, object: SampleResult) => 0;

    {
        let result: SampleResult;

        result = _.updateWith<SampleResult>(object, 'a.b[1]', updater);
        result = _.updateWith<SampleResult>(object, 'a.b[1]', updater, customizer);
        result = _.updateWith<SampleResult>(object, ['a', 'b', 1], updater);
        result = _.updateWith<SampleResult>(object, ['a', 'b', 1], updater, customizer);

        result = _.updateWith<SampleResult>(object, 'a.b[1]', updater);
        result = _.updateWith<SampleResult>(object, 'a.b[1]', updater, customizer);
        result = _.updateWith<SampleResult>(object, ['a', 'b', 1], updater);
        result = _.updateWith<SampleResult>(object, ['a', 'b', 1], updater, customizer);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleResult>;

        result = _(object).updateWith<SampleResult>('a.b[1]', updater);
        result = _(object).updateWith<SampleResult>('a.b[1]', updater, customizer);
        result = _(object).updateWith<SampleResult>(['a', 'b', 1], updater);
        result = _(object).updateWith<SampleResult>(['a', 'b', 1], updater, customizer);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleResult>;

        result = _(object).chain().updateWith<SampleResult>('a.b[1]', updater);
        result = _(object).chain().updateWith<SampleResult>('a.b[1]', updater, customizer);
        result = _(object).chain().updateWith<SampleResult>(['a', 'b', 1], updater);
        result = _(object).chain().updateWith<SampleResult>(['a', 'b', 1], updater, customizer);
    }
}

// _.values
namespace TestValues {
    type SampleObject = {a: {}};

    {
        let result: any[];

        result = _.values(123);
        result = _.values(true);
        result = _.values(null);
    }

    {
        let result: string[];

        result = _.values('hi');
        result = _.values(['h', 'i']);
    }

    {
        let result: number[];

        result = _.values([1, 2]);
    }

    {
        let result: boolean[];

        result = _.values([true, false]);
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: SampleObject[];

        result = _.values(dict);
        result = _.values(numDict);
        result = _.values(list);
        result = _.values<SampleObject>(object);
    }

    // Implicit wrapper

    {
        let result: _.LoDashImplicitArrayWrapper<any>;

        result = _(123).values();
        result = _(true).values();
        result = _(null).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('hi').values();
        result = _(['h', 'i']).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _([1, 2]).values();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<boolean>;

        result = _([true, false]).values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(dict).values<SampleObject>();
        result = _(numDict).values<SampleObject>();
        result = _(list).values<SampleObject>();
        result = _(object).values<SampleObject>();
    }

    // Explicit wrapper

    {
        let result: _.LoDashExplicitArrayWrapper<any>;

        result = _(123).chain().values();
        result = _(true).chain().values();
        result = _(null).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('hi').chain().values<string>();
        result = _(['h', 'i']).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _([1, 2]).chain().values();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<boolean>;

        result = _([true, false]).chain().values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(dict).chain().values<SampleObject>();
        result = _(numDict).chain().values<SampleObject>();
        result = _(list).chain().values<SampleObject>();
        result = _(object).chain().values<SampleObject>();
    }
}

// _.valuesIn
namespace TestValuesIn {
    let object: _.Dictionary<AbcObject> = {};

    {
        let result: AbcObject[];

        result = _.valuesIn(object);
    }

    {
        let result: AbcObject[];

        // Without this type hint, this will fail to compile, as expected.
        result = _.valuesIn<AbcObject>({});
    }

    {
        let result: AbcObject[];

        result = _.values(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(object).valuesIn<AbcObject>();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(object).chain().valuesIn<AbcObject>();
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

// _.lowerCase
namespace TestLowerCase {
    {
        let result: string;

        result = _.lowerCase('Foo Bar');
        result = _('Foo Bar').lowerCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().lowerCase();
    }
}

// _.lowerFirst
namespace TestLowerFirst {
    {
        let result: string;

        result = _.lowerFirst('Foo Bar');
        result = _('Foo Bar').lowerFirst();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Foo Bar').chain().lowerFirst();
    }
}

// _.pad
namespace TestPad {
    {
        let result: string;

        result = _.pad('abc');
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

// _.padEnd
namespace TestPadEnd {
    {
        let result: string;

        result = _.padEnd('abc');
        result = _.padEnd('abc', 6);
        result = _.padEnd('abc', 6, '_-');

        result = _('abc').padEnd();
        result = _('abc').padEnd(6);
        result = _('abc').padEnd(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padEnd();
        result = _('abc').chain().padEnd(6);
        result = _('abc').chain().padEnd(6, '_-');
    }
}

// _.padStart
namespace TestPadStart {
    {
        let result: string;

        result = _.padStart('abc');
        result = _.padStart('abc', 6);
        result = _.padStart('abc', 6, '_-');

        result = _('abc').padStart();
        result = _('abc').padStart(6);
        result = _('abc').padStart(6, '_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('abc').chain().padStart();
        result = _('abc').chain().padStart(6);
        result = _('abc').chain().padStart(6, '_-');
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

// _.replace
namespace TestReplace {
    let replacer = (match: string, offset: number, string: string) => 'Barney';

    {
        let result: string;

        result = _.replace('Hi Fred', 'Fred', 'Barney');
        result = _.replace('Hi Fred', 'Fred', replacer);

        result = _.replace('Hi Fred', /fred/i, 'Barney');
        result = _.replace('Hi Fred', /fred/i, replacer);

        result = _.replace('Fred', 'Barney');
        result = _.replace('Fred', replacer);

        result = _.replace(/fred/i, 'Barney');
        result = _.replace(/fred/i, replacer);

        result = _('Hi Fred').replace('Fred', 'Barney');
        result = _('Hi Fred').replace('Fred', replacer);

        result = _('Hi Fred').replace(/fred/i, 'Barney');
        result = _('Hi Fred').replace(/fred/i, replacer);

        result = _('Fred').replace('Barney');
        result = _('Fred').replace(replacer);

        result = _(/fred/i).replace('Barney');
        result = _(/fred/i).replace(replacer);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('Hi Fred').chain().replace('Fred', 'Barney');
        result = _('Hi Fred').chain().replace('Fred', replacer);

        result = _('Hi Fred').chain().replace(/fred/i, 'Barney');
        result = _('Hi Fred').chain().replace(/fred/i, replacer);

        result = _('Fred').chain().replace('Barney');
        result = _('Fred').chain().replace(replacer);

        result = _(/fred/i).chain().replace('Barney');
        result = _(/fred/i).chain().replace(replacer);
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
        let result: string[];

        result = _.split('a-b-c');
        result = _.split('a-b-c', '-');
        result = _.split('a-b-c', '-', 2);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('a-b-c').split();
        result = _('a-b-c').split('-');
        result = _('a-b-c').split('-', 2);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('a-b-c').chain().split();
        result = _('a-b-c').chain().split('-');
        result = _('a-b-c').chain().split('-', 2);
    }

    // $ExpectType string[][]
    _.map(['abc', 'def'], _.split);
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

// _.toLower
namespace TestToLower {
    {
        let result: string;

        result = _.toLower('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').toLower();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().toLower();
    }
}

// _.toUpper
namespace TestToUpper {
    {
        let result: string;

        result = _.toUpper('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').toUpper();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().toUpper();
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

    // $ExpectType string[]
    _.map(['  foo  ', '  bar  '], _.trim);
}

// _.trimEnd
namespace TestTrimEnd {
    {
        let result: string;

        result = _.trimEnd();
        result = _.trimEnd('  abc  ');
        result = _.trimEnd('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimEnd();
        result = _('-_-abc-_-').trimEnd('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimEnd();
        result = _('-_-abc-_-').chain().trimEnd('_-');
    }
}

// _.trimStart
namespace TestTrimStart {
    {
        let result: string;

        result = _.trimStart();
        result = _.trimStart('  abc  ');
        result = _.trimStart('-_-abc-_-', '_-');

        result = _('-_-abc-_-').trimStart();
        result = _('-_-abc-_-').trimStart('_-');
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('-_-abc-_-').chain().trimStart();
        result = _('-_-abc-_-').chain().trimStart('_-');
    }
}

// _.truncate
namespace TestTruncate {
    {
        let result: string;

        result = _.truncate('hi-diddly-ho there, neighborino');
        result = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
        result = _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
        result = _.truncate('hi-diddly-ho there, neighborino', { 'omission': ' […]' });

        result = _('hi-diddly-ho there, neighborino').truncate();
        result = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').truncate({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').truncate({ 'omission': ' […]' });
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('hi-diddly-ho there, neighborino').chain().truncate();
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': ' ' });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'length': 24, 'separator': /,? +/ });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ 'omission': ' […]' });
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

// _.upperCase
namespace TestUpperCase {
    {
        let result: string;

        result = _.upperCase('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').upperCase();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().upperCase();
    }
}

// _.upperFirst
namespace TestUpperFirst {
    {
        let result: string;

        result = _.upperFirst('fred, barney, &amp; pebbles');
        result = _('fred, barney, &amp; pebbles').upperFirst();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('fred, barney, &amp; pebbles').chain().upperFirst();
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

    // $ExpectType string[][]
    _.map(['fred, barney', 'pebbles'], _.words);
}

/***********
 * Utility *
 ***********/

// _.attempt
namespace TestAttempt {
    let func: (...args: any[]) => {a: string} = (...args) => ({ a: "" });

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

// _.cond
namespace TestCond {
    let pairPred1: (val: string) => boolean = (val) => true;
    let pairPred2: (val: string) => boolean = (val) => false;
    let pairRes1: (val: string) => number = (val) => 1;
    let pairRes2: (val: string) => number = (val) => 2;

    {
        let result: number;

        result = _.cond([[pairPred1, pairRes1],[pairPred2, pairRes2]])('hello');
    }
}

// _.constant
namespace TestConstant {
    {
        let result: () => number;
        result = _.constant<number>(42);
    }

    {
        let result: () => string;
        result = _.constant<string>('a');
    }

    {
        let result: () => boolean;
        result = _.constant<boolean>(true);
    }

    {
        let result: () => string[];
        result = _.constant<string[]>(['a']);
    }

    {
        let result: () => {a: string};
        result = _.constant<{a: string}>({a: 'a'});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => number>;
        result = _(42).constant();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string>;
        result = _('a').constant();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => boolean>;
        result = _(true).constant();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => string[]>;
        result = _(['a']).constant();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<() => {a: string}>;
        result = _({a: 'a'}).constant();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => number>;
        result = _(42).chain().constant();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string>;
        result = _('a').chain().constant();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => boolean>;
        result = _(true).chain().constant();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => string[]>;
        result = _(['a']).chain().constant();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<() => {a: string}>;
        result = _({a: 'a'}).chain().constant();
    }
}

// _.defaultTo
namespace TestDefaultTo {
    {
        let result: number;
        result = _.defaultTo<number>(42, 42);
        result = _.defaultTo<number>(undefined, 42);
        result = _.defaultTo<number>(null, 42);
        result = _.defaultTo<number>(NaN, 42);
    }

    {
        let result: string;
        result = _.defaultTo<string>('a', 'default');
        result = _.defaultTo<string>(undefined, 'default');
        result = _.defaultTo<string>(null, 'default');
    }

    {
        let result: boolean;
        result = _.defaultTo<boolean>(true, true);
        result = _.defaultTo<boolean>(undefined, true);
        result = _.defaultTo<boolean>(null, true);
    }

    {
        let result: string[];
        result = _.defaultTo<string[]>(['a'], ['default']);
        result = _.defaultTo<string[]>(undefined, ['default']);
        result = _.defaultTo<string[]>(null, ['default']);
    }

    {
        let result: {a: string};
        result = _.defaultTo<{a: string}>({a: 'a'}, {a: 'a'});
        result = _.defaultTo<{a: string}>(undefined, {a: 'a'});
        result = _.defaultTo<{a: string}>(null, {a: 'a'});
    }

    {
        let result: number;
        result = _(42).defaultTo(42);
        result = _(undefined).defaultTo(42);
        result = _(null).defaultTo(42);
        result = _(NaN).defaultTo(42);
    }

    {
        let result: string;
        result = _('a').defaultTo('default');
        result = _(null).defaultTo('default');
    }

    {
        let result: boolean;
        result = _(true).defaultTo(true);
        result = _(undefined).defaultTo(true);
        result = _(null).defaultTo(true);
    }

    {
        let result: string[];
        result = _(['a']).defaultTo(['default']);
        result = _(undefined).defaultTo(['default']);
        result = _(null).defaultTo(['default']);
    }

    {
        let result: { a: string };
        result = _({ a: 'a' }).defaultTo({a : 'a'});
        result = _(undefined).defaultTo({a : 'a'});
        result = _(null).defaultTo({a : 'a'});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<number>;
        result = _(42).chain().defaultTo(42);
        result = _(undefined).chain().defaultTo(42);
        result = _(null).chain().defaultTo(42);
        result = _(NaN).chain().defaultTo(42);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<string>;
        result = _('a').chain().defaultTo('default');
        result = _(undefined).chain().defaultTo('default');
        result = _(null).chain().defaultTo('default');
    }

    {
        let result: _.LoDashExplicitObjectWrapper<boolean>;
        result = _(true).chain().defaultTo(true);
        result = _(undefined).chain().defaultTo(true);
        result = _(null).chain().defaultTo(true);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<string[]>;
        result = _(['a']).chain().defaultTo(['default']);
        result = _(undefined).chain().defaultTo(['default']);
        result = _(null).chain().defaultTo(['default']);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<{ a: string }>;
        result = _({ a: 'a' }).chain().defaultTo({a : 'a'});
        result = _(undefined).chain().defaultTo({a : 'a'});
        result = _(null).chain().defaultTo({a : 'a'});
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

    {
        let input: { a: number; } | null | undefined = anything;
        _.identity(input); // $ExpectType { a: number; } | null | undefined
        _.identity(); // $ExpectType undefined
    }
}

// _.iteratee
namespace TestIteratee {
    {
        _.iteratee((...args: any[]): AbcObject => anything); // $ExpectType (...args: any[]) => AbcObject
        _.iteratee((a: AbcObject): boolean => anything); // $ExpectType (a: AbcObject) => boolean
        _.iteratee((a: AbcObject | undefined): a is undefined => anything); // $ExpectType (a: AbcObject | undefined) => a is undefined
    }

    {
        let result: (object: any) => AbcObject;

        result = _.iteratee('');
    }

    {
        let result: (object: any) => boolean;

        result = _.iteratee({});
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => AbcObject>;

        let func: (...args: any[]) => AbcObject = anything;
        result = _(func).iteratee();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => AbcObject>;

        result = _('').iteratee();
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).iteratee();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => AbcObject>;

        let func: (...args: any[]) => AbcObject = anything;
        result = _(func).chain().iteratee();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => AbcObject>;

        result = _('').chain().iteratee();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => boolean>;

        result = _({}).chain().iteratee();
    }
}

// _.matches
namespace TestMatches {
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;
        result = _.matches<AbcObject>(source);
    }

    {
        let result: (value: AbcObject) => boolean;
        result = _.matches<AbcObject, AbcObject>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: AbcObject) => boolean>;
        result = _(source).matches<AbcObject>();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: AbcObject) => boolean>;
        result = _(source).chain().matches<AbcObject>();
    }
}

// _.matchesProperty
{
    let path: string | string[] = [];
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;

        result = _.matchesProperty<AbcObject>(path, source);
    }

    {
        let result: (value: AbcObject) => boolean;

        result = _.matchesProperty<AbcObject, AbcObject>(path, source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).matchesProperty<AbcObject>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: AbcObject) => boolean>;

        result = _(path).matchesProperty<AbcObject, AbcObject>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).chain().matchesProperty<AbcObject>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: AbcObject) => boolean>;

        result = _(path).chain().matchesProperty<AbcObject, AbcObject>(source);
    }
}

// _.method
namespace TestMethod {
    {
        let result: (object: any) => {a: string};

        result = _.method('a.0');
        result = _.method('a.0', anything, anything);
        result = _.method('a.0', anything, anything, anything);

        result = _.method(['a', 0]);
        result = _.method(['a', 0], anything);
        result = _.method(['a', 0], anything, anything);
        result = _.method(['a', 0], anything, anything, anything);
    }

    {
        let result: (object: {a: string}) => {b: string};

        result = _.method('a.0');
        result = _.method('a.0', anything, anything);
        result = _.method('a.0', anything, anything, anything);

        result = _.method(['a', 0]);
        result = _.method(['a', 0], anything);
        result = _.method(['a', 0], anything, anything);
        result = _.method(['a', 0], anything, anything, anything);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').method();
        result = _('a.0').method(anything);
        result = _('a.0').method(anything, anything);
        result = _('a.0').method(anything, anything, anything);

        result = _(['a', 0]).method();
        result = _(['a', 0]).method(anything);
        result = _(['a', 0]).method(anything, anything);
        result = _(['a', 0]).method(anything, anything, anything);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').method();
        result = _('a.0').method(anything);
        result = _('a.0').method(anything, anything);
        result = _('a.0').method(anything, anything, anything);

        result = _(['a', 0]).method();
        result = _(['a', 0]).method(anything);
        result = _(['a', 0]).method(anything, anything);
        result = _(['a', 0]).method(anything, anything, anything);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: any) => {a: string}>;

        result = _('a.0').chain().method();
        result = _('a.0').chain().method(anything);
        result = _('a.0').chain().method(anything, anything);
        result = _('a.0').chain().method(anything, anything, anything);

        result = _(['a', 0]).chain().method();
        result = _(['a', 0]).chain().method(anything);
        result = _(['a', 0]).chain().method(anything, anything);
        result = _(['a', 0]).chain().method(anything, anything, anything);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(object: {a: string}) => {b: string}>;

        result = _('a.0').chain().method();
        result = _('a.0').chain().method(anything);
        result = _('a.0').chain().method(anything, anything);
        result = _('a.0').chain().method(anything, anything, anything);

        result = _(['a', 0]).chain().method();
        result = _(['a', 0]).chain().method(anything);
        result = _(['a', 0]).chain().method(anything, anything);
        result = _(['a', 0]).chain().method(anything, anything, anything);
    }
}

// _.methodOf
namespace TestMethodOf {
    type SampleObject = { a: Array<{ b(): AbcObject }> };
    type ResultFn = (path: string | string[]) => AbcObject;

    let object: SampleObject = { a: [] };

    {
        let result: ResultFn;

        result = _.methodOf(object);
        result = _.methodOf(object, anything);
        result = _.methodOf(object, anything, anything);
        result = _.methodOf(object, anything, anything, anything);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<ResultFn>;

        result = _(object).methodOf();
        result = _(object).methodOf(anything);
        result = _(object).methodOf(anything, anything);
        result = _(object).methodOf(anything, anything, anything);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<ResultFn>;

        result = _(object).chain().methodOf();
        result = _(object).chain().methodOf(anything);
        result = _(object).chain().methodOf(anything, anything);
        result = _(object).chain().methodOf(anything, anything, anything);
    }
}

// _.mixin
namespace TestMixin {
    let source: _.Dictionary<(...args: any[]) => any> = {};
    let dest: AbcObject = anything;
    let options: {chain?: boolean} = {};

    {
        let result: _.LoDashStatic;

        result = _.mixin(source);
        result = _.mixin(source, options);
    }

    {
        let result: AbcObject;

        result = _.mixin(dest, source);
        result = _.mixin(dest, source, options);
    }

    {
        let result: _.LoDashImplicitWrapper<_.LoDashStatic>;

        result = _(source).mixin();
        result = _(source).mixin(options);
    }

    {
        let result: _.LoDashImplicitWrapper<AbcObject>;

        result = _(dest).mixin(source);
        result = _(dest).mixin(source, options);
    }

    {
        let result: _.LoDashExplicitWrapper<_.LoDashStatic>;

        result = _(source).chain().mixin();
        result = _(source).chain().mixin(options);
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject>;

        result = _(dest).chain().mixin(source);
        result = _(dest).chain().mixin(source, options);
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
        result = _(['']).noop(true, 'a', 1);
        result = _({}).noop(true, 'a', 1);
        result = _(anything).noop(true, 'a', 1);
    }

    {
        let result: _.LoDashExplicitWrapper<void>;

        result = _('a').chain().noop(true, 'a', 1);
        result = _([1]).chain().noop(true, 'a', 1);
        result = _(['']).chain().noop(true, 'a', 1);
        result = _({}).chain().noop(true, 'a', 1);
        result = _(anything).chain().noop(true, 'a', 1);
    }
}

namespace TestNthArg {
    type SampleFunc = (...args: any[]) => any;

    {
        let result: SampleFunc;

        result = _.nthArg();
        result = _.nthArg(1);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<SampleFunc>;

        result = _(1).nthArg();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<SampleFunc>;

        result = _(1).chain().nthArg();
    }
}

// _.over
namespace TestOver {
    {
        let result: (...args: any[]) => number[];

        result = _.over<number>(Math.max);
        result = _.over<number>(Math.max, Math.min);
        result = _.over<number>([Math.max]);
        result = _.over<number>([Math.max], [Math.min]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).over<number>();
        result = _(Math.max).over<number>(Math.min);
        result = _([Math.max]).over<number>();
        result = _([Math.max]).over<number>([Math.min]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).chain().over<number>();
        result = _(Math.max).chain().over<number>(Math.min);
        result = _([Math.max]).chain().over<number>();
        result = _([Math.max]).chain().over<number>([Math.min]);
    }
}

// _.overEvery
namespace TestOverEvery {
    {
        let result: (...args: number[]) => boolean;

        result = _.overEvery((number) => true);
        result = _.overEvery((number) => true, (number) => true);
        result = _.overEvery([(number) => true]);
        result = _.overEvery([(number) => true], [(number) => true]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: number[]) => boolean>;

        result = _(Math.max).overEvery();
        result = _(Math.max).overEvery((number) => true);
        result = _([Math.max]).overEvery();
        result = _([Math.max]).overEvery([(number) => true]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: number[]) => boolean>;

        result = _(Math.max).chain().overEvery();
        result = _(Math.max).chain().overEvery((number) => true);
        result = _([Math.max]).chain().overEvery();
        result = _([Math.max]).chain().overEvery([(number) => true]);
    }
}

// _.overSome
namespace TestOverSome {
    {
        let result: (...args: number[]) => boolean;

        result = _.overSome((n: number) => true);
        result = _.overSome((n: number) => true, (n: number) => true);
        result = _.overSome([(n: number) => true]);
        result = _.overSome([(n: number) => true], [(n: number) => true]);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(...args: number[]) => boolean>;

        result = _(Math.max).overSome();
        result = _(Math.max).overSome((n: number) => true);
        result = _([Math.max]).overSome();
        result = _([Math.max]).overSome([(n: number) => true]);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(...args: number[]) => boolean>;

        result = _(Math.max).chain().overSome();
        result = _(Math.max).chain().overSome((n: number) => true);
        result = _([Math.max]).chain().overSome();
        result = _([Math.max]).chain().overSome([(n: number) => true]);
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

    let object: SampleObject = { a: { b: [] } };

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

    // $ExpectType number[][]
    _.map([5, 5], _.range);
}

// _.rangeRight
namespace TestRangeRight {
    {
        let result: number[];

        result = _.rangeRight(10);
        result = _.rangeRight(1, 11);
        result = _.rangeRight(0, 30, 5);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<number>;

        result = _(10).rangeRight();
        result = _(1).rangeRight(11);
        result = _(0).rangeRight(30, 5);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(10).chain().rangeRight();
        result = _(1).chain().rangeRight(11);
        result = _(0).chain().rangeRight(30, 5);
    }

    // $ExpectType number[][]
    _.map([5, 5], _.rangeRight);
}

// _.runInContext
{
    let result: typeof _;
    result = _.runInContext();
    result = _.runInContext({});
    result = _({}).runInContext();
}

// _.stubArray
{
    {
        let result: any[];

        result = _.stubArray();
        result = _(anything).stubArray();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<any>;

        result = _('a').chain().stubArray();
        result = _([1]).chain().stubArray();
        result = _(['']).chain().stubArray();
        result = _({}).chain().stubArray();
        result = _(anything).chain().stubArray();
    }
}

// _.stubFalse
{
    {
        let result: boolean;

        result = _.stubFalse();
        result = _(anything).stubFalse();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubFalse();
        result = _([1]).chain().stubFalse();
        result = _(['']).chain().stubFalse();
        result = _({}).chain().stubFalse();
        result = _(anything).chain().stubFalse();
    }
}

// _.stubObject
{
    {
        let result: object;

        result = _.stubObject();
        result = _(anything).stubObject();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<object>;

        result = _('a').chain().stubObject();
        result = _([1]).chain().stubObject();
        result = _(['']).chain().stubObject();
        result = _({}).chain().stubObject();
        result = _(anything).chain().stubObject();
    }
}

// _.stubString
{
    {
        let result: string;

        result = _.stubString();
        result = _(anything).stubString();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('a').chain().stubString();
        result = _([1]).chain().stubString();
        result = _(['']).chain().stubString();
        result = _({}).chain().stubString();
        result = _(anything).chain().stubString();
    }
}

// _.stubTrue
{
    {
        let result: boolean;

        result = _.stubTrue();
        result = _(anything).stubTrue();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubTrue();
        result = _([1]).chain().stubTrue();
        result = _(['']).chain().stubTrue();
        result = _({}).chain().stubTrue();
        result = _(anything).chain().stubTrue();
    }
}

// _.times
namespace TestTimes {
    let iteratee: (num: number) => AbcObject = (num: number) => ({ a: 1, b: "", c: true });

    {
        let result: number[];

        result = _.times(42);
        result = _(42).times();
    }

    {
        let result: AbcObject[];

        result = _.times(42, iteratee);
        result = _(42).times(iteratee);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<number>;

        result = _(42).chain().times();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(42).chain().times(iteratee);
    }
}

// _.toPath
namespace TestToPath {
   {
       let result: string[];
       result = _.toPath(true);
       result = _.toPath(1);
       result = _.toPath('a');
       result = _.toPath(["a"]);
       result = _.toPath({});
   }

   {
       let result: _.LoDashImplicitWrapper<string[]>;

       result = _(true).toPath();
       result = _(1).toPath();
       result = _('a').toPath();
       result = _([1]).toPath();
       result = _(["a"]).toPath();
       result = _({}).toPath();
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

_.VERSION; // $ExpectType string
_.templateSettings; // $ExpectType TemplateSettings

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
