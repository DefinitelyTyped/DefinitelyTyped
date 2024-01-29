import { Readable, Transform } from "stream";

import { Record } from "./record";

interface CSVStreamConverterOptions {
    headers?: string[];
    nullValue?: string;
}

type SerializeOptions = CSVStreamConverterOptions;

export class RecordStream<T> extends Transform {
    constructor();

    filter(fn: (record: Record<T>) => boolean): Serializable<T>;
    filter(fn: (record: Record<T>) => boolean): RecordStream<T>;
    map(fn: (record: Record<T>) => Record<T>): Serializable<T>;
    map(fn: (record: Record<T>) => Record<T>): RecordStream<T>;
    recordMapStream(record: Record<T>, noeval?: boolean): Serializable<T>;
}

export class Serializable<T> extends RecordStream<T> {
    stream(type?: string, options?: SerializeOptions): Readable;
}

export class Parsable<T> extends RecordStream<T> {
    stream(type?: string): Readable;
}
