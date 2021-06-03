import * as R from 'ramda';

() => {
  // $ExpectType { a: number; b: number; c: number; }
  R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}

  // $ExpectType { a: number; b: number; c: number; }
  R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}

  // Order of numeric keys matters. 2, 3, 1 ¯\_(ツ)_/¯
  // $ExpectType { 2: string; 3: string; 1: string; }
  R.zipObj([1, 2, 3], ['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}

  // Order of numeric keys matters. 2, 3, 1 ¯\_(ツ)_/¯
  // $ExpectType { 2: string; 3: string; 1: string; }
  R.zipObj([1, 2, 3])(['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
};
