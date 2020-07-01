import * as R from 'ramda';

() => {
  const a = R.mergeDeepLeft({ foo: { bar: 1 } }, { foo: { bar: 2 } }); // => {foo: {bar: 1}}
};
