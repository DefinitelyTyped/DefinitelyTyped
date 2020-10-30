import * as R from 'ramda';

() => {
  const list = ['foo', 'bar', 'baz', 'quux'];
  R.nth(1, list); // => 'bar'
  R.nth(-1, list); // => 'quux'
  R.nth(-99, list); // => undefined
  R.nth(-99)(list); // => undefined
};
