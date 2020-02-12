import * as R from 'ramda';

() => {
  const xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
  R.findLastIndex(R.propEq('a', 1))(xs); // => 1
  R.findLastIndex(R.propEq('a', 4))(xs); // => -1
  R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
};
