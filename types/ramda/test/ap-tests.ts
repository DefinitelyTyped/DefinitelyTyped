import * as R from 'ramda';

() => {
  const a: number[] = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
};

() => {
  const x: number[] = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
  const y: number[] = R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
  const z: string = R.ap<string, string, string>(R.concat, R.toUpper)('Ramda'); // => 'RamdaRAMDA'
};
