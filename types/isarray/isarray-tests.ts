import isArray from "isarray";

isArray([]); // $ExpectType boolean
isArray({}); // $ExpectType boolean

function test(v: unknown) {
    if (isArray(v)) {
        v; // $ExpectType unknown[]
    }
}

test([]); // $ExpectType void
test({}); // $ExpectType void

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
function testGeneric<T>(v: T): T {
    if (isArray(v)) {
        v; // $ExpectType T & unknown[]
    }
    return v;
}

testGeneric([1, 2]); // $ExpectType number[]
testGeneric({ a: 1 }); // $ExpectType { a: number; }
testGeneric(["a", "b"]); // $ExpectType string[]
