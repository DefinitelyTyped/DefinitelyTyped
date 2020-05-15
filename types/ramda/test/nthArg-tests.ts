import * as R from 'ramda';

() => {
  R.nthArg(1)('a', 'b', 'c'); // => 'b'
  R.nthArg(-1)('a', 'b', 'c'); // => 'c'
};

() => {
  // $ExpectType string
  R.nthArg<string>(1)(1, 'b', false); // => 'b'
  // $ExpectType boolean
  R.nthArg<boolean>(-1)(1, 'b', false); // => false
};
