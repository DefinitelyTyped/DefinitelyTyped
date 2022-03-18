import * as jsonPatch from "json8-patch";

const doc1 = { foo: "bar" };
const doc2 = { bar: 42 };

const patch = jsonPatch.diff(doc1, doc2);
const { doc, revert } = jsonPatch.apply(doc1, patch, { reversible: true });

// $ExpectType ApplyResult
const reverted = jsonPatch.revert(doc, revert);

// $ExpectType boolean
const valid = jsonPatch.valid(patch);

// $ExpectType JsonPatch
const revertedPatch = jsonPatch.buildRevertPatch(revert);

// $ExpectType OperationResult
const addOperation = jsonPatch.add({ a: ['test'] }, '/a', 'other');

// $ExpectType OperationResult
const copyOperation = jsonPatch.copy({ a: 'test' }, '/a', '/b');

// $ExpectType OperationResult
const moveOperation = jsonPatch.move({ a: 'test' }, '/a', '/b');

// $ExpectType OperationResult
const removeOperation = jsonPatch.remove({ a: 'test' }, '/a');

// $ExpectType OperationResult
const replaceOperation = jsonPatch.replace({ a: 'test' }, '/a', 'replaced');

// $ExpectType OperationResult
const testOperation = jsonPatch.test({ a: 'test' }, '/a', 'test');

// $ExpectType unknown
const getResult = jsonPatch.get({ a: 'test' }, '/a');

// $ExpectType boolean
const hasResult = jsonPatch.has({ a: 'test' }, '/a');

// $ExpectType any[]
const packed = jsonPatch.pack(patch);

// $ExpectType JsonPatch
const unpacked = jsonPatch.unpack(packed);

// $ExpectType JsonPatch
const concatenated = jsonPatch.concat({ op: 'replace', value: 'test', path: '/a' }, { op: 'copy', path: '/a', from: '/b' });
