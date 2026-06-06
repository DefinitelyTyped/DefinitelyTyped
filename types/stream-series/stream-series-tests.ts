import { Duplex as Stream } from "node:stream";
import series from "stream-series";

const stream1 = new Stream();
const stream2 = new Stream();
const stream3 = new Stream();

// $ExpectType ReadWriteStream
series(stream1, stream3, stream2);

// $ExpectType ReadWriteStream
series([stream1, stream3, stream2]);
