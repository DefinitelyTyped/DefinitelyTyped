/// <reference types="node"/>
import * as assert from "assert";
import { create, env } from "sanctuary";

const checkTypes = process.env["NODE_ENV"] !== "production";
const S = create({checkTypes, env});

assert.equal(S.map(S.concat('@'))(['foo', 'bar', 'baz']), ["@foo", "@bar", "@baz"]);
assert.equal(S.reduce(S.add)(0)([1, 2, 3, 4, 5]), 15);
assert.equal(S.flip(S.concat)('foo')('bar'), "barfoo");
