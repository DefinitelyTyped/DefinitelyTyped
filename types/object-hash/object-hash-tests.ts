/// <reference types="node" />

import hash = require('object-hash');
import stream = require('stream')

var hashed: string;

var obj = { any: true };

// hash object
hashed = hash(obj);

hashed = hash.sha1(obj);
hashed = hash.keys(obj);
hashed = hash.MD5(obj);
hashed = hash.keysMD5(obj);

var passThroughStream = new stream.PassThrough();
hash.writeToStream(obj, passThroughStream);
hashed = passThroughStream.read().toString();

var options = {
    algorithm: 'md5',
    encoding: 'utf8',
    excludeValues: true,
    unorderedArrays: true
};

hashed = hash(obj, options);
