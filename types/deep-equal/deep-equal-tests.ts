import deepEqual = require("deep-equal");

const isDeepEqual1: boolean = deepEqual({}, {});
const isDeepEqual2: boolean = deepEqual({}, {}, { strict: true });
const isDeepEqual3: boolean = deepEqual({}, {}, { strict: false });
const isDeepEqual4: boolean = deepEqual(undefined, undefined);
const isDeepEqual5: boolean = deepEqual(3, false);
const isDeepEqual6: boolean = deepEqual("a-string", null);

console.log(isDeepEqual1, isDeepEqual2, isDeepEqual3, isDeepEqual4, isDeepEqual5, isDeepEqual6);
