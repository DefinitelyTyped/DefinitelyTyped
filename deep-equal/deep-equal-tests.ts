
import deepEqual = require("deep-equal");

let isDeepEqual1: boolean = deepEqual({}, {});
let isDeepEqual2: boolean = deepEqual({}, {}, { strict: true });
let isDeepEqual3: boolean = deepEqual({}, {}, { strict: false });
let isDeepEqual4: boolean = deepEqual(undefined, undefined);
let isDeepEqual5: boolean = deepEqual(3, false);
let isDeepEqual6: boolean = deepEqual("a-string", null);

console.log(isDeepEqual1, isDeepEqual2, isDeepEqual3, isDeepEqual4, isDeepEqual5, isDeepEqual6);
