import * as R from 'ramda';

() => {
  const f = R.cond<[number], string>([
    [x => x === 0, () => 'a'],
    [() => true, () => 'b'],
  ]);

  // $ExpectType string
  f(0);

  // $ExpectError
  f('');

  // $ExpectError
  f(1, 2);

  const g = R.cond([[(a: any, b: any): boolean => a === b, () => 'a'], [() => true, () => 'b']]);
  // $ExpectError
  g(0);

  // $ExpectError
  g('');

  // $ExpectType string
  g(1, '');
};
