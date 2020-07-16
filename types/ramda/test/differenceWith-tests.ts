import * as R from 'ramda';

() => {
  function cmp1(x: any, y: any) {
    return x.a === y.a;
  }

  function cmp2(x: any, y: any) {
    return x.a === y.b;
  }

  const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
  const l2 = [{ a: 3 }, { a: 4 }];
  const l3 = [{ b: 3 }, { b: 4 }];
  R.differenceWith(cmp1, l1, l2); // => [{a: 1}, {a: 2}]

  const differenceWithCurried1 = R.differenceWith(cmp1);
  differenceWithCurried1(l1, l2); // =>[{a: 1}, {a: 2}]

  R.differenceWith(cmp2, l1, l3); // => [{a: 1}, {a: 2}]
};
