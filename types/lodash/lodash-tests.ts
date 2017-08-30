let any: any;

interface TResult {
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
        let result: _.LoDashImplicitWrapper<string[]>;
        result = _(['']);
    }

    {
        let result: _.LoDashImplicitWrapper<{a: string}>;
        result = _({a: ''});
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[] | null | undefined>;
        let a: TResult[] | null | undefined = any;
        result = _(a);
    }

    {
        _(any); // $ExpectType LoDashImplicitWrapper<any>
    }

    {
        let result: _.LoDashExplicitWrapper<string>;
        result = _.chain('');
        result = _('').chain();
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
        let result: _.LoDashExplicitWrapper<string[]>;
        result = _.chain(['']);
        result = _(['']).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: string}>;
        result = _.chain({a: ''});
        result = _({a: ''}).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[] | null | undefined>;
        let a: TResult[] | null | undefined = any;
        result = _.chain(a);
        result = _(a).chain();
    }

    {
        _.chain(any); // $ExpectType LoDashExplicitWrapper<any>
    }
}

// Wrapped array shortcut methods
{
    let result: _.LoDashImplicitWrapper<number[]>;
    let valueResult: number | undefined;
    valueResult = _([1, 2, 3, 4]).pop();
    result = _([1, 2, 3, 4]).push(5, 6, 7);
    valueResult = _([1, 2, 3, 4]).shift();
    result = _([1, 2, 3, 4]).sort((a, b) => 1);
    result = _([1, 2, 3, 4]).splice(1);
    result = _([1, 2, 3, 4]).splice(1, 2, 5, 6);
    result = _([1, 2, 3, 4]).unshift(5, 6);
}

{
    let result: _.LoDashExplicitWrapper<number[]>;
    let valueResult: _.LoDashExplicitWrapper<number | undefined>;
    valueResult = _.chain([1, 2, 3, 4]).pop();
    result = _.chain([1, 2, 3, 4]).push(5, 6, 7);
    valueResult = _.chain([1, 2, 3, 4]).shift();
    result = _.chain([1, 2, 3, 4]).sort((a, b) => 1);
    result = _.chain([1, 2, 3, 4]).splice(1);
    result = _.chain([1, 2, 3, 4]).splice(1, 2, 5, 6);
    result = _.chain([1, 2, 3, 4]).unshift(5, 6);
}

/*********
 * Array *
 *********/

// _.chunk
namespace TestChunk {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.chunk(array);
        result = _.chunk(array, 42);

        result = _.chunk(list);
        result = _.chunk(list, 42);

        result = _(array).chunk().value();
        result = _(array).chunk(42).value();

        result = _(list).chunk().value();
        result = _(list).chunk(42).value();

        result = _.chain(array).chunk().value();
        result = _.chain(array).chunk(42).value();

        result = _.chain(list).chunk().value();
        result = _.chain(list).chunk(42).value();
    }
}

// _.compact
namespace TestCompact {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let array2: Array<TResult | null | undefined | false | "" | 0> | null | undefined = any;
    let list2: _.List<TResult | null | undefined | false | "" | 0> | null | undefined = any;

    {
        let result: TResult[];

        result = _.compact(array);
        result = _.compact(list);
        result = _.compact(array2);
        result = _.compact(list2);

        result = _(array2).compact().value();
        result = _(list2).compact().value();

        result = _.chain(array2).compact().value();
        result = _.chain(list2).compact().value();
    }

    {
        let result: any[];
        result = _.compact();
    }
}

// _.concat
namespace TestConcat {
    {
        let result: number[];

        result = _.concat([1]);
        result = _.concat(1);
        result = _.concat(1, 2);
        result = _.concat([1], 2, 3);
        result = _.concat([1], [2, 3]);
        result = _.concat([1], [2, 3], [4]);

        result = _([1]).concat().value();
        result = _(1).concat().value();
        result = _(1).concat(2).value();
        result = _([1]).concat(2, 3).value();
        result = _([1]).concat([2, 3]).value();
        result = _([1]).concat([2, 3], [4]).value();

        result = _.chain([1]).concat().value();
        result = _.chain(1).concat().value();
        result = _.chain(1).concat(2).value();
        result = _.chain([1]).concat(2, 3).value();
        result = _.chain([1]).concat([2, 3]).value();
        result = _.chain([1]).concat([2, 3], [4]).value();
    }

    {
        let result: Array<number | string | boolean>;

        result = _.concat<number | string | boolean>([1], "a", true);
        result = _.concat<number | string | boolean>([1], ["a", true]);

        result = _([1]).concat<number | string | boolean>("a", true).value();
        result = _([1]).concat<number | string | boolean>(["a", true]).value();

        result = _.chain([1]).concat<number | string | boolean>("a", true).value();
        result = _.chain([1]).concat<number | string | boolean>(["a", true]).value();
    }
}

// _.difference
namespace TestDifference {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.difference(array);
        result = _.difference(array, array!);
        result = _.difference(array, list!, array!);
        result = _.difference(array, array!, list!, array!);

        result = _.difference(list);
        result = _.difference(list, list!);
        result = _.difference(list, array!, list!);
        result = _.difference(list, list!, array!, list!);

        result = _(array).difference().value();
        result = _(array).difference(array!).value();
        result = _(array).difference(list!, array!).value();
        result = _(array).difference(array!, list!, array!).value();

        result = _(list).difference().value();
        result = _(list).difference(list!).value();
        result = _(list).difference(array!, list!).value();
        result = _(list).difference(list!, array!, list!).value();

        result = _(array).chain().difference().value();
        result = _(array).chain().difference(array!).value();
        result = _(array).chain().difference(list!, array!).value();
        result = _(array).chain().difference(array!, list!, array!).value();

        result = _(list).chain().difference().value();
        result = _(list).chain().difference(list!).value();
        result = _(list).chain().difference(array!, list!).value();
        result = _(list).chain().difference(list!, array!, list!).value();
    }
}

// _.differenceBy
namespace TestDifferenceBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let iteratee = (value: TResult) => any;

    {
        let result: TResult[];

        result = _.differenceBy(array, array!);
        result = _.differenceBy(array, list!, array!);
        result = _.differenceBy(array, array!, list!, array!);
        result = _.differenceBy(array, list!, array!, list!, array!);
        result = _.differenceBy(array, array!, list!, array!, list!, array!);
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!);

        result = _.differenceBy(array, array!, iteratee);
        result = _.differenceBy(array, list!, array!, iteratee);
        result = _.differenceBy(array, array!, list!, array!, iteratee);
        result = _.differenceBy(array, list!, array!, list!, array!, iteratee);
        result = _.differenceBy(array, array!, list!, array!, list!, array!, iteratee);
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!, iteratee);

        result = _.differenceBy(array, array!, 'a');
        result = _.differenceBy(array, list!, array!, 'a');
        result = _.differenceBy(array, array!, list!, array!, 'a');
        result = _.differenceBy(array, list!, array!, list!, array!, 'a');
        result = _.differenceBy(array, array!, list!, array!, list!, array!, 'a');
        result = _.differenceBy<TResult>(array, list!, array!, list!, array!, list!, array!, 'a');

        result = _.differenceBy(array, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, {a: 1});
        result = _.differenceBy(array, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, array!, list!, array!, list!, array!, {a: 1});
        result = _.differenceBy(array, list!, array!, list!, array!, list!, array!, {a: 1});

        result = _.differenceBy(list, list!);
        result = _.differenceBy(list, array!, list!);
        result = _.differenceBy(list, list!, array!, list!);
        result = _.differenceBy(list, array!, list!, array!, list!);
        result = _.differenceBy(list, list!, array!, list!, array!, list!);
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!);

        result = _.differenceBy(list, list!, iteratee);
        result = _.differenceBy(list, array!, list!, iteratee);
        result = _.differenceBy(list, list!, array!, list!, iteratee);
        result = _.differenceBy(list, array!, list!, array!, list!, iteratee);
        result = _.differenceBy(list, list!, array!, list!, array!, list!, iteratee);
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!, iteratee);

        result = _.differenceBy(list, list!, 'a');
        result = _.differenceBy(list, array!, list!, 'a');
        result = _.differenceBy(list, list!, array!, list!, 'a');
        result = _.differenceBy(list, array!, list!, array!, list!, 'a');
        result = _.differenceBy(list, list!, array!, list!, array!, list!, 'a');
        result = _.differenceBy<TResult>(list, array!, list!, array!, list!, array!, list!, 'a');

        result = _.differenceBy(list, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, {a: 1});
        result = _.differenceBy(list, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, list!, array!, list!, array!, list!, {a: 1});
        result = _.differenceBy(list, array!, list!, array!, list!, array!, list!, {a: 1});

        result = _(array).differenceBy(array!).value();
        result = _(array).differenceBy(list!, array!).value();
        result = _(array).differenceBy(array!, list!, array!).value();
        result = _(array).differenceBy(list!, array!, list!, array!).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!).value();

        result = _(array).differenceBy(array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, iteratee).value();
        result = _(array).differenceBy(array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, iteratee).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!, iteratee).value();

        result = _(array).differenceBy(array!, 'a').value();
        result = _(array).differenceBy(list!, array!, 'a').value();
        result = _(array).differenceBy(array!, list!, array!, 'a').value();
        result = _(array).differenceBy(list!, array!, list!, array!, 'a').value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, 'a').value();
        result = _(array).differenceBy<TResult>(list!, array!, list!, array!, list!, array!, 'a').value();

        result = _(array).differenceBy(array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, {a: 1}).value();
        result = _(array).differenceBy(array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(array!, list!, array!, list!, array!, {a: 1}).value();
        result = _(array).differenceBy(list!, array!, list!, array!, list!, array!, {a: 1}).value();

        result = _(list).differenceBy(list!).value();
        result = _(list).differenceBy(array!, list!).value();
        result = _(list).differenceBy(list!, array!, list!).value();
        result = _(list).differenceBy(array!, list!, array!, list!).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!).value();

        result = _(list).differenceBy(list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, iteratee).value();
        result = _(list).differenceBy(list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, iteratee).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!, iteratee).value();

        result = _(list).differenceBy(list!, 'a').value();
        result = _(list).differenceBy(array!, list!, 'a').value();
        result = _(list).differenceBy(list!, array!, list!, 'a').value();
        result = _(list).differenceBy(array!, list!, array!, list!, 'a').value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, 'a').value();
        result = _(list).differenceBy<TResult>(array!, list!, array!, list!, array!, list!, 'a').value();

        result = _(list).differenceBy(list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, {a: 1}).value();
        result = _(list).differenceBy(list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(list!, array!, list!, array!, list!, {a: 1}).value();
        result = _(list).differenceBy(array!, list!, array!, list!, array!, list!, {a: 1}).value();

        result = _.chain(array).differenceBy(array!).value();
        result = _.chain(array).differenceBy(list!, array!).value();
        result = _.chain(array).differenceBy(array!, list!, array!).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!).value();

        result = _.chain(array).differenceBy(array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, iteratee).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!, iteratee).value();

        result = _.chain(array).differenceBy(array!, 'a').value();
        result = _.chain(array).differenceBy(list!, array!, 'a').value();
        result = _.chain(array).differenceBy(array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, 'a').value();
        result = _.chain(array).differenceBy<TResult>(list!, array!, list!, array!, list!, array!, 'a').value();

        result = _.chain(array).differenceBy(array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(array!, list!, array!, list!, array!, {a: 1}).value();
        result = _.chain(array).differenceBy(list!, array!, list!, array!, list!, array!, {a: 1}).value();

        result = _.chain(list).differenceBy(list!).value();
        result = _.chain(list).differenceBy(array!, list!).value();
        result = _.chain(list).differenceBy(list!, array!, list!).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!).value();

        result = _.chain(list).differenceBy(list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, iteratee).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!, iteratee).value();

        result = _.chain(list).differenceBy(list!, 'a').value();
        result = _.chain(list).differenceBy(array!, list!, 'a').value();
        result = _.chain(list).differenceBy(list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, 'a').value();
        result = _.chain(list).differenceBy<TResult>(array!, list!, array!, list!, array!, list!, 'a').value();

        result = _.chain(list).differenceBy(list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(list!, array!, list!, array!, list!, {a: 1}).value();
        result = _.chain(list).differenceBy(array!, list!, array!, list!, array!, list!, {a: 1}).value();
    }
}

// _.differenceWith
namespace TestDifferenceWith {
    let array: TResult[] | null | undefined = any;
    let list: _.List<TResult> | null | undefined = any;
    let comparator: (arrVal: TResult, othVal: TResult) => boolean = _.isEqual;

    {
        let result: TResult[];

        result = _.differenceWith(array, array!);
        result = _.differenceWith(array, list!, array!, list!, array!, list!, array!);

        result = _.differenceWith(array, array!, comparator);
        result = _.differenceWith(array, list!, array!, list!, array!, list!, array!, comparator);

        result = _.differenceWith(list, list!);
        result = _.differenceWith(list, array!, list!, array!, list!, array!, list!);

        result = _.differenceWith(list, list!, comparator);
        result = _.differenceWith(list, array!, list!, array!, list!, array!, list!, comparator);

        result = _(array).differenceWith(array!).value();
        result = _(array).differenceWith(list!, array!, list!, array!, list!, array!).value();

        result = _(array).differenceWith(array!, comparator).value();
        result = _(array).differenceWith(list!, array!, list!, array!, list!, array!, comparator).value();

        result = _(list).differenceWith(list!).value();
        result = _(list).differenceWith(array!, list!, array!, list!, array!, list!).value();

        result = _(list).differenceWith(list!, comparator).value();
        result = _(list).differenceWith(array!, list!, array!, list!, array!, list!, comparator).value();

        result = _.chain(array).differenceWith(array!).value();
        result = _.chain(array).differenceWith(list!, array!, list!, array!, list!, array!).value();

        result = _.chain(array).differenceWith(array!, comparator).value();
        result = _.chain(array).differenceWith(list!, array!, list!, array!, list!, array!, comparator).value();

        result = _.chain(list).differenceWith(list!).value();
        result = _.chain(list).differenceWith(array!, list!, array!, list!, array!, list!).value();

        result = _.chain(list).differenceWith(list!, comparator).value();
        result = _.chain(list).differenceWith(array!, list!, array!, list!, array!, list!, comparator).value();
    }
}

// _.drop
{
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];
        result = _.drop(array);
        result = _.drop(array, 42);
        result = _.drop(list);
        result = _.drop(list, 42);

        result = _(array).drop().value();
        result = _(array).drop(42).value();
        result = _(list).drop().value();
        result = _(list).drop(42).value();

        result = _.chain(array).drop().value();
        result = _.chain(array).drop(42).value();
        result = _.chain(list).drop().value();
        result = _.chain(list).drop(42).value();
    }
}

// _.dropRight
namespace TestDropRight {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];
        result = _.dropRight(array);
        result = _.dropRight(array, 42);
        result = _.dropRight(list);
        result = _.dropRight(list, 42);

        result = _(array).dropRight().value();
        result = _(array).dropRight(42).value();
        result = _(list).dropRight().value();
        result = _(list).dropRight(42).value();

        result = _.chain(array).dropRight().value();
        result = _.chain(array).dropRight(42).value();
        result = _.chain(list).dropRight().value();
        result = _.chain(list).dropRight(42).value();
    }
}

// _.dropRightWhile
namespace TestDropRightWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.dropRightWhile(array);
        result = _.dropRightWhile(array, '');
        result = _.dropRightWhile(array, {a: 42});
        result = _.dropRightWhile(array, ['a', 42]);
        result = _.dropRightWhile(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        });

        result = _.dropRightWhile(list);
        result = _.dropRightWhile(list, '');
        result = _.dropRightWhile(list, {a: 42});
        result = _.dropRightWhile(list, ['a', 42]);
        result = _.dropRightWhile(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        });

        result = _(array).dropRightWhile().value();
        result = _(array).dropRightWhile('').value();
        result = _(array).dropRightWhile({a: 42}).value();
        result = _(array).dropRightWhile(['a', 42]).value();
        result = _(array).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropRightWhile().value();
        result = _.chain(list).dropRightWhile('').value();
        result = _.chain(list).dropRightWhile({a: 42}).value();
        result = _.chain(list).dropRightWhile(['a', 42]).value();
        result = _.chain(list).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();

        result = _.chain(array).dropRightWhile().value();
        result = _.chain(array).dropRightWhile('').value();
        result = _.chain(array).dropRightWhile({a: 42}).value();
        result = _.chain(array).dropRightWhile(['a', 42]).value();
        result = _.chain(array).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropRightWhile().value();
        result = _.chain(list).dropRightWhile('').value();
        result = _.chain(list).dropRightWhile({a: 42}).value();
        result = _.chain(list).dropRightWhile(['a', 42]).value();
        result = _.chain(list).dropRightWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
    }
}

// _.dropWhile
namespace TestDropWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[];

        result = _.dropWhile(array);
        result = _.dropWhile(array, '');
        result = _.dropWhile(array, {a: 42});
        result = _.dropWhile(array, ['a', 42]);
        result = _.dropWhile(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        });

        result = _.dropWhile(list);
        result = _.dropWhile(list, '');
        result = _.dropWhile(list, {a: 42});
        result = _.dropWhile(list, ['a', 42]);
        result = _.dropWhile(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        });

        result = _(array).dropWhile().value();
        result = _(array).dropWhile('').value();
        result = _(array).dropWhile({a: 42}).value();
        result = _(array).dropWhile(['a', 42]).value();
        result = _(array).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropWhile().value();
        result = _.chain(list).dropWhile('').value();
        result = _.chain(list).dropWhile({a: 42}).value();
        result = _.chain(list).dropWhile(['a', 42]).value();
        result = _.chain(list).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();

        result = _.chain(array).dropWhile().value();
        result = _.chain(array).dropWhile('').value();
        result = _.chain(array).dropWhile({a: 42}).value();
        result = _.chain(array).dropWhile(['a', 42]).value();
        result = _.chain(array).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return 1;
        }).value();

        result = _.chain(list).dropWhile().value();
        result = _.chain(list).dropWhile('').value();
        result = _.chain(list).dropWhile({a: 42}).value();
        result = _.chain(list).dropWhile(['a', 42]).value();
        result = _.chain(list).dropWhile((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
            return true;
        }).value();
    }
}

// _.fill
namespace TestFill {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

    {
        let result: number[];

        result = _.fill(array, 42);
        result = _.fill(array, 42, 0);
        result = _.fill(array, 42, 0, 10);

        result = _(array).fill(42).value();
        result = _(array).fill(42, 0).value();
        result = _(array).fill(42, 0, 10).value();

        result = _.chain(array).fill(42).value();
        result = _.chain(array).fill(42, 0).value();
        result = _.chain(array).fill(42, 0, 10).value();
    }

    {
        let result: _.List<number>;

        result = _.fill(list, 42);
        result = _.fill(list, 42, 0);
        result = _.fill(list, 42, 0, 10);

        result = _(list).fill(42).value();
        result = _(list).fill(42, 0).value();
        result = _(list).fill(42, 0, 10).value();

        result = _.chain(list).fill(42).value();
        result = _.chain(list).fill(42, 0).value();
        result = _.chain(list).fill(42, 0, 10).value();
    }

    {
        let result: _.List<number | string>;

        result = _.fill(list, "42", 0, 1);
        result = _(list).fill("42", 0, 1).value();
        result = _.chain(list).fill("42", 0, 1).value();
    }
}

