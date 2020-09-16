import * as R from 'ramda';

() => {
  const headLens = R.lensIndex(0);
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

() => {
  const xLens = R.lens(R.prop('x'), R.assoc('x'));
  R.over(xLens, R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
  R.over(xLens, R.negate)({ x: 1, y: 2 }); // => {x: -1, y: 2}
  R.over(xLens)(R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
};

() => {
  const headLens = R.lensIndex(0);
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

() => {
  const xLens = R.lensProp('x');
  R.over(xLens, R.negate, { x: 1, y: 2 }); // => {x: -1, y: 2}
};

() => {
  const xyLens = R.lensPath(['x', 0, 'y']);
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };

  R.over(xyLens, R.negate, testObj); // => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
};

() => {
  const headLens = R.lensIndex(0);
  R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz']
};
