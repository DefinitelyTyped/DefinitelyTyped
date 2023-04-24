import pdf = require('pdf-thumbnail');

const buf: Buffer = new Buffer('');

pdf(buf); // $ExpectType Promise<ReadableStream>
// @ts-expect-error
pdf(buf, { unknownOperation: {} });

pdf(buf, { compress: {} }); // $ExpectType Promise<ReadableStream>
pdf(buf, { compress: { type: 'JPEG', quality: 70 } }); // $ExpectType Promise<ReadableStream>
// @ts-expect-error
pdf(buf, { compress: { unknownParam: '' } });

pdf(buf, { crop: { width: 100, height: 100, x: 0, y: 0 } }); // $ExpectType Promise<ReadableStream>
pdf(buf, { crop: { width: 100, height: 100, x: 0, y: 0, ratio: false } }); // $ExpectType Promise<ReadableStream>
// @ts-expect-error
pdf(buf, { crop: { unknownParam: '' } });

pdf(buf, { resize: {} }); // $ExpectType Promise<ReadableStream>
pdf(buf, { resize: { width: 100, height: 100 } }); // $ExpectType Promise<ReadableStream>
// @ts-expect-error
pdf(buf, { resize: { width: '' } });
// @ts-expect-error
pdf(buf, { resize: { unknownParam: '' } });
