import pdf = require('pdf-thumbnail');

const buf: Buffer = new Buffer('');

pdf(buf); // $ExpectType Promise<ReadableStream>
pdf(buf, { unknownOperation: {} }); // $ExpectError

pdf(buf, { compress: {} }); // $ExpectType Promise<ReadableStream>
pdf(buf, { compress: { type: 'JPEG', quality: 70 } }); // $ExpectType Promise<ReadableStream>
pdf(buf, { compress: { unknownParam: '' } }); // $ExpectError

pdf(buf, { crop: { width: 100, height: 100, x: 0, y: 0 } }); // $ExpectType Promise<ReadableStream>
pdf(buf, { crop: { width: 100, height: 100, x: 0, y: 0, ratio: false } }); // $ExpectType Promise<ReadableStream>
pdf(buf, { crop: { unknownParam: '' } }); // $ExpectError

pdf(buf, { resize: {} }); // $ExpectType Promise<ReadableStream>
pdf(buf, { resize: { width: 100, height: 100 } }); // $ExpectType Promise<ReadableStream>
pdf(buf, { resize: { width: '' } }); // $ExpectError
pdf(buf, { resize: { unknownParam: '' } }); // $ExpectError
