import * as R from 'ramda';

() => {
  // $ExpectType <C>(g: (a: C) => unknown, a: C, b: C) => boolean
  const eqBy = R.on((a, b) => a === b);
  // $ExpectType boolean
  eqBy(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType <C>(g: (a: C) => number, a: C, b: C) => boolean
  const eqBy2 = R.on((a: number, b) => a === b);
  // $ExpectType boolean
  eqBy2(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType (a: string, b: string) => (list: readonly unknown[]) => boolean
  const containsInsensitive = R.on(R.contains, R.toLower);
  // $ExpectType (list: readonly unknown[]) => boolean
  containsInsensitive('o', 'FOO'); // => true
};
