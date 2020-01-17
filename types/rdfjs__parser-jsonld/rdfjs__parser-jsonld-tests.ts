import Parser = require('@rdfjs/parser-jsonld');
import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Sink, Stream, BaseQuad } from 'rdf-js';
import { EventEmitter } from 'events';

const baseIRI = '';
const context: Context = {} as any;
const factory: DataFactory = {} as any;
const stream: Stream = {} as any;

const parser1 = new Parser();
const parser2 = new Parser({});
const parser3 = new Parser({ baseIRI, context, factory });

const sink: Sink<EventEmitter, Stream> = parser1;

const eventEmitter1: Stream = parser1.import(stream);
const eventEmitter2: Stream = parser1.import(stream, {});
const eventEmitter3: Stream = parser1.import(stream, { baseIRI, context, factory });

interface SpecializedQuad extends BaseQuad {
    foo: string;
}
const typedStream: Stream<SpecializedQuad> = <any> {};
const typedParser: Parser<SpecializedQuad> = <any> {};
const typedImported: Stream<SpecializedQuad> = typedParser.import(typedStream);
const typedImported1: Stream<SpecializedQuad> = typedParser.import(typedStream, {});
const typedImported2: Stream<SpecializedQuad> = typedParser.import(typedStream, { baseIRI, context, factory });
