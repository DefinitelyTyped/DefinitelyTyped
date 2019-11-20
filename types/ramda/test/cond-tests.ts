import * as R from 'ramda';

() => {
  const f = R.cond<number, string>([
    [x => x === 0, () => 'a'],
    [() => true, () => 'b'],
  ]);
  f(0); // $ExpectType string
  f(''); // $ExpectError
  f(1, 2); // $ExpectType string

  const g = R.cond([[(a, b) => a === b, () => 'a'], [() => true, () => 'b']]);
  g(0);
  g('');
  g(1, '');
};
