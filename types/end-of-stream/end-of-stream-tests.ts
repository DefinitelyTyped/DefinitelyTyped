import eos = require("end-of-stream");

declare const readableStream: NodeJS.ReadableStream;
declare const writableStream: NodeJS.WritableStream;

declare const callback: (error: Error | undefined | null) => void;

eos(readableStream);
eos(readableStream, callback);
eos(readableStream, { readable: true });
// @ts-expect-error
eos(readableStream, { readable: 1 });
eos(readableStream, { writable: true });
// @ts-expect-error
eos(readableStream, { writable: 1 });
eos(readableStream, { error: true });
// @ts-expect-error
eos(readableStream, { error: 1 });
// @ts-expect-error
eos(readableStream, { foo: true });
eos(readableStream, { readable: true }, callback);
eos(writableStream);
eos(writableStream, callback);
eos(writableStream, { readable: true });
// @ts-expect-error
eos(writableStream, { readable: 1 });
eos(writableStream, { writable: true });
// @ts-expect-error
eos(writableStream, { writable: 1 });
eos(writableStream, { error: true });
// @ts-expect-error
eos(writableStream, { error: 1 });
// @ts-expect-error
eos(writableStream, { foo: true });
eos(writableStream, { readable: true }, callback);
