import { bytes } from 'k6';

// open
open(); // $ExpectError
open(5); // $ExpectError
const text: string = open('file.txt');
open(5, 'b'); // $ExpectError
open('file.bin', 5); // $ExpectError
open('file.bin', 'notamode'); // $ExpectError
const arrayBuffer: ArrayBuffer = open('file.bin', 'b');
open('file.bin', 'b', 5); // $ExpectError

// state
__VU = 9; // $ExpectError
__VU; // $ExpectType number
__ITER = 9; // $ExpectError
__ITER; // $ExpectType number

// environment
__ENV = 5; // $ExpectError
__ENV; // $ExpectType { [name: string]: string; }
