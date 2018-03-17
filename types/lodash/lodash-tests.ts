import fp = require("lodash/fp");
import _ = require("lodash");

declare const anything: any;

interface AbcObject {
    a: number;
    b: string;
    c: boolean;
}

// _.MapCache
{
    const testMapCache: _.MapCache = {
        delete(key: string) { return true; },
        get(key: string): any { return 1; },
        has(key: string) { return true; },
        set(key: string, value: any): _.Dictionary<any> { return {}; },
        clear() { },
    };
}

// _
{
    _(""); // $ExpectType LoDashImplicitWrapper<string>
    _(42); // $ExpectType LoDashImplicitWrapper<number>
    _(true); // $ExpectType LoDashImplicitWrapper<boolean>
    _([""]); // $ExpectType LoDashImplicitWrapper<string[]>
    _({ a: "" }); // $ExpectType LoDashImplicitWrapper<{ a: string; }>

    {
        const a: AbcObject[] = [];
        _(a); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    }

    {
        const a: AbcObject[] | null | undefined = anything;
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

        result = _.chunk(array);
        result = _.chunk(array, 42);

        result = _.chunk(list);
        result = _.chunk(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject[]>;

        result = _(array).chunk();
        result = _(array).chunk(42);

        result = _(list).chunk();
        result = _(list).chunk(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject[]>;

        result = _.chain(array).chunk();
        result = _(array).chain().chunk();
        result = _(array).chain().chunk(42);

        result = _(list).chain().chunk();
        result = _(list).chain().chunk(42);
    }

    fp.chunk(42, array); // $ExpectType AbcObject[][]
    fp.chunk(42)(array); // $ExpectType AbcObject[][]
    fp.chunk()(42)()(array); // $ExpectType AbcObject[][]
    fp.chunk(42, list); // $ExpectType AbcObject[][]
    fp.chunk(42)(list); // $ExpectType AbcObject[][]
}

// _.compact
namespace TestCompact {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let array2: Array<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;
    let list2: _.List<AbcObject | null | undefined | false | "" | 0> | null | undefined = anything;

    {
        let result: AbcObject[];

        result = _.compact(array);
        result = _.compact(list);
        result = _.compact(array2);
        result = _.compact(list2);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).compact();
        result = _(list).compact();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().compact();
        result = _(list).chain().compact();
    }

    fp.compact(array); // $ExpectTypeAbcObject[]
    fp.compact(list); // $ExpectTypeAbcObject[]
    fp.compact(array2); // $ExpectTypeAbcObject[]
    fp.compact(list2); // $ExpectTypeAbcObject[]
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

        result = _(list).difference();
        result = _(list).difference(listParam);
        result = _(list).difference(arrayParam, listParam);
        result = _(list).difference(listParam, arrayParam, listParam);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().difference();
        result = _(array).chain().difference(arrayParam);
        result = _(array).chain().difference(listParam, arrayParam);
        result = _(array).chain().difference(arrayParam, listParam, arrayParam);

        result = _(list).chain().difference();
        result = _(list).chain().difference(listParam);
        result = _(list).chain().difference(arrayParam, listParam);
        result = _(list).chain().difference(listParam, arrayParam, listParam);
    }

    {
        fp.difference(list, arrayParam); // $ExpectType AbcObject[]
        fp.difference(list)(arrayParam); // $ExpectType AbcObject[]
    }
}

// _.differenceBy
namespace TestDifferenceBy {
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let arrayParam: AbcObject[] = [];
    let listParam: _.List<AbcObject> = [];
    let iteratee: (value: AbcObject) => any = (value: AbcObject) => 1;

    {
        let result: AbcObject[];

        result = _.differenceBy(list);
        result = _.differenceBy(list, listParam);
        result = _.differenceBy(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam);

        result = _.differenceBy(list, listParam, iteratee);
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);

        result = _.differenceBy(list, listParam, 'a');
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, 'a');

        result = _.differenceBy(list, listParam, {a: 1});
        result = _.differenceBy(list, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _.differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(list, arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
    }

    {
        let result: _.LoDashImplicitWrapper<AbcObject[]>;

        result = _(list).differenceBy(listParam);
        result = _(list).differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam);

        result = _(list).differenceBy(listParam, iteratee);
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, iteratee);
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, iteratee);

        result = _(list).differenceBy(listParam, 'a');
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, 'a');
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, 'a');

        result = _(list).differenceBy(listParam, {a: 1});
        result = _(list).differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
        result = _(list).differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(arrayParam, listParam, arrayParam, listParam, arrayParam, listParam, {a: 1});
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject[]>;

        result = _(list).chain().differenceBy(arrayParam);
        result = _(list).chain().differenceBy(listParam, arrayParam);
        result = _(list).chain().differenceBy(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam);

        result = _(list).chain().differenceBy(arrayParam, iteratee);
        result = _(list).chain().differenceBy(listParam, arrayParam, iteratee);
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, iteratee);

        result = _(list).chain().differenceBy(arrayParam, 'a');
        result = _(list).chain().differenceBy(listParam, arrayParam, 'a');
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, 'a');

        result = _(list).chain().differenceBy(arrayParam, {a: 1});
        result = _(list).chain().differenceBy(listParam, arrayParam, {a: 1});
        result = _(list).chain().differenceBy(arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});
        result = _(list).chain().differenceBy<AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject, AbcObject>(listParam, arrayParam, listParam, arrayParam, listParam, arrayParam, {a: 1});

        fp.differenceBy(iteratee, list, arrayParam); // $ExpectType AbcObject[]
        fp.differenceBy<AbcObject, AbcObject>(iteratee)(list)(listParam); // $ExpectType AbcObject[]
        fp.differenceBy("a", list, arrayParam); // $ExpectType AbcObject[]
        fp.differenceBy({a: 1}, list, arrayParam); // $ExpectType AbcObject[]
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

        fp.differenceBy("name", [t1], [t2]); // $ExpectType T1[]
        fp.differenceBy((value: T1 | T2) => 0, [t1], [t2]); // $ExpectType T1[]
        fp.differenceBy((value: T1 | T2 | T3) => 0, [t1], [t2, t3]); // $ExpectType T1[]
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

    fp.differenceWith(comparator, array, arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator)(array, arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator)(array)(arrayParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator, array, listParam); // $ExpectType AbcObject[]
    fp.differenceWith(comparator, list, arrayParam); // $ExpectType AbcObject[]

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

        fp.differenceWith((a: T1, b: T2 | undefined) => true, [t1], [t2]); // $ExpectType T1[]
    }
}

// _.drop
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];
        result = _.drop(array);
        result = _.drop(array, 42);

        result = _.drop(list);
        result = _.drop(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).drop();
        result = _(array).drop(42);

        result = _(list).drop();
        result = _(list).drop(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().drop();
        result = _(array).chain().drop(42);

        result = _(list).chain().drop();
        result = _(list).chain().drop(42);
    }

    fp.drop(42, array); // $ExpectType AbcObject[]
    fp.drop(42)(array); // $ExpectType AbcObject[]
    fp.drop(42, list); // $ExpectType AbcObject[]
}

// _.dropRight
namespace TestDropRight {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.dropRight(array);
        result = _.dropRight(array, 42);

        result = _.dropRight(list);
        result = _.dropRight(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropRight();
        result = _(array).dropRight(42);

        result = _(list).dropRight();
        result = _(list).dropRight(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropRight();
        result = _(array).chain().dropRight(42);

        result = _(list).chain().dropRight();
        result = _(list).chain().dropRight(42);
    }

    fp.dropRight(42, array); // $ExpectType AbcObject[]
    fp.dropRight(42)(array); // $ExpectType AbcObject[]
    fp.dropRight(42, list); // $ExpectType AbcObject[]
}

// _.dropRightWhile
namespace TestDropRightWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.dropRightWhile(array);
        result = _.dropRightWhile(array, predicateFn);
        result = _.dropRightWhile(array, '');
        result = _.dropRightWhile(array, {a: 42});

        result = _.dropRightWhile(list);
        result = _.dropRightWhile(list, predicateFn);
        result = _.dropRightWhile(list, '');
        result = _.dropRightWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropRightWhile();
        result = _(array).dropRightWhile(predicateFn);
        result = _(array).dropRightWhile('');
        result = _(array).dropRightWhile({a: 42});

        result = _(list).dropRightWhile();
        result = _(list).dropRightWhile(predicateFn);
        result = _(list).dropRightWhile('');
        result = _(list).dropRightWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropRightWhile();
        result = _(array).chain().dropRightWhile(predicateFn);
        result = _(array).chain().dropRightWhile('');
        result = _(array).chain().dropRightWhile({a: 42});

        result = _(list).chain().dropRightWhile();
        result = _(list).chain().dropRightWhile(predicateFn);
        result = _(list).chain().dropRightWhile('');
        result = _(list).chain().dropRightWhile({a: 42});
    }

    const predicateFn2 = (value: AbcObject) => true;
    fp.dropRightWhile(predicateFn2, array); // $ExpectType AbcObject[]
    fp.dropRightWhile(predicateFn2)(array); // $ExpectType AbcObject[]
    fp.dropRightWhile("", array); // $ExpectType AbcObject[]
    fp.dropRightWhile({ a: 42 }, array); // $ExpectType AbcObject[]
    fp.dropRightWhile(predicateFn2, list); // $ExpectType AbcObject[]
    fp.dropRightWhile("", list); // $ExpectType AbcObject[]
    fp.dropRightWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.dropWhile
namespace TestDropWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.dropWhile(array);
        result = _.dropWhile(array, predicateFn);
        result = _.dropWhile(array, '');
        result = _.dropWhile(array, {a: 42});

        result = _.dropWhile(list);
        result = _.dropWhile(list, predicateFn);
        result = _.dropWhile(list, '');
        result = _.dropWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).dropWhile();
        result = _(array).dropWhile(predicateFn);
        result = _(array).dropWhile('');
        result = _(array).dropWhile({a: 42});

        result = _(list).dropWhile();
        result = _(list).dropWhile(predicateFn);
        result = _(list).dropWhile('');
        result = _(list).dropWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().dropWhile();
        result = _(array).chain().dropWhile(predicateFn);
        result = _(array).chain().dropWhile('');
        result = _(array).chain().dropWhile({a: 42});

        result = _(list).chain().dropWhile();
        result = _(list).chain().dropWhile(predicateFn);
        result = _(list).chain().dropWhile('');
        result = _(list).chain().dropWhile({a: 42});
    }

    const predicateFn2 = (value: AbcObject) => true;
    fp.dropWhile(predicateFn2, array); // $ExpectType AbcObject[]
    fp.dropWhile(predicateFn2)(array); // $ExpectType AbcObject[]
    fp.dropWhile("", array); // $ExpectType AbcObject[]
    fp.dropWhile({ a: 42 }, array); // $ExpectType AbcObject[]
    fp.dropWhile(predicateFn2, list); // $ExpectType AbcObject[]
    fp.dropWhile("", list); // $ExpectType AbcObject[]
    fp.dropWhile({ a: 42 }, list); // $ExpectType AbcObject[]
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

    fp.fill(0, 10, 42, array); // $ExpectType number[]
    fp.fill(0, 10)(42, array); // $ExpectType number[]
    fp.fill(0, 10)(42)(array); // $ExpectType number[]
    fp.fill(0)(10)(42)(array); // $ExpectType number[]
    fp.fill(0, 10, 42, list); // $ExpectType ArrayLike<number>
}

// _.findIndex
namespace TestFindIndex {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findIndex(array);
        result = _.findIndex(array, predicateFn);
        result = _.findIndex(array, '');
        result = _.findIndex(array, {a: 42});
        result = _.findIndex(array, predicateFn, fromIndex);

        result = _.findIndex(list);
        result = _.findIndex(list, predicateFn);
        result = _.findIndex(list, '');
        result = _.findIndex(list, {a: 42});
        result = _.findIndex(list, predicateFn, fromIndex);
        result = _.findIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findIndex();
        result = _(array).findIndex(predicateFn);
        result = _(array).findIndex('');
        result = _(array).findIndex<{a: number}>({a: 42});
        result = _(array).findIndex(predicateFn, fromIndex);

        result = _(list).findIndex();
        result = _(list).findIndex(predicateFn);
        result = _(list).findIndex('');
        result = _(list).findIndex<{a: number}>({a: 42});
        result = _(list).findIndex(predicateFn, fromIndex);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().findIndex();
        result = _(array).chain().findIndex(predicateFn);
        result = _(array).chain().findIndex('');
        result = _(array).chain().findIndex<{a: number}>({a: 42});
        result = _(array).chain().findIndex(predicateFn, fromIndex);

        result = _(list).chain().findIndex();
        result = _(list).chain().findIndex(predicateFn);
        result = _(list).chain().findIndex('');
        result = _(list).chain().findIndex<{a: number}>({a: 42});
        result = _(list).chain().findIndex(predicateFn, fromIndex);
    }

    const predicateFn2 = (value: AbcObject) => true;
    fp.findIndex(predicateFn2, array); // $ExpectType number
    fp.findIndex(predicateFn2)(array); // $ExpectType number
    fp.findIndex("", array); // $ExpectType number
    fp.findIndex({ a: 42 }, array); // $ExpectType number
    fp.findIndex(predicateFn2, list); // $ExpectType number
    fp.findIndex("", list); // $ExpectType number
    fp.findIndex({ a: 42 }, list); // $ExpectType number

    fp.findIndexFrom(predicateFn2, fromIndex, array); // $ExpectType number
    fp.findIndexFrom(predicateFn2)(fromIndex)(array); // $ExpectType number
    fp.findIndexFrom("", fromIndex, array); // $ExpectType number
    fp.findIndexFrom({ a: 42 }, fromIndex, array); // $ExpectType number
    fp.findIndexFrom(predicateFn2, fromIndex, list); // $ExpectType number
    fp.findIndexFrom("", fromIndex, list); // $ExpectType number
    fp.findIndexFrom({ a: 42 }, fromIndex, list); // $ExpectType number
}

// _.findLastIndex
namespace TestFindLastIndex {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findLastIndex(array);
        result = _.findLastIndex(array, predicateFn);
        result = _.findLastIndex(array, '');
        result = _.findLastIndex(array, {a: 42});
        result = _.findLastIndex(array, predicateFn, fromIndex);

        result = _.findLastIndex(list);
        result = _.findLastIndex(list, predicateFn);
        result = _.findLastIndex(list, '');
        result = _.findLastIndex(list, {a: 42});
        result = _.findLastIndex(list, predicateFn, fromIndex);
        result = _.findLastIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findLastIndex();
        result = _(array).findLastIndex(predicateFn);
        result = _(array).findLastIndex('');
        result = _(array).findLastIndex<{a: number}>({a: 42});
        result = _(array).findLastIndex(predicateFn, fromIndex);

        result = _(list).findLastIndex();
        result = _(list).findLastIndex(predicateFn);
        result = _(list).findLastIndex('');
        result = _(list).findLastIndex<{a: number}>({a: 42});
        result = _(list).findLastIndex(predicateFn, fromIndex);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().findLastIndex();
        result = _(array).chain().findLastIndex(predicateFn);
        result = _(array).chain().findLastIndex('');
        result = _(array).chain().findLastIndex<{a: number}>({a: 42});
        result = _(array).chain().findLastIndex(predicateFn, fromIndex);

