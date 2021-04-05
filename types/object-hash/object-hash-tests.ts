/// <reference types="node" />

import hash = require('object-hash');
import stream = require('stream');

const obj = { any: true };

// $ExpectType string
let hashed = hash(obj);

hashed = hash.sha1(obj); // $ExpectType string
hashed = hash.keys(obj); // $ExpectType string
hashed = hash.MD5(obj); // $ExpectType string
hashed = hash.keysMD5(obj); // $ExpectType string

hash(undefined); // $ExpectError
hash(''); // $ExpectType string

const passThroughStream = new stream.PassThrough();
hash.writeToStream(obj, passThroughStream);
hashed = passThroughStream.read().toString();

const options: hash.Options = {
    algorithm: 'md5',
    encoding: 'hex',
    excludeValues: true,
    unorderedArrays: true,
};

// $ExpectType string
hashed = hash(obj, options);
