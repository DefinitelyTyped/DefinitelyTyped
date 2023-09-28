import eos = require("then-eos");

declare const readable: NodeJS.ReadableStream;
declare const writable: NodeJS.WritableStream;

// $ExpectType Promise<void>
eos(readable);

// $ExpectType Promise<void>
eos(writable);
