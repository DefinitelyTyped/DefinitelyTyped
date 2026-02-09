import objectorarray = require("objectorarray");

// Test with objects - should return true
const isObj: boolean = objectorarray({});
const isObjWithProps: boolean = objectorarray({ a: 1, b: 2 });

// Test with arrays - should return true
const isArr: boolean = objectorarray([]);
const isArrWithItems: boolean = objectorarray([1, 2, 3]);

// Test with null/undefined - should return false
const isNull: boolean = objectorarray(null);
const isUndefined: boolean = objectorarray(undefined);

// Test with RegExp - should return false
const isRegex: boolean = objectorarray(/test/);

// Test with primitives - should return false
const isString: boolean = objectorarray("string");
const isNumber: boolean = objectorarray(123);
const isBool: boolean = objectorarray(true);

// Test type guard behavior
const value: unknown = { foo: "bar" };
if (objectorarray(value)) {
    // value is narrowed to object
    const obj: object | unknown[] = value;
    // @ts-expect-error
    const obj2: boolean = value
}
