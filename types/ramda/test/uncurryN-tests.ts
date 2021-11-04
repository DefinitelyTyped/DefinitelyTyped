import * as R from 'ramda';

() => {
  const addFour = (a: number) => (b: number) => (c: number) => (d: number) =>
    a + b + c + d;
  const uncurriedAddFour = R.uncurryN<number>(4, addFour);
  const res: number = uncurriedAddFour(1, 2, 3, 4); // => 10
};
