import { Writable, Duplex, Transform } from 'stream';

export = emit;

declare function emit<Stream extends Writable | Duplex | Transform>(stream: Stream): Stream;

declare namespace emit {}
