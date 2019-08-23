/// <reference types="node"/>
import * as assert from "assert";
import { create, env } from "sanctuary";

const checkTypes = process.env["NODE_ENV"] !== "production";
const S = create({checkTypes, env});

assert.equal(S.map(S.concat('@'))(['foo', 'bar', 'baz']), ["@foo", "@bar", "@baz"]);
assert.equal(S.reduce(S.add)(0)([1, 2, 3, 4, 5]), 15);
assert.equal(S.flip(S.concat)('foo')('bar'), "barfoo");
assert.equal(S.map(S.fst)(S.zip([1, 2])(['a'])), [1]);
assert.equal(S.zipWith(a => b => [a, b])([1, 2, 3])(['a', 'b', 'c']), [[1, 'a'], [2, 'b'], [3, 'c']]);
