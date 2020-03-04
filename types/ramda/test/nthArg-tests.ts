import * as R from 'ramda';

() => {
  R.nthArg(1)('a', 'b', 'c'); // => 'b'
  R.nthArg(-1)('a', 'b', 'c'); // => 'c'
};
