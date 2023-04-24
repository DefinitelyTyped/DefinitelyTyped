import duplexify = require("duplexify");
import { Readable, Writable, Duplex } from "stream";

declare var readable: Readable;
declare var writable: Writable;

duplexify(writable, readable);
duplexify(writable);
duplexify(undefined, readable);

duplexify.obj();
duplexify.obj(writable);
duplexify.obj(writable, readable);
duplexify.obj(writable, readable, {});

const d: duplexify.Duplexify = duplexify();
d.setReadable(readable);
// @ts-expect-error
d.setReadable();
d.setWritable(writable);
// @ts-expect-error
d.setWritable();
d.cork();
d.uncork();

const f: Duplex = d;
