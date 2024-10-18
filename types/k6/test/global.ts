// open
// @ts-expect-error
open();
// @ts-expect-error
open(5);
const text: string = open("file.txt");
// @ts-expect-error
open(5, "b");
// @ts-expect-error
open("file.bin", 5);
// @ts-expect-error
open("file.bin", "notamode");
const arrayBuffer: ArrayBuffer = open("file.bin", "b");
// @ts-expect-error
open("file.bin", "b", 5);

// state
__VU; // $ExpectType number
__VU = 9;
__ITER; // $ExpectType number
__ITER = 9;

// environment
// @ts-expect-error
__ENV = 5;
__ENV; // $ExpectType { [name: string]: string; }

// import.meta.resolve
import.meta.resolve("test"); // $ExpectType string

// @ts-expect-error
import.meta.resolve();

// @ts-expect-error
import.meta.resolve("test", "something");
