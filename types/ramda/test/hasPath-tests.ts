import * as R from 'ramda';

() => {
  R.hasPath(['a', 'b'], { a: { b: 2 } }); // true
  R.hasPath(['a', 'b'], { a: { b: undefined } }); // => true
  R.hasPath(['a', 'b'], { a: { c: 2 } }); // => false
  R.hasPath(['a', 'b'], {}); // => false

  const hasPathCurried = R.hasPath(['a', 'b']);
  hasPathCurried({ a: { b: 2 } }); // true
};
