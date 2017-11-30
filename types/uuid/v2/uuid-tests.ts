import uuid = require('uuid');

let uuidv1: string = uuid.v1();

uuidv1 = uuid.v1({
	node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
	clockseq: 0x1234,
	msecs: new Date('2011-11-01').getTime(),
	nsecs: 5678
});

let bufferv1: number[] = new Array(32);
bufferv1 = uuid.v1(null, bufferv1);
bufferv1 = uuid.v1(null, bufferv1, 16);

let uuidv4: string = uuid.v4();

const randoms = [
	0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
	0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
];
uuidv4 = uuid({ random: randoms });
uuidv4 = uuid({ rng: () => randoms })

let bufferv4: number[] = new Array(32);
bufferv4 = uuid(null, bufferv4);
bufferv4 = uuid(null, bufferv4, 16);

let nodeBufferv4 = Buffer.alloc(32);
nodeBufferv4 = uuid.v4(null, nodeBufferv4);
nodeBufferv4 = uuid.v4(null, nodeBufferv4, 16);
