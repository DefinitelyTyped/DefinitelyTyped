import * as R from 'ramda';

() => {
  const a: number[][] = R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); // => [[1, 2, 3], [4, 5, 6], [7]]
  const b: number[][] = R.splitEvery(3)([1, 2, 3, 4, 5, 6, 7]); // => [[1, 2, 3], [4, 5, 6], [7]]
  const c: string[] = R.splitEvery(3, 'foobarbaz'); // => ['foo', 'bar', 'baz']
  const d: string[] = R.splitEvery(3)('foobarbaz'); // => ['foo', 'bar', 'baz']
};
