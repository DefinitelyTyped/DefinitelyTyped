import * as R from 'ramda';

() => {
  // No type transformation

  const a1 = R.evolve(
    { elapsed: R.add(1), remaining: R.add(-1) },
    { name: 'Tomato', elapsed: 100, remaining: 1400 },
  );

  const a1Test: { elapsed: number; remaining: number; name: string } = a1;

  const a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({
    name: 'Tomato',
    elapsed: 100,
    remaining: 1400,
  });

  const a2Test: { elapsed: number; remaining: number; name: string } = a2;

  // Object doesn't have all evolver keys

  const a3 = R.evolve(
    { age: R.add(1), name: R.trim },
    { name: 'Potato', elapsed: 100 },
  );

  const a3Test: { name: string; elapsed: number } = a3;

  // Flat transformation

  const ex0 = R.evolve({ a: parseInt }, { a: '10', b: 1 });

  const ex0Test: { a: number; b: number } = ex0;

  // Nested transformation:

  const ex1 = R.evolve(
    { a: { b: R.toString, d: { e: R.toString } } },
    { a: { b: 1, c: null, d: { e: 2 } } },
  );

  const ex1Test: { a: { b: string; c: null; d: { e: string } } } = ex1;

  // Mapping a nested object with a single function

  const ex2 = R.evolve(
    { a: (obj: { foo: string }) => ({ bar: 1, baz: 2 }) },
    { a: { foo: 'a', skipped: 3 }, b: null },
  );

  const ex2Test: { a: { bar: number; baz: number }; b: null } = ex2;

  // Nested curried:

  const ex3 = R.evolve({ a: { b: R.toString, d: { e: R.toString } } })({
    a: { b: 1, c: null, d: { e: 2 } },
  });

  const ex3Test: { a: { b: string; c: null; d: { e: string } } } = ex3;
};
