import * as R from 'ramda';

() => {
  // Order of string keys matters. c, a, b ¯\_(ツ)_/¯
  // $ExpectType ("c" | "a" | "b")[]
  const objKeys = R.keys({a: 1, b: 2, c: 3});
  const numberKeys = R.keys(1); // $ExpectType string[]
  const arrayKeys = R.keys([]); // List of array members
  const stringKeys = R.keys('foo'); // $ExpectType string[]
};
