import TripleToQuadTransform = require('rdf-transform-triple-to-quad');
import { Stream, NamedNode, DataFactory, Sink } from 'rdf-js';
import { Readable } from 'stream';
import { EventEmitter } from 'events';

const inputStream: Stream & Readable = <any> {};
const graph: NamedNode = <any> {};
const factory: DataFactory = <any> {};
const sink: Sink<Stream, Stream> = <any> {};

const transformedStream1: TripleToQuadTransform = inputStream.pipe(new TripleToQuadTransform());
const transformedStream2: Stream = inputStream.pipe(new TripleToQuadTransform(graph));
const transformedStream3: Stream = inputStream.pipe(new TripleToQuadTransform(graph, { factory }));
const emitter: EventEmitter = sink.import(transformedStream1);
