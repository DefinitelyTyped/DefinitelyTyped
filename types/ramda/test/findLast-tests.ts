import * as R from 'ramda';

() => {
  const xs = [{ a: 1, b: 0 }, { a: 1, b: 1 }];
  R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1}
  R.findLast(R.propEq('a', 4))(xs); // => undefined
};
