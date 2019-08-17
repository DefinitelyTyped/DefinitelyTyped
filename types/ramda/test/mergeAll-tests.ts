import * as R from 'ramda';

() => {
  interface FBB {
    foo?: number;
    bar?: number;
    baz?: number;
  }
  const a = R.mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); // => {foo:1,bar:2,baz:3}
  const b = R.mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); // => {foo:2,bar:2}
  const c = R.mergeAll<FBB>([{ foo: 1 }, { bar: 2 }, { baz: 3 }]); // => {foo:1,bar:2,baz:3}
  const d = R.mergeAll<FBB>([{ foo: 1 }, { foo: 2 }, { bar: 2 }]); // => {foo:2,bar:2}
};