        result = _(list).chain().findLastIndex();
        result = _(list).chain().findLastIndex(predicateFn);
        result = _(list).chain().findLastIndex('');
        result = _(list).chain().findLastIndex<{a: number}>({a: 42});
        result = _(list).chain().findLastIndex(predicateFn, fromIndex);
    }

    const predicateFn2 = (value: AbcObject) => true;
    fp.findLastIndex(predicateFn2, array); // $ExpectType number
    fp.findLastIndex(predicateFn2)(array); // $ExpectType number
    fp.findLastIndex("", array); // $ExpectType number
    fp.findLastIndex({ a: 42 }, array); // $ExpectType number
    fp.findLastIndex(predicateFn2, list); // $ExpectType number
    fp.findLastIndex("", list); // $ExpectType number
    fp.findLastIndex({ a: 42 }, list); // $ExpectType number

    fp.findLastIndexFrom(predicateFn2, fromIndex, array); // $ExpectType number
    fp.findLastIndexFrom(predicateFn2)(fromIndex)(array); // $ExpectType number
    fp.findLastIndexFrom("", fromIndex, array); // $ExpectType number
    fp.findLastIndexFrom({ a: 42 }, fromIndex, array); // $ExpectType number
    fp.findLastIndexFrom(predicateFn2, fromIndex, list); // $ExpectType number
    fp.findLastIndexFrom("", fromIndex, list); // $ExpectType number
    fp.findLastIndexFrom({ a: 42 }, fromIndex, list); // $ExpectType number
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

        result = _.first(array);
        result = _.first(list);

        result = _(array).first();
        result = _(list).first();
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

    fp.first("abc"); // $ExpectType string | undefined
    fp.first(array); // $ExpectType AbcObject | undefined
    fp.first(list); // $ExpectType AbcObject | undefined
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

    fp.flatten("abc"); // $ExpectType string[]
    fp.flatten(array); // $ExpectType number[]
    fp.flatten(list); // $ExpectType number[]
    fp.flatten([1, 2, 3]); // $ExpectType number[]
    fp.flatten([1, 2, 3]); // $ExpectType number[]
    fp.flatten([1, 2, 3]); // $ExpectType number[]
    fp.flatten([1, [2, 3]]); // $ExpectType number[]

    fp.flatten({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    fp.flatten({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]

    fp.unnest("abc"); // $ExpectType string[]
    fp.unnest(array); // $ExpectType number[]
    fp.unnest(list); // $ExpectType number[]
    fp.unnest([1, 2, 3]); // $ExpectType number[]
    fp.unnest([1, 2, 3]); // $ExpectType number[]
    fp.unnest([1, 2, 3]); // $ExpectType number[]
    fp.unnest([1, [2, 3]]); // $ExpectType number[]

    fp.unnest({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    fp.unnest({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]
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

    fp.flattenDeep("abc"); // $ExpectType string[]
    fp.flattenDeep<number>(array); // $ExpectType number[]
    fp.flattenDeep<number>(list); // $ExpectType number[]
    fp.flattenDeep<number>([1, 2, 3]); // $ExpectType number[]
    fp.flattenDeep<number>([1, [2, 3]]); // $ExpectType number[]
    fp.flattenDeep<number>([1, [2, [3]]]); // $ExpectType number[]
    fp.flattenDeep<number>([1, [2, [3]], [[4]]]); // $ExpectType number[]

    fp.flattenDeep<number>({0: 1, 1: 2, 2: 3, length: 3}); // $ExpectType number[]
    fp.flattenDeep<number>({0: 1, 1: [2, 3], length: 2}); // $ExpectType number[]
    fp.flattenDeep<number>({0: 1, 1: [2, [3]], length: 2}); // $ExpectType number[]
    fp.flattenDeep<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}); // $ExpectType number[]
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

    fp.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
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

        result = _.head(array);
        result = _.head(list);

        result = _(array).head();
        result = _(list).head();
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

    fp.head("abc"); // $ExpectType string | undefined
    fp.head(array); // $ExpectType AbcObject | undefined
    fp.head(list); // $ExpectType AbcObject | undefined
}

// _.indexOf
namespace TestIndexOf {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.indexOf(array, value);
        result = _.indexOf(array, value, true);
        result = _.indexOf(array, value, 42);

        result = _.indexOf(list, value);
        result = _.indexOf(list, value, true);
        result = _.indexOf(list, value, 42);

        result = _(array).indexOf(value);
        result = _(array).indexOf(value, true);
        result = _(array).indexOf(value, 42);

        result = _(list).indexOf(value);
        result = _(list).indexOf(value, true);
        result = _(list).indexOf(value, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().indexOf(value);
        result = _(array).chain().indexOf(value, true);
        result = _(array).chain().indexOf(value, 42);

        result = _(list).chain().indexOf(value);
        result = _(list).chain().indexOf(value, true);
        result = _(list).chain().indexOf(value, 42);
    }

    fp.indexOf(value, array); // $ExpectType number
    fp.indexOf(value)(array); // $ExpectType number
    fp.indexOf(value, list); // $ExpectType number
    fp.indexOfFrom(value)(42)(array); // $ExpectType number
    fp.indexOfFrom(value, 42, list); // $ExpectType number
}

// _.sortedIndexOf
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedIndexOf(array, value);
        result = _.sortedIndexOf(list, value);
        result = _(array).sortedIndexOf(value);
        result = _(list).sortedIndexOf(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sortedIndexOf(value);
        result = _(list).chain().sortedIndexOf(value);
    }

    fp.sortedIndexOf(value, array); // $ExpectType number
    fp.sortedIndexOf(value)(array); // $ExpectType number
    fp.sortedIndexOf(value, list); // $ExpectType number
}

//_.initial
namespace TestInitial {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.initial(array);
        result = _.initial(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).initial();
        result = _(list).initial();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().initial();
        result = _(list).chain().initial();
    }

    fp.initial(array); // $ExpectType AbcObject[]
    fp.initial(list); // $ExpectType AbcObject[]
}

// _.intersection
namespace TestIntersection {
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    {
        let result: AbcObject[];

        result = _.intersection(array, list);
        result = _.intersection(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).intersection(arrayParam);
        result = _(array).intersection(listParam, arrayParam);

        result = _(list).intersection(arrayParam);
        result = _(list).intersection(listParam, arrayParam);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().intersection(arrayParam);
        result = _(array).chain().intersection(listParam, arrayParam);

        result = _(list).chain().intersection(arrayParam);
        result = _(list).chain().intersection(listParam, arrayParam);
    }

    fp.intersection(array, array); // $ExpectType AbcObject[]
    fp.intersection(array)(array); // $ExpectType AbcObject[]
    fp.intersection(array, list); // $ExpectType AbcObject[]
    fp.intersection(array)(list); // $ExpectType AbcObject[]
    fp.intersection(list, array); // $ExpectType AbcObject[]
    fp.intersection(list)(array); // $ExpectType AbcObject[]
}

// _.intersectionBy
{
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    _.intersectionBy(array, list); // $ExpectType AbcObject[]
    _.intersectionBy(list, array, list); // $ExpectType AbcObject[]
    _.intersectionBy(array, list, 'a'); // $ExpectType AbcObject[]
    _.intersectionBy(array, list, { a: 42 }); // $ExpectType AbcObject[]
    _.intersectionBy(list, array, list, { a: 42 }); // $ExpectType AbcObject[]
    _.intersectionBy(array, list, ['a', 42]); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.intersectionBy(array, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });
    // $ExpectType AbcObject[]
    _.intersectionBy(list, array, list, (value) => {
        value; // $ExpectType AbcObject
        return 0;
    });

    _(array).intersectionBy(arrayParam); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionBy(listParam, arrayParam); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionBy(list, 'a'); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionBy(list, { a: 42 }); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).intersectionBy(array, list, { a: 42 }); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionBy(list, ['a', 42]); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return "";
    });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).intersectionBy(array, list, (value) => {
        value; // $ExpectType AbcObject
        return 1;
    });

    _.chain(array).intersectionBy(arrayParam); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionBy(listParam, arrayParam); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionBy(list, 'a'); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionBy(list, { a: 42 }); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).intersectionBy(array, list, { a: 42 }); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionBy(list, ['a', 42]); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionBy(list, (value) => {
        value; // $ExpectType AbcObject
        return false;
    });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).intersectionBy(array, list, (value) => {
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
    _.intersectionBy([t1], [t2], (value) => {
        value; // $ExpectType T1 | T2
        return undefined;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    _([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    _.chain([t1]).intersectionBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return {};
    });

    fp.intersectionBy("a", array, list); // $ExpectType AbcObject[]
    fp.intersectionBy<AbcObject, AbcObject>("a")(array, list); // $ExpectType AbcObject[]
    fp.intersectionBy<AbcObject, AbcObject>("a")(array)(list); // $ExpectType AbcObject[]
    fp.intersectionBy({ a: 42 }, array, list); // $ExpectType AbcObject[]
    fp.intersectionBy(["a", 42], array, list); // $ExpectType AbcObject[]
    fp.intersectionBy((value: AbcObject) => 0, array, list); // $ExpectType AbcObject[]
}

// _.intersectionWith
{
    let array: AbcObject[] = [] as any;
    let list: _.List<AbcObject> = [] as any;
    let arrayParam: AbcObject[] = [] as any;
    let listParam: _.List<AbcObject> = [] as any;

    _.intersectionWith(array, list); // $ExpectType AbcObject[]
    _.intersectionWith(list, array, list); // $ExpectType AbcObject[]
    // $ExpectType AbcObject[]
    _.intersectionWith(array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType AbcObject[]
    _.intersectionWith(list, array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    _(array).intersectionWith(arrayParam); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionWith(listParam, arrayParam); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).intersectionWith(array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    _.chain(array).intersectionWith(arrayParam); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionWith(listParam, arrayParam); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).intersectionWith(list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).intersectionWith(array, list, (a, b) => {
        a; // $ExpectType AbcObject
        b; // $ExpectType AbcObject
        return true;
    });

    fp.intersectionWith((a: AbcObject, b: AbcObject) => true, list, array); // $ExpectType AbcObject[]
    fp.intersectionWith((a: AbcObject, b: AbcObject) => true)(list, array); // $ExpectType AbcObject[]
    fp.intersectionWith((a: AbcObject, b: AbcObject) => true)(list)(array); // $ExpectType AbcObject[]

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
    _.intersectionWith([t1], [t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashImplicitWrapper<T1[]>
    _([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    _.chain([t1]).intersectionWith([t2], (a, b) => {
        a; // $ExpectType T1
        b; // $ExpectType T2
        return true;
    });

    fp.intersectionWith((a: T1, b: T2) => true)([t1])([t2]); // $ExpectType T1[]
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

    fp.join("_", "abc"); // $ExpectType string
    fp.join("_")("abc"); // $ExpectType string
    fp.join("_", array); // $ExpectType string
    fp.join("_", list); // $ExpectType string
    fp.join("_", nilArray); // $ExpectType string
    fp.join("_", nilList); // $ExpectType string
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

        result = _.last(array);
        result = _.last(list);

        result = _(array).last();
        result = _(list).last();
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

    fp.last("abc"); // $ExpectType string | undefined
    fp.last(array); // $ExpectType AbcObject | undefined
    fp.last(list); // $ExpectType AbcObject | undefined
}

// _.lastIndexOf
namespace TestLastIndexOf {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.lastIndexOf(array, value);
        result = _.lastIndexOf(array, value, true);
        result = _.lastIndexOf(array, value, 42);

        result = _.lastIndexOf(list, value);
        result = _.lastIndexOf(list, value, true);
        result = _.lastIndexOf(list, value, 42);

        result = _(array).lastIndexOf(value);
        result = _(array).lastIndexOf(value, true);
        result = _(array).lastIndexOf(value, 42);

        result = _(list).lastIndexOf(value);
        result = _(list).lastIndexOf(value, true);
        result = _(list).lastIndexOf(value, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().lastIndexOf(value);
        result = _(array).chain().lastIndexOf(value, true);
        result = _(array).chain().lastIndexOf(value, 42);

        result = _(list).chain().lastIndexOf(value);
        result = _(list).chain().lastIndexOf(value, true);
        result = _(list).chain().lastIndexOf(value, 42);
    }

    fp.lastIndexOf(value, array); // $ExpectType number
    fp.lastIndexOf(value)(array); // $ExpectType number
    fp.lastIndexOf(value, list); // $ExpectType number
    fp.lastIndexOfFrom(value, 42, array); // $ExpectType number
    fp.lastIndexOfFrom(value, 42)(array); // $ExpectType number
    fp.lastIndexOfFrom(value)(42)(array); // $ExpectType number
    fp.lastIndexOfFrom(value, 42, list); // $ExpectType number
}

// _.nth
namespace TestNth {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let value = 0;

    {
        let result: AbcObject | undefined;

        result = _.nth(array);

        result = _.nth(array, 42);

        result = _(array).nth();
        result = _(array).nth(42);

        result = _(list).nth();
        result = _(list).nth(42);
    }

    {
        let result: _.LoDashExplicitWrapper<AbcObject | undefined>;

        result = _(array).chain().nth();
        result = _(array).chain().nth(42);

        result = _(list).chain().nth();
        result = _(list).chain().nth(42);
    }

    fp.nth(42, array); // $ExpectType AbcObject | undefined
    fp.nth(42)(array); // $ExpectType AbcObject | undefined
}

// _.pull
namespace TestPull {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let value: AbcObject = { a: 1, b: "", c: true };

    {
        let result: AbcObject[];

        result = _.pull(array);
        result = _.pull(array, value);
        result = _.pull(array, value, value);
        result = _.pull(array, value, value, value);
    }

    {
        let result: _.List<AbcObject>;

        result = _.pull(list);
        result = _.pull(list, value);
        result = _.pull(list, value, value);
        result = _.pull(list, value, value, value);
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

        result = _(list).pull();
        result = _(list).pull(value);
        result = _(list).pull(value, value);
        result = _(list).pull(value, value, value);
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

        result = _(list).chain().pull();
        result = _(list).chain().pull(value);
        result = _(list).chain().pull(value, value);
        result = _(list).chain().pull(value, value, value);
    }

    fp.pull(value, array); // $ExpectType AbcObject[]
    fp.pull(value, list); // $ExpectType ArrayLike<AbcObject>
    fp.pull(value)(list); // $ExpectType ArrayLike<AbcObject>
}

// _.pullAt
namespace TestPullAt {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];

    {
        let result: AbcObject[];

        result = _.pullAt(array);
        result = _.pullAt(array, 1);
        result = _.pullAt(array, [2, 3], 1);
        result = _.pullAt(array, 4, [2, 3], 1);
    }

    {
        let result: ArrayLike<AbcObject>;

        result = _.pullAt(list);
        result = _.pullAt(list, 1);
        result = _.pullAt(list, [2, 3], 1);
        result = _.pullAt(list, 4, [2, 3], 1);
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

    fp.pullAt(1, array); // $ExpectType AbcObject[]
    fp.pullAt([2, 3], array); // $ExpectType AbcObject[]
    fp.pullAt(1, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAt([2, 3], list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAt(1)(list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAt([2, 3])(list); // $ExpectType ArrayLike<AbcObject>
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

    fp.pullAll(values, array); // $ExpectType AbcObject[]
    fp.pullAll(values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAll(values)(list); // $ExpectType ArrayLike<AbcObject>
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

    fp.pullAllBy("a", values, array); // $ExpectType AbcObject[]
    fp.pullAllBy({ a: 42 }, values, array); // $ExpectType AbcObject[]
    fp.pullAllBy(["a", 42], values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true, values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true, values)(array); // $ExpectType AbcObject[]
    fp.pullAllBy((value: AbcObject) => true)(values)(array); // $ExpectType AbcObject[]
    fp.pullAllBy("a", values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy({ a: 42 }, values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy(["a", 42], values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy((value: AbcObject) => true, values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy((value: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy((value: AbcObject) => true, values)(list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllBy((value: AbcObject) => true)(values)(list); // $ExpectType ArrayLike<AbcObject>

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
    // $ExpectType LoDashImplicitWrapper<T1[]>
    _([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });
    // $ExpectType LoDashExplicitWrapper<T1[]>
    _.chain([t1]).pullAllBy([t2], (value) => {
        value; // $ExpectType T1 | T2
        return "";
    });

    fp.pullAllBy<T1, T2>((value: T1 | T2) => value.a, [t2], [t1]); // $ExpectType T1[]
    fp.pullAllBy((value: T1 | T2) => value.a)([t2])([t1]); // $ExpectType (T1 | T2)[]
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

    fp.pullAllWith((a, b) => true, values, array); // $ExpectType AbcObject[]
    fp.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, array); // $ExpectType AbcObject[]
    fp.pullAllWith((a, b) => true, values, list); // $ExpectType ArrayLike<AbcObject>
    fp.pullAllWith((a: AbcObject, b: AbcObject) => true)(values, list); // $ExpectType ArrayLike<AbcObject>

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

    fp.pullAllWith((a, b) => a.a === b.a, [t2], [t1]); // $ExpectType T1[]
    fp.pullAllWith((a: T1, b: T2) => a.a === b.a)([t2], [t1]); // $ExpectType T1[]
}

// _.remove
namespace TestRemove {
    let array: AbcObject[] = [];
    let list: _.List<AbcObject> = [];
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.remove(array);
        result = _.remove(array, predicateFn);
        result = _.remove(array, '');
        result = _.remove(array, {a: 42});

        result = _.remove(list);
        result = _.remove(list, predicateFn);
        result = _.remove(list, '');
        result = _.remove(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).remove();
        result = _(array).remove(predicateFn);
        result = _(array).remove('');
        result = _(array).remove({a: 42});

        result = _(list).remove();
        result = _(list).remove(predicateFn);
        result = _(list).remove('');
        result = _(list).remove({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().remove();
        result = _(array).chain().remove(predicateFn);
        result = _(array).chain().remove('');
        result = _(array).chain().remove({a: 42});

        result = _(list).chain().remove();
        result = _(list).chain().remove(predicateFn);
        result = _(list).chain().remove('');
        result = _(list).chain().remove({a: 42});
    }

    let predicateFn2 = (value: AbcObject) => true;
    fp.remove(predicateFn2, list); // $ExpectType AbcObject[]
    fp.remove(predicateFn2)(list); // $ExpectType AbcObject[]
    fp.remove("", list); // $ExpectType AbcObject[]
    fp.remove({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.tail
namespace TestTail {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.tail(array);
        result = _.tail(list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).tail();
        result = _(list).tail();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().tail();
        result = _(list).chain().tail();
    }

    fp.tail(list); // $ExpectType AbcObject[]
}

// _.slice
namespace TestSlice {
    let array: AbcObject[] | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.slice(array);
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

    fp.slice(0, 10, array); // $ExpectType AbcObject[]
    fp.slice(0)(10, array); // $ExpectType AbcObject[]
    fp.slice(0)(10)(array); // $ExpectType AbcObject[]
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

    fp.sortedIndex("a", "abc"); // $ExpectType number
    fp.sortedIndex(value, list); // $ExpectType number
    fp.sortedIndex(value)(list); // $ExpectType number
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

        fp.sortedIndexBy(stringIterator, "a", "abc"); // $ExpectType number
        fp.sortedIndexBy(listIterator, value, list); // $ExpectType number
        fp.sortedIndexBy(listIterator)(value)(list); // $ExpectType number
        fp.sortedIndexBy("a", value, list); // $ExpectType number
        fp.sortedIndexBy({ a: 42 }, value, list); // $ExpectType number
        fp.sortedIndexBy(["a", 42], value, list); // $ExpectType number
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

    fp.sortedLastIndex("a", "abc"); // $ExpectType number
    fp.sortedLastIndex(value, list); // $ExpectType number
    fp.sortedLastIndex(value)(list); // $ExpectType number
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

    fp.sortedLastIndexBy(stringIterator, "a", "abc"); // $ExpectType number
    fp.sortedLastIndexBy(listIterator, value, list); // $ExpectType number
    fp.sortedLastIndexBy(listIterator)(value)(list); // $ExpectType number
    fp.sortedLastIndexBy("a", value, list); // $ExpectType number
    fp.sortedLastIndexBy({ a: 42 }, value, list); // $ExpectType number
    fp.sortedLastIndexBy(["a", 42], value, list); // $ExpectType number
}

// _.take
namespace TestTake {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.take(array);
        result = _.take(array, 42);

        result = _.take(list);
        result = _.take(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).take();
        result = _(array).take(42);

        result = _(list).take();
        result = _(list).take(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().take();
        result = _(array).chain().take(42);

        result = _(list).chain().take();
        result = _(list).chain().take(42);
    }

    fp.take(42, list); // $ExpectType AbcObject[]
    fp.take(42)(list); // $ExpectType AbcObject[]
}

// _.takeRight
namespace TestTakeRight {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        result = _.takeRight(array);
        result = _.takeRight(array, 42);

        result = _.takeRight(list);
        result = _.takeRight(list, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeRight();
        result = _(array).takeRight(42);

        result = _(list).takeRight();
        result = _(list).takeRight(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeRight();
        result = _(array).chain().takeRight(42);

        result = _(list).chain().takeRight();
        result = _(list).chain().takeRight(42);
    }

    fp.takeRight(42, list); // $ExpectType AbcObject[]
    fp.takeRight(42)(list); // $ExpectType AbcObject[]
}

// _.takeRightWhile
namespace TestTakeRightWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.takeRightWhile(array);
        result = _.takeRightWhile(array, predicateFn);
        result = _.takeRightWhile(array, '');
        result = _.takeRightWhile(array, {a: 42});

        result = _.takeRightWhile(list);
        result = _.takeRightWhile(list, predicateFn);
        result = _.takeRightWhile(list, '');
        result = _.takeRightWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeRightWhile();
        result = _(array).takeRightWhile(predicateFn);
        result = _(array).takeRightWhile('');
        result = _(array).takeRightWhile({a: 42});

        result = _(list).takeRightWhile();
        result = _(list).takeRightWhile(predicateFn);
        result = _(list).takeRightWhile('');
        result = _(list).takeRightWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeRightWhile();
        result = _(array).chain().takeRightWhile(predicateFn);
        result = _(array).chain().takeRightWhile('');
        result = _(array).chain().takeRightWhile({a: 42});

        result = _(list).chain().takeRightWhile();
        result = _(list).chain().takeRightWhile(predicateFn);
        result = _(list).chain().takeRightWhile('');
        result = _(list).chain().takeRightWhile({a: 42});
    }

    let predicateFn2 = (value: AbcObject) => true;
    fp.takeRightWhile(predicateFn2, list); // $ExpectType AbcObject[]
    fp.takeRightWhile(predicateFn2)(list); // $ExpectType AbcObject[]
    fp.takeRightWhile("a", list); // $ExpectType AbcObject[]
    fp.takeRightWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.takeWhile
namespace TestTakeWhile {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;
    let predicateFn = (value: AbcObject, index: number, collection: _.List<AbcObject>) => true;

    {
        let result: AbcObject[];

        result = _.takeWhile(array);
        result = _.takeWhile(array, predicateFn);
        result = _.takeWhile(array, '');
        result = _.takeWhile(array, {a: 42});

        result = _.takeWhile(list);
        result = _.takeWhile(list, predicateFn);
        result = _.takeWhile(list, '');
        result = _.takeWhile(list, {a: 42});
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).takeWhile();
        result = _(array).takeWhile(predicateFn);
        result = _(array).takeWhile('');
        result = _(array).takeWhile({a: 42});

        result = _(list).takeWhile();
        result = _(list).takeWhile(predicateFn);
        result = _(list).takeWhile('');
        result = _(list).takeWhile({a: 42});
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().takeWhile();
        result = _(array).chain().takeWhile(predicateFn);
        result = _(array).chain().takeWhile('');
        result = _(array).chain().takeWhile({a: 42});

        result = _(list).chain().takeWhile();
        result = _(list).chain().takeWhile(predicateFn);
        result = _(list).chain().takeWhile('');
        result = _(list).chain().takeWhile({a: 42});
    }

    let predicateFn2 = (value: AbcObject) => true;
    fp.takeWhile(predicateFn2, list); // $ExpectType AbcObject[]
    fp.takeWhile(predicateFn2)(list); // $ExpectType AbcObject[]
    fp.takeWhile("a", list); // $ExpectType AbcObject[]
    fp.takeWhile({ a: 42 }, list); // $ExpectType AbcObject[]
}

// _.union
namespace TestUnion {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        // $ExpectType {}[]
        _.union();

        result = _.union(array);
        result = _.union(array, list);
        result = _.union(array, list, array);

        result = _.union(list);
        result = _.union(list, array);
        result = _.union(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).union();
        result = _(array).union(list);
        result = _(array).union(list, array);

        result = _(array).union();
        result = _(array).union(list);
        result = _(array).union(list, array);

        result = _(list).union();
        result = _(list).union(array);
        result = _(list).union(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().union();
        result = _(array).chain().union(list);
        result = _(array).chain().union(list, array);

        result = _(array).chain().union();
        result = _(array).chain().union(list);
        result = _(array).chain().union(list, array);

        result = _(list).chain().union();
        result = _(list).chain().union(array);
        result = _(list).chain().union(array, list);
    }

    fp.union(array, list); // $ExpectType AbcObject[]
    fp.union(array)(list); // $ExpectType AbcObject[]
}

// _.unionBy
{
    const array: AbcObject[] | null | undefined = [] as any;
    const list: _.List<AbcObject> | null | undefined = [] as any;
    const iteratee: (value: AbcObject) => any = (value: AbcObject) => 1;

    _.unionBy(list, array); // $ExpectType AbcObject[]
    _.unionBy(list, array, list, array, list, array); // $ExpectType AbcObject[]
    _.unionBy(list, array, iteratee); // $ExpectType AbcObject[]
    _.unionBy(list, array, list, array, list, array, iteratee); // $ExpectType AbcObject[]
    _.unionBy(list, array, 'a'); // $ExpectType AbcObject[]
    // <AbcObject> param needed for TS 2.3
    _.unionBy<AbcObject>(list, array, list, array, list, array, 'a'); // $ExpectType AbcObject[]
    _.unionBy(list, array, {a: 1}); // $ExpectType AbcObject[]
    _.unionBy(list, list, array, list, array, list, {a: 1}); // $ExpectType AbcObject[]

    _(list).unionBy(array); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(array, list, array, list, array); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(array, iteratee); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(array, list, array, list, array, iteratee); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(array, 'a'); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    // <AbcObject> param needed for TS 2.3
    _(list).unionBy<AbcObject>(array, list, array, list, array, 'a'); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(array, {a: 1}); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(list).unionBy(list, array, list, array, list, {a: 1}); // $ExpectType LoDashImplicitWrapper<AbcObject[]>

    _.chain(list).unionBy(array); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(array).unionBy(array, list, array, list, array); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).unionBy(array, iteratee); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).unionBy(array, list, array, list, array, iteratee); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).unionBy(array, 'a'); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    // <AbcObject> param needed for TS 2.3
    _.chain(list).unionBy<AbcObject>(array, list, array, list, array, 'a'); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).unionBy(array, {a: 1}); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(list).unionBy(list, array, list, array, list, {a: 1}); // $ExpectType LoDashExplicitWrapper<AbcObject[]>

    fp.unionBy(iteratee, array, list); // $ExpectType AbcObject[]
    fp.unionBy(iteratee)(array)(list); // $ExpectType AbcObject[]
    fp.unionBy("a", array, list); // $ExpectType AbcObject[]
    fp.unionBy({ a: 1 }, array, list); // $ExpectType AbcObject[]
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

    fp.uniq("abc"); // $ExpectType string[]
    fp.uniq(list); // $ExpectType SampleObject[]
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

    const stringIterator2 = (value: string) => "";
    const listIterator2 = (value: SampleObject) => 0;
    fp.uniqBy(stringIterator2, "abc"); // $ExpectType string[]
    fp.uniqBy(listIterator2, list); // $ExpectType SampleObject[]
    fp.uniqBy(listIterator2)(list); // $ExpectType SampleObject[]
    fp.uniqBy("a", list); // $ExpectType SampleObject[]
    fp.uniqBy({ a: 42 }, list); // $ExpectType SampleObject[]
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

    fp.sortedUniq("abc"); // $ExpectType string[]
    fp.sortedUniq(list); // $ExpectType SampleObject[]
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

    const stringIterator2 = (value: string) => "";
    const listIterator2 = (value: SampleObject) => 0;
    fp.sortedUniqBy(stringIterator2, "abc"); // $ExpectType string[]
    fp.sortedUniqBy(listIterator2, list); // $ExpectType SampleObject[]
    fp.sortedUniqBy(listIterator2)(list); // $ExpectType SampleObject[]
    fp.sortedUniqBy("a", list); // $ExpectType SampleObject[]
    fp.sortedUniqBy({ a: 42 }, list); // $ExpectType SampleObject[]
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

    fp.unzip(list); // $ExpectType (string | number | boolean)[][]
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

    fp.unzipWith((value1: number, value2: number) => "", testUnzipWithList); // $ExpectType string[]
    fp.unzipWith((...values: number[]) => "", testUnzipWithList); // $ExpectType string[]
    fp.unzipWith((...values: number[]) => "")(testUnzipWithList); // $ExpectType string[]
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

    fp.without([1, 2], list);
    fp.without([1, 2])(list);
}

// _.xor
namespace TestXor {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        let result: AbcObject[];

        // $ExpectType {}[]
        _.xor();

        result = _.xor(array);
        result = _.xor(array, list);
        result = _.xor(array, list, array);

        result = _.xor(list);
        result = _.xor(list, array);
        result = _.xor(list, array, list);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).xor();
        result = _(array).xor(list);
        result = _(array).xor(list, array);

        result = _(list).xor();
        result = _(list).xor(array);
        result = _(list).xor(array, list);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().xor();
        result = _(array).chain().xor(list);
        result = _(array).chain().xor(list, array);

        result = _(list).chain().xor();
        result = _(list).chain().xor(array);
        result = _(list).chain().xor(array, list);
    }

    fp.xor(array, list);
    fp.xor(array)(list);
}

// _.zip
{
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject> | null | undefined = [] as any;

    {
        // $ExpectType (AbcObject | undefined)[][]
        _.zip(array);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip(array, list);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip(array, list, array);

        // $ExpectType (AbcObject | undefined)[][]
        _.zip(list);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip(list, array);
        // $ExpectType (AbcObject | undefined)[][]
        _.zip(list, array, list);

        // $ExpectType (AbcObject | undefined)[][]
        _.zip(list, array, list, array, list, array);
    }

    {
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(array).zip(list);
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(array).zip(list, array);

        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(list).zip(array);
        // $ExpectType LoDashImplicitWrapper<(AbcObject | undefined)[][]>
        _(list).zip(array, list);
    }

    {
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(array).chain().zip(list);
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(array).chain().zip(list, array);

        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(list).chain().zip(array);
        // $ExpectType LoDashExplicitWrapper<(AbcObject | undefined)[][]>
        _(list).chain().zip(array, list);
    }

    {
        _.zip([1, 2], [3, 4]); // $ExpectType [number | undefined, number | undefined][]
        _.zip([1, 2], ["a", "b"]); // $ExpectType [number | undefined, string | undefined][]
        _.zip([1, 2], ["a", "b"], [true, false]); // $ExpectType [number | undefined, string | undefined, boolean | undefined][]
    }

    const array2: AbcObject[] = anything;
    const list2: ArrayLike<AbcObject> = anything;
    fp.zip(array2, list2); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    fp.zip(array2)(list2); // $ExpectType [AbcObject | undefined, AbcObject | undefined][]
    fp.zipAll<AbcObject>([array2, list2, array2]); // $ExpectType (AbcObject | undefined)[][]
    fp.zip(["a", "b"], [1, 2]); // $ExpectType [string | undefined, number | undefined][]
    fp.zipAll<number | string | boolean>([[1, 2], ["a", "b"], [true, false]]); // $ExpectType (string | number | boolean | undefined)[][]
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

    fp.zipObject(["a", "b"], [1, 2]); // $ExpectType Dictionary<number>
    fp.zipObject(["a", "b"])([1, 2]); // $ExpectType Dictionary<number>
    fp.zipObject(listOfKeys)(listOfValues); // $ExpectType Dictionary<number>

    fp.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]); // $ExpectType object
    fp.zipObjectDeep(["a.b[0].c", "a.b[1].d"])([1, 2]); // $ExpectType object
    fp.zipObjectDeep(listOfKeys, listOfValues); // $ExpectType object
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

    fp.zipWith((value1, value2) => "a", [1, 2], [1, 2]); // $ExpectType string[]
    fp.zipWith((value1: number, value2: number) => "a")([1, 2])([1, 2]); // $ExpectType string[]
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

    const s: string = anything;
    fp.tap((value: string) => {}, s); // $ExpectType string
    fp.tap((value: string) => {})(s); // $ExpectType string
    fp.tap((value: string[]) => {}, [s]); // $ExpectType string[]
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

    fp.thru((x: number) => x.toString(), 1); // $ExpectType string
    fp.thru((x: number) => x.toString())(1); // $ExpectType string
    fp.thru((x: number[]) => x.toString())([1]); // $ExpectType string
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
    const numberROA: number[] = [0]; // TODO: Should be ReadonlyArray, but see comment on type Many<T>

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

    const abcObject: AbcObject = { a: 1, b: 'foo', c: true };
    const objectROA: AbcObject[] = [{ a: 1, b: 'foo', c: true }]; // TODO: Should be ReadonlyArray, but see comment on type Many<T>

    _.concat(abcObject, abcObject); // $ExpectType AbcObject[]
    _.concat(abcObject, [abcObject], objectROA); // $ExpectType AbcObject[]

    _(abcObject).concat(abcObject); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(abcObject).concat([abcObject], objectROA); // $ExpectType LoDashImplicitWrapper<AbcObject[]>

    _.chain(abcObject).concat(abcObject); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _.chain(abcObject).concat([abcObject], objectROA); // $ExpectType LoDashExplicitWrapper<AbcObject[]>
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
    let numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
    let abcObject: AbcObject | null | undefined = anything;

    {
        let result: AbcObject[];

        result = _.at(array, 0, '1', [2], ['3'], [4, '5']);
        result = _.at(list, 0, '1', [2], ['3'], [4, '5']);
        result = _.at(dictionary, 0, '1', [2], ['3'], [4, '5']);
        result = _.at(numericDictionary, 0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: Array<AbcObject[keyof AbcObject]>;

        result = _.at(abcObject, 'a', ['b'], ['a', 'b']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).at(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).at(0, '1', [2], ['3'], [4, '5']);
        result = _(numericDictionary).at(0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject[keyof AbcObject]>;

        result = _(abcObject).at('a', ['b'], ['a', 'b']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(numericDictionary).chain().at(0, '1', [2], ['3'], [4, '5']);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject[keyof AbcObject]>;

        result = _(abcObject).chain().at('a', ['b'], ['a', 'b']);
    }

    const obj: AbcObject | null | undefined = anything;
    fp.at(0, list); // $ExpectType AbcObject[]
    fp.at(0)(list); // $ExpectType AbcObject[]
    fp.at([0, "1"], list); // $ExpectType AbcObject[]
    fp.at("a", obj); // $ExpectType (string | number | boolean)[]
    fp.at<AbcObject>(["a" as "a", "b" as "b"])(obj); // $ExpectType (string | number | boolean)[]
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
    let numericDictionaryIterator: (value: AbcObject, key: string, collection: _.NumericDictionary<AbcObject>) => any = (value: AbcObject, key: string, collection: _.NumericDictionary<AbcObject>) => 1;

    _.countBy(''); // $ExpectType Dictionary<number>
    _.countBy('', stringIterator); // $ExpectType Dictionary<number>

    _.countBy(array); // $ExpectType Dictionary<number>
    _.countBy(array, listIterator); // $ExpectType Dictionary<number>
    _.countBy(array, ''); // $ExpectType Dictionary<number>
    _.countBy(array, {a: 42}); // $ExpectType Dictionary<number>

    _.countBy(list); // $ExpectType Dictionary<number>
    _.countBy(list, listIterator); // $ExpectType Dictionary<number>
    _.countBy(list, ''); // $ExpectType Dictionary<number>
    _.countBy(list, {a: 42}); // $ExpectType Dictionary<number>

    _.countBy(dictionary); // $ExpectType Dictionary<number>
    _.countBy(dictionary, dictionaryIterator); // $ExpectType Dictionary<number>
    _.countBy(dictionary, ''); // $ExpectType Dictionary<number>
    _.countBy(dictionary, {a: 42}); // $ExpectType Dictionary<number>

    _.countBy(numericDictionary); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, numericDictionaryIterator); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, ''); // $ExpectType Dictionary<number>
    _.countBy(numericDictionary, {a: 42}); // $ExpectType Dictionary<number>

    _('').countBy(); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _('').countBy(stringIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

    _(array).countBy(); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(array).countBy(listIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(array).countBy(''); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(array).countBy({a: 42}); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

    _(list).countBy(); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(list).countBy(listIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(list).countBy(''); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(list).countBy({a: 42}); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

    _(dictionary).countBy(); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(dictionary).countBy(dictionaryIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(dictionary).countBy(''); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(dictionary).countBy({a: 42}); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

    _(numericDictionary).countBy(); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(numericDictionary).countBy(numericDictionaryIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(numericDictionary).countBy(''); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(numericDictionary).countBy({a: 42}); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

    _('').chain().countBy(); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _('').chain().countBy(stringIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

    _(array).chain().countBy(); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(array).chain().countBy(listIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(array).chain().countBy(''); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(array).chain().countBy({a: 42}); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

    _(list).chain().countBy(); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(list).chain().countBy(listIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(list).chain().countBy(''); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(list).chain().countBy({a: 42}); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

    _(dictionary).chain().countBy(); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(dictionary).chain().countBy(dictionaryIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(dictionary).chain().countBy(''); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(dictionary).chain().countBy({a: 42}); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

    _(numericDictionary).chain().countBy(); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(numericDictionary).chain().countBy(numericDictionaryIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(numericDictionary).chain().countBy(''); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _(numericDictionary).chain().countBy({a: 42}); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

    const stringIterator2 = (value: string) => 1;
    const listIterator2 = (value: AbcObject) => 1;
    fp.countBy(stringIterator2, ""); // $ExpectType Dictionary<number>
    fp.countBy(stringIterator2)(""); // $ExpectType Dictionary<number>
    fp.countBy(listIterator2, list); // $ExpectType Dictionary<number>
    fp.countBy("", list); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, list); // $ExpectType Dictionary<number>
    fp.countBy(listIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.countBy("", dictionary); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, dictionary); // $ExpectType Dictionary<number>
    fp.countBy(listIterator2, numericDictionary); // $ExpectType Dictionary<number>
    fp.countBy("", numericDictionary); // $ExpectType Dictionary<number>
    fp.countBy({ a: 42 }, numericDictionary); // $ExpectType Dictionary<number>
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

        result = _(list).each(listIterator);
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

        result = _(list).chain().each(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().each(dictionaryIterator);
    }

    const stringIterator2 = (char: string) => 1;
    const listIterator2 = (value: AbcObject) => 1;
    fp.each(stringIterator2, ""); // $ExpectType string
    fp.each(listIterator2, array); // $ExpectType AbcObject[]
    fp.each(listIterator2)(array); // $ExpectType AbcObject[]
    fp.each(listIterator2, list); // $ExpectType ArrayLike<AbcObject>
    fp.each(listIterator2, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.each(listIterator2, nilArray); // $ExpectType AbcObject[] | null | undefined
    fp.each(listIterator2, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    fp.each(listIterator2, nilDictionary); // $ExpectType Dictionary<AbcObject> | null | undefined
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

        result = _(list).eachRight(listIterator);
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

        result = _(list).chain().eachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().eachRight(dictionaryIterator);
    }

    const stringIterator2 = (char: string) => 1;
    const listIterator2 = (value: AbcObject) => 1;
    fp.eachRight(stringIterator2, ""); // $ExpectType string
    fp.eachRight(listIterator2, array); // $ExpectType AbcObject[]
    fp.eachRight(listIterator2)(array); // $ExpectType AbcObject[]
    fp.eachRight(listIterator2, list); // $ExpectType ArrayLike<AbcObject>
    fp.eachRight(listIterator2, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.eachRight(listIterator2, nilArray); // $ExpectType AbcObject[] | null | undefined
    fp.eachRight(listIterator2, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    fp.eachRight(listIterator2, nilDictionary); // $ExpectType Dictionary<AbcObject> | null | undefined
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
    let numericDictionaryIterator = (value: SampleObject, key: string, collection: _.NumericDictionary<SampleObject>) => true;

    {
        let result: boolean;

        result = _.every(array);
        result = _.every(array, listIterator);
        result = _.every(array, 'a');
        result = _.every(array, ['a', 42]);
        result = _.every(array, {a: 42});

        result = _.every(list);
        result = _.every(list, listIterator);
        result = _.every(list, 'a');
        result = _.every(list, ['a', 42]);
        result = _.every(list, {a: 42});

        result = _.every(dictionary);
        result = _.every(dictionary, dictionaryIterator);
        result = _.every(dictionary, 'a');
        result = _.every(dictionary, ['a', 42]);
        result = _.every(dictionary, {a: 42});

        result = _.every(numericDictionary);
        result = _.every(numericDictionary, numericDictionaryIterator);
        result = _.every(numericDictionary, 'a');
        result = _.every(numericDictionary, ['a', 42]);
        result = _.every(numericDictionary, {a: 42});

        result = _(array).every();
        result = _(array).every(listIterator);
        result = _(array).every('a');
        result = _(array).every(['a', 42]);
        result = _(array).every({a: 42});

        result = _(list).every();
        result = _(list).every(listIterator);
        result = _(list).every('a');
        result = _(list).every(['a', 42]);
        result = _(list).every({a: 42});

        result = _(dictionary).every();
        result = _(dictionary).every(dictionaryIterator);
        result = _(dictionary).every('a');
        result = _(dictionary).every(['a', 42]);
        result = _(dictionary).every({a: 42});

        result = _(numericDictionary).every();
        result = _(numericDictionary).every(numericDictionaryIterator);
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

        result = _(list).chain().every();
        result = _(list).chain().every(listIterator);
        result = _(list).chain().every('a');
        result = _(list).chain().every(['a', 42]);
        result = _(list).chain().every({a: 42});

        result = _(dictionary).chain().every();
        result = _(dictionary).chain().every(dictionaryIterator);
        result = _(dictionary).chain().every('a');
        result = _(dictionary).chain().every(['a', 42]);
        result = _(dictionary).chain().every({a: 42});

        result = _(numericDictionary).chain().every();
        result = _(numericDictionary).chain().every(numericDictionaryIterator);
        result = _(numericDictionary).chain().every('a');
        result = _(numericDictionary).chain().every(['a', 42]);
        result = _(numericDictionary).chain().every({a: 42});
    }

    const iterator2 = (value: AbcObject) => true;

    fp.every(iterator2, list); // $ExpectType boolean
    fp.every(iterator2)(list); // $ExpectType boolean
    fp.every("a", list); // $ExpectType boolean
    fp.every("a")(list); // $ExpectType boolean
    fp.every({ a: 42 }, list); // $ExpectType boolean
    fp.every(["a", 42], list); // $ExpectType boolean
    fp.every(["a", 42], list); // $ExpectType boolean

    fp.every(iterator2, dictionary); // $ExpectType boolean
    fp.every(iterator2)(dictionary); // $ExpectType boolean
    fp.every("a", dictionary); // $ExpectType boolean
    fp.every("a")(dictionary); // $ExpectType boolean
    fp.every({ a: 42 }, dictionary); // $ExpectType boolean
    fp.every(["a", 42], dictionary); // $ExpectType boolean
    fp.every(["a", 42], dictionary); // $ExpectType boolean

    fp.every(iterator2, numericDictionary); // $ExpectType boolean
    fp.every(iterator2)(numericDictionary); // $ExpectType boolean
    fp.every("a", numericDictionary); // $ExpectType boolean
    fp.every("a")(numericDictionary); // $ExpectType boolean
    fp.every({ a: 42 }, numericDictionary); // $ExpectType boolean
    fp.every(["a", 42], numericDictionary); // $ExpectType boolean
    fp.every(["a", 42], numericDictionary); // $ExpectType boolean
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

        result = _.filter(array, listIterator);
        result = _.filter(array, '');
        result = _.filter(array, {a: 42});
        result = _.filter(array, ["a", 42]);

        result = _.filter(list, listIterator);
        result = _.filter(list, '');
        result = _.filter(list, {a: 42});
        result = _.filter(list, ["a", 42]);

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

        result = _(list).filter(listIterator);
        result = _(list).filter('');
        result = _(list).filter({a: 42});
        result = _(list).filter(["a", 42]);

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

        result = _(list).chain().filter(listIterator);
        result = _(list).chain().filter('');
        result = _(list).chain().filter({a: 42});
        result = _(list).chain().filter(["a", 42]);

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

    const list2: _.List<AbcObject | undefined> = [];
    const dictionary2: _.Dictionary<AbcObject | undefined> = {};
    const stringIterator2 = (char: string) => true;
    const listIterator2 = (value: AbcObject | undefined) => true;
    const listIteratorTypeGuard2 = (value: AbcObject | undefined): value is AbcObject => !!value;

    fp.filter(stringIterator2, ""); // $ExpectType string[]

    fp.filter(listIterator2, list2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(listIterator2)(list2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(listIteratorTypeGuard2, list2); // $ExpectType AbcObject[]
    fp.filter("", list2); // $ExpectType (AbcObject | undefined)[]
    fp.filter({ a: 42 }, list2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(["a", 42], list2); // $ExpectType (AbcObject | undefined)[]

    fp.filter(listIterator2, dictionary2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(listIterator2)(dictionary2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(listIteratorTypeGuard2, dictionary2); // $ExpectType AbcObject[]
    fp.filter("", dictionary2); // $ExpectType (AbcObject | undefined)[]
    fp.filter({ a: 42 }, dictionary2); // $ExpectType (AbcObject | undefined)[]
    fp.filter(["a", 42], dictionary2); // $ExpectType (AbcObject | undefined)[]
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
    result = _.find(array, listIterator);
    result = _.find(array, listIterator, 1);
    result = _.find(array, '');
    result = _.find(array, '', 1);
    result = _.find(array, {a: 42});
    result = _.find(array, {a: 42}, 1);
    result = _.find(array, ['a', 5]);
    result = _.find(array, ['a', 5], 1);

    result = _.find(list);
    result = _.find(list, listIterator);
    result = _.find(list, listIterator, 1);
    result = _.find(list, '');
    result = _.find(list, '', 1);
    result = _.find(list, {a: 42});
    result = _.find(list, {a: 42}, 1);
    result = _.find(list, ['a', 5]);
    result = _.find(list, ['a', 5], 1);

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

    result = _(list).find();
    result = _(list).find(listIterator);
    result = _(list).find(listIterator, 1);
    result = _(list).find('');
    result = _(list).find('', 1);
    result = _(list).find({a: 42});
    result = _(list).find({a: 42}, 1);
    result = _(list).find(['a', 5]);
    result = _(list).find(['a', 5], 1);

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

    const list2: _.List<AbcObject | null> = [];
    const dictionary2: _.Dictionary<AbcObject | null> = {};
    const stringIterator2 = (char: string) => true;
    const listIterator2 = (value: AbcObject | null) => true;
    const listIteratorTypeGuard2 = (value: AbcObject | null): value is AbcObject => !!value;

    fp.find(stringIterator2, ""); // $ExpectType string | undefined

    fp.find(listIterator2, list2); // $ExpectType AbcObject | null | undefined
    fp.find(listIterator2)(list2); // $ExpectType AbcObject | null | undefined
    fp.find(listIteratorTypeGuard2, list2); // $ExpectType AbcObject | undefined
    fp.find("", list2); // $ExpectType AbcObject | null | undefined
    fp.find({ a: 42 }, list2); // $ExpectType AbcObject | null | undefined
    fp.find(["a", 42], list2); // $ExpectType AbcObject | null | undefined

    fp.find(listIterator2, dictionary2); // $ExpectType AbcObject | null | undefined
    fp.find(listIterator2)(dictionary2); // $ExpectType AbcObject | null | undefined
    fp.find(listIteratorTypeGuard2, dictionary2); // $ExpectType AbcObject | undefined
    fp.find("", dictionary2); // $ExpectType AbcObject | null | undefined
    fp.find({ a: 42 }, dictionary2); // $ExpectType AbcObject | null | undefined
    fp.find(["a", 42], dictionary2); // $ExpectType AbcObject | null | undefined
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
    result = _.findLast(array, listIterator);
    result = _.findLast(array, listIterator, 1);
    result = _.findLast(array, '');
    result = _.findLast(array, '', 1);
    result = _.findLast(array, {a: 42});
    result = _.findLast(array, {a: 42}, 1);
    result = _.findLast(array, ['a', 5]);
    result = _.findLast(array, ['a', 5], 1);

    result = _.findLast(list);
    result = _.findLast(list);
    result = _.findLast(list, listIterator);
    result = _.findLast(list, listIterator, 1);
    result = _.findLast(list, '');
    result = _.findLast(list, '', 1);
    result = _.findLast(list, {a: 42});
    result = _.findLast(list, {a: 42}, 1);
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

    result = _(list).findLast();
    result = _(list).findLast(listIterator);
    result = _(list).findLast(listIterator, 1);
    result = _(list).findLast('');
    result = _(list).findLast('', 1);
    result = _(list).findLast({a: 42});
    result = _(list).findLast({a: 42}, 1);
    result = _(list).findLast(['a', 5]);
    result = _(list).findLast(['a', 5], 1);

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

    const list2: _.List<AbcObject | null> = [];
    const dictionary2: _.Dictionary<AbcObject | null> = {};
    const stringIterator2 = (char: string) => true;
    const listIterator2 = (value: AbcObject | null) => true;
    const listIteratorTypeGuard2 = (value: AbcObject | null): value is AbcObject => !!value;

    fp.findLast(stringIterator2, ""); // $ExpectType string | undefined

    fp.findLast(listIterator2, list2); // $ExpectType AbcObject | null | undefined
    fp.findLast(listIterator2)(list2); // $ExpectType AbcObject | null | undefined
    fp.findLast(listIteratorTypeGuard2, list2); // $ExpectType AbcObject | undefined
    fp.findLast("", list2); // $ExpectType AbcObject | null | undefined
    fp.findLast({ a: 42 }, list2); // $ExpectType AbcObject | null | undefined
    fp.findLast(["a", 42], list2); // $ExpectType AbcObject | null | undefined

    fp.findLast(listIterator2, dictionary2); // $ExpectType AbcObject | null | undefined
    fp.findLast(listIterator2)(dictionary2); // $ExpectType AbcObject | null | undefined
    fp.findLast(listIteratorTypeGuard2, dictionary2); // $ExpectType AbcObject | undefined
    fp.findLast("", dictionary2); // $ExpectType AbcObject | null | undefined
    fp.findLast({ a: 42 }, dictionary2); // $ExpectType AbcObject | null | undefined
    fp.findLast(["a", 42], dictionary2); // $ExpectType AbcObject | null | undefined
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

    let numericDictionaryIterator: (value: number|number[], key: string, collection: _.NumericDictionary<number|number[]>) => number|number[] = (a, b, c) => 1;

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
        result = _.flatMap(numArray, listIterator);
        result = _.flatMap(objArray, 'a');
        result = _.flatMap(numList);
        result = _.flatMap(numList, listIterator);
        result = _.flatMap(objList, 'a');
        result = _.flatMap(numDictionary);
        result = _.flatMap(numDictionary, dictionaryIterator);
        result = _.flatMap(objDictionary, 'a');
        result = _.flatMap(numNumericDictionary);
        result = _.flatMap(numNumericDictionary, numericDictionaryIterator);
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

        result = _(numArray).flatMap();
        result = _(numArray).flatMap(listIterator);
        result = _(objArray).flatMap('a');

        result = _(numList).flatMap();
        result = _(numList).flatMap(listIterator);
        result = _(objList).flatMap('a');

        result = _(numDictionary).flatMap();
        result = _(numDictionary).flatMap(dictionaryIterator);
        result = _(objDictionary).flatMap('a');

        result = _(numNumericDictionary).flatMap();
        result = _(numNumericDictionary).flatMap(numericDictionaryIterator);
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

        result = _(numArray).chain().flatMap();
        result = _(numArray).chain().flatMap(listIterator);
        result = _(objArray).chain().flatMap('a');

        result = _(numList).chain().flatMap();
        result = _(numList).chain().flatMap(listIterator);
        result = _(objList).chain().flatMap('a');

        result = _(numDictionary).chain().flatMap();
        result = _(numDictionary).chain().flatMap(dictionaryIterator);
        result = _(objDictionary).chain().flatMap('a');

        result = _(numNumericDictionary).chain().flatMap();
        result = _(numNumericDictionary).chain().flatMap(numericDictionaryIterator);
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

    const list: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary: { [key: string]: AbcObject } | null | undefined = anything;
    const numericDictionary: { [key: number]: AbcObject } | null | undefined = anything;
    const stringIterator2: (value: string) => string|string[] = (a) => "";
    const listIterator2: (value: AbcObject) => AbcObject|AbcObject[] = (a) => anything;
    fp.flatMap(stringIterator2, "abc"); // $ExpectType string[]
    fp.flatMap(listIterator2, list); // $ExpectType AbcObject[]
    fp.flatMap(listIterator2)(list); // $ExpectType AbcObject[]
    fp.flatMap("a", list); // $ExpectType any[]
    fp.flatMap({ a: 42 }, list); // $ExpectType boolean[]
    fp.flatMap(["a", 42], list); // $ExpectType boolean[]
    fp.flatMap(listIterator2, dictionary); // $ExpectType AbcObject[]
    fp.flatMap("a", dictionary); // $ExpectType any[]
    fp.flatMap({ a: 42 }, dictionary); // $ExpectType boolean[]
    fp.flatMap(["a", 42], dictionary); // $ExpectType boolean[]
    fp.flatMap(listIterator2, numericDictionary); // $ExpectType AbcObject[]
    fp.flatMap("a", numericDictionary); // $ExpectType any[]
    fp.flatMap({ a: 42 }, numericDictionary); // $ExpectType boolean[]
    fp.flatMap(["a", 42], numericDictionary); // $ExpectType boolean[]
}

// _.flatMapDeep
namespace TestFlatMapDeep {
    let numList: _.List<number|number[]> | null | undefined = anything;
    let objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => ['a', 'b', 'c'];

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) =>_.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: string, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        result = _.flatMapDeep('abc');

        result = _.flatMapDeep('abc', stringIterator);
    }

    {
        let result: number[];

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

        result = _(objList).chain().flatMapDeep(['a', 42]);
        result = _(objList).chain().flatMapDeep({a: 42});

        result = _(objDictionary).chain().flatMapDeep(['a', 42]);
        result = _(objDictionary).chain().flatMapDeep({a: 42});

        result = _(objNumericDictionary).chain().flatMapDeep(['a', 42]);
        result = _(objNumericDictionary).chain().flatMapDeep({a: 42});
    }

    const list2: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary2: _.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary2: _.NumericDictionary<AbcObject> | null | undefined = anything;
    const iterator2: (value: AbcObject) => _.ListOfRecursiveArraysOrValues<number> = (value) => [[[[[1]]]], 2, [[[3], 4]]];
    fp.flatMapDeep(iterator2, list2); // $ExpectType number[]
    fp.flatMapDeep(iterator2)(list2); // $ExpectType number[]
    fp.flatMapDeep("a", list2); // $ExpectType any[]
    fp.flatMapDeep({ a: 42 }, list2); // $ExpectType boolean[]
    fp.flatMapDeep(["a", 42], list2); // $ExpectType boolean[]
    fp.flatMapDeep(iterator2, dictionary2); // $ExpectType number[]
    fp.flatMapDeep(iterator2, numericDictionary2); // $ExpectType number[]
}

// _.flatMapDepth
namespace TestFlatMapDepth {
    let numList: _.List<number|number[]> | null | undefined = anything;
    let objList: _.List<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numDictionary: _.Dictionary<number|number[]> | null | undefined = anything;
    let objDictionary: _.Dictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let numNumericDictionary: _.NumericDictionary<number|number[]> | null | undefined = anything;
    let objNumericDictionary: _.NumericDictionary<{a: number}|Array<{a: number}>> | null | undefined = anything;

    let stringIterator: (value: string, index: number, collection: _.List<string>) => _.ListOfRecursiveArraysOrValues<string> = (a, b, c) => "";

    let listIterator: (value: number|number[], index: number, collection: _.List<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) =>[ 1];

    let dictionaryIterator: (value: number|number[], key: string, collection: _.Dictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    let numericDictionaryIterator: (value: number|number[], key: string, collection: _.NumericDictionary<number|number[]>) => _.ListOfRecursiveArraysOrValues<number> = (a, b, c) => [1];

    {
        let result: string[];

        result = _.flatMapDepth('abc');

        result = _.flatMapDepth('abc', stringIterator, 1);
    }

    {
        let result: number[];

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

        result = _(objList).chain().flatMapDepth(['a', 42], 1);
        result = _(objList).chain().flatMapDepth({a: 42}, 1);

        result = _(objDictionary).chain().flatMapDepth(['a', 42], 1);
        result = _(objDictionary).chain().flatMapDepth({a: 42}, 1);

        result = _(objNumericDictionary).chain().flatMapDepth(['a', 42], 1);
        result = _(objNumericDictionary).chain().flatMapDepth({a: 42}, 1);
    }

    const list2: ArrayLike<AbcObject> | null | undefined = anything;
    const dictionary2: _.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary2: _.NumericDictionary<AbcObject> | null | undefined = anything;
    const iterator2: (value: AbcObject) => _.ListOfRecursiveArraysOrValues<number> = (value) => [[[[[1]]]], 2, [[[3], 4]]];
    fp.flatMapDepth(iterator2, 5, list2); // $ExpectType number[]
    fp.flatMapDepth(iterator2)(5)(list2); // $ExpectType number[]
    fp.flatMapDepth("a", 5, list2); // $ExpectType any[]
    fp.flatMapDepth({ a: 42 }, 5, list2); // $ExpectType boolean[]
    fp.flatMapDepth(["a", 42], 5, list2); // $ExpectType boolean[]
    fp.flatMapDepth(iterator2, 5, dictionary2); // $ExpectType number[]
    fp.flatMapDepth(iterator2, 5, numericDictionary2); // $ExpectType number[]
}

// _.forEach
namespace TestForEach {
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
    const abcObject: AbcObject = anything;
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

    // $ExpectType ArrayLike<AbcObject>
    _.forEach(list, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
    });

    // $ExpectType ArrayLike<AbcObject> | null | undefined
    _.forEach(nilList, (value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
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
        /* Broken in TS 2.4: value; // AbcObject */
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType NumericDictionary<AbcObject> | null | undefined
    _.forEach(nilNumericDictionary, (value, index, collection) => {
        /* Broken in TS 2.4: value; // AbcObject */
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

    // $ExpectType LoDashImplicitWrapper<string>
    _(str).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType LoDashImplicitWrapper<string | null | undefined>
    _(nilStr).forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType LoDashImplicitWrapper<AbcObject[]>
    _(array).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType LoDashImplicitWrapper<AbcObject[] | null | undefined>
    _(nilArray).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject>>
    _(list).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
    });

    // $ExpectType LoDashImplicitWrapper<ArrayLike<AbcObject> | null | undefined>
    _(nilList).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
    });

    // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
    _(dictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject> | null | undefined>
    _(nilDictionary).forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject>>
    _(numericDictionary).forEach((value, index, collection) => {
        /* Broken in TS 2.4: value; // AbcObject */
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject> | null | undefined>
    _(nilNumericDictionary).forEach((value, index, collection) => {
        /* Broken in TS 2.4: value; // AbcObject */
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<string>
    _(str).chain().forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType LoDashExplicitWrapper<string | null | undefined>
    _(nilStr).chain().forEach((value, index, collection) => {
        value; // $ExpectType string
        index; // $ExpectType number
        collection; // $ExpectType string
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[]>
    _(array).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType LoDashExplicitWrapper<AbcObject[] | null | undefined>
    _(nilArray).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType AbcObject[]
    });

    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject>>
    _(list).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<ArrayLike<AbcObject> | null | undefined>
    _(nilList).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
    _(dictionary).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject> | null | undefined>
    _(nilDictionary).chain().forEach((value, index, collection) => {
        value; // $ExpectType AbcObject
        index; // $ExpectType string
        collection; // $ExpectType Dictionary<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject>>
    _(numericDictionary).chain().forEach((value, index, collection) => {
        /* Broken in TS 2.4: value; // AbcObject */
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject> | null | undefined>
    _(nilNumericDictionary).chain().forEach((value, index, collection) => {
        /* Broken in TS 2.4: value; // AbcObject */
        index; // $ExpectType string
        collection; // $ExpectType NumericDictionary<AbcObject>
    });

    const stringIterator2 = (char: string) => 1;
    const listIterator2 = (value: AbcObject) => 1;
    fp.forEach(stringIterator2, ""); // $ExpectType string
    fp.forEach(listIterator2, array); // $ExpectType AbcObject[]
    fp.forEach(listIterator2)(array); // $ExpectType AbcObject[]
    fp.forEach(listIterator2, list); // $ExpectType ArrayLike<AbcObject>
    fp.forEach(listIterator2, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.forEach(listIterator2, nilArray); // $ExpectType AbcObject[] | null | undefined
    fp.forEach(listIterator2, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    fp.forEach(listIterator2, nilDictionary); // $ExpectType Dictionary<AbcObject> | null | undefined
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

        result = _(list).forEachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitNillableObjectWrapper<_.List<AbcObject>>;

        result = _(nilList).forEachRight(listIterator);
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

        result = _(nilList).chain().forEachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(dictionary).chain().forEachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitNillableObjectWrapper<_.Dictionary<AbcObject>>;

        result = _(nilDictionary).chain().forEachRight(dictionaryIterator);
    }

    const stringIterator2 = (char: string) => 1;
    const listIterator2 = (value: AbcObject) => 1;
    fp.forEachRight(stringIterator2, ""); // $ExpectType string
    fp.forEachRight(listIterator2, array); // $ExpectType AbcObject[]
    fp.forEachRight(listIterator2)(array); // $ExpectType AbcObject[]
    fp.forEachRight(listIterator2, list); // $ExpectType ArrayLike<AbcObject>
    fp.forEachRight(listIterator2, dictionary); // $ExpectType Dictionary<AbcObject>
    fp.forEachRight(listIterator2, nilArray); // $ExpectType AbcObject[] | null | undefined
    fp.forEachRight(listIterator2, nilList); // $ExpectType ArrayLike<AbcObject> | null | undefined
    fp.forEachRight(listIterator2, nilDictionary); // $ExpectType Dictionary<AbcObject> | null | undefined
}

// _.groupBy
namespace TestGroupBy {
    type SampleType = {a: number; b: string; c: boolean;};

    let list: _.List<SampleType> | null | undefined = [] as any;
    let dictionary: _.Dictionary<SampleType> | null | undefined = anything;

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

        result = _(list).groupBy();
        result = _(list).groupBy(listIterator);
        result = _(list).groupBy('');
        result = _(list).groupBy({a: 42});

        result = _(dictionary).groupBy();
        result = _(dictionary).groupBy(dictionaryIterator);
        result = _(dictionary).groupBy('');
        result = _(dictionary).groupBy({a: 42});
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<string[]>>;

        result = _('').chain().groupBy();
        result = _('').chain().groupBy((char: string, index: number, string: ArrayLike<string>) => 0);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<_.Dictionary<SampleType[]>>;

        result = _(list).chain().groupBy();
        result = _(list).chain().groupBy(listIterator);
        result = _(list).chain().groupBy('');
        result = _(list).chain().groupBy({a: 42});

        result = _(dictionary).chain().groupBy();
        result = _(dictionary).chain().groupBy(dictionaryIterator);
        result = _(dictionary).chain().groupBy('');
        result = _(dictionary).chain().groupBy({a: 42});
    }

    const stringIterator2 = (char: string) => 0;
    const listIterator2 = (value: SampleType) => 0;

    fp.groupBy(stringIterator2, ""); // $ExpectType Dictionary<string[]>

    fp.groupBy(listIterator2, list); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy(listIterator2)(list); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy("a", list); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy({ a: 42 }, list); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy(["a", 42], list); // $ExpectType Dictionary<SampleType[]>

    fp.groupBy(listIterator2, dictionary); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy(listIterator2)(dictionary); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy("a", dictionary); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy({ a: 42 }, dictionary); // $ExpectType Dictionary<SampleType[]>
    fp.groupBy(["a", 42], dictionary); // $ExpectType Dictionary<SampleType[]>
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

    fp.includes(target, list); // $ExpectType boolean
    fp.includes(target)(list); // $ExpectType boolean
    fp.includes(target, dictionary); // $ExpectType boolean

    fp.includesFrom(target, 42, list); // $ExpectType boolean
    fp.includesFrom(target)(42)(list); // $ExpectType boolean
    fp.includesFrom(target, 42, dictionary); // $ExpectType boolean
}

// _.keyBy
namespace TestKeyBy {
    type SampleObject = {a: number; b: string; c: boolean;};

    let list: _.List<SampleObject> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleObject> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<SampleObject> | null | undefined = obj;

    let stringIterator = (value: string, index: number, collection: string) => "a";
    let listIterator = (value: SampleObject, index: number, collection: _.List<SampleObject>) => 1;
    let dictionaryIterator = (value: SampleObject, key: string, collection: _.Dictionary<SampleObject>) => Symbol.name;
    let numericDictionaryIterator = (value: SampleObject, key: string, collection: _.NumericDictionary<SampleObject>) => "a";

    {
        let result: _.Dictionary<string>;

        result = _.keyBy('abcd');
        result = _.keyBy('abcd', stringIterator);
    }

    {
        let result: _.Dictionary<SampleObject>;

        result = _.keyBy(list);
        result = _.keyBy(list, listIterator);
        result = _.keyBy(list, 'a');
        result = _.keyBy(list, {a: 42});

        result = _.keyBy(numericDictionary);
        result = _.keyBy(numericDictionary, numericDictionaryIterator);
        result = _.keyBy(numericDictionary, 'a');
        result = _.keyBy(numericDictionary, {a: 42});

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

        result = _(list).keyBy();
        result = _(list).keyBy(listIterator);
        result = _(list).keyBy('a');
        result = _(list).keyBy({a: 42});

        result = _(numericDictionary).keyBy();
        result = _(numericDictionary).keyBy(numericDictionaryIterator);
        result = _(numericDictionary).keyBy('a');
        result = _(numericDictionary).keyBy({a: 42});

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

        result = _(list).chain().keyBy();
        result = _(list).chain().keyBy(listIterator);
        result = _(list).chain().keyBy('a');
        result = _(list).chain().keyBy({a: 42});

        result = _(numericDictionary).chain().keyBy();
        result = _(numericDictionary).chain().keyBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().keyBy('a');
        result = _(numericDictionary).chain().keyBy({a: 42});

        result = _(dictionary).chain().keyBy();
        result = _(dictionary).chain().keyBy(dictionaryIterator);
        result = _(dictionary).chain().keyBy('a');
        result = _(dictionary).chain().keyBy({a: 42});
    }

    const stringIterator2 = (value: string) => 1;
    const listIterator2 = (value: AbcObject) => "a";
    const listIteratorSymbol2 = (value: AbcObject) => Symbol.name;

    fp.keyBy(stringIterator2, "abcd"); // $ExpectType Dictionary<string>

    fp.keyBy(listIterator2, list);
    fp.keyBy(listIterator2)(list);
    fp.keyBy(listIteratorSymbol2, list);
    fp.keyBy("a", list);
    fp.keyBy({ a: 42 }, list);
    fp.keyBy(["a", 42], list);

    fp.keyBy(listIterator2, dictionary);
    fp.keyBy("a", dictionary);
    fp.keyBy({ a: 42 }, dictionary);
    fp.keyBy(["a", 42], dictionary);

    fp.keyBy(listIterator2, numericDictionary);
    fp.keyBy("a", numericDictionary);
    fp.keyBy({ a: 42 }, numericDictionary);
    fp.keyBy(["a", 42], numericDictionary);
}

//_.invoke
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

//_.invokeMap
{
    const numArray: number[] | null | undefined = anything;
    const numDict: _.Dictionary<number> | null | undefined = anything;

    let result: string[];
    result = _.invokeMap(numArray, 'toString');
    result = _.invokeMap(numArray, 'toString', 2);
    result = _(numArray).invokeMap('toString').value();
    result = _(numArray).invokeMap('toString', 2).value();
    result = _(numArray).chain().invokeMap('toString').value();
    result = _(numArray).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numArray, Number.prototype.toString);
    result = _.invokeMap(numArray, Number.prototype.toString, 2);
    result = _(numArray).invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString).value();
    result = _(numArray).chain().invokeMap<string>(Number.prototype.toString, 2).value();

    result = _.invokeMap(numDict, 'toString');
    result = _.invokeMap(numDict, 'toString', 2);
    result = _(numDict).invokeMap('toString').value();
    result = _(numDict).invokeMap('toString', 2).value();
    result = _(numDict).chain().invokeMap('toString').value();
    result = _(numDict).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numDict, Number.prototype.toString, 2);
    result = _(numDict).invokeMap<string>(Number.prototype.toString, 2).value();
    result = _(numDict).chain().invokeMap<string>(Number.prototype.toString, 2).value();

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
namespace TestMap {
    const array: AbcObject[] | null | undefined = anything;
    const list: _.List<AbcObject> | null | undefined = anything;
    const dictionary: _.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
    const abcObject: AbcObject = anything;

    {
        _.map(array);  // $ExpectType AbcObject[]
        // $ExpectType number[]
        _.map(array, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
            return 0;
        });

        _.map(list);  // $ExpectType AbcObject[]
        // $ExpectType number[]
        _.map(list, (value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
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
            /* Broken in TS 2.4: value; // AbcObject */
            key; // $ExpectType string
            collection; // $ExpectType NumericDictionary<AbcObject>
            return 0;
        });

        _.map(array, 'a'); // $ExpectType number[]
        _.map(list, 'a'); // $ExpectType number[]
        _.map(dictionary, 'a'); // $ExpectType number[]
        _.map(numericDictionary, 'a'); // $ExpectType number[]

        _.map(array, 'd.0.b'); // $ExpectType any[]
        _.map(list, 'd.0.b'); // $ExpectType any[]
        _.map(dictionary, 'd.0.b'); // $ExpectType any[]
        _.map(numericDictionary, 'd.0.b'); // $ExpectType any[]

        // _.matches iteratee shorthand.
        _.map(array, {});  // $ExpectType boolean[]
        _.map(list, {});  // $ExpectType boolean[]
        _.map(dictionary, {});  // $ExpectType boolean[]
        _.map(numericDictionary, {});  // $ExpectType boolean[]
    }

    {
        _(array).map(); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        // $ExpectType LoDashImplicitWrapper<number[]>
        _(array).map((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
            return 0;
        });

        _(list).map(); // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        // $ExpectType LoDashImplicitWrapper<number[]>
        _(list).map((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
            return 0;
        });

        _(dictionary).map();  // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        // $ExpectType LoDashImplicitWrapper<number[]>
        _(dictionary).map((value, key, collection) => {
            value; // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return 0;
        });

        _(numericDictionary).map();  // $ExpectType LoDashImplicitWrapper<AbcObject[]>
        // $ExpectType LoDashImplicitWrapper<number[]>
        _(numericDictionary).map((value, key, collection) => {
            /* Broken in TS 2.4: value; // AbcObject */
            key; // $ExpectType string
            collection; // $ExpectType NumericDictionary<AbcObject>
            return 0;
        });

        _(array).map('a'); // $ExpectType LoDashImplicitWrapper<number[]>
        _(list).map('a'); // $ExpectType LoDashImplicitWrapper<number[]>
        _(dictionary).map('a'); // $ExpectType LoDashImplicitWrapper<number[]>
        _(numericDictionary).map('a'); // $ExpectType LoDashImplicitWrapper<number[]>

        _(array).map('d.0.b'); // $ExpectType LoDashImplicitWrapper<any[]>
        _(list).map('d.0.b'); // $ExpectType LoDashImplicitWrapper<any[]>
        _(dictionary).map('d.0.b'); // $ExpectType LoDashImplicitWrapper<any[]>
        _(numericDictionary).map('d.0.b'); // $ExpectType LoDashImplicitWrapper<any[]>

        _(array).map({});  // $ExpectType LoDashImplicitWrapper<boolean[]>
        _(list).map({});  // $ExpectType LoDashImplicitWrapper<boolean[]>
        _(dictionary).map({});  // $ExpectType LoDashImplicitWrapper<boolean[]>
        _(numericDictionary).map({});  // $ExpectType LoDashImplicitWrapper<boolean[]>
    }

    {
        _(array).chain().map();  // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        // $ExpectType LoDashExplicitWrapper<number[]>
        _(array).chain().map((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType AbcObject[]
            return 0;
        });

        _(list).chain().map();  // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        // $ExpectType LoDashExplicitWrapper<number[]>
        _(list).chain().map((value, index, collection) => {
            value; // $ExpectType AbcObject
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<AbcObject>
            return 0;
        });

        _(dictionary).chain().map();  // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        // $ExpectType LoDashExplicitWrapper<number[]>
        _(dictionary).chain().map((value, key, collection) => {
            value; // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return 0;
        });

        _(numericDictionary).chain().map();  // $ExpectType LoDashExplicitWrapper<AbcObject[]>
        // $ExpectType LoDashExplicitWrapper<number[]>
        _(numericDictionary).chain().map((value, key, collection) => {
            /* Broken in TS 2.4: value; // AbcObject */
            key; // $ExpectType string
            collection; // $ExpectType NumericDictionary<AbcObject>
            return 0;
        });

        _(array).chain().map('a'); // $ExpectType LoDashExplicitWrapper<number[]>
        _(list).chain().map('a'); // $ExpectType LoDashExplicitWrapper<number[]>
        _(dictionary).chain().map('a'); // $ExpectType LoDashExplicitWrapper<number[]>
        _(numericDictionary).chain().map('a'); // $ExpectType LoDashExplicitWrapper<number[]>

        _(array).chain().map('d.0.b'); // $ExpectType LoDashExplicitWrapper<any[]>
        _(list).chain().map('d.0.b'); // $ExpectType LoDashExplicitWrapper<any[]>
        _(dictionary).chain().map('d.0.b'); // $ExpectType LoDashExplicitWrapper<any[]>
        _(numericDictionary).chain().map('d.0.b'); // $ExpectType LoDashExplicitWrapper<any[]>

        _(array).chain().map({}); // $ExpectType LoDashExplicitWrapper<boolean[]>
        _(list).chain().map({}); // $ExpectType LoDashExplicitWrapper<boolean[]>
        _(dictionary).chain().map({}); // $ExpectType LoDashExplicitWrapper<boolean[]>
        _(numericDictionary).chain().map({}); // $ExpectType LoDashExplicitWrapper<boolean[]>
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

    const array2: AbcObject[] = [];
    const dictionary2: _.Dictionary<AbcObject> = {};
    const listIterator2 = (value: AbcObject): number => value.a;
    fp.map(listIterator2, array2); // $ExpectType number[]
    fp.map(listIterator2)(array2); // $ExpectType number[]
    fp.map(listIterator2, array2); // $ExpectType number[]
    fp.map(listIterator2, dictionary2); // $ExpectType number[]
    fp.map("a", array2); // $ExpectType number[]
    fp.map({ a: 42 }, list); // $ExpectType boolean[]
    fp.map(["a", 42], dictionary); // $ExpectType boolean[]
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

    // $ExpectType [any[], any[]]
    fp.partition((n) => {
        n; // $ExpectType any
        return n < "c";
    }, anything);

    // $ExpectType [any[], any[]]
    fp.partition((n: any) => n < "c")(anything);

    // $ExpectType [string[], string[]]
    fp.partition((n) => {
        n; // $ExpectType string
        return n < "c";
    }, "abcd");
}

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

    fp.reduce((s: string, num: number) => s + num, "", [1, 2, 3]); // $ExpectType string
    fp.reduce((s: string, num: number) => s + num)("")([1, 2, 3]); // $ExpectType string

    fp.reduceRight((num: number, s: string) => s + num, "", [1, 2, 3]); // $ExpectType string
    fp.reduceRight((num: number, s: string) => s + num)("")([1, 2, 3]); // $ExpectType string
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

        result = _.reject(array, listIterator);
        result = _.reject(array, '');
        result = _.reject(array, {a: 42});

        result = _.reject(list, listIterator);
        result = _.reject(list, '');
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

        result = _(list).reject(listIterator);
        result = _(list).reject('');
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

        result = _(list).chain().reject(listIterator);
        result = _(list).chain().reject('');
        result = _(list).chain().reject({a: 42});

        result = _(dictionary).chain().reject(dictionaryIterator);
        result = _(dictionary).chain().reject('');
        result = _(dictionary).chain().reject({a: 42});
    }

    const stringIterator2 = (char: string) => true;
    const listIterator2 = (value: AbcObject) => true;
    fp.reject(stringIterator2, ""); // $ExpectType string[]
    fp.reject(listIterator2, list); // $ExpectType AbcObject[]
    fp.reject(listIterator2)(list); // $ExpectType AbcObject[]
    fp.reject(listIterator2, dictionary); // $ExpectType AbcObject[]
    fp.reject("a", list); // $ExpectType AbcObject[]
    fp.reject({ a: 42 }, list); // $ExpectType AbcObject[]
    fp.reject(["a", 42], list); // $ExpectType AbcObject[]
}

// _.sample
namespace TestSample {
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string>  | null | undefined= obj;

    {
        let result: string | undefined;

        result = _.sample('abc');
        result = _.sample(list);
        result = _.sample(dictionary);
        result = _.sample(numericDictionary);
        result = _.sample({a: 'foo'});
        result = _.sample<string>({a: 'foo'});

        result = _('abc').sample();
        result = _(list).sample<string>();
        result = _(dictionary).sample<string>();
        result = _(numericDictionary).sample<string>();
        result = _({a: 'foo'}).sample<string>();
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _('abc').chain().sample();
        result = _(list).chain().sample();
        result = _(dictionary).chain().sample();
        result = _(numericDictionary).chain().sample();
        result = _({a: 'foo'}).chain().sample();
    }

    fp.sample("abc"); // $ExpectType string | undefined
    fp.sample(list); // $ExpectType string | undefined
    fp.sample({a: "foo"}); // $ExpectType string | undefined
}

// _.sampleSize
namespace TestSampleSize {
    let list: _.List<string> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<string> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<string> | null | undefined = obj;

    {
        let result: string[];

        result = _.sampleSize('abc');
        result = _.sampleSize('abc', 42);
        result = _.sampleSize(list);
        result = _.sampleSize(list, 42);
        result = _.sampleSize(dictionary, 42);
        result = _.sampleSize(numericDictionary, 42);
        result = _.sampleSize({a: 'foo'}, 42);
        result = _.sampleSize<string>({a: 'foo'}, 42);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').sampleSize();
        result = _('abc').sampleSize(42);
        result = _(list).sampleSize<string>();
        result = _(list).sampleSize<string>(42);
        result = _(dictionary).sampleSize<string>(42);
        result = _(numericDictionary).sampleSize<string>(42);
        result = _({a: 'foo'}).sampleSize<string>(42);
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().sampleSize();
        result = _('abc').chain().sampleSize(42);
        result = _(list).chain().sampleSize<string>();
        result = _(list).chain().sampleSize<string>(42);
        result = _(dictionary).chain().sampleSize<string>(42);
        result = _(numericDictionary).chain().sampleSize<string>(42);
        result = _({a: 'foo'}).chain().sampleSize<string>(42);
    }

    fp.sampleSize(42, "abc"); // $ExpectType string[]
    fp.sampleSize(42)("abc"); // $ExpectType string[]
    fp.sampleSize(42, list); // $ExpectType string[]
    fp.sampleSize(42, {a: "foo"}); // $ExpectType string[]
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

        result = _.shuffle(array);
        result = _.shuffle(list);
        result = _.shuffle(dictionary);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<string>;

        result = _('abc').shuffle();
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(array).shuffle();
        result = _(list).shuffle();
        result = _(dictionary).shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<string>;

        result = _('abc').chain().shuffle();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().shuffle();
        result = _(list).chain().shuffle();
        result = _(dictionary).chain().shuffle();
    }

    fp.shuffle("abc"); // $ExpectType string[]
    fp.shuffle(list); // $ExpectType AbcObject[]
    fp.shuffle(dictionary); // $ExpectType AbcObject[]
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

    fp.size(array); // $ExpectType number
    fp.size(list); // $ExpectType number
    fp.size(dictionary); // $ExpectType number
    fp.size(""); // $ExpectType number
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
    let numericDictionaryIterator = (value: SampleObject, key: string, collection: _.NumericDictionary<SampleObject>) => true;
    let objectIterator = (value: any, key: string, collection: any) => true;

    {
        let result: boolean;

        result = _.some(array);
        result = _.some(array, listIterator);
        result = _.some(array, 'a');
        result = _.some(array, ['a', 42]);
        result = _.some(array, {a: 42});

        result = _.some(list);
        result = _.some(list, listIterator);
        result = _.some(list, 'a');
        result = _.some(list, ['a', 42]);
        result = _.some(list, {a: 42});

        result = _.some(dictionary);
        result = _.some(numericDictionary, numericDictionaryIterator);
        result = _.some(dictionary, (value, key, collection) => {
            value; // $ExpectType SampleObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<SampleObject>
            return true;
        });
        result = _.some(dictionary, 'a');
        result = _.some(dictionary, ['a', 42]);
        result = _.some(dictionary, {a: 42});

        result = _.some(numericDictionary);
        result = _.some(numericDictionary, numericDictionaryIterator);
        result = _.some(numericDictionary, 'a');
        result = _.some(numericDictionary, ['a', 42]);
        result = _.some(numericDictionary, {a: 42});

        result = _.some(sampleObject);
        result = _.some(sampleObject, objectIterator);
        result = _.some(sampleObject, 'a');
        result = _.some(sampleObject, ['a', 42]);

        result = _(array).some();
        result = _(array).some(listIterator);
        result = _(array).some('a');
        result = _(array).some(['a', 42]);
        result = _(array).some({a: 42});

        result = _(list).some();
        result = _(list).some(listIterator);
        result = _(list).some('a');
        result = _(list).some(['a', 42]);
        result = _(list).some({a: 42});

        result = _(dictionary).some();
        result = _(dictionary).some(dictionaryIterator);
        result = _(dictionary).some('a');
        result = _(dictionary).some(['a', 42]);
        result = _(dictionary).some({a: 42});

        result = _(numericDictionary).some();
        result = _(numericDictionary).some(numericDictionaryIterator);
        result = _(numericDictionary).some('a');
        result = _(numericDictionary).some(['a', 42]);
        result = _(numericDictionary).some({a: 42});

        result = _(sampleObject).some();
        result = _(sampleObject).some(objectIterator);
        result = _(sampleObject).some('a');
        result = _(sampleObject).some(['a', 42]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().some();
        result = _(array).chain().some(listIterator);
        result = _(array).chain().some('a');
        result = _(array).chain().some(['a', 42]);
        result = _(array).chain().some({a: 42});

        result = _(list).chain().some();
        result = _(list).chain().some(listIterator);
        result = _(list).chain().some('a');
        result = _(list).chain().some(['a', 42]);
        result = _(list).chain().some({a: 42});

        result = _(dictionary).chain().some();
        result = _(dictionary).chain().some(dictionaryIterator);
        result = _(dictionary).chain().some('a');
        result = _(dictionary).chain().some(['a', 42]);
        result = _(dictionary).chain().some({a: 42});

        result = _(numericDictionary).chain().some();
        result = _(numericDictionary).chain().some(numericDictionaryIterator);
        result = _(numericDictionary).chain().some('a');
        result = _(numericDictionary).chain().some(['a', 42]);
        result = _(numericDictionary).chain().some({a: 42});

        result = _(sampleObject).chain().some();
        result = _(sampleObject).chain().some(objectIterator);
        result = _(sampleObject).chain().some('a');
        result = _(sampleObject).chain().some(['a', 42]);
    }

    const listIterator2 = (value: AbcObject) => true;

    fp.some(listIterator2, list); // $ExpectType boolean
    fp.some(listIterator2)(list); // $ExpectType boolean
    fp.some("a", list); // $ExpectType boolean
    fp.some({ a: 42 }, list); // $ExpectType boolean
    fp.some(["a", 42], list); // $ExpectType boolean

    fp.some(listIterator2, dictionary); // $ExpectType boolean
    fp.some(listIterator2)(dictionary); // $ExpectType boolean
    fp.some("a", dictionary); // $ExpectType boolean
    fp.some({ a: 42 }, dictionary); // $ExpectType boolean
    fp.some(["a", 42], dictionary); // $ExpectType boolean

    fp.some(listIterator2, numericDictionary); // $ExpectType boolean
    fp.some(listIterator2)(numericDictionary); // $ExpectType boolean
    fp.some("a", numericDictionary); // $ExpectType boolean
    fp.some({ a: 42 }, numericDictionary); // $ExpectType boolean
    fp.some(["a", 42], numericDictionary); // $ExpectType boolean
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
        result = _.sortBy(array, listIterator, listIterator);
        result = _.sortBy(array, [listIterator, listIterator]);
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
        result = _(array).sortBy(listIterator, listIterator);
        result = _(array).sortBy([listIterator, listIterator]);
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
        result = _(array).chain().sortBy(listIterator, listIterator);
        result = _(array).chain().sortBy([listIterator, listIterator]);
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

    const listIterator2 = (value: AbcObject) => 0;

    fp.sortBy(fp.identity, "bca"); // $ExpectType string[]
    fp.sortBy(listIterator2, list); // $ExpectType AbcObject[]
    fp.sortBy(listIterator2)(list); // $ExpectType AbcObject[]
    fp.sortBy("a", list); // $ExpectType AbcObject[]
    fp.sortBy({ a: 42 }, list); // $ExpectType AbcObject[]

    fp.sortBy(fp.identity, dictionary); // $ExpectType AbcObject[]
    fp.sortBy(listIterator2, dictionary); // $ExpectType AbcObject[]
    fp.sortBy("a", dictionary); // $ExpectType AbcObject[]
    fp.sortBy({ a: 42 }, dictionary); // $ExpectType AbcObject[]
}

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

        result = _.orderBy(list, iteratees);
        result = _.orderBy(list, iteratees, orders);

        result = _.orderBy(numericDictionary, iteratees);
        result = _.orderBy(numericDictionary, iteratees, orders);

        result = _.orderBy(dictionary, iteratees);
        result = _.orderBy(dictionary, iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: _.LoDashImplicitArrayWrapper<SampleObject>;

        result = _(array).orderBy(iteratees);
        result = _(array).orderBy(iteratees, orders);

        result = _(list).orderBy(iteratees);
        result = _(list).orderBy(iteratees, orders);

        result = _(numericDictionary).orderBy(iteratees);
        result = _(numericDictionary).orderBy(iteratees, orders);

        result = _(dictionary).orderBy(iteratees);
        result = _(dictionary).orderBy(iteratees, orders);
    }

    {
        const iteratees: ((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>|Array<((value: SampleObject) => _.NotVoid)|string|_.PartialDeep<SampleObject>> = anything;
        let result: _.LoDashExplicitArrayWrapper<SampleObject>;

        result = _(array).chain().orderBy(iteratees);
        result = _(array).chain().orderBy(iteratees, orders);

        result = _(list).chain().orderBy(iteratees);
        result = _(list).chain().orderBy(iteratees, orders);

        result = _(numericDictionary).chain().orderBy(iteratees);
        result = _(numericDictionary).chain().orderBy(iteratees, orders);

        result = _(dictionary).chain().orderBy(iteratees);
        result = _(dictionary).chain().orderBy(iteratees, orders);
    }

    const list2: _.List<AbcObject> | null | undefined = anything;
    const dictionary2: _.Dictionary<AbcObject> | null | undefined = anything;
    const listIterator2 = (value: AbcObject) => 0;

    fp.orderBy(fp.identity, "asc", "bca"); // $ExpectType string[]
    fp.orderBy(fp.identity, true, "bca"); // $ExpectType string[]
    fp.orderBy(listIterator2, true, list2); // $ExpectType AbcObject[]
    fp.orderBy(listIterator2)(true)(list2); // $ExpectType AbcObject[]
    fp.orderBy("a", true, list2); // $ExpectType AbcObject[]
    fp.orderBy({ a: 42 }, true, list2); // $ExpectType AbcObject[]

    fp.orderBy(fp.identity, true, dictionary2); // $ExpectType AbcObject[]
    fp.orderBy(listIterator2, true, dictionary2); // $ExpectType AbcObject[]
    fp.orderBy("a", true, dictionary2); // $ExpectType AbcObject[]
    fp.orderBy({ a: 42 }, true, dictionary2); // $ExpectType AbcObject[]
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

    fp.now(); // $ExpectType number
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

    fp.after((a: string, b: number) => true, 42); // $ExpectType (a: string, b: number) => boolean
    fp.after((a: string, b: number) => true)(42); // $ExpectType (a: string, b: number) => boolean
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

    fp.ary(1, (a: string, b: number) => true); // $ExpectType (...args: any[]) => any
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

    fp.before((a: string, b: number) => true, 42); // $ExpectType (a: string, b: number) => boolean
    fp.before((a: string, b: number) => true)(42); // $ExpectType (a: string, b: number) => boolean
}

// _.bind
namespace TestBind {
    type SampleFunc = (a: number, b: string) => boolean;

    let func: SampleFunc = (a, b) => true;

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: SampleResult;

        result = _.bind(func, anything);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bind(func, anything, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

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

    fp.bind((a: string, b: number) => true, anything); // $ExpectType (...args: any[]) => any
    fp.bind((a: string, b: number) => true)(anything); // $ExpectType (...args: any[]) => any
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

    fp.bindAll("c", object); // $ExpectType SampleObject
    fp.bindAll(["b", "c"], object); // $ExpectType SampleObject
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

    fp.bindKey(object, "foo"); // $ExpectType (...args: any[]) => any
    fp.bindKey(object)("foo"); // $ExpectType (...args: any[]) => any
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
    curryResult0 = _(testCurryFn).curry().value()(1, 2, 3);
    curryResult2 = _(testCurryFn).curry().value()(1);

    const testCurry2 = (a: string, b: number, c: boolean): [string, number, boolean] => [a, b, c];
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

    fp.curry(testCurry2)("1", 2, true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry2)("1", 2)(true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry2)("1")(2, true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry2)("1")(2)(true); // $ExpectType [string, number, boolean]
    fp.curry(testCurry2)("1", 2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    fp.curry(testCurry2)("1")(2); // $ExpectType CurriedFunction1<boolean, [string, number, boolean]>
    fp.curry(testCurry2)("1"); // $ExpectType CurriedFunction2<number, boolean, [string, number, boolean]>
    fp.curry(testCurry2); // $ExpectType CurriedFunction3<string, number, boolean, [string, number, boolean]>

    // _.curryRight
    curryResult0 = _.curryRight(testCurryFn)(1, 2, 3);
    curryResult2 = _.curryRight(testCurryFn)(1);
    curryResult0 = _(testCurryFn).curryRight().value()(1, 2, 3);
    curryResult2 = _(testCurryFn).curryRight().value()(1);
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

    fp.curryRight(testCurry2)("1", 2, true); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry2)(true)("1", 2); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry2)(2, true)("1"); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry2)(true)(2)("1"); // $ExpectType [string, number, boolean]
    fp.curryRight(testCurry2)(2, true); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    fp.curryRight(testCurry2)(true)(2); // $ExpectType RightCurriedFunction1<string, [string, number, boolean]>
    fp.curryRight(testCurry2)(true); // $ExpectType RightCurriedFunction2<string, number, [string, number, boolean]>
    fp.curryRight(testCurry2); // $ExpectType RightCurriedFunction3<string, number, boolean, [string, number, boolean]>
}

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

    const result1 = fp.debounce(42, func);
    result1(1, "a"); // $ExpectType boolean
    result1.cancel(); // $ExpectType void
    result1.flush(); // $ExpectType void

    const result2 = fp.debounce(42)(func);
    result2(1, "a"); // $ExpectType boolean
    result2.cancel(); // $ExpectType void
    result2.flush(); // $ExpectType void
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

    fp.defer((a: number, b: string) => true); // $ExpectType number
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

    fp.delay(500, (a, b) => true); // $ExpectType number
    fp.delay(500)((a, b) => true); // $ExpectType number
}

// _.flip
namespace TestFlip {
    // TODO: fix - output arguments should be reversed
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

    fp.flip((a: string, b: number) => true); // $ExpectType (a: string, b: number) => boolean
}

// _.flow
// _.flowRight
{
    const fn1 = (n: number) => 0;
    const fn2 = (m: number, n: number) => 0;
    const fn3 = (a: number) => "";
    const fn4 = (a: string) => true;

    _.flow(fn2, fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(fn2, fn1, fn1, fn1, fn1, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    _.flow(fn2, fn1, fn3, fn4); // $ExpectType (a1: number, a2: number) => boolean
    _.flow([fn2, fn1, fn3, fn4]); // $ExpectType (...args: any[]) => any

    _(fn2).flow(fn1); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn2).flow(fn1, fn1); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn2).flow(fn1, fn1, fn1); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn2).flow([fn1, fn1, fn1]); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => any>

    _.chain(fn2).flow(fn1); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn2).flow(fn1, fn1); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn2).flow(fn1, fn1, fn1); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn2).flow([fn1, fn1, fn1]); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => any>

    fp.flow(fn1, fn1); // $ExpectType (a1: number) => number
    fp.flow(fn1, fn3); // $ExpectType (a1: number) => string
    fp.flow(fn2, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    fp.flow(fn2, fn1, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    fp.flow(fn2, fn1, fn1, fn1, fn1, fn1, fn1); // $ExpectType (a1: number, a2: number) => number
    fp.flow(fn2, fn3); // $ExpectType (a1: number, a2: number) => string
    fp.flow(fn2, fn3, fn4); // $ExpectType (a1: number, a2: number) => boolean
    fp.flow(fn2, fn1, fn3, fn4); // $ExpectType (a1: number, a2: number) => boolean
    fp.flow([fn2, fn1, fn3, fn4]); // $ExpectType (...args: any[]) => any

    _.flowRight(fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight(fn1, fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    _.flowRight([fn1, fn1, fn1, fn2]); // $ExpectType (...args: any[]) => any

    _(fn1).flowRight(fn2); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn1).flowRight(fn1, fn2); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn1).flowRight(fn1, fn1, fn2); // $ExpectType LoDashImplicitWrapper<(a1: number, a2: number) => number>
    _(fn1).flowRight([fn1, fn1, fn2]); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => any>

    _.chain(fn1).flowRight(fn2); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn1).flowRight(fn1, fn2); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn1).flowRight(fn1, fn1, fn2); // $ExpectType LoDashExplicitWrapper<(a1: number, a2: number) => number>
    _.chain(fn1).flowRight([fn1, fn1, fn2]); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => any>

    fp.flowRight(fn1, fn1); // $ExpectType (a1: number) => number
    fp.flowRight(fn3, fn1); // $ExpectType (a1: number) => string
    fp.flowRight(fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    fp.flowRight(fn1, fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    fp.flowRight(fn1, fn1, fn1, fn1, fn1, fn1, fn2); // $ExpectType (a1: number, a2: number) => number
    fp.flowRight(fn3, fn2); // $ExpectType (a1: number, a2: number) => string
    fp.flowRight(fn4, fn3, fn2); // $ExpectType (a1: number, a2: number) => boolean
    fp.flowRight(fn4, fn3, fn1, fn2); // $ExpectType (a1: number, a2: number) => boolean
    fp.flowRight([fn4, fn3, fn1, fn2]); // $ExpectType (...args: any[]) => any
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

    const result2 = fp.memoize((a1: string, a2: number) => true);
    result2("a", 1); // $ExpectType boolean
    result2.cache.delete("key"); // $ExpectType boolean
    result2.cache.get("key"); // $ExpectType any
    result2.cache.has("key"); // $ExpectType boolean
    result2.cache.set("key", "value"); // $ExpectType Dictionary<any>
    result2.cache.clear(); // $ExpectType void
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

    fp.overArgs(func1, transform1);
    fp.overArgs(func1)(transform1);
    fp.overArgs(func1, [transform1]);
    fp.overArgs(func2)([transform1, transform2]);
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

    fp.negate((a1: number, a2: number) => true); // $ExpectType (a1: number, a2: number) => boolean
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

    fp.once((a: string, b: number) => true); // $ExpectType (a: string, b: number) => boolean
}

//_.rearg
{
    const testReargFn = (a: string, b: string, c: string) => [a, b, c];
    _.rearg(testReargFn, 2, 0, 1); // $ExpectType (...args: any[]) => any
    _.rearg(testReargFn, [2, 0, 1]); // $ExpectType (...args: any[]) => any
    _(testReargFn).rearg(2, 0, 1); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => any>
    _(testReargFn).rearg([2, 0, 1]); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => any>
    _.chain(testReargFn).rearg(2, 0, 1); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => any>
    _.chain(testReargFn).rearg([2, 0, 1]); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => any>

    fp.rearg([2, 0, 1], testReargFn); // $ExpectType (...args: any[]) => any
    fp.rearg([2, 0, 1])(testReargFn); // $ExpectType (...args: any[]) => any
}

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

    fp.rest((a, b) => true); // $ExpectType (...args: any[]) => any
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

    fp.spread((a) => true); // $ExpectType (...args: any[]) => boolean
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

    const result1 = fp.throttle(42, func);
    result1(1, "a"); // $ExpectType boolean
    result1.cancel(); // $ExpectType void
    result1.flush(); // $ExpectType void

    const result2 = fp.throttle(42)(func);
    result2(1, "a"); // $ExpectType boolean
    result2.cancel(); // $ExpectType void
    result2.flush(); // $ExpectType void
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

    fp.unary((a: string, b: number) => true); // $ExpectType (arg1: string) => boolean
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

    const value1: AbcObject = { a: 1, b: "", c: true };
    const wrapper1 = (a: AbcObject, b: number, c: string) => true;

    fp.wrap(wrapper1, value1); // $ExpectType (...args: any[]) => boolean
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

    fp.castArray(42); // $ExpectType number[]
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

    fp.clone(42); // $ExpectType 42
    fp.clone([""]); // $ExpectType string[]
    fp.clone({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
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

    fp.cloneDeep(42); // $ExpectType 42
    fp.cloneDeep([""]); // $ExpectType string[]
    fp.cloneDeep({ a: { b: 42 } }); // $ExpectType { a: { b: number; }; }
}

// _.cloneDeepWith
{
    const customizer = (x: any) => "";

    _.cloneDeepWith(42, customizer); // $ExpectType any
    _(42).cloneDeepWith(customizer); // $ExpectType any
    _(42).chain().cloneDeepWith(customizer); // $ExpectType LoDashExplicitWrapper<any>

    _.cloneDeepWith({a: {b: 42}}, customizer); // $ExpectType any

    fp.cloneDeepWith((x) => "", 42); // $ExpectType any
    fp.cloneDeepWith((x) => "")(42); // $ExpectType any
    fp.cloneDeepWith((x) => "", [42]); // $ExpectType any
    fp.cloneDeepWith((x) => "", { a: { b: 42 } }); // $ExpectType any
}

// _.cloneWith
namespace TestCloneWith {
    {
        const customizer = (x: number) => "";

        _.cloneWith(42, customizer); // $ExpectType string
        _(42).cloneWith(customizer); // $ExpectType string
        _.chain(42).cloneWith<string>(customizer); // $ExpectType LoDashExplicitWrapper<string>

        fp.cloneWith(customizer, 42); // $ExpectType string
        fp.cloneWith(customizer)(42); // $ExpectType string
    }

    {
        const customizer = (x: number): string | undefined => ""
        _.cloneWith(42, customizer); // string | 42
        _(42).cloneWith(customizer); // string | 42
        _.chain(42).cloneWith(customizer); // string | 42

        // Note: TS 2.5 fails without explicit <42, string>
        fp.cloneWith<42, string>(customizer, 42); // $ExpectType string | 42
        fp.cloneWith<42, string>(customizer)(42); // $ExpectType string | 42
    }
}

// _.conforms
namespace TestConforms {
    let result: boolean = _.conforms({foo: (v: string) => false})({foo: "foo"});
    let result2: boolean = _.conforms({})({foo: "foo"});

    fp.conforms({foo: (v: string) => false})({foo: "foo"}); // $ExpectType boolean
}

// _.conformsTo
namespace TestConformsTo {
    let result: boolean = _.conformsTo({foo: "foo"}, {foo: (v: string) => false});
    let result2: boolean = _.conformsTo({}, {foo: (v: string) => false});

    fp.conformsTo({foo: (v: string) => false}, {foo: "foo"}); // $ExpectType boolean
    fp.conformsTo({foo: (v: string) => false})({foo: "foo"}); // $ExpectType boolean
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

    fp.eq(anything, anything); // $ExpectType boolean
    fp.eq(anything)(anything); // $ExpectType boolean
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

    fp.gt(anything, anything); // $ExpectType boolean
    fp.gt(anything)(anything); // $ExpectType boolean
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

    fp.gte(anything, anything); // $ExpectType boolean
    fp.gte(anything)(anything); // $ExpectType boolean
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

        if (fp.isArguments(value)) {
            const result: IArguments = value;
        } else {
            value; // $ExpectType number
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

    fp.isArguments(anything); // $ExpectType boolean
}

// _.isArray
namespace TestIsArray {
    {
        let value: number|string[]|boolean[] = anything;

        if (_.isArray(value)) {
            const result: string[] | boolean[] = value;
        }
        else {
            value; // $ExpectType number
        }

        if (fp.isArray(value)) {
            const result: string[] | boolean[] = value;
        } else {
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

    fp.isArray(anything); // $ExpectType boolean
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

        if (fp.isArrayBuffer(value)) {
            value; // $ExpectType ArrayBuffer
        } else {
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

    fp.isArrayBuffer(anything); // $ExpectType boolean
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

        if (fp.isArrayLike(value)) {
            const result: string | string[] | { [index: number]: boolean; length: number; } | [number, boolean] = value;
        } else {
            const result: number | { length: string; } | { a: string; } | null | undefined = value;
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

        if (fp.isArrayLike(value)) {
            value; // $ExpectType boolean[]
        } else {
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

        if (fp.isArrayLike(value)) {
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

        if (fp.isArrayLike(value)) {
            const result: { a: string, length: number } = value;
        } else {
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

        if (fp.isArrayLike(value)) {
            value; // $ExpectType any
        } else {
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

    fp.isArrayLike(anything); // $ExpectType boolean
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

        if (fp.isArrayLikeObject(value)) {
            const result: string[] | [number, boolean] | { [index: number]: boolean; length: number; } =  value;
        } else {
            const result: string | number | { length: string; } | { a: string; } | null | undefined = value;
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

        if (fp.isArrayLikeObject(value)) {
            const result: boolean[] = value;
        } else {
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

        if (fp.isArrayLikeObject(value)) {
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

        if (fp.isArrayLikeObject(value)) {
            const result: { a: string, length: number } = value;
        } else {
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

        if (fp.isArrayLikeObject(value)) {
            value; // $ExpectType any
        } else {
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

    fp.isArrayLikeObject(anything); // $ExpectType boolean
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

        if (fp.isBoolean(value)) {
            const result: boolean = value;
        } else {
            value; // $ExpectType number
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

    const value: number | boolean = anything;
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

    fp.isBuffer(anything); // $ExpectType boolean
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

        if (fp.isDate(value)) {
            const date: Date = value;
        } else {
            value; // $ExpectType number
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

    fp.isDate(anything); // $ExpectType boolean
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

    fp.isElement(anything); // $ExpectType boolean
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

    fp.isEmpty(anything); // $ExpectType boolean
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

    fp.isEqual(anything, anything); // $ExpectType boolean
    fp.isEqual(anything)(anything); // $ExpectType boolean
    fp.equals(anything)(anything); // $ExpectType boolean
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

    fp.isEqualWith(customizer, anything, anything); // $ExpectType boolean
    fp.isEqualWith(customizer)(anything)(anything); // $ExpectType boolean
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

        if (fp.isError(value)) {
            value; // $ExpectType Error
        } else {
            value; // $ExpectType number
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

        if (fp.isError(value)) {
            value; // $ExpectType CustomError
        } else {
            value; // $ExpectType number
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

    fp.isError(anything); // $ExpectType boolean
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

    fp.isFinite(anything); // $ExpectType boolean
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

    fp.isFunction(anything); // $ExpectType boolean
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

    fp.isInteger(anything); // $ExpectType boolean
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

    fp.isLength(anything); // $ExpectType boolean
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

        if (fp.isMap(value)) {
            const result: Map<string, number> = value;
        } else {
            const result: number = value;
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

    fp.isMap(anything); // $ExpectType boolean
}

// _.isMatch
namespace TestIsMatch {
    _.isMatch({}, {}); // $ExpectType boolean
    _({}).isMatch({}); // $ExpectType boolean
    _.chain({}).isMatch({}); // $ExpectType LoDashExplicitWrapper<boolean>

    const source: AbcObject = { a: 1, b: "", c: true };
    fp.isMatch(source, {}); // $ExpectType boolean
    fp.isMatch(source)({}); // $ExpectType boolean
}

// _.isMatchWith
namespace TestIsMatchWith {
    let testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string|symbol) => true;

    _.isMatchWith({}, {}, testIsMatchCustiomizerFn); // $ExpectType boolean
    _({}).isMatchWith({}, testIsMatchCustiomizerFn); // $ExpectType boolean
    _.chain({}).isMatchWith({}, testIsMatchCustiomizerFn); // $ExpectType LoDashExplicitWrapper<boolean>

    fp.isMatchWith(testIsMatchCustiomizerFn, {}, {}); // $ExpectType boolean
    fp.isMatchWith(testIsMatchCustiomizerFn)({})({}); // $ExpectType boolean
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

    fp.isNaN(anything); // $ExpectType boolean
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

        if (fp.isNative(value)) {
            value; // $ExpectType () => void
        } else {
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

    fp.isNative(anything); // $ExpectType boolean
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

    fp.isNil(anything); // $ExpectType boolean
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

    fp.isNull(anything); // $ExpectType boolean
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

        if (fp.isNumber(value)) {
            const result: number = value;
        } else {
            const result: string = value;
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

    fp.isNumber(anything); // $ExpectType boolean
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

    fp.isObject(anything); // $ExpectType boolean
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

    fp.isObjectLike(anything); // $ExpectType boolean
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

    fp.isPlainObject(anything); // $ExpectType boolean
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

        if (fp.isRegExp(value)) {
            const result: RegExp = value;
        } else {
            const result: number = value;
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

    fp.isRegExp(anything); // $ExpectType boolean
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

    fp.isSafeInteger(anything); // $ExpectType boolean
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

        if (fp.isSet(value)) {
            const result: Set<string> = value;
        } else {
            const result: number = value;
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

    fp.isSet(anything); // $ExpectType boolean
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

        if (fp.isString(value)) {
            const result: string = value;
        } else {
            const result: number = value;
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

    fp.isString(anything); // $ExpectType boolean
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

    fp.isSymbol(anything); // $ExpectType boolean
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

    fp.isTypedArray([]); // $ExpectType boolean
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

    fp.isUndefined(anything); // $ExpectType boolean
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

        if (fp.isWeakMap(value)) {
            const result: WeakMap<object, number> = value;
        } else {
            const result: number = value;
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

    fp.isWeakMap(anything); // $ExpectType boolean
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

        if (fp.isWeakSet(value)) {
            const result: WeakSet<object> = value;
        } else {
            const result: number = value;
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

    fp.isWeakSet(anything); // $ExpectType boolean
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

    fp.lt(anything, anything); // $ExpectType boolean
    fp.lt(anything)(anything); // $ExpectType boolean
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

    fp.lte(anything, anything); // $ExpectType boolean
    fp.lte(anything)(anything); // $ExpectType boolean
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

        result = _.toArray(array);
        result = _.toArray(list);
        result = _.toArray(dictionary);
        result = _.toArray(numericDictionary);

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
        result = _(list).toArray();
        result = _(dictionary).toArray();
        result = _(numericDictionary).toArray();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(array).chain().toArray();
        result = _(list).chain().toArray();
        result = _(dictionary).chain().toArray();
        result = _(numericDictionary).chain().toArray();
    }

    fp.toArray(""); // $ExpectType string[]
    fp.toArray(array); // $ExpectType AbcObject[]
    fp.toArray(list); // $ExpectType AbcObject[]
    fp.toArray(dictionary); // $ExpectType AbcObject[]
    fp.toArray(numericDictionary); // $ExpectType AbcObject[]
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

    fp.toPlainObject(true); // $ExpectType any
    fp.toPlainObject(1); // $ExpectType any
    fp.toPlainObject("a"); // $ExpectType any
    fp.toPlainObject([]); // $ExpectType any
    fp.toPlainObject({}); // $ExpectType any
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

    fp.toFinite(true); // $ExpectType number
    fp.toFinite(1); // $ExpectType number
    fp.toFinite("3.2"); // $ExpectType number
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

    fp.toInteger(true); // $ExpectType number
    fp.toInteger(1); // $ExpectType number
    fp.toInteger("3.2"); // $ExpectType number
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

    fp.toLength(true); // $ExpectType number
    fp.toLength(1); // $ExpectType number
    fp.toLength("a"); // $ExpectType number
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

    fp.toNumber(true); // $ExpectType number
    fp.toNumber(1); // $ExpectType number
    fp.toNumber("a"); // $ExpectType number
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

    fp.toSafeInteger(true); // $ExpectType number
    fp.toSafeInteger(1); // $ExpectType number
    fp.toSafeInteger("a"); // $ExpectType number
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

    fp.add(1, 1); // $ExpectType number
    fp.add(1)(1); // $ExpectType number
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

    fp.ceil(6.004); // $ExpectType number
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

    fp.divide(6, 4); // $ExpectType number
    fp.divide(6)(4); // $ExpectType number
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

    fp.floor(4.006); // $ExpectType number
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

    fp.max(list); // $ExpectType number | undefined
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

    const listIterator2 = (value: number) => 0;
    fp.maxBy(listIterator2, list); // $ExpectType number | undefined
    fp.maxBy(listIterator2)(list); // $ExpectType number | undefined
    fp.maxBy((value) => value.a, list2); // $ExpectType AbcObject | undefined
    fp.maxBy("a", list2); // $ExpectType AbcObject | undefined
    fp.maxBy({ a: 42 }, list2); // $ExpectType AbcObject | undefined
}

// _.mean
namespace TestMean {
    let array: number[] = [];

    let result: number;

    result = _.mean(array);

    result = _(array).mean();

    fp.mean(array); // $ExpectType number
}

// _.meanBy
{
    let array: AbcObject[] = [];

    let result: number;

    result = _.meanBy(array, (x) => x.a);
    result = _.meanBy(array, 'a');

    _(array).meanBy((x) => x.a); // $ExpectType number
    _.chain(array).meanBy((x) => x.a); // $ExpectType LoDashExplicitWrapper<number>

    fp.meanBy((x) => x.a, array); // $ExpectType number
    fp.meanBy((x: AbcObject) => x.a)(array); // $ExpectType number
    fp.meanBy("a", array); // $ExpectType number
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

    fp.min(list); // $ExpectType number | undefined
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

    const listIterator2 = (value: number) => 0;
    fp.minBy(listIterator2, list); // $ExpectType number | undefined
    fp.minBy(listIterator2)(list); // $ExpectType number | undefined
    fp.minBy((value) => value.a, list2); // $ExpectType AbcObject | undefined
    fp.minBy("a", list2); // $ExpectType AbcObject | undefined
    fp.minBy({ a: 42 }, list2); // $ExpectType AbcObject | undefined
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

    fp.multiply(6, 4); // $ExpectType number
    fp.multiply(6)(4); // $ExpectType number
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

    fp.round(4.006); // $ExpectType number
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

    fp.sum(list); // $ExpectType number
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

    fp.sumBy(listIterator, list); // $ExpectType number
    fp.sumBy(listIterator)(list); // $ExpectType number
    fp.sumBy("age", objectList); // $ExpectType number
    fp.sumBy("age")(objectList); // $ExpectType number
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

     fp.subtract(3, 2); // $ExpectType number
     fp.subtract(3)(2); // $ExpectType number
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

    fp.clamp(2, 4, 3); // $ExpectType number
    fp.clamp(2)(4)(3); // $ExpectType number
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

    fp.inRange(2, 4, 3); // $ExpectType boolean
    fp.inRange(2)(4)(3); // $ExpectType boolean
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

    fp.random(1, 2); // $ExpectType number
    fp.random(1)(2); // $ExpectType number
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

    fp.assign(obj, s1); // $ExpectType Obj & S1
    fp.assign(obj)(s1); // $ExpectType Obj & S1
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

    fp.assignWith(customizer, obj, s1); // $ExpectType Obj & S1
    fp.assignWith(customizer)(obj)(s1); // $ExpectType Obj & S1
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

    fp.assignIn(obj, s1); // $ExpectType Obj & S1
    fp.assignIn(obj)(s1); // $ExpectType Obj & S1
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

    fp.assignInWith(customizer, obj, s1); // $ExpectType Obj & S1
    fp.assignInWith(customizer)(obj)(s1); // $ExpectType Obj & S1
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
    {
        const result: SampleProto = fp.create(prototype);
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

    fp.defaults(obj, s1); // $ExpectType Obj & S1
    fp.defaults(obj)(s1); // $ExpectType Obj & S1
}

//_.defaultsDeep
{
    const testDefaultsDeepObject = { 'user': { 'name': 'barney' } };
    const testDefaultsDeepSource = { 'user': { 'name': 'fred', 'age': 36 } };
    _.defaultsDeep(testDefaultsDeepObject, testDefaultsDeepSource); // $ExpectType any
    _(testDefaultsDeepObject).defaultsDeep(testDefaultsDeepSource).value(); // $ExpectType any

    fp.defaultsDeep(testDefaultsDeepSource, testDefaultsDeepObject); // $ExpectType any
    fp.defaultsDeep(testDefaultsDeepSource)(testDefaultsDeepObject); // $ExpectType any
}

// _.entries
namespace TestEntries {
    const dictionary: _.Dictionary<number> = anything;
    const numericDictionary: _.NumericDictionary<number> = anything;
    const abcObject: AbcObject = anything;

    {
        _.entries(dictionary); // $ExpectType [string, number][]
        _.entries(numericDictionary); // $ExpectType [string, number][]
        _.entries(abcObject); // $ExpectType [string, any][]
    }

    {
        _(dictionary).entries(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(numericDictionary).entries(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(abcObject).entries(); // $ExpectType LoDashImplicitWrapper<[string, any][]>
    }

    {
        _(dictionary).chain().entries(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(numericDictionary).chain().entries(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(abcObject).chain().entries(); // $ExpectType LoDashExplicitWrapper<[string, any][]>
    }

    const object2: _.Dictionary<AbcObject> = {};
    fp.entries(object2); // $ExpectType [string, AbcObject][]
}

// _.entriesIn
namespace TestEntriesIn {
    const dictionary: _.Dictionary<number> = anything;
    const numericDictionary: _.NumericDictionary<number> = anything;
    const abcObject: AbcObject = anything;

    {
        _.entriesIn(dictionary); // $ExpectType [string, number][]
        _.entriesIn(numericDictionary); // $ExpectType [string, number][]
        _.entriesIn(abcObject); // $ExpectType [string, any][]
    }

    {
        _(dictionary).entriesIn(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(numericDictionary).entriesIn(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(abcObject).entriesIn(); // $ExpectType LoDashImplicitWrapper<[string, any][]>
    }

    {
        _(dictionary).chain().entriesIn(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(numericDictionary).chain().entriesIn(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(abcObject).chain().entriesIn(); // $ExpectType LoDashExplicitWrapper<[string, any][]>
    }

    const object2: _.Dictionary<AbcObject> = {};
    fp.entriesIn(object2); // $ExpectType [string, AbcObject][]
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

    fp.extend(obj, s1); // $ExpectType Obj & S1
    fp.extend(obj)(s1); // $ExpectType Obj & S1
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

    fp.extendWith(customizer, obj, s1); // $ExpectType Obj & S1
    fp.extendWith(customizer)(obj)(s1); // $ExpectType Obj & S1
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

    const predicateFn2 = (value: number) => true;
    fp.findKey(predicateFn2, { a: 1 }); // $ExpectType string | undefined
    fp.findKey(predicateFn2)({ a: 1 }); // $ExpectType string | undefined
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

    const predicateFn2 = (value: number) => true;
    fp.findLastKey(predicateFn2, { a: 1 }); // $ExpectType string | undefined
    fp.findLastKey(predicateFn2)({ a: 1 }); // $ExpectType string | undefined
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

    const dictionaryIterator2 = (value: number): void => {};
    const objectIterator2 = (element: number | string | boolean): void => {};

    fp.forIn(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forIn(dictionaryIterator2)(dictionary); // $ExpectType Dictionary<number>
    fp.forIn(dictionaryIterator2, nilDictionary); // $ExpectType Dictionary<number> | null | undefined
    fp.forIn(dictionaryIterator2)(nilDictionary); // $ExpectType Dictionary<number> | null | undefined

    fp.forIn(objectIterator2, object); // $ExpectType SampleObject
    fp.forIn(objectIterator2)(object); // $ExpectType SampleObject
    fp.forIn(objectIterator2, nilObject); // $ExpectType SampleObject | null | undefined
    fp.forIn(objectIterator2)(nilObject); // $ExpectType SampleObject | null | undefined
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

    const dictionaryIterator2 = (value: number): void => {};
    const objectIterator2 = (element: number | string | boolean): void => {};

    fp.forInRight(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forInRight(dictionaryIterator2)(dictionary); // $ExpectType Dictionary<number>
    fp.forInRight(dictionaryIterator2, nilDictionary); // $ExpectType Dictionary<number> | null | undefined
    fp.forInRight(dictionaryIterator2)(nilDictionary); // $ExpectType Dictionary<number> | null | undefined

    fp.forInRight(objectIterator2, object); // $ExpectType SampleObject
    fp.forInRight(objectIterator2)(object); // $ExpectType SampleObject
    fp.forInRight(objectIterator2, nilObject); // $ExpectType SampleObject | null | undefined
    fp.forInRight(objectIterator2)(nilObject); // $ExpectType SampleObject | null | undefined
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

    const dictionaryIterator2 = (value: number): void => {};
    const objectIterator2 = (element: number | string | boolean): void => {};

    fp.forOwn(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forOwn(dictionaryIterator2)(dictionary); // $ExpectType Dictionary<number>
    fp.forOwn(dictionaryIterator2, nilDictionary); // $ExpectType Dictionary<number> | null | undefined
    fp.forOwn(dictionaryIterator2)(nilDictionary); // $ExpectType Dictionary<number> | null | undefined

    fp.forOwn(objectIterator2, object); // $ExpectType SampleObject
    fp.forOwn(objectIterator2)(object); // $ExpectType SampleObject
    fp.forOwn(objectIterator2, nilObject); // $ExpectType SampleObject | null | undefined
    fp.forOwn(objectIterator2)(nilObject); // $ExpectType SampleObject | null | undefined
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

    const dictionaryIterator2 = (value: number): void => {};
    const objectIterator2 = (element: number | string | boolean): void => {};

    fp.forOwnRight(dictionaryIterator2, dictionary); // $ExpectType Dictionary<number>
    fp.forOwnRight(dictionaryIterator2)(dictionary); // $ExpectType Dictionary<number>
    fp.forOwnRight(dictionaryIterator2, nilDictionary); // $ExpectType Dictionary<number> | null | undefined
    fp.forOwnRight(dictionaryIterator2)(nilDictionary); // $ExpectType Dictionary<number> | null | undefined

    fp.forOwnRight(objectIterator2, object); // $ExpectType SampleObject
    fp.forOwnRight(objectIterator2)(object); // $ExpectType SampleObject
    fp.forOwnRight(objectIterator2, nilObject); // $ExpectType SampleObject | null | undefined
    fp.forOwnRight(objectIterator2)(nilObject); // $ExpectType SampleObject | null | undefined
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

    fp.functions(object); // $ExpectType string[]
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

    fp.functionsIn(object); // $ExpectType string[]
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

    fp.get(Symbol.iterator, []); // $ExpectType any
    fp.get(Symbol.iterator)([]); // $ExpectType any
    fp.get([Symbol.iterator], []); // $ExpectType any
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

    fp.has("a", object); // $ExpectType boolean
    fp.has("a")(object); // $ExpectType boolean
    fp.has(["a", 42])(object); // $ExpectType boolean
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

    fp.hasIn("a", object); // $ExpectType boolean
    fp.hasIn("a")(object); // $ExpectType boolean
    fp.hasIn(["a", 42])(object); // $ExpectType boolean
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

    fp.invert({}); // $ExpectType Dictionary<string>
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

    fp.invertBy(stringIterator, "foo"); // $ExpectType Dictionary<string[]>
    fp.invertBy(stringIterator)("foo"); // $ExpectType Dictionary<string[]>
    fp.invertBy(listIterator)(list); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(list); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(list); // $ExpectType Dictionary<string[]>
    fp.invertBy(listIterator)(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(dictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy(listIterator)(numericDictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy("a")(numericDictionary); // $ExpectType Dictionary<string[]>
    fp.invertBy({ a: 1 })(numericDictionary); // $ExpectType Dictionary<string[]>
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

    fp.keys({}); // $ExpectType string[]
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

    fp.keysIn({}); // $ExpectType string[]
}

// _.mapKeys
namespace TestMapKeys {
    let array: AbcObject[] | null | undefined = [] as any;
    let list: _.List<AbcObject>| null | undefined = [] as any;
    let dictionary: _.Dictionary<AbcObject> | null | undefined = anything;
    let numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
    let abcObject: AbcObject = anything;

    let listIterator = (value: AbcObject, index: number, collection: _.List<AbcObject>) => "";
    let dictionaryIterator = (value: AbcObject, key: string, collection: _.Dictionary<AbcObject>) => "";
    let numericDictionaryIterator = (value: AbcObject, key: string, collection: _.NumericDictionary<AbcObject>) => "";
    let abcObjectIterator = (value: AbcObject[keyof AbcObject], key: string, collection: AbcObject) => "";

    {
        _.mapKeys(array); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(array, listIterator); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(array, ''); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(array, {}); // $ExpectType Dictionary<AbcObject>

        _.mapKeys(list); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(list, listIterator); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(list, ''); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(list, {}); // $ExpectType Dictionary<AbcObject>

        _.mapKeys(dictionary); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(dictionary, dictionaryIterator); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(dictionary, ''); // $ExpectType Dictionary<AbcObject>
        _.mapKeys(dictionary, {}); // $ExpectType Dictionary<AbcObject>

        /* Broken in TS 2.4
        _.mapKeys(numericDictionary); // Dictionary<AbcObject>
        _.mapKeys(numericDictionary, numericDictionaryIterator); // Dictionary<AbcObject>
        _.mapKeys(numericDictionary, ''); // Dictionary<AbcObject>
        _.mapKeys(numericDictionary, {}); // Dictionary<AbcObject>
        */
    }

    {
        _.mapKeys(abcObject); // $ExpectType Dictionary<string | number | boolean>
        _.mapKeys(abcObject, abcObjectIterator); // $ExpectType Dictionary<string | number | boolean>
        _.mapKeys(abcObject, ''); // $ExpectType Dictionary<string | number | boolean>
    }

    {
        _(array).mapKeys(); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(array).mapKeys(listIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(array).mapKeys(''); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(array).mapKeys({}); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>

        _(list).mapKeys(); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(list).mapKeys(listIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(list).mapKeys(''); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(list).mapKeys({}); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>

        _(dictionary).mapKeys(); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).mapKeys(dictionaryIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).mapKeys(''); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).mapKeys({}); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>

        /* Broken in TS 2.4
        _(numericDictionary).mapKeys(); // LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).mapKeys(numericDictionaryIterator); // LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).mapKeys(''); // LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).mapKeys({}); // LoDashImplicitWrapper<Dictionary<AbcObject>>
        */
    }

    {
        _(abcObject).mapKeys(); // $ExpectType LoDashImplicitWrapper<Dictionary<string | number | boolean>>
        _(abcObject).mapKeys(abcObjectIterator); // $ExpectType LoDashImplicitWrapper<Dictionary<string | number | boolean>>
        _(abcObject).mapKeys(''); // $ExpectType LoDashImplicitWrapper<Dictionary<string | number | boolean>>
    }

    {
        _(array).chain().mapKeys(); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(array).chain().mapKeys(listIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(array).chain().mapKeys(''); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(array).chain().mapKeys({}); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>

        _(list).chain().mapKeys(); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(list).chain().mapKeys(listIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(list).chain().mapKeys(''); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(list).chain().mapKeys({}); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>

        _(dictionary).chain().mapKeys(); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).chain().mapKeys(dictionaryIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).chain().mapKeys(''); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(dictionary).chain().mapKeys({}); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>

        /* Broken in TS 2.4
        _(numericDictionary).chain().mapKeys(); // LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).chain().mapKeys(numericDictionaryIterator); // LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).chain().mapKeys(''); // LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).chain().mapKeys({}); // LoDashExplicitWrapper<Dictionary<AbcObject>>
        */
    }

    {
        _(abcObject).chain().mapKeys(); // $ExpectType LoDashExplicitWrapper<Dictionary<string | number | boolean>>
        _(abcObject).chain().mapKeys(abcObjectIterator); // $ExpectType LoDashExplicitWrapper<Dictionary<string | number | boolean>>
        _(abcObject).chain().mapKeys(''); // $ExpectType LoDashExplicitWrapper<Dictionary<string | number | boolean>>
    }

    const indexIterator = (index: number) => index + 1;
    const keyIterator = (key: string) => "_" + key;
    fp.mapKeys(indexIterator, array); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(indexIterator)(array); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(indexIterator, list); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(keyIterator)(dictionary); // $ExpectType Dictionary<AbcObject>
    fp.mapKeys(keyIterator)(abcObject); // $ExpectType Dictionary<string | number | boolean>
}

// _.mapValues
{
    const dictionary: _.Dictionary<AbcObject> | null | undefined = anything;
    const numericDictionary: _.NumericDictionary<AbcObject> | null | undefined = anything;
    const abcObject: AbcObject = anything;
    const abcObjectOrNull: AbcObject | null = anything;
    const key: string = anything;

    {
        // $ExpectType NumericDictionary<AbcObject>
        _.mapValues("foo", (char, index, str) => {
            char; // $ExpectType string
            index; // $ExpectType number
            str; // $ExpectType string
            return abcObject;
        });

        // $ExpectType Dictionary<string>
        _.mapValues(dictionary, (value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return "";
        });

        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        // $ExpectType Dictionary<string>
        _.mapValues(numericDictionary, (value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
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
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _.mapValues(numericDictionary, {}); // $ExpectType Dictionary<boolean>
        _.mapValues(abcObject, {}); // $ExpectType { a: boolean; b: boolean; c: boolean; }

        _.mapValues(dictionary, "a"); // $ExpectType Dictionary<number>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _.mapValues(numericDictionary, "a"); // $ExpectType Dictionary<number>

        _.mapValues(abcObject, key); // $ExpectType { a: any; b: any; c: any; }
        _.mapValues(dictionary, key); // $ExpectType Dictionary<any>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _.mapValues(numericDictionary, key); // $ExpectType Dictionary<any>

        _.mapValues("a"); // $ExpectType NumericDictionary<string>
        _.mapValues(dictionary); // $ExpectType Dictionary<AbcObject>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _.mapValues(numericDictionary); // $ExpectType Dictionary<AbcObject>
        _.mapValues(abcObject); // $ExpectType AbcObject
        _.mapValues(abcObjectOrNull); // $ExpectType Partial<AbcObject>
    }

    {
        // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject>>
        _("foo").mapValues((char, index, str) => {
            char; // $ExpectType string
            index; // $ExpectType number
            str; // $ExpectType string
            return abcObject;
        });

        // $ExpectType LoDashImplicitWrapper<Dictionary<string>>
        _(dictionary).mapValues((value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return "";
        });

        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        // $ExpectType LoDashImplicitWrapper<Dictionary<string>>
        _(numericDictionary).mapValues((value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return "";
        });

        // $ExpectType LoDashImplicitWrapper<{ a: string; b: string; c: string; }>
        _(abcObject).mapValues((value, key, collection) => {
            value;  // $ExpectType string | number | boolean
            key; // $ExpectType string
            collection; // $ExpectType AbcObject
            return "";
        });

        _(dictionary).mapValues({}); // $ExpectType LoDashImplicitWrapper<Dictionary<boolean>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).mapValues({}); // $ExpectType LoDashImplicitWrapper<Dictionary<boolean>>
        _(abcObject).mapValues({}); // $ExpectType LoDashImplicitWrapper<{ a: boolean; b: boolean; c: boolean; }>

        _(dictionary).mapValues("a"); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).mapValues("a"); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>

        _(abcObject).mapValues(key); // $ExpectType LoDashImplicitWrapper<{ a: any; b: any; c: any; }>
        _(dictionary).mapValues(key); // $ExpectType LoDashImplicitWrapper<Dictionary<any>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).mapValues(key); // $ExpectType LoDashImplicitWrapper<Dictionary<any>>

        _("a").mapValues(); // $ExpectType LoDashImplicitWrapper<NumericDictionary<string>>
        _(dictionary).mapValues(); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).mapValues(); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(abcObject).mapValues(); // $ExpectType LoDashImplicitWrapper<AbcObject>
        _(abcObjectOrNull).mapValues(); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    }

    {
        // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject>>
        _("foo").chain().mapValues((char, index, str) => {
            char; // $ExpectType string
            index; // $ExpectType number
            str; // $ExpectType string
            return abcObject;
        });

        // $ExpectType LoDashExplicitWrapper<Dictionary<string>>
        _(dictionary).chain().mapValues((value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return "";
        });

        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        // $ExpectType LoDashExplicitWrapper<Dictionary<string>>
        _(numericDictionary).chain().mapValues((value, key, collection) => {
            value;  // $ExpectType AbcObject
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<AbcObject>
            return "";
        });

        // $ExpectType LoDashExplicitWrapper<{ a: string; b: string; c: string; }>
        _(abcObject).chain().mapValues((value, key, collection) => {
            value;  // $ExpectType string | number | boolean
            key; // $ExpectType string
            collection; // $ExpectType AbcObject
            return "";
        });

        _(dictionary).chain().mapValues({}); // $ExpectType LoDashExplicitWrapper<Dictionary<boolean>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).chain().mapValues({}); // $ExpectType LoDashExplicitWrapper<Dictionary<boolean>>
        _(abcObject).chain().mapValues({}); // $ExpectType LoDashExplicitWrapper<{ a: boolean; b: boolean; c: boolean; }>

        _(dictionary).chain().mapValues("a"); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).chain().mapValues("a"); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>

        _(abcObject).chain().mapValues(key); // $ExpectType LoDashExplicitWrapper<{ a: any; b: any; c: any; }>
        _(dictionary).chain().mapValues(key); // $ExpectType LoDashExplicitWrapper<Dictionary<any>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).chain().mapValues(key); // $ExpectType LoDashExplicitWrapper<Dictionary<any>>

        _("a").chain().mapValues(); // $ExpectType LoDashExplicitWrapper<NumericDictionary<string>>
        _(dictionary).chain().mapValues(); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        // Can't really support NumericDictionary fully, but it at least gets treated like a Dictionary
        _(numericDictionary).chain().mapValues(); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>

        _(abcObject).chain().mapValues(); // $ExpectType LoDashExplicitWrapper<AbcObject>
        _(abcObjectOrNull).chain().mapValues(); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    }

    const valueIterator = (value: AbcObject) => "";
    fp.mapValues(valueIterator)(dictionary); // $ExpectType Dictionary<string>
    fp.mapValues("a", dictionary); // $ExpectType Dictionary<number>
    fp.mapValues(valueIterator)(numericDictionary); // $ExpectType Dictionary<string>
    fp.mapValues({ a: 42 })(numericDictionary); // $ExpectType Dictionary<boolean>
    fp.mapValues(value => "", abcObjectOrNull); // $ExpectType { a: string; b: string; c: string; }
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
    result = _.merge(initialValue, {}, {}, {}, mergingValue);
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
    result = _(initialValue).merge({}, {}, {}, mergingValue).value();
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

    fp.merge(mergingValue, initialValue); // $ExpectType { b: string; } & { a: number; }
    fp.merge(mergingValue)(initialValue); // $ExpectType { b: string; } & { a: number; }
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
    result = _.mergeWith(initialValue, {}, {}, {}, mergingValue, customizer);
    result = _.mergeWith(initialValue, {}, {}, {}, {}, mergingValue, customizer);

    // Tests for basic chaining with mergeWith
    result = _(initialValue).mergeWith(mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, mergingValue, customizer).value();
    result = _(initialValue).mergeWith({}, {}, {}, {}, mergingValue, customizer).value();

    fp.mergeWith(customizer, mergingValue, initialValue); // $ExpectType { b: string; } & { a: number; }
    fp.mergeWith(customizer)(mergingValue)(initialValue); // $ExpectType { b: string; } & { a: number; }
}

// _.omit
namespace TestOmit {
    let obj: AbcObject | null | undefined = anything;
    let dictionary:_.Dictionary<AbcObject> = anything;
    let numericDictionary:_.NumericDictionary<AbcObject> = anything;
    let dictionaryWithNull:_.Dictionary<AbcObject | null> = anything;
    let numericDictionaryWithNull:_.NumericDictionary<AbcObject | null> = anything;
    let dictionaryWithUndefined:_.Dictionary<AbcObject | undefined> = anything;
    let numericDictionaryWithUndefined:_.NumericDictionary<AbcObject | undefined> = anything;
    let dictionaryWithNullAndUndefined:_.Dictionary<AbcObject | null | undefined> = anything;
    let numericDictionaryWithNullAndUndefined:_.NumericDictionary<AbcObject | null | undefined> = anything;

    {
        _.omit(obj, 'a'); // $ExpectType Partial<AbcObject>
        _.omit(obj, 0, 'a'); // $ExpectType Partial<AbcObject>
        _.omit(obj, ['b', 1], 0, 'a'); // $ExpectType Partial<AbcObject>
        _.omit(dictionary, 'a'); // $ExpectType Dictionary<AbcObject>
        _.omit(numericDictionary, 'a');  // $ExpectType NumericDictionary<AbcObject>
        _.omit(dictionaryWithNull, 'a'); // $ExpectType Dictionary<AbcObject | null>
        _.omit(numericDictionaryWithNull, 'a');  // $ExpectType NumericDictionary<AbcObject | null>
        _.omit(dictionaryWithUndefined, 'a'); // $ExpectType Dictionary<AbcObject | undefined>
        _.omit(numericDictionaryWithUndefined, 'a');  // $ExpectType NumericDictionary<AbcObject | undefined>
        _.omit(dictionaryWithNullAndUndefined, 'a'); // $ExpectType Dictionary<AbcObject | null | undefined>
        _.omit(numericDictionaryWithNullAndUndefined, 'a');  // $ExpectType NumericDictionary<AbcObject | null | undefined>
    }

    {
        _(obj).omit('a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
        _(obj).omit(0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
        _(obj).omit(['b', 1], 0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
        _(dictionary).omit('a'); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).omit('a'); // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject>>
        _(dictionaryWithNull).omit('a'); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject | null>>
        _(numericDictionaryWithNull).omit('a'); // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject | null>>
        _(dictionaryWithUndefined).omit('a'); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject | undefined>>
        _(numericDictionaryWithUndefined).omit('a'); // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject | undefined>>
        _(dictionaryWithNullAndUndefined).omit('a'); // $ExpectType LoDashImplicitWrapper<Dictionary<AbcObject | null | undefined>>
        _(numericDictionaryWithNullAndUndefined).omit('a'); // $ExpectType LoDashImplicitWrapper<NumericDictionary<AbcObject | null | undefined>>
    }

    {
        _(obj).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
        _(obj).chain().omit(0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
        _(obj).chain().omit(['b', 1], 0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
        _(dictionary).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject>>
        _(numericDictionary).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject>>
        _(dictionaryWithNull).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject | null>>
        _(numericDictionaryWithNull).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject | null>>
        _(dictionaryWithUndefined).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject | undefined>>
        _(numericDictionaryWithUndefined).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject | undefined>>
        _(dictionaryWithNullAndUndefined).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<Dictionary<AbcObject | null | undefined>>
        _(numericDictionaryWithNullAndUndefined).chain().omit('a'); // $ExpectType LoDashExplicitWrapper<NumericDictionary<AbcObject | null | undefined>>
    }

    fp.omit("a", obj); // $ExpectType Partial<AbcObject>
    fp.omit("a")(obj); // $ExpectType Partial<AbcObject>
    fp.omit(["a", "b"])(obj); // $ExpectType Partial<AbcObject>
}

// _.omitBy
namespace TestOmitBy {
    const obj: AbcObject | null | undefined = anything;
    const predicate = (element: string | number | boolean, key: string) => true;

    {
        let result: Partial<AbcObject>;

        result = _.omitBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<AbcObject>>;

        result = _(obj).omitBy(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<AbcObject>>;

        result = _(obj).chain().omitBy(predicate);
    }

    fp.omitBy(predicate, obj); // $ExpectType Partial<AbcObject>
    fp.omitBy(predicate)(obj); // $ExpectType Partial<AbcObject>
}

// _.pick
namespace TestPick {
    const obj1: AbcObject | null | undefined = anything;
    const obj2: AbcObject = anything;
    const readonlyArray: string[] = ['a', 'b']; // TODO: Should be ReadonlyArray, but see comment on type Many<T>
    const literalsArray = ['a' as 'a', 'b' as 'b'];
    const roLiteralsArray: Array<'a' | 'b'> = literalsArray; // TODO: Should be ReadonlyArray, but see comment on type Many<T>

    _.pick(obj1, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, 0, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, ['b', 1], 0, 'a'); // $ExpectType PartialDeep<AbcObject>
    _.pick(obj1, readonlyArray); // $ExpectType PartialDeep<AbcObject>
    // Broken in TS 2.4
    // _.pick(obj2, 'a', 'b'); // Pick<AbcObject, "a" | "b">
    _.pick(obj2, literalsArray); // $ExpectType Pick<AbcObject, "a" | "b">
    _.pick(obj2, roLiteralsArray); // $ExpectType Pick<AbcObject, "a" | "b">

    _(obj1).pick('a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(['b', 1], 0, 'a'); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    _(obj1).pick(readonlyArray); // $ExpectType LoDashImplicitWrapper<Partial<AbcObject>>
    // Broken in TS 2.4
    // _(obj2).pick('a', 'b'); // LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>
    _(obj2).pick(literalsArray); // $ExpectType LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>
    _(obj2).pick(roLiteralsArray); // $ExpectType LoDashImplicitWrapper<Pick<AbcObject, "a" | "b">>

    _.chain(obj1).pick('a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(['b', 1], 0, 'a'); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    _.chain(obj1).pick(readonlyArray); // $ExpectType LoDashExplicitWrapper<Partial<AbcObject>>
    // Broken in TS 2.4
    // _.chain(obj2).pick('a', 'b'); // LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>
    _.chain(obj2).pick(literalsArray); // $ExpectType LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>
    _.chain(obj2).pick(roLiteralsArray); // $ExpectType LoDashExplicitWrapper<Pick<AbcObject, "a" | "b">>

    fp.pick<AbcObject, "a">("a", obj2); // $ExpectType Pick<AbcObject, "a">
    fp.pick<AbcObject, "a">("a")(obj2); // $ExpectType Pick<AbcObject, "a">
    fp.pick<AbcObject, "a" | "b">(["a" as "a", "b" as "b"])(obj2); // $ExpectType Pick<AbcObject, "a" | "b">
}

// _.pickBy
namespace TestPickBy {
    const obj: AbcObject | null | undefined = anything;
    const predicate = (element: string | number | boolean, key: string) => true;

    {
        let result: Partial<AbcObject>;

        result = _.pickBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<AbcObject>>;

        result = _(obj).pickBy(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<AbcObject>>;

        result = _(obj).chain().pickBy(predicate);
    }

    fp.pickBy(predicate, obj); // $ExpectType Partial<AbcObject>
    fp.pickBy(predicate)(obj); // $ExpectType Partial<AbcObject>
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

    fp.result<string>("0", "abc"); // $ExpectType string
    fp.result("0")<string>("abc"); // $ExpectType string
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

    fp.set("a", value, object); // $ExpectType SampleObject
    fp.set("a")(value)(object); // $ExpectType SampleObject
    fp.set("a.b[1]")(value)(object); // $ExpectType SampleObject
    fp.set(["a", "b", 1])(value)(object); // $ExpectType SampleObject
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

    fp.setWith(customizer, "a", value, object); // $ExpectType SampleResult
    fp.setWith(customizer)("a")(value)(object); // $ExpectType SampleResult
    fp.setWith(customizer)("a.b[1]")(value)(object); // $ExpectType SampleResult
    fp.setWith(customizer)(["a", "b", 1])(value)(object); // $ExpectType SampleResult
}

// _.toPairs
namespace TestToPairs {
    let dictionary: _.Dictionary<number> = {};
    let numericDictionary: _.NumericDictionary<number> = {};
    let abcObject: AbcObject = anything;

    {
        _.toPairs(dictionary); // $ExpectType [string, number][]
        _.toPairs(numericDictionary); // $ExpectType [string, number][]
        _.toPairs(abcObject);  // $ExpectType [string, any][]
    }

    {
        _(dictionary).toPairs(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(numericDictionary).toPairs(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(abcObject).toPairs(); // $ExpectType LoDashImplicitWrapper<[string, any][]>
    }

    {
        _(dictionary).chain().toPairs(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(numericDictionary).chain().toPairs(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(abcObject).chain().toPairs(); // $ExpectType LoDashExplicitWrapper<[string, any][]>
    }

    const object2: _.Dictionary<AbcObject> = {};
    fp.toPairs(object2); // $ExpectType [string, AbcObject][]
}

// _.toPairsIn
namespace TestToPairsIn {
    let dictionary: _.Dictionary<number> = {};
    let numericDictionary: _.NumericDictionary<number> = {};
    let abcObject: AbcObject = anything;

    {
        _.toPairsIn(dictionary); // $ExpectType [string, number][]
        _.toPairsIn(numericDictionary); // $ExpectType [string, number][]
        _.toPairsIn(abcObject);  // $ExpectType [string, any][]
    }

    {
        _(dictionary).toPairsIn(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(numericDictionary).toPairsIn(); // $ExpectType LoDashImplicitWrapper<[string, number][]>
        _(abcObject).toPairsIn(); // $ExpectType LoDashImplicitWrapper<[string, any][]>
    }

    {
        _(dictionary).chain().toPairsIn(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(numericDictionary).chain().toPairsIn(); // $ExpectType LoDashExplicitWrapper<[string, number][]>
        _(abcObject).chain().toPairsIn(); // $ExpectType LoDashExplicitWrapper<[string, any][]>
    }

    const object2: _.Dictionary<AbcObject> = {};
    fp.toPairsIn(object2); // $ExpectType [string, AbcObject][]
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

    fp.unset("a.b", object); // $ExpectType boolean
    fp.unset("a.b")(object); // $ExpectType boolean
    fp.unset(["a", "b"])(object); // $ExpectType boolean
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

    fp.update("a.b[1]", updater, object); // $ExpectType any
    fp.update(["a", "b", 1])(updater)(object); // $ExpectType any
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

    fp.updateWith(customizer, "a.b[1]", updater, object); // $ExpectType SampleResult
    fp.updateWith(customizer)(["a", "b", 1])(updater)(object); // $ExpectType SampleResult
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
        result = _.values(object);
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

        result = _(dict).values();
        result = _(numDict).values();
        result = _(list).values();
        result = _(object).values();
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

        result = _(dict).chain().values();
        result = _(numDict).chain().values();
        result = _(list).chain().values();
        result = _(object).chain().values();
    }

    fp.values("hi"); // $ExpectType string[]
    fp.values(["h", "i"]); // $ExpectType string[]
    fp.values([1, 2]); // $ExpectType number[]
    fp.values([true, false]); // $ExpectType boolean[]

    {
        const dict: _.Dictionary<AbcObject> = {};
        const numDict: _.NumericDictionary<AbcObject> = {};
        const list: ArrayLike<AbcObject> = [];
        const object: AbcObject = anything;

        fp.values(dict); // $ExpectType AbcObject[]
        fp.values(numDict); // $ExpectType AbcObject[]
        fp.values(list); // $ExpectType AbcObject[]
        fp.values(object); // $ExpectType (string | number | boolean)[]
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

        result = _.valuesIn(object);
    }

    {
        let result: _.LoDashImplicitArrayWrapper<AbcObject>;

        result = _(object).valuesIn();
    }

    {
        let result: _.LoDashExplicitArrayWrapper<AbcObject>;

        result = _(object).chain().valuesIn();
    }

    fp.valuesIn("hi"); // $ExpectType string[]
    fp.valuesIn(["h", "i"]); // $ExpectType string[]
    fp.valuesIn([1, 2]); // $ExpectType number[]
    fp.valuesIn([true, false]); // $ExpectType boolean[]

    const dict: _.Dictionary<AbcObject> = {};
    const numDict: _.NumericDictionary<AbcObject> = {};
    const list: ArrayLike<AbcObject> = [];
    const object2: AbcObject = anything;
    fp.valuesIn(dict); // $ExpectType AbcObject[]
    fp.valuesIn(numDict); // $ExpectType AbcObject[]
    fp.valuesIn(list); // $ExpectType AbcObject[]
    fp.valuesIn(object2); // $ExpectType (string | number | boolean)[]
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

    fp.camelCase("Foo Bar"); // $ExpectType string
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

    fp.capitalize("fred"); // $ExpectType string
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

    fp.deburr("déjà vu"); // $ExpectType string
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

    fp.endsWith("c", "abc"); // $ExpectType boolean
    fp.endsWith("c")("abc"); // $ExpectType boolean
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

    fp.escape("fred, barney, & pebbles"); // $ExpectType string
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

    fp.escapeRegExp("[lodash](https://lodash.com/)"); // $ExpectType string
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

    fp.kebabCase("Foo Bar"); // $ExpectType string
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

    fp.lowerCase("Foo Bar"); // $ExpectType string
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

    fp.lowerFirst("Foo Bar"); // $ExpectType string
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

    fp.pad(8, "abc"); // $ExpectType string
    fp.pad(8)("abc"); // $ExpectType string
    fp.padChars("_", 8, "abc"); // $ExpectType string
    fp.padChars("_")(8)("abc"); // $ExpectType string
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

    fp.padEnd(8, "abc"); // $ExpectType string
    fp.padEnd(8)("abc"); // $ExpectType string
    fp.padCharsEnd("_", 8, "abc"); // $ExpectType string
    fp.padCharsEnd("_")(8)("abc"); // $ExpectType string
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

    fp.padStart(8, "abc"); // $ExpectType string
    fp.padStart(8)("abc"); // $ExpectType string
    fp.padCharsStart("_", 8, "abc"); // $ExpectType string
    fp.padCharsStart("_")(8)("abc"); // $ExpectType string
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

    fp.parseInt(10, "08"); // $ExpectType number
    fp.parseInt(10)("08"); // $ExpectType number
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

    fp.repeat(3, "*"); // $ExpectType string
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

    fp.replace("Fred", "Barney", "Hi Fred"); // $ExpectType string
    fp.replace("Fred")("Barney")("Hi Fred"); // $ExpectType string
    fp.replace("Fred")(replacer)("Hi Fred"); // $ExpectType string
    fp.replace(/fred/i)("Barney")("Hi Fred"); // $ExpectType string
    fp.replace(/fred/i)(replacer)("Hi Fred"); // $ExpectType string
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

    fp.snakeCase("Foo Bar"); // $ExpectType string
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

    fp.split("-", "a-b-c"); // $ExpectType string[]
    fp.split("-")("a-b-c"); // $ExpectType string[]

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

    fp.startCase("--foo-bar"); // $ExpectType string
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

    fp.startsWith("a", "abc"); // $ExpectType boolean
    fp.startsWith("a")("abc"); // $ExpectType boolean
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

    const result = fp.template("");
    result(); // $ExpectType string
    result.source; // $ExpectType string
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

    fp.toLower("fred, barney, &amp; pebbles"); // $ExpectType string
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

    fp.toUpper("fred, barney, &amp; pebbles"); // $ExpectType string
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

    fp.trim("  abc  "); // $ExpectType string
    fp.trimChars(" ", "  abc  "); // $ExpectType string
    fp.trimChars(" ")("  abc  "); // $ExpectType string

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

    fp.trimEnd("  abc  "); // $ExpectType string
    fp.trimCharsEnd(" ", "  abc  "); // $ExpectType string
    fp.trimCharsEnd(" ")("  abc  "); // $ExpectType string
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

    fp.trimStart("  abc  "); // $ExpectType string
    fp.trimCharsStart(" ", "  abc  "); // $ExpectType string
    fp.trimCharsStart(" ")("  abc  "); // $ExpectType string
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

    fp.truncate({ length: 24, separator: " " }, "hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ length: 24, separator: " " })("hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ length: 24, separator: /,? +/ }, "hi-diddly-ho there, neighborino"); // $ExpectType string
    fp.truncate({ omission: " […]" }, "hi-diddly-ho there, neighborino"); // $ExpectType string
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

    fp.unescape("fred, barney, &amp; pebbles"); // $ExpectType string
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

    fp.upperCase("fred, barney, &amp; pebbles"); // $ExpectType string
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

    fp.upperFirst("fred, barney, &amp; pebbles"); // $ExpectType string
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

    fp.words("fred, barney, & pebbles"); // $ExpectType string[]

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

    fp.attempt(func); // $ExpectType Error | { a: string; }
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

    fp.cond([[pairPred1, pairRes1], [pairPred2, pairRes2]])("hello"); // $ExpectType number
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

    fp.constant(42); // $ExpectType () => number
    fp.constant("a"); // $ExpectType () => string
    fp.constant(true); // $ExpectType () => boolean
    fp.constant<string[]>(["a"]); // $ExpectType () => string[]
    fp.constant<{a: string}>({a: "a"}); // $ExpectType () => { a: string; }
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

    fp.identity(42); // $ExpectType 42
    fp.identity([42]); // $ExpectType number[]
    fp.identity({ a: "b" }); // $ExpectType { a: string; }
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

    fp.iteratee((...args: any[]): AbcObject => anything); // $ExpectType (...args: any[]) => AbcObject
    fp.iteratee((a: AbcObject): boolean => anything); // $ExpectType (a: AbcObject) => boolean
    fp.iteratee((a: AbcObject | undefined): a is undefined => anything); // $ExpectType (a: AbcObject | undefined) => a is undefined
    fp.iteratee(""); // $ExpectType (...args: any[]) => any
    fp.iteratee({}); // $ExpectType (...args: any[]) => any
}

// _.matches
namespace TestMatches {
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;
        result = _.matches(source);
    }

    {
        let result: (value: AbcObject) => boolean;
        result = _.matches<AbcObject, AbcObject>(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: AbcObject) => boolean>;
        result = _(source).matches();
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: AbcObject) => boolean>;
        result = _(source).chain().matches();
    }

    fp.matches(source, {}); // $ExpectType boolean
    fp.matches(source)({}); // $ExpectType boolean
}

// _.matchesProperty
{
    let path: string | string[] = [];
    let source: AbcObject = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;

        result = _.matchesProperty(path, source);
    }

    {
        let result: (value: AbcObject) => boolean;

        result = _.matchesProperty<AbcObject, AbcObject>(path, source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).matchesProperty(source);
    }

    {
        let result: _.LoDashImplicitObjectWrapper<(value: AbcObject) => boolean>;

        result = _(path).matchesProperty<AbcObject, AbcObject>(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: any) => boolean>;

        result = _(path).chain().matchesProperty(source);
    }

    {
        let result: _.LoDashExplicitObjectWrapper<(value: AbcObject) => boolean>;

        result = _(path).chain().matchesProperty<AbcObject, AbcObject>(source);
    }

    fp.matchesProperty(path, source); // $ExpectType (value: any) => boolean
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

    fp.method("a.0"); // $ExpectType (object: any) => any
    fp.method(["a", 0]); // $ExpectType (object: any) => any
    fp.method(Symbol.replace); // $ExpectType (object: any) => any
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

    fp.methodOf(object); // $ExpectType (path: Many<PropertyName>) => any
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

    fp.noConflict(); // $ExpectType LoDashStatic
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

    fp.noop(); // $ExpectType void
    fp.noop(1); // $ExpectType void
    fp.noop("a", 1); // $ExpectType void
    fp.noop(true, "a", 1); // $ExpectType void
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

    fp.nthArg(1); // $ExpectType (...args: any[]) => any
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

    fp.over(Math.max); // $ExpectType (...args: any[]) => number[]
    fp.over([Math.max, Math.min]); // $ExpectType (...args: any[]) => number[]
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

    fp.overEvery((number: number) => true); // $ExpectType (...args: number[]) => boolean
    fp.overEvery([(number: number) => true, (number: number) => true]); // $ExpectType (...args: number[]) => boolean
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

    fp.overSome((number: number) => true); // $ExpectType (...args: number[]) => boolean
    fp.overSome([(number: number) => true, (number: number) => true]); // $ExpectType (...args: number[]) => boolean
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

    fp.property(Symbol.iterator)([]); // $ExpectType any
    fp.property([Symbol.iterator], []); // $ExpectType any
    fp.property(1)("abc"); // $ExpectType string
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

    fp.propertyOf(Symbol.iterator)([]); // $ExpectType any
    fp.propertyOf([Symbol.iterator], []); // $ExpectType any
    fp.propertyOf(1)("abc"); // $ExpectType string
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

    fp.range(1, 11); // $ExpectType number[]
    fp.range(1)(11); // $ExpectType number[]

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

    fp.rangeRight(1, 11); // $ExpectType number[]
    fp.rangeRight(1)(11); // $ExpectType number[]

    // $ExpectType number[][]
    _.map([5, 5], _.rangeRight);
}

// _.runInContext
{
    let result: typeof _;
    result = _.runInContext();
    result = _.runInContext({});
    result = _({}).runInContext();
    fp.runInContext({}); // $ExpectType LoDashStatic
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

    fp.stubArray(); // $ExpectType any[]
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

    fp.stubFalse(); // $ExpectType boolean
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

    fp.stubObject(); // $ExpectType any
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

    fp.stubString(); // $ExpectType string
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

    fp.stubTrue(); // $ExpectType boolean
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

    fp.times(iteratee, 42); // $ExpectType AbcObject[]
    fp.times(iteratee)(42); // $ExpectType AbcObject[]
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

   fp.toPath(true); // $ExpectType string[]
   fp.toPath(1); // $ExpectType string[]
   fp.toPath("a"); // $ExpectType string[]
   fp.toPath(["a"]); // $ExpectType string[]
   fp.toPath({}); // $ExpectType string[]
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

    fp.uniqueId(""); // $ExpectType string
}

_.VERSION; // $ExpectType string
_.templateSettings; // $ExpectType TemplateSettings

// _.partial & _.partialRight
{
    const func0 = (): number => {
        return 42;
    }
    const func1 = (arg1: number): number => {
        return arg1 * 2;
    }
    const func2 = (arg1: number, arg2: string): number => {
        return arg1 * arg2.length;
    }
    const func3 = (arg1: number, arg2: string, arg3: boolean): number => {
        return arg1 * arg2.length + (arg3 ? 1 : 0);
    }

    // with arity 0 function
    _.partial(func0); // $ExpectType Function0<number>
    // with arity 1 function
    _.partial(func1, 42       ); // $ExpectType Function0<number>
    _.partial(func1           ); // $ExpectType Function1<number, number>
    // with arity 2 function
    _.partial(func2           ); // $ExpectType Function2<number, string, number>
    _.partial(func2, 42       ); // $ExpectType Function1<string, number>
    _.partial(func2,  _, "foo"); // $ExpectType Function1<number, number>
    _.partial(func2, 42, "foo"); // $ExpectType Function0<number>
    // with arity 3 function
    _.partial(func3, 42,     _, true);

    // with arity 0 function
    _.partialRight(func0); // $ExpectType Function0<number>
    // with arity 1 function
    _.partialRight(func1, 42       ); // $ExpectType Function0<number>
    _.partialRight(func1           ); // $ExpectType Function1<number, number>
    // with arity 2 function
    _.partialRight(func2           ); // $ExpectType Function2<number, string, number>
    _.partialRight(func2, 42,     _); // $ExpectType Function1<string, number>
    _.partialRight(func2,     "foo"); // $ExpectType Function1<number, number>
    _.partialRight(func2, 42, "foo"); // $ExpectType Function0<number>
    // with arity 3 function
    _.partialRight(func3, 42,     _, true);

    fp.partial([], func0); // $ExpectType (...args: any[]) => any
    fp.partial([])(func0); // $ExpectType (...args: any[]) => any
    fp.partial([42])(func1); // $ExpectType (...args: any[]) => any
    fp.partialRight([])(func0); // $ExpectType (...args: any[]) => any
    fp.partialRight([42])(func1); // $ExpectType (...args: any[]) => any
}
