import * as R from 'ramda';

() => {
  const hasName = R.has('name');
  const a1: boolean = hasName({ name: 'alice' }); // => true
  const a2: boolean = hasName({ name: 'bob' }); // => true
  const a3: boolean = hasName({}); // => false
};

() => {
  R.has(R.__, { x: 0, y: 0 })('x'); // true;
  R.has(R.__)({ x: 0, y: 0 }, 'x'); // true;
};