// _.findIndex
namespace TestFindIndex {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findIndex(array);
        result = _.findIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findIndex(array, '');
        result = _.findIndex(array, {a: 42});
        result = _.findIndex(array, ['a', 42]);
        result = _.findIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.findIndex(list);
        result = _.findIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findIndex(list, '');
        result = _.findIndex(list, {a: 42});
        result = _.findIndex(list, ['a', 42]);
        result = _.findIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);
        result = _.findIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findIndex();
        result = _(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(array).findIndex('');
        result = _(array).findIndex({a: 42});
        result = _(array).findIndex(['a', 42]);
        result = _(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(list).findIndex();
        result = _(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(list).findIndex('');
        result = _(list).findIndex({a: 42});
        result = _(list).findIndex(['a', 42]);
        result = _(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.chain(array).findIndex().value();
        result = _.chain(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(array).findIndex('').value();
        result = _.chain(array).findIndex({a: 42}).value();
        result = _.chain(array).findIndex(['a', 42]).value();
        result = _.chain(array).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();

        result = _.chain(list).findIndex().value();
        result = _.chain(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(list).findIndex('').value();
        result = _.chain(list).findIndex({a: 42}).value();
        result = _.chain(list).findIndex(['a', 42]).value();
        result = _.chain(list).findIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();
    }
}

// _.findLastIndex
namespace TestFindLastIndex {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let fromIndex = 0;

    {
        let result: number;

        result = _.findLastIndex(array);
        result = _.findLastIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findLastIndex(array, '');
        result = _.findLastIndex(array, {a: 42});
        result = _.findLastIndex(array, ['a', 42]);
        result = _.findLastIndex(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.findLastIndex(list);
        result = _.findLastIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _.findLastIndex(list, '');
        result = _.findLastIndex(list, {a: 42});
        result = _.findLastIndex(list, ['a', 42]);
        result = _.findLastIndex(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);
        result = _.findLastIndex([{ b: 5 }], ['b', 5]);

        result = _(array).findLastIndex();
        result = _(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(array).findLastIndex('');
        result = _(array).findLastIndex({a: 42});
        result = _(array).findLastIndex(['a', 42]);
        result = _(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _(list).findLastIndex();
        result = _(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
        result = _(list).findLastIndex('');
        result = _(list).findLastIndex({a: 42});
        result = _(list).findLastIndex(['a', 42]);
        result = _(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex);

        result = _.chain(array).findLastIndex().value();
        result = _.chain(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(array).findLastIndex('').value();
        result = _.chain(array).findLastIndex({a: 42}).value();
        result = _.chain(array).findLastIndex(['a', 42]).value();
        result = _.chain(array).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();

        result = _.chain(list).findLastIndex().value();
        result = _.chain(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }).value();
        result = _.chain(list).findLastIndex('').value();
        result = _.chain(list).findLastIndex({a: 42}).value();
        result = _.chain(list).findLastIndex(['a', 42]).value();
        result = _.chain(list).findLastIndex((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        }, fromIndex).value();
    }
}

// _.first
namespace TestFirst {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.first('abc');
        result = _('abc').first();
    }

    {
        let result: TResult | undefined;

        result = _.first(array);
        result = _.first(list);

        result = _(array).first();
        result = _(list).first();

        result = _.chain(array).first().value();
        result = _.chain(list).first().value();
    }
}

// _.flatten
namespace TestFlatten {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flatten('abc');
        result = _('abc').flatten().value();
        result = _.chain('abc').flatten().value();
    }

    {
        let result: number[];

        result = _.flatten(array);
        result = _.flatten([1, 2, 3]);
        result = _.flatten([1, [2, 3]]);
        result = _.flatten<number>([1, [2, [3]]], true);
        result = _.flatten<number>([1, [2, [3]], [[4]]], true);

        result = _.flatten(list);
        result = _.flatten({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flatten({0: 1, 1: [2, 3], length: 2});
        result = _.flatten<number>({0: 1, 1: [2, [3]], length: 2}, true);
        result = _.flatten<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}, true);

        result = _(array).flatten().value();
        result = _([1, 2, 3]).flatten().value();
        result = _([1, [2, 3]]).flatten().value();
        result = _([1, [2, [3]]]).flatten<number>(true).value();
        result = _([1, [2, [3]], [[4]]]).flatten<number>(true).value();

        result = _(list).flatten().value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flatten().value();
        result = _({0: 1, 1: [2, 3], length: 2}).flatten().value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flatten<number>(true).value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number>(true).value();

        result = _.chain(array).flatten().value();
        result = _.chain([1, 2, 3]).flatten().value();
        result = _.chain([1, [2, 3]]).flatten().value();
        result = _.chain([1, [2, [3]]]).flatten<number>(true).value();
        result = _.chain([1, [2, [3]], [[4]]]).flatten<number>(true).value();

        result = _.chain(list).flatten().value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flatten().value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flatten().value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flatten<number>(true).value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten<number>(true).value();
    }

    {
        let result: _.RecursiveArray<number>;

        result = _.flatten([1, [2, [3]]]);
        result = _.flatten([1, [2, [3]], [[4]]]);

        result = _.flatten({0: 1, 1: [2, [3]], length: 2});
        result = _.flatten({0: 1, 1: [2, [3]], 2: [[4]], length: 3});

        result = _([1, [2, [3]]]).flatten().value();
        result = _([1, [2, [3]], [[4]]]).flatten().value();

        result = _({0: 1, 1: [2, [3]], length: 2}).flatten().value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten().value();

        result = _.chain([1, [2, [3]]]).flatten().value();
        result = _.chain([1, [2, [3]], [[4]]]).flatten().value();

        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flatten().value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flatten().value();
    }
}

// _.flattenDeep
namespace TestFlattenDeep {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flattenDeep('abc');
        result = _('abc').flattenDeep().value();
        result = _.chain('abc').flattenDeep().value();
    }

    {
        let result: number[];

        result = _.flattenDeep<number>(array);
        result = _.flattenDeep([1, 2, 3]);
        result = _.flattenDeep<number>([1, [2, 3]]);
        result = _.flattenDeep<number>([1, [2, [3]]]);
        result = _.flattenDeep<number>([1, [2, [3]], [[4]]]);

        result = _.flattenDeep<number>(list);
        result = _.flattenDeep({0: 1, 1: 2, 2: 3, length: 3});
        result = _.flattenDeep<number>({0: 1, 1: [2, 3], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], length: 2});
        result = _.flattenDeep<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3});

        result = _(array).flattenDeep<number>().value();
        result = _([1, 2, 3]).flattenDeep().value();
        result = _([1, [2, 3]]).flattenDeep<number>().value();
        result = _([1, [2, [3]]]).flattenDeep<number>().value();
        result = _([1, [2, [3]], [[4]]]).flattenDeep<number>().value();

        result = _(list).flattenDeep<number>().value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flattenDeep().value();
        result = _({0: 1, 1: [2, 3], length: 2}).flattenDeep<number>().value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number>().value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number>().value();

        result = _.chain(array).flattenDeep<number>().value();
        result = _.chain([1, 2, 3]).flattenDeep().value();
        result = _.chain([1, [2, 3]]).flattenDeep<number>().value();
        result = _.chain([1, [2, [3]]]).flattenDeep<number>().value();
        result = _.chain([1, [2, [3]], [[4]]]).flattenDeep<number>().value();

        result = _.chain(list).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flattenDeep().value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flattenDeep<number>().value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDeep<number>().value();
    }
}

// _.flattenDepth
namespace TestFlattenDepth {
    let array: number[][] | null | undefined = [] as any;
    let list: _.List<number[]> | null | undefined = [] as any;

    {
        let result: string[];

        result = _.flattenDepth('abc');
        result = _.flattenDepth('abc', 2);
        result = _('abc').flattenDepth().value();
        result = _('abc').flattenDepth(2).value();
        result = _.chain('abc').flattenDepth().value();
        result = _.chain('abc').flattenDepth(2).value();
    }

    {
        let result: number[];

        result = _.flattenDepth<number>(array, 2);
        result = _.flattenDepth([1, 2, 3], 2);
        result = _.flattenDepth<number>([1, [2, 3]], 2);
        result = _.flattenDepth<number>([1, [2, [3]]], 3);
        result = _.flattenDepth<number>([1, [2, [3]], [[4]]], 4);

        result = _.flattenDepth<number>(list, 2);
        result = _.flattenDepth({0: 1, 1: 2, 2: 3, length: 3}, 2);
        result = _.flattenDepth<number>({0: 1, 1: [2, 3], length: 2}, 2);
        result = _.flattenDepth<number>({0: 1, 1: [2, [3]], length: 2}, 3);
        result = _.flattenDepth<number>({0: 1, 1: [2, [3]], 2: [[4]], length: 3}, 4);

        result = _(array).flattenDepth<number>(2).value();
        result = _([1, 2, 3]).flattenDepth(2).value();
        result = _([1, [2, 3]]).flattenDepth<number>(2).value();
        result = _([1, [2, [3]]]).flattenDepth<number>(3).value();
        result = _([1, [2, [3]], [[4]]]).flattenDepth<number>(4).value();

        result = _(list).flattenDepth<number>(2).value();
        result = _({0: 1, 1: 2, 2: 3, length: 3}).flattenDepth(2).value();
        result = _({0: 1, 1: [2, 3], length: 2}).flattenDepth<number>(2).value();
        result = _({0: 1, 1: [2, [3]], length: 2}).flattenDepth<number>(3).value();
        result = _({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDepth<number>(4).value();

        result = _.chain(array).flattenDepth<number>(2).value();
        result = _.chain([1, 2, 3]).flattenDepth(2).value();
        result = _.chain([1, [2, 3]]).flattenDepth<number>(2).value();
        result = _.chain([1, [2, [3]]]).flattenDepth<number>(3).value();
        result = _.chain([1, [2, [3]], [[4]]]).flattenDepth<number>(4).value();

        result = _.chain(list).flattenDepth<number>(2).value();
        result = _.chain({0: 1, 1: 2, 2: 3, length: 3}).flattenDepth(2).value();
        result = _.chain({0: 1, 1: [2, 3], length: 2}).flattenDepth<number>(2).value();
        result = _.chain({0: 1, 1: [2, [3]], length: 2}).flattenDepth<number>(3).value();
        result = _.chain({0: 1, 1: [2, [3]], 2: [[4]], length: 3}).flattenDepth<number>(4).value();
    }
}

// _.fromPairs
namespace TestFromPairs {
    let twoDimensionalArray: string[][] | null | undefined = [] as any;
    let numberTupleArray: Array<[string, number]> | null | undefined = [] as any;
    let stringDict: _.Dictionary<string>;

    {
        stringDict = _.fromPairs(twoDimensionalArray);
        // Ensure we're getting the parameterized overload rather than the 'any' catch-all.
        _.fromPairs(numberTupleArray); // $ExpectType Dictionary<number>
        // This doesn't compile because you can't assign arrays to tuples.
        // stringDict = _.fromPairs<string>(twoDimensionalArray);

        stringDict = _(twoDimensionalArray).fromPairs().value();
        _(numberTupleArray).fromPairs().value(); // $ExpectType Dictionary<number>

        stringDict = _.chain(twoDimensionalArray).fromPairs().value();
        _.chain(numberTupleArray).fromPairs().value(); // $ExpectType Dictionary<number>
    }
}

// _.head
namespace TestHead {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.head('abc');
        result = _('abc').head();
    }

    {
        let result: TResult | undefined;

        result = _.head(array);
        result = _.head(list);

        result = _(array).head();
        result = _(list).head();

        result = _.chain(array).head().value();
        result = _.chain(list).head().value();
    }
}

// _.indexOf
namespace TestIndexOf {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

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

        result = _(array).chain().indexOf(value).value();
        result = _(array).chain().indexOf(value, true).value();
        result = _(array).chain().indexOf(value, 42).value();

        result = _(list).chain().indexOf(value).value();
        result = _(list).chain().indexOf(value, true).value();
        result = _(list).chain().indexOf(value, 42).value();
    }
}

// _.sortedIndexOf
{
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedIndexOf(array, value);
    result = _.sortedIndexOf(list, value);
    result = _(array).sortedIndexOf(value);
    result = _(list).sortedIndexOf(value);
    result = _.chain(array).sortedIndexOf(value).value();
    result = _.chain(list).sortedIndexOf(value).value();
}

//_.initial
namespace TestInitial {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.initial(array);
    result = _.initial(list);

    result = _(array).initial().value();
    result = _(list).initial().value();

    result = _.chain(array).initial().value();
    result = _.chain(list).initial().value();
}

// _.intersection
namespace TestIntersection {
    let array: TResult[] = any;
    let list: _.List<TResult> = any;

    let result: TResult[];

    result = _.intersection(array, list);
    result = _.intersection(list, array, list, array);

    result = _(array).intersection(array).value();
    result = _(array).intersection(list, array, list, array).value();

    result = _(list).intersection(array).value();
    result = _(list).intersection(list, array, list, array).value();

    result = _.chain(array).intersection(array).value();
    result = _.chain(array).intersection(list, array, list, array).value();

    result = _.chain(list).intersection(array).value();
    result = _.chain(list).intersection(list, array, list, array).value();
}

// _.intersectionBy
namespace TestIntersectionBy {
    let array: TResult[] = any;
    let list: _.List<TResult> = any;

    let result: TResult[];

    result = _.intersectionBy(array, list);
    result = _.intersectionBy(list, array, "a");
    result = _.intersectionBy(array, list, {a: 42});
    result = _.intersectionBy(list, array, ['a', 42]);
    result = _.intersectionBy(array, list, (value) => {
        value; // $ExpectType TResult
    });
    result = _.intersectionBy(list, array, list, array, (value) => {
        value; // $ExpectType TResult
    });

    result = _(array).intersectionBy(list).value();
    result = _(list).intersectionBy(array, "a").value();
    result = _(array).intersectionBy(list, {a: 42}).value();
    result = _(list).intersectionBy(array, ['a', 42]).value();
    result = _(array).intersectionBy(list, (value) => {
        value; // $ExpectType TResult
    }).value();
    result = _(list).intersectionBy(array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _.chain(array).intersectionBy(list).value();
    result = _.chain(list).intersectionBy(array, "a").value();
    result = _.chain(array).intersectionBy(list, {a: 42}).value();
    result = _.chain(list).intersectionBy(array, ['a', 42]).value();
    result = _.chain(array).intersectionBy(list, (value) => {
        value; // $ExpectType TResult
    }).value();
    result = _.chain(list).intersectionBy(array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();
}

// _.intersectionWith
{
    let array: TResult[] | null | undefined = any;
    let list: _.List<TResult> | null | undefined = any;
    let comparator: (arrVal: TResult, othVal: TResult) => boolean = _.isEqual;

    let result: TResult[];

    result = _.intersectionWith(array, array!);
    result = _.intersectionWith(array, list!, array!, list!, array!, list!, array!);

    result = _.intersectionWith(array, array!, comparator);
    result = _.intersectionWith(array, list!, array!, list!, array!, list!, array!, comparator);

    result = _.intersectionWith(list, list!);
    result = _.intersectionWith(list, array!, list!, array!, list!, array!, list!);

    result = _.intersectionWith(list, list!, comparator);
    result = _.intersectionWith(list, array!, list!, array!, list!, array!, list!, comparator);

    result = _(array).intersectionWith(array!).value();
    result = _(array).intersectionWith(list!, array!, list!, array!, list!, array!).value();

    result = _(array).intersectionWith(array!, comparator).value();
    result = _(array).intersectionWith(list!, array!, list!, array!, list!, array!, comparator).value();

    result = _(list).intersectionWith(list!).value();
    result = _(list).intersectionWith(array!, list!, array!, list!, array!, list!).value();

    result = _(list).intersectionWith(list!, comparator).value();
    result = _(list).intersectionWith(array!, list!, array!, list!, array!, list!, comparator).value();

    result = _.chain(array).intersectionWith(array!).value();
    result = _.chain(array).intersectionWith(list!, array!, list!, array!, list!, array!).value();

    result = _.chain(array).intersectionWith(array!, comparator).value();
    result = _.chain(array).intersectionWith(list!, array!, list!, array!, list!, array!, comparator).value();

    result = _.chain(list).intersectionWith(list!).value();
    result = _.chain(list).intersectionWith(array!, list!, array!, list!, array!, list!).value();

    result = _.chain(list).intersectionWith(list!, comparator).value();
    result = _.chain(list).intersectionWith(array!, list!, array!, list!, array!, list!, comparator).value();
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

// _.reverse
namespace TestReverse {
    {
        let array: TResult[] = [] as any;
        let result: TResult[];

        result = _.reverse(array);
        result = _(array).reverse().value();
        result = _.chain(array).reverse().value();
    }
    {
        let list: _.List<TResult> = [] as any;
        let result: _.List<TResult>;

        result = _.reverse(list);
        result = _(list).reverse().value();
        result = _.chain(list).reverse().value();
    }
}

// _.last
namespace TestLast {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string | undefined;

        result = _.last('abc');
        result = _('abc').last();
        result = _.chain('abc').last().value();
    }

    {
        let result: TResult | undefined;

        result = _.last(array);
        result = _.last(list);

        result = _(array).last();
        result = _(list).last();

        result = _.chain(array).last().value();
        result = _.chain(list).last().value();
    }
}

// _.lastIndexOf
namespace TestLastIndexOf {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value: TResult = { a: 1, b: "", c: true };

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
}

// _.nth
namespace TestNth {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let value = 0;

    {
        let result: TResult | undefined;

        result = _.nth(array);

        result = _.nth(array, 42);

        result = _(array).nth();
        result = _(array).nth(42);

        result = _(list).nth();
        result = _(list).nth(42);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult | undefined>;

        result = _(array).chain().nth();
        result = _(array).chain().nth(42);

        result = _(list).chain().nth();
        result = _(list).chain().nth(42);
    }
}

// _.pull
namespace TestPull {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pull(array);
        result = _.pull(array, value);
        result = _.pull(array, value, value, value);
        result = _(array).pull().value();
        result = _(array).pull(value).value();
        result = _(array).pull(value, value, value).value();
        result = _.chain(array).pull().value();
        result = _.chain(array).pull(value).value();
        result = _.chain(array).pull(value, value, value).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pull(list);
        result = _.pull(list, value);
        result = _.pull(list, value, value, value);
        result = _(list).pull().value();
        result = _(list).pull(value).value();
        result = _(list).pull(value, value, value).value();
        result = _.chain(list).pull().value();
        result = _.chain(list).pull(value).value();
        result = _.chain(list).pull(value, value, value).value();
    }
}

// _.pullAt
namespace TestPullAt {
    {
        let array: TResult[] = [];
        let result: TResult[];

        result = _.pullAt(array);
        result = _.pullAt(array, 1);
        result = _.pullAt(array, [2, 3], 1);
        result = _.pullAt(array, 4, [2, 3], 1);
        result = _(array).pullAt().value();
        result = _(array).pullAt(1).value();
        result = _(array).pullAt([2, 3], 1).value();
        result = _(array).pullAt(4, [2, 3], 1).value();
        result = _.chain(array).pullAt().value();
        result = _.chain(array).pullAt(1).value();
        result = _.chain(array).pullAt([2, 3], 1).value();
        result = _.chain(array).pullAt(4, [2, 3], 1).value();
    }
    {
        let list: _.List<TResult> = [];
        let result: _.List<TResult>;

        result = _.pullAt(list);
        result = _.pullAt(list, 1);
        result = _.pullAt(list, [2, 3], 1);
        result = _.pullAt(list, 4, [2, 3], 1);
        result = _(list).pullAt().value();
        result = _(list).pullAt(1).value();
        result = _(list).pullAt([2, 3], 1).value();
        result = _(list).pullAt(4, [2, 3], 1).value();
        result = _.chain(list).pullAt().value();
        result = _.chain(list).pullAt(1).value();
        result = _.chain(list).pullAt([2, 3], 1).value();
        result = _.chain(list).pullAt(4, [2, 3], 1).value();
    }
}

// _.pullAll
namespace TestPullAll {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAll(array);
        result = _.pullAll(array, [value, value]);
        result = _.pullAll(array, list);

        result = _(array).pullAll().value();
        result = _(array).pullAll([value, value]).value();
        result = _(array).pullAll(list).value();

        result = _.chain(array).pullAll().value();
        result = _.chain(array).pullAll([value, value]).value();
        result = _.chain(array).pullAll(list).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAll(list);
        result = _.pullAll(list, [value, value]);
        result = _.pullAll(list, list);

        result = _(list).pullAll().value();
        result = _(list).pullAll([value, value]).value();
        result = _(list).pullAll(list).value();

        result = _.chain(list).pullAll().value();
        result = _.chain(list).pullAll([value, value]).value();
        result = _.chain(list).pullAll(list).value();
    }
}

// _.pullAllBy
namespace TestPullAllBy {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAllBy(array);
        result = _.pullAllBy(array, [value, value]);
        result = _.pullAllBy(array, [value, value], (value2) => {
            value2; // $ExpectType TResult
        });
        result = _.pullAllBy(array, list);
        result = _.pullAllBy(array, list, (value2) => {
            value2; // $ExpectType TResult
        });

        result = _(array).pullAllBy().value();
        result = _(array).pullAllBy([value, value]).value();
        result = _(array).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _(array).pullAllBy(list).value();
        result = _(array).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();

        result = _.chain(array).pullAllBy().value();
        result = _.chain(array).pullAllBy([value, value]).value();
        result = _.chain(array).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _.chain(array).pullAllBy(list).value();
        result = _.chain(array).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAllBy(list);
        result = _.pullAllBy(list, [value, value]);
        result = _.pullAllBy(list, [value, value], (value2) => {
            value2; // $ExpectType TResult
        });
        result = _.pullAllBy(list, list);
        result = _.pullAllBy(list, list, (value2) => {
            value2; // $ExpectType TResult
        });

        result = _(list).pullAllBy().value();
        result = _(list).pullAllBy([value, value]).value();
        result = _(list).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _(list).pullAllBy(list).value();
        result = _(list).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();

        result = _.chain(list).pullAllBy().value();
        result = _.chain(list).pullAllBy([value, value]).value();
        result = _.chain(list).pullAllBy([value, value], (value2) => {
            value2; // $ExpectType TResult
        }).value();
        result = _.chain(list).pullAllBy(list).value();
        result = _.chain(list).pullAllBy(list, (value2) => {
            value2; // $ExpectType TResult
        }).value();
    }
}

// _.pullAllWith
namespace TestPullAllWith {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let value: TResult = { a: 1, b: "", c: true };

    {
        let result: TResult[];

        result = _.pullAllWith(array);
        result = _.pullAllWith(array, [value, value]);
        result = _.pullAllWith(array, [value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });
        result = _.pullAllWith(array, list);
        result = _.pullAllWith(array, list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });

        result = _(array).pullAllWith().value();
        result = _(array).pullAllWith([value, value]).value();
        result = _(array).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _(array).pullAllWith(list).value();
        result = _(array).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();

        result = _.chain(array).pullAllWith().value();
        result = _.chain(array).pullAllWith([value, value]).value();
        result = _.chain(array).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _.chain(array).pullAllWith(list).value();
        result = _.chain(array).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
    }

    {
        let result: _.List<TResult>;

        result = _.pullAllWith(list);
        result = _.pullAllWith(list, [value, value]);
        result = _.pullAllWith(list, [value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });
        result = _.pullAllWith(list, list);
        result = _.pullAllWith(list, list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        });

        result = _(list).pullAllWith().value();
        result = _(list).pullAllWith([value, value]).value();
        result = _(list).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _(list).pullAllWith(list).value();
        result = _(list).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();

        result = _.chain(list).pullAllWith().value();
        result = _.chain(list).pullAllWith([value, value]).value();
        result = _.chain(list).pullAllWith([value, value], (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
        result = _.chain(list).pullAllWith(list).value();
        result = _.chain(list).pullAllWith(list, (value1, value2) => {
            value1; // $ExpectType TResult
            value2; // $ExpectType TResult
            return true;
        }).value();
    }
}

// _.remove
namespace TestRemove {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];

    let result: TResult[];

    result = _.remove(array);
    result = _.remove(array, '');
    result = _.remove(array, {a: 42});
    result = _.remove(array, ['a', 42]);
    result = _.remove(array, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });
    result = _.remove(list);
    result = _.remove(list, '');
    result = _.remove(list, {a: 42});
    result = _.remove(list, ['a', 42]);
    result = _.remove(list, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });

    result = _(array).remove().value();
    result = _(array).remove('').value();
    result = _(array).remove({a: 42}).value();
    result = _(array).remove(['a', 42]).value();
    result = _(array).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _(list).remove().value();
    result = _(list).remove('').value();
    result = _(list).remove({a: 42}).value();
    result = _(list).remove(['a', 42]).value();
    result = _(list).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();

    result = _.chain(array).remove().value();
    result = _.chain(array).remove('').value();
    result = _.chain(array).remove({a: 42}).value();
    result = _.chain(array).remove(['a', 42]).value();
    result = _.chain(array).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(list).remove().value();
    result = _.chain(list).remove('').value();
    result = _.chain(list).remove({a: 42}).value();
    result = _.chain(list).remove(['a', 42]).value();
    result = _.chain(list).remove((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
}

// _.tail
namespace TestTail {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.tail(array);
    result = _.tail(list);
    result = _(array).tail().value();
    result = _(list).tail().value();
    result = _.chain(array).tail().value();
    result = _.chain(list).tail().value();
}

// _.slice
namespace TestSlice {
    let array: TResult[] | null | undefined = [] as any;

    let result: TResult[];

    result = _.slice(array);
    result = _.slice(array, 42);
    result = _.slice(array, 42, 42);

    result = _(array).slice().value();
    result = _(array).slice(42).value();
    result = _(array).slice(42, 42).value();

    result = _(array).chain().slice().value();
    result = _(array).chain().slice(42).value();
    result = _(array).chain().slice(42, 42).value();
}

// _.sortedIndex
namespace TestSortedIndex {
    interface SampleType { a: number; b: string; c: boolean; }

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    let stringIterator: (x: string) => number;
    let arrayIterator: (x: SampleType) => number;
    let listIterator: (x: SampleType) => number;

    {
        let result: number;

        result = _.sortedIndex('', '');

        result = _.sortedIndex(array, value);

        result = _.sortedIndex(list, value);

        result = _('').sortedIndex('');

        result = _(array).sortedIndex(value);

        result = _(list).sortedIndex(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedIndex('');

        result = _(array).chain().sortedIndex(value);

        result = _(list).chain().sortedIndex(value);
    }
}

// _.sortedIndexBy
namespace TestSortedIndexBy {
    interface SampleType { a: number; b: string; c: boolean; }

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];
    let value: SampleType = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedIndexBy('', '', (value2) => {
        value2; // $ExpectType string
    });
    result = _.sortedIndexBy(array, value, '');
    result = _.sortedIndexBy(array, value, {a: 42});
    result = _.sortedIndexBy(array, value, ['a', 42]);
    result = _.sortedIndexBy(array, value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _.sortedIndexBy(list, value, '');
    result = _.sortedIndexBy(list, value, {a: 42});
    result = _.sortedIndexBy(list, value, ['a', 42]);
    result = _.sortedIndexBy(list, value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _('').sortedIndexBy('', (value2) => {
        value2; // $ExpectType string
    });
    result = _(array).sortedIndexBy(value, '');
    result = _(array).sortedIndexBy(value, {a: 42});
    result = _(array).sortedIndexBy(value, ['a', 42]);
    result = _(array).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _(list).sortedIndexBy(value, '');
    result = _(list).sortedIndexBy(value, {a: 42});
    result = _(list).sortedIndexBy(value, ['a', 42]);
    result = _(list).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _.chain('').sortedIndexBy('', (value2) => {
        value2; // $ExpectType string
    }).value();
    result = _.chain(array).sortedIndexBy(value, '').value();
    result = _.chain(array).sortedIndexBy(value, {a: 42}).value();
    result = _.chain(array).sortedIndexBy(value, ['a', 42]).value();
    result = _.chain(array).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
    result = _.chain(list).sortedIndexBy(value, '').value();
    result = _.chain(list).sortedIndexBy(value, {a: 42}).value();
    result = _.chain(list).sortedIndexBy(value, ['a', 42]).value();
    result = _.chain(list).sortedIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
}

// _.sortedLastIndex
namespace TestSortedLastIndex {
    interface SampleType { a: number; b: string; c: boolean; }

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedLastIndex('', '');

        result = _.sortedLastIndex(array, value);

        result = _.sortedLastIndex(list, value);

        result = _('').sortedLastIndex('');

        result = _(array).sortedLastIndex(value);

        result = _(list).sortedLastIndex(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndex('');

        result = _(array).chain().sortedLastIndex(value);

        result = _(list).chain().sortedLastIndex(value);
    }
}

// _.sortedLastIndexBy
namespace TestSortedLastIndexBy {
    interface SampleType { a: number; b: string; c: boolean; }

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];
    let value: SampleType = { a: 1, b: "", c: true };

    let result: number;

    result = _.sortedLastIndexBy('', '', (value2) => {
        value2; // $ExpectType string
    });
    result = _.sortedLastIndexBy(array, value, '');
    result = _.sortedLastIndexBy(array, value, {a: 42});
    result = _.sortedLastIndexBy(array, value, ['a', 42]);
    result = _.sortedLastIndexBy(array, value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _.sortedLastIndexBy(list, value, '');
    result = _.sortedLastIndexBy(list, value, {a: 42});
    result = _.sortedLastIndexBy(list, value, ['a', 42]);
    result = _.sortedLastIndexBy(list, value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _('').sortedLastIndexBy('', (value2) => {
        value2; // $ExpectType string
    });
    result = _(array).sortedLastIndexBy(value, '');
    result = _(array).sortedLastIndexBy(value, {a: 42});
    result = _(array).sortedLastIndexBy(value, ['a', 42]);
    result = _(array).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });
    result = _(list).sortedLastIndexBy(value, '');
    result = _(list).sortedLastIndexBy(value, {a: 42});
    result = _(list).sortedLastIndexBy(value, ['a', 42]);
    result = _(list).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    });

    result = _.chain('').sortedLastIndexBy('', (value2) => {
        value2; // $ExpectType string
    }).value();
    result = _.chain(array).sortedLastIndexBy(value, '').value();
    result = _.chain(array).sortedLastIndexBy(value, {a: 42}).value();
    result = _.chain(array).sortedLastIndexBy(value, ['a', 42]).value();
    result = _.chain(array).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
    result = _.chain(list).sortedLastIndexBy(value, '').value();
    result = _.chain(list).sortedLastIndexBy(value, {a: 42}).value();
    result = _.chain(list).sortedLastIndexBy(value, ['a', 42]).value();
    result = _.chain(list).sortedLastIndexBy(value, (value2) => {
        value2; // $ExpectType SampleType
    }).value();
}

// _.sortedLastIndexOf
{
    interface SampleType { a: number; b: string; c: boolean; }

    let array: SampleType[] = [];
    let list: _.List<SampleType> = [];

    let value: SampleType = { a: 1, b: "", c: true };

    {
        let result: number;

        result = _.sortedLastIndexOf('', '');

        result = _.sortedLastIndexOf(array, value);

        result = _.sortedLastIndex(list, value);

        result = _('').sortedLastIndexOf('');

        result = _(array).sortedLastIndexOf(value);

        result = _(list).sortedLastIndexOf(value);
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _('').chain().sortedLastIndexOf('');

        result = _(array).chain().sortedLastIndexOf(value);

        result = _(list).chain().sortedLastIndexOf(value);
    }
}

// _.take
namespace TestTake {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.take(array);
    result = _.take(array, 42);

    result = _.take(list);
    result = _.take(list, 42);

    result = _(array).take().value();
    result = _(array).take(42).value();

    result = _(list).take().value();
    result = _(list).take(42).value();

    result = _(array).chain().take().value();
    result = _(array).chain().take(42).value();

    result = _(list).chain().take().value();
    result = _(list).chain().take(42).value();
}

// _.takeRight
namespace TestTakeRight {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.takeRight(array);
    result = _.takeRight(array, 42);

    result = _.takeRight(list);
    result = _.takeRight(list, 42);

    result = _(array).takeRight().value();
    result = _(array).takeRight(42).value();

    result = _(list).takeRight().value();
    result = _(list).takeRight(42).value();

    result = _(array).chain().takeRight().value();
    result = _(array).chain().takeRight(42).value();

    result = _(list).chain().takeRight().value();
    result = _(list).chain().takeRight(42).value();
}

// _.takeRightWhile
namespace TestTakeRightWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.takeRightWhile(array);
    result = _.takeRightWhile(array, '');
    result = _.takeRightWhile(array, {a: 42});
    result = _.takeRightWhile(array, ['a', 42]);
    result = _.takeRightWhile(array, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });
    result = _.takeRightWhile(list);
    result = _.takeRightWhile(list, '');
    result = _.takeRightWhile(list, ['a', 42]);
    result = _.takeRightWhile(list, {a: 42});
    result = _.takeRightWhile(list, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });

    result = _(array).takeRightWhile().value();
    result = _(array).takeRightWhile('').value();
    result = _(array).takeRightWhile({a: 42}).value();
    result = _(array).takeRightWhile(['a', 42]).value();
    result = _(array).takeRightWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _(list).takeRightWhile().value();
    result = _(list).takeRightWhile('').value();
    result = _(list).takeRightWhile({a: 42}).value();
    result = _(list).takeRightWhile(['a', 42]).value();
    result = _(list).takeRightWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(array).takeRightWhile().value();
    result = _.chain(array).takeRightWhile('').value();
    result = _.chain(array).takeRightWhile({a: 42}).value();
    result = _.chain(array).takeRightWhile(['a', 42]).value();
    result = _.chain(array).takeRightWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(list).takeRightWhile().value();
    result = _.chain(list).takeRightWhile('').value();
    result = _.chain(list).takeRightWhile({a: 42}).value();
    result = _.chain(list).takeRightWhile(['a', 42]).value();
    result = _.chain(list).takeRightWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
}

// _.takeWhile
namespace TestTakeWhile {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.takeWhile(array);
    result = _.takeWhile(array, '');
    result = _.takeWhile(array, {a: 42});
    result = _.takeWhile(array, ['a', 42]);
    result = _.takeWhile(array, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });
    result = _.takeWhile(list);
    result = _.takeWhile(list, '');
    result = _.takeWhile(list, ['a', 42]);
    result = _.takeWhile(list, {a: 42});
    result = _.takeWhile(list, (value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    });

    result = _(array).takeWhile().value();
    result = _(array).takeWhile('').value();
    result = _(array).takeWhile({a: 42}).value();
    result = _(array).takeWhile(['a', 42]).value();
    result = _(array).takeWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _(list).takeWhile().value();
    result = _(list).takeWhile('').value();
    result = _(list).takeWhile({a: 42}).value();
    result = _(list).takeWhile(['a', 42]).value();
    result = _(list).takeWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(array).takeWhile().value();
    result = _.chain(array).takeWhile('').value();
    result = _.chain(array).takeWhile({a: 42}).value();
    result = _.chain(array).takeWhile(['a', 42]).value();
    result = _.chain(array).takeWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
    result = _.chain(list).takeWhile().value();
    result = _.chain(list).takeWhile('').value();
    result = _.chain(list).takeWhile({a: 42}).value();
    result = _.chain(list).takeWhile(['a', 42]).value();
    result = _.chain(list).takeWhile((value, index, collection) => {
        value; // $ExpectType TResult
        index; // $ExpectType number
        collection; // $ExpectType ArrayLike<TResult>
    }).value();
}

// _.union
namespace TestUnion {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: any[];
        result = _.union();
    }

    {
        let result: TResult[];

        result = _.union(array);
        result = _.union(array, list);
        result = _.union(array, list, array);

        result = _.union(list);
        result = _.union(list, array);
        result = _.union(list, array, list);

        result = _(array).union().value();
        result = _(array).union(list).value();
        result = _(array).union(list, array).value();

        result = _(list).union().value();
        result = _(list).union(array).value();
        result = _(list).union(array, list).value();

        result = _(array).chain().union().value();
        result = _(array).chain().union(list).value();
        result = _(array).chain().union(list, array).value();

        result = _(array).chain().union().value();
        result = _(array).chain().union(list).value();
        result = _(array).chain().union(list, array).value();

        result = _(list).chain().union().value();
        result = _(list).chain().union(array).value();
        result = _(list).chain().union(array, list).value();
    }
}

