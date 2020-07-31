import * as R from 'ramda';

() => {
  const of = Array.of;
  const fn = (x: number) => Array.of(x + 1);
  const list = [1, 2, 3];
  R.traverse(of, fn, list);
  R.traverse(of, fn)(list);
  R.traverse<number, number>(of)(fn, list);
};
