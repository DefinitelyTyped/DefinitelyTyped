import * as R from 'ramda';

() => {
  const xs = R.range(0, 10);
  R.slice(2, 5, xs); // => [2, 3, 4]
  R.slice(2, 5)(xs); // => [2, 3, 4]
  R.slice(2)(5, xs); // => [2, 3, 4]

  const str = 'Hello World';
  R.slice(2, 5, str); // => 'llo'
  R.slice(2, 5)(str); // => 'llo'
  R.slice(2)(5, str); // => 'llo'
};
