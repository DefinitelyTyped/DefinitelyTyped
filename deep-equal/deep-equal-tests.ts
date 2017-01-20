
import * as deepEqual from "deep-equal";

let isDeepEqual1: boolean = deepEqual({}, {});
let isDeepEqual2: boolean = deepEqual({}, {}, { strict: true });
let isDeepEqual3: boolean = deepEqual({}, {}, { strict: false });

console.log(isDeepEqual1, isDeepEqual2, isDeepEqual3);
