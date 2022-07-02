import toStream = require('buffer-to-stream');
import { Readable } from 'stream';

const fromString: Readable = toStream('foo');
const fromBuffer: Readable = toStream(Buffer.from('foo'));
const withChunkSize: Readable = toStream(Buffer.from('foo'), 30);
