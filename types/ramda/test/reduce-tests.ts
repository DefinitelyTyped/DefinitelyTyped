import * as R from 'ramda';

function add(a: number, b: number) {
  return a + b;
}

(() => {
  const numbers = [1, 2, 3];
  R.reduce((a, b) => a + b, 10, numbers); // => 16;
})();

() => {
  const numbers = [1, 2, 3];

  R.reduce((a, b) => a + b, 10, numbers); // => 16
  R.reduce(add)(10, numbers); // => 16
  R.reduce<number, number>((a, b) => a + b, 10)(numbers); // => 16
};
