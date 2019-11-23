import * as R from 'ramda';

(() => {
  const plus3 = R.add(3);
})();

() => {
  // $ExpectType number
  R.add(2, 3); // =>  5
  // $ExpectType number
  R.add(7)(10); // => 17
  // $ExpectType string
  R.add('Hello', ' World'); // =>  "Hello World"
  // $ExpectType string
  R.add('Hello')(' World'); // =>  "Hello World"
};

() => {
  // cannot add a number to a string or vice-versa

  // $ExpectError
  R.add('2', 3);
  // $ExpectError
  R.add(2, '3');
  // $ExpectError
  R.add('2')(3);
  // $ExpectError
  R.add(2)('3');
};
