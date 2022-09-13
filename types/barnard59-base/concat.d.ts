import { Readable } from 'readable-stream';
import { Stream } from 'stream';

declare class ConcatStream extends Readable {
    streams: Stream[];
    objectMode: boolean;
}

export function object(...streams: Stream[]): ConcatStream;

interface Factory {
    (...streams: Stream[]): ConcatStream;
    object: typeof object;
}

declare const factory: Factory;

export default factory;
