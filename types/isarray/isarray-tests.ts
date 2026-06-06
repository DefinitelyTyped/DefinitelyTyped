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
