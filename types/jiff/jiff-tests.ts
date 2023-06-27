import * as jiff from 'jiff';

const a = { foo: 'bar' };
const b = { foo: 'baz' };

const patch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);

new jiff.InvalidPatchOpertaionError('Invalid patch operation');
new jiff.TestFailedError('Test failed');
const error = new jiff.PatchNotInvertibleError('Patch not invertible');
if (error instanceof jiff.PatchNotInvertibleError) {
    // do something
}
