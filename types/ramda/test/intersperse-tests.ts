import * as R from 'ramda';

() => {
  R.intersperse(',', ['foo', 'bar']); // => ['foo', ',', 'bar']
  R.intersperse(0, [1, 2]); // => [1, 0, 2]
  R.intersperse(0, [1]); // => [1]
};
