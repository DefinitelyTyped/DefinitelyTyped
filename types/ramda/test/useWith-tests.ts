import * as R from 'ramda';

function double(x: number): number {
  return x + x;
}

function square(x: number) {
  return x * x;
}

// Adds any number of arguments together
function addAll() {
  return 0;
}

R.useWith(addAll, [double, square]);
