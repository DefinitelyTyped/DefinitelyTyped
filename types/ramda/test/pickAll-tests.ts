import * as R from 'ramda';

() => {
  R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
  R.pickAll(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
  R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
  R.pickAll(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
};
