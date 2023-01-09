import * as R from 'ramda';

() => {
    const add = (a: number, b: number): number => a + b;

    // $ExpectType number
    const callAdd = R.call(add, 1, 2);

    // @ts-expect-error
    R.call(add, 'a', 2);
};
