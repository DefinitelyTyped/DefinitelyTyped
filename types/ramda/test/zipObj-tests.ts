import * as R from 'ramda';

() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType { c: number; a: number; b: number; } || { a: number; b: number; c: number; }
    R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}

    // $ExpectType { c: number; a: number; b: number; } || { a: number; b: number; c: number; }
    R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}

    // $ExpectType { 2: string; 3: string; 1: string; } || { 2: string; 1: string; 3: string; }
    R.zipObj([1, 2, 3], ['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}

    // $ExpectType { 2: string; 3: string; 1: string; } || { 2: string; 1: string; 3: string; }
    R.zipObj([1, 2, 3])(['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
};