// _.unionBy
namespace TestUnionBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let iteratee: (value: TResult) => any = (value: TResult) => 1;

    let result: TResult[];

    result = _.unionBy(array, array);
    result = _.unionBy(array, list, array);
    result = _.unionBy(array, array, list, array);
    result = _.unionBy(array, list, array, list, array);
    result = _.unionBy(array, array, list, array, list, array);

    result = _.unionBy(array, array, iteratee);
    result = _.unionBy(array, list, array, iteratee);
    result = _.unionBy(array, array, list, array, iteratee);
    result = _.unionBy(array, list, array, list, array, iteratee);
    result = _.unionBy(array, array, list, array, list, array, (value) => {
        value; // $ExpectType TResult
    });

    result = _.unionBy(array, array, 'a');
    result = _.unionBy(array, list, array, 'a');
    result = _.unionBy(array, array, list, array, 'a');
    result = _.unionBy<TResult>(array, list, array, list, array, 'a');
    result = _.unionBy<TResult>(array, array, list, array, list, array, 'a');

    result = _.unionBy(array, array, {a: 1});
    result = _.unionBy(array, list, array, {a: 1});
    result = _.unionBy(array, array, list, array, {a: 1});
    result = _.unionBy(array, list, array, list, array, {a: 1});
    result = _.unionBy(array, list, array, list, array, list, {a: 1});

    result = _.unionBy(array, array, ['a', 1]);
    result = _.unionBy(array, list, array, ['a', 1]);
    result = _.unionBy(array, array, list, array, ['a', 1]);
    result = _.unionBy<TResult>(array, list, array, list, array, ['a', 1]);
    result = _.unionBy<TResult>(array, list, array, list, array, list, ['a', 1]);

    result = _.unionBy(list, list);
    result = _.unionBy(list, array, list);
    result = _.unionBy(list, list, array, list);
    result = _.unionBy(list, array, list, array, list);
    result = _.unionBy(list, list, array, list, array, list);

    result = _.unionBy(list, list, iteratee);
    result = _.unionBy(list, array, list, iteratee);
    result = _.unionBy(list, list, array, list, iteratee);
    result = _.unionBy(list, array, list, array, list, iteratee);
    result = _.unionBy(list, list, array, list, array, list, (value) => {
        value; // $ExpectType TResult
    });

    result = _.unionBy(list, list, 'a');
    result = _.unionBy(list, array, list, 'a');
    result = _.unionBy(list, list, array, list, 'a');
    result = _.unionBy<TResult>(list, array, list, array, list, 'a');
    result = _.unionBy<TResult>(list, list, array, list, array, list, 'a');

    result = _.unionBy(list, list, {a: 1});
    result = _.unionBy(list, array, list, {a: 1});
    result = _.unionBy(list, list, array, list, {a: 1});
    result = _.unionBy(list, array, list, array, list, {a: 1});
    result = _.unionBy(list, array, list, array, list, array, {a: 1});

    result = _.unionBy(list, list, ['a', 1]);
    result = _.unionBy(list, array, list, ['a', 1]);
    result = _.unionBy(list, list, array, list, ['a', 1]);
    result = _.unionBy<TResult>(list, array, list, array, list, ['a', 1]);
    result = _.unionBy<TResult>(list, array, list, array, list, array, ['a', 1]);

    result = _(array).unionBy(array).value();
    result = _(array).unionBy(list, array).value();
    result = _(array).unionBy(array, list, array).value();
    result = _(array).unionBy(list, array, list, array).value();
    result = _(array).unionBy(array, list, array, list, array).value();

    result = _(array).unionBy(array, iteratee).value();
    result = _(array).unionBy(list, array, iteratee).value();
    result = _(array).unionBy(array, list, array, iteratee).value();
    result = _(array).unionBy(list, array, list, array, iteratee).value();
    result = _(array).unionBy(array, list, array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _(array).unionBy(array, 'a').value();
    result = _(array).unionBy(list, array, 'a').value();
    result = _(array).unionBy(array, list, array, 'a').value();
    result = _(array).unionBy<TResult>(list, array, list, array, 'a').value();
    result = _(array).unionBy<TResult>(array, list, array, list, array, 'a').value();

    result = _(array).unionBy(array, {a: 1}).value();
    result = _(array).unionBy(list, array, {a: 1}).value();
    result = _(array).unionBy(array, list, array, {a: 1}).value();
    result = _(array).unionBy(list, array, list, array, {a: 1}).value();
    result = _(array).unionBy(list, array, list, array, list, {a: 1}).value();

    result = _(array).unionBy(array, ['a', 1]).value();
    result = _(array).unionBy(list, array, ['a', 1]).value();
    result = _(array).unionBy(array, list, array, ['a', 1]).value();
    result = _(array).unionBy<TResult>(list, array, list, array, ['a', 1]).value();
    result = _(array).unionBy<TResult>(list, array, list, array, list, ['a', 1]).value();

    result = _(list).unionBy(list).value();
    result = _(list).unionBy(array, list).value();
    result = _(list).unionBy(list, array, list).value();
    result = _(list).unionBy(array, list, array, list).value();
    result = _(list).unionBy(list, array, list, array, list).value();

    result = _(list).unionBy(list, iteratee).value();
    result = _(list).unionBy(array, list, iteratee).value();
    result = _(list).unionBy(list, array, list, iteratee).value();
    result = _(list).unionBy(array, list, array, list, iteratee).value();
    result = _(list).unionBy(list, array, list, array, list, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _(list).unionBy(list, 'a').value();
    result = _(list).unionBy(array, list, 'a').value();
    result = _(list).unionBy(list, array, list, 'a').value();
    result = _(list).unionBy<TResult>(array, list, array, list, 'a').value();
    result = _(list).unionBy<TResult>(list, array, list, array, list, 'a').value();

    result = _(list).unionBy(list, {a: 1}).value();
    result = _(list).unionBy(array, list, {a: 1}).value();
    result = _(list).unionBy(list, array, list, {a: 1}).value();
    result = _(list).unionBy(array, list, array, list, {a: 1}).value();
    result = _(list).unionBy(array, list, array, list, array, {a: 1}).value();

    result = _(list).unionBy(list, ['a', 1]).value();
    result = _(list).unionBy(array, list, ['a', 1]).value();
    result = _(list).unionBy(list, array, list, ['a', 1]).value();
    result = _(list).unionBy<TResult>(array, list, array, list, ['a', 1]).value();
    result = _(list).unionBy<TResult>(array, list, array, list, array, ['a', 1]).value();

    result = _.chain(array).unionBy(array).value();
    result = _.chain(array).unionBy(list, array).value();
    result = _.chain(array).unionBy(array, list, array).value();
    result = _.chain(array).unionBy(list, array, list, array).value();
    result = _.chain(array).unionBy(array, list, array, list, array).value();

    result = _.chain(array).unionBy(array, iteratee).value();
    result = _.chain(array).unionBy(list, array, iteratee).value();
    result = _.chain(array).unionBy(array, list, array, iteratee).value();
    result = _.chain(array).unionBy(list, array, list, array, iteratee).value();
    result = _.chain(array).unionBy(array, list, array, list, array, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _.chain(array).unionBy(array, 'a').value();
    result = _.chain(array).unionBy(list, array, 'a').value();
    result = _.chain(array).unionBy(array, list, array, 'a').value();
    result = _.chain(array).unionBy<TResult>(list, array, list, array, 'a').value();
    result = _.chain(array).unionBy<TResult>(array, list, array, list, array, 'a').value();

    result = _.chain(array).unionBy(array, {a: 1}).value();
    result = _.chain(array).unionBy(list, array, {a: 1}).value();
    result = _.chain(array).unionBy(array, list, array, {a: 1}).value();
    result = _.chain(array).unionBy(list, array, list, array, {a: 1}).value();
    result = _.chain(array).unionBy(list, array, list, array, list, {a: 1}).value();

    result = _.chain(array).unionBy(array, ['a', 1]).value();
    result = _.chain(array).unionBy(list, array, ['a', 1]).value();
    result = _.chain(array).unionBy(array, list, array, ['a', 1]).value();
    result = _.chain(array).unionBy<TResult>(list, array, list, array, ['a', 1]).value();
    result = _.chain(array).unionBy<TResult>(list, array, list, array, list, ['a', 1]).value();

    result = _.chain(list).unionBy(list).value();
    result = _.chain(list).unionBy(array, list).value();
    result = _.chain(list).unionBy(list, array, list).value();
    result = _.chain(list).unionBy(array, list, array, list).value();
    result = _.chain(list).unionBy(list, array, list, array, list).value();

    result = _.chain(list).unionBy(list, iteratee).value();
    result = _.chain(list).unionBy(array, list, iteratee).value();
    result = _.chain(list).unionBy(list, array, list, iteratee).value();
    result = _.chain(list).unionBy(array, list, array, list, iteratee).value();
    result = _.chain(list).unionBy(list, array, list, array, list, (value) => {
        value; // $ExpectType TResult
    }).value();

    result = _.chain(list).unionBy(list, 'a').value();
    result = _.chain(list).unionBy(array, list, 'a').value();
    result = _.chain(list).unionBy(list, array, list, 'a').value();
    result = _.chain(list).unionBy<TResult>(array, list, array, list, 'a').value();
    result = _.chain(list).unionBy<TResult>(list, array, list, array, list, 'a').value();

    result = _.chain(list).unionBy(list, {a: 1}).value();
    result = _.chain(list).unionBy(array, list, {a: 1}).value();
    result = _.chain(list).unionBy(list, array, list, {a: 1}).value();
    result = _.chain(list).unionBy(array, list, array, list, {a: 1}).value();
    result = _.chain(list).unionBy(array, list, array, list, array, {a: 1}).value();

    result = _.chain(list).unionBy(list, ['a', 1]).value();
    result = _.chain(list).unionBy(array, list, ['a', 1]).value();
    result = _.chain(list).unionBy(list, array, list, ['a', 1]).value();
    result = _.chain(list).unionBy<TResult>(array, list, array, list, ['a', 1]).value();
    result = _.chain(list).unionBy<TResult>(array, list, array, list, array, ['a', 1]).value();
}

// _.unionWith
namespace TestUnionWith {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let iteratee: (value: TResult) => any = (value: TResult) => 1;

    let result: TResult[];

    result = _.unionWith(array, array);
    result = _.unionWith(array, list, array);
    result = _.unionWith(array, array, list, array, list, array);

    result = _.unionWith(array, array, iteratee);
    result = _.unionWith(array, list, array, iteratee);
    result = _.unionWith(array, array, list, array, list, array, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });

    result = _.unionWith(list, list);
    result = _.unionWith(list, array, list);
    result = _.unionWith(list, list, array, list, array, list);

    result = _.unionWith(list, list, iteratee);
    result = _.unionWith(list, array, list, iteratee);
    result = _.unionWith(list, list, array, list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });

    result = _(array).unionWith(array).value();
    result = _(array).unionWith(list, array).value();
    result = _(array).unionWith(array, list, array, list, array).value();

    result = _(array).unionWith(array, iteratee).value();
    result = _(array).unionWith(list, array, iteratee).value();
    result = _(array).unionWith(array, list, array, list, array, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _(list).unionWith(list).value();
    result = _(list).unionWith(array, list).value();
    result = _(list).unionWith(list, array, list, array, list).value();

    result = _(list).unionWith(list, iteratee).value();
    result = _(list).unionWith(array, list, iteratee).value();
    result = _(list).unionWith(list, array, list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _.chain(array).unionWith(array).value();
    result = _.chain(array).unionWith(list, array).value();
    result = _.chain(array).unionWith(array, list, array, list, array).value();

    result = _.chain(array).unionWith(array, iteratee).value();
    result = _.chain(array).unionWith(list, array, iteratee).value();
    result = _.chain(array).unionWith(array, list, array, list, array, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _.chain(list).unionWith(list).value();
    result = _.chain(list).unionWith(array, list).value();
    result = _.chain(list).unionWith(list, array, list, array, list).value();

    result = _.chain(list).unionWith(list, iteratee).value();
    result = _.chain(list).unionWith(array, list, iteratee).value();
    result = _.chain(list).unionWith(list, array, list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();
}

// _.uniq
namespace TestUniq {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.uniq('abc');
        result = _('abc').uniq().value();
        result = _.chain('abc').uniq().value();
    }

    {
        let result: TResult[];

        result = _.uniq(array);
        result = _.uniq(list);
        result = _(array).uniq().value();
        result = _(list).uniq().value();
        result = _.chain(array).uniq().value();
        result = _.chain(list).uniq().value();
    }
}

// _.uniqBy
namespace TestUniqBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => 0;

    {
        let result: string[];

        result = _.uniqBy('abc', stringIterator);
        result = _('abc').uniqBy(stringIterator).value();
        result = _.chain('abc').uniqBy(stringIterator).value();
    }

    {
        let result: TResult[];

        result = _.uniqBy(array, listIterator);
        result = _.uniqBy(array, 'a');
        result = _.uniqBy(array, {a: 42});
        result = _.uniqBy(array, ['a', 42]);
        result = _(array).uniqBy(listIterator).value();
        result = _(array).uniqBy('a').value();
        result = _(array).uniqBy({a: 42}).value();
        result = _(array).uniqBy(['a', 42]).value();
        result = _.chain(array).uniqBy(listIterator).value();
        result = _.chain(array).uniqBy('a').value();
        result = _.chain(array).uniqBy({a: 42}).value();
        result = _.chain(array).uniqBy(['a', 42]).value();

        result = _.uniqBy(list, listIterator);
        result = _.uniqBy(list, 'a');
        result = _.uniqBy(list, {a: 42});
        result = _.uniqBy(list, ['a', 42]);
        result = _(list).uniqBy(listIterator).value();
        result = _(list).uniqBy('a').value();
        result = _(list).uniqBy({a: 42}).value();
        result = _(list).uniqBy(['a', 42]).value();
        result = _.chain(list).uniqBy(listIterator).value();
        result = _.chain(list).uniqBy('a').value();
        result = _.chain(list).uniqBy({a: 42}).value();
        result = _.chain(list).uniqBy(['a', 42]).value();
    }
}

// _.uniqWith
namespace TestUniqWith {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.uniqWith(array);
    result = _.uniqWith(array, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });

    result = _.uniqWith(list);
    result = _.uniqWith(list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });

    result = _(array).uniqWith().value();
    result = _(array).uniqWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _(list).uniqWith().value();
    result = _(list).uniqWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _.chain(array).uniqWith().value();
    result = _.chain(array).uniqWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _.chain(list).uniqWith().value();
    result = _.chain(list).uniqWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();
}

// _.sortedUniq
namespace TestSortedUniq {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: string[];
        result = _.sortedUniq('abc');
        result = _('abc').sortedUniq().value();
        result = _.chain('abc').sortedUniq().value();
    }

    {
        let result: TResult[];

        result = _.sortedUniq(array);
        result = _.sortedUniq(list);
        result = _(array).sortedUniq().value();
        result = _(list).sortedUniq().value();
        result = _.chain(array).sortedUniq().value();
        result = _.chain(list).sortedUniq().value();
    }
}

// _.sortedUniqBy
namespace TestSortedUniqBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let stringIterator = (value: string, index: number, collection: string) => "";
    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => 0;

    {
        let result: string[];

        result = _.sortedUniqBy('abc', stringIterator);
        result = _('abc').sortedUniqBy(stringIterator).value();
        result = _.chain('abc').sortedUniqBy(stringIterator).value();
    }

    {
        let result: TResult[];

        result = _.sortedUniqBy(array, listIterator);
        result = _.sortedUniqBy(array, 'a');
        result = _.sortedUniqBy(array, {a: 42});
        result = _.sortedUniqBy(array, ['a', 42]);
        result = _(array).sortedUniqBy(listIterator).value();
        result = _(array).sortedUniqBy('a').value();
        result = _(array).sortedUniqBy({a: 42}).value();
        result = _(array).sortedUniqBy(['a', 42]).value();
        result = _.chain(array).sortedUniqBy(listIterator).value();
        result = _.chain(array).sortedUniqBy('a').value();
        result = _.chain(array).sortedUniqBy({a: 42}).value();
        result = _.chain(array).sortedUniqBy(['a', 42]).value();

        result = _.sortedUniqBy(list, listIterator);
        result = _.sortedUniqBy(list, 'a');
        result = _.sortedUniqBy(list, {a: 42});
        result = _.sortedUniqBy(list, ['a', 42]);
        result = _(list).sortedUniqBy(listIterator).value();
        result = _(list).sortedUniqBy('a').value();
        result = _(list).sortedUniqBy({a: 42}).value();
        result = _(list).sortedUniqBy(['a', 42]).value();
        result = _.chain(list).sortedUniqBy(listIterator).value();
        result = _.chain(list).sortedUniqBy('a').value();
        result = _.chain(list).sortedUniqBy({a: 42}).value();
        result = _.chain(list).sortedUniqBy(['a', 42]).value();
    }
}

// _.unzip
namespace TestUnzip {
    let array: Array<Array<string | number | boolean>> = [['a', 'b'], [1, 2], [true, false]];

    let list: _.List<_.List<string|number|boolean>> = {
        0: {0: 'a', 1: 'b', length: 2},
        1: {0: 1, 1: 2, length: 2},
        2: {0: true, 1: false, length: 2},
        length: 3
    };
    let nilArray: TResult[][] | null | undefined = [] as any;
    let nilList: _.List<_.List<TResult>> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.unzip(nilArray);
        result = _.unzip(nilList);
    }

    {
        let result: Array<Array<string|number|boolean>>;

        result = _.unzip(array);
        result = _.unzip(list);
        result = _(array).unzip().value();
        result = _(list).unzip().value();
        result = _(array).chain().unzip().value();
        result = _(list).chain().unzip().value();
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
        let result: TResult[];
        result = _.unzipWith(testUnzipWithArray, (...group) => {
            group; // $ExpectType number[]
            return any as TResult;
        });
        result = _.unzipWith(testUnzipWithArray, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return any as TResult;
        });
        result = _.unzipWith(testUnzipWithList, (...group) => {
            group; // $ExpectType number[]
            return any as TResult;
        });
        result = _.unzipWith(testUnzipWithList, (value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return any as TResult;
        });

        result = _(testUnzipWithArray).unzipWith((...group): TResult => {
            group; // $ExpectType number[]
            return any as TResult;
        }).value();
        result = _(testUnzipWithArray).unzipWith((value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return any as TResult;
        }).value();
        result = _(testUnzipWithList).unzipWith((...group): TResult => {
            group; // $ExpectType number[]
            return any as TResult;
        }).value();
        result = _(testUnzipWithList).unzipWith((value1, value2, value3) => {
            value1; // $ExpectType number
            value2; // $ExpectType number
            value3; // $ExpectType number
            return any as TResult;
        }).value();
    }
}

// _.without
namespace TestWithout {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;

    {
        let result: number[];

        result = _.without(array);
        result = _.without(array, 1);
        result = _.without(array, 1, 2);
        result = _.without(array, 1, 2, 3);
        result = _.without(list);
        result = _.without(list, 1);
        result = _.without(list, 1, 2);
        result = _.without(list, 1, 2, 3);
    }

    {
        let result: _.LoDashImplicitWrapper<number[]>;

        result = _(array).without();
        result = _(array).without(1);
        result = _(array).without(1, 2);
        result = _(array).without(1, 2, 3);
        result = _(list).without();
        result = _(list).without(1);
        result = _(list).without(1, 2);
        result = _(list).without(1, 2, 3);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _(array).chain().without();
        result = _(array).chain().without(1);
        result = _(array).chain().without(1, 2);
        result = _(array).chain().without(1, 2, 3);
        result = _(list).chain().without();
        result = _(list).chain().without(1);
        result = _(list).chain().without(1, 2);
        result = _(list).chain().without(1, 2, 3);
    }
}

// _.xor
namespace TestXor {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: any[];
        result = _.xor();
    }

    {
        let result: TResult[];

        result = _.xor(array);
        result = _.xor(array, list);
        result = _.xor(array, list, array);

        result = _.xor(list);
        result = _.xor(list, array);
        result = _.xor(list, array, list);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).xor();
        result = _(array).xor(list);
        result = _(array).xor(list, array);

        result = _(list).xor();
        result = _(list).xor(array);
        result = _(list).xor(array, list);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().xor();
        result = _(array).chain().xor(list);
        result = _(array).chain().xor(list, array);

        result = _(list).chain().xor();
        result = _(list).chain().xor(array);
        result = _(list).chain().xor(array, list);
    }
}

// _.xorBy
namespace TestXorBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let anyResult: any[] = _.xorBy();

    let result: TResult[];

    result = _.xorBy(list);
    result = _.xorBy(list, 'a');
    result = _.xorBy(list, {a: 42});
    result = _.xorBy(list, ['a', 42]);
    result = _.xorBy(list, (value) => {
        value; // $ExpectType TResult
        return 1;
    });
    result = _.xorBy(array, list, array, list);
    result = _.xorBy<TResult>(array, list, array, list, 'a');
    result = _.xorBy(array, list, array, list, {a: 42});
    result = _.xorBy<TResult>(array, list, array, list, ['a', 42]);
    result = _.xorBy(array, list, array, list, (value) => {
        value; // $ExpectType TResult
        return 1;
    });

    result = _(list).xorBy().value();
    result = _(list).xorBy('a').value();
    result = _(list).xorBy({a: 42}).value();
    result = _(list).xorBy(['a', 42]).value();
    result = _(list).xorBy((value) => {
        value; // $ExpectType TResult
        return 1;
    }).value();
    result = _(array).xorBy(list, array, list).value();
    result = _(array).xorBy<TResult>(list, array, list, 'a').value();
    result = _(array).xorBy(list, array, list, {a: 42}).value();
    result = _(array).xorBy<TResult>(list, array, list, ['a', 42]).value();
    result = _(array).xorBy(list, array, list, (value) => {
        value; // $ExpectType TResult
        return 1;
    }).value();
    result = _.chain(list).xorBy().value();
    result = _.chain(list).xorBy('a').value();
    result = _.chain(list).xorBy({a: 42}).value();
    result = _.chain(list).xorBy(['a', 42]).value();
    result = _.chain(list).xorBy((value) => {
        value; // $ExpectType TResult
        return 1;
    }).value();
    result = _.chain(array).xorBy(list, array, list).value();
    result = _.chain(array).xorBy<TResult>(list, array, list, 'a').value();
    result = _.chain(array).xorBy(list, array, list, {a: 42}).value();
    result = _.chain(array).xorBy<TResult>(list, array, list, ['a', 42]).value();
    result = _.chain(array).xorBy(list, array, list, (value) => {
        value; // $ExpectType TResult
        return 1;
    }).value();
}

// _.xorWith
namespace TestXorWith {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    let result: TResult[];

    result = _.xorWith(list);
    result = _.xorWith(list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });
    result = _.xorWith(array, list, array, list);
    result = _.xorWith(array, list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    });

    result = _(list).xorWith().value();
    result = _(list).xorWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();
    result = _(array).xorWith(list, array, list).value();
    result = _(array).xorWith(list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();

    result = _.chain(list).xorWith().value();
    result = _.chain(list).xorWith((a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();
    result = _.chain(array).xorWith(list, array, list).value();
    result = _.chain(array).xorWith(list, array, list, (a, b) => {
        a; // $ExpectType TResult
        b; // $ExpectType TResult
        return true;
    }).value();
}

// _.zip
namespace TestZip {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;

    {
        let result: TResult[][];

        result = _.zip(array);
        result = _.zip(array, list);
        result = _.zip(array, list, array);

        result = _.zip(list);
        result = _.zip(list, array);
        result = _.zip(list, array, list);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[][]>;

        result = _(array).zip(list);
        result = _(array).zip(list, array);

        result = _(list).zip(array);
        result = _(list).zip(array, list);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[][]>;

        result = _(array).chain().zip(list);
        result = _(array).chain().zip(list, array);

        result = _(list).chain().zip(array);
        result = _(list).chain().zip(array, list);
    }
}

// _.zipObject
namespace TestZipObject {
    {
        let arrayOfKeys: string[] = [];
        let arrayOfValues: number[] = [];
        let arrayOfKeyValuePairs: Array<Array<string|number>> = [];

        let listOfKeys: _.List<string> = [];
        let listOfValues: _.List<number> = [];
        let listOfKeyValuePairs: _.List<_.List<string|number>> = [];

        let result: _.Dictionary<number>;

        result = _.zipObject(arrayOfKeys);
        result = _.zipObject(listOfKeys);
        result = _.zipObject(arrayOfKeyValuePairs);
        result = _.zipObject(listOfKeyValuePairs);
        result = _.zipObject(arrayOfKeys, arrayOfValues);
        result = _.zipObject(arrayOfKeys, listOfValues);
        result = _.zipObject(listOfKeys, arrayOfValues);
        result = _.zipObject(listOfKeys, listOfValues);
        result = _(arrayOfKeys).zipObject().value();
        result = _(listOfKeys).zipObject().value();
        result = _(arrayOfKeyValuePairs).zipObject().value();
        result = _(listOfKeyValuePairs).zipObject().value();
        result = _(arrayOfKeys).zipObject(arrayOfValues).value();
        result = _(arrayOfKeys).zipObject(listOfValues).value();
        result = _(listOfKeys).zipObject(arrayOfValues).value();
        result = _(listOfKeys).zipObject(listOfValues).value();
        result = _.chain(arrayOfKeys).zipObject().value();
        result = _.chain(listOfKeys).zipObject().value();
        result = _.chain(arrayOfKeyValuePairs).zipObject().value();
        result = _.chain(listOfKeyValuePairs).zipObject().value();
        result = _.chain(arrayOfKeys).zipObject(arrayOfValues).value();
        result = _.chain(arrayOfKeys).zipObject(listOfValues).value();
        result = _.chain(listOfKeys).zipObject(arrayOfValues).value();
        result = _.chain(listOfKeys).zipObject(listOfValues).value();

        result = _.zipObject<_.Dictionary<number>>(arrayOfKeys, arrayOfValues);
    }

    {
        let arrayOfKeys: string[] = [];
        let arrayOfValues: number[] = [];
        let arrayOfKeyValuePairs: Array<Array<string|number>> = [];

        let listOfKeys: _.List<string> = [];
        let listOfValues: _.List<number> = [];
        let listOfKeyValuePairs: _.List<_.List<string|number>> = [];

        let result: _.Dictionary<number>;

        result = _.zipObjectDeep(arrayOfKeys);
        result = _.zipObjectDeep(listOfKeys);
        result = _.zipObjectDeep(arrayOfKeyValuePairs);
        result = _.zipObjectDeep(listOfKeyValuePairs);
        result = _.zipObjectDeep(arrayOfKeys, arrayOfValues);
        result = _.zipObjectDeep(arrayOfKeys, listOfValues);
        result = _.zipObjectDeep(listOfKeys, arrayOfValues);
        result = _.zipObjectDeep(listOfKeys, listOfValues);
        result = _(arrayOfKeys).zipObjectDeep().value();
        result = _(listOfKeys).zipObjectDeep().value();
        result = _(arrayOfKeyValuePairs).zipObjectDeep().value();
        result = _(listOfKeyValuePairs).zipObjectDeep().value();
        result = _(arrayOfKeys).zipObjectDeep(arrayOfValues).value();
        result = _(arrayOfKeys).zipObjectDeep(listOfValues).value();
        result = _(listOfKeys).zipObjectDeep(arrayOfValues).value();
        result = _(listOfKeys).zipObjectDeep(listOfValues).value();
        result = _.chain(arrayOfKeys).zipObjectDeep().value();
        result = _.chain(listOfKeys).zipObjectDeep().value();
        result = _.chain(arrayOfKeyValuePairs).zipObjectDeep().value();
        result = _.chain(listOfKeyValuePairs).zipObjectDeep().value();
        result = _.chain(arrayOfKeys).zipObjectDeep(arrayOfValues).value();
        result = _.chain(arrayOfKeys).zipObjectDeep(listOfValues).value();
        result = _.chain(listOfKeys).zipObjectDeep(arrayOfValues).value();
        result = _.chain(listOfKeys).zipObjectDeep(listOfValues).value();
    }

    {
        let arrayOfKeys: Array<keyof TResult> = ['a', 'b', 'c'];
        let listOfKeys: ArrayLike<keyof TResult> = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
        let result: TResult;

        result = _.zipObject(arrayOfKeys, [1, '', true]);
        result = _.zipObject(listOfKeys, [1, '', true]);
        result = _(arrayOfKeys).zipObject([1, '', true]).value();
        result = _(listOfKeys).zipObject([1, '', true]).value();
        result = _.chain(arrayOfKeys).zipObject([1, '', true]).value();
        result = _.chain(listOfKeys).zipObject([1, '', true]).value();
    }
}

// _.zipWith
namespace TestZipWith {
    type TestZipWithFn = (a1: number, a2: number) => number;

    {
        let result: number[][];
        result = _.zipWith([1, 2]);
        result = _.zipWith([1, 2], [3, 4], [5, 6]);
        result = _([1, 2]).zipWith().value();
        result = _([1, 2]).zipWith([3, 4], [5, 6]).value();
        result = _.chain([1, 2]).zipWith().value();
        result = _.chain([1, 2]).zipWith([3, 4], [5, 6]).value();
    }
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
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _.chain(['']);
        result = _(['']).chain();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: string}>;

        result = _.chain({a: ''});
        result = _({a: ''}).chain();
    }

    {
        // $ExpectType number[][]
        _.chain([1, 2, 3])
            .zip([1, 2, 3], [1, 2, 3])
            .filter((a) => !!a)
            .value();

        // $ExpectType number[] | undefined
        _.chain([1, 2, 3])
            .zip([1, 2, 3], [1, 2, 3])
            .filter((a) => !!a)
            .find((a) => a[0] === 2)
            .value();

        // $ExpectType number | undefined
        _.chain([1, 2, 3])
            .zip([1, 2, 3], [1, 2, 3])
            .filter((a) => !!a)
            .find((a) => a[0] === 2)
            .head()
            .value();
    }
}

// _.tap
namespace TestTap {
    {
        let result: string;

        result = _.tap('', (value) => {
            value; // $ExpectType string
        });
        result = _('').tap((value) => {
            value; // $ExpectType string
        }).value();
        result = _.chain('').tap((value) => {
            value; // $ExpectType string
        }).value();
    }

    {
        let result: string[];

        result = _.tap([''], (value) => {
            value; // $ExpectType string[]
        });
        result = _(['']).tap((value) => {
            value; // $ExpectType string[]
        }).value();
        result = _.chain(['']).tap((value) => {
            value; // $ExpectType string[]
        }).value();
    }

    {
        let result: {a: string};

        result = _.tap({a: ''}, (value) => {
            value; // $ExpectType { a: string; }
        });
        result = _({a: ''}).tap((value) => {
            value; // $ExpectType { a: string; }
        }).value();
        result = _.chain({a: ''}).tap((value) => {
            value; // $ExpectType { a: string; }
        }).value();
    }
}

// _.thru
namespace TestThru {
    {
        let result: number;

        result = _.thru(1, (value) => {
            value; // $ExpectType number
            return 1;
        });
        result = _(1).thru((value) => {
            value; // $ExpectType number
            return 1;
        }).value();
        result = _.chain(1).thru((value) => {
            value; // $ExpectType number
            return 1;
        }).value();
    }

    {
        let result: string;

        result = _.thru(1, (value) => {
            value; // $ExpectType number
            return '';
        });
        result = _(1).thru((value) => {
            value; // $ExpectType number
            return '';
        }).value();
        result = _.chain(1).thru((value) => {
            value; // $ExpectType number
            return '';
        }).value();
    }

    {
        let result: {a: string};

        result = _.thru([''], (value) => {
            value; // $ExpectType string[]
            return { a: '' };
        });
        result = _(['']).thru((value) => {
            value; // $ExpectType string[]
            return { a: '' };
        }).value();
        result = _.chain(['']).thru((value) => {
            value; // $ExpectType string[]
            return { a: '' };
        }).value();
    }

    // $ExpectType boolean
    _('')
        .thru((value) => {
            value; // $ExpectType string
            return [1, ''];
        })
        .thru((value) => {
            value; // $ExpectType (string | number)[]
            return { a: '' };
        })
        .thru((value) => {
            value; // $ExpectType { a: string; }
            return true;
        }).value();
    // $ExpectType boolean
    _.chain('')
        .thru((value) => {
            value; // $ExpectType string
            return [1, ''];
        })
        .thru((value) => {
            value; // $ExpectType (string | number)[]
            return { a: '' };
        })
        .thru((value) => {
            value; // $ExpectType { a: string; }
            return true;
        }).value();
}

// _.prototype.commit
namespace TestCommit {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(42).commit();
    }

    {
        let result: _.LoDashImplicitWrapper<any[]>;
        result = _([] as any[]).commit();
    }

    {
        let result: _.LoDashImplicitWrapper<{}>;
        result = _({}).commit();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(42).chain().commit();
    }

    {
        let result: _.LoDashExplicitWrapper<any[]>;
        result = _([] as any[]).chain().commit();
    }

    {
        let result: _.LoDashExplicitWrapper<{}>;
        result = _({}).chain().commit();
    }
}

// _.prototype.plant
namespace TestPlant {
    {
        let result: _.LoDashImplicitWrapper<number>;
        result = _(any).plant(42);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;
        result = _(any).plant('');
    }

    {
        let result: _.LoDashImplicitWrapper<boolean>;
        result = _(any).plant(true);
    }

    {
        let result: _.LoDashImplicitWrapper<number[]>;
        result = _(any).plant([42]);
    }

    {
        let result: _.LoDashImplicitWrapper<any[]>;
        result = _(any).plant([]);
    }

    {
        let result: _.LoDashImplicitWrapper<{}>;
        result = _(any).plant({});
    }

    {
        let result: _.LoDashExplicitWrapper<number>;
        result = _(any).chain().plant(42);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;
        result = _(any).chain().plant('');
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _(any).chain().plant(true);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;
        result = _(any).chain().plant([42]);
    }

    {
        let result: _.LoDashExplicitWrapper<any[]>;
        result = _(any).chain().plant([]);
    }

    {
        let result: _.LoDashExplicitWrapper<{}>;
        result = _(any).chain().plant({});
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
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;
    let obj: TResult | null | undefined = any;

    {
        let result: TResult[];

        result = _.at(array, 0, '1', [2], ['3'], [4, '5']);
        result = _.at(list, 0, '1', [2], ['3'], [4, '5']);
        result = _.at(dictionary, 0, '1', ['3'], ['a', '5']);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).at(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).at('1', ['3'], ['a', '5']);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(list).chain().at(0, '1', [2], ['3'], [4, '5']);
        result = _(dictionary).chain().at(0, '1', ['3'], ['a', '5']);
    }

    {
        _.at(obj, 'a', ['b', 'c']); // $ExpectType (string | number | boolean)[]
        _(obj).at('a', ['b', 'c']); // $ExpectType LoDashImplicitWrapper<(string | number | boolean)[]>
        _.chain(obj).at('a', ['b', 'c']); // $ExpectType LoDashExplicitWrapper<(string | number | boolean)[]>
    }
}

