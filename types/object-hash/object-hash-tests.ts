/// <reference types="node" />

import hash = require('object-hash');
import stream = require('stream');

const obj = { any: true };

const options: hash.Options = {
    algorithm: 'md5',
    encoding: 'hex',
    excludeValues: true,
    unorderedArrays: true,
};

hash(obj); // $ExpectType string
// @ts-expect-error
hash(undefined);
hash(''); // $ExpectType string
hash(obj, options); // $ExpectType string
hash(obj, { ...options, encoding: 'buffer' }); // $ExpectType Buffer

hash.sha1(obj); // $ExpectType string
hash.keys(obj); // $ExpectType string
hash.MD5(obj); // $ExpectType string
hash.keysMD5(obj); // $ExpectType string

const passThroughStream = new stream.PassThrough();
hash.writeToStream(obj, passThroughStream);
passThroughStream.read().toString();
