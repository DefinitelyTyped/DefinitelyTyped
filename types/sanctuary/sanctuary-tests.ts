/// <reference types="node"/>
import { create, env } from "sanctuary";

const checkTypes = process.env["NODE_ENV"] !== "production";
const S = create({checkTypes, env});

// $ExpectType number
S.reduce(S.add)(0)([1, 2, 3, 4, 5]);

// $ExpectType string
S.flip(S.concat)('foo')('bar');
