import { chunkArray } from 'skilja';

// $ExpectType number[][]
const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

// @ts-expect-error
const result2 = chunkArray();

// @ts-expect-error
const result3 = chunkArray(1);
