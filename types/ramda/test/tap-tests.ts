import * as R from 'ramda';

() => {
  const sayX = (x: number) => console.log('x is ' + x);
  const a: number = R.tap(sayX, 100); // => 100
};
