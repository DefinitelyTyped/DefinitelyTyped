/// <reference types="node"/>
import * as assert from "assert";
import { create, env, Maybe, Just, Nothing } from "sanctuary";

const checkTypes = process.env["NODE_ENV"] !== "production";
const S = create({ checkTypes, env });

assert.equal(S.map(S.concat('@'))(['foo', 'bar', 'baz']), ["@foo", "@bar", "@baz"]);
assert.equal(S.reduce(S.add)(0)([1, 2, 3, 4, 5]), 15);
assert.equal(S.flip(S.concat)('foo')('bar'), "barfoo");
assert.equal(S.map(S.fst)(S.zip([1, 2])(['a'])), [1]);
assert.equal(S.zipWith(a => b => [a, b])([1, 2, 3])(['a', 'b', 'c']), [[1, 'a'], [2, 'b'], [3, 'c']]);

S.of(Array)(4); // $ExpectType number[]
S.of(Function)(4)(null); // $ExpectType number
S.of(S.Maybe)(4); // $ExpectType Maybe<number>
S.of(S.Either)(4); // $ExpectType Either<any, number>

((): Maybe<number> => { // $ExpectType Maybe<number>
  const r = S.of(S.Maybe)(4); // $ExpectType Maybe<number>
  return r;
})();

S.id(Function)(42); // Category<any>

S.bimap(S.toUpper)(Math.sqrt)(S.Left('foo')); // Either<string, number>
S.bimap(S.toUpper)(Math.sqrt)(S.Pair('foo')(64)); // Pair<string, number>
