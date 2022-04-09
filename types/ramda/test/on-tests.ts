import * as R from 'ramda';

() => {
  // tslint:disable:max-line-length
  // $ExpectType { <C>(g: (a: C) => unknown, a: C, b: C): boolean; <C>(g: (a: C) => unknown, a: C): (b: C) => boolean; <C>(g: (a: C) => unknown): { (a: C, b: C): boolean; (a: C): (b: C) => boolean; }; }
  const eqBy = R.on(<T>(a: T, b: T) => a === b);
  // tslint:enable:max-line-length
  // $ExpectType boolean
  eqBy(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType { <C>(g: (a: C) => number, a: C, b: C): boolean; <C>(g: (a: C) => number, a: C): (b: C) => boolean; <C>(g: (a: C) => number): { (a: C, b: C): boolean; (a: C): (b: C) => boolean; }; }
  const eqBy2 = R.on((a: number, b) => a === b);
  // $ExpectType boolean
  eqBy2(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType { (a: string, b: string): (list: readonly unknown[]) => boolean; (a: string): (b: string) => (list: readonly unknown[]) => boolean; }
  const containsInsensitive = R.on(R.contains, R.toLower);
  // $ExpectType (list: readonly unknown[]) => boolean
  containsInsensitive('o', 'FOO'); // => true
};
