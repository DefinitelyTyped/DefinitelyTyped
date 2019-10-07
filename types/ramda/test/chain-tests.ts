import * as R from 'ramda';

() => {
  function duplicate(n: number) {
    return [n, n];
  }

  R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
  R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
  const result1: number[] = R.chain<number, number[], number[]>(
    R.append,
    R.head,
  )([1, 2, 3]); // => [1, 2, 3, 1]
};
