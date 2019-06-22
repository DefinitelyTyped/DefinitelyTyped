import 'k6/global'; // Preloaded in production
import { bytes } from 'k6';

open(); // $ExpectError
open(5); // $ExpectError
const text: string = open('file.txt');
open(5, 'b'); // $ExpectError
open('file.bin', 5); // $ExpectError
open('file.bin', 'notamode'); // $ExpectError
const binary: bytes = open('file.bin', 'b');
