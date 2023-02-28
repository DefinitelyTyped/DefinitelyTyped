import * as R from 'ramda';

() => {
    const add = (a: number, b: number) => a + b;

    // $ExpectType { (args_0: number[], args_1: number[]): number[]; <R>(args_0: (arg: R) => number, args_1: (arg: R) => number): (arg: R) => number; }
    const liftedAdd = R.lift(add);

    // $ExpectType number[]
    const numbers = liftedAdd([10, 20, 30], [40, 50]);

    // $ExpectType (arg: number) => number
    const readerFunctor = liftedAdd(R.inc, R.dec);

    // $ExpectType number
    readerFunctor(10);
};

() => {
    // TODO R.lift can not lift curried functions by now. It may be support in the future.
    const liftedCurriedAdd = R.lift(R.add);
};
