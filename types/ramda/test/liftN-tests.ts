import * as R from 'ramda';

() => {
    const add = (a: number, b: number) => a + b;

    // $ExpectType { (args_0: number[], args_1: number[]): number[]; <R>(args_0: (arg: R) => number, args_1: (arg: R) => number): (arg: R) => number; }
    const lifted2ArityAdd = R.liftN(2, add);

    // $ExpectType number[]
    const numbers = lifted2ArityAdd([10, 20, 30], [40, 50]);

    // $ExpectType (arg: number) => number
    const readerFunctor = lifted2ArityAdd(R.inc, R.dec);

    // $ExpectType number
    readerFunctor(10);
};

() => {
    const add3 = (a: number, b: number, c: number) => a + b + c;

    // $ExpectType { (args_0: number[], args_1: number[]): number[]; <R>(args_0: (arg: R) => number, args_1: (arg: R) => number): (arg: R) => number; }
    const lifted2ArityAdd = R.liftN(2, add3);

    // $ExpectType number[]
    const numbers = lifted2ArityAdd([10, 20, 30], [40, 50]);

    // $ExpectType (arg: number) => number
    const readerFunctor = lifted2ArityAdd(R.inc, R.dec);

    // $ExpectType number
    readerFunctor(10);

    // @ts-expect-error
    lifted2ArityAdd([10, 20, 30], [40, 50], [60, 70]);

    // @ts-expect-error
    lifted2ArityAdd(R.inc, R.dec, R.inc);
};

() => {
    const add3 = (a: number) => (b: number) => (c: number) => a + b + c;

    // TODO R.lift can not lift curried functions by now. It may be support in the future.
    const liftedCurriedAdd = R.liftN(2, R.add);
};
