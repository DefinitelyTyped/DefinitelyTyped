import Serializer from "@rdfjs/serializer-jsonld-ext";
import { Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";
import { Context } from "jsonld/jsonld-spec";

const context: Context = {} as any;
const stream: Stream = {} as any;

const serializer1 = new Serializer();
const serializer2 = new Serializer({});
const serializer3 = new Serializer({
    context,
    compact: true,
    encoding: "string",
    flatten: true,
    frame: true,
    skipContext: true,
    prettyPrint: false,
});
const serializer4: Serializer = new Serializer({ encoding: "object" });

const sink: Sink<Stream, EventEmitter> = serializer1;

const eventEmitter1: EventEmitter = serializer1.import(stream);
const eventEmitter2: EventEmitter = serializer1.import(stream, {});
const eventEmitter3: EventEmitter = serializer1.import(stream, {
    context,
    compact: true,
    encoding: "string",
    flatten: true,
    frame: true,
    skipContext: true,
    prettyPrint: false,
});
const eventEmitter4: EventEmitter = serializer1.import(stream, { encoding: "object" });
