import * as R from 'ramda';

() => {
  const testPath = ['x', 0, 'y'];
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };

  R.path(testPath, testObj); // => 2
  R.path(testPath)(testObj); // => 2

  R.path(['a', 'b'])({ c: { b: 2 } }); // => undefined
  R.path(['a', 'b'], { c: { b: 2 } }); // => undefined
};
