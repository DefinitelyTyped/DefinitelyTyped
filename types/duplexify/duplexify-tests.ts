import duplexify = require("duplexify");
import { Readable, Writable, Duplex } from "stream";

declare var readable: Readable;
declare var writable: Writable;

duplexify(writable, readable);
duplexify(writable);
duplexify(undefined, readable);

const d: duplexify.Duplexify = duplexify();
d.setReadable(readable);
d.setReadable(); // $ExpectError
d.setWritable(writable);
d.setWritable(); // $ExpectError
const f: Duplex = d;
