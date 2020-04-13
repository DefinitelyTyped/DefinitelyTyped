import * as R from 'ramda';

() => {
  const a = R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); // => {foo:1,bar:2,baz:3}
  const b = R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); // => {foo:2,bar:2}
};
