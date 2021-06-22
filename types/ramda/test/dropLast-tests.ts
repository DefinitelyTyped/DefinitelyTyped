import * as R from 'ramda';

() => {
  R.dropLast(1, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
  R.dropLast(2)(['foo', 'bar', 'baz']); // => ['foo']
  R.dropLast(3, 'ramda'); // => 'ra'
  R.dropLast(3)('ramda'); // => 'ra'
};
