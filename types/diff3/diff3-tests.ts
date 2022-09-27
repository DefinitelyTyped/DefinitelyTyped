import diff3Merge = require('diff3');

const a = ['a', 'text', 'file'];
const o = ['a', 'test', 'file'];
const b = ['a', 'toasty', 'filtered', 'file'];
const diff3 = diff3Merge(a, o, b);
