import * as R from 'ramda';

() => {
  const t = R.always('Tee');
  const x: string = t(); // => 'Tee'
};
