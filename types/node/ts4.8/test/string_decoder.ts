import { StringDecoder } from 'node:string_decoder';

const buffer = new Buffer('test');
const decoder1 = new StringDecoder();
const decoder2 = new StringDecoder('utf8');
const part1: string = decoder1.write(new Buffer('test'));
const end1: string = decoder1.end();
const part2: string = decoder2.write(new Buffer('test'));
const end2: string = decoder1.end(new Buffer('test'));

const arrayBuffer = new ArrayBuffer(8);
const u8Array = new Uint8Array(arrayBuffer);
u8Array[0] = 0x41;
u8Array[1] = 0x41;
u8Array[2] = 0x41;
u8Array[3] = 0x41;
u8Array[4] = 0x41;
u8Array[5] = 0x41;
u8Array[6] = 0x41;
u8Array[7] = 0x41;

const decoder = new StringDecoder();

decoder.write(u8Array);
decoder.write(new Int8Array(arrayBuffer));
decoder.write(new Uint8ClampedArray(arrayBuffer));
decoder.write(new Uint16Array(arrayBuffer));
decoder.write(new Int16Array(arrayBuffer));
decoder.write(new Uint32Array(arrayBuffer));
decoder.write(new Int32Array(arrayBuffer));
decoder.write(new BigUint64Array(arrayBuffer));
decoder.write(new BigInt64Array(arrayBuffer));
decoder.write(new Float32Array(arrayBuffer));
decoder.write(new Float64Array(arrayBuffer));
decoder.write(new DataView(arrayBuffer));
decoder.end();
