import ProtoList = require("proto-list");

const list = new ProtoList();

// Push and pop
list.push({ a: 1 });
list.pop();

// Unshift and shift
list.unshift({ b: 2 });
list.shift();

// Get and set
list.push({ x: 10 });
const val = list.get("x");
list.set("y", 20);
list.set("z", 30, true);

// Properties
const len: number = list.length;
const keys: string[] = list.keys;
const snap: { [key: string]: any } = list.snapshot;
const store: object = list.store;

// forEach
list.forEach((key, val, obj) => {});

// Slice and splice
const sliced: object[] = list.slice();
const spliced: object[] = list.splice(0, 1);
