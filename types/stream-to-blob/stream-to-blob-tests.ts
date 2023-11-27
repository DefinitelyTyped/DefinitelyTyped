import { Stream } from "node:stream";
import streamToBlob = require("stream-to-blob");

streamToBlob(new Stream.Readable(), "application/pdf"); // $ExpectType Promise<Blob>
streamToBlob(new Stream.Readable(), null); // $ExpectType Promise<Blob>
streamToBlob(new Stream.Readable(), undefined); // $ExpectType Promise<Blob>
streamToBlob(new Stream.Readable()); // $ExpectType Promise<Blob>

// @ts-expect-error
streamToBlob(new Stream.Readable(), 4);

// @ts-expect-error
streamToBlob(new Stream.Readable(), true);

// @ts-expect-error
streamToBlob();

// @ts-expect-error
streamToBlob(null);

// @ts-expect-error
streamToBlob(undefined);

// @ts-expect-error
streamToBlob("");

// @ts-expect-error
streamToBlob(0);

// @ts-expect-error
streamToBlob(true);
