import * as R from 'ramda';

() => {
  // $ExpectType number
  R.add(2, 3); // =>  5
  // $ExpectType number
  R.add(7)(10); // => 17
};

() => {
  // cannot add anything other than two numbers

  // $ExpectError
  R.add('foo', 'bar');
  // $ExpectError
  R.add('foo')('bar');
};
