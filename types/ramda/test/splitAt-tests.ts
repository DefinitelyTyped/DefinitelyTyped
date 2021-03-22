import * as R from 'ramda';

() => {
  const a: number[][] = R.splitAt(1, [1, 2, 3]); // => [[1], [2, 3]]
  const b: number[][] = R.splitAt(1)([1, 2, 3]); // => [[1], [2, 3]]
  const c: string[] = R.splitAt(5, 'hello world'); // => ['hello', ' world']
  const d: string[] = R.splitAt(-1, 'foobar'); // => ['fooba', 'r']
  const e: string[] = R.splitAt(-1)('foobar'); // => ['fooba', 'r']
};
