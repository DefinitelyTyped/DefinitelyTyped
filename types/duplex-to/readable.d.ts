import { Readable, Stream } from 'stream';

declare function readable(duplex: Stream): Readable;

export = readable;
