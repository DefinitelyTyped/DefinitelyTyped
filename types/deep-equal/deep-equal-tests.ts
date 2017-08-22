import deepEqual = require("deep-equal");
import * as deepEqualNs from "deep-equal";

const isDeepEqual1: boolean = deepEqual({}, {});
const isDeepEqual2: boolean = deepEqual({}, {}, { strict: true });
const isDeepEqual3: boolean = deepEqual({}, {}, { strict: false });
const isDeepEqual4: boolean = deepEqual(undefined, undefined);
const isDeepEqual5: boolean = deepEqual(3, false);
const isDeepEqual6: boolean = deepEqual("a-string", null);

const isDeepEqualNs1: boolean = deepEqualNs({}, {});
const isDeepEqualNs2: boolean = deepEqualNs({}, {}, { strict: true });
const isDeepEqualNs3: boolean = deepEqualNs({}, {}, { strict: false });
const isDeepEqualNs4: boolean = deepEqualNs(undefined, undefined);
const isDeepEqualNs5: boolean = deepEqualNs(3, false);
const isDeepEqualNs6: boolean = deepEqualNs("a-string", null);

console.log(isDeepEqual1, isDeepEqual2, isDeepEqual3, isDeepEqual4, isDeepEqual5, isDeepEqual6);
console.log(isDeepEqualNs1, isDeepEqualNs2, isDeepEqualNs3, isDeepEqualNs4, isDeepEqualNs5, isDeepEqualNs6);
