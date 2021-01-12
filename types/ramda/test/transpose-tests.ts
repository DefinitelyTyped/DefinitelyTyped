import * as R from 'ramda';

() => {
  const a: Array<Array<number | string>> = R.transpose<number | string>([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]); // => [[1, 2, 3], ['a', 'b', 'c']]
  const b: Array<Array<number | string>> = R.transpose<number | string>([
    [1, 2, 3],
    ['a', 'b', 'c'],
  ]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
  const c: number[][] = R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]]
};
