import State = require("accumulator-hash");

const buf = Buffer.from("hello, world!");

const state = new State(); // $ExpectType RollingHash
new State(buf); // $ExpectType RollingHash
new State([6]); // $ExpectType RollingHash

let b: Buffer | Uint8Array = state.hash(buf);
b = state.hash(new Uint8Array(10));
