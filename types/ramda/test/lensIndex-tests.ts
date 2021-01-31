import * as R from 'ramda';

() => {
  // $ExpectType Lens<number[], number>
  R.lensIndex<number>(0);
};
