import * as bser from "bser";

const encoded = bser.dumpToBuffer(["hello"]);
console.log(bser.loadFromBuffer(encoded)); // ['hello']
