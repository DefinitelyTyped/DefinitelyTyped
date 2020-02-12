/// <reference types="node" />

import isStream = require('isstream');
import { isDuplex, isReadable, isWritable } from 'isstream';
import { Stream, Readable, Writable, Duplex } from 'stream';

const objs = [
    new Stream(),
    new Readable(),
    new Writable(),
    new Duplex(),
    'string',
    10
];

for (let i = 0; i < objs.length; i++) {
    let type = 'not a stream';
    if (isStream.isDuplex(objs[i])) {
        type = 'duplex';
    } else if (isStream.isWritable(objs[i])) {
        type = 'writable';
    } else if (isStream.isReadable(objs[i])) {
        type = 'readable';
    } else if (isStream(objs[i])) {
        type = 'stream';
    }
    console.log(`${i}. ${type}`);
}

for (let i = 0; i < objs.length; i++) {
    let type = 'not a stream';
    if (isDuplex(objs[i])) {
        type = 'duplex';
    } else if (isWritable(objs[i])) {
        type = 'writable';
    } else if (isReadable(objs[i])) {
        type = 'readable';
    } else if (isStream(objs[i])) {
        type = 'stream';
    }
    console.log(`${i}. ${type}`);
}
