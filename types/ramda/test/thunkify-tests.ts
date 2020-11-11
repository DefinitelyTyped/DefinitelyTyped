import * as R from 'ramda';

() => {
  const x: unknown = R.thunkify(R.identity)(42)();
  const y: number = R.thunkify((a: number, b: number) => a + b)(25, 17)();
  const z: number = R.thunkify((a: number, b: number) => a + b)(25)(17)();
};
