import * as R from 'ramda';

() => {
  // pred :: Object -> Boolean
  const pred = R.whereEq({ a: 1, b: 2 });
  pred({ a: 1 }); // => false
  pred({ a: 1, b: 2 }); // => true
  pred({ a: 1, b: 2, c: 3 }); // => true
  pred({ a: 1, b: 1 }); // => false
  R.whereEq({ a: 'one' }, { a: 'one' }); // => true
};
