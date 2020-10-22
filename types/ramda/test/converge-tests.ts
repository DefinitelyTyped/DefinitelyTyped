import * as R from 'ramda';

() => {
  const indentN = R.pipe(
    R.times(R.always(' ')),
    R.join(''),
    R.replace(/^(?!$)/gm),
  );

  const format = R.converge(R.call, [
    R.pipe(
      R.prop<'indent', number>('indent'),
      indentN,
    ),
    R.prop('value'),
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
  const x: number = R.converge(multiply, [add, subtract])(1, 2); // => -3

  function add3(a: number, b: number, c: number) {
    return a + b + c;
  }

  const y: number = R.converge(add3, [multiply, add, subtract])(1, 2); // => 4
};
