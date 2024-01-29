/// <reference types="node" />

import hash = require("object-hash");
import stream = require("stream");

const obj = { any: true };

interface MyInterface {
    a: string;
}

const obj2: MyInterface = { a: "a" };

const options: hash.Options = {
    algorithm: "md5",
    encoding: "hex",
    excludeValues: true,
    unorderedArrays: true,
};

hash(obj); // $ExpectType string
hash(obj2); // $ExpectType string
// @ts-expect-error
hash(undefined);
hash("1"); // $ExpectType string
hash(1); // $ExpectType string
hash(true); // $ExpectType string
hash(null); // $ExpectType string
hash([1, 2, 3]); // $ExpectType string
hash([1, "2", 3, true]); // $ExpectType string
hash(["1", "1", "3"]); // $ExpectType string
hash([{ objectInArray: true }]); // $ExpectType string
hash(obj, options); // $ExpectType string
hash(obj, { ...options, algorithm: "sha256" }); // $ExpectType string
hash(obj, { ...options, encoding: "buffer" }); // $ExpectType Buffer
hash({ name: "Peter", stapler: false, friends: ["Joanna", "Michael", "Samir"] }); // $ExpectType string

hash.sha1(obj); // $ExpectType string
hash.keys(obj); // $ExpectType string
hash.MD5(obj); // $ExpectType string
hash.keysMD5(obj); // $ExpectType string

const passThroughStream = new stream.PassThrough();
hash.writeToStream(obj, passThroughStream);
passThroughStream.read().toString();
