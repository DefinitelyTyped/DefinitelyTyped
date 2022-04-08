import * as R from 'ramda';

() => {
  const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
  R.find(R.propEq('a', 2))(xs); // => {a: 2}
  R.find(R.propEq('a', 4))(xs); // => undefined
};
