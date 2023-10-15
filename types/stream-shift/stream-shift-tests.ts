import shift = require("stream-shift");
import { createReadStream, createWriteStream } from "fs";

const stream = createReadStream(__filename);

const x: Buffer | string | null = shift(stream);
