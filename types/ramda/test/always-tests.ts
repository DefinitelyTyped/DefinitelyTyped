import * as R from 'ramda';

() => {
  // $ExpectType () => string
  const t = R.always('Tee');
  // $ExpectType string
  const x: string = t(); // => 'Tee'
};
