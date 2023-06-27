import * as jiff from 'jiff';

const a = { foo: 'bar' };
const b = { foo: 'baz' };

const patch = jiff.diff(a, b);

const c = jiff.patch(patch, a);

jiff.patchInPlace(patch, a);
