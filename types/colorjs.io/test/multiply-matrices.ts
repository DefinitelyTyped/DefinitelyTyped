import multiplyMatrices from 'colorjs.io/src/multiply-matrices';

// @ts-expect-error
multiplyMatrices();
// @ts-expect-error
multiplyMatrices([1, 2, 3]);

multiplyMatrices([1, 2, 3], [4, 5, 6]); // $ExpectType number[]
// $ExpectType number[]
multiplyMatrices(
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
);
