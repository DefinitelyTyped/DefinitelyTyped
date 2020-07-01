import * as R from 'ramda';

() => {
  const headLens = R.lensIndex(0);
  headLens([10, 20, 30, 40]); // => 10
  headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]
};
