import * as R from 'ramda';

() => {
    const add = (a: number, b: number) => a + b;

    // $ExpectType { (a: number[], b: number[]): number[]; <R2>(a: (value: R2) => number, b: (value: R2) => number): (value: R2) => number; }
    const liftedAdd = R.lift(add);

    // $ExpectType number[]
    liftedAdd([10, 20, 30], [40, 50]);

    // $ExpectType (value: number) => number
    const readerFunctor = liftedAdd(R.inc, R.dec);

    // $ExpectType number
    readerFunctor(10);
};

() => {
    // TODO R.lift can not lift curried functions by now. It may be support in the future.
    R.lift(R.add);
};
