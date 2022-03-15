import * as R from 'ramda';

() => {
  interface ObjWithCount {
    count?: number;
  }

  // $ExpectType (obj: unknown) => { count: number; } | (Record<"count", number> & Omit<unknown, "count">)
  const incCount = R.ifElse(
    R.has('count'),
    (obj: Required<ObjWithCount>) => ({ ...obj, count: obj.count + 1 }),
    R.assoc('count', 1),
  );
  incCount({}); // => { count: 1 }

  incCount({ count: 1 }); // => { count: 2 }

  // $ExpectType (...args: unknown[]) => string | number
  const addWhenEquals = R.ifElse(
    (a: any, b: any) => a === b,
    (a: number, b: number) => a + b,
    R.always(''),
  );

  R.ifElse(
    (a: number, b: number) => a === b,
    (a: number, b: number) => a + b,
    R.always(1),
    2, 2
  ); // => 4

  addWhenEquals(1, 2); // => ''
  addWhenEquals(1, 1); // => 2

  // $ExpectType (a: string | boolean) => number
  const getLengthIfString = R.ifElse(
      (a: string | boolean): a is string => true,
      (a) => a.length,
      a => a ? 1 : 0
  )

  getLengthIfString('foo') // => 3
  getLengthIfString(true) // => 1

  const lengthIfString = R.ifElse(
    (a: string | boolean): a is string => true,
    (a) => a.length,
    a => a ? 1 : 0,
    'foo'
  ) // => 3
};
