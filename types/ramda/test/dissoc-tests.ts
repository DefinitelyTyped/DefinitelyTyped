import * as R from 'ramda';

() => {
  const a2 = R.dissoc('b', { a: 1, b: 2, c: 3 }); // => {a: 1, c: 3}
  a2.a;
  a2.c;
  const a4 = R.dissoc('b')({ a: 1, b: 2, c: 3 }); // => {a: 1, c: 3}
  a4.a;
  a4.c;
};
