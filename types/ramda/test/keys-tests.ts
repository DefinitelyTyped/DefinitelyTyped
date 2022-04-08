import * as R from 'ramda';

() => {
  const objKeys = R.keys({a: 1, b: 2, c: 3}); // $ExpectType ("a" | "b" | "c")[]
  const numberKeys = R.keys(1); // $ExpectType string[]
  const arrayKeys = R.keys([]); // List of array members
  const stringKeys = R.keys('foo'); // $ExpectType string[]
};
