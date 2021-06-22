import * as R from 'ramda';

() => {
  function double(x: number): number {
    return x + x;
  }

  function limit10(x: number): boolean {
    return x >= 10;
  }

  const func: (x: number) => boolean = R.compose(
    limit10,
    double,
  );
  const res: boolean = R.compose(
    limit10,
    double,
  )(10);

  const f0 = (s: string) => +s; // string -> number
  const f1 = (n: number) => n === 1; // number -> boolean
  const f2: (s: string) => boolean = R.compose(
    f1,
    f0,
  ); // string -> boolean

  // akward example that bounces types between number and string
  const g0 = (list: number[]) => R.map(R.inc, list);
  const g1 = R.dropWhile(R.gt(10));
  const g2 = R.map((i: number) => (i > 5 ? 'bigger' : 'smaller'));
  const g3 = R.all((i: string) => i === 'smaller');
  const g = R.compose(
    g3,
    g2,
    g1,
    g0,
  );
  const g_res: boolean = g([1, 2, 10, 13]);

  // compose with last function taking no params
  const f10 = () => 'str';
  const f11 = (str: string) => str;
  const f12: () => string = R.compose(
    f11,
    f10,
  );
};

() => {
  const fullName = R.compose(
    R.join(' '),
    R.props(['first', 'last']),
  );
  fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }); // => 'Tony Bullet-Tooth'
};

() => {
  const f0 = R.compose(Math.pow);
  const f1 = R.compose(
    R.negate,
    Math.pow,
  );
  const f2 = R.compose(
    R.inc,
    R.negate,
    Math.pow,
  );
  const f3 = R.compose(
    R.inc,
    R.inc,
    R.negate,
    Math.pow,
  );
  const f4 = R.compose(
    R.inc,
    R.inc,
    R.inc,
    R.negate,
    Math.pow,
  );
  const f5 = R.compose(
    R.inc,
    R.inc,
    R.inc,
    R.inc,
    R.negate,
    Math.pow,
  );
  const x0: number = f0(3, 4); // -(3^4) + 1
  const x1: number = f1(3, 4); // -(3^4) + 1
  const x2: number = f2(3, 4); // -(3^4) + 1
  const x3: number = f3(3, 4); // -(3^4) + 1
  const x4: number = f4(3, 4); // -(3^4) + 1
  const x5: number = f5(3, 4); // -(3^4) + 1
};

() => {
  function fn(a: string, b: number, c: string) {
    return [a, b, c];
  }

  const gn = R.compose(
    R.length,
    fn,
  );
  const x: number = gn('Hello', 4, 'world');
};
