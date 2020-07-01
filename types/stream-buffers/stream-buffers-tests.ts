import * as streamBuffers from 'stream-buffers';

// The following are examples from README.md
// https://github.com/samcday/node-stream-buffer

const myWritableStreamBuffer = new streamBuffers.WritableStreamBuffer({
    initialSize: (100 * 1024),   // start at 100 kilobytes.
    incrementAmount: (10 * 1024) // grow by 10 kilobytes each time buffer overflows.
});

const a = streamBuffers.DEFAULT_INITIAL_SIZE;      // (8 * 1024)
const b = streamBuffers.DEFAULT_INCREMENT_AMOUNT;  // (8 * 1024)
const c = streamBuffers.DEFAULT_CHUNK_SIZE;        // (1024)
const d = streamBuffers.DEFAULT_FREQUENCY;         // (1)

const buffer = new Buffer('ASDF');
myWritableStreamBuffer.write('ASDF');
myWritableStreamBuffer.write(buffer);
myWritableStreamBuffer.size();
myWritableStreamBuffer.maxSize();

// Gets all held data as a Buffer.
const contents: Buffer = myWritableStreamBuffer.getContents() as Buffer;

// Gets all held data as a utf8 string.
const stringContents: string = myWritableStreamBuffer.getContentsAsString('utf8') as string;

// Gets first 5 bytes as a Buffer.
const contents2: Buffer = myWritableStreamBuffer.getContents(5) as Buffer;

// Gets first 5 bytes as a utf8 string.
const stringContents2: string = myWritableStreamBuffer.getContentsAsString('utf8', 5) as string;

const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,   // in milliseconds.
    chunkSize: 2048  // in bytes.
});

myReadableStreamBuffer.put('A String', 'utf8');
myReadableStreamBuffer.put(buffer);

myReadableStreamBuffer.on('data', (data) => {
  // streams1.x style data
  // assert.isTrue(data instanceof Buffer);
});

myReadableStreamBuffer.put('the last data this stream will ever see');
myReadableStreamBuffer.stop();

// Test empty buffer
const myWritableEmptyStreamBuffer = new streamBuffers.WritableStreamBuffer();
const emptyContents: boolean = myWritableEmptyStreamBuffer.getContents() as boolean;
const emptyContentsString: boolean = myWritableEmptyStreamBuffer.getContentsAsString() as boolean;
