import CombinedStream = require('combined-stream');
import { createReadStream, createWriteStream } from 'fs';

const stream1 = new CombinedStream();

stream1.append(createReadStream('tsconfig.json'));
stream1.append(createReadStream('tslint.json'));
stream1.append(createReadStream('index.d.ts'));

stream1.pipe(createWriteStream('combined.txt'));

const stream2 = CombinedStream.create({
    maxDataSize: 1 << 32,
    pauseStreams: false
});

stream1.destroy();

// should log true
console.log(CombinedStream.isStreamLike(stream2));

stream2.on('data', data => {
    console.log(data);
});

stream2.pipe(createWriteStream('combined.txt'));

stream2.write(CombinedStream.name);

stream2.destroy();

const arrowFunction = (): CombinedStream => {
    const stream3 = new CombinedStream();

    // test next function
    stream3.append(next => {
        stream3.append('hello world');
        next(createReadStream(''));
    });

    // next function with no next
    stream3.append(() => {
        stream3.append('hello again');
    });

    return stream3;
};
