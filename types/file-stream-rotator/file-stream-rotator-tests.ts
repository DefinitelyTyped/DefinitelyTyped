import * as fsr from "file-stream-rotator";
import type { WriteStream } from "fs";

const options: fsr.StreamOptions = {
    filename: "test",
    date_format: "YYYYMMDD"
};

// $ExpectType WriteStream
const stream: WriteStream = fsr.getStream(options);
