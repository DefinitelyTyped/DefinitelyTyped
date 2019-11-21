import * as R from 'ramda';

(() => {
  const plus3 = R.add(3);
})();

() => {
  R.add(2, 3); // =>  5
  R.add(7)(10); // => 17
  R.add('Hello', ' World'); // =>  "Hello World"
  R.add('Hello')(' World'); // =>  "Hello World"
};
