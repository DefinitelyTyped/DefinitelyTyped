import * as assert from "assert-plus";

const arr = ["one", "two"];
const undef = undefined;

assert.array(arr, "");
assert.object({}, "");
assert.func(() => {}, "");
assert.arrayOfArray([[]], "");
assert.arrayOfString(["", ""], "");
assert.optionalObject({}, "");
assert.optionalObject(undef, "");
assert.optionalString("abc", "");
assert.optionalStream(undef, "");

interface Test {
    property: boolean;
}

function object(x: any) {
    assert.object<Test>(x);
    return x.property;
}

function optionalObject(x: any) {
    assert.optionalObject<Test>(x);
    return x?.property;
}

function arrayOfObject(x: any) {
    assert.arrayOfObject(x);
    return x[0].property;
}

function optionalArrayOfObject(x: any) {
    assert.optionalArrayOfObject(x);
    return x?.[0].property;
}
