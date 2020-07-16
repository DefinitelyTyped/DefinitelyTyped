import * as R from 'ramda';

() => {
  const a = R.mergeDeepWithKey(
    (k: string, a: number[], b: number[]) => (k === 'bar' ? a.concat(b) : a),
    { foo: { bar: [1, 2], userIds: [42] } },
    { foo: { bar: [3, 4], userIds: [34] } },
  ); // => { foo: { bar: [ 1, 2, 3, 4 ], userIds: [42] } }
};
