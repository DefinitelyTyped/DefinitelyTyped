import { SinkMap } from "@rdfjs/sink-map";
import { DataFactory, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

export interface Formats {
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
}

export default class implements Formats {
    constructor(arg: { factory: DataFactory });
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
    import(other: Partial<Pick<Formats, "parsers" | "serializers">>): Formats;
}
