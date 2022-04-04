import * as R from 'ramda';

() => {
    // $ExpectType (["a", number] | ["b", number] | ["c", number])[]
    R.toPairs({ a: 1, b: 2, c: 3 }); // => [['a', 1], ['b', 2], ['c', 3]]
    // $ExpectType ["1", string][]
    R.toPairs({ 1: 'a' }); // => [['1', 'something']]
    const o1: { a: 1; b: 2; c: 3 } = { a: 1, b: 2, c: 3 };
    // $ExpectType (["a", 1] | ["b", 2] | ["c", 3])[]
    R.toPairs(o1); // => [['a', 1], ['b', 2], ['c', 3]]
    const o2: { 1: 'a' } = { 1: 'a' };
    // $ExpectType ["1", "a"][]
    R.toPairs(o2); // => [['1', 'a']]
};
