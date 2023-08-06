import { DataFactory, Stream } from '@rdfjs/types';
import { SinkMap } from '@rdfjs/sink-map';
import { EventEmitter } from 'events';

declare class Formats {
    constructor(arg: { factory: DataFactory });
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
    import(other: Partial<Pick<Formats, 'parsers' | 'serializers'>>): Formats;
}

export default Formats;
