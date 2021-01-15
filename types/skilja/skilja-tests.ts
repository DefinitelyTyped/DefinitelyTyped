import { chunkArray } from 'skilja';

// $ExpectType number[][]
const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

// $ExpectError
const result2 = chunkArray();

// $ExpectError
const result3 = chunkArray(1);
