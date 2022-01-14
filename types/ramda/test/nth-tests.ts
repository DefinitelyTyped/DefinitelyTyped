import * as R from 'ramda';

() => {
  const list = ['foo', 'bar', 'baz', 'quux'];
  const str = 'abcd';

  R.nth(1, list); // => 'bar'
  R.nth(-1, list); // => 'quux'
  R.nth(-99, list); // => undefined
  R.nth(-99)(list); // => undefined
  R.nth(1, str); // => 'b'
  R.nth(1)(str); // => 'b'
  R.nth(-1, str); // => 'd'
  R.nth(-99, str); // => ''
  R.nth(-99)(str); // => ''
};
