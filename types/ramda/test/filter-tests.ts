import * as R from 'ramda';

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const filterEven = R.filter(isEven);
    // $ExpectType Record<"a" | "b", 0 | 1>
    filterEven({ a: 0, b: 1 }); // => { a: 0 }
    // $ExpectType (0 | 1)[]
    filterEven([0, 1]); // => [0]
};

() => {
    const compact = R.filter(Boolean);
    // $ExpectType Record<"a" | "b", number>
    compact({ a: 0, b: 1 }); // => { b: 1 }
    // $ExpectType number[]
    compact([0, 1]); // => [1]

    const omitEmptyString = R.filter((val: string) => val !== '');
    // $ExpectType Record<"a" | "b", "" | "foo">
    omitEmptyString({ a: '', b: 'foo' }); // => { b: 'foo' }
    // $ExpectType ("" | "foo")[]
    omitEmptyString(['', 'foo']); // => ['foo']

    // $ExpectError
    omitEmptyString({ some: 42 });
};

() => {
    const user1 = { address: { zipCode: 90210 } };
    const user2 = { address: { zipCode: 55555 } };
    const user3 = { name: 'Bob' };
    const users = [user1, user2, user3];
    const isFamous = R.pathEq(['address', 'zipCode'], 90210);
    // NOTE: the typings are bad here
    R.filter(isFamous, users); // => [ user1 ]
};

() => {
    const coll = [{ type: 'BUY' }, { type: 'SELL' }, { type: 'BUY' }];
    const typeIs = R.propEq('type');
    const isBuy = typeIs('BUY');
    // $ExpectType { type: string; }[]
    R.filter(isBuy, coll); // [{ type: 'BUY' }, { type: 'BUY' }]
};

() => {
    const xs = [
        { x: 2, y: 1 },
        { x: 10, y: 2 },
        { x: 8, y: 3 },
        { x: 10, y: 4 },
    ];
    // $ExpectType { x: number; y: number; }[]
    R.filter(R.where({ x: 10 }), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    // $ExpectType { x: number; y: number; }[]
    R.filter(R.where({ x: 10 }))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    // $ExpectError
    R.filter(isEven, ['foo']);
};

() => {
    const filterNumbers = R.filter(R.is(Number));

    const unknownArray: unknown[] = [];
    // $ExpectType number[]
    R.filter(R.is(Number), unknownArray);
    // $ExpectType number[]
    filterNumbers(unknownArray);

    const unknownDictionary: Record<string, unknown> = {};
    // $ExpectType Record<string, number>
    R.filter(R.is(Number), unknownDictionary);
    // $ExpectType Record<string, number>
    filterNumbers(unknownDictionary);
};
