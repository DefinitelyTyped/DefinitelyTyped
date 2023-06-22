import Pako = require('pako');
import assert = require('assert');

const chunk1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const chunk2 = new Uint8Array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
const chunk3 = new Uint8Array([101, 111, 121, 131, 141, 151, 161, 171, 181, 191]);

const deflate = new Pako.Deflate({ level: 3, strategy: Pako.constants.Z_HUFFMAN_ONLY });

deflate.push(chunk1, false);
deflate.push(chunk3, Pako.constants.Z_PARTIAL_FLUSH);
deflate.push(chunk2, true); // true -> last chunk

if (deflate.err !== Pako.constants.Z_OK) {
    throw new Error(deflate.err.toString());
}

console.log(deflate.result);

const arr: Uint8Array = Pako.deflate('1234');

const data = '           ';

const deflator = new Pako.Deflate({
    gzip: true,
    header: {
        hcrc: true,
        time: 1234567,
        os: 15,
        name: 'test name',
        comment: 'test comment',
        extra: [4, 5, 6],
    },
});
deflator.push(data, true);

const inflatorString = new Pako.Inflate({ to: 'string' });
inflatorString.push(deflator.result, true);
const resultString: string = inflatorString.result as string;

const inflatorUint8Array = new Pako.Inflate();
inflatorUint8Array.push(deflator.result, true);
const resultUint8Array: Uint8Array = inflatorUint8Array.result as Uint8Array;

assert.strictEqual(inflatorString.err, 0);
assert.strictEqual(inflatorString.result, data);

const header = inflatorString.header;
assert.strictEqual(header?.time, 1234567);
assert.strictEqual(header?.os, 15);
assert.strictEqual(header?.name, 'test name');
