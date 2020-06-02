/// <reference types="node" />

import { v1 as uuidv1, v4 as uuidv4, v3 as uuidv3, v5 as uuidv5 } from 'uuid';

const randoms = [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
];

let stringv1: string = uuidv1();
stringv1 = uuidv1({
    node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
    clockseq: 0x1234,
    msecs: new Date('2011-11-01').getTime(),
    nsecs: 5678
});
stringv1 = uuidv1({
    msecs: new Date('2011-11-01').getTime(),
    nsecs: 5678,
    random: randoms,
});
stringv1 = uuidv1({
    msecs: new Date('2011-11-01').getTime(),
    nsecs: 5678,
    rng: () => randoms,
});

let bufferv1 = new Uint8Array(32);
bufferv1 = uuidv1(null, bufferv1);
bufferv1 = uuidv1(undefined, bufferv1, 16);

let stringv4: string = uuidv4();
stringv4 = uuidv4({ random: randoms });
stringv4 = uuidv4({ rng: () => randoms });

let bufferv4: number[] = new Array(32);
bufferv4 = uuidv4(undefined, bufferv4);
bufferv4 = uuidv4(null, bufferv4, 16);

// https://github.com/uuidjs/uuid#quickstart---commonjs-recommended
const MY_NAMESPACE = uuidv4();
const a3: string = uuidv3('hello', MY_NAMESPACE);
const b3: string = uuidv3('world', MY_NAMESPACE);
const c3: Buffer = uuidv3('world', MY_NAMESPACE, Buffer.alloc(16));
const d3: number[] = uuidv3('world', MY_NAMESPACE, [], 0);

const e3: string = uuidv3('hello.example.com', uuidv3.DNS);
const f3: string = uuidv3('http://example.com/hello', uuidv3.URL);

const a5: string = uuidv5('hello', MY_NAMESPACE);
const b5: string = uuidv5('world', MY_NAMESPACE);
const c5: Buffer = uuidv5('world', MY_NAMESPACE, Buffer.alloc(16));
const d5: number[] = uuidv5('world', MY_NAMESPACE, [], 0);

const e5: string = uuidv5('hello.example.com', uuidv5.DNS);
const f5: string = uuidv5('http://example.com/hello', uuidv5.URL);

const g = Buffer.alloc(16);
uuidv4(null, g); // $ExpectType Buffer

class CustomBuffer extends Uint8Array {}
const h = new CustomBuffer(10);
uuidv4(null, h); // $ExpectType CustomBuffer
