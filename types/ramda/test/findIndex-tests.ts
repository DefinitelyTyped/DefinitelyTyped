import * as R from 'ramda';

() => {
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  R.findIndex(R.propEq('a', 2))(xs); // => 1
  R.findIndex(R.propEq('a', 4))(xs); // => -1

  R.findIndex((x: number) => x === 1, [1, 2, 3]);
};
