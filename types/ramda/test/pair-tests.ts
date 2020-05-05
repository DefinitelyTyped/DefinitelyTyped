import * as R from 'ramda';

() => {
  R.pair('foo', 'bar'); // => ['foo', 'bar']
  const p = R.pair('foo', 1); // => ['foo', 'bar']
  const x: string = p[0];
  const y: number = p[1];
};
