import * as jiff from 'jiff';

const a: jiff.JSONObject = { foo: 'bar' };
const b: jiff.JSONObject = { foo: 'baz' };

const patch: jiff.JSONPatch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);

new jiff.InvalidPatchOperationError('Invalid patch operation');
new jiff.TestFailedError('Test failed');
const error = new jiff.PatchNotInvertibleError('Patch not invertible');
if (error instanceof jiff.PatchNotInvertibleError) {
    // do something
}
