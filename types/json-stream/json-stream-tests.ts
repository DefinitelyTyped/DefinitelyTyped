import * as stream from "node:stream";

import JSONStream = require("json-stream");

(async () => {
    const s1: stream.Transform = JSONStream();
    const s2: stream.Transform = new JSONStream.JSONStream();
})();
