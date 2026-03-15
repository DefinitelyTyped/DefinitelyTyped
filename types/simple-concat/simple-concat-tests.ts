import concat = require("simple-concat");
import { Readable } from "stream";

const readable = new Readable();

// $ExpectType void
concat(readable, (err, data) => {
    if (err) throw err;
    const buf: Buffer = data;
});

// @ts-expect-error - callback is required
concat(readable);
