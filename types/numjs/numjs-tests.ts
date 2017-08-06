import { abs } from 'numjs';
import * as nj from 'numjs';

const a = abs(2);

const arr = nj.arange(6);
arr.reshape(1, 2, 3);
// array([[[ 0, 1, 2],
//         [ 3, 4, 5]]])
arr.T;
// array([[[ 0],
//         [ 3]],
//        [[ 1],
//         [ 4]],
//        [[ 2],
//         [ 5]]])
arr.transpose(1, 0, 2);
// array([[[ 0, 1, 2]],
//        [[ 3, 4, 5]]])

const b = nj.array([2, 3, 4]);

const c = nj.uint8([1, 2, 3]);

const d = nj.array<number[]>([[2], [3, 4]]);
