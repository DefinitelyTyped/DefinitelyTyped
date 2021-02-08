import * as R from 'ramda';

class F {
  x: 'X';
  y: 'Y';
}

() => {
  const f = new F();
  const a: Array<['x', 'X'] | ['y', 'Y']> = R.toPairsIn(f); // => [['x','X'], ['y','Y']]
};
