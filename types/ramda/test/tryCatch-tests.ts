import * as R from 'ramda';

() => {
  const a: boolean = R.tryCatch<boolean>(R.prop('x'), R.F)({ x: true }); // => true
  const a1: boolean = R.tryCatch(R.prop<'x', true>('x'), R.F)({ x: true }); // => true
  const b: boolean = R.tryCatch<boolean>(R.prop('x'), R.F)(null); // => false
  const c: boolean = R.tryCatch<boolean>(R.and, R.F)(true, true); // => true
};
