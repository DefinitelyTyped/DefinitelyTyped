import * as R from 'ramda';

() => {
  const a: boolean = R.propSatisfies((x: number) => x > 0, 'x', { x: 1, y: 2 }); // => true
  const b: boolean = R.propSatisfies((x: number) => x > 0, 'x')({ x: 1, y: 2 }); // => true
  const c: boolean = R.propSatisfies((x: number) => x > 0)('x')({ x: 1, y: 2 }); // => true
};
