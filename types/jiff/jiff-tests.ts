import * as jiff from "jiff";

const a: jiff.JSONObject = { foo: "bar" };
const b: jiff.JSONObject = { foo: "baz" };

const patch: jiff.JSONPatch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);

const d: jiff.JSONObject = {
    list: [
        { id: "1", value: "original" },
        { id: "2", value: "original2" },
    ],
};
const e: jiff.JSONPatch = [{ op: "replace", path: "/list/2/value", value: "replaced", context: "2" }];
const f = jiff.patch(e, d, {
    findContext(index, array, context) {
        return array.findIndex((value, index, array) => value["id"] === context);
    },
});

jiff.patchInPlace(e, d, {
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
