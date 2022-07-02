import deepEqual = require('deep-eql');

const { MemoizeMap } = deepEqual;

// only operators
deepEqual('x', 'x');
deepEqual(null, undefined);
deepEqual(1, 1);
deepEqual(true, false);
deepEqual({}, {});

// with memoization
const memoizeMap = new MemoizeMap();
const valueAMap = new MemoizeMap();
const valueA = {};
const valueB = { not: 'equal' };
valueAMap.set(valueB, true);
memoizeMap.set(valueA, valueAMap);
deepEqual(valueA, valueB, { memoize: memoizeMap });

// with comparator
interface Foo {
    bar: string | number;
}

deepEqual({ bar: 1 }, { bar: '1' }, { comparator: (a: Foo, b: Foo) => String(a.bar) === String(b.bar) });

deepEqual(
    1,
    // @ts-expect-error rightHandOperand should be a number as typed in the comparator function
    '2',
    { comparator: (a: number, b: number) => Math.floor(a) === Math.floor(b) },
);
