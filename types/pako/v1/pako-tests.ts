import pako = require("pako");
import * as assert from "assert";

const chunk1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const chunk2 = new Uint8Array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
const chunk3 = new Uint8Array([101, 111, 121, 131, 141, 151, 161, 171, 181, 191]);

const deflate = new pako.Deflate({level: 3, strategy : pako.StrategyValues.Z_HUFFMAN_ONLY});

deflate.push(chunk1, false);
deflate.push(chunk3, pako.FlushValues.Z_PARTIAL_FLUSH);
deflate.push(chunk2, true);  // true -> last chunk

if (deflate.err !== pako.ReturnCodes.Z_OK) {
    throw new Error(deflate.err.toString());
}

console.log(deflate.result);

const str: string = pako.deflate('1234', {to: 'string'});
const arr: Uint8Array = pako.deflate('1234');

const str2: string = pako.inflate('1234', {to: 'string'});
const arr2: Uint8Array = pako.inflate('1234');

const data = '           ';

const deflator = new pako.Deflate({
    gzip: true,
    header: {
        hcrc: true,
        time: 1234567,
        os: 15,
        name: 'test name',
        comment: 'test comment',
        extra: [ 4, 5, 6 ]
    }
});
deflator.push(data, true);

const inflator = new pako.Inflate({ to: 'string' });
inflator.push(deflator.result, true);

assert.strictEqual(inflator.err, 0);
assert.strictEqual(inflator.result, data);

const header = inflator.header;
assert.strictEqual(header?.time, 1234567);
assert.strictEqual(header?.os, 15);
assert.strictEqual(header?.name, 'test name');
