import * as R from 'ramda';

() => {
  const o1 = { a: 1, b: 2, c: 3, d: 4 };
  const o2 = { a: 10, b: 20, c: 3, d: 40 };
  const a1 = R.eqProps('a', o1, o2); // => false
  const a2 = R.eqProps('c', o1, o2); // => true
  const a3: <T extends { c: any }, U extends { c: any }>(
    obj1: T,
    obj2: U,
  ) => boolean = R.eqProps('c');
  const a4: <U>(obj2: U) => boolean = R.eqProps('c', o1);
};
