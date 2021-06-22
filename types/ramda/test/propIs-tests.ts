import * as R from 'ramda';

() => {
  R.propIs(Number, 'x', { x: 1, y: 2 }); // => true
  R.propIs(Number, 'x')({ x: 1, y: 2 }); // => true
  R.propIs(Number)('x', { x: 1, y: 2 }); // => true
  R.propIs(Number)('x')({ x: 1, y: 2 }); // => true
  R.propIs(Number, 'x', { x: 'foo' }); // => false
  R.propIs(Number, 'x', {}); // => false
};
