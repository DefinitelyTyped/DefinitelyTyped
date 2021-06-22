import * as R from 'ramda';

() => {
  R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
  R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
  R.partition((x: number) => x > 2, [1, 2, 3, 4]);
  R.partition((x: number) => x > 2)([1, 2, 3, 4]);
};
