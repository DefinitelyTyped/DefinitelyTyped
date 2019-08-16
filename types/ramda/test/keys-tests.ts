import * as R from 'ramda';

() => {
  const objKeys = R.keys({ a: 1, b: 2, c: 3 }); // => ['a', 'b', 'c']
  const numberKeys = R.keys(1);
  const arrayKeys = R.keys([]);
  const stringKeys = R.keys('foo');
};
