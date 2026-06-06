import * as jiff from "jiff";

const a: jiff.JSONObject = { foo: "bar" };
const b: jiff.JSONObject = { foo: "baz" };

const patch: jiff.JSONPatch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

const d = jiff.patchInPlace(patch, a);

const e: jiff.JSONObject = {
    list: [
        { id: "1", value: "original" },
        { id: "2", value: "original2" },
    ],
};
const f: jiff.JSONPatch = [{ op: "replace", path: "/list/2/value", value: "replaced", context: "2" }];
const g = jiff.patch(f, e, {
    findContext(index, array, context) {
        return array.findIndex((value, index, array) => value["id"] === context);
    },
});

const h = jiff.patchInPlace(f, e, {
    findContext(index, array, context) {
        return array.findIndex((value, index, array) => value["id"] === context);
    },
});

new jiff.InvalidPatchOperationError("Invalid patch operation");
new jiff.TestFailedError("Test failed");
const error = new jiff.PatchNotInvertibleError("Patch not invertible");
if (error instanceof jiff.PatchNotInvertibleError) {
    // do something
}
