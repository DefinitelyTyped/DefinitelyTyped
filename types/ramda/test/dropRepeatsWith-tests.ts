import * as R from 'ramda';

() => {
  const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
  const x: number[] = R.dropRepeatsWith(R.eqBy(Math.abs), l); // => [1, 3, 4, -5, 3]
};
