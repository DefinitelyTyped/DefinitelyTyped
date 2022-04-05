import * as R from 'ramda';

() => {
    const add = (a: number, b: number) => a + b;

    // $ExpectType { (a: number[], b: number[]): number[]; <R2>(a: (value: R2) => number, b: (value: R2) => number): (value: R2) => number; }
    const lifted2ArityAdd = R.liftN(2, add);

    // $ExpectType number[]
    lifted2ArityAdd([10, 20, 30], [40, 50]);

    // $ExpectError
    lifted2ArityAdd([10, 20, 30], [40, 50], [60, 70]);

    // $ExpectError
    lifted2ArityAdd(R.inc, R.dec, R.inc);

    // $ExpectType (value: number) => number
    const readerFunctor = lifted2ArityAdd(R.inc, R.dec);

    // $ExpectType number
    readerFunctor(10);
};

() => {
    const add3 = (a: number, b: number, c: number) => a + b + c;

    // $ExpectError
    R.liftN(1, add3);
    // $ExpectError
    R.liftN(4, add3);

    // $ExpectType { (a: number[], b: number[], c: number[]): number[]; <R2>(a: (value: R2) => number, b: (value: R2) => number, c: (value: R2) => number): (value: R2) => number; }
    const lifted3ArityAdd = R.liftN(3, add3);

    // $ExpectError
    const numbers = lifted3ArityAdd([10, 20, 30], [40, 50]);

    // $ExpectError
    lifted3ArityAdd(R.inc, R.dec);

    // $ExpectType number[]
    lifted3ArityAdd([10, 20, 30], [40, 50], [60, 70]);

    // $ExpectType (value: number) => number
    const readerFunctor = lifted3ArityAdd(R.inc, R.dec, R.inc);

    // $ExpectType number
    readerFunctor(10);
};

() => {
    const add3 = (a: number) => (b: number) => (c: number) => a + b + c;

    // TODO R.lift can not lift curried functions by now. It may be support in the future.
    // $ExpectError
    R.liftN(2, R.add);
};
