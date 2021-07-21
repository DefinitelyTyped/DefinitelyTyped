import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.anyPass([gt10, even]);

  // $ExpectType true
  f(11);

  // $ExpectType true
  f(8);
  
  // $ExpectType false
  f(9);

  const f2 = R.anyPass([gt10, even]);

  interface Foo {
    foo: number;
  }
  interface Bar {
    bar: string;
  }
  const isFoo = (value: unknown): value is Foo => true;
  const isBar = (value: unknown): value is Bar => false;
  const x: unknown = null;
  const f3 = R.anyPass([isFoo, isBar])
  // $ExpectType value is Foo | Bar
  f3(x);
};
