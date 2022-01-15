import * as R from 'ramda';

() => {
  const list = ['foo', 'bar', 'baz', 'quux'];

  // $ExpectType { <T>(list: readonly T[]): T | undefined; (list: string): string; }
  R.nth(1); // => 'b'

  // $ExpectType string | undefined
  R.nth(1, list); // => 'bar'

  // $ExpectType string | undefined
  R.nth(-1, list); // => 'quux'

  // $ExpectType string | undefined
  R.nth(99, list); // => undefined

  // $ExpectType string | undefined
  R.nth(1)(list); // => 'bar'

  // $ExpectType string | undefined
  R.nth(-99)(list); // => undefined
};

() => {
  const str = 'abcd';

  // $ExpectType string
  R.nth(1, str); // => 'b'

  // $ExpectType string
  R.nth(-1, str); // => 'd'

  // $ExpectType string
  R.nth(99, str); // => ''

  // $ExpectType string
  R.nth(1)(str); // => 'b'

  // $ExpectType string
  R.nth(-99)(str); // => ''
};

() => {
  // $ExpectError
  R.nth();

  // $ExpectError
  R.nth(1, {});

  // $ExpectError
  R.nth(1, '', 1);
};
