import PseudoMap = require("pseudomap");

// Constructor
const map = new PseudoMap<string, number>();

// Constructor from array
const fromArr = new PseudoMap<string, number>([["a", 1], ["b", 2]]);

// Constructor from another PseudoMap
const copy = new PseudoMap<string, number>(map);

// set / get
map.set("key", 42);
const val: number | undefined = map.get("key");

// has
const exists: boolean = map.has("key");

// delete
const deleted: boolean = map.delete("key");

// size
const size: number = map.size;

// clear
map.clear();

// forEach
map.set("a", 1);
map.set("b", 2);
map.forEach((value, key, m) => {
    const v: number = value;
    const k: string = key;
});

// Chaining set
map.set("x", 10).set("y", 20);

// With object keys
const objMap = new PseudoMap<object, string>();
const keyObj = {};
objMap.set(keyObj, "value");
objMap.get(keyObj);