// _.countBy
namespace TestCountBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;
    let numericDictionaryIterator: (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => any = (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => 1;

    {
        let result: _.Dictionary<number>;

        result = _.countBy('');
        result = _.countBy('', stringIterator);
        result = _('').countBy().value();
        result = _('').countBy(stringIterator).value();
        result = _.chain('').countBy().value();
        result = _.chain('').countBy(stringIterator).value();

        result = _.countBy(array);
        result = _.countBy(array, listIterator);
        result = _.countBy(array, '');
        result = _.countBy(array, {a: 42});
        result = _.countBy(array, ['a', 42]);
        result = _(array).countBy().value();
        result = _(array).countBy(listIterator).value();
        result = _(array).countBy('').value();
        result = _(array).countBy({a: 42}).value();
        result = _(array).countBy(['a', 42]).value();
        result = _.chain(array).countBy().value();
        result = _.chain(array).countBy(listIterator).value();
        result = _.chain(array).countBy('').value();
        result = _.chain(array).countBy({a: 42}).value();
        result = _.chain(array).countBy(['a', 42]).value();

        result = _.countBy(list);
        result = _.countBy(list, listIterator);
        result = _.countBy(list, '');
        result = _.countBy(list, {a: 42});
        result = _.countBy(list, ['a', 42]);
        result = _(list).countBy().value();
        result = _(list).countBy(listIterator).value();
        result = _(list).countBy('').value();
        result = _(list).countBy({a: 42}).value();
        result = _(list).countBy(['a', 42]).value();
        result = _.chain(list).countBy().value();
        result = _.chain(list).countBy(listIterator).value();
        result = _.chain(list).countBy('').value();
        result = _.chain(list).countBy({a: 42}).value();
        result = _.chain(list).countBy(['a', 42]).value();

        result = _.countBy(dictionary);
        result = _.countBy(dictionary, dictionaryIterator);
        result = _.countBy(dictionary, '');
        result = _.countBy(dictionary, {a: 42});
        result = _.countBy(dictionary, ['a', 42]);
        result = _(dictionary).countBy().value();
        result = _(dictionary).countBy(listIterator).value();
        result = _(dictionary).countBy('').value();
        result = _(dictionary).countBy({a: 42}).value();
        result = _(dictionary).countBy(['a', 42]).value();
        result = _.chain(dictionary).countBy().value();
        result = _.chain(dictionary).countBy(listIterator).value();
        result = _.chain(dictionary).countBy('').value();
        result = _.chain(dictionary).countBy({a: 42}).value();
        result = _.chain(dictionary).countBy(['a', 42]).value();

        result = _.countBy(numericDictionary);
        result = _.countBy(numericDictionary, numericDictionaryIterator);
        result = _.countBy(numericDictionary, '');
        result = _.countBy(numericDictionary, {a: 42});
        result = _.countBy(numericDictionary, ['a', 42]);
        result = _(numericDictionary).countBy().value();
        result = _(numericDictionary).countBy(listIterator).value();
        result = _(numericDictionary).countBy('').value();
        result = _(numericDictionary).countBy({a: 42}).value();
        result = _(numericDictionary).countBy(['a', 42]).value();
        result = _.chain(numericDictionary).countBy().value();
        result = _.chain(numericDictionary).countBy(listIterator).value();
        result = _.chain(numericDictionary).countBy('').value();
        result = _.chain(numericDictionary).countBy({a: 42}).value();
        result = _.chain(numericDictionary).countBy(['a', 42]).value();
    }
}

// _.each
namespace TestEach {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string;

        result = _.each('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.each('' as (string | null | undefined), stringIterator);
    }

    {
        let result: TResult[];

        result = _.each(array, listIterator);
    }

    {
        let result: TResult[] | null | undefined;

        result = _.each(nilArray, listIterator);
    }

    {
        let result: _.List<TResult>;

        result = _.each(list, listIterator);
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.each(nilList, listIterator);
    }

    {
        let result: _.Dictionary<TResult | null | undefined>;

        result = _.each(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.each(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').each(stringIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).each(listIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult>>;

        result = _(list).each(listIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).each(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().each(stringIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().each(listIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult>>;

        result = _(list).chain().each(listIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().each(dictionaryIterator);
    }
}

// _.eachRight
namespace TestEachRight {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string;

        result = _.eachRight('', stringIterator);
    }

    {
        let result: string | null | undefined;

        result = _.eachRight('' as (string | null | undefined), stringIterator);
    }

    {
        let result: TResult[];

        result = _.eachRight(array, listIterator);
    }

    {
        let result: TResult[] | null | undefined;

        result = _.eachRight(nilArray, listIterator);
    }

    {
        let result: _.List<TResult>;

        result = _.eachRight(list, listIterator);
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.eachRight(nilList, listIterator);
    }

    {
        let result: _.Dictionary<TResult | null | undefined>;

        result = _.eachRight(dictionary, dictionaryIterator);
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.eachRight(nilDictionary, dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<string>;

        result = _('').eachRight(stringIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).eachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult>>;

        result = _(list).eachRight(listIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).eachRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('').chain().eachRight(stringIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().eachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult>>;

        result = _(list).chain().eachRight(listIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().eachRight(dictionaryIterator);
    }
}

// _.every
namespace TestEvery {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;
    let numericDictionaryIterator = (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => true;

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

        result = _.every([{ a: 1, b: { c: '', d: true }}], { b: { c: '' }});

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

        result = _([{ a: 1, b: { c: '', d: true }}]).every({ b: { c: '' }});
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

        result = _([{ a: 1, b: { c: '', d: true }}]).chain().every({ b: { c: '' }});
    }
}

// _.filter
namespace TestFilter {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string[];

        result = _.filter('', stringIterator);
    }

    {
        let result: TResult[];

        result = _.filter(array, listIterator);
        result = _.filter(array, '');
        result = _.filter(array, {a: 42});
        result = _.filter(array, ['a', 42]);

        result = _.filter(list, listIterator);
        result = _.filter(list, '');
        result = _.filter(list, {a: 42});
        result = _.filter(list, ['a', 42]);

        result = _.filter(dictionary, dictionaryIterator);
        result = _.filter(dictionary, '');
        result = _.filter(dictionary, {a: 42});
        result = _.filter(dictionary, ['a', 42]);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('').filter(stringIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).filter(listIterator);
        result = _(array).filter('');
        result = _(array).filter({a: 42});
        result = _(array).filter(['a', 42]);

        result = _(list).filter(listIterator);
        result = _(list).filter('');
        result = _(list).filter({a: 42});
        result = _(list).filter(['a', 42]);

        result = _(dictionary).filter(dictionaryIterator);
        result = _(dictionary).filter('');
        result = _(dictionary).filter({a: 42});
        result = _(dictionary).filter(['a', 42]);
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('').chain().filter(stringIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().filter(listIterator);
        result = _(array).chain().filter('');
        result = _(array).chain().filter({a: 42});
        result = _(array).chain().filter(['a', 42]);

        result = _(list).chain().filter(listIterator);
        result = _(list).chain().filter('');
        result = _(list).chain().filter({a: 42});
        result = _(list).chain().filter(['a', 42]);

        result = _(dictionary).chain().filter(dictionaryIterator);
        result = _(dictionary).chain().filter('');
        result = _(dictionary).chain().filter({a: 42});
        result = _(dictionary).chain().filter(['a', 42]);
    }

    {
        // Test filtering with type guard
        let a2: Array<string | number> | null | undefined = any;
        let d2: _.Dictionary<string | number> | null | undefined = any;

        _.filter(a2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _.filter(d2, (item: string | number): item is number => typeof item === "number"); // $ExpectType number[]
        _(a2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitWrapper<number[]>
        _(d2).filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashImplicitWrapper<number[]>
        _(a2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitWrapper<number[]>
        _(d2).chain().filter((item: string | number): item is number => typeof item === "number"); // $ExpectType LoDashExplicitWrapper<number[]>
    }

    {
        // $ExpectType any[]
        _.filter(any, (value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
        // $ExpectType LoDashImplicitWrapper<any[]>
        _(any).filter((value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
        // $ExpectType LoDashExplicitWrapper<any[]>
        _.chain(any).filter((value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
    }
}

// _.find
namespace TestFind {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;

    let result: TResult | undefined;

    result = _.find(array);
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

    result = _.chain(array).find().value();
    result = _.chain(array).find(listIterator).value();
    result = _.chain(array).find(listIterator, 1).value();
    result = _.chain(array).find('').value();
    result = _.chain(array).find('', 1).value();
    result = _.chain(array).find({a: 42}).value();
    result = _.chain(array).find({a: 42}, 1).value();
    result = _.chain(array).find(['a', 5]).value();
    result = _.chain(array).find(['a', 5], 1).value();

    result = _.chain(list).find().value();
    result = _.chain(list).find(listIterator).value();
    result = _.chain(list).find(listIterator, 1).value();
    result = _.chain(list).find('').value();
    result = _.chain(list).find('', 1).value();
    result = _.chain(list).find({a: 42}).value();
    result = _.chain(list).find({a: 42}, 1).value();
    result = _.chain(list).find(['a', 5]).value();
    result = _.chain(list).find(['a', 5], 1).value();

    result = _.chain(dictionary).find().value();
    result = _.chain(dictionary).find(dictionaryIterator).value();
    result = _.chain(dictionary).find(dictionaryIterator, 1).value();
    result = _.chain(dictionary).find('').value();
    result = _.chain(dictionary).find('', 1).value();
    result = _.chain(dictionary).find({a: 42}).value();
    result = _.chain(dictionary).find({a: 42}, 1).value();
    result = _.chain(dictionary).find(['a', 5]).value();
    result = _.chain(dictionary).find(['a', 5], 1).value();

    result = _.find([any as TResult, null, undefined], (value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _([any as TResult, null, undefined]).find((value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _.chain([any as TResult, null, undefined]).find((value: TResult | null | undefined): value is TResult | undefined => value !== null).value();
}

// _.findLast
namespace TestFindLast {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;

    let result: TResult | undefined;

    result = _.findLast(array);
    result = _.findLast(array, listIterator);
    result = _.findLast(array, listIterator, 1);
    result = _.findLast(array, '');
    result = _.findLast(array, '', 1);
    result = _.findLast(array, {a: 42});
    result = _.findLast(array, {a: 42}, 1);
    result = _.findLast(array, ['a', 5]);
    result = _.findLast(array, ['a', 5], 1);
    result = _(array).findLast();
    result = _(array).findLast(listIterator);
    result = _(array).findLast(listIterator, 1);
    result = _(array).findLast('');
    result = _(array).findLast('', 1);
    result = _(array).findLast({a: 42});
    result = _(array).findLast({a: 42}, 1);
    result = _(array).findLast(['a', 5]);
    result = _(array).findLast(['a', 5], 1);
    result = _.chain(array).findLast().value();
    result = _.chain(array).findLast(listIterator).value();
    result = _.chain(array).findLast(listIterator, 1).value();
    result = _.chain(array).findLast('').value();
    result = _.chain(array).findLast('', 1).value();
    result = _.chain(array).findLast({a: 42}).value();
    result = _.chain(array).findLast({a: 42}, 1).value();
    result = _.chain(array).findLast(['a', 5]).value();
    result = _.chain(array).findLast(['a', 5], 1).value();

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
    result = _(list).findLast();
    result = _(list).findLast(listIterator);
    result = _(list).findLast(listIterator, 1);
    result = _(list).findLast('');
    result = _(list).findLast('', 1);
    result = _(list).findLast({a: 42});
    result = _(list).findLast({a: 42}, 1);
    result = _(list).findLast(['a', 5]);
    result = _(list).findLast(['a', 5], 1);
    result = _.chain(list).findLast().value();
    result = _.chain(list).findLast(listIterator).value();
    result = _.chain(list).findLast(listIterator, 1).value();
    result = _.chain(list).findLast('').value();
    result = _.chain(list).findLast('', 1).value();
    result = _.chain(list).findLast({a: 42}).value();
    result = _.chain(list).findLast({a: 42}, 1).value();
    result = _.chain(list).findLast(['a', 5]).value();
    result = _.chain(list).findLast(['a', 5], 1).value();

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
    result = _(dictionary).findLast();
    result = _(dictionary).findLast(dictionaryIterator);
    result = _(dictionary).findLast(dictionaryIterator, 1);
    result = _(dictionary).findLast('');
    result = _(dictionary).findLast('', 1);
    result = _(dictionary).findLast({a: 42});
    result = _(dictionary).findLast({a: 42}, 1);
    result = _(dictionary).findLast(['a', 5]);
    result = _(dictionary).findLast(['a', 5], 1);
    result = _.chain(dictionary).findLast().value();
    result = _.chain(dictionary).findLast(dictionaryIterator).value();
    result = _.chain(dictionary).findLast(dictionaryIterator, 1).value();
    result = _.chain(dictionary).findLast('').value();
    result = _.chain(dictionary).findLast('', 1).value();
    result = _.chain(dictionary).findLast({a: 42}).value();
    result = _.chain(dictionary).findLast({a: 42}, 1).value();
    result = _.chain(dictionary).findLast(['a', 5]).value();
    result = _.chain(dictionary).findLast(['a', 5], 1).value();

    result = _.findLast([any as TResult, null, undefined], (value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _([any as TResult, null, undefined]).findLast((value: TResult | null | undefined): value is TResult | undefined => value !== null);
    result = _.chain([any as TResult, null, undefined]).findLast((value: TResult | null | undefined): value is TResult | undefined => value !== null).value();
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

        result = _.flatMap('abc');
        result = _.flatMap([['a'], ['b'], ['c']]);
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
    }

    {
        let result: boolean[];

        result = _.flatMap(objArray, ['a', 42]);
        result = _.flatMap(objArray, {a: 42});

        result = _.flatMap(objList, ['a', 42]);
        result = _.flatMap(objList, {a: 42});

        result = _.flatMap(objDictionary, ['a', 42]);
        result = _.flatMap(objDictionary, {a: 42});

        result = _.flatMap(objNumericDictionary, ['a', 42]);
        result = _.flatMap(objNumericDictionary, {a: 42});
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('abc').flatMap();
        result = _([['a'], ['b'], ['c']]).flatMap();
        result = _('abc').flatMap(stringIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<number[]>;

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
        let result: _.LoDashImplicitWrapper<boolean[]>;

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
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('abc').chain().flatMap();
        result = _([['a'], ['b'], ['c']]).chain().flatMap();
        result = _('abc').chain().flatMap(stringIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

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
        let result: _.LoDashExplicitWrapper<boolean[]>;

        result = _(objArray).chain().flatMap(['a', 42]);
        result = _(objArray).chain().flatMap({a: 42});

        result = _(objList).chain().flatMap(['a', 42]);
        result = _(objList).chain().flatMap({a: 42});

        result = _(objDictionary).chain().flatMap(['a', 42]);
        result = _(objDictionary).chain().flatMap({a: 42});

        result = _(objNumericDictionary).chain().flatMap(['a', 42]);
        result = _(objNumericDictionary).chain().flatMap({a: 42});
    }
}

// _.forEach
namespace TestForEach {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

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
        let result: TResult[];
        result = _.forEach(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEach(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: TResult[] | null | undefined;

        result = _.forEach(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEach(nilArray, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: any[] | null | undefined;

        result = _.forEach(anyArray, (value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType any
        _.forEach(any, (value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.List<TResult>;

        result = _.forEach(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.forEach(nilList, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult>;

        result = _.forEach(dictionary, (value, index: string, collection) => {
            value; // $ExpectType TResult
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.forEach(nilDictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let sample1: TResult = any;
        sample1 = _.forEach(sample1, (value, index: string, collection) => {
            value; // $ExpectType string | number | boolean
            collection; // $ExpectType TResult
        });

        let sample2: TResult | null | undefined = any;
        sample2 = _.forEach(sample2, (value, index, collection) => {
            value; // $ExpectType string | number | boolean
            index; // $ExpectType string
            collection; // $ExpectType TResult
        });
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
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[] | null | undefined>;

        result = _(nilArray).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: _.LoDashImplicitWrapper<any[] | null | undefined>;

        result = _(anyArray).forEach((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType LoDashImplicitWrapper<any>
        _(any).forEach((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult>>;

        result = _(list).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult> | null | undefined>;

        result = _(nilList).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult> | null | undefined>;

        result = _(nilDictionary).forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
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
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[] | null | undefined>;

        result = _(nilArray).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: _.LoDashExplicitWrapper<any[] | null | undefined>;

        result = _(anyArray).chain().forEach((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType LoDashExplicitWrapper<any>
        _(any).chain().forEach((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult>>;

        result = _(list).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult> | null | undefined>;

        result = _(nilList).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult> | null | undefined>;

        result = _(nilDictionary).chain().forEach((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }
}

// _.forEachRight
namespace TestForEachRight {
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let nilArray: TResult[] | null | undefined = [] as any;
    let nilList: _.List<TResult> | null | undefined = [] as any;
    let nilDictionary: _.Dictionary<TResult> | null | undefined = any;

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
        let result: TResult[];
        result = _.forEachRight(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEachRight(array, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: TResult[] | null | undefined;

        result = _.forEachRight(array, (value, index, collection: TResult[]) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
        });
        result = _.forEachRight(nilArray, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: any[] | null | undefined;

        result = _.forEachRight(anyArray, (value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType any
        _.forEachRight(any, (value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.List<TResult>;

        result = _.forEachRight(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.List<TResult> | null | undefined;

        result = _.forEachRight(nilList, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult>;

        result = _.forEachRight(dictionary, (value, index: string, collection) => {
            value; // $ExpectType TResult
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.Dictionary<TResult> | null | undefined;

        result = _.forEachRight(nilDictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let sample1: TResult = any;
        sample1 = _.forEachRight(sample1, (value, index: string, collection) => {
            value; // $ExpectType string | number | boolean
            collection; // $ExpectType TResult
        });

        let sample2: TResult | null | undefined = any;
        sample2 = _.forEachRight(sample2, (value, index, collection) => {
            value; // $ExpectType string | number | boolean
            index; // $ExpectType string
            collection; // $ExpectType TResult
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
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[] | null | undefined>;

        result = _(nilArray).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: _.LoDashImplicitWrapper<any[] | null | undefined>;

        result = _(anyArray).forEachRight((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType LoDashImplicitWrapper<any>
        _(any).forEachRight((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult>>;

        result = _(list).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.List<TResult> | null | undefined>;

        result = _(nilList).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult> | null | undefined>;

        result = _(nilDictionary).forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
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
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[] | null | undefined>;

        result = _(nilArray).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType TResult[]
        });
    }

    {
        let anyArray: any[] | null | undefined = any;
        let result: _.LoDashExplicitWrapper<any[] | null | undefined>;

        result = _(anyArray).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType number
            collection; // $ExpectType any[]
        });
        // $ExpectType LoDashExplicitWrapper<any>
        _(any).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType any
            index; // $ExpectType string
            collection; // $ExpectType any
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult>>;

        result = _(list).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.List<TResult> | null | undefined>;

        result = _(nilList).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult>>;

        result = _(dictionary).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult> | null | undefined>;

        result = _(nilDictionary).chain().forEachRight((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }
}

// _.groupBy
namespace TestGroupBy {
    interface SampleType { a: number; b: string; c: boolean; }

    let list: _.List<SampleType> | null | undefined = [] as any;
    let dictionary: _.Dictionary<SampleType> | null | undefined = any;

    let stringIterator = (char: string, index: number, string: string) => 0;

    {
        let result: _.Dictionary<string[]>;

        result = _.groupBy('');
        result = _.groupBy('', stringIterator);
        result = _('').groupBy().value();
        result = _('').groupBy(stringIterator).value();
        result = _.chain('').groupBy().value();
        result = _.chain('').groupBy(stringIterator).value();
    }

    {
        let result: _.Dictionary<SampleType[]>;

        result = _.groupBy(list);
        result = _.groupBy(list, (value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType number
            collection; // ExpectType ArrayLike<SampleType>
        });
        result = _.groupBy(list, '');
        result = _.groupBy(list, {a: 42});
        result = _.groupBy(list, ['a', 42]);
        result = _(list).groupBy().value();
        result = _(list).groupBy((value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType number
            collection; // ExpectType ArrayLike<SampleType>
        }).value();
        result = _(list).groupBy('').value();
        result = _(list).groupBy({a: 42}).value();
        result = _(list).groupBy(['a', 42]).value();
        result = _.chain(list).groupBy().value();
        result = _.chain(list).groupBy((value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType number
            collection; // ExpectType ArrayLike<SampleType>
        }).value();
        result = _.chain(list).groupBy('').value();
        result = _.chain(list).groupBy({a: 42}).value();
        result = _.chain(list).groupBy(['a', 42]).value();

        result = _.groupBy(dictionary);
        result = _.groupBy(dictionary, (value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType string
            collection; // ExpectType Dictionary<SampleType>
        });
        result = _.groupBy(dictionary, '');
        result = _.groupBy(dictionary, {a: 42});
        result = _.groupBy(dictionary, ['a', 42]);
        result = _(dictionary).groupBy().value();
        result = _(dictionary).groupBy((value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType string
            collection; // ExpectType Dictionary<SampleType>
        }).value();
        result = _(dictionary).groupBy('').value();
        result = _(dictionary).groupBy({a: 42}).value();
        result = _(dictionary).groupBy(['a', 42]).value();
        result = _.chain(dictionary).groupBy().value();
        result = _.chain(dictionary).groupBy((value, key, collection) => {
            value; // ExpectType SampleType
            key; // ExpectType string
            collection; // ExpectType Dictionary<SampleType>
        }).value();
        result = _.chain(dictionary).groupBy('').value();
        result = _.chain(dictionary).groupBy({a: 42}).value();
        result = _.chain(dictionary).groupBy(['a', 42]).value();
    }
}

// _.includes
namespace TestIncludes {
    interface SampleType { a: string; b: number; c: boolean; }

    let array: SampleType[] | null | undefined = [] as any;
    let list: _.List<SampleType> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<SampleType> | null | undefined = obj;

    let target: SampleType = { a: "", b: 1, c: true };

    {
        let result: boolean;

        result = _.includes("test", "t");
        result = _.includes(array, target);
        result = _.includes(array, target, 42);

        result = _.includes(list, target);
        result = _.includes(list, target, 42);

        result = _.includes(dictionary, target);
        result = _.includes(dictionary, target, 42);

        result = _(array).includes(target);
        result = _(array).includes(target, 42);

        result = _(list).includes(target);
        result = _(list).includes(target, 42);

        result = _(dictionary).includes(target);
        result = _(dictionary).includes(target, 42);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(array).chain().includes(target);
        result = _(array).chain().includes(target, 42);

        result = _(list).chain().includes(target);
        result = _(list).chain().includes(target, 42);

        result = _(dictionary).chain().includes(target);
        result = _(dictionary).chain().includes(target, 42);
    }
}

// _.keyBy
namespace TestKeyBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = obj;

    let stringIterator: (value: string, index: number, collection: string) => any = (value: string, index: number, collection: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;
    let numericDictionaryIterator: (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => any = (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => 1;

    {
        let result: _.Dictionary<string>;

        result = _.keyBy('abcd');
        result = _.keyBy('abcd', stringIterator);
        result = _('abcd').keyBy().value();
        result = _('abcd').keyBy(stringIterator).value();
        result = _.chain('abcd').keyBy().value();
        result = _.chain('abcd').keyBy(stringIterator).value();
    }

    {
        let result: _.Dictionary<TResult>;

        result = _.keyBy(array);
        result = _.keyBy(array, listIterator);
        result = _.keyBy(array, 'a');
        result = _.keyBy(array, {a: 42});
        result = _.keyBy(array, listIterator);
        result = _(array).keyBy().value();
        result = _(array).keyBy(listIterator).value();
        result = _(array).keyBy('a').value();
        result = _(array).keyBy({a: 42}).value();
        result = _.chain(array).keyBy().value();
        result = _.chain(array).keyBy(listIterator).value();
        result = _.chain(array).keyBy('a').value();
        result = _.chain(array).keyBy({a: 42}).value();

        result = _.keyBy(list);
        result = _.keyBy(list, listIterator);
        result = _.keyBy(list, 'a');
        result = _.keyBy(list, {a: 42});
        result = _(list).keyBy().value();
        result = _(list).keyBy(listIterator).value();
        result = _(list).keyBy('a').value();
        result = _(list).keyBy({a: 42}).value();
        result = _.chain(list).keyBy().value();
        result = _.chain(list).keyBy(listIterator).value();
        result = _.chain(list).keyBy('a').value();
        result = _.chain(list).keyBy({a: 42}).value();

        result = _.keyBy(numericDictionary);
        result = _.keyBy(numericDictionary, numericDictionaryIterator);
        result = _.keyBy(numericDictionary, 'a');
        result = _.keyBy(numericDictionary, {a: 42});
        result = _(numericDictionary).keyBy().value();
        result = _(numericDictionary).keyBy(listIterator).value();
        result = _(numericDictionary).keyBy('a').value();
        result = _(numericDictionary).keyBy({a: 42}).value();
        result = _.chain(numericDictionary).keyBy().value();
        result = _.chain(numericDictionary).keyBy(listIterator).value();
        result = _.chain(numericDictionary).keyBy('a').value();
        result = _.chain(numericDictionary).keyBy({a: 42}).value();

        result = _.keyBy(dictionary);
        result = _.keyBy(dictionary, dictionaryIterator);
        result = _.keyBy(dictionary, 'a');
        result = _.keyBy(dictionary, {a: 42});
        result = _.keyBy(dictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
        result = _(dictionary).keyBy().value();
        result = _(dictionary).keyBy(listIterator).value();
        result = _(dictionary).keyBy('a').value();
        result = _(dictionary).keyBy({a: 42}).value();
        result = _(dictionary).keyBy((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }).value();
        result = _.chain(dictionary).keyBy().value();
        result = _.chain(dictionary).keyBy(listIterator).value();
        result = _.chain(dictionary).keyBy('a').value();
        result = _.chain(dictionary).keyBy({a: 42}).value();
        result = _.chain(dictionary).keyBy((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }).value();
    }
}

//_.invoke
namespace TestInvoke {
    let boolArray: boolean[] = [true, false];

    let nestedDict: _.Dictionary<number[]> = {
        a: [0, 1, 2]
    };

    let numDict: _.Dictionary<number> = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };

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
        let result: _.LoDashExplicitWrapper<any>;

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
    result = _(numArray).invokeMap('toString').value();
    result = _(numArray).invokeMap('toString', 2).value();
    result = _(numArray).chain().invokeMap('toString').value();
    result = _(numArray).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numArray, Number.prototype.toString);
    result = _.invokeMap(numArray, Number.prototype.toString, 2);
    result = _(numArray).invokeMap(Number.prototype.toString).value();
    result = _(numArray).invokeMap(Number.prototype.toString, 2).value();
    result = _(numArray).chain().invokeMap(Number.prototype.toString).value();
    result = _(numArray).chain().invokeMap(Number.prototype.toString, 2).value();

    result = _.invokeMap(numDict, 'toString');
    result = _.invokeMap(numDict, 'toString', 2);
    result = _(numDict).invokeMap('toString').value();
    result = _(numDict).invokeMap('toString', 2).value();
    result = _(numDict).chain().invokeMap('toString').value();
    result = _(numDict).chain().invokeMap('toString', 2).value();

    result = _.invokeMap(numDict, Number.prototype.toString);
    result = _.invokeMap(numDict, Number.prototype.toString, 2);
    result = _(numDict).invokeMap(Number.prototype.toString).value();
    result = _(numDict).invokeMap(Number.prototype.toString, 2).value();
    result = _(numDict).chain().invokeMap(Number.prototype.toString).value();
    result = _(numDict).chain().invokeMap(Number.prototype.toString, 2).value();
}

// _.map
namespace TestMap {
    let array: number[] | null | undefined = [] as any;
    let list: _.List<number> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<number> | null | undefined = obj;

    let listIterator: (value: number, index: number, collection: _.List<number>) => TResult = (value: number, index: number, collection: _.List<number>) => ({ a: 1, b: "", c: true });
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => TResult = (value: number, key: string, collection: _.Dictionary<number>) => ({ a: 1, b: "", c: true });

    {
        _.map(array);  // $ExpectType number[]
        _.map(array, listIterator);  // $ExpectType TResult[]

        _.map(list);  // $ExpectType number[]
        _.map(list, listIterator);  // $ExpectType TResult[]

        _.map(dictionary);  // $ExpectType number[]
        _.map(dictionary, dictionaryIterator);  // $ExpectType TResult[]
    }

    {
        // _.matches iteratee shorthand.
        _.map(array, {});  // $ExpectType boolean[]
        _.map(list, {});  // $ExpectType boolean[]
        _.map(dictionary, {});  // $ExpectType boolean[]
    }

    {
        _(array).map().value();  // $ExpectType number[]
        _(array).map(listIterator).value();  // $ExpectType TResult[]

        _(list).map().value();  // $ExpectType number[]
        _(list).map(listIterator).value();  // $ExpectType TResult[]

        _(dictionary).map().value();  // $ExpectType number[]
        _(dictionary).map(dictionaryIterator).value();  // $ExpectType TResult[]
    }

    {
        _(array).map({}).value();  // $ExpectType boolean[]
        _(list).map({}).value();  // $ExpectType boolean[]
        _(dictionary).map({}).value();  // $ExpectType boolean[]
    }

    {
        _(array).chain().map().value();  // $ExpectType number[]
        _(array).chain().map(listIterator).value();  // $ExpectType TResult[]

        _(list).chain().map().value();  // $ExpectType number[]
        _(list).chain().map(listIterator).value();  // $ExpectType TResult[]

        _(dictionary).chain().map().value();  // $ExpectType number[]
        _(dictionary).chain().map(dictionaryIterator).value();  // $ExpectType TResult[]
    }

    {
        let result: _.LoDashExplicitWrapper<boolean[]>;

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

        result = _.partition(any, (n) => {
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

        result = _(any).partition((n) => {
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

        result = _.chain(any).partition((n) => {
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
//         d: {b: TResult}[];
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
//         let result: TResult[];
//
//         result = _.map<SampleObject, TResult>(array, 'd.0.b');
//         result = _.map<SampleObject, TResult>(array, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, TResult>(list, 'd.0.b');
//         result = _.map<SampleObject, TResult>(list, ['d', 0, 'b']);
//
//         result = _.map<SampleObject, TResult>(dictionary, 'd.0.b');
//         result = _.map<SampleObject, TResult>(dictionary, ['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashImplicitArrayWrapper<TResult>;
//
//         result = _(array).map<TResult>('d.0.b');
//         result = _(array).map<TResult>(['d', 0, 'b']);
//
//         result = _(list).map<TResult>('d.0.b');
//         result = _(list).map<TResult>(['d', 0, 'b']);
//
//         result = _(dictionary).map<TResult>('d.0.b');
//         result = _(dictionary).map<TResult>(['d', 0, 'b']);
//     }
//
//     {
//         let result: _.LoDashExplicitArrayWrapper<TResult>;
//
//         result = _(array).chain().map<TResult>('d.0.b');
//         result = _(array).chain().map<TResult>(['d', 0, 'b']);
//
//         result = _(list).chain().map<TResult>('d.0.b');
//         result = _(list).chain().map<TResult>(['d', 0, 'b']);
//
//         result = _(dictionary).chain().map<TResult>('d.0.b');
//         result = _(dictionary).chain().map<TResult>(['d', 0, 'b']);
//     }
// }
namespace TestReduce {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    {
        let result: number | undefined;

        result = _.reduce(null, (sum: number, num: number) => sum + num);
        result = _.reduce([1, 2, 3], (sum: number, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        });
        result = _([1, 2 ,3]).reduce((sum: number, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        });
        result = _.chain([1, 2 ,3]).reduce((sum: number, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        }).value();
    }

    {
        let abc: ABC = any;
        let result: ABC;

        result = _.reduce({ a: 1, b: 2, c: 3 }, (r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc);
        result = _({ a: 1, b: 2, c: 3 }).reduce((r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc);
        result = _.chain({ a: 1, b: 2, c: 3 }).reduce((r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc).value();
    }

    {
        let result: number[];

        result = _.reduce([0, 1, 2, 3], (r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]);
        result = _([0, 1, 2, 3]).reduce((r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]);
        result = _.chain([0, 1, 2, 3]).reduce((r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]).value();
    }
}

namespace TestReduceRight {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    _.reduceRight(null, (sum: number, num: number) => sum + num); // $ExpectType number | undefined

    {
        let result: number | undefined;
        result = _.reduceRight([1, 2, 3], (sum: number | undefined, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        });
        result = _([1, 2 ,3]).reduceRight((sum: number | undefined, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        });
        result = _.chain([1, 2 ,3]).reduceRight((sum: number | undefined, num) => {
            num; // $ExpectType number
            return (sum || 0) + num;
        }).value();
    }

    {
        let abc: ABC = any;
        let result: ABC;

        result = _.reduceRight({ a: 1, b: 2, c: 3 }, (r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc);
        result = _({ a: 1, b: 2, c: 3 }).reduceRight((r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc);
        result = _.chain({ a: 1, b: 2, c: 3 }).reduceRight((r, num, key, list) => {
            r; // $ExpectType ABC
            num; // $ExpectType number
            key; // $ExpectType string
            list; // $ExpectType { a: number; b: number; c: number; }
            return r;
        }, abc).value();
    }

    {
        let result: number[];

        result = _.reduceRight([0, 1, 2, 3], (r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]);
        result = _([0, 1, 2, 3]).reduceRight((r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]);
        result = _.chain([0, 1, 2, 3]).reduceRight((r, num, key, list) => {
            r; // $ExpectType number[]
            num; // $ExpectType number
            key; // $ExpectType number
            list; // $ExpectType number[]
            r.unshift(num);
            return r;
        }, [] as number[]).value();
    }
}

// _.reject
namespace TestReject {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let stringIterator: (char: string, index: number, string: string) => any = (char: string, index: number, string: string) => 1;
    let listIterator: (value: TResult, index: number, collection: _.List<TResult>) => any = (value: TResult, index: number, collection: _.List<TResult>) => 1;
    let dictionaryIterator: (value: TResult, key: string, collection: _.Dictionary<TResult>) => any = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 1;

    {
        let result: string[];

        result = _.reject('', stringIterator);
    }

    {
        let result: TResult[];

        result = _.reject(array, listIterator);
        result = _.reject(array, '');
        result = _.reject(array, {a: 42});
        result = _.reject(array, ['a', 42]);

        result = _.reject(list, listIterator);
        result = _.reject(list, '');
        result = _.reject(list, {a: 42});
        result = _.reject(list, ['a', 42]);

        result = _.reject(dictionary, dictionaryIterator);
        result = _.reject(dictionary, '');
        result = _.reject(dictionary, {a: 42});
        result = _.reject(dictionary, ['a', 42]);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('').reject(stringIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).reject(listIterator);
        result = _(array).reject('');
        result = _(array).reject({a: 42});
        result = _(array).reject(['a', 42]);

        result = _(list).reject(listIterator);
        result = _(list).reject('');
        result = _(list).reject({a: 42});
        result = _(list).reject(['a', 42]);

        result = _(dictionary).reject(dictionaryIterator);
        result = _(dictionary).reject('');
        result = _(dictionary).reject({a: 42});
        result = _(dictionary).reject(['a', 42]);
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('').chain().reject(stringIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().reject(listIterator);
        result = _(array).chain().reject('');
        result = _(array).chain().reject({a: 42});
        result = _(array).chain().reject(['a', 42]);

        result = _(list).chain().reject(listIterator);
        result = _(list).chain().reject('');
        result = _(list).chain().reject({a: 42});
        result = _(list).chain().reject(['a', 42]);

        result = _(dictionary).chain().reject(dictionaryIterator);
        result = _(dictionary).chain().reject('');
        result = _(dictionary).chain().reject({a: 42});
        result = _(dictionary).chain().reject(['a', 42]);
    }

    {
        // $ExpectType any[]
        _.reject(any, (value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
        // $ExpectType LoDashImplicitWrapper<any[]>
        _(any).reject((value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
        // $ExpectType LoDashExplicitWrapper<any[]>
        _.chain(any).reject((value, key, collection) => {
            value; // $ExpectType any
            key; // $ExpectType string
            collection; // $ExpectType any
        });
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

        result = _('abc').sample();
        result = _(array).sample();
        result = _(list).sample();
        result = _(dictionary).sample();
        result = _(numericDictionary).sample();
        result = _({a: 'foo'}).sample();
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
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('abc').sampleSize();
        result = _('abc').sampleSize(42);
        result = _(array).sampleSize();
        result = _(array).sampleSize(42);
        result = _(list).sampleSize();
        result = _(list).sampleSize(42);
        result = _(dictionary).sampleSize();
        result = _(dictionary).sampleSize(42);
        result = _(numericDictionary).sampleSize();
        result = _(numericDictionary).sampleSize(42);
        result = _({a: 'foo'}).sampleSize();
        result = _({a: 'foo'}).sampleSize(42);
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('abc').chain().sampleSize();
        result = _('abc').chain().sampleSize(42);
        result = _(array).chain().sampleSize();
        result = _(array).chain().sampleSize(42);
        result = _(list).chain().sampleSize();
        result = _(list).chain().sampleSize(42);
        result = _(dictionary).chain().sampleSize();
        result = _(dictionary).chain().sampleSize(42);
        result = _(numericDictionary).chain().sampleSize();
        result = _(numericDictionary).chain().sampleSize(42);
        result = _({a: 'foo'}).chain().sampleSize();
        result = _({a: 'foo'}).chain().sampleSize(42);
    }
}

// _.shuffle
namespace TestShuffle {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    {
        let result: string[];

        result = _.shuffle('abc');
    }

    {
        let result: TResult[];

        result = _.shuffle(array);
        result = _.shuffle(list);
        result = _.shuffle(dictionary);
        _.shuffle({ a: 7, b: '', c: true }); // $ExpectType (string | number | boolean)[]
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('abc').shuffle();
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).shuffle();
        result = _(list).shuffle();
        result = _(dictionary).shuffle();
        _({ a: 7, b: '', c: true }).shuffle(); // $ExpectType LoDashImplicitWrapper<(string | number | boolean)[]>
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('abc').chain().shuffle();
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().shuffle();
        result = _(list).chain().shuffle();
        result = _(dictionary).chain().shuffle();
        _({ a: 7, b: '', c: true }).chain().shuffle(); // $ExpectType LoDashExplicitWrapper<(string | number | boolean)[]>
    }
}

// _.size
namespace TestSize {
    interface SampleType { a: string; b: number; c: boolean; }

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
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = any;

    interface TResult2 { d: number; e: string; f: boolean; }
    interface SampleObject { a: TResult; b: TResult2; }
    let sampleObject: SampleObject | null | undefined = any;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => true;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => true;
    let numericDictionaryIterator = (value: TResult, key: number, collection: _.NumericDictionary<TResult>) => true;

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
            value; // $ExpectType TResult
            key; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
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
        result = _.some(sampleObject, (value, key, collection) => {
            value; // $ExpectType TResult | TResult2
            key; // $ExpectType string
            collection; // $ExpectType SampleObject
            return true;
        });
        result = _.some(sampleObject, 'a');
        result = _.some(sampleObject, ['a', 42]);
        result = _.some(sampleObject, {a: 42});

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
        result = _(sampleObject).some((value, key, collection) => {
            value; // $ExpectType TResult | TResult2
            key; // $ExpectType string
            collection; // $ExpectType SampleObject
            return true;
        });
        result = _(sampleObject).some('a');
        result = _(sampleObject).some(['a', 42]);
        result = _(sampleObject).some({a: 42});
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
        result = _(sampleObject).chain().some((value, key, collection) => {
            value; // $ExpectType TResult | TResult2
            key; // $ExpectType string
            collection; // $ExpectType SampleObject
            return true;
        });
        result = _(sampleObject).chain().some('a');
        result = _(sampleObject).chain().some(['a', 42]);
        result = _(sampleObject).chain().some({a: 42});
    }
}

// _.sortBy
namespace TestSortBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let obj: any = {};
    let dictionary: _.Dictionary<TResult> | null | undefined = obj;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => 0;
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => 0;

    {
        let result: TResult[];

        result = _.sortBy(array);
        result = _.sortBy(array, listIterator, listIterator);
        result = _.sortBy(array, 'a');
        result = _.sortBy(array, 'a', 'b');
        result = _.sortBy(array, ['a', 'b']);
        result = _.sortBy(array, {a: 42});

        result = _.sortBy(list);
        result = _.sortBy(list, listIterator, listIterator);
        result = _.sortBy(list, 'a');
        result = _.sortBy(list, 'a', 'b');
        result = _.sortBy(list, ['a', 'b']);
        result = _.sortBy(list, {a: 42});
        result = _.sortBy(list, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType number
            collection; // $ExpectType ArrayLike<TResult>
        });

        result = _.sortBy(dictionary);
        result = _.sortBy(dictionary, dictionaryIterator, dictionaryIterator);
        result = _.sortBy(dictionary, 'a');
        result = _.sortBy(dictionary, 'a', 'b');
        result = _.sortBy(dictionary, ['a', 'b']);
        result = _.sortBy(dictionary, {a: 42});
        result = _.sortBy(dictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
    }

    {
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).sortBy();
        result = _(array).sortBy(listIterator, listIterator);
        result = _(array).sortBy('a');
        result = _(array).sortBy('a', 'b');
        result = _(array).sortBy(['a', 'b']);
        result = _(array).sortBy({a: 42});

        result = _(list).sortBy();
        result = _(list).sortBy(listIterator, listIterator);
        result = _(list).sortBy('a', 'b');
        result = _(list).sortBy('a', 'b');
        result = _(list).sortBy(['a', 'b']);
        result = _(list).sortBy({a: 42});

        result = _(dictionary).sortBy();
        result = _(dictionary).sortBy(dictionaryIterator, dictionaryIterator);
        result = _(dictionary).sortBy('a', 'b');
        result = _(dictionary).sortBy('a', 'b');
        result = _(dictionary).sortBy(['a', 'b']);
        result = _(dictionary).sortBy({a: 42});
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().sortBy();
        result = _(array).chain().sortBy(listIterator, listIterator);
        result = _(array).chain().sortBy('a');
        result = _(array).chain().sortBy('a', 'b');
        result = _(array).chain().sortBy(['a', 'b']);
        result = _(array).chain().sortBy({a: 42});

        result = _(list).chain().sortBy();
        result = _(list).chain().sortBy(listIterator, listIterator);
        result = _(list).chain().sortBy('a');
        result = _(list).chain().sortBy('a', 'b');
        result = _(list).chain().sortBy(['a', 'b']);
        result = _(list).chain().sortBy({a: 42});

        result = _(dictionary).chain().sortBy();
        result = _(dictionary).chain().sortBy(dictionaryIterator, dictionaryIterator);
        result = _(dictionary).chain().sortBy('a');
        result = _(dictionary).chain().sortBy('a', 'b');
        result = _(dictionary).chain().sortBy(['a', 'b']);
        result = _(dictionary).chain().sortBy({a: 42});
    }
}

// _.orderBy
namespace TestorderBy {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult> | null | undefined = [] as any;
    let numericDictionary: _.NumericDictionary<TResult> | null | undefined = any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;
    let orders: boolean|"asc"|"desc"|Array<boolean|"asc"|"desc"> = any;

    {
        let iteratees: ((value: string) => any)|Array<((value: string) => any)> = any;
        let result: string[];

        result = _.orderBy('acbd');
        result = _.orderBy('acbd', iteratees);
        result = _.orderBy('acbd', iteratees, orders);
    }

    {
        let iteratees: string = any;
        let result: TResult[];

        result = _.orderBy(array);
        result = _.orderBy(array, 'a');
        result = _.orderBy(array, 'a', orders);
        result = _.orderBy(array, ['a', 'b']);
        result = _.orderBy(array, ['a', 'b'], orders);
        result = _.orderBy(array, { a: 42 });
        result = _.orderBy(array, [{ a: 42 }, { b: '' }], orders);
        result = _(array).orderBy().value();
        result = _(array).orderBy('a').value();
        result = _(array).orderBy('a', orders).value();
        result = _(array).orderBy(['a', 'b']).value();
        result = _(array).orderBy(['a', 'b'], orders).value();
        result = _(array).orderBy({ a: 42 }).value();
        result = _(array).orderBy([{ a: 42 }, { b: '' }], orders).value();
        result = _.chain(array).orderBy().value();
        result = _.chain(array).orderBy('a').value();
        result = _.chain(array).orderBy('a', orders).value();
        result = _.chain(array).orderBy(['a', 'b']).value();
        result = _.chain(array).orderBy(['a', 'b'], orders).value();
        result = _.chain(array).orderBy({ a: 42 }).value();
        result = _.chain(array).orderBy([{ a: 42 }, { b: '' }], orders).value();

        result = _.orderBy(list);
        result = _.orderBy(list, 'a');
        result = _.orderBy(list, 'a', orders);
        result = _.orderBy(list, ['a', 'b']);
        result = _.orderBy(list, ['a', 'b'], orders);
        result = _.orderBy(list, { a: 42 });
        result = _.orderBy(list, [{ a: 42 }, { b: '' }], orders);
        result = _(list).orderBy().value();
        result = _(list).orderBy('a').value();
        result = _(list).orderBy('a', orders).value();
        result = _(list).orderBy(['a', 'b']).value();
        result = _(list).orderBy(['a', 'b'], orders).value();
        result = _(list).orderBy({ a: 42 }).value();
        result = _(list).orderBy([{ a: 42 }, { b: '' }], orders).value();
        result = _.chain(list).orderBy().value();
        result = _.chain(list).orderBy('a').value();
        result = _.chain(list).orderBy('a', orders).value();
        result = _.chain(list).orderBy(['a', 'b']).value();
        result = _.chain(list).orderBy(['a', 'b'], orders).value();
        result = _.chain(list).orderBy({ a: 42 }).value();
        result = _.chain(list).orderBy([{ a: 42 }, { b: '' }], orders).value();

        result = _.orderBy(numericDictionary);
        result = _.orderBy(numericDictionary, 'a');
        result = _.orderBy(numericDictionary, 'a', orders);
        result = _.orderBy(numericDictionary, ['a', 'b']);
        result = _.orderBy(numericDictionary, ['a', 'b'], orders);
        result = _.orderBy(numericDictionary, { a: 42 });
        result = _.orderBy(numericDictionary, [{ a: 42 }, { b: '' }], orders);
        result = _(numericDictionary).orderBy().value();
        result = _(numericDictionary).orderBy('a').value();
        result = _(numericDictionary).orderBy('a', orders).value();
        result = _(numericDictionary).orderBy(['a', 'b']).value();
        result = _(numericDictionary).orderBy(['a', 'b'], orders).value();
        result = _(numericDictionary).orderBy({ a: 42 }).value();
        result = _(numericDictionary).orderBy([{ a: 42 }, { b: '' }], orders).value();
        result = _.chain(numericDictionary).orderBy().value();
        result = _.chain(numericDictionary).orderBy('a').value();
        result = _.chain(numericDictionary).orderBy('a', orders).value();
        result = _.chain(numericDictionary).orderBy(['a', 'b']).value();
        result = _.chain(numericDictionary).orderBy(['a', 'b'], orders).value();
        result = _.chain(numericDictionary).orderBy({ a: 42 }).value();
        result = _.chain(numericDictionary).orderBy([{ a: 42 }, { b: '' }], orders).value();

        result = _.orderBy(dictionary);
        result = _.orderBy(dictionary, 'a');
        result = _.orderBy(dictionary, 'a', orders);
        result = _.orderBy(dictionary, ['a', 'b']);
        result = _.orderBy(dictionary, ['a', 'b'], orders);
        result = _.orderBy(dictionary, { a: 42 });
        result = _.orderBy(dictionary, [{ a: 42 }, { b: '' }], orders);
        result = _(dictionary).orderBy().value();
        result = _(dictionary).orderBy('a').value();
        result = _(dictionary).orderBy('a', orders).value();
        result = _(dictionary).orderBy(['a', 'b']).value();
        result = _(dictionary).orderBy(['a', 'b'], orders).value();
        result = _(dictionary).orderBy({ a: 42 }).value();
        result = _(dictionary).orderBy([{ a: 42 }, { b: '' }], orders).value();
        result = _.chain(dictionary).orderBy().value();
        result = _.chain(dictionary).orderBy('a').value();
        result = _.chain(dictionary).orderBy('a', orders).value();
        result = _.chain(dictionary).orderBy(['a', 'b']).value();
        result = _.chain(dictionary).orderBy(['a', 'b'], orders).value();
        result = _.chain(dictionary).orderBy({ a: 42 }).value();
        result = _.chain(dictionary).orderBy([{ a: 42 }, { b: '' }], orders).value();

        result = _.orderBy(dictionary, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        });
        result = _.orderBy(dictionary, [(value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }, (value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }]);

        result = _(dictionary).orderBy((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }).value();
        result = _.chain(dictionary).orderBy((value, index, collection) => {
            value; // $ExpectType TResult
            index; // $ExpectType string
            collection; // $ExpectType Dictionary<TResult>
        }).value();
    }

    {
        let iteratees: ((value: string) => any)|Array<(value: string) => any> = any;
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('acbd').orderBy();
        result = _('acbd').orderBy(iteratees);
        result = _('acbd').orderBy(iteratees, orders);
    }

    {
        let iteratees: ((value: string) => any)|Array<(value: string) => any> = any;
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _.chain('acbd').orderBy();
        result = _.chain('acbd').orderBy(iteratees);
        result = _.chain('acbd').orderBy(iteratees, orders);
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
        result = _([]).now();
        result = _({}).now();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().now();
        result = _([]).chain().now();
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
        let result: _.LoDashImplicitWrapper<Func>;

        _(42).after(func);
    }

    {
        let result: _.LoDashExplicitWrapper<Func>;

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
    }

    {
        let result: _.LoDashImplicitWrapper<SampleFunc>;

        result = _(func).ary();
        result = _(func).ary(2);
    }

    {
        let result: _.LoDashExplicitWrapper<SampleFunc>;

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
        let result: _.LoDashImplicitWrapper<Func>;

        _(42).before(func);
    }

    {
        let result: _.LoDashExplicitWrapper<Func>;

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

        result = _.bind(func, any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: SampleResult;

        result = _.bind(func, any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: SampleResult;

        result = _.bind(func, any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(func).bind(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(func).bind(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(func).bind(any, 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(func).chain().bind(any);
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(func).chain().bind(any, 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(func).chain().bind(any, 42, '');
    }
}

// _.bindAll
namespace TestBindAll {
    interface SampleObject {
        a(...args: any[]): any;
        b(): void;
        c(a: string, b: number): boolean;
    }

    let object: SampleObject = any;

    {
        let result: SampleObject;

        result = _.bindAll(object);
        result = _.bindAll(object, 'c');
        result = _.bindAll(object, ['b'], 'c');
        result = _.bindAll(object, 'a', ['b'], 'c');
    }

    {
        let result: _.LoDashImplicitWrapper<SampleObject>;

        result = _(object).bindAll();
        result = _(object).bindAll('c');
        result = _(object).bindAll(['b'], 'c');
        result = _(object).bindAll('a', ['b'], 'c');
    }

    {
        let result: _.LoDashExplicitWrapper<SampleObject>;

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

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(object).bindKey('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(object).bindKey('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(object).bindKey('foo', 42, '');
    }

    {
        type SampleResult = (a: number, b: string) => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo');
    }

    {
        type SampleResult = (b: string) => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo', 42);
    }

    {
        type SampleResult = () => boolean;

        let result: _.LoDashExplicitWrapper<SampleResult>;

        result = _(object).chain().bindKey('foo', 42, '');
    }
}

// _.curry
namespace TestCurry {
    declare function testCurryFn(a: string, b: number, c: boolean): [string, number, boolean];
    let curryResult1: [string, number, boolean];
    let curryResult2: _.CurriedFunction1<boolean, [string, number, boolean]>;
    let curryResult3: _.CurriedFunction2<number, boolean, [string, number, boolean]>;
    let curryResult4: _.CurriedFunction3<string, number, boolean, [string, number, boolean]>;
    curryResult1 = _.curry(testCurryFn)("1", 2, true);
    curryResult1 = _.curry(testCurryFn)("1", 2)(true);
    curryResult1 = _.curry(testCurryFn)("1")(2, true);
    curryResult1 = _.curry(testCurryFn)("1")(2)(true);
    curryResult2 = _.curry(testCurryFn)("1", 2);
    curryResult2 = _.curry(testCurryFn)("1")(2);
    curryResult3 = _.curry(testCurryFn)("1");
    curryResult4 = _.curry(testCurryFn);

    curryResult1 = _(testCurryFn).curry().value()("1", 2, true);
    curryResult1 = _(testCurryFn).curry().value()("1", 2)(true);
    curryResult1 = _(testCurryFn).curry().value()("1")(2, true);
    curryResult1 = _(testCurryFn).curry().value()("1")(2)(true);
    curryResult2 = _(testCurryFn).curry().value()("1", 2);
    curryResult2 = _(testCurryFn).curry().value()("1")(2);
    curryResult3 = _(testCurryFn).curry().value()("1");
    curryResult4 = _(testCurryFn).curry().value();

    curryResult1 = _.chain(testCurryFn).curry().value()("1", 2, true);
    curryResult1 = _.chain(testCurryFn).curry().value()("1", 2)(true);
    curryResult1 = _.chain(testCurryFn).curry().value()("1")(2, true);
    curryResult1 = _.chain(testCurryFn).curry().value()("1")(2)(true);
    curryResult2 = _.chain(testCurryFn).curry().value()("1", 2);
    curryResult2 = _.chain(testCurryFn).curry().value()("1")(2);
    curryResult3 = _.chain(testCurryFn).curry().value()("1");
    curryResult4 = _.chain(testCurryFn).curry().value();
}

// _.curryRight
namespace TestCurryRight {
    declare function testCurryFn(a: string, b: number, c: boolean): [string, number, boolean];
    let curryResult1: [string, number, boolean];
    let curryResult2: _.RightCurriedFunction1<string, [string, number, boolean]>;
    let curryResult3: _.RightCurriedFunction2<string, number, [string, number, boolean]>;
    let curryResult4: _.RightCurriedFunction3<string, number, boolean, [string, number, boolean]>;
    curryResult1 = _.curryRight(testCurryFn)("1", 2, true);
    curryResult1 = _.curryRight(testCurryFn)(2, true)("1");
    curryResult1 = _.curryRight(testCurryFn)(true)("1", 2);
    curryResult1 = _.curryRight(testCurryFn)(true)(2)("1");
    curryResult2 = _.curryRight(testCurryFn)(2, true);
    curryResult2 = _.curryRight(testCurryFn)(true)(2);
    curryResult3 = _.curryRight(testCurryFn)(true);
    curryResult4 = _.curryRight(testCurryFn);

    curryResult1 = _(testCurryFn).curryRight().value()("1", 2, true);
    curryResult1 = _(testCurryFn).curryRight().value()(2, true)("1");
    curryResult1 = _(testCurryFn).curryRight().value()(true)("1", 2);
    curryResult1 = _(testCurryFn).curryRight().value()(true)(2)("1");
    curryResult2 = _(testCurryFn).curryRight().value()(2, true);
    curryResult2 = _(testCurryFn).curryRight().value()(true)(2);
    curryResult3 = _(testCurryFn).curryRight().value()(true);
    curryResult4 = _(testCurryFn).curryRight().value();

    curryResult1 = _.chain(testCurryFn).curryRight().value()("1", 2, true);
    curryResult1 = _.chain(testCurryFn).curryRight().value()(2, true)("1");
    curryResult1 = _.chain(testCurryFn).curryRight().value()(true)("1", 2);
    curryResult1 = _.chain(testCurryFn).curryRight().value()(true)(2)("1");
    curryResult2 = _.chain(testCurryFn).curryRight().value()(2, true);
    curryResult2 = _.chain(testCurryFn).curryRight().value()(true)(2);
    curryResult3 = _.chain(testCurryFn).curryRight().value()(true);
    curryResult4 = _.chain(testCurryFn).curryRight().value();
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
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        result = _.debounce(func);
        result = _.debounce(func, 42);
        result = _.debounce(func, 42, options);
    }

    {
        let result: _.LoDashImplicitWrapper<ResultFunc>;

        result = _(func).debounce();
        result = _(func).debounce(42);
        result = _(func).debounce(42, options);
    }

    {
        let result: _.LoDashExplicitWrapper<ResultFunc>;

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
        result = _.defer(func, any);
        result = _.defer(func, any, any);
        result = _.defer(func, any, any, any);
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
    type Func = (a: number, b: string) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.flip(func);
    }

    {
        let result: _.LoDashImplicitWrapper<Func>;

        result = _(func).flip();
    }

    {
        let result: _.LoDashExplicitWrapper<Func>;

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

        result = _.flow(Fn1, Fn2);
        result = _.flow(Fn1, Fn1, Fn2);
        result = _.flow(Fn1, Fn1, Fn1, Fn2);
        result = _.flow([Fn1, Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashImplicitWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flow(Fn2);
        result = _(Fn1).flow(Fn1, Fn2);
        result = _(Fn1).flow(Fn1, Fn1, Fn2);
        result = _(Fn1).flow([Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashExplicitWrapper<(m: number, n: number) => number>;

        result = _(Fn1).chain().flow(Fn2);
        result = _(Fn1).chain().flow(Fn1, Fn2);
        result = _(Fn1).chain().flow(Fn1, Fn1, Fn2);
        result = _(Fn1).chain().flow([Fn1, Fn1, Fn2]);
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
        let result: _.LoDashImplicitWrapper<(m: number, n: number) => number>;

        result = _(Fn1).flowRight(Fn2);
        result = _(Fn1).flowRight(Fn1, Fn2);
        result = _(Fn1).flowRight(Fn1, Fn1, Fn2);
        result = _(Fn1).flowRight([Fn1, Fn1, Fn2]);
    }

    {
        let result: _.LoDashExplicitWrapper<(m: number, n: number) => number>;

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
        let result: _.LoDashImplicitWrapper<MemoizedResultFn>;

        result = _(memoizeFn).memoize();
        result = _(memoizeFn).memoize(memoizeResolverFn);
    }

    {
        let result: _.LoDashExplicitWrapper<MemoizedResultFn>;

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
        let result: _.LoDashImplicitWrapper<(a: string) => boolean>;

        result = _(func1).overArgs(transform1);
        result = _(func1).overArgs([transform1]);
    }

    {
        let result: _.LoDashImplicitWrapper<(a: string, b: number) => boolean>;

        result = _(func2).overArgs(transform1, transform2);
        result = _(func2).overArgs([transform1, transform2]);
    }

    {
        let result: _.LoDashExplicitWrapper<(a: string) => boolean>;

        result = _(func1).chain().overArgs(transform1);
        result = _(func1).chain().overArgs([transform1]);
    }

    {
        let result: _.LoDashExplicitWrapper<(a: string, b: number) => boolean>;

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

        result = _.negate(predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<PredicateFn>;

        result = _(predicate).negate();
    }

    {
        let result: _.LoDashExplicitWrapper<PredicateFn>;

        result = _(predicate).chain().negate();
    }
}

// _.once
namespace TestOnce {
    type Func = (a: number, b: string) => boolean;

    let func: Func = (a, b) => true;

    {
        let result: Func;

        result = _.once(func);
    }

    {
        let result: _.LoDashImplicitWrapper<Func>;

        result = _(func).once();
    }

    {
        let result: _.LoDashExplicitWrapper<Func>;

        result = _(func).chain().once();
    }
}

// _.partial
{
    const greet = (greeting: string, flag: boolean) => 1;

    {
        let greetPartial: (flag: boolean) => number;

        greetPartial = _.partial(greet, 'hi');
        greetPartial = _(greet).partial('hi').value();
        greetPartial = _.chain(greet).partial('hi').value();
    }

    {
        let greetPartial: (greeting: string) => number;

        greetPartial = _.partial(greet, _, true);
        greetPartial = _(greet).partial(_, true).value();
        greetPartial = _.chain(greet).partial(_, true).value();
    }
}

// _.partialRight
{
    const greet = (greeting: string, flag: boolean) => 1;

    {
        let greetPartial: (greeting: string) => number;

        greetPartial = _.partialRight(greet, true);
        greetPartial = _(greet).partialRight(true).value();
        greetPartial = _.chain(greet).partialRight(true).value();
    }

    {
        let greetPartial: (flag: boolean) => number;

        greetPartial = _.partialRight(greet, 'hi', _);
        greetPartial = _(greet).partialRight('hi', _).value();
        greetPartial = _.chain(greet).partialRight('hi', _).value();
    }
}

//_.rearg
{
    const testReargFn = (a: string, b: number, c: boolean): [string, number, boolean] => [a, b, c];
    let result: (b: number, c: boolean, a: string) => [string, number, boolean];
    result = _.rearg(testReargFn, 2, 0, 1);
    result = _.rearg(testReargFn, [2, 0, 1]);
    result = _(testReargFn).rearg(2, 0, 1).value();
    result = _(testReargFn).rearg([2, 0, 1]).value();
    result = _.chain(testReargFn).rearg(2, 0, 1).value();
    result = _.chain(testReargFn).rearg([2, 0, 1]).value();
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
        let result: _.LoDashImplicitWrapper<ResultFunc>;

        result = _(func).rest();
        result = _(func).rest(1);
    }

    {
        let result: _.LoDashExplicitWrapper<ResultFunc>;

        result = _(func).chain().rest();
        result = _(func).chain().rest(1);
    }
}

//_.spread
namespace TestSpread {
    type SampleFunc = (a: number, b: string) => boolean;
    type SampleResult = (args: [number, string]) => boolean;

    let func: SampleFunc = (a) => true;

    {
        let result: SampleResult;

        result = _.spread(func);
        result = _.spread(func);
    }

    {
        let result: _.LoDashImplicitWrapper<SampleResult>;

        result = _(func).spread();
    }

    {
        let result: _.LoDashExplicitWrapper<SampleResult>;

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
    }

    let func: SampleFunc = (a, b) => true;
    let options: Options = {};

    {
        let result: ResultFunc;

        result = _.throttle(func);
        result = _.throttle(func, 42);
        result = _.throttle(func, 42, options);
    }

    {
        let result: _.LoDashImplicitWrapper<ResultFunc>;

        result = _(func).throttle();
        result = _(func).throttle(42);
        result = _(func).throttle(42, options);
    }

    {
        let result: _.LoDashExplicitWrapper<ResultFunc>;

        result = _(func).chain().throttle();
        result = _(func).chain().throttle(42);
        result = _(func).chain().throttle(42, options);
    }
}

// _.unary
namespace TestUnary {
    const func = (a: number, b: string) => true;

    _.unary(func); // $ExpectType (arg1: number) => boolean
    _(func).unary(); // $ExpectType LoDashImplicitWrapper<(arg1: number) => boolean>
    _(func).chain().unary(); // $ExpectType LoDashExplicitWrapper<(arg1: number) => boolean>
}

// _.wrap
namespace TestWrap {
    {
        type SampleWrapper = (arg1: TResult, arg2: string, arg3: string) => boolean;

        let value: TResult = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: (arg2: string, arg3: string) => boolean;

        result = _.wrap(value, wrapper);
        result = _(value).wrap(wrapper).value();
        result = _.chain(value).wrap(wrapper).value();
    }

    {
        type SampleWrapper = (arg1: TResult, arg2: number, arg3: string) => boolean;

        let value: TResult = { a: 1, b: "", c: true };
        let wrapper: SampleWrapper = (a, b, c) => true;
        let result: (arg2: number, arg3: string) => boolean;

        result = _.wrap(value, wrapper);
        result = _(value).wrap(wrapper).value();
        result = _.chain(value).wrap(wrapper).value();
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
        result = _.castArray([42]);
        result = _(42).castArray().value();
        result = _([42]).castArray().value();
        result = _(42).chain().castArray().value();
        result = _([42]).chain().castArray().value();
    }

    {
        let result: Array<{a: number}>;

        result = _.castArray({a: 42});
        result = _.castArray([{a: 42}]);
        result = _({a: 42}).castArray().value();
        result = _([{a: 42}]).castArray().value();
        result = _({a: 42}).chain().castArray().value();
        result = _([{a: 42}]).chain().castArray().value();
    }
}

// _.clone
namespace TestClone {
    {
        let result: number;

        result = _.clone(42);
        result = _(42).clone();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().clone();
    }

    {
        let result: string[];

        result = _.clone(['']);
        result = _(['']).clone();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(['']).chain().clone();
    }

    {
        let result: {a: {b: number;};};

        result = _.clone<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).clone();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().clone();
    }
}

// _.cloneDeep
namespace TestCloneDeep {
    {
        let result: number;

        result = _.cloneDeep(42);
        result = _(42).cloneDeep();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(42).chain().cloneDeep();
    }

    {
        let result: string[];

        result = _.cloneDeep(['']);
        result = _(['']).cloneDeep();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(['']).chain().cloneDeep();
    }

    {
        let result: {a: {b: number;};};

        result = _.cloneDeep<{a: {b: number;};}>({a: {b: 42}});
        result = _({a: {b: 42}}).cloneDeep();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: {b: number;};}>;

        result = _({a: {b: 42}}).chain().cloneDeep();
    }
}

// _.cloneDeepWith
namespace TestCloneDeepWith {
    let customizer = (x: number) => "";
    let result: string;

    result = _.cloneDeepWith("");
    result = _.cloneDeepWith(42, (value, key, object, stack) => {
        key; // $ExpectType string | number | undefined
        object; // $ExpectType number | undefined
        return "";
    });
    result = _("").cloneDeepWith();
    result = _(42).cloneDeepWith((value, key, object, stack) => {
        key; // $ExpectType string | number | undefined
        object; // $ExpectType number | undefined
        return "";
    });
    result = _.chain("").cloneDeepWith().value();
    result = _.chain(42).cloneDeepWith((value, key, object, stack) => {
        key; // $ExpectType string | number | undefined
        object; // $ExpectType number | undefined
        return "";
    }).value();
}

// _.cloneWith
namespace TestCloneWith {
    {
        let result: string;

        result = _.cloneWith("");
        result = _.cloneWith(42, (value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            return "";
        });
        result = _("").cloneWith();
        result = _(42).cloneWith((value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            return "";
        });
        result = _.chain("").cloneWith().value();
        result = _.chain(42).cloneWith((value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            return "";
        }).value();
    }

    {
        let result: "" | number;

        result = _.cloneWith(42, (value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            if (value)
                return "";
        });
        result = _(42).cloneWith((value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            if (value)
                return "";
        });
        result = _.chain(42).cloneWith((value, key, object, stack) => {
            value; // $ExpectType number
            key; // $ExpectType string | number | undefined
            if (value)
                return "";
        }).value();
    }
}

// _.conforms
namespace TestConforms {
    let result: boolean;
    result = _.conforms({foo: (v: string) => false})({foo: "foo"});
    result = _.conforms({})({foo: "foo"});
    result = _({foo: (v: string) => false}).conforms().value()({foo: "foo"});
    result = _({}).conforms().value()({foo: "foo"});
    result = _.chain({foo: (v: string) => false}).conforms().value()({foo: "foo"});
    result = _.chain({}).conforms().value()({foo: "foo"});
}

// _.conformsTo
namespace TestConformsTo {
    let result: boolean;
    result = _.conformsTo({foo: "foo"}, {foo: (v: string) => false});
    result = _.conformsTo({}, {foo: (v: string) => false});
    result = _({foo: "foo"}).conformsTo({foo: (v: string) => false});
    result = _({}).conformsTo({foo: (v: string) => false});
    result = _.chain({foo: "foo"}).conformsTo({foo: (v: string) => false}).value();
    result = _.chain({}).conformsTo({foo: (v: string) => false}).value();
}

// _.eq
namespace TestEq {
    {
        let result: boolean;

        result = _.eq(any, any);

        result = _(any).eq(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().eq(any);
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
        let value: number|IArguments = 0;

        if (_.isArguments(value)) {
            let result: IArguments = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isArguments(any);
        let wrap = _(any);
        if (wrap.isArguments()) {
            wrap;
        }
        result = _(1).isArguments();
        result = _([]).isArguments();
        result = _({}).isArguments();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArguments();
        result = _([]).chain().isArguments();
        result = _({}).chain().isArguments();
    }
}

// _.isArray
namespace TestIsArray {
    {
        let value: number|string[]|boolean[] = any;

        if (_.isArray(value)) {
            value; // $ExpectType string[] | boolean[]
        } else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        result = _.isArray(any);
        result = _(1).isArray();
        result = _([]).isArray();
        result = _({}).isArray();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArray();
        result = _([]).chain().isArray();
        result = _({}).chain().isArray();
    }
}

// _.isArrayBuffer
namespace TestIsArrayBuffer {
    {
        let value: ArrayBuffer|number = any;

        if (_.isArrayBuffer(value)) {
            value; // $ExpectType ArrayBuffer
        } else {
            value; // $ExpectType number
        }
    }

    {
        let result: boolean;

        result = _.isArrayBuffer(any);
        result = _(1).isArrayBuffer();
        result = _([]).isArrayBuffer();
        result = _({}).isArrayBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isArrayBuffer();
        result = _([]).chain().isArrayBuffer();
        result = _({}).chain().isArrayBuffer();
    }
}

// _.isArrayLike
namespace TestIsArrayLike {
    {
        let value: string | string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | { length: string } | { a: string } | null | undefined
            = any;

        if (_.isArrayLike(value)) {
            let result: string | string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            let result: number | (() => void) | { length: string } | { a: string; } | null | undefined = value;
        }
    }

    {
        let value: boolean[] = any;

        if (_.isArrayLike(value)) {
            let result: boolean[] = value;
        } else {
            value; // $ExpectType never
        }
    }

    {
        let value: ((value: string) => number) | null = any;

        if (_.isArrayLike(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType ((value: string) => number) | null
        }
    }

    {
        let value: { a: string } = any;

        if (_.isArrayLike(value)) {
            let result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = any;

        if (_.isArrayLike(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _(any).isArrayLike();
        result = _(1).isArrayLike();
        result = _([]).isArrayLike();
        result = _({}).isArrayLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isArrayLike();
        result = _(1).chain().isArrayLike();
        result = _([]).chain().isArrayLike();
        result = _({}).chain().isArrayLike();
    }
}

// _.isArrayLikeObject
namespace TestIsArrayLikeObject {
    {
        let value: string[] | { [index: number]: boolean, length: number } | [number, boolean]
            | number | string | { length: string } | { a: string } | null | undefined
            = any;

        if (_.isArrayLikeObject(value)) {
            let result: string[] | { [index: number]: boolean, length: number } | [number, boolean] = value;
        } else {
            let result: string | number | { length: string; } | { a: string; } | null | undefined = value;
        }
    }

    {
        let value: boolean[] = any;

        if (_.isArrayLikeObject(value)) {
            let result: boolean[] = value;
        } else {
            value; // $ExpectType never
        }
    }

    {
        let value: string | null = any;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType never
        } else {
            value; // $ExpectType string | null
        }
    }

    {
        let value: { a: string } = any;

        if (_.isArrayLikeObject(value)) {
            let result: { a: string, length: number } = value;
        } else {
            value; // $ExpectType { a: string; }
        }
    }

    {
        let value: any = any;

        if (_.isArrayLikeObject(value)) {
            value; // $ExpectType any
        } else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _(any).isArrayLikeObject();
        result = _(1).isArrayLikeObject();
        result = _([]).isArrayLikeObject();
        result = _({}).isArrayLikeObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isArrayLikeObject();
        result = _(1).chain().isArrayLikeObject();
        result = _([]).chain().isArrayLikeObject();
        result = _({}).chain().isArrayLikeObject();
    }
}

// _.isBoolean
namespace TestIsBoolean {
    {
        let value: number|boolean = 0;

        if (_.isBoolean(value)) {
            let result: boolean = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isBoolean(any);
        result = _(1).isBoolean();
        result = _([]).isBoolean();
        result = _({}).isBoolean();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBoolean();
        result = _([]).chain().isBoolean();
        result = _({}).chain().isBoolean();
    }
}

// _.isBuffer
namespace TestIsBuffer {
    {
        let result: boolean;

        result = _.isBuffer(any);
        result = _(1).isBuffer();
        result = _([]).isBuffer();
        result = _({}).isBuffer();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isBuffer();
        result = _([]).chain().isBuffer();
        result = _({}).chain().isBuffer();
    }
}

// _.isDate
{
    {
        let value: number|Date = 0;

        if (_.isDate(value)) {
            let result: Date = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isDate(any);
        result = _(42).isDate();
        result = _([]).isDate();
        result = _({}).isDate();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isDate();
        result = _([]).chain().isDate();
        result = _({}).chain().isDate();
    }
}

// _.isElement
namespace TestIsElement {
    {
        let result: boolean;

        result = _.isElement(any);

        result = _(42).isElement();
        result = _([]).isElement();
        result = _({}).isElement();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(42).chain().isElement();
        result = _([]).chain().isElement();
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
        result = _([]).isEmpty();
        result = _({}).isEmpty();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isEmpty();
        result = _('').chain().isEmpty();
        result = _([]).chain().isEmpty();
        result = _({}).chain().isEmpty();
    }
}

// _.isEqual
namespace TestIsEqual {
    let customizer: (value: any, other: any, indexOrKey?: number|string) => boolean;

    {
        let result: boolean;

        result = _.isEqual(any, any);

        result = _(any).isEqual(any);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isEqual(any);
    }
}

// _.isEqualWith
namespace TestIsEqualWith {
    let customizer = (value: any, other: any, indexOrKey: number|string|undefined, parent: any, otherParent: any, stack: any) => {
        return value ? undefined : true;
    };

    {
        let result: boolean;

        result = _.isEqualWith(any, any, customizer);

        result = _(any).isEqualWith(any, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isEqualWith(any, customizer);
    }
}

// _.isError
namespace TestIsError {
    let x: any = 1;
    {
        let value: number|Error = x;

        if (_.isError(value)) {
            let result: Error = value;
        } else {
            let result: number = value;
        }
    }

    {
        class CustomError extends Error {
            custom: string;
        }

        let value: number|CustomError = x;

        if (_.isError(value)) {
            let result: CustomError = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isError(any);
        result = _(1).isError();
        result = _([]).isError();
        result = _({}).isError();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isError();
        result = _([]).chain().isError();
        result = _({}).chain().isError();
    }
}

// _.isFinite
namespace TestIsFinite {
    {
        let result: boolean;

        result = _.isFinite(any);
        result = _(1).isFinite();
        result = _([]).isFinite();
        result = _({}).isFinite();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isFinite();
        result = _([]).chain().isFinite();
        result = _({}).chain().isFinite();
    }
}

// _.isFunction
namespace TestIsFunction {
    {
        let value: number | ((value: string) => boolean) | (() => void) = any;

        if (_.isFunction(value)) {
            value; // $ExpectTpye ((value: string) => boolean) | (() => void)
        } else {
            value; // $ExpectType number
        }
    }

    {
        let value: any = any;
        if (_.isFunction(value)) {
            let result: (value: string) => boolean = value;
        } else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _.isFunction(any);
        result = _(1).isFunction();
        result = _([]).isFunction();
        result = _({}).isFunction();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isFunction();
        result = _(1).chain().isFunction();
        result = _([]).chain().isFunction();
        result = _({}).chain().isFunction();
    }
}

// _.isInteger
namespace TestIsInteger {
    {
        let result: boolean;

        result = _.isInteger(any);

        result = _(1).isInteger();
        result = _([]).isInteger();
        result = _({}).isInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isInteger();
        result = _([]).chain().isInteger();
        result = _({}).chain().isInteger();
    }
}

// _.isLength
namespace TestIsLength {
    {
        let result: boolean;

        result = _.isLength(any);

        result = _(1).isLength();
        result = _([]).isLength();
        result = _({}).isLength();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isLength();
        result = _([]).chain().isLength();
        result = _({}).chain().isLength();
    }
}

// _.isMap
namespace TestIsMap {
    {
        let value: number|Map<string, number> = 0;

        if (_.isMap(value)) {
            let result: Map<string, number> = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isMap(any);
        result = _(1).isMap();
        result = _([]).isMap();
        result = _({}).isMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isMap();
        result = _([]).chain().isMap();
        result = _({}).chain().isMap();
    }
}

// _.isMatch
namespace TestIsMatch {
    let testIsMatchCustiomizerFn: (value: any, other: any, indexOrKey: number|string) => boolean;

    let result: boolean;

    result = _.isMatch({}, {});
    result = _({}).isMatch({});
}

// _.isMatchWith
namespace TestIsMatchWith {
    let testIsMatchCustiomizerFn = (value: any, other: any, indexOrKey: number|string) => true;

    let result: boolean;

    result = _.isMatchWith({}, {}, testIsMatchCustiomizerFn);
    result = _({}).isMatchWith({}, testIsMatchCustiomizerFn);
}

// _.isNaN
namespace TestIsNaN {
    {
        let result: boolean;

        result = _.isNaN(any);

        result = _(1).isNaN();
        result = _([]).isNaN();
        result = _({}).isNaN();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNaN();
        result = _([]).chain().isNaN();
        result = _({}).chain().isNaN();
    }
}

// _.isNative
namespace TestIsNative {
    {
        let value: number | (() => string) = any;

        if (_.isNative(value)) {
            value; // $ExpectType () => string
        } else {
            value; // $ExpectType number
        }
    }

    {
        let value: any = any;

        if (_.isNative(value)) {
            value();
            let result: (a: number, b: string) => boolean[] = value;
        } else {
            value; // $ExpectType any
        }
    }

    {
        let result: boolean;

        result = _.isNative(any);

        result = _(1).isNative();
        result = _([]).isNative();
        result = _({}).isNative();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(any).chain().isNative();
        result = _(1).chain().isNative();
        result = _([]).chain().isNative();
        result = _({}).chain().isNative();
    }
}

// _.isNil
namespace TestIsNil {
    {
        let result: boolean;

        result = _.isNil(any);

        result = _(1).isNil();
        result = _([]).isNil();
        result = _({}).isNil();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNil();
        result = _([]).chain().isNil();
        result = _({}).chain().isNil();
    }
}

// _.isNull
namespace TestIsNull {
    {
        let result: boolean;

        result = _.isNull(any);

        result = _(1).isNull();
        result = _([]).isNull();
        result = _({}).isNull();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNull();
        result = _([]).chain().isNull();
        result = _({}).chain().isNull();
    }
}

// _.isNumber
namespace TestIsNumber {
    {
        let value: string|number = 0;

        if (_.isNumber(value)) {
            let result: number = value;
        } else {
            let result: string = value;
        }
    }

    {
        let result: boolean;

        result = _.isNumber(any);

        result = _(1).isNumber();
        result = _([]).isNumber();
        result = _({}).isNumber();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isNumber();
        result = _([]).chain().isNumber();
        result = _({}).chain().isNumber();
    }
}

// _.isObject
namespace TestIsObject {
    {
        let result: boolean;

        result = _.isObject(any);
        result = _(1).isObject();
        result = _([]).isObject();
        result = _({}).isObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObject();
        result = _([]).chain().isObject();
        result = _({}).chain().isObject();
    }
}

// _.isObjectLike
namespace TestIsObjectLike {
    {
        let result: boolean;

        result = _.isObjectLike(any);
        result = _(1).isObjectLike();
        result = _([]).isObjectLike();
        result = _({}).isObjectLike();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isObjectLike();
        result = _([]).chain().isObjectLike();
        result = _({}).chain().isObjectLike();
    }
}

// _.isPlainObject
namespace TestIsPlainObject {
    {
        let result: boolean;

        result = _.isPlainObject(any);
        result = _(1).isPlainObject();
        result = _([]).isPlainObject();
        result = _({}).isPlainObject();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isPlainObject();
        result = _([]).chain().isPlainObject();
        result = _({}).chain().isPlainObject();
    }
}

// _.isRegExp
namespace TestIsRegExp {
    {
        let value: number|RegExp = /./;

        if (_.isRegExp(value)) {
            let result: RegExp = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isRegExp(any);
        result = _(1).isRegExp();
        result = _([]).isRegExp();
        result = _({}).isRegExp();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isRegExp();
        result = _([]).chain().isRegExp();
        result = _({}).chain().isRegExp();
    }
}

// _.isSafeInteger
namespace TestIsSafeInteger {
    {
        let result: boolean;

        result = _.isSafeInteger(any);

        result = _(1).isSafeInteger();
        result = _([]).isSafeInteger();
        result = _({}).isSafeInteger();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSafeInteger();
        result = _([]).chain().isSafeInteger();
        result = _({}).chain().isSafeInteger();
    }
}

// _.isSet
namespace TestIsSet {
    {
        let value: number|Set<string> = 0;

        if (_.isSet(value)) {
            let result: Set<string> = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isSet(any);
        result = _(1).isSet();
        result = _([]).isSet();
        result = _({}).isSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSet();
        result = _([]).chain().isSet();
        result = _({}).chain().isSet();
    }
}

// _.isString
namespace TestIsString {
    {
        let value: number|string = '';

        if (_.isString(value)) {
            let result: string = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isString(any);
        result = _(1).isString();
        result = _([]).isString();
        result = _({}).isString();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isString();
        result = _([]).chain().isString();
        result = _({}).chain().isString();
    }
}

// _.isSymbol
namespace TestIsSymbol {
    {
        let result: boolean;

        result = _.isSymbol(any);

        result = _(1).isSymbol();
        result = _([]).isSymbol();
        result = _({}).isSymbol();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isSymbol();
        result = _([]).chain().isSymbol();
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

        result = _.isUndefined(any);

        result = _(1).isUndefined();
        result = _([]).isUndefined();
        result = _({}).isUndefined();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isUndefined();
        result = _([]).chain().isUndefined();
        result = _({}).chain().isUndefined();
    }
}

// _.isWeakMap
namespace TestIsWeakMap {
    {
        interface Obj { a: string; }

        let value: number|WeakMap<Obj, number> = 0;

        if (_.isWeakMap(value)) {
            let result: WeakMap<Obj, number> = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isWeakMap(any);
        result = _(1).isWeakMap();
        result = _([]).isWeakMap();
        result = _({}).isWeakMap();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakMap();
        result = _([]).chain().isWeakMap();
        result = _({}).chain().isWeakMap();
    }
}

// _.isWeakSet
namespace TestIsWeakSet {
    {
        let value: number|WeakSet<string> = 0;

        if (_.isWeakSet(value)) {
            let result: WeakSet<string> = value;
        } else {
            let result: number = value;
        }
    }

    {
        let result: boolean;

        result = _.isWeakSet(any);
        result = _(1).isWeakSet();
        result = _([]).isWeakSet();
        result = _({}).isWeakSet();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(1).chain().isWeakSet();
        result = _([]).chain().isWeakSet();
        result = _({}).chain().isWeakSet();
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
    let array: TResult[] = [];
    let list: _.List<TResult> = [];
    let dictionary: _.Dictionary<TResult> = {};
    let numericDictionary: _.NumericDictionary<TResult> = {};

    {
        let result: string[];

        result = _.toArray('');
    }

    {
        let result: TResult[];

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
        let result: _.LoDashImplicitWrapper<TResult[]>;

        result = _(array).toArray();
        result = _(list).toArray();
        result = _(dictionary).toArray();
        result = _(numericDictionary).toArray();
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

        result = _(array).chain().toArray();
        result = _(list).chain().toArray();
        result = _(dictionary).chain().toArray();
        result = _(numericDictionary).chain().toArray();
    }
}

// _.toPlainObject
namespace TestToPlainObject {
    {
        let result: any;

        result = _.toPlainObject();
        result = _.toPlainObject(true);
        result = _.toPlainObject(1);
        result = _.toPlainObject('a');
        result = _.toPlainObject([]);
        result = _.toPlainObject({});
    }

    {
        let result: _.LoDashImplicitWrapper<any>;

        result = _(true).toPlainObject();
        result = _(1).toPlainObject();
        result = _('a').toPlainObject();
        result = _([1]).toPlainObject();
        result = _([]).toPlainObject();
        result = _({}).toPlainObject();
    }

    {
        let result: _.LoDashExplicitWrapper<any>;

        result = _.chain(true).toPlainObject();
        result = _.chain(1).toPlainObject();
        result = _.chain('a').toPlainObject();
        result = _.chain([1]).toPlainObject();
        result = _.chain([]).toPlainObject();
        result = _.chain({}).toPlainObject();
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

       result = _(true).toFinite();
       result = _(1).toFinite();
       result = _('3.2').toFinite();
       result = _([1]).toFinite();
       result = _([]).toFinite();
       result = _({}).toFinite();
   }

   {
       let result: _.LoDashExplicitWrapper<number>;

       result = _.chain(true).toFinite();
       result = _.chain(1).toFinite();
       result = _.chain('3.2').toFinite();
       result = _.chain([1]).toFinite();
       result = _.chain([]).toFinite();
       result = _.chain({}).toFinite();
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

       result = _(true).toInteger();
       result = _(1).toInteger();
       result = _('a').toInteger();
       result = _([1]).toInteger();
       result = _([]).toInteger();
       result = _({}).toInteger();
   }

   {
       let result: _.LoDashExplicitWrapper<number>;

       result = _.chain(true).toInteger();
       result = _.chain(1).toInteger();
       result = _.chain('a').toInteger();
       result = _.chain([1]).toInteger();
       result = _.chain([]).toInteger();
       result = _.chain({}).toInteger();
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

       result = _(true).toLength();
       result = _(1).toLength();
       result = _('a').toLength();
       result = _([1]).toLength();
       result = _([]).toLength();
       result = _({}).toLength();
   }

   {
       let result: _.LoDashExplicitWrapper<number>;

       result = _.chain(true).toLength();
       result = _.chain(1).toLength();
       result = _.chain('a').toLength();
       result = _.chain([1]).toLength();
       result = _.chain([]).toLength();
       result = _.chain({}).toLength();
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

       result = _(true).toNumber();
       result = _(1).toNumber();
       result = _('a').toNumber();
       result = _([1]).toNumber();
       result = _([]).toNumber();
       result = _({}).toNumber();
   }

   {
       let result: _.LoDashExplicitWrapper<number>;

       result = _.chain(true).toNumber();
       result = _.chain(1).toNumber();
       result = _.chain('a').toNumber();
       result = _.chain([1]).toNumber();
       result = _.chain([]).toNumber();
       result = _.chain({}).toNumber();
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

       result = _(true).toSafeInteger();
       result = _(1).toSafeInteger();
       result = _('a').toSafeInteger();
       result = _([1]).toSafeInteger();
       result = _([]).toSafeInteger();
       result = _({}).toSafeInteger();
   }

   {
       let result: _.LoDashExplicitWrapper<number>;

       result = _.chain(true).toSafeInteger();
       result = _.chain(1).toSafeInteger();
       result = _.chain('a').toSafeInteger();
       result = _.chain([1]).toSafeInteger();
       result = _.chain([]).toSafeInteger();
       result = _.chain({}).toSafeInteger();
   }
}

// _.toString
{
    _.toString(""); // $ExpectType string
    _.toString(1); // $ExpectType string
    _.toString(true); // $ExpectType string
    _.toString([]); // $ExpectType string
    _.toString({}); // $ExpectType string
    _.toString(null); // $ExpectType string
    _.toString(undefined); // $ExpectType string
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

    result = _.max(array);
    result = _.max(list);

    result = _(array).max();
    result = _(list).max();
}

// _.maxBy
namespace TestMaxBy {
    {
        let array: number[] = [];
        let list: _.List<number> = [];

        let listIterator = (value: number, index: number, collection: _.List<number>) => 0;

        let result: number | undefined;

        result = _.maxBy(array);
        result = _.maxBy(array, listIterator);

        result = _.maxBy(list);
        result = _.maxBy(list, listIterator);

        result = _(array).maxBy();
        result = _(array).maxBy(listIterator);

        result = _(list).maxBy();
        result = _(list).maxBy(listIterator);

        let wrapper: _.LoDashExplicitWrapper<number | undefined>;

        wrapper = _.chain(array).maxBy();
        wrapper = _.chain(array).maxBy(listIterator);

        wrapper = _.chain(list).maxBy();
        wrapper = _.chain(list).maxBy(listIterator);
    }

    {
        let array: TResult[] = [];
        let list: _.List<TResult> = [];

        let result: TResult | undefined;

        result = _.maxBy(array, 'a');
        result = _.maxBy(array, {a: 42});
        result = _.maxBy(array, ['a', 42]);

        result = _.maxBy(list, 'a');
        result = _.maxBy(list, {a: 42});
        result = _.maxBy(list, ['a', 42]);

        result = _(array).maxBy('a');
        result = _(array).maxBy({a: 42});
        result = _(array).maxBy(['a', 42]);

        result = _(list).maxBy('a');
        result = _(list).maxBy({a: 42});
        result = _(list).maxBy(['a', 42]);

        let wrapper: _.LoDashExplicitWrapper<TResult | undefined>;

        wrapper = _.chain(array).maxBy('a');
        wrapper = _.chain(array).maxBy({a: 42});
        wrapper = _.chain(array).maxBy(['a', 42]);

        wrapper = _.chain(list).maxBy('a');
        wrapper = _.chain(list).maxBy({a: 42});
        wrapper = _.chain(list).maxBy(['a', 42]);
    }
}

// _.mean
namespace TestMean {
    let array: number[] = [];

    let result: number;

    result = _.mean(array);
    result = _(array).mean();

    _.chain(array).mean(); // $ExpectType LoDashExplicitWrapper<number>
}

// _.meanBy
{
    let array: TResult[] = [];

    let result: number;

    result = _.meanBy(array, (x) => x.a);
    result = _.meanBy(array, 'a');

    result = _(array).meanBy((x) => x.a);
    result = _(array).meanBy('a');

    let wrapper: _.LoDashExplicitWrapper<number | undefined>;

    wrapper = _.chain(array).meanBy((x) => x.a);
    wrapper = _.chain(array).meanBy('a');
}

// _.min
namespace TestMin {
    let array: number[] = [];
    let list: _.List<number> = [];

    let result: number | undefined;

    result = _.min(array);
    result = _.min(list);

    result = _(array).min();
    result = _(list).min();
}

// _.minBy
namespace TestMinBy {
    {
        let array: number[] = [];
        let list: _.List<number> = [];

        let listIterator = (value: number, index: number, collection: _.List<number>) => 0;

        let result: number | undefined;

        result = _.minBy(array);
        result = _.minBy(array, listIterator);

        result = _.minBy(list);
        result = _.minBy(list, listIterator);

        result = _(array).minBy();
        result = _(array).minBy(listIterator);

        result = _(list).minBy();
        result = _(list).minBy(listIterator);

        let wrapper: _.LoDashExplicitWrapper<number | undefined>;

        wrapper = _.chain(array).minBy();
        wrapper = _.chain(array).minBy(listIterator);

        wrapper = _.chain(list).minBy();
        wrapper = _.chain(list).minBy(listIterator);
    }

    {
        let array: TResult[] = [];
        let list: _.List<TResult> = [];

        let result: TResult | undefined;

        result = _.minBy(array);
        result = _.minBy(array, 'a');
        result = _.minBy(array, {a: 42});
        result = _.minBy(array, ['a', 42]);

        result = _.minBy(list);
        result = _.minBy(list, 'a');
        result = _.minBy(list, {a: 42});

        result = _(array).minBy();
        result = _(array).minBy('a');
        result = _(array).minBy({a: 42});
        result = _(array).minBy(['a', 42]);

        result = _(list).minBy();
        result = _(list).minBy('a');
        result = _(list).minBy({a: 42});
        result = _(list).minBy(['a', 42]);

        let wrapper: _.LoDashExplicitWrapper<TResult | undefined>;

        wrapper = _.chain(array).minBy();
        wrapper = _.chain(array).minBy('a');
        wrapper = _.chain(array).minBy({a: 42});
        wrapper = _.chain(array).minBy(['a', 42]);

        wrapper = _.chain(list).minBy();
        wrapper = _.chain(list).minBy('a');
        wrapper = _.chain(list).minBy({a: 42});
        wrapper = _.chain(list).minBy(['a', 42]);
    }
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

    {
        let result: number;

        result = _.sum(array);
        result = _.sum(list);

        result = _(array).sum();
        result = _(list).sum();
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _(array).chain().sum();
        result = _(list).chain().sum();
    }
}

// _.sumBy
namespace TestSumBy {
    let array: number[] | null | undefined = [] as any;
    let objectArray: Array<{ age: number }> | null | undefined = [] as any;

    let list: _.List<number> | null | undefined = [] as any;
    let objectList: _.List<{ age: number }> | null | undefined = [] as any;

    let listIterator = (value: number) => 0;

    {
        let result: number;

        result = _.sumBy(array);
        result = _.sumBy(array, listIterator);
        result = _.sumBy(objectArray, 'age');
        result = _.sumBy(objectArray, (value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });

        result = _.sumBy(list);
        result = _.sumBy(list, listIterator);
        result = _.sumBy(objectList, 'age');
        result = _.sumBy(objectList, (value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });

        result = _(array).sumBy(listIterator);
        result = _(objectArray).sumBy('age');
        result = _(objectArray).sumBy((value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });

        result = _(list).sumBy(listIterator);
        result = _(objectList).sumBy('age');
        result = _(objectList).sumBy((value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });
    }

    {
        let result: _.LoDashExplicitWrapper<number>;

        result = _.chain(array).sumBy(listIterator);
        result = _.chain(objectArray).sumBy('age');
        result = _.chain(objectArray).sumBy((value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });

        result = _.chain(list).sumBy(listIterator);
        result = _.chain(objectList).sumBy('age');
        result = _.chain(objectList).sumBy((value) => {
            value; // $ExpectType { age: number; }
            return value.age;
        });
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

        result = _(3).clamp(2, 4);
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
}

/**********
 * Object *
 **********/

// _.assign
namespace TestAssign {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).assign();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;

        result = _(obj).assign(s1);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;

        result = _(obj).assign(s1, s2);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).assign(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assign(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().assign();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;

        result = _(obj).chain().assign(s1);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;

        result = _(obj).chain().assign(s1, s2);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().assign(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().assign(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assign(s1, s2, s3, s4, s5);
    }
}

// _.assignWith
namespace TestAssignWith {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).assignWith();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;
        result = _(obj).assignWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;
        result = _(obj).assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().assignWith();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;
        result = _(obj).chain().assignWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;
        result = _(obj).chain().assignWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.assignIn
namespace TestAssignIn {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).assignIn();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;

        result = _(obj).assignIn(s1);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;

        result = _(obj).assignIn(s1, s2);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).assignIn<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().assignIn();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;

        result = _(obj).chain().assignIn(s1);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;

        result = _(obj).chain().assignIn(s1, s2);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().assignIn(s1, s2, s3, s4, s5);
    }
}

// _.assignInWith
namespace TestAssignInWith {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).assignInWith();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;
        result = _(obj).assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;
        result = _(obj).assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).assignInWith<{ a: number, b: number, c: number, d: number, e: number }>(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().assignInWith();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;
        result = _(obj).chain().assignInWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;
        result = _(obj).chain().assignInWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;
        result = _(obj).chain().assignInWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.create
namespace TestCreate {
    interface SampleProto { a: number; }
    interface SampleProps { b: string; }

    let prototype: SampleProto = { a: 1 };
    let properties: SampleProps = { b: "" };

    {
        let result: {a: number; b: string};

        result = _.create(prototype, properties);
    }

    {
        let result: _.LoDashImplicitWrapper<{a: number; b: string}>;

        result = _(prototype).create(properties);
    }

    {
        let result: _.LoDashExplicitWrapper<{a: number; b: string}>;

        result = _(prototype).chain().create(properties);
    }
}

// _.defaults
namespace TestDefaults {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).defaults();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: string }>;

        result = _(obj).defaults(s1);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: string, b: number }>;

        result = _(obj).defaults(s1, s2);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: string, b: number, c: number }>;

        result = _(obj).defaults(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: string, b: number, c: number, d: number }>;

        result = _(obj).defaults(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

        result = _(obj).defaults(s1, s2, s3, s4, s5);
    }

    {
            let result: _.LoDashExplicitWrapper<Obj>;

            result = _(obj).chain().defaults();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string }>;

        result = _(obj).chain().defaults(s1);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string, b: number }>;

        result = _(obj).chain().defaults(s1, s2);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string, b: number, c: number }>;

        result = _(obj).chain().defaults(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string, b: number, c: number, d: number }>;

        result = _(obj).chain().defaults(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().defaults(s1, s2, s3, s4, s5);
    }
}

//_.defaultsDeep
{
    interface DefaultsDeepResult {
        user: {
            name: string;
            age: number;
        };
    }
    const TestDefaultsDeepObject = { user: { name: 'barney' } };
    const TestDefaultsDeepSource = { user: { name: 'fred', age: 36 } };

    let result: DefaultsDeepResult;
    result = _.defaultsDeep(TestDefaultsDeepObject, TestDefaultsDeepSource);
    result = _(TestDefaultsDeepObject).defaultsDeep(TestDefaultsDeepSource).value();
    result = _.chain(TestDefaultsDeepObject).defaultsDeep(TestDefaultsDeepSource).value();
}

// _.extend
namespace TestExtend {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).extend();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;

        result = _(obj).extend(s1);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;

        result = _(obj).extend(s1, s2);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).extend(s1, s2, s3);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extend(s1, s2, s3, s4, s5);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().extend();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;

        result = _(obj).chain().extend(s1);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;

        result = _(obj).chain().extend(s1, s2);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().extend(s1, s2, s3);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().extend(s1, s2, s3, s4);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extend(s1, s2, s3, s4, s5);
    }
}

// _.extendWith
namespace TestExtendWith {
    interface Obj { a: string; }
    interface S1 { a: number; }
    interface S2 { b: number; }
    interface S3 { c: number; }
    interface S4 { d: number; }
    interface S5 { e: number; }

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
        let result: _.LoDashImplicitWrapper<Obj>;

        result = _(obj).extendWith();
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number }>;

        result = _(obj).extendWith(s1, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number }>;

        result = _(obj).extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).extendWith(s1, s2, s3, s4, s5, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<Obj>;

        result = _(obj).chain().extendWith();
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number }>;

        result = _(obj).chain().extendWith(s1, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number }>;

        result = _(obj).chain().extendWith(s1, s2, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, s4, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: number, b: number, c: number, d: number, e: number }>;

        result = _(obj).chain().extendWith(s1, s2, s3, s4, s5, customizer);
    }
}

// _.findKey
namespace TestFindKey {
    {
        let result: string | undefined;

        result = _.findKey({a: ''});
        result = _.findKey({a: ''}, '');
        result = _.findKey({a: { b: 5 }}, { b: 5 });
        result = _.findKey({a: { b: 5 }}, ['b', 5]);
        result = _.findKey({a: ''}, (value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });

        result = _({a: ''}).findKey();
        result = _({a: ''}).findKey('');
        result = _({a: { b: 5 }}).findKey({ b: 5 });
        result = _({a: { b: 5 }}).findKey(['b', 5]);
        result = _({a: ''}).findKey((value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _({a: ''}).chain().findKey();
        result = _({a: { b: 5 }}).chain().findKey('b');
        result = _({a: { b: 5 }}).chain().findKey({ b: 5 });
        result = _({a: { b: 5 }}).chain().findKey(['b', 5]);
        result = _({a: ''}).chain().findKey((value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });
    }
}

// _.findLastKey
namespace TestFindLastKey {
    {
        let result: string | undefined;

        result = _.findLastKey({a: ''});
        result = _.findLastKey({a: ''}, '');
        result = _.findLastKey({a: { b: 5 }}, { b: 5 });
        result = _.findLastKey({a: { b: 5 }}, ['b', 5]);
        result = _.findLastKey({a: ''}, (value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });

        result = _({a: ''}).findLastKey();
        result = _({a: ''}).findLastKey('');
        result = _({a: { b: 5 }}).findLastKey({ b: 5 });
        result = _({a: { b: 5 }}).findLastKey(['b', 5]);
        result = _({a: ''}).findLastKey((value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });
    }

    {
        let result: _.LoDashExplicitWrapper<string | undefined>;

        result = _({a: ''}).chain().findLastKey();
        result = _({a: { b: 5 }}).chain().findLastKey('b');
        result = _({a: { b: 5 }}).chain().findLastKey({ b: 5 });
        result = _({a: { b: 5 }}).chain().findLastKey(['b', 5]);
        result = _({a: ''}).chain().findLastKey((value, key, object) => {
            value; // $ExpectType string
            key; //$ExpectType string
            object; // $ExpectType { a: string; }
        });
    }
}

// _.forIn
namespace TestForIn {
    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: TResult = { a: 1, b: "", c: true };
    let nilObject: TResult | null | undefined = any;
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
        let result: TResult;

        result = _.forIn(object);
        result = _.forIn(object, objectIterator);
    }

    {
        let result: TResult | null | undefined;

        result = _.forIn(nilObject);
        result = _.forIn(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).forIn();
        result = _(dictionary).forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).forIn();
        result = _(nilDictionary).forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forIn();
        result = _(dictionary).chain().forIn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).chain().forIn();
        result = _(nilDictionary).chain().forIn(dictionaryIterator);
    }
}

// _.forInRight
namespace TestForInRight {
    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: TResult = { a: 1, b: "", c: true };
    let nilObject: TResult | null | undefined = any;
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
        let result: TResult;

        result = _.forInRight(object);
        result = _.forInRight(object, objectIterator);
    }

    {
        let result: TResult | null | undefined;

        result = _.forInRight(nilObject);
        result = _.forInRight(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).forInRight();
        result = _(dictionary).forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).forInRight();
        result = _(nilDictionary).forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forInRight();
        result = _(dictionary).chain().forInRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).chain().forInRight();
        result = _(nilDictionary).chain().forInRight(dictionaryIterator);
    }
}

// _.forOwn
namespace TestForOwn {
    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: TResult = { a: 1, b: "", c: true };
    let nilObject: TResult | null | undefined = any;
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
        let result: TResult;

        result = _.forOwn(object);
        result = _.forOwn(object, objectIterator);
    }

    {
        let result: TResult | null | undefined;

        result = _.forOwn(nilObject);
        result = _.forOwn(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwn();
        result = _(dictionary).forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).forOwn();
        result = _(nilDictionary).forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwn();
        result = _(dictionary).chain().forOwn(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).chain().forOwn();
        result = _(nilDictionary).chain().forOwn(dictionaryIterator);
    }
}

// _.forOwnRight
namespace TestForOwnRight {
    let dictionary: _.Dictionary<number> = {};
    let nilDictionary: _.Dictionary<number> | null | undefined = any;
    let dictionaryIterator: (value: number, key: string, collection: _.Dictionary<number>) => any = (value: number, key: string, collection: _.Dictionary<number>) => 1;

    let object: TResult = { a: 1, b: "", c: true };
    let nilObject: TResult | null | undefined = any;
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
        let result: TResult;

        result = _.forOwnRight(object);
        result = _.forOwnRight(object, objectIterator);
    }

    {
        let result: TResult | null | undefined;

        result = _.forOwnRight(nilObject);
        result = _.forOwnRight(nilObject, objectIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).forOwnRight();
        result = _(dictionary).forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).forOwnRight();
        result = _(nilDictionary).forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number>>;

        result = _(dictionary).chain().forOwnRight();
        result = _(dictionary).chain().forOwnRight(dictionaryIterator);
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<number> | null | undefined>;

        result = _(nilDictionary).chain().forOwnRight();
        result = _(nilDictionary).chain().forOwnRight(dictionaryIterator);
    }
}

// _.functions
namespace TestFunctions {
    let object: TResult = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functions(object);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _(object).functions();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(object).chain().functions();
    }
}

// _.functionsIn
namespace TestFunctionsIn {
    let object: TResult = { a: 1, b: "", c: true };

    {
        let result: string[];

        result = _.functionsIn(object);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _(object).functionsIn();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(object).chain().functionsIn();
    }
}

// _.get
namespace TestGet {
    {
        let result: string;

        result = _.get('abc', '0');
        result = _.get('abc', '0', '_');
        result = _.get('abc', ['0']);
        result = _.get('abc', ['0'], '_');

        result = _('abc').get('0');
        result = _('abc').get('0', '_');
        result = _('abc').get(['0']);
        result = _('abc').get(['0'], '_');
    }

    {
        let result: number;

        result = _.get([42], '0');
        result = _.get([42], '0', -1);
        result = _.get([42], ['0']);
        result = _.get([42], ['0'], -1);

        result = _([42]).get('0');
        result = _([42]).get('0', -1);
        result = _([42]).get(['0']);
        result = _([42]).get(['0'], -1);
    }

    {
        _.get({a: true}, 'a'); // $ExpectType boolean
        _.get({a: true}, ['a']); // $ExpectType boolean
        _.get({a: true}, 'a', false); // $ExpectType boolean
        _.get({a: true}, ['a'], false); // $ExpectType boolean
        _.get({a: true}, 'a', 1); // $ExpectType boolean | 1
        _.get({a: true}, ['a'], 1); // $ExpectType boolean | 1

        _({a: true}).get('a'); // $ExpectType boolean
        _({a: true}).get(['a']); // $ExpectType boolean
        _({a: true}).get('a', false); // $ExpectType boolean
        _({a: true}).get(['a'], false); // $ExpectType boolean
        _({a: true}).get('a', 1); // $ExpectType boolean | 1
        _({a: true}).get(['a'], 1); // $ExpectType boolean | 1
    }

    {
        const obj: { a: boolean } | null | undefined = any;

        _.get(obj, 'a'); // $ExpectType boolean | undefined
        _.get(obj, ['a']); // $ExpectType boolean | undefined
        _.get(obj, 'a', false); // $ExpectType boolean
        _.get(obj, ['a'], false); // $ExpectType boolean
        _.get(obj, 'a', 1); // $ExpectType boolean | 1
        _.get(obj, ['a'], 1); // $ExpectType boolean | 1

        _(obj).get('a'); // $ExpectType boolean | undefined
        _(obj).get(['a']); // $ExpectType boolean | undefined
        _(obj).get('a', false); // $ExpectType boolean
        _(obj).get(['a'], false); // $ExpectType boolean
        _(obj).get('a', 1); // $ExpectType boolean | 1
        _(obj).get(['a'], 1); // $ExpectType boolean | 1
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
        _({a: true}).chain().get('a'); // $ExpectType LoDashExplicitWrapper<boolean>
        _({a: true}).chain().get(['a']); // $ExpectType LoDashExplicitWrapper<boolean>
        _({a: true}).chain().get('a', false); // $ExpectType LoDashExplicitWrapper<boolean>
        _({a: true}).chain().get(['a'], false); // $ExpectType LoDashExplicitWrapper<boolean>
        _({a: true}).chain().get('a', 1); // $ExpectType LoDashExplicitWrapper<boolean | 1>
        _({a: true}).chain().get(['a'], 1); // $ExpectType LoDashExplicitWrapper<boolean | 1>
    }

    {
        const obj: { a: boolean } | null | undefined = any;

        _(obj).chain().get('a'); // $ExpectType LoDashExplicitWrapper<boolean | undefined>
        _(obj).chain().get(['a']); // $ExpectType LoDashExplicitWrapper<boolean | undefined>
        _(obj).chain().get('a', false); // $ExpectType LoDashExplicitWrapper<boolean>
        _(obj).chain().get(['a'], false); // $ExpectType LoDashExplicitWrapper<boolean>
        _(obj).chain().get('a', 1); // $ExpectType LoDashExplicitWrapper<boolean | 1>
        _(obj).chain().get(['a'], 1); // $ExpectType LoDashExplicitWrapper<boolean | 1>
    }
}

// _.has
namespace TestHas {
    let object: TResult = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.has(object, '');
        result = _.has(object, 42);
        result = _.has(object, true);
        result = _.has(object, ['', 42, true]);

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

// _.hasIn
namespace TestHasIn {
    let object: TResult = { a: 1, b: "", c: true };

    {
        let result: boolean;

        result = _.hasIn(object, '');
        result = _.hasIn(object, 42);
        result = _.hasIn(object, true);
        result = _.hasIn(object, ['', 42, true]);

        result = _(object).hasIn('');
        result = _(object).hasIn(42);
        result = _(object).hasIn(true);
        result = _(object).hasIn(['', 42, true]);
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _(object).chain().hasIn('');
        result = _(object).chain().hasIn(42);
        result = _(object).chain().hasIn(true);
        result = _(object).chain().hasIn(['', 42, true]);
    }
}

// _.invert
namespace TestInvert {
    {
        let result: _.Dictionary<string>;

        result = _.invert({});
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<string>>;

        result = _({}).invert();
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<string>>;

        result = _({}).chain().invert();
    }
}

// _.invertBy
namespace TestInvertBy {
    let array: Array<{a: number;}> = [];
    let list: _.List<{a: number;}> = [];
    let dictionary: _.Dictionary<{a: number;}> = {};
    let numericDictionary: _.NumericDictionary<{a: number;}> = {};

    let stringIterator = (value: string) => any;
    let arrayIterator = (value: {a: number;}) => any;
    let listIterator = (value: {a: number;}) => any;
    let dictionaryIterator = (value: {a: number;}) => any;
    let numericDictionaryIterator = (value: {a: number;}) => any;

    {
        let result: _.Dictionary<string[]>;

        result = _.invertBy('foo');
        result = _.invertBy('foo', stringIterator);

        result = _.invertBy(array);
        result = _.invertBy(array, 'a');
        result = _.invertBy(array, arrayIterator);
        result = _.invertBy(array, {a: 1});

        result = _.invertBy(list);
        result = _.invertBy(list, 'a');
        result = _.invertBy(list, listIterator);
        result = _.invertBy(list, {a: 1});

        result = _.invertBy(dictionary);
        result = _.invertBy(dictionary, 'a');
        result = _.invertBy(dictionary, dictionaryIterator);
        result = _.invertBy(dictionary, {a: 1});

        result = _.invertBy(numericDictionary);
        result = _.invertBy(numericDictionary, 'a');
        result = _.invertBy(numericDictionary, numericDictionaryIterator);
        result = _.invertBy(numericDictionary, {a: 1});
    }

    {
        let result: _.LoDashImplicitWrapper<_.Dictionary<string[]>>;

        result = _('foo').invertBy();
        result = _('foo').invertBy(stringIterator);

        result = _(array).invertBy();
        result = _(array).invertBy('a');
        result = _(array).invertBy(arrayIterator);
        result = _(array).invertBy({a: 1});

        result = _(list).invertBy();
        result = _(list).invertBy('a');
        result = _(list).invertBy(listIterator);
        result = _(list).invertBy({a: 1});

        result = _(dictionary).invertBy();
        result = _(dictionary).invertBy('a');
        result = _(dictionary).invertBy(dictionaryIterator);
        result = _(dictionary).invertBy({a: 1});

        result = _(numericDictionary).invertBy();
        result = _(numericDictionary).invertBy('a');
        result = _(numericDictionary).invertBy(numericDictionaryIterator);
        result = _(numericDictionary).invertBy({a: 1});
    }

    {
        let result: _.LoDashExplicitWrapper<_.Dictionary<string[]>>;

        result = _('foo').chain().invertBy();
        result = _('foo').chain().invertBy(stringIterator);

        result = _(array).chain().invertBy();
        result = _(array).chain().invertBy('a');
        result = _(array).chain().invertBy(arrayIterator);
        result = _(array).chain().invertBy({a: 1});

        result = _(list).chain().invertBy();
        result = _(list).chain().invertBy('a');
        result = _(list).chain().invertBy(listIterator);
        result = _(list).chain().invertBy({a: 1});

        result = _(dictionary).chain().invertBy();
        result = _(dictionary).chain().invertBy('a');
        result = _(dictionary).chain().invertBy(dictionaryIterator);
        result = _(dictionary).chain().invertBy({a: 1});

        result = _(numericDictionary).chain().invertBy();
        result = _(numericDictionary).chain().invertBy('a');
        result = _(numericDictionary).chain().invertBy(numericDictionaryIterator);
        result = _(numericDictionary).chain().invertBy({a: 1});
    }
}

// _.keys
namespace TestKeys {
    let object: _.Dictionary<any> | null | undefined = any;

    {
        let result: string[];

        result = _.keys(object);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _(object).keys();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(object).chain().keys();
    }
}

// _.keysIn
namespace TestKeysIn {
    let object: _.Dictionary<any> | null | undefined = any;

    {
        let result: string[];

        result = _.keysIn(object);
    }

    {
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _(object).keysIn();
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _(object).chain().keysIn();
    }
}

// _.mapKeys
namespace TestMapKeys {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult>| null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;

    let listIterator = (value: TResult, index: number, collection: _.List<TResult>) => "";
    let dictionaryIterator = (value: TResult, key: string, collection: _.Dictionary<TResult>) => "";

    {
        let result: _.Dictionary<TResult>;

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
        let result: _.LoDashImplicitWrapper<_.Dictionary<TResult>>;

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
        let result: _.LoDashExplicitWrapper<_.Dictionary<TResult>>;

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

// _.mapValues
namespace TestMapValues {
    let array: TResult[] | null | undefined = [] as any;
    let list: _.List<TResult>| null | undefined = [] as any;
    let dictionary: _.Dictionary<TResult> | null | undefined = any;
    let obj: TResult = any;

    _.mapValues(any); // $ExpectType any
    let r1 = _.mapValues(any, (value, key, object) => {
        value; // $ExpectType any
        key; // $ExpectType string
        object; // $ExpectType any
        return value.a;
    });
    r1; // $ExpectType any
    _.mapValues(dictionary); // $ExpectType { [x: string]: string; }
    _.mapValues(dictionary, 'a'); // $ExpectType Dictionary<number>
    _.mapValues(dictionary, {a: 42}); // $ExpectType { [x: string]: boolean; }
    _.mapValues(dictionary, ['a', 42]); // $ExpectType { [x: string]: boolean; }
    let r2 = _.mapValues(dictionary, (value, key, object) => {
        value; // $ExpectType TResult
        key; // $ExpectType string
        object; // $ExpectType Dictionary<TResult>
        return value.a;
    });
    r2; // $ExpectType { [x: string]: number; }
    let r3 = _.mapValues(obj, (value, key, object): number | boolean => {
        value; // $ExpectType string | number | boolean
        key; // $ExpectType string
        object; // $ExpectType TResult
        return value ? 1 : false;
    });
    r3; // $ExpectType { a: number | boolean; b: number | boolean; c: number | boolean; }

    _(any).mapValues(); // $ExpectType LoDashImplicitWrapper<any>
    let r4 = _(any).mapValues((value, key, object) => {
        value; // $ExpectType any
        key; // $ExpectType string
        object; // $ExpectType any
        return value.a;
    });
    r4; // $ExpectType LoDashImplicitWrapper<any>
    _(dictionary).mapValues(); // $ExpectType LoDashImplicitWrapper<{ [x: string]: string; }>
    _(dictionary).mapValues('a'); // $ExpectType LoDashImplicitWrapper<Dictionary<number>>
    _(dictionary).mapValues({a: 42}); // $ExpectType LoDashImplicitWrapper<{ [x: string]: boolean; }>
    _(dictionary).mapValues(['a', 42]); // $ExpectType LoDashImplicitWrapper<{ [x: string]: boolean; }>
    let r5 =  _(dictionary).mapValues((value, key, object) => {
        value; // $ExpectType TResult
        key; // $ExpectType string
        object; // $ExpectType Dictionary<TResult>
        return value.a;
    });
    r5; // $ExpectType LoDashImplicitWrapper<{ [x: string]: number; }>
    let r6 = _(obj).mapValues((value, key, object): number | boolean => {
        value; // $ExpectType string | number | boolean
        key; // $ExpectType string
        object; // $ExpectType TResult
        return value ? 1 : false;
    });
    r6; // $ExpectType LoDashImplicitWrapper<{ a: number | boolean; b: number | boolean; c: number | boolean; }>

    _.chain(any).mapValues(); // $ExpectType LoDashExplicitWrapper<any>
    let r7 = _.chain(any).mapValues((value, key, object) => {
        value; // $ExpectType any
        key; // $ExpectType string
        object; // $ExpectType any
        return value.a;
    });
    r7; // $ExpectType LoDashExplicitWrapper<any>
    _.chain(dictionary).mapValues(); // $ExpectType LoDashExplicitWrapper<{ [x: string]: string; }>
    _.chain(dictionary).mapValues('a'); // $ExpectType LoDashExplicitWrapper<Dictionary<number>>
    _.chain(dictionary).mapValues({a: 42}); // $ExpectType LoDashExplicitWrapper<{ [x: string]: boolean; }>
    _.chain(dictionary).mapValues(['a', 42]); // $ExpectType LoDashExplicitWrapper<{ [x: string]: boolean; }>
    let r8 = _.chain(dictionary).mapValues((value, key, object) => {
        value; // $ExpectType TResult
        key; // $ExpectType string
        object; // $ExpectType Dictionary<TResult>
        return value.a;
    });
    r8; // $ExpectType LoDashExplicitWrapper<{ [x: string]: number; }>
    let r9 = _.chain(obj).mapValues((value, key, object): number | boolean => {
        value; // $ExpectType string | number | boolean
        key; // $ExpectType string
        object; // $ExpectType TResult
        return value ? 1 : false;
    });
    r9; // $ExpectType LoDashExplicitWrapper<{ a: number | boolean; b: number | boolean; c: number | boolean; }>
}

// _.merge
namespace TestMerge {
    interface InitialValue { a : number; }
    interface MergingValue { b : string; }

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    interface ExpectedResult { a: number; b: string; }
    let result: ExpectedResult;

    // Test for basic merging

    result = _.merge(initialValue, mergingValue);

    result = _.merge(initialValue, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, mergingValue);

    result = _.merge(initialValue, {}, {}, {}, mergingValue);

    // Once we get to the varargs version, you have to specify the result explicitly
    result = _.merge(initialValue, {}, {}, {}, {}, mergingValue);

    interface ComplicatedExpectedType { a: number; b: string; c: {}; d: number[]; e: boolean; }

    let complicatedResult: ComplicatedExpectedType = _.merge({ a: 1 },
                                                             { b: "string" },
                                                             { c: {} },
                                                             { d: [1] },
                                                             { e: true });
    // Test for type overriding

    interface ExpectedTypeAfterOverriding { a: boolean; }

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
        let result: _.LoDashExplicitWrapper<ExpectedResult>;
        // result = _(initialValue).chain().merge(mergingValue);
        // result = _(initialValue).chain().merge({}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, mergingValue);
        // result = _(initialValue).chain().merge({}, {}, {}, mergingValue);
        // result = _(initialValue).chain().merge<ExpectedResult>({}, {}, {}, {}, mergingValue);
    }

    {
        let result: _.LoDashExplicitWrapper<ComplicatedExpectedType>;

        //result = _({ a: 1 }).chain().merge({ b: "string" }, { c: {} }, { d: [1] }, { e: true });
    }

    {
        let result: _.LoDashExplicitWrapper<ExpectedTypeAfterOverriding>;

        //result = _({ a: 1 }).chain().merge({ a: "string" }, { a: {} }, { a: [1] }, { a: true });
    }
}

// _.mergeWith
namespace TestMergeWith {
    interface InitialValue { a : number; }
    interface MergingValue { b : string; }

    const initialValue  = { a : 1 };
    const mergingValue  = { b : "hi" };

    interface ExpectedResult { a: number; b: string; }
    let result: ExpectedResult;

    let customizer: (value: any, srcValue: any, key?: string, object?: InitialValue, source?: MergingValue) => any = (value: any, srcValue: any, key?: string, object?: InitialValue, source?: MergingValue) => 1;

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

    // Once we get to the varargs version, you have to specify the result explicitl
    result = _(initialValue).mergeWith({}, {}, {}, {}, mergingValue, customizer).value();
}

// _.omit
namespace TestOmit {
    let obj: TResult | null | undefined = any;

    {
        let result: Partial<TResult>;

        result = _.omit(obj, 'a');
        result = _.omit(obj, 0, 'a');
        result = _.omit(obj, true, 0, 'a');
        result = _.omit(obj, ['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<TResult>>;

        result = _(obj).omit('a');
        result = _(obj).omit(0, 'a');
        result = _(obj).omit(true, 0, 'a');
        result = _(obj).omit(['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<TResult>>;

        result = _(obj).chain().omit('a');
        result = _(obj).chain().omit(0, 'a');
        result = _(obj).chain().omit(true, 0, 'a');
        result = _(obj).chain().omit(['b', 1, false], true, 0, 'a');
    }
}

// _.omitBy
namespace TestOmitBy {
    let obj: TResult | null | undefined = any;
    let predicate = (element: string | number | boolean, key: string) => true;

    {
        let result: Partial<TResult>;

        result = _.omitBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<TResult>>;

        result = _(obj).omitBy(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<TResult>>;

        result = _(obj).chain().omitBy(predicate);
    }
}

// _.pick
namespace TestPick {
    let obj: TResult | null | undefined = any;

    {
        let result: Partial<TResult>;

        result = _.pick(obj, 'a');
        result = _.pick(obj, 0, 'a');
        result = _.pick(obj, true, 0, 'a');
        result = _.pick(obj, ['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<TResult>>;

        result = _(obj).pick('a');
        result = _(obj).pick(0, 'a');
        result = _(obj).pick(true, 0, 'a');
        result = _(obj).pick(['b', 1, false], true, 0, 'a');
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<TResult>>;

        result = _(obj).chain().pick('a');
        result = _(obj).chain().pick(0, 'a');
        result = _(obj).chain().pick(true, 0, 'a');
        result = _(obj).chain().pick(['b', 1, false], true, 0, 'a');
    }
}

// _.pickBy
namespace TestPickBy {
    let obj: TResult | null | undefined = any;
    let predicate = (element: string | number | boolean, key: string) => true;

    {
        let result: Partial<TResult>;

        result = _.pickBy(obj, predicate);
    }

    {
        let result: _.LoDashImplicitWrapper<Partial<TResult>>;

        result = _(obj).pickBy(predicate);
    }

    {
        let result: _.LoDashExplicitWrapper<Partial<TResult>>;

        result = _(obj).chain().pickBy(predicate);
    }
}

// _.result
namespace TestResult {
    {
        let result: number;

        result = _.result<number>([42], '0');
        result = _.result([42], '0', -1);
        result = _.result([42], '0', () => -1);
        result = _.result<number>([42], ['0']);
        result = _.result([42], ['0'], -1);
        result = _.result([42], ['0'], () => -1);

        result = _([42]).result<number>('0');
        result = _([42]).result('0', -1);
        result = _([42]).result('0', () => -1);
        result = _([42]).result<number>(['0']);
        result = _([42]).result(['0'], -1);
        result = _([42]).result(['0'], () => -1);
    }

    {
        let result: boolean;

        result = _.result<boolean>({a: true}, 'a');
        result = _.result({a: true}, 'a', false);
        result = _.result({a: true}, 'a', () => false);
        result = _.result<boolean>({a: true}, ['a']);
        result = _.result({a: true}, ['a'], false);
        result = _.result({a: true}, ['a'], () => false);

        result = _({a: true}).result<boolean>('a');
        result = _({a: true}).result('a', false);
        result = _({a: true}).result('a', () => false);
        result = _({a: true}).result<boolean>(['a']);
        result = _({a: true}).result(['a'], false);
        result = _({a: true}).result(['a'], () => false);
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
}

// _.set
namespace TestSet {
    interface SampleObject { a: {}; }

    let object: SampleObject = { a: {} };
    let value = 0;

    {
        let result: SampleObject;

        result = _.set(object, 'a.b[1]', value);
        result = _.set(object, ['a', 'b', 1], value);

        result = _.set(object, 'a.b[1]', value);
        result = _.set(object, ['a', 'b', 1], value);

        result = _.set(object, 'a.b[1]', value);
        result = _.set(object, ['a', 'b', 1], value);
    }

    {
        let result: _.LoDashImplicitWrapper<SampleObject>;

        result = _(object).set('a.b[1]', value);
        result = _(object).set(['a', 'b', 1], value);

        result = _(object).set('a.b[1]', value);
        result = _(object).set(['a', 'b', 1], value);
    }

    {
        let result: _.LoDashExplicitWrapper<SampleObject>;

        result = _(object).chain().set('a.b[1]', value);
        result = _(object).chain().set(['a', 'b', 1], value);

        result = _(object).chain().set('a.b[1]', value);
        result = _(object).chain().set(['a', 'b', 1], value);
    }
}

// _.setWith
namespace TestSetWith {
    interface SampleObject { a: {}; }

    let object: SampleObject = { a: {} };
    let value = 0;
    let customizer = (value: any, key: string, object: SampleObject) => 0;

    {
        let result: SampleObject;

        result = _.setWith(object, 'a.b[1]', value);
        result = _.setWith(object, 'a.b[1]', value, customizer);
        result = _.setWith(object, ['a', 'b', 1], value);
        result = _.setWith(object, ['a', 'b', 1], value, customizer);

        result = _.setWith(object, 'a.b[1]', value);
        result = _.setWith(object, 'a.b[1]', value, customizer);
        result = _.setWith(object, ['a', 'b', 1], value);
        result = _.setWith(object, ['a', 'b', 1], value, customizer);

        result = _.setWith(object, 'a.b[1]', value);
        result = _.setWith(object, 'a.b[1]', value, customizer);
        result = _.setWith(object, ['a', 'b', 1], value);
        result = _.setWith(object, ['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashImplicitWrapper<SampleObject>;

        result = _(object).setWith('a.b[1]', value);
        result = _(object).setWith('a.b[1]', value, customizer);
        result = _(object).setWith(['a', 'b', 1], value);
        result = _(object).setWith(['a', 'b', 1], value, customizer);

        result = _(object).setWith('a.b[1]', value);
        result = _(object).setWith('a.b[1]', value, customizer);
        result = _(object).setWith(['a', 'b', 1], value);
        result = _(object).setWith(['a', 'b', 1], value, customizer);
    }

    {
        let result: _.LoDashExplicitWrapper<SampleObject>;

        result = _(object).chain().setWith('a.b[1]', value);
        result = _(object).chain().setWith('a.b[1]', value, customizer);
        result = _(object).chain().setWith(['a', 'b', 1], value);
        result = _(object).chain().setWith(['a', 'b', 1], value, customizer);

        result = _(object).chain().setWith('a.b[1]', value);
        result = _(object).chain().setWith('a.b[1]', value, customizer);
        result = _(object).chain().setWith(['a', 'b', 1], value);
        result = _(object).chain().setWith(['a', 'b', 1], value, customizer);
    }
}

// _.toPairs
namespace TestToPairs {
    let dictionary: _.Dictionary<string> = {};
    let object: TResult = any;

    {
        let result: Array<[string, string]>;

        result = _.toPairs(dictionary);
    }

    {
        let result: Array<[string, any]>;

        result = _.toPairs(object);
    }

    {
        let result: _.LoDashImplicitWrapper<Array<[string, string]>>;

        result = _(dictionary).toPairs();
    }

    {
        let result: _.LoDashImplicitWrapper<Array<[string, any]>>;

        result = _(object).toPairs();
    }

    {
        let result: _.LoDashExplicitWrapper<Array<[string, string]>>;

        result = _(dictionary).chain().toPairs();
    }

    {
        let result: _.LoDashExplicitWrapper<Array<[string, any]>>;

        result = _(object).chain().toPairs();
    }
}

// _.toPairsIn
namespace TestToPairsIn {
    let dictionary: _.Dictionary<string> = {};
    let object: TResult = any;

    {
        let result: Array<[string, string]>;

        result = _.toPairsIn(dictionary);
    }

    {
        let result: Array<[string, any]>;

        result = _.toPairsIn(object);
    }

    {
        let result: _.LoDashImplicitWrapper<Array<[string, string]>>;

        result = _(dictionary).toPairsIn();
    }

    {
        let result: _.LoDashImplicitWrapper<Array<[string, any]>>;

        result = _(object).toPairsIn();
    }

    {
        let result: _.LoDashExplicitWrapper<Array<[string, string]>>;

        result = _(dictionary).chain().toPairsIn();
    }

    {
        let result: _.LoDashExplicitWrapper<Array<[string, any]>>;

        result = _(object).chain().toPairs();
    }
}

// _.transform
namespace TestTransform {
    let array: number[] = [];
    let dictionary: _.Dictionary<number> = {};

    {
        let iterator = (acc: TResult[], curr: number, index?: number, arr?: number[]) => {};
        let accumulator: TResult[] = [];
        let result: TResult[];

        result = _.transform(array);
        result = _.transform(array, iterator);
        result = _.transform(array, iterator, accumulator);

        result = _(array).transform().value();
        result = _(array).transform(iterator).value();
        result = _(array).transform(iterator, accumulator).value();

        result = _.chain(array).transform().value();
        result = _.chain(array).transform(iterator).value();
        result = _.chain(array).transform(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<TResult>, curr: number, index?: number, arr?: number[]) => {};
        let accumulator: _.Dictionary<TResult> = {};
        let result: _.Dictionary<TResult>;

        result = _.transform(array, iterator, accumulator);
        result = _(array).transform(iterator, accumulator).value();
        result = _.chain(array).transform(iterator, accumulator).value();
    }

    {
        let iterator = (acc: _.Dictionary<TResult>, curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: _.Dictionary<TResult> = {};
        let result: _.Dictionary<TResult>;

        result = _.transform(dictionary);
        result = _.transform(dictionary, iterator);
        result = _.transform(dictionary, iterator, accumulator);

        result = _(dictionary).transform().value();
        result = _(dictionary).transform(iterator).value();
        result = _(dictionary).transform(iterator, accumulator).value();

        result = _.chain(dictionary).transform().value();
        result = _.chain(dictionary).transform(iterator).value();
        result = _.chain(dictionary).transform(iterator, accumulator).value();
    }

    {
        let iterator = (acc: TResult[], curr: number, key?: string, dict?: _.Dictionary<number>) => {};
        let accumulator: TResult[] = [];
        let result: TResult[];

        result = _.transform(dictionary, iterator, accumulator);
        result = _(dictionary).transform(iterator, accumulator).value();
        result = _.chain(dictionary).transform(iterator, accumulator).value();
    }
}

// _.unset
namespace TestUnset {
    interface SampleObject {
        a: {
            b: string;
            c: boolean;
        };
    }

    let object: SampleObject = { a: { b: "", c: true } };

    {
        let result: boolean;

        _.unset(object, 'a.b');
        _.unset(object, ['a', 'b']);
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
    interface SampleObject { a: {}; }

    let object: SampleObject = { a: {} };
    let updater = (value: any) => 0;

    {
        let result: any;

        result = _.update(object, 'a.b[1]', updater);
        result = _.update(object, ['a', 'b', 1], updater);

        result = _.update(object, 'a.b[1]', updater);
        result = _.update(object, ['a', 'b', 1], updater);

        result = _.update(object, 'a.b[1]', updater);
        result = _.update(object, ['a', 'b', 1], updater);

        result = _.update(object, 'a.b[1]', updater);
        result = _.update(object, ['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashImplicitWrapper<any>;

        result = _(object).update('a.b[1]', updater);
        result = _(object).update(['a', 'b', 1], updater);

        result = _(object).update('a.b[1]', updater);
        result = _(object).update(['a', 'b', 1], updater);
    }

    {
        let result: _.LoDashExplicitWrapper<any>;

        result = _(object).chain().update('a.b[1]', updater);
        result = _(object).chain().update(['a', 'b', 1], updater);

        result = _(object).chain().update('a.b[1]', updater);
        result = _(object).chain().update(['a', 'b', 1], updater);
    }
}

// _.values
namespace TestValues {
    interface SampleObject { a: {}; }

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
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('hi').values();
        result = _(['h', 'i']).values();
    }

    {
        let result: _.LoDashImplicitWrapper<number[]>;

        result = _([1, 2]).values();
    }

    {
        let result: _.LoDashImplicitWrapper<boolean[]>;

        result = _([true, false]).values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashImplicitWrapper<SampleObject[]>;

        result = _(dict).values();
        result = _(numDict).values();
        result = _(list).values();
        result = _(object).values();
    }

    // Explicit wrapper

    {
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('hi').chain().values();
        result = _(['h', 'i']).chain().values();
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _([1, 2]).chain().values();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean[]>;

        result = _([true, false]).chain().values();
    }

    {
        let dict: _.Dictionary<SampleObject> = {};
        let numDict: _.NumericDictionary<SampleObject> = {};
        let list: _.List<SampleObject> = [];
        let object: {a: SampleObject} = { a: { a: {} } };
        let result: _.LoDashExplicitWrapper<SampleObject[]>;

        result = _(dict).chain().values();
        result = _(numDict).chain().values();
        result = _(list).chain().values();
        result = _(object).chain().values();
    }

    {
        let object: _.Dictionary<TResult> = {};

        _.values(object); // $ExpectType TResult[]
        _(object).values(); // $ExpectType LoDashImplicitWrapper<TResult[]>
        _.chain(object).values(); // $ExpectType LoDashExplicitWrapper<TResult[]>
    }

    {
        let object: TResult = any;

        _.values(object); // $ExpectType (string | number | boolean)[]
        _(object).values(); // $ExpectType LoDashImplicitWrapper<(string | number | boolean)[]>
        _.chain(object).values(); // $ExpectType LoDashExplicitWrapper<(string | number | boolean)[]>
    }

    {
        _.values(any); // $ExpectType any[]
        _(any).values(); // $ExpectType LoDashImplicitWrapper<any[]>
        _.chain(any).values(); // $ExpectType LoDashExplicitWrapper<any[]>
    }
}

// _.valuesIn
namespace TestValuesIn {
    {
        let object: _.Dictionary<TResult> = {};

        _.valuesIn(object); // $ExpectType TResult[]
        _(object).valuesIn(); // $ExpectType LoDashImplicitWrapper<TResult[]>
        _.chain(object).valuesIn(); // $ExpectType LoDashExplicitWrapper<TResult[]>
    }

    {
        let object: TResult = any;

        _.valuesIn(object); // $ExpectType (string | number | boolean)[]
        _(object).valuesIn(); // $ExpectType LoDashImplicitWrapper<(string | number | boolean)[]>
        _.chain(object).valuesIn(); // $ExpectType LoDashExplicitWrapper<(string | number | boolean)[]>
    }

    {
        let object: TResult = any;

        _.valuesIn(any); // $ExpectType any[]
        _(any).valuesIn(); // $ExpectType LoDashImplicitWrapper<any[]>
        _.chain(any).valuesIn(); // $ExpectType LoDashExplicitWrapper<any[]>
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
        let result: _.LoDashImplicitWrapper<string[]>;

        result = _('a-b-c').split();
        result = _('a-b-c').split('-');
        result = _('a-b-c').split('-', 2);
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;

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
        let result: _.LoDashExplicitWrapper<TemplateExecutor>;

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
        result = _.truncate('hi-diddly-ho there, neighborino', { length: 24, separator: ' ' });
        result = _.truncate('hi-diddly-ho there, neighborino', { length: 24, separator: /,? +/ });
        result = _.truncate('hi-diddly-ho there, neighborino', { omission: ' […]' });

        result = _('hi-diddly-ho there, neighborino').truncate();
        result = _('hi-diddly-ho there, neighborino').truncate({ length: 24, separator: ' ' });
        result = _('hi-diddly-ho there, neighborino').truncate({ length: 24, separator: /,? +/ });
        result = _('hi-diddly-ho there, neighborino').truncate({ omission: ' […]' });
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('hi-diddly-ho there, neighborino').chain().truncate();
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ length: 24, separator: ' ' });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ length: 24, separator: /,? +/ });
        result = _('hi-diddly-ho there, neighborino').chain().truncate({ omission: ' […]' });
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
        let result: _.LoDashExplicitWrapper<string[]>;

        result = _('fred, barney, & pebbles').chain().words();
        result = _('fred, barney, & pebbles').chain().words(/[^, ]+/g);
    }
}

/***********
 * Utility *
 **********/

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
        let result: _.LoDashExplicitWrapper<{a: string}|Error>;

        result = _(func).chain().attempt<{a: string}>();
        result = _(func).chain().attempt<{a: string}>('foo', 'bar', 'baz');
    }
}

// _.constant
namespace TestConstant {
    {
        let result: () => number;
        result = _.constant(42);
    }

    {
        let result: () => string;
        result = _.constant('a');
    }

    {
        let result: () => boolean;
        result = _.constant(true);
    }

    {
        let result: () => string[];
        result = _.constant(['a']);
    }

    {
        let result: () => {a: string};
        result = _.constant({a: 'a'});
    }

    {
        let result: _.LoDashImplicitWrapper<() => number>;
        result = _(42).constant();
    }

    {
        let result: _.LoDashImplicitWrapper<() => string>;
        result = _('a').constant();
    }

    {
        let result: _.LoDashImplicitWrapper<() => boolean>;
        result = _(true).constant();
    }

    {
        let result: _.LoDashImplicitWrapper<() => string[]>;
        result = _(['a']).constant();
    }

    {
        let result: _.LoDashImplicitWrapper<() => {a: string}>;
        result = _({a: 'a'}).constant();
    }

    {
        let result: _.LoDashExplicitWrapper<() => number>;
        result = _(42).chain().constant();
    }

    {
        let result: _.LoDashExplicitWrapper<() => string>;
        result = _('a').chain().constant();
    }

    {
        let result: _.LoDashExplicitWrapper<() => boolean>;
        result = _(true).chain().constant();
    }

    {
        let result: _.LoDashExplicitWrapper<() => string[]>;
        result = _(['a']).chain().constant();
    }

    {
        let result: _.LoDashExplicitWrapper<() => {a: string}>;
        result = _({a: 'a'}).chain().constant();
    }
}

// _.defaultTo
namespace TestDefaultTo {
    {
        _.defaultTo(any, 42); // $ExpectType any
    }

    {
        let result: number;
        result = _.defaultTo(42, 42);
        result = _.defaultTo(undefined, 42);
        result = _.defaultTo(null, 42);
        result = _.defaultTo(NaN, 42);
    }

    {
        let result: string;
        result = _.defaultTo('a', 'default');
        result = _.defaultTo(undefined, 'default');
        result = _.defaultTo(null, 'default');
    }

    {
        let result: boolean;
        result = _.defaultTo(true, true);
        result = _.defaultTo(undefined, true);
        result = _.defaultTo(null, true);
    }

    {
        let result: string[];
        result = _.defaultTo(['a'], ['default']);
        result = _.defaultTo(undefined, ['default']);
        result = _.defaultTo(null, ['default']);
    }

    {
        let obj: {a: string} | null | undefined = any;
        let result: {a: string};
        result = _.defaultTo({a: 'a'}, {a: 'a'});
        result = _.defaultTo(obj, {a: 'a'});
        result = _.defaultTo(undefined, {a: 'a'});
        result = _.defaultTo(null, {a: 'a'});
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
        let result: _.LoDashExplicitWrapper<number>;
        result = _(42).chain().defaultTo(42);
        result = _(undefined).chain().defaultTo(42);
        result = _(null).chain().defaultTo(42);
        result = _(NaN).chain().defaultTo(42);
    }

    {
        let result: _.LoDashExplicitWrapper<string>;
        result = _('a').chain().defaultTo('default');
        result = _(undefined).chain().defaultTo('default');
        result = _(null).chain().defaultTo('default');
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;
        result = _(true).chain().defaultTo(true);
        result = _(undefined).chain().defaultTo(true);
        result = _(null).chain().defaultTo(true);
    }

    {
        let result: _.LoDashExplicitWrapper<string[]>;
        result = _(['a']).chain().defaultTo(['default']);
        result = _(undefined).chain().defaultTo(['default']);
        result = _(null).chain().defaultTo(['default']);
    }

    {
        let result: _.LoDashExplicitWrapper<{ a: string }>;
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
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _([42]).chain().identity();
    }

    {
        let result: _.LoDashExplicitWrapper<{a: number}>;

        result = _({a: 42}).chain().identity();
    }

    {
        let input: {} | null | undefined = any;
        _.identity(input); // $ExpectType {} | null | undefined
        _.identity(); // $ExpectType undefined
    }
}

// _.iteratee
namespace TestIteratee {
    {
        let func = _.iteratee();

        func(); // $ExpectType undefined
        func(1); // $ExpectType 1
        func(""); // $ExpectType ""
    }

    {
        _.iteratee((value: string, indeX: number, collection: string[]): TResult => any); // $ExpectType (value: string, indeX: number, collection: string[]) => TResult
        _.iteratee((a: TResult): boolean => any); // $ExpectType (a: TResult) => boolean
        _.iteratee((a: TResult | undefined): a is undefined => any); // $ExpectType (a: TResult | undefined) => a is undefined

        _((...args: any[]): TResult => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(...args: any[]) => TResult>
        _((a: TResult): boolean => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(a: TResult) => boolean>
        _((a: TResult | undefined): a is undefined => any).iteratee(); // $ExpectType LoDashImplicitWrapper<(a: TResult | undefined) => a is undefined>

        _.chain((...args: any[]): TResult => any).iteratee(); // $ExpectType LoDashExplicitWrapper<(...args: any[]) => TResult>
        _.chain((a: TResult): boolean => any).iteratee(); // $ExpectType LoDashExplicitWrapper<(a: TResult) => boolean>
        _.chain((a: TResult | undefined): a is undefined => any).iteratee(); // $ExpectType LoDashExplicitWrapper<(a: TResult | undefined) => a is undefined>
    }

    {
        let result: (...args: any[]) => any;

        result = _.iteratee(any);
        result = _.iteratee('');
        result = _.iteratee({});

        result = _(any).iteratee().value();
        result = _('').iteratee().value();
        result = _({}).iteratee().value();

        result = _.chain(any).iteratee().value();
        result = _.chain('').iteratee().value();
        result = _.chain({}).iteratee().value();
    }
}

// _.matches
namespace TestMatches {
    let source: TResult = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;
        result = _.matches(source);
    }

    {
        let result: (value: TResult) => boolean;
        result = _.matches(source);
    }

    {
        let result: _.LoDashImplicitWrapper<(value: TResult) => boolean>;
        result = _(source).matches();
    }

    {
        let result: _.LoDashExplicitWrapper<(value: TResult) => boolean>;
        result = _(source).chain().matches();
    }
}

// _.matchesProperty
{
    let path: {toString(): string;}|Array<{toString(): string;}> = [];
    let source: TResult = { a: 1, b: "", c: true };

    {
        let result: (value: any) => boolean;

        result = _.matchesProperty(path, source);
    }

    {
        let result: (value: TResult) => boolean;

        result = _.matchesProperty(path, source);
    }

    {
        let result: _.LoDashImplicitWrapper<(value: any) => boolean>;

        result = _(path).matchesProperty(source);
    }

    {
        let result: _.LoDashImplicitWrapper<(value: TResult) => boolean>;

        result = _(path).matchesProperty(source);
    }

    {
        let result: _.LoDashExplicitWrapper<(value: any) => boolean>;

        result = _(path).chain().matchesProperty(source);
    }

    {
        let result: _.LoDashExplicitWrapper<(value: TResult) => boolean>;

        result = _(path).chain().matchesProperty(source);
    }
}

// _.method
namespace TestMethod {
    {
        let result: (object: any) => any;

        result = _.method('a.0');
        result = _.method('a.0', any, any);
        result = _.method('a.0', any, any, any);

        result = _.method(['a', 0]);
        result = _.method(['a', 0], any);
        result = _.method(['a', 0], any, any);
        result = _.method(['a', 0], any, any, any);
    }

    {
        let result: _.LoDashImplicitWrapper<(object: any) => any>;

        result = _('a.0').method();
        result = _('a.0').method(any);
        result = _('a.0').method(any, any);
        result = _('a.0').method(any, any, any);

        result = _(['a', 0]).method();
        result = _(['a', 0]).method(any);
        result = _(['a', 0]).method(any, any);
        result = _(['a', 0]).method(any, any, any);
    }

    {
        let result: _.LoDashExplicitWrapper<(object: any) => any>;

        result = _('a.0').chain().method();
        result = _('a.0').chain().method(any);
        result = _('a.0').chain().method(any, any);
        result = _('a.0').chain().method(any, any, any);

        result = _(['a', 0]).chain().method();
        result = _(['a', 0]).chain().method(any);
        result = _(['a', 0]).chain().method(any, any);
        result = _(['a', 0]).chain().method(any, any, any);
    }
}

// _.methodOf
namespace TestMethodOf {
    interface SampleObject { a: Array<{ b(): TResult }>; }
    type ResultFn = (path: _.StringRepresentable|_.StringRepresentable[]) => TResult;

    let object: SampleObject = { a: [] };

    {
        let result: ResultFn;

        result = _.methodOf(object);
        result = _.methodOf(object, any);
        result = _.methodOf(object, any, any);
        result = _.methodOf(object, any, any, any);

        result = _.methodOf(object);
        result = _.methodOf(object, any);
        result = _.methodOf(object, any, any);
        result = _.methodOf(object, any, any, any);
    }

    {
        let result: _.LoDashImplicitWrapper<ResultFn>;

        result = _(object).methodOf();
        result = _(object).methodOf(any);
        result = _(object).methodOf(any, any);
        result = _(object).methodOf(any, any, any);
    }

    {
        let result: _.LoDashExplicitWrapper<ResultFn>;

        result = _(object).chain().methodOf();
        result = _(object).chain().methodOf(any);
        result = _(object).chain().methodOf(any, any);
        result = _(object).chain().methodOf(any, any, any);
    }
}

// _.mixin
namespace TestMixin {
    let source: _.Dictionary<(...args: any[]) => any> = {};
    let dest: TResult = any;
    let options: {chain?: boolean} = {};

    {
        let result: _.LoDashStatic;

        result = _.mixin(source);
        result = _.mixin(source, options);
    }

    {
        let result: TResult;

        result = _.mixin(dest, source);
        result = _.mixin(dest, source, options);
    }

    {
        let result: _.LoDashImplicitWrapper<_.LoDashStatic>;

        result = _(source).mixin();
        result = _(source).mixin(options);
    }

    {
        let result: _.LoDashImplicitWrapper<TResult>;

        result = _(dest).mixin(source);
        result = _(dest).mixin(source, options);
    }

    {
        let result: _.LoDashExplicitWrapper<_.LoDashStatic>;

        result = _(source).chain().mixin();
        result = _(source).chain().mixin(options);
    }

    {
        let result: _.LoDashExplicitWrapper<TResult>;

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
        result = _([]).noConflict();
        result = _({}).noConflict();
    }

    {
        let result: _.LoDashExplicitWrapper<typeof _>;

        result = _(42).chain().noConflict();
        result = _([]).chain().noConflict();
        result = _({}).chain().noConflict();
    }
}

// _.noop
namespace TestNoop {
    {
        _.noop(); // $ExpectType void
        _.noop(1); // $ExpectType void
        _.noop('a', 1); // $ExpectType void
        _.noop(true, 'a', 1); // $ExpectType void

        _('a').noop(true, 'a', 1); // $ExpectType void
        _([1]).noop(true, 'a', 1); // $ExpectType void
        _([]).noop(true, 'a', 1); // $ExpectType void
        _({}).noop(true, 'a', 1); // $ExpectType void
        _(any).noop(true, 'a', 1); // $ExpectType void
    }

    {
        let result: _.LoDashExplicitWrapper<undefined>;

        result = _('a').chain().noop(true, 'a', 1);
        result = _([1]).chain().noop(true, 'a', 1);
        result = _([]).chain().noop(true, 'a', 1);
        result = _({}).chain().noop(true, 'a', 1);
        result = _(any).chain().noop(true, 'a', 1);
    }
}

namespace TestNthArg {
    type SampleFunc = (...args: string[]) => string;

    {
        let result: SampleFunc;

        result = _.nthArg();
        result = _.nthArg(1);
    }

    {
        let result: _.LoDashImplicitWrapper<SampleFunc>;

        result = _(1).nthArg();
    }

    {
        let result: _.LoDashExplicitWrapper<SampleFunc>;

        result = _(1).chain().nthArg();
    }
}

// _.over
namespace TestOver {
    {
        let result: (...args: any[]) => number[];

        result = _.over(Math.max);
        result = _.over(Math.max, Math.min);
        result = _.over([Math.max]);
        result = _.over([Math.max], [Math.min]);
    }

    {
        let result: _.LoDashImplicitWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).over();
        result = _(Math.max).over(Math.min);
        result = _([Math.max]).over();
        result = _([Math.max]).over([Math.min]);
    }

    {
        let result: _.LoDashExplicitWrapper<(...args: any[]) => number[]>;

        result = _(Math.max).chain().over();
        result = _(Math.max).chain().over(Math.min);
        result = _([Math.max]).chain().over();
        result = _([Math.max]).chain().over([Math.min]);
    }
}

// _.overEvery
namespace TestOverEvery {
    {
        let result: (...args: any[]) => boolean;

        result = _.overEvery(() => true);
        result = _.overEvery(() => true, () => true);
        result = _.overEvery([() => true]);
        result = _.overEvery([() => true], [() => true]);
    }

    {
        let result: _.LoDashImplicitWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).overEvery();
        result = _(Math.max).overEvery(() => true);
        result = _([Math.max]).overEvery();
        result = _([Math.max]).overEvery([() => true]);
    }

    {
        let result: _.LoDashExplicitWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).chain().overEvery();
        result = _(Math.max).chain().overEvery(() => true);
        result = _([Math.max]).chain().overEvery();
        result = _([Math.max]).chain().overEvery([() => true]);
    }
}

// _.overSome
namespace TestOverSome {
    {
        let result: (...args: any[]) => boolean;

        result = _.overSome(() => true);
        result = _.overSome(() => true, () => true);
        result = _.overSome([() => true]);
        result = _.overSome([() => true], [() => true]);
    }

    {
        let result: _.LoDashImplicitWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).overSome();
        result = _(Math.max).overSome(() => true);
        result = _([Math.max]).overSome();
        result = _([Math.max]).overSome([() => true]);
    }

    {
        let result: _.LoDashExplicitWrapper<(...args: any[]) => boolean>;

        result = _(Math.max).chain().overSome();
        result = _(Math.max).chain().overSome(() => true);
        result = _([Math.max]).chain().overSome();
        result = _([Math.max]).chain().overSome([() => true]);
    }
}

// _.property
namespace TestProperty {
    interface SampleObject {
        a: {
            b: number[];
        };
    }

    {
        let result: (object: SampleObject) => number;

        result = _.property<SampleObject, number>('a.b[0]');
        result = _.property<SampleObject, number>(['a', 'b', 0]);
    }

    {
        let result: _.LoDashImplicitWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').property<SampleObject, number>();
        result = _(['a', 'b', 0]).property<SampleObject, number>();
    }

    {
        let result: _.LoDashExplicitWrapper<(object: SampleObject) => number>;

        result = _('a.b[0]').chain().property<SampleObject, number>();
        result = _(['a', 'b', 0]).chain().property<SampleObject, number>();
    }
}

// _.propertyOf
namespace TestPropertyOf {
    interface SampleObject {
        a: {
            b: number[];
        };
    }

    let object: SampleObject = { a: { b: [] } };

    {
        let result: (path: string|string[]) => any;

        result = _.propertyOf({});
        result = _.propertyOf(object);
    }

    {
        let result: _.LoDashImplicitWrapper<(path: string|string[]) => any>;

        result = _({}).propertyOf();
    }

    {
        let result: _.LoDashExplicitWrapper<(path: string|string[]) => any>;

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
        let result: _.LoDashImplicitWrapper<number[]>;

        result = _(10).range();
        result = _(1).range(11);
        result = _(0).range(30, 5);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _(10).chain().range();
        result = _(1).chain().range(11);
        result = _(0).chain().range(30, 5);
    }
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
        let result: _.LoDashImplicitWrapper<number[]>;

        result = _(10).rangeRight();
        result = _(1).rangeRight(11);
        result = _(0).rangeRight(30, 5);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _(10).chain().rangeRight();
        result = _(1).chain().rangeRight(11);
        result = _(0).chain().rangeRight(30, 5);
    }
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
        result = _(any).stubArray();
    }

    {
        let result: _.LoDashExplicitWrapper<any[]>;

        result = _('a').chain().stubArray();
        result = _([1]).chain().stubArray();
        result = _([]).chain().stubArray();
        result = _({}).chain().stubArray();
        result = _(any).chain().stubArray();
    }
}

// _.stubFalse
{
    {
        let result: boolean;

        result = _.stubFalse();
        result = _(any).stubFalse();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubFalse();
        result = _([1]).chain().stubFalse();
        result = _([]).chain().stubFalse();
        result = _({}).chain().stubFalse();
        result = _(any).chain().stubFalse();
    }
}

// _.stubObject
{
    {
        _.stubObject(); // $ExpectType any
        _(any).stubObject(); // $ExpectType any
    }

    {
        let result: _.LoDashExplicitWrapper<any>;

        result = _('a').chain().stubObject();
        result = _([1]).chain().stubObject();
        result = _([]).chain().stubObject();
        result = _({}).chain().stubObject();
        result = _(any).chain().stubObject();
    }
}

// _.stubString
{
    {
        let result: string;

        result = _.stubString();
        result = _(any).stubString();
    }

    {
        let result: _.LoDashExplicitWrapper<string>;

        result = _('a').chain().stubString();
        result = _([1]).chain().stubString();
        result = _([]).chain().stubString();
        result = _({}).chain().stubString();
        result = _(any).chain().stubString();
    }
}

// _.stubTrue
{
    {
        let result: boolean;

        result = _.stubTrue();
        result = _(any).stubTrue();
    }

    {
        let result: _.LoDashExplicitWrapper<boolean>;

        result = _('a').chain().stubTrue();
        result = _([1]).chain().stubTrue();
        result = _([]).chain().stubTrue();
        result = _({}).chain().stubTrue();
        result = _(any).chain().stubTrue();
    }
}

// _.times
namespace TestTimes {
    let iteratee: (num: number) => TResult = (num: number) => ({ a: 1, b: "", c: true });

    {
        let result: number[];

        result = _.times(42);
        result = _(42).times();
    }

    {
        let result: TResult[];

        result = _.times(42, iteratee);
        result = _(42).times(iteratee);
    }

    {
        let result: _.LoDashExplicitWrapper<number[]>;

        result = _(42).chain().times();
    }

    {
        let result: _.LoDashExplicitWrapper<TResult[]>;

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
    // tslint:disable:space-within-parens
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
    // tslint:enable:space-within-parens
}

// Test _.PartialDeep type
{
    let o1: _.PartialDeep<{ a: number }> = { a: 1 };
    let o2: _.PartialDeep<{ a: number[] }> = { a: [1] };
    let o3: _.PartialDeep<{ a: { b: number } }> = { a: { b: 1 } };
    let o4: _.PartialDeep<{ a: { b: number } }> = { a: {} };
    let o5: _.PartialDeep<{ a: { b: { c: boolean } } }> = { a: {} };
    let o6: _.PartialDeep<{ a: Array<{b: number}> }> = { a: [] };
    let o7: _.PartialDeep<{ a: Array<{b: number}> }> = { a: [{ b: 1 }] };
    let o8: _.PartialDeep<{ a: Array<{b: number}> }> = { a: [{ b: '' }] };
    let o9: _.PartialDeep<{ a: { b: number } } | { c: { d: boolean } }> = { c: {} };
    let o10: _.PartialDeep<_.Dictionary<string>> = { b: '' };
    let o11: _.PartialDeep<string[]> = { length: 2 };
    let o12: _.PartialDeep<ArrayLike<string>> = { length: 2 };
}
