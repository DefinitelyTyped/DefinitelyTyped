import { bytes } from 'k6';

// open
open(); // $ExpectError
open(5); // $ExpectError
const text: string = open('file.txt');
open(5, 'b'); // $ExpectError
open('file.bin', 5); // $ExpectError
open('file.bin', 'notamode'); // $ExpectError
const binary: bytes = open('file.bin', 'b');
open('file.bin', 'b', 5); // $ExpectError

// console
console.debug(); // $ExpectError
console.debug(7);
console.debug('nutmeg');
console.debug('nutmeg', {}, true);
console.error(); // $ExpectError
console.error(7);
console.error('clove');
console.error('clove', {}, false);
console.info(); // $ExpectError
console.info(7);
console.info('ginger');
console.info('ginger', {}, true);
console.log(); // $ExpectError
console.log(7);
console.log('cinnamon');
console.log('cinnamon', {}, false);
console.warn(); // $ExpectError
console.warn(7);
console.warn('peppermint');
console.warn('peppermint', {}, true);

// state
__VU = 9; // $ExpectError
__VU; // $ExpectType number
__ITER = 9; // $ExpectError
__ITER; // $ExpectType number

// environment
__ENV = 5; // $ExpectError
__ENV; // $ExpectType { [name: string]: string; }
