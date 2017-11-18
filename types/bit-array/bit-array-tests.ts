import BitArray = require("bit-array");

const a = new BitArray(32);
a.set(0, true);
a.set(31, true);
a.toString(); // "10000000000000000000000000000001"
a.get(1); // false
a.get(31); // true