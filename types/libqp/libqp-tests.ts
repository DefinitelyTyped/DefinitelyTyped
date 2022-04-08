import * as libqp from "libqp";
import { Readable, Writable } from "stream";

const encodeText = "jõgeva";
const encoded = libqp.encode(encodeText);
console.log(libqp.encode(encodeText));

const decodeText =
`This string contains quoted printables for the various ranges of utf-8.
=31=32=33=34
two byte /=[CDcd][0-9A-Fa-f]/=c2=a9
three byte /=[Ee][0-9A-Fa-f]/=e1=99=ad
four byte /=[Ff][0-7]/=f0=90=8d=88
`;

const body = libqp.decode(decodeText);

const wrapped = libqp.wrap(`abc ${encoded}`, 10);

const encoder = new libqp.Encoder();
const decoder = new libqp.Decoder();

const buffer = Buffer.from(encodeText);

const readable = new Readable();
readable._read = () => {}; // _read is required but you can noop it
readable.push(buffer);
readable.push(null);

const writable = new Writable({
    write(chunk, _encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

readable.pipe(encoder);
encoder.pipe(decoder);
decoder.pipe(writable);
