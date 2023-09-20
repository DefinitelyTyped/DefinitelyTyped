import * as jsprim from "jsprim";

jsprim.deepCopy(2); // $ExpectType 2
jsprim.deepCopy(["test"]); // $ExpectType string[]
jsprim.deepCopy({ test: { deep: { value: ["test", 1] } } }); // $ExpectType { test: { deep: { value: (string | number)[]; }; }; }

jsprim.deepEqual(2, 2); // $ExpectType boolean
jsprim.deepEqual("test", 2); // $ExpectType boolean
jsprim.deepEqual({ test: "test", deep: { value: 2 } }, { test: "test", deep: { value: 2 } }); // $ExpectType boolean

jsprim.endsWith("test", "est"); // $ExpectType boolean

jsprim.extraProperties({ test: 1, other: 2 }, ["other"]); // $ExpectType string[]

jsprim.flattenIter([1, [2, 3, [4]]], 2, (value) => {}); // $ExpectType void

jsprim.flattenIter({ deep: { deep: { deep: { deep: { value: 2 } } } } }, 0, (value) => {}); // $ExpectType void

jsprim.flattenObject({ deep: { deep: { deep: { deep: { value: 2 } } } } }, 2); // $ExpectType unknown[]

jsprim.forEachKey([1, 2, 3, 4], (key, val) => {}); // $ExpectType void

jsprim.hasKey({ key: "test", second: "second" }, "second"); // $ExpectType boolean

jsprim.hrtimeAccum([10, 20], [20, 30]); // $ExpectType [number, number]

jsprim.hrtimeAdd([10, 20], [20, 30]); // $ExpectType [number, number]

jsprim.hrtimeDiff([10, 20], [20, 30]); // $ExpectType [number, number]

jsprim.hrtimediff([10, 20], [20, 30]); // $ExpectType [number, number]

jsprim.hrtimeMicrosec([10, 20]); // $ExpectType number

jsprim.hrtimeMillisec([10, 20]); // $ExpectType number

jsprim.hrtimeNanosec([10, 20]); // $ExpectType number

jsprim.isEmpty(""); // $ExpectType boolean
jsprim.isEmpty(undefined); // $ExpectType boolean
jsprim.isEmpty(null); // $ExpectType boolean
jsprim.isEmpty([]); // $ExpectType boolean

jsprim.iso8601(123); // $ExpectType string
jsprim.iso8601(new Date()); // $ExpectType string

jsprim.mergeObjects(); // $ExpectType { [key: string]: unknown; }
jsprim.mergeObjects({}); // $ExpectType { [key: string]: unknown; }
jsprim.mergeObjects({}, {}); // $ExpectType { [key: string]: unknown; }
jsprim.mergeObjects({}, {}, {}); // $ExpectType { [key: string]: unknown; }

jsprim.parseDateTime("str"); // $ExpectType Date
jsprim.parseDateTime(123); // $ExpectType Date

jsprim.parseInteger("123"); // $ExpectType number
jsprim.parseInteger("123", { trimWhitespace: true }); // $ExpectType number

jsprim.pluck({ test: 1 }, "test"); // $ExpectType unknown

jsprim.randElt([1, 2, 3]); // $ExpectType number
jsprim.randElt([{}, {}]); // $ExpectType {}
jsprim.randElt(["str", "str"]); // $ExpectType string

jsprim.rfc1123(new Date()); // $ExpectType string

jsprim.startsWith("str", "s"); // $ExpectType boolean

jsprim.validateJsonObject({}, {}); // $ExpectType JsPrimError | null

jsprim.validateJsonObjectJS({}, {}); // $ExpectType JsPrimError | null
