import TripleToQuadTransform = require('rdf-transform-triple-to-quad');
import { Stream, NamedNode, DataFactory } from 'rdf-js';

const inputStream: Stream = <any> {};
const graph: NamedNode = <any> {};
const factory: DataFactory = <any> {};

const transformedStream1: Stream = inputStream.pipe(new TripleToQuadTransform());
const transformedStream2: Stream = inputStream.pipe(new TripleToQuadTransform(graph));
const transformedStream3: Stream = inputStream.pipe(new TripleToQuadTransform(graph, { factory }));
