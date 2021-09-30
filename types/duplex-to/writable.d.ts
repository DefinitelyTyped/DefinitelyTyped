import { Writable, Stream } from 'stream';

declare function writable(duplex: Stream): Writable;

export = writable;
