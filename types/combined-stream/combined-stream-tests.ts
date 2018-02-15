import CombinedStream = require("combined-stream");
import { createReadStream, createWriteStream } from "fs";

const stream1 = new CombinedStream();

stream1.append(createReadStream("tsconfig.json"));
stream1.append(createReadStream("tslint.json"));
stream1.append(createReadStream("index.d.ts"));

stream1.pipe(createWriteStream("combined.txt"));

const stream2 = CombinedStream.create({
    maxDataSize: 1 << 32,
    pauseStreams: false,
});

stream1.destroy();

// should log true
console.log(CombinedStream.isStreamLike(stream2));

stream2.on("data", (data) => {
    console.log(data);
});

stream2.pipe(createWriteStream("combined.txt"));

stream2.write(CombinedStream.name);

stream2.destroy();
