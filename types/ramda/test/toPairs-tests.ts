import * as R from 'ramda';

() => {
  const a = R.toPairs<number>({ a: 1, b: 2, c: 3 }); // => [['a', 1], ['b', 2], ['c', 3]]
  const b = R.toPairs({ 1: 'a' }); // => [['1', 'something']]
};
