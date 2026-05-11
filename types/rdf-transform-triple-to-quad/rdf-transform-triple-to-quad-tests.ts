import { DataFactory, NamedNode, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";
import TripleToQuadTransform from "rdf-transform-triple-to-quad";
import { Readable } from "stream";

const inputStream: Stream & Readable = <any> {};
const graph: NamedNode = <any> {};
const factory: DataFactory = <any> {};
const sink: Sink<Stream, Stream> = <any> {};

const transformedStream1: TripleToQuadTransform = inputStream.pipe(new TripleToQuadTransform());
const transformedStream2: Stream = inputStream.pipe(new TripleToQuadTransform(graph));
const transformedStreamGraphString: Stream = inputStream.pipe(new TripleToQuadTransform("http://graph.name/"));
const transformedStream3: Stream = inputStream.pipe(new TripleToQuadTransform(graph, { factory }));
const emitter: EventEmitter = sink.import(transformedStream1);
