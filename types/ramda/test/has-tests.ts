import * as R from 'ramda';

() => {
  const hasName = R.has('name');
  const a1: boolean = hasName({ name: 'alice' }); // => true
  const a2: boolean = hasName({ name: 'bob' }); // => true
  const a3: boolean = hasName({}); // => false
};
