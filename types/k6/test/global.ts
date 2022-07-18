import { bytes } from 'k6';

// open
// @ts-expect-error
open();
// @ts-expect-error
open(5);
const text: string = open('file.txt');
// @ts-expect-error
open(5, 'b');
// @ts-expect-error
open('file.bin', 5);
// @ts-expect-error
open('file.bin', 'notamode');
const arrayBuffer: ArrayBuffer = open('file.bin', 'b');
// @ts-expect-error
open('file.bin', 'b', 5);

// state
// @ts-expect-error
__VU = 9;
__VU; // $ExpectType number
// @ts-expect-error
__ITER = 9;
__ITER; // $ExpectType number

// environment
// @ts-expect-error
__ENV = 5;
__ENV; // $ExpectType { [name: string]: string; }
