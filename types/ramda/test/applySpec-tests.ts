import * as R from 'ramda';

() => {
  interface T {
    sum: number;
    nested: { mul: number };
  }
  const getMetrics = R.applySpec<T>({
    sum: R.add,
    nested: { mul: R.multiply },
  });
  const result = getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
  const record: { s: string; n: number } = R.applySpec({
    s: (s: string, n: number) => s,
    n: (s: string, n: number) => n,
  })('1', 2);
};
