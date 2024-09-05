import { StringDecoder } from "node:string_decoder";

const arrayBuffer = new ArrayBuffer(10);
const buffer = new Buffer("test");
const dataView = new DataView(arrayBuffer);
const decoder1 = new StringDecoder();
const decoder2 = new StringDecoder("utf8");

/* string tests */
const part1: string = decoder1.write("test");
const end1: string = decoder1.end();
const part2: string = decoder2.write("test");
const end2: string = decoder2.end("test");

/* Buffer Tests */
const part3: string = decoder1.write(buffer);
const end3: string = decoder1.end();
const part4: string = decoder2.write(buffer);
const end4: string = decoder2.end(buffer);

/* TypedArray tests */
const part5: string = decoder1.write(new Int8Array(10));
const end5: string = decoder1.end();
const part6: string = decoder2.write(new Int8Array(10));
const end6: string = decoder2.end(new Int8Array(10));
const part7: string = decoder1.write(new Uint8Array(10));
const end7: string = decoder1.end();
const part8: string = decoder2.write(new Uint8Array(10));
const end8: string = decoder2.end(new Uint8Array(10));

/* DataView Tests */
const part9: string = decoder1.write(dataView);
const end9: string = decoder1.end();
const part10: string = decoder2.write(dataView);
const end10: string = decoder2.end(dataView);
