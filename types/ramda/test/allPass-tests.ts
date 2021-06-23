import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.allPass([gt10, even]);

  // $ExpectType false
  f(11);

  // $ExpectType true
  f(12);

  interface Foo {
    foo: number;
  }
  interface Bar {
    bar: string;
  }
  const isFoo = (value: unknown): value is Foo => true;
  const isBar = (value: unknown): value is Bar => true;
  const x: unknown = null;
  const f3 = R.allPass([isFoo, isBar])
  // $ExpectType value is Foo & Bar
  f3(x);
};
