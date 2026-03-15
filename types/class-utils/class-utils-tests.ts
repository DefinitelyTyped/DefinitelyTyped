import * as cu from "class-utils";

// Type checking
const isObj: boolean = cu.isObject({});
const hasCtor: boolean = cu.hasConstructor({});

// Utility functions
cu.noop();
const val: number = cu.identity(42);
const arr: string[] = cu.arrayify("foo");
const arr2: number[] = cu.arrayify([1, 2]);

// Property checking
const hasIt: boolean = cu.has({ a: 1 }, "a");
const hasAllKeys: boolean = cu.hasAll({ a: 1, b: 2 }, ["a", "b"]);
const keys: string[] = cu.nativeKeys({});

// Descriptors
const desc = cu.getDescriptor({ a: 1 }, "a");
cu.copyDescriptor({}, { a: 1 }, "a");

// Copy and inherit
cu.copy({}, { a: 1 });
cu.copy({}, { a: 1 }, "a");
cu.copy({}, { a: 1 }, ["a"]);
cu.inherit({}, { a: 1 });

// Extend
const extendFn = cu.extend(() => {});

// Bubble
cu.bubble(() => {});
cu.bubble(() => {}, ["error", "data"]);
