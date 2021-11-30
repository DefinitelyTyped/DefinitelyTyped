import * as R from 'ramda';

() => {
  interface FormatSpec {
    indent: number;
    value: string;
  }
  const indentN = R.pipe(
    R.times(R.always(' ')),
    R.join(''),
    R.replace(/^(?!$)/gm),
  );

  // $ExpectType (args_0: FormatSpec) => any
  const format = R.converge(R.call, [
    ({ indent }: FormatSpec) => indentN(indent),
    ({ value }: FormatSpec) => value,
  ]);

  format({ indent: 2, value: 'foo\nbar\nbaz\n' }); // => '  foo\n  bar\n  baz\n'
};

() => {
  function add(a: number, b: number) {
    return a + b;
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  function subtract(a: number, b: number) {
    return a - b;
  }

  // ≅ multiply( add(1, 2), subtract(1, 2) );
  // $ExpectType (a: number, b: number) => number
  const fn = R.converge(multiply, [add, subtract]);

  // $ExpectType number
  const x = fn(1, 2);

  // $ExpectError
  fn('1', 2);

  // $ExpectError
  fn(1, 2, 3);

  function add3(a: number, b: number, c: number) {
    return a + b + c;
  }

  // $ExpectType (a: number, b: number) => number
  const fn2 = R.converge(add3, [multiply, add, subtract]);

  // $ExpectType number
  fn2(1, 2);
};
