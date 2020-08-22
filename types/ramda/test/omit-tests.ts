import * as R from 'ramda';

() => {
  R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); // => {b: 2, c: 3}
  R.omit(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); // => {b: 2, c: 3}
};
