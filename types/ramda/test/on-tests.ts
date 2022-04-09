import * as R from 'ramda';

() => {
  // tslint:disable:max-line-length
  // $ExpectType { <T>(g: (a: T) => unknown, a: T, b: T): boolean; <T>(g: (a: T) => unknown, a: T): (b: T) => boolean; <T>(g: (a: T) => unknown): { (a: T, b: T): boolean; (a: T): (b: T) => boolean; }; }
  const eqBy = R.on(<T>(a: T, b: T) => a === b);
  // tslint:enable:max-line-length
  // $ExpectType boolean
  eqBy(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType { <T>(g: (a: T) => number, a: T, b: T): boolean; <T>(g: (a: T) => number, a: T): (b: T) => boolean; <T>(g: (a: T) => number): { (a: T, b: T): boolean; (a: T): (b: T) => boolean; }; }
  const eqBy2 = R.on((a: number, b) => a === b);
  // $ExpectType boolean
  eqBy2(R.prop('a'), {b: 0, a: 1}, {a: 1}); // => true;

  // $ExpectType { (a: string, b: string): (list: readonly unknown[]) => boolean; (a: string): (b: string) => (list: readonly unknown[]) => boolean; }
  const containsInsensitive = R.on(R.contains, R.toLower);
  // $ExpectType (list: readonly unknown[]) => boolean
  containsInsensitive('o', 'FOO'); // => true
};
