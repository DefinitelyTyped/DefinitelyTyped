import * as bases from 'bases';

let bs16String: string = bases.toBase(200, 16);                // => 'c8'
let bs62String: string = bases.toBase(99999, 62);              // => 'q0T'
let customBaseString: string = bases.toAlphabet(300, 'aAbBcC');    // => 'Abba'

let frombs16Int: number =  bases.fromBase('c8', 16);               // => 200
let frombs62Int: number = bases.fromBase('q0T', 62);              // => 99999
let customBaseInt: number = bases.fromAlphabet('Abba', 'aAbBcC'); // => 300
