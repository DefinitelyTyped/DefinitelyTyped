import mask = require("json-mask");

mask({ p: { a: 1, b: 2 }, z: 1 }, "p/a,z");

mask.filter({ p: { a: 1, b: 2 }, z: 1 }, mask.compile("p/a,z"));
