import uuid = require('uuid');

let uuidv1: string = uuid.v1();

uuidv1 = uuid.v1({
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678
});

const bufferv1: Array<number> = new Array(32);
uuid.v1(null, bufferv1, 0);
uuid.v1(null, bufferv1, 16);

let uuidv4: string = uuid.v4()

uuidv4 = uuid.v4({
  random: [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
  ]
});

const bufferv4: Array<number> = new Array(32);
uuid.v4(null, bufferv4, 0);
uuid.v4(null, bufferv4, 16);
