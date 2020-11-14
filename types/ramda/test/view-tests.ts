import * as R from 'ramda';

() => {
  const headLens = R.lensIndex(0);
  R.view(headLens, ['a', 'b', 'c']); // => 'a'
};

() => {
  const xLens = R.lens(R.prop('x'), R.assoc('x'));
  R.view(xLens, { x: 1, y: 2 }); // => 1
  R.view(xLens)({ x: 1, y: 2 }); // => 1
};

() => {
  const headLens = R.lensIndex(0);
  R.view(headLens, ['a', 'b', 'c']); // => 'a'
};

() => {
  const xLens = R.lensProp('x');
  R.view(xLens, { x: 1, y: 2 }); // => 1
};

() => {
  const xyLens = R.lensPath(['x', 0, 'y']);
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };

  R.view(xyLens, testObj); // => 2
};
