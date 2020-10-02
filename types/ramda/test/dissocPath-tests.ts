import * as R from 'ramda';

() => {
  const a1 = R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); // => {a: {b: {}}}
  // optionally specify return type
  const a2 = R.dissocPath<{ a: { b: number } }>(['a', 'b', 'c'], {
    a: { b: { c: 42 } },
  }); // => {a: {b: {}}}
  const a3 = R.dissocPath(['a', 'b', 'c'])({ a: { b: { c: 42 } } }); // => {a: {b: {}}}

  const testPath = ['x', 0, 'y'];
  const testObj = { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] };

  R.dissocPath(testPath, testObj); // => {x: [{z: 3}, {y: 4, z: 5}]}
  R.dissocPath(testPath)(testObj); // => {x: [{z: 3}, {y: 4, z: 5}]}
};
