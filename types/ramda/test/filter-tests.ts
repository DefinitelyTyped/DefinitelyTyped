import * as R from 'ramda';
import { Dictionary } from 'ramda/tools';

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const filterEven = R.filter(isEven);
    const objA: Dictionary<number> = filterEven({ a: 0, b: 1 }); // => { a: 0 }
    const listA: number[] = filterEven([0, 1]); // => [0]
};

() => {
    const compact = R.filter(Boolean);
    const objA: Dictionary<number> = compact({ a: 0, b: 1 }); // => { b: 1 }
    const listA: number[] = compact([0, 1]); // => [1]

    const omitEmptyString = R.filter((val: string) => val !== '');
    const objB: Dictionary<string> = omitEmptyString({ a: '', b: 'foo' }); // => { b: 'foo' }
    const listB: string[] = omitEmptyString(['', 'foo']); // => ['foo']

    // @ts-expect-error
    const objC = omitEmptyString({ some: 42 });
};

() => {
    const user1 = { address: { zipCode: 90210 } };
    const user2 = { address: { zipCode: 55555 } };
    const user3 = { name: 'Bob' };
    const users = [user1, user2, user3];
    const isFamous = R.pathEq(['address', 'zipCode'], 90210);
    R.filter(isFamous, users); // => [ user1 ]
};

() => {
    const coll = [{ type: 'BUY' }, { type: 'SELL' }, { type: 'BUY' }];
    const typeIs = R.propEq('type');
    const isBuy = typeIs('BUY');
    R.filter(isBuy, coll); // [{ type: 'BUY' }, { type: 'BUY' }]
};

() => {
    const xs = [
        { x: 2, y: 1 },
        { x: 10, y: 2 },
        { x: 8, y: 3 },
        { x: 10, y: 4 },
    ];
    R.filter(R.where({ x: 10 }), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    R.filter(R.where({ x: 10 }))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    // @ts-expect-error
    R.filter(isEven, ['foo']);
};

() => {
    const filterNumbers = R.filter(R.is(Number));

    const unknownArray: unknown[] = [];
    let numberArray: number[];
    let stringArray: string[];

    numberArray = R.filter(R.is(Number), unknownArray);
    numberArray = filterNumbers(unknownArray);
    // @ts-expect-error
    stringArray = R.filter(R.is(Number), unknownArray);
    // @ts-expect-error
    stringArray = filterNumbers(unknownArray);

    const unknownDictionary: Dictionary<unknown> = {};
    let numberDictionary: Dictionary<number>;
    let stringDictionary: Dictionary<string>;

    numberDictionary = R.filter(R.is(Number), unknownDictionary);
    numberDictionary = filterNumbers(unknownDictionary);
    // @ts-expect-error
    stringDictionary = R.filter(R.is(Number), unknownDictionary);
    // @ts-expect-error
    stringDictionary = filterNumbers(unknownDictionary);
};
