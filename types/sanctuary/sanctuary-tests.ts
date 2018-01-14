/// <reference types="node"/>;
import * as S from "sanctuary";
import * as assert from "assert";

assert.equal(S.map(S.concat('@'))(['foo', 'bar', 'baz']), ["@foo", "@bar", "@baz"]);
assert.equal(S.reduce(S.add)(0)([1, 2, 3, 4, 5]), 15);
assert.equal(S.flip(S.concat)('foo')('bar'), "barfoo");
