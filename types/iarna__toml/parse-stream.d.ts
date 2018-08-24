/// <reference types="node" />

import { Readable, Transform } from "stream";

/** Given a readable stream, parse it as it feeds us data. Return a promise of the resulting object. */
declare function parseStream(readable: Readable): Promise<Record<string, any>>;
/** Returns a transform stream in object mode. When it completes, emit the resulting object. Only one object will ever be emitted. */
declare function parseStream(): Transform;
export = parseStream;
