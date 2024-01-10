import PrefixMap from "@rdfjs/prefix-map/PrefixMap.js";
import Serializer from "@rdfjs/serializer-turtle";
import { Quad, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

const prefixes: PrefixMap = {} as any;

const serializer1 = new Serializer();
const serializer2 = new Serializer({});
const serializer3 = new Serializer({
    prefixes,
    baseIRI: "http://example.com/",
    output: [""],
});

const sink: Sink<Stream, EventEmitter> = serializer1;

const stream: Stream = {} as any;
const eventEmitter1: EventEmitter = serializer1.import(stream);
const eventEmitter2: EventEmitter = serializer1.import(stream, {});
const eventEmitter3: EventEmitter = serializer1.import(stream, {
    prefixes,
    baseIRI: "http://example.com/",
    output: [""],
});

const quads: Quad[] = [];
// $ExpectType string
const transformed = serializer1.transform(quads);
