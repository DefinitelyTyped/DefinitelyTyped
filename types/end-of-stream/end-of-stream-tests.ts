import * as eos from "end-of-stream";

declare const readableStream: NodeJS.ReadableStream;
declare const writableStream: NodeJS.WritableStream;

declare const callback: (error: Error | undefined | null) => void;

eos(readableStream);
eos(readableStream, callback);
eos(readableStream, { readable: true });
eos(readableStream, { readable: 1 }); // $ExpectError
eos(readableStream, { writable: true });
eos(readableStream, { writable: 1 }); // $ExpectError
eos(readableStream, { error: true });
eos(readableStream, { error: 1 }); // $ExpectError
eos(readableStream, { foo: true }); // $ExpectError
eos(readableStream, { readable: true }, callback);
eos(writableStream);
eos(writableStream, callback);
eos(writableStream, { readable: true });
eos(writableStream, { readable: 1 }); // $ExpectError
eos(writableStream, { writable: true });
eos(writableStream, { writable: 1 }); // $ExpectError
eos(writableStream, { error: true });
eos(writableStream, { error: 1 }); // $ExpectError
eos(writableStream, { foo: true }); // $ExpectError
eos(writableStream, { readable: true }, callback);
