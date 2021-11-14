import * as stream from 'readable-stream';
import StreamObject from './StreamObject';

export default class Step extends StreamObject {
    args: unknown[] | Record<string, any>;
    operation: unknown;
    stream: stream.Readable | stream.Writable;
}

export {};
