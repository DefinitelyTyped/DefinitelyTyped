import * as R from 'ramda';

() => {
    const a = R.mergeDeepWith(
        (a: number[], b: number[]) => a.concat(b),
        { foo: { bar: [1, 2] } },
        { foo: { bar: [3, 4] } },
    ); // => {foo: {bar: [1,2,3,4]}}
};
