import * as R from 'ramda';

() => {
  const headLens = R.lensIndex(0);
  R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
};

() => {
  const xLens = R.lens(R.prop('x'), R.assoc('x'));
  R.set(xLens, 4, { x: 1, y: 2 }); // => {x: 4, y: 2}
  R.set(xLens)(4, { x: 1, y: 2 }); // => {x: 4, y: 2}
  R.set(xLens, 4)({ x: 1, y: 2 }); // => {x: 4, y: 2}
};

() => {
  const headLens = R.lensIndex(0);
  R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
};

() => {
  const xLens = R.lensProp('x');
  R.set(xLens, 4, { x: 1, y: 2 }); // => {x: 4, y: 2}
};

() => {
  const xyLens = R.lensPath(['x', 0, 'y']);
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };

  R.set(xyLens, 4, testObj); // => {x: [{y: 4, z: 3}, {y: 4, z: 5}]}
};
