import * as jiff from 'jiff';

const a: jiff.JSONValue = { foo: 'bar' };
const b = { foo: 'baz' };

const patch: jiff.JSONPatch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);
