import * as R from 'ramda';

() => {
    const a = R.toPairs<number>({ a: 1, b: 2, c: 3 }); // => [['a', 1], ['b', 2], ['c', 3]]
    const b = R.toPairs({ 1: 'a' }); // => [['1', 'something']]
};

() => {
    const o1: { a: 1; b: 2; c: 3 } = { a: 1, b: 2, c: 3 };
    const a: Array<['a', 1] | ['b', 2] | ['c', 3]> = R.toPairs(o1); // => [['a', 1], ['b', 2], ['c', 3]]
    const o2: { 1: 'a' } = { 1: 'a' };
    const b: Array<['1', 'a']> = R.toPairs(o2); // => [['1', 'a']]
};
