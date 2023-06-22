import jiff, { JSONPatch } from 'jiff';

const a = { foo: 'bar' };
const b = { foo: 'baz' };

const patch: JSONPatch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);
