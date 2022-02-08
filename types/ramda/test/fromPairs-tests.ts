import * as R from 'ramda';

() => {
  R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); // => {a: 1, b: 2, c: 3}

  // $ExpectType { [index: string]: string; }
  R.fromPairs([[1, "a"], [2, "b"]]); // => { '1': 'a', '2': 'b' }
};
