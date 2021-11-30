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

  // $ExpectType (args_0: FormatSpec) => string
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

  function concat(a: string, b: string) {
    return a + b;
  }

  // ≅ multiply( add(1, 2), subtract(1, 2) );
  // $ExpectType (a: number, b: number) => number
  const fn = R.converge(multiply, [add, subtract]);

  // $ExpectError
  const fnWrong = R.converge(concat, [add, subtract]);

  // $ExpectError
  const fnWrongV2 = R.converge(multiply, [add, subtract, add]);

  // $ExpectError
  const fnWrongV3 = R.converge(concat, []);

  // $ExpectError
  const fnWrongV4 = R.converge(() => {}, []);

  // $ExpectType number
  const x = fn(1, 2);

  // $ExpectError
  fn('1', 2);

  // $ExpectError
  fn(1, 2, 3);

  function add3(a: number, b: number, c: number) {
    return a + b + c;
  }

  function add10(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) {
    return a + b + c + d + e + f + g + h + i + j;
  }

  // $ExpectType (a: number, b: number) => number
  const fn10 = R.converge(add10, [multiply, add, subtract, multiply, add, subtract, multiply, add, subtract, multiply]);

  // TODO This should throw error, because the number of branches is not the same as converge arity
  const fnWrongNumberOfBranches = R.converge(add10, [multiply, add, subtract, multiply, add, subtract, multiply, add, subtract, multiply, add, subtract]);

  // $ExpectType number
  fn10(1, 2);
};
