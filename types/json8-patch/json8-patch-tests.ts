import * as jsonPatch from "json8-patch";

const doc1 = { foo: "bar" };
const doc2 = { bar: 42 };

const patch = jsonPatch.diff(doc1, doc2);
const { doc, revert } = jsonPatch.apply(doc1, patch, { reversible: true });

// $ExpectType ApplyResult
const reverted = jsonPatch.revert(doc, revert);
