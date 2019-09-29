import * as R from 'ramda';

() => {
  const a1 = R.dissoc<{ a: number; c: number }>('b', { a: 1, b: 2, c: 3 }); // => {a: 1, c: 3}
  const a2 = R.dissoc('b', { a: 1, b: 2, c: 3 }); // => {a: 1, c: 3}
  const a4 = R.dissoc('b')<{ a: number; c: number }>({ a: 1, b: 2, c: 3 }); // => {a: 1, c: 3}
};
