import timeSafeCompare = require("tsscmp");

// @ts-expect-error
timeSafeCompare();
// @ts-expect-error
timeSafeCompare("");
// @ts-expect-error
timeSafeCompare(1);

timeSafeCompare("", ""); // $ExpectType boolean
timeSafeCompare(1, 1); // $ExpectType boolean
timeSafeCompare(undefined, undefined); // $ExpectType boolean
timeSafeCompare(true, true); // $ExpectType boolean
timeSafeCompare(false, false); // $ExpectType boolean
var a = { a: 1 };
timeSafeCompare(a, a); // $ExpectType boolean
function f1() {
    return 1;
}
timeSafeCompare(f1, f1); // $ExpectType boolean

timeSafeCompare("", 1); // $ExpectType boolean
timeSafeCompare(1, ""); // $ExpectType boolean

timeSafeCompare({}, {}); // $ExpectType boolean
timeSafeCompare([], []); // $ExpectType boolean

timeSafeCompare({}, ""); // $ExpectType boolean
timeSafeCompare([], ""); // $ExpectType boolean

timeSafeCompare([], 1); // $ExpectType boolean
timeSafeCompare({}, 1); // $ExpectType boolean

timeSafeCompare("", {}); // $ExpectType boolean
timeSafeCompare("", []); // $ExpectType boolean

timeSafeCompare(1, []); // $ExpectType boolean
timeSafeCompare(1, {}); // $ExpectType boolean
